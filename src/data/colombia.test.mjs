import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { colombiaChapters, seriesCopy } from './colombia.ts';
import { notesForChapter } from './colombia-notes.ts';

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

  it('keeps a bilingual cataloguing method block on the series page', () => {
    assert.match(seriesCopy.es.intro[0], /Bienvenido a la vitrina virtual/);
    assert.match(seriesCopy.en.intro[0], /Welcome to the virtual case/);
    assert.equal(seriesCopy.es.imprintItems.length, 3);
    assert.equal(seriesCopy.en.printersRows.length, 4);
    assert.match(seriesCopy.es.disclaimer, /está a la venta/);
    assert.match(seriesCopy.en.disclaimer, /is for sale/);
    assert.match(pageSource, /id="catalogacion"/);
    assert.match(pageSource, /t\.printersRows/);
    assert.match(pageSource, /t\.disclaimer/);
  });

  it('names the Valledupar ranges and the 2016 statutory portraits', () => {
    const modern = colombiaChapters.find((entry) => entry.id === 'familias-modernas');
    assert.ok(modern);
    assert.match(modern.body.es, /billetes vallenatos/);
    assert.match(modern.body.es, /Ley 1599 de 2012/);
    assert.match(modern.body.es, /Ley 1741 de 2014/);
    assert.match(modern.body.en, /Law 1599 of 2012/);
    assert.match(modern.body.en, /Law 1741 of 2014/);
  });
});
