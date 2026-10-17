import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import {
  POPAYAN_1_ESCUDO_CARLOS_IV_COMPOSITE,
  POPAYAN_1_ESCUDO_CARLOS_IV_HOLDING_IDS,
  POPAYAN_1_ESCUDO_CARLOS_IV_PATH,
  POPAYAN_1_ESCUDO_CARLOS_IV_PATH_EN,
  popayan1EscudoCarlosIvCardAlt,
  popayan1EscudoCarlosIvCopy,
  popayan1EscudoCarlosIvDedicatedSlugs,
  popayan1EscudoCarlosIvPath,
  popayan1EscudoCarlosIvSources,
} from './popayan-1-escudo-carlos-iv.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/PopayanCharlesIvEscudoPage.astro', import.meta.url),
  'utf8',
);
const esRoute = readFileSync(
  new URL('../pages/coleccion/colombia-numismatica/1-escudo-carlos-iv-popayan-1792-1808/index.astro', import.meta.url),
  'utf8',
);
const enRoute = readFileSync(
  new URL(
    '../pages/en/collection/colombia-numismatics/1-escudo-charles-iv-popayan-1792-1808/index.astro',
    import.meta.url,
  ),
  'utf8',
);

describe('Popayán Charles IV 1 escudo type page', () => {
  it('pairs the Spanish page with an English route and stays off the blog', () => {
    assert.equal(popayan1EscudoCarlosIvCopy.es.title, '1 Escudo (Oro) – Carlos IV – Ceca de Popayán (1792–1808)');
    assert.equal(popayan1EscudoCarlosIvCopy.en.title, '1 Escudo (Gold) – Charles IV – Popayán Mint (1792–1808)');
    assert.equal(popayan1EscudoCarlosIvPath('es'), POPAYAN_1_ESCUDO_CARLOS_IV_PATH);
    assert.equal(popayan1EscudoCarlosIvPath('en'), `/en${POPAYAN_1_ESCUDO_CARLOS_IV_PATH_EN}`);
    assert.equal(localizePath(POPAYAN_1_ESCUDO_CARLOS_IV_PATH, 'en'), `/en${POPAYAN_1_ESCUDO_CARLOS_IV_PATH_EN}`);
    assert.deepEqual([...popayan1EscudoCarlosIvDedicatedSlugs], [
      'coleccion/colombia-numismatica/1-escudo-carlos-iv-popayan-1792-1808',
      'collection/colombia-numismatics/1-escudo-charles-iv-popayan-1792-1808',
    ]);
    assert.doesNotMatch(POPAYAN_1_ESCUDO_CARLOS_IV_PATH, /\/blog\//);
    assert.match(esRoute, /PopayanCharlesIvEscudoPage/);
    assert.match(enRoute, /PopayanCharlesIvEscudoPage/);
  });

  it('records the type facts, the five holdings, and the 1808 caveat', () => {
    assert.equal(popayan1EscudoCarlosIvCopy.es.facts.find((fact) => fact.label === 'Metal')?.value, 'Oro .875 (tipo)');
    assert.equal(
      popayan1EscudoCarlosIvCopy.en.facts.find((fact) => fact.label === 'Metal')?.value,
      'Gold .875 (type specification)',
    );
    assert.equal(
      popayan1EscudoCarlosIvCopy.es.facts.find((fact) => fact.label === 'Catálogo')?.value,
      'KM# 56.2 · Hernández 688 · Fr# 59',
    );
    assert.deepEqual(
      popayan1EscudoCarlosIvCopy.es.sections.map((section) => section.id),
      popayan1EscudoCarlosIvCopy.en.sections.map((section) => section.id),
    );
    const type = popayan1EscudoCarlosIvCopy.es.sections.find((section) => section.id === 'tipo');
    assert.match(type?.paragraphs[1] ?? '', /KM# 56\.1/);
    assert.match(type?.paragraphs[1] ?? '', /Cód\. 686/);
    const assay = popayan1EscudoCarlosIvCopy.es.sections.find((section) => section.id === 'ensayadores');
    assert.match(assay?.paragraphs[0] ?? '', /Cód\. 688/);
    assert.match(assay?.paragraphs[0] ?? '', /P–JT/);
    const archive = popayan1EscudoCarlosIvCopy.es.sections.find((section) => section.id === 'archivo');
    const archiveEn = popayan1EscudoCarlosIvCopy.en.sections.find((section) => section.id === 'archivo');
    assert.match(archive?.paragraphs[0] ?? '', /no confirma ese año/);
    assert.match(archiveEn?.paragraphs[0] ?? '', /does not confirm that year/);
    assert.match(archive?.paragraphs[0] ?? '', /KM# 64\.2/);
    assert.deepEqual([...POPAYAN_1_ESCUDO_CARLOS_IV_HOLDING_IDS], [
      '1-escudo-popayan-1795-p-jf',
      '1-escudo-popayan-1800-p-jf',
      '1-escudo-popayan-1801-p-jf',
      '1-escudo-popayan-1806-p-jf',
      '1-escudo-popayan-1808-p-jf',
    ]);
    assert.equal(POPAYAN_1_ESCUDO_CARLOS_IV_COMPOSITE.width, 1536);
    assert.equal(POPAYAN_1_ESCUDO_CARLOS_IV_COMPOSITE.height, 1024);
    assert.match(popayan1EscudoCarlosIvCardAlt('1-escudo-popayan-1795-p-jf', 'es'), /1795/);
    assert.match(popayan1EscudoCarlosIvCardAlt('1-escudo-popayan-1800-p-jf', 'es'), /1800/);
    assert.match(popayan1EscudoCarlosIvCardAlt('1-escudo-popayan-1801-p-jf', 'es'), /1801/);
    assert.match(popayan1EscudoCarlosIvCardAlt('1-escudo-popayan-1808-p-jf', 'en'), /1808/);
    assert.equal(pageSource.includes('SeriesHero'), false);
    assert.equal(pageSource.includes('<h1'), true);
    assert.equal(pageSource.includes('NoteImageLightbox'), false);
    assert.equal(pageSource.includes('CatalogThumb'), true);
    assert.equal(pageSource.includes('CATALOG_PIECE_GRID'), true);
    assert.equal(pageSource.includes('POPAYAN_1_ESCUDO_CARLOS_IV_HOLDING_IDS'), true);
    assert.equal(pageSource.includes('archiveImages'), true);
    assert.equal(pageSource.includes('NewWindowHint'), true);
    assert.equal(pageSource.includes('target="_blank"'), true);
    assert.equal(
      popayan1EscudoCarlosIvCopy.es.holding1795Href,
      '/coleccion/colombia-numismatica/1-escudo-popayan-1795-p-jf/',
    );
    assert.equal(
      popayan1EscudoCarlosIvCopy.es.holding1801Href,
      '/coleccion/colombia-numismatica/1-escudo-popayan-1801-p-jf/',
    );
    assert.equal(
      localizePath(popayan1EscudoCarlosIvCopy.es.holding1808Href, 'en'),
      '/en/collection/colombia-numismatics/1-escudo-popayan-1808-p-jf/',
    );
    assert.equal(popayan1EscudoCarlosIvCopy.es.archiveImages.length, 3);
    assert.equal(popayan1EscudoCarlosIvCopy.en.archiveImages.length, 3);
    assert.equal(
      popayan1EscudoCarlosIvCopy.es.archiveImages[0].src,
      '/uploads/casa-de-moneda-popayan-fachada-colonial.jpg',
    );
    assert.equal(popayan1EscudoCarlosIvCopy.es.archiveImages[0].width, 3456);
    assert.equal(popayan1EscudoCarlosIvCopy.es.archiveImages[0].height, 1216);
    assert.equal(popayan1EscudoCarlosIvCopy.es.archiveImages[0].wide, true);
    assert.equal(popayan1EscudoCarlosIvCopy.es.archiveImages[0].featureAfterLead, true);
    assert.match(popayan1EscudoCarlosIvCopy.es.archiveImages[0].caption, /ResearchGate/);
    assert.match(popayan1EscudoCarlosIvCopy.en.archiveImages[0].caption, /Archivo Nacional de Bogotá/);
    assert.match(popayan1EscudoCarlosIvCopy.es.archiveImages[1].caption, /Archivo General de la Nación/);
    assert.match(popayan1EscudoCarlosIvCopy.es.archiveImages[2].caption, /Eladio Vergara/);
    assert.equal(popayan1EscudoCarlosIvCopy.es.expandImage, 'Ampliar imagen');
    assert.equal(popayan1EscudoCarlosIvCopy.en.expandImage, 'Enlarge image');
    assert.ok(popayan1EscudoCarlosIvSources.some((source) => source.href === 'https://en.numista.com/52837'));
    assert.ok(
      popayan1EscudoCarlosIvSources.some(
        (source) => source.href === 'https://en.numista.com/catalogue/literature.php?id=100183',
      ),
    );
    assert.ok(
      popayan1EscudoCarlosIvSources.some((source) =>
        source.href.includes('Plano_1_de_la_Real_Casa_de_Moneda_de_Popayan_1771'),
      ),
    );
    assert.ok(
      popayan1EscudoCarlosIvSources.some((source) =>
        source.href.includes('Plano_de_la_Casa_de_Moneda_de_Popayan_en_1866'),
      ),
    );
    assert.ok(
      popayan1EscudoCarlosIvSources.some(
        (source) => source.href === '/uploads/casa-de-moneda-popayan-fachada-colonial.jpg',
      ),
    );
    const blob = JSON.stringify({ copy: popayan1EscudoCarlosIvCopy, sources: popayan1EscudoCarlosIvSources });
    assert.equal(/eBay|Mercado Libre|US\$|€/.test(blob), false);
    assert.doesNotMatch(blob, /\$[0-9]/);
  });
});
