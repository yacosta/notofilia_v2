/** Shared checks for catalog-scan alts. Keep in step with `pieceScanAlt`. */

const SIDE =
  /(?:\b(?:Anverso|Reverso|Obverse|Reverse|Face|Back)\b|Anverso y reverso|Obverse and reverse)/i;
const IDENTIFIER =
  /\b(?:serial\s+\S+|P#\s*\d[\w.]*|Pick\s+\d[\w.]*|BG#\s*\d[\w.]*|KM#?\s*[A-Z]?\d[\w.]*|HT-?\d[\w.]*|Haxby\s+[A-Z]{2}-\d+(?:\s+[A-Z]\d+[a-z]?)?|Fr\.?\s*#?\s*[A-Z0-9.-]+|Rulau\s+[A-Za-z]+-?\d[\w.]*|Fonrobert\s+\d[\w.]*|(?:1[5-9]\d{2}|20\d{2})s?)\b/i;
const COMPACT_REFERENCE = /^[\p{L}\p{N}¢#./·-](?:[\p{L}\p{N}¢#./· -]{0,26}[\p{L}\p{N}¢#./·-])?$/u;

/**
 * Empty string when a lightbox alt is usable.
 * A catalog token or serial is required. A series year counts only when the
 * piece has no Pick, BG#, KM, HT, or Friedberg number (hacienda tokens).
 */
export function specimenAltFailure(alt) {
  const text = alt.replace(/\s+/g, ' ').trim();
  if (!text) return 'missing alt';
  if (text.length > 80) return `alt is ${text.length} characters`;
  if (!SIDE.test(text)) return 'missing side';
  if (!IDENTIFIER.test(text) && !compactCatalogClause(text)) return 'missing identifier';
  return '';
}

/** A short reference already on the record, kept as its own clause after the subject. */
function compactCatalogClause(text) {
  const clauses = text.split(',').map((part) => part.trim()).filter(Boolean);
  const last = clauses.at(-1) ?? '';
  if (clauses.length < 3 || !COMPACT_REFERENCE.test(last)) return false;
  const words = last.split(/\s+/);
  if (words.length > 4) return false;
  return /[\d¢#]/.test(last) || words.length === 1;
}

/** Trigger image inside a note lightbox. The dialog copy is aria-hidden. */
export function lightboxTriggerAlts(html, decode) {
  const alts = [];
  const buttons = html.matchAll(/<button\b[^>]*\bdata-note-lightbox-open\b[^>]*>[\s\S]*?<\/button>/gi);
  for (const button of buttons) {
    const img = button[0].match(/<img\b[^>]*>/i);
    if (!img) {
      alts.push('');
      continue;
    }
    const alt = img[0].match(/\balt="([^"]*)"/);
    alts.push(alt ? decode(alt[1]) : '');
  }
  return alts;
}
