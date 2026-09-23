import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/1-dolar-certificado-plata-1928a/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/1-dollar-silver-certificate-1928a/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '1-dolar-certificado-plata-1928a'");
const noteEnd = data.indexOf("id: '1-dolar-hawaii-1935a'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1928A Silver Certificate $1 Fr. 1601', () => {
  it('records Fr. 1601 / P#412a with serial D00508932B', () => {
    assert.match(data, /id: '1-dolar-certificado-plata-1928a'/);
    assert.match(note, /chapterId: 'us-silver'/);
    assert.match(note, /pick: 'P#412a · Fr\. 1601'/);
    assert.match(note, /serial: 'D00508932B'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /W\. O\. Woods \(tesorero de los Estados Unidos\)/);
    assert.match(note, /W\. O\. Woods \(Treasurer of the United States\)/);
    assert.match(note, /A\. W\. Mellon \(secretario del Tesoro\)/);
    assert.match(note, /A\. W\. Mellon \(Secretary of the Treasury\)/);
    assert.match(note, /SERIES OF 1928 A/);
    assert.match(note, /Funnyback/);
    assert.match(note, /bloque D–B/);
    assert.match(note, /D–B block/);
    assert.match(note, /plancha de anverso 1740/);
    assert.match(note, /face plate 1740/);
    assert.match(note, /plancha de reverso 2544/);
    assert.match(note, /Reverse plate 2544/);
    assert.match(note, /no prueba que este ejemplar se imprimiera en el año calendario 1928/);
    assert.match(note, /does not prove that this specimen was printed in calendar year 1928/);
    assert.match(note, /2\.267\.809\.500/);
    assert.match(note, /2,267,809,500/);
    assert.match(note, /Jeremy Dansie/);
    assert.match(note, /producción estimada/);
    assert.match(note, /estimated production/);
    assert.match(note, /D93825125A/);
    assert.match(note, /J55439218B/);
    assert.match(note, /D00000001B/);
    assert.match(note, /D99999999B/);
    assert.match(note, /menos de 100 millones/);
    assert.match(note, /fewer than 100 million/);
    assert.match(note, /no es un total auditado/);
    assert.match(note, /not an audited BEP total/);
    assert.match(note, /no inventa una tirada solo para D–B/);
    assert.match(note, /does not invent a D–B-only printage/);
    assert.doesNotMatch(note, /Decreto 188/);
    assert.match(holdings, /us-sc-1928a-d00508932b/);
    assert.match(holdings, /id: 'us-sc-1928a-d00508932b', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-sc-1928a-fr1601/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-certificado-plata-1928a/', 'en'),
      '/en/collection/united-states/1-dollar-silver-certificate-1928a/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('1-dolar-certificado-plata-1928a'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-treasury-1-dollar-series-1928a-silver-certificate-d00508932b-composite\.jpg/);
    assert.match(note, /united-states-treasury-1-dollar-series-1928a-silver-certificate-d00508932b-front\.jpg/);
    assert.match(note, /united-states-treasury-1-dollar-series-1928a-silver-certificate-d00508932b-back\.jpg/);
  });

  it('names the holding in the Silver Certificates chapter, series inventory, and FAQ', () => {
    assert.match(data, /1 dólar de tamaño pequeño serie 1928 A —Fr\. 1601, reverso Funnyback— ya tiene ficha, serial D00508932B/);
    assert.match(
      data,
      /small-size Series 1928A \$1 — Fr\. 1601, Funnyback reverse — already has a note page, serial D00508932B/,
    );
    assert.match(data, /el 1 dólar certificado de plata serie 1928 A \(Funnyback; Fr\. 1601\), serial D00508932B/);
    assert.match(data, /the Series 1928A \$1 Silver Certificate \(Funnyback; Fr\. 1601\), serial D00508932B/);
    assert.match(faq, /¿Qué es el 1 dólar certificado de plata serie 1928 A \(Funnyback\)\?/);
    assert.match(faq, /What is the Series 1928A \$1 Silver Certificate \(Funnyback\)\?/);
    assert.match(faq, /serial D00508932B/);
    assert.match(note, /No es el 1 dólar certificado de plata serie 1957 B, serial S35513454A/);
    assert.match(note, /It is not the Series 1957-B \$1 Silver Certificate, serial S35513454A/);
  });
});
