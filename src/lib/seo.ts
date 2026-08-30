import { articlePath, blogArticles } from '../data/editorial';
import { collectionStats } from '../data/holdings';
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

- [Glossary / Glosario](${SITE_URL}/glosario/): ${SITE_URL}/en/glossary/
- [Guides / Guías](${SITE_URL}/blog/): ${SITE_URL}/en/blog/
- [News / Noticias](${SITE_URL}/noticias/): ${SITE_URL}/en/news/
- [Philippines / Filipinas](${SITE_URL}/coleccion/filipinas/): ${SITE_URL}/en/collection/philippines/
- [Colombia](${SITE_URL}/coleccion/colombia/): ${SITE_URL}/en/collection/colombia/
- [Visual banknote catalog](${SITE_URL}/coleccion/notafilia/catalogo/): ${SITE_URL}/en/collection/notaphily/catalog/
- [Colombia visual banknote catalog](${SITE_URL}/coleccion/colombia/catalogo/): ${SITE_URL}/en/collection/colombia/catalog/
- [Colombia visual coin catalog](${SITE_URL}/coleccion/colombia-numismatica/catalogo/): ${SITE_URL}/en/collection/colombia-numismatics/catalog/
- [United States / Estados Unidos](${SITE_URL}/coleccion/estados-unidos/): ${SITE_URL}/en/collection/united-states/
- [Editorial policy](${SITE_URL}/editorial/): ${SITE_URL}/en/editorial/
- [About / Acerca de](${SITE_URL}/acerca-de/): ${SITE_URL}/en/about/
- [Contact / Contacto](${SITE_URL}/contacto/): ${SITE_URL}/en/contact/

## Guides / Guías

${blogArticles
  .map((article) => {
    const es = `${SITE_URL}${articlePath('blog', article.slug, 'es')}`;
    const en = `${SITE_URL}${articlePath('blog', article.slug, 'en')}`;
    return `- [${article.title.es} / ${article.title.en}](${es}): ${en}`;
  })
  .join('\n')}
`;
}
