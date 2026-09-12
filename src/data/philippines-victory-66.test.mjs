import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const dataSource = readFileSync(new URL('./philippines-victory-66.ts', import.meta.url), 'utf8');
const pageSource = readFileSync(
  new URL('../components/catalog/VictorySeriesPage.astro', import.meta.url),
  'utf8',
);

describe('Philippines Victory Series No. 66 overview', () => {
  it('keeps only the four documented holdings', () => {
    assert.match(dataSource, /export type VictoryNoteId = '1-peso' \| '2-pesos' \| '5-pesos' \| '20-pesos'/);
    assert.match(dataSource, /serial: 'F70618009'/);
    assert.match(dataSource, /serial: 'F13317943'/);
    assert.match(dataSource, /serial: 'F00618071'/);
    assert.match(dataSource, /serial: 'F04661756'/);
    assert.doesNotMatch(dataSource, /id: '10-pesos'|id: '50-pesos'|id: '100-pesos'|id: '500-pesos'/);
    assert.match(dataSource, /no se catalogan como piezas/);
    assert.match(dataSource, /not catalogued as holdings/);
    assert.match(dataSource, /10, el 50, el 100 y el 500/);
    assert.match(dataSource, /10-, 50-, 100-, and 500-peso/);
  });

  it('names the missing official denominations and portraits', () => {
    assert.match(dataSource, /Pick 94–101/);
    assert.match(dataSource, /10 pesos · P#97/);
    assert.match(dataSource, /George Washington/);
    assert.match(dataSource, /50 pesos · P#99/);
    assert.match(dataSource, /Henry Ware Lawton/);
    assert.match(dataSource, /100 pesos · P#100/);
    assert.match(dataSource, /Fernando de Magallanes/);
    assert.match(dataSource, /Ferdinand Magellan/);
    assert.match(dataSource, /500 pesos · P#101/);
    assert.match(dataSource, /Miguel López de Legazpi/);
    assert.match(dataSource, /31 de diciembre de 1957/);
    assert.match(dataSource, /31 December 1957/);
  });

  it('lists the three signature combinations without sales language', () => {
    assert.match(dataSource, /Osmeña–Hernandez/);
    assert.match(dataSource, /Osmeña–Guevara/);
    assert.match(dataSource, /Roxas–Guevara/);
    assert.match(dataSource, /Marciano Guevara/);
    assert.match(dataSource, /Manuel Roxas/);
    assert.doesNotMatch(dataSource, /codiciad|valor de las piezas|highly sought|market value/i);
  });

  it('contrasts Victory certificates with Japanese occupation paper', () => {
    assert.match(dataSource, /Mickey Mouse/);
    assert.match(dataSource, /ocupación militar japonesa/);
    assert.match(dataSource, /Japanese occupation currency/);
  });

  it('cites the demonetization acts and occupation-paper source', () => {
    assert.match(dataSource, /https:\/\/lawphil\.net\/statutes\/repacts\/ra1954\/ra_1191_1954\.html/);
    assert.match(dataSource, /https:\/\/lawphil\.net\/statutes\/repacts\/ra1956\/ra_1516_1956\.html/);
    assert.match(dataSource, /https:\/\/en\.wikipedia\.org\/wiki\/Japanese_government-issued_Philippine_peso/);
  });

  it('renders the type-level scope block on the series page', () => {
    assert.match(pageSource, /id="series-scope-heading"/);
    assert.match(pageSource, /t\.missingDenoms/);
    assert.match(pageSource, /t\.signaturePairs/);
  });

  it('shows holdings in a three-up grid on large screens', () => {
    const threeUp = pageSource.match(/sm:grid-cols-2 lg:grid-cols-3/g);
    assert.equal(threeUp?.length, 2);
    assert.doesNotMatch(pageSource, /lg:grid-cols-4/);
  });
});
