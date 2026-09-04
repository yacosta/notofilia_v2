import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { glossaryTermBySlug, glossaryTerms } from './glossary.ts';

const added = [
  'spark',
  'plancheta',
  'encapsulado',
  'casi-sin-circular-au',
  'numeracion-binaria',
  'ngc',
  'peso-oro',
  'schwan',
  'banknote-book',
  'offset',
  'gulden',
  'sucre',
  'ducado',
  'yuan-renminbi',
  'jiaozi',
  'libra',
  'dolar',
  'euro',
  'coscoja',
  'libranza',
  'numeracion-repetidor',
  'foil',
  'guardian',
  'bimetalica',
  'gem-uncirculated',
  'choice-uncirculated',
  'details-ngc',
  'remainder',
  'scrip',
  'haxby',
  'criswell',
  'uniface',
  'letras-de-credito',
  'nature-print',
  'handstamp',
  'grayback',
];

describe('glossary catalogue terms', () => {
  it('keeps unique slugs and ids, and every seeAlso target exists', () => {
    const slugs = glossaryTerms.map((term) => term.slug);
    const ids = glossaryTerms.map((term) => term.id);
    assert.equal(new Set(slugs).size, slugs.length);
    assert.equal(new Set(ids).size, ids.length);
    for (const term of glossaryTerms) {
      assert.ok(term.definition.es.length > 20, term.slug);
      assert.ok(term.definition.en.length > 20, term.slug);
      for (const related of term.seeAlso) {
        assert.ok(glossaryTermBySlug(related), `${term.slug} -> ${related}`);
      }
    }
  });

  it('includes the terms used in published catalogue copy', () => {
    for (const slug of added) {
      assert.ok(glossaryTermBySlug(slug), slug);
    }
    assert.equal(glossaryTerms.length, 147);
  });
});
