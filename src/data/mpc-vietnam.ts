import type { CatalogSource, LocalizedText } from './catalog';
import { localizePath } from '../lib/locale-paths';
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
    breadcrumbCurrent: 'MPC - Guerra de Vietnam (1955-1975)',
    heroAlt:
      'Mapa vintage en relieve 3D de Vietnam sobre pergamino, con el delta del Río Rojo, Huế, Đà Nẵng, Saigón, el paralelo 17, sellos y el título Vietnam 1955–1975',
    intro: [
      'El dólar de curso legal no debía inundar Saigón. Desde 1946 el Ejército pagaba a su gente en Military Payment Certificates: papel en dólares que solo valía en la base. Quien salía al mercado local los cambiaba en la ventanilla; el civil no podía devolverlos. Así se cortaba el mercado negro y se evitaba inflar la moneda del país anfitrión.',
      'El arma del sistema era el C-Day. Sin aviso, las puertas se cerraban a civiles y las tropas canjeaban la serie vigente por otra. La saliente amanecía sin valor. Trece series circularon entre 1946 y 1973; Tudor Press y Forbes Lithograph las imprimieron al principio, el Bureau of Engraving and Printing desde la 611, siempre en offset con planchetas de color, no en el intaglio de los Federal Reserve Notes.',
      'En Vietnam el programa tuvo teatro propio. La serie 641, del 31 de agosto de 1965 al 21 de octubre de 1968, fue la primera usada solo allí. La 661 trajo el 20 dólares. La 681 cubrió 1969–1970. La 692, última de todas, perdió los fraccionarios el 1 de junio de 1971 y los dólares el 15 de marzo de 1973. La 651, pese al número vecino, se usó en Japón, Libia y Corea, no en Vietnam.',
      'Esta vitrina no es el catálogo completo de Schwan: es el inventario de los ejemplares vietnamitas que se documentarán aquí. Ya tienen ficha el 10 dólares de la serie 641, J01130273J; el 1 dólar de la serie 681, C10102847C; y el 20 dólares de la serie 692, E05725119E. Las demás se publicarán como en Filipinas, a medida que se fotografíen.',
    ],
    parentLink: 'Estados Unidos',
    usLead: 'El resto del papel federal, colonial y obsoleto se documenta en la vitrina de Estados Unidos.',
    usLink: 'Estados Unidos',
    sourcesTitle: 'Fuentes',
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
  },
  en: {
    metaTitle: 'United States · Vietnam War MPCs | Notofilia',
    metaDescription:
      'Catalog of Military Payment Certificates used in Vietnam: Series 641, 661, 681, and 692, C-Day, and the end of the program in 1973.',
    kicker: 'United States · MPC',
    title: 'Military Payment Certificates in Vietnam',
    breadcrumbCurrent: 'MPC - Vietnam War (1955-1975)',
    heroAlt:
      'Vintage 3D relief map of Vietnam on parchment, with the Red River Delta, Huế, Da Nang, Saigon, the 17th parallel, postage stamps, and the title Vietnam 1955–1975',
    intro: [
      'Legal-tender dollars were not meant to flood Saigon. From 1946 the Army paid its people in Military Payment Certificates: dollar paper that was good only on base. Anyone going to the local market changed them at the window; a civilian could not change them back. That cut the black market and kept from inflating the host currency.',
      'The system’s weapon was C-Day. Without notice, gates closed to civilians and troops exchanged the current series for another. The outgoing notes woke up worthless. Thirteen series circulated from 1946 to 1973; Tudor Press and Forbes Lithograph printed the early ones, the Bureau of Engraving and Printing from Series 611, always in offset with colored planchettes, not the intaglio of Federal Reserve Notes.',
      'In Vietnam the program had its own theater. Series 641, 31 August 1965 to 21 October 1968, was the first used only there. Series 661 brought the $20. Series 681 covered 1969–1970. Series 692, last of all, lost its fractionals on 1 June 1971 and its dollar notes on 15 March 1973. Series 651, despite the neighboring number, was used in Japan, Libya, and Korea, not in Vietnam.',
      'This case is not Schwan’s complete catalog: it is the inventory of the Vietnam pieces that will be documented here. Note pages are already up for the Series 641 $10, serial J01130273J; the Series 681 $1, serial C10102847C; and the Series 692 $20, serial E05725119E. Further pieces will be published as they are photographed, as in the Philippines case.',
    ],
    parentLink: 'United States',
    usLead: 'The rest of the federal, colonial, and obsolete paper is documented in the United States case.',
    usLink: 'United States',
    sourcesTitle: 'Sources',
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return localizePath(USA_MPC_PATH, locale);
}

export type MpcVietnamNoteId = '10-dolares-serie-641' | '1-dolar-serie-681' | '20-dolares-serie-692';

export type MpcVietnamNote = {
  id: MpcVietnamNoteId;
  chapterId: MpcVietnamChapterId;
  path: string;
  pathEn: string;
  pick: string;
  serial: string;
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
    width: number;
    height: number;
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

export const mpcVietnamNotes: MpcVietnamNote[] = [
  {
    id: '10-dolares-serie-641',
    chapterId: 'serie-641',
    path: '/coleccion/estados-unidos/mpc-vietnam/10-dolares-serie-641/',
    pathEn: '/collection/united-states/mpc-vietnam/10-dollars-series-641/',
    pick: 'P#M63 · Schwan 887-1',
    serial: 'J01130273J',
    signatures: {
      es: 'Sin firmas (emisión militar; el texto de uso sustituye al firmante)',
      en: 'No signatures (military issue; the use legend stands in place of a signer)',
    },
    printed: {
      es: 'Se citan 20.400.000 ejemplares del 10 dólares de la serie 641',
      en: '20,400,000 notes are cited for the Series 641 $10',
    },
    images: {
      composite: '/images/catalog/estados-unidos/mpc-641-10-composite.jpg',
      front: '/images/catalog/estados-unidos/mpc-641-10-front.jpg',
      back: '/images/catalog/estados-unidos/mpc-641-10-back.jpg',
      width: 1536,
      height: 1024,
    },
    title: {
      es: '10 dólares · Serie 641',
      en: '$10 · Series 641',
    },
    kicker: {
      es: 'Estados Unidos · MPC · Vietnam',
      en: 'United States · MPC · Vietnam',
    },
    lead: {
      es: 'Anverso con retrato de mujer a la derecha; reverso con la cabeza de la Estatua de la Libertad. Encapsulado PMG 53, certificado 2371285-006, serie J01130273J.',
      en: 'Face with a woman’s profile to the right; back with the head of the Statue of Liberty. PMG 53, certificate 2371285-006, serial J01130273J.',
    },
    description: {
      es: 'El 10 dólares de la serie 641 (Pick M63, Schwan 887-1) es la denominación alta de la primera serie usada solo en Vietnam. El anverso, en sepia con sobrecargas rojas, lleva un retrato de mujer en medallón —grabado de Marcus Baldwin, tomado de la alegoría del 2 dólares Educational Series de 1896— y, en las cuatro esquinas, el 10. «SERIES 641» aparece dos veces; el 42 es el número de posición en el pliego. El reverso muestra la cabeza de la Libertad, grabado de Richard M. Bower, con TEN en rojo a ambos lados. El texto restringe el uso a establecimientos militares y personal autorizado. Esta pieza está encapsulada por PMG como About Uncirculated 53, primera impresión; el certificado 2371285-006 identifica el serial J01130273J y la posición 42.',
      en: 'The Series 641 $10 (Pick M63, Schwan 887-1) is the high denomination of the first series used only in Vietnam. The sepia face with red overprints carries a woman’s portrait in a medallion — a Marcus Baldwin engraving taken from the allegory on the 1896 $2 Educational Series — and 10s in all four corners. “SERIES 641” appears twice; 42 is the sheet position number. The back shows Liberty’s head, engraved by Richard M. Bower, with TEN in red at both sides. The legend restricts use to military establishments and authorized personnel. This example is slabbed by PMG as About Uncirculated 53, first printing; certificate 2371285-006 records serial J01130273J and position 42.',
    },
    frontCaption: {
      es: 'Anverso encapsulado del 10 dólares, serie 641, PMG 53, serial J01130273J: retrato de mujer y sobrecargas rojas del 10.',
      en: 'Slabbed face of the Series 641 $10, PMG 53, serial J01130273J: woman’s portrait and red 10 overprints.',
    },
    backCaption: {
      es: 'Reverso encapsulado del 10 dólares, serie 641, certificado PMG 2371285-006: cabeza de la Estatua de la Libertad y TEN en rojo.',
      en: 'Slabbed back of the Series 641 $10, PMG certificate 2371285-006: head of the Statue of Liberty and TEN in red.',
    },
    scarcity: {
      es: 'La ANA describe la serie 641 como una de las más comunes del programa. Se citan 20.400.000 ejemplares de este 10 dólares; el valor facial total de la serie superó los 283 millones. Los fraccionarios son más fáciles; el 10 dólares de 641 sigue siendo asequible en estados medios.',
      en: 'The ANA calls Series 641 one of the most common in the program. 20,400,000 notes are cited for this $10; the series’ total face value exceeded $283 million. Fractionals are easier; the Series 641 $10 remains affordable in mid grades.',
    },
    population: {
      es: 'PMG publica informes de población de Military Payment Certificates, pero el recuento concreto de Schwan 887-1 en 53 no se ha verificado aquí de forma independiente (el informe en línea requiere cuenta). Se documenta el certificado 2371285-006 y el grado impreso en el encapsulado, no un censo.',
      en: 'PMG publishes Military Payment Certificate population reports, but the specific Schwan 887-1 grade-53 headcount has not been independently verified here (the online report requires an account). This page records certificate 2371285-006 and the grade printed on the holder, not a census total.',
    },
    grade: {
      es: 'PMG 53 · certificado 2371285-006',
      en: 'PMG 53 · certificate 2371285-006',
    },
    sources: [
      {
        href: 'https://art-hanoi.com/mpc/usa/mpc-series-641',
        es: 'Art-Hanoi — MPC serie 641 (P-M57 a P-M63)',
        en: 'Art-Hanoi — MPC Series 641 (P-M57 to P-M63)',
        note: {
          es: 'El 10 dólares es P-M63 / Schwan 887 (887-1 en primera impresión): retrato de mujer al anverso y Libertad al reverso.',
          en: 'The $10 is P-M63 / Schwan 887 (887-1 on the first printing): woman’s portrait on the face and Liberty on the back.',
        },
      },
      {
        href: 'https://www.worldbanknotescoins.com/2014/11/us-military-payment-certificate-10-dollars-mpc-series-641.html',
        es: 'World Banknotes & Coins — 10 dólares MPC serie 641',
        en: 'World Banknotes & Coins — Series 641 $10 MPC',
        note: {
          es: 'Cita 20.400.000 ejemplares; grabados de Baldwin (anverso) y Bower (reverso).',
          en: 'Cites 20,400,000 notes; Baldwin face engraving and Bower back.',
        },
      },
    ],
  },
  {
    id: '1-dolar-serie-681',
    chapterId: 'serie-681',
    path: '/coleccion/estados-unidos/mpc-vietnam/1-dolar-serie-681/',
    pathEn: '/collection/united-states/mpc-vietnam/1-dollar-series-681/',
    pick: 'P#M79 · Schwan 915',
    serial: 'C10102847C',
    signatures: {
      es: 'Sin firmas (emisión militar; el texto de uso sustituye al firmante)',
      en: 'No signatures (military issue; the use legend stands in place of a signer)',
    },
    printed: {
      es: 'Se citan 22.400.000 ejemplares del 1 dólar de la serie 681',
      en: '22,400,000 notes are cited for the Series 681 $1',
    },
    images: {
      composite: '/images/catalog/estados-unidos/mpc-681-1-composite.jpg',
      front: '/images/catalog/estados-unidos/mpc-681-1-front.jpg',
      back: '/images/catalog/estados-unidos/mpc-681-1-back.jpg',
      width: 1536,
      height: 512,
    },
    title: {
      es: '1 dólar · Serie 681',
      en: '$1 · Series 681',
    },
    kicker: {
      es: 'Estados Unidos · MPC · Vietnam',
      en: 'United States · MPC · Vietnam',
    },
    lead: {
      es: 'Anverso violeta con piloto de casco a la derecha; reverso con cuatro F-100 Super Sabre en naranja. Posición 3. Serie C10102847C.',
      en: 'Violet face with a helmeted pilot to the right; back with four orange F-100 Super Sabres. Position 3. Serial C10102847C.',
    },
    description: {
      es: 'El 1 dólar de la serie 681 (Pick M79, Schwan 915) es el valor de un dólar de la penúltima conversión en Vietnam: del 11 de agosto de 1969 al 7 de octubre de 1970. El anverso, en violeta sobre guilloché naranja, lleva a la derecha un piloto con casco y gafas alzadas —tema de Fuerza Aérea— y, en las cuatro esquinas, el 1. «SERIES 681» aparece dos veces; el 3 es el número de posición en el pliego. El reverso, en púrpura con naranjas, muestra cuatro F-100 Super Sabre en formación —los Thunderbirds, según CoinWeek y PMG—. El texto restringe el uso a establecimientos militares y personal autorizado. Esta pieza de la colección, sin encapsular, lleva el serial C10102847C.',
      en: 'The Series 681 $1 (Pick M79, Schwan 915) is the dollar denomination of the penultimate conversion in Vietnam: 11 August 1969 to 7 October 1970. The violet face on orange guilloché carries a helmeted pilot with goggles raised — an Air Force theme — and 1s in all four corners. “SERIES 681” appears twice; 3 is the sheet position number. The back shows four F-100 Super Sabres in formation — the Thunderbirds, per CoinWeek and PMG — in orange on purple. The legend restricts use to military establishments and authorized personnel. This collection piece, unslabbed, is serial C10102847C.',
    },
    frontCaption: {
      es: 'Anverso del 1 dólar, serie 681, serial C10102847C: piloto con casco y sobrecargas violetas del 1.',
      en: 'Face of the Series 681 $1, serial C10102847C: helmeted pilot and violet 1 overprints.',
    },
    backCaption: {
      es: 'Reverso del 1 dólar, serie 681: cuatro F-100 Super Sabre en formación y ONE DOLLAR.',
      en: 'Back of the Series 681 $1: four F-100 Super Sabres in formation and ONE DOLLAR.',
    },
    scarcity: {
      es: 'El 1 dólar de 681 se cita como uno de los MPC más comunes: 22.400.000 ejemplares; el valor facial total de la serie superó los 214 millones. Los fraccionarios y este 1 dólar siguen asequibles en estados medios; los reemplazos del 5 y del 20 dólares son los difíciles.',
      en: 'The Series 681 $1 is cited as one of the most common MPCs: 22,400,000 notes; the series’ total face value exceeded $214 million. Fractionals and this $1 remain affordable in mid grades; the $5 and $20 replacements are the hard ones.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este número de serie. La pieza se presenta en estado original, sin encapsular.',
      en: 'A PMG or PCGS census for this serial has not been independently verified. The note is shown in original, unslabbed condition.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://art-hanoi.com/mpc/usa/mpc-series-681',
        es: 'Art-Hanoi — MPC serie 681 (P-M75 a P-M82)',
        en: 'Art-Hanoi — MPC Series 681 (P-M75 to P-M82)',
        note: {
          es: 'El 1 dólar es P-M79 / Schwan 915: piloto de la Fuerza Aérea al anverso y cuatro F-100 Super Sabre al reverso.',
          en: 'The $1 is P-M79 / Schwan 915: Air Force pilot on the face and four F-100 Super Sabres on the back.',
        },
      },
      {
        href: 'https://www.worldbanknotescoins.com/2014/11/us-military-payment-certificate-one-dollar-mpc-series-681.html',
        es: 'World Banknotes & Coins — 1 dólar MPC serie 681',
        en: 'World Banknotes & Coins — Series 681 $1 MPC',
        note: {
          es: 'Cita 22.400.000 ejemplares y 214 millones de valor facial para la serie; piloto al anverso y Super Sabre al reverso.',
          en: 'Cites 22,400,000 notes and $214 million face value for the series; pilot on the face and Super Sabres on the back.',
        },
      },
      {
        href: 'http://banknote.ws/COLLECTION/countries/AME/USA/USA-MIL/USAM0079.htm',
        es: 'Bank Note Museum — P-M79, 1 dólar serie 681',
        en: 'Bank Note Museum — P-M79, Series 681 $1',
        note: {
          es: 'Confirma M79: piloto al anverso y F-100 Super Sabre en formación al reverso.',
          en: 'Confirms M79: Air Force pilot on the face and F-100 Super Sabres in formation on the back.',
        },
      },
    ],
  },
  {
    id: '20-dolares-serie-692',
    chapterId: 'serie-692',
    path: '/coleccion/estados-unidos/mpc-vietnam/20-dolares-serie-692/',
    pathEn: '/collection/united-states/mpc-vietnam/20-dollars-series-692/',
    pick: 'P#M98 · Schwan 938',
    serial: 'E05725119E',
    signatures: {
      es: 'Sin firmas (emisión militar; el texto de uso sustituye al firmante)',
      en: 'No signatures (military issue; the use legend stands in place of a signer)',
    },
    printed: {
      es: 'Se citan 6.400.000 ejemplares del 20 dólares de la serie 692',
      en: '6,400,000 notes are cited for the Series 692 $20',
    },
    images: {
      composite: '/images/catalog/estados-unidos/mpc-692-20-composite.jpg',
      front: '/images/catalog/estados-unidos/mpc-692-20-front.jpg',
      back: '/images/catalog/estados-unidos/mpc-692-20-back.jpg',
      width: 1536,
      height: 512,
    },
    title: {
      es: '20 dólares · Serie 692',
      en: '$20 · Series 692',
    },
    kicker: {
      es: 'Estados Unidos · MPC · Vietnam',
      en: 'United States · MPC · Vietnam',
    },
    lead: {
      es: 'Anverso púrpura y naranja con el retrato del jefe Ouray; reverso con un águila de alas abiertas. Posición 16. Serie E05725119E.',
      en: 'Purple and orange face with the portrait of Chief Ouray; back with a spread-winged eagle. Position 16. Serial E05725119E.',
    },
    description: {
      es: 'El 20 dólares de la serie 692 (Pick M98, Schwan 938) es la denominación alta de la última serie del programa, emitida el 7 de octubre de 1970 y retirada el 15 de marzo de 1973. El anverso, en púrpura sobre guilloché naranja, lleva al centro el retrato del jefe uta Ouray —grabado de F. H. Noyes, hacia 1880— y, a la izquierda, un 20 hueco en naranja tras el texto de uso. «SERIES 692» aparece a la derecha; el 16 es el número de posición en el pliego. El reverso, en violeta, muestra un águila con las alas abiertas, 20 y TWENTY a ambos lados. El serial E05725119E cae en la segunda impresión (E04800001E–E06400000E). Esta pieza de la colección, sin encapsular, no es un reemplazo: el bloque E abre y cierra el número.',
      en: 'The Series 692 $20 (Pick M98, Schwan 938) is the high denomination of the last series of the program, issued 7 October 1970 and withdrawn 15 March 1973. The purple face on orange guilloché carries a central portrait of Ute chief Ouray — an F. H. Noyes engraving, circa 1880 — and, at left, a hollow orange 20 behind the use legend. “SERIES 692” sits at the right; 16 is the sheet position number. The violet back shows a spread-winged eagle, with 20 and TWENTY at both sides. Serial E05725119E falls in the second printing (E04800001E–E06400000E). This collection piece, unslabbed, is not a replacement: the E block opens and closes the number.',
    },
    frontCaption: {
      es: 'Anverso del 20 dólares, serie 692, serial E05725119E: retrato del jefe Ouray y 20 en naranja.',
      en: 'Face of the Series 692 $20, serial E05725119E: portrait of Chief Ouray and orange 20.',
    },
    backCaption: {
      es: 'Reverso del 20 dólares, serie 692: águila de alas abiertas y 20 DOLLARS.',
      en: 'Back of the Series 692 $20: spread-winged eagle and 20 DOLLARS.',
    },
    scarcity: {
      es: 'La 692 fue la última serie y, para la ANA, una de las de tema más estadounidense: indígenas, bisontes, águilas. Se citan 6.400.000 ejemplares de este 20 dólares; el valor facial total de la serie superó los 214 millones. Los 10 y 20 dólares son los más buscados de la emisión; el reemplazo del 10 dólares es la clave si se dejan a un lado las variedades de impresión.',
      en: 'Series 692 was the last issue and, for the ANA, among the most American in theme: Native portraits, bison, eagles. 6,400,000 notes are cited for this $20; the series’ total face value exceeded $214 million. The $10 and $20 are the most sought of the issue; the $10 replacement is the key if printing-run varieties are set aside.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este número de serie. La pieza se presenta en estado original, sin encapsular.',
      en: 'A PMG or PCGS census for this serial has not been independently verified. The note is shown in original, unslabbed condition.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://www.worldbanknotescoins.com/2014/11/us-military-payment-certificate-20-dollars-mpc-series-692.html',
        es: 'World Banknotes & Coins — 20 dólares MPC serie 692',
        en: 'World Banknotes & Coins — Series 692 $20 MPC',
        note: {
          es: 'Cita 6.400.000 ejemplares; Ouray al anverso; emisión del 7 de octubre de 1970 al 15 de marzo de 1973.',
          en: 'Cites 6,400,000 notes; Ouray on the face; issued 7 October 1970 to 15 March 1973.',
        },
      },
      {
        href: 'https://www.papermoneyforum.com/post/original-bep-engravings-used-on-mpc-9449738',
        es: 'Paper Money Forum — grabados del BEP en los MPC',
        en: 'Paper Money Forum — BEP engravings used on MPCs',
        note: {
          es: 'Identifica el retrato del 20 dólares de 692 como el jefe Ouray, grabado de F. H. Noyes hacia 1880 (tarjeta FM-13).',
          en: 'Identifies the Series 692 $20 portrait as Chief Ouray, engraved by F. H. Noyes circa 1880 (card FM-13).',
        },
      },
      {
        href: 'https://art-hanoi.com/mpc/usa/mpc-series-692',
        es: 'Art-Hanoi — MPC serie 692 (P-M83 a P-M89; Schwan 931–937)',
        en: 'Art-Hanoi — MPC Series 692 (P-M83 to P-M89; Schwan 931–937)',
        note: {
          es: 'Lista los valores de 5 centavos a 10 dólares. El 20 dólares es Schwan 938 (PMG S938); el Bank Note Museum lo numera M98.',
          en: 'Lists the 5-cent through $10 values. The $20 is Schwan 938 (PMG S938); the Bank Note Museum numbers it M98.',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    seriesLink: 'MPC - Guerra de Vietnam (1955-1975)',
    collectionLink: 'Estados Unidos',
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
    seriesLink: 'MPC - Vietnam War (1955-1975)',
    collectionLink: 'United States',
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

export function noteById(id: string): MpcVietnamNote | undefined {
  return mpcVietnamNotes.find((note) => note.id === id);
}

export function notePath(note: MpcVietnamNote, locale: 'es' | 'en'): string {
  return localizePath(note.path, locale);
}

export function notesForChapter(chapterId: MpcVietnamChapterId): MpcVietnamNote[] {
  return mpcVietnamNotes.filter((note) => note.chapterId === chapterId);
}

export const mpcVietnamNoteSlugs = mpcVietnamNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export const mpcVietnamNoteDedicatedSlugs = mpcVietnamNotes.flatMap((note) => [
  note.path.replace(/^\/|\/$/g, ''),
  note.pathEn.replace(/^\/|\/$/g, ''),
]);

export { USA_MPC_PATH, USA_MPC_PATH_EN, USA_PATH };
