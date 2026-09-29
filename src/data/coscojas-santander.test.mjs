import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import {
  COSCOJAS_SANTANDER_PATH,
  COSCOJAS_SANTANDER_PATH_EN,
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

  it('records brass, the measured 50 centavos, and no coin images', () => {
    assert.equal(coscojasSantanderCopy.es.facts.find((fact) => fact.label === 'Metal')?.value, 'Latón');
    assert.equal(coscojasSantanderCopy.en.facts.find((fact) => fact.label === 'Metal')?.value, 'Brass');
    assert.equal(
      coscojasSantanderCopy.es.facts.find((fact) => fact.label === 'Ref. (50 c)')?.value,
      '1,45 g · 23,1 mm',
    );
    assert.equal(coscojasSantanderCopy.es.sections.length, coscojasSantanderCopy.en.sections.length);
    assert.equal(pageSource.includes('<img'), false);
    assert.equal(pageSource.includes('NoteImageLightbox'), false);
    assert.ok(coscojasSantanderCopy.es.sources.some((source) => source.href === 'https://en.numista.com/30954'));
    assert.ok(coscojasSantanderCopy.en.sources.every((source) => !source.href || source.href.startsWith('http')));
  });
});
