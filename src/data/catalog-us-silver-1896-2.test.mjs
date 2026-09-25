import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/2-dolares-certificado-plata-1896/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/2-dollars-silver-certificate-1896/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '2-dolares-certificado-plata-1896'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1928a'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1896 Educational Silver Certificate $2 Fr. 247', () => {
  it('records Fr. 247 / P#336(1) with serial 1712091', () => {
    assert.match(data, /id: '2-dolares-certificado-plata-1896'/);
    assert.match(note, /chapterId: 'us-silver'/);
    assert.match(note, /pick: 'P#336\(1\) · Fr\. 247'/);
    assert.match(note, /serial: '1712091'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /James Fount Tillman \(registrador del Tesoro\)/);
    assert.match(note, /Daniel N\. Morgan \(Treasurer of the United States\)/);
    assert.match(note, /Science Presenting Steam and Electricity/);
    assert.match(note, /Edwin Howland Blashfield/);
    assert.match(note, /Lorenzo James Hatch/);
    assert.match(note, /Robert Fulton/);
    assert.match(note, /plancha C/);
    assert.match(note, /Plate letter C/);
    assert.match(note, /Fr\. 248/);
    assert.match(note, /11\.252\.000/);
    assert.match(note, /11,252,000/);
    assert.match(note, /no publica un corte/);
    assert.match(note, /does not publish a cutoff/);
    assert.match(note, /1\.712\.091/);
    assert.match(note, /1,712,091/);
    assert.match(note, /serial ordinario/);
    assert.match(note, /ordinary serial/);
    assert.match(note, /189 × 79 mm/);
    assert.doesNotMatch(note, /9\.000\.000|9,000,000/);
    assert.doesNotMatch(note, /USD|hammer|population report/i);
    assert.match(holdings, /id: 'us-sc-1896-2-1712091', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-sc-1896-fr247/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/2-dolares-certificado-plata-1896/', 'en'),
      '/en/collection/united-states/2-dollars-silver-certificate-1896/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('2-dolares-certificado-plata-1896'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-treasury-2-dollars-series-1896-silver-certificate-educational-1712091-front\.jpg/);
    assert.match(note, /united-states-treasury-2-dollars-series-1896-silver-certificate-educational-1712091-back\.jpg/);
  });

  it('names the holding in the Silver Certificates chapter, series inventory, and FAQ', () => {
    assert.match(data, /Ya tiene ficha el 2 dólares Educational Series, Fr\. 247, serial 1712091/);
    assert.match(data, /Educational Series \$2, Fr\. 247, serial 1712091, plate C, Tillman–Morgan signatures, already has a note page/);
    assert.match(faq, /¿Qué es el 2 dólares Educational Series de 1896\?/);
    assert.match(faq, /What is the 1896 Educational Series \$2\?/);
    assert.match(faq, /serial 1712091/);
  });
});
