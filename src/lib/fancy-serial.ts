import { normalizeIdentity } from './search.ts';

export type FancySerialClass =
  | 'low'
  | 'radar'
  | 'binary'
  | 'solid'
  | 'solid-plus'
  | 'ladder'
  | 'repeater'
  | 'bookend'
  | 'million'
  | 'rotator';

/** Glossary slugs from `src/data/glossary.ts` for each detected class. */
export const CLASS_GLOSSARY: Record<FancySerialClass, string> = {
  low: 'numeracion-baja',
  radar: 'numeracion-radar',
  binary: 'numeracion-binaria',
  solid: 'numeracion-solida',
  'solid-plus': 'numeracion-solida',
  ladder: 'numeracion-escalera',
  repeater: 'numeracion-repetidor',
  bookend: 'numeracion-especial',
  million: 'numeracion-especial',
  rotator: 'numeracion-especial',
};

export const FANCY_SERIAL_CLASS_ORDER: FancySerialClass[] = [
  'low',
  'million',
  'radar',
  'binary',
  'solid',
  'solid-plus',
  'ladder',
  'repeater',
  'bookend',
  'rotator',
];

const ROTATE_180: Record<string, string> = {
  '0': '0',
  '1': '1',
  '6': '9',
  '8': '8',
  '9': '6',
};

export type ParsedSerial = {
  raw: string;
  normalized: string;
  prefix: string;
  digits: string;
  suffix: string;
  replacement: boolean;
  classes: FancySerialClass[];
  ordinary: boolean;
  valid: boolean;
};

export type PublishedSerialHit = {
  serialNormalized: string;
  serial: string;
  href: string;
  title: string;
};

function hasReplacementMarker(raw: string): boolean {
  if (/[★*]/.test(raw)) return true;
  const compact = raw.toUpperCase().replace(/[\s.\-_]/g, '');
  return compact.includes('STAR');
}

function stripReplacementMarkers(raw: string): string {
  return raw.replace(/★/g, '').replace(/\*/g, '').replace(/STAR/gi, '');
}

export function parseSerialParts(raw: string): {
  normalized: string;
  prefix: string;
  digits: string;
  suffix: string;
  replacement: boolean;
} {
  const replacement = hasReplacementMarker(raw);
  const withoutStar = stripReplacementMarkers(raw);
  const normalized = normalizeIdentity(withoutStar);
  const match = normalized.match(/^([A-Z]*)(\d+)([A-Z]*)$/);
  if (!match) {
    return { normalized, prefix: '', digits: '', suffix: '', replacement };
  }
  return {
    normalized,
    prefix: match[1] ?? '',
    digits: match[2] ?? '',
    suffix: match[3] ?? '',
    replacement,
  };
}

function isPalindrome(digits: string): boolean {
  if (digits.length < 2) return false;
  const reversed = [...digits].reverse().join('');
  return digits === reversed;
}

function isBinary(digits: string): boolean {
  return digits.length >= 2 && /^[01]+$/.test(digits);
}

function isSolid(digits: string): boolean {
  return digits.length >= 2 && /^(\d)\1+$/.test(digits);
}

function isSolidPlus(digits: string): boolean {
  if (digits.length < 4) return false;
  const counts = new Map<string, number>();
  for (const digit of digits) {
    counts.set(digit, (counts.get(digit) ?? 0) + 1);
  }
  if (counts.size !== 2) return false;
  return [...counts.values()].includes(1);
}

function isLadder(digits: string): boolean {
  if (digits.length < 3) return false;
  let ascending = true;
  let descending = true;
  for (let i = 1; i < digits.length; i++) {
    const prev = digits.charCodeAt(i - 1) - 48;
    const cur = digits.charCodeAt(i) - 48;
    if (cur !== prev + 1) ascending = false;
    if (cur !== prev - 1) descending = false;
  }
  return ascending || descending;
}

function isRepeater(digits: string): boolean {
  const n = digits.length;
  if (n < 4) return false;
  if (new Set(digits).size === 1) return false;
  for (let period = 2; period <= n / 2; period++) {
    if (n % period !== 0) continue;
    const block = digits.slice(0, period);
    if (block.repeat(n / period) === digits) return true;
  }
  return false;
}

function isBookend(digits: string): boolean {
  if (digits.length < 6 || isPalindrome(digits)) return false;
  const maxK = Math.floor((digits.length - 1) / 2);
  for (let k = 2; k <= maxK; k++) {
    const prefix = digits.slice(0, k);
    const suffix = digits.slice(-k);
    if (prefix === [...suffix].reverse().join('')) return true;
  }
  return false;
}

function isMillion(digits: string): boolean {
  return digits.length >= 4 && /^0*10+$/.test(digits);
}

function isLow(digits: string): boolean {
  if (!digits) return false;
  try {
    const value = BigInt(digits);
    return value >= 1n && value <= 100n;
  } catch {
    return false;
  }
}

function isRotator(digits: string): boolean {
  if (digits.length < 2) return false;
  if (![...digits].every((digit) => digit in ROTATE_180)) return false;
  const rotated = [...digits]
    .reverse()
    .map((digit) => ROTATE_180[digit])
    .join('');
  return rotated === digits;
}

export function classifyDigits(digits: string): FancySerialClass[] {
  if (!digits) return [];
  const found: FancySerialClass[] = [];
  const checks: [FancySerialClass, (value: string) => boolean][] = [
    ['low', isLow],
    ['million', isMillion],
    ['radar', isPalindrome],
    ['binary', isBinary],
    ['solid', isSolid],
    ['solid-plus', isSolidPlus],
    ['ladder', isLadder],
    ['repeater', isRepeater],
    ['bookend', isBookend],
    ['rotator', isRotator],
  ];
  for (const [name, check] of checks) {
    if (check(digits)) found.push(name);
  }
  return found;
}

export function classifySerial(raw: string): ParsedSerial {
  const parts = parseSerialParts(raw);
  const classes = classifyDigits(parts.digits);
  const valid = parts.digits.length > 0;
  return {
    raw,
    normalized: parts.normalized,
    prefix: parts.prefix,
    digits: parts.digits,
    suffix: parts.suffix,
    replacement: parts.replacement,
    classes,
    ordinary: valid && classes.length === 0,
    valid,
  };
}

export function matchPublishedHoldings(
  normalized: string,
  holdings: PublishedSerialHit[],
): PublishedSerialHit[] {
  if (!normalized) return [];
  return holdings.filter((hit) => hit.serialNormalized === normalized);
}

export function glossarySlugsForClasses(classes: FancySerialClass[]): string[] {
  const slugs = new Set<string>(['numeracion']);
  if (classes.length) slugs.add('numeracion-especial');
  for (const name of classes) slugs.add(CLASS_GLOSSARY[name]);
  return [...slugs];
}
