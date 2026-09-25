import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/5-dolares-certificado-plata-1896/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/5-dollars-silver-certificate-1896/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '5-dolares-certificado-plata-1896'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1928a'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1896 Educational Silver Certificate $5 Fr. 270', () => {
  it('records Fr. 270 / P#337(3) with serial 31528195', () => {
    assert.match(data, /id: '5-dolares-certificado-plata-1896'/);
    assert.match(note, /chapterId: 'us-silver'/);
    assert.match(note, /pick: 'P#337\(3\) · Fr\. 270'/);
    assert.match(note, /serial: '31528195'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /Judson W\. Lyons \(registrador del Tesoro\)/);
    assert.match(note, /Ellis H\. Roberts \(Treasurer of the United States\)/);
    assert.match(note, /Electricity Presenting Light to the World/);
    assert.match(note, /Walter Shirlaw/);
    assert.match(note, /George F\. C\. Smillie/);
    assert.match(note, /Ulysses S\. Grant/);
    assert.match(note, /Philip H\. Sheridan/);
    assert.match(note, /plancha C/);
    assert.match(note, /Plate letter C/);
    assert.match(note, /Fr\. 268/);
    assert.match(note, /Fr\. 269/);
    assert.match(note, /Tirada oficial: no verificada/);
    assert.match(note, /Official printage: not verified/);
    assert.match(note, /31\.528\.195/);
    assert.match(note, /31,528,195/);
    assert.match(note, /es ordinario/);
    assert.match(note, /ordinary/);
    assert.match(note, /no inventa una tirada del BEP/);
    assert.match(note, /does not invent a BEP printage/);
    assert.match(note, /3\.750/);
    assert.match(note, /\$3,750/);
    assert.match(note, /Very Fine 30 EPQ/);
    assert.match(holdings, /id: 'us-sc-1896-5-31528195', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-sc-1896-fr270/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/5-dolares-certificado-plata-1896/', 'en'),
      '/en/collection/united-states/5-dollars-silver-certificate-1896/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('5-dolares-certificado-plata-1896'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-treasury-5-dollars-series-1896-silver-certificate-educational-31528195-front\.jpg/);
    assert.match(note, /united-states-treasury-5-dollars-series-1896-silver-certificate-educational-31528195-back\.jpg/);
  });

  it('names the holding in the Silver Certificates chapter, series inventory, and FAQ', () => {
    assert.match(data, /Ya tiene ficha el 5 dólares Educational Series, Fr\. 270, serial 31528195/);
    assert.match(data, /Educational Series \$5, Fr\. 270, serial 31528195, plate C, Lyons–Roberts signatures, already has a note page/);
    assert.match(faq, /¿Qué es el 5 dólares Educational Series de 1896\?/);
    assert.match(faq, /What is the 1896 Educational Series \$5\?/);
    assert.match(faq, /serial 31528195/);
  });
});
