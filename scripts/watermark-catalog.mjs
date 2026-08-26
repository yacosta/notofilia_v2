import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { watermarkCatalog } from './lib/catalog-watermark.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(root, 'catalog-src', 'catalog');
const displayRoot = path.join(root, 'public', 'images', 'catalog');
const downloadRoot = path.join(root, 'public', 'images', 'catalog-download');

const display = await watermarkCatalog({ sourceRoot, destRoot: displayRoot, style: 'corner' });
const download = await watermarkCatalog({ sourceRoot, destRoot: downloadRoot, style: 'tile' });

console.log(`Display (corner): ${display.length} → public/images/catalog/`);
console.log(`Download (tile): ${download.length} → public/images/catalog-download/`);
for (const item of display) {
  console.log(`  ${item.relativePath}`);
}
