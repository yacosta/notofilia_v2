import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/20-dolares-hawaii-1934a/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/20-dollars-hawaii-1934a/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '20-dolares-serie-1934a-hawaii'");
const noteEnd = data.indexOf("id: '1-dolar-serie-2003-atlanta'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1934A HAWAII $20 Fr. 2305', () => {
  it('records Fr. 2305 with serial L86654132A and the 1944 Huntoon run', () => {
    assert.match(data, /id: '20-dolares-serie-1934a-hawaii'/);
    assert.match(note, /chapterId: 'us-frb'/);
    assert.match(note, /pick: 'Fr\. 2305'/);
    assert.match(note, /serial: 'L86654132A'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /William Alexander Julian/);
    assert.match(note, /Henry Morgenthau Jr\./);
    assert.match(note, /bloque L–A/);
    assert.match(note, /L–A block/);
    assert.match(note, /L85536001A/);
    assert.match(note, /L90036000A/);
    assert.match(note, /4\.500\.000/);
    assert.match(note, /11\.246\.000/);
    assert.match(note, /11,246,000/);
    assert.match(note, /numerado en 1944/);
    assert.match(note, /numbered in 1944/);
    assert.match(note, /Fr\. 2304/);
    assert.match(note, /plancha de reverso 382/);
    assert.match(note, /back plate 382/);
    assert.match(note, /no mula/);
    assert.match(note, /non-mule/);
    assert.match(note, /N#202426/);
    assert.match(note, /Huntoon/);
    assert.match(note, /no es un reemplazo con estrella/i);
    assert.match(note, /not a star replacement/i);
    assert.match(note, /Sin encapsular/);
    assert.match(note, /Ungraded/);
    assert.match(note, /en: '\$20 · HAWAII · Series 1934 A'/);
    assert.match(note, /es: '20 dólares · HAWAII · Serie 1934 A'/);
    assert.match(holdings, /us-frn-1934a-hawaii-20-l86654132a/);
    assert.match(holdings, /id: 'us-frn-1934a-hawaii-20-l86654132a', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-frn-1934a-hawaii-fr2305/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/20-dolares-hawaii-1934a/', 'en'),
      '/en/collection/united-states/20-dollars-hawaii-1934a/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('20-dolares-serie-1934a-hawaii'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-federal-reserve-note-20-dollars-series-1934a-hawaii-l86654132a-composite\.jpg/);
    assert.match(note, /united-states-federal-reserve-note-20-dollars-series-1934a-hawaii-l86654132a-front\.jpg/);
    assert.match(note, /united-states-federal-reserve-note-20-dollars-series-1934a-hawaii-l86654132a-back\.jpg/);
  });

  it('names the holding in the Federal Reserve chapter, series inventory, and FAQ', () => {
    assert.match(data, /20 dólares HAWAII serie 1934 A \(Fr\. 2305\), serial L86654132A/);
    assert.match(data, /Series 1934A HAWAII \$20 \(Fr\. 2305\), serial L86654132A/);
    assert.match(faq, /¿Qué es el 20 dólares HAWAII serie 1934 A\?/);
    assert.match(faq, /What is the Series 1934A HAWAII \$20\?/);
    assert.match(faq, /serial L86654132A/);
    assert.match(note, /No es el 1 dólar HAWAII serie 1935 A, serial S40499058C/);
    assert.match(note, /It is not the Series 1935A HAWAII \$1, serial S40499058C/);
  });
});
