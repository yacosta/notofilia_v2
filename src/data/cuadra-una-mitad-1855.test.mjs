import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import sharp from 'sharp';
import { additions, catalogAdditions } from './holdings.ts';
import { localizePath } from '../lib/locale-paths.ts';
import { limitMetaDescription } from '../lib/piece-seo.ts';
import { catalogPieceForHolding, milestonesFromHoldings } from '../lib/milestone-match.ts';
import {
  CUADRA_UNA_MITAD_ID,
  CUADRA_UNA_MITAD_IMAGES,
  CUADRA_UNA_MITAD_PATH,
  CUADRA_UNA_MITAD_PATH_EN,
  cuadraUnaMitadCopy,
  cuadraUnaMitadIndex,
  cuadraUnaMitadNoSerialReason,
  cuadraUnaMitadPath,
  cuadraUnaMitadSources,
} from './cuadra-una-mitad-1855.ts';

const esRoute = readFileSync(
  new URL('../pages/coleccion/colombia-numismatica/una-mitad-am-de-la-cuadra-1855/index.astro', import.meta.url),
  'utf8',
);
const enRoute = readFileSync(
  new URL(
    '../pages/en/collection/colombia-numismatics/una-mitad-am-de-la-cuadra-1855/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const pageSource = readFileSync(new URL('../components/catalog/CuadraUnaMitadPage.astro', import.meta.url), 'utf8');

describe('1855 A. M. de la Cuadra una mitad', () => {
  it('registers one bilingual unslabbed token with no serial', () => {
    assert.equal(cuadraUnaMitadPath('es'), CUADRA_UNA_MITAD_PATH);
    assert.equal(cuadraUnaMitadPath('en'), `/en${CUADRA_UNA_MITAD_PATH_EN}`);
    assert.equal(localizePath(CUADRA_UNA_MITAD_PATH, 'en'), `/en${CUADRA_UNA_MITAD_PATH_EN}`);
    assert.match(esRoute, /CuadraUnaMitadPage/);
    assert.match(enRoute, /locale="en"/);
    assert.match(pageSource, /id="main-content"/);
    assert.match(pageSource, /NoteImageLightbox/);
    assert.equal(cuadraUnaMitadIndex.id, CUADRA_UNA_MITAD_ID);
    assert.equal(cuadraUnaMitadIndex.path, CUADRA_UNA_MITAD_PATH);
    assert.equal(cuadraUnaMitadIndex.title.es, cuadraUnaMitadCopy.es.title);
    assert.equal(cuadraUnaMitadIndex.title.en, cuadraUnaMitadCopy.en.title);
    assert.equal(additions.at(-1)?.id, CUADRA_UNA_MITAD_ID);
    assert.equal(additions.at(-1)?.kind, 'coin');
    assert.equal(catalogAdditions.at(-1)?.id, CUADRA_UNA_MITAD_ID);
    assert.match(cuadraUnaMitadNoSerialReason, /No serial is inscribed/);
    assert.doesNotMatch(pageSource, />(AM |Una mitad|Anverso|Obverse)</);
  });

  it('keeps titles inside the audit limits and publishes no prices or an expanded given name', () => {
    for (const locale of ['es', 'en']) {
      const copy = cuadraUnaMitadCopy[locale];
      const title = `${copy.metaTitle} · Notofilia`;
      assert.equal(limitMetaDescription(copy.metaDescription), copy.metaDescription);
      assert.ok(copy.metaDescription.length <= 155, `${copy.metaDescription.length} ${copy.metaDescription}`);
      assert.ok(copy.metaDescription.length >= 80, `${copy.metaDescription.length} ${copy.metaDescription}`);
      assert.ok(title.length <= 60, `${title.length} ${title}`);
    }
    const prose = [
      cuadraUnaMitadCopy.es.description,
      cuadraUnaMitadCopy.es.descriptionRest,
      cuadraUnaMitadCopy.es.scarcity,
      cuadraUnaMitadCopy.es.place,
      cuadraUnaMitadCopy.es.issuer,
      cuadraUnaMitadCopy.es.nameNote,
      cuadraUnaMitadCopy.en.description,
      cuadraUnaMitadCopy.en.descriptionRest,
      cuadraUnaMitadCopy.en.scarcity,
      cuadraUnaMitadCopy.en.place,
      cuadraUnaMitadCopy.en.issuer,
      cuadraUnaMitadCopy.en.nameNote,
    ].join('\n');
    const issuerFacts = [
      cuadraUnaMitadCopy.es.description,
      cuadraUnaMitadCopy.es.descriptionRest,
      cuadraUnaMitadCopy.es.issuer,
      cuadraUnaMitadCopy.en.description,
      cuadraUnaMitadCopy.en.descriptionRest,
      cuadraUnaMitadCopy.en.issuer,
    ].join('\n');
    assert.match(prose, /Rulau Mag-5/);
    assert.match(prose, /Fonrobert 8263/);
    assert.match(prose, /5850277-003/);
    assert.match(prose, /moneda menuda|small change/);
    assert.doesNotMatch(prose, /€|\$\d|USD|euros|hammer price|precio/);
    assert.doesNotMatch(issuerFacts, /Antonio|plantación de|hacienda de café|wage token of the/);
    assert.match(cuadraUnaMitadCopy.es.nameNote, /Antonio Martínez de la Cuadra/);
    assert.match(cuadraUnaMitadCopy.es.nameNote, /no identifica al emisor/);
    assert.match(cuadraUnaMitadCopy.es.nameNote, /La Cuadra y Gaviria/);
    assert.match(cuadraUnaMitadCopy.en.nameNote, /does not identify the 1855 issuer/);
    assert.doesNotMatch(prose, /Disdéri|Vizcaya|Liverpool|albúmina|albumen/);
    assert.match(cuadraUnaMitadCopy.es.issuer, /no se desarrollan/);
    assert.match(cuadraUnaMitadCopy.en.issuer, /unexpanded/);
    assert.match(cuadraUnaMitadCopy.es.place, /Magdalena/);
    assert.match(cuadraUnaMitadCopy.es.place, /no nombra Santa Marta/);
  });

  it('cites the type catalogs and keeps the supplied frames at 1672×941', async () => {
    const hrefs = cuadraUnaMitadSources.map((source) => source.href);
    assert.ok(hrefs.some((href) => href.includes('numisbids.com/sale/3858/lot/850')));
    assert.ok(hrefs.some((href) => href.includes('archive.org/details/mitadtokensoflat3112toke')));
    assert.ok(hrefs.some((href) => href.includes('banrep.gov.co')));
    assert.ok(hrefs.some((href) => href.includes('100libroslibres.com')));
    assert.ok(hrefs.some((href) => href.includes('hdl.handle.net/10495/416')));
    assert.match(pageSource, /name-heading/);
    for (const role of ['front', 'back', 'composite']) {
      const file = new URL(`../../catalog-src${CUADRA_UNA_MITAD_IMAGES[role].replace('/images', '')}`, import.meta.url);
      const meta = await sharp(file.pathname).metadata();
      assert.equal(meta.width, 1672);
      assert.equal(meta.height, 941);
    }
  });

  it('matches its Logros del Mes card', () => {
    const holding = additions.find((row) => row.id === CUADRA_UNA_MITAD_ID);
    assert.ok(holding);
    const piece = {
      id: CUADRA_UNA_MITAD_ID,
      country: 'CO',
      href: CUADRA_UNA_MITAD_PATH,
      title: cuadraUnaMitadIndex.title,
      dek: { es: cuadraUnaMitadCopy.es.lead, en: cuadraUnaMitadCopy.en.lead },
      pick: cuadraUnaMitadIndex.reference,
      serial: '',
      cert: '',
      image: CUADRA_UNA_MITAD_IMAGES.composite,
      imageAlt: { es: cuadraUnaMitadCopy.es.frontCaption, en: cuadraUnaMitadCopy.en.frontCaption },
    };
    const matched = catalogPieceForHolding(holding, [piece]);
    assert.equal(matched?.id, CUADRA_UNA_MITAD_ID);
    const [card] = milestonesFromHoldings([holding], [piece], 1);
    assert.equal(card.holdingId, holding.id);
    assert.match(card.href, /una-mitad-am-de-la-cuadra-1855/);
  });
});
