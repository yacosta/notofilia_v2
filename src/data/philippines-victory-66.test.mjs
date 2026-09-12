import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { seriesCopy, victoryNotes } from './philippines-victory-66.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/VictorySeriesPage.astro', import.meta.url),
  'utf8',
);

describe('Philippines Victory Series No. 66 overview', () => {
  it('keeps only the four documented holdings', () => {
    assert.deepEqual(
      victoryNotes.map((note) => note.id),
      ['1-peso', '2-pesos', '5-pesos', '20-pesos'],
    );
    assert.equal(seriesCopy.es.missingDenoms.length, 4);
    assert.equal(seriesCopy.en.missingDenoms.length, 4);
    assert.match(seriesCopy.es.seriesScopeIntro.join(' '), /no se catalogan como piezas/);
    assert.match(seriesCopy.en.seriesScopeIntro.join(' '), /not catalogued as holdings/);
  });

  it('names the missing official denominations and portraits', () => {
    const es = seriesCopy.es.missingDenoms.map((item) => `${item.label} ${item.text}`).join(' ');
    const en = seriesCopy.en.missingDenoms.map((item) => `${item.label} ${item.text}`).join(' ');
    assert.match(es, /10 pesos · P#97/);
    assert.match(es, /George Washington/);
    assert.match(es, /50 pesos · P#99/);
    assert.match(es, /Henry Ware Lawton/);
    assert.match(es, /100 pesos · P#100/);
    assert.match(es, /Fernando de Magallanes/);
    assert.match(es, /500 pesos · P#101/);
    assert.match(es, /Miguel López de Legazpi/);
    assert.match(es, /31 de diciembre de 1957/);
    assert.match(en, /Ferdinand Magellan/);
    assert.match(en, /31 December 1957/);
  });

  it('lists the three signature combinations without sales language', () => {
    const es = seriesCopy.es.signaturePairs.map((item) => item.text).join(' ');
    const en = seriesCopy.en.signaturePairs.map((item) => item.text).join(' ');
    assert.equal(seriesCopy.es.signaturePairs.length, 3);
    assert.match(es, /Osmeña/);
    assert.match(es, /Hernandez/);
    assert.match(es, /Marciano Guevara/);
    assert.match(es, /Manuel Roxas/);
    assert.doesNotMatch(es, /codiciad|valor de las piezas/i);
    assert.doesNotMatch(en, /highly sought|market value/i);
  });

  it('contrasts Victory certificates with Japanese occupation paper', () => {
    assert.match(seriesCopy.es.intro.join(' '), /Mickey Mouse/);
    assert.match(seriesCopy.en.intro.join(' '), /Mickey Mouse/);
    assert.match(seriesCopy.es.intro.join(' '), /ocupación militar japonesa/);
    assert.match(seriesCopy.en.intro.join(' '), /Japanese occupation currency/);
  });

  it('renders the type-level scope block on the series page', () => {
    assert.match(pageSource, /id="series-scope-heading"/);
    assert.match(pageSource, /t\.missingDenoms/);
    assert.match(pageSource, /t\.signaturePairs/);
  });
});
