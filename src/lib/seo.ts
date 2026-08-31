import { articlePath, blogArticles, newsArticles } from '../data/editorial';
import { collectionStats } from '../data/holdings';
import { LAZARETTOS_PATH } from '../data/lazarettos';
import { NETHERLANDS_PATH } from '../data/netherlands';
import { localizePath } from './locale-paths';
import { footerLinksFromNav, megaNav } from './mega-nav';
import { SITE_URL, type Locale } from './site-url';

export { SITE_URL, type Locale } from './site-url';

export const SITE_NAME = 'Notofilia';
export const SITE_AUTHOR = 'Yezid Acosta';
export const DEFAULT_OG_IMAGE = '/images/hero-slide.jpg';
export const PERSON_ID = `${SITE_URL}/#yezid-acosta`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORG_ID = `${SITE_URL}/#organization`;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return new URL(path, SITE_URL).href;
}

export function websiteJsonLd(locale: Locale) {
  const searchPath = locale === 'en' ? '/en/search/' : '/buscar/';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: ['es', 'en'],
        publisher: { '@id': ORG_ID },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${absoluteUrl(searchPath)}?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE_AUTHOR,
        url: absoluteUrl(locale === 'en' ? '/en/about/' : '/acerca-de/'),
        jobTitle: locale === 'en' ? 'Collector and technologist' : 'Coleccionista y tecnólogo',
      },
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        founder: { '@id': PERSON_ID },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item),
    })),
  };
}

export function artworkJsonLd(input: {
  name: string;
  description: string;
  url: string;
  image: string;
  dateCreated?: string;
  countryName?: string;
  material?: string;
  identifier?: string;
  collectionUrl: string;
  collectionName: string;
}) {
  return {
    '@type': 'VisualArtwork',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    image: absoluteUrl(input.image),
    dateCreated: input.dateCreated,
    material: input.material,
    identifier: input.identifier,
    countryOfOrigin: input.countryName ? { '@type': 'Country', name: input.countryName } : undefined,
    isPartOf: {
      '@type': 'Collection',
      name: input.collectionName,
      url: absoluteUrl(input.collectionUrl),
    },
    creator: { '@id': PERSON_ID },
    creditText: `${SITE_AUTHOR} / ${SITE_NAME}`,
  };
}

function llmsLink(href: string, es: string, en: string): string {
  const esUrl = `${SITE_URL}${localizePath(href, 'es')}`;
  const enUrl = `${SITE_URL}${localizePath(href, 'en')}`;
  return `- [${es} / ${en}](${esUrl}): ${enUrl}`;
}

function articleLink(kind: 'blog' | 'news', article: (typeof blogArticles)[number]): string {
  const es = `${SITE_URL}${articlePath(kind, article.slug, 'es')}`;
  const en = `${SITE_URL}${articlePath(kind, article.slug, 'en')}`;
  return `- [${article.title.es} / ${article.title.en}](${es}): ${en}`;
}

/** Published hubs that are not (yet) rows in mega-nav. */
const extraHighValuePages = [
  { href: '/coleccion/', es: 'Colección', en: 'Collection' },
  { href: '/buscar/', es: 'Buscar', en: 'Search' },
  { href: '/editorial/', es: 'Política editorial y valoración', en: 'Editorial policy' },
  { href: LAZARETTOS_PATH, es: 'Lazarettos', en: 'Lazarettos' },
  { href: NETHERLANDS_PATH, es: 'Países Bajos (papel moneda)', en: 'Netherlands (paper money)' },
] as const;

export function llmsHighValuePages(): { href: string; es: string; en: string }[] {
  const seen = new Set<string>();
  const pages: { href: string; es: string; en: string }[] = [];
  const add = (href: string, es: string, en: string) => {
    const key = localizePath(href, 'es');
    if (seen.has(key)) return;
    seen.add(key);
    pages.push({ href: key, es, en });
  };

  add('/glosario/', 'Glosario', 'Glossary');
  add('/blog/', 'Guías', 'Guides');
  add('/noticias/', 'Noticias', 'News');
  add('/coleccion/', 'Colección', 'Collection');
  add('/buscar/', 'Buscar', 'Search');

  for (const link of footerLinksFromNav(megaNav)) {
    add(link.href, link.es, link.en);
  }
  for (const page of extraHighValuePages) {
    add(page.href, page.es, page.en);
  }
  return pages;
}

export function llmsTxt(): string {
  const stats = collectionStats();
  return `# Notofilia

> Private catalogue of historical banknotes and coins. Nothing is for sale.

Notofilia is a bilingual (Spanish-primary, English at /en/) catalogue of a private collection: images, Pick/KM references, grades, and source citations. Founder: Yezid Acosta.

Catálogo bilingüe (español en la raíz, inglés en /en/) de una colección privada: imágenes, referencias Pick/KM, grados y fuentes. Nada está a la venta. Fundador: Yezid Acosta.

## Stats / Cifras

- ${stats.banknotes} banknotes / billetes
- ${stats.coins} coins / monedas
- ${stats.countries} countries / países
- ${stats.catalog} catalog entries / fichas

## Highest-value pages

${llmsHighValuePages()
  .map((page) => llmsLink(page.href, page.es, page.en))
  .join('\n')}

## Guides / Guías

${blogArticles.map((article) => articleLink('blog', article)).join('\n')}

## News / Noticias

${newsArticles.map((article) => articleLink('news', article)).join('\n')}
`;
}
