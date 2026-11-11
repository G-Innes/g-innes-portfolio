// Renders the app to static HTML after `vite build` and writes it into
// dist/index.html, so the page content exists before any JavaScript runs
// (search engines, link previews, slow connections). The client then hydrates.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = path.join(root, 'dist/index.html');
const ssrDir = path.join(root, 'dist-ssr');
const placeholder = '<!--app-html-->';

const { render } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = await readFile(htmlPath, 'utf8');
if (!template.includes(placeholder)) {
  throw new Error(`Prerender placeholder ${placeholder} missing from dist/index.html`);
}

// Function replacement so `$` sequences in the markup are not treated as patterns
await writeFile(htmlPath, template.replace(placeholder, () => render()));
await rm(ssrDir, { recursive: true, force: true });

console.log('✓ prerendered dist/index.html');
