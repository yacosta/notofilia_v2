import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, it } from 'node:test';
import sharp from 'sharp';
import { localizePath } from '../lib/locale-paths.ts';
import { limitMetaDescription } from '../lib/piece-seo.ts';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/100-dolares-confederados-1862-t41/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/100-dollars-confederate-1862-t41/index.astro', import.meta.url),
  'utf8',
);

const noteStart = data.indexOf("id: '100-dolares-confederados-1862-t41'");
const noteEnd = data.indexOf("id: '10-dolares-serie-1934-chicago'");
const note = data.slice(noteStart, noteEnd);

describe('US Confederate T-41 $100 serial 11657', () => {
  it('records P-45 / T-41 as a different object from the T-40 serial 36830', () => {
    assert.ok(noteStart > 0);
    assert.ok(noteEnd > noteStart);
    assert.match(note, /chapterId: 'us-confederado'/);
    assert.match(note, /pick: 'P#45 · T-41 · N#223639'/);
    assert.match(note, /serial: '11657 · L'/);
    assert.doesNotMatch(note, /serial: '36830/);
    assert.doesNotMatch(note, /cert_number:/);
    assert.doesNotMatch(note, /Cr\. 319/);
    assert.match(note, /Keatinge & Ball, Columbia, S\.C\./);
    assert.match(note, /670\.400/);
    assert.match(note, /670,400/);
    assert.match(note, /678\.600/);
    assert.match(note, /678,600/);
    assert.match(note, /no inventa una tirada de la plancha L/);
    assert.match(note, /does not invent a printage for plate L/);
    assert.match(note, /183 × 78 mm/);
    assert.match(note, /no es una medición de este ejemplar/);
    assert.match(note, /not a measurement of this example/);
    assert.match(note, /C-390/);
    assert.match(note, /1 de enero de 1863/);
    assert.match(note, /1 January 1863/);
    assert.match(note, /sin encapsular/);
    assert.match(note, /unslabbed/);
    assert.match(note, /No se republica el precio de remate/);
    assert.match(note, /realized price is not republished/);
    assert.match(note, /en: '\$100 T-41 · Confederate States · 1862'/);
    assert.match(note, /es: '100 dólares T-41 · Estados Confederados · 1862'/);
    assert.match(holdings, /id: 'us-csa-1862-100-11657l', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /\{ id: 'us-csa-1862-100-t41-p45' \}/);
    assert.equal(
      holdings.indexOf("id: 'us-csa-1862-100-11657l'"),
      holdings.lastIndexOf("id: 'us-csa-1862-100-11657l'"),
    );
  });

  it('keeps the lead inside the meta description limit and pairs the routes', () => {
    const leadEs =
      'Calhoun, personas esclavizadas con azadón y figura alegórica; interés de dos centavos diarios. Richmond, 8 de septiembre de 1862. Serial 11657, plancha L.';
    const leadEn =
      'Calhoun, enslaved people hoeing, and an allegorical figure; interest at two cents a day. Richmond, 8 September 1862. Serial 11657, plate L.';
    assert.equal(limitMetaDescription(leadEs), leadEs);
    assert.equal(limitMetaDescription(leadEn), leadEn);
    assert.ok(leadEs.length <= 155);
    assert.ok(leadEn.length <= 155);
    assert.equal(
      localizePath('/coleccion/estados-unidos/100-dolares-confederados-1862-t41/', 'en'),
      '/en/collection/united-states/100-dollars-confederate-1862-t41/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('100-dolares-confederados-1862-t41'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(note, /11657-l-composite\.jpg/);
    assert.match(note, /11657-l-front\.jpg/);
    assert.match(note, /11657-l-back\.jpg/);
    assert.match(note, /width: 1672/);
    assert.match(note, /height: 941/);
  });

  it('keeps the scan margins on the face and back masters', async () => {
    const root = new URL('../../catalog-src/catalog/united-states/', import.meta.url);
    for (const name of [
      'united-states-confederate-states-100-dollars-1862-11657-l-front.jpg',
      'united-states-confederate-states-100-dollars-1862-11657-l-back.jpg',
    ]) {
      const file = fileURLToPath(new URL(name, root));
      const meta = await sharp(file).metadata();
      assert.equal(meta.width, 1672);
      assert.equal(meta.height, 941);
      const { data, info } = await sharp(file).removeAlpha().raw().toBuffer({ resolveWithObject: true });
      let minX = info.width;
      let minY = info.height;
      let maxX = 0;
      let maxY = 0;
      for (let y = 0; y < info.height; y++) {
        for (let x = 0; x < info.width; x++) {
          const i = (y * info.width + x) * info.channels;
          if (data[i] < 248 || data[i + 1] < 248 || data[i + 2] < 248) {
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
          }
        }
      }
      assert.ok(minX >= 8, `${name} left margin`);
      assert.ok(minY >= 8, `${name} top margin`);
      assert.ok(info.width - 1 - maxX >= 8, `${name} right margin`);
      assert.ok(info.height - 1 - maxY >= 8, `${name} bottom margin`);
    }
  });
});
