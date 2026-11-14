import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { register } from 'node:module';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';
import { limitMetaDescription } from '../lib/piece-seo.ts';
import { additions, catalogAdditions } from './holdings.ts';
import { seriesFaqs } from './page-faq.ts';

register(new URL('../lib/resolve-ts-hook.mjs', import.meta.url));

const esRoute = readFileSync(
  new URL(
    '../pages/coleccion/estados-unidos/tim-prusmack/1-dolar-educational-1896-12-250/index.astro',
    import.meta.url,
  ),
  'utf8',
);
const enRoute = readFileSync(
  new URL(
    '../pages/en/collection/united-states/tim-prusmack/educational-1-dollar-1896-print-12-250/index.astro',
    import.meta.url,
  ),
  'utf8',
);

const IMAGE =
  '/images/catalog/united-states/united-states-tim-prusmack-1-dollar-1896-history-instructing-youth-print-12-250.jpg';

describe('Tim Prusmack Educational $1 print, 12/250', () => {
  it('records edition 12 of 250 as an art print, not Fr. 224', async () => {
    const { noteById } = await import('./estados-unidos.ts');
    const note = noteById('prusmack-educational-1-dolar-1896-12-250');
    assert.ok(note);
    assert.equal(note.chapterId, 'us-miscelaneos');
    assert.equal(note.artform, 'Print');
    assert.equal(note.serial, '12/250');
    assert.equal(note.serial_display, '#12/250');
    assert.equal(note.pick, 'Tim Prusmack · 12/250');
    assert.notEqual(note.serial, 'B3207078');
    assert.match(note.description.es, /P29A1197/);
    assert.match(note.description.es, /P29A012/);
    assert.match(note.description.en, /SERIES OF 1897/);
    assert.match(note.description.es, /SERIES OF 1896/);
    assert.match(note.description.es, /B3207078/);
    assert.match(note.description.es, /no es esa plancha/i);
    assert.doesNotMatch(note.signatures.es, /Tillman|Morgan/);
    assert.doesNotMatch(note.signatures.en, /Tillman|Morgan/);
    assert.equal(note.images.back, '');
    assert.equal(note.images.front, IMAGE);
    assert.equal(note.images.composite, IMAGE);
    assert.equal(note.images.width, 1024);
    assert.equal(note.images.height, 771);
    assert.equal(note.heading.es, 'Estampa de Tim Prusmack del 1 dólar de 1896');
    assert.equal(note.historyHeading.es, 'El artista');
    assert.equal(note.historyHeading.en, 'The artist');
    const history = Array.isArray(note.history) ? note.history : [];
    const bio = history.map((paragraph) => `${paragraph.es}\n${paragraph.en}`).join('\n');
    assert.match(bio, /26 de enero de 2004/);
    assert.match(bio, /26 January 2004/);
    assert.match(bio, /Treasure Coast Coin Club/);
    assert.match(bio, /artmatist/);
    assert.match(bio, /250/);
    assert.match(bio, /J\. S\. G\. Boggs/);
    assert.match(bio, /Mary Ellen Withrow/);
    assert.match(bio, /Lazy Deuce/);
    assert.match(bio, /178 de 250/);
    assert.doesNotMatch(bio, /USD|euros?|precio|hammer|realized|estimate/i);
    assert.equal(
      localizePath(note.path, 'en'),
      '/en/collection/united-states/tim-prusmack/educational-1-dollar-1896-print-12-250/',
    );
    assert.equal(localizePath(note.path, 'es'), note.path);
    assert.match(esRoute, /locale="es"/);
    assert.match(enRoute, /locale="en"/);
    assert.match(esRoute, /prusmack-educational-1-dolar-1896-12-250/);
    for (const locale of ['es', 'en']) {
      const meta = note.metaDescription[locale];
      assert.equal(limitMetaDescription(meta), meta);
      assert.ok(meta.length <= 155, `${locale} ${meta.length}`);
      assert.ok(meta.length >= 80, `${locale} ${meta.length}`);
      assert.ok(note.seoTitle[locale].length <= 60, note.seoTitle[locale]);
    }
    const prose = [
      note.lead.es,
      note.lead.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      note.population.es,
      note.population.en,
      note.printed.es,
      note.printed.en,
    ].join('\n');
    assert.doesNotMatch(prose, /USD|euros?|precio|hammer|realized|estimate/i);
    assert.equal(additions.at(-1)?.id, 'us-prusmack-educational-1-dolar-1896-12-250');
    assert.equal(additions.at(-1)?.kind, 'banknote');
    assert.equal(catalogAdditions.at(-1)?.id, 'us-prusmack-educational-1-dolar-1896-12-250');
    assert.equal(additions.filter((row) => row.id === 'us-prusmack-educational-1-dolar-1896-12-250').length, 1);
    const { milestones } = await import('../lib/milestones.ts');
    assert.equal(milestones[0]?.holdingId, 'us-prusmack-educational-1-dolar-1896-12-250');
    assert.match(milestones[0]?.href ?? '', /tim-prusmack\/1-dolar-educational-1896-12-250/);
    assert.match(milestones[0]?.image ?? '', /prusmack-1-dollar-1896-history-instructing-youth-print-12-250/);
    const faq = seriesFaqs['united-states'].map((item) => `${item.question.es} ${item.answer.es}`).join('\n');
    assert.match(faq, /¿Quién fue Tim Prusmack\?/);
    assert.match(faq, /26 de enero de 2004/);
    assert.match(faq, /no es el certificado de plata Fr\. 224/);
    assert.ok(
      existsSync(
        new URL(
          '../../catalog-src/catalog/united-states/united-states-tim-prusmack-1-dollar-1896-history-instructing-youth-print-12-250.jpg',
          import.meta.url,
        ),
      ),
    );
  });
});
