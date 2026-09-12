import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const source = readFileSync(new URL('./philippines-victory-66.ts', import.meta.url), 'utf8');

describe('Philippines Victory Series No. 66 series copy', () => {
  it('keeps the four holdings and does not invent extra serials', () => {
    assert.match(source, /export type VictoryNoteId = '1-peso' \| '2-pesos' \| '5-pesos' \| '20-pesos'/);
    assert.match(source, /serial: 'F70618009'/);
    assert.match(source, /serial: 'F13317943'/);
    assert.match(source, /serial: 'F00618071'/);
    assert.match(source, /serial: 'F04661756'/);
    assert.doesNotMatch(source, /id: '10-pesos'/);
    assert.doesNotMatch(source, /id: '50-pesos'/);
    assert.doesNotMatch(source, /id: '100-pesos'/);
    assert.doesNotMatch(source, /id: '500-pesos'/);
  });

  it('names the eight official denominations and the four missing types', () => {
    assert.match(source, /Pick 94–101/);
    assert.match(source, /George Washington/);
    assert.match(source, /Henry Ware Lawton/);
    assert.match(source, /Fernando de Magallanes/);
    assert.match(source, /Ferdinand Magellan/);
    assert.match(source, /Miguel López de Legazpi/);
    assert.match(source, /Mickey Mouse/);
    assert.match(source, /Osmeña–Guevara/);
    assert.match(source, /Roxas–Guevara/);
    assert.match(source, /1191/);
    assert.match(source, /1516/);
    assert.match(source, /10, el 50, el 100 y el 500/);
    assert.match(source, /10-, 50-, 100-, and 500-peso/);
  });

  it('cites the demonetization acts and occupation-paper source', () => {
    assert.match(source, /https:\/\/lawphil\.net\/statutes\/repacts\/ra1954\/ra_1191_1954\.html/);
    assert.match(source, /https:\/\/lawphil\.net\/statutes\/repacts\/ra1956\/ra_1516_1956\.html/);
    assert.match(source, /https:\/\/en\.wikipedia\.org\/wiki\/Japanese_government-issued_Philippine_peso/);
  });
});
