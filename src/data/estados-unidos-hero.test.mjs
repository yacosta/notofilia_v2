import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const page = readFileSync(new URL('../components/catalog/UnitedStatesSeriesPage.astro', import.meta.url), 'utf8');
const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const heroMaster = new URL('../../catalog-src/catalog/estados-unidos/hero-estados-unidos.jpg', import.meta.url);

describe('United States series hero', () => {
  it('uses one country-folder master for both locales and Open Graph', () => {
    assert.match(page, /src: '\/images\/catalog\/estados-unidos\/hero-estados-unidos\.jpg'/);
    assert.match(page, /ogImage=\{hero\.src\}/);
    assert.match(page, /ogImageAlt=\{t\.heroAlt\}/);
    assert.doesNotMatch(page, /\/images\/catalog\/united-states\.jpg/);
    assert.doesNotMatch(page, /src: '\/images\/catalog\/estados-unidos\.jpg'/);
    assert.equal(existsSync(heroMaster), true);
  });

  it('keeps bilingual alts that name the Federal Reserve districts map', () => {
    assert.match(data, /doce distritos de la Reserva Federal/);
    assert.match(data, /twelve Federal Reserve districts/);
  });
});
