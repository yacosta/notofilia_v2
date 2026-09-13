import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  BANCA_LIBRE_PATH,
  BANCA_LIBRE_PATH_EN,
  bancaLibreCopy,
  bancaLibreDedicatedSlugs,
  bancaLibrePath,
} from './colombia-banca-libre.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/ColombiaBancaLibrePage.astro', import.meta.url),
  'utf8',
);

describe('Colombia banca libre essay', () => {
  it('keeps the Spanish title Banca libre and a matching English pair', () => {
    assert.equal(bancaLibreCopy.es.title, 'Banca libre');
    assert.equal(bancaLibreCopy.en.title, 'Free banking');
    assert.equal(bancaLibrePath('es'), BANCA_LIBRE_PATH);
    assert.equal(bancaLibrePath('en'), `/en${BANCA_LIBRE_PATH_EN}`);
    assert.deepEqual([...bancaLibreDedicatedSlugs], [
      'coleccion/colombia/banca-libre',
      'collection/colombia/free-banking',
    ]);
  });

  it('does not invent holdings beyond the published Hipotecario and Riohacha proofs', () => {
    assert.deepEqual(
      bancaLibreCopy.es.holdings.map((item) => item.href),
      [
        '/coleccion/colombia/5-pesos-banco-hipotecario-1881/',
        '/coleccion/colombia/5-pesos-rio-hacha-1883/',
      ],
    );
    assert.equal(bancaLibreCopy.es.holdings.length, bancaLibreCopy.en.holdings.length);
    assert.ok(bancaLibreCopy.es.sections.some((section) => (section.tables?.length ?? 0) > 0));
    assert.ok(bancaLibreCopy.en.sources.every((source) => source.href.startsWith('http')));
  });

  it('uses the museum case width, not a 46rem article wrapper', () => {
    assert.match(pageSource, /article class="mx-auto max-w-content px-\[var\(--page-gutter\)\]/);
    assert.doesNotMatch(pageSource, /article class="[^"]*max-w-\[46rem\]/);
    assert.match(pageSource, /lead.*max-w-\[46rem\]|max-w-\[46rem\].*t\.lead/);
  });
});
