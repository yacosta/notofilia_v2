import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { SECURITY_HEADERS, applySecurityHeaders } from './security-headers.ts';
import { cfImageFallbackPath } from './cf-image-path.ts';

describe('security headers', () => {
  it('sets the report-only policy and does not enforce CSP', () => {
    const response = applySecurityHeaders(new Response('ok', { status: 200, headers: { 'cache-control': 'no-store' } }));
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      assert.equal(response.headers.get(name), value);
    }
    assert.equal(response.headers.get('content-security-policy'), null);
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.equal(response.headers.get('cross-origin-resource-policy'), null);
  });

  it('matches public/_headers', () => {
    const file = readFileSync(new URL('../../public/_headers', import.meta.url), 'utf8');
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      assert.ok(file.includes(`${name}: ${value}`), name);
    }
  });
});

describe('image resize fallback', () => {
  it('keeps a same-origin asset path and drops protocol-relative or parent paths', () => {
    assert.equal(cfImageFallbackPath('/cdn-cgi/image/width=800/images/catalog/note.jpg'), '/images/catalog/note.jpg');
    assert.equal(cfImageFallbackPath('/cdn-cgi/image/width=800'), null);
    assert.equal(cfImageFallbackPath('/cdn-cgi/image/width=800//evil.example/x.jpg'), null);
    assert.equal(cfImageFallbackPath('/cdn-cgi/image/width=800/../secret.jpg'), null);
  });
});
