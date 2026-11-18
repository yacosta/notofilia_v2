import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/5-dolares-serie-1963/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/5-dollars-series-1963/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '5-dolares-serie-1963'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1896'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1963 United States Note $5 Fr. 1536', () => {
  it('records Fr. 1536 / P#383 with ordinary serial A26583630A', () => {
    assert.match(data, /id: '5-dolares-serie-1963'/);
    assert.match(note, /chapterId: 'us-notes'/);
    assert.match(note, /pick: 'P#383 · Fr\. 1536'/);
    assert.match(note, /serial: 'A26583630A'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /Kathryn O’Hay Granahan \(tesorera de los Estados Unidos\)/);
    assert.match(note, /Kathryn O’Hay Granahan \(Treasurer of the United States\)/);
    assert.match(note, /C\. Douglas Dillon \(secretario del Tesoro\)/);
    assert.match(note, /C\. Douglas Dillon \(Secretary of the Treasury\)/);
    assert.match(note, /A00000001A–A63360000A/);
    assert.match(note, /63\.360\.000/);
    assert.match(note, /63,360,000/);
    assert.match(note, /3\.840\.000/);
    assert.match(note, /3,840,000/);
    assert.match(note, /67\.200\.000/);
    assert.match(note, /67,200,000/);
    assert.match(note, /posición de plancha B3|Posición de plancha B3/);
    assert.match(note, /Plate position B3/);
    assert.match(note, /plancha de anverso B5/);
    assert.match(note, /face plate B5/);
    assert.match(note, /plancha de reverso 1/);
    assert.match(note, /back plate 1/);
    assert.match(note, /In God We Trust/);
    assert.match(note, /bloque A–A/);
    assert.match(note, /A–A block/);
    assert.match(note, /serial ordinario|El serial es ordinario|es ordinario/);
    assert.match(note, /The serial is ordinary|is ordinary/);
    assert.match(note, /1953C/);
    assert.match(note, /32 sujetos|32-subject/);
    assert.match(note, /156 × 67 mm/);
    assert.match(note, /No se republican columnas de precio/);
    assert.match(note, /Price columns are not republished/);
    assert.doesNotMatch(note, /\$5\.80|\$7\.50|\$9\.40|\$11|\$13|\$20/);
    assert.match(holdings, /us-usn-1963-5-a26583630a/);
    assert.match(holdings, /id: 'us-usn-1963-5-a26583630a', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-usn-1963-5-p383-fr1536/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/5-dolares-serie-1963/', 'en'),
      '/en/collection/united-states/5-dollars-series-1963/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('5-dolares-serie-1963'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-treasury-5-dollars-series-1963-united-states-note-a26583630a-composite\.jpg/);
    assert.match(note, /united-states-treasury-5-dollars-series-1963-united-states-note-a26583630a-front\.jpg/);
    assert.match(note, /united-states-treasury-5-dollars-series-1963-united-states-note-a26583630a-back\.jpg/);
  });

  it('names the holding in the United States Notes chapter, series inventory, and FAQ', () => {
    assert.match(data, /Ya tiene ficha el 5 dólares de la serie 1963, Fr\. 1536, serial A26583630A/);
    assert.match(
      data,
      /The Series 1963 \$5, Fr\. 1536, serial A26583630A, red seal and In God We Trust, a small-size note, already has a note page/,
    );
    assert.match(data, /el 5 dólares United States Note de la serie 1963 \(P#383; Fr\. 1536\), serial A26583630A/);
    assert.match(data, /the Series 1963 United States Note \$5 \(P#383; Fr\. 1536\), serial A26583630A/);
    assert.match(faq, /¿Qué es el 5 dólares United States Note de 1963\?/);
    assert.match(faq, /What is the Series 1963 United States Note \$5\?/);
    assert.match(faq, /serial A26583630A/);
    assert.doesNotMatch(note, /Decreto 188/);
  });
});
