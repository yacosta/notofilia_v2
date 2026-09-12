import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const data = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const faq = readFileSync(new URL('./page-faq.ts', import.meta.url), 'utf8');

const NEW_CHAPTERS = ['us-demand', 'us-fractional', 'us-national', 'us-treasury', 'us-size'];

describe('US series history chapters', () => {
  it('adds Demand Notes, Fractional, Nationals, Coin Notes, and the 1928 size line without holdings', () => {
    for (const id of NEW_CHAPTERS) {
      assert.match(data, new RegExp(`id: '${id}'`));
      assert.doesNotMatch(data, new RegExp(`chapterId: '${id}'`));
    }

    assert.match(data, /id: 'us-demand'/);
    assert.match(data, /no hay aún un Demand Note/);
    assert.match(data, /does not yet hold a Demand Note/);

    assert.match(data, /Sherman Silver Purchase Act/);
    assert.match(data, /Watermelon Note/);
    assert.match(data, /Educational Series de 1896/);
    assert.match(data, /certificado de plata, no esta clase/);
    assert.match(data, /Silver Certificate issue, not this class/);
    assert.match(data, /No son Treasury Notes/);
    assert.match(data, /not Treasury Notes/);

    assert.match(data, /6,14 × 2,61/);
    assert.match(data, /6\.14 × 2\.61/);
    assert.match(data, /cerca de un 30 %/);
    assert.match(data, /roughly 30 percent smaller/);
  });

  it('cites Friedberg chapters, BEP history, and PMG without republishing prices or populations', () => {
    assert.match(data, /https:\/\/www\.coin-currency\.com\//);
    assert.match(data, /https:\/\/www\.pmgnotes\.com\/population-report\//);
    assert.match(data, /https:\/\/www\.bep\.gov\/currency\/history/);
    assert.match(data, /https:\/\/www\.bep\.gov\/media\/1106\/download\?inline=/);
    assert.match(data, /no se republican columnas de precio/);
    assert.match(data, /price columns are not republished/);
    assert.match(data, /no republica cifras de población/);
    assert.match(data, /does not republish population figures/);

    assert.match(data, /Demand Notes de 1861/);
    assert.match(data, /Demand Notes of 1861/);

    assert.match(faq, /primer papel federal de circulación general/);
    assert.match(faq, /first federal paper of general circulation/);
    assert.match(faq, /tamaño pequeño/);
    assert.match(faq, /change to small size/);
  });
});
