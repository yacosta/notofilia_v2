import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { comparisonCopy, comparisonPath } from './comparison.ts';
import { localizePath } from '../lib/locale-paths.ts';

const pageSource = readFileSync(new URL('../components/ComparisonPage.astro', import.meta.url), 'utf8');

describe('comparison page pair', () => {
  it('uses bilingual dedicated routes and Article JSON-LD', () => {
    assert.equal(comparisonPath('es'), '/notofilia-vs-catalogos-billetes-colombianos/');
    assert.equal(comparisonPath('en'), '/en/notofilia-vs-colombian-banknote-catalogs/');
    assert.equal(
      localizePath('/notofilia-vs-catalogos-billetes-colombianos/', 'en'),
      '/en/notofilia-vs-colombian-banknote-catalogs/',
    );
    assert.match(pageSource, /@type': 'Article'/);
    assert.match(pageSource, /reviewedBy/);
    assert.match(pageSource, /id="main-content"/);
    assert.doesNotMatch(pageSource, /Abrir el catálogo de Colombia/);
    assert.match(comparisonCopy.es.sections[0].paragraphs[0], /colección privada/);
    assert.match(comparisonCopy.en.sections[0].paragraphs[0], /private collection/);
    assert.doesNotMatch(comparisonCopy.es.sections[0].paragraphs[0], /en 20\d{2}/);
  });
});
