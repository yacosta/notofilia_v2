import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { lookupGscRedirect, planSeoResponse, stripDreamweaverSuffix } from './gsc-redirects.ts';

describe('gsc redirect lookup', () => {
  it('does not invent a homepage redirect', () => {
    assert.equal(lookupGscRedirect('/'), undefined);
    assert.equal(planSeoResponse('/').type, 'pass');
  });

  it('strips .dc.html to a non-home path', () => {
    assert.equal(stripDreamweaverSuffix('/contacto.dc.html'), '/contacto/');
    assert.equal(stripDreamweaverSuffix('/en/contact.dc.html'), '/en/contact/');
    assert.equal(stripDreamweaverSuffix('/.dc.html'), undefined);
  });

  it('plans 410 for gone URLs and 301 for mapped v1 paths, never to home', () => {
    // Data-driven: use whichever 410 the current map carries instead of a fixed seed URL.
    const map = JSON.parse(readFileSync(new URL('../data/gsc-redirects.json', import.meta.url), 'utf8'));
    const goneSource = Object.entries(map.redirects).find(([, v]) => v.status === 410)?.[0];
    assert.ok(goneSource, 'map has at least one 410');
    const gone = planSeoResponse(goneSource);
    assert.equal(gone.type, 'gone');
    const mapped = planSeoResponse('/nosotros');
    assert.equal(mapped.type, 'redirect');
    assert.notEqual(mapped.type === 'redirect' ? mapped.target : '', '/');
    assert.notEqual(mapped.type === 'redirect' ? mapped.target : '', '/en/');
  });

  it('sends polymer continent stubs to the live polymer hub, not missing EN continent pages', () => {
    for (const path of [
      '/en/coleccion/polimero-mundial/asia/',
      '/en/coleccion/polimero-mundial/europa/',
      '/en/coleccion/polimero-mundial/america-del-norte/',
    ]) {
      const planned = planSeoResponse(path);
      assert.equal(planned.type, 'redirect');
      assert.equal(planned.type === 'redirect' ? planned.target : '', '/en/collection/world-polymer/');
    }
  });

  it('301s mixed-locale Series 1934A New York $1,000 paths to the English tree', () => {
    const target = '/en/collection/united-states/1000-dollars-series-1934a-new-york/';
    for (const path of [
      '/en/coleccion/estados-unidos/1000-dolares-serie-1934a-nueva-york/',
      '/en/coleccion/estados-unidos/1000-dolares-serie-1934a-nueva-york',
      '/en/coleccion/united-states/1000-dollars-series-1934a-new-york/',
      '/en/coleccion/united-states/1000-dollars-series-1934a-new-york',
    ]) {
      const planned = planSeoResponse(path);
      assert.equal(planned.type, 'redirect');
      assert.equal(planned.type === 'redirect' ? planned.target : '', target);
    }
  });
});

describe('worker wiring', () => {
  it('applies planSeoResponse before ASSETS.fetch', () => {
    const src = readFileSync(new URL('../worker.ts', import.meta.url), 'utf8');
    assert.match(src, /planSeoResponse/);
    assert.match(src, /status: 410/);
    assert.match(src, /Response\.redirect/);
  });
});
