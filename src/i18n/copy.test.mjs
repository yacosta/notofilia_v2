import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

function words(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function quotedFields(source, key) {
  const re = new RegExp(`${key}:\\s*'([\\s\\S]*?)'`, 'g');
  return [...source.matchAll(re)].map((m) => m[1]);
}

describe('collection hub copy length', () => {
  it('keeps English and Spanish hub intros at about 150 words', () => {
    const src = readFileSync(new URL('./copy.ts', import.meta.url), 'utf8');
    const leads = quotedFields(src, 'collectionHubLead');
    const bodies = quotedFields(src, 'collectionHubBody');
    assert.equal(leads.length, 2);
    assert.equal(bodies.length, 2);
    const es = `${leads[0]} ${bodies[0]}`;
    const en = `${leads[1]} ${bodies[1]}`;
    assert.ok(words(es) >= 150, `es words ${words(es)}`);
    assert.ok(words(en) >= 150, `en words ${words(en)}`);
  });

  it('does not put hub sentences in the component', () => {
    const src = readFileSync(new URL('../components/CollectionHubPage.astro', import.meta.url), 'utf8');
    assert.match(src, /t\.collectionHubLead/);
    assert.doesNotMatch(src, /¿Qué más\?/);
  });
});
