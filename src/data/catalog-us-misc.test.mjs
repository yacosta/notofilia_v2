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

describe('US Rency Pelé holding', () => {
  it('records the Pelé / The Beautiful Game piece under pop art with serial F71235101A', () => {
    assert.match(data, /id: 'renci-pele-the-beautiful-game'/);
    assert.match(data, /chapterId: 'us-pop-art'/);
    assert.match(data, /serial: 'F71235101A'/);
    assert.match(data, /Rency · 5\/200/);
    assert.doesNotMatch(data, /Renci · 5\/200/);
    assert.match(data, /No debe confundirse con Rency Punnoose/);
    assert.match(data, /This is not Rency Punnoose/);
    assert.match(data, /Banksy/);
    assert.match(seriesPage, /viewRencyCase/);
    assert.match(seriesPage, /USA_RENCY_PATH/);
  });
});

describe('US Rency Warhol & Basquiat holding', () => {
  it('records Warhol y Basquiat / Life Is Beautiful as a second pop-art object', () => {
    assert.match(data, /id: 'renci-warhol-basquiat-life-is-beautiful'/);
    assert.match(data, /Warhol y Basquiat \/ Life Is Beautiful/);
    assert.match(data, /Warhol & Basquiat \/ Life Is Beautiful/);
    assert.match(data, /plancha 23/);
    assert.match(data, /plate 23/);
    assert.match(data, /SAMO LIVES/);
    assert.match(data, /no fusiona las fichas/);
    assert.match(data, /does not merge the records/);
  });
});

describe('US Rency Life Is Beautiful / LIFE SPRAY holding', () => {
  it('records LIFE SPRAY as a fourth pop-art object with reused serial F71235101A', () => {
    assert.match(data, /id: 'renci-life-is-beautiful-life-spray'/);
    assert.match(data, /Life Is Beautiful \/ LIFE SPRAY/);
    assert.match(data, /LIFE SPRAY/);
    assert.match(data, /FEDERAL BANK OF RENCY/);
    assert.match(data, /life is beautiful/);
    assert.match(data, /Rency · 5\/200/);
    assert.match(data, /no fusiona las fichas/);
    assert.match(data, /does not merge the records/);
    assert.doesNotMatch(data, /Renci · 5\/200/);
  });
});

describe('US Rency Trump / Never Surrender holding', () => {
  it('records Trump / Never Surrender as a third pop-art object without inventing a serial', () => {
    assert.match(data, /id: 'renci-trump-never-surrender'/);
    assert.match(data, /Trump \/ Never Surrender/);
    assert.match(data, /NEVER SURRENDER/);
    assert.match(data, /STAND UP FOR AMERICA/);
    assert.match(data, /WITCH HUNT/);
    assert.match(data, /Fulton County/);
    assert.match(data, /no se asigna aquí el serial F71235101A/);
    assert.match(data, /does not assign serial F71235101A/);
    assert.match(data, /Pop overlay covers the Federal Reserve face/);
  });
});
