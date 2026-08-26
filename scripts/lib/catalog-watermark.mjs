import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

export const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

/** Longest edge written to `public/images/catalog/`. */
export const MAX_EDGE = 1800;

export const JPEG_QUALITY = 84;

export const SITE_URL = 'https://notofilia.com';
export const CONTACT_URL = `${SITE_URL}/contacto/`;
export const CREDIT = 'Notofilia';
export const CREATOR = 'Yezid Acosta';

/** Mid-range of the 30–50% signature guidance: readable, not a veil over the piece. */
export const SIGNATURE_OPACITY = 0.4;

export function copyrightYear(now = new Date()) {
  return now.getUTCFullYear();
}

export function copyrightNotice(year = copyrightYear()) {
  return `Copyright ${year} ${CREATOR} / ${CREDIT}. All rights reserved.`;
}

export function imageDescription(relativePath) {
  return `Catalog photograph from the ${CREDIT} private collection (${relativePath.replaceAll('\\', '/')}). Not for sale. ${SITE_URL}`;
}

/**
 * Subtle bottom-right text signature at SIGNATURE_OPACITY.
 * Masters stay in catalog-src/; only this web-sized copy is published.
 */
export function watermarkSvg({
  width,
  height,
  mark = `${CREDIT} · notofilia.com`,
  opacity = SIGNATURE_OPACITY,
}) {
  const shortest = Math.min(width, height);
  const fontSize = Math.max(12, Math.min(22, Math.round(shortest * 0.028)));
  const pad = Math.max(10, Math.round(shortest * 0.025));
  const x = width - pad;
  const y = height - pad;
  const escaped = escapeXml(mark);
  const font = 'DejaVu Sans, Liberation Sans, Arial, sans-serif';
  const fillA = opacity.toFixed(2);
  const strokeA = Math.min(0.5, opacity * 0.85).toFixed(2);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <text x="${x}" y="${y}" text-anchor="end" font-family="${font}" font-size="${fontSize}" font-weight="600" fill="rgba(10,10,9,${fillA})" stroke="rgba(231,221,196,${strokeA})" stroke-width="0.6">${escaped}</text>
</svg>`;
}

export function rightsXmp({ relativePath, year = copyrightYear() }) {
  const notice = escapeXml(copyrightNotice(year));
  const creator = escapeXml(CREATOR);
  const credit = escapeXml(CREDIT);
  const description = escapeXml(imageDescription(relativePath));
  const site = escapeXml(SITE_URL);
  const contact = escapeXml(CONTACT_URL);

  return `<?xpacket begin="" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about=""
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:xmp="http://ns.adobe.com/xap/1.0/"
      xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/"
      xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/"
      xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/">
      <dc:creator><rdf:Seq><rdf:li>${creator}</rdf:li></rdf:Seq></dc:creator>
      <dc:rights><rdf:Alt><rdf:li xml:lang="x-default">${notice}</rdf:li></rdf:Alt></dc:rights>
      <dc:description><rdf:Alt><rdf:li xml:lang="x-default">${description}</rdf:li></rdf:Alt></dc:description>
      <dc:source>${site}</dc:source>
      <xmp:CreatorTool>${credit} catalog watermark</xmp:CreatorTool>
      <xmpRights:Marked>True</xmpRights:Marked>
      <xmpRights:WebStatement>${site}</xmpRights:WebStatement>
      <xmpRights:UsageTerms><rdf:Alt><rdf:li xml:lang="x-default">${notice} Contact: ${contact}</rdf:li></rdf:Alt></xmpRights:UsageTerms>
      <photoshop:Credit>${credit}</photoshop:Credit>
      <photoshop:Source>${site}</photoshop:Source>
      <photoshop:AuthorsPosition>Collector</photoshop:AuthorsPosition>
      <Iptc4xmpCore:CreatorContactInfo rdf:parseType="Resource">
        <Iptc4xmpCore:CiUrlWork>${site}</Iptc4xmpCore:CiUrlWork>
        <Iptc4xmpCore:CiAdrExtadr>${contact}</Iptc4xmpCore:CiAdrExtadr>
      </Iptc4xmpCore:CreatorContactInfo>
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`;
}

export function outputDimensions(width, height, maxEdge = MAX_EDGE) {
  const longest = Math.max(width, height);
  if (longest <= maxEdge) {
    return { width, height };
  }
  const scale = maxEdge / longest;
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

export async function collectImages(rootDir) {
  const found = [];

  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
        continue;
      }
      if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
        found.push(full);
      }
    }
  }

  await walk(rootDir);
  found.sort();
  return found;
}

export async function processCatalogImage(srcPath, destPath, relativePath) {
  const meta = await sharp(srcPath).metadata();
  const srcWidth = meta.autoOrient?.width ?? meta.width;
  const srcHeight = meta.autoOrient?.height ?? meta.height;
  if (!srcWidth || !srcHeight) {
    throw new Error(`Could not read dimensions for ${srcPath}`);
  }

  const { width, height } = outputDimensions(srcWidth, srcHeight);
  const year = copyrightYear();
  const notice = copyrightNotice(year);
  const description = imageDescription(relativePath);
  const ext = path.extname(srcPath).toLowerCase();

  let pipeline = sharp(srcPath).rotate().resize({
    width,
    height,
    fit: 'fill',
    withoutEnlargement: true,
  });

  pipeline = pipeline.composite([
    {
      input: Buffer.from(watermarkSvg({ width, height })),
      blend: 'over',
    },
  ]);

  pipeline = pipeline
    .withExif({
      IFD0: {
        Copyright: notice,
        Artist: CREATOR,
        ImageDescription: description,
        Software: `${CREDIT} catalog watermark`,
      },
    })
    .withXmp(rightsXmp({ relativePath, year }));

  if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 9 });
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: JPEG_QUALITY });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  await mkdir(path.dirname(destPath), { recursive: true });
  await pipeline.toFile(destPath);
}

export async function watermarkCatalog({ sourceRoot, destRoot }) {
  const sources = await collectImages(sourceRoot);
  const results = [];

  for (const srcPath of sources) {
    const relativePath = path.relative(sourceRoot, srcPath);
    const destPath = path.join(destRoot, relativePath);
    await processCatalogImage(srcPath, destPath, relativePath);
    results.push({ relativePath, destPath });
  }

  return results;
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
