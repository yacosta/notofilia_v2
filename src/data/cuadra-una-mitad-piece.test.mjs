import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { additions, catalogAdditions } from './holdings.ts';
import { localizePath } from '../lib/locale-paths.ts';
import { limitMetaDescription } from '../lib/piece-seo.ts';
import { catalogPieceForHolding, milestonesFromHoldings } from '../lib/milestone-match.ts';
import {
  CUADRA_UNA_MITAD_ID,
  CUADRA_UNA_MITAD_IMAGES,
  cuadraUnaMitadPieceIndex,
  CUADRA_UNA_MITAD_PATH,
  CUADRA_UNA_MITAD_PATH_EN,
  cuadraUnaMitadNoSerialReason,
  cuadraUnaMitadPieceCopy,
  cuadraUnaMitadPiecePath,
  cuadraUnaMitadPieceSources,
} from './cuadra-una-mitad-piece.ts';

const esRoute = readFileSync(
  new URL(
    '../pages/coleccion/colombia-numismatica/fichas-de-hacienda/am-de-la-cuadra-una-mitad-1855/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const enRoute = readFileSync(
  new URL(
    '../pages/en/collection/colombia-numismatics/hacienda-tokens/am-de-la-cuadra-una-mitad-1855/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const pageSource = readFileSync(
  new URL('../components/catalog/CuadraUnaMitadPiecePage.astro', import.meta.url),
  'utf8',
);

describe('A. M. de la Cuadra una mitad token, 1855', () => {
  it('pairs one holding with Spanish and English routes', () => {
    assert.equal(cuadraUnaMitadPiecePath('es'), CUADRA_UNA_MITAD_PATH);
    assert.equal(cuadraUnaMitadPiecePath('en'), `/en${CUADRA_UNA_MITAD_PATH_EN}`);
    assert.equal(localizePath(CUADRA_UNA_MITAD_PATH, 'en'), `/en${CUADRA_UNA_MITAD_PATH_EN}`);
    assert.match(esRoute, /CuadraUnaMitadPiecePage/);
    assert.match(enRoute, /locale="en"/);
    assert.match(pageSource, /id="main-content"/);
    assert.match(pageSource, /NoteImageLightbox/);
    assert.match(pageSource, /pairHeading/);
    assert.equal(cuadraUnaMitadPieceIndex.id, CUADRA_UNA_MITAD_ID);
    assert.equal(cuadraUnaMitadPieceIndex.path, CUADRA_UNA_MITAD_PATH);
    assert.equal(cuadraUnaMitadPieceIndex.title.es, cuadraUnaMitadPieceCopy.es.title);
    assert.equal(cuadraUnaMitadPieceIndex.title.en, cuadraUnaMitadPieceCopy.en.title);
    assert.equal(additions.at(-1)?.id, CUADRA_UNA_MITAD_ID);
    assert.equal(additions.at(-1)?.kind, 'coin');
    assert.equal(catalogAdditions.at(-1)?.id, CUADRA_UNA_MITAD_ID);
    assert.equal(additions.filter((row) => row.id === CUADRA_UNA_MITAD_ID).length, 1);
    assert.match(cuadraUnaMitadNoSerialReason, /No serial is inscribed/);
    assert.equal(CUADRA_UNA_MITAD_IMAGES.width, 1029);
    assert.equal(CUADRA_UNA_MITAD_IMAGES.height, 500);
  });

  it('keeps titles and descriptions inside the audit limits and publishes no prices', () => {
    for (const locale of ['es', 'en']) {
      const copy = cuadraUnaMitadPieceCopy[locale];
      const title = `${copy.metaTitle} · Notofilia`;
      assert.equal(limitMetaDescription(copy.metaDescription), copy.metaDescription);
      assert.ok(copy.metaDescription.length <= 155, `${copy.metaDescription.length} ${copy.metaDescription}`);
      assert.ok(copy.metaDescription.length >= 80, `${copy.metaDescription.length} ${copy.metaDescription}`);
      assert.ok(title.length <= 70, `${title.length} ${title}`);
    }
    const prose = [
      cuadraUnaMitadPieceCopy.es.description,
      cuadraUnaMitadPieceCopy.es.descriptionRest,
      cuadraUnaMitadPieceCopy.es.scarcity,
      cuadraUnaMitadPieceCopy.es.reference,
      cuadraUnaMitadPieceCopy.es.metal,
      cuadraUnaMitadPieceCopy.en.description,
      cuadraUnaMitadPieceCopy.en.descriptionRest,
      cuadraUnaMitadPieceCopy.en.scarcity,
      ...cuadraUnaMitadPieceSources.flatMap((source) => [source.es, source.en, source.note?.es ?? '', source.note?.en ?? '']),
    ].join('\n');
    assert.match(prose, /1855/);
    assert.match(prose, /Rulau Mag-5/);
    assert.match(prose, /Fonrobert 8263/);
    assert.match(prose, /DE\. LA/);
    assert.match(prose, /Scovill/);
    assert.match(prose, /5850277-003/);
    assert.match(prose, /A2a/);
    assert.doesNotMatch(prose, /Antonio Martínez|carte de visite|Fotografía de La Cuadra/i);
    assert.doesNotMatch(prose, /\$\s?\d|€|£|USD|precio|hammer|estimate/i);
    assert.doesNotMatch(prose, /TODO\(owner\)/);
    for (const source of cuadraUnaMitadPieceSources) {
      assert.match(source.href, /^https?:\/\//);
    }
  });

  it('is the newest Logros del Mes card and is not the Norweb certificate', () => {
    const holding = additions.find((row) => row.id === CUADRA_UNA_MITAD_ID);
    assert.ok(holding);
    const piece = {
      id: CUADRA_UNA_MITAD_ID,
      country: 'CO',
      href: CUADRA_UNA_MITAD_PATH,
      title: { es: cuadraUnaMitadPieceCopy.es.title, en: cuadraUnaMitadPieceCopy.en.title },
      dek: { es: cuadraUnaMitadPieceCopy.es.lead, en: cuadraUnaMitadPieceCopy.en.lead },
      pick: 'Rulau Mag-5',
      serial: '',
      cert: '',
      image: CUADRA_UNA_MITAD_IMAGES.composite,
      imageAlt: {
        es: cuadraUnaMitadPieceCopy.es.frontCaption,
        en: cuadraUnaMitadPieceCopy.en.frontCaption,
      },
    };
    const [card] = milestonesFromHoldings(additions, [piece], 1);
    assert.equal(card.holdingId, CUADRA_UNA_MITAD_ID);
    assert.equal(catalogPieceForHolding(holding, [piece])?.href, CUADRA_UNA_MITAD_PATH);
    assert.doesNotMatch(cuadraUnaMitadPieceCopy.es.grade, /MS 62|5850277/);
    assert.match(cuadraUnaMitadPieceCopy.es.descriptionRest, /5850277-003/);
  });
});
