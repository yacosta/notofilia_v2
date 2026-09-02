import { SITE_AUTHOR, localizePath, type Locale } from './locale-paths.ts';
import { SITE_URL } from './site-url.ts';

const PERSON_ID = `${SITE_URL}/#yezid-acosta`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_NAME = 'Notofilia';

export type BreadcrumbCrumb = { name: string; path: string };

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

function omitEmpty<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined && item !== '')) as T;
}

/** Read a grading-house name from existing grade copy. Do not invent a service. */
export function inferGradingService(grade?: string): string | undefined {
  if (!grade) return undefined;
  if (/\bNGC\b/.test(grade)) return 'NGC';
  if (/\bPMG\b/.test(grade)) return 'PMG';
  if (/\bPCGS\b/.test(grade)) return 'PCGS';
  return undefined;
}

export function personNode() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE_AUTHOR,
    url: absoluteUrl('/acerca-de/'),
  };
}

export function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    founder: { '@id': PERSON_ID },
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ['es', 'en'],
    publisher: { '@id': ORG_ID },
    author: { '@id': PERSON_ID },
  };
}

export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteNode(), organizationNode(), personNode()],
  };
}

export function collectionPageJsonLd(options: {
  locale: Locale;
  pathname: string;
  name: string;
  description: string;
  crumbs: BreadcrumbCrumb[];
  faq?: { question: string; answer: string }[];
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
        isPartOf: { '@id': WEBSITE_ID },
        author: { '@id': PERSON_ID },
      },
      ...(options.faq?.length ? [faqPageJsonLd(options.faq)] : []),
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
  catalogNumber?: string;
  issuer?: string;
  printer?: string;
  gradingService?: string;
  certNumber?: string;
  serial?: string;
  collectionUrl?: string;
  collectionName?: string;
}) {
  const type = options.artform === 'CreativeWork' ? 'CreativeWork' : 'VisualArtwork';
  const additionalProperty = [
    options.catalogNumber
      ? { '@type': 'PropertyValue', name: 'catalogNumber', value: options.catalogNumber }
      : undefined,
    options.serial ? { '@type': 'PropertyValue', name: 'serialNumber', value: options.serial } : undefined,
    options.gradingService
      ? { '@type': 'PropertyValue', name: 'gradingService', value: options.gradingService }
      : undefined,
    options.certNumber ? { '@type': 'PropertyValue', name: 'certificateNumber', value: options.certNumber } : undefined,
  ].filter(Boolean);

  return omitEmpty({
    '@type': type,
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.url),
    inLanguage: options.locale,
    image: options.image ? absoluteUrl(options.image) : undefined,
    artform: type === 'VisualArtwork' ? options.artform : undefined,
    identifier: options.catalogNumber || options.certNumber || options.serial || undefined,
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    publisher: options.issuer ? { '@type': 'Organization', name: options.issuer } : undefined,
    producer: options.printer ? { '@type': 'Organization', name: options.printer } : undefined,
    additionalProperty: additionalProperty.length ? additionalProperty : undefined,
    isPartOf: options.collectionUrl
      ? {
          '@type': 'Collection',
          name: options.collectionName || SITE_NAME,
          url: absoluteUrl(options.collectionUrl),
        }
      : { '@id': WEBSITE_ID },
  });
}

export function definedTermJsonLd(options: {
  name: string;
  alternateName: string;
  description: string;
  url: string;
  locale: Locale;
}) {
  const setUrl = absoluteUrl(options.locale === 'en' ? '/en/glossary/' : '/glosario/');
  return {
    '@type': 'DefinedTerm',
    name: options.name,
    alternateName: options.alternateName,
    description: options.description,
    url: absoluteUrl(options.url),
    inLanguage: options.locale,
    inDefinedTermSet: `${setUrl}#glossary`,
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
