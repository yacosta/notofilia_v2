import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { additions, collectionStats } from './holdings.ts';

const siteSource = readFileSync(new URL('../lib/site.ts', import.meta.url), 'utf8');

describe('collection stats catalog entries', () => {
  it('counts catalog entries as banknotes + coins', () => {
    const stats = collectionStats();
    const banknotes = additions.filter((piece) => piece.kind === 'banknote').length;
    const coins = additions.filter((piece) => piece.kind === 'coin').length;

    assert.equal(stats.banknotes, banknotes);
    assert.equal(stats.coins, coins);
    assert.equal(stats.catalog, banknotes + coins);
  });

  it('feeds the catalog total into both locale stats lines', () => {
    assert.match(siteSource, /\$\{stats\.catalog\} catalog entries/);
    assert.match(siteSource, /\$\{stats\.catalog\} fichas/);
  });
});
