import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { INDEXNOW_KEY, INDEXNOW_KEY_PATH, indexNowKeyLocation, indexNowPayload } from './indexnow.ts';

describe('IndexNow key file', () => {
  it('publishes a hex key at the documented public path', () => {
    assert.match(INDEXNOW_KEY, /^[a-f0-9]{32}$/);
    assert.equal(INDEXNOW_KEY_PATH, `/${INDEXNOW_KEY}.txt`);
    const file = new URL(`../../public${INDEXNOW_KEY_PATH}`, import.meta.url);
    assert.ok(existsSync(file));
    assert.equal(readFileSync(file, 'utf8').trim(), INDEXNOW_KEY);
    assert.equal(indexNowKeyLocation(), `https://notofilia.com${INDEXNOW_KEY_PATH}`);
    const payload = indexNowPayload(['https://notofilia.com/']);
    assert.equal(payload.host, 'notofilia.com');
    assert.equal(payload.key, INDEXNOW_KEY);
    assert.deepEqual(payload.urlList, ['https://notofilia.com/']);
  });
});
