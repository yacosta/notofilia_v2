import { articlePath, blogArticles, newsArticles, type EditorialArticle } from '../data/editorial';
import { SITE_URL, type Locale } from './site-url';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function rfc822(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toUTCString();
}

/** Latest guides and news for one locale. Not listed in the sitemap. */
export function feedXml(locale: Locale): string {
  const items = [
    ...blogArticles.map((article) => ({ kind: 'blog' as const, article })),
    ...newsArticles.map((article) => ({ kind: 'news' as const, article })),
  ]
    .sort((a, b) => b.article.published.localeCompare(a.article.published))
    .slice(0, 30);

  const title = locale === 'en' ? 'Notofilia (English)' : 'Notofilia (español)';
  const self = locale === 'en' ? `${SITE_URL}/en/feed.xml` : `${SITE_URL}/feed.xml`;
  const link = locale === 'en' ? `${SITE_URL}/en/` : `${SITE_URL}/`;

  const entries = items
    .map(({ kind, article }) => itemXml(locale, kind, article))
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${link}</link>
    <description>${escapeXml(locale === 'en' ? 'Guides and news from Notofilia.' : 'Guías y noticias de Notofilia.')}</description>
    <language>${locale}</language>
    <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${self}" rel="self" type="application/rss+xml"/>
${entries}
  </channel>
</rss>
`;
}

function itemXml(locale: Locale, kind: 'blog' | 'news', article: EditorialArticle): string {
  const path = articlePath(kind, article.slug, locale);
  const url = `${SITE_URL}${path}`;
  return `    <item>
      <title>${escapeXml(article.title[locale])}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${rfc822(article.published)}</pubDate>
      <description>${escapeXml(article.dek[locale])}</description>
    </item>`;
}
