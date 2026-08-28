import { SITE_AUTHOR, localizePath, type Locale } from './locale-paths';
import { SITE_URL } from './site-url';

export type BreadcrumbCrumb = { name: string; path: string };

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

export function personNode() {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#yezid-acosta`,
    name: SITE_AUTHOR,
    url: absoluteUrl('/acerca-de/'),
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Notofilia',
    url: SITE_URL,
    inLanguage: ['es', 'en'],
    publisher: { '@id': `${SITE_URL}/#yezid-acosta` },
    author: { '@id': `${SITE_URL}/#yezid-acosta` },
  };
}

export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteNode(), personNode()],
  };
}

export function collectionPageJsonLd(options: {
  locale: Locale;
  pathname: string;
  name: string;
  description: string;
  crumbs: BreadcrumbCrumb[];
}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbList(options.crumbs, options.locale),
      {
        '@type': 'CollectionPage',
        name: options.name,
        description: options.description,
        url: absoluteUrl(options.pathname),
        inLanguage: options.locale,
      },
    ],
  };
}

export function breadcrumbList(crumbs: BreadcrumbCrumb[], locale: Locale) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(localizePath(crumb.path, locale)),
    })),
  };
}

export function visualArtworkJsonLd(options: {
  name: string;
  description: string;
  url: string;
  image?: string;
  locale: Locale;
  artform: 'Banknote' | 'Coin' | 'CreativeWork';
}) {
  const type = options.artform === 'CreativeWork' ? 'CreativeWork' : 'VisualArtwork';
  return {
    '@type': type,
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.url),
    inLanguage: options.locale,
    image: options.image ? absoluteUrl(options.image) : undefined,
    artform: type === 'VisualArtwork' ? options.artform : undefined,
    author: { '@id': `${SITE_URL}/#yezid-acosta` },
    creator: { '@id': `${SITE_URL}/#yezid-acosta` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };
}

export function definedTermJsonLd(options: {
  name: string;
  alternateName: string;
  description: string;
  url: string;
  locale: Locale;
}) {
  return {
    '@type': 'DefinedTerm',
    name: options.name,
    alternateName: options.alternateName,
    description: options.description,
    url: absoluteUrl(options.url),
    inLanguage: options.locale,
    inDefinedTermSet: absoluteUrl(options.locale === 'en' ? '/en/glossary/' : '/glosario/'),
  };
}
