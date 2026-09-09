import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { handleIdentifyRequest } from './identify.ts';

describe('identify API', () => {
  it('returns Gone while identify is unpublished', async () => {
    const response = await handleIdentifyRequest(
      new Request('https://notofilia.com/api/identify', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ hash: 'ffffffffffffffff', locale: 'es' }),
      }),
    );
    assert.equal(response.status, 410);
    const body = await response.json();
    assert.equal(body.code, 'identify_unpublished');
  });

  it('rejects non-POST with Gone as well when unpublished', async () => {
    const response = await handleIdentifyRequest(new Request('https://notofilia.com/api/identify'));
    assert.equal(response.status, 410);
  });
});
