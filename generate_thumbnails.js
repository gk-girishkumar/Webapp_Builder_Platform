import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = path.join(__dirname, 'templates_data');
const PREVIEWS_DIR = path.join(__dirname, 'prompt-filter-react', 'public', 'previews');

// TEMPLATE_LIBRARY
const TEMPLATE_LIBRARY = {
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

if (!fs.existsSync(PREVIEWS_DIR)) {
  fs.mkdirSync(PREVIEWS_DIR, { recursive: true });
}

// Render a stunning generic frontend for any template
function renderPreviewHTML(templateId, meta) {
  // Generate distinct colors based on the template ID string
  const hash = templateId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue1 = (hash * 137) % 360;
  const hue2 = (hash * 271) % 360;
  
  // Decide layout type
  const isDark = hash % 2 === 0;
  
  const bgClass = isDark ? 'bg-slate-900' : 'bg-slate-50';
  const textClass = isDark ? 'text-white' : 'text-slate-900';
  const mutedClass = isDark ? 'text-slate-400' : 'text-slate-500';
  const cardClass = isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200';
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: 'Inter', sans-serif; overflow: hidden; margin: 0; }
    .hero-gradient {
      background: linear-gradient(135deg, hsl(${hue1}, 80%, ${isDark ? 30 : 80}%), hsl(${hue2}, 80%, ${isDark ? 20 : 90}%));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .blob {
      position: absolute;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, hsla(${hue1}, 80%, 50%, 0.15) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(40px);
      z-index: 0;
    }
  </style>
</head>
<body class="${bgClass} ${textClass} w-full h-screen relative flex flex-col">
  <div class="blob top-[-200px] left-[-200px]"></div>
  <div class="blob bottom-[-200px] right-[-200px]" style="background: radial-gradient(circle, hsla(${hue2}, 80%, 50%, 0.15) 0%, transparent 70%);"></div>
  
  <!-- Navbar -->
  <header class="relative z-10 flex items-center justify-between px-10 py-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}">
    <div class="font-bold text-xl tracking-tight flex items-center gap-2">
      <div class="w-8 h-8 rounded-lg" style="background: linear-gradient(135deg, hsl(${hue1}, 80%, 50%), hsl(${hue2}, 80%, 50%))"></div>
      ${meta.title.split(' ')[0]}
    </div>
    <div class="flex gap-8 text-sm font-medium ${mutedClass}">
      <span>Features</span>
      <span>Solutions</span>
      <span>Pricing</span>
      <span>Docs</span>
    </div>
    <div class="flex gap-4">
      <button class="px-4 py-2 text-sm font-medium rounded-lg border ${isDark ? 'border-slate-700' : 'border-slate-300'}">Log in</button>
      <button class="px-4 py-2 text-sm font-medium rounded-lg text-white" style="background: linear-gradient(135deg, hsl(${hue1}, 80%, 50%), hsl(${hue2}, 80%, 50%))">Get Started</button>
    </div>
  </header>

  <!-- Hero Section -->
  <main class="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-8 border ${isDark ? 'border-slate-700 bg-slate-800/50' : 'border-slate-300 bg-white/50'} backdrop-blur">
      <span class="w-2 h-2 rounded-full" style="background: hsl(${hue1}, 80%, 50%)"></span>
      Introducing ${meta.title}
    </div>
    <h1 class="text-6xl font-extrabold tracking-tight leading-tight mb-6">
      The platform for <br />
      <span class="hero-gradient">${meta.title}</span>
    </h1>
    <p class="text-xl ${mutedClass} max-w-3xl mb-10 leading-relaxed">
      ${meta.prompt}
    </p>
    <div class="flex gap-4 w-full justify-center">
      <button class="px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition transform hover:-translate-y-1" style="background: linear-gradient(135deg, hsl(${hue1}, 80%, 50%), hsl(${hue2}, 80%, 50%))">
        Start building today
      </button>
      <button class="px-8 py-4 rounded-xl font-semibold border ${isDark ? 'border-slate-700 bg-slate-800 hover:bg-slate-700' : 'border-slate-300 bg-white hover:bg-slate-50'} transition">
        View documentation
      </button>
    </div>
  </main>
  
  <!-- Mockup UI peeking from bottom -->
  <div class="relative z-10 w-full max-w-6xl mx-auto flex gap-6 px-10 pb-0" style="height: 250px;">
    <div class="flex-1 rounded-t-2xl border-t border-l border-r ${cardClass} shadow-2xl p-6 overflow-hidden flex flex-col gap-4">
      <div class="w-32 h-4 rounded-full ${isDark ? 'bg-slate-700' : 'bg-slate-200'}"></div>
      <div class="w-full h-32 rounded-xl ${isDark ? 'bg-slate-700' : 'bg-slate-200'}"></div>
      <div class="flex gap-4">
        <div class="w-1/2 h-16 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-200'}"></div>
        <div class="w-1/2 h-16 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-200'}"></div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

async function run() {
  const app = express();
  
  app.get('/preview/:id', (req, res) => {
    const id = req.params.id;
    const meta = TEMPLATE_LIBRARY[id];
    if (meta) {
      res.send(renderPreviewHTML(id, meta));
    } else {
      res.status(404).send('Not found');
    }
  });

  const server = app.listen(9999, () => {
    console.log('Thumbnail server listening on port 9999');
  });

  const templates = Object.keys(TEMPLATE_LIBRARY);
  console.log(`Found ${templates.length} templates.`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const id of templates) {
    const imgPath = path.join(PREVIEWS_DIR, `${id}.jpg`);

    try {
      console.log(`Processing ${id}...`);
      await page.goto(`http://localhost:9999/preview/${id}`, { waitUntil: 'networkidle0' });
      await page.screenshot({ path: imgPath, quality: 80, type: 'jpeg' });
      console.log(`Saved screenshot for ${id}`);
    } catch (err) {
      console.error(`Error capturing ${id}:`, err);
    }
  }

  await browser.close();
  server.close();
  console.log('Finished generating thumbnails!');
}

run();
