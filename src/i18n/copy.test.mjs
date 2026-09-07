import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { copy } from './copy.ts';
import { readFileSync } from 'node:fs';

function words(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

describe('collection hub copy length', () => {
  it('keeps English and Spanish hub intros at about 150 words', () => {
    const es = `${copy.es.collectionHubLead} ${copy.es.collectionHubBody}`;
    const en = `${copy.en.collectionHubLead} ${copy.en.collectionHubBody}`;
    assert.ok(words(es) >= 150, `es words ${words(es)}`);
    assert.ok(words(en) >= 150, `en words ${words(en)}`);
  });

  it('does not put hub sentences in the component', () => {
    const src = readFileSync(new URL('../components/CollectionHubPage.astro', import.meta.url), 'utf8');
    assert.match(src, /t\.collectionHubLead/);
    assert.doesNotMatch(src, /¿Qué más\?/);
  });
});
