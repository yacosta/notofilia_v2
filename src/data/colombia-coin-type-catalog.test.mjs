import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const coinCatalogSource = readFileSync(new URL('./colombia-coin-type-catalog.ts', import.meta.url), 'utf8');
const coinagePieceSource = readFileSync(new URL('./colombia-coinage-pieces.ts', import.meta.url), 'utf8');

describe('Colombia coin type catalog enrichment', () => {
  it('keeps one holding and adds documented types without inventing serials', () => {
    assert.match(coinCatalogSource, /holdingId: '1-4-real-santa-marta-1820'/);
    assert.equal([...coinCatalogSource.matchAll(/holdingId:/g)].length, 1);
    assert.match(coinagePieceSource, /export type ColombiaCoinagePieceId = '1-4-real-santa-marta-1820'/);
    assert.doesNotMatch(coinCatalogSource, /serial:\s*'[A-Z0-9]+'/);
  });

  it('records Reyes p/m pesos as coins, not banknotes', () => {
    assert.match(coinCatalogSource, /id: '1-peso-pm-1907'/);
    assert.match(coinCatalogSource, /id: '2-pesos-pm-1907'/);
    assert.match(coinCatalogSource, /id: '5-pesos-pm-1907'/);
    assert.match(coinCatalogSource, /No es un billete/);
    assert.match(coinCatalogSource, /It is not a banknote/);
    assert.match(coinCatalogSource, /not Conversion Board paper/);
  });

  it('keeps Palonegro 1902 distinct from the 1928 lazaretto 50 centavos', () => {
    assert.match(coinCatalogSource, /id: '10-centavos-palonegro-1902'/);
    assert.match(coinCatalogSource, /id: '20-centavos-palonegro-1902'/);
    assert.match(coinCatalogSource, /id: '50-centavos-palonegro-1902'/);
    assert.match(coinCatalogSource, /id: 'lazareto-50-centavos-1928'/);
    assert.match(coinCatalogSource, /Última acuñación de la moneda exclusiva del cordón/);
    assert.match(coinCatalogSource, /Distinct from lazaretto exclusive coinage/);
  });

  it('does not invent BanRep commemorative mintages', () => {
    assert.match(coinCatalogSource, /id: '10000-pesos-2021'/);
    assert.match(coinCatalogSource, /id: '10000-pesos-2023'/);
    assert.match(coinCatalogSource, /id: '20000-pesos-2023'/);
    assert.match(coinCatalogSource, /id: '20000-pesos-2024-carriel'/);
    assert.match(coinCatalogSource, /id: '20000-pesos-2024-santa-marta'/);
    assert.doesNotMatch(coinCatalogSource, /550\.000|200\.000|500\.000/);
    assert.doesNotMatch(coinCatalogSource, /\b(price|precio|realized):/i);
  });
});
