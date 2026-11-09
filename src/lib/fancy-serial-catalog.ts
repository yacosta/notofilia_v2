/**
 * Eight-digit fancy-serial list for the numeración especial tool.
 * Counts are how many distinct serials from 00000000 to 99999999 match the
 * pattern. They are not prices and not a census of notes seen.
 * A serial can match more than one row. Broader rows give way when a tighter
 * row on the same list already names the serial.
 */

export const FANCY_CATALOG_IDS = [
  'broken-ladder-radar',
  'partial-ladder',
  'pair-ladder',
  'modular-ladder',
  'radar-special',
  'two-heads',
  'quartet',
  'two-digit-pair',
  'partial-repeater',
  'radar-repeater',
  'low-two',
  'high-two',
  'comet',
  'radar-binary-ternary',
  'binary-zeros-ones',
  'near-solid',
  'low-three',
  'high-three',
  'mixed-pairs',
  'ordinary-radar',
  'repeater',
  'one-shift',
  'other-binary',
  'six-of-a-kind',
  'ternary',
  'eight-distinct',
] as const;

export type FancyCatalogId = (typeof FANCY_CATALOG_IDS)[number];

export type SerialDate = { day: number; month: number; year: number };

const SPECIFIC_RADAR = new Set<FancyCatalogId>([
  'broken-ladder-radar',
  'radar-special',
  'two-heads',
  'radar-repeater',
  'radar-binary-ternary',
]);

const BROAD = new Set<FancyCatalogId>(['other-binary', 'ternary', 'eight-distinct']);

function isStrictRun(chars: string): boolean {
  if (chars.length < 2) return false;
  let up = true;
  let down = true;
  for (let i = 1; i < chars.length; i++) {
    const prev = chars.charCodeAt(i - 1) - 48;
    const cur = chars.charCodeAt(i) - 48;
    if (cur !== prev + 1) up = false;
    if (cur !== prev - 1) down = false;
  }
  return up || down;
}

function ladderHalves(): string[] {
  const halves: string[] = [];
  for (const dir of [1, -1]) {
    for (let start = 0; start <= 9; start++) {
      let run = '';
      let ok = true;
      for (let i = 0; i < 4; i++) {
        const value = start + dir * i;
        if (value < 0 || value > 9) {
          ok = false;
          break;
        }
        run += String(value);
      }
      if (ok && !run.includes('0')) halves.push(run);
    }
  }
  return halves;
}

const LADDER_HALVES = new Set(ladderHalves());

function isPalindrome(digits: string): boolean {
  return digits === [...digits].reverse().join('');
}

function digitCounts(digits: string): Map<string, number> {
  const counts = new Map<string, number>();
  for (const digit of digits) counts.set(digit, (counts.get(digit) ?? 0) + 1);
  return counts;
}

function isBrokenLadderRadar(digits: string): boolean {
  return isPalindrome(digits) && LADDER_HALVES.has(digits.slice(0, 4));
}

function isPartialLadder(digits: string): boolean {
  return digits.startsWith('0000') && LADDER_HALVES.has(digits.slice(4));
}

function isPairLadder(digits: string): boolean {
  if (!(digits[0] === digits[1] && digits[2] === digits[3] && digits[4] === digits[5] && digits[6] === digits[7])) {
    return false;
  }
  return isStrictRun(digits[0] + digits[2] + digits[4] + digits[6]);
}

function isModularLadder(digits: string): boolean {
  let up = true;
  let down = true;
  for (let i = 1; i < digits.length; i++) {
    const prev = digits.charCodeAt(i - 1) - 48;
    const cur = digits.charCodeAt(i) - 48;
    if ((cur - prev + 10) % 10 !== 1) up = false;
    if ((prev - cur + 10) % 10 !== 1) down = false;
  }
  return up || down;
}

function isRadarSpecial(digits: string): boolean {
  const a = digits[0];
  const b = digits[3];
  return a !== b && digits === `${a}${a}${a}${b}${b}${a}${a}${a}`;
}

function isTwoHeads(digits: string): boolean {
  const a = digits[0];
  const b = digits[1];
  return a !== b && digits === `${a}${b}${b}${b}${b}${b}${b}${a}`;
}

function isQuartet(digits: string): boolean {
  const a = digits[0];
  const b = digits[4];
  return a !== b && digits === `${a}${a}${a}${a}${b}${b}${b}${b}`;
}

function isTwoDigitPair(digits: string): boolean {
  const a = digits[0];
  const b = digits[1];
  return a !== b && digits === `${a}${b}`.repeat(4);
}

function isPartialRepeater(digits: string): boolean {
  if (!digits.startsWith('0000')) return false;
  const a = digits[4];
  const b = digits[5];
  return a !== b && digits.slice(4) === `${a}${b}${a}${b}`;
}

function isRadarRepeater(digits: string): boolean {
  const a = digits[0];
  const b = digits[1];
  return a !== b && digits === `${a}${b}${b}${a}${a}${b}${b}${a}`;
}

function isLowTwo(digits: string): boolean {
  if (!digits.startsWith('000000')) return false;
  const tail = Number(digits.slice(6));
  return tail >= 10 && tail <= 99;
}

function isHighTwo(digits: string): boolean {
  if (!digits.startsWith('999999')) return false;
  const tail = Number(digits.slice(6));
  return tail >= 0 && tail <= 89;
}

function loneIndex(digits: string): number | null {
  const counts = digitCounts(digits);
  if (counts.size !== 2) return null;
  let majority = '';
  for (const [digit, count] of counts) {
    if (count === 7) majority = digit;
  }
  if (!majority) return null;
  return [...digits].findIndex((digit) => digit !== majority);
}

function isComet(digits: string): boolean {
  const index = loneIndex(digits);
  return index === 0 || index === 7;
}

function isNearSolid(digits: string): boolean {
  const index = loneIndex(digits);
  return index !== null && index > 0 && index < 7;
}

/** Two-digit near-solid with the odd pair on an interior mirror, not the ends or the center. */
function isInteriorMirror(digits: string): boolean {
  const counts = digitCounts(digits);
  if (counts.size !== 2) return false;
  let majority = '';
  for (const [digit, count] of counts) {
    if (count === 6) majority = digit;
  }
  if (!majority) return false;
  const odd = [...digits].flatMap((digit, index) => (digit === majority ? [] : [index]));
  if (odd.length !== 2) return false;
  const [left, right] = odd;
  return (left === 1 && right === 6) || (left === 2 && right === 5);
}

/** ABACCABA with three different digits, as in 37322373. */
function isTernaryRadarShape(digits: string): boolean {
  const a = digits[0];
  const b = digits[1];
  const c = digits[3];
  if (new Set([a, b, c]).size !== 3) return false;
  return digits === `${a}${b}${a}${c}${c}${a}${b}${a}`;
}

function isRadarBinaryTernary(digits: string): boolean {
  return isInteriorMirror(digits) || isTernaryRadarShape(digits);
}

function isBinaryZerosOnes(digits: string): boolean {
  return /^[01]+$/.test(digits) && new Set(digits).size === 2;
}

function isLowThree(digits: string): boolean {
  if (!digits.startsWith('00000')) return false;
  const value = Number(digits);
  return value >= 100 && value <= 999;
}

function isHighThree(digits: string): boolean {
  if (!digits.startsWith('99999')) return false;
  const tail = Number(digits.slice(5));
  return tail >= 0 && tail <= 899;
}

function isMixedPairs(digits: string): boolean {
  if (!(digits[0] === digits[1] && digits[2] === digits[3] && digits[4] === digits[5] && digits[6] === digits[7])) {
    return false;
  }
  return new Set([digits[0], digits[2], digits[4], digits[6]]).size === 4;
}

function isRepeater(digits: string): boolean {
  if (digits.slice(0, 4) !== digits.slice(4)) return false;
  if (new Set(digits).size === 1) return false;
  if (isTwoDigitPair(digits)) return false;
  return true;
}

function isOneShift(digits: string): boolean {
  if (new Set(digits).size === 1) return false;
  return digits[0] === digits[5] && digits[1] === digits[6] && digits[2] === digits[7] && digits[3] === digits[4];
}

function isOtherBinary(digits: string): boolean {
  const used = new Set(digits);
  if (used.size !== 2) return false;
  return !(used.has('0') && used.has('1'));
}

function isSixOfAKind(digits: string): boolean {
  for (const count of digitCounts(digits).values()) {
    if (count === 6) return true;
  }
  return false;
}

function isTernary(digits: string): boolean {
  return new Set(digits).size === 3;
}

function isEightDistinct(digits: string): boolean {
  return new Set(digits).size === 8;
}

function isOrdinaryRadar(digits: string): boolean {
  if (digits[0] === '0' || !isPalindrome(digits)) return false;
  if (new Set(digits).size === 1) return false;
  if (isBrokenLadderRadar(digits) || isRadarSpecial(digits) || isTwoHeads(digits)) return false;
  if (isRadarRepeater(digits) || isRadarBinaryTernary(digits)) return false;
  return true;
}

const CHECKS: Record<FancyCatalogId, (digits: string) => boolean> = {
  'broken-ladder-radar': isBrokenLadderRadar,
  'partial-ladder': isPartialLadder,
  'pair-ladder': isPairLadder,
  'modular-ladder': isModularLadder,
  'radar-special': isRadarSpecial,
  'two-heads': isTwoHeads,
  quartet: isQuartet,
  'two-digit-pair': isTwoDigitPair,
  'partial-repeater': isPartialRepeater,
  'radar-repeater': isRadarRepeater,
  'low-two': isLowTwo,
  'high-two': isHighTwo,
  comet: isComet,
  'radar-binary-ternary': isRadarBinaryTernary,
  'binary-zeros-ones': isBinaryZerosOnes,
  'near-solid': isNearSolid,
  'low-three': isLowThree,
  'high-three': isHighThree,
  'mixed-pairs': isMixedPairs,
  'ordinary-radar': isOrdinaryRadar,
  repeater: isRepeater,
  'one-shift': isOneShift,
  'other-binary': isOtherBinary,
  'six-of-a-kind': isSixOfAKind,
  ternary: isTernary,
  'eight-distinct': isEightDistinct,
};

function suppress(hits: FancyCatalogId[]): FancyCatalogId[] {
  let next = hits;
  if (next.some((id) => SPECIFIC_RADAR.has(id))) {
    next = next.filter((id) => id !== 'ordinary-radar');
  }
  if (next.includes('radar-repeater')) next = next.filter((id) => id !== 'repeater');
  if (next.includes('radar-special') || next.includes('radar-binary-ternary')) {
    next = next.filter((id) => id !== 'one-shift');
  }
  if (next.includes('two-heads') || next.includes('radar-special') || next.includes('radar-binary-ternary')) {
    next = next.filter((id) => id !== 'six-of-a-kind');
  }
  if (next.some((id) => !BROAD.has(id))) next = next.filter((id) => !BROAD.has(id));
  return next;
}

export function matchFancyCatalog(digits: string): FancyCatalogId[] {
  if (!/^\d{8}$/.test(digits)) return [];
  const hits = FANCY_CATALOG_IDS.filter((id) => CHECKS[id](digits));
  return suppress(hits);
}

/** DDMMYYYY on eight digits. Invalid calendar days return null. */
export function readSerialDate(digits: string): SerialDate | null {
  if (!/^\d{8}$/.test(digits)) return null;
  const day = Number(digits.slice(0, 2));
  const month = Number(digits.slice(2, 4));
  const year = Number(digits.slice(4, 8));
  if (year < 1000 || month < 1 || month > 12 || day < 1) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
    return null;
  }
  return { day, month, year };
}
