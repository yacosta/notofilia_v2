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
  colonialSeriesCopy,
  obsoleteSeriesCopy,
  rencySeriesCopy,
  unitedStatesNotes,
  USA_BARABOO_SCRIP_PATH,
  USA_COLONIAL_PATH,
  USA_OBSOLETE_PATH,
  USA_RENCY_PATH,
} from '../data/estados-unidos';
import { GIORI_TEST_NOTES_PATH, gioriTestNotesCopy } from '../data/giori-test-notes';
import { EDUCATIONAL_SERIES_PATH, educationalSeriesCopy } from '../data/educational-series-1896';
import {
  INDIAN_HEAD_QUARTER_EAGLE_PATH,
  indianHeadQuarterEagleCopy,
} from '../data/indian-head-quarter-eagle';
import { LAZARETTOS_NUMISMATICS_PATH, lazarettosNumismaticsCopy } from '../data/lazarettos-numismatics';
import { COSCOJAS_SANTANDER_PATH, coscojasSantanderCopy } from '../data/coscojas-santander';
import { HACIENDA_TOKENS_PATH, haciendaTokensCopy } from '../data/hacienda-tokens';
import { MANZANO_FARMING_PATH, manzanoFarmingCopy } from '../data/manzano-farming';
import {
  MANZANO_FARMING_PIECE_ID,
  MANZANO_FARMING_PIECE_IMAGES,
  MANZANO_FARMING_PIECE_PATH,
  manzanoFarmingPieceCopy,
} from '../data/manzano-farming-piece';
import {
  POPAYAN_1_ESCUDO_CARLOS_IV_PATH,
  popayan1EscudoCarlosIvCopy,
} from '../data/popayan-1-escudo-carlos-iv';
import { SANTA_FE_MINT_PATH, santaFeMintCopy } from '../data/santa-fe-mint';
import { WWII_EMERGENCY_PATH, wwiiEmergencyCopy } from '../data/wwii-emergency-banknotes';
import { glossaryTermHref, glossaryTerms } from '../data/glossary';
import { mpcVietnamNotes } from '../data/mpc-vietnam';
import { mpcProgramNotes } from '../data/mpc';
import { netherlandsCoins } from '../data/netherlands-coinage';
import { spainCoins } from '../data/espana-coinage';
import { puertoRicoCoins } from '../data/puerto-rico-coinage';
import { liberiaCoins } from '../data/liberia-coinage';
import { unitedStatesCoins, USA_MORGAN_PATH, USA_SILVER_EAGLE_PATH } from '../data/estados-unidos-coinage';
import { morganSeriesCopy } from '../data/estados-unidos-morgan-dollars';
import { silverEagleSeriesCopy } from '../data/estados-unidos-silver-eagle';
import { victoryNotes } from '../data/philippines-victory-66';
import { pnbNotes } from '../data/philippines-pnb-1916';
import { puertoRicoNotes } from '../data/puerto-rico';
import { ecuadorNotes, notePieces as ecuadorNotePieces } from '../data/ecuador';
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

  for (const note of pnbNotes) {
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

  for (const note of ecuadorNotes) {
    for (const piece of ecuadorNotePieces(note)) {
      const hash = piece.id !== note.id ? `#${piece.id}` : '';
      seeds.push({
        id: `ec-${piece.id}`,
        kind: 'banknote',
        path: `${note.path}${hash}`,
        pick: piece.pick,
        serial: piece.serial_display,
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

  for (const note of unitedStatesNotes) {
    seeds.push({
      id: `us-${note.id}`,
      kind: 'banknote',
      path: note.path,
      pick: note.pick,
      serial: note.serial,
      certificate: note.cert_number,
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

  for (const note of mpcProgramNotes) {
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

  for (const coin of spainCoins) {
    seeds.push({
      id: `es-coin-${coin.id}`,
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

  for (const coin of puertoRicoCoins) {
    seeds.push({
      id: `pr-coin-${coin.id}`,
      kind: 'coin',
      path: coin.path,
      pick: coin.references,
      title: coin.title,
      dek: coin.lead,
      kicker: coin.kicker,
      grade: coin.grade,
      description: coin.description,
      image: coin.images?.composite,
      imageAlt: coin.frontCaption,
    });
  }

  for (const coin of liberiaCoins) {
    seeds.push({
      id: `lr-coin-${coin.id}`,
      kind: 'coin',
      path: coin.path,
      pick: coin.references,
      title: coin.title,
      dek: coin.lead,
      kicker: coin.kicker,
      grade: coin.grade,
      description: coin.description,
      image: coin.images?.composite,
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

  seeds.push({
    id: MANZANO_FARMING_PIECE_ID,
    kind: 'coin',
    path: MANZANO_FARMING_PIECE_PATH,
    title: { es: manzanoFarmingPieceCopy.es.title, en: manzanoFarmingPieceCopy.en.title },
    dek: { es: manzanoFarmingPieceCopy.es.lead, en: manzanoFarmingPieceCopy.en.lead },
    kicker: { es: manzanoFarmingPieceCopy.es.kicker, en: manzanoFarmingPieceCopy.en.kicker },
    grade: { es: manzanoFarmingPieceCopy.es.grade, en: manzanoFarmingPieceCopy.en.grade },
    description: {
      es: `${manzanoFarmingPieceCopy.es.description} ${manzanoFarmingPieceCopy.es.descriptionRest}`,
      en: `${manzanoFarmingPieceCopy.en.description} ${manzanoFarmingPieceCopy.en.descriptionRest}`,
    },
    image: MANZANO_FARMING_PIECE_IMAGES.composite,
    imageAlt: {
      es: manzanoFarmingPieceCopy.es.frontCaption,
      en: manzanoFarmingPieceCopy.en.frontCaption,
    },
  });

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

export type CatalogueSummaryItem = {
  id: string;
  title: { es: string; en: string };
  country: string;
  year: string;
  issuer: string;
  printer: string;
  codes: { pick: string; bg: string; km: string; ht: string };
  url: { es: string; en: string };
};

function countryFromPath(path: string): string {
  if (path.includes('/colombia/') || path.includes('/colombia-numismatica/')) return 'CO';
  if (path.includes('/estados-unidos/') || path.includes('/united-states/')) return 'US';
  if (path.includes('/filipinas/') || path.includes('/philippines/')) return 'PH';
  if (path.includes('/china/')) return 'CN';
  if (path.includes('/malasia/') || path.includes('/malaysia/')) return 'MY';
  if (path.includes('/inglaterra/') || path.includes('/england/')) return 'GB';
  if (path.includes('/canada/') || path.includes('/canadá/')) return 'CA';
  if (path.includes('/puerto-rico/')) return 'PR';
  if (path.includes('/ecuador/')) return 'EC';
  if (path.includes('/espana/') || path.includes('/spain/')) return 'ES';
  if (path.includes('/paises-bajos') || path.includes('/netherlands/')) return 'NL';
  if (path.includes('/liberia/')) return 'LR';
  return '';
}

function catalogCodes(pick: string): CatalogueSummaryItem['codes'] {
  const codes = { pick: '', bg: '', km: '', ht: '' };
  for (const token of pick.split(/[·;]/).map((part) => part.trim()).filter(Boolean)) {
    if (/^BG#/i.test(token)) codes.bg = codes.bg ? `${codes.bg}; ${token}` : token;
    else if (/^KM/i.test(token)) codes.km = codes.km ? `${codes.km}; ${token}` : token;
    else if (/^HT/i.test(token)) codes.ht = codes.ht ? `${codes.ht}; ${token}` : token;
    else if (/^(P#|Pick\b)/i.test(token)) codes.pick = codes.pick ? `${codes.pick}; ${token}` : token;
    else if (!codes.pick) codes.pick = token;
  }
  return codes;
}

/** Non-sensitive catalogue index for /api/catalogue-summary.json. Serials and certs stay off this file. */
export function catalogueSummary(): CatalogueSummaryItem[] {
  return pieceSeeds().map((seed) => ({
    id: seed.id,
    title: seed.title,
    country: countryFromPath(seed.path),
    year: seed.title.es.match(/\b((?:1[789]|20)\d{2})\b/)?.[1] ?? '',
    issuer: seed.kicker?.es ?? '',
    printer: '',
    codes: catalogCodes(seed.pick ?? ''),
    url: {
      es: localizePath(seed.path, 'es'),
      en: localizePath(seed.path, 'en'),
    },
  }));
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
      href: USA_COLONIAL_PATH,
      title: {
        es: `${colonialSeriesCopy.es.kicker} ${colonialSeriesCopy.es.title}`,
        en: `${colonialSeriesCopy.en.kicker} ${colonialSeriesCopy.en.title}`,
      },
      dek: { es: colonialSeriesCopy.es.metaDescription, en: colonialSeriesCopy.en.metaDescription },
      extra:
        'Massachusetts 1690 bills of credit Continental Currency Friedberg CC-91 1779 SUSTINE VEL ABSTINE Hall and Sellers',
    },
    {
      href: USA_OBSOLETE_PATH,
      title: {
        es: `${obsoleteSeriesCopy.es.kicker} ${obsoleteSeriesCopy.es.title}`,
        en: `${obsoleteSeriesCopy.en.kicker} ${obsoleteSeriesCopy.en.title}`,
      },
      dek: { es: obsoleteSeriesCopy.es.metaDescription, en: obsoleteSeriesCopy.en.metaDescription },
      extra:
        'Haxby obsolete broken banknotes remainder NJ-350 New Brunswick 9890 CT-265 New Haven LA-105 Canal Bank Redback',
    },
    {
      href: USA_RENCY_PATH,
      title: { es: rencySeriesCopy.es.title, en: rencySeriesCopy.en.title },
      dek: { es: rencySeriesCopy.es.metaDescription, en: rencySeriesCopy.en.metaDescription },
    },
    {
      href: USA_MORGAN_PATH,
      title: { es: morganSeriesCopy.es.title, en: morganSeriesCopy.en.title },
      dek: { es: morganSeriesCopy.es.metaDescription, en: morganSeriesCopy.en.metaDescription },
      extra:
        'Morgan silver dollar original run 1878 1904 George T Morgan Bland-Allison Sherman Pittman Carson City CC San Francisco S New Orleans O 1878-CC 1884-S 1883 1883-CC 1885-CC 1887-S 1891-CC 1893-CC 1893-S 1893 Philadelphia no mint mark GSA VAM eight tail feathers 1895 proof PCGS 72833930 7222 7226 7142 7180 7206',
    },
    {
      href: USA_SILVER_EAGLE_PATH,
      title: { es: silverEagleSeriesCopy.es.title, en: silverEagleSeriesCopy.en.title },
      dek: { es: silverEagleSeriesCopy.es.metaDescription, en: silverEagleSeriesCopy.en.metaDescription },
      extra:
        'American Silver Eagle 1986 2026 Walking Liberty Adolph Weinman John Mercanti Emily Damstra Michael Gaudioso Liberty Coin Act onza troy .999 West Point bullion proof burnished KM 273 KM 746',
    },
    {
      href: SANTA_FE_MINT_PATH,
      title: { es: santaFeMintCopy.es.nav, en: santaFeMintCopy.en.nav },
      dek: {
        es: santaFeMintCopy.es.metaDescription,
        en: santaFeMintCopy.en.metaDescription,
      },
      extra:
        'Casa de Moneda Santa Fe Nuevo Reino Bogotá NR RN SF BA Turrillo Solís Candelaria macuquina cob 1620 1621 1756 1987 Ibagué',
    },
    {
      href: POPAYAN_1_ESCUDO_CARLOS_IV_PATH,
      title: { es: popayan1EscudoCarlosIvCopy.es.nav, en: popayan1EscudoCarlosIvCopy.en.nav },
      dek: {
        es: popayan1EscudoCarlosIvCopy.es.metaDescription,
        en: popayan1EscudoCarlosIvCopy.en.metaDescription,
      },
      extra:
        'Casa de Moneda de Popayán Popayán mint 1 escudo oro gold Carlos IV Charles IV P JF KM 56.2 Hernández 688 Friedberg 59 1792 1795 1808 colonial',
    },
    {
      href: COSCOJAS_SANTANDER_PATH,
      title: { es: coscojasSantanderCopy.es.nav, en: coscojasSantanderCopy.en.nav },
      dek: {
        es: coscojasSantanderCopy.es.metaDescription,
        en: coscojasSantanderCopy.en.metaDescription,
      },
      extra:
        'coscojas Santander 1902 Palonegro Bucaramanga latón casquillos González Valencia Penagos decreto 102 monedas sangrientas 10 20 50 centavos unifaz',
    },
    {
      href: HACIENDA_TOKENS_PATH,
      title: { es: haciendaTokensCopy.es.nav, en: haciendaTokensCopy.en.nav },
      dek: {
        es: haciendaTokensCopy.es.metaDescription,
        en: haciendaTokensCopy.en.metaDescription,
      },
      extra:
        'fichas de hacienda exonumia scrip comisariato La Amalia Venecia Zancudo Pick S909 Manuelita United Fruit artículo 136 Código Sustantivo Kemmerer Henao tarro almud arroba Manzano Farming',
    },
    {
      href: MANZANO_FARMING_PATH,
      title: { es: manzanoFarmingCopy.es.nav, en: manzanoFarmingCopy.en.nav },
      dek: {
        es: manzanoFarmingCopy.es.metaDescription,
        en: manzanoFarmingCopy.en.metaDescription,
      },
      extra:
        'Manzano Farming Co Sotaquirá Paipa Boyacá Papayo Sativa Satira Carreño Soconsuca seña 1901 10 centavos resello JB Barriga Credencial Historia Montaña',
    },
    {
      href: LAZARETTOS_NUMISMATICS_PATH,
      title: { es: lazarettosNumismaticsCopy.es.nav, en: lazarettosNumismaticsCopy.en.nav },
      dek: {
        es: lazarettosNumismaticsCopy.es.metaDescription,
        en: lazarettosNumismaticsCopy.en.metaDescription,
      },
      extra:
        'coscoja lazareto Caño del Loro Contratación Agua de Dios cruz de San Lázaro Marroquín 1901 1921 2 centavos KM L10 leprocomio',
    },
    {
      href: INDIAN_HEAD_QUARTER_EAGLE_PATH,
      title: { es: indianHeadQuarterEagleCopy.es.title, en: indianHeadQuarterEagleCopy.en.title },
      dek: {
        es: indianHeadQuarterEagleCopy.es.metaDescription,
        en: indianHeadQuarterEagleCopy.en.metaDescription,
      },
      extra:
        'Indian Head quarter eagle 1908 1929 Bela Lyon Pratt incuse 2.50 quarter eagle 1911-D 1929 Executive Order 6102 Philadelphia Denver',
    },
    {
      href: EDUCATIONAL_SERIES_PATH,
      title: { es: educationalSeriesCopy.es.nav, en: educationalSeriesCopy.en.nav },
      dek: {
        es: educationalSeriesCopy.es.metaDescription,
        en: educationalSeriesCopy.en.metaDescription,
      },
      extra:
        'Educational Series 1896 History Instructing Youth Friedberg 224 225 247 248 268 269 270 Blanche Bruce Will Low Blashfield Shirlaw silver certificate B3207078 1712091 Tillman Morgan Fulton Morse',
    },
    {
      href: GIORI_TEST_NOTES_PATH,
      title: { es: gioriTestNotesCopy.es.nav, en: gioriTestNotesCopy.en.nav },
      dek: { es: gioriTestNotesCopy.es.metaDescription, en: gioriTestNotesCopy.en.metaDescription },
      extra: 'Giori Gualtiero Organisation De La Rue KBA Koenig Bauer Varinota Jefferson Washington Pigman Rollins',
    },
    {
      href: WWII_EMERGENCY_PATH,
      title: { es: wwiiEmergencyCopy.es.title, en: wwiiEmergencyCopy.en.title },
      dek: { es: wwiiEmergencyCopy.es.metaDescription, en: wwiiEmergencyCopy.en.metaDescription },
      extra:
        'HAWAII yellow seal Allied Military Currency Operation Bernhard Theresienstadt BAFSV Japanese invasion money RKKS R S experimental guerrilla Shafer Victory Series 66 MPC 461 Ireland war code SIM',
    },
    {
      href: USA_BARABOO_SCRIP_PATH,
      title: { es: barabooScripSeriesCopy.es.title, en: barabooScripSeriesCopy.en.title },
      dek: { es: barabooScripSeriesCopy.es.metaDescription, en: barabooScripSeriesCopy.en.metaDescription },
      extra:
        'Ringling Bros Barnum Bailey Golden Jubilee Baraboo 1933 Shafer WI100 Mitchell WI100-.50 Trimpey Chamber scrip Allied Owners John Ringling A4895 5 cents Chas Ringling A2844 10 cents Al T Ringling A2819 15 cents A C Ringling A1054 50 cents Ringling Bros A2002 1 dollar',
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
      href: glossaryTermHref(term.slug, locale),
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
