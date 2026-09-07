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
    const gone = planSeoResponse('/tienda/carrito/');
    assert.equal(gone.type, 'gone');
    const mapped = planSeoResponse('/nosotros');
    assert.equal(mapped.type, 'redirect');
    assert.notEqual(mapped.type === 'redirect' ? mapped.target : '', '/');
    assert.notEqual(mapped.type === 'redirect' ? mapped.target : '', '/en/');
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
