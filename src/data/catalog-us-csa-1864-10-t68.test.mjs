import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { register } from 'node:module';
import { describe, it } from 'node:test';
import { additions, catalogAdditions } from './holdings.ts';
import { limitMetaDescription, piecePageMeta } from '../lib/piece-seo.ts';
import { englishRedirects, localizePath } from '../lib/locale-paths.ts';
import { pieceScanAlt } from '../lib/catalog-media.ts';

register(new URL('../lib/resolve-ts-hook.mjs', import.meta.url));

const esPiece = readFileSync(
  new URL('../pages/coleccion/estados-unidos/10-dolares-confederados-1864/index.astro', import.meta.url),
  'utf8',
);
const enPiece = readFileSync(
  new URL('../pages/en/collection/united-states/10-dollars-confederate-1864/index.astro', import.meta.url),
  'utf8',
);

describe('US Confederate T-68 $10 serial 83148', () => {
  it('records P-68 / T-68 as its own object, without a plate, series, or certificate', async () => {
    const { noteById } = await import('./estados-unidos.ts');
    const note = noteById('10-dolares-confederados-1864');
    assert.ok(note);
    assert.equal(note.chapterId, 'us-confederado');
    assert.equal(note.pick, 'P#68 · T-68 · N#207970');
    assert.equal(note.serial, '83148');
    assert.equal(note.serial_display, undefined);
    assert.equal(note.cert_number, undefined);
    assert.equal(note.cert_grader, undefined);
    assert.equal(note.images.front, '');
    assert.equal(note.images.back, '');
    assert.match(note.printed.es, /9\.071\.000/);
    assert.match(note.printed.en, /9,071,000/);
    assert.match(note.printed.es, /177 × 76 mm/);
    assert.match(note.printed.es, /no de este serial/);
    assert.match(note.printed.en, /not as a measurement of this serial/);
    assert.match(note.description.es, /no coloca el serial 83148/);
    assert.match(note.description.en, /does not place serial 83148/);
    assert.match(note.grade.es, /no se afirma grado/);
    assert.match(note.grade.en, /no grade is stated/);
    assert.doesNotMatch(note.description.es, /plancha [A-Z]/);
    assert.doesNotMatch(`${note.serial} ${note.description.es} ${note.description.en}`, /Cr\.\s*542/);
    const publicCopy = [
      note.lead.es,
      note.lead.en,
      note.description.es,
      note.description.en,
      note.scarcity.es,
      note.scarcity.en,
      note.population.es,
      note.population.en,
    ].join('\n');
    assert.doesNotMatch(publicCopy, /precio|hammer|realized|estimate/i);
    assert.equal(additions.at(-1)?.id, 'us-csa-1864-10-83148');
    assert.equal(additions.at(-1)?.kind, 'banknote');
    assert.equal(catalogAdditions.at(-1)?.id, 'us-csa-1864-10-t68-p68');
    assert.equal(
      additions.filter((row) => row.id === 'us-csa-1864-10-83148').length,
      1,
    );
  });

  it('keeps the lead inside the meta limit, pairs the routes, and does not emit a scan alt as the caption', async () => {
    const { noteById } = await import('./estados-unidos.ts');
    const note = noteById('10-dolares-confederados-1864');
    assert.ok(note);
    assert.equal(limitMetaDescription(note.lead.es), note.lead.es);
    assert.equal(limitMetaDescription(note.lead.en), note.lead.en);
    assert.ok(note.lead.es.length <= 155);
    assert.ok(note.lead.en.length <= 155);
    for (const locale of ['es', 'en']) {
      const seo = piecePageMeta({
        kind: 'note',
        title: note.title[locale],
        kicker: note.kicker[locale],
        lead: note.lead[locale],
        locale,
        country: locale === 'en' ? 'United States' : 'Estados Unidos',
      });
      assert.ok(seo.documentTitle.length <= 70, seo.documentTitle);
      assert.equal(seo.description, note.lead[locale]);
    }
    assert.equal(
      localizePath('/coleccion/estados-unidos/10-dolares-confederados-1864/', 'en'),
      '/en/collection/united-states/10-dollars-confederate-1864/',
    );
    const redirects = englishRedirects();
    assert.equal(
      redirects['/en/coleccion/estados-unidos/10-dolares-confederados-1864/'],
      '/en/collection/united-states/10-dollars-confederate-1864/',
    );
    assert.equal(
      redirects['/en/coleccion/united-states/10-dollars-confederate-1864/'],
      '/en/collection/united-states/10-dollars-confederate-1864/',
    );
    assert.match(esPiece, /UnitedStatesNotePage/);
    assert.match(esPiece, /locale="es"/);
    assert.match(esPiece, /noteById\('10-dolares-confederados-1864'\)/);
    assert.match(enPiece, /UnitedStatesNotePage/);
    assert.match(enPiece, /locale="en"/);
    assert.notEqual(
      pieceScanAlt({ sideLabel: 'Anverso', title: note.title.es, serial: note.serial }),
      note.frontCaption.es,
    );
    assert.notEqual(
      pieceScanAlt({ sideLabel: 'Back', title: note.title.en, serial: note.serial }),
      note.backCaption.en,
    );
  });
});
