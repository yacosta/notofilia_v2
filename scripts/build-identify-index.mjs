import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(root, 'catalog-src', 'catalog');
const dataRoot = path.join(root, 'src', 'data');
const outPath = path.join(root, 'src', 'data', 'identify-index.json');

const DHASH_WIDTH = 9;
const DHASH_HEIGHT = 8;

function resizeGreyscale(src, srcWidth, srcHeight, destWidth, destHeight) {
  const out = new Uint8Array(destWidth * destHeight);
  for (let y = 0; y < destHeight; y++) {
    for (let x = 0; x < destWidth; x++) {
      const sx = ((x + 0.5) * srcWidth) / destWidth - 0.5;
      const sy = ((y + 0.5) * srcHeight) / destHeight - 0.5;
      const x0 = Math.max(0, Math.min(srcWidth - 1, Math.floor(sx)));
      const y0 = Math.max(0, Math.min(srcHeight - 1, Math.floor(sy)));
      const x1 = Math.min(x0 + 1, srcWidth - 1);
      const y1 = Math.min(y0 + 1, srcHeight - 1);
      const fx = sx - x0;
      const fy = sy - y0;
      const v =
        src[y0 * srcWidth + x0] * (1 - fx) * (1 - fy) +
        src[y0 * srcWidth + x1] * fx * (1 - fy) +
        src[y1 * srcWidth + x0] * (1 - fx) * fy +
        src[y1 * srcWidth + x1] * fx * fy;
      out[y * destWidth + x] = Math.round(v);
    }
  }
  return out;
}

function dhashFromGreyscale(pixels) {
  let bits = 0n;
  for (let y = 0; y < DHASH_HEIGHT; y++) {
    for (let x = 0; x < DHASH_WIDTH - 1; x++) {
      const left = pixels[y * DHASH_WIDTH + x] ?? 0;
      const right = pixels[y * DHASH_WIDTH + x + 1] ?? 0;
      bits = (bits << 1n) | (left < right ? 1n : 0n);
    }
  }
  return bits.toString(16).padStart(16, '0');
}

function publicImageToSource(publicPath) {
  const normalized = String(publicPath || '').replace(/^\/+/, '');
  if (!normalized.startsWith('images/catalog/')) return null;
  return path.join(sourceRoot, normalized.slice('images/catalog/'.length));
}

async function hashFile(filePath) {
  const { data, info } = await sharp(filePath).rotate().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const grey = new Uint8Array(info.width * info.height);
  for (let i = 0, p = 0; i < grey.length; i++, p += 4) {
    grey[i] = Math.round(0.299 * data[p] + 0.587 * data[p + 1] + 0.114 * data[p + 2]);
  }
  const small = resizeGreyscale(grey, info.width, info.height, DHASH_WIDTH, DHASH_HEIGHT);
  return dhashFromGreyscale(small);
}

function unescape(value) {
  return value.replace(/\\'/g, "'");
}

function localizedPairNear(source, key, aroundIndex) {
  const windowStart = Math.max(0, aroundIndex - 2500);
  const windowEnd = Math.min(source.length, aroundIndex + 2500);
  const window = source.slice(windowStart, windowEnd);
  const re = new RegExp(
    `${key}:\\s*\\{\\s*es:\\s*'((?:\\\\'|[^'])*)'\\s*,\\s*en:\\s*'((?:\\\\'|[^'])*)'\\s*,?\\s*\\}`,
    'ms',
  );
  const match = window.match(re);
  if (!match) return null;
  return { es: unescape(match[1]), en: unescape(match[2]) };
}

function stringNear(source, key, aroundIndex) {
  const windowStart = Math.max(0, aroundIndex - 2500);
  const window = source.slice(windowStart, aroundIndex + 800);
  const re = new RegExp(`${key}:\\s*'((?:\\\\'|[^'])*)'`, 'm');
  const match = window.match(re);
  return match ? unescape(match[1]) : '';
}

const PATH_CONSTANTS = {
  COLOMBIA_PATH: '/coleccion/colombia/',
  COLOMBIA_COINAGE_PATH: '/coleccion/colombia-numismatica/',
  SERIES_PATH: '/coleccion/filipinas/',
  PNB_NOTE_PATH: '/coleccion/filipinas/5-pesos-banco-nacional-1916/',
  PUERTO_RICO_PATH: '/coleccion/puerto-rico/',
  USA_PATH: '/coleccion/estados-unidos/',
  USA_MPC_PATH: '/coleccion/estados-unidos/mpc-vietnam/',
  USA_MISC_PATH: '/coleccion/estados-unidos/miscelaneos/',
  USA_RENCY_PATH: '/coleccion/estados-unidos/rency/',
  USA_BARABOO_SCRIP_PATH: '/coleccion/estados-unidos/miscelaneos/scrip-baraboo-jubileo-1933/',
  USA_COINAGE_PATH: '/coleccion/estados-unidos-numismatica/',
  NETHERLANDS_COINAGE_PATH: '/coleccion/paises-bajos-numismatica/',
  NETHERLANDS_PATH: '/coleccion/paises-bajos/',
  CHINA_PATH: '/coleccion/china/',
  POLIMERO_MUNDIAL_PATH: '/coleccion/polimero-mundial/',
  POLIMERO_MALASIA_PATH: '/coleccion/polimero-mundial/asia/malasia/',
  POLIMERO_INGLATERRA_PATH: '/coleccion/polimero-mundial/europa/inglaterra/',
  POLIMERO_CANADA_PATH: '/coleccion/polimero-mundial/Canada/',
};

function resolvePathExpression(expr) {
  const literal = expr.match(/^'(\/coleccion\/[^']+)'$/);
  if (literal) return literal[1];
  const template = expr.match(/^`\$\{([A-Z0-9_]+)\}([^`]*)`$/);
  if (template) {
    const base = PATH_CONSTANTS[template[1]];
    if (!base) return '';
    return `${base}${template[2]}`;
  }
  return '';
}

function nearestCollectionPath(source, aroundIndex) {
  const before = source.slice(0, aroundIndex);
  const matches = [
    ...before.matchAll(/path:\s*('\/coleccion\/[^']+'|`\$\{[A-Z0-9_]+\}[^`]*`)/g),
  ];
  if (!matches.length) return '';
  return resolvePathExpression(matches[matches.length - 1][1]);
}

function isCoinPath(file, piecePath) {
  return /coinage|numismatica|ducado|real-santa|dolar-trump/i.test(`${file} ${piecePath}`);
}

async function collectTargets() {
  const files = (await fs.readdir(dataRoot)).filter((name) => name.endsWith('.ts'));
  /** @type {Map<string, any>} */
  const byKey = new Map();

  for (const file of files) {
    const source = await fs.readFile(path.join(dataRoot, file), 'utf8');
    if (!source.includes('/images/catalog/')) continue;

    const imageRe = /(front|back|composite):\s*'(\/images\/catalog\/[^']+)'/g;
    let match;
    while ((match = imageRe.exec(source))) {
      const role = match[1];
      const image = match[2];
      // Skip heroes and non-piece shots.
      if (/\/hero-|\/uploads\//i.test(image)) continue;

      const piecePathRaw = nearestCollectionPath(source, match.index);
      if (!piecePathRaw) continue;
      const piecePath = piecePathRaw.endsWith('/') || piecePathRaw.includes('#') ? piecePathRaw : `${piecePathRaw}/`;

      const title = localizedPairNear(source, 'title', match.index);
      if (!title) continue;

      const pick =
        stringNear(source, 'pick', match.index) ||
        stringNear(source, 'reference', match.index) ||
        stringNear(source, 'references', match.index) ||
        '';
      const explicitId = stringNear(source, 'id', match.index);
      const basenameId = path
        .basename(image)
        .replace(/\.(jpg|jpeg|png|webp)$/i, '')
        .replace(/-(front|back|composite|obverse|reverse|cross|value)$/i, '');
      const pieceId = explicitId || basenameId;
      const kind = isCoinPath(file, piecePath) ? 'coin' : 'banknote';

      const face = role === 'back' ? 'back' : 'front';
      const key = `${pieceId}::${face}::${image}`;
      if (byKey.has(key)) continue;

      byKey.set(key, {
        pieceId,
        face,
        image,
        kind,
        path: piecePath,
        pick,
        title,
      });
    }
  }

  return [...byKey.values()];
}

const targets = await collectTargets();
const faces = [];
const missing = [];

for (const target of targets) {
  const sourcePath = publicImageToSource(target.image);
  if (!sourcePath) {
    missing.push({ id: target.pieceId, image: target.image, reason: 'bad-path' });
    continue;
  }
  try {
    await fs.access(sourcePath);
  } catch {
    missing.push({ id: target.pieceId, image: target.image, reason: 'missing-file' });
    continue;
  }
  const hash = await hashFile(sourcePath);
  faces.push({
    pieceId: target.pieceId,
    face: target.face,
    hash,
    kind: target.kind,
    path: target.path,
    pick: target.pick,
    image: target.image,
    title: target.title,
  });
}

const index = {
  version: 1,
  generatedAt: new Date().toISOString(),
  algorithm: 'dhash-9x8',
  faces,
};

await fs.writeFile(outPath, `${JSON.stringify(index, null, 2)}\n`, 'utf8');

const uniquePieces = new Set(faces.map((f) => f.pieceId)).size;
console.log(
  `Identify index: ${faces.length} faces · ${uniquePieces} pieces → ${path.relative(root, outPath)}`,
);
if (missing.length) {
  console.warn(`Skipped ${missing.length} faces:`);
  for (const row of missing.slice(0, 25)) {
    console.warn(`  ${row.id} ${row.image} (${row.reason})`);
  }
  if (missing.length > 25) console.warn(`  …and ${missing.length - 25} more`);
}

if (faces.length < 40) {
  console.error(`Too few faces indexed (${faces.length}); expected a full-collection index.`);
  process.exit(1);
}
