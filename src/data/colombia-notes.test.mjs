import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { additions, catalogAdditions } from './holdings.ts';
import { seriesCopy, colombiaChapters } from './colombia.ts';
import { errorNoteCards } from './colombia-errors.ts';
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

describe('Colombia BanRep 1 peso oro 1959 Boyacá type', () => {
  it('is a distinct Pick 398 circulation note, not Pick 380 or Pick 404', () => {
    const note = noteById('1-peso-oro-1959');
    const note1954 = noteById('1-peso-oro-1954');
    const note1973 = noteById('1-peso-oro-1973');
    assert.ok(note);
    assert.ok(note1954);
    assert.ok(note1973);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 398 · TBB B938');
    assert.equal(note.serial, 'A 60870843');
    assert.notEqual(note.serial, note1954.serial);
    assert.notEqual(note.pick, note1954.pick);
    assert.notEqual(note.pick, note1973.pick);
    assert.equal(notePieces(note).length, 1);
    assert.match(note.printed.es, /BG# 043/);
    assert.match(note.printed.es, /9 de agosto de 1959/);
    assert.match(note.printed.es, /no inventa un BG#/);
    assert.match(note.printed.es, /anverso y reverso/);
    assert.match(note.description.es, /WATERLOW & SONS LIMITED/);
    assert.match(note.description.es, /El pie del anverso y el del reverso/);
    assert.match(note.description.es, /Pick 380/);
    assert.match(note.description.es, /Pick 404/);
    assert.doesNotMatch(note.printed.es, /American Bank Note/);
    assert.doesNotMatch(note.printed.en, /American Bank Note/);
    assert.doesNotMatch(note.description.es, /AMERICAN BANK NOTE COMPANY/);
    assert.doesNotMatch(note.description.en, /AMERICAN BANK NOTE COMPANY/);
    assert.doesNotMatch(note.kicker.es, /ABNC/);
    assert.doesNotMatch(note.scarcity.es, /mixt/);
    assert.doesNotMatch(note.scarcity.en, /mixed/);
    assert.doesNotMatch(note.signatures.es, /Luis Ángel Arango/);
    assert.doesNotMatch(note.description.es, /Decreto 188/);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.doesNotMatch(publicCopy, /ESTIMADO/);
    assert.equal(additions.some((row) => row.id === 'co-1959-1-peso-oro-60870843'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1959-1-peso-oro-p398'), true);
  });

  it('lists the 1959 1 peso oro on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /1 peso oro de 1959 \(Pick 398\), serial 60870843/);
    assert.match(chapter.body.en, /1959 1 peso oro \(Pick 398\), serial 60870843/);
    assert.match(seriesCopy.es.intro.join(' '), /1 peso oro de 1959 \(Pick 398\), serial 60870843/);
    assert.match(seriesCopy.en.intro.join(' '), /1959 1 peso oro \(Pick 398\), serial 60870843/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const peso1959 = cards.filter((card) => card.note.id === '1-peso-oro-1959');
    assert.equal(peso1959.length, 1);
    assert.equal(peso1959[0].piece.serial, 'A 60870843');
    assert.equal(
      seriesCardHref(peso1959[0].note, peso1959[0].piece, 'es'),
      '/coleccion/colombia/1-peso-oro-1959/',
    );
    assert.equal(
      seriesCardHref(peso1959[0].note, peso1959[0].piece, 'en'),
      '/en/collection/colombia/1-peso-oro-1959/',
    );
  });
});

describe('Colombia BanRep 1 peso oro 1973 Imprenta de Billetes', () => {
  it('is a distinct Pick 404e circulation note, not the 1945 or 1954 ABNC 1 pesos', () => {
    const note = noteById('1-peso-oro-1973');
    const note1945 = noteById('1-peso-oro-1945');
    const note1954 = noteById('1-peso-oro-1954');
    assert.ok(note);
    assert.ok(note1945);
    assert.ok(note1954);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 404e');
    assert.equal(note.serial, '26530968');
    assert.notEqual(note.serial, note1945.serial);
    assert.notEqual(note.serial, note1954.serial);
    assert.notEqual(note.pick, note1945.pick);
    assert.notEqual(note.pick, note1954.pick);
    assert.equal(notePieces(note).length, 1);
    assert.doesNotMatch(note.printed.es, /BG#\s*\d+/);
    assert.match(note.printed.es, /no publica un BG# adivinado/);
    assert.match(note.printed.es, /68,3 millones/);
    assert.match(note.printed.es, /denominación ese año/);
    assert.match(note.printed.es, /no la tirada de esta fecha/);
    assert.match(note.scarcity.es, /68,3 millones/);
    assert.match(note.scarcity.es, /denominación-año/);
    assert.match(note.description.es, /No hay asterisco/);
    assert.match(note.description.es, /no es reposición/);
    assert.match(note.printed.es, /Cód\. 76/);
    assert.match(note.printed.en, /Cód\. 76/);
    assert.match(note.printed.es, /Cód\. 81/);
    assert.match(note.description.es, /Cód\. 76/);
    assert.match(note.description.en, /Hernández 76/);
    assert.match(note.scarcity.es, /Cód\. 76/);
    assert.match(note.scarcity.es, /No se publican columnas de precios/);
    assert.equal(
      note.sources.some((source) => source.href === 'https://en.numista.com/L100183'),
      true,
    );
    const hernandez = note.sources.find((source) => source.href === 'https://en.numista.com/L100183');
    assert.ok(hernandez);
    assert.ok(hernandez.note);
    assert.match(hernandez.es, /L100183/);
    assert.match(hernandez.en, /L100183/);
    assert.match(hernandez.note.es, /Cód\. 76/);
    assert.match(hernandez.note.en, /Cód\. 76/);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.equal(additions.some((row) => row.id === 'co-1973-1-peso-oro-26530968'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1973-1-peso-oro-p404e'), true);
  });

  it('lists the 1973 1 peso oro on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /1 peso oro de 1973 \(Pick 404e\)/);
    assert.match(chapter.body.en, /1973 1 peso oro \(Pick 404e\)/);
    assert.match(seriesCopy.es.intro.join(' '), /1 peso oro de 1973 \(Pick 404e\)/);
    assert.match(seriesCopy.en.intro.join(' '), /1973 1 peso oro \(Pick 404e\)/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const peso1973 = cards.filter((card) => card.note.id === '1-peso-oro-1973');
    assert.equal(peso1973.length, 1);
    assert.equal(peso1973[0].piece.serial, '26530968');
    assert.equal(
      seriesCardHref(peso1973[0].note, peso1973[0].piece, 'es'),
      '/coleccion/colombia/1-peso-oro-1973/',
    );
    assert.equal(
      seriesCardHref(peso1973[0].note, peso1973[0].piece, 'en'),
      '/en/collection/colombia/1-peso-oro-1973/',
    );
  });
});

describe('Colombia BanRep 1 peso oro 1974 Imprenta de Billetes', () => {
  it('is a distinct Pick 404e circulation note, not the 1973 Imprenta piece or the ABNC 1 pesos', () => {
    const note = noteById('1-peso-oro-1974');
    const note1973 = noteById('1-peso-oro-1973');
    const note1945 = noteById('1-peso-oro-1945');
    const note1954 = noteById('1-peso-oro-1954');
    assert.ok(note);
    assert.ok(note1973);
    assert.ok(note1945);
    assert.ok(note1954);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 404e');
    assert.equal(note.serial, '47550075');
    assert.notEqual(note.serial, note1973.serial);
    assert.notEqual(note.serial, note1945.serial);
    assert.notEqual(note.serial, note1954.serial);
    assert.equal(note.pick, note1973.pick);
    assert.notEqual(note.pick, note1945.pick);
    assert.notEqual(note.path, note1973.path);
    assert.equal(notePieces(note).length, 1);
    assert.doesNotMatch(note.printed.es, /BG#\s*\d+/);
    assert.match(note.printed.es, /no publica un BG# adivinado/);
    assert.match(note.printed.es, /47,2 millones/);
    assert.match(note.printed.es, /denominación ese año/);
    assert.match(note.printed.es, /no la tirada de esta fecha/);
    assert.match(note.printed.es, /26530968/);
    assert.match(note.scarcity.es, /47,2 millones/);
    assert.match(note.scarcity.es, /denominación-año/);
    assert.match(note.description.es, /No hay asterisco/);
    assert.match(note.description.es, /no es reposición/);
    assert.match(note.description.es, /47550075/);
    assert.match(note.printed.es, /Cód\. 79/);
    assert.match(note.printed.en, /Cód\. 79/);
    assert.match(note.printed.es, /Cód\. 81/);
    assert.match(note.description.es, /Cód\. 79/);
    assert.match(note.description.en, /Hernández 79/);
    assert.match(note.scarcity.es, /Cód\. 79/);
    assert.match(note.scarcity.es, /20 %/);
    assert.match(note.scarcity.en, /20%/);
    assert.match(note.scarcity.es, /No se publican columnas de precios/);
    assert.equal(
      note.sources.some((source) => source.href === 'https://en.numista.com/L100183'),
      true,
    );
    const hernandez = note.sources.find((source) => source.href === 'https://en.numista.com/L100183');
    assert.ok(hernandez);
    assert.ok(hernandez.note);
    assert.match(hernandez.es, /L100183/);
    assert.match(hernandez.en, /L100183/);
    assert.match(hernandez.note.es, /Cód\. 79/);
    assert.match(hernandez.note.en, /Cód\. 79/);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.equal(additions.some((row) => row.id === 'co-1974-1-peso-oro-47550075'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1974-1-peso-oro-p404e'), true);
  });

  it('lists the 1974 1 peso oro on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /1 peso oro de 1974 \(Pick 404e\)/);
    assert.match(chapter.body.en, /1974 1 peso oro \(Pick 404e\)/);
    assert.match(seriesCopy.es.intro.join(' '), /1 peso oro de 1974 \(Pick 404e\)/);
    assert.match(seriesCopy.en.intro.join(' '), /1974 1 peso oro \(Pick 404e\)/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const peso1974 = cards.filter((card) => card.note.id === '1-peso-oro-1974');
    assert.equal(peso1974.length, 1);
    assert.equal(peso1974[0].piece.serial, '47550075');
    assert.equal(
      seriesCardHref(peso1974[0].note, peso1974[0].piece, 'es'),
      '/coleccion/colombia/1-peso-oro-1974/',
    );
    assert.equal(
      seriesCardHref(peso1974[0].note, peso1974[0].piece, 'en'),
      '/en/collection/colombia/1-peso-oro-1974/',
    );
  });
});
describe('Colombia BanRep 2 pesos oro 1977 Imprenta de Billetes', () => {
  it('is a distinct Pick 413b circulation note, not the 1944 or 1955 ABNC 2 pesos', () => {
    const note = noteById('2-pesos-oro-1977');
    const note1944 = noteById('2-pesos-oro-1944');
    assert.ok(note);
    assert.ok(note1944);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 413b');
    assert.equal(note.serial, '22214695');
    assert.notEqual(note.serial, note1944.serial);
    assert.notEqual(note.pick, note1944.pick);
    assert.notEqual(note.path, note1944.path);
    assert.equal(notePieces(note).length, 1);
    assert.match(note.printed.es, /BG# 100/);
    assert.match(note.printed.en, /BG# 100/);
    assert.match(note.printed.es, /50\.000\.000/);
    assert.match(note.printed.es, /118,9 millones/);
    assert.match(note.printed.es, /denominación ese año/);
    assert.match(note.printed.es, /no la tirada de esta fecha/);
    assert.match(note.scarcity.es, /118,9 millones/);
    assert.match(note.scarcity.es, /denominación-año/);
    assert.match(note.description.es, /No hay asterisco/);
    assert.match(note.description.es, /no es reposición/);
    assert.match(note.description.es, /22214695/);
    assert.match(note.description.es, /Policarpa/);
    assert.match(note.description.en, /Policarpa/);
    assert.match(note.description.es, /Pick 390b/);
    assert.match(note.printed.es, /Hernández 104/);
    assert.match(note.printed.en, /Hernández 104/);
    assert.match(note.scarcity.es, /No se publican columnas de precios/);
    assert.equal(
      note.sources.some((source) => source.href === 'https://en.numista.com/L100183'),
      true,
    );
    const hernandez = note.sources.find((source) => source.href === 'https://en.numista.com/L100183');
    assert.ok(hernandez);
    assert.ok(hernandez.note);
    assert.match(hernandez.es, /L100183/);
    assert.match(hernandez.en, /L100183/);
    assert.match(hernandez.note.es, /Hernández 104/);
    assert.match(hernandez.note.en, /Hernández 104/);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.equal(additions.some((row) => row.id === 'co-1977-2-pesos-oro-22214695'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1977-2-pesos-oro-p413b'), true);
  });

  it('lists the 1977 2 pesos oro on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /2 pesos oro de 1977 \(Pick 413b\)/);
    assert.match(chapter.body.en, /1977 2 pesos oro \(Pick 413b\)/);
    assert.match(seriesCopy.es.intro.join(' '), /2 pesos oro de 1977 \(Pick 413b\)/);
    assert.match(seriesCopy.en.intro.join(' '), /1977 2 pesos oro \(Pick 413b\)/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const twoPesos1977 = cards.filter((card) => card.note.id === '2-pesos-oro-1977');
    assert.equal(twoPesos1977.length, 1);
    assert.equal(twoPesos1977[0].piece.serial, '22214695');
    assert.equal(
      seriesCardHref(twoPesos1977[0].note, twoPesos1977[0].piece, 'es'),
      '/coleccion/colombia/2-pesos-oro-1977/',
    );
    assert.equal(
      seriesCardHref(twoPesos1977[0].note, twoPesos1977[0].piece, 'en'),
      '/en/collection/colombia/2-pesos-oro-1977/',
    );
  });
});

describe('Colombia Tesorería medio peso oro 1953 Lleritas', () => {
  it('is a distinct Pick 345b Treasury note, not BanRep Pick 384 or the 1948 345a', () => {
    const note = noteById('medio-peso-oro-1953');
    assert.ok(note);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 345b');
    assert.equal(note.serial, 'C 5256707');
    assert.equal(notePieces(note).length, 1);
    assert.match(note.printed.es, /BG# 012/);
    assert.match(note.printed.en, /BG# 012/);
    assert.match(note.printed.es, /10\.000\.000/);
    assert.match(note.printed.es, /C5256707/);
    assert.match(note.printed.es, /Tesorería/);
    assert.match(note.printed.en, /Treasury/);
    assert.match(note.printed.es, /no hay un total de denominación para 1953/);
    assert.match(note.description.es, /Nariño/);
    assert.match(note.description.en, /Nariño/);
    assert.match(note.description.es, /C5256707/);
    assert.match(note.description.es, /una sola vez/);
    assert.match(note.description.en, /appears once/);
    assert.match(note.description.es, /Pick 384/);
    assert.match(note.description.es, /Pick 397/);
    assert.match(note.description.es, /Pick 345a/);
    assert.match(note.description.es, /DECRETO 404 DE 1953/);
    assert.match(note.kicker.es, /Tesorería/);
    assert.match(note.kicker.en, /Treasury/);
    assert.match(note.scarcity.es, /10\.000\.000/);
    assert.match(note.scarcity.es, /Cód\. 12/);
    assert.match(note.scarcity.es, /No se publican columnas de precios/);
    assert.match(note.scarcity.es, /denominación-año/);
    assert.equal(
      note.sources.some((source) => source.href === 'http://www.banknote.ws/COLLECTION/countries/AME/COL/COL0345.htm'),
      true,
    );
    assert.equal(
      note.sources.some((source) => source.href === 'https://en.numista.com/catalogue/note205254.html'),
      true,
    );
    assert.equal(note.sources.some((source) => source.href === 'https://en.numista.com/L100183'), true);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.equal(additions.some((row) => row.id === 'co-1953-medio-peso-oro-c5256707'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1953-medio-peso-oro-p345b'), true);
  });

  it('lists the 1953 medio peso oro on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /medio peso oro de 1953 de la Tesorería \(Pick 345b\), serial C5256707/);
    assert.match(chapter.body.en, /1953 Treasury ½ peso oro \(Pick 345b\), serial C5256707/);
    assert.match(seriesCopy.es.intro.join(' '), /medio peso oro de 1953 de la Tesorería \(Pick 345b\), serial C5256707/);
    assert.match(seriesCopy.en.intro.join(' '), /1953 Treasury ½ peso oro \(Pick 345b\), serial C5256707/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const holding = cards.filter((card) => card.note.id === 'medio-peso-oro-1953');
    assert.equal(holding.length, 1);
    assert.equal(holding[0].piece.serial, 'C 5256707');
    assert.equal(holding[0].denomination, 0.5);
    assert.equal(holding[0].year, 1953);
    assert.ok(cards[0].denomination <= holding[0].denomination);
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'es'),
      '/coleccion/colombia/medio-peso-oro-1953/',
    );
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'en'),
      '/en/collection/colombia/medio-peso-oro-1953/',
    );
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

describe('Colombia BanRep 5 pesos oro 1979 IBB asterisk replacement', () => {
  it('is a distinct Cartagena replacement with serial 00141180, not the 1980 ordinary note', () => {
    const note = noteById('5-pesos-oro-1979');
    const ordinary = noteById('5-pesos-oro-1980');
    assert.ok(note);
    assert.ok(ordinary);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 406f · Hernández 156');
    assert.equal(note.serial, '00141180');
    assert.notEqual(note.serial, ordinary.serial);
    assert.equal(notePieces(note).length, 1);
    assert.match(note.printed.es, /Cód\. 156/);
    assert.match(note.printed.en, /Cód\. 156/);
    assert.match(note.printed.es, /00100731–00135113/);
    assert.match(note.printed.es, /no cae en ese intervalo/);
    assert.match(note.printed.es, /109,5 millones de piezas de 5 pesos/);
    assert.match(note.printed.es, /denominación-año/);
    assert.match(note.description.es, /00141180/);
    assert.match(note.description.en, /00141180/);
    assert.match(note.description.es, /asterisco a la izquierda del título GERENTE/);
    assert.match(note.description.en, /asterisk to the left of the title GERENTE/);
    assert.match(note.description.es, /Cód\. 155/);
    assert.match(note.scarcity.es, /no inventa una tirada/);
    assert.doesNotMatch(note.description.es, /Decreto 188/);
    assert.equal(additions.some((row) => row.id === 'co-1979-5-pesos-oro-00141180'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1979-5-pesos-oro-p406f-h156'), true);
  });

  it('lists the 1979 replacement on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(
      chapter.body.es,
      /reposición de 5 pesos oro de 1979 \(Pick 406f; Hernández 156\), serial 00141180/,
    );
    assert.match(
      chapter.body.en,
      /1979 5 pesos oro replacement \(Pick 406f; Hernández 156\), serial 00141180/,
    );
    assert.match(
      seriesCopy.es.intro.join(' '),
      /reposición de 5 pesos oro de 1979 \(Pick 406f; Hernández 156\), serial 00141180/,
    );
    assert.match(
      seriesCopy.en.intro.join(' '),
      /1979 5 pesos oro replacement \(Pick 406f; Hernández 156\), serial 00141180/,
    );
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const holding = cards.filter((card) => card.note.id === '5-pesos-oro-1979');
    assert.equal(holding.length, 1);
    assert.equal(holding[0].piece.serial, '00141180');
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'es'),
      '/coleccion/colombia/5-pesos-oro-1979/',
    );
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'en'),
      '/en/collection/colombia/5-pesos-oro-1979/',
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

describe('Colombia BanRep 10 pesos oro 1979 Imprenta de Billetes', () => {
  it('is a distinct Pick 407g circulation note, not the 1976 replacement or the 1943 ABNC 10 pesos', () => {
    const note = noteById('10-pesos-oro-1979');
    const replacement = noteById('10-pesos-oro-1976');
    const note1943 = noteById('10-pesos-oro-1943');
    assert.ok(note);
    assert.ok(replacement);
    assert.ok(note1943);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 407g · TBB B950m');
    assert.equal(note.serial, '98040194');
    assert.notEqual(note.serial, replacement.serial);
    assert.notEqual(note.serial, note1943.serial);
    assert.notEqual(note.pick, replacement.pick);
    assert.notEqual(note.pick, note1943.pick);
    assert.notEqual(note.path, replacement.path);
    assert.equal(notePieces(note).length, 1);
    assert.doesNotMatch(note.printed.es, /BG#\s*\d+/);
    assert.match(note.printed.es, /no publica un BG# adivinado/);
    assert.match(note.printed.es, /58,75 millones/);
    assert.match(note.printed.es, /denominación ese año/);
    assert.match(note.printed.es, /no la tirada de esta fecha/);
    assert.match(note.scarcity.es, /58,75 millones/);
    assert.match(note.scarcity.es, /denominación-año/);
    assert.match(note.description.es, /No hay asterisco/);
    assert.match(note.description.es, /no es reposición/);
    assert.match(note.description.es, /98040194/);
    assert.match(note.description.es, /Nariño/);
    assert.match(note.description.en, /Nariño/);
    assert.match(note.description.es, /San Agustín/);
    assert.match(note.description.es, /407f/);
    assert.match(note.description.es, /Pick 389b/);
    assert.match(note.printed.es, /Cód\. 205/);
    assert.match(note.printed.en, /Cód\. 205/);
    assert.match(note.printed.es, /Cód\. 206/);
    assert.match(note.description.es, /Cód\. 206/);
    assert.match(note.description.en, /Cód\. 206/);
    assert.match(note.scarcity.es, /Cód\. 205/);
    assert.match(note.scarcity.es, /No se publican columnas de precios/);
    assert.equal(
      note.sources.some((source) => source.href === 'https://en.numista.com/L100183'),
      true,
    );
    const hernandez = note.sources.find((source) => source.href === 'https://en.numista.com/L100183');
    assert.ok(hernandez);
    assert.ok(hernandez.note);
    assert.match(hernandez.es, /L100183/);
    assert.match(hernandez.en, /L100183/);
    assert.match(hernandez.note.es, /Hernández 205/);
    assert.match(hernandez.note.en, /Hernández 205/);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.equal(additions.some((row) => row.id === 'co-1979-10-pesos-oro-98040194'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1979-10-pesos-oro-p407g'), true);
  });

  it('lists the 1979 10 pesos oro on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /10 pesos oro de 1979 \(Pick 407g\), serial 98040194/);
    assert.match(chapter.body.en, /1979 10 pesos oro \(Pick 407g\), serial 98040194/);
    assert.match(seriesCopy.es.intro.join(' '), /10 pesos oro de 1979 \(Pick 407g\), serial 98040194/);
    assert.match(seriesCopy.en.intro.join(' '), /1979 10 pesos oro \(Pick 407g\), serial 98040194/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const holding = cards.filter((card) => card.note.id === '10-pesos-oro-1979');
    assert.equal(holding.length, 1);
    assert.equal(holding[0].piece.serial, '98040194');
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'es'),
      '/coleccion/colombia/10-pesos-oro-1979/',
    );
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'en'),
      '/en/collection/colombia/10-pesos-oro-1979/',
    );
  });
});

describe('Colombia BanRep 50 pesos oro 1974 Thomas de la Rue', () => {
  it('is a distinct Pick 414a circulation note with serial 2467354822, not the 1984 IBB type', () => {
    const note = noteById('50-pesos-oro-1974');
    const later = noteById('50-pesos-oro-1984');
    assert.ok(note);
    assert.ok(later);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 414a · TBB B953b');
    assert.equal(note.serial, '2467354822');
    assert.notEqual(note.serial, later.serial);
    assert.notEqual(note.pick, later.pick);
    assert.notEqual(note.path, later.path);
    assert.equal(notePieces(note).length, 1);
    assert.doesNotMatch(note.printed.es, /BG#\s*\d+/);
    assert.match(note.printed.es, /no se publica aquí un BG# adivinado/);
    assert.match(note.printed.es, /100\.000\.000 de ejemplares/);
    assert.match(note.printed.es, /diez dígitos/);
    assert.match(note.printed.es, /no se fuerza a la banda de nueve dígitos/);
    assert.match(note.description.es, /2467354822/);
    assert.match(note.description.es, /THOMAS DE LA RUE/);
    assert.match(note.description.es, /No hay prefijo R/);
    assert.match(note.description.es, /Pick 425/);
    assert.match(note.description.en, /Thomas De La Rue/);
    assert.match(note.scarcity.es, /Hernández 265/);
    assert.match(note.scarcity.es, /no inventa una tirada/);
    assert.doesNotMatch(note.description.es, /Decreto 188/);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.equal(additions.some((row) => row.id === 'co-1974-50-pesos-oro-2467354822'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1974-50-pesos-oro-p414a-b953b'), true);
  });

  it('lists the 1974 50 pesos oro on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /50 pesos oro de 1974 \(Pick 414a \/ TBB B953b\), serial 2467354822/);
    assert.match(chapter.body.en, /1974 50 pesos oro \(Pick 414a \/ TBB B953b\), serial 2467354822/);
    assert.match(seriesCopy.es.intro.join(' '), /50 pesos oro de 1974 \(Pick 414a \/ TBB B953b\), serial 2467354822/);
    assert.match(seriesCopy.en.intro.join(' '), /1974 50 pesos oro \(Pick 414a \/ TBB B953b\), serial 2467354822/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const holding = cards.filter((card) => card.note.id === '50-pesos-oro-1974');
    assert.equal(holding.length, 1);
    assert.equal(holding[0].piece.serial, '2467354822');
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'es'),
      '/coleccion/colombia/50-pesos-oro-1974/',
    );
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'en'),
      '/en/collection/colombia/50-pesos-oro-1974/',
    );
  });
});

describe('Colombia BanRep 50 pesos oro 1984 Imprenta de Billetes', () => {
  it('is a distinct Pick 425a circulation note with ordinary serial 0001806322', () => {
    const note = noteById('50-pesos-oro-1984');
    const twoPesos = noteById('2-pesos-oro-1944');
    assert.ok(note);
    assert.ok(twoPesos);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 425a');
    assert.equal(note.serial, '0001806322');
    assert.notEqual(note.serial, twoPesos.serial);
    assert.notEqual(note.path, twoPesos.path);
    assert.equal(notePieces(note).length, 1);
    assert.doesNotMatch(note.printed.es, /BG#\s*\d+/);
    assert.match(note.printed.es, /no se publica aquí un BG# adivinado/);
    assert.match(note.printed.es, /100\.000\.000 de ejemplares/);
    assert.match(note.printed.es, /no registra piezas de 50 pesos/);
    assert.match(note.printed.es, /denominación-año/);
    assert.match(note.description.es, /0001806322/);
    assert.match(note.description.en, /0001806322/);
    assert.match(note.description.es, /Camilo Torres/);
    assert.match(note.description.en, /Camilo Torres/);
    assert.match(note.description.es, /ORQUÍDEAS COLOMBIANAS/);
    assert.match(note.description.es, /IMPRENTA DE BILLETES - BOGOTÁ/);
    assert.match(note.description.es, /No hay asterisco entre GERENTE y ABOGADO-SUBGERENTE/);
    assert.match(note.description.en, /There is no asterisk between GERENTE and ABOGADO-SUBGERENTE/);
    assert.match(note.description.es, /Hugo Palacios Mejía/);
    assert.match(note.description.es, /Roberto Salazar Manrique/);
    assert.match(note.description.es, /Pick 390/);
    assert.match(note.scarcity.es, /no inventa una tirada/);
    assert.doesNotMatch(note.description.es, /Decreto 188/);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.equal(additions.some((row) => row.id === 'co-1984-50-pesos-oro-0001806322'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1984-50-pesos-oro-p425a'), true);
  });

  it('lists the 1984 50 pesos oro on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /50 pesos oro de 1984 \(Pick 425a\), serial 0001806322/);
    assert.match(chapter.body.en, /1984 50 pesos oro \(Pick 425a\), serial 0001806322/);
    assert.match(seriesCopy.es.intro.join(' '), /50 pesos oro de 1984 \(Pick 425a\), serial 0001806322/);
    assert.match(seriesCopy.en.intro.join(' '), /1984 50 pesos oro \(Pick 425a\), serial 0001806322/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const holding = cards.filter((card) => card.note.id === '50-pesos-oro-1984');
    assert.equal(holding.length, 1);
    assert.equal(holding[0].piece.serial, '0001806322');
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'es'),
      '/coleccion/colombia/50-pesos-oro-1984/',
    );
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'en'),
      '/en/collection/colombia/50-pesos-oro-1984/',
    );
  });
});

describe('Colombia BanRep 5.000 pesos oro 1993 Imprenta de Billetes', () => {
  it('is a distinct Pick 436A circulation note with ordinary serial 82210365', () => {
    const note = noteById('5000-pesos-oro-1993');
    const twoThousand = noteById('2000-pesos-oro-1983');
    const tenThousand = noteById('10000-pesos-1994');
    assert.ok(note);
    assert.ok(twoThousand);
    assert.ok(tenThousand);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 436A · TBB B974c');
    assert.equal(note.serial, '82210365');
    assert.notEqual(note.serial, twoThousand.serial);
    assert.notEqual(note.path, twoThousand.path);
    assert.notEqual(note.path, tenThousand.path);
    assert.equal(notePieces(note).length, 1);
    assert.doesNotMatch(note.printed.es, /BG#\s*\d+/);
    assert.match(note.printed.es, /no se publica aquí un BG# adivinado/);
    assert.match(note.printed.es, /93\.600\.000 de ejemplares/);
    assert.match(note.printed.es, /120,25 millones/);
    assert.match(note.printed.es, /denominación/);
    assert.match(note.description.es, /82210365/);
    assert.match(note.description.en, /82210365/);
    assert.match(note.description.es, /Rafael Núñez/);
    assert.match(note.description.en, /Rafael Núñez/);
    assert.match(note.description.es, /Ermita del Cabrero/);
    assert.match(note.description.es, /IMPRENTA DE BILLETES - SANTA FE DE BOGOTÁ/);
    assert.match(note.description.es, /No hay estrella de reposición/);
    assert.match(note.description.en, /There is no replacement star/);
    assert.match(note.description.es, /Francisco José Ortega/);
    assert.match(note.description.es, /Antonio Cerón del Hierro/);
    assert.match(note.description.es, /Pick 434/);
    assert.match(note.description.es, /José Asunción Silva/);
    assert.match(note.scarcity.es, /no inventa una tirada/);
    assert.doesNotMatch(note.description.es, /Decreto 188/);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.equal(additions.some((row) => row.id === 'co-1993-5000-pesos-oro-82210365'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1993-5000-pesos-oro-p436a-b974c'), true);
  });

  it('lists the 1993 5.000 pesos oro on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /5\.000 pesos oro de 1993 \(Pick 436A \/ TBB B974c\), serial 82210365/);
    assert.match(chapter.body.en, /1993 5,000 pesos oro \(Pick 436A \/ TBB B974c\), serial 82210365/);
    assert.match(seriesCopy.es.intro.join(' '), /5\.000 pesos oro de 1993 \(Pick 436A \/ TBB B974c\), serial 82210365/);
    assert.match(seriesCopy.en.intro.join(' '), /1993 5,000 pesos oro \(Pick 436A \/ TBB B974c\), serial 82210365/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const holding = cards.filter((card) => card.note.id === '5000-pesos-oro-1993');
    assert.equal(holding.length, 1);
    assert.equal(holding[0].piece.serial, '82210365');
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'es'),
      '/coleccion/colombia/5000-pesos-oro-1993/',
    );
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'en'),
      '/en/collection/colombia/5000-pesos-oro-1993/',
    );
  });
});

describe('Colombia BanRep 100 pesos oro 1980 TDLR specimen', () => {
  it('is a distinct BanRep specimen with SPECIMEN Nº 027, not the 1960 or 1983 zero-serial notes', () => {
    const note = noteById('100-pesos-oro-1980');
    const five = noteById('5-pesos-oro-1960');
    const twoThousand = noteById('2000-pesos-oro-1983');
    assert.ok(note);
    assert.ok(five);
    assert.ok(twoThousand);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 418s');
    assert.equal(note.serial, '00000000 · SPECIMEN Nº 027');
    assert.notEqual(note.serial, five.serial);
    assert.notEqual(note.serial, twoThousand.serial);
    assert.notEqual(note.path, five.path);
    assert.notEqual(note.path, twoThousand.path);
    assert.equal(notePieces(note).length, 1);
    assert.match(note.kicker.es, /Espécimen/);
    assert.match(note.kicker.en, /specimen/i);
    assert.doesNotMatch(note.printed.es, /BG#\s*\d+/);
    assert.match(note.printed.es, /no se publica aquí un BG# adivinado/);
    assert.match(note.printed.es, /100\.000\.000 de ejemplares/);
    assert.match(note.printed.es, /no da una tirada de especímenes/);
    assert.match(note.printed.es, /no registra producción de 100 pesos/);
    assert.match(note.description.es, /SPECIMEN Nº 027/);
    assert.match(note.description.en, /SPECIMEN Nº 027/);
    assert.match(note.description.es, /418b/);
    assert.match(note.description.es, /Capitolio Nacional/);
    assert.match(note.description.en, /National Capitol/);
    assert.match(note.description.es, /Pick 405s/);
    assert.match(note.description.es, /Pick 430as/);
    assert.match(note.scarcity.es, /no inventa una tirada de especímenes/);
    assert.doesNotMatch(note.description.es, /Decreto 188/);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.equal(additions.some((row) => row.id === 'co-1980-100-pesos-oro-specimen-027'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1980-100-pesos-oro-p418s'), true);
  });

  it('lists the 1980 100 pesos oro specimen on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /espécimen de 100 pesos oro de 1980 \(Pick 418s\), SPECIMEN Nº 027/);
    assert.match(chapter.body.en, /1980 100 pesos oro specimen \(Pick 418s\), SPECIMEN Nº 027/);
    assert.match(seriesCopy.es.intro.join(' '), /espécimen de 100 pesos oro de 1980 \(Pick 418s\), SPECIMEN Nº 027/);
    assert.match(seriesCopy.en.intro.join(' '), /1980 100 pesos oro specimen \(Pick 418s\), SPECIMEN Nº 027/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const specimen = cards.filter((card) => card.note.id === '100-pesos-oro-1980');
    assert.equal(specimen.length, 1);
    assert.equal(specimen[0].piece.serial, '00000000 · SPECIMEN Nº 027');
    assert.equal(
      seriesCardHref(specimen[0].note, specimen[0].piece, 'es'),
      '/coleccion/colombia/100-pesos-oro-1980/',
    );
    assert.equal(
      seriesCardHref(specimen[0].note, specimen[0].piece, 'en'),
      '/en/collection/colombia/100-pesos-oro-1980/',
    );
  });
});

describe('Colombia BanRep 20 pesos oro 1983 Imprenta de Billetes', () => {
  it('is a distinct Pick 409d circulation note, not an asterisk replacement', () => {
    const note = noteById('20-pesos-oro-1983');
    assert.ok(note);
    assert.equal(note.chapterId, 'banco-de-la-republica');
    assert.equal(note.pick, 'P# 409d · TBB B951l');
    assert.equal(note.serial, '056462955');
    assert.equal(notePieces(note).length, 1);
    assert.doesNotMatch(note.printed.es, /BG#\s*\d+/);
    assert.match(note.printed.es, /no publica un BG# ni una emisión adivinados/);
    assert.match(note.printed.es, /60,5 millones/);
    assert.match(note.printed.es, /denominación ese año/);
    assert.match(note.printed.es, /no la tirada de esta fecha/);
    assert.match(note.scarcity.es, /60,5 millones/);
    assert.match(note.scarcity.es, /denominación-año/);
    assert.match(note.description.es, /No hay asterisco/);
    assert.match(note.description.es, /no es reposición/);
    assert.match(note.description.es, /056462955/);
    assert.match(note.description.es, /Caldas/);
    assert.match(note.description.en, /Caldas/);
    assert.match(note.description.es, /Museo del Oro/);
    assert.match(note.description.es, /409a/);
    assert.match(note.printed.es, /Cód\. 243/);
    assert.match(note.printed.en, /Cód\. 243/);
    assert.match(note.printed.es, /Cód\. 244/);
    assert.match(note.description.es, /Cód\. 244/);
    assert.match(note.description.en, /Cód\. 244/);
    assert.match(note.scarcity.es, /Cód\. 243/);
    assert.match(note.scarcity.es, /No se publican columnas de precios/);
    assert.equal(
      note.sources.some((source) => source.href === 'https://en.numista.com/L100183'),
      true,
    );
    const hernandez = note.sources.find((source) => source.href === 'https://en.numista.com/L100183');
    assert.ok(hernandez);
    assert.ok(hernandez.note);
    assert.match(hernandez.es, /L100183/);
    assert.match(hernandez.en, /L100183/);
    assert.match(hernandez.note.es, /Hernández 243/);
    assert.match(hernandez.note.en, /Hernández 243/);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.equal(additions.some((row) => row.id === 'co-1983-20-pesos-oro-056462955'), true);
    assert.equal(catalogAdditions.some((row) => row.id === 'co-1983-20-pesos-oro-p409d'), true);
  });

  it('lists the 1983 20 pesos oro on the BanRep series page and in chapter copy', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'banco-de-la-republica');
    assert.ok(chapter);
    assert.match(chapter.body.es, /20 pesos oro de 1983 \(Pick 409d\), serial 056462955/);
    assert.match(chapter.body.en, /1983 20 pesos oro \(Pick 409d\), serial 056462955/);
    assert.match(seriesCopy.es.intro.join(' '), /20 pesos oro de 1983 \(Pick 409d\), serial 056462955/);
    assert.match(seriesCopy.en.intro.join(' '), /1983 20 pesos oro \(Pick 409d\), serial 056462955/);
    const cards = seriesCardsForChapter('banco-de-la-republica');
    const holding = cards.filter((card) => card.note.id === '20-pesos-oro-1983');
    assert.equal(holding.length, 1);
    assert.equal(holding[0].piece.serial, '056462955');
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'es'),
      '/coleccion/colombia/20-pesos-oro-1983/',
    );
    assert.equal(
      seriesCardHref(holding[0].note, holding[0].piece, 'en'),
      '/en/collection/colombia/20-pesos-oro-1983/',
    );
  });
});

describe('Colombia 1 peso Tolima 1901 (Cód. 1242)', () => {
  it('distinguishes the 1901 Ibagué treasury cédula from Banco del Tolima of Neiva', () => {
    const note = noteById('1-peso-tolima-1901');
    assert.ok(note);
    assert.equal(note.serial, '060.416');
    assert.equal(note.historyHeading?.es, 'Tesorería y banca libre');
    assert.equal(note.historyHeading?.en, 'Treasury and free banking');
    assert.ok(note.history);
    assert.match(note.description.es, /escritura de 23 de junio de 1881/);
    assert.match(note.description.en, /deed of 23 June 1881/);
    assert.match(note.history.es, /sede en Neiva, no en Ibagué/);
    assert.match(note.history.en, /seated in Neiva, not Ibagué/);
    assert.match(note.history.es, /capital autorizado de 200\.000 pesos/);
    assert.match(note.history.en, /authorized capital of 200,000 pesos/);
    assert.match(note.history.es, /79\.600 pesos suscritos/);
    assert.match(note.history.en, /79,600 pesos subscribed/);
    assert.match(note.history.es, /cuarenta y dos bancos/);
    assert.match(note.history.en, /forty-two banks/);
    assert.match(note.history.es, /1883 —no en 1881/);
    assert.match(note.history.en, /1883 — not 1881/);
    assert.match(note.history.es, /letras de cambio/);
    assert.match(note.history.en, /bills of exchange/);
    assert.match(note.history.es, /no se fusionó/);
    assert.match(note.history.en, /did not merge/);
    assert.doesNotMatch(note.history.es, /Tocaima/);
    assert.doesNotMatch(note.history.en, /Tocaima/);
    assert.doesNotMatch(`${note.history.es}\n${note.description.es}`, /Tocaima/);
    assert.doesNotMatch(`${note.history.en}\n${note.description.en}`, /Tocaima/);
    const hrefs = note.sources.map((source) => source.href);
    assert.equal(hrefs.includes('https://www.mascoleccionismo.com/publicaciones/JAG/JAG-083.pdf'), true);
    assert.equal(
      hrefs.includes('https://repositorio.banrep.gov.co/bitstreams/b82e02f1-24fd-41fa-bc0f-bbe70a0d1671/download'),
      true,
    );
    assert.equal(
      hrefs.includes('https://www.interciencia.net/wp-content/uploads/2022/10/02_6886_A_Andrade_Navia_v47n9_9.pdf'),
      true,
    );
    assert.equal(
      hrefs.includes('https://digitalcollections.library.vanderbilt.edu/islandora/object/islandora%3A10267'),
      true,
    );
    assert.equal(
      hrefs.includes('http://www.scielo.org.co/scielo.php?pid=S0120-25962024000100049&script=sci_arttext'),
      true,
    );
    assert.equal(hrefs.includes('http://hdl.handle.net/10784/7647'), true);
  });
});

describe('Colombia Silva 2010 butterfly-cut error series grouping', () => {
  it('keeps two physical pieces and one type-level serial line', () => {
    const note = noteById('5000-pesos-error-2010');
    assert.ok(note);
    const pieces = notePieces(note);
    assert.equal(pieces.length, 2);
    assert.equal(pieces[0].id, '5000-pesos-error-2010-09629901');
    assert.equal(pieces[1].id, '5000-pesos-error-2010-09636101');
    assert.equal(pieces[0].serial, '09629901');
    assert.equal(pieces[1].serial, '09636101');
    assert.equal(note.serial, '09629901');
    assert.equal(note.shareTypeNarrative, true);
    assert.equal(noteSerialLine(note), '09629901 / 09636101');
    assert.equal(
      additions.filter((row) => row.id.startsWith('co-2010-5000-pesos-error-')).length,
      2,
    );
    assert.equal(additions.some((row) => row.id === 'co-2010-5000-pesos-error-09629901'), true);
    assert.equal(additions.some((row) => row.id === 'co-2010-5000-pesos-error-09636101'), true);
    assert.ok(
      additions.findIndex((row) => row.id === 'co-2010-5000-pesos-error-09629901') >
        additions.findIndex((row) => row.id === 'co-2010-5000-pesos-error-09636101'),
    );
    assert.equal(
      catalogAdditions.filter((row) => row.id === 'co-2010-5000-pesos-error-p452l').length,
      1,
    );
    assert.match(note.lead.es, /09629901 y 09636101/);
    assert.match(note.lead.en, /09629901 and 09636101/);
    assert.match(note.description.es, /09629901 no es 09636101/);
    assert.match(note.description.en, /09629901 is not 09636101/);
    assert.doesNotMatch(note.description.es, /Elvira/);
    assert.doesNotMatch(note.description.en, /Elvira/);
    const publicCopy = [
      note.printed.es,
      note.printed.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      note.lead.es,
      note.lead.en,
      ...note.sources.flatMap((source) => [source.es, source.en, source.note?.es, source.note?.en]),
    ].join('\n');
    assert.doesNotMatch(publicCopy, /US\s*\$/);
    assert.doesNotMatch(publicCopy, /\$\s*\d/);
    assert.doesNotMatch(publicCopy, /1[,.]5\s*millon/);
  });

  it('emits two error-grid cards, not one BanRep-style card', () => {
    const cards = errorNoteCards().filter((card) => card.note.id === '5000-pesos-error-2010');
    assert.equal(cards.length, 2);
    assert.equal(cards[0].piece.serial, '09629901');
    assert.equal(cards[1].piece.serial, '09636101');
    assert.equal(cards[0].piece.title.es, '5.000 pesos · error mariposa · 2010 · 09629901');
    assert.equal(cards[1].piece.title.es, '5.000 pesos · error mariposa · 2010 · 09636101');
    const banRepCards = seriesCardsForChapter('banco-de-la-republica').filter(
      (card) => card.note.id === '5000-pesos-error-2010',
    );
    assert.equal(banRepCards.length, 0);
    const note = noteById('5000-pesos-error-2010');
    assert.ok(note);
    assert.equal(seriesCardHref(note, cards[0].piece, 'es'), '/coleccion/colombia/5000-pesos-error-2010/');
    assert.equal(
      seriesCardHref(note, cards[0].piece, 'en'),
      '/en/collection/colombia/5000-pesos-error-2010/',
    );
  });
});
