import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { register } from 'node:module';
import { describe, it } from 'node:test';
import { additions, catalogAdditions } from './holdings.ts';
import { localizePath } from '../lib/locale-paths.ts';
import { META_DESCRIPTION_MAX } from '../lib/piece-seo.ts';

register(new URL('../lib/resolve-ts-hook.mjs', import.meta.url));

const { noteById } = await import('./estados-unidos.ts');

const note = noteById('10-centavos-fraccional-1874');
const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/10-centavos-fraccional-1874/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL(
    '../pages/en/collection/united-states/10-cents-fractional-currency-1874/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const stem = 'united-states-fractional-currency-10-cents-1874-p122';

describe('Fractional Currency 10¢ Series of 1874 (P#122)', () => {
  it('records a Fifth Issue holding without inventing a serial or Fr. key variety', () => {
    assert.ok(note);
    assert.equal(note.chapterId, 'us-fractional');
    assert.equal(note.serial, '—');
    assert.match(note.no_serial_reason, /not printed with a serial/i);
    assert.equal(note.pick, 'P#122 · N#203351');
    assert.equal(note.friedberg, 'Fr. 1265 o Fr. 1266');
    assert.equal(note.cert_number, undefined);
    assert.match(note.signatures.es, /Allison/);
    assert.match(note.signatures.en, /Spinner/);
    assert.match(note.description.es, /Meredith/);
    assert.match(note.description.en, /COLUMBIAN BANK NOTE/);
    assert.match(note.description.es, /no confirma la variedad/);
    assert.match(note.description.en, /does not confirm the variety/);
    assert.match(note.printed.es, /62\.661\.900/);
    assert.match(note.printed.en, /62,661,900/);
    const prose = [
      note.lead.es,
      note.lead.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      note.population.es,
      note.population.en,
    ].join('\n');
    assert.doesNotMatch(prose, /\b(hammer|realized|asking)\b/i);
    assert.match(note.unclaimed.map((item) => item.es).join('\n'), /No se publica un precio/);
    assert.match(note.unclaimed.map((item) => item.en).join('\n'), /No price/);
    assert.equal(note.metaDescription.es.length <= META_DESCRIPTION_MAX, true);
    assert.equal(note.metaDescription.en.length <= META_DESCRIPTION_MAX, true);
    assert.equal(additions.filter((row) => row.id === 'us-10-centavos-fraccional-1874').length, 1);
    assert.equal(additions.at(-1)?.id, 'us-50-centavos-fraccionarios-1875');
    assert.equal(additions.at(-1)?.kind, 'banknote');
    assert.equal(catalogAdditions.filter((row) => row.id === 'us-10-centavos-fraccional-1874').length, 1);
    assert.equal(catalogAdditions.at(-1)?.id, 'us-50-centavos-fraccionarios-1875');
  });

  it('names the scans for search and keeps the supplied frame', () => {
    for (const side of ['front', 'back', 'composite']) {
      const file = new URL(`../../catalog-src/catalog/united-states/${stem}-${side}.jpg`, import.meta.url);
      assert.equal(existsSync(file), true, side);
      assert.match(note.images[side], new RegExp(`${stem}-${side}\\.jpg$`));
    }
    assert.equal(note.images.width, 991);
    assert.equal(note.images.height, 629);
  });

  it('keeps thin ES and EN routes', () => {
    assert.equal(
      localizePath(note.path, 'en'),
      '/en/collection/united-states/10-cents-fractional-currency-1874/',
    );
    assert.match(esPiece, /locale="es"/);
    assert.match(enPiece, /locale="en"/);
    assert.match(esPiece, /noteById\('10-centavos-fraccional-1874'\)/);
    assert.match(enPiece, /noteById\('10-centavos-fraccional-1874'\)/);
  });
});
