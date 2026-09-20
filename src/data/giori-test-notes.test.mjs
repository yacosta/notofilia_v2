import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  GIORI_TEST_NOTES_PATH,
  GIORI_TEST_NOTES_PATH_EN,
  gioriTestNotesCopy,
  gioriTestNotesDedicatedSlugs,
  gioriTestNotesHoldingHref,
  gioriTestNotesPath,
} from './giori-test-notes.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/GioriTestNotesPage.astro', import.meta.url),
  'utf8',
);
const navSource = readFileSync(new URL('../lib/mega-nav.ts', import.meta.url), 'utf8');
const bodyEs = readFileSync(new URL('./giori-test-notes/es.html', import.meta.url), 'utf8');
const bodyEn = readFileSync(new URL('./giori-test-notes/en.html', import.meta.url), 'utf8');

describe('Giori test notes resource page', () => {
  it('uses a bilingual dedicated pair under notafilia, not the blog', () => {
    assert.equal(gioriTestNotesPath('es'), GIORI_TEST_NOTES_PATH);
    assert.equal(gioriTestNotesPath('en'), `/en${GIORI_TEST_NOTES_PATH_EN}`);
    assert.deepEqual([...gioriTestNotesDedicatedSlugs], [
      'coleccion/notafilia/moneda-prueba-giori',
      'collection/notaphily/giori-test-currency',
    ]);
    assert.doesNotMatch(GIORI_TEST_NOTES_PATH, /\/blog\//);
    assert.match(navSource, /id: 'moneda-prueba-giori'/);
    assert.match(navSource, /href: GIORI_TEST_NOTES_PATH/);
  });

  it('keeps Article JSON-LD, a skip landmark, and the published Lincoln Memorial holding only', () => {
    assert.match(pageSource, /@type': 'Article'/);
    assert.match(pageSource, /id="main-content"/);
    assert.match(pageSource, /reviewedBy/);
    assert.equal(
      gioriTestNotesHoldingHref,
      '/coleccion/estados-unidos/miscelaneos/billete-prueba-giori-lincoln-memorial/',
    );
    assert.match(bodyEs, /Lincoln Memorial/);
    assert.match(bodyEn, /Lincoln Memorial/);
    assert.doesNotMatch(bodyEs, /serial [A-Z0-9]{6,}/);
    assert.match(gioriTestNotesCopy.es.marketNote, /no hay oferta/);
    assert.match(gioriTestNotesCopy.en.marketNote, /not an offer/);
  });
});
