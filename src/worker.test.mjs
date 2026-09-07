import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import worker from './worker.ts';

function assets(pages = {}) {
  return {
    async fetch(request) {
      const url = typeof request === 'string' ? request : request.url;
      const path = new URL(url).pathname;
      if (pages[path]) {
        return new Response('<html>ok</html>', { status: 200 });
      }
      if (path === '/404' || path === '/en/404/' || path === '/404/') {
        return new Response('<html>not found</html>', { status: 200, headers: { 'content-type': 'text/html' } });
      }
      return new Response('missing', { status: 404 });
    },
  };
}

describe('worker SEO redirects', () => {
  it('returns HTTP 404 for an unknown English path', async () => {
    const response = await worker.fetch(new Request('https://notofilia.com/en/no-such-page/'), {
      ASSETS: assets(),
    });
    assert.equal(response.status, 404);
  });

  it('301s a Dreamweaver suffix only when the stripped path exists', async () => {
    const response = await worker.fetch(new Request('https://notofilia.com/contacto.dc.html'), {
      ASSETS: assets({ '/contacto/': true }),
    });
    assert.equal(response.status, 301);
    assert.equal(new URL(response.headers.get('location')).pathname, '/contacto/');
  });

  it('returns 410 for a gone GSC URL and never redirects it home', async () => {
    const response = await worker.fetch(new Request('https://notofilia.com/tienda/carrito/'), {
      ASSETS: assets(),
    });
    assert.equal(response.status, 410);
    assert.equal(response.headers.get('location'), null);
  });

  it('does not 301 a Dreamweaver suffix to home when the stripped path is missing', async () => {
    const response = await worker.fetch(new Request('https://notofilia.com/no-existe.dc.html'), {
      ASSETS: assets(),
    });
    assert.notEqual(response.status, 301);
    assert.equal(response.status, 404);
  });
});
