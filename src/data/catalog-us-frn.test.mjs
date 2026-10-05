import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const seriesPage = readFileSync(
  new URL('../components/catalog/UnitedStatesSeriesPage.astro', import.meta.url),
  'utf8',
);

const FRN_SORT_ID = /^(\d+)-dolar(?:es)?-serie-(\d{4})([a-z]*)-/i;

function federalReserveSortKey(id) {
  const match = id.match(FRN_SORT_ID);
  if (!match) {
    return { denomination: Number.MAX_SAFE_INTEGER, year: 0, seriesLetter: '' };
  }
  return {
    denomination: Number(match[1]),
    year: Number(match[2]),
    seriesLetter: match[3].toLowerCase(),
  };
}

function frnIdsInFileOrder() {
  const ids = [];
  const pattern = /id: '(?<id>[^']+)',\n    chapterId: 'us-frb'/g;
  for (const match of data.matchAll(pattern)) {
    ids.push(match.groups.id);
  }
  return ids;
}

describe('US Federal Reserve Note series list', () => {
  it('sorts FRN holdings by denomination, then series year and letter', () => {
    const fileOrder = frnIdsInFileOrder();
    assert.deepEqual(fileOrder, [
      '10-dolares-serie-1934-chicago',
      '10-dolares-serie-1934a-chicago',
      '10-dolares-serie-1934a-cleveland',
      '10-dolares-serie-1934a-filadelfia',
      '10-dolares-serie-1934a-nueva-york',
      '10-dolares-serie-1934c-kansas-city',
      '10-dolares-serie-1934d-richmond',
      '500-dolares-serie-1934a-nueva-york',
      '1000-dolares-serie-1934a-nueva-york',
      '10-dolares-serie-1934a-hawaii',
      '20-dolares-serie-1934a-hawaii',
      '1-dolar-serie-2003-atlanta',
      '2-dolares-serie-2003-san-luis',
    ]);

    const sorted = [...fileOrder].sort((a, b) => {
      const left = federalReserveSortKey(a);
      const right = federalReserveSortKey(b);
      return (
        left.denomination - right.denomination ||
        left.year - right.year ||
        left.seriesLetter.localeCompare(right.seriesLetter) ||
        a.localeCompare(b)
      );
    });
    assert.deepEqual(sorted, [
      '1-dolar-serie-2003-atlanta',
      '2-dolares-serie-2003-san-luis',
      '10-dolares-serie-1934-chicago',
      '10-dolares-serie-1934a-chicago',
      '10-dolares-serie-1934a-cleveland',
      '10-dolares-serie-1934a-filadelfia',
      '10-dolares-serie-1934a-hawaii',
      '10-dolares-serie-1934a-nueva-york',
      '10-dolares-serie-1934c-kansas-city',
      '10-dolares-serie-1934d-richmond',
      '20-dolares-serie-1934a-hawaii',
      '500-dolares-serie-1934a-nueva-york',
      '1000-dolares-serie-1934a-nueva-york',
    ]);

    assert.match(data, /FRN_SORT_ID = \/\^\(\\d\+\)-dolar\(\?:es\)\?-serie-/);
    assert.match(data, /export function federalReserveSortKey/);
    assert.match(data, /chapterId !== 'us-frb'/);
    assert.match(data, /left\.denomination - right\.denomination/);
    assert.match(data, /left\.year - right\.year/);
    assert.match(data, /left\.seriesLetter.localeCompare\(right\.seriesLetter\)/);
  });

  it('labels the FRN grid as denomination-then-date in both locales', () => {
    assert.match(
      data,
      /frnListLabel: 'Federal Reserve Notes alineados por denominación y luego por fecha de serie'/,
    );
    assert.match(
      data,
      /frnListLabel: 'Federal Reserve Notes lined up by denomination, then series date'/,
    );
    assert.match(seriesPage, /aria-label=\{t\.frnListLabel\}/);
    assert.match(seriesPage, /federalReserveNoteGroups\(notes\)/);
    assert.match(seriesPage, /notesForChapter\(chapter\.id\)/);
  });

  it('fits three banknote cards per row on large screens', () => {
    assert.match(seriesPage, /CATALOG_PIECE_GRID/);
    assert.doesNotMatch(seriesPage, /lg:grid-cols-4/);
  });

  it('lists every Reserva Federal denomination, with discontinued values after their own heading', () => {
    const current = [
      'Billetes de $1 dólar',
      'Billetes de $2 dólares',
      'Billetes de $5 dólares',
      'Billetes de $10 dólares',
      'Billetes de $20 dólares',
      'Billetes de $50 dólares',
      'Billetes de $100 dólares',
    ];
    const discontinued = [
      'Billetes de $500 dólares',
      'Billetes de $1,000 dólares',
      'Billetes de $5,000 dólares',
      'Billetes de $10,000 dólares',
    ];
    for (const heading of current) assert.match(data, new RegExp(`es: '${heading.replaceAll('$', '\\$')}'`));
    for (const heading of discontinued) {
      assert.match(data, new RegExp(`es: '${heading.replaceAll('$', '\\$')}'`));
    }
    assert.match(data, /es: 'Denominaciones históricas y descontinuadas'/);
    assert.match(data, /en: 'Historical & Discontinued Denominations'/);
    assert.match(data, /en: '\$1 banknotes'/);
    assert.match(data, /en: '\$10,000 banknotes'/);
    assert.doesNotMatch(data, /en: '\$[0-9,]+ notes'/);
    assert.ok(data.indexOf('frn-100') < data.indexOf('discontinued: true'));
    assert.ok(data.indexOf("es: 'Billetes de $100 dólares'") < data.indexOf("es: 'Billetes de $500 dólares'"));
    assert.match(data, /export function federalReserveNoteGroups/);
    assert.match(seriesPage, /federalReserveDiscontinuedHeading/);
    assert.match(seriesPage, /us-frb-discontinued/);
    assert.ok(seriesPage.indexOf('frnGroups.current') < seriesPage.indexOf('us-frb-discontinued'));
  });
});
