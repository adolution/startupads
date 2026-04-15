import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.m3u8': 'application/vnd.apple.mpegurl',
};

/* Legacy URL → new /de/ path (301 permanent redirect) */
const LEGACY_REDIRECTS = {
  '/index.html':       '/de/',
  '/impressum.html':   '/de/impressum.html',
  '/datenschutz.html': '/de/datenschutz.html',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];

  /* Root → /de/ (302 temporary — lets search engines discover both versions) */
  if (urlPath === '/') {
    res.writeHead(302, { Location: '/de/' });
    res.end();
    return;
  }

  /* Legacy URLs → 301 to /de/ equivalents */
  if (LEGACY_REDIRECTS[urlPath]) {
    res.writeHead(301, { Location: LEGACY_REDIRECTS[urlPath] });
    res.end();
    return;
  }

  /* Directory index: /de/ → /de/index.html, /en/ → /en/index.html */
  if (urlPath.endsWith('/')) {
    urlPath += 'index.html';
  }

  const filePath = path.join(__dirname, urlPath);
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`404 Not Found: ${urlPath}`);
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
