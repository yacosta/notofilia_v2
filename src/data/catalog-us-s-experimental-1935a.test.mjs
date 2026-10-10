import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const glossary = readFileSync(new URL('./glossary.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/1-dolar-experimental-s-1935a/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/1-dollar-s-experimental-1935a/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '1-dolar-experimental-s-1935a'");
const noteEnd = data.indexOf("id: '1-dolar-certificado-plata-1957b'");
const note = data.slice(noteStart, noteEnd);
const printedStart = note.indexOf('printed:');
const printed = note.slice(printedStart, note.indexOf('facts:', printedStart));

describe('US Series 1935A S-experimental $1 Fr. 1610', () => {
  it('records Fr. 1610 / P#416AS with serial S74796042C inside the non-star S run', () => {
    assert.match(data, /id: '1-dolar-experimental-s-1935a'/);
    assert.match(note, /chapterId: 'us-silver'/);
    assert.match(note, /pick: 'Fr\. 1610'/);
    assert.match(note, /friedberg: 'Fr\. 1610'/);
    assert.match(note, /scwpm: 'P#416AS'/);
    assert.match(note, /P#416AS; Friedberg 1610/);
    assert.match(note, /serial: 'S74796042C'/);
    assert.match(note, /serial_display: 'S 74796042 C'/);
    assert.match(note, /William Alexander Julian/);
    assert.match(note, /Henry Morgenthau Jr\./);
    assert.match(note, /Posición de plancha/);
    assert.match(note, /Plate position/);
    assert.match(note, /L 5566/);
    assert.match(note, /3837/);
    assert.match(note, /S73884001C–S75068000C/);
    assert.match(note, /1\.184\.000/);
    assert.match(note, /1,184,000/);
    assert.match(note, /912\.042/);
    assert.match(note, /912,042/);
    assert.match(note, /\*91188001A–\*91200000A/);
    assert.match(note, /12\.000/);
    assert.match(note, /12,000/);
    assert.match(note, /20 de junio de 1944/);
    assert.match(note, /20 June 1944/);
    assert.match(note, /La designación de serie no es el año/);
    assert.match(note, /The series designation is not the year/);
    assert.match(note, /sin estrella/);
    assert.match(note, /not a star/);
    assert.match(note, /P#416a/);
    assert.match(note, /Fr\. 1609/);
    assert.match(note, /S40499058C/);
    assert.match(note, /B52497547C/);
    assert.match(note, /IN GOD WE TRUST/);
    assert.match(note, /no se asigna un grado numérico/i);
    assert.match(note, /No numerical grade is assigned/);
    assert.match(note, /USA0416AS2\.htm/);
    assert.doesNotMatch(printed, /designación no es el año/);
    assert.doesNotMatch(printed, /designation is not the year/);
    assert.doesNotMatch(note, /\$\d{2,}/);
    assert.doesNotMatch(note, /melamin/i);
    assert.match(holdings, /us-sc-1935a-s-experimental-s74796042c/);
    assert.match(holdings, /id: 'us-sc-1935a-s-experimental-s74796042c', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-sc-1935a-s-experimental-fr1610/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-experimental-s-1935a/', 'en'),
      '/en/collection/united-states/1-dollar-s-experimental-1935a/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('1-dolar-experimental-s-1935a'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(
      note,
      /united-states-treasury-1-dollar-series-1935a-silver-certificate-s-experimental-s74796042c-composite\.jpg/,
    );
    assert.match(
      note,
      /united-states-treasury-1-dollar-series-1935a-silver-certificate-s-experimental-s74796042c-front\.jpg/,
    );
    assert.match(
      note,
      /united-states-treasury-1-dollar-series-1935a-silver-certificate-s-experimental-s74796042c-back\.jpg/,
    );
    assert.match(note, /width: 1672/);
    assert.match(note, /height: 941/);
  });

  it('names the holding in the Silver Certificates chapter, glossary, and FAQ', () => {
    assert.match(data, /1 dólar experimental S serie 1935 A \(Fr\. 1610\), serial S74796042C/);
    assert.match(data, /Series 1935A S-experimental \$1 \(Fr\. 1610\), serial S74796042C/);
    assert.match(faq, /¿Qué es el 1 dólar experimental S serie 1935 A\?/);
    assert.match(faq, /What is the Series 1935A S-experimental \$1\?/);
    assert.match(faq, /S74796042C/);
    assert.match(glossary, /serial S74796042C, bloque S–C/);
    assert.match(glossary, /serial S74796042C, S–C block/);
  });
});
