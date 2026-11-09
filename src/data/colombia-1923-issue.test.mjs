import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { englishRedirects, localizePath } from '../lib/locale-paths.ts';
import {
  ISSUE_1923_PATH,
  ISSUE_1923_PATH_EN,
  issue1923Copy,
  issue1923DedicatedSlugs,
  issue1923Path,
} from './colombia-1923-issue.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/Colombia1923IssuePage.astro', import.meta.url),
  'utf8',
);

function blob(locale) {
  const copy = issue1923Copy[locale];
  return [
    copy.lead,
    copy.metaDescription,
    ...copy.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.items ?? []),
      section.note ?? '',
      ...(section.tables ?? []).flatMap((table) => [table.caption, ...table.rows.flat()]),
      ...(section.subsections ?? []).flatMap((block) => [
        block.title,
        ...block.paragraphs,
        ...(block.items ?? []),
        ...(block.tables ?? []).flatMap((table) => [table.caption, ...table.rows.flat()]),
      ]),
    ]),
    ...copy.faq.flatMap((item) => [item.question, item.answer]),
    ...copy.sources.map((source) => source.label),
  ].join('\n');
}

describe('1923 Banco de la República issue', () => {
  it('pairs the collection essay in Spanish and English', () => {
    assert.equal(issue1923Copy.es.title, 'La emisión de 1923');
    assert.equal(issue1923Copy.en.title, 'The 1923 issue');
    assert.equal(issue1923Path('es'), ISSUE_1923_PATH);
    assert.equal(issue1923Path('en'), `/en${ISSUE_1923_PATH_EN}`);
    assert.equal(localizePath(ISSUE_1923_PATH, 'en'), `/en${ISSUE_1923_PATH_EN}`);
    assert.equal(localizePath(`/en${ISSUE_1923_PATH_EN}`, 'es'), ISSUE_1923_PATH);
    assert.deepEqual([...issue1923DedicatedSlugs], [
      'coleccion/colombia/emision-1923',
      'collection/colombia/1923-issue',
    ]);
    assert.equal(
      englishRedirects()['/en/coleccion/colombia/emision-1923/'],
      '/en/collection/colombia/1923-issue/',
    );
  });

  it('keeps titles and descriptions inside the audit limits and publishes no price', () => {
    for (const locale of ['es', 'en']) {
      const copy = issue1923Copy[locale];
      const title = `${copy.metaTitle} · Notofilia`;
      assert.ok(title.length <= 70, title);
      assert.ok(copy.metaDescription.length <= 155, `${locale} ${copy.metaDescription.length}`);
      assert.ok(copy.metaDescription.length >= 120, `${locale} ${copy.metaDescription.length}`);
      const text = blob(locale);
      assert.match(text, /Pick 351|P-361/);
      assert.match(text, /Ley 25|Law 25/);
      assert.match(text, /BANCO DE LA REPÚBLICA — BILLETE PROVISIONAL/);
      assert.match(text, /1960/);
      assert.doesNotMatch(text, /300/);
      assert.doesNotMatch(text, /\$/);
      assert.doesNotMatch(text, /millones de pesos(?! oro)/);
      assert.doesNotMatch(text, /BG#\s*\d/);
    }
    const urls = issue1923Copy.es.sources.map((source) => source.href).join(' ');
    assert.match(urls, /banrep\.gov\.co/);
    assert.match(urls, /pmgnotes\.com/);
    assert.doesNotMatch(urls, /300-millones|colombia\.com\/actualidad/);
    assert.equal(issue1923Copy.es.sources.length, issue1923Copy.en.sources.length);
    assert.equal(issue1923Copy.es.faq.length, 5);
  });

  it('uses the museum case, one h1, a visible FAQ, and external-link hints', () => {
    assert.match(pageSource, /article class="mx-auto max-w-content px-\[var\(--page-gutter\)\]/);
    assert.doesNotMatch(pageSource, /article class="[^"]*max-w-\[46rem\]/);
    assert.match(pageSource, /max-w-\[46rem\]/);
    assert.match(pageSource, /<h1 /);
    assert.doesNotMatch(pageSource, /<h1[\s\S]*<h1 /);
    assert.match(pageSource, /FaqBlock/);
    assert.match(pageSource, /faqPageJsonLd/);
    assert.match(pageSource, /NewWindowHint/);
    assert.match(pageSource, /target="_blank"/);
    assert.match(pageSource, /rel="noopener noreferrer"/);
    assert.match(pageSource, /'@type': 'Article'/);
  });
});
