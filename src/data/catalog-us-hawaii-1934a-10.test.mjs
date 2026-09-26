import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/10-dolares-hawaii-1934a/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/10-dollars-hawaii-1934a/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '10-dolares-serie-1934a-hawaii'");
const noteEnd = data.indexOf("id: '20-dolares-serie-1934a-hawaii'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1934A HAWAII $10 Fr. 2303', () => {
  it('records Fr. 2303 / P#40 with serial L45104670B in the L–B block', () => {
    assert.match(data, /id: '10-dolares-serie-1934a-hawaii'/);
    assert.match(note, /chapterId: 'us-frb'/);
    assert.match(note, /pick: 'P#40 · Fr\. 2303'/);
    assert.match(note, /serial: 'L45104670B'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /William Alexander Julian/);
    assert.match(note, /Henry Morgenthau Jr\./);
    assert.match(note, /bloque L–B/);
    assert.match(note, /L–B block/);
    assert.match(note, /10\.424\.000/);
    assert.match(note, /10,424,000/);
    assert.match(note, /No se publica aquí una ventana de numeración/);
    assert.match(note, /No numbering window that contains it is published here/);
    assert.doesNotMatch(note, /numerado en 1944/);
    assert.doesNotMatch(note, /numbered in 1944/);
    assert.match(note, /plancha de anverso L164/);
    assert.match(note, /face plate L164/);
    assert.match(note, /plancha de reverso 903/);
    assert.match(note, /back plate 903/);
    assert.match(note, /no lista una variedad mula/);
    assert.match(note, /does not list a mule variety/);
    assert.match(note, /N#247191/);
    assert.match(note, /no es un reemplazo con estrella/i);
    assert.match(note, /not a star replacement/i);
    assert.match(note, /Sin encapsular/);
    assert.match(note, /Ungraded/);
    assert.match(note, /en: '\$10 · HAWAII · Series 1934 A'/);
    assert.match(note, /es: '10 dólares · HAWAII · Serie 1934 A'/);
    assert.match(holdings, /us-frn-1934a-hawaii-10-l45104670b/);
    assert.match(holdings, /id: 'us-frn-1934a-hawaii-10-l45104670b', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-frn-1934a-hawaii-fr2303/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/10-dolares-hawaii-1934a/', 'en'),
      '/en/collection/united-states/10-dollars-hawaii-1934a/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('10-dolares-serie-1934a-hawaii'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-federal-reserve-note-10-dollars-series-1934a-hawaii-l45104670b-composite\.jpg/);
    assert.match(note, /united-states-federal-reserve-note-10-dollars-series-1934a-hawaii-l45104670b-front\.jpg/);
    assert.match(note, /united-states-federal-reserve-note-10-dollars-series-1934a-hawaii-l45104670b-back\.jpg/);
  });

  it('names the holding in the Federal Reserve chapter, series inventory, and FAQ', () => {
    assert.match(data, /10 dólares HAWAII serie 1934 A \(P#40; Fr\. 2303\), serial L45104670B/);
    assert.match(data, /Series 1934A HAWAII \$10 \(P#40; Fr\. 2303\), serial L45104670B/);
    assert.match(faq, /¿Qué es el 10 dólares HAWAII serie 1934 A\?/);
    assert.match(faq, /What is the Series 1934A HAWAII \$10\?/);
    assert.match(faq, /serial L45104670B/);
    assert.match(note, /No es el 20 dólares HAWAII serie 1934 A, serial L86654132A/);
    assert.match(note, /It is not the Series 1934A HAWAII \$20, serial L86654132A/);
    assert.match(note, /ni el 1 dólar HAWAII serie 1935 A, serial S40499058C/);
    assert.match(note, /nor the Series 1935A HAWAII \$1, serial S40499058C/);
  });
});
