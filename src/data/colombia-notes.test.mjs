import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { additions, catalogAdditions } from './holdings.ts';
import { seriesCopy, colombiaChapters } from './colombia.ts';
import {
  noteById,
  notePieces,
  noteSerialLine,
  seriesCardHref,
  seriesCardsForChapter,
} from './colombia-notes.ts';

const notePageSource = readFileSync(
  new URL('../components/catalog/ColombiaNotePage.astro', import.meta.url),
  'utf8',
);

describe('Colombia Emberá 1994 series card grouping', () => {
  it('keeps two physical pieces and one type-level serial line', () => {
    const note = noteById('10000-pesos-1994');
    assert.ok(note);
    const pieces = notePieces(note);
    assert.equal(pieces.length, 2);
    assert.equal(pieces[0].serial, '00113227');
    assert.equal(pieces[1].serial, '00249902');
    assert.equal(noteSerialLine(note), '00113227 / 00249902');
    assert.equal(
      additions.filter((row) => row.id.startsWith('co-1994-10000-pesos-')).length,
      2,
    );
    assert.equal(
      catalogAdditions.filter((row) => row.id === 'co-1994-10000-pesos-p437a-b980az').length,
      1,
    );
  });

  it('emits one BanRep series card for Emberá and two for dated 2-pesos pieces', () => {
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const embera = cards.filter((card) => card.note.id === '10000-pesos-1994');
    assert.equal(embera.length, 1);
    assert.equal(embera[0].piece.serial, '00113227 / 00249902');
    assert.equal(embera[0].piece.title.es, '10.000 pesos · reposición estrella · 1994');
    assert.equal(seriesCardHref(embera[0].note, embera[0].piece, 'es'), '/coleccion/colombia/10000-pesos-1994/');
    assert.equal(
      seriesCardHref(embera[0].note, embera[0].piece, 'en'),
      '/en/collection/colombia/10000-pesos-1994/',
    );

    const twoPesos = cards.filter((card) => card.note.id === '2-pesos-oro-1944');
    assert.equal(twoPesos.length, 2);
    assert.equal(twoPesos[0].piece.id, '2-pesos-oro-1944');
    assert.equal(twoPesos[1].piece.id, '2-pesos-oro-1955');
    assert.match(seriesCardHref(twoPesos[0].note, twoPesos[0].piece, 'es'), /#2-pesos-oro-1944$/);
    assert.match(seriesCardHref(twoPesos[1].note, twoPesos[1].piece, 'es'), /#2-pesos-oro-1955$/);
  });

  it('shares one facts block and stacked image ids on the Emberá piece page', () => {
    assert.match(notePageSource, /shareType \? \(/);
    assert.match(notePageSource, /id="facts-heading"/);
    assert.match(notePageSource, /t\.serialsLabel/);
    assert.match(notePageSource, /id=\{piece\.id\}/);
    assert.match(notePageSource, /t\.exampleHeading\} \{piece\.serial\}/);
    assert.doesNotMatch(notePageSource, /shareType && index > 0 && 'mt-14 border-t/);
  });

  it('describes one Emberá ficha with two serials in BanRep chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /una ficha con seriales estrella 00113227 y 00249902/);
    assert.match(chapter.body.en, /one record with star serials 00113227 and 00249902/);
    assert.doesNotMatch(chapter.body.es, /dos reposiciones estrella/);
    assert.doesNotMatch(chapter.body.en, /star replacements 00113227 and 00249902/);
    assert.match(seriesCopy.es.intro.join(' '), /una ficha con seriales estrella 00113227 y 00249902/);
    assert.match(seriesCopy.en.intro.join(' '), /one record with star serials 00113227 and 00249902/);
  });
});
