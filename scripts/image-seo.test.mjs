import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { lightboxTriggerAlts, specimenAltFailure } from './image-seo.mjs';

describe('specimen alt audit', () => {
  it('accepts a side plus a serial, catalog token, pair phrase, or year', () => {
    assert.equal(specimenAltFailure('Anverso, 10.000 pesos 1994, serial 00113227'), '');
    assert.equal(specimenAltFailure('Face, 10,000 pesos 1994, serial 00113227'), '');
    assert.equal(specimenAltFailure('Obverse, 8 reales 1820, KM# 75'), '');
    assert.equal(specimenAltFailure('Anverso y reverso, 10 1901'), '');
    assert.equal(specimenAltFailure('Obverse and reverse, Rulau Mag-5'), '');
    assert.equal(specimenAltFailure('Anverso, 2 escudos Bogotá ND (Felipe V), KM# 17'), '');
    assert.equal(specimenAltFailure('Face, $5 City Bank of New Haven, Haxby CT-265 G52b'), '');
    assert.equal(specimenAltFailure('Anverso, 15 centavos tiquete estudiantil verde, MEN · 15¢ verde'), '');
    assert.equal(specimenAltFailure('Face, Trump / Never Surrender, Rency'), '');
    assert.equal(specimenAltFailure('Face, Giori test note ca. 1970s'), '');
  });

  it('rejects an empty alt, a missing side, a missing identifier, and an overlong string', () => {
    assert.equal(specimenAltFailure(''), 'missing alt');
    assert.equal(specimenAltFailure('10.000 pesos 1994, serial 00113227'), 'missing side');
    assert.equal(specimenAltFailure('Anverso del billete'), 'missing identifier');
    assert.equal(specimenAltFailure('Anverso, billete, hello there'), 'missing identifier');
    assert.match(specimenAltFailure(`Anverso, ${'a'.repeat(80)}`), /characters/);
  });

  it('reads the lightbox trigger alt and ignores the hidden dialog copy', () => {
    const html = `
      <button type="button" data-note-lightbox-open>
        <img src="/a.jpg" alt="Anverso, 5 pesos, serial A1" />
      </button>
      <dialog><img src="/a.jpg" alt="" aria-hidden="true" /></dialog>
    `;
    assert.deepEqual(lightboxTriggerAlts(html, (value) => value), ['Anverso, 5 pesos, serial A1']);
  });
});
