const MAX_SCAN_ALT = 80;
const DASH_SERIAL = /^[\s—–-]+$/;
const YEAR_TOKEN = /\b(?:1[5-9]\d{2}|20\d{2})s?\b/;

/**
 * First catalog token already printed on the record.
 * Pick, BG#, KM, HT, Friedberg, Rulau, and Fonrobert. Nothing is invented.
 */
const CATALOG_ID =
  /\b(?:P#\s*\d[\w.]*|Pick\s+\d[\w.]*|BG#\s*\d[\w.]*|KM#?\s*[A-Z]?\d[\w.]*|HT-?\d[\w.]*|Haxby\s+[A-Z]{2}-\d+(?:\s+[A-Z]\d+[a-z]?)?|Fr\.?\s*#?\s*[A-Z0-9.-]+|Rulau\s+[A-Za-z]+-?\d[\w.]*|Fonrobert\s+\d[\w.]*)/i;

/** Short reference already printed on the record, such as "MEN · 15¢ verde" or "Rency". */
const COMPACT_REFERENCE = /^[\p{L}\p{N}¢#./·-](?:[\p{L}\p{N}¢#./· -]{0,26}[\p{L}\p{N}¢#./·-])?$/u;

/** Printed serial for alts and download names. Omit blanks and documented absences. */
export function catalogSerialToken(serial?: string, serialDisplay?: string): string | undefined {
  const normalized = serial?.trim() ?? '';
  const display = serialDisplay?.trim() ?? '';
  const printed =
    display && display.length <= 36 && !display.includes('·') && !DASH_SERIAL.test(display) ? display : normalized;
  if (!printed || DASH_SERIAL.test(printed)) return undefined;
  return printed;
}

export function catalogIdToken(catalogNumber?: string): string | undefined {
  const raw = catalogNumber?.replace(/\s+/g, ' ').trim() ?? '';
  if (!raw || DASH_SERIAL.test(raw)) return undefined;
  const match = raw.match(CATALOG_ID);
  if (match) return match[0].replace(/\s+/g, ' ').trim();
  if (!COMPACT_REFERENCE.test(raw)) return undefined;
  const words = raw.split(/\s+/);
  if (words.length > 4) return undefined;
  const hasMark = /[\d¢#]/.test(raw);
  if (!hasMark && words.length !== 1) return undefined;
  return raw;
}

function identityKeys(serial?: string, serialDisplay?: string): string[] {
  return [serial, serialDisplay]
    .map((value) => value?.trim() ?? '')
    .filter((value) => value && !DASH_SERIAL.test(value))
    .map((value) => value.replace(/[\s.★*]/g, '').toUpperCase());
}

/**
 * Short subject from a catalogue title.
 * "10.000 pesos · reposición estrella · 1994 · 00113227" → "10.000 pesos 1994".
 * A trailing serial is left to the separate serial clause.
 */
export function scanSubject(title: string, serial?: string, serialDisplay?: string): string {
  let parts = title
    .split('·')
    .map((part) => part.trim())
    .filter(Boolean);
  const keys = identityKeys(serial, serialDisplay);
  if (keys.length) {
    const filtered = parts.filter((part) => !keys.includes(part.replace(/[\s.★*]/g, '').toUpperCase()));
    if (filtered.length) parts = filtered;
  }
  const last = parts[parts.length - 1] ?? '';
  if (parts.length >= 3 && YEAR_TOKEN.test(last)) {
    return `${parts[0]} ${last}`;
  }
  return parts.join(' ');
}

function subjectAlreadyHas(subject: string, token: string): boolean {
  return subject.toLowerCase().includes(token.toLowerCase());
}

/**
 * Short object description for a catalog scan (≤ 80 characters).
 * The visible figcaption keeps the long sentence.
 * Example: "Anverso, 10.000 pesos 1994, serial 00113227".
 * With no serial, the catalog token already on the record is appended.
 */
export function pieceScanAlt(input: {
  sideLabel: string;
  title: string;
  serial?: string;
  serialDisplay?: string;
  catalogNumber?: string;
}): string {
  const side = input.sideLabel.trim();
  const serial = catalogSerialToken(input.serial, input.serialDisplay);
  let subject = scanSubject(input.title, input.serial, input.serialDisplay);
  const catalog = serial ? undefined : catalogIdToken(input.catalogNumber);
  const idBit = serial
    ? `, serial ${serial}`
    : catalog && !subjectAlreadyHas(subject, catalog)
      ? `, ${catalog}`
      : '';
  const prefix = `${side}, `;
  const budget = MAX_SCAN_ALT - prefix.length - idBit.length;
  if (budget < 8) {
    const bare = idBit ? `${side}${idBit}` : side;
    return bare.length <= MAX_SCAN_ALT ? bare : `${bare.slice(0, MAX_SCAN_ALT - 1).trimEnd()}…`;
  }
  if (subject.length > budget) {
    const cut = Math.max(1, budget - 1);
    subject = `${subject.slice(0, cut).trimEnd()}…`;
  }
  return `${prefix}${subject}${idBit}`;
}
