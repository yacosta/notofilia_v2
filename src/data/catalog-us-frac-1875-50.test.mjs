import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { englishRedirects, localizePath } from '../lib/locale-paths.ts';
import { limitMetaDescription } from '../lib/piece-seo.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/50-centavos-1875-william-h-crawford/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/50-cents-1875-william-h-crawford/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '50-centavos-1875-william-h-crawford'");
const note = data.slice(noteStart);

const esTitle = '50 centavos de 1875 – Crawford, Fr. 1381 | Notofilia';
const enTitle = '50 cents of 1875 – Crawford, Fr. 1381 | Notofilia';
const esMeta =
  '50 centavos de 1875, quinta emisión, William H. Crawford y sello rojo. Numista N#228866 asigna esa fila al Fr. 1381. Sin serial, grado ni fotografía.';
const enMeta =
  '1875 50-cent fifth-issue note, William H. Crawford portrait and red seal. Numista N#228866 assigns that row to Fr. 1381. No serial, grade, or photograph.';

describe('US fifth-issue 50¢ 1875 William H. Crawford', () => {
  it('records Fr. 1381 as the 1875 row and does not invent a serial, grade, or printage', () => {
    assert.match(note, /chapterId: 'us-fractional'/);
    assert.match(note, /pick: 'Fr\. 1381'/);
    assert.match(note, /friedberg: 'Fr\. 1381'/);
    assert.match(note, /scwpm: 'P#124'/);
    assert.match(note, /serial: '—'/);
    assert.match(note, /no_serial_reason:/);
    assert.match(note, /N#228866/);
    assert.match(note, /Fr\. 1380/);
    assert.match(note, /papel de extremo azul no se ha confirmado/);
    assert.match(note, /Blue end paper has not been confirmed/);
    assert.match(note, /Sin grado numérico verificado/);
    assert.match(note, /No numerical grade verified/);
    assert.match(note, /no inventa una tirada/);
    assert.match(note, /does not invent a printage/);
    assert.match(note, /No se republican columnas de precio/);
    assert.match(note, /price columns are not republished/);
    assert.doesNotMatch(note, /\$39|\$200|VF-35|PPQ/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.match(holdings, /id: 'us-50-centavos-1875-william-h-crawford', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /id: 'us-50-centavos-1875-william-h-crawford'/);
    assert.equal(esTitle.length <= 60, true, esTitle);
    assert.equal(enTitle.length <= 60, true, enTitle);
    assert.equal(esMeta.length <= 155, true, String(esMeta.length));
    assert.equal(enMeta.length <= 155, true, String(enMeta.length));
    assert.equal(limitMetaDescription(esMeta), esMeta);
    assert.equal(limitMetaDescription(enMeta), enMeta);
  });

  it('keeps the requested captions and thin ES/EN routes', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/50-centavos-1875-william-h-crawford/', 'en'),
      '/en/collection/united-states/50-cents-1875-william-h-crawford/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('50-centavos-1875-william-h-crawford'\)/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /sello rojo, moneda fraccionaria/);
    assert.match(note, /diseño verde y fibras de seguridad/);
    assert.match(note, /red seal, fractional currency/);
    assert.match(note, /green design and security fibers/);
    assert.match(faq, /50 centavos de 1875, William H\. Crawford, Fr\. 1381/);
    assert.match(faq, /1875 50¢, William H\. Crawford, Fr\. 1381/);
    const redirects = englishRedirects();
    assert.equal(
      redirects['/en/coleccion/estados-unidos/50-centavos-1875-william-h-crawford/'],
      '/en/collection/united-states/50-cents-1875-william-h-crawford/',
    );
  });
});
