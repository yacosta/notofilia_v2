import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/1-dolar-certificado-plata-1928/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/1-dollar-silver-certificate-1928/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '1-dolar-certificado-plata-1928'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1928a'");
const note = data.slice(noteStart, noteEnd);

describe('US Series 1928 Silver Certificate $1 Fr. 1600', () => {
  it('records Fr. 1600 / P#412 with serial H86110669A', () => {
    assert.match(data, /id: '1-dolar-certificado-plata-1928'/);
    assert.match(note, /chapterId: 'us-silver'/);
    assert.match(note, /pick: 'P#412 · Fr\. 1600'/);
    assert.match(note, /serial: 'H86110669A'/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(note, /H\. T\. Tate \(tesorero de los Estados Unidos\)/);
    assert.match(note, /H\. T\. Tate \(Treasurer of the United States\)/);
    assert.match(note, /A\. W\. Mellon \(secretario del Tesoro\)/);
    assert.match(note, /A\. W\. Mellon \(Secretary of the Treasury\)/);
    assert.match(note, /SERIES OF 1928/);
    assert.match(note, /Funnyback/);
    assert.match(note, /bloque H–A/);
    assert.match(note, /H–A block/);
    assert.match(note, /G948/);
    assert.match(note, /plancha de anverso 948/);
    assert.match(note, /face plate 948/);
    assert.match(note, /no se lee en estas fotografías/);
    assert.match(note, /not readable on these photographs/);
    assert.match(note, /no prueba que este ejemplar se imprimiera en el año calendario 1928/);
    assert.match(note, /does not prove that this specimen was printed in calendar year 1928/);
    assert.match(note, /rango compartido 1928\/1928 A/);
    assert.match(note, /shared 1928\/1928A range/);
    assert.match(note, /H00000001A/);
    assert.match(note, /No hay una tirada publicada solo de la serie 1928/);
    assert.match(note, /no published Series 1928-only printage/);
    assert.doesNotMatch(note, /Esta ficha no inventa/);
    assert.doesNotMatch(note, /This record does not invent/);
    assert.doesNotMatch(note, /no republica columnas de precio/);
    assert.doesNotMatch(note, /does not republish price columns/);
    assert.match(note, /En 1878 el Tesoro emitió los primeros certificados de plata/);
    assert.match(note, /In 1878 the Treasury issued the first silver certificates/);
    assert.match(note, /cerca de un 30 %/);
    assert.match(note, /about 30 percent/);
    assert.match(note, /86110669 no es un serial bajo/);
    assert.match(note, /86110669 is not a low serial/);
    assert.doesNotMatch(note, /Decreto 188/);
    assert.doesNotMatch(note, /52 Fr/);
    assert.match(holdings, /id: 'us-sc-1928-h86110669a', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-sc-1928-fr1600/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-certificado-plata-1928/', 'en'),
      '/en/collection/united-states/1-dollar-silver-certificate-1928/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('1-dolar-certificado-plata-1928'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /united-states-treasury-1-dollar-series-1928-silver-certificate-h86110669a-composite\.jpg/);
    assert.match(note, /united-states-treasury-1-dollar-series-1928-silver-certificate-h86110669a-front\.jpg/);
    assert.match(note, /united-states-treasury-1-dollar-series-1928-silver-certificate-h86110669a-back\.jpg/);
    assert.match(note, /width: 3344/);
    assert.match(note, /height: 941/);
  });

  it('names the holding in the Silver Certificates chapter, series inventory, and FAQ', () => {
    assert.match(data, /1 dólar de tamaño pequeño serie 1928 —Fr\. 1600, reverso Funnyback, firmas Tate–Mellon— ya tiene ficha, serial H86110669A/);
    assert.match(
      data,
      /small-size Series 1928 \$1 — Fr\. 1600, Funnyback reverse, Tate–Mellon signatures — already has a note page, serial H86110669A/,
    );
    assert.match(data, /el 1 dólar certificado de plata serie 1928 \(Funnyback; Fr\. 1600\), serial H86110669A/);
    assert.match(data, /the Series 1928 \$1 Silver Certificate \(Funnyback; Fr\. 1600\), serial H86110669A/);
    assert.match(faq, /¿Qué es el 1 dólar certificado de plata serie 1928 \(Funnyback\)\?/);
    assert.match(faq, /What is the Series 1928 \$1 Silver Certificate \(Funnyback\)\?/);
    assert.match(faq, /serial H86110669A/);
    assert.match(note, /No es el 1 dólar certificado de plata serie 1928 A, serial D00508932B/);
    assert.match(note, /It is not the Series 1928A \$1 Silver Certificate, serial D00508932B/);
  });
});
