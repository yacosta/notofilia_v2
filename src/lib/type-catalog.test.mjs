import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
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
import { colombiaNotes, notePieces } from '../data/colombia-notes.ts';

const lots = readFileSync(new URL('../../docs/sources/heritage/lots.txt', import.meta.url), 'utf8');
const noteCatalogSource = readFileSync(new URL('../data/colombia-type-catalog.ts', import.meta.url), 'utf8');
const collectionCatalogSource = readFileSync(new URL('../data/collection-note-catalog.ts', import.meta.url), 'utf8');
const coinCatalogSource = readFileSync(new URL('../data/colombia-coin-type-catalog.ts', import.meta.url), 'utf8');
const usaNotesSource = readFileSync(new URL('../data/estados-unidos.ts', import.meta.url), 'utf8');
const mpcNotesSource = readFileSync(new URL('../data/mpc-vietnam.ts', import.meta.url), 'utf8');
const chinaNotesSource = readFileSync(new URL('../data/china.ts', import.meta.url), 'utf8');
const englandNotesSource = readFileSync(new URL('../data/england-polymer.ts', import.meta.url), 'utf8');
const canadaNotesSource = readFileSync(new URL('../data/canada-polymer.ts', import.meta.url), 'utf8');
const malaysiaNotesSource = readFileSync(new URL('../data/malaysia-polymer.ts', import.meta.url), 'utf8');
const puertoRicoNotesSource = readFileSync(new URL('../data/puerto-rico.ts', import.meta.url), 'utf8');
const allNotesCatalogHtml = new URL(
  '../../dist/coleccion/notafilia/catalogo/index.html',
  import.meta.url,
);

function extractExportArrayBlock(source, exportName) {
  const start = source.indexOf(`export const ${exportName}`);
  assert.ok(start >= 0, `missing export const ${exportName}`);
  const assign = source.indexOf('= [', start);
  assert.ok(assign >= 0, `missing array initializer for ${exportName}`);
  const bracket = assign + 2;
  let depth = 0;
  for (let i = bracket; i < source.length; i += 1) {
    if (source[i] === '[') depth += 1;
    if (source[i] === ']') {
      depth -= 1;
      if (depth === 0) return source.slice(bracket + 1, i);
    }
  }
  throw new Error(`unclosed array for ${exportName}`);
}

function countTopLevelSerials(arrayBlock) {
  return (arrayBlock.match(/^    serial: '/gm) || []).length;
}

function polymerChinaNotes(source) {
  const block = extractExportArrayBlock(source, 'chinaNotes');
  const entries = block.split(/^  \{/m).slice(1);
  return entries.filter((entry) => /pol[ií]mero|polymer|塑料钞/i.test(entry));
}

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
      country: 'CO',
      serial: 'Y 00000',
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
      country: 'CO',
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
    assert.equal(matchesTypeFilter(documents[0], 'co'), true);
    assert.equal(matchesTypeFilter(documents[0], 'ph'), false);
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
    assert.match(noteCatalogSource, /collectionNoteDocuments/);
    assert.doesNotMatch(
      noteCatalogSource,
      /heritageLotsPath|heritageNoteTypeSeeds|colombiaNoteTypeImages|parseHeritageLots/,
    );
    assert.doesNotMatch(noteCatalogSource, /\b(price|precio|realized):/i);
    assert.match(coinCatalogSource, /holdingId: '1-4-real-santa-marta-1820'/);
    assert.match(coinCatalogSource, /5000-pesos-santa-laura-2015/);
    assert.doesNotMatch(coinCatalogSource, /\b(price|precio|realized):/i);
  });

  it('emits one document per collection piece and no prices', () => {
    const expected = colombiaNotes.flatMap((note) => notePieces(note));
    assert.ok(expected.length > 0);
    assert.match(noteCatalogSource, /collectionNoteDocuments\(locale, 'CO'\)/);
    assert.match(collectionCatalogSource, /for \(const note of colombiaNotes\)/);
    assert.match(collectionCatalogSource, /notePieces\(note\)/);
    assert.match(collectionCatalogSource, /inCollection: true/);
    assert.doesNotMatch(noteCatalogSource, /\b(price|precio|realized):/i);
    assert.doesNotMatch(collectionCatalogSource, /\b(price|precio|realized):/i);
  });
});

describe('Collection-wide banknote catalog', () => {
  it('reads every country note module and does not store prices', () => {
    assert.match(collectionCatalogSource, /colombiaNotes/);
    assert.match(collectionCatalogSource, /notePieces/);
    assert.match(collectionCatalogSource, /unitedStatesNotes/);
    assert.match(collectionCatalogSource, /mpcVietnamNotes/);
    assert.match(collectionCatalogSource, /victoryNotes/);
    assert.match(collectionCatalogSource, /chinaNotes/);
    assert.match(collectionCatalogSource, /englandNotes/);
    assert.match(collectionCatalogSource, /canadaNotes/);
    assert.match(collectionCatalogSource, /malaysiaNotes/);
    assert.match(collectionCatalogSource, /puertoRicoNotes/);
    assert.match(collectionCatalogSource, /inCollection: true/);
    assert.doesNotMatch(collectionCatalogSource, /parseHeritageLots/);
    assert.doesNotMatch(collectionCatalogSource, /\b(price|precio|realized):/i);
  });

  it('keeps Colombia, US, and polymer holdings aligned with the data modules', () => {
    const colombiaPieces = colombiaNotes.flatMap((note) => notePieces(note));
    const usaNotes = countTopLevelSerials(extractExportArrayBlock(usaNotesSource, 'unitedStatesNotes'));
    const mpcNotes = countTopLevelSerials(extractExportArrayBlock(mpcNotesSource, 'mpcVietnamNotes'));
    const polymerNotes = polymerChinaNotes(chinaNotesSource);
    const englandNotes = (extractExportArrayBlock(englandNotesSource, 'englandNotes').match(/^    serial: '/gm) || []).length;
    const canadaNotes = (extractExportArrayBlock(canadaNotesSource, 'canadaNotes').match(/^    serial: '/gm) || []).length;
    const malaysiaNotes = (extractExportArrayBlock(malaysiaNotesSource, 'malaysiaNotes').match(/^    serial: '/gm) || []).length;
    const puertoRicoNotes = (extractExportArrayBlock(puertoRicoNotesSource, 'puertoRicoNotes').match(/^    serial: '/gm) || []).length;

    assert.equal(colombiaPieces.length, 17);
    assert.equal(usaNotes, 22);
    assert.equal(mpcNotes, 4);
    assert.equal(polymerNotes.length, 1);
    assert.match(polymerNotes[0], /serial: 'J04445744'/);
    assert.equal(englandNotes, 1);
    assert.match(englandNotesSource, /serial: 'AC04879241'/);
    assert.equal(canadaNotes, 1);
    assert.match(canadaNotesSource, /serial: 'HBM0828003'/);
    assert.equal(malaysiaNotes, 1);
    assert.match(malaysiaNotesSource, /serial: 'AA1955984'/);
    assert.equal(puertoRicoNotes, 3);
    assert.match(puertoRicoNotesSource, /serial: '32'/);
    assert.match(puertoRicoNotesSource, /serial: '13085'/);
    assert.match(puertoRicoNotesSource, /serial: '4548454'/);

    if (!existsSync(allNotesCatalogHtml)) return;

    const html = readFileSync(allNotesCatalogHtml, 'utf8');
    const match = html.match(/const documents = (\[.*?\]);/s);
    assert.ok(match, 'built all-notes catalog embeds documents JSON');
    const documents = JSON.parse(match[1]);
    const byCountry = documents.reduce((counts, doc) => {
      counts[doc.country] = (counts[doc.country] || 0) + 1;
      return counts;
    }, {});

    assert.equal(byCountry.CO, colombiaPieces.length);
    assert.equal(byCountry.US, usaNotes + mpcNotes);
    assert.equal(byCountry.CN, polymerNotes.length);
    if (byCountry.GB) {
      assert.equal(byCountry.GB, englandNotes);
    }
    if (byCountry.CA) {
      assert.equal(byCountry.CA, canadaNotes);
    }
    if (byCountry.MY) {
      assert.equal(byCountry.MY, malaysiaNotes);
    }
    if (byCountry.PR) {
      assert.equal(byCountry.PR, puertoRicoNotes);
    }
    assert.equal(
      documents.length,
      colombiaPieces.length +
        usaNotes +
        mpcNotes +
        polymerNotes.length +
        (byCountry.GB || 0) +
        (byCountry.CA || 0) +
        (byCountry.MY || 0) +
        (byCountry.PR || 0) +
        4,
      'includes Philippines victory notes, Puerto Rico, and polymer holdings',
    );
  });
});
