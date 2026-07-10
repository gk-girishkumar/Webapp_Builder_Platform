import fs from 'fs';
import path from 'path';
import { AzureOpenAI } from 'openai';
import { config } from 'dotenv';

config(); // Load .env

const TEMPLATE_LIBRARY = {
  // Only defining the ones we want to generate, skipping 'inspo' since it's already done!
  "ecommerce-sneakers": { title: "HypeKicks", prompt: "A modern, high-energy e-commerce store for limited edition sneakers." },
  "saas-dashboard": { title: "Nexus Analytics", prompt: "A sleek, dark-mode B2B SaaS dashboard for tracking real-time metrics." },
  "portfolio-minimal": { title: "Jane Doe Design", prompt: "A minimalist, elegant personal portfolio for a senior product designer." },
  "agency-creative": { title: "Aura Studio", prompt: "A bold, colorful, and highly animated landing page for a creative agency." },
  "travel-blog": { title: "Wanderlust", prompt: "A beautiful, photo-centric travel blog featuring masonry grids of destinations." },
  "restaurant-fine": { title: "L'Etoile", prompt: "An elegant, sophisticated website for a Michelin-star fine dining restaurant." },
  "fitness-app": { title: "FitCore", prompt: "A high-conversion landing page for a mobile fitness tracking app." },
  "real-estate": { title: "Luxe Living", prompt: "A premium real estate listing site for luxury modern homes." },
  "crypto-exchange": { title: "BlockTrade", prompt: "A futuristic, trustworthy landing page for a cryptocurrency exchange." },
  "medical-clinic": { title: "Nova Health", prompt: "A clean, reassuring, and accessible website for a modern medical clinic." },
  "event-conference": { title: "TechSummit 2024", prompt: "An exciting, schedule-focused landing page for a major tech conference." },
  "podcast-network": { title: "SoundWaves", prompt: "A trendy, audio-focused platform for discovering and listening to podcasts." },
  "education-course": { title: "CodeMastery", prompt: "A compelling sales page for an advanced online programming course." },
  "nonprofit-charity": { title: "Hope Foundation", prompt: "An emotional, donation-driven website for a global charity organization." },
  "music-artist": { title: "The Midnight", prompt: "A moody, aesthetic promotional site for a synthwave music artist's new album." },
  "wedding-rsvp": { title: "Sarah & John", prompt: "A romantic, elegant wedding website with an RSVP form and schedule." },
  "photography-portfolio": { title: "Lens & Light", prompt: "A highly visual, minimalist portfolio for a professional wedding photographer." },
  "bakery-shop": { title: "Sweet Delights", prompt: "A warm, inviting e-commerce site for a local artisanal bakery." },
  "law-firm": { title: "Justice Partners", prompt: "A professional, authoritative website for a corporate law firm." },
  "yoga-studio": { title: "Zen Space", prompt: "A calming, earthy website for a yoga and meditation studio." },
  "car-rental": { title: "DriveElite", prompt: "A sleek booking platform for luxury sports car rentals." },
  "pet-care": { title: "Paws & Play", prompt: "A playful, colorful website for a pet daycare and grooming service." },
  "book-launch": { title: "The Silent Echo", prompt: "A mysterious, captivating landing page for a best-selling thriller novel." },
  "interior-design": { title: "Haus", prompt: "A chic, editorial-style website for an avant-garde interior design firm." },
  "cleaning-service": { title: "SparkleClean", prompt: "A trustworthy, clean, and straightforward site for a home cleaning service." },
  "gaming-clan": { title: "Apex Legion", prompt: "A dark, aggressive, and highly stylized website for a competitive esports team." },
  "job-board": { title: "TechTalent", prompt: "A clean, functional, and modern job board for software engineering roles." }
};

const apiKey = process.env.API_KEY || process.env.IMAGE_API_KEY;
const rawEndpoint = process.env.ENDPOINT || process.env.IMAGE_ENDPOINT;
const endpoint = rawEndpoint.replace(/\/openai(\/v\d+|\/deployments)?\/?$/i, '').replace(/\/$/, '');

const client = new AzureOpenAI({
  apiKey,
  endpoint,
  deployment: process.env.DEPLOYMENT_NAME || 'gpt-4o',
  apiVersion: process.env.API_VERSION || '2024-02-15-preview',
});

async function generateTemplate(id, data) {
  console.log(`\n===========================================`);
  console.log(`[GENERATING] ${id} - ${data.title}`);
  
  const systemPrompt = `You are an expert React developer. Your task is to generate a SINGLE fully functional, premium, highly complex React file (App.jsx) for a specific website template.
CRITICAL REQUIREMENTS:
1. Output ONLY valid React JSX code. No markdown formatting, no \`\`\`jsx wrappers, no explanations.
2. Use Tailwind CSS for styling. Use modern, premium design patterns (glassmorphism, subtle gradients, rich typography, plenty of whitespace).
3. The code MUST be at least 400-500 lines long. Include a Hero section, Features/Showcase, Masonry Gallery or Grid, Testimonials, Pricing/Stats, and a massive Footer.
4. Use 'lucide-react' for all icons.
5. Use Unsplash placeholder images (e.g., https://images.unsplash.com/photo-XXX?auto=format&fit=crop&w=800&q=80) where appropriate.
6. The app MUST look incredible and highly polished. Do not return basic or simple layouts.
7. Default export must be App().`;

  const userPrompt = `Generate the premium React App.jsx for the following template:
Title: ${data.title}
Context: ${data.prompt}
Make it massive, beautiful, and fully complete in one file.`;

  try {
    const result = await client.chat.completions.create({
      model: process.env.DEPLOYMENT_NAME || 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]
    });

    let code = result.choices[0].message.content;
    
    // Clean up if it still included markdown
    code = code.replace(/^```(jsx|js|tsx)\n/, '').replace(/```$/, '');
    
    const targetDir = path.join(process.cwd(), 'templates_data', id, 'src');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(targetDir, 'App.jsx'), code);
    console.log(`[SUCCESS] Wrote App.jsx for ${id} (${code.split('\\n').length} lines)`);
  } catch (e) {
    console.error(`[ERROR] Failed to generate ${id}:`, e.message);
  }
}

async function run() {
  const templates = Object.entries(TEMPLATE_LIBRARY);
  for (const [id, data] of templates) {
    await generateTemplate(id, data);
    // Sleep a few seconds to avoid rate limits
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log("\nALL TEMPLATES GENERATED!");
}

run();
