import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  ABOUT_PORTRAIT,
  ABOUT_PORTRAIT_HEIGHT,
  ABOUT_PORTRAIT_WIDTH,
  aboutCopy,
  aboutPath,
} from './about.ts';
import { localizePath } from '../lib/locale-paths.ts';

const pageSource = readFileSync(new URL('../components/AboutPage.astro', import.meta.url), 'utf8');

describe('about page copy and paths', () => {
  it('uses bilingual dedicated routes', () => {
    assert.equal(aboutPath('es'), '/acerca-de/');
    assert.equal(aboutPath('en'), '/en/about/');
    assert.equal(localizePath('/acerca-de/', 'en'), '/en/about/');
  });

  it('wraps the pull quote in locale typographic quotes and accents the last sentence', () => {
    assert.equal(
      aboutCopy.es.pullQuote,
      '«Cada una de estas piezas fue dinero alguna vez. Pasó por mercados, bolsillos, guerras, malas economías y personas que cambiaron la historia, y sobrevivió lo suficiente para llegar a mis manos. ',
    );
    assert.equal(
      aboutCopy.es.pullQuoteAccent,
      'Esa es la parte que casi todo el mundo pasa por alto: la historia.»',
    );
    assert.equal(
      aboutCopy.en.pullQuote,
      '“Every one of these pieces was money once. It passed through markets, pockets, wars, bad economies, and people who changed history, and it survived long enough to end up in my hands. ',
    );
    assert.equal(
      aboutCopy.en.pullQuoteAccent,
      'That’s the part most people miss: the history.”',
    );
    assert.match(pageSource, /\{t\.pullQuote\}/);
    assert.match(pageSource, /class="text-gold-light">\{t\.pullQuoteAccent\}/);
    assert.doesNotMatch(pageSource, /personas que cambiaron la historia/);
  });

  it('keeps the extractable entity statement without inventing a founding year', () => {
    assert.equal(
      aboutCopy.es.entityStatement,
      'Notofilia es una colección privada y catálogo bilingüe de billetes y monedas históricos, fundado por Yezid Acosta.',
    );
    assert.equal(
      aboutCopy.en.entityStatement,
      'Notofilia is a private collection and bilingual catalogue of historical banknotes and coins, founded by Yezid Acosta.',
    );
    assert.doesNotMatch(aboutCopy.es.entityStatement, /en 20\d{2}/);
    assert.doesNotMatch(aboutCopy.en.entityStatement, /in 20\d{2}/);
    assert.match(pageSource, /\{t\.entityStatement\}/);
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

  it('uses the museum-case type and palette, not the paper-red mock', () => {
    assert.match(pageSource, /font-display/);
    assert.match(pageSource, /text-gold-light/);
    assert.match(pageSource, /text-cream/);
    assert.doesNotMatch(pageSource, /personMonogram/);
    assert.doesNotMatch(pageSource, /bg-alert/);
    assert.doesNotMatch(pageSource, /text-alert-ink/);
    assert.doesNotMatch(pageSource, /Archivo/);
    assert.doesNotMatch(pageSource, /curador\.webp/);
  });

  it('serves the collector portrait through cfImage and bilingual alts', () => {
    assert.equal(ABOUT_PORTRAIT, '/uploads/yezid-acosta.webp');
    assert.equal(ABOUT_PORTRAIT_WIDTH, 1440);
    assert.equal(ABOUT_PORTRAIT_HEIGHT, 1440);
    assert.equal(aboutCopy.es.portraitAlt, 'Retrato de Yezid Acosta');
    assert.equal(aboutCopy.en.portraitAlt, 'Portrait of Yezid Acosta');
    assert.ok(existsSync(new URL('../../public/uploads/yezid-acosta.webp', import.meta.url)));
    assert.match(pageSource, /cfImage\(ABOUT_PORTRAIT/);
    assert.match(pageSource, /imageSrcset\(ABOUT_PORTRAIT/);
    assert.match(pageSource, /alt=\{t\.portraitAlt\}/);
    assert.match(pageSource, /width=\{ABOUT_PORTRAIT_WIDTH\}/);
    assert.match(pageSource, /height=\{ABOUT_PORTRAIT_HEIGHT\}/);
    const imgTags = pageSource.match(/<img\b/g) ?? [];
    assert.equal(imgTags.length, 1);
    assert.doesNotMatch(pageSource, /curador\.webp/);
    assert.doesNotMatch(pageSource, /aria-label=\{t\.portraitAlt\}/);
  });
});
