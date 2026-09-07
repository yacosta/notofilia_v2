import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import identifyIndex from '../data/identify-index.json' with { type: 'json' };
import {
  DHASH_BITS,
  dhashFromGreyscale,
  dhashFromRgba,
  hammingDistance,
  parseDhash,
  similarityFromHamming,
} from './identify-hash.ts';
import { IDENTIFY_MIN_SCORE, rankIdentifyMatches } from './identify.ts';

describe('identify dHash', () => {
  it('hashes a 9×8 greyscale grid to 16 hex chars', () => {
    const pixels = Uint8Array.from({ length: 72 }, (_, i) => (i % 9 < 4 ? 10 : 200));
    const hash = dhashFromGreyscale(pixels);
    assert.match(hash, /^[0-9a-f]{16}$/);
    assert.equal(parseDhash(hash)?.toString(16).padStart(16, '0'), hash);
  });

  it('hashes RGBA through the shared bilinear path', () => {
    const width = 18;
    const height = 16;
    const rgba = new Uint8Array(width * height * 4);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const p = (y * width + x) * 4;
        const tone = x < width / 2 ? 20 : 220;
        rgba[p] = tone;
        rgba[p + 1] = tone;
        rgba[p + 2] = tone;
        rgba[p + 3] = 255;
      }
    }
    const hash = dhashFromRgba(rgba, width, height);
    assert.match(hash, /^[0-9a-f]{16}$/);
    assert.equal(dhashFromRgba(rgba, width, height), hash);
  });

  it('scores identical hashes as 1', () => {
    const hash = 'ffffffffffffffff';
    const a = parseDhash(hash);
    const b = parseDhash(hash);
    assert.ok(a !== null && b !== null);
    assert.equal(hammingDistance(a, b), 0);
    assert.equal(similarityFromHamming(0), 1);
    assert.equal(similarityFromHamming(DHASH_BITS), 0);
  });
});

describe('identify index ranking', () => {
  it('indexes the full published collection', () => {
    assert.ok(identifyIndex.faces.length >= 100);
    assert.equal(identifyIndex.algorithm, 'dhash-9x8');
    const pieces = new Set(identifyIndex.faces.map((face) => face.pieceId));
    assert.ok(pieces.size >= 60);
    assert.ok(identifyIndex.faces.some((face) => face.path.includes('/colombia/')));
  });

  it('returns the same piece as the top match for an indexed face hash', () => {
    const sample = identifyIndex.faces.find((face) => face.face === 'front') ?? identifyIndex.faces[0];
    assert.ok(sample);
    const matches = rankIdentifyMatches(identifyIndex, sample.hash, 'es', {
      topK: 5,
      minScore: IDENTIFY_MIN_SCORE,
    });
    assert.ok(matches.length >= 1);
    assert.equal(matches[0]?.id, sample.pieceId);
    assert.equal(matches[0]?.score, 1);
    assert.ok(matches[0]?.href.startsWith('/coleccion/') || matches[0]?.href.includes('#'));
  });

  it('localizes English result hrefs', () => {
    const sample = identifyIndex.faces[0];
    assert.ok(sample);
    const matches = rankIdentifyMatches(identifyIndex, sample.hash, 'en');
    assert.ok(matches[0]?.href.startsWith('/en/'));
  });
});
