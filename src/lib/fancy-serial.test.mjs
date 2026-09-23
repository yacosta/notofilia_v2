import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  classifySerial,
  matchPublishedHoldings,
  parseSerialParts,
} from './fancy-serial.ts';
import { normalizeIdentity } from './search.ts';
import { noteById } from '../data/colombia-notes.ts';

describe('fancy serial normalization', () => {
  it('uppercases and strips spaces, hyphens, dots, Nº, No., and #', () => {
    assert.equal(parseSerialParts('a 1234567').normalized, 'A1234567');
    assert.equal(parseSerialParts('A-1234567').normalized, 'A1234567');
    assert.equal(parseSerialParts('A.1234567').normalized, 'A1234567');
    assert.equal(parseSerialParts('Nº 1234567').normalized, '1234567');
    assert.equal(parseSerialParts('No. 1234567').normalized, '1234567');
    assert.equal(parseSerialParts('#1234567').normalized, '1234567');
    assert.equal(parseSerialParts('a1234567').normalized, 'A1234567');
  });

  it('keeps leading zeros and prefix/suffix letters', () => {
    const parsed = parseSerialParts('A 00000042 B');
    assert.equal(parsed.normalized, 'A00000042B');
    assert.equal(parsed.prefix, 'A');
    assert.equal(parsed.digits, '00000042');
    assert.equal(parsed.suffix, 'B');
    assert.notEqual(parsed.digits, '42');
  });

  it('detects replacement or star markers before stripping', () => {
    assert.equal(parseSerialParts('A1234567*').replacement, true);
    assert.equal(parseSerialParts('A1234567★').replacement, true);
    assert.equal(parseSerialParts('STAR 1234567').replacement, true);
    assert.equal(parseSerialParts('A1234567').replacement, false);
    assert.equal(parseSerialParts('A1234567*').normalized, 'A1234567');
  });

  it('reuses the same identity rules as search for the stripped form', () => {
    assert.equal(parseSerialParts('A-12.34567').normalized, normalizeIdentity('A1234567'));
  });
});

describe('fancy serial classification', () => {
  it('classifies low serials 1–100 without stripping leading zeros', () => {
    const result = classifySerial('00000042');
    assert.equal(result.digits, '00000042');
    assert.ok(result.classes.includes('low'));
    assert.equal(result.ordinary, false);
    assert.equal(classifySerial('00000100').classes.includes('low'), true);
    assert.equal(classifySerial('00000101').classes.includes('low'), false);
    assert.equal(classifySerial('00000000').classes.includes('low'), false);
  });

  it('classifies radar palindromes', () => {
    const result = classifySerial('12344321');
    assert.ok(result.classes.includes('radar'));
    assert.equal(classifySerial('12345678').classes.includes('radar'), false);
  });

  it('classifies binary serials', () => {
    const result = classifySerial('10000001');
    assert.ok(result.classes.includes('binary'));
    assert.ok(result.classes.includes('radar'));
    assert.ok(result.classes.includes('rotator'));
    assert.equal(classifySerial('10200001').classes.includes('binary'), false);
  });

  it('classifies solid and solid-plus', () => {
    const solid = classifySerial('88888888');
    assert.ok(solid.classes.includes('solid'));
    assert.equal(solid.classes.includes('solid-plus'), false);
    const plus = classifySerial('88818888');
    assert.ok(plus.classes.includes('solid-plus'));
    assert.equal(plus.classes.includes('solid'), false);
  });

  it('classifies ladders on the full digit string', () => {
    assert.ok(classifySerial('12345678').classes.includes('ladder'));
    assert.ok(classifySerial('87654321').classes.includes('ladder'));
    assert.ok(classifySerial('01234567').classes.includes('ladder'));
    assert.equal(classifySerial('12345670').classes.includes('ladder'), false);
  });

  it('classifies repeaters and two-block repeats, excluding solids', () => {
    assert.ok(classifySerial('12121212').classes.includes('repeater'));
    assert.ok(classifySerial('12341234').classes.includes('repeater'));
    assert.equal(classifySerial('88888888').classes.includes('repeater'), false);
  });

  it('classifies bookends that are not full palindromes', () => {
    const result = classifySerial('12345621');
    assert.ok(result.classes.includes('bookend'));
    assert.equal(result.classes.includes('radar'), false);
    assert.equal(classifySerial('12344321').classes.includes('bookend'), false);
  });

  it('classifies million / round serials with optional leading zeros', () => {
    assert.ok(classifySerial('10000000').classes.includes('million'));
    assert.ok(classifySerial('01000000').classes.includes('million'));
    assert.equal(classifySerial('10000001').classes.includes('million'), false);
    assert.equal(classifySerial('00000001').classes.includes('million'), false);
  });

  it('marks ordinary serials when no fancy or low class matches', () => {
    const result = classifySerial('24781539');
    assert.equal(result.ordinary, true);
    assert.deepEqual(result.classes, []);
  });

  it('classifies the digit string while keeping prefix letters', () => {
    const result = classifySerial('A 12345678');
    assert.equal(result.prefix, 'A');
    assert.equal(result.digits, '12345678');
    assert.ok(result.classes.includes('ladder'));
    assert.equal(result.normalized, 'A12345678');
  });
});

describe('published holding match', () => {
  it('matches the published Colombia 10000001 banknote by normalized serial', () => {
    const note = noteById('2000-pesos-2008');
    assert.ok(note);
    assert.equal(note.serial, '10000001');
    const holdings = [
      {
        serialNormalized: normalizeIdentity(note.serial),
        serial: note.serial,
        href: note.path,
        title: note.title.es,
      },
    ];
    const parsed = classifySerial('10.000.001');
    const hits = matchPublishedHoldings(parsed.normalized, holdings);
    assert.equal(hits.length, 1);
    assert.match(hits[0]?.href ?? '', /2000-pesos-2008/);
    assert.equal(matchPublishedHoldings('24781539', holdings).length, 0);
  });
});
