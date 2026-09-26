import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/5-dolares-serie-1907/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/5-dollars-series-1907/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '5-dolares-serie-1907',\n    chapterId: 'us-notes'");
const noteEnd = data.indexOf("id: '1-dolar-serie-1917'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1907 United States Note $5 Fr. 91', () => {
  it('records Fr. 91 / P#186(9) with ordinary serial M12980830', () => {
    assert.ok(noteStart > 0);
    assert.match(note, /chapterId: 'us-notes'/);
    assert.match(note, /pick: 'P#186\(9\) · Fr\. 91'/);
    assert.match(note, /serial: 'M12980830'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /Harley V\. Speelman/);
    assert.match(note, /Frank White/);
    assert.match(note, /letra de plancha B/);
    assert.match(note, /Plate letter B/);
    assert.match(note, /no se lee un número de plancha/);
    assert.match(note, /no face-plate number and no back-plate number/);
    assert.match(note, /no inventa una tirada/);
    assert.match(note, /does not invent a printage/);
    assert.match(note, /N#225775/);
    assert.match(note, /189 × 80 mm/);
    assert.match(note, /no es una medición de esta pieza/);
    assert.match(note, /not a measurement of this piece/);
    assert.match(note, /Woodchopper/);
    assert.match(note, /no es estrella/);
    assert.match(note, /it is not a star/);
    assert.match(note, /sin encapsular/);
    assert.match(note, /unslabbed/);
    assert.match(note, /en: '\$5 · United States Note · Series 1907'/);
    assert.match(note, /es: '5 dólares · United States Note · Serie 1907'/);
    assert.match(holdings, /id: 'us-usn-1907-5-m12980830', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-usn-1907-5-fr91/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/5-dolares-serie-1907/', 'en'),
      '/en/collection/united-states/5-dollars-series-1907/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('5-dolares-serie-1907'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-treasury-5-dollars-series-1907-woodchopper-m12980830-composite\.jpg/);
    assert.match(note, /united-states-treasury-5-dollars-series-1907-woodchopper-m12980830-front\.jpg/);
    assert.match(note, /united-states-treasury-5-dollars-series-1907-woodchopper-m12980830-back\.jpg/);
    assert.match(note, /No es el 1 dólar de la serie 1917 ni el 2 dólares de la misma serie/);
    assert.match(note, /It is not the Series 1917 \$1 or the Series 1917 \$2/);
  });
});
