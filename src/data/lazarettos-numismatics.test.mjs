import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import {
  LAZARETTO_1921_HOLDING_ID,
  LAZARETTOS_NUMISMATICS_PATH,
  lazarettosNumismaticsCopy,
  lazarettosNumismaticsPath,
} from './lazarettos-numismatics.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/LazarettosNumismaticsPage.astro', import.meta.url),
  'utf8',
);
const coinPageSource = readFileSync(
  new URL('../components/catalog/ColombiaCoinPage.astro', import.meta.url),
  'utf8',
);
const coinageSource = readFileSync(new URL('./colombia-coinage-pieces.ts', import.meta.url), 'utf8');
const bodyEs = readFileSync(new URL('./lazarettos-numismatics/es.html', import.meta.url), 'utf8');
const bodyEn = readFileSync(new URL('./lazarettos-numismatics/en.html', import.meta.url), 'utf8');

const COIN_PATH = '/coleccion/colombia-numismatica/2-centavos-lazareto-1921/';

describe('Lazaretto essay and the 1921 2 centavos', () => {
  it('links the essay to the published coin and the coin back to the essay', () => {
    assert.equal(LAZARETTO_1921_HOLDING_ID, '2-centavos-lazareto-1921');
    assert.match(coinageSource, new RegExp(`id: '${LAZARETTO_1921_HOLDING_ID}'`));
    assert.match(coinageSource, /COLOMBIA_COINAGE_PATH\}2-centavos-lazareto-1921\//);
    assert.match(coinageSource, /href: LAZARETTOS_NUMISMATICS_PATH/);
    assert.match(coinageSource, /es: 'Numismática de los Lazaretos'/);
    assert.match(coinageSource, /en: 'Numismatics of the Lazarettos'/);
    assert.equal(
      localizePath(LAZARETTOS_NUMISMATICS_PATH, 'en'),
      lazarettosNumismaticsPath('en'),
    );
    assert.equal(localizePath(COIN_PATH, 'en'), '/en/collection/colombia-numismatics/2-centavos-lazareto-1921/');
    assert.match(bodyEs, new RegExp(`href="${COIN_PATH}"`));
    assert.match(bodyEn, new RegExp(`href="${COIN_PATH}"`));
    assert.match(bodyEs, /el anverso lleva la cruz/);
    assert.match(bodyEn, /the obverse bears the cross/);
    assert.doesNotMatch(bodyEs, /2 centavos de 1921[\s\S]{0,400}(precio|US\$)/);
    assert.doesNotMatch(bodyEn, /1921 2 centavos[\s\S]{0,500}(\bprice\b|US\$)/);
  });

  it('renders the holding card and both back links from data, not component literals', () => {
    assert.match(pageSource, /LAZARETTO_1921_HOLDING_ID/);
    assert.match(pageSource, /size="frame"/);
    assert.doesNotMatch(pageSource, /object-cover|size="compact"/);
    assert.match(pageSource, /CATALOG_PIECE_GRID/);
    assert.match(pageSource, /holdingHref/);
    assert.match(pageSource, /t\.holdingCta/);
    assert.match(pageSource, /t\.holdingImageAlt/);
    assert.match(lazarettosNumismaticsCopy.es.holdingCta, /2 centavos de 1921/);
    assert.match(lazarettosNumismaticsCopy.en.holdingCta, /1921 2 centavos/);
    assert.match(coinPageSource, /piece\.related/);
    assert.match(coinPageSource, /localizePath\(item\.href, locale\)/);
    assert.doesNotMatch(pageSource, /2 centavos de 1921/);
    assert.doesNotMatch(coinPageSource, /Numismática de los Lazaretos/);
  });
});
