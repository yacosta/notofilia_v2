import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { colombiaCoinTypes } from './colombia-coin-type-catalog.ts';
import { colombiaCoinagePieces } from './colombia-coinage-pieces.ts';

describe('Colombia coin type catalog enrichment', () => {
  it('keeps one holding and adds documented types without inventing serials', () => {
    const holdings = colombiaCoinTypes.filter((type) => type.holdingId);
    assert.equal(holdings.length, 1);
    assert.equal(holdings[0].id, '1-4-real-santa-marta-1820');
    assert.equal(colombiaCoinagePieces.length, 1);
    assert.equal(colombiaCoinagePieces[0].id, '1-4-real-santa-marta-1820');
  });

  it('records Reyes p/m pesos as coins, not banknotes', () => {
    const pesoPm = colombiaCoinTypes.filter((type) => type.id.endsWith('-pm-1907'));
    assert.equal(pesoPm.length, 3);
    for (const type of pesoPm) {
      assert.equal(type.era, 'republica');
      assert.match(type.dek.es, /No es un billete|No es papel|Tipo, no ejemplar/);
      assert.match(type.dek.en, /not a banknote|not Conversion Board paper|not a collection specimen/i);
      assert.ok(!type.holdingId);
      assert.ok(type.flags.includes('pending'));
    }
  });

  it('keeps Palonegro 1902 distinct from the 1928 lazaretto 50 centavos', () => {
    const palonegro = colombiaCoinTypes.filter((type) => type.id.includes('palonegro'));
    assert.equal(palonegro.length, 3);
    assert.ok(palonegro.every((type) => type.year === '1902'));
    const lazareto = colombiaCoinTypes.find((type) => type.id === 'lazareto-50-centavos-1928');
    assert.ok(lazareto);
    assert.equal(lazareto.year, '1928');
    assert.match(lazareto.dek.es, /Última acuñación de la moneda exclusiva del cordón/);
  });

  it('does not invent BanRep commemorative mintages', () => {
    const commemoratives = colombiaCoinTypes.filter((type) =>
      ['10000-pesos-2021', '10000-pesos-2023', '20000-pesos-2023', '20000-pesos-2024-carriel', '20000-pesos-2024-santa-marta'].includes(
        type.id,
      ),
    );
    assert.equal(commemoratives.length, 5);
    for (const type of commemoratives) {
      assert.doesNotMatch(type.dek.es, /\d{1,3}\.\d{3}\.\d{3}/);
      assert.doesNotMatch(type.dek.en, /\d{1,3},\d{3},\d{3}/);
      assert.ok(!type.holdingId);
    }
  });
});
