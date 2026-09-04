import { articlePath, blogArticles, newsArticles } from '../data/editorial';
import { chinaNotes } from '../data/china';
import { canadaNotes } from '../data/canada-polymer';
import { englandNotes } from '../data/england-polymer';
import { malaysiaNotes } from '../data/malaysia-polymer';
import { colombiaNotes, notePieces } from '../data/colombia-notes';
import { colombiaCoinagePieces } from '../data/colombia-coinage-pieces';
import { COLOMBIA_COIN_CATALOG_PATH, coinCatalogCopy } from '../data/colombia-coin-type-catalog';
import { NOTAFILIA_NOTES_CATALOG_PATH, collectionNoteCatalogCopy } from '../data/collection-note-catalog';
import {
  barabooScripSeriesCopy,
  rencySeriesCopy,
  unitedStatesNotes,
  USA_BARABOO_SCRIP_PATH,
  USA_RENCY_PATH,
} from '../data/estados-unidos';
import { glossaryTermPath, glossaryTerms } from '../data/glossary';
import { mpcVietnamNotes } from '../data/mpc-vietnam';
import { netherlandsCoins } from '../data/netherlands-coinage';
import { unitedStatesCoins } from '../data/estados-unidos-coinage';
import { victoryNotes } from '../data/philippines-victory-66';
import { puertoRicoNotes } from '../data/puerto-rico';
import { collections } from './site';
import { localizePath, type Locale } from './locale-paths';
import { extractCert, inferPieceFlags, normalizeIdentity, stripHtml } from './search';

export type SearchKind = 'piece' | 'series' | 'glossary' | 'blog' | 'news';

export type SearchFilter =
  | 'all'
  | 'graded'
  | 'specimen'
  | 'proof'
  | 'remainder'
  | 'group'
  | 'single'
  | 'coin'
  | 'guide'
  | 'news'
  | 'glossary'
  | 'series';

export type SearchSort = 'relevance' | 'title-asc' | 'title-desc';

export type SearchDocument = {
  id: string;
  kind: SearchKind;
  href: string;
  title: string;
  dek: string;
  image?: string;
  imageAlt?: string;
  pick: string;
  serial: string;
  serialNormalized: string;
  cert: string;
  flags: SearchFilter[];
  searchText: string;
};

type PieceSeed = {
  id: string;
  kind: 'banknote' | 'coin';
  path: string;
  pick?: string;
  serial?: string;
  certificate?: string;
  title: { es: string; en: string };
  dek: { es: string; en: string };
  kicker?: { es: string; en: string };
  signatures?: { es: string; en: string };
  grade?: { es: string; en: string };
  description?: { es: string; en: string };
  image?: string;
  imageAlt?: { es: string; en: string };
};

function localized(text: { es: string; en: string } | undefined, locale: Locale): string {
  return text?.[locale] ?? '';
}

function pieceDocument(seed: PieceSeed, locale: Locale): SearchDocument {
  const title = localized(seed.title, locale);
  const dek = localized(seed.dek, locale);
  const grade = localized(seed.grade, locale);
  const kicker = localized(seed.kicker, locale);
  const signatures = localized(seed.signatures, locale);
  const description = localized(seed.description, locale);
  const pick = seed.pick ?? '';
  const serial = seed.serial ?? '';
  const cert = normalizeIdentity(seed.certificate || extractCert(`${grade} ${dek}`));
  const flags = inferPieceFlags({
    kind: seed.kind,
    id: seed.id,
    pick,
    serial,
    grade,
    title,
    kicker,
    signatures,
  });
  return {
    id: `piece:${seed.id}:${locale}`,
    kind: 'piece',
    href: localizePath(seed.path, locale),
    title,
    dek,
    image: seed.image,
    imageAlt: localized(seed.imageAlt, locale) || title,
    pick,
    serial,
    serialNormalized: normalizeIdentity(serial),
    cert,
    flags,
    searchText: [title, dek, kicker, pick, serial, normalizeIdentity(serial), cert, grade, signatures, description]
      .filter(Boolean)
      .join(' '),
  };
}

function pieceSeeds(): PieceSeed[] {
  const seeds: PieceSeed[] = [];

  for (const note of victoryNotes) {
    seeds.push({
      id: `ph-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      serial: note.serial,
      title: note.title,
      dek: note.lead,
      kicker: note.kicker,
      signatures: note.signatures,
      grade: note.grade,
      description: note.description,
      image: note.images.composite,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of colombiaNotes) {
    for (const piece of notePieces(note)) {
      const hash = piece.id !== note.id ? `#${piece.id}` : '';
      seeds.push({
        id: `co-${piece.id}`,
        kind: 'banknote',
        path: `${note.path}${hash}`,
        pick: piece.pick,
        serial: piece.serial,
        title: piece.title,
        dek: piece.lead,
        kicker: note.kicker,
        signatures: piece.signatures,
        grade: piece.grade,
        description: piece.description,
        image: piece.images.composite,
        imageAlt: piece.frontCaption,
      });
    }
  }

  for (const note of chinaNotes) {
    seeds.push({
      id: `cn-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      serial: note.serial,
      title: note.title,
      dek: note.lead,
      kicker: note.kicker,
      signatures: note.signatures,
      grade: note.grade,
      description: note.description,
      image: note.images.composite,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of englandNotes) {
    seeds.push({
      id: `gb-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      serial: note.serial_display,
      title: note.title,
      dek: note.lead,
      kicker: note.kicker,
      signatures: note.signatures,
      grade: note.grade,
      description: note.description,
      image: note.images.composite,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of canadaNotes) {
    seeds.push({
      id: `ca-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      serial: note.serial_display,
      title: note.title,
      dek: note.lead,
      kicker: note.kicker,
      signatures: note.signatures,
      grade: note.grade,
      description: note.description,
      image: note.images.composite,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of malaysiaNotes) {
    seeds.push({
      id: `my-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      serial: note.serial_display,
      title: note.title,
      dek: note.lead,
      kicker: note.kicker,
      signatures: note.signatures,
      grade: note.grade,
      description: note.description,
      image: note.images.composite,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of puertoRicoNotes) {
    seeds.push({
      id: `pr-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      serial: note.serial_display,
      title: note.title,
      dek: note.lead,
      kicker: note.kicker,
      signatures: note.signatures,
      grade: note.grade,
      description: note.description,
      image: note.images.composite,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of unitedStatesNotes) {
    seeds.push({
      id: `us-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      serial: note.serial,
      title: note.title,
      dek: note.lead,
      kicker: note.kicker,
      signatures: note.signatures,
      grade: note.grade,
      description: note.description,
      image: note.images.composite,
      imageAlt: note.frontCaption,
    });
  }

  for (const note of mpcVietnamNotes) {
    seeds.push({
      id: `mpc-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      serial: note.serial,
      title: note.title,
      dek: note.lead,
      kicker: note.kicker,
      signatures: note.signatures,
      grade: note.grade,
      description: note.description,
      image: note.images.composite,
      imageAlt: note.frontCaption,
    });
  }

  for (const coin of netherlandsCoins) {
    seeds.push({
      id: `nl-${coin.id}`,
      kind: 'coin',
      path: coin.path,
      pick: coin.references,
      serial: coin.certificate,
      certificate: coin.certificate,
      title: coin.title,
      dek: coin.lead,
      kicker: coin.kicker,
      grade: coin.grade,
      description: coin.description,
      image: coin.images.composite,
      imageAlt: coin.frontCaption,
    });
  }

  for (const coin of unitedStatesCoins) {
    seeds.push({
      id: `us-coin-${coin.id}`,
      kind: 'coin',
      path: coin.path,
      pick: coin.references,
      title: coin.title,
      dek: coin.lead,
      kicker: coin.kicker,
      grade: coin.grade,
      description: coin.description,
      image: coin.images.composite,
      imageAlt: coin.frontCaption,
    });
  }

  for (const coin of colombiaCoinagePieces) {
    seeds.push({
      id: `co-coin-${coin.id}`,
      kind: 'coin',
      path: coin.path,
      pick: coin.reference,
      title: coin.title,
      dek: coin.lead,
      kicker: coin.kicker,
      grade: coin.grade,
      description: coin.description,
      image: coin.images.composite,
      imageAlt: coin.frontCaption,
    });
  }

  return seeds;
}

export function searchDocuments(locale: Locale): SearchDocument[] {
  const docs: SearchDocument[] = pieceSeeds().map((seed) => pieceDocument(seed, locale));

  for (const catalog of [
    {
      href: NOTAFILIA_NOTES_CATALOG_PATH,
      title: { es: collectionNoteCatalogCopy.es.title, en: collectionNoteCatalogCopy.en.title },
      dek: { es: collectionNoteCatalogCopy.es.dek, en: collectionNoteCatalogCopy.en.dek },
    },
    {
      href: COLOMBIA_COIN_CATALOG_PATH,
      title: { es: coinCatalogCopy.es.title, en: coinCatalogCopy.en.title },
      dek: { es: coinCatalogCopy.es.dek, en: coinCatalogCopy.en.dek },
    },
    {
      href: USA_RENCY_PATH,
      title: { es: rencySeriesCopy.es.title, en: rencySeriesCopy.en.title },
      dek: { es: rencySeriesCopy.es.metaDescription, en: rencySeriesCopy.en.metaDescription },
    },
    {
      href: USA_BARABOO_SCRIP_PATH,
      title: { es: barabooScripSeriesCopy.es.title, en: barabooScripSeriesCopy.en.title },
      dek: { es: barabooScripSeriesCopy.es.metaDescription, en: barabooScripSeriesCopy.en.metaDescription },
      extra:
        'Ringling Bros Barnum Bailey Golden Jubilee Baraboo 1933 Shafer WI100 Trimpey Chamber scrip Allied Owners John Ringling A4895 5 cents Chas Ringling A2844 10 cents Al T Ringling A2819 15 cents',
    },
  ]) {
    docs.push({
      id: `series:${catalog.href}:${locale}`,
      kind: 'series',
      href: localizePath(catalog.href, locale),
      title: catalog.title[locale],
      dek: catalog.dek[locale],
      pick: '',
      serial: '',
      serialNormalized: '',
      cert: '',
      flags: ['series'],
      searchText: `${catalog.title.es} ${catalog.title.en} ${catalog.dek[locale]}${'extra' in catalog ? ` ${catalog.extra}` : ''}`,
    });
  }

  for (const item of collections) {
    if (item.href.includes('/espana/')) continue;
    docs.push({
      id: `series:${item.href}:${locale}`,
      kind: 'series',
      href: localizePath(item.href, locale),
      title: item[locale].title,
      dek: item[locale].description,
      pick: '',
      serial: '',
      serialNormalized: '',
      cert: '',
      flags: ['series'],
      searchText: `${item[locale].title} ${item[locale].description}`,
    });
  }

  for (const term of glossaryTerms) {
    docs.push({
      id: `glossary:${term.id}:${locale}`,
      kind: 'glossary',
      href: glossaryTermPath(term.slug, locale),
      title: term.title[locale],
      dek: term.definition[locale],
      pick: '',
      serial: '',
      serialNormalized: '',
      cert: '',
      flags: ['glossary'],
      searchText: `${term.title.es} ${term.title.en} ${term.definition[locale]} ${term.category}`,
    });
  }

  for (const article of blogArticles) {
    const body = stripHtml(article.bodyHtml[locale]);
    docs.push({
      id: `blog:${article.slug}:${locale}`,
      kind: 'blog',
      href: articlePath('blog', article.slug, locale),
      title: article.title[locale],
      dek: article.dek[locale],
      image: article.image,
      imageAlt: article.imageAlt[locale],
      pick: '',
      serial: '',
      serialNormalized: '',
      cert: '',
      flags: ['guide'],
      searchText: `${article.title[locale]} ${article.dek[locale]} ${body}`,
    });
  }

  for (const article of newsArticles) {
    const body = stripHtml(article.bodyHtml[locale]);
    const keywords = (article.keywords?.[locale] ?? []).join(' ');
    docs.push({
      id: `news:${article.slug}:${locale}`,
      kind: 'news',
      href: articlePath('news', article.slug, locale),
      title: article.title[locale],
      dek: article.dek[locale],
      image: article.image,
      imageAlt: article.imageAlt[locale],
      pick: '',
      serial: '',
      serialNormalized: '',
      cert: '',
      flags: ['news'],
      searchText: `${article.title[locale]} ${article.dek[locale]} ${body} ${keywords}`.trim(),
    });
  }

  return docs;
}
