import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/2-dolares-serie-1917/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/2-dollars-series-1917/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '2-dolares-serie-1917'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1957b'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1917 United States Note $2 Fr. 60', () => {
  it('records Fr. 60 / P#188(4) with serial B50400302A', () => {
    assert.match(data, /id: '2-dolares-serie-1917'/);
    assert.match(note, /chapterId: 'us-notes'/);
    assert.match(note, /pick: 'P#188\(4\) · Fr\. 60'/);
    assert.match(note, /serial: 'B50400302A'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /Harley V\. Speelman \(registrador del Tesoro\)/);
    assert.match(note, /Harley V\. Speelman \(Register of the Treasury\)/);
    assert.match(note, /Frank White \(tesorero de los Estados Unidos\)/);
    assert.match(note, /Frank White \(Treasurer of the United States\)/);
    assert.match(note, /B44800001A–B56688000A/);
    assert.match(note, /B56688001A/);
    assert.match(note, /reverso Bracelet/);
    assert.match(note, /Bracelet reverse/);
    assert.match(note, /horse blankets/);
    assert.match(note, /no identifica el serial B50400302A como mule/);
    assert.match(note, /does not identify serial B50400302A as a mule/);
    assert.doesNotMatch(note, /South Florida/);
    assert.doesNotMatch(note, /Numismatic Nexus/);
    assert.doesNotMatch(note, /Regional Market/);
    assert.match(holdings, /us-usn-1917-2-b50400302a/);
    assert.match(holdings, /id: 'us-usn-1917-2-b50400302a', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-usn-1917-2-p188-fr60/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/2-dolares-serie-1917/', 'en'),
      '/en/collection/united-states/2-dollars-series-1917/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('2-dolares-serie-1917'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /usn-1917-2-b50400302a-composite\.jpg/);
    assert.match(note, /usn-1917-2-b50400302a-front\.jpg/);
    assert.match(note, /usn-1917-2-b50400302a-back\.jpg/);
  });

  it('names the holding in the United States Notes chapter, series inventory, and FAQ', () => {
    assert.match(data, /Ya tiene ficha el 2 dólares de la serie 1917, Fr\. 60, serial B50400302A/);
    assert.match(data, /The Series 1917 \$2, Fr\. 60, serial B50400302A, a large-size note, already has a note page/);
    assert.match(data, /el 2 dólares United States Note de la serie 1917 \(P#188\(4\); Fr\. 60\), serial B50400302A/);
    assert.match(data, /the Series 1917 United States Note \$2 \(P#188\(4\); Fr\. 60\), serial B50400302A/);
    assert.match(faq, /¿Qué es el 2 dólares United States Note de 1917\?/);
    assert.match(faq, /What is the Series 1917 United States Note \$2\?/);
    assert.match(faq, /serial B50400302A/);
    assert.doesNotMatch(faq, /H00010418★/);
    assert.doesNotMatch(note, /No es el 2 dólares Federal Reserve Note de 2003/);
    assert.doesNotMatch(note, /No es el 2 dólares de 2003 de San Luis/);
    assert.doesNotMatch(note, /It is not the Series 2003 St\. Louis Federal Reserve Note \$2/);
    assert.doesNotMatch(note, /It is not this case’s Series 2003 St\. Louis \$2/);
  });
});
