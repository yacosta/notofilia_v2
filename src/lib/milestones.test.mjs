import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { additions } from '../data/holdings.ts';
import { noteById, notePath, notePieces } from '../data/colombia-notes.ts';
import {
  catalogPieceForHolding,
  HOME_MILESTONE_LIMIT,
  milestonesFromHoldings,
} from './milestone-match.ts';

const siteSource = readFileSync(new URL('./site.ts', import.meta.url), 'utf8');
const homeSource = readFileSync(new URL('../components/HomePage.astro', import.meta.url), 'utf8');
const holdingsSource = readFileSync(new URL('../data/holdings.ts', import.meta.url), 'utf8');
const milestonesSource = readFileSync(new URL('./milestones.ts', import.meta.url), 'utf8');

function colombiaPieces() {
  return ['10-pesos-oro-1979', '2-pesos-oro-1977', '1-peso-oro-1974'].flatMap((id) => {
    const note = noteById(id);
    assert.ok(note, id);
    return notePieces(note).map((piece) => ({
      id: `co-${piece.id}`,
      country: 'CO',
      href: notePath(note, 'es'),
      title: piece.title,
      dek: piece.lead,
      pick: piece.pick,
      serial: piece.serial,
      cert: '',
      image: piece.images.composite || piece.images.front,
      imageAlt: piece.frontCaption,
    }));
  });
}

describe('homepage milestones from catalog holdings', () => {
  it('does not keep a handwritten country-case list in site.ts', () => {
    assert.doesNotMatch(siteSource, /Filipinas · Periodo estadounidense/);
    assert.match(milestonesSource, /milestonesFromHoldings\(additions/);
    assert.match(homeSource, /emptyMilestones/);
    assert.match(holdingsSource, /newest last/);
  });

  it('matches a Colombia holding by serial to its note page', () => {
    const holding = additions.find((row) => row.id === 'co-1979-10-pesos-oro-98040194');
    assert.ok(holding);
    const piece = catalogPieceForHolding(holding, colombiaPieces());
    assert.ok(piece);
    assert.match(piece.href, /10-pesos-oro-1979/);
    assert.equal(piece.serial, '98040194');
  });

  it('matches a US serial when the holding id omits the block letter', () => {
    const holding = {
      id: 'us-frn-1934a-1000-new-york-b00411221',
      kind: 'banknote',
      country: 'US',
    };
    const piece = catalogPieceForHolding(holding, [
      {
        id: 'us-1000-dolares-serie-1934a-nueva-york',
        country: 'US',
        href: '/coleccion/estados-unidos/1000-dolares-serie-1934a-nueva-york/',
        title: { es: '$1000', en: '$1000' },
        dek: { es: 'Serial B00411221A', en: 'Serial B00411221A' },
        pick: 'P#435a',
        serial: 'B00411221A',
        cert: '',
        image: '/images/catalog/estados-unidos/1000-dolares-serie-1934a-nueva-york-composite.jpg',
        imageAlt: { es: 'Anverso', en: 'Obverse' },
      },
    ]);
    assert.ok(piece);
    assert.match(piece.href, /1000-dolares-serie-1934a-nueva-york/);
  });

  it('lists newly appended holdings first', () => {
    const pieces = colombiaPieces();
    const newest = { id: 'co-1977-2-pesos-oro-22214695', kind: 'banknote', country: 'CO' };
    const older = { id: 'co-1979-10-pesos-oro-98040194', kind: 'banknote', country: 'CO' };
    const cards = milestonesFromHoldings([older, newest], pieces, HOME_MILESTONE_LIMIT);
    assert.equal(cards[0].holdingId, newest.id);
    assert.equal(cards[1].holdingId, older.id);
    assert.equal(cards.length, 2);
    assert.match(cards[0].es.title, /2 pesos oro/);
    assert.match(cards[0].en.title, /2 pesos oro/);
  });

  it('includes catalog image and localized alt on each milestone card', () => {
    assert.match(homeSource, /CardImage src=\{item\.image\}/);
    const pieces = colombiaPieces();
    const holding = { id: 'co-1979-10-pesos-oro-98040194', kind: 'banknote', country: 'CO' };
    const [card] = milestonesFromHoldings([holding], pieces, HOME_MILESTONE_LIMIT);
    assert.ok(card.image.startsWith('/images/catalog/'));
    assert.ok(card.imageAlt.es.length > 0);
    assert.ok(card.imageAlt.en.length > 0);
  });
});
