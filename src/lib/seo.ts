import { CHINA_PATH } from '../data/china';
import { COLOMBIA_PATH } from '../data/colombia';
import { COLOMBIA_COINAGE_PATH } from '../data/colombia-coinage';
import { ECUADOR_PATH } from '../data/ecuador';
import { articlePath, blogArticles, newsArticles } from '../data/editorial';
import { USA_PATH } from '../data/estados-unidos';
import { USA_COINAGE_PATH } from '../data/estados-unidos-coinage';
import { GLOSSARY_PATH } from '../data/glossary';
import { GUATEMALA_PATH } from '../data/guatemala';
import { collectionStats } from '../data/holdings';
import { LAZARETTOS_PATH } from '../data/lazarettos';
import { NETHERLANDS_PATH } from '../data/netherlands';
import { NETHERLANDS_COINAGE_PATH } from '../data/netherlands-coinage';
import { SERIES_PATH } from '../data/philippines-victory-66';
import { POLIMERO_MUNDIAL_PATH } from '../data/polimero-mundial';
import { PUERTO_RICO_PATH } from '../data/puerto-rico';
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
        description:
          locale === 'en'
            ? 'Notofilia is a private collection and bilingual catalogue of historical banknotes and coins, founded by Yezid Acosta. Nothing is for sale.'
            : 'Notofilia es una colección privada y catálogo bilingüe de billetes y monedas históricos, fundado por Yezid Acosta. Nada está a la venta.',
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
  {
    href: '/notofilia-vs-catalogos-billetes-colombianos/',
    es: 'Notofilia vs. otros catálogos',
    en: 'Notofilia vs. other catalogs',
  },
  { href: LAZARETTOS_PATH, es: 'Lazarettos', en: 'Lazarettos' },
  { href: NETHERLANDS_PATH, es: 'Países Bajos (papel moneda)', en: 'Netherlands (paper money)' },
] as const;

/** Country and discipline catalogues for /llms.txt (locale-agnostic endpoint). */
export const llmsCountryCatalogues = [
  { href: COLOMBIA_PATH, es: 'Colombia (papel moneda)', en: 'Colombia (paper money)' },
  { href: COLOMBIA_COINAGE_PATH, es: 'Colombia (numismática)', en: 'Colombia (numismatics)' },
  { href: USA_PATH, es: 'Estados Unidos', en: 'United States' },
  { href: USA_COINAGE_PATH, es: 'Estados Unidos (numismática)', en: 'United States (numismatics)' },
  { href: SERIES_PATH, es: 'Filipinas · Serie Victory n.º 66', en: 'Philippines · Victory Series No. 66' },
  { href: CHINA_PATH, es: 'China', en: 'China' },
  { href: PUERTO_RICO_PATH, es: 'Puerto Rico', en: 'Puerto Rico' },
  { href: ECUADOR_PATH, es: 'Ecuador', en: 'Ecuador' },
  { href: GUATEMALA_PATH, es: 'Guatemala', en: 'Guatemala' },
  { href: NETHERLANDS_PATH, es: 'Países Bajos (papel moneda)', en: 'Netherlands (paper money)' },
  { href: NETHERLANDS_COINAGE_PATH, es: 'Países Bajos (numismática)', en: 'Netherlands (numismatics)' },
  { href: LAZARETTOS_PATH, es: 'Lazaretos colombianos', en: 'Colombian lazarettos' },
  { href: POLIMERO_MUNDIAL_PATH, es: 'Billetes de polímero', en: 'Polymer banknotes' },
  { href: '/coleccion/espana/', es: 'España', en: 'Spain' },
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

Notofilia es una colección privada y catálogo bilingüe de billetes y monedas históricos, fundado por Yezid Acosta. Spanish is the default locale; English lives at /en/. Images, Pick/KM references, grades, and source citations. Nothing is for sale.

## Glossary / Glosario

${llmsLink(GLOSSARY_PATH, 'Glosario', 'Glossary')}

## Guides / Guías

${llmsLink('/blog/', 'Guías para coleccionistas', 'Guides for collectors')}
${blogArticles.map((article) => articleLink('blog', article)).join('\n')}

## Country catalogues / Catálogos por país

${llmsCountryCatalogues.map((page) => llmsLink(page.href, page.es, page.en)).join('\n')}

## Stats / Cifras

- ${stats.banknotes} banknotes / billetes
- ${stats.coins} coins / monedas
- ${stats.countries} countries / países
- ${stats.catalog} catalog entries / fichas

## Other high-value pages

${llmsHighValuePages()
  .map((page) => llmsLink(page.href, page.es, page.en))
  .join('\n')}

## News / Noticias

${newsArticles.map((article) => articleLink('news', article)).join('\n')}
`;
}
