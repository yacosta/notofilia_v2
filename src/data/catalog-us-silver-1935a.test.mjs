import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import { additions, catalogAdditions } from './holdings.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const glossary = readFileSync(new URL('./glossary.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/1-dolar-certificado-plata-1935a/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/1-dollar-silver-certificate-1935a/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '1-dolar-certificado-plata-1935a'");
const noteEnd = data.indexOf("id: '1-dolar-experimental-r-1935a'");
const note = data.slice(noteStart, noteEnd);
const printedStart = note.indexOf('printed:');
const printed = note.slice(printedStart, note.indexOf('facts:', printedStart));

describe('US Series 1935A blue-seal $1 Fr. 1608', () => {
  it('records Fr. 1608 / P#416a with ordinary serial V94411136B in the V–B block', () => {
    assert.ok(noteStart > 0);
    assert.ok(noteEnd > noteStart);
    assert.match(note, /chapterId: 'us-silver'/);
    assert.match(note, /pick: 'Fr\. 1608'/);
    assert.match(note, /friedberg: 'Fr\. 1608'/);
    assert.match(note, /scwpm: 'P#416a'/);
    assert.match(note, /serial: 'V94411136B'/);
    assert.match(note, /serial_display: 'V 94411136 B'/);
    assert.match(note, /William Alexander Julian/);
    assert.match(note, /Henry Morgenthau Jr\./);
    assert.match(note, /H3870/);
    assert.match(note, /2087/);
    assert.match(note, /V00000001B–V99999999B/);
    assert.match(note, /100\.000\.000/);
    assert.match(note, /100,000,000/);
    assert.match(note, /99\.999\.999/);
    assert.match(note, /99,999,999/);
    assert.match(note, /27 de enero al 3 de marzo de 1942/);
    assert.match(note, /27 January to 3 March 1942/);
    assert.match(note, /Fr\. 1608m/);
    assert.match(note, /no le asigna Fr\. 1608m/);
    assert.match(note, /does not assign Fr\. 1608m/);
    assert.match(note, /no se asigna un grado numérico/i);
    assert.match(note, /No numerical grade is assigned/);
    assert.match(note, /IN GOD WE TRUST/);
    assert.match(printed, /100\.000\.000/);
    assert.match(printed, /V94411136B/);
    assert.doesNotMatch(printed, /6\.1/);
    assert.doesNotMatch(note, /Stuart/);
    assert.doesNotMatch(note, /\$\d{2,}/);
    assert.equal(additions.at(-1)?.id, 'us-sc-1935a-r-experimental-s71208111c');
    assert.equal(catalogAdditions.at(-1)?.id, 'us-sc-1935a-r-experimental-fr1609');
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-certificado-plata-1935a/', 'en'),
      '/en/collection/united-states/1-dollar-silver-certificate-1935a/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('1-dolar-certificado-plata-1935a'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(
      note,
      /united-states-treasury-1-dollar-series-1935a-silver-certificate-v94411136b-front\.jpg/,
    );
    assert.match(note, /width: 1672/);
    assert.match(note, /height: 941/);
  });

  it('names the holding in the Silver Certificates chapter, glossary, and FAQ', () => {
    assert.match(data, /1 dólar de sello azul serie 1935 A \(P#416a; Fr\. 1608\), serial V94411136B/);
    assert.match(data, /ordinary blue-seal Series 1935A \$1 \(P#416a; Fr\. 1608\), serial V94411136B/);
    assert.match(faq, /¿Qué es el 1 dólar certificado de plata serie 1935 A de sello azul\?/);
    assert.match(faq, /What is the blue-seal Series 1935A \$1 Silver Certificate\?/);
    assert.match(faq, /serial V94411136B/);
    assert.match(glossary, /Fr\. 1608, serial V94411136B/);
  });
});
