import { ABOUT_PATH, ABOUT_PATH_EN } from '../data/about';
import { CONTACT_PATH, CONTACT_PATH_EN } from '../data/contact';
import { USA_MPC_PATH, USA_MPC_PATH_EN, USA_PATH, USA_PATH_EN } from '../data/estados-unidos';
import { mpcVietnamNotes } from '../data/mpc-vietnam';
import { NETHERLANDS_COINAGE_PATH, NETHERLANDS_COINAGE_PATH_EN, netherlandsCoins } from '../data/netherlands-coinage';

export type Locale = 'es' | 'en';

function stripEnPrefix(path: string): string {
  return path.replace(/^\/en(?=\/|$)/, '') || '/';
}

function stripTrailingSlash(path: string): string {
  return path.replace(/\/$/, '') || '/';
}

function addLocalePair(
  pairs: Record<string, { es: string; en: string }>,
  esPath: string,
  enPath: string,
) {
  const es = stripTrailingSlash(stripEnPrefix(esPath));
  const en = stripTrailingSlash(stripEnPrefix(enPath));
  const pair = { es, en };
  pairs[es] = pair;
  pairs[en] = pair;
}

/** Collection slugs that differ by language (Spanish filename vs English filename). */
const localizedCollectionSlugs: Record<string, { es: string; en: string }> = {};
addLocalePair(localizedCollectionSlugs, USA_PATH, USA_PATH_EN);
addLocalePair(localizedCollectionSlugs, USA_MPC_PATH, USA_MPC_PATH_EN);
for (const note of mpcVietnamNotes) {
  addLocalePair(localizedCollectionSlugs, note.path, note.pathEn);
}
addLocalePair(localizedCollectionSlugs, ABOUT_PATH, ABOUT_PATH_EN);
addLocalePair(localizedCollectionSlugs, CONTACT_PATH, CONTACT_PATH_EN);
addLocalePair(localizedCollectionSlugs, NETHERLANDS_COINAGE_PATH, NETHERLANDS_COINAGE_PATH_EN);
for (const coin of netherlandsCoins) {
  addLocalePair(localizedCollectionSlugs, coin.path, coin.pathEn);
}

function splitUrlParts(path: string): { pathname: string; search: string; hash: string } {
  const hashIndex = path.indexOf('#');
  const hash = hashIndex === -1 ? '' : path.slice(hashIndex);
  const beforeHash = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const queryIndex = beforeHash.indexOf('?');
  const search = queryIndex === -1 ? '' : beforeHash.slice(queryIndex);
  const pathname = queryIndex === -1 ? beforeHash : beforeHash.slice(0, queryIndex);
  return { pathname, search, hash };
}

function rewriteCollectionSlug(pathname: string, locale: Locale): string {
  const slash = pathname.endsWith('/') ? '/' : '';
  const core = pathname.replace(/\/$/, '') || '/';
  const pair = localizedCollectionSlugs[core];
  if (!pair) return pathname;
  return `${pair[locale]}${slash || '/'}`;
}

export function localizePath(path: string, locale: Locale): string {
  if (path.startsWith('http')) return path;
  const { pathname, search, hash } = splitUrlParts(path);
  const unprefixed = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  const rewritten = rewriteCollectionSlug(unprefixed, locale);
  if (locale === 'es') return `${rewritten}${search}${hash}`;
  if (rewritten === '/') return `/en/${search}${hash}`;
  return `/en${rewritten}${search}${hash}`;
}

export function otherLocalePath(path: string, locale: Locale): string {
  const target: Locale = locale === 'es' ? 'en' : 'es';
  const { pathname, search, hash } = splitUrlParts(path);
  const unprefixed = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  const rewritten = rewriteCollectionSlug(unprefixed, target);
  if (target === 'es') return `${rewritten}${search}${hash}`;
  if (rewritten === '/') return `/en/${search}${hash}`;
  return `/en${rewritten}${search}${hash}`;
}
