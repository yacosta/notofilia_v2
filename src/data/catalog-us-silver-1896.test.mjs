import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/1-dolar-certificado-plata-1896/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/1-dollar-silver-certificate-1896/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '1-dolar-certificado-plata-1896'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1928a'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1896 Educational Silver Certificate $1 Fr. 224', () => {
  it('records Fr. 224 / P#335(1) with serial B3207078', () => {
    assert.match(data, /id: '1-dolar-certificado-plata-1896'/);
    assert.match(note, /chapterId: 'us-silver'/);
    assert.match(note, /pick: 'P#335\(1\) · Fr\. 224'/);
    assert.match(note, /serial: 'B3207078'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /James Fount Tillman \(registrador del Tesoro\)/);
    assert.match(note, /Daniel N\. Morgan \(Treasurer of the United States\)/);
    assert.match(note, /History Instructing Youth/);
    assert.match(note, /Will Hicok Low/);
    assert.match(note, /Charles Schlecht/);
    assert.match(note, /Thomas F\. Morris/);
    assert.match(note, /Fr\. 225/);
    assert.match(note, /no inventa una tirada del BEP/);
    assert.match(note, /does not invent a BEP printage/);
    assert.match(note, /187 × 79 mm/);
    assert.doesNotMatch(note, /USD|hammer|population report/i);
    assert.match(holdings, /id: 'us-sc-1896-1-b3207078', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-sc-1896-fr224/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-certificado-plata-1896/', 'en'),
      '/en/collection/united-states/1-dollar-silver-certificate-1896/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('1-dolar-certificado-plata-1896'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-treasury-1-dollar-series-1896-silver-certificate-educational-b3207078-front\.jpg/);
    assert.match(note, /united-states-treasury-1-dollar-series-1896-silver-certificate-educational-b3207078-back\.jpg/);
  });

  it('names the holding in the Silver Certificates chapter, series inventory, and FAQ', () => {
    assert.match(data, /Ya tiene ficha el 1 dólar Educational Series, Fr\. 224, serial B3207078/);
    assert.match(data, /Educational Series \$1, Fr\. 224, serial B3207078, Tillman–Morgan signatures, already has a note page/);
    assert.match(faq, /¿Qué es el 1 dólar Educational Series de 1896\?/);
    assert.match(faq, /What is the 1896 Educational Series \$1\?/);
    assert.match(faq, /serial B3207078/);
  });
});
