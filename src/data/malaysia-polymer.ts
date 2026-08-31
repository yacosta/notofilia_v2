import type { CatalogSource, LocalizedText } from './catalog';
import { localizePath } from '../lib/locale-paths';

export type MalaysiaNoteId = '5-ringgit-abdul-rahman';

export type MalaysiaNote = {
  id: MalaysiaNoteId;
  path: string;
  pick: string;
  serial: string;
  serial_display: string;
  serial_kind: 'ordinary';
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
  };
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  population: LocalizedText;
  grade: LocalizedText;
  sources: CatalogSource[];
};

export const malaysiaNotes: MalaysiaNote[] = [
  {
    id: '5-ringgit-abdul-rahman',
    path: '/coleccion/polimero-mundial/asia/malasia/5-ringgit-abdul-rahman/',
    pick: 'P#52a · TBB B149a',
    serial: 'AA1955984',
    serial_display: 'AA 1955984',
    serial_kind: 'ordinary',
    signatures: {
      es: 'Tan Sri Dr. Zeti Akhtar Aziz (Gabenor)',
      en: 'Tan Sri Dr. Zeti Akhtar Aziz (Governor)',
    },
    printed: {
      es: 'Bank Negara Malaysia sitúa el RM5 de polímero de la cuarta serie —Distinctively Malaysia— en 2012, junto con el RM1 y los valores de papel. Esta ficha no inventa una tirada para el prefijo AA ni para el tipo Pick 52a.',
      en: 'Bank Negara Malaysia places the fourth-series polymer RM5 — Distinctively Malaysia — in 2012, with the RM1 and the paper denominations. This record does not invent a printage for prefix AA or for Pick 52a.',
    },
    images: {
      composite: '/images/catalog/malaysia/5-ringgit-aa1955984-composite.jpg',
      front: '/images/catalog/malaysia/5-ringgit-aa1955984-front.jpg',
      back: '/images/catalog/malaysia/5-ringgit-aa1955984-back.jpg',
    },
    title: {
      es: '5 ringgit · Abdul Rahman · 2012',
      en: 'RM5 · Abdul Rahman · 2012',
    },
    kicker: {
      es: 'Malasia · Bank Negara Malaysia · Polímero',
      en: 'Malaysia · Bank Negara Malaysia · Polymer',
    },
    lead: {
      es: 'Cinco ringgit de polímero de la cuarta serie de Bank Negara Malaysia. Sin fecha impresa; primera emisión en 2012. Retrato de Tuanku Abdul Rahman y hibisco; reverso con dos cálaos rinoceronte. Serie AA 1955984, impresa dos veces al reverso.',
      en: 'Bank Negara Malaysia polymer RM5 from the fourth series. No printed date; first issued in 2012. Portrait of Tuanku Abdul Rahman and a hibiscus; reverse with two rhinoceros hornbills. Serial AA 1955984, printed twice on the reverse.',
    },
    description: {
      es: 'El 5 ringgit de polímero (Pick 52a, The Banknote Book B149a) es el valor verde de la cuarta serie de Bank Negara Malaysia —Distinctively Malaysia—, el único de cinco ringgit de circulación ordinaria en plástico desde 2012. El anverso lleva a la derecha el retrato de Tuanku Abdul Rahman, primer Yang di-Pertuan Agong, con tengkolok; al centro el hibisco (bunga raya); a la izquierda una ventana transparente con la silueta de un cálao rinoceronte, la media luna y la estrella de catorce puntas. BANK NEGARA MALAYSIA encabeza; RM 5 y RINGGIT MALAYSIA marcan el valor; bajo el 5 central firma Zeti Akhtar Aziz sobre GABENOR, y el pie lee «WANG INI SAH DIPERLAKUKAN DENGAN NILAI». El reverso muestra dos cálaos rinoceronte (Buceros rhinoceros) en la selva, el kijang del banco, y en jawi «Bank Negara Malaysia» y «Ringgit Malaysia». Los dos números de serie —vertical en rojo a la izquierda y horizontal en negro arriba a la derecha— leen AA 1955984. Medidas 135 × 65 mm. No es el RM5 de polímero de 2004, que repetía el diseño de la tercera serie. Esta pieza de la colección, en funda y sin encapsular, no lleva certificado. El serial es ordinario: el contador 1955984 no es bajo ni de patrón fancy. AA es el primer prefijo de la emisión Zeti, no un reemplazo ZA.',
      en: 'The polymer RM5 (Pick 52a, The Banknote Book B149a) is the green denomination of Bank Negara Malaysia’s fourth series — Distinctively Malaysia — the only ordinary-circulation five-ringgit on plastic since 2012. The face carries at right the portrait of Tuanku Abdul Rahman, the first Yang di-Pertuan Agong, in a tengkolok; at center the hibiscus (bunga raya); at left a clear window with a rhinoceros-hornbill silhouette, the crescent, and the fourteen-pointed star. BANK NEGARA MALAYSIA heads the note; RM 5 and RINGGIT MALAYSIA mark the value; under the central 5 is Zeti Akhtar Aziz’s signature over GABENOR, and the footer reads “WANG INI SAH DIPERLAKUKAN DENGAN NILAI.” The reverse shows two rhinoceros hornbills (Buceros rhinoceros) in the forest, the bank’s kijang, and “Bank Negara Malaysia” and “Ringgit Malaysia” in Jawi. Both serials — vertical in red at left and horizontal in black at upper right — read AA 1955984. Size 135 × 65 mm. It is not the 2004 polymer RM5, which repeated the third-series design. This collection piece, sleeved and unslabbed, has no certificate. The serial is ordinary: counter 1955984 is neither low nor a fancy pattern. AA is the first prefix of the Zeti issue, not a ZA replacement.',
    },
    frontCaption: {
      es: 'Anverso del 5 ringgit de polímero, serie AA 1955984: Tuanku Abdul Rahman, hibisco, ventana del cálao y firma de Zeti Akhtar Aziz.',
      en: 'Face of the polymer RM5, serial AA 1955984: Tuanku Abdul Rahman, the hibiscus, the hornbill window, and Zeti Akhtar Aziz’s signature.',
    },
    backCaption: {
      es: 'Reverso del 5 ringgit: dos cálaos rinoceronte, kijang del banco, jawi y los dos seriales AA 1955984.',
      en: 'Reverse of the RM5: two rhinoceros hornbills, the bank’s kijang, Jawi legends, and both AA 1955984 serials.',
    },
    scarcity: {
      es: 'Es el tipo de circulación ordinaria del 5 ringgit desde 2012. Bank Negara Malaysia lo describe como el RM5 de polímero de la cuarta serie; el RM50 de esa familia salió en julio de 2009 y el resto de valores, incluido este, en 2012. AA 1955984 es un serial ordinario del primer prefijo con firma Zeti (Pick 52a), no un reemplazo ZA. Firmas posteriores —Muhammad Ibrahim, Nor Shamsiah Mohd Yunus, Abdul Rasheed Ghaffour— pertenecen a otras filas del mismo diseño (TBB B149b–d). Esta ficha no inventa una tirada por prefijo.',
      en: 'This is the ordinary-circulation RM5 type from 2012. Bank Negara Malaysia describes it as the polymer RM5 of the fourth series; that family’s RM50 appeared in July 2009 and the remaining denominations, including this one, in 2012. AA 1955984 is an ordinary first-prefix serial with the Zeti signature (Pick 52a), not a ZA replacement. Later signatures — Muhammad Ibrahim, Nor Shamsiah Mohd Yunus, Abdul Rasheed Ghaffour — belong to other rows of the same design (TBB B149b–d). This record does not invent a printage by prefix.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial AA 1955984. La pieza se presenta en funda, sin encapsular, sin certificado.',
      en: 'A PMG or PCGS census for serial AA 1955984 has not been independently verified. The note is shown in a sleeve, unslabbed, with no certificate.',
    },
    grade: {
      es: 'Sin encapsular, en funda (colección privada)',
      en: 'Unslabbed, in a sleeve (private collection)',
    },
    sources: [
      {
        href: 'https://www.bnm.gov.my/currency/banknotes',
        es: 'Bank Negara Malaysia — Current Banknote Series (2012–present)',
        en: 'Bank Negara Malaysia — Current Banknote Series (2012–present)',
        note: {
          es: 'Cuarta serie Distinctively Malaysia; RM50 en julio de 2009; RM1, RM5, RM10, RM20 y RM100 en 2012; primera firma Zeti Akhtar Aziz.',
          en: 'Fourth series Distinctively Malaysia; RM50 in July 2009; RM1, RM5, RM10, RM20, and RM100 in 2012; first signature Zeti Akhtar Aziz.',
        },
      },
      {
        href: 'https://www.bnm.gov.my/-/currency/banknotes/rm5',
        es: 'Bank Negara Malaysia — RM5 (cálao rinoceronte)',
        en: 'Bank Negara Malaysia — RM5 (rhinoceros hornbill)',
        note: {
          es: 'RM5 de polímero; motivo Buceros rhinoceros; ventana transparente y demás rasgos de seguridad de la cuarta serie.',
          en: 'Polymer RM5; Buceros rhinoceros motif; clear window and the other fourth-series security features.',
        },
      },
      {
        href: 'https://en.numista.com/203263',
        es: 'Numista — 5 Ringgit, Abdul Rahman / cálao, polímero (N# 203263)',
        en: 'Numista — 5 Ringgit, Abdul Rahman / hornbill, polymer (N# 203263)',
        note: {
          es: 'Pick 52a; TBB B149a; 135 × 65 mm; firma Zeti Akhtar Aziz; ND (2012). No se citan precios.',
          en: 'Pick 52a; TBB B149a; 135 × 65 mm; Zeti Akhtar Aziz signature; ND (2012). No prices cited.',
        },
      },
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/ASI/MAL/MAL0052.htm',
        es: 'Bank Note Museum — Malasia P-52',
        en: 'Bank Note Museum — Malaysia P-52',
        note: {
          es: 'Tipo Pick 52; cuarta serie de polímero; Abdul Rahman e hibisco; cálaos al reverso.',
          en: 'Pick 52 type; fourth-series polymer; Abdul Rahman and hibiscus; hornbills on the reverse.',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    seriesLink: 'Billetes de polímero mundial',
    collectionLink: 'Malasia',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza',
    scarcityHeading: 'Rareza e impresión',
    populationHeading: 'Población',
    factsHeading: 'Datos de catálogo',
    sourcesHeading: 'Fuentes',
    printedLabel: 'Impresión',
    signaturesLabel: 'Firmas',
    serialLabel: 'Número de serie',
    pickLabel: 'Referencia Pick',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
  },
  en: {
    seriesLink: 'World polymer banknotes',
    collectionLink: 'Malaysia',
    frontHeading: 'Face',
    backHeading: 'Back',
    aboutHeading: 'The note',
    scarcityHeading: 'Scarcity and printage',
    populationHeading: 'Population',
    factsHeading: 'Catalog facts',
    sourcesHeading: 'Sources',
    printedLabel: 'Printage',
    signaturesLabel: 'Signatures',
    serialLabel: 'Serial number',
    pickLabel: 'Pick reference',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
  },
} as const;

export function noteById(id: string): MalaysiaNote | undefined {
  return malaysiaNotes.find((note) => note.id === id);
}

export function notePath(note: MalaysiaNote, locale: 'es' | 'en'): string {
  return localizePath(note.path, locale);
}

export const malaysiaNoteSlugs = malaysiaNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export function malaysiaSeriesPath(locale: 'es' | 'en'): string {
  return localizePath('/coleccion/polimero-mundial/asia/malasia/', locale);
}
