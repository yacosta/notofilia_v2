import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import { pieceScanAlt } from '../lib/scan-alt.ts';
import { specimenAltFailure } from '../../scripts/image-seo.mjs';
import { additions, catalogAdditions } from './holdings.ts';
import {
  VEGA_REDONDA_PATH,
  vegaRedondaCopy,
  vegaRedondaTokens,
} from './vega-redonda.ts';

const esPage = readFileSync(
  new URL('../pages/coleccion/puerto-rico-numismatica/hacienda-vega-redonda/index.astro', import.meta.url),
  'utf8',
);
const enPage = readFileSync(
  new URL('../pages/en/collection/puerto-rico-numismatics/hacienda-vega-redonda/index.astro', import.meta.url),
  'utf8',
);
const tokenPage = readFileSync(
  new URL('../components/catalog/PuertoRicoVegaRedondaTokenPage.astro', import.meta.url),
  'utf8',
);

describe('Hacienda Vega Redonda tokens', () => {
  it('registers one bilingual series and three no-serial holdings', () => {
    assert.equal(
      localizePath(VEGA_REDONDA_PATH, 'en'),
      '/en/collection/puerto-rico-numismatics/hacienda-vega-redonda/',
    );
    assert.deepEqual(
      vegaRedondaTokens.map((token) => token.id),
      [
        'pr-nd-cuarto-almud-vega-redonda',
        'pr-nd-medio-almud-vega-redonda',
        'pr-nd-un-almud-vega-redonda',
      ],
    );
    for (const token of vegaRedondaTokens) {
      assert.equal(localizePath(token.path, 'en'), `/en${token.pathEn}`);
      assert.match(token.no_serial_reason, /no serial/);
      assert.equal(token.images.width, 1254);
      assert.equal(token.images.height, 1254);
      assert.match(token.images.front, /puerto-rico-hacienda-vega-redonda-/);
    }
    assert.equal(additions.at(-3)?.id, 'pr-nd-cuarto-almud-vega-redonda');
    assert.equal(additions.at(-2)?.id, 'pr-nd-medio-almud-vega-redonda');
    assert.equal(additions.at(-1)?.id, 'pr-nd-un-almud-vega-redonda');
    assert.equal(additions.at(-1)?.kind, 'coin');
    assert.equal(catalogAdditions.at(-1)?.id, 'pr-nd-un-almud-vega-redonda');
    assert.match(esPage, /PuertoRicoVegaRedondaPage locale="es"/);
    assert.match(enPage, /PuertoRicoVegaRedondaPage locale="en"/);
    assert.match(tokenPage, /id="main-content"/);
    assert.match(tokenPage, /NoteImageLightbox/);
  });

  it('keeps titles and descriptions inside the audit limits and publishes no prices', () => {
    const prose = [
      vegaRedondaCopy.es.lead,
      vegaRedondaCopy.en.lead,
      ...vegaRedondaTokens.flatMap((token) => [
        token.description.es,
        token.description.en,
        token.scarcity.es,
        token.scarcity.en,
        token.grade.es,
        token.grade.en,
      ]),
    ].join('\n');
    assert.doesNotMatch(prose, /\$\d+|USD|euros?/i);
    assert.doesNotMatch(prose, /Gould|G&H/);
    const bucaramanga = prose.match(/Bucaramanga/g) ?? [];
    assert.equal(bucaramanga.length, 2);
    assert.equal(
      (prose.match(/error, Bucaramanga/g) ?? []).length,
      2,
    );
    assert.match(prose, /Lsm 18/);
    assert.match(prose, /Lsm 17/);
    assert.match(prose, /Lsm 16/);
    for (const copy of [vegaRedondaCopy.es, vegaRedondaCopy.en]) {
      const title = `${copy.metaTitle} · Notofilia`;
      assert.ok(title.length <= 70, `${title.length} ${title}`);
      assert.ok(copy.metaDescription.length <= 155, `${copy.metaDescription.length}`);
      assert.ok(copy.metaDescription.length >= 80, `${copy.metaDescription.length}`);
    }
    for (const token of vegaRedondaTokens) {
      for (const locale of ['es', 'en']) {
        const title = `${token.metaTitle[locale]} · Notofilia`;
        assert.ok(title.length <= 70, `${title.length} ${title}`);
        assert.ok(token.metaDescription[locale].length <= 155, token.metaDescription[locale]);
        assert.ok(token.metaDescription[locale].length >= 80);
        const alt = pieceScanAlt({
          sideLabel: locale === 'es' ? 'Anverso' : 'Obverse',
          title: token.title[locale],
          catalogNumber: token.altCatalog,
        });
        assert.equal(specimenAltFailure(alt), '', alt);
      }
    }
  });
});
