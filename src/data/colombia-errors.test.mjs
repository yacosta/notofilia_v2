import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { seriesCopy } from './colombia.ts';
import { noteById, noteSeriesLabel } from './colombia-notes.ts';
import { colombiaErrorNotes, errorGroupHeading, errorGroups, hasErrorNotes } from './colombia-errors.ts';

const errorsSource = readFileSync(new URL('./colombia-errors.ts', import.meta.url), 'utf8');
const pageSource = readFileSync(
  new URL('../components/catalog/ColombiaSeriesPage.astro', import.meta.url),
  'utf8',
);

describe('colombia-errors', () => {
  it('publishes error notes from the errores chapter, not an empty list', () => {
    assert.match(errorsSource, /chapterId === 'errores'/);
    assert.match(errorsSource, /export function hasErrorNotes\(\)/);
    assert.equal(hasErrorNotes(), true);
    assert.equal(colombiaErrorNotes.length, 1);
    assert.equal(colombiaErrorNotes[0].serial, '11508701');
    assert.equal(colombiaErrorNotes[0].id, '1000-pesos-error-2011');
  });

  it('groups error notes by year and denomination in the module', () => {
    assert.match(errorsSource, /export function errorGroups\(\)/);
    assert.match(errorsSource, /a\.year - b\.year \|\| a\.denomination - b\.denomination/);
    const groups = errorGroups();
    assert.equal(groups.length, 1);
    assert.equal(groups[0].year, 2011);
    assert.equal(groups[0].denomination, 1000);
    assert.equal(groups[0].heading.es, errorGroupHeading(1000, 2011, 'es'));
    assert.equal(groups[0].heading.en, errorGroupHeading(1000, 2011, 'en'));
    assert.equal(groups[0].heading.es, '1.000 pesos · 2011');
    assert.equal(groups[0].heading.en, '1,000 pesos · 2011');
  });

  it('exposes bilingual copy for the errors section', () => {
    assert.equal(seriesCopy.es.errorsTitle, 'Errores');
    assert.equal(seriesCopy.en.errorsTitle, 'Errors');
    assert.match(seriesCopy.es.errorsIntro, /año y denominación/);
    assert.match(seriesCopy.en.errorsIntro, /year and denomination/);
  });

  it('renders the errors section above sources on the series page', () => {
    assert.match(pageSource, /id="errores"/);
    assert.match(pageSource, /t\.errorsTitle/);
    assert.match(pageSource, /t\.sourcesTitle/);
    const erroresIndex = pageSource.indexOf('id="errores"');
    const sourcesIndex = pageSource.indexOf('t.sourcesTitle');
    assert.ok(erroresIndex > -1 && sourcesIndex > -1 && erroresIndex < sourcesIndex);
  });

  it('labels the error-note breadcrumb as the Errores section', () => {
    const note = noteById('1000-pesos-error-2011');
    assert.ok(note);
    assert.equal(noteSeriesLabel(note, 'es'), 'Colombia · Errores');
    assert.equal(noteSeriesLabel(note, 'en'), 'Colombia · Errors');
  });
});
