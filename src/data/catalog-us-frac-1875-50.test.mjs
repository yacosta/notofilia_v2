import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import { additions, catalogAdditions } from './holdings.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/50-centavos-fraccionarios-1875/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/50-cents-fractional-1875/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '50-centavos-fraccionarios-1875'");
const noteEnd = data.indexOf('export const notePageCopy');
const note = data.slice(noteStart, noteEnd);
const chapterStart = data.indexOf("id: 'us-fractional'");
const chapter = data.slice(chapterStart, data.indexOf("id: 'us-national'"));

describe('US Fifth Issue Fractional Currency 50¢ Fr. 1381', () => {
  it('records Fr. 1381 / P#124 with no invented serial and the blue-end fingerprint', () => {
    assert.ok(noteStart > 0);
    assert.match(note, /chapterId: 'us-fractional'/);
    assert.match(note, /pick: 'P#124 · Fr\. 1381'/);
    assert.match(note, /serial: '—'/);
    assert.match(note, /no_serial_reason:/);
    assert.match(note, /blue-tinted right end/);
    assert.match(note, /plate marks 0 and 13/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /John Allison/);
    assert.match(note, /John C\. New/);
    assert.match(note, /13\.160\.000|13,160,000/);
    assert.match(note, /no se ha confirmado de forma independiente/);
    assert.match(note, /has not been independently confirmed/);
    assert.match(note, /N#228866/);
    assert.match(note, /110,5 × 54,5 mm|110\.5 × 54\.5 mm/);
    assert.match(note, /no es una medición de esta pieza/);
    assert.match(note, /not a measurement of this piece/);
    assert.match(note, /Fr\. 1380/);
    assert.match(note, /Crawford/);
    assert.match(note, /sin encapsular/);
    assert.match(note, /unslabbed/);
    assert.match(note, /Fine a Very Fine|Fine to Very Fine/);
    assert.match(note, /en: '50¢ · Fractional Currency · 1875'/);
    assert.match(note, /es: '50 centavos · Fractional Currency · 1875'/);
    assert.match(chapter, /Ya tiene ficha el 50 centavos/);
    assert.match(chapter, /already has a note page/);
    assert.match(holdings, /id: 'us-50-centavos-fraccionarios-1875', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-50-centavos-fraccionarios-1875/);
    assert.equal(additions.at(-1)?.id, 'us-50-centavos-fraccionarios-1875');
    assert.equal(catalogAdditions.at(-1)?.id, 'us-50-centavos-fraccionarios-1875');
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/50-centavos-fraccionarios-1875/', 'en'),
      '/en/collection/united-states/50-cents-fractional-1875/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('50-centavos-fraccionarios-1875'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(
      note,
      /united-states-fractional-50-cents-series-1875-crawford-fr1381-composite\.jpg/,
    );
    assert.match(note, /united-states-fractional-50-cents-series-1875-crawford-fr1381-front\.jpg/);
    assert.match(note, /united-states-fractional-50-cents-series-1875-crawford-fr1381-back\.jpg/);
    assert.match(note, /No es el scrip de Baraboo/);
    assert.match(note, /It is not Baraboo scrip/);
  });
});
