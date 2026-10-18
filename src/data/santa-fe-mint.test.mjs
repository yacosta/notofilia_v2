import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import {
  SANTA_FE_MINT_COMPOSITE,
  SANTA_FE_MINT_HOLDING_IDS,
  SANTA_FE_MINT_PATH,
  SANTA_FE_MINT_PATH_EN,
  santaFeMintCardAlt,
  santaFeMintCopy,
  santaFeMintDedicatedSlugs,
  santaFeMintPath,
  santaFeMintSources,
} from './santa-fe-mint.ts';

const pageSource = readFileSync(new URL('../components/catalog/SantaFeMintPage.astro', import.meta.url), 'utf8');
const esRoute = readFileSync(
  new URL(
    '../pages/coleccion/colombia-numismatica/casa-de-moneda-de-santa-fe-de-nuevo-reino/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const enRoute = readFileSync(
  new URL(
    '../pages/en/collection/colombia-numismatics/santa-fe-de-nuevo-reino-mint/index.astro',
    import.meta.url,
  ),
  'utf8',
);

describe('Santa Fe de Nuevo Reino mint page', () => {
  it('pairs the Spanish page with an English route and stays off the blog', () => {
    assert.equal(santaFeMintCopy.es.title, 'La Casa de Moneda de Santa Fe de Nuevo Reino');
    assert.equal(santaFeMintCopy.en.title, 'The Mint of Santa Fe de Nuevo Reino');
    assert.equal(santaFeMintPath('es'), SANTA_FE_MINT_PATH);
    assert.equal(santaFeMintPath('en'), `/en${SANTA_FE_MINT_PATH_EN}`);
    assert.equal(localizePath(SANTA_FE_MINT_PATH, 'en'), `/en${SANTA_FE_MINT_PATH_EN}`);
    assert.deepEqual([...santaFeMintDedicatedSlugs], [
      'coleccion/colombia-numismatica/casa-de-moneda-de-santa-fe-de-nuevo-reino',
      'collection/colombia-numismatics/santa-fe-de-nuevo-reino-mint',
    ]);
    assert.doesNotMatch(SANTA_FE_MINT_PATH, /\/blog\//);
    assert.match(esRoute, /SantaFeMintPage/);
    assert.match(enRoute, /SantaFeMintPage/);
  });

  it('records the mint facts, the nine holdings, and the assayer table', () => {
    assert.equal(
      santaFeMintCopy.es.facts.find((fact) => fact.label === 'Primeras labores')?.value,
      '1621',
    );
    assert.equal(
      santaFeMintCopy.en.facts.find((fact) => fact.label === 'First striking')?.value,
      '1621',
    );
    assert.equal(
      santaFeMintCopy.es.facts.find((fact) => fact.label === 'Cese en el claustro')?.value,
      '1987',
    );
    assert.deepEqual(
      santaFeMintCopy.es.sections.map((section) => section.id),
      santaFeMintCopy.en.sections.map((section) => section.id),
    );
    const founding = santaFeMintCopy.es.sections.find((section) => section.id === 'fundacion');
    assert.match(founding?.paragraphs[1] ?? '', /Turrillo de Yebra/);
    assert.match(founding?.paragraphs[1] ?? '', /primer oro acuñado en América/);
    const caseNote = santaFeMintCopy.es.sections.find((section) => section.id === 'vitrina');
    const caseNoteEn = santaFeMintCopy.en.sections.find((section) => section.id === 'vitrina');
    assert.match(caseNote?.paragraphs[0] ?? '', /KM# 193\.1/);
    assert.match(caseNoteEn?.paragraphs[0] ?? '', /does not enter here/);
    assert.match(caseNote?.paragraphs[0] ?? '', /Popayán/);
    assert.deepEqual([...SANTA_FE_MINT_HOLDING_IDS], [
      '2-escudos-bogota-nd-felipe-v',
      '1-escudo-bogota-1795-nr-jj',
      '1-escudo-bogota-1802-nr-jj',
      '1-real-bogota-1810-nr-jf',
      '1-escudo-bogota-1811-nr-jf',
      '1-escudo-bogota-1820-nr-jf',
      '8-reales-bogota-1821-ba-jf',
      '1-peso-bogota-1826-jf',
      '2-centavos-lazareto-1921',
    ]);
    assert.equal(SANTA_FE_MINT_COMPOSITE.width, 1536);
    assert.equal(SANTA_FE_MINT_COMPOSITE.height, 1024);
    assert.match(santaFeMintCardAlt('2-escudos-bogota-nd-felipe-v', 'es'), /Felipe V/);
    assert.match(santaFeMintCardAlt('1-escudo-bogota-1795-nr-jj', 'es'), /1795/);
    assert.match(santaFeMintCardAlt('1-peso-bogota-1826-jf', 'en'), /1826/);
    assert.match(santaFeMintCardAlt('2-centavos-lazareto-1921', 'en'), /Lazaretto/);
    assert.equal(pageSource.includes('SeriesHero'), false);
    assert.equal(pageSource.includes('<h1'), true);
    assert.equal(pageSource.includes('NoteImageLightbox'), false);
    assert.equal(pageSource.includes('CatalogThumb'), true);
    assert.equal(pageSource.includes('CATALOG_PIECE_GRID'), true);
    assert.equal(pageSource.includes('SANTA_FE_MINT_HOLDING_IDS'), true);
    assert.equal(pageSource.includes('archiveImages'), true);
    assert.equal(pageSource.includes('assayTable'), true);
    assert.equal(santaFeMintCopy.es.archiveImages.length, 3);
    assert.equal(santaFeMintCopy.en.archiveImages.length, 3);
    assert.equal(santaFeMintCopy.es.archiveImages[0].wide, true);
    assert.equal(santaFeMintCopy.es.archiveImages[0].featureAfterLead, true);
    assert.match(santaFeMintCopy.es.archiveImages[0].caption, /Banrepcultural/);
    assert.match(santaFeMintCopy.es.archiveImages[1].caption, /Felipe Restrepo Acosta/);
    assert.match(santaFeMintCopy.es.archiveImages[2].caption, /Volante/);
    assert.equal(santaFeMintCopy.es.assayTable.rows.length, 8);
    assert.equal(santaFeMintCopy.es.assayTable.rows[0][3], 'SF');
    assert.match(santaFeMintCopy.es.assayTable.rows[7][2], /Arce Penagos/);
    assert.ok(
      santaFeMintSources.some((source) => source.href === 'https://www.banrep.gov.co/es/billetes-monedas/fabrica-moneda/historia'),
    );
    assert.ok(
      santaFeMintSources.some((source) =>
        source.href.includes('Casa_de_Moneda_de_Bogot'),
      ),
    );
    const blob = JSON.stringify({ copy: santaFeMintCopy, sources: santaFeMintSources });
    assert.equal(/eBay|Mercado Libre|US\$|€/.test(blob), false);
    assert.doesNotMatch(blob, /\$[0-9]/);
  });
});
