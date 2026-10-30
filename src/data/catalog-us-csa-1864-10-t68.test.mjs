import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { register } from 'node:module';
import { describe, it } from 'node:test';
import { additions, catalogAdditions } from './holdings.ts';
import { limitMetaDescription, piecePageMeta } from '../lib/piece-seo.ts';
import { planSeoResponse } from '../lib/gsc-redirects.ts';
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
  it('records P-68 / T-68 serial 83148, 9th series, plate F, without a certificate', async () => {
    const { noteById } = await import('./estados-unidos.ts');
    const note = noteById('10-dolares-confederados-1864');
    assert.ok(note);
    assert.equal(note.chapterId, 'us-confederado');
    assert.equal(note.pick, 'P#68 · T-68 · N#207970');
    assert.equal(note.serial, '83148');
    assert.equal(note.serial_display, '83148 · 9 · F');
    assert.equal(note.cert_number, undefined);
    assert.equal(note.cert_grader, undefined);
    assert.equal(
      note.images.front,
      '/images/catalog/united-states/united-states-confederate-states-10-dollars-1864-83148-9-f-front.jpg',
    );
    assert.equal(
      note.images.back,
      '/images/catalog/united-states/united-states-confederate-states-10-dollars-1864-83148-9-f-back.jpg',
    );
    assert.equal(
      note.images.composite,
      '/images/catalog/united-states/united-states-confederate-states-10-dollars-1864-83148-9-f-composite.jpg',
    );
    assert.equal(note.images.width, 1672);
    assert.equal(note.images.height, 941);
    for (const side of ['front', 'back', 'composite']) {
      assert.equal(
        existsSync(
          new URL(
            `../../catalog-src/catalog/united-states/united-states-confederate-states-10-dollars-1864-83148-9-f-${side}.jpg`,
            import.meta.url,
          ),
        ),
        true,
        side,
      );
    }
    assert.match(note.printed.es, /9\.071\.000/);
    assert.match(note.printed.en, /9,071,000/);
    assert.match(note.printed.es, /177 × 76 mm/);
    assert.match(note.printed.es, /no de este serial/);
    assert.match(note.printed.en, /not as a measurement of this serial/);
    assert.match(note.printed.es, /9 SERIES/);
    assert.match(note.description.es, /plancha F/);
    assert.match(note.description.en, /plate F/);
    assert.match(note.description.es, /IN MEMORIAM/);
    assert.match(note.description.en, /postwar poem/);
    assert.doesNotMatch(note.description.es, /Evans & Cogswell; esta ficha no coloca/);
    assert.match(note.grade.es, /no se afirma grado/);
    assert.match(note.grade.en, /no grade is stated/);
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
    const { milestones } = await import('../lib/milestones.ts');
    assert.equal(milestones[0]?.holdingId, 'co-1980-5-pesos-oro-00011943');
    assert.match(
      milestones[0]?.image ?? '',
      /colombia-banco-de-la-republica-5-pesos-oro-1980-00011943-front\.jpg$/,
    );
    assert.equal(additions.at(-1)?.id, 'co-1980-5-pesos-oro-00011943');
    assert.equal(additions.at(-1)?.kind, 'banknote');
    assert.equal(catalogAdditions.at(-1)?.id, 'co-1980-5-pesos-oro-p406f-h158');
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
    for (const legacy of [
      '/en/coleccion/estados-unidos/10-dolares-confederados-1864/',
      '/en/coleccion/united-states/10-dollars-confederate-1864/',
    ]) {
      const planned = planSeoResponse(legacy);
      assert.equal(planned.type, 'redirect');
      assert.equal(
        planned.type === 'redirect' ? planned.target : '',
        '/en/collection/united-states/10-dollars-confederate-1864/',
      );
    }
    assert.equal(planSeoResponse('/en/collection/united-states/10-dollars-confederate-1864/').type, 'pass');
    assert.equal(planSeoResponse('/coleccion/estados-unidos/10-dolares-confederados-1864/').type, 'pass');
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
