import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

const staticPath = path.join(__dirname, 'dist/public');
console.log('[Server] Working directory:', __dirname);
console.log('[Server] Static path:', staticPath);
console.log('[Server] Static path exists:', fs.existsSync(staticPath));
console.log('[Server] Index.html exists:', fs.existsSync(path.join(staticPath, 'index.html')));

// Serve static files from dist/public
app.use(express.static(staticPath, { index: false }));

// SPA fallback - serve index.html for all routes (Express 5 compatible)
app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.get(/^\/(?!.*\.)/, (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Server] ✓ Listening on port ${PORT}`);
  console.log(`[Server] ✓ Local: http://localhost:${PORT}`);
  console.log(`[Server] ✓ Ready for requests!`);
});

// Handle errors
process.on('uncaughtException', (err) => {
  console.error('[Server] Uncaught Exception:', err);
  process.exit(1);
});

server.on('error', (err) => {
  console.error('[Server] Server error:', err);
  process.exit(1);
});
