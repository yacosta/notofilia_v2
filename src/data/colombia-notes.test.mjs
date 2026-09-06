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

describe('Colombia MEN 15 centavos student-transport ticket', () => {
  it('is a tiquetes-chapter holding with no serial and no invented Pick', () => {
    const note = noteById('tiquete-estudiantil-15-centavos');
    assert.ok(note);
    assert.equal(note.chapterId, 'tiquetes');
    assert.equal(note.serial, '—');
    assert.match(note.no_serial_reason ?? '', /no serial/i);
    assert.equal(note.pick, 'MEN · 15¢');
    const pieces = notePieces(note);
    assert.equal(pieces.length, 2);
    assert.equal(pieces[0].id, 'tiquete-estudiantil-15-centavos-verde');
    assert.equal(pieces[1].id, 'tiquete-estudiantil-15-centavos-rojo');
    assert.equal(pieces[0].pick, 'MEN · 15¢ verde');
    assert.equal(pieces[1].pick, 'MEN · 15¢ rojo');
    assert.equal(pieces[0].serial, '—');
    assert.equal(pieces[1].serial, '—');
    assert.doesNotMatch(note.description.es, /Decreto 188 de 1969/);
    assert.doesNotMatch(note.description.en, /Decree 188 of 1969/);
    assert.doesNotMatch(pieces[1].description.es, /Decreto 188 de 1969/);
    assert.match(pieces[1].description.es, /EXTERNADO NACIONAL/);
    assert.match(pieces[1].description.es, /Pick 390/);
    assert.match(note.scarcity.es, /tinta roja/);
    assert.match(note.scarcity.en, /red/);
    assert.equal(additions.some((row) => row.id === 'co-men-tiquete-estudiantil-15-centavos-verde'), true);
    assert.equal(additions.some((row) => row.id === 'co-men-tiquete-estudiantil-15-centavos-rojo'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-men-tiquete-estudiantil-15c-verde'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-men-tiquete-estudiantil-15c-rojo'), true);
  });

  it('lists green and red on one page and as two series cards', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'tiquetes');
    assert.ok(chapter);
    assert.match(chapter.body.es, /Esta vitrina no es un billete del Banco de la República ni de la banca libre/);
    assert.match(chapter.body.en, /This case is not a Banco de la República banknote, nor a free-banking banknote/);
    assert.doesNotMatch(chapter.body.es, /Esta vitrina no es papel del Banco/);
    assert.match(chapter.body.es, /tinta verde y la variedad en tinta roja/);
    const cards = seriesCardsForChapter('tiquetes');
    assert.equal(cards.length, 2);
    assert.equal(cards[0].note.id, 'tiquete-estudiantil-15-centavos');
    assert.equal(cards[0].piece.id, 'tiquete-estudiantil-15-centavos-verde');
    assert.equal(cards[1].piece.id, 'tiquete-estudiantil-15-centavos-rojo');
    assert.equal(
      seriesCardHref(cards[0].note, cards[0].piece, 'es'),
      '/coleccion/colombia/tiquete-estudiantil-15-centavos/#tiquete-estudiantil-15-centavos-verde',
    );
    assert.equal(
      seriesCardHref(cards[1].note, cards[1].piece, 'es'),
      '/coleccion/colombia/tiquete-estudiantil-15-centavos/#tiquete-estudiantil-15-centavos-rojo',
    );
    assert.equal(
      seriesCardHref(cards[0].note, cards[0].piece, 'en'),
      '/en/collection/colombia/tiquete-estudiantil-15-centavos/#tiquete-estudiantil-15-centavos-verde',
    );
    assert.match(seriesCopy.es.intro.join(' '), /tinta verde y en tinta roja/);
    assert.match(seriesCopy.en.intro.join(' '), /in green ink and in red ink/);
  });
});
