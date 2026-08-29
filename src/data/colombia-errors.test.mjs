import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { seriesCopy } from './colombia.ts';

const errorsSource = readFileSync(new URL('./colombia-errors.ts', import.meta.url), 'utf8');
const pageSource = readFileSync(
  new URL('../components/catalog/ColombiaSeriesPage.astro', import.meta.url),
  'utf8',
);

describe('colombia-errors', () => {
  it('starts with an empty published error-notes list', () => {
    assert.match(errorsSource, /export const colombiaErrorNotes[^=]*=\s*\[\]/);
    assert.match(errorsSource, /export function hasErrorNotes\(\)/);
  });

  it('groups error notes by year and denomination in the module', () => {
    assert.match(errorsSource, /export function errorGroups\(\)/);
    assert.match(errorsSource, /a\.year - b\.year \|\| a\.denomination - b\.denomination/);
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
});
