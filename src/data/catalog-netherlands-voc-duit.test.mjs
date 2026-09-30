import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./netherlands-coinage.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const esCoin = readFileSync(
  new URL('../pages/coleccion/paises-bajos-numismatica/duit-voc-utrecht-1790/index.astro', import.meta.url),
  'utf8',
);
const enCoin = readFileSync(
  new URL('../pages/en/collection/netherlands-numismatics/duit-voc-utrecht-1790/index.astro', import.meta.url),
  'utf8',
);

describe('VOC Utrecht 1790 1 duit', () => {
  it('registers one bilingual holding identified by the NGC certificate', () => {
    assert.equal(
      localizePath('/coleccion/paises-bajos-numismatica/duit-voc-utrecht-1790/', 'en'),
      '/en/collection/netherlands-numismatics/duit-voc-utrecht-1790/',
    );
    assert.match(data, /id: 'duit-voc-utrecht-1790'/);
    assert.match(data, /certificate: '8703937-175'/);
    assert.match(data, /no_serial_reason:\n      'Struck copper VOC duit/);
    assert.match(data, /KM# 111/);
    assert.match(data, /N# 6585/);
    assert.match(data, /NGC Genuine/);
    assert.match(data, /sin subtipo/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /\$\d+/);
    assert.match(holdings, /id: 'nl-1790-duit-voc-utrecht-8703937-175', kind: 'coin', country: 'NL'/);
    assert.match(holdings, /nl-1790-1-duit-voc-km111/);
  });

  it('keeps separate uncropped faces and a composite of those frames', () => {
    assert.match(esCoin, /NetherlandsCoinPage locale="es"/);
    assert.match(enCoin, /NetherlandsCoinPage locale="en"/);
    assert.match(data, /netherlands-voc-utrecht-1-duit-1790-ngc-8703937-175-front\.jpg/);
    assert.match(data, /netherlands-voc-utrecht-1-duit-1790-ngc-8703937-175-back\.jpg/);
    assert.match(data, /netherlands-voc-utrecht-1-duit-1790-ngc-8703937-175-composite\.jpg/);
    assert.match(data, /faceWidth: 1024/);
    assert.match(data, /faceHeight: 576/);
    assert.match(data, /width: 2088/);
    assert.match(data, /height: 576/);
  });
});
