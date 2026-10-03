import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  coinageCopy,
  coinageSources,
  colombiaCoinageChapters,
  linkCoinageGlossary,
} from './colombia-coinage.ts';
import { glossaryTermHref } from './glossary.ts';

const piecesSource = readFileSync(new URL('./colombia-coinage-pieces.ts', import.meta.url), 'utf8');

const pageSource = readFileSync(
  new URL('../components/catalog/ColombiaCoinagePage.astro', import.meta.url),
  'utf8',
);
const dataSource = readFileSync(new URL('./colombia-coinage.ts', import.meta.url), 'utf8');

const chapter = (id) => colombiaCoinageChapters.find((entry) => entry.id === id);

describe('Colombia coinage guide', () => {
  it('states the 1847 and 1857 peso and the 1871–1872 centavo coins', () => {
    const body = chapter('nueva-granada').body;
    assert.match(body.es, /27 de abril de 1847/);
    assert.match(body.es, /25 g a la ley de 0,900/);
    assert.match(body.es, /30 de junio de 1857/);
    assert.match(body.es, /cien centavos/);
    assert.match(body.es, /centavos en 1871 y 1872/);
    assert.match(body.en, /27 April 1847/);
    assert.match(body.en, /30 June 1857/);
    assert.match(body.en, /one hundred centavos/);
    assert.doesNotMatch(body.es, /Ley de 1871/);
    assert.doesNotMatch(body.en, /Law of 1871/);
  });

  it('keeps the Nueva Granada case empty and points at the visual catalog', () => {
    assert.equal(piecesSource.includes("chapterId: 'nueva-granada'"), false);
    assert.equal(coinageCopy.es.emptyHolding, 'Esta vitrina aún no tiene piezas de este periodo.');
    assert.match(coinageCopy.en.emptyHolding, /does not yet hold pieces from this period/);
    assert.match(pageSource, /filtro=\$\{chapter\.id\}/);
    assert.match(pageSource, /t\.emptyHolding/);
  });

  it('ties the paper peso, the gold peso, and the 1923 bank without unsourced statutes', () => {
    const body = chapter('republica').body;
    assert.match(body.es, /un centavo oro/);
    assert.match(body.es, /ley 19 de 1905/);
    assert.match(body.es, /decreto legislativo 47 de 1905/);
    assert.match(body.es, /ley 25 de 1923/);
    assert.match(body.es, /23 de julio de 1923/);
    assert.match(body.es, /1,5976 g/);
    assert.match(body.es, /7,988 g/);
    assert.match(body.es, /CINCO PESOS/);
    assert.match(body.en, /one gold centavo/);
    assert.match(body.en, /1\.5976 g/);
    assert.match(body.en, /7\.988 g/);
    assert.doesNotMatch(body.es, /7\.988/);
    assert.doesNotMatch(dataSource, /Ley 33/);
    assert.doesNotMatch(dataSource, /Ley 69/);
    assert.equal(body.es.split('\n\n').length, 3);
    assert.equal(body.en.split('\n\n').length, 3);
  });

  it('names later denominations only where a source gives the year', () => {
    const body = chapter('republica').body;
    assert.match(body.es, /1 centavo de cobre de Bogotá fechado 1957/);
    assert.match(body.es, /10 centavos de 1952/);
    assert.match(body.es, /20 de 1956/);
    assert.match(body.es, /50 de 1969/);
    assert.match(body.es, /5 centavos de 1971/);
    assert.match(body.es, /100 pesos desde 1992/);
    assert.match(body.es, /1 de julio de 1994/);
    assert.match(body.en, /100 pesos from 1992/);
    assert.match(body.en, /1 July 1994/);
  });

  it('keeps the lazaretto note honest about 1901, 1907, and 1931', () => {
    const note = chapter('republica').note;
    assert.match(note.before.es, /decreto 300 de 1901/);
    assert.match(note.before.es, /1907/);
    assert.match(note.after.es, /no listan ese 1931/);
    assert.match(note.after.es, /no le asigna número/);
    assert.match(note.after.en, /assigns it no number/);
    assert.doesNotMatch(dataSource, /falsific/i);
    assert.doesNotMatch(dataSource, /contemporary forgery/i);
  });

  it('lists only confirmed mint marks and leaves assayers as initials', () => {
    const marks = coinageCopy.es.marksRows.map((row) => row[0]);
    assert.deepEqual(marks, ['NR', 'P', 'BA', 'JF', 'JJ', 'Medellín', 'I']);
    assert.match(coinageCopy.es.marksIntro, /sin nombre de persona/);
    assert.match(coinageCopy.en.marksIntro, /no personal name/);
    assert.match(coinageCopy.es.marksRows[4][1], /KM# 56\.1/);
    assert.doesNotMatch(dataSource, /Espejo|Forero|Agualongo|Medio Stone|Media Libra|O-M/);
  });

  it('adds the quilates and the three catalogue handbooks', () => {
    assert.match(chapter('santa-fe').body.es, /22 quilates/);
    assert.match(chapter('santa-fe').body.es, /21 quilates y 2½ granos/);
    assert.match(chapter('santa-fe').body.en, /22 carats/);
    const labels = coinageSources.map((source) => source.es).join('\n');
    assert.match(labels, /Barriga Villalba/);
    assert.match(labels, /Coins of Colombia/);
    assert.match(labels, /Practical Book of Cobs/);
    assert.match(labels, /El sistema monetario de Colombia/);
  });

  it('dates the page and says KM opens the coin reference', () => {
    assert.equal(coinageCopy.es.updated, '2026-10-03');
    assert.equal(coinageCopy.es.updatedDate, '3 de octubre de 2026');
    assert.equal(coinageCopy.en.updatedDate, 'October 3, 2026');
    assert.match(coinageCopy.es.numberingBefore, /el número que abre la referencia es el KM/);
    assert.match(pageSource, /comparisonPath\(locale\)/);
    assert.match(pageSource, /datetime=\{t\.updated\}/);
    assert.doesNotMatch(pageSource, /target="_blank"/);
  });

  it('links the first glossary term in a paragraph and skips lookalikes', () => {
    const macuquina = linkCoinageGlossary('Las macuquinas y otra macuquina.', 'es');
    assert.deepEqual(
      macuquina.filter((part) => part.href),
      [{ text: 'macuquinas', href: glossaryTermHref('macuquina-cob', 'es') }],
    );
    const singular = linkCoinageGlossary('una macuquina sola', 'es');
    assert.equal(singular.find((part) => part.href)?.text, 'macuquina');
    const cobs = linkCoinageGlossary('cobs and a cob on a cobblestone', 'en');
    assert.deepEqual(
      cobs.filter((part) => part.href).map((part) => part.text),
      ['cobs'],
    );
    const planchet = linkCoinageGlossary('planchets, then one planchet', 'en');
    assert.deepEqual(
      planchet.filter((part) => part.href).map((part) => part.text),
      ['planchets'],
    );
    const ensaye = linkCoinageGlossary('iniciales de ensaye, no el ensayador', 'es');
    assert.equal(ensaye.find((part) => part.href)?.href, glossaryTermHref('ensayador', 'es'));
    assert.equal(ensaye.find((part) => part.href)?.text, 'ensaye');
    const feble = linkCoinageGlossary('el feble patriota', 'es');
    assert.equal(feble.some((part) => part.href), false);
    assert.equal(glossaryTermHref('macuquina-cob', 'es'), '/glosario/#macuquina-cob');
    assert.equal(glossaryTermHref('macuquina-cob', 'en'), '/en/glossary/#macuquina-cob');
  });
});
