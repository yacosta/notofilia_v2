import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { lookupGscRedirect, stripDreamweaverSuffix } from './gsc-redirects.ts';

describe('gsc redirect lookup', () => {
  it('does not invent a homepage redirect', () => {
    const hit = lookupGscRedirect('/');
    assert.equal(hit, undefined);
  });

  it('strips .dc.html to a non-home path', () => {
    assert.equal(stripDreamweaverSuffix('/contacto.dc.html'), '/contacto/');
    assert.equal(stripDreamweaverSuffix('/en/contact.dc.html'), '/en/contact/');
    assert.equal(stripDreamweaverSuffix('/.dc.html'), undefined);
  });
});
