import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { watermarkCatalog } from './lib/catalog-watermark.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(root, 'catalog-src', 'catalog');
const destRoot = path.join(root, 'public', 'images', 'catalog');

const results = await watermarkCatalog({ sourceRoot, destRoot });

console.log(`Watermarked ${results.length} catalog image${results.length === 1 ? '' : 's'} → public/images/catalog/`);
for (const item of results) {
  console.log(`  ${item.relativePath}`);
}
