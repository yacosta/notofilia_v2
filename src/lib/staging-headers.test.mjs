import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { stagingRobotsHeaders } from './staging-headers.ts';

describe('staging robots headers', () => {
  it('noindexes workers.dev hosts and leaves production alone', () => {
    assert.deepEqual(stagingRobotsHeaders('notofilia-v2.yacosta.workers.dev'), { 'X-Robots-Tag': 'noindex' });
    assert.deepEqual(stagingRobotsHeaders('notofilia.com'), {});
  });
});
