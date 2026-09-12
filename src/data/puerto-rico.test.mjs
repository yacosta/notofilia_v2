import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const dataSource = readFileSync(new URL('./puerto-rico.ts', import.meta.url), 'utf8');

describe('Puerto Rico series overview copy', () => {
  it('keeps the corrected Spanish series essay', () => {
    assert.match(dataSource, /República de Cuba en armas/);
    assert.match(dataSource, /El 1 de junio de 1869, la República autorizó/);
    assert.match(dataSource, /scrip privado/);
    assert.match(dataSource, /Autorizada por real decreto/);
    assert.match(dataSource, /monopolio de la emisión de billetes/);
    assert.match(dataSource, /En 1902, el First National Bank of Porto Rico/);
    assert.match(dataSource, /24 de enero de 1916, una comisión/);
    assert.match(dataSource, /enero de 1925, los ejemplares/);
    assert.match(dataSource, /Por eso, los billetes/);
    assert.match(dataSource, /solo sobrevive una fracción de lo emitido/);
    assert.match(
      dataSource,
      /recibo de contribución provisional \(N\.º 32, abajo\) y billete de Canje de 1895/,
    );
  });

  it('pairs the English series essay with the same facts', () => {
    assert.match(dataSource, /Republic of Cuba in arms/);
    assert.match(dataSource, /On 1 June 1869, the Republic authorized/);
    assert.match(dataSource, /private scrip/);
    assert.match(dataSource, /monopoly of banknote issue/);
    assert.match(dataSource, /In 1902, the First National Bank of Porto Rico/);
    assert.match(dataSource, /24 January 1916, a liquidation commission/);
    assert.match(dataSource, /January 1925, the recovered pieces/);
    assert.match(
      dataSource,
      /provisional fundraising receipt \(No\. 32, below\), and 1895 exchange note/,
    );
  });
});
