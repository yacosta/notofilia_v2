import assert from 'node:assert/strict';
import { afterEach, describe, it } from 'node:test';
import { handleCommentsRequest, normalizeSlug, normalizeText } from './comments.ts';

function jsonRequest(url, method, body, headers = {}) {
  return new Request(url, {
    method,
    headers: { 'content-type': 'application/json', ...headers },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
}

function createEnv({ secret = 'test-secret', comments = [], inserted = [] } = {}) {
  return {
    TURNSTILE_SECRET_KEY: secret,
    COMMENTS_DB: {
      prepare() {
        return {
          bind(...args) {
            return {
              async all() {
                return { results: comments };
              },
              async run() {
                inserted.push(args);
                return {};
              },
            };
          },
        };
      },
    },
  };
}

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

describe('comments helpers', () => {
  it('accepts hyphenated article slugs', () => {
    assert.equal(normalizeSlug('guia-mylar'), 'guia-mylar');
    assert.equal(normalizeSlug('../evil'), null);
  });

  it('strips control characters from comment text', () => {
    assert.equal(normalizeText('  hola\n\n mundo\u0007  '), 'hola mundo');
  });
});

describe('comments API', () => {
  it('lists approved comments', async () => {
    const env = createEnv({
      comments: [{ id: 1, authorName: 'Ana', body: 'Hola', createdAt: '2026-01-01T00:00:00.000Z' }],
    });
    const response = await handleCommentsRequest(
      new Request('https://notofilia.com/api/comments/guia-mylar'),
      env,
    );
    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.equal(payload.comments.length, 1);
    assert.equal(payload.comments[0].authorName, 'Ana');
  });

  it('rejects a missing Turnstile secret', async () => {
    const env = createEnv({ secret: '' });
    const response = await handleCommentsRequest(
      jsonRequest('https://notofilia.com/api/comments/guia-mylar', 'POST', {
        name: 'Ana',
        comment: 'Buen articulo',
        turnstileToken: 'token',
      }),
      env,
    );
    assert.equal(response.status, 503);
  });

  it('rejects a failed Turnstile siteverify the same way as the old function', async () => {
    const warnings = [];
    const originalWarn = console.warn;
    console.warn = (...args) => warnings.push(args);
    globalThis.fetch = async () =>
      new Response(
        JSON.stringify({
          success: false,
          hostname: 'evil.example',
          action: 'contact',
          'error-codes': ['invalid-input-response'],
        }),
        { status: 200 },
      );

    try {
      const response = await handleCommentsRequest(
        jsonRequest('https://notofilia.com/api/comments/guia-mylar', 'POST', {
          name: 'Ana',
          comment: 'Buen articulo',
          turnstileToken: 'token',
        }),
        createEnv(),
      );
      assert.equal(response.status, 403);
      const payload = await response.json();
      assert.equal(payload.error, 'La verificación de seguridad falló. Inténtalo de nuevo.');
      assert.equal(warnings.length, 1);
      assert.equal(warnings[0][0], 'Rejected Turnstile verification');
    } finally {
      console.warn = originalWarn;
    }
  });

  it('inserts a pending comment after a valid token', async () => {
    const inserted = [];
    globalThis.fetch = async () =>
      new Response(
        JSON.stringify({
          success: true,
          hostname: 'notofilia.com',
          action: 'comment',
        }),
        { status: 200 },
      );

    const response = await handleCommentsRequest(
      jsonRequest(
        'https://notofilia.com/api/comments/guia-mylar',
        'POST',
        {
          name: 'Ana',
          comment: 'Buen articulo',
          turnstileToken: 'token',
        },
        { 'CF-Connecting-IP': '203.0.113.10' },
      ),
      createEnv({ inserted }),
    );
    assert.equal(response.status, 202);
    assert.deepEqual(inserted[0], ['guia-mylar', 'Ana', 'Buen articulo']);
  });
});
