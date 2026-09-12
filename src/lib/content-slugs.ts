import { glossaryTerms } from '../data/glossary.ts';
import { newsArticles } from '../data/editorial.ts';
import type { Locale } from './locale-paths.ts';

type SegmentMaps = {
  esToEn: Map<string, string>;
  enToEs: Map<string, string>;
};

function mapsFromPairs(pairs: { es: string; en: string }[]): SegmentMaps {
  const esToEn = new Map<string, string>();
  const enToEs = new Map<string, string>();
  for (const pair of pairs) {
    esToEn.set(pair.es, pair.en);
    enToEs.set(pair.en, pair.es);
  }
  return { esToEn, enToEs };
}

let glossaryMaps: SegmentMaps | undefined;
let newsMaps: SegmentMaps | undefined;

function glossarySegmentMaps(): SegmentMaps {
  glossaryMaps ??= mapsFromPairs(glossaryTerms.map((term) => ({ es: term.slug, en: term.slugEn })));
  return glossaryMaps;
}

function newsSegmentMaps(): SegmentMaps {
  newsMaps ??= mapsFromPairs(newsArticles.map((article) => ({ es: article.slug, en: article.slugEn })));
  return newsMaps;
}

function takePrefix(path: string, prefixes: string[]): { prefix: string; rest: string } | undefined {
  for (const prefix of prefixes) {
    if (path === prefix) return { prefix, rest: '' };
    if (path.startsWith(prefix)) return { prefix, rest: path.slice(prefix.length) };
  }
  return undefined;
}

function rewritePair(
  rest: string,
  locale: Locale,
  maps: SegmentMaps,
  esPrefix: string,
  enPrefix: string,
): string | undefined {
  const first = rest.split('/').filter(Boolean)[0];
  if (!first) return locale === 'en' ? enPrefix : esPrefix;
  const es = maps.enToEs.get(first) ?? (maps.esToEn.has(first) ? first : undefined);
  const en = maps.esToEn.get(first) ?? (maps.enToEs.has(first) ? first : undefined);
  if (!es || !en) return undefined;
  const after = rest.slice(first.length);
  const prefix = locale === 'en' ? enPrefix : esPrefix;
  const segment = locale === 'en' ? en : es;
  return `${prefix}${segment}${after.startsWith('/') || after === '' ? after : `/${after}`}`;
}

/** Rewrite glossary and news last segments between Spanish and English slugs. */
export function rewriteContentLastSegment(path: string, locale: Locale): string {
  const glossary = takePrefix(path, ['/glosario/', '/glossary/']);
  if (glossary) {
    return rewritePair(glossary.rest, locale, glossarySegmentMaps(), '/glosario/', '/glossary/') ?? path;
  }
  const news = takePrefix(path, ['/noticias/', '/news/']);
  if (news) {
    return rewritePair(news.rest, locale, newsSegmentMaps(), '/noticias/', '/news/') ?? path;
  }
  return path;
}

export function newsEnglishRedirects(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const article of newsArticles) {
    const en = `/en/news/${article.slugEn}/`;
    if (article.slug !== article.slugEn) {
      out[`/en/news/${article.slug}/`] = en;
    }
    out[`/en/noticias/${article.slug}/`] = en;
    if (article.slug !== article.slugEn) {
      out[`/en/noticias/${article.slugEn}/`] = en;
    }
  }
  return out;
}
