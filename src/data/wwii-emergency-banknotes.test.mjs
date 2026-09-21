import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  WWII_EMERGENCY_PATH,
  WWII_EMERGENCY_PATH_EN,
  wwiiEmergencyCopy,
  wwiiEmergencyDedicatedSlugs,
  wwiiEmergencyPath,
  wwiiEmergencySources,
} from './wwii-emergency-banknotes.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/WwiiEmergencySeriesPage.astro', import.meta.url),
  'utf8',
);
const navSource = readFileSync(new URL('../lib/mega-nav.ts', import.meta.url), 'utf8');
const blog = readFileSync(new URL('./blog-articles.json', import.meta.url), 'utf8');
const bodyEs = readFileSync(new URL('./wwii-emergency-banknotes/es.html', import.meta.url), 'utf8');
const bodyEn = readFileSync(new URL('./wwii-emergency-banknotes/en.html', import.meta.url), 'utf8');
const astroConfig = readFileSync(new URL('../../astro.config.mjs', import.meta.url), 'utf8');

describe('WWII emergency banknotes series page', () => {
  it('uses a bilingual dedicated pair under notafilia, not the blog', () => {
    assert.equal(wwiiEmergencyPath('es'), WWII_EMERGENCY_PATH);
    assert.equal(wwiiEmergencyPath('en'), `/en${WWII_EMERGENCY_PATH_EN}`);
    assert.deepEqual([...wwiiEmergencyDedicatedSlugs], [
      'coleccion/notafilia/billetes-emergencia-segunda-guerra-mundial',
      'collection/notaphily/world-war-ii-emergency-banknotes',
    ]);
    assert.doesNotMatch(WWII_EMERGENCY_PATH, /\/blog\//);
    assert.doesNotMatch(blog, /billetes-emergencia-segunda-guerra-mundial/);
    assert.match(navSource, /id: 'billetes-emergencia-iigm'/);
    assert.match(navSource, /href: WWII_EMERGENCY_PATH/);
    assert.match(navSource, /flag: 'us-hi'/);
    assert.match(
      navSource,
      /id: 'estados-unidos'[\s\S]*id: 'filipinas'[\s\S]*id: 'billetes-emergencia-iigm'[\s\S]*id: 'mpc'/,
    );
    assert.doesNotMatch(
      navSource,
      /id: 'moneda-prueba-giori'[\s\S]*id: 'billetes-emergencia-iigm'[\s\S]*id: 'polimero'/,
    );
    assert.match(astroConfig, /\/blog\/billetes-emergencia-segunda-guerra-mundial\/'/);
    assert.match(astroConfig, /\/coleccion\/notafilia\/billetes-emergencia-segunda-guerra-mundial\//);
  });

  it('keeps CollectionPage chrome, a skip landmark, and a blank hero', () => {
    assert.match(pageSource, /collectionPageJsonLd/);
    assert.match(pageSource, /id="main-content"/);
    assert.match(pageSource, /max-w-content/);
    assert.match(pageSource, /max-w-\[46rem\]/);
    assert.doesNotMatch(pageSource, /SeriesHero/);
    assert.doesNotMatch(pageSource, /ogImage=/);
    assert.match(wwiiEmergencyCopy.es.title, /Billetes de Emergencia/);
    assert.doesNotMatch(wwiiEmergencyCopy.es.title, /\bnotas\b/i);
    assert.doesNotMatch(bodyEs, /\bnotas\b/i);
    assert.match(bodyEs, /Esta vitrina recorre/);
    assert.match(bodyEn, /This case follows/);
    assert.doesNotMatch(bodyEs, /<h2 id="fuentes">/);
    assert.doesNotMatch(bodyEn, /<h2 id="sources">/);
  });

  it('lists sources without inventing or importing a holding', () => {
    assert.ok(wwiiEmergencySources.length >= 30);
    assert.match(wwiiEmergencyCopy.es.holdingsValue, /Ningún ejemplar/);
    assert.match(wwiiEmergencyCopy.en.holdingsValue, /No holding/);
    assert.doesNotMatch(wwiiEmergencyCopy.es.metaDescription, /\$\d/);
    assert.doesNotMatch(pageSource, /CatalogThumb|notesForChapter|holdingId|noteById/);
    assert.doesNotMatch(pageSource, /serial [A-Z0-9]{6,}/);
    assert.doesNotMatch(bodyEs, /eBay|Heritage Auctions/);
    assert.doesNotMatch(bodyEn, /eBay|Heritage Auctions/);
    const data = readFileSync(new URL('./wwii-emergency-banknotes.ts', import.meta.url), 'utf8');
    assert.doesNotMatch(data, /serial:\s*['"]/);
    assert.doesNotMatch(data, /pick:\s*['"]/);
  });
});
