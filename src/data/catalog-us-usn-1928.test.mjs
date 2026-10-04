import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/1-dolar-serie-1928/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/1-dollar-series-1928/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '1-dolar-serie-1928'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1896'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1928 United States Note $1 Fr. 1500', () => {
  it('records Fr. 1500 / P#377 with ordinary serial A01772521A', () => {
    assert.match(data, /id: '1-dolar-serie-1928'/);
    assert.match(note, /chapterId: 'us-notes'/);
    assert.match(note, /pick: 'P#377 · Fr\. 1500'/);
    assert.match(note, /serial: 'A01772521A'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /W\. O\. Woods \(tesorero de los Estados Unidos\)/);
    assert.match(note, /W\. O\. Woods \(Treasurer of the United States\)/);
    assert.match(note, /W\. H\. Woodin \(secretario del Tesoro\)/);
    assert.match(note, /W\. H\. Woodin \(Secretary of the Treasury\)/);
    assert.match(note, /A00000001A–A01872012A/);
    assert.match(note, /1\.872\.012/);
    assert.match(note, /1,872,012/);
    assert.match(note, /99\.491/);
    assert.match(note, /99,491/);
    assert.match(note, /plancha de anverso 21/);
    assert.match(note, /face plate 21/);
    assert.match(note, /plancha de reverso 2467/);
    assert.match(note, /Back plate 2467/);
    assert.match(note, /Funnyback/);
    assert.match(note, /bloque A–A/);
    assert.match(note, /A–A block/);
    assert.match(note, /no es un libro de embarque|no cita un libro de embarque/);
    assert.match(note, /does not cite a shipment ledger/);
    assert.match(note, /serial ordinario|El serial es ordinario/);
    assert.match(note, /The serial is ordinary/);
    assert.match(note, /156 × 67 mm/);
    assert.match(note, /No se republican columnas de precio/);
    assert.match(note, /Price columns are not republished/);
    assert.doesNotMatch(note, /\$43|\$59|\$110|\$620|\$44|\$60/);
    assert.match(holdings, /us-usn-1928-1-a01772521a/);
    assert.match(holdings, /id: 'us-usn-1928-1-a01772521a', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-usn-1928-1-p377-fr1500/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-serie-1928/', 'en'),
      '/en/collection/united-states/1-dollar-series-1928/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('1-dolar-serie-1928'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-treasury-1-dollar-series-1928-funnyback-united-states-note-a01772521a-composite\.jpg/);
    assert.match(note, /united-states-treasury-1-dollar-series-1928-funnyback-united-states-note-a01772521a-front\.jpg/);
    assert.match(note, /united-states-treasury-1-dollar-series-1928-funnyback-united-states-note-a01772521a-back\.jpg/);
  });

  it('names the holding in the United States Notes chapter, series inventory, and FAQ', () => {
    assert.match(data, /Ya tiene ficha el 1 dólar de la serie 1928, Fr\. 1500, serial A01772521A/);
    assert.match(
      data,
      /The Series 1928 \$1, Fr\. 1500, serial A01772521A, Funnyback reverse, a small-size note, already has a note page/,
    );
    assert.match(data, /el 1 dólar United States Note de la serie 1928 \(P#377; Fr\. 1500\), serial A01772521A/);
    assert.match(data, /the Series 1928 United States Note \$1 \(P#377; Fr\. 1500\), serial A01772521A/);
    assert.match(faq, /¿Qué es el 1 dólar United States Note de 1928\?/);
    assert.match(faq, /What is the Series 1928 United States Note \$1\?/);
    assert.match(faq, /serial A01772521A/);
    assert.doesNotMatch(note, /Decreto 188/);
  });
});
