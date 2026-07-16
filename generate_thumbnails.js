import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import puppeteer from 'puppeteer';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = path.join(__dirname, 'templates');
const PREVIEWS_DIR = path.join(__dirname, 'prompt-filter-react', 'public', 'previews');

if (!fs.existsSync(PREVIEWS_DIR)) {
  fs.mkdirSync(PREVIEWS_DIR, { recursive: true });
}

async function run() {
  console.log('Starting thumbnail generation...');
  const templates = fs.readdirSync(TEMPLATES_DIR).filter(file => {
    const fullPath = path.join(TEMPLATES_DIR, file);
    return fs.statSync(fullPath).isDirectory() && fs.existsSync(path.join(fullPath, 'meta.json'));
  });

  console.log(`Found ${templates.length} templates: ${templates.join(', ')}`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  for (const id of templates) {
    const templatePath = path.join(TEMPLATES_DIR, id);
    const metaPath = path.join(templatePath, 'meta.json');
    const pkgPath = path.join(templatePath, 'package.json');
    
    console.log(`Processing template: ${id}...`);

    try {
      // 1. Build the project if needed
      if (fs.existsSync(pkgPath)) {
        console.log(`Building ${id}...`);
        execSync('npm run build', { cwd: templatePath, stdio: 'ignore' });
      }

      // 2. Serve the dist directory
      const distPath = path.join(templatePath, 'dist');
      if (!fs.existsSync(distPath)) {
        console.warn(`No dist folder found for ${id}, skipping screenshot.`);
        continue;
      }

      const app = express();
      app.use(express.static(distPath));
      
      const server = await new Promise((resolve) => {
        const srv = app.listen(0, () => resolve(srv));
      });
      const port = server.address().port;

      // 3. Capture screenshot
      const localUrl = `http://localhost:${port}`;
      const imgPath = path.join(PREVIEWS_DIR, `${id}.jpg`);
      const localThumbPath = path.join(templatePath, 'thumbnail.png');

      console.log(`Taking screenshot for ${id} at ${localUrl}...`);
      await page.goto(localUrl, { waitUntil: 'networkidle0' });
      
      // Save to both locations
      await page.screenshot({ path: imgPath, quality: 80, type: 'jpeg' });
      await page.screenshot({ path: localThumbPath, type: 'png' });
      
      console.log(`Saved screenshot for ${id}`);

      // 4. Cleanup
      server.close();
    } catch (err) {
      console.error(`Error capturing ${id}:`, err);
    }
  }

  await browser.close();
  console.log('Finished generating thumbnails!');
}

run();
