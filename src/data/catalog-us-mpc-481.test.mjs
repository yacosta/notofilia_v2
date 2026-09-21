import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./mpc.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/mpc/5-centavos-serie-481/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/mpc/5-cents-series-481/index.astro', import.meta.url),
  'utf8',
);
const esSeries = readFileSync(
  new URL('../pages/coleccion/estados-unidos/mpc/index.astro', import.meta.url),
  'utf8',
);
const enSeries = readFileSync(
  new URL('../pages/en/collection/united-states/mpc/index.astro', import.meta.url),
  'utf8',
);
const seriesPage = readFileSync(new URL('../components/catalog/MpcSeriesPage.astro', import.meta.url), 'utf8');

describe('US Series 481 MPC 5 cents D02536728D', () => {
  it('records Pick M22a / Fr. M831 with serial D02536728D outside Vietnam', () => {
    assert.match(data, /id: '5-centavos-serie-481'/);
    assert.match(data, /serial: 'D02536728D'/);
    assert.match(data, /P#M22a · Fr\. M831 · Schwan 831-1/);
    assert.match(data, /AUTHORIZED PERSONNEL/);
    assert.match(data, /no es una serie de Vietnam/i);
    assert.match(data, /not a Vietnam series/);
    assert.match(data, /D05152000D/);
    assert.match(data, /silverrecyclers\.com\/blog\/military-payment-certificate-series-481\.aspx/);
    assert.match(data, /Ryukyu/);
    assert.match(data, /Ryukyus/);
    assert.doesNotMatch(data, /\$27\.50/);
    assert.match(data, /title: 'MPC - Guerra de Corea \(1951 - 1954\)'/);
    assert.match(data, /title: 'MPC - Korean War \(1951 - 1954\)'/);
    assert.match(data, /Día de la conversión/);
    assert.match(data, /Conversion Day/);
    assert.match(data, /P-M28/);
    assert.match(data, /learn\.apmex\.com/);
    assert.match(data, /posición 66/);
    assert.match(data, /sheet position 66/);
    assert.doesNotMatch(data, /Decreto 188/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.match(holdings, /us-mpc-481-5-d02536728d/);
    assert.match(holdings, /id: 'us-mpc-481-5-d02536728d', kind: 'banknote', country: 'US'/);
    assert.match(holdings, /us-mpc-481-5-m22a/);
  });

  it('keeps thin ES and EN piece routes on the MPC note layout', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos/mpc/5-centavos-serie-481/', 'en'),
      '/en/collection/united-states/mpc/5-cents-series-481/',
    );
    assert.match(esPiece, /MpcNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /family="program"/);
    assert.match(enPiece, /MpcNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.match(esSeries, /MpcSeriesPage/);
    assert.match(enSeries, /MpcSeriesPage/);
    assert.match(data, /mpc-481-5-d02536728d-front\.jpg/);
    assert.match(data, /mpc-481-5-d02536728d-back\.jpg/);
    assert.match(data, /\/uploads\/guerra-de-corea-1951-1954-hero\.jpg/);
    assert.match(data, /\/uploads\/korean-war-1951-1954-hero\.jpg/);
    assert.match(seriesPage, /MPC_PROGRAM_HERO\[locale\]/);
    assert.match(seriesPage, /imageClass="object-\[50%_42%\]"/);
    assert.match(seriesPage, /size="compact"/);
    assert.match(seriesPage, /caseChapter/);
    assert.ok(
      seriesPage.indexOf('series-facts-heading') < seriesPage.indexOf('caseChapter.id') &&
        seriesPage.indexOf('caseChapter.id') < seriesPage.indexOf('denomination-table-heading'),
    );
    assert.ok(existsSync(new URL('../../public/uploads/guerra-de-corea-1951-1954-hero.jpg', import.meta.url)));
    assert.ok(existsSync(new URL('../../public/uploads/guerra-de-corea-1951-1954-hero-card.jpg', import.meta.url)));
    assert.ok(existsSync(new URL('../../public/uploads/korean-war-1951-1954-hero.jpg', import.meta.url)));
    assert.ok(existsSync(new URL('../../public/uploads/korean-war-1951-1954-hero-card.jpg', import.meta.url)));
  });

  it('names the holding in the United States FAQ', () => {
    assert.match(faq, /¿Qué es el 5 centavos MPC de la serie 481\?/);
    assert.match(faq, /What is the Series 481 5-cent MPC\?/);
    assert.match(faq, /serial D02536728D/);
  });
});
