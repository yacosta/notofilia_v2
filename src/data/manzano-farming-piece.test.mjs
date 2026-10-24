import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { additions } from './holdings.ts';
import { localizePath } from '../lib/locale-paths.ts';
import { limitMetaDescription } from '../lib/piece-seo.ts';
import { catalogPieceForHolding, milestonesFromHoldings } from '../lib/milestone-match.ts';
import {
  MANZANO_FARMING_PIECE_ID,
  MANZANO_FARMING_PIECE_IMAGES,
  manzanoFarmingPieceIndex,
  MANZANO_FARMING_PIECE_PATH,
  MANZANO_FARMING_PIECE_PATH_EN,
  manzanoFarmingPieceCopy,
  manzanoFarmingPieceNoSerialReason,
  manzanoFarmingPiecePath,
  manzanoFarmingPieceSources,
} from './manzano-farming-piece.ts';

const esRoute = readFileSync(
  new URL(
    '../pages/coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/10-1901/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const enRoute = readFileSync(
  new URL(
    '../pages/en/collection/colombia-numismatics/hacienda-tokens/manzano-farming-co/10-1901/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const pageSource = readFileSync(
  new URL('../components/catalog/ManzanoFarmingPiecePage.astro', import.meta.url),
  'utf8',
);
const milestonesSource = readFileSync(new URL('../lib/milestones.ts', import.meta.url), 'utf8');

describe('Manzano Farming Co. token of 10, 1901', () => {
  it('pairs one holding with Spanish and English routes', () => {
    assert.equal(manzanoFarmingPiecePath('es'), MANZANO_FARMING_PIECE_PATH);
    assert.equal(manzanoFarmingPiecePath('en'), `/en${MANZANO_FARMING_PIECE_PATH_EN}`);
    assert.equal(localizePath(MANZANO_FARMING_PIECE_PATH, 'en'), `/en${MANZANO_FARMING_PIECE_PATH_EN}`);
    assert.equal(
      localizePath('/en/coleccion/colombia-numismatica/fichas-de-hacienda/manzano-farming-co/10-1901/', 'en'),
      `/en${MANZANO_FARMING_PIECE_PATH_EN}`,
    );
    assert.match(esRoute, /ManzanoFarmingPiecePage/);
    assert.match(enRoute, /locale="en"/);
    assert.match(pageSource, /id="main-content"/);
    assert.match(pageSource, /NoteImageLightbox/);
    assert.equal(manzanoFarmingPieceIndex.id, MANZANO_FARMING_PIECE_ID);
    assert.equal(manzanoFarmingPieceIndex.path, MANZANO_FARMING_PIECE_PATH);
    assert.equal(manzanoFarmingPieceIndex.title.es, manzanoFarmingPieceCopy.es.title);
    assert.equal(manzanoFarmingPieceIndex.title.en, manzanoFarmingPieceCopy.en.title);
    assert.equal(additions.at(-1)?.id, MANZANO_FARMING_PIECE_ID);
    assert.equal(additions.at(-1)?.kind, 'coin');
    assert.match(manzanoFarmingPieceNoSerialReason, /No serial is inscribed/);
  });

  it('keeps titles and descriptions inside the audit limits and publishes no prices or catalog numbers', () => {
    for (const locale of ['es', 'en']) {
      const copy = manzanoFarmingPieceCopy[locale];
      const title = `${copy.metaTitle} · Notofilia`;
      assert.equal(limitMetaDescription(copy.metaDescription), copy.metaDescription);
      assert.ok(copy.metaDescription.length <= 155, `${copy.metaDescription.length} ${copy.metaDescription}`);
      assert.ok(copy.metaDescription.length >= 80, `${copy.metaDescription.length} ${copy.metaDescription}`);
      assert.ok(title.length <= 70, `${title.length} ${title}`);
    }
    const prose = [
      manzanoFarmingPieceCopy.es.description,
      manzanoFarmingPieceCopy.es.descriptionRest,
      manzanoFarmingPieceCopy.es.scarcity,
      manzanoFarmingPieceCopy.en.description,
      manzanoFarmingPieceCopy.en.descriptionRest,
      manzanoFarmingPieceCopy.en.scarcity,
      manzanoFarmingPieceCopy.es.reference,
      manzanoFarmingPieceCopy.en.reference,
    ].join('\n');
    assert.match(prose, /1901/);
    assert.match(prose, /SATIVA/);
    assert.match(prose, /entrada 47|entry 47/);
    assert.doesNotMatch(prose, /\$\s?\d/);
    assert.doesNotMatch(prose, /\bUSD\b|\bprecio\b|Henao \d|KM#|Restrepo \d/);
    assert.doesNotMatch(prose, /TODO\(owner\)/);
    assert.equal(MANZANO_FARMING_PIECE_IMAGES.width, 1672);
    assert.equal(MANZANO_FARMING_PIECE_IMAGES.height, 941);
    for (const source of manzanoFarmingPieceSources) {
      assert.match(source.href, /^https?:\/\//);
    }
  });

  it('is the newest Logros del Mes card and is not the Absoluti 25', () => {
    const holding = additions.at(-1);
    assert.ok(holding);
    const piece = catalogPieceForHolding(holding, [
      {
        id: MANZANO_FARMING_PIECE_ID,
        country: 'CO',
        href: MANZANO_FARMING_PIECE_PATH,
        title: { es: manzanoFarmingPieceCopy.es.title, en: manzanoFarmingPieceCopy.en.title },
        dek: { es: manzanoFarmingPieceCopy.es.lead, en: manzanoFarmingPieceCopy.en.lead },
        pick: '',
        serial: '',
        cert: '',
        image: MANZANO_FARMING_PIECE_IMAGES.composite,
        imageAlt: { es: manzanoFarmingPieceCopy.es.frontCaption, en: manzanoFarmingPieceCopy.en.frontCaption },
      },
    ]);
    assert.equal(piece?.id, MANZANO_FARMING_PIECE_ID);
    const [card] = milestonesFromHoldings(additions, [piece], 1);
    assert.equal(card.holdingId, MANZANO_FARMING_PIECE_ID);
    const registeredAt = milestonesSource.indexOf('id: MANZANO_FARMING_PIECE_ID');
    const coinLoopAt = milestonesSource.indexOf('for (const coin of colombiaCoinagePieces)');
    assert.ok(registeredAt > 0 && registeredAt < coinLoopAt);
    assert.match(manzanoFarmingPieceCopy.es.descriptionRest, /valor 25/);
    assert.doesNotMatch(manzanoFarmingPieceCopy.es.value, /resello JB/);
  });
});
