import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { processCatalogImage } from './lib/catalog-watermark.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(root, 'catalog-src', 'catalog');
const destRoot = path.join(root, 'public', 'watermark-preview');

const samples = [
  { file: 'philippines/1-peso-front.jpg', title: 'Filipinas 1 peso (note on white)' },
  { file: 'netherlands/1761-ducat-utrecht-ngc.png', title: 'Utrecht 1761 ducat (NGC slab)' },
  { file: 'philippines/hero-filipinas.jpg', title: 'Filipinas series hero (busy image)' },
];

await mkdir(destRoot, { recursive: true });

const rows = [];

for (const sample of samples) {
  const src = path.join(sourceRoot, sample.file);
  const ext = path.extname(sample.file).toLowerCase();
  const slug = sample.file.replaceAll('/', '-').replace(/\.[^.]+$/, '');
  const cornerPath = path.join(destRoot, `${slug}-corner${ext}`);
  const tilePath = path.join(destRoot, `${slug}-tile${ext}`);
  const pairPath = path.join(destRoot, `${slug}-compare.jpg`);

  await processCatalogImage(src, cornerPath, sample.file, { style: 'corner' });
  await processCatalogImage(src, tilePath, sample.file, { style: 'tile' });
  await writeLabeledPair(cornerPath, tilePath, pairPath);
  rows.push({ ...sample, slug, pair: path.basename(pairPath), corner: path.basename(cornerPath), tile: path.basename(tilePath) });
  console.log(`Previewed ${sample.file}`);
}

await writeFile(path.join(destRoot, 'index.html'), comparisonPage(rows));
console.log(`Open /watermark-preview/ (files in ${destRoot})`);

async function writeLabeledPair(cornerPath, tilePath, destPath) {
  const targetH = 520;
  const [corner, tile] = await Promise.all([
    sharp(cornerPath).resize({ height: targetH }).jpeg({ quality: 82 }).toBuffer(),
    sharp(tilePath).resize({ height: targetH }).jpeg({ quality: 82 }).toBuffer(),
  ]);
  const [cMeta, tMeta] = await Promise.all([sharp(corner).metadata(), sharp(tile).metadata()]);
  const gap = 16;
  const labelH = 44;
  const width = (cMeta.width ?? 1) + gap + (tMeta.width ?? 1);
  const height = labelH + targetH;

  const header = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${labelH}">
  <rect width="100%" height="100%" fill="#0A0A09"/>
  <text x="${Math.round((cMeta.width ?? 0) / 2)}" y="28" text-anchor="middle" fill="#E7DDC4" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">Corner signature (40%)</text>
  <text x="${(cMeta.width ?? 0) + gap + Math.round((tMeta.width ?? 0) / 2)}" y="28" text-anchor="middle" fill="#E7DDC4" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">Light tile (harder to crop)</text>
</svg>`);

  await sharp({
    create: { width, height, channels: 3, background: '#0A0A09' },
  })
    .composite([
      { input: header, top: 0, left: 0 },
      { input: corner, top: labelH, left: 0 },
      { input: tile, top: labelH, left: (cMeta.width ?? 0) + gap },
    ])
    .jpeg({ quality: 84 })
    .toFile(destPath);
}

function comparisonPage(items) {
  const cards = items
    .map(
      (item) => `
    <section>
      <h2>${escapeHtml(item.title)}</h2>
      <p class="paths">Left: corner · Right: light tile</p>
      <img src="./${item.pair}" alt="Corner versus tile watermark on ${escapeHtml(item.title)}" width="1600" height="560"/>
    </section>`,
    )
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Catalog watermark preview</title>
  <style>
    body { margin: 0; background: #0A0A09; color: #E7DDC4; font-family: system-ui, sans-serif; }
    main { max-width: 72rem; margin: 0 auto; padding: 2rem 1.25rem 4rem; }
    h1 { font-weight: 600; font-size: 1.4rem; }
    h2 { font-size: 1.05rem; margin: 2rem 0 0.35rem; }
    p { color: #CBBF9D; }
    img { display: block; width: 100%; height: auto; border: 1px solid #E7DEC940; }
  </style>
</head>
<body>
  <main>
    <h1>Catalog watermark preview</h1>
    <p>Same unmarked master, two web stamps. Production still uses the corner until you pick one.</p>
    ${cards}
  </main>
</body>
</html>
`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
