import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const catalog = readFileSync(new URL('./catalog.ts', import.meta.url), 'utf8');
const seriesPage = readFileSync(
  new URL('../components/catalog/UnitedStatesSeriesPage.astro', import.meta.url),
  'utf8',
);
const miscPage = readFileSync(
  new URL('../components/catalog/UnitedStatesMiscSeriesPage.astro', import.meta.url),
  'utf8',
);
const notePage = readFileSync(
  new URL('../components/catalog/UnitedStatesNotePage.astro', import.meta.url),
  'utf8',
);
const prose = readFileSync(
  new URL('../components/catalog/CatalogProseParagraph.astro', import.meta.url),
  'utf8',
);

describe('US miscellaneous Where’s George copy', () => {
  it('uses the requested 1-dollar opening in Spanish and English', () => {
    assert.match(
      data,
      /Fuera del papel de curso legal «limpio» y de las intervenciones contemporáneas sobre el 1 dólar,/,
    );
    assert.match(data, /contemporary interventions on the \$1/);
    assert.match(data, /pop art sobre el 1 dólar/);
    assert.match(data, /pop art on the \$1/);
    assert.doesNotMatch(
      data,
      /Fuera del papel de curso legal «limpio» y de las intervenciones contemporáneas sobre el 2 dólares,/,
    );
    assert.doesNotMatch(data, /contemporary interventions on the \$2/);
  });

  it('renders Where’s George as a real in-page anchor, not markdown in a string', () => {
    assert.match(data, /WHERES_GEORGE_HREF = 'https:\/\/www\.wheresgeorge\.com'/);
    assert.match(data, /serial: 'K46602688C'/);
    assert.match(catalog, /export type CatalogProsePart/);
    assert.match(prose, /target="_blank"/);
    assert.match(prose, /rel="noopener noreferrer"/);
    assert.match(prose, /<NewWindowHint locale=\{locale\} \/>/);
    assert.match(seriesPage, /chapter\.bodyParts/);
    assert.match(seriesPage, /<CatalogProseParagraph/);
    assert.match(miscPage, /miscSeriesIntro/);
    assert.match(miscPage, /<CatalogProseParagraph/);
    assert.match(notePage, /isCatalogProseParts/);
    assert.match(notePage, /<CatalogProseParagraph/);
    assert.doesNotMatch(prose, /set:html/);
  });
});
