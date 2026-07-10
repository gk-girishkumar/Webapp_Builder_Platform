import fs from 'fs';
import path from 'path';
import { AzureOpenAI } from 'openai';
import { config } from 'dotenv';

config(); // Load .env

const apiKey = process.env.API_KEY || process.env.IMAGE_API_KEY;
const rawEndpoint = process.env.ENDPOINT || process.env.IMAGE_ENDPOINT;
const endpoint = rawEndpoint.replace(/\/openai(\/v\d+|\/deployments)?\/?$/i, '').replace(/\/$/, '');

const client = new AzureOpenAI({
  apiKey,
  endpoint,
  deployment: process.env.DEPLOYMENT_NAME || 'gpt-4o',
  apiVersion: process.env.API_VERSION || '2024-02-15-preview',
});

async function refactorTemplate(templateDir) {
  const appFile = path.join(templateDir, 'src', 'App.jsx');
  const compDir = path.join(templateDir, 'src', 'components');

  if (!fs.existsSync(appFile)) return;
  if (fs.existsSync(compDir)) {
    console.log(`[SKIP] ${path.basename(templateDir)} already has a components directory.`);
    return;
  }

  console.log(`\n===========================================`);
  console.log(`[REFACTORING] ${path.basename(templateDir)}`);
  
  const originalCode = fs.readFileSync(appFile, 'utf8');

  const systemPrompt = `You are an expert React architect. The user is providing a monolithic 500+ line App.jsx file.
Your task is to heavily refactor this code into a clean, multi-file modular architecture.
CRITICAL REQUIREMENTS:
1. Output ONLY a valid JSON object. No markdown formatting, no \`\`\`json wrappers.
2. The JSON keys MUST be file paths relative to the template root (e.g., "src/App.jsx", "src/components/Navbar.jsx", "src/components/Hero.jsx", "src/data.js").
3. The JSON values MUST be the raw string content of that file.
4. Extract every major section (Navbar, Hero, Footer, Grid) into its own file inside "src/components/".
5. Move all static data arrays and constants (e.g., navItems, images) into "src/data.js" or keep them in their specific components if purely local.
6. Make sure all 'lucide-react' imports are correctly placed in the files that use them.
7. Ensure "src/App.jsx" acts simply as the root layout, importing the newly created components.
8. Output ONLY JSON, starting with { and ending with }. DO NOT wrap the output in markdown.`;

  const userPrompt = `Refactor this App.jsx into modular components:\n\n${originalCode}`;

  try {
    const result = await client.chat.completions.create({
      model: process.env.DEPLOYMENT_NAME || 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: "json_object" }
    });

    let jsonStr = result.choices[0].message.content;
    
    // Fallback cleanup if the LLM hallucinated markdown
    jsonStr = jsonStr.replace(/^```(json)?\n/, '').replace(/```$/, '').trim();
    
    const files = JSON.parse(jsonStr);

    fs.mkdirSync(compDir, { recursive: true });

    for (const [filePath, content] of Object.entries(files)) {
      const fullPath = path.join(templateDir, filePath);
      const dirName = path.dirname(fullPath);
      if (!fs.existsSync(dirName)) fs.mkdirSync(dirName, { recursive: true });
      fs.writeFileSync(fullPath, content);
      console.log(`  - Wrote ${filePath}`);
    }

    console.log(`[SUCCESS] Refactored ${path.basename(templateDir)} into ${Object.keys(files).length} files.`);
  } catch (e) {
    console.error(`[ERROR] Failed to refactor ${path.basename(templateDir)}:`, e.message);
  }
}

async function run() {
  const templatesDir = path.join(process.cwd(), 'templates_data');
  const folders = fs.readdirSync(templatesDir).filter(f => fs.statSync(path.join(templatesDir, f)).isDirectory());
  
  for (const folder of folders) {
    // Skip asset or other non-template dirs
    if (folder === 'asset') continue;
    await refactorTemplate(path.join(templatesDir, folder));
    // Sleep to avoid rate limits
    await new Promise(r => setTimeout(r, 4000));
  }
  console.log("\nALL TEMPLATES REFACTORED!");
}

run();
