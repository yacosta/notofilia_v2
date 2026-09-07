import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import identifyIndex from '../data/identify-index.json' with { type: 'json' };
import { handleIdentifyRequest } from './identify.ts';

describe('identify API', () => {
  it('rejects non-POST methods', async () => {
    const response = await handleIdentifyRequest(new Request('https://notofilia.com/api/identify'), {});
    assert.equal(response.status, 405);
  });

  it('rejects invalid hashes', async () => {
    const response = await handleIdentifyRequest(
      new Request('https://notofilia.com/api/identify', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ hash: 'nope', locale: 'es' }),
      }),
      {},
    );
    assert.equal(response.status, 400);
  });

  it('returns ranked matches for an indexed face', async () => {
    const sample = identifyIndex.faces[0];
    assert.ok(sample);
    const response = await handleIdentifyRequest(
      new Request('https://notofilia.com/api/identify', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ hash: sample.hash, locale: 'es', topK: 3 }),
      }),
      {},
    );
    assert.equal(response.status, 200);
    const body = await response.json();
    assert.equal(body.algorithm, 'dhash-9x8');
    assert.ok(body.indexedFaces >= 100);
    assert.ok(Array.isArray(body.matches));
    assert.ok(body.matches.length >= 1);
    assert.equal(body.matches[0].id, sample.pieceId);
  });
});
