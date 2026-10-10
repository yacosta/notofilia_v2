import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const glossary = readFileSync(new URL('./glossary.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/1-dolar-sello-amarillo-1935a/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/1-dollar-yellow-seal-1935a/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '1-dolar-sello-amarillo-1935a'");
const noteEnd = data.indexOf("id: '1-dolar-sello-amarillo-1935a-c78095129c'");
const note = data.slice(noteStart, noteEnd);
const printedStart = note.indexOf('printed:');
const printed = note.slice(printedStart, note.indexOf('facts:', printedStart));
const layout = readFileSync(new URL('../components/catalog/UnitedStatesNotePage.astro', import.meta.url), 'utf8');

describe('US Series 1935A yellow-seal $1 Fr. 2306', () => {
  it('records Fr. 2306 with serial B52497547C inside the second B–C North Africa run', () => {
    assert.match(data, /id: '1-dolar-sello-amarillo-1935a'/);
    assert.match(note, /chapterId: 'us-silver'/);
    assert.match(note, /pick: 'Fr\. 2306'/);
    assert.match(note, /friedberg: 'Fr\. 2306'/);
    assert.match(note, /scwpm: 'P#416AY'/);
    assert.match(note, /P#416AY; Friedberg 2306/);
    assert.match(note, /Posición de plancha/);
    assert.match(note, /Plate position/);
    assert.match(note, /Plancha de anverso/);
    assert.match(note, /Face plate/);
    assert.match(note, /Plancha de reverso/);
    assert.match(note, /Back plate/);
    assert.match(note, /Impresor/);
    assert.match(note, /Printer/);
    assert.match(note, /Bureau of Engraving and Printing/);
    assert.match(note, /estándar de 1928/);
    assert.match(note, /1928 standard/);
    assert.match(note, /156 × 66 mm/);
    assert.match(note, /6,14 × 2,61 in/);
    assert.match(note, /6\.14 × 2\.61 in/);
    assert.match(note, /no es una medición de esta pieza/);
    assert.match(note, /not a measurement of this piece/);
    assert.match(note, /Operación Torch \(norte de África\), 1942; después, Sicilia e Italia/);
    assert.match(note, /Operation Torch \(North Africa\), 1942/);
    assert.match(note, /sin sobreimpresión/);
    assert.match(note, /no overprint/);
    assert.match(note, /segunda corrida de sello amarillo, B51624001C–B52624000C/);
    assert.match(note, /second yellow-seal run, B51624001C–B52624000C/);
    assert.match(note, /impresa «SERIES 1935 A»/);
    assert.match(note, /printed "SERIES 1935 A"/);
    assert.match(note, /La designación de serie no es el año/);
    assert.match(note, /The series designation is not the year/);
    assert.match(note, /USA0416AY\.htm/);
    assert.match(printed, /26\.916\.000/);
    assert.match(printed, /26,916,000/);
    assert.match(printed, /B51624001C–B52624000C/);
    assert.doesNotMatch(printed, /designación no es el año/);
    assert.doesNotMatch(printed, /designation is not the year/);
    assert.doesNotMatch(printed, /Bureau of Engraving/);
    assert.doesNotMatch(printed, /1929/);
    assert.doesNotMatch(printed, /Operación Torch/);
    assert.doesNotMatch(printed, /Operation Torch/);
    assert.match(layout, /friedbergLabel/);
    assert.match(layout, /pickScwpmLabel/);
    assert.match(layout, /note\.facts/);
    assert.doesNotMatch(layout, /Pick reference/);
    assert.match(note, /serial: 'B52497547C'/);
    assert.match(note, /serial_display: 'B 52497547 C'/);
    assert.match(note, /William Alexander Julian/);
    assert.match(note, /Henry Morgenthau Jr\./);
    assert.match(note, /bloque B–C/);
    assert.match(note, /B–C block/);
    assert.match(note, /B51624001C/);
    assert.match(note, /B52624000C/);
    assert.match(note, /1\.000\.000/);
    assert.match(note, /1,000,000/);
    assert.match(note, /26\.916\.000/);
    assert.match(note, /26,916,000/);
    assert.match(note, /17\.012\.000/);
    assert.match(note, /17,012,000/);
    assert.match(note, /A4124/);
    assert.match(note, /2813/);
    assert.match(note, /P#416a/);
    assert.match(note, /Fr\. 2308m/);
    assert.match(note, /IN GOD WE TRUST/);
    assert.match(note, /sin estrella de reemplazo/);
    assert.match(note, /no replacement star/);
    assert.match(note, /no se asigna un grado numérico/i);
    assert.match(note, /No numerical grade is assigned/);
    assert.doesNotMatch(note, /\$\d{2,}/);
    assert.match(holdings, /us-sc-1935a-yellow-seal-b52497547c/);
    assert.match(holdings, /id: 'us-sc-1935a-yellow-seal-b52497547c', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-sc-1935a-yellow-seal-fr2306/);
  });

  it('keeps thin ES and EN piece routes on the United States note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/1-dolar-sello-amarillo-1935a/', 'en'),
      '/en/collection/united-states/1-dollar-yellow-seal-1935a/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('1-dolar-sello-amarillo-1935a'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(
      note,
      /united-states-treasury-1-dollar-series-1935a-silver-certificate-north-africa-b52497547c-composite\.jpg/,
    );
    assert.match(
      note,
      /united-states-treasury-1-dollar-series-1935a-silver-certificate-north-africa-b52497547c-front\.jpg/,
    );
    assert.match(
      note,
      /united-states-treasury-1-dollar-series-1935a-silver-certificate-north-africa-b52497547c-back\.jpg/,
    );
    assert.match(note, /width: 1672/);
    assert.match(note, /height: 941/);
  });

  it('names the holding in the Silver Certificates chapter, glossary, and FAQ', () => {
    assert.match(data, /1 dólar de sello amarillo serie 1935 A \(Fr\. 2306\), serial B52497547C/);
    assert.match(data, /Series 1935A yellow-seal \$1 \(Fr\. 2306\), serial B52497547C/);
    assert.match(faq, /Fr\. 2306, serial B52497547C/);
    assert.match(glossary, /serial B52497547C, bloque B–C/);
    assert.match(glossary, /serial B52497547C, B–C block/);
    assert.doesNotMatch(glossary, /aún no documenta un ejemplar/);
    assert.doesNotMatch(data, /aún no ficha un sello amarillo/);
    assert.doesNotMatch(data, /does not yet record a yellow-seal note/);
  });
});
