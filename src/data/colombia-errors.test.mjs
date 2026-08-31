import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { seriesCopy } from './colombia.ts';

const errorsSource = readFileSync(new URL('./colombia-errors.ts', import.meta.url), 'utf8');
const notesSource = readFileSync(new URL('./colombia-notes.ts', import.meta.url), 'utf8');
const pageSource = readFileSync(
  new URL('../components/catalog/ColombiaSeriesPage.astro', import.meta.url),
  'utf8',
);

describe('colombia-errors', () => {
  it('publishes the Gaitán miscut, fold-over, Isaacs mismatched serials, and García Márquez numbering error from the errores chapter', () => {
    assert.match(errorsSource, /chapterId === 'errores'/);
    assert.match(errorsSource, /export function hasErrorNotes\(\)/);
    assert.match(notesSource, /id: '1000-pesos-error-2008'/);
    assert.match(notesSource, /id: '1000-pesos-error-2011'/);
    assert.match(notesSource, /id: '50000-pesos-error-2008'/);
    assert.match(notesSource, /id: '50000-pesos-error-2015'/);
    assert.match(notesSource, /chapterId: 'errores'/);
    assert.match(notesSource, /serial: '23085962'/);
    assert.match(notesSource, /serial: '11508701'/);
    assert.match(notesSource, /serial: '72461316 \/ 72411316'/);
    assert.match(notesSource, /serial: 'AB69350427'/);
    assert.match(notesSource, /P# 456 \/ TBB B986/);
    assert.match(notesSource, /P# 456n \/ TBB B986n/);
    assert.match(notesSource, /P# 455l \/ TBB B992l/);
    assert.match(notesSource, /P# 462a \/ TBB B997a/);
  });

  it('groups error notes by year and denomination in the module', () => {
    assert.match(errorsSource, /export function errorGroups\(\)/);
    assert.match(errorsSource, /a\.year - b\.year \|\| a\.denomination - b\.denomination/);
  });

  it('labels error-note breadcrumbs from the Errores copy', () => {
    assert.match(notesSource, /note\.chapterId === 'errores'/);
    assert.match(notesSource, /seriesCopy\[locale\]\.errorsTitle/);
    assert.equal(seriesCopy.es.errorsTitle, 'Errores');
    assert.equal(seriesCopy.en.errorsTitle, 'Errors');
  });

  it('exposes bilingual copy for the errors section', () => {
    assert.equal(seriesCopy.es.errorsTitle, 'Errores');
    assert.equal(seriesCopy.en.errorsTitle, 'Errors');
    assert.match(seriesCopy.es.errorsIntro, /ordenados por año y denominación/);
    assert.match(seriesCopy.en.errorsIntro, /sorted by year and denomination/);
  });

  it('renders error notes in one grid above sources on the series page', () => {
    assert.match(errorsSource, /export function errorNoteCards\(\)/);
    assert.match(pageSource, /id="errores"/);
    assert.match(pageSource, /errorNoteCards/);
    assert.match(pageSource, /t\.errorsTitle/);
    assert.match(pageSource, /t\.sourcesTitle/);
    assert.match(pageSource, /lg:grid-cols-4/);
    assert.doesNotMatch(pageSource, /errores-\$\{group\.year\}-\$\{group\.denomination\}-heading/);
    const erroresIndex = pageSource.indexOf('id="errores"');
    const sourcesIndex = pageSource.indexOf('t.sourcesTitle');
    assert.ok(erroresIndex > -1 && sourcesIndex > -1 && erroresIndex < sourcesIndex);
  });
});
