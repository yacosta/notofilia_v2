import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { aboutCopy, aboutPath } from './about.ts';
import { localizePath } from '../lib/locale-paths.ts';

const pageSource = readFileSync(new URL('../components/AboutPage.astro', import.meta.url), 'utf8');

describe('about page copy and paths', () => {
  it('uses bilingual dedicated routes', () => {
    assert.equal(aboutPath('es'), '/acerca-de/');
    assert.equal(aboutPath('en'), '/en/about/');
    assert.equal(localizePath('/acerca-de/', 'en'), '/en/about/');
  });

  it('keeps a stacked display title and hero lead in both locales', () => {
    assert.deepEqual([...aboutCopy.es.titleLines], ['Mirar', 'el dinero', 'dos veces']);
    assert.deepEqual([...aboutCopy.en.titleLines], ['Look', 'at money', 'twice']);
    assert.match(aboutCopy.es.lead, /toca dinero/);
    assert.match(aboutCopy.en.lead, /touch money/);
  });

  it('keeps the cigar brand link only in Spanish', () => {
    assert.equal(aboutCopy.es.bioBrandAfter, '.');
    assert.equal(aboutCopy.es.brandLabel, 'mi propia marca');
    assert.equal(aboutCopy.en.bioBrandAfter, '');
    assert.match(aboutCopy.en.bioBrandBefore, /children’s book/);
  });

  it('wires live collection stats and contact/collection CTAs without statsLine', () => {
    assert.match(pageSource, /collectionStats\(\)/);
    assert.match(pageSource, /localizePath\('\/coleccion\/', locale\)/);
    assert.match(pageSource, /contactPath\(locale\)/);
    assert.doesNotMatch(pageSource, /statsLine\(/);
    assert.match(pageSource, /id="main-content"/);
  });

  it('uses a live-token color-block hero, not Archivo or a fabricated portrait', () => {
    assert.match(pageSource, /bg-alert/);
    assert.match(pageSource, /text-alert-ink/);
    assert.match(pageSource, /font-display/);
    assert.match(pageSource, /personMonogram/);
    assert.doesNotMatch(pageSource, /Archivo/);
    assert.doesNotMatch(pageSource, /curador\.webp/);
  });
});
