import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { register } from 'node:module';
import { describe, it } from 'node:test';
import { additions, catalogAdditions } from './holdings.ts';
import { localizePath } from '../lib/locale-paths.ts';
import { piecePageMeta, META_DESCRIPTION_MAX } from '../lib/piece-seo.ts';
import { pieceScanAlt } from '../lib/scan-alt.ts';

register(new URL('../lib/resolve-ts-hook.mjs', import.meta.url));

const { noteById } = await import('./estados-unidos.ts');

const note = noteById('2-dolares-serie-2003-minneapolis');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/2-dolares-serie-2003-minneapolis/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/2-dollars-series-2003-minneapolis/index.astro', import.meta.url),
  'utf8',
);
const stem =
  'united-states-federal-reserve-note-2-dollars-series-2003-minneapolis-i00011690-star';

describe('Series 2003 Minneapolis $2 collector star', () => {
  it('records one ordinary star serial and does not invent a grade or a price', () => {
    assert.ok(note);
    assert.equal(note.serial, 'I00011690★');
    assert.equal(note.serial_display, 'I 00011690 ★');
    assert.equal(note.pick, 'P#516 · Fr. 1937-I*');
    assert.equal(note.reserveDistrict, 'I');
    assert.equal(note.cert_number, undefined);
    assert.match(note.grade.es, /no determinado/);
    assert.match(note.grade.en, /not determined/);
    assert.match(note.printed.es, /ordinario/);
    assert.match(note.printed.en, /ordinary/);
    assert.match(note.scarcity.es, /11690/);
    assert.match(note.scarcity.en, /11,690/);
    assert.match(note.scarcity.es, /no trata esas cifras como una tabla oficial del BEP/);
    assert.match(note.scarcity.en, /not treat those figures as an official BEP table/);
    assert.match(note.description.es, /H00010418/);
    const prose = [
      note.lead.es,
      note.lead.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      note.population.es,
      note.population.en,
      note.printed.es,
      note.printed.en,
      ...note.unclaimed.flatMap((item) => [item.es, item.en]),
    ].join('\n');
    assert.doesNotMatch(prose, /precio|hammer|realized|estimate|9,95|9\.95/i);
    assert.equal(note.metaDescription.es.length <= META_DESCRIPTION_MAX, true);
    assert.equal(note.metaDescription.en.length <= META_DESCRIPTION_MAX, true);
    assert.equal(additions.at(-1)?.id, 'us-frn-2003-2-minneapolis-i00011690');
    assert.equal(additions.at(-1)?.kind, 'banknote');
    assert.equal(catalogAdditions.at(-1)?.id, 'us-frn-2003-2-minneapolis-i00011690');
  });

  it('names the scans for search and keeps the supplied frame', () => {
    for (const side of ['front', 'back', 'composite']) {
      const file = new URL(`../../catalog-src/catalog/united-states/${stem}-${side}.jpg`, import.meta.url);
      assert.equal(existsSync(file), true, side);
      assert.match(note.images[side], new RegExp(`${stem}-${side}\\.jpg$`));
    }
    assert.equal(note.images.width, 1080);
    assert.equal(note.images.height, 484);
    const alt = pieceScanAlt({
      sideLabel: 'Anverso',
      title: note.title.es,
      serial: note.serial,
      serialDisplay: note.serial_display,
      catalogNumber: note.pick,
    });
    assert.match(alt, /Anverso/);
    assert.match(alt, /I 00011690/);
    assert.ok(alt.length <= 80, alt);
  });

  it('keeps thin ES and EN routes and distinct document titles', () => {
    assert.equal(
      localizePath(note.path, 'en'),
      '/en/collection/united-states/2-dollars-series-2003-minneapolis/',
    );
    assert.match(esPiece, /locale="es"/);
    assert.match(enPiece, /locale="en"/);
    assert.match(esPiece, /noteById\('2-dolares-serie-2003-minneapolis'\)/);
    const es = piecePageMeta({
      kind: 'note',
      title: note.title.es,
      kicker: note.kicker.es,
      lead: note.lead.es,
      locale: 'es',
      country: 'Estados Unidos',
      district: note.reserveDistrict,
    });
    const en = piecePageMeta({
      kind: 'note',
      title: note.title.en,
      kicker: note.kicker.en,
      lead: note.lead.en,
      locale: 'en',
      country: 'United States',
      district: note.reserveDistrict,
    });
    assert.match(es.documentTitle, /Minneapolis/);
    assert.match(en.documentTitle, /Minneapolis/);
    assert.doesNotMatch(es.documentTitle, /San Luis|St\. Louis/);
    assert.ok(es.documentTitle.length <= 70, es.documentTitle);
    assert.ok(en.documentTitle.length <= 70, en.documentTitle);
    assert.equal(note.metaDescription.es.length >= 120, true);
    assert.equal(note.metaDescription.en.length >= 120, true);
  });
});
