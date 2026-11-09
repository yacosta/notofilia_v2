import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { fancyCatalogRows } from '../data/fancy-serial-catalog.ts';
import { matchFancyCatalog, readSerialDate } from './fancy-serial-catalog.ts';

const EXAMPLES = [
  ['broken-ladder-radar', ['67899876', '12344321']],
  ['partial-ladder', ['00001234', '00008765']],
  ['pair-ladder', ['22334455', '77665544']],
  ['modular-ladder', ['65432109', '78901234', '01234567']],
  ['radar-special', ['88833888', '99955999']],
  ['two-heads', ['26666662', '72222227', '10000001']],
  ['quartet', ['77770000', '33336666']],
  ['two-digit-pair', ['15151515', '49494949']],
  ['partial-repeater', ['00007878', '00004545']],
  ['radar-repeater', ['12211221', '96699669']],
  ['low-two', ['00000087', '00000015']],
  ['high-two', ['99999976', '99999914']],
  ['comet', ['67777777', '11111119']],
  ['radar-binary-ternary', ['88988988', '37322373', '83888838']],
  ['binary-zeros-ones', ['01100111', '00101100']],
  ['near-solid', ['99939999', '77771777']],
  ['low-three', ['00000345', '00000781']],
  ['high-three', ['99999634', '99999817']],
  ['mixed-pairs', ['88556633', '99006633']],
  ['ordinary-radar', ['58911985', '67422476', '70200207']],
  ['repeater', ['25762576', '81378137']],
  ['one-shift', ['95200952', '59311593']],
  ['other-binary', ['22282888', '77577575']],
  ['six-of-a-kind', ['59955555', '33331331']],
  ['ternary', ['46434336', '85557887']],
  ['eight-distinct', ['48267915', '74208619']],
];

describe('eight-digit fancy catalog', () => {
  it('names every published example with its row', () => {
    for (const [id, serials] of EXAMPLES) {
      for (const serial of serials) {
        assert.ok(matchFancyCatalog(serial).includes(id), `${serial} → ${id}`);
      }
    }
  });

  it('keeps the list counts for the closed patterns', () => {
    const counts = Object.fromEntries(fancyCatalogRows.map((row) => [row.id, row.count]));
    assert.equal(counts['broken-ladder-radar'], 12);
    assert.equal(counts['partial-ladder'], 12);
    assert.equal(counts['pair-ladder'], 14);
    assert.equal(counts['modular-ladder'], 20);
    assert.equal(counts['radar-special'], 90);
    assert.equal(counts['binary-zeros-ones'], 254);
    assert.equal(counts['near-solid'], 540);
    assert.equal(counts['mixed-pairs'], 5040);
    assert.equal(counts['one-shift'], 9990);
    assert.equal(counts['other-binary'], 11176);
    assert.equal(counts['six-of-a-kind'], 22680);
    assert.equal(counts['eight-distinct'], 1814400);
    assert.equal(counts['name-day'], null);
    assert.equal(counts['historical-date'], null);
  });

  it('prefers the tighter name when two rows overlap', () => {
    assert.deepEqual(matchFancyCatalog('12211221'), ['radar-repeater']);
    assert.deepEqual(matchFancyCatalog('12345678'), ['modular-ladder']);
    assert.ok(matchFancyCatalog('22334455').includes('pair-ladder'));
    assert.ok(matchFancyCatalog('22334455').includes('mixed-pairs'));
    assert.deepEqual(matchFancyCatalog('88833888'), ['radar-special']);
    assert.deepEqual(matchFancyCatalog('88988988'), ['radar-binary-ternary']);
    assert.deepEqual(matchFancyCatalog('37322373'), ['radar-binary-ternary']);
    assert.deepEqual(matchFancyCatalog('95200952'), ['one-shift']);
    assert.ok(matchFancyCatalog('10000001').includes('two-heads'));
    assert.ok(matchFancyCatalog('10000001').includes('binary-zeros-ones'));
  });

  it('leaves solids and ordinary mixed serials off the list', () => {
    assert.deepEqual(matchFancyCatalog('88888888'), []);
    assert.deepEqual(matchFancyCatalog('00000000'), []);
    assert.deepEqual(matchFancyCatalog('11111111'), []);
    assert.deepEqual(matchFancyCatalog('11234567'), []);
    assert.deepEqual(matchFancyCatalog('1234567'), []);
  });

  it('reads DDMMYYYY and rejects impossible days', () => {
    assert.deepEqual(readSerialDate('01051946'), { day: 1, month: 5, year: 1946 });
    assert.deepEqual(readSerialDate('20071810'), { day: 20, month: 7, year: 1810 });
    assert.deepEqual(readSerialDate('29022000'), { day: 29, month: 2, year: 2000 });
    assert.equal(readSerialDate('29022001'), null);
    assert.equal(readSerialDate('00001234'), null);
    assert.equal(readSerialDate('1234567'), null);
  });
});
