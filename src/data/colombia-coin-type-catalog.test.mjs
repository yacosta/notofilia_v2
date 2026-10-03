import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { orderSantaFeHoldings } from './colombia-coinage-order.ts';

const coinCatalogSource = readFileSync(new URL('./colombia-coin-type-catalog.ts', import.meta.url), 'utf8');
const coinagePieceSource = readFileSync(new URL('./colombia-coinage-pieces.ts', import.meta.url), 'utf8');

describe('Santa Fe holdings on the Colombia-Numismatics case', () => {
  const santaFeOrder = [
    '1-escudo-popayan-1801-p-jf',
    '1-escudo-popayan-1806-p-jf',
    '1-escudo-popayan-1808-p-jf',
    '8-escudos-popayan-1801-p-jf',
    '1-real-bogota-1810-nr-jf',
  ];

  it('keeps 1 escudos together by date, then 8 escudos, then 1 real', () => {
    const shuffled = [
      { id: '1-real-bogota-1810-nr-jf', chapterId: 'santa-fe', year: '1810', denomination: { es: '1 real' } },
      { id: '8-escudos-popayan-1801-p-jf', chapterId: 'santa-fe', year: '1801', denomination: { es: '8 escudos' } },
      { id: '1-escudo-popayan-1808-p-jf', chapterId: 'santa-fe', year: '1808', denomination: { es: '1 escudo' } },
      { id: 'later', chapterId: 'independencia', year: '1821', denomination: { es: '8 reales' } },
      { id: '1-escudo-popayan-1806-p-jf', chapterId: 'santa-fe', year: '1806', denomination: { es: '1 escudo' } },
      { id: '1-escudo-popayan-1801-p-jf', chapterId: 'santa-fe', year: '1801', denomination: { es: '1 escudo' } },
    ];
    assert.deepEqual(
      orderSantaFeHoldings(shuffled).map((piece) => piece.id),
      [...santaFeOrder, 'later'],
    );
  });

  it('lists the published Santa Fe pieces in that order', () => {
    const bodyStart = coinagePieceSource.indexOf('orderSantaFeHoldings([');
    const bodyEnd = coinagePieceSource.indexOf(']);', bodyStart);
    const body = coinagePieceSource.slice(bodyStart, bodyEnd);
    const santaFe = [...body.matchAll(/id: '([^']+)'[\s\S]*?chapterId: '([^']+)'/g)]
      .filter((match) => match[2] === 'santa-fe')
      .map((match) => match[1]);
    assert.deepEqual(santaFe, santaFeOrder);
  });
});

describe('Colombia coin type catalog enrichment', () => {
  it('keeps one holding and adds documented types without inventing serials', () => {
    assert.match(coinCatalogSource, /holdingId: '1-escudo-popayan-1801-p-jf'/);
    assert.match(coinCatalogSource, /holdingId: '1-escudo-popayan-1806-p-jf'/);
    assert.match(coinCatalogSource, /holdingId: '1-escudo-popayan-1808-p-jf'/);
    assert.match(coinCatalogSource, /holdingId: '8-escudos-popayan-1801-p-jf'/);
    assert.match(coinCatalogSource, /holdingId: '1-4-real-santa-marta-1820'/);
    assert.match(coinCatalogSource, /holdingId: '8-reales-bogota-1821-ba-jf'/);
    assert.match(coinCatalogSource, /holdingId: '1-real-bogota-1810-nr-jf'/);
    assert.match(coinCatalogSource, /holdingId: '2-reales-cartagena-1812-1814'/);
    assert.match(coinCatalogSource, /holdingId: '2-centavos-lazareto-1921'/);
    assert.match(coinCatalogSource, /holdingId: '50-centavos-lazareto-1931'/);
    assert.match(coinCatalogSource, /holdingId: '50-centavos-santander-1902'/);
    assert.match(coinCatalogSource, /holdingId: '20-centavos-santander-1902'/);
    assert.match(coinCatalogSource, /holdingId: '10-centavos-santander-1902'/);
    assert.equal([...coinCatalogSource.matchAll(/holdingId:/g)].length, 13);
    assert.match(coinagePieceSource, /'1-escudo-popayan-1801-p-jf'/);
    assert.match(coinagePieceSource, /'1-escudo-popayan-1806-p-jf'/);
    assert.match(coinagePieceSource, /Restrepo 85\.34/);
    assert.doesNotMatch(coinagePieceSource, /1-escudo-popayan-1806[\s\S]{0,1200}tirada de \d/);
    assert.match(coinagePieceSource, /'1-escudo-popayan-1808-p-jf'/);
    assert.match(coinagePieceSource, /KM# 56\.2/);
    assert.match(coinagePieceSource, /Hernández no confirma ese año/);
    assert.doesNotMatch(coinagePieceSource, /1-escudo-popayan-1808[\s\S]{0,2500}US\s*\$/);
    assert.doesNotMatch(coinagePieceSource, /1-escudo-popayan-1808[\s\S]{0,2500}\$\s*\d/);
    assert.match(coinagePieceSource, /'8-escudos-popayan-1801-p-jf'/);
    assert.match(coinagePieceSource, /KM# 62\.2/);
    assert.doesNotMatch(coinagePieceSource, /8-escudos-popayan-1801[\s\S]{0,800}tirada de \d/);
    assert.match(coinagePieceSource, /'1-real-bogota-1810-nr-jf'/);
    assert.match(coinagePieceSource, /'2-reales-cartagena-1812-1814'/);
    assert.match(coinagePieceSource, /'1-4-real-santa-marta-1820'/);
    assert.match(coinagePieceSource, /'8-reales-bogota-1821-ba-jf'/);
    assert.match(coinagePieceSource, /'2-centavos-lazareto-1921'/);
    assert.match(coinagePieceSource, /'50-centavos-lazareto-1931'/);
    assert.match(coinagePieceSource, /'50-centavos-santander-1902'/);
    assert.match(coinagePieceSource, /'20-centavos-santander-1902'/);
    assert.match(coinagePieceSource, /'10-centavos-santander-1902'/);
    assert.match(coinagePieceSource, /Atribución pendiente · no es KM# 193.1/);
    assert.match(coinagePieceSource, /Esta ficha no asigna L13 ni L14/);
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
