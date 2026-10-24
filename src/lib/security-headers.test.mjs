import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { SECURITY_HEADERS, applySecurityHeaders } from './security-headers.ts';
import { cfImageFallbackPath, cfImageFallbackUrl } from './cf-image-path.ts';

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
    assert.equal(
      cfImageFallbackUrl(
        '/cdn-cgi/image/width=480,format=avif,quality=75/images/catalog/colombia/colombia-manzano-farming-co-10-1901-front.png?v=20261006b',
      ),
      '/images/catalog/colombia/colombia-manzano-farming-co-10-1901-front.png?v=20261006b',
    );
    assert.equal(cfImageFallbackUrl('https://notofilia.com/cdn-cgi/image/width=800/images/catalog/note.jpg?v=1'), '/images/catalog/note.jpg?v=1');
    assert.equal(cfImageFallbackUrl('/images/catalog/note.jpg'), null);
  });
});

describe('preview image fallback script', () => {
  it('is a same-origin head script, not an inline handler', () => {
    const layout = readFileSync(new URL('../layouts/Layout.astro', import.meta.url), 'utf8');
    const script = readFileSync(new URL('../../public/cf-image-fallback.js', import.meta.url), 'utf8');
    assert.match(layout, /<script is:inline src="\/cf-image-fallback.js"><\/script>/);
    assert.match(script, /\/cdn-cgi\/image\//);
    assert.match(script, /srcset = ''/);
    assert.match(script, /data-cf-fallback/);
  });
});
