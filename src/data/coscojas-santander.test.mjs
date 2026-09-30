import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import {
  COSCOJAS_SANTANDER_COMPOSITE,
  COSCOJAS_SANTANDER_HERO,
  COSCOJAS_SANTANDER_HOLDING_IDS,
  COSCOJAS_SANTANDER_PATH,
  COSCOJAS_SANTANDER_PATH_EN,
  coscojasSantanderCardAlt,
  coscojasSantanderCopy,
  coscojasSantanderDedicatedSlugs,
  coscojasSantanderPath,
} from './coscojas-santander.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/CoscojasSantanderPage.astro', import.meta.url),
  'utf8',
);

describe('Santander coscojas essay', () => {
  it('pairs the Spanish page with an English route and keeps the nickname', () => {
    assert.equal(coscojasSantanderCopy.es.title, 'Las coscojas de Santander');
    assert.equal(coscojasSantanderCopy.en.title, 'The coscojas of Santander');
    assert.equal(coscojasSantanderPath('es'), COSCOJAS_SANTANDER_PATH);
    assert.equal(coscojasSantanderPath('en'), `/en${COSCOJAS_SANTANDER_PATH_EN}`);
    assert.equal(localizePath(COSCOJAS_SANTANDER_PATH, 'en'), `/en${COSCOJAS_SANTANDER_PATH_EN}`);
    assert.deepEqual([...coscojasSantanderDedicatedSlugs], [
      'coleccion/colombia-numismatica/coscojas-de-santander',
      'collection/colombia-numismatics/santander-coscojas',
    ]);
  });

  it('records brass, the measured 50 centavos, and the three holding cards', () => {
    assert.equal(coscojasSantanderCopy.es.facts.find((fact) => fact.label === 'Metal')?.value, 'Latón');
    assert.equal(coscojasSantanderCopy.en.facts.find((fact) => fact.label === 'Metal')?.value, 'Brass');
    assert.equal(
      coscojasSantanderCopy.es.facts.find((fact) => fact.label === 'Ref. (50 c)')?.value,
      '1,45 g · 23,1 mm',
    );
    assert.deepEqual(
      coscojasSantanderCopy.es.sections.map((section) => section.id),
      coscojasSantanderCopy.en.sections.map((section) => section.id),
    );
    const specs = coscojasSantanderCopy.es.sections.find((section) => section.id === 'hecha-a-mano');
    assert.equal(specs?.table?.rows.length, 3);
    assert.equal(specs?.table?.rows[0][1], '1,45 g');
    assert.equal(COSCOJAS_SANTANDER_HERO.es.src, '/uploads/coscojas-de-santander-hero.jpg');
    assert.equal(COSCOJAS_SANTANDER_HERO.en.src, '/uploads/santander-coscojas-hero.jpg');
    assert.equal(COSCOJAS_SANTANDER_HERO.es.width, 1024);
    assert.equal(COSCOJAS_SANTANDER_HERO.en.height, 439);
    assert.ok(existsSync(new URL('../../public/uploads/coscojas-de-santander-hero.jpg', import.meta.url)));
    assert.ok(existsSync(new URL('../../public/uploads/coscojas-de-santander-hero-card.jpg', import.meta.url)));
    assert.ok(existsSync(new URL('../../public/uploads/santander-coscojas-hero.jpg', import.meta.url)));
    assert.ok(existsSync(new URL('../../public/uploads/santander-coscojas-hero-card.jpg', import.meta.url)));
    assert.equal(pageSource.includes('SeriesHero'), true);
    assert.equal(pageSource.includes('size="frame"'), true);
    assert.equal(pageSource.includes('<h1'), false);
    assert.equal(pageSource.includes('NoteImageLightbox'), false);
    assert.equal(pageSource.includes('CatalogThumb'), true);
    assert.equal(pageSource.includes('CATALOG_PIECE_GRID'), true);
    assert.equal(pageSource.includes('section.table'), true);
    assert.deepEqual([...COSCOJAS_SANTANDER_HOLDING_IDS], [
      '10-centavos-santander-1902',
      '20-centavos-santander-1902',
      '50-centavos-santander-1902',
    ]);
    assert.equal(COSCOJAS_SANTANDER_COMPOSITE.width, 1024);
    assert.equal(COSCOJAS_SANTANDER_COMPOSITE.height, 576);
    assert.match(coscojasSantanderCardAlt('10-centavos-santander-1902', 'es'), /incuso/);
    assert.match(coscojasSantanderCardAlt('50-centavos-santander-1902', 'en'), /incuse/);
    assert.equal(coscojasSantanderCopy.es.viewCoin, 'Abrir la ficha');
    assert.equal(coscojasSantanderCopy.en.viewCoin, 'Open the record');
    const blob = JSON.stringify(coscojasSantanderCopy);
    assert.equal(/eBay|Mercado Libre|USD|US\$/.test(blob), false);
    assert.equal(
      coscojasSantanderCopy.es.holdingHref,
      '/coleccion/colombia-numismatica/50-centavos-santander-1902/',
    );
    assert.equal(localizePath(coscojasSantanderCopy.es.holdingHref, 'en'), '/en/collection/colombia-numismatics/50-centavos-santander-1902/');
    assert.equal(pageSource.includes('t.holdingHref'), true);
    assert.ok(coscojasSantanderCopy.es.sources.some((source) => source.href === 'https://en.numista.com/30954'));
    assert.ok(coscojasSantanderCopy.es.sources.some((source) => source.href === 'https://en.numista.com/48340'));
    assert.ok(coscojasSantanderCopy.en.sources.some((source) => source.href === 'https://en.numista.com/48341'));
    assert.ok(coscojasSantanderCopy.en.sources.every((source) => !source.href || source.href.startsWith('http')));
  });
});
