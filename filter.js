import dotenv from 'dotenv';
import { AzureOpenAI } from 'openai';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { createRequire } from 'module';
import { exec } from 'child_process';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');
import * as cheerio from 'cheerio';
import scrape from 'website-scraper';

dotenv.config({ override: true });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasAzure = !!(process.env.API_KEY && process.env.ENDPOINT && process.env.DEPLOYMENT_NAME && process.env.API_VERSION);
if (!hasAzure) {
  console.error('No Azure OpenAI credentials found in server .env. Set API_KEY, ENDPOINT, DEPLOYMENT_NAME, and API_VERSION. Server will exit.');
  process.exit(1);
}

// ─── Image Generation Config ──────────────────────────────────────────────────
const IMAGE_DEPLOYMENT = process.env.IMAGE_DEPLOYMENT_NAME || 'gpt-image-2';
const IMAGE_API_VERSION = process.env.IMAGE_API_VERSION || process.env.API_VERSION || '2025-04-01-preview';
const IMAGES_DIR = path.join(__dirname, 'generated-images');
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

const PUBLIC_PDFS_DIR = path.join(__dirname, 'public-pdfs');
if (!fs.existsSync(PUBLIC_PDFS_DIR)) {
  fs.mkdirSync(PUBLIC_PDFS_DIR, { recursive: true });
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function hasProfanity(text) {
  const PROHIBITED = ['hack', 'steal', 'kill', 'bomb', 'terror', 'illegal', 'porn'];
  const n = normalize(text);
  return PROHIBITED.some(w => n.includes(w));
}

function isSpamish(text) {
  if (!text) return false;
  if ((text.match(/https?:\/\//g) || []).length > 3) return true;
  if (/([a-z])\1{7,}/i.test(text)) return true;
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= 3 && text.length < 40 && /plz|fast|urgent|free/i.test(text)) return true;
  return false;
}

function getImageMediaType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
  };
  return types[ext] || 'image/jpeg';
}

async function scrapeUrl(url) {
  const tempDir = path.join(__dirname, `temp_scrape_${Date.now()}_${Math.floor(Math.random() * 10000)}`);
  try {
    console.log(`[scraper] Fetching webpage content from URL using website-scraper: ${url}`);

    const options = {
      urls: [url],
      directory: tempDir,
      sources: [], // Don't download images, css, etc to speed up
      request: {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
        }
      }
    };

    const result = await scrape(options);
    if (!result || result.length === 0) throw new Error("No result from website-scraper");

    const html = result[0].text;
    const $ = cheerio.load(html);

    // Remove unwanted scripts, styles, header, nav, footer, etc.
    $('script, style, noscript, iframe, svg, head, meta, link, header, footer, nav').remove();

    const title = $('title').text().trim() || 'No Title';
    const text = $('body').text().replace(/\s+/g, ' ').trim();

    console.log(`[scraper] Successfully scraped "${title}" from ${url} (length: ${text.length} chars)`);
    return {
      url,
      title,
      text: text.slice(0, 10000) // limit text size per page to 10k characters
    };
  } catch (err) {
    console.warn(`[scraper] Failed to scrape URL ${url}:`, err.message);
    return {
      url,
      title: 'Failed to scrape',
      text: `Error: ${err.message}`
    };
  } finally {
    try {
      await fsPromises.rm(tempDir, { recursive: true, force: true });
    } catch (e) {
      // ignore cleanup errors
    }
  }
}

async function detectAndScrapeUrls(text) {
  if (!text || typeof text !== 'string') return '';

  const urlRegex = /https?:\/\/[^\s\)\],]+/gi;
  const urls = [...new Set(text.match(urlRegex) || [])];

  if (urls.length === 0) return '';

  console.log(`[scraper] Detected ${urls.length} link(s) in prompt for scraping:`, urls);
  const results = await Promise.all(urls.map(url => scrapeUrl(url)));

  let notes = '\n\nWEBPAGE REFERENCE CONTENT ATTACHED FROM LINKS:';
  results.forEach((res, idx) => {
    notes += `\n\n--- WEBPAGE #${idx + 1} (${res.url}) ---\nTitle: ${res.title}\nContent:\n${res.text}\n--- END WEBPAGE #${idx + 1} ---`;
  });

  notes += '\n\nCRITICAL NAVIGATION RULE: When building the website, if it is a single-page application (one page), clicking on navbar links MUST smoothly scroll the page to that section. If it is a multi-page application, clicking on navbar links MUST route to the respective pages.';

  return notes;
}

// ─── TODO #3: Robust JSON parser ─────────────────────────────────────────────
// Handles: wrapped ```json blocks, partial responses, trailing commas,
// extra text before/after JSON, single-quoted strings, unquoted keys.

function parseJson(raw) {
  if (!raw || typeof raw !== 'string') throw new Error('Empty LLM response');

  // Step 1: strip markdown code fences
  let cleaned = raw.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();

  // Step 2: extract the first complete {...} block (handles stray text around JSON)
  const jsonStart = cleaned.indexOf('{');
  const jsonEnd = cleaned.lastIndexOf('}');
  if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
    cleaned = cleaned.slice(jsonStart, jsonEnd + 1);
  }

  // Step 3: fix common LLM JSON mistakes
  cleaned = cleaned.replace(/,\s*([}\]])/g, '$1');                              // trailing commas
  cleaned = cleaned.replace(/([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g, '$1"$2":'); // unquoted keys
  cleaned = cleaned.replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, '"$1"');            // single quotes

  try {
    return JSON.parse(cleaned);
  } catch (firstErr) {
    // Step 4: last-resort line-by-line truncation with brace closing
    const lines = cleaned.split('\n');
    for (let i = lines.length; i > 0; i--) {
      try {

        const partial = lines.slice(0, i).join('\n');
        const openBraces = (partial.match(/{/g) || []).length - (partial.match(/}/g) || []).length;
        const openBrackets = (partial.match(/\[/g) || []).length - (partial.match(/]/g) || []).length;
        const closed = partial + ']'.repeat(Math.max(0, openBrackets)) + '}'.repeat(Math.max(0, openBraces));
        return JSON.parse(closed);
      } catch {
        continue;
      }
    }
    throw new Error(`Could not parse LLM JSON: ${firstErr.message}`);
  }
}

// ─── System Prompts ───────────────────────────────────────────────────────────

const SYSTEM_PROMPT_TEXT = `You are a prompt quality and safety filter for an AI-powered web application builder. Your job is to analyze user prompts BEFORE they are sent to the code generation LLM.

Analyze the given prompt and return ONLY a valid JSON object with this exact structure:
{
  "verdict": "PASS" | "FAIL" | "WARN",
  "safety_score": 0-100,
  "clarity_score": 0-100,
  "relevance_score": 0-100,
  "overall_score": 0-100,
  "flags": [],
  "issues_summary": "one sentence summary of main issues, or empty string if none",
  "improved_prompt": "rewritten improved version of the prompt if needed, or empty string if prompt is already good",
  "improved_prompt_options": [],
  "clarifying_question": "If you do not fully understand what to build, if the request is ambiguous, or if clarity is < 70, adopt a helpful, conversational AI agent persona (e.g., 'Hello! What would you like me to build for you today?') and ask a specific question to clarify what the user wants. Otherwise empty string.",
  "clarifying_options": ["If you are asking a multiple-choice question, provide 2-3 clickable options formatted as the user's reply. If you are asking the user to type open-ended details like their name, bio, or specific features, this MUST be an empty array []."],
  "explanation": "2-3 sentence explanation of the verdict and what was found",
  "can_proceed": true | false
}

Scoring guide:
- safety_score: 100=fully safe, 0=dangerous/harmful/illegal content. Any request for hacking, credentials stealing, profanity, or illegal acts must score < 50.
- clarity_score: 100=perfectly clear specific request of WHAT to build including content details, 0=completely vague. 
  CRITICAL CLARITY RULES:
  1. If the prompt asks for a generic app (e.g., "a portfolio", "an e-commerce site") but lacks specific content details (e.g., name, profession, products, brand name), clarity_score MUST be < 70 so you can ask a clarifying question.
  2. If the input contains ONLY code snippets or random text without explicit instructions on what web app/UI to build, clarity_score MUST be < 50, verdict must be FAIL, and you must ask for clarification on what UI/app to build using that code.
- relevance_score: 100=directly relevant to web/app building, 0=totally off-topic
- overall_score: weighted average (safety 40%, clarity 35%, relevance 25%)
- verdict: PASS if overall>=70 and safety>=80, WARN if overall>=50 or safety>=60, FAIL otherwise.
- can_proceed: true only if verdict is PASS and clarifying_question is empty string. If you ask a clarifying question, can_proceed MUST be false.
- flags: array of short labels from: ["vague","offensive","off-topic","spam","incomplete","malformed","harmful","ambiguous","duplicate","too-broad"]
- improved_prompt: provide only if clarity_score < 70, otherwise empty string
- improved_prompt_options: provide up to 3 concise rewritten prompt variants (short strings) when clarity_score < 80; otherwise empty array

Return ONLY the JSON. No markdown, no backticks, no explanation outside JSON.`;

const SYSTEM_PROMPT_IMAGE = `You are an AI assistant that analyzes images and user instructions related to those images for a web application builder.

When given an image and instructions, analyze the image content and the user's requirements.

Return ONLY a valid JSON object with this exact structure:
{
  "verdict": "PASS" | "FAIL" | "WARN",
  "safety_score": 0-100,
  "clarity_score": 0-100,
  "relevance_score": 0-100,
  "overall_score": 0-100,
  "flags": [],
  "issues_summary": "one sentence summary of image/instruction issues, or empty string if none",
  "improved_prompt": "rewritten improved version of the instructions if needed, or empty string if already good",
  "improved_prompt_options": [],
  "clarifying_question": "If you do not fully understand what to build, if the request is ambiguous, or if clarity is < 70, adopt a helpful, conversational AI agent persona (e.g., 'Hello! What would you like me to build for you today?') and ask a specific question to clarify what the user wants. Otherwise empty string.",
  "clarifying_options": ["If you are asking a multiple-choice question, provide 2-3 clickable options formatted as the user's reply. If you are asking the user to type open-ended details like their name, bio, or specific features, this MUST be an empty array []."],
  "explanation": "2-3 sentence explanation of the verdict and image analysis",
  "image_analysis": "brief description of what the image contains and its relevance",
  "can_proceed": true | false
}

Scoring guide:
- safety_score: 100=fully safe, 0=dangerous/harmful/illegal content. Any request for hacking, credentials stealing, profanity, or illegal acts must score < 50.
- clarity_score: 100=perfectly clear specific request of WHAT to build including content details, 0=completely vague. 
  CRITICAL CLARITY RULES:
  1. If the prompt asks for a generic app (e.g., "a portfolio", "an e-commerce site") but lacks specific content details (e.g., name, profession, products, brand name), clarity_score MUST be < 70 so you can ask a clarifying question.
  2. If the input contains ONLY code snippets or random text without explicit instructions on what web app/UI to build, clarity_score MUST be < 50, verdict must be FAIL, and you must ask for clarification on what UI/app to build using that code.
- relevance_score: 100=highly relevant to building web apps, 0=off-topic
- overall_score: weighted average (safety 40%, clarity 35%, relevance 25%)
- verdict: PASS if overall>=70 and safety>=80, WARN if overall>=50 or safety>=60, FAIL otherwise.
- can_proceed: true only if verdict is PASS and clarifying_question is empty string. If you ask a clarifying question, can_proceed MUST be false.

Return ONLY the JSON. No markdown, no backticks, no explanation outside JSON.`;

// ─── TODO #1 & #2: Updated SYSTEM_PROMPT_PLAN ────────────────────────────────
// Forces specific marketing/product sections, richer content hints,
// prevents generic/vague plans, infers project type from context.

const SYSTEM_PROMPT_PLAN = `You are an expert web application architect for an AI-powered builder platform.

CRITICAL CONSTRAINTS:
For any project, the "tech_stack" MUST strictly have:
- "framework" set to "React + Vite"
- "styling" set to "Tailwind CSS"
- "icons" set to "Lucide Icons"
- "font" set to a Google Font name that matches the brand/mood of the project (e.g. "Inter", "Outfit", "Plus Jakarta Sans", "Poppins", "Lora", "Playfair Display", etc. Picked from Google Fonts).

Do NOT generate other frameworks like Next.js, Vue, or HTML. Do NOT generate other styling tools.

Given a user's prompt (and optionally a reference image/screenshot), generate a PAGE PLAN with sections that are SPECIFIC to what the user described. Do NOT use a fixed template — every plan must be unique and tailored to the prompt.

RULES:
1. Read the prompt carefully and generate ONLY the sections that make sense for that specific website/app.
2. Infer the project type, purpose, and audience from the prompt.
3. Section count should match the complexity of the request — a simple landing page may have 4-5 sections, a complex app may have 8-10. Never default to exactly 7.
4. Every section name, description, components, and content_hints must reflect the actual prompt — no generic placeholders.
5. If an image is provided, extract real layout, color, and section ideas from it.
6. color_scheme must be inferred from the prompt context (brand, industry, mood) — not randomly assigned.

SKILLS TO APPLY:
When generating this plan, you MUST act as if you possess the following Agent Skills and apply them to the architecture:
- frontend-design: Guarantee premium, high-quality, modern UI aesthetics with proper spacing, typography, and color theory.
- vercel-react-best-practices: Follow strict React performance and architecture guidelines, utilizing Next.js/Vite patterns.
- agent-browser: Ensure the application is fully accessible and easily testable by automated browser agents.
- microsoft-foundry: Structure the application to be easily deployable and scalable on modern cloud infrastructure.
- find-skills: Design modular components that can easily integrate with future external APIs and capabilities.

Return ONLY a valid JSON object with this structure:
{
  "project_title": "specific title based on the prompt",
  "project_type": "landing_page" | "dashboard" | "web_app" | "portfolio" | "ecommerce" | "blog" | "other",
  "tech_stack": {
    "framework": "React + Vite",
    "styling": "Tailwind CSS",
    "icons": "Lucide Icons",
    "font": "Google Font name picked for the project (e.g. 'Inter', 'Outfit', etc.)"
  },
  "color_scheme": {
    "primary": "#hex",
    "secondary": "#hex",
    "accent": "#hex",
    "background": "#hex",
    "text": "#hex"
  },
  "sections": [
    {
      "id": "snake_case_id",
      "name": "Section Name",
      "type": "navbar | hero | features | about | team | pricing | testimonials | faq | contact | footer | gallery | blog | cta | stats | sidebar | product_grid | custom",
      "order": 1,
      "description": "What this section contains, specific to the prompt",
      "components": ["ComponentName1", "ComponentName2", "ComponentName3"],
      "content_hints": {
        "heading": "suggested heading text relevant to the project",
        "subheading": "suggested subheading",
        "cta_text": "button label if applicable",
        "items": ["specific items relevant to this section"]
      },
      "design_notes": "layout and style notes specific to this section"
    }
  ],
  "global_design_notes": "overall design direction inferred from the prompt",
  "responsive": true,
  "estimated_complexity": "simple | moderate | complex",
  "suggested_file_structure": ["src/components/SectionName.jsx"],
  "summary": "2-3 sentences describing exactly what will be built",
  "logo_url": "logo image URL if generated or requested, or null"
}

Return ONLY the JSON. No markdown, no backticks, no text outside JSON.`;

// ─── Sub-Classification System Prompt ─────────────────────────────────────────

const SYSTEM_PROMPT_SUBCLASSIFY = `You are an expert UI/UX architect for an AI-powered web builder. Given a structured page plan with sections, produce a DETAILED sub-classification breaking EVERY section into columns, zones, or layout blocks.

CRITICAL RULES:
1. Sub-classify EVERY section in the plan — do not skip any.
2. navbar MUST have exactly 3 columns: brand/logo, navigation links, and actions/CTA — give each a descriptive, purpose-driven name.
3. hero: 2-3 zones (content/headline, visual/media, CTA/action).
4. features: 3-6 individual feature items, each with an emoji icon, title, and one-line description.
5. pricing: 2-4 pricing tiers with name, price, key features.
6. testimonials: 2-4 testimonial cards with person name, role, quote.
7. footer: 3-4 columns (brand info, product links, company links, legal/social).
8. contact: 2-3 zones (form, contact info, map/social).
9. For ANY other section type, break into 2-4 logical columns or zones.
10. Column/zone names MUST be specific and descriptive (e.g., "Brand Identity", "Social Proof Strip") — NEVER use "Column 1", "Zone A", or any generic label.
11. Each column MUST list its real sub-components and have a clear role description.

Return ONLY a valid JSON object:
{
  "sections": [
    {
      "section_id": "must_match_plan_section_id",
      "section_name": "Display Name",
      "layout_type": "columns | zones | grid | stack",
      "columns": [
        {
          "position": 1,
          "name": "Descriptive Purpose-Driven Name",
          "role": "What this column/zone contains and its purpose",
          "width_hint": "percentage or flex hint (e.g. 25%, auto)",
          "components": ["SpecificComponent1", "SpecificComponent2"],
          "content": {
            "heading": "suggested text if applicable",
            "items": ["specific content items"]
          }
        }
      ]
    }
  ]
}

Return ONLY the JSON. No markdown, no backticks, no explanation outside JSON.`;

// ─── Code Generation System Prompt ────────────────────────────────────────────

const SYSTEM_PROMPT_FILE_GEN = `You are an expert front-end engineer for an AI-powered web builder. Given a structured page plan (with sections, components, color scheme, tech stack), a sub-classification (column/zone breakdown for every section), and a target filename, generate PRODUCTION-QUALITY code ONLY for the requested file.

SKILLS TO APPLY:
When writing code, you MUST apply the following Agent Skills:
- frontend-design: Guarantee premium, high-quality, modern UI aesthetics.
- vercel-react-best-practices: Follow strict React performance guidelines. Ensure clean component structure.
- agent-browser: Ensure semantic HTML.
- find-skills: Build highly modular React components.
(CRITICAL: Keep the overall code concise and avoid over-engineering to prevent token limits from cutting off the response.)

CRITICAL RULES:
1. Generate ONLY the raw source code content for the requested file. Do NOT wrap it in JSON, markdown code blocks, or any explaining text. Return ONLY the raw file content.
2. If index.html is requested:
   - Must use semantic HTML5: <header>, <nav>, <main>, <section>, <footer>.
   - Every section from the plan must appear in the HTML with its correct id attribute.
   - Use content from content_hints (headings, subheadings, cta_text, items) as REAL text.
3. If styles.css is requested:
   - Use the plan's EXACT color_scheme values as CSS custom properties (--primary, --secondary, --accent, --bg, --text).
4. If App.jsx is requested:
   - UNDERSTAND FIRST & ACT SECOND (MANDATORY CHAIN-OF-THOUGHT): Before generating any imports or React code, you MUST generate a complete JavaScript block comment (/* ... */) at the very top of the file. Inside this block comment, write:
     * "UNDERSTANDING": Detailed breakdown of what is being built based on the structured plan and user prompt.
     * "PRESERVATION CHECKLIST": List all sections, layouts, styles, and choices from the plan that must be fully implemented.
     * "CHANGE PLAN": Logical step-by-step checklist of how you will write the file.
     * "LUCIDE CONSTRAINT": MANDATORY: Lucide Icons does NOT contain brand or social media icons (such as \`Facebook\`, \`Twitter\`, \`Instagram\`, \`LinkedIn\`, \`GitHub\`, \`Github\`, \`GithubIcon\`, \`YouTube\`, etc.). To render social media links, either use custom inline SVG paths for those brands or use generic Lucide icons (like \`Share2\`, \`Globe\`, \`Link\`, \`Mail\`, \`MessageSquare\`). ABSOLUTELY DO NOT import any brand or social media icons from \`lucide-react\` as they will cause fatal runtime import errors. If you need a Github icon, use an SVG path or use \`Globe\`.
     * "THIRD-PARTY PACKAGES": You may import popular third-party React npm packages (such as \`react-icons\` (e.g. \`import { FaReact } from 'react-icons/fa'\`), \`framer-motion\`, etc.) if needed or if the user requests them. The platform will automatically install these packages in the background when your imports are detected. For normal icons, still prefer \`lucide-react\` but use others if the user explicitly requests them or for specific brand icons.
     * "NAME COLLISION WARNING": NEVER name your custom helper components the exact same name as a Lucide icon you import. If you define a custom component named \`LineChart\`, \`BarChart\`, \`PieChart\`, or \`AreaChart\`, you MUST rename the Lucide imports (e.g. \`import { LineChart as LineChartIcon, BarChart as BarChartIcon } from 'lucide-react'\`) to avoid fatal "Identifier has already been declared" compiler errors.
     This comment block is critical for reasoning. Do not omit it. Make sure it is valid JavaScript comment format (/* ... */) so it compiles cleanly.
   - Must generate a COMPLETE, single-file React component.
   - The project uses the fixed tech stack: React + Vite + Tailwind CSS.
   - Must use Lucide Icons from the \`lucide-react\` package for ALL icons (e.g. \`import { Search, ArrowRight, Menu, X, Star } from 'lucide-react'\`). Ensure all imported icons are valid. Do NOT use generic emojis or other libraries.
   - Use the dynamically selected Google Font specified in the plan (under \`tech_stack.font\`) for styling direction. The preview system will load this Google Font and configure it as the default sans-serif font in Tailwind config.
   - Use Tailwind CSS utility classes for styling. Do NOT use external CSS files.
   - Every section from the plan must be implemented as a React sub-component within the same file.
   - Include real text from the content_hints.
   - ROUTING STRUCTURE (SINGLE vs MULTI-PAGE):
      * Default (Single-Page): By default, structure the website as a single-page app where all sections are rendered sequentially on the page.
         - CRITICAL SCROLL LOGIC: Navbar links MUST use onClick handlers with \`e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })\`. NEVER use plain \`<a href="#id">\` without a click handler because it causes React routing issues.
         - NO HALLUCINATED LINKS: ONLY render navbar links for sections that actually exist in the \`plan.sections\` array. DO NOT invent links like "Pricing" or "Services" if they aren't part of the data.
      * Multi-Page Exception: If the user prompt explicitly requests a multi-page site, multiple pages, page routing, or sections as separate pages, implement a client-side state-based router inside App.jsx using React state (e.g. \`const [currentPage, setCurrentPage] = useState('home')\`). Render the navbar and footer globally. When \`currentPage\` matches a navbar section (e.g. 'home', 'about', 'services', 'contact'), render only the sections/layout specific to that active page/view. Ensure each view (e.g., Contact page showing contact details, contact form, map, and hours; About page showing detailed team and history; Home page showing hero, features, and main showcase) is fully populated with unique, high-quality, fully-formed content and sections appropriate for that view. Clicking on navbar links must update \`currentPage\` (e.g. \`setCurrentPage('contact')\`) instead of scrolling.
      * Button/CTA Navigation Wiring: All buttons, call-to-actions (CTAs), or links in the hero section or page body (e.g., 'View Projects', 'Contact Me', 'Get Started', 'Shop Now', 'Learn More', etc.) MUST navigate correctly:
        - In Single-Page mode, clicking a button/CTA must smoothly scroll to its target section ID using an onClick handler with \`e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })\`. NEVER use plain \`<a href="#id">\` without a click handler.
        - In Multi-Page mode, clicking a button/CTA must transition to the correct page by updating the state-based router (e.g. \`onClick={() => setCurrentPage('contact')}\`).
      * Mobile/Hamburger Navigation Menu links: If the navbar renders a mobile toggle/hamburger navigation menu (three horizontal lines ☰ menu icon) on mobile viewports:
        - In Single-Page mode, clicking a menu section link MUST scroll smoothly to the target section ID using an onClick handler with \`e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })\`, and close the mobile menu.
        - In Multi-Page mode, clicking a menu section link MUST switch the active page view (e.g. \`onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }}\`) AND close the mobile menu.
        - Ensure clicking a mobile menu link does NOT cause a page reload or default navigation that resets the app.
   - The main export must be \`export default function App() { ... }\` and it must combine all sections/views into a complete page.
   - Design must feel PREMIUM — use modern Tailwind classes, gradients, shadows, responsive layouts.
   - CRITICAL CLICKABLE INTERACTIVE STATES (HOVER/ACTIVE):
      * All buttons, links, cards, tabs, and interactive icons MUST have highly premium hover and active states using smooth transitions (always use \`transition-all duration-200\` or similar).
      * Hover states: apply a subtle scale-up \`hover:scale-[1.02]\`, hover shadows \`hover:shadow-md\` or \`hover:shadow-lg\`, and smooth background/text color shifts.
      * Active/Pressed states: apply a tactile click compression look \`active:scale-[0.98]\` to feel responsive to touch/click.
      * For buttons with arrow icons, animate/move the arrow icon on hover: e.g. using \`group\` on the parent button and \`group-hover:translate-x-1 transition-transform\` on the icon.
5. All code must be COMPLETE and RUNNABLE — no placeholders, no TODO comments, no truncation.
6. If any section in the plan has a "generated_image_url" field, use that URL as the src for the primary banner/hero <img> elements in that section. Do NOT use placeholder images or emojis where real generated images are available.
7. CRITICAL: If a section contains a list or grid of multiple cards/items (e.g., product categories, furniture products, galleries, features, team members), you MUST use the provided generated images. Check if the plan includes an \`item_images\` array inside \`content_hints\`. If \`content_hints.item_images\` exists, map each card to its corresponding unique generated image URL from that array (\`item_images[index]\`). NEVER use picsum.photos, placehold.co, or ANY external image website. DO NOT duplicate image URLs across different items. Every image URL is unique. If you run out of URLs or if a URL is null, DO NOT reuse a previous URL. Instead, omit the image tag entirely or use a solid background color div. Do NOT put raw text directly into the src attribute.
8. CRITICAL: Do NOT use 'Lorem Ipsum' or any generic placeholder text (like 'Lorem ipsum dolor sit amet...') for descriptions, body text, card content, or feature details. Since you are generating production-ready code, you must generate real, high-quality, compelling, context-appropriate marketing and product copy tailored specifically to the user's prompt and the website theme. Write realistic descriptions, detailed features, and copy for all items.
9. CRITICAL: Ensure all JSX attributes are valid and non-empty. Never generate empty curly braces like \`key={}\`, \`src={}\`, or \`className={}\` inside JSX tags. If mapping list items, always use \`key={index}\` or \`key={item}\` with a valid variable name to prevent React compilation errors.
10. If the plan includes a "logo_url" field, you MUST use that URL as the src for the brand logo <img> element inside the navbar/header component (e.g. <img src={plan.logo_url} className="h-8 w-auto mr-2" alt="Logo" />) to show the generated brand logo icon instead of plain text.
11. DOCUMENT / FILE LINKS: If you need to include a link to a PDF, document, or file (e.g. Resume, Portfolio, Brochure), NEVER use \`data:application/pdf;base64,...\` strings. This will crash the React compilation and produce broken files. Instead, use a simple relative path like \`href="/resume.pdf"\` and always add \`target="_blank" rel="noopener noreferrer"\`.
12. TAILWIND DARK MODE & SETTING TOGGLES IMPLEMENTATION:
   - When asked to add dark mode or a dark/light mode toggle:
     * Set the default theme to bright (light) mode unless explicitly asked otherwise.
     * Implement the toggle state inside the component (e.g., \`const [darkMode, setDarkMode] = useState(false)\`).
     * Wrap the entire component content in a wrapper div that conditionally applies the \`dark\` class (e.g., \`className={darkMode ? 'dark' : ''}\`).
     * Also include a \`useEffect\` hook to toggle the \`dark\` class on the document root so that the entire HTML body respects the theme:
       \`useEffect(() => { if (darkMode) { document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark'); } }, [darkMode]);\`
     * Make sure that all components have strong, high-contrast default light mode styles, and use the \`dark:\` modifier for dark mode variants (e.g., \`bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800\`).
12. STYLING, ANIMATION, & CODE SAFETY RULES:
   - **Tailwind Arbitrary Colors**: When implementing custom colors from the design or user request, ALWAYS write them as arbitrary color values (e.g., \`bg-[#1e40af]\`, \`text-[#0f172a]\`) rather than guessing class names like \`bg-primary\` or \`text-brand\` which are not part of Tailwind's default palette.
   - **CSS Transitions**: Stick to standard Tailwind transitions (like \`transition-all duration-300 ease-in-out\`) and standard animations (e.g., \`animate-pulse\`, \`animate-spin\`, \`animate-bounce\`, \`animate-ping\`). Do NOT write custom animations (such as \`animate-fade-in\` or \`animate-slide-up\`) unless they are configured in standard style tags.
   - **Inline SVGs**: For complex logos or brand symbols (e.g. social platforms), write clean inline SVG tags instead of inventing local image paths.
   - **React Safety**: Import React and all hooks cleanly. Always safeguard map structures and lists with optional chaining (e.g., \`items?.map(...)\`). Keep references to browser-specific objects (\`window\`, \`document\`) inside \`useEffect\` hooks to avoid iframe runtime startup crashes.

Return ONLY the raw file content. Do not include markdown code fences (like \`\`\`).`;

// ─── Shared Azure OpenAI caller ───────────────────────────────────────────────

async function callAzureOpenAI(systemPrompt, userMessage, imageBase64 = null, imageMediaType = null, maxTokens = 2000, responseFormat = null) {
  const apiKey = process.env.API_KEY;
  const rawEndpoint = process.env.ENDPOINT || process.env.OPENAI_BASE_URL;
  const deployment = process.env.DEPLOYMENT_NAME;
  const apiVersion = process.env.API_VERSION;

  if (!apiKey || !rawEndpoint || !deployment) throw new Error('Missing Azure OpenAI credentials on server');

  const endpoint = rawEndpoint.replace(/\/openai(\/v\d+|\/deployments)?\/?$/i, '').replace(/\/$/, '');
  const client = new AzureOpenAI({ apiKey, endpoint, deployment, apiVersion });

  let images = [];
  if (Array.isArray(imageBase64)) {
    images = imageBase64;
  } else if (typeof imageBase64 === 'string' && typeof imageMediaType === 'string') {
    images = [{ base64: imageBase64, mediaType: imageMediaType }];
  }

  const userContent = images.length > 0
    ? [
      { type: 'text', text: userMessage },
      ...images.map(img => ({ type: 'image_url', image_url: { url: `data:${img.mediaType};base64,${img.base64}` } }))
    ]
    : userMessage;

  const payload = {
    model: deployment,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userContent },
    ],
    max_completion_tokens: maxTokens,
  };

  if (responseFormat) {
    payload.response_format = responseFormat;
  }

  const resp = await withTimeout(
    client.chat.completions.create(payload),
    60000,
    null
  );

  if (!resp) throw new Error("Azure OpenAI API call timed out");

  return resp.choices?.[0]?.message?.content || '';
}

async function* callAzureOpenAIStream(systemPrompt, userMessage, imageBase64 = null, imageMediaType = null, maxTokens = 4000) {
  const apiKey = process.env.API_KEY;
  const rawEndpoint = process.env.ENDPOINT || process.env.OPENAI_BASE_URL;
  const deployment = process.env.DEPLOYMENT_NAME;
  const apiVersion = process.env.API_VERSION;

  if (!apiKey || !rawEndpoint || !deployment) throw new Error('Missing Azure OpenAI credentials on server');

  const endpoint = rawEndpoint.replace(/\/openai(\/v\d+|\/deployments)?\/?$/i, '').replace(/\/$/, '');
  const client = new AzureOpenAI({ apiKey, endpoint, deployment, apiVersion });

  let images = [];
  if (Array.isArray(imageBase64)) {
    images = imageBase64;
  } else if (typeof imageBase64 === 'string' && typeof imageMediaType === 'string') {
    images = [{ base64: imageBase64, mediaType: imageMediaType }];
  }

  const userContent = images.length > 0
    ? [
      { type: 'text', text: userMessage },
      ...images.map(img => ({ type: 'image_url', image_url: { url: `data:${img.mediaType};base64,${img.base64}` } }))
    ]
    : userMessage;

  const stream = await client.chat.completions.create({
    model: deployment,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userContent },
    ],
    max_completion_tokens: maxTokens,
    stream: true,
  });

  for await (const chunk of stream) {
    const text = chunk.choices?.[0]?.delta?.content || '';
    if (text) yield text;
  }
}

// // ─── Image Generation via gpt-image-2 ─────────────────────────────────────────

function withTimeout(promise, ms, fallback = null) {
  return Promise.race([
    promise,
    new Promise(resolve => setTimeout(() => resolve(fallback), ms)),
  ]);
}

async function callAzureImageGen(imagePrompt, size = '1024x1024') {
  const apiKey = process.env.IMAGE_API_KEY || process.env.API_KEY;
  const rawEndpoint = process.env.IMAGE_ENDPOINT || process.env.ENDPOINT;

  if (!apiKey || !rawEndpoint) throw new Error('Missing Azure OpenAI credentials for image generation');

  const endpoint = rawEndpoint.replace(/\/openai(\/v\d+|\/deployments)?\/?$/i, '').replace(/\/$/, '');
  const client = new AzureOpenAI({
    apiKey,
    endpoint,
    deployment: IMAGE_DEPLOYMENT,
    apiVersion: IMAGE_API_VERSION,
  });

  const result = await client.images.generate({
    model: IMAGE_DEPLOYMENT,
    prompt: imagePrompt,
    n: 1,
    size,
  });

  const imageData = result.data?.[0];
  if (!imageData) throw new Error('No image data in response');

  // Handle base64 response (gpt-image models return b64 by default)
  if (imageData.b64_json) {
    const filename = `${crypto.randomUUID()}.png`;
    const filepath = path.join(IMAGES_DIR, filename);
    fs.writeFileSync(filepath, Buffer.from(imageData.b64_json, 'base64'));
    return `/generated-images/${filename}`;
  }

  // Handle URL response (dall-e models)
  if (imageData.url) {
    try {
      console.log(`[callAzureImageGen] Fetching generated image from external URL: ${imageData.url.slice(0, 100)}...`);
      const response = await fetch(imageData.url);
      if (!response.ok) throw new Error(`Failed to fetch image from URL: ${response.statusText}`);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filename = `${crypto.randomUUID()}.png`;
      const filepath = path.join(IMAGES_DIR, filename);
      fs.writeFileSync(filepath, buffer);
      console.log(`[callAzureImageGen] Downloaded image and saved locally to: /generated-images/${filename}`);
      return `/generated-images/${filename}`;
    } catch (err) {
      console.error('[callAzureImageGen] Failed to download generated image from external URL:', err.message);
      // Fallback to returning the raw URL if download fails
      return imageData.url;
    }
  }

  throw new Error('Unexpected image response format');
}

function autoInstallDependencies(code) {
  try {
    const importRegex = /import\s+.*?\s+from\s+['"]([^.'"][^'"]*)['"]/g;
    let match;
    const packagesToInstall = [];
    while ((match = importRegex.exec(code)) !== null) {
      const pkg = match[1];
      if (pkg && !pkg.startsWith('.') && !pkg.startsWith('/') && !pkg.startsWith('react') && !pkg.startsWith('react-dom') && pkg !== 'lucide-react') {
        let basePkg = pkg;
        if (pkg.startsWith('@')) {
          const parts = pkg.split('/');
          basePkg = parts.slice(0, 2).join('/');
        } else {
          basePkg = pkg.split('/')[0];
        }
        if (!packagesToInstall.includes(basePkg)) {
          packagesToInstall.push(basePkg);
        }
      }
    }

    if (packagesToInstall.length === 0) return;

    const frontendPkgPath = path.join(__dirname, 'prompt-filter-react', 'package.json');
    if (!fs.existsSync(frontendPkgPath)) return;
    
    let pkgJson = JSON.parse(fs.readFileSync(frontendPkgPath, 'utf8'));
    pkgJson.dependencies = pkgJson.dependencies || {};
    
    const missing = packagesToInstall.filter(p => !pkgJson.dependencies[p] && !(pkgJson.devDependencies && pkgJson.devDependencies[p]));
    if (missing.length === 0) return;

    console.log(`[auto-install] Detected missing dependencies: ${missing.join(', ')}`);
    const installCmd = `npm install ${missing.join(' ')}`;
    console.log(`[auto-install] Running "${installCmd}" in prompt-filter-react...`);
    
    exec(installCmd, { cwd: path.join(__dirname, 'prompt-filter-react') }, (error, stdout, stderr) => {
      if (error) {
        console.error(`[auto-install] Installation failed:`, error.message);
        return;
      }
      console.log(`[auto-install] Successfully installed: ${missing.join(', ')}`);
    });
  } catch (err) {
    console.warn('[auto-install] Error checking/installing dependencies:', err.message);
  }
}

function buildSectionImagePrompts(plan) {
  const prompts = [];
  const title = plan.project_title || 'Web Application';
  const projectType = plan.project_type || 'landing_page';
  const colors = plan.color_scheme || {};
  const colorHint = colors.primary
    ? `Color theme inspired by ${colors.primary}${colors.accent ? ` and ${colors.accent}` : ''}.`
    : '';

  // Always generate brand logo first
  prompts.push({
    section_id: 'logo_url',
    prompt: `Clean, minimalist vector brand logo icon for a website named "${title}". Style: modern, flat icon, professional graphic design branding, white background. Strictly no text, no letters, no words in the logo icon.`,
    size: '1024x1024',
  });

  if (!plan.sections || !Array.isArray(plan.sections)) return prompts;

  let sectionBannerCount = 0;
  for (const section of plan.sections) {
    if (prompts.length >= 8) break;

    const hints = section.content_hints || {};
    const heading = hints.heading || section.name || '';
    const desc = section.description || '';

    if (section.type === 'hero' && sectionBannerCount < 3) {
      prompts.push({
        section_id: section.id,
        prompt: `A highly realistic, stunning real-world photograph for a hero banner of a ${projectType} website. It MUST strictly and literally depict the actual real-world subject: "${heading} - ${desc}". ${colorHint} True-to-life, photorealistic, cinematic composition, ultra-high quality. DO NOT generate robots, mascots, 3D renders, or abstract art. Absolutely no text, no typography, no letters, no words in the image.`,
        size: '1536x1024',
      });
      sectionBannerCount++;
    } else if (section.type === 'about' && sectionBannerCount < 3) {
      prompts.push({
        section_id: section.id,
        prompt: `A highly realistic, true-to-life real-world photograph for an "About" section. It MUST strictly and literally depict the actual real-world subject described here: "${desc}". Warm, inviting, photorealistic. ${colorHint} DO NOT generate robots, mascots, 3D renders, or abstract art. No text or typography in the image.`,
        size: '1024x1024',
      });
      sectionBannerCount++;
    } else if (['gallery', 'product_grid', 'features'].includes(section.type)) {
      // Generate one main banner image for the section
      if (sectionBannerCount < 3) {
        prompts.push({
          section_id: section.id,
          prompt: `A highly realistic, photorealistic showcase real-world photograph strictly depicting the exact actual subject: "${heading} - ${desc}". ${colorHint} True-to-life, professional, studio-quality photography. DO NOT generate robots, mascots, 3D renders, or abstract art. No text.`,
          size: '1024x1024',
        });
        sectionBannerCount++;
      }

      // Generate individual images for the items in this section
      const items = hints.items;
      if (Array.isArray(items)) {
        items.forEach((itemName, index) => {
          if (prompts.length >= 8) return; // Limit total images to 8 to avoid massive Azure costs

          let enhancedPrompt = `A highly realistic photograph strictly depicting the exact subject matter described in this text: "${itemName}". Context: This is for a section about "${heading}" (${desc}) on a "${projectType}" website called "${title}". You MUST generate a literal visual representation of the core subject. Ensure the image fits the overall theme of the website. Photorealistic, true-to-life documentary photography style. Do not generate UI elements, buttons, abstract art, robots, or 3D mascots unless the text explicitly describes them. Absolutely no text.`;

          const lowerName = itemName.toLowerCase();
          if (lowerName.includes('sneaker') || lowerName.includes('shoe')) {
            enhancedPrompt = `High-quality, professional studio product photograph of athletic sport running sneakers, modern sports performance shoes, active lifestyle footwear: "${itemName}". ${colorHint} Clean studio lighting, elegant minimalist background, highly detailed, photorealistic. Absolutely no text, no typography, no letters, no words in the image.`;
          } else if (lowerName.includes('handbag') || lowerName.includes('purse') || lowerName.includes('bag')) {
            enhancedPrompt = `High-quality, professional studio product photograph of an elegant luxury women's designer leather handbag, premium stylish fashion purse: "${itemName}". ${colorHint} Soft studio lighting, elegant minimalist background, highly detailed, photorealistic. Absolutely no text, no typography, no letters, no words in the image.`;
          } else if (lowerName.includes('shirt') || lowerName.includes('tshirt') || lowerName.includes('t-shirt') || lowerName.includes('apparel') || lowerName.includes('cotton')) {
            enhancedPrompt = `High-quality, professional studio product photograph of a premium casual shirt, modern stylish fashion apparel, neatly presented or on a hanger/mannequin: "${itemName}". ${colorHint} Crisp studio lighting, clean minimalist background, highly detailed, photorealistic. Absolutely no text, no typography, no letters, no words in the image.`;
          }

          prompts.push({
            section_id: `${section.id}_item_${index}`,
            prompt: enhancedPrompt,
            size: '1024x1024',
          });
        });
      }
    }
  }

  // Apply strict anti-hallucination rule to all generated image prompts
  prompts.forEach(p => {
    p.prompt += " STRICT RULE: You MUST NOT hallucinate under any condition. The image MUST always be strictly and literally related to the requested content and the exact context provided.";
  });

  return prompts;
}

async function generatePlanImages(plan) {
  if (!process.env.IMAGE_DEPLOYMENT_NAME) return {};

  const imagePrompts = buildSectionImagePrompts(plan);
  if (imagePrompts.length === 0) return {};

  console.log(`[image-gen] Generating ${imagePrompts.length} section image(s)...`);
  const results = {};

  const promises = imagePrompts.map(async (item) => {
    try {
      const imageUrl = await withTimeout(
        callAzureImageGen(item.prompt, item.size),
        60000,
        null
      );
      
      if (!imageUrl) throw new Error("Image generation timed out");
      results[item.section_id] = imageUrl;
      console.log(`[image-gen] \u2713 ${item.section_id}: ${imageUrl}`);
    } catch (err) {
      console.error(`[image-gen] \u2717 ${item.section_id}: ${err.message}`);
      // Do NOT throw here, just let this one image fail so the rest can succeed
    }
  });

  await Promise.all(promises);
  return results;
}

// --- Prompt Type Detection ---
function isMarkdownPrompt(text) {
  if (!text) return false;
  // Check for common markdown structures: headings (#), bold (**), lists (- or *), code blocks (```)
  return /(?:^|\n)(#{1,6}\s|\*\s|-\s|\d+\.\s|```)/.test(text) || /\*\*.*\*\*/.test(text) || /\[.*\]\(.*\)/.test(text);
}

function isCodeOnly(text) {
  if (!text) return false;

  // Strip code blocks markdown if present to analyze content
  const cleaned = text.replace(/```[a-z]*\n/gi, '').replace(/```/g, '').trim();

  // Heuristics for code syntax
  const hasBraces = cleaned.includes('{') && cleaned.includes('}');
  const hasSemicolons = (cleaned.match(/;/g) || []).length >= 2;
  const hasParentheses = (cleaned.match(/\(\)/g) || []).length >= 1 || (cleaned.match(/\(.*?\)/g) || []).length >= 2;
  const hasFunctionKeyword = /\b(function|const|let|var|class|import|export|return|def|fn|void|public|private)\b/.test(cleaned);
  const hasOperators = /=>|\+=|-=|\+\+|--|===|!==|==|!=|&&|\|\|/.test(cleaned);

  // If it matches multiple code patterns, it's code
  let codeScore = 0;
  if (hasBraces) codeScore += 2;
  if (hasSemicolons) codeScore += 1;
  if (hasParentheses) codeScore += 1;
  if (hasFunctionKeyword) codeScore += 2;
  if (hasOperators) codeScore += 2;

  const looksLikeCode = codeScore >= 3;

  if (looksLikeCode) {
    // Check if it also has clear natural language instructions to build/create/make/design an app
    const hasInstruction = /\b(build|create|make|design|generate|convert|render|app|website|page|site|ui|screen|portfolio|dashboard|landing|calculator|clone|game)\b/i.test(cleaned);

    // Also check for descriptive sentences (e.g. at least some words in natural order)
    const words = cleaned.split(/\s+/).filter(w => /^[a-zA-Z]{3,}$/.test(w));
    const hasNaturalInstruction = hasInstruction && words.length > 5;

    return !hasNaturalInstruction;
  }

  return false;
}

// ─── Fallback Analysis ────────────────────────────────────────────────────────

function buildFallbackAnalysis(prompt, flags) {
  const safety_score = hasProfanity(prompt) ? 20 : 100 - (isSpamish(prompt) ? 30 : 0);

  let clarity_score;
  let relevance_score;
  let localFlags = [...flags];

  if (isCodeOnly(prompt)) {
    clarity_score = 30;
    relevance_score = 30;
    if (!localFlags.includes('vague')) localFlags.push('vague');
    if (!localFlags.includes('incomplete')) localFlags.push('incomplete');
  } else {
    const wordCount = Math.max(1, prompt.split(/\s+/).filter(w => w.trim().length > 0).length);
    clarity_score = Math.min(100, Math.max(10, Math.round((wordCount / 15) * 100)));
    relevance_score = /app|site|dashboard|react|node|tailwind|login|chart|map/i.test(prompt) ? 90 : 40;
  }

  const overall = Math.round(safety_score * 0.4 + clarity_score * 0.35 + relevance_score * 0.25);
  let verdict = 'FAIL';
  if (overall >= 70 && safety_score >= 80) verdict = 'PASS';
  else if (overall >= 50 || safety_score >= 60) verdict = 'WARN';

  const result = {
    verdict,
    safety_score: Math.max(0, Math.min(100, Math.round(safety_score))),
    clarity_score: Math.max(0, Math.min(100, Math.round(clarity_score))),
    relevance_score: Math.max(0, Math.min(100, Math.round(relevance_score))),
    overall_score: Math.max(0, Math.min(100, overall)),
    flags: localFlags,
    issues_summary: localFlags.length ? `Detected issues: ${localFlags.join(', ')}` : '',
    improved_prompt: '',
    improved_prompt_options: [],
    clarifying_question: '',
    clarifying_options: [],
    explanation: localFlags.length
      ? `Automatic checks flagged: ${localFlags.join(', ')}.`
      : 'No immediate heuristics flagged; use LLM analyzer for full details.',
    can_proceed: verdict === 'PASS',
  };

  if (isCodeOnly(prompt)) {
    result.explanation = "The input contains only code snippets without instructions on what web application or UI component to build.";
    result.clarifying_question = "It looks like you've provided only a code snippet. Please describe the web application or UI component you would like me to build using this code!";
    result.can_proceed = false;
    result.verdict = 'FAIL';
  } else if (result.clarity_score < 70) {
    result.improved_prompt = `Please provide a clear, specific request describing the desired app, features, and tech stack. For example: Build a React + Tailwind todo app with add/delete/complete tasks and a REST API.`;
    result.clarifying_question = "Your request is a bit brief! Could you please provide more specific details about the layout, features, or content you want me to include?";
    result.can_proceed = false;
  }

  return result;
}

// ─── TODO #5: Smart type-aware fallback plan ──────────────────────────────────
// Detects project type from prompt keywords and builds a rich,
// domain-specific section set — never returns a generic 3-section stub.

function buildFallbackPlan(prompt) {
  const p = prompt.toLowerCase();

  const isPortfolio = /portfolio|personal site|my work|showcase/i.test(p);
  const isDashboard = /dashboard|analytics|admin|panel|metrics|stats/i.test(p);
  const isEcommerce = /shop|store|ecommerce|e-commerce|buy|cart|checkout|product/i.test(p);
  const isBlog = /blog|articles|posts|news|magazine/i.test(p);

  const project_type = isPortfolio ? 'portfolio'
    : isDashboard ? 'dashboard'
      : isEcommerce ? 'ecommerce'
        : isBlog ? 'blog'
          : 'landing_page';

  let font = 'Inter';
  if (project_type === 'portfolio') font = 'Outfit';
  else if (project_type === 'dashboard') font = 'Plus Jakarta Sans';
  else if (project_type === 'blog') font = 'Lora';
  else if (project_type === 'ecommerce') font = 'Montserrat';

  const palettes = {
    portfolio: { primary: '#0F172A', secondary: '#1E293B', accent: '#6366F1', background: '#F8FAFC', text: '#0F172A' },
    dashboard: { primary: '#1D4ED8', secondary: '#1E40AF', accent: '#10B981', background: '#F1F5F9', text: '#1E293B' },
    ecommerce: { primary: '#111827', secondary: '#374151', accent: '#F59E0B', background: '#FFFFFF', text: '#111827' },
    blog: { primary: '#1F2937', secondary: '#374151', accent: '#EC4899', background: '#FDF4FF', text: '#1F2937' },
    landing_page: { primary: '#7C3AED', secondary: '#6D28D9', accent: '#F59E0B', background: '#FAFAFA', text: '#111827' },
  };

  const sectionSets = {
    portfolio: [
      { id: 'navbar', name: 'Navigation', type: 'navbar', order: 1, description: 'Minimal sticky nav with name/logo and section links', components: ['LogoName', 'SectionLinks', 'ResumeDownloadButton', 'DarkModeToggle'], content_hints: { heading: '', subheading: '', cta_text: 'Download CV', items: ['About', 'Work', 'Skills', 'Contact'] }, design_notes: 'Transparent on top, frosted glass on scroll' },
      { id: 'hero', name: 'Hero / Intro', type: 'hero', order: 2, description: 'Bold personal intro with role title and CTA buttons', components: ['AnimatedGreeting', 'RoleTitle', 'ShortBio', 'CTAButtons', 'SocialLinks'], content_hints: { heading: "Hi, I'm [Name]", subheading: 'Full Stack Developer & UI/UX Enthusiast', cta_text: 'View My Work', items: [] }, design_notes: 'Large typography, subtle background pattern, staggered fade-in animation' },
      { id: 'about', name: 'About Me', type: 'about', order: 3, description: 'Personal story, background, and values', components: ['ProfilePhoto', 'BioText', 'KeyFacts', 'TechStackIcons'], content_hints: { heading: 'About Me', subheading: 'A little about my background', cta_text: '', items: ['Years of Experience', 'Projects Completed', 'Technologies Used'] }, design_notes: 'Two-column layout: photo left, text right' },
      { id: 'projects', name: 'Projects / Work', type: 'gallery', order: 4, description: 'Showcase of best projects with links', components: ['ProjectCard', 'TechBadges', 'LiveDemoLink', 'GitHubLink', 'FilterTabs'], content_hints: { heading: 'My Work', subheading: 'Selected projects I am proud of', cta_text: 'View All', items: ['Project 1', 'Project 2', 'Project 3', 'Project 4'] }, design_notes: '3-col grid, hover reveals description overlay' },
      { id: 'skills', name: 'Skills', type: 'features', order: 5, description: 'Technical and soft skills grouped by category', components: ['SkillCategory', 'SkillBadge', 'ProficiencyBar'], content_hints: { heading: 'Skills & Tools', subheading: '', cta_text: '', items: ['Frontend: React, Vue, TypeScript', 'Backend: Node.js, Python', 'Tools: Git, Docker, Figma'] }, design_notes: 'Grouped chips or animated progress bars' },
      { id: 'contact', name: 'Contact', type: 'contact', order: 6, description: 'Contact form and social media links', components: ['ContactForm', 'EmailLink', 'SocialIcons', 'LocationBadge'], content_hints: { heading: "Let's Work Together", subheading: 'Open to freelance and full-time opportunities', cta_text: 'Send Message', items: [] }, design_notes: 'Clean centered layout, form with name/email/message fields' },
      { id: 'footer', name: 'Footer', type: 'footer', order: 99, description: 'Minimal footer with copyright', components: ['Copyright', 'BackToTopButton'], content_hints: { heading: '', subheading: '', cta_text: '', items: [] }, design_notes: 'Single line, centered, muted text' },
    ],
    dashboard: [
      { id: 'sidebar', name: 'Sidebar Navigation', type: 'sidebar', order: 1, description: 'Collapsible sidebar with nav links and user profile', components: ['Logo', 'NavItems', 'UserAvatar', 'CollapseToggle', 'LogoutButton'], content_hints: { heading: '', subheading: '', cta_text: '', items: ['Dashboard', 'Analytics', 'Users', 'Reports', 'Settings'] }, design_notes: 'Dark sidebar, icon + label, collapsible on mobile' },
      { id: 'topbar', name: 'Top Bar', type: 'navbar', order: 2, description: 'Header with search, notifications, and user menu', components: ['SearchBar', 'NotificationBell', 'UserDropdown', 'DateRangePicker'], content_hints: { heading: '', subheading: '', cta_text: '', items: [] }, design_notes: 'Light background, sticky, right-aligned actions' },
      { id: 'stats', name: 'KPI Cards', type: 'stats', order: 3, description: 'Key metrics at a glance in card grid', components: ['StatCard', 'TrendBadge', 'SparklineChart', 'PercentageChange'], content_hints: { heading: '', subheading: '', cta_text: '', items: ['Total Users', 'Revenue', 'Conversion Rate', 'Active Sessions'] }, design_notes: '4-column card row, each with icon, number, and trend arrow' },
      { id: 'charts', name: 'Charts & Analytics', type: 'custom', order: 4, description: 'Line and bar charts for trends over time', components: ['LineChart', 'BarChart', 'ChartFilters', 'ExportButton'], content_hints: { heading: 'Analytics Overview', subheading: '', cta_text: 'Export', items: ['Revenue Over Time', 'User Growth', 'Traffic Sources'] }, design_notes: 'Two charts side by side, recharts, responsive' },
      { id: 'data_table', name: 'Data Table', type: 'custom', order: 5, description: 'Sortable filterable table of records', components: ['DataTable', 'SearchFilter', 'Pagination', 'RowActions', 'BulkSelectCheckbox'], content_hints: { heading: 'Recent Activity', subheading: '', cta_text: 'View All', items: ['ID', 'Name', 'Status', 'Date', 'Actions'] }, design_notes: 'Striped rows, sticky header, status badges with color coding' },
      { id: 'footer', name: 'Footer', type: 'footer', order: 99, description: 'Minimal dashboard footer', components: ['Copyright', 'VersionBadge'], content_hints: { heading: '', subheading: '', cta_text: '', items: [] }, design_notes: 'Single row, muted text' },
    ],
    landing_page: [
      { id: 'navbar', name: 'Navigation Bar', type: 'navbar', order: 1, description: 'Marketing nav with logo, links, and CTA', components: ['Logo', 'NavLinks', 'LoginButton', 'GetStartedCTA', 'MobileMenu'], content_hints: { heading: '', subheading: '', cta_text: 'Get Started Free', items: ['Features', 'Pricing', 'About', 'Blog'] }, design_notes: 'Sticky on scroll, transparent-to-white transition' },
      { id: 'hero', name: 'Hero Section', type: 'hero', order: 2, description: 'High-impact headline with product screenshot and CTA', components: ['Headline', 'Subheadline', 'PrimaryCTA', 'SecondaryCTA', 'HeroVisual', 'SocialProofLogos'], content_hints: { heading: 'Build Something Amazing', subheading: 'The fastest way to launch your idea — no code required.', cta_text: 'Start for Free', items: ['Trusted by 10,000+ builders'] }, design_notes: 'Centered layout, gradient background, floating product screenshot' },
      { id: 'features', name: 'Features', type: 'features', order: 3, description: 'Key product features in a grid of cards', components: ['FeatureCard', 'FeatureIcon', 'FeatureTitle', 'FeatureDescription'], content_hints: { heading: 'Everything You Need', subheading: 'Powerful tools to build faster', cta_text: '', items: ['AI-Powered Builder', 'One-Click Deploy', 'Real-Time Preview', 'Team Collaboration', 'Custom Domains', 'Analytics Built-In'] }, design_notes: '3-column grid, icon top, bold title, short description' },
      { id: 'testimonials', name: 'Testimonials', type: 'testimonials', order: 4, description: 'Social proof quotes from real users', components: ['TestimonialCard', 'UserAvatar', 'StarRating', 'CompanyBadge', 'CarouselControls'], content_hints: { heading: 'Loved by Builders', subheading: 'Join thousands of happy users', cta_text: '', items: ['John D. — Cut my dev time in half', 'Sarah K. — Finally shipped my SaaS!', 'Mike R. — The AI suggestions are incredible'] }, design_notes: 'Horizontal carousel or 3-col grid, subtle card shadow' },
      { id: 'pricing', name: 'Pricing', type: 'pricing', order: 5, description: 'Tiered pricing plans with feature comparison', components: ['PricingCard', 'PriceAmount', 'FeatureList', 'CTAButton', 'PopularBadge', 'BillingToggle'], content_hints: { heading: 'Simple, Transparent Pricing', subheading: 'Start free, scale as you grow', cta_text: 'Get Started', items: ['Free — $0/mo: 3 projects', 'Pro — $19/mo: Unlimited projects', 'Enterprise — Custom: SSO + SLAs'] }, design_notes: 'Highlighted center card for popular plan, monthly/annual toggle' },
      { id: 'cta', name: 'Final CTA', type: 'cta', order: 6, description: 'Bottom-of-page conversion push', components: ['Headline', 'CTAButton', 'TrustBadges'], content_hints: { heading: 'Ready to Build?', subheading: 'Start for free. No credit card required.', cta_text: 'Launch Your App', items: [] }, design_notes: 'Full-width gradient banner, centered, large CTA button' },
      { id: 'footer', name: 'Footer', type: 'footer', order: 99, description: 'Full marketing footer with link columns', components: ['Logo', 'FooterLinkColumns', 'SocialIcons', 'Copyright', 'LegalLinks'], content_hints: { heading: '', subheading: '', cta_text: '', items: ['Product: Features, Pricing, Changelog', 'Company: About, Blog, Careers', 'Legal: Privacy, Terms'] }, design_notes: 'Dark background, 4-column layout' },
    ],
    ecommerce: [
      { id: 'navbar', name: 'Store Navigation', type: 'navbar', order: 1, description: 'Store nav with search, cart, and account', components: ['Logo', 'SearchBar', 'CategoryMenu', 'CartIcon', 'AccountButton', 'WishlistIcon'], content_hints: { heading: '', subheading: '', cta_text: '', items: ['Men', 'Women', 'Sale', 'New Arrivals'] }, design_notes: 'Sticky, cart count badge, mobile-friendly' },
      { id: 'hero', name: 'Promo Banner', type: 'hero', order: 2, description: 'Promotional hero banner with seasonal offer', components: ['BannerImage', 'OfferHeadline', 'ShopNowCTA', 'CountdownTimer'], content_hints: { heading: 'Summer Sale — Up to 50% Off', subheading: 'Limited time offer', cta_text: 'Shop Now', items: [] }, design_notes: 'Full-width image with gradient overlay text' },
      { id: 'product_grid', name: 'Product Grid', type: 'product_grid', order: 3, description: 'Browsable product listing with filters', components: ['ProductCard', 'ProductImage', 'Price', 'AddToCartButton', 'WishlistToggle', 'FilterSidebar', 'SortDropdown'], content_hints: { heading: 'Featured Products', subheading: '', cta_text: 'Add to Cart', items: ['Filter by Category', 'Filter by Price', 'Sort by: Newest'] }, design_notes: 'Responsive 4-col grid, hover shows quick-add button' },
      { id: 'cart', name: 'Cart Summary', type: 'custom', order: 4, description: 'Slide-over cart panel', components: ['CartItem', 'QuantitySelector', 'RemoveButton', 'CartTotal', 'CheckoutButton'], content_hints: { heading: 'Your Cart', subheading: '', cta_text: 'Proceed to Checkout', items: [] }, design_notes: 'Slide-in drawer from right side' },
      { id: 'footer', name: 'Footer', type: 'footer', order: 99, description: 'Store footer with links and payment icons', components: ['FooterLinks', 'NewsletterSignup', 'PaymentIcons', 'Copyright'], content_hints: { heading: '', subheading: '', cta_text: 'Subscribe', items: ['Help & FAQ', 'Shipping Policy', 'Returns', 'Contact Us'] }, design_notes: 'Dark footer, payment method icons row' },
    ],
    blog: [
      { id: 'navbar', name: 'Blog Navigation', type: 'navbar', order: 1, description: 'Blog nav with logo and category links', components: ['Logo', 'CategoryLinks', 'SearchIcon', 'SubscribeButton'], content_hints: { heading: '', subheading: '', cta_text: 'Subscribe', items: ['Tech', 'Design', 'Business', 'Life'] }, design_notes: 'Clean minimal nav' },
      { id: 'hero', name: 'Featured Post Hero', type: 'hero', order: 2, description: 'Large featured article at the top', components: ['FeaturedImage', 'CategoryBadge', 'PostTitle', 'AuthorMeta', 'ReadTimeEstimate', 'ReadMoreCTA'], content_hints: { heading: 'Featured Article Title', subheading: 'A compelling excerpt from the article...', cta_text: 'Read More', items: [] }, design_notes: 'Full-width image with gradient overlay and text below' },
      { id: 'post_grid', name: 'Article Grid', type: 'gallery', order: 3, description: 'Grid of recent blog posts', components: ['PostCard', 'PostThumbnail', 'PostTitle', 'AuthorAvatar', 'CategoryTag', 'DateStamp'], content_hints: { heading: 'Latest Articles', subheading: '', cta_text: 'Read More', items: ['Article 1', 'Article 2', 'Article 3', 'Article 4', 'Article 5', 'Article 6'] }, design_notes: '3-column grid, card hover lift effect' },
      { id: 'newsletter', name: 'Newsletter CTA', type: 'cta', order: 4, description: 'Email subscription section', components: ['Headline', 'EmailInput', 'SubscribeButton', 'PrivacyNote'], content_hints: { heading: 'Stay in the Loop', subheading: 'Get the best articles delivered to your inbox weekly', cta_text: 'Subscribe Free', items: [] }, design_notes: 'Centered, colored background band, simple email form' },
      { id: 'footer', name: 'Footer', type: 'footer', order: 99, description: 'Blog footer with social links', components: ['Logo', 'FooterLinks', 'SocialIcons', 'Copyright'], content_hints: { heading: '', subheading: '', cta_text: '', items: [] }, design_notes: 'Minimal, clean' },
    ],
  };

  const sections = sectionSets[project_type] || sectionSets['landing_page'];
  const color_scheme = palettes[project_type] || palettes['landing_page'];

  return {
    project_title: prompt.slice(0, 60) || 'Web Application',
    project_type,
    tech_stack: {
      framework: 'React + Vite',
      styling: 'Tailwind CSS',
      icons: 'Lucide Icons',
      font
    },
    color_scheme,
    sections,
    logo_url: null,
    global_design_notes: project_type === 'portfolio'
      ? 'Dark minimal with bold typography, smooth scroll, staggered fade-in animations.'
      : project_type === 'dashboard'
        ? 'Data-dense, clean hierarchy, sidebar layout, muted backgrounds with accent-colored metrics.'
        : 'Modern marketing design, strong CTAs, social proof, consistent spacing scale, scroll animations.',
    responsive: true,
    estimated_complexity: sections.length > 5 ? 'complex' : 'moderate',
    suggested_file_structure: sections.map(s => `src/components/${s.name.replace(/[\s/]+/g, '')}.jsx`),
    summary: `Smart fallback plan for: "${prompt.slice(0, 100)}". Detected type: ${project_type}. ${sections.length} sections planned.`,
    _fallback: true,
  };
}

// ─── Dynamic Sub-Classification Extractor ─────────────────────────────────────
// Reads each section's ACTUAL components, content_hints, and descriptions
// to build contextual columns — never uses hardcoded template data.

function buildDynamicSubClassification(plan) {
  if (!plan || !Array.isArray(plan.sections)) return { sections: [] };

  // Convert PascalCase/camelCase component names into readable labels
  function humanize(str) {
    return str
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      .replace(/_/g, ' ')
      .trim();
  }

  // Infer layout type from section type
  function inferLayout(type) {
    if (['features', 'gallery', 'stats', 'testimonials', 'pricing', 'product_grid'].includes(type)) return 'grid';
    if (['sidebar'].includes(type)) return 'stack';
    if (['hero', 'cta'].includes(type)) return 'zones';
    return 'columns';
  }

  // Decide column count from section type and data
  function inferColCount(section) {
    const comps = Array.isArray(section.components) ? section.components : [];
    const items = (section.content_hints && Array.isArray(section.content_hints.items)) ? section.content_hints.items : [];
    const type = section.type || 'custom';

    if (['navbar'].includes(type)) return 3;
    if (['hero', 'cta', 'contact', 'about'].includes(type)) return Math.min(3, Math.max(2, comps.length > 4 ? 3 : 2));
    if (['features', 'testimonials', 'pricing'].includes(type)) return Math.max(2, Math.min(4, items.length || 3));
    if (['stats'].includes(type)) return Math.max(2, Math.min(4, items.length || 4));
    if (['footer'].includes(type)) return Math.max(3, Math.min(4, Math.ceil(comps.length / 2)));
    if (['sidebar'].includes(type)) return Math.min(3, Math.max(2, comps.length));
    return Math.max(2, Math.min(3, Math.ceil(comps.length / 2)));
  }

  // Build columns from a section's own data
  function buildColumns(section) {
    const comps = Array.isArray(section.components) ? [...section.components] : [];
    const hints = section.content_hints || {};
    const items = Array.isArray(hints.items) ? hints.items : [];
    const desc = section.description || section.name || '';

    // Edge case: no components at all
    if (comps.length === 0) {
      return [{
        position: 1,
        name: hints.heading || section.name || 'Content',
        role: desc,
        width_hint: '100%',
        components: [section.name ? section.name.replace(/[\s/]+/g, '') : 'ContentBlock'],
        content: { heading: hints.heading || '', items }
      }];
    }

    const colCount = inferColCount(section);
    const perCol = Math.max(1, Math.ceil(comps.length / colCount));
    const columns = [];

    for (let i = 0; i < colCount; i++) {
      const colComps = comps.slice(i * perCol, (i + 1) * perCol);
      // Skip empty trailing columns
      if (colComps.length === 0 && i >= Math.ceil(comps.length / perCol)) break;

      // ── Derive column NAME from actual data ──
      let name;
      // For item-based sections (features, pricing, stats, testimonials), use items
      if (['features', 'pricing', 'stats', 'testimonials'].includes(section.type) && items[i]) {
        // Extract label before separator: "Pro — $19/mo" → "Pro", "Frontend: React" → "Frontend"
        name = items[i].split(/[—:–\-,]/)[0].trim().slice(0, 45);
      } else if (colComps.length > 0) {
        // Use the first component's readable name
        name = humanize(colComps[0]);
      } else {
        name = `${section.name} Area ${i + 1}`;
      }

      // ── Derive column ROLE from the section description + position ──
      let role;
      if (i === 0 && desc) {
        role = desc.slice(0, 100);
      } else if (colComps.length > 0) {
        role = `Contains: ${colComps.map(humanize).join(', ')}`;
      } else {
        role = `Supporting content for ${section.name}`;
      }

      // ── Derive column CONTENT from hints ──
      const itemsPerCol = items.length > 0 ? Math.ceil(items.length / colCount) : 0;
      const colItems = itemsPerCol > 0
        ? items.slice(i * itemsPerCol, (i + 1) * itemsPerCol)
        : [];

      columns.push({
        position: i + 1,
        name,
        role,
        width_hint: `${Math.round(100 / colCount)}%`,
        components: colComps.length > 0 ? colComps : ['ContentBlock'],
        content: {
          heading: i === 0 ? (hints.heading || '') : (colItems[0] || ''),
          items: colItems
        }
      });
    }

    return columns;
  }

  return {
    sections: plan.sections.map(s => ({
      section_id: s.id,
      section_name: s.name,
      layout_type: inferLayout(s.type || 'custom'),
      columns: buildColumns(s),
    })),
    _fallback: true,
  };
}

function isSubClassValid(sub) {
  return sub && Array.isArray(sub.sections) && sub.sections.length > 0 &&
    sub.sections.every(s => s.section_id && Array.isArray(s.columns) && s.columns.length > 0 &&
      s.columns.every(c => c.name && typeof c.name === 'string' && c.name.length > 2));
}

// ─── Filter result normalizer ────────────────────────────────────────────────
// Fixes three issues seen in production:
//   1. LLM sets can_proceed=false even when verdict=PASS → we re-derive it
//   2. LLM returns undefined/null for explanation → replace with fallback string
//   3. Plan should also generate on WARN (overall>=50) not just PASS, so users
//      with a clear but slightly vague prompt still get a plan to refine
export function normalizeFilterResult(result, extraFlags = [], promptText = '') {
  // Ensure verdict is in uppercase and standard
  const verdict = (result.verdict || '').toUpperCase();
  result.verdict = ['PASS', 'WARN', 'FAIL'].includes(verdict) ? verdict : 'WARN';

  // Sanitize fields that sometimes come back as undefined/null from the LLM
  result.explanation = result.explanation || result.issues_summary || 'Analysis complete.';
  result.issues_summary = result.issues_summary || '';
  result.improved_prompt = result.improved_prompt || '';
  result.clarifying_question = result.clarifying_question || '';
  result.flags = Array.from(new Set(result.flags || []));

  const clarifQ = result.clarifying_question.trim().toLowerCase();
  const hasClarif = clarifQ.length > 0 && !['n/a', 'none', 'no', 'null', 'false'].includes(clarifQ);

  // Determine can_proceed: allowed if PASS or WARN, and no clarifying question is asked.
  result.can_proceed = (result.verdict === 'PASS' || result.verdict === 'WARN') && !hasClarif;

  if (!Array.isArray(result.improved_prompt_options)) {
    result.improved_prompt_options = result.improved_prompt ? [result.improved_prompt] : [];
  }

  // Helper to extract a value from the object using standard or alternative keys
  const getVal = (obj, primaryKey, altKeys) => {
    if (obj[primaryKey] !== undefined && obj[primaryKey] !== null) {
      return obj[primaryKey];
    }
    for (const alt of altKeys) {
      if (obj[alt] !== undefined && obj[alt] !== null) {
        return obj[alt];
      }
    }
    return undefined;
  };

  // Helper to safely parse a value to an integer if possible
  const parseScore = (val) => {
    if (typeof val === 'string') {
      const parsed = parseInt(val, 10);
      return isNaN(parsed) ? undefined : parsed;
    }
    if (typeof val === 'number' && !isNaN(val)) {
      return val;
    }
    return undefined;
  };

  // Extract scores with alternative key fallbacks
  let safetyVal = parseScore(getVal(result, 'safety_score', ['safetyScore', 'safety', 'safety_score_value', 'safetyscore']));
  let clarityVal = parseScore(getVal(result, 'clarity_score', ['clarityScore', 'clarity', 'clarity_score_value', 'clarityscore']));
  let relevanceVal = parseScore(getVal(result, 'relevance_score', ['relevanceScore', 'relevance', 'relevance_score_value', 'relevancescore']));
  let overallVal = parseScore(getVal(result, 'overall_score', ['overallScore', 'overall', 'overall_score_value', 'overallscore']));

  const cleanPrompt = promptText || '';

  // Fallback / Reconstruction rules if scores are missing or invalid
  if (safetyVal === undefined) {
    const isSafe = !hasProfanity(cleanPrompt) && !isSpamish(cleanPrompt);
    const heuristicSafety = isSafe ? 100 : (hasProfanity(cleanPrompt) ? 20 : 70);
    let defaultSafety = 95;
    if (result.verdict === 'WARN') defaultSafety = 75;
    else if (result.verdict === 'FAIL') defaultSafety = 40;
    safetyVal = Math.min(heuristicSafety, defaultSafety);
  }

  if (clarityVal === undefined) {
    const wordCount = cleanPrompt.split(/\s+/).filter(w => w.trim().length > 0).length;
    const wordCountClarity = Math.min(100, Math.max(10, Math.round((wordCount / 15) * 100)));
    if (result.clarifying_question) {
      clarityVal = Math.min(65, wordCountClarity);
      if (clarityVal <= 10) clarityVal = 55; // Keep a reasonable fallback if word count is extremely short
    } else {
      clarityVal = Math.max(75, wordCountClarity);
    }
  }

  if (relevanceVal === undefined) {
    if (result.flags && result.flags.includes('off-topic')) {
      relevanceVal = 30;
    } else {
      relevanceVal = result.verdict === 'PASS' ? 95 : 85;
    }
  }

  if (overallVal === undefined) {
    overallVal = Math.round(safetyVal * 0.4 + clarityVal * 0.35 + relevanceVal * 0.25);
  }

  // Set the normalized, clamped, and rounded scores on the result object
  result.safety_score = Math.max(0, Math.min(100, Math.round(safetyVal)));
  result.clarity_score = Math.max(0, Math.min(100, Math.round(clarityVal)));
  result.relevance_score = Math.max(0, Math.min(100, Math.round(relevanceVal)));
  result.overall_score = Math.max(0, Math.min(100, Math.round(overallVal)));

  return result;
}

// ─── Shared image extractor ───────────────────────────────────────────────────

async function processUploadedFile(req, prompt) {
  let imageBase64 = null;
  let imageMediaType = null;
  let finalPrompt = prompt;

  if (req.file) {
    try {
      if (req.file.mimetype === 'application/pdf') {
        const dataBuffer = fs.readFileSync(req.file.path);
        const pdfData = await pdf(dataBuffer);
        finalPrompt += `\n\n--- EXTRACTED PDF DATA ---\n${pdfData.text}\n--- END PDF DATA ---`;
        
        if (prompt.toLowerCase().includes('put this pdf completely')) {
          const newFileName = `${Date.now()}-${req.file.originalname}`;
          const newPath = path.join(PUBLIC_PDFS_DIR, newFileName);
          fs.copyFileSync(req.file.path, newPath);
          finalPrompt += `\n\nCRITICAL: The user has requested to put this PDF completely in the website. Please add a download link or embed for the PDF using this URL: /public-pdfs/${newFileName}`;
        }
        
        fs.unlinkSync(req.file.path);
      } else {
        imageBase64 = fs.readFileSync(req.file.path).toString('base64');
        imageMediaType = req.file.mimetype || getImageMediaType(req.file.path);
        fs.unlinkSync(req.file.path);
      }
    } catch (err) {
      console.warn('Failed to process file:', err.message);
    }
  }
  return { imageBase64, imageMediaType, finalPrompt };
}

// ─── TODO #5: Generic plan detector ──────────────────────────────────────────
// Rejects LLM output that looks like a generic/empty plan and triggers fallback.

function isPlanGeneric(plan) {
  if (!plan || !Array.isArray(plan.sections) || plan.sections.length < 3) return true;
  const genericTitles = ['section 1', 'section 2', 'section 3', 'content', 'main section', 'some content', 'placeholder'];
  const hasGenericSections = plan.sections.some(s =>
    genericTitles.includes((s.name || '').toLowerCase()) ||
    (s.description || '').length < 15 ||
    !Array.isArray(s.components) || s.components.length < 2
  );
  const hasNoColorScheme = !plan.color_scheme || plan.color_scheme.primary === '#000000';
  return hasGenericSections || hasNoColorScheme;
}

// ─── Structured Output Schemas ────────────────────────────────────────────────

const filterResponseFormat = {
  type: "json_schema",
  json_schema: {
    name: "filter_response",
    strict: true,
    schema: {
      type: "object",
      properties: {
        verdict: { type: "string", enum: ["PASS", "WARN", "FAIL"] },
        flags: { type: "array", items: { type: "string" } },
        clarifying_question: { type: ["string", "null"] },
        improved_prompt: { type: ["string", "null"] },
        improved_prompt_options: { type: ["array", "null"], items: { type: "string" } },
        issues_summary: { type: ["string", "null"] },
        explanation: { type: ["string", "null"] },
        safety_score: { type: "number" },
        clarity_score: { type: "number" },
        relevance_score: { type: "number" },
        overall_score: { type: "number" },
        can_proceed: { type: "boolean" }
      },
      required: ["verdict", "flags", "clarifying_question", "improved_prompt", "improved_prompt_options", "issues_summary", "explanation", "safety_score", "clarity_score", "relevance_score", "overall_score", "can_proceed"],
      additionalProperties: false
    }
  }
};

const planResponseFormat = {
  type: "json_schema",
  json_schema: {
    name: "page_plan",
    strict: true,
    schema: {
      type: "object",
      properties: {
        project_title: { type: "string" },
        project_type: { type: "string" },
        color_scheme: {
          type: "object",
          properties: {
            primary: { type: "string" },
            secondary: { type: "string" },
            accent: { type: "string" },
            background: { type: "string" },
            text: { type: "string" }
          },
          required: ["primary", "secondary", "accent", "background", "text"],
          additionalProperties: false
        },
        tech_stack: {
          type: "object",
          properties: {
            font: { type: "string" },
            framework: { type: "string" },
            styling: { type: "string" }
          },
          required: ["font", "framework", "styling"],
          additionalProperties: false
        },
        sections: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string" },
              type: { type: "string", enum: ["navbar", "hero", "about", "features", "gallery", "product_grid", "pricing", "testimonials", "stats", "cta", "contact", "sidebar", "footer", "custom"] },
              description: { type: "string" },
              components: { type: "array", items: { type: "string" } },
              content_hints: {
                type: "object",
                properties: {
                  heading: { type: "string" },
                  subheading: { type: "string" },
                  cta_text: { type: "string" },
                  items: { type: "array", items: { type: "string" } },
                  item_images: { type: "array", items: { type: ["string", "null"] } }
                },
                required: ["heading", "subheading", "cta_text", "items", "item_images"],
                additionalProperties: false
              },
              generated_image_url: { type: ["string", "null"] }
            },
            required: ["id", "name", "type", "description", "components", "content_hints", "generated_image_url"],
            additionalProperties: false
          }
        },
        logo_url: { type: ["string", "null"] }
      },
      required: ["project_title", "project_type", "color_scheme", "tech_stack", "sections", "logo_url"],
      additionalProperties: false
    }
  }
};

// ─── Route Handlers ───────────────────────────────────────────────────────────

/**
 * POST /api/filter-prompt  (original — unchanged behaviour)
 */
export async function handleFilterPrompt(req, res) {
  try {
    const { prompt } = req.body || {};
    if (!prompt || !prompt.trim()) return res.status(400).json({ error: 'Prompt is required' });

    const flags = [];
    if (hasProfanity(prompt)) flags.push('harmful');
    if (isSpamish(prompt)) flags.push('spam');

    const { imageBase64, imageMediaType, finalPrompt } = await processUploadedFile(req, prompt);
    let promptToUse = finalPrompt;

    let scrapedContent = '';
    try {
      scrapedContent = await detectAndScrapeUrls(promptToUse);
    } catch (scrapErr) {
      console.warn('Failed to scrape URLs in prompt:', scrapErr.message);
    }

    const systemPrompt = imageBase64 ? SYSTEM_PROMPT_IMAGE : SYSTEM_PROMPT_TEXT;
    const userMessage = imageBase64
      ? `Analyze this image and these instructions. Instructions: ${promptToUse}${scrapedContent}`
      : `Analyze this prompt and return only the JSON object described above. Prompt:\n${promptToUse}${scrapedContent}`;

    let llmRaw = null;
    try {
      llmRaw = await callAzureOpenAI(systemPrompt, userMessage, imageBase64, imageMediaType, 2000, filterResponseFormat);
    } catch (err) {
      console.warn('Azure OpenAI call failed:', err.message);
    }

    if (llmRaw) {
      try {
        const result = normalizeFilterResult(parseJson(llmRaw), flags, prompt);
        return res.json(result);
      } catch (err) {
        console.warn('Failed to parse LLM JSON, falling back to heuristics');
      }
    }

    return res.json(normalizeFilterResult(buildFallbackAnalysis(prompt, flags), flags, prompt));
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}

/**
 * POST /api/generate-plan  (NEW)
 * Body: prompt (string, required), image (file, optional)
 */
export async function handleGeneratePlan(req, res) {
  try {
    const { prompt } = req.body || {};
    if (!prompt || !prompt.trim()) return res.status(400).json({ error: 'Prompt is required' });

    const { imageBase64, imageMediaType, finalPrompt } = await processUploadedFile(req, prompt);
    let promptToUse = finalPrompt;

    let scrapedContent = '';
    try {
      scrapedContent = await detectAndScrapeUrls(promptToUse);
    } catch (scrapErr) {
      console.warn('Failed to scrape URLs in prompt:', scrapErr.message);
    }

    const mdHint = isMarkdownPrompt(promptToUse) ? "\n\n[Note: The user prompt is provided in structured Markdown format. Please respect and utilize the provided Markdown headings, lists, and structure when generating the detailed plan.]" : "";

    const userMessage = imageBase64
      ? `Generate a complete, specific page plan for this web application. User prompt: "${promptToUse}". A reference image/wireframe is attached — extract layout, color, and section clues from it.${mdHint}${scrapedContent}`
      : `Generate a complete, specific page plan for this web application. User prompt: "${promptToUse}". Be specific — infer the project type and include all relevant marketing/product sections.${mdHint}${scrapedContent}`;

    let plan = null;
    let usedFallback = false;

    try {
      const raw = await callAzureOpenAI(SYSTEM_PROMPT_PLAN, userMessage, imageBase64, imageMediaType, 4000, planResponseFormat);
      plan = parseJson(raw);
    } catch (err) {
      console.warn('Plan LLM call/parse failed:', err.message);
      plan = buildFallbackPlan(prompt);
      usedFallback = true;
    }

    return res.json({ success: true, plan, fallback: usedFallback });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}

/**
 * POST /api/analyze-and-plan  (NEW — recommended for frontend)
 * Runs filter + plan generation in a single round-trip.
 * Body: prompt (string, required), image (file, optional)
 */
export async function handleAnalyzeAndPlan(req, res) {
  try {
    const { prompt, force } = req.body || {};
    if (!prompt || !prompt.trim()) return res.status(400).json({ error: 'Prompt is required' });

    const flags = [];
    if (hasProfanity(prompt)) flags.push('harmful');
    if (isSpamish(prompt)) flags.push('spam');

    const { imageBase64, imageMediaType, finalPrompt } = await processUploadedFile(req, prompt);
    let promptToUse = finalPrompt;

    let scrapedContent = '';
    try {
      scrapedContent = await detectAndScrapeUrls(promptToUse);
    } catch (scrapErr) {
      console.warn('Failed to scrape URLs in prompt:', scrapErr.message);
    }

    // ── Step 1: Filter ────────────────────────────────────────────────────────
    const filterSystemPrompt = imageBase64 ? SYSTEM_PROMPT_IMAGE : SYSTEM_PROMPT_TEXT;
    const filterUserMessage = imageBase64
      ? `Analyze this image and these instructions. Instructions: ${promptToUse}${scrapedContent}`
      : `Analyze this prompt and return only the JSON object described above. Prompt:\n${promptToUse}${scrapedContent}`;

    let filterResult = null;
    try {
      const raw = await withTimeout(callAzureOpenAI(filterSystemPrompt, filterUserMessage, imageBase64, imageMediaType, 2000, filterResponseFormat), 60000, null);
      if (!raw) throw new Error("Filter LLM call timed out");
      filterResult = normalizeFilterResult(parseJson(raw), flags, prompt);
    } catch (err) {
      console.warn('Filter LLM call failed:', err.message);
      filterResult = normalizeFilterResult(buildFallbackAnalysis(prompt, flags), flags, prompt);
    }

    // ── Step 1.5: Enforce Filter (CLARIFICATION PIPELINE) ────────────────────
    if (filterResult && !filterResult.can_proceed && !force) {
      console.log('Prompt rejected or needs clarification. Halting plan generation.');
      return res.json({ success: true, filter: filterResult });
    } else if (filterResult && !filterResult.can_proceed && force) {
      console.log('Prompt rejected but force flag is true. Bypassing filter.');
      // Force it to pass
      filterResult.can_proceed = true;
      filterResult.verdict = 'PASS';
    }

    // ── Step 2: Plan ──────────────────────────────────────────────────────────
    let plan = null;
    let plan_fallback = false;

    {
      const mdHint = isMarkdownPrompt(prompt) ? "\n\n[Note: The user prompt is provided in structured Markdown format. Please respect and utilize the provided Markdown headings, lists, and structure when generating the detailed plan.]" : "";

      const planUserMessage = imageBase64
        ? `Generate a complete, specific page plan for this web application. User prompt: "${prompt}". A reference image/wireframe is attached — extract layout, color, and section clues from it.${mdHint}${scrapedContent}`
        : `Generate a complete, specific page plan for this web application. User prompt: "${prompt}". Be specific — infer the project type and include all relevant marketing/product sections.${mdHint}${scrapedContent}`;

      try {
        // Increase timeout to 60s for plan
        const raw = await withTimeout(callAzureOpenAI(SYSTEM_PROMPT_PLAN, planUserMessage, imageBase64, imageMediaType, 4000, planResponseFormat), 60000, null);
        if (!raw) throw new Error("Plan LLM call timed out");
        const parsed = parseJson(raw);
        plan = parsed;
      } catch (err) {
        console.warn('Plan LLM call failed:', err.message);
        plan = buildFallbackPlan(prompt);
        plan_fallback = true;
      }
    }

    // ── Steps 3 & 4: Sub-Classification AND Image Generation (IN PARALLEL) ────
    let sub_classification = null;
    let sub_fallback = false;
    let section_images = {};

    const subClassTask = async () => {
      if (plan && Array.isArray(plan.sections) && plan.sections.length > 0) {
        const subUserMessage = `Here is the page plan with ${plan.sections.length} sections. Sub-classify every section into detailed columns/zones with descriptive names.\n\nProject: "${plan.project_title}" (${plan.project_type})\n\nSections to sub-classify:\n${JSON.stringify(plan.sections.map(s => ({ id: s.id, name: s.name, type: s.type, description: s.description, components: s.components, content_hints: s.content_hints })), null, 2)}\n\nProduce the sub-classification JSON now.`;

        let llmSuccess = false;
        try {
          // Increase timeout to 60s for subclass attempt 1
          const raw = await withTimeout(callAzureOpenAI(SYSTEM_PROMPT_SUBCLASSIFY, subUserMessage, null, null, 4000), 60000, null);
          if (!raw) throw new Error("Sub-class attempt 1 timed out");
          const parsed = parseJson(raw);
          if (isSubClassValid(parsed)) { sub_classification = parsed; llmSuccess = true; }
        } catch (err) { }

        if (!llmSuccess) {
          try {
            const retryMessage = `Sub-classify these ${plan.sections.length} website sections into columns/zones. For each section, break it into 2-4 columns with descriptive names derived from the components listed.\n\nSections:\n${plan.sections.map(s => `- ${s.id} (${s.type}): "${s.name}" — components: [${(s.components || []).join(', ')}]`).join('\n')}\n\nReturn ONLY the JSON with the sub-classification structure.`;
            // Increase timeout to 60s for subclass attempt 2
            const raw = await withTimeout(callAzureOpenAI(SYSTEM_PROMPT_SUBCLASSIFY, retryMessage, null, null, 3000), 60000, null);
            if (!raw) throw new Error("Sub-class attempt 2 timed out");
            const parsed = parseJson(raw);
            if (isSubClassValid(parsed)) { sub_classification = parsed; llmSuccess = true; }
          } catch (err) { }
        }

        if (!llmSuccess) {
          sub_classification = buildDynamicSubClassification(plan);
          sub_fallback = true;
        }
      } else {
        plan = buildFallbackPlan(prompt);
        plan_fallback = true;
        sub_classification = buildDynamicSubClassification(plan);
        sub_fallback = true;
      }
    };

    const imageGenTask = async () => {
      if (plan && Array.isArray(plan.sections) && plan.sections.length > 0) {
        try {
          // Increase timeout to 120s to allow all DALL-E images to finish
          section_images = await withTimeout(generatePlanImages(plan), 60000, {});
          if (section_images['logo_url']) plan.logo_url = section_images['logo_url'];
          for (const sec of plan.sections) {
            if (section_images[sec.id]) sec.generated_image_url = section_images[sec.id];

            // Map individual item images if they were generated
            if (sec.content_hints && Array.isArray(sec.content_hints.items)) {
              const itemImages = sec.content_hints.items.map((item, index) => {
                const key = `${sec.id}_item_${index}`;
                return section_images[key] || null;
              });
              if (itemImages.some(img => img !== null)) {
                sec.content_hints.item_images = itemImages;
              }
            }
          }
        } catch (err) {
          console.error('[analyze-and-plan] Image generation step failed:', err.message);
        }
      }
    };

    // Run both tasks concurrently to slash response time
    await Promise.all([subClassTask(), imageGenTask()]);

    console.log(`[analyze-and-plan] verdict=${filterResult.verdict} can_proceed=${filterResult.can_proceed} sections=${plan?.sections?.length ?? 0} sub_sections=${sub_classification?.sections?.length ?? 0} fallback(plan=${plan_fallback}, sub=${sub_fallback})`);

    return res.json({ filter: filterResult, plan, plan_fallback, sub_classification, sub_fallback });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}


export async function handleGenerateExamplePrompt(req, res) {
  try {
    const { category } = req.body || {};
    if (!category) return res.status(400).json({ error: 'Category is required' });

    const SYSTEM_PROMPT_GENERATE_EXAMPLE = `You are an AI assistant that generates sample user prompts for testing a web application builder.
You will be given a category: "good", "vague", "unsafe", "malformed", or "scattered".
Generate exactly ONE random, realistic user prompt that fits this category. Do not repeat prompts. Be creative.

Category guides:
- "good": A high-quality, clear, specific request to build a web app or UI components, specifying layout, features, or content.
- "vague": A very short, ambiguous, or poorly specified prompt that lacks details of what to build.
- "unsafe": A prompt requesting dangerous, harmful, illegal, or malicious activities.
- "malformed": A prompt containing gibberish, spam keywords, repeating characters, or completely garbled syntax.
- "scattered": A prompt containing a chaotic mix of unrelated tools, technologies, and features without a cohesive design or plan.

Return ONLY the raw prompt text as a plain string. Do not wrap it in quotes, code blocks, or markdown. Return nothing else.`;

    const userMessage = `Generate a random example prompt for the category: "${category}".`;
    console.log(`[generate-example-prompt] Category requested: "${category}"`);
    const promptText = await callAzureOpenAI(SYSTEM_PROMPT_GENERATE_EXAMPLE, userMessage, null, null, 150);
    console.log(`[generate-example-prompt] Result: "${promptText.trim()}"`);

    return res.json({ prompt: promptText.trim() });
  } catch (err) {
    console.error('[generate-example-prompt] Error:', err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}

export async function handleCustomizeCode(req, res) {
  // Set headers for EventStream
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no'); // Prevent proxy buffering (Cloudflare/Nginx)

  // Send an immediate heartbeat to establish connection
  res.write(': ping\n\n');

  const sendSSE = (data) => {
    if (res.writableEnded || res.finished) return;
    try {
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    } catch (e) {
      console.warn('Failed to write SSE token in handleCustomizeCode:', e.message);
    }
  };

  try {
    let { code, prompt, plan, history } = req.body || {};
    if (code) {
      try {
        fs.writeFileSync(path.join(__dirname, 'out.jsx'), code, 'utf8');
      } catch (e) {
        console.warn('Failed to write incoming code to out.jsx:', e.message);
      }
    }
    if (typeof plan === 'string') {
      try {
        plan = JSON.parse(plan);
      } catch (e) {
        console.warn('Failed to parse plan from body string:', e.message);
      }
    }

    let historyArr = [];
    if (history) {
      if (typeof history === 'string') {
        try {
          historyArr = JSON.parse(history);
        } catch (e) {
          historyArr = [history];
        }
      } else if (Array.isArray(history)) {
        historyArr = history;
      }
    }

    let historyContext = '';
    if (historyArr && historyArr.length > 0) {
      historyContext = `\n\nPREVIOUSLY APPLIED REDESIGNS (applied in chronological order, which are already present in the current code):`;
      historyArr.forEach((item, idx) => {
        const text = typeof item === 'string' ? item : (item?.prompt || '');
        if (text.trim()) {
          historyContext += `\n- ${text.trim()}`;
        }
      });
      historyContext += `\n\nCRITICAL INSTRUCTION FOR CUMULATIVE EDITS: The user is applying a sequence of edits. You MUST preserve all the components, sections, styles, layout choices, and copy introduced by these previous redesign prompts. Build your new modifications incrementally ON TOP of the existing code. Do NOT discard, revert, or remove previous modifications (such as custom themes, color changes, sage green or pastel cherry styles, contact forms, or team grids) unless the new edit instruction explicitly overrides them.`;
    }

    if (!code || !prompt) {
      sendSSE({ type: 'error', message: 'Code and prompt are required' });
      return res.end();
    }

    let scraperNote = '';
    try {
      scraperNote = await detectAndScrapeUrls(prompt);
    } catch (scrapErr) {
      console.warn('[customize-code] Failed to scrape URLs in prompt:', scrapErr.message);
    }

    // Process uploaded files (any mix of images and pdf)
    const uploadedImages = [];
    let parsedPdfText = '';

    if (req.files && Array.isArray(req.files)) {
      for (const file of req.files) {
        if (file.mimetype === 'application/pdf' || file.fieldname === 'pdf' || path.extname(file.originalname).toLowerCase() === '.pdf') {
          try {
            console.log(`[customize-code] Parsing PDF document: ${file.originalname}`);
            const dataBuffer = fs.readFileSync(file.path);
            const parsed = await pdf(dataBuffer);
            parsedPdfText = parsed.text || '';
            console.log(`[customize-code] Extracted ${parsedPdfText.length} characters of text from PDF.`);
            fs.unlinkSync(file.path);
          } catch (err) {
            console.warn('[customize-code] PDF parsing failed:', err.message);
          }
        } else if (file.mimetype.startsWith('image/') || file.fieldname === 'images' || file.fieldname === 'image') {
          try {
            const fileBuffer = fs.readFileSync(file.path);
            const imgBase64 = fileBuffer.toString('base64');
            const imgMediaType = file.mimetype || getImageMediaType(file.path);

            const ext = path.extname(file.originalname) || '.png';
            const filename = `uploaded-${Date.now()}-${crypto.randomUUID()}${ext}`;
            const destPath = path.join(IMAGES_DIR, filename);
            fs.writeFileSync(destPath, fileBuffer);
            const publicUrl = `/generated-images/${filename}`;

            uploadedImages.push({
              base64: imgBase64,
              mediaType: imgMediaType,
              publicUrl: publicUrl
            });

            console.log(`[customize-code] Uploaded image saved to: ${publicUrl}`);
            fs.unlinkSync(file.path);
          } catch (err) {
            console.warn('[customize-code] Failed to process image file:', err.message);
          }
        }
      }
    }

    // ── Detect if the user wants to change/add/replace an image ─────────────
    const IMAGE_INTENT_REGEX = /\b(change|update|replace|add|swap|new|different|generate|use|put|set|insert|show|display)\b.{0,60}\b(image|photo|picture|banner|background|hero|illustration|graphic|thumbnail|avatar|portrait|logo|icon)\b|\b(image|photo|picture|banner|background|hero|illustration|graphic|thumbnail|avatar|portrait|logo|icon)\b.{0,30}\b(change|update|replace|add|swap|new|different|generate|use|put|set|insert|show|display)\b/i;

    let generatedImageUrl = null;
    let imageNote = '';

    if (uploadedImages.length > 0) {
      imageNote += `\n\nIMAGES UPLOADED BY USER:\nThe user has uploaded ${uploadedImages.length} image file(s) which are saved on the server:`;
      uploadedImages.forEach((img, idx) => {
        imageNote += `\n- Image #${idx + 1} URL: "${img.publicUrl}"`;
      });
      imageNote += `\nIMPORTANT: Use EXACTLY these URLs in the <img> src attributes or as CSS background-image URLs in the modified code where appropriate (e.g. as profile images, card illustrations, logos, or gallery screenshots). Do NOT guess or use mock image URLs. Only use the URLs provided above.`;
    }

    const needsDalle = IMAGE_INTENT_REGEX.test(prompt) && (uploadedImages.length === 0 || /\b(generate a new|create a new|dall-e|dalle)\b/i.test(prompt));

    if (needsDalle) {
      console.log('[customize-code] Image change detected in prompt. Generating image...');
      sendSSE({ type: 'status', message: 'Generating image...' });

      try {
        // Build a context-aware image prompt from the user's edit instruction + plan
        const projectTitle = plan?.project_title || 'web application';
        const projectType = plan?.project_type || 'landing_page';
        const colorPrimary = plan?.color_scheme?.primary || '';
        const colorHint = colorPrimary ? `Color theme inspired by ${colorPrimary}.` : '';

        // Extract what the image should show from the user prompt
        const imageDescription = prompt.replace(IMAGE_INTENT_REGEX, '').trim() || `professional content for ${projectTitle}`;

        const imageGenPrompt = `A professional, high-quality photograph or illustration for a ${projectType} website called "${projectTitle}". ${imageDescription}. ${colorHint} Clean, modern, cinematic composition, ultra-high quality. Absolutely no text, no typography, no letters, no words in the image.`;

        generatedImageUrl = await callAzureImageGen(imageGenPrompt, '1536x1024');
        console.log(`[customize-code] Image generated: ${generatedImageUrl}`);

        imageNote += `\n\nIMAGE GENERATED: A real image has been generated and is available at this URL: ${generatedImageUrl}
IMPORTANT: Use EXACTLY this URL in the <img> src attribute or as a CSS background-image URL in the modified code. Do NOT make up or guess other image URLs. Only use: ${generatedImageUrl}`;
      } catch (imgErr) {
        console.warn('[customize-code] Image generation failed:', imgErr.message);
        imageNote += `\n\n[Note: Image generation was attempted but failed. Use a descriptive placeholder or gradient instead of an img src URL.]`;
      }
    }

    let pdfNote = '';
    if (parsedPdfText && parsedPdfText.trim()) {
      pdfNote = `\n\nPDF DOCUMENT ATTACHED BY USER:\nThe user has uploaded a PDF document containing reference content, guidelines, copy, or technical requirements. Here is the text extracted from the PDF:\n--- START PDF TEXT ---\n${parsedPdfText.trim()}\n--- END PDF TEXT ---\nIMPORTANT: You MUST read and use the text content extracted from this PDF to directly inform, write, or adjust the content, copy, labels, features, or styling in the generated React code.`;
    }

    const SYSTEM_PROMPT_CUSTOMIZE_CODE = `You are an expert front-end engineer for an AI-powered web builder. Given an existing React component source code and a user edit request, modify the component code to apply the requested changes.

CRITICAL RULES:
1. UNDERSTAND FIRST & ACT SECOND (MANDATORY CHAIN-OF-THOUGHT):
   Before generating any imports or React code, you MUST generate a complete JavaScript block comment (/* ... */) at the very top of the file. Inside this block comment, write:
   * "UNDERSTANDING": Summarize your understanding of the user request.
   * "PRESERVATION CHECKLIST": List every existing layout, component, section, style, state variable, and hook in the current code that must remain intact. Remember: unless the user explicitly requested to remove something, you MUST NOT delete, simplify, or drop it!
   * "CHANGE PLAN": Detail the step-by-step logic of how you will implement the new changes.
   This comment block is critical for reasoning. Do not omit it. Make sure it is valid JavaScript comment format (/* ... */) so it compiles cleanly.
2. Modify ONLY the code block of the component.
3. Return ONLY the raw modified React source code. Do NOT wrap it in markdown code blocks (like \`\`\`jsx) or any explanation. Return ONLY the raw file content. (The comment block must be at the very top of this raw file content).
4. Ensure the modified code remains a complete, single-file React component exporting a default function App (i.e. \`export default function App() { ... }\`).
5. CUMULATIVE EDITS & STRICT PRESERVATION RULE: You are performing an incremental edit on an existing codebase. You MUST strictly preserve ALL existing components, state variables, styling, logic, features, and textual content. Do NOT discard, revert, simplify, or remove any previous features (such as pricing grids, contact forms, resumes, summaries, custom themes, or sections). If the code contains long text content, YOU MUST COPY IT EXACTLY into your output. Do not summarize, skip, or omit it unless specifically instructed to delete it.
6. Use Tailwind CSS utility classes for styling.
7. You may import popular third-party React npm packages (such as \`react-icons\` (e.g. \`import { FaReact } from 'react-icons/fa'\`), \`framer-motion\`, etc.) if needed or if the user requests them. The platform will automatically install these packages in the background when your imports are detected. For normal icons, still prefer \`lucide-react\` but use others if the user explicitly requests them or for specific brand icons.
   NAME COLLISION WARNING: NEVER name your custom helper components the exact same name as a Lucide icon you import. If you define a custom component named \`LineChart\`, \`BarChart\`, \`PieChart\`, or \`AreaChart\`, you MUST rename the Lucide imports (e.g. \`import { LineChart as LineChartIcon, BarChart as BarChartIcon } from 'lucide-react'\`) to avoid fatal "Identifier has already been declared" compiler errors.
8. All code must be complete and runnable — no placeholders, no incomplete functions, no TODO comments, and no code truncation.
9. When an image URL is provided in the edit instruction (prefixed with "IMPORTANT: Use EXACTLY this URL"), you MUST use that exact URL in the img src or background-image. Never use placeholder URLs or invented URLs.
10. MISSING IMAGE SAFE HANDLING: If you need to render sections, cards, or items (e.g. certificates, credentials, projects, gallery items, team members, testimonials) and no specific image URL was uploaded or generated in the prompt, do NOT create dummy <img> tags or invent URLs (like 'certificate1.png' or '/generated-images/project.jpg'). Instead, design a highly premium CSS-based presentation card. Use Tailwind gradients, rounded boxes, borders, and Lucide icons (such as Award, ShieldCheck, FileCheck, Landmark, Eye, etc.) to visually represent the item. NEVER generate broken image paths. DO NOT duplicate image URLs across different items. Every image URL is unique. If you run out of URLs or if a URL is null, DO NOT reuse a previous URL.
11. ROUTING STRUCTURE (SINGLE vs MULTI-PAGE):
   - If the user edit instruction requests to make the site multi-page, or add separate pages for navbar sections, refactor the existing single-page layout to implement a client-side state-based router (e.g. \`const [currentPage, setCurrentPage] = useState('home')\`). Preserve the content and design of the existing sections, but segregate them into their respective page views (Home, About, Contact, Services, etc.). Ensure clicking navbar links switches the active page view, and ensure each page is fully populated with its appropriate content.
   - If the user edit instruction requests to go back to single-page, refactor it back to render all sections sequentially.
   - Wire all buttons, call-to-actions (CTAs), or links in the hero section or page body (e.g., 'View Projects', 'Contact Me', 'Get Started', 'Shop Now', 'Learn More', etc.) to navigate correctly:
     * In Single-Page mode, clicking a button/CTA must smoothly scroll to its target section ID using an onClick handler with \`e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })\`. NEVER use plain \`<a href="#id">\` without a click handler.
     * In Multi-Page mode, clicking a button/CTA must transition to the correct page by updating the state-based router (e.g. \`onClick={() => setCurrentPage('contact')}\`).
   - Wire all mobile menu navigation links (in the three-line hamburger menu toggled on mobile viewports) correctly:
     * In Single-Page mode, clicking a mobile menu link must smoothly scroll to its target section ID using an onClick handler with \`e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })\`, and close the mobile menu.
     * In Multi-Page mode, clicking a mobile menu link must transition to the correct page by updating the state-based router and close the mobile menu.
     * Ensure clicking a mobile menu link does NOT cause a page reload or default navigation that resets the app.
12. CRITICAL CLICKABLE INTERACTIVE STATES (HOVER/ACTIVE):
   - Ensure all buttons, links, cards, tabs, and interactive icons have highly premium hover and active states using smooth transitions (always use \`transition-all duration-200\` or similar).
   - Hover states: apply a subtle scale-up \`hover:scale-[1.02]\`, hover shadows \`hover:shadow-md\` or \`hover:shadow-lg\`, and smooth background/text color shifts.
   - Active/Pressed states: apply a tactile click compression look \`active:scale-[0.98]\` to feel responsive to touch/click.
   - For buttons with arrow icons, animate/move the arrow icon on hover: e.g. using \`group\` on the parent button and \`group-hover:translate-x-1 transition-transform\` on the icon.
13. DOCUMENT / FILE LINKS: If you need to include a link to a PDF, document, or file (e.g. Resume, Portfolio, Brochure), NEVER use \`data:application/pdf;base64,...\` strings. This will crash the React compilation and produce broken files. Instead, use a simple relative path like \`href="/resume.pdf"\` and always add \`target="_blank" rel="noopener noreferrer"\`.
14. TAILWIND DARK MODE & SETTING TOGGLES IMPLEMENTATION:
   - When asked to add dark mode or a dark/light mode toggle:
     * Set the default theme to bright (light) mode unless explicitly asked otherwise.
     * Implement the toggle state inside the component (e.g., \`const [darkMode, setDarkMode] = useState(false)\`).
     * Wrap the entire component content in a wrapper div that conditionally applies the \`dark\` class (e.g., \`className={darkMode ? 'dark' : ''}\`).
     * Also include a \`useEffect\` hook to toggle the \`dark\` class on the document root so that the entire HTML body respects the theme:
       \`useEffect(() => { if (darkMode) { document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark'); } }, [darkMode]);\`
     * Make sure that all components have strong, high-contrast default light mode styles, and use the \`dark:\` modifier for dark mode variants (e.g., \`bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-200 dark:border-slate-800\`).
15. STYLING, ANIMATION, & CODE SAFETY RULES:
   - **Tailwind Arbitrary Colors**: When implementing custom colors from the design or user request, ALWAYS write them as arbitrary color values (e.g., \`bg-[#1e40af]\`, \`text-[#0f172a]\`) rather than guessing class names like \`bg-primary\` or \`text-brand\` which are not part of Tailwind's default palette.
   - **CSS Transitions**: Stick to standard Tailwind transitions (like \`transition-all duration-300 ease-in-out\`) and standard animations (e.g., \`animate-pulse\`, \`animate-spin\`, \`animate-bounce\`, \`animate-ping\`). Do NOT write custom animations (such as \`animate-fade-in\` or \`animate-slide-up\`) unless they are configured in standard style tags.
   - **Inline SVGs**: For complex logos or brand symbols (e.g. social platforms), write clean inline SVG tags instead of inventing local image paths.
   - **React Safety**: Import React and all hooks cleanly. Always safeguard map structures and lists with optional chaining (e.g., \`items?.map(...)\`). Keep references to browser-specific objects (\`window\`, \`document\`) inside \`useEffect\` hooks to avoid iframe runtime startup crashes.
16. DO NOT TRUNCATE OR COLLAPSE CODE:
   - You MUST output the ENTIRE React file from start to finish with all existing code preserved.
   - DO NOT use placeholders like "/* unchanged */", "// rest of the code", or "// ...". If you omit any code, it will be permanently deleted from the user's application and cause a fatal loss of content.
   - Limit mock data arrays to 3-5 sample rows/items to save output tokens.`;

    const userMessage = `Current React component source code:
\`\`\`jsx
${code}
\`\`\`

You MUST KEEP EVERY SINGLE COMPONENT, FUNCTION, AND SECTION OF THE ABOVE CODE INTACT. DO NOT DELETE OR OMIT ANYTHING.
Your task is to implement the following change by ADDING or MODIFYING the code. You MUST NOT REMOVE existing sections (like Portfolio, Resume, Hero, Dashboards, Bio, Skills, Projects, etc.).

Edit instruction: "${prompt}"${imageNote}${pdfNote}${scraperNote}${historyContext}

CRITICAL ANTI-LAZINESS WARNING: You MUST return the FULL, complete React component with ALL existing text content (including long paragraphs, summaries, and lists) strictly preserved. Do NOT replace existing sections with comments like /* unchanged */. If you drop existing content, the application will break.`;

    let accumulated = '';
    let success = false;
    let lastErr = '';

    // Attempt 1: full code context
    try {
      const stream = callAzureOpenAIStream(SYSTEM_PROMPT_CUSTOMIZE_CODE, userMessage, uploadedImages, null, 16000);
      for await (const chunk of stream) {
        accumulated += chunk;
        sendSSE({ type: 'token', content: chunk });
      }
      if (accumulated.trim().length > 50) success = true;
    } catch (err) {
      console.warn('[customize-code] Attempt 1 failed:', err.message);
      lastErr = err.message;
    }

    // Attempt 2: retry with truncated code (first 6000 chars) if first attempt failed
    if (!success) {
      try {
        console.log('[customize-code] Retrying with truncated code context...');
        const truncatedCode = code.length > 6000 ? code.slice(0, 6000) + '\n// ... (truncated for context)\nexport default App;' : code;
        const retryMessage = `Current React component source code (partial - apply changes to the full component):
\`\`\`jsx
${truncatedCode}
\`\`\`

Edit instruction: "${prompt}"${imageNote}${pdfNote}${scraperNote}${historyContext}

NOTE: The full code was too long. Apply the edit instruction to the above partial code and return a complete runnable App component.`;
        accumulated = '';
        const stream = callAzureOpenAIStream(SYSTEM_PROMPT_CUSTOMIZE_CODE, retryMessage, uploadedImages, null, 16000);
        for await (const chunk of stream) {
          accumulated += chunk;
          sendSSE({ type: 'token', content: chunk });
        }
        if (accumulated.trim().length > 50) success = true;
      } catch (err) {
        console.error('[customize-code] Attempt 2 also failed:', err.message);
        lastErr = err.message;
      }
    }

    if (!success) {
      let friendlyMessage = 'Failed to customize code — the LLM could not process this request. Try a simpler edit or click Retry.';
      const errStr = String(lastErr || '').toLowerCase();
      if (errStr.includes('timeout') || errStr.includes('timed out') || errStr.includes('abort') || errStr.includes('connection') || errStr.includes('fetch failed')) {
        friendlyMessage = 'Connection to Azure OpenAI timed out/failed. Your IPv4 network connection appears to be broken or blocked (IPv6 remains active). Please check your VPN/Proxy settings or VM network interface adapter (toggle it off/on or switch NAT to Bridged).';
      }
      sendSSE({ type: 'error', message: friendlyMessage, debug: lastErr });
    } else {
      try {
        fs.writeFileSync(path.join(__dirname, 'out.jsx'), accumulated, 'utf8');
      } catch (e) {
        console.warn('Failed to write output code to out.jsx:', e.message);
      }
      sendSSE({ type: 'done', content: accumulated });
      autoInstallDependencies(accumulated);
    }

    res.end();
  } catch (err) {
    console.error('[customize-code] SSE handler error:', err);
    if (!res.writableEnded && !res.finished) {
      try {
        res.write(`data: ${JSON.stringify({ type: 'error', message: err.message || 'Server error' })}\n\n`);
        res.end();
      } catch (e) {
        console.warn('Failed to write error SSE in handleCustomizeCode:', e.message);
      }
    }
  }
}


// // ── Config (unchanged) ────────────────────────────────────────────────────────
export function handleConfig(req, res) {
  res.json({
    endpoint: process.env.ENDPOINT || null,
    apiVersion: process.env.API_VERSION || null,
    deploymentName: process.env.DEPLOYMENT_NAME || null,
    hasWhisper: !!((process.env.IMAGE_API_KEY || process.env.API_KEY) && (process.env.IMAGE_ENDPOINT || process.env.ENDPOINT) && process.env.WHISPER_DEPLOYMENT_NAME),
  });
}

// ─── Dynamic Code Fallback ────────────────────────────────────────────────────
// Generates working HTML/CSS/JS directly from plan data when LLM code gen fails.

function buildFallbackCode(plan, sub) {
  const colors = plan.color_scheme || { primary: '#4f8ef7', secondary: '#3b6fd1', accent: '#3ecf8e', background: '#ffffff', text: '#111827' };
  const title = plan.project_title || 'Web Application';
  const sections = Array.isArray(plan.sections) ? plan.sections : [];
  const subMap = {};
  if (sub && Array.isArray(sub.sections)) {
    sub.sections.forEach(s => { subMap[s.section_id] = s; });
  }

  // ── Build HTML ──
  const sectionsHTML = sections.map(sec => {
    const subSec = subMap[sec.id];
    const hints = sec.content_hints || {};
    const heading = hints.heading || sec.name || '';
    const subheading = hints.subheading || sec.description || '';
    const ctaText = hints.cta_text || '';
    const items = Array.isArray(hints.items) ? hints.items : [];

    if (sec.type === 'navbar') {
      const navItems = items.map(it => `<a href="#${it.toLowerCase().replace(/\s+/g, '-')}" class="nav-link">${it}</a>`).join('\n            ');
      return `
    <header id="${sec.id}" class="section-navbar">
      <nav class="navbar">
        <div class="nav-brand">${title}</div>
        <div class="nav-links" id="navLinks">
            ${navItems}
        </div>
        ${ctaText ? `<a href="#" class="nav-cta">${ctaText}</a>` : ''}
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
      
    </header>`;
    }

    if (sec.type === 'hero') {
      return `
    <section id="${sec.id}" class="section-hero fade-in">
      <div class="hero-content">
        ${heading ? `<h1 class="hero-headline">${heading}</h1>` : ''}
        ${subheading ? `<p class="hero-sub">${subheading}</p>` : ''}
        <div class="hero-actions">
          ${ctaText ? `<a href="#" class="btn btn-primary">${ctaText}</a>` : ''}
          <a href="#" class="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </section>`;
    }

    if (sec.type === 'features') {
      const featureCards = items.map((item, i) => {
        const icons = ['⚡', '🎨', '🔒', '🚀', '💡', '📊'];
        return `
          <div class="feature-card fade-in">
            <div class="feature-icon">${icons[i % icons.length]}</div>
            <h3 class="feature-title">${item.split(/[—:\-]/)[0].trim()}</h3>
            <p class="feature-desc">${item.includes(':') || item.includes('—') ? item.split(/[—:\-]/).slice(1).join('').trim() : 'Powerful capability for your project.'}</p>
          </div>`;
      }).join('');
      return `
    <section id="${sec.id}" class="section-features">
      ${heading ? `<h2 class="section-heading fade-in">${heading}</h2>` : ''}
      ${subheading ? `<p class="section-sub fade-in">${subheading}</p>` : ''}
      <div class="features-grid">${featureCards}</div>
    </section>`;
    }

    if (sec.type === 'pricing') {
      const pricingCards = items.map((item, i) => {
        const parts = item.split(/[—:\-]/);
        const planName = parts[0]?.trim() || `Plan ${i + 1}`;
        const price = parts[1]?.trim() || '';
        const features = parts.slice(2).join(', ').trim();
        return `
          <div class="pricing-card ${i === 1 ? 'pricing-popular' : ''} fade-in">
            ${i === 1 ? '<div class="popular-badge">Most Popular</div>' : ''}
            <h3 class="pricing-name">${planName}</h3>
            <div class="pricing-price">${price || 'Contact us'}</div>
            <p class="pricing-features">${features || 'All features included'}</p>
            <a href="#" class="btn btn-primary">${ctaText || 'Get Started'}</a>
          </div>`;
      }).join('');
      return `
    <section id="${sec.id}" class="section-pricing">
      ${heading ? `<h2 class="section-heading fade-in">${heading}</h2>` : ''}
      ${subheading ? `<p class="section-sub fade-in">${subheading}</p>` : ''}
      <div class="pricing-grid">${pricingCards}</div>
    </section>`;
    }

    if (sec.type === 'testimonials') {
      const cards = items.map(item => {
        const parts = item.split(/[—]/);
        const name = parts[0]?.trim() || 'Happy User';
        const quote = parts.slice(1).join('—').trim() || 'Incredible experience!';
        return `
          <div class="testimonial-card fade-in">
            <p class="testimonial-quote">"${quote}"</p>
            <div class="testimonial-author">${name}</div>
          </div>`;
      }).join('');
      return `
    <section id="${sec.id}" class="section-testimonials">
      ${heading ? `<h2 class="section-heading fade-in">${heading}</h2>` : ''}
      <div class="testimonials-grid">${cards}</div>
    </section>`;
    }

    if (sec.type === 'cta') {
      return `
    <section id="${sec.id}" class="section-cta fade-in">
      <div class="cta-content">
        ${heading ? `<h2 class="cta-headline">${heading}</h2>` : ''}
        ${subheading ? `<p class="cta-sub">${subheading}</p>` : ''}
        ${ctaText ? `<a href="#" class="btn btn-primary btn-lg">${ctaText}</a>` : ''}
      </div>
    </section>`;
    }

    if (sec.type === 'contact') {
      return `
    <section id="${sec.id}" class="section-contact">
      ${heading ? `<h2 class="section-heading fade-in">${heading}</h2>` : ''}
      <div class="contact-grid">
        <form class="contact-form fade-in" onsubmit="event.preventDefault(); alert('Message sent!')">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" class="btn btn-primary">${ctaText || 'Send Message'}</button>
        </form>
        <div class="contact-info fade-in">
          ${items.map(it => `<p>${it}</p>`).join('\n          ')}
        </div>
      </div>
    </section>`;
    }

    if (sec.type === 'footer') {
      return `
    <footer id="${sec.id}" class="section-footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">${title}</div>
          <p class="footer-desc">${subheading || `© ${new Date().getFullYear()} ${title}. All rights reserved.`}</p>
        </div>
        ${items.length ? items.map(group => {
        const parts = group.split(':');
        const label = parts[0]?.trim() || '';
        const links = (parts[1] || '').split(',').map(l => l.trim()).filter(Boolean);
        return `
        <div class="footer-col">
          <h4 class="footer-col-title">${label}</h4>
          ${links.map(l => `<a href="#" class="footer-link">${l}</a>`).join('\n          ')}
        </div>`;
      }).join('') : ''}
      </div>
      <div class="footer-bottom">© ${new Date().getFullYear()} ${title}. All rights reserved.</div>
    </footer>`;
    }

    // Generic section
    return `
    <section id="${sec.id}" class="section-generic fade-in">
      ${heading ? `<h2 class="section-heading">${heading}</h2>` : `<h2 class="section-heading">${sec.name}</h2>`}
      ${subheading ? `<p class="section-sub">${subheading}</p>` : ''}
      <div class="generic-content">
        ${items.map(it => `<div class="generic-item">${it}</div>`).join('\n        ')}
      </div>
    </section>`;
  }).join('\n');

  const indexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${plan.summary || title}" />
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
${sectionsHTML}
  <script src="script.js"><\/script>
</body>
</html>`;

  // ── Build CSS ──
  const stylesCSS = `/* ─── Generated by AI Web Builder ─── */
:root {
  --primary: ${colors.primary};
  --secondary: ${colors.secondary};
  --accent: ${colors.accent};
  --bg: ${colors.background};
  --text: ${colors.text};
  --text-muted: ${colors.text}99;
  --radius: 12px;
  --shadow: 0 4px 24px rgba(0,0,0,0.08);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.12);
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }

/* ─── Buttons ─── */
.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all var(--transition);
  border: none;
  text-align: center;
}
.btn-primary {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  filter: brightness(1.1);
}
.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}
.btn-secondary:hover {
  background: var(--primary);
  color: #fff;
}
.btn-lg { padding: 16px 36px; font-size: 17px; }

/* ─── Section shared ─── */
.section-heading {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 800;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}
.section-sub {
  text-align: center;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 48px;
  font-size: 16px;
  line-height: 1.7;
}

/* ─── Navbar ─── */
.section-navbar { position: sticky; top: 0; z-index: 100; background: var(--bg); border-bottom: 1px solid rgba(0,0,0,0.06); backdrop-filter: blur(12px); }
.navbar { max-width: 1200px; margin: 0 auto; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; }
.nav-brand { font-size: 20px; font-weight: 800; color: var(--primary); letter-spacing: -0.02em; }
.nav-links { display: flex; gap: 28px; }
.nav-link { font-size: 14px; font-weight: 500; color: var(--text-muted); transition: color var(--transition); }
.nav-link:hover { color: var(--primary); }
.nav-cta { padding: 8px 20px; background: var(--primary); color: #fff; border-radius: 8px; font-size: 14px; font-weight: 600; transition: all var(--transition); }
.nav-cta:hover { transform: translateY(-1px); box-shadow: var(--shadow); }
.nav-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
.nav-toggle span { width: 22px; height: 2px; background: var(--text); border-radius: 2px; transition: all var(--transition); }

/* ─── Hero ─── */
.section-hero {
  padding: 100px 24px 80px;
  text-align: center;
  background: linear-gradient(135deg, var(--bg) 0%, color-mix(in srgb, var(--primary) 8%, var(--bg)) 100%);
}
.hero-content { max-width: 720px; margin: 0 auto; }
.hero-headline { font-size: clamp(36px, 6vw, 64px); font-weight: 800; line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 20px; }
.hero-sub { font-size: 18px; color: var(--text-muted); line-height: 1.7; margin-bottom: 36px; }
.hero-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* ─── Features ─── */
.section-features { padding: 96px 24px; max-width: 1200px; margin: 0 auto; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
.feature-card { background: var(--bg); border: 1px solid rgba(0,0,0,0.06); border-radius: var(--radius); padding: 32px; transition: all var(--transition); }
.feature-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.feature-icon { font-size: 32px; margin-bottom: 16px; }
.feature-title { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.feature-desc { font-size: 14px; color: var(--text-muted); line-height: 1.6; }

/* ─── Pricing ─── */
.section-pricing { padding: 96px 24px; max-width: 1000px; margin: 0 auto; }
.pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
.pricing-card { background: var(--bg); border: 1px solid rgba(0,0,0,0.08); border-radius: var(--radius); padding: 36px; text-align: center; transition: all var(--transition); position: relative; }
.pricing-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.pricing-popular { border-color: var(--primary); box-shadow: 0 0 0 2px var(--primary); }
.popular-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--primary); color: #fff; padding: 4px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; }
.pricing-name { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
.pricing-price { font-size: 36px; font-weight: 800; color: var(--primary); margin-bottom: 16px; }
.pricing-features { font-size: 14px; color: var(--text-muted); margin-bottom: 24px; line-height: 1.8; }

/* ─── Testimonials ─── */
.section-testimonials { padding: 96px 24px; background: color-mix(in srgb, var(--primary) 4%, var(--bg)); }
.testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; max-width: 1200px; margin: 0 auto; }
.testimonial-card { background: var(--bg); border-radius: var(--radius); padding: 32px; box-shadow: var(--shadow); }
.testimonial-quote { font-size: 16px; font-style: italic; line-height: 1.7; margin-bottom: 16px; color: var(--text); }
.testimonial-author { font-size: 14px; font-weight: 700; color: var(--primary); }

/* ─── CTA ─── */
.section-cta { padding: 96px 24px; background: linear-gradient(135deg, var(--primary), var(--secondary)); text-align: center; }
.cta-content { max-width: 600px; margin: 0 auto; }
.cta-headline { font-size: clamp(28px, 4vw, 40px); font-weight: 800; color: #fff; margin-bottom: 16px; }
.cta-sub { color: rgba(255,255,255,0.85); font-size: 16px; margin-bottom: 32px; }
.section-cta .btn-primary { background: #fff; color: var(--primary); }
.section-cta .btn-primary:hover { background: rgba(255,255,255,0.9); }

/* ─── Contact ─── */
.section-contact { padding: 96px 24px; max-width: 900px; margin: 0 auto; }
.contact-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; }
.contact-form { display: flex; flex-direction: column; gap: 16px; }
.contact-form input, .contact-form textarea { padding: 14px 16px; border: 1px solid rgba(0,0,0,0.1); border-radius: 8px; font-size: 14px; font-family: inherit; transition: border-color var(--transition); background: var(--bg); color: var(--text); }
.contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: var(--primary); }
.contact-info { display: flex; flex-direction: column; gap: 16px; font-size: 15px; color: var(--text-muted); }

/* ─── Footer ─── */
.section-footer { padding: 64px 24px 32px; background: color-mix(in srgb, var(--text) 96%, var(--bg)); color: rgba(255,255,255,0.7); }
.footer-grid { display: grid; grid-template-columns: 2fr repeat(auto-fit, minmax(140px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto 40px; }
.footer-logo { font-size: 20px; font-weight: 800; color: #fff; margin-bottom: 12px; }
.footer-desc { font-size: 14px; line-height: 1.7; }
.footer-col-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.05em; }
.footer-link { display: block; font-size: 14px; margin-bottom: 10px; transition: color var(--transition); }
.footer-link:hover { color: #fff; }
.footer-bottom { text-align: center; font-size: 13px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); max-width: 1200px; margin: 0 auto; }

/* ─── Generic ─── */
.section-generic { padding: 80px 24px; max-width: 1000px; margin: 0 auto; }
.generic-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
.generic-item { padding: 20px; background: color-mix(in srgb, var(--primary) 5%, var(--bg)); border-radius: 8px; font-size: 14px; }

/* ─── Animations ─── */
.fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.fade-in.visible { opacity: 1; transform: translateY(0); }

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .nav-links { display: none; position: absolute; top: 100%; left: 0; right: 0; background: var(--bg); flex-direction: column; padding: 16px 24px; gap: 16px; border-bottom: 1px solid rgba(0,0,0,0.06); box-shadow: var(--shadow); }
  .nav-links.active { display: flex; }
  .nav-cta { display: none; }
  .nav-toggle { display: flex; }
  .hero-headline { font-size: 32px; }
  .contact-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .hero-actions { flex-direction: column; align-items: center; }
  .pricing-grid { grid-template-columns: 1fr; }
}`;

  // ── Build JS ──
  const scriptJS = `// ─── Generated by AI Web Builder ───
document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile menu toggle ──
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      toggle.classList.toggle('open');
    });
    // Close menu when a link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
  }

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Scroll-triggered fade-in animations ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ── Navbar background on scroll ──
  const navbar = document.querySelector('.section-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
    });
  }
});`;

  // ── Build React App.jsx ──
  let reactJSXStr = sectionsHTML
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/onsubmit="event\.preventDefault\(\);\s*alert\('Message sent!'\)"/g, 'onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}');

  const appJSX = `import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Mobile menu toggle
    const toggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const handleToggle = () => {
      navLinks.classList.toggle('active');
      toggle.classList.toggle('open');
    };
    if (toggle && navLinks) {
      toggle.addEventListener('click', handleToggle);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Intersection observer for fade-ins
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.section-navbar');
      if (navbar) {
        navbar.style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (toggle) toggle.removeEventListener('click', handleToggle);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '${plan.color_scheme?.background || '#ffffff'}', color: '${plan.color_scheme?.text || '#111827'}' }}>
      <style>{\`
${stylesCSS.replace(/`/g, '\\`').replace(/\$/g, '\\$')}
        .nav-links.active { display: flex !important; }
      \`}</style>
      ${reactJSXStr}
    </div>
  );
}
`;

  return {
    files: [
      { filename: 'index.html', language: 'html', content: indexHTML },
      { filename: 'styles.css', language: 'css', content: stylesCSS },
      { filename: 'script.js', language: 'javascript', content: scriptJS },
      { filename: 'App.jsx', language: 'javascript', content: appJSX },
    ],
    _fallback: true,
  };
}

function isCodeGenValid(result) {
  return result && Array.isArray(result.files) && result.files.length >= 2 &&
    result.files.every(f => f.filename && f.content && f.content.length > 50);
}

// ─── Code Generation Handler ──────────────────────────────────────────────────

/**
 * POST /api/generate-code
 * Body: { prompt, plan, sub_classification }
 * Returns: { success, files: [{ filename, language, content }], fallback }
 */
export async function handleGenerateCode(req, res) {
  // Set headers for EventStream
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no'); // Prevent proxy buffering (Cloudflare/Nginx)

  // Send an immediate heartbeat to establish connection and prevent Cloudflare 524 timeouts
  res.write(': ping\n\n');

  const sendSSE = (data) => {
    if (res.writableEnded || res.finished) return;
    try {
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    } catch (e) {
      console.warn('Failed to write SSE token in handleGenerateCode:', e.message);
    }
  };

  try {
    const { prompt, plan, sub_classification, filename } = req.body || {};
    if (!plan || !prompt || !filename) {
      sendSSE({ type: 'error', message: 'Prompt, plan, and filename are required' });
      return res.end();
    }

    const codeUserMessage = `Generate the raw source code for the file: "${filename}".

User prompt: """${prompt}"""

Page plan:
${JSON.stringify({
      project_title: plan.project_title,
      project_type: plan.project_type,
      tech_stack: plan.tech_stack,
      color_scheme: plan.color_scheme,
      sections: plan.sections,
      logo_url: plan.logo_url,
    }, null, 2)}

Sub-classification (column/zone breakdown):
${JSON.stringify(sub_classification, null, 2)}

Return ONLY the raw code content for "${filename}". Do not wrap it in JSON or markdown code fences.`;

    let accumulated = '';
    let success = false;

    // Attempt 1: Streamed code generation for the specific file
    try {
      const stream = callAzureOpenAIStream(SYSTEM_PROMPT_FILE_GEN, codeUserMessage, null, null, 16000);
      for await (const chunk of stream) {
        accumulated += chunk;
        sendSSE({ type: 'token', content: chunk });
      }

      if (accumulated.trim().length > 50) {
        success = true;
      }
    } catch (err) {
      console.warn(`Streaming code gen for ${filename} failed:`, err.message);
    }

    // Attempt 2: Shorter retry (also streamed)
    if (!success) {
      try {
        console.log(`Streaming retry for ${filename} with shorter context...`);
        const retryMessage = `Generate the raw source code for file "${filename}".
Colors: primary=${plan.color_scheme?.primary}, secondary=${plan.color_scheme?.secondary}, bg=${plan.color_scheme?.background}, text=${plan.color_scheme?.text}.
Sections: ${plan.sections?.map(s => `${s.id}(${s.type}): "${s.name}"`).join(', ')}.
Return ONLY the raw code content. No markdown fences.`;

        accumulated = '';
        const stream = callAzureOpenAIStream(SYSTEM_PROMPT_FILE_GEN, retryMessage, null, null, 16000);
        for await (const chunk of stream) {
          accumulated += chunk;
          sendSSE({ type: 'token', content: chunk });
        }

        if (accumulated.trim().length > 50) {
          success = true;
        }
      } catch (err) {
        console.warn(`Streaming code gen retry for ${filename} failed:`, err.message);
      }
    }

    // Fallback if both fail
    if (!success) {
      console.warn(`Both streaming code gen attempts for ${filename} failed, using fallback`);
      const fallbackResult = buildFallbackCode(plan, sub_classification);
      const fallbackFile = fallbackResult.files.find(f => f.filename === filename);
      const content = fallbackFile ? fallbackFile.content : '';
      try {
        fs.writeFileSync(path.join(__dirname, 'out.jsx'), content, 'utf8');
      } catch (e) {
        console.warn('Failed to write output fallback code to out.jsx:', e.message);
      }
      sendSSE({ type: 'token', content: content });
      sendSSE({ type: 'fallback', filename, content });
    } else {
      try {
        fs.writeFileSync(path.join(__dirname, 'out.jsx'), accumulated, 'utf8');
      } catch (e) {
        console.warn('Failed to write output code to out.jsx:', e.message);
      }
      sendSSE({ type: 'done', filename, content: accumulated });
      autoInstallDependencies(accumulated);
    }

    res.end();
  } catch (err) {
    console.error('SSE code gen handler error:', err);
    if (!res.writableEnded && !res.finished) {
      try {
        res.write(`data: ${JSON.stringify({ type: 'error', message: err.message || 'Server error' })}\n\n`);
        res.end();
      } catch (e) {
        console.warn('Failed to write error SSE in handleGenerateCode:', e.message);
      }
    }
  }
}

// ─── Standalone Image Generation Handler ──────────────────────────────────────

/**
 * POST /api/generate-image
 * Body: { prompt: string, size?: '1024x1024' | '1024x1536' | '1536x1024' }
 * Returns: { success: boolean, url: string, size: string }
 */
export async function handleGenerateImage(req, res) {
  try {
    const { prompt, size } = req.body || {};
    if (!prompt || !prompt.trim()) {
      return res.status(400).json({ error: 'Image prompt is required' });
    }

    const validSizes = ['1024x1024', '1024x1536', '1536x1024'];
    const imageSize = validSizes.includes(size) ? size : '1024x1024';

    console.log(`[image-gen] Standalone: "${prompt.trim().slice(0, 80)}..." (${imageSize})`);
    const imageUrl = await callAzureImageGen(prompt.trim(), imageSize);

    return res.json({ success: true, url: imageUrl, size: imageSize });
  } catch (err) {
    console.error('[image-gen] Standalone error:', err);
    return res.status(500).json({ error: err.message || 'Image generation failed' });
  }
}

/**
 * POST /api/transcribe
 * Body: audio file (multer)
 * Returns: { success: boolean, text: string }
 */
export async function handleTranscribe(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Audio file is required' });
    }

    const apiKey = process.env.API_KEY;
    const rawEndpoint = process.env.ENDPOINT || process.env.OPENAI_BASE_URL;
    const deployment = process.env.WHISPER_DEPLOYMENT_NAME || 'whisper';
    const apiVersion = process.env.AUDIO_API_VERSION || '2024-06-01';

    if (!apiKey || !rawEndpoint) {
      try { fs.unlinkSync(req.file.path); } catch (e) {}
      return res.status(500).json({ error: 'Missing Azure OpenAI credentials on server' });
    }

    const endpoint = rawEndpoint.replace(/\/openai(\/v\d+|\/deployments)?\/?$/i, '').replace(/\/$/, '');
    const client = new AzureOpenAI({ apiKey, endpoint, deployment, apiVersion });

    console.log(`[transcribe] Transcribing file: ${req.file.path} via deployment: ${deployment} (${apiVersion})`);
    
    const transcription = await client.audio.transcriptions.create({
      file: fs.createReadStream(req.file.path),
      model: deployment,
    });

    console.log(`[transcribe] Result: "${transcription.text}"`);

    // Clean up temp file
    try { fs.unlinkSync(req.file.path); } catch (e) {}

    return res.json({ success: true, text: transcription.text });
  } catch (err) {
    console.error('[transcribe] Error during transcription:', err);
    if (req.file) {
      try { fs.unlinkSync(req.file.path); } catch (e) {}
    }
    return res.status(500).json({ error: err.message || 'Audio transcription failed' });
  }
}


// ═════════════════════════════════════════════════════════════════════════
// APPEND EVERYTHING BELOW THIS LINE TO THE END OF filter.js
//
// It relies on functions already defined earlier in that file:
//   buildFallbackPlan, buildDynamicSubClassification, buildFallbackCode,
//   callAzureOpenAI, withTimeout, parseJson
// Since this is appended to the SAME module, no imports are required —
// just paste it in.
// ═════════════════════════════════════════════════════════════════════════

// ─── Template Library ──────────────────────────────────────────────────────
// One entry per card in templates.html / the old MOCK_TEMPLATES list.
// Each entry only needs a title + the descriptive prompt — the actual
// index.html / styles.css / script.js / App.jsx source is generated
// deterministically (no LLM round-trip, so it's instant) by feeding that
// prompt through your existing buildFallbackPlan → buildDynamicSubClassification
// → buildFallbackCode pipeline. This is the "backend code per template".

export const TEMPLATE_LIBRARY = {
  inspo: { title: 'Inspo Canvas', prompt: 'Build a spatial canvas for collecting, arranging, and sharing visuals. Use an aesthetic design with masonry layout for images.' },
  slides: { title: 'Code Slides', prompt: 'Build a code-powered presentation builder with smooth transitions, interactive slides, and code snippet support. Apply a colorful gradient theme.' },
  maison: { title: 'Maison', prompt: 'Create an editorial e-commerce storefront for home goods named Maison. Use elegant typography, large imagery, and minimal UI elements.' },
  asset: { title: 'AssetWise', prompt: 'Build an internal dashboard for tracking company equipment and assigning assets to employees. Include data tables, status badges, and chart summaries.' },
  jordan: { title: 'Prompt Frame Creative Portfolio', prompt: 'Create a dark-first premium aesthetic portfolio for Jordan Studio.' },
  continuum: { title: 'Continuum', prompt: 'Build a calm, distraction-free habit tracker with streak counters and analytics.' },
  upvote: { title: 'Upvote', prompt: 'Build a feature request and roadmap voting board named Upvote. Let team members submit ideas, upvote what matters most, and see the top-voted items rise to the top so everyone knows what is being built next.' },
  eventspark: { title: 'EventSpark', prompt: 'Build an event discovery and ticketing platform named EventSpark. Include an event grid with photos, categories, an events calendar, ticket purchase flow, and organizer profiles.' },
  wildhaven: { title: 'Wild Haven', prompt: 'Build an editorial booking site named Wild Haven for off-grid glamping retreats. Include a browsable listing grid of retreats with nature photography, an availability calendar, and a booking flow.' },
  dealflow: { title: 'Dealflow', prompt: 'Build a visual sales pipeline CRM named Dealflow with drag-and-drop deal stages, activity tracking, and a dashboard of pipeline value and win rate.' },
  loom: { title: 'Loom', prompt: 'Build a refined artisan fashion storefront named Loom selling handcrafted knitwear, with a seasonal collection hero and a shoppable product grid.' },
  quotekit: { title: 'QuoteKit', prompt: 'Build a sales proposal tool named QuoteKit that lets teams create branded, AI-assisted proposals from reusable content blocks and track proposal win rate.' },
  evergreen: { title: 'Evergreen', prompt: 'Build an editorial wedding website named Evergreen with an RSVP form, event details, registry links, and a photo gallery.' },
  retrofly: { title: 'Retrofly', prompt: 'Build a team retrospective tool named Retrofly that collects feedback in three simple steps, surfaces AI-detected patterns, and tracks action items — no scheduling required.' },
  ember: { title: 'Ember', prompt: 'Build a bold statement portfolio site named Ember for a creative studio, with large typography and a striking two-tone hero.' },
  stackwise: { title: 'Stackwise', prompt: 'Build an inventory management app named Stackwise for modern teams, with AI-powered demand forecasting, SKU tracking, and stock accuracy metrics on a dashboard.' },
  wanderlust: { title: 'Wanderlust', prompt: 'Build a magazine-style travel content platform named Wanderlust featuring long-form travel stories, a destination search, and rich photo-led article layouts.' },
  triage: { title: 'Triage', prompt: 'Build a bug submission tool named Triage with a standardized intake form, severity tracking (P1/P2/P3), and a prioritized issue list.' },
  obsidian: { title: 'Obsidian', prompt: 'Build a cinematic dark photography portfolio named Obsidian for a professional photographer, with a full-bleed gallery and moody, minimal typography.' },
  rentely: { title: 'Rentely', prompt: 'Build a vacation rental marketplace named Rentely with search by destination/dates/guests, a listings grid, and individual stay detail pages.' },
  noire: { title: 'Noire', prompt: 'Build a monochromatic artist portfolio site named Noire with a black-and-white image grid gallery and minimal navigation.' },
  dawnwedding: { title: 'Editorial Dawn Wedding', prompt: 'Build a magazine-style wedding website named Editorial Dawn Wedding with an elegant hero, event timeline, and RSVP form.' },
  parallax: { title: 'Parallax Agency Portfolio', prompt: "Build a premium agency-style portfolio site named Parallax, with a bold \"Shaping what's next\" hero, services grid, and case study previews." },
  echoportfolio: { title: 'Editorial Echo Portfolio', prompt: 'Build a colorful editorial portfolio site named Editorial Echo for a visual storyteller, with a masonry image grid and project categories.' },
  ecommstore: { title: 'Ecommerce Store Website Template', prompt: 'Build a premium ecommerce storefront named Linea with large editorial product photography, a shop grid, and product detail pages.' },
  landingpage: { title: 'Visual Landing Page Website Template', prompt: 'Build a visual landing page for an AI film production company, with a dreamy hero, feature highlights, and a get-started call to action.' },
  proresume: { title: 'Professional Resume', prompt: 'Build a professional resume website for Sarah Martinez, a Senior Product Manager, showcasing work history, skills, and selected work.' },
  resume: { title: 'Resume', prompt: 'Build an ATS-compatible resume website for Elena Rossi, a Creative Director, with a clean single-page layout that passes automated resume screening.' },
};

// In-memory cache so repeat visits to the same template are instant and
// don't re-run the (cheap, but non-zero) plan/sub-classification build.
const _templateBundleCache = new Map();

export function buildTemplateBundle(id) {
  const meta = TEMPLATE_LIBRARY[id];
  if (!meta) return null;

  if (_templateBundleCache.has(id)) return _templateBundleCache.get(id);

  // --- MODIFIED TO LOAD REACT STATIC CODE ---
  const staticDir = path.join(process.cwd(), 'templates_data', id);
  let files = null;
  if (fs.existsSync(staticDir)) {
      files = [];
      const readDirRecursive = (dir, basePath = '') => {
          const items = fs.readdirSync(dir);
          for (const item of items) {
              const fullPath = path.join(dir, item);
              const relativePath = path.join(basePath, item).replace(/\\/g, '/');
              const stat = fs.statSync(fullPath);
              if (stat.isDirectory()) {
                  readDirRecursive(fullPath, relativePath);
              } else {
                  let language = 'javascript';
                  if (item.endsWith('.html')) language = 'html';
                  else if (item.endsWith('.css')) language = 'css';
                  else if (item.endsWith('.json')) language = 'json';
                  
                  files.push({
                      filename: relativePath,
                      language,
                      content: fs.readFileSync(fullPath, 'utf-8')
                  });
              }
          }
      };
      
      try {
          readDirRecursive(staticDir);
      } catch (e) {
          console.error("Error reading template files:", e);
      }
      
      if (files.length === 0) files = null;
  }
  
  const plan = buildFallbackPlan(meta.prompt);
  plan.project_title = meta.title;
  delete plan._fallback;

  const sub_classification = buildDynamicSubClassification(plan);
  
  if (!files) {
      const code = buildFallbackCode(plan, sub_classification);
      files = code.files;
  }

  const bundle = {
    id,
    title: meta.title,
    prompt: meta.prompt,
    plan,
    sub_classification,
    files,
  };

  _templateBundleCache.set(id, bundle);
  return bundle;
}

/**
 * GET /api/templates
 * Returns the catalog (id/title/prompt) for building a picker UI.
 */
export function handleListTemplates(req, res) {
  const list = Object.entries(TEMPLATE_LIBRARY).map(([id, meta]) => ({ id, title: meta.title, prompt: meta.prompt }));
  return res.json({ success: true, templates: list });
}

const SYSTEM_PROMPT_GENERATE_TEMPLATE = `You are an expert front-end engineer. You will be given a description for a website. Generate the complete index.html, styles.css, and script.js for this website from scratch using plain HTML, CSS, and vanilla JavaScript (no framework, no build step). 

CRITICAL RULES:
1. Return ONLY a valid JSON object: { "index_html": "...", "styles_css": "...", "script_js": "..." }
2. Always return the COMPLETE, fully updated content of all three files.
3. Design a highly premium, modern website with beautiful typography, whitespace, and responsive CSS (using flexbox/grid). 
4. Include realistic, high-quality copy and placeholder content.
5. MISSING IMAGE SAFE HANDLING: Do NOT create dummy <img> tags or invent URLs that will break. Instead, design highly premium CSS-based presentation cards using CSS gradients, rounded boxes, borders, and Lucide icons to visually represent items.
6. Keep the HTML semantic and the JS framework-free.
Return ONLY the JSON object, nothing else.`;

export async function generateTemplateBundleAsync(id) {
  return buildTemplateBundle(id);
}

/**
 * GET /api/templates/:id
 * Generates the starter code for a template using the LLM (or serves from cache).
 */
export async function handleGetTemplate(req, res) {
  try {
    const { id } = req.params;
    const bundle = await generateTemplateBundleAsync(id);
    if (!bundle) return res.status(404).json({ error: `Unknown template id: ${id}` });
    return res.json({ success: true, ...bundle });
  } catch (err) {
    console.error('[get-template] Error:', err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}

// ─── AI Edit Companion ─────────────────────────────────────────────────────
// Powers the left-hand chat panel in template-editor.html. Takes the
// three current site files + a plain-English instruction and returns the
// fully updated files in one structured call.

const SYSTEM_PROMPT_EDIT_TEMPLATE = `You are an expert front-end engineer acting as an "AI edit companion" for a static website built with plain HTML, CSS, and JavaScript (no framework, no build step). You will be given the current index.html, styles.css, and script.js plus a user edit instruction. Apply exactly the requested change while preserving everything else unless the instruction explicitly says to remove it.

CRITICAL RULES:
1. Return ONLY a valid JSON object: { "index_html": "...", "styles_css": "...", "script_js": "..." }
2. Always return the COMPLETE, fully updated content of all three files — never partial diffs, never "// unchanged" placeholders.
3. Never delete existing sections, copy, or functionality unless explicitly asked to remove them.
4. Keep using the existing CSS custom properties (--primary, --secondary, --accent, --bg, --text) for theming; if asked to recolor, update those variables rather than hardcoding new colors everywhere.
5. Keep the HTML semantic (header/nav/main/section/footer) and the JS framework-free (vanilla DOM APIs only).
6. Do not include markdown code fences anywhere in the JSON string values — the values must be raw file contents.
Return ONLY the JSON object, nothing else.`;

const editTemplateResponseFormat = {
  type: "json_schema",
  json_schema: {
    name: "template_edit",
    strict: true,
    schema: {
      type: "object",
      properties: {
        index_html: { type: "string" },
        styles_css: { type: "string" },
        script_js: { type: "string" },
        summary: { type: "string" },
      },
      required: ["index_html", "styles_css", "script_js", "summary"],
      additionalProperties: false
    }
  }
};

/**
 * POST /api/edit-template
 * Body: { files: { index_html, styles_css, script_js }, prompt, history? }
 * Returns: { success, files: { index_html, styles_css, script_js }, summary }
 */
export async function handleEditTemplate(req, res) {
  try {
    const { files, prompt, history } = req.body || {};
    if (!files || !prompt || !prompt.trim()) {
      return res.status(400).json({ error: 'files and prompt are required' });
    }

    let historyContext = '';
    if (Array.isArray(history) && history.length > 0) {
      historyContext = `\n\nPREVIOUSLY APPLIED EDITS (already present in the current files, applied in order — preserve all of them unless this new instruction overrides them):\n${history.map(h => `- ${h}`).join('\n')}`;
    }

    const userMessage = `Current index.html:
\`\`\`html
${files.index_html || ''}
\`\`\`

Current styles.css:
\`\`\`css
${files.styles_css || ''}
\`\`\`

Current script.js:
\`\`\`javascript
${files.script_js || ''}
\`\`\`

Edit instruction: "${prompt}"${historyContext}

Apply this instruction and return the complete updated files as the JSON object described in the system prompt. Also include a one-sentence "summary" of what you changed, written for the user (e.g. "Switched the accent color to emerald green and updated the hero headline.").`;

    let result = null;
    try {
      const raw = await withTimeout(
        callAzureOpenAI(SYSTEM_PROMPT_EDIT_TEMPLATE, userMessage, null, null, 8000, { type: 'json_object' }),
        60000,
        null
      );
      if (!raw) throw new Error('Edit request timed out');
      result = parseJson(raw);
    } catch (err) {
      console.error('[edit-template] LLM call/parse failed:', err.message);
      return res.status(500).json({ error: 'Failed to generate that edit. Please try again or rephrase the request.' });
    }

    return res.json({
      success: true,
      files: {
        index_html: result.index_html || files.index_html,
        styles_css: result.styles_css || files.styles_css,
        script_js: result.script_js || files.script_js,
      },
      summary: result.summary || 'Applied your requested change.',
    });
  } catch (err) {
    console.error('[edit-template] Error:', err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}



// ─── DALL-E Placeholder Image Handler ───────────────────────────────────────

const _dalleImageCache = new Map();

export async function handlePlaceholderImage(req, res) {
  const filename = path.basename(req.path);
  const keyword = path.parse(filename).name.replace(/-/g, ' ');
  
  if (_dalleImageCache.has(keyword)) {
    try {
      const url = await _dalleImageCache.get(keyword);
      return res.redirect(url);
    } catch (e) {
      // If the cached promise failed, remove it and try again
      _dalleImageCache.delete(keyword);
    }
  }

  // Generate a prompt for DALL-E based on the keyword
  const imagePrompt = `A high quality, beautiful aesthetic web design placeholder image representing: ${keyword}. Clean composition, modern aesthetic, professional photography.`;

  console.log(`[dalle-placeholder] Generating image for: "${keyword}"...`);
  
  // Store the promise in the cache so concurrent requests wait for the same generation
  const generationPromise = callAzureImageGen(imagePrompt, '1024x1024');
  _dalleImageCache.set(keyword, generationPromise);

  try {
    const url = await generationPromise;
    console.log(`[dalle-placeholder] Successfully generated image for "${keyword}": ${url}`);
    res.redirect(url);
  } catch (err) {
    console.error(`[dalle-placeholder] Error generating image for "${keyword}":`, err.message);
    _dalleImageCache.delete(keyword);
    // Fallback to pollinations.ai if DALL-E fails
    res.redirect(`https://image.pollinations.ai/prompt/${encodeURIComponent(keyword)}?width=800&height=600&nologo=true`);
  }
}

import fsSync from 'fs';
import pathModule from 'path';
import { execSync } from 'child_process';

/**
 * POST /api/clone-template
 * Clones a real boilerplate template and injects AI customizations.
 */
export async function handleCloneTemplate(req, res) {
  try {
    const { templateId, prompt } = req.body;
    if (!templateId) return res.status(400).json({ error: 'templateId required' });

    const templatePath = pathModule.resolve('./templates', templateId);
    if (!fsSync.existsSync(templatePath)) {
      return res.status(404).json({ error: 'Template not found in /templates directory' });
    }

    const workspaceId = `ws-${Date.now()}`;
    const workspacePath = pathModule.resolve('./workspaces', workspaceId);
    
    // 1. Clone the template directory
    fsSync.cpSync(templatePath, workspacePath, { recursive: true });

    // 2. Read metadata and AI customization (mocked logic or LLM call here)
    const metaPath = pathModule.join(workspacePath, 'meta.json');
    let meta = {};
    if (fsSync.existsSync(metaPath)) {
      meta = JSON.parse(fsSync.readFileSync(metaPath, 'utf8'));
    }

    const systemPrompt = `You are an expert React developer. Modifying the following App.jsx file based on the template prompt: ${meta.prompt || ''}. The user also requested: ${prompt}. Return ONLY the new App.jsx content as plain text, no markdown blocks.`;
    
    const appJsxPath = pathModule.join(workspacePath, 'src', 'App.jsx');
    let currentAppJsx = '';
    if (fsSync.existsSync(appJsxPath)) {
      currentAppJsx = fsSync.readFileSync(appJsxPath, 'utf8');
      
      // Call Azure OpenAI (using the existing callOpenAI wrapper from filter.js)
      try {
        const aiResponse = await callOpenAI(
          systemPrompt,
          [{ role: 'user', content: `Current App.jsx:\n\n${currentAppJsx}` }],
          { max_tokens: 4000, temperature: 0.7 }
        );
        
        let newContent = aiResponse.content;
        // Clean up potential markdown blocks
        if (newContent.startsWith('```')) {
          newContent = newContent.replace(/^```(jsx|javascript|js)?\n/, '').replace(/\n```$/, '');
        }
        
        fsSync.writeFileSync(appJsxPath, newContent);
        console.log(`[clone-template] Customized ${workspaceId} via AI.`);
      } catch (aiErr) {
        console.error('AI customization failed, keeping original boilerplate:', aiErr.message);
      }
    }

    // 3. Build the customized workspace
    try {
      execSync('npm install', { cwd: workspacePath, stdio: 'ignore' });
      execSync('npm run build', { cwd: workspacePath, stdio: 'ignore' });
    } catch (buildErr) {
      console.error('Build failed for workspace:', buildErr.message);
    }

    return res.json({ success: true, workspaceId, previewUrl: `/workspaces/${workspaceId}/dist/index.html` });
  } catch (err) {
    console.error('[clone-template] Error:', err);
    return res.status(500).json({ error: err.message });
  }
}

