import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { register } from 'node:module';
import {
  catalogDownloadFilename,
  catalogDownloadFormat,
  catalogDownloadLabel,
  catalogDownloadLabels,
  catalogDownloadSrc,
  linkFirstGlossaryTerms,
  distinctFigureAlt,
  pieceScanAlt,
} from './catalog-media.ts';

register(new URL('./resolve-ts-hook.mjs', import.meta.url));

describe('catalog download paths', () => {
  it('maps display catalog URLs onto the tiled download tree', () => {
    assert.equal(
      catalogDownloadSrc('/images/catalog/philippines/philippines-treasury-1-peso-series-66-f70618009-front.jpg'),
      '/images/catalog-download/philippines/philippines-treasury-1-peso-series-66-f70618009-front.jpg',
    );
    assert.equal(catalogDownloadSrc('/images/hero-slide.jpg'), '/images/hero-slide.jpg');
    assert.equal(catalogDownloadFilename('/images/catalog/china/hero-china.jpg'), 'hero-china.jpg');
    assert.equal(catalogDownloadFormat('/images/catalog/netherlands/netherlands-utrecht-1-ducat-1761-ngc-4685927-012-composite.png'), 'PNG');
    assert.match(catalogDownloadLabel('/a.jpg', 'es'), /Descargar JPEG.*Se inicia una descarga/);
    assert.match(catalogDownloadLabel('/a.png', 'en'), /Download PNG.*A download will start/);
  });

  it('names the scan once under the image and keeps a short dialog label', () => {
    const detail = { side: 'Anverso', serial: '00113227' };
    const labels = catalogDownloadLabels('/images/catalog/note.jpg', 'es', detail);
    assert.equal(labels.short, 'Descargar JPEG del anverso, serial 00113227');
    assert.equal(labels.full, 'Descargar JPEG del anverso, serial 00113227. Se inicia una descarga.');
    assert.equal((labels.full.match(/Se inicia una descarga/g) ?? []).length, 1);
    assert.equal((labels.short.match(/Se inicia una descarga/g) ?? []).length, 0);

    const back = catalogDownloadLabels('/images/catalog/note.jpg', 'es', { side: 'Reverso', serial: '00113227' });
    assert.notEqual(labels.full, back.full);
    assert.match(back.short, /del reverso, serial 00113227/);

    const english = catalogDownloadLabels('/images/catalog/note.png', 'en', { side: 'Face', serial: '00113227' });
    assert.equal(english.short, 'Download PNG of the face, serial 00113227');
    assert.equal(english.full, 'Download PNG of the face, serial 00113227. A download will start.');

    const green = catalogDownloadLabels('/a.jpg', 'es', {
      side: 'Anverso',
      serial: '—',
      title: '15 centavos · tiquete estudiantil · verde',
    });
    const red = catalogDownloadLabels('/a.jpg', 'es', {
      side: 'Anverso',
      serial: '—',
      title: '15 centavos · tiquete estudiantil · rojo',
    });
    assert.notEqual(green.short, red.short);
    assert.match(green.short, /del anverso, 15 centavos tiquete estudiantil verde/);
    assert.equal((green.full.match(/Se inicia una descarga/g) ?? []).length, 1);
  });
});

describe('piece scan alt', () => {
  it('keeps a short object description for the 1994 10,000 pesos', () => {
    assert.equal(
      pieceScanAlt({
        sideLabel: 'Anverso',
        title: '10.000 pesos · reposición estrella · 1994 · 00113227',
        serial: '00113227',
      }),
      'Anverso, 10.000 pesos 1994, serial 00113227',
    );
    assert.equal(
      pieceScanAlt({
        sideLabel: 'Face',
        title: '10,000 pesos · star replacement · 1994',
        serial: '00113227',
      }),
      'Face, 10,000 pesos 1994, serial 00113227',
    );
  });

  it('omits a dash serial and stays within 80 characters on every holding', async () => {
    assert.equal(
      pieceScanAlt({
        sideLabel: 'Anverso',
        title: '5 dólares · Continental Currency · 14 de enero de 1779',
        serial: '—',
      }),
      'Anverso, 5 dólares 14 de enero de 1779',
    );

    const noteSides = { es: ['Anverso', 'Reverso'], en: ['Face', 'Back'] };
    const coinSides = { es: ['Anverso', 'Reverso'], en: ['Obverse', 'Reverse'] };
    const { colombiaNotes, notePieces: colombiaNotePieces } = await import('../data/colombia-notes.ts');
    const { ecuadorNotes, notePieces: ecuadorNotePieces } = await import('../data/ecuador.ts');
    const { unitedStatesNotes } = await import('../data/estados-unidos.ts');
    const { chinaNotes } = await import('../data/china.ts');
    const { victoryNotes } = await import('../data/philippines-victory-66.ts');
    const { mpcVietnamNotes } = await import('../data/mpc-vietnam.ts');
    const { mpcProgramNotes } = await import('../data/mpc.ts');
    const { puertoRicoNotes } = await import('../data/puerto-rico.ts');
    const { englandNotes } = await import('../data/england-polymer.ts');
    const { canadaNotes } = await import('../data/canada-polymer.ts');
    const { malaysiaNotes } = await import('../data/malaysia-polymer.ts');
    const { colombiaCoinagePieces } = await import('../data/colombia-coinage-pieces.ts');
    const { unitedStatesCoins } = await import('../data/estados-unidos-coinage.ts');
    const { spainCoins } = await import('../data/espana-coinage.ts');
    const { puertoRicoCoins } = await import('../data/puerto-rico-coinage.ts');
    const { netherlandsCoins } = await import('../data/netherlands-coinage.ts');
    const notes = [
      ...colombiaNotes.flatMap((note) => colombiaNotePieces(note)),
      ...ecuadorNotes.flatMap((note) => ecuadorNotePieces(note)),
      ...unitedStatesNotes,
      ...chinaNotes,
      ...victoryNotes,
      ...mpcVietnamNotes,
      ...mpcProgramNotes,
      ...puertoRicoNotes,
      ...englandNotes,
      ...canadaNotes,
      ...malaysiaNotes,
    ];
    const coins = [
      ...colombiaCoinagePieces,
      ...unitedStatesCoins,
      ...spainCoins,
      ...puertoRicoCoins,
      ...netherlandsCoins,
    ];

    for (const locale of ['es', 'en']) {
      for (const piece of notes) {
        for (const side of noteSides[locale]) {
          const alt = pieceScanAlt({
            sideLabel: side,
            title: piece.title[locale],
            serial: piece.serial,
            serialDisplay: 'serial_display' in piece ? piece.serial_display : undefined,
          });
          assert.ok(alt.length <= 80, `${piece.id} ${locale} ${side}: ${alt}`);
          assert.notEqual(alt, piece.frontCaption[locale], piece.id);
          assert.notEqual(alt, piece.backCaption[locale], piece.id);
        }
      }
      for (const piece of coins) {
        for (const side of coinSides[locale]) {
          const alt = pieceScanAlt({
            sideLabel: side,
            title: piece.title[locale],
          });
          assert.ok(alt.length <= 80, `${piece.id} ${locale} ${side}: ${alt}`);
          assert.notEqual(alt, piece.frontCaption[locale], piece.id);
          assert.notEqual(alt, piece.backCaption[locale], piece.id);
        }
        const pair = pieceScanAlt({
          sideLabel: locale === 'es' ? 'Anverso y reverso' : 'Obverse and reverse',
          title: piece.title[locale],
        });
        assert.ok(pair.length <= 80, `${piece.id} pair: ${pair}`);
        assert.notEqual(pair, `${piece.frontCaption[locale]} ${piece.backCaption[locale]}`);
      }
    }
  });
});

describe('distinctFigureAlt', () => {
  it('leaves a different alt untouched and shortens a duplicated caption', () => {
    assert.equal(distinctFigureAlt('Anverso, serial 1', 'Retrato de Bolívar en el anverso.'), 'Anverso, serial 1');
    const long =
      'Billetes antiguos apilados junto a monedas de colección dispuestas sobre una mesa de madera';
    const short = distinctFigureAlt(long, long);
    assert.notEqual(short, long);
    assert.ok(short.length <= 80);
    assert.equal(distinctFigureAlt('Cara y sello', 'Cara y sello'), '');
  });
});

describe('linkFirstGlossaryTerms', () => {
  it('does not nest a Peso link inside a Peso oro href', () => {
    const html = linkFirstGlossaryTerms(
      'The Banco de la República printed this two-hundred-peso oro at its Imprenta de Billetes.',
      'en',
    );
    assert.match(html, /href="\/en\/glossary\/gold-peso\/"/);
    assert.match(html, />peso oro</);
    assert.doesNotMatch(html, /gold-<a/);
    assert.doesNotMatch(html, /peso\/"&gt;/);
    assert.equal((html.match(/<a\b/g) ?? []).length, 1);
  });

  it('still links a later standalone Peso after wrapping Peso oro', () => {
    const html = linkFirstGlossaryTerms(
      'A two-hundred-peso oro, not a Mexican peso.',
      'en',
    );
    assert.match(html, /href="\/en\/glossary\/gold-peso\/"/);
    assert.match(html, /href="\/en\/glossary\/#peso"/);
    assert.equal((html.match(/<a\b/g) ?? []).length, 2);
  });
});
