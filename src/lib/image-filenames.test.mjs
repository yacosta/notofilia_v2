import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import { publicImageRedirect } from './public-image-renames.ts';

const root = fileURLToPath(new URL('../../', import.meta.url));
const scanRoots = ['public/uploads', 'public/images', 'catalog-src/catalog'];
const allowNames = new Set(['favicon.svg', 'notofilia-logo.png', 'yezid-acosta.webp']);
const ignoredTokens = new Set(['hero', 'card', 'front', 'back', 'composite', 'slide']);
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.avif']);

function walkImages(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'flags') continue;
      walkImages(path, out);
      continue;
    }
    const dot = entry.name.lastIndexOf('.');
    const ext = dot === -1 ? '' : entry.name.slice(dot).toLowerCase();
    if (imageExtensions.has(ext)) out.push(path);
  }
  return out;
}

function meaningfulWords(filename) {
  const stem = filename.replace(/\.[^.]+$/, '');
  return stem
    .split(/[-_.]+/)
    .filter(Boolean)
    .filter((token) => !ignoredTokens.has(token.toLowerCase()) && !/^\d{2}$/.test(token));
}

describe('image filenames', () => {
  it('keeps upload, site, and catalog masters descriptive and ASCII', () => {
    const problems = [];
    for (const rel of scanRoots) {
      const dir = join(root, rel);
      for (const file of walkImages(dir)) {
        const name = file.slice(file.lastIndexOf('/') + 1);
        if (allowNames.has(name) || file.includes('/flags/')) continue;
        const issues = [];
        if (/[A-Z]/.test(name)) issues.push('uppercase');
        if (name.includes(' ')) issues.push('space');
        if (name.includes('_')) issues.push('underscore');
        if ([...name].some((char) => char.charCodeAt(0) > 127)) issues.push('non-ascii');
        const words = meaningfulWords(name);
        if (words.length < 3) issues.push(`only ${words.length} meaningful word(s): ${words.join(', ')}`);
        if (issues.length) problems.push(`${relative(root, file)}: ${issues.join('; ')}`);
      }
    }
    assert.deepEqual(problems, []);
  });

  it('does not let two blog articles share an image', () => {
    const articles = JSON.parse(readFileSync(new URL('../data/blog-articles.json', import.meta.url), 'utf8'));
    const seen = new Map();
    const duplicates = [];
    for (const article of articles) {
      if (!article.image) continue;
      const previous = seen.get(article.image);
      if (previous) duplicates.push(`${article.slug} and ${previous} share ${article.image}`);
      else seen.set(article.image, article.slug);
    }
    assert.deepEqual(duplicates, []);
  });

  it('redirects retired site images, including a resized URL', () => {
    const engraving = '/images/grabado-talla-dulce-eva-peron-billete-argentino.jpg';
    const quetzal = '/images/quetzal-billete-cinco-quetzales-guatemala.jpg';
    const coscojas = '/uploads/monedas-coscojas-de-santander.jpg';
    assert.equal(publicImageRedirect('/images/hero-engraving-01.jpg'), engraving);
    assert.equal(publicImageRedirect('/images/hero-slide.jpg'), quetzal);
    assert.equal(
      publicImageRedirect('/cdn-cgi/image/width=1080,format=avif,quality=55/images/hero-engraving-01.jpg'),
      `/cdn-cgi/image/width=1080,format=avif,quality=55${engraving}`,
    );
    assert.equal(
      publicImageRedirect('/cdn-cgi/image/width=1080,format=auto/images/hero-slide.jpg'),
      `/cdn-cgi/image/width=1080,format=auto${quetzal}`,
    );
    assert.equal(publicImageRedirect(engraving), null);
    assert.equal(publicImageRedirect('/uploads/santander-coscojas-hero.jpg'), coscojas);
    assert.equal(publicImageRedirect('/uploads/coscojas-de-santander-hero-card.jpg'), `${coscojas.replace('.jpg', '-card.jpg')}`);
    const redirects = readFileSync(new URL('../../public/_redirects', import.meta.url), 'utf8');
    assert.match(redirects, /\/images\/hero-engraving-01\.jpg \/images\/grabado-talla-dulce-eva-peron-billete-argentino\.jpg 301/);
    assert.match(redirects, /\/images\/hero-slide\.jpg \/images\/quetzal-billete-cinco-quetzales-guatemala\.jpg 301/);
    const lines = redirects.split('\n').filter((line) => line && !line.startsWith('#'));
    const firstSplat = lines.findIndex((line) => line.includes('*'));
    const engravingLine = lines.findIndex((line) => line.includes('hero-engraving-01.jpg'));
    assert.ok(engravingLine !== -1 && engravingLine < firstSplat, 'image 301s stay before splat rules');
  });
});
