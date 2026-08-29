import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  createTypeCatalogEngine,
  hasPriceField,
  isColombianPaperTitle,
  isHeritageBleedTitle,
  matchesTypeFilter,
  normalizePickToken,
  parseHeritageLots,
  parseHeritageTitle,
  pickTokens,
  runTypeCatalogSearch,
  typeCatalogStats,
} from './type-catalog.ts';
import { colombiaErrorNotes } from '../data/colombia-errors.ts';
import { colombiaNotes, notePieces } from '../data/colombia-notes.ts';
import { colombiaNoteTypeDocuments } from '../data/colombia-type-catalog.ts';

const lots = readFileSync(new URL('../../docs/sources/heritage/lots.txt', import.meta.url), 'utf8');
const noteCatalogSource = readFileSync(new URL('../data/colombia-type-catalog.ts', import.meta.url), 'utf8');
const coinCatalogSource = readFileSync(new URL('../data/colombia-coin-type-catalog.ts', import.meta.url), 'utf8');

describe('Heritage Colombian type parser', () => {
  it('keeps Colombian paper and drops bleed or group lots', () => {
    assert.equal(isColombianPaperTitle('Colombia Banco de la Republica 1 Peso Oro 1954 Pick 380g'), true);
    assert.equal(
      isColombianPaperTitle("Solid 8's Colombia Banco de la Republica 1000 Pesos 30.5.2003 Pick 450e"),
      true,
    );
    assert.equal(
      isHeritageBleedTitle('Peru Post Independence Military Proclamation Signed by the President of Colombia'),
      true,
    );
    assert.equal(isHeritageBleedTitle('Argentina Banco ... Pick 1'), true);
    assert.equal(
      parseHeritageTitle('Colombia Banco de la Republica 500 Pesos Oro (1971-73) Pick 411b; 416a Two Examples'),
      null,
    );
  });

  it('builds a type from issuer, denomination, year, and Pick without copying the Heritage headline', () => {
    const parsed = parseHeritageTitle(
      'Colombia Banco de la Republica 1 Peso Oro 6.8.1938 Pick 385a Commemorative PMG Gem Uncirculated 65 EPQ',
    );
    assert.ok(parsed);
    assert.equal(parsed.pick, '385a');
    assert.match(parsed.issuer, /Banco de la Republica/i);
    assert.match(parsed.denomination, /1 Peso Oro/i);
    assert.equal(parsed.year, '1938');
    assert.equal(parsed.era, 'banco-de-la-republica');
    assert.equal(hasPriceField(parsed), false);
  });

  it('marks specimens and remainders from the title flags only', () => {
    const specimen = parseHeritageTitle(
      'Colombia Banco Republicano 10 Pesos ND (1899) Pick S813s Specimen PMG Choice Uncirculated 64',
    );
    const remainder = parseHeritageTitle(
      'Colombia Banco Popular de Bolivar 5 Pesos 1883-86 Pick S762r Remainder PMG Choice Fine 15',
    );
    assert.deepEqual(specimen?.flags, ['specimen']);
    assert.deepEqual(remainder?.flags, ['remainder']);
    assert.equal(specimen?.era, 'banca-libre');
  });

  it('groups the sold-archive extract by Pick and never stores a price', () => {
    const seeds = parseHeritageLots(lots);
    assert.ok(seeds.length > 400);
    assert.ok(seeds.every((seed) => !hasPriceField(seed)));
    assert.ok(seeds.some((seed) => normalizePickToken(seed.pick) === '385A' || seed.id === '385A'));
    assert.equal(
      seeds.some((seed) => /Peru|Argentina|Guatemala|Proclamation/i.test(seed.issuer)),
      false,
    );
    const ids = seeds.map((seed) => seed.id);
    assert.equal(new Set(ids).size, ids.length);
  });
});

describe('type catalog search', () => {
  const documents = [
    {
      id: 'note:s511p',
      href: '/coleccion/colombia/5-pesos-banco-hipotecario-1881/',
      title: '5 pesos · Banco Hipotecario · 1881',
      dek: 'Pruebas ABNC',
      pick: 'P# S511p1 / S511p2',
      issuer: 'Banco Hipotecario',
      denomination: '5 pesos',
      year: '1881',
      era: 'banca-libre',
      flags: ['holding', 'proof'],
      image: '/images/catalog/colombia/5-pesos-banco-hipotecario-1881-front.jpg',
      imageAlt: 'Anverso',
      searchText: 'S511 Hipotecario 5 pesos 1881',
      inCollection: true,
    },
    {
      id: 'note:385a',
      href: '',
      title: 'Banco de la República · 1 peso oro · 1938',
      dek: 'P# 385a',
      pick: 'P# 385a',
      issuer: 'Banco de la República',
      denomination: '1 peso oro',
      year: '1938',
      era: 'banco-de-la-republica',
      flags: ['pending'],
      searchText: '385a Banco de la Republica 1 peso oro 1938',
      inCollection: false,
    },
  ];

  it('filters holdings and pending types and ranks a Pick query', () => {
    const engine = createTypeCatalogEngine(documents);
    const holdings = runTypeCatalogSearch(documents, engine, '', 'holding', 'collection');
    assert.deepEqual(holdings.map((doc) => doc.id), ['note:s511p']);
    const pending = runTypeCatalogSearch(documents, engine, '', 'pending', 'pick');
    assert.deepEqual(pending.map((doc) => doc.id), ['note:385a']);
    const hits = runTypeCatalogSearch(documents, engine, 'S511', 'all', 'pick');
    assert.equal(hits[0]?.id, 'note:s511p');
    assert.equal(matchesTypeFilter(documents[0], 'banca-libre'), true);
    assert.deepEqual(pickTokens('P# S511p1 / S511p2'), ['S511P1', 'S511P2']);
    assert.deepEqual(pickTokens('P# 380g · TBB B922k'), ['380G']);
    const stats = typeCatalogStats(documents);
    assert.equal(stats.types, 2);
    assert.equal(stats.holdings, 1);
    assert.equal(stats.images, 1);
  });
});

describe('Colombia visual catalog data files', () => {
  it('keeps the notes catalog collection-only and does not store prices', () => {
    assert.match(noteCatalogSource, /colombiaNotes/);
    assert.match(noteCatalogSource, /colombiaErrorNotes/);
    assert.match(noteCatalogSource, /notePieces/);
    assert.doesNotMatch(noteCatalogSource, /heritageLotsPath|heritageNoteTypeSeeds|colombiaNoteTypeImages|parseHeritageLots/);
    assert.doesNotMatch(noteCatalogSource, /\b(price|precio|realized):/i);
    assert.match(coinCatalogSource, /holdingId: '1-4-real-santa-marta-1820'/);
    assert.match(coinCatalogSource, /5000-pesos-santa-laura-2015/);
    assert.doesNotMatch(coinCatalogSource, /\b(price|precio|realized):/i);
  });

  it('emits one document per collection piece and no prices', () => {
    const expected = [...colombiaNotes, ...colombiaErrorNotes].flatMap((note) => notePieces(note));
    const documents = colombiaNoteTypeDocuments('es');
    assert.equal(documents.length, expected.length);
    assert.ok(documents.length > 0);
    assert.ok(documents.every((doc) => doc.inCollection));
    assert.ok(documents.every((doc) => Boolean(doc.href)));
    assert.ok(documents.every((doc) => !hasPriceField(doc)));
    assert.ok(documents.every((doc) => !/\b(price|precio|realized)\b/i.test(`${doc.title} ${doc.dek} ${doc.searchText}`)));
    const ids = documents.map((doc) => doc.id);
    assert.equal(new Set(ids).size, ids.length);
    assert.ok(documents.every((doc) => doc.id.startsWith('note:')));
    const english = colombiaNoteTypeDocuments('en');
    assert.equal(english.length, documents.length);
  });
});
