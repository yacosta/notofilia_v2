import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { describe, it } from 'node:test';
import sharp from 'sharp';
import {
  CREATOR,
  collectImages,
  copyrightNotice,
  imageDescription,
  outputDimensions,
  processCatalogImage,
  rightsXmp,
  watermarkSvg,
} from './lib/catalog-watermark.mjs';

describe('catalog watermark helpers', () => {
  it('scales only when the longest edge exceeds the cap', () => {
    assert.deepEqual(outputDimensions(1200, 800, 1800), { width: 1200, height: 800 });
    assert.deepEqual(outputDimensions(3600, 1800, 1800), { width: 1800, height: 900 });
  });

  it('embeds rights text in the SVG tile and XMP packet', () => {
    const svg = watermarkSvg({ width: 400, height: 200 });
    assert.match(svg, /NOTOFILIA/);
    assert.match(svg, /notofilia\.com/);
    assert.match(svg, /patternTransform="rotate\(-32\)"/);

    const xmp = rightsXmp({ relativePath: 'philippines/1-peso-front.jpg', year: 2026 });
    assert.match(xmp, new RegExp(CREATOR));
    assert.match(xmp, /Copyright 2026/);
    assert.match(xmp, /Iptc4xmpCore/);
    assert.match(xmp, /https:\/\/notofilia\.com/);
  });

  it('describes the catalog file in copyright copy', () => {
    assert.match(copyrightNotice(2026), /Yezid Acosta \/ Notofilia/);
    assert.match(imageDescription('china/hero-china.jpg'), /china\/hero-china\.jpg/);
    assert.match(imageDescription('china/hero-china.jpg'), /https:\/\/notofilia\.com/);
  });

  it('collects nested raster files only', async () => {
    const dir = await mkdtemp(path.join(os.tmpdir(), 'catalog-src-'));
    try {
      await sharp({
        create: { width: 8, height: 8, channels: 3, background: '#112233' },
      })
        .jpeg()
        .toFile(path.join(dir, 'keep.jpg'));

      const nested = path.join(dir, 'nested');
      await mkdir(nested, { recursive: true });
      await sharp({
        create: { width: 8, height: 8, channels: 3, background: '#445566' },
      })
        .png()
        .toFile(path.join(nested, 'keep.png'));

      const found = await collectImages(dir);
      assert.equal(found.length, 2);
      assert.ok(found.some((file) => file.endsWith('keep.jpg')));
      assert.ok(found.some((file) => file.endsWith(`${path.sep}keep.png`)));
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });
});

describe('processCatalogImage', () => {
  it('writes a smaller watermarked JPEG with EXIF and XMP rights', async () => {
    const dir = await mkdtemp(path.join(os.tmpdir(), 'catalog-wm-'));
    const src = path.join(dir, 'note.jpg');
    const dest = path.join(dir, 'out', 'note.jpg');

    await sharp({
      create: { width: 2400, height: 1200, channels: 3, background: '#f4f0e4' },
    })
      .jpeg()
      .toFile(src);

    try {
      await processCatalogImage(src, dest, 'fixtures/note.jpg');
      const meta = await sharp(dest).metadata();

      assert.equal(meta.width, 1800);
      assert.equal(meta.height, 900);
      assert.ok(meta.exif, 'expected EXIF block');
      assert.ok(meta.xmp, 'expected XMP block');

      const exifText = meta.exif.toString('latin1');
      assert.match(exifText, /Notofilia/);
      assert.match(exifText, /Yezid Acosta/);

      const xmpText = Buffer.isBuffer(meta.xmp) ? meta.xmp.toString('utf8') : String(meta.xmp);
      assert.match(xmpText, /Iptc4xmpCore/);
      assert.match(xmpText, /fixtures\/note\.jpg/);

      const [srcStat, destStat] = await Promise.all([sharp(src).stats(), sharp(dest).stats()]);
      assert.notEqual(srcStat.channels[0].mean, destStat.channels[0].mean);
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });
});
