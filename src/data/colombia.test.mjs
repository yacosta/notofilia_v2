import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { chapterBySlug, colombiaChapters, eraPath, seriesCopy } from './colombia.ts';
import { noteSeriesLabel, notesForChapter } from './colombia-notes.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/ColombiaSeriesPage.astro', import.meta.url),
  'utf8',
);

describe('Colombia series overview', () => {
  it('adds a Conversion Board chapter without inventing a holding', () => {
    const chapter = colombiaChapters.find((entry) => entry.id === 'junta-conversion');
    assert.ok(chapter);
    assert.equal(chapter.years.es, '1909–1923');
    assert.match(chapter.body.es, /20 de julio de 1915/);
    assert.match(chapter.body.en, /20 July 1915/);
    assert.match(chapter.body.es, /aún no publica un ejemplar/);
    assert.equal(notesForChapter('junta-conversion').length, 0);
  });

  it('links the Banca libre chapter to the essay page', () => {
    assert.equal(seriesCopy.es.bancaLibreEssay, 'Leer el ensayo de la banca libre');
    assert.equal(seriesCopy.en.bancaLibreEssay, 'Read the free-banking essay');
    assert.match(pageSource, /BANCA_LIBRE_PATH/);
    assert.match(pageSource, /chapter\.id === 'banca-libre'/);
  });

  it('keeps a bilingual cataloguing method block on the series page', () => {
    assert.match(seriesCopy.es.intro[0], /^Los billetes de Colombia nacieron/);
    assert.match(seriesCopy.en.intro[0], /^Colombian banknotes were born/);
    assert.equal(
      seriesCopy.es.metaTitle,
      'Billetes de Colombia: catálogo histórico 1812–hoy | Notofilia',
    );
    assert.equal(
      seriesCopy.en.metaTitle,
      'Colombian Banknotes: Historical Catalogue 1812–Present | Notofilia',
    );
    assert.equal(seriesCopy.es.title, 'Billetes de Colombia');
    assert.equal(seriesCopy.en.title, 'Colombian Banknotes');
    assert.match(seriesCopy.es.metaDescription, /Catálogo de billetes de Colombia/);
    assert.match(seriesCopy.en.metaDescription, /Catalogue of Colombian banknotes/);
    assert.equal(seriesCopy.es.guides.length, 5);
    assert.equal(seriesCopy.en.guides.length, 5);
    assert.match(pageSource, /label: t\.title/);
    assert.match(pageSource, /id="guias"/);
    assert.equal(seriesCopy.es.imprintItems.length, 3);
    assert.equal(seriesCopy.en.printersRows.length, 4);
    assert.match(seriesCopy.es.disclaimer, /está a la venta/);
    assert.match(seriesCopy.en.disclaimer, /is for sale/);
    assert.match(pageSource, /id="catalogacion"/);
    assert.match(pageSource, /t\.printersRows/);
    assert.match(pageSource, /t\.disclaimer/);
  });

  it('opens era sub-hubs from the series teasers without inventing holdings', () => {
    assert.equal(eraPath('banca-libre', 'es'), '/coleccion/colombia/banca-libre/');
    assert.equal(eraPath('banca-libre', 'en'), '/en/collection/colombia/free-banking/');
    assert.equal(chapterBySlug('free-banking')?.id, 'banca-libre');
    assert.equal(notesForChapter('independencia').length, 0);
    assert.equal(notesForChapter('banco-central').length, 0);
    assert.match(pageSource, /eraPath\(chapter\.id, locale\)/);
    assert.match(pageSource, /t\.eraOpen/);
  });

  it('names the Valledupar ranges and the 2016 statutory portraits', () => {
    const modern = colombiaChapters.find((entry) => entry.id === 'familias-modernas');
    assert.ok(modern);
    assert.match(modern.body.es, /billetes vallenatos/);
    assert.match(modern.body.es, /Ley 1599 de 2012/);
    assert.match(modern.body.es, /Ley 1741 de 2014/);
    assert.match(modern.body.en, /Law 1599 of 2012/);
    assert.match(modern.body.en, /Law 1741 of 2014/);
    assert.match(modern.body.es, /fechas sin circular/);
    assert.doesNotMatch(modern.body.es, /fechas inmaculadas/);
    assert.match(modern.body.es, /Esa familia deja de retratar/);
    assert.match(modern.body.en, /That family moves beyond/);
    assert.match(modern.body.es, /serial fancy AA40000066/);
    assert.match(modern.body.es, /serial AF51355141/);
    assert.match(modern.body.en, /fancy serial AA40000066/);
    assert.match(modern.body.en, /serial AF51355141/);
    assert.match(seriesCopy.es.intro.join(' '), /dos tiquetes estudiantiles/);
    assert.match(seriesCopy.en.intro.join(' '), /two 15-centavos student-transport tickets/);
    assert.match(seriesCopy.es.intro.join(' '), /N\.º 2380/);
    assert.match(seriesCopy.en.intro.join(' '), /No\. 2380/);
    assert.match(seriesCopy.es.intro.join(' '), /serial fancy AA40000066/);
    assert.match(seriesCopy.en.intro.join(' '), /fancy serial AA40000066/);
  });

  it('names the hub Billetes de Colombia on note breadcrumbs', () => {
    const note = notesForChapter('banco-de-la-republica')[0];
    assert.ok(note);
    assert.equal(noteSeriesLabel(note, 'es'), 'Billetes de Colombia');
    assert.equal(noteSeriesLabel(note, 'en'), 'Colombian Banknotes');
    assert.equal(
      colombiaChapters.find((entry) => entry.id === 'banca-libre')?.title.es,
      'Banca libre: los billetes de bancos regionales',
    );
  });
});
