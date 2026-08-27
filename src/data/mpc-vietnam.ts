import type { CatalogSource, LocalizedText } from './catalog';
import { USA_MPC_PATH, USA_MPC_PATH_EN, USA_PATH } from './estados-unidos';

export type MpcVietnamChapterId =
  | 'programa'
  | 'serie-641'
  | 'serie-661'
  | 'serie-681'
  | 'serie-692';

export type MpcVietnamChapter = {
  id: MpcVietnamChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const mpcVietnamChapters: MpcVietnamChapter[] = [
  {
    id: 'programa',
    years: { es: '1946–1973', en: '1946–1973' },
    title: {
      es: 'El programa MPC',
      en: 'The MPC program',
    },
    lead: {
      es: 'Papel en dólares para bases de ultramar: no era moneda de curso legal, y un C-Day secreto lo invalidaba de un día para otro.',
      en: 'Dollar-denominated paper for overseas bases: not legal tender, and a secret C-Day could void it overnight.',
    },
    body: {
      es: 'En julio de 1946 el Departamento de Guerra y el Tesoro probaron un sistema de pago militar; en septiembre salió la serie 461. El certificado de pago militar (Military Payment Certificate, MPC) circulaba solo entre personal autorizado, en instalaciones de las fuerzas armadas. No era curso legal estadounidense ni moneda local: servía en el economato, el correo y los servicios de la base, y se convertía en moneda del país, nunca al revés. El C-Day —Conversion Day— cerraba las bases a civiles y canjeaba la serie vigente; la saliente quedaba sin valor, para que el mercado negro no pudiera atesorarla. Trece series circularon; dos más se imprimieron y no se emitieron. Tudor Press y Forbes Lithograph, en Boston, grabaron las primeras; el Bureau of Engraving and Printing asumió desde la serie 611. A diferencia del intaglio de los Federal Reserve Notes, el MPC se imprimió en offset, con planchetas de color en el papel.',
      en: 'In July 1946 the War Department and the Treasury tried a military payment system; Series 461 followed in September. Military Payment Certificates circulated only among authorized personnel, on armed-forces installations. They were neither U.S. legal tender nor local currency: they paid the PX, the post office, and base services, and could be changed into the host country’s money, never the reverse. C-Day — Conversion Day — closed bases to civilians and exchanged the current series; the outgoing notes became worthless so the black market could not hoard them. Thirteen series circulated; two more were printed and never issued. Tudor Press and Forbes Lithograph, in Boston, produced the early series; the Bureau of Engraving and Printing took over from Series 611. Unlike the intaglio of Federal Reserve Notes, MPCs were offset-printed on paper with colored planchettes.',
    },
  },
  {
    id: 'serie-641',
    years: { es: '1965–1968', en: '1965–1968' },
    title: {
      es: 'Serie 641',
      en: 'Series 641',
    },
    lead: {
      es: 'La primera serie usada solo en Vietnam: 31 de agosto de 1965 al 21 de octubre de 1968. Siete denominaciones, sin el billete de 20 dólares.',
      en: 'The first series used only in Vietnam: 31 August 1965 to 21 October 1968. Seven denominations, without a $20 note.',
    },
    body: {
      es: 'La serie 641 —el 64 del año de diseño y el 1 de la primera emisión de ese año— fue la novena del programa y la primera confinada a Vietnam. El 31 de agosto de 1965 sustituyó, en aquel teatro, el papel federal que las tropas aún llevaban; el 21 de octubre de 1968 un C-Day la retiró. Las denominaciones fueron 5, 10, 25 y 50 centavos y 1, 5 y 10 dólares. El BEP la imprimió, como el resto de las series tardías. La American Numismatic Association la describe como una de las más comunes y de circulación más larga. No debe confundirse con la 651, emitida el 28 de abril de 1969 para Japón, Libia y Corea del Sur: esa serie no circuló en Vietnam.',
      en: 'Series 641 — 64 for the design year and 1 for the first issue of that year — was the ninth of the program and the first confined to Vietnam. On 31 August 1965 it replaced, in that theater, the federal paper troops still carried; a C-Day withdrew it on 21 October 1968. Denominations were 5, 10, 25, and 50 cents and $1, $5, and $10. The BEP printed it, as with the later series. The American Numismatic Association calls it one of the most common and longest-circulating issues. It should not be confused with Series 651, issued 28 April 1969 for Japan, Libya, and South Korea: that series did not circulate in Vietnam.',
    },
  },
  {
    id: 'serie-661',
    years: { es: '1968–1969', en: '1968–1969' },
    title: {
      es: 'Serie 661',
      en: 'Series 661',
    },
    lead: {
      es: 'El 21 de octubre de 1968 reemplazó a la 641. Primera serie vietnamita con el billete de 20 dólares; retirada el 11 de agosto de 1969.',
      en: 'On 21 October 1968 it replaced Series 641. First Vietnam series with a $20 note; withdrawn 11 August 1969.',
    },
    body: {
      es: 'La serie 661 nació el mismo C-Day que apagó la 641 y duró menos de diez meses: el 11 de agosto de 1969 otra conversión la retiró. Fue, como la 641, exclusiva de Vietnam. El Tesoro había añadido el 20 dólares al programa a mediados de la década; esta fue la primera serie vietnamita que lo llevó, junto con los fraccionarios y el 1, 5 y 10 dólares. El catálogo Schwan y el Bank Note Museum la registran como M64–M71. Los 10 y 20 dólares de esta emisión son, para la ANA, claramente más escasos que los valores bajos.',
      en: 'Series 661 was born on the same C-Day that ended Series 641 and lasted less than ten months: another conversion withdrew it on 11 August 1969. Like 641, it was exclusive to Vietnam. The Treasury had added the $20 to the program in the mid-1960s; this was the first Vietnam series to carry it, with the fractionals and the $1, $5, and $10. Schwan’s catalog and the Bank Note Museum list it as M64–M71. The ANA notes that the $10 and $20 of this issue are clearly scarcer than the low values.',
    },
  },
  {
    id: 'serie-681',
    years: { es: '1969–1970', en: '1969–1970' },
    title: {
      es: 'Serie 681',
      en: 'Series 681',
    },
    lead: {
      es: '11 de agosto de 1969 al 7 de octubre de 1970: la penúltima conversión en Vietnam, con las ocho denominaciones ya habituales.',
      en: '11 August 1969 to 7 October 1970: the penultimate conversion in Vietnam, with the eight denominations then standard.',
    },
    body: {
      es: 'La serie 681 cubrió el año en que la desescalada ya había empezado y las bases seguían pagando en MPC. El 11 de agosto de 1969 sustituyó a la 661; el 7 de octubre de 1970 un nuevo C-Day la canjeó por la 692. Conservó el 20 dólares y los fraccionarios. El Bank Note Museum la numera M75–M82. En Corea se imprimió una 691 para relevo de la 651; nunca se emitió y casi todo el papel volvió a Estados Unidos. Esa serie no pertenece a esta vitrina vietnamita.',
      en: 'Series 681 covered the year when withdrawal had already begun and the bases still paid in MPC. On 11 August 1969 it replaced Series 661; on 7 October 1970 a new C-Day exchanged it for Series 692. It kept the $20 and the fractionals. The Bank Note Museum numbers it M75–M82. In Korea a Series 691 was printed to replace 651; it was never issued and almost all of the paper returned to the United States. That series does not belong in this Vietnam case.',
    },
  },
  {
    id: 'serie-692',
    years: { es: '1970–1973', en: '1970–1973' },
    title: {
      es: 'Serie 692',
      en: 'Series 692',
    },
    lead: {
      es: 'Última serie del programa: fraccionarios hasta el 1 de junio de 1971; dólares hasta el 15 de marzo de 1973.',
      en: 'Last series of the program: fractionals until 1 June 1971; dollar notes until 15 March 1973.',
    },
    body: {
      es: 'La 692 —segunda serie diseñada en 1969, porque la 691 no llegó a circular— se emitió el 7 de octubre de 1970. El 1 de junio de 1971 se retiraron los 5, 10, 25 y 50 centavos: las monedas estadounidenses bastaban en la base. Los 1, 5, 10 y 20 dólares siguieron hasta el 15 de marzo de 1973, último C-Day del programa. Una serie 701, pensada para Vietnam, se imprimió y no se puso en circulación. El MPC dejó de usarse; el programa no se canceló de forma formal hasta 2003. Esta vitrina reunirá, a medida que se fotografíen, las series vietnamitas de la colección, con referencias Schwan o Pick cuando existan.',
      en: 'Series 692 — the second series designed in 1969, because 691 never circulated — was issued on 7 October 1970. On 1 June 1971 the 5-, 10-, 25-, and 50-cent notes were withdrawn: U.S. coins sufficed on base. The $1, $5, $10, and $20 continued until 15 March 1973, the program’s last C-Day. A Series 701, intended for Vietnam, was printed and never released. MPCs ceased to be used; the program was not formally cancelled until 2003. This case will gather, as they are photographed, the Vietnam series in the collection, with Schwan or Pick references when they exist.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.money.org/uploads/Mili.pdf',
    es: 'American Numismatic Association — Military Payment Certificates',
    en: 'American Numismatic Association — Military Payment Certificates',
    note: {
      es: 'Fechas de emisión y retiro de las series 641, 661, 681 y 692; la 651 fuera de Vietnam; fraccionarios de la 692 retirados el 1 de junio de 1971.',
      en: 'Issue and withdrawal dates for Series 641, 661, 681, and 692; Series 651 outside Vietnam; Series 692 fractionals withdrawn 1 June 1971.',
    },
  },
  {
    href: 'https://coinweek.com/money-of-necessity-u-s-military-payment-certificates/',
    es: 'CoinWeek — Money of Necessity: U.S. Military Payment Certificates',
    en: 'CoinWeek — Money of Necessity: U.S. Military Payment Certificates',
    note: {
      es: 'Origen en 1946, C-Day, offset frente a intaglio, planchetas, impresores de Boston y el BEP desde la serie 611.',
      en: '1946 origin, C-Day, offset versus intaglio, planchettes, the Boston printers, and the BEP from Series 611.',
    },
  },
  {
    href: 'http://banknote.ws/COLLECTION/countries/AME/USA/USA-MIL/USA-MIL.htm',
    es: 'Bank Note Museum — Estados Unidos, certificados de pago militar (M1–M106)',
    en: 'Bank Note Museum — United States, Military Payment Certificates (M1–M106)',
    note: {
      es: 'Numeración Schwan/Pick de las series 641 (M57–M63), 661 (M64–M71), 681 (M75–M82) y 692 (M91–M98).',
      en: 'Schwan/Pick numbering for Series 641 (M57–M63), 661 (M64–M71), 681 (M75–M82), and 692 (M91–M98).',
    },
  },
  {
    href: 'https://www.bep.gov/media/1041/download?inline=',
    es: 'Bureau of Engraving and Printing — Military Payment Certificates (ficha)',
    en: 'Bureau of Engraving and Printing — Military Payment Certificates (fact sheet)',
    note: {
      es: 'Sitúa la 641, 661, 681 y 692 en Vietnam; la 651 en Japón, Libia y Corea del Sur.',
      en: 'Places Series 641, 661, 681, and 692 in Vietnam; Series 651 in Japan, Libya, and South Korea.',
    },
  },
  {
    href: 'https://www.720mpreunion.org/history/assets/mpc_history.html',
    es: '720th Military Police Battalion — Historia de los MPC',
    en: '720th Military Police Battalion — MPC history',
    note: {
      es: 'Cronología de las series vietnamitas y el retiro partido de la 692 (fraccionarios / dólares).',
      en: 'Timeline of the Vietnam series and the split withdrawal of Series 692 (fractionals / dollars).',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Estados Unidos · MPC de la guerra de Vietnam | Notofilia',
    metaDescription:
      'Catálogo de Military Payment Certificates usados en Vietnam: series 641, 661, 681 y 692, C-Day y el fin del programa en 1973.',
    kicker: 'Estados Unidos · MPC',
    title: 'Certificados de pago militar en Vietnam',
    heroAlt:
      'Mapa vintage en relieve 3D de Vietnam sobre pergamino, con Hà Nội, Huế, Đà Nẵng y Sài Gòn, certificados MPC fraccionarios, un sello del correo del Ejército y el título Việt Nam',
    intro: [
      'El dólar de curso legal no debía inundar Saigón. Desde 1946 el Ejército pagaba a su gente en Military Payment Certificates: papel en dólares que solo valía en la base. Quien salía al mercado local los cambiaba en la ventanilla; el civil no podía devolverlos. Así se cortaba el mercado negro y se evitaba inflar la moneda del país anfitrión.',
      'El arma del sistema era el C-Day. Sin aviso, las puertas se cerraban a civiles y las tropas canjeaban la serie vigente por otra. La saliente amanecía sin valor. Trece series circularon entre 1946 y 1973; Tudor Press y Forbes Lithograph las imprimieron al principio, el Bureau of Engraving and Printing desde la 611, siempre en offset con planchetas de color, no en el intaglio de los Federal Reserve Notes.',
      'En Vietnam el programa tuvo teatro propio. La serie 641, del 31 de agosto de 1965 al 21 de octubre de 1968, fue la primera usada solo allí. La 661 trajo el 20 dólares. La 681 cubrió 1969–1970. La 692, última de todas, perdió los fraccionarios el 1 de junio de 1971 y los dólares el 15 de marzo de 1973. La 651, pese al número vecino, se usó en Japón, Libia y Corea, no en Vietnam.',
      'Esta vitrina no es el catálogo completo de Schwan: es el inventario de los ejemplares vietnamitas que se documentarán aquí. Las fichas de cada pieza se publicarán como en Filipinas, a medida que se fotografíen.',
    ],
    parentLink: 'Estados Unidos',
    usLead: 'El resto del papel federal, colonial y obsoleto se documenta en la vitrina de Estados Unidos.',
    usLink: 'Estados Unidos',
    sourcesTitle: 'Fuentes',
  },
  en: {
    metaTitle: 'United States · Vietnam War MPCs | Notofilia',
    metaDescription:
      'Catalog of Military Payment Certificates used in Vietnam: Series 641, 661, 681, and 692, C-Day, and the end of the program in 1973.',
    kicker: 'United States · MPC',
    title: 'Military Payment Certificates in Vietnam',
    heroAlt:
      'Vintage 3D relief map of Vietnam on parchment, with Hà Nội, Huế, Đà Nẵng, and Sài Gòn, fractional MPC notes, an Army postal stamp, and the title Việt Nam',
    intro: [
      'Legal-tender dollars were not meant to flood Saigon. From 1946 the Army paid its people in Military Payment Certificates: dollar paper that was good only on base. Anyone going to the local market changed them at the window; a civilian could not change them back. That cut the black market and kept from inflating the host currency.',
      'The system’s weapon was C-Day. Without notice, gates closed to civilians and troops exchanged the current series for another. The outgoing notes woke up worthless. Thirteen series circulated from 1946 to 1973; Tudor Press and Forbes Lithograph printed the early ones, the Bureau of Engraving and Printing from Series 611, always in offset with colored planchettes, not the intaglio of Federal Reserve Notes.',
      'In Vietnam the program had its own theater. Series 641, 31 August 1965 to 21 October 1968, was the first used only there. Series 661 brought the $20. Series 681 covered 1969–1970. Series 692, last of all, lost its fractionals on 1 June 1971 and its dollar notes on 15 March 1973. Series 651, despite the neighboring number, was used in Japan, Libya, and Korea, not in Vietnam.',
      'This case is not Schwan’s complete catalog: it is the inventory of the Vietnam pieces that will be documented here. Individual note pages will be published as they are photographed, as in the Philippines case.',
    ],
    parentLink: 'United States',
    usLead: 'The rest of the federal, colonial, and obsolete paper is documented in the United States case.',
    usLink: 'United States',
    sourcesTitle: 'Sources',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${USA_MPC_PATH_EN}` : USA_MPC_PATH;
}

export { USA_MPC_PATH, USA_MPC_PATH_EN, USA_PATH };
