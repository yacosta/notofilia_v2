import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { uniqueCatalogSources } from './catalog.ts';
import newsArticlesJson from './news-articles.json' with { type: 'json' };

const piecePages = [
  '../components/catalog/ChinaNotePage.astro',
  '../components/catalog/ColombiaNotePage.astro',
  '../components/catalog/MpcNotePage.astro',
  '../components/catalog/NetherlandsCoinPage.astro',
  '../components/catalog/PuertoRicoNotePage.astro',
  '../components/catalog/UnitedStatesCoinPage.astro',
  '../components/catalog/UnitedStatesNotePage.astro',
  '../components/catalog/VictoryNotePage.astro',
];

const subseriesPages = [
  '../components/catalog/UnitedStatesMiscSeriesPage.astro',
  '../components/catalog/UnitedStatesRencySeriesPage.astro',
];

const polymerCountryPages = [
  '../components/catalog/PolymerCanadaPage.astro',
  '../components/catalog/PolymerEnglandPage.astro',
  '../components/catalog/PolymerMalaysiaPage.astro',
];

function read(relativePath) {
  return readFileSync(new URL(relativePath, import.meta.url), 'utf8');
}

function hrefsIn(source) {
  return [...source.matchAll(/href: '([^']+)'/g)].map((match) => match[1]);
}

function exportArrayBlock(source, exportName) {
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

describe('page-specific catalog sources', () => {
  it('dedupes catalog sources by href', () => {
    const first = { href: 'https://example.test/a', es: 'A', en: 'A' };
    const second = { href: 'https://example.test/a', es: 'A2', en: 'A2' };
    const third = { href: 'https://example.test/b', es: 'B', en: 'B' };
    assert.deepEqual(uniqueCatalogSources([first, second, third]), [first, third]);
  });

  it('does not dump series bibliographies onto piece pages', () => {
    for (const page of piecePages) {
      const source = read(page);
      assert.doesNotMatch(
        source,
        /seriesSources\.filter/,
        `${page} still merges seriesSources onto the piece`,
      );
      assert.doesNotMatch(
        source,
        /\.\.\.seriesSources/,
        `${page} still spreads seriesSources onto the piece`,
      );
    }
  });

  it('does not dump federal US sources onto misc or Rency series pages', () => {
    for (const page of subseriesPages) {
      const source = read(page);
      assert.doesNotMatch(source, /seriesSources/, `${page} still imports federal seriesSources`);
    }
  });

  it('does not dump piece sources onto polymer country pages', () => {
    for (const page of polymerCountryPages) {
      const source = read(page);
      assert.doesNotMatch(source, /flatMap\(\(note\) => note\.sources\)/, `${page} still flatMaps note sources`);
      assert.match(source, /SeriesSources/, `${page} should use a country-page source list`);
    }
  });

  it('keeps piece-only Numista pages off series indexes', () => {
    const philippinesHrefs = hrefsIn(exportArrayBlock(read('./philippines-victory-66.ts'), 'seriesSources'));
    assert.equal(philippinesHrefs.includes('https://en.numista.com/201642'), false);
    assert.equal(philippinesHrefs.includes('https://en.numista.com/203356'), false);
    assert.equal(philippinesHrefs.includes('https://en.numista.com/237622'), false);

    const chinaHrefs = hrefsIn(exportArrayBlock(read('./china.ts'), 'seriesSources'));
    assert.equal(chinaHrefs.includes('https://en.numista.com/312895'), false);

    const netherlandsHrefs = hrefsIn(exportArrayBlock(read('./netherlands-coinage.ts'), 'seriesSources'));
    assert.equal(netherlandsHrefs.includes('https://en.numista.com/catalogue/pieces323147.html'), false);

    const guatemalaHrefs = hrefsIn(exportArrayBlock(read('./guatemala.ts'), 'seriesSources'));
    assert.equal(guatemalaHrefs.includes('https://en.numista.com'), false);
  });

  it('keeps BanRep production tables and Heritage lots off pages that did not use them', () => {
    const colombiaHrefs = hrefsIn(exportArrayBlock(read('./colombia.ts'), 'seriesSources'));
    assert.equal(
      colombiaHrefs.includes('https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion'),
      false,
    );
    const catalogHrefs = hrefsIn(exportArrayBlock(read('./colombia-type-catalog.ts'), 'noteCatalogSources'));
    assert.equal(catalogHrefs.some((href) => href.includes('currency.ha.com')), false);
    assert.equal(catalogHrefs.includes('https://en.numista.com/L100183'), false);
    const coinCatalogHrefs = hrefsIn(exportArrayBlock(read('./colombia-coin-type-catalog.ts'), 'coinCatalogSources'));
    assert.equal(coinCatalogHrefs.some((href) => href.includes('currency.ha.com')), false);
    assert.equal(coinCatalogHrefs.includes('https://en.numista.com/L100183'), true);
    assert.equal(
      coinCatalogHrefs.includes('https://www.banrep.gov.co/es/billetes-monedas/produccion-circulacion'),
      true,
    );
  });

  it('lists editorial primary sources only when the article body used them', () => {
    for (const article of newsArticlesJson) {
      const listed = article.primarySources ?? [];
      const body = `${article.bodyHtml.es}\n${article.bodyHtml.en}`;
      for (const source of listed) {
        assert.ok(
          body.includes(source.url),
          `${article.slug} lists ${source.url} but the body never cites it`,
        );
      }
    }
  });

  it('hides an empty SourceList instead of an empty Fuentes heading', () => {
    const sourceList = read('../components/catalog/SourceList.astro');
    assert.match(sourceList, /sources\.length \?/);
  });
});
