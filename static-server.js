import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.STATIC_PORT || 8080;
const root = path.resolve('./');

app.use(express.static(root, { extensions: ['html', 'htm'] }));

app.get('/', (req, res) => {
  res.sendFile(path.join(root, 'prompt-filter.html'));
});

app.listen(PORT, () => console.log(`Static server running at http://localhost:${PORT}/prompt-filter.html`));
