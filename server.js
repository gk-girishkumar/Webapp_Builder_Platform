import express from 'express';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import os from 'os';
import { handleFilterPrompt, handleGeneratePlan, handleAnalyzeAndPlan, handleGenerateCode, handleConfig, handleGenerateImage, handleGenerateExamplePrompt, handleCustomizeCode, handleTranscribe, handleGetTemplate, handleListTemplates, handleEditTemplate, handlePlaceholderImage, handleCloneTemplate } from './filter.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.resolve('./')));
app.use('/generated-images', express.static(path.resolve('./generated-images')));
app.use('/public-pdfs', express.static(path.resolve('./public-pdfs')));
app.use('/workspaces', express.static(path.resolve('./workspaces')));

// DALL-E Placeholder Fallback for broken template images
app.get('/images/*', handlePlaceholderImage);

// Configure multer for image uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, os.tmpdir()),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf', 'audio/webm', 'audio/wav', 'audio/mpeg', 'audio/ogg', 'audio/mp4', 'audio/x-m4a'];
    if (allowed.includes(file.mimetype) || file.originalname.match(/\.(mp3|wav|webm|ogg|m4a)$/i)) {
      cb(null, true);
    } else {
      cb(new Error('Only image, PDF, and audio files are allowed'));
    }
  },
});

const PORT = process.env.PORT || 3000;

// Routes
app.post('/api/filter-prompt', upload.single('image'), handleFilterPrompt);
app.post('/api/generate-plan', upload.single('image'), handleGeneratePlan);
app.post('/api/analyze-and-plan', upload.single('image'), handleAnalyzeAndPlan);
app.post('/api/generate-code', express.json({ limit: '50mb' }), handleGenerateCode);
app.get('/api/config', handleConfig);
app.post('/api/generate-image', express.json(), handleGenerateImage);
app.post('/api/generate-example-prompt', express.json(), handleGenerateExamplePrompt);
app.post('/api/customize-code', upload.any(), handleCustomizeCode);
app.post('/api/transcribe', upload.single('audio'), handleTranscribe);
app.get('/api/templates', handleListTemplates);
app.get('/api/templates/:id', handleGetTemplate);
app.post('/api/edit-template', express.json({ limit: '50mb' }), handleEditTemplate);
app.post('/api/clone-template', express.json({ limit: '50mb' }), handleCloneTemplate);

app.listen(PORT, () => {
  console.log(`Filter API listening on http://localhost:${PORT}`);
});

