import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/5-dolares-hawaii-1934a/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/5-dollars-hawaii-1934a/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '5-dolares-serie-1934a-hawaii'");
const noteEnd = data.indexOf("id: '10-dolares-serie-1934a-hawaii'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1934A HAWAII $5 Fr. 2302', () => {
  it('records Fr. 2302 / P#38 with serial L68013147A in the L–A block', () => {
    assert.match(data, /id: '5-dolares-serie-1934a-hawaii'/);
    assert.match(note, /chapterId: 'us-frb'/);
    assert.match(note, /pick: 'P#38 · Fr\. 2302'/);
    assert.match(note, /serial: 'L68013147A'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /William Alexander Julian/);
    assert.match(note, /Henry Morgenthau Jr\./);
    assert.match(note, /bloque L–A/);
    assert.match(note, /L–A block/);
    assert.match(note, /L66132001A/);
    assert.match(note, /L69132000A/);
    assert.match(note, /3\.000\.000/);
    assert.match(note, /3,000,000/);
    assert.match(note, /9\.416\.000/);
    assert.match(note, /9,416,000/);
    assert.doesNotMatch(note, /numerado en 1944/);
    assert.doesNotMatch(note, /numbered in 1944/);
    assert.match(note, /Fr\. 2301/);
    assert.match(note, /Fr\. 2301m/);
    assert.match(note, /plancha de anverso C79/);
    assert.match(note, /face plate C79/);
    assert.match(note, /plancha de reverso 1467/);
    assert.match(note, /back plate 1467/);
    assert.match(note, /N#202416/);
    assert.match(note, /no es un reemplazo con estrella/i);
    assert.match(note, /not a star replacement/i);
    assert.match(note, /Sin encapsular/);
    assert.match(note, /Ungraded/);
    assert.match(note, /en: '\$5 · HAWAII · Series 1934 A'/);
    assert.match(note, /es: '5 dólares · HAWAII · Serie 1934 A'/);
    assert.match(holdings, /us-frn-1934a-hawaii-5-l68013147a/);
    assert.match(holdings, /id: 'us-frn-1934a-hawaii-5-l68013147a', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-frn-1934a-hawaii-fr2302/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/5-dolares-hawaii-1934a/', 'en'),
      '/en/collection/united-states/5-dollars-hawaii-1934a/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('5-dolares-serie-1934a-hawaii'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-federal-reserve-note-5-dollars-series-1934a-hawaii-l68013147a-composite\.jpg/);
    assert.match(note, /united-states-federal-reserve-note-5-dollars-series-1934a-hawaii-l68013147a-front\.jpg/);
    assert.match(note, /united-states-federal-reserve-note-5-dollars-series-1934a-hawaii-l68013147a-back\.jpg/);
  });

  it('names the holding in the Federal Reserve chapter, series inventory, and FAQ', () => {
    assert.match(data, /5 dólares HAWAII serie 1934 A \(P#38; Fr\. 2302\), serial L68013147A/);
    assert.match(data, /Series 1934A HAWAII \$5 \(P#38; Fr\. 2302\), serial L68013147A/);
    assert.match(faq, /¿Qué es el 5 dólares HAWAII serie 1934 A\?/);
    assert.match(faq, /What is the Series 1934A HAWAII \$5\?/);
    assert.match(faq, /serial L68013147A/);
    assert.match(note, /ni el 10 dólares HAWAII serie 1934 A, serial L45104670B/);
    assert.match(note, /nor the Series 1934A HAWAII \$20, serial L86654132A/);
    assert.match(note, /No es el 1 dólar HAWAII serie 1935 A, serial S40499058C/);
  });
});
