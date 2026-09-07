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

describe('Colombia BanRep 5 pesos oro 1960 TDLR specimen', () => {
  it('is a distinct BanRep specimen with all-zero serials, not the 1983 2.000 pesos', () => {
    const note = noteById('5-pesos-oro-1960');
    const other = noteById('2000-pesos-oro-1983');
    assert.ok(note);
    assert.ok(other);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 405s');
    assert.equal(note.serial, '00000000');
    assert.notEqual(note.serial, other.serial);
    assert.equal(notePieces(note).length, 1);
    assert.match(note.kicker.es, /Espécimen/);
    assert.match(note.kicker.en, /specimen/i);
    assert.match(note.description.es, /BG# 125/);
    assert.match(note.description.en, /BG# 125/);
    assert.doesNotMatch(note.description.es, /murallas de Cartagena/);
    assert.doesNotMatch(note.description.es, /2\.000 pesos oro de 1983/);
    assert.doesNotMatch(note.description.en, /walls of Cartagena/);
    assert.doesNotMatch(note.description.en, /1983 2,000 pesos/);
    assert.doesNotMatch(note.printed.es, /30\.000\.000 de especímenes/);
    assert.match(note.printed.es, /no da una tirada de especímenes/);
    assert.match(note.scarcity.es, /no da tirada de especímenes/);
    assert.match(note.scarcity.es, /82,6 millones|no registra 5 pesos|tabla BanRep de 1960|denominación-año/);
    assert.equal(additions.some((row) => row.id === 'co-1960-5-pesos-oro-specimen-00000000'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1960-5-pesos-oro-p405s'), true);
  });

  it('lists the 1960 specimen on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /espécimen de 5 pesos oro de 1960 \(Pick 405s\)/);
    assert.match(chapter.body.en, /1960 5 pesos oro specimen \(Pick 405s\)/);
    assert.match(seriesCopy.es.intro.join(' '), /espécimen de 5 pesos oro de 1960 \(Pick 405s\)/);
    assert.match(seriesCopy.en.intro.join(' '), /1960 5 pesos oro specimen \(Pick 405s\)/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const specimen = cards.filter((card) => card.note.id === '5-pesos-oro-1960');
    assert.equal(specimen.length, 1);
    assert.equal(specimen[0].piece.serial, '00000000');
    assert.equal(
      seriesCardHref(specimen[0].note, specimen[0].piece, 'es'),
      '/coleccion/colombia/5-pesos-oro-1960/',
    );
    assert.equal(
      seriesCardHref(specimen[0].note, specimen[0].piece, 'en'),
      '/en/collection/colombia/5-pesos-oro-1960/',
    );
  });
});

describe('Colombia BanRep 5 pesos oro 1980 IBB circulation', () => {
  it('is a distinct Cartagena type with ordinary serial 94658896, not the 1960 Pick 405s specimen', () => {
    const note = noteById('5-pesos-oro-1980');
    const specimen = noteById('5-pesos-oro-1960');
    assert.ok(note);
    assert.ok(specimen);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 406f · TBB B949p');
    assert.equal(note.serial, '94658896');
    assert.notEqual(note.serial, specimen.serial);
    assert.equal(notePieces(note).length, 1);
    assert.match(note.printed.es, /p\. 60/);
    assert.match(note.printed.en, /p\. 60/);
    assert.match(note.description.es, /94658896/);
    assert.match(note.description.en, /94658896/);
    assert.match(note.description.es, /murallas de Cartagena/);
    assert.match(note.description.en, /walls of Cartagena/);
    assert.match(note.description.es, /Rafael Gama Quijano/);
    assert.match(note.description.en, /Rafael Gama Quijano/);
    assert.match(note.description.es, /No hay asterisco entre GERENTE y SECRETARIO/);
    assert.match(note.description.en, /There is no asterisk between GERENTE and SECRETARIO/);
    assert.doesNotMatch(note.printed.es, /49,5 millones de ejemplares para el 1/);
    assert.match(note.printed.es, /50\.000\.000 de ejemplares/);
    assert.match(note.printed.es, /49,5 millones de piezas de 5 pesos/);
    assert.match(note.printed.es, /denominación-año/);
    assert.match(note.scarcity.es, /no inventa una tirada/);
    assert.doesNotMatch(note.description.es, /Decreto 188/);
    assert.equal(additions.some((row) => row.id === 'co-1980-5-pesos-oro-94658896'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1980-5-pesos-oro-p406f-b949p'), true);
  });

  it('lists the 1980 5 pesos oro on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /5 pesos oro de 1980 \(Pick 406f \/ TBB B949p\), serial 94658896/);
    assert.match(chapter.body.en, /1980 5 pesos oro \(Pick 406f \/ TBB B949p\), serial 94658896/);
    assert.match(seriesCopy.es.intro.join(' '), /5 pesos oro de 1980 \(Pick 406f \/ TBB B949p\), serial 94658896/);
    assert.match(seriesCopy.en.intro.join(' '), /1980 5 pesos oro \(Pick 406f \/ TBB B949p\), serial 94658896/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const holding = cards.filter((card) => card.note.id === '5-pesos-oro-1980');
    assert.equal(holding.length, 1);
    assert.equal(holding[0].piece.serial, '94658896');
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'es'),
      '/coleccion/colombia/5-pesos-oro-1980/',
    );
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'en'),
      '/en/collection/colombia/5-pesos-oro-1980/',
    );
  });
});
