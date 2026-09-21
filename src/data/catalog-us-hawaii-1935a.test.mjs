import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/1-dolar-hawaii-1935a/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/1-dollar-hawaii-1935a/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '1-dolar-hawaii-1935a'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1957b'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1935A HAWAII $1 Fr. 2300', () => {
  it('records Fr. 2300 / Hawaii P#36 with serial S40499058C and PMG 1505944-014', () => {
    assert.match(data, /id: '1-dolar-hawaii-1935a'/);
    assert.match(note, /chapterId: 'us-silver'/);
    assert.match(note, /pick: 'Hawaii P#36 · Fr\. 2300'/);
    assert.match(note, /serial: 'S40499058C'/);
    assert.match(note, /cert_number: '1505944-014'/);
    assert.match(note, /cert_grader: 'PMG'/);
    assert.match(note, /William Alexander Julian/);
    assert.match(note, /Henry Morgenthau Jr\./);
    assert.match(note, /bloque S–C/);
    assert.match(note, /S–C block/);
    assert.match(note, /S39996001C/);
    assert.match(note, /S54996000C/);
    assert.match(note, /15\.000\.000/);
    assert.match(note, /16 de mayo al 6 de junio de 1944/);
    assert.match(note, /16 May–6 June 1944/);
    assert.match(note, /35\.052\.000/);
    assert.match(note, /35,052,000/);
    assert.match(note, /F 2300/);
    assert.match(note, /3534/);
    assert.match(note, /Choice About Uncirculated/);
    assert.match(note, /no es el P#416a/i);
    assert.match(note, /not United States P#416a/);
    assert.match(note, /N#202338/);
    assert.match(note, /Huntoon/);
    assert.match(note, /58 EPQ/);
    assert.match(note, /no es un reemplazo con estrella/i);
    assert.match(note, /not a star replacement/i);
    assert.match(holdings, /us-sc-1935a-hawaii-s40499058c/);
    assert.match(holdings, /id: 'us-sc-1935a-hawaii-s40499058c', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-sc-1935a-hawaii-fr2300/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-hawaii-1935a/', 'en'),
      '/en/collection/united-states/1-dollar-hawaii-1935a/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('1-dolar-hawaii-1935a'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /sc-1935a-hawaii-1-dolar-s40499058c-composite\.jpg/);
    assert.match(note, /sc-1935a-hawaii-1-dolar-s40499058c-front\.jpg/);
    assert.match(note, /sc-1935a-hawaii-1-dolar-s40499058c-back\.jpg/);
  });

  it('names the holding in the Silver Certificates chapter, series inventory, and FAQ', () => {
    assert.match(data, /1 dólar HAWAII serie 1935 A \(Fr\. 2300\), serial S40499058C/);
    assert.match(data, /Series 1935A HAWAII \$1 \(Fr\. 2300\), serial S40499058C/);
    assert.match(faq, /¿Qué es el 1 dólar HAWAII serie 1935 A\?/);
    assert.match(faq, /What is the Series 1935A HAWAII \$1\?/);
    assert.match(faq, /Hawaii P#36/);
    assert.match(faq, /no es el P#416a/i);
    assert.match(faq, /serial S40499058C/);
    assert.match(faq, /se numeró en 1944/);
    assert.match(faq, /numbered in 1944/);
    assert.match(faq, /Choice About Uncirculated/);
    assert.match(note, /No es el 1 dólar Funnyback serie 1928 A, serial D00508932B/);
    assert.match(note, /It is not the Series 1928A Funnyback \$1, serial D00508932B/);
  });
});
