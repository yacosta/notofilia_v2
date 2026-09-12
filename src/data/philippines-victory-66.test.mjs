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
    assert.equal([...dataSource.matchAll(/id: '1-peso'|'2-pesos'|'5-pesos'|'20-pesos'/g)].length >= 4, true);
    assert.doesNotMatch(dataSource, /id: '10-pesos'|id: '50-pesos'|id: '100-pesos'|id: '500-pesos'/);
    assert.match(dataSource, /no se catalogan como piezas/);
    assert.match(dataSource, /not catalogued as holdings/);
  });

  it('names the missing official denominations and portraits', () => {
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

  it('renders the type-level scope block on the series page', () => {
    assert.match(pageSource, /id="series-scope-heading"/);
    assert.match(pageSource, /t\.missingDenoms/);
    assert.match(pageSource, /t\.signaturePairs/);
  });
});
