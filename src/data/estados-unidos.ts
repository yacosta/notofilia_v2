import type { CatalogSource, LocalizedText } from './catalog';
import { localizePath } from '../lib/locale-paths';

export const USA_PATH = '/coleccion/estados-unidos/';
export const USA_PATH_EN = '/collection/united-states/';
export const USA_MPC_PATH = '/coleccion/estados-unidos/mpc-vietnam/';
export const USA_MPC_PATH_EN = '/collection/united-states/mpc-vietnam/';

export type UnitedStatesChapterId =
  | 'us-colonial'
  | 'us-obsoleto'
  | 'us-confederado'
  | 'us-notes'
  | 'us-gold'
  | 'us-silver'
  | 'us-frb'
  | 'us-pop-art';

export type UnitedStatesChapter = {
  id: UnitedStatesChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
};

export const unitedStatesChapters: UnitedStatesChapter[] = [
  {
    id: 'us-colonial',
    years: { es: '1690–1788', en: '1690–1788' },
    title: {
      es: 'Moneda colonial',
      en: 'Colonial coinage',
    },
    lead: {
      es: 'Los primeros papeles públicos de Occidente: billetes de crédito de Massachusetts y la moneda del Congreso Continental.',
      en: 'The first public paper of the Western world: Massachusetts bills of credit and Continental Currency.',
    },
    body: {
      es: 'El 10 de diciembre de 1690, la General Court de la bahía de Massachusetts autorizó 7.000 libras en bills of credit para pagar una expedición contra el Canadá. El Newman Numismatic Portal y el U.S. Currency Education Program coinciden: fue el primer papel moneda público del mundo occidental. Las demás colonias copiaron el expediente. En 1775 el Congreso Continental emitió Continentals para financiar la independencia; la inflación y la falsificación británica los dejaron «not worth a Continental». En esta vitrina caben emisiones provinciales como la de Pensilvania de 1773 y los seis chelines de Nueva Jersey de 1776.',
      en: 'On 10 December 1690 the Massachusetts Bay General Court authorized £7,000 in bills of credit to pay for an expedition against Canada. The Newman Numismatic Portal and the U.S. Currency Education Program agree: it was the first public paper money in the Western world. The other colonies copied the expedient. In 1775 the Continental Congress issued Continentals to finance independence; inflation and British counterfeiting left them “not worth a Continental.” Provincial issues such as Pennsylvania 1773 and the New Jersey six-shillings of 1776 belong in this case.',
    },
  },
  {
    id: 'us-obsoleto',
    years: { es: '1782–1866', en: '1782–1866' },
    title: {
      es: 'Billete obsoleto',
      en: 'Obsolete notes',
    },
    lead: {
      es: 'Bancos estatales, broken banknotes y el impuesto que apagó la emisión privada.',
      en: 'State banks, broken banknotes, and the tax that ended private issue.',
    },
    body: {
      es: 'Tras la Constitución, el papel cotidiano lo emitieron bancos con carta estatal —el First Bank of the United States (1791) fue solo el primero de muchos—. Miles de planchas, a menudo grabadas en Nueva York o Filadelfia, circularon con convertibilidad desigual: los coleccionistas las llaman obsolete notes o broken banknotes y las cataloga Haxby. La American Numismatic Society recuerda que, durante la Guerra Civil, un impuesto del 10 % sobre el papel privado y la National Banking Act de 1863 unificaron la moneda nacional. En esta colección caben bancos como el Citizens Bank of Louisiana, el State Bank of New Brunswick, el City Bank of New Haven y el Hagerstown Bank de Maryland.',
      en: 'After the Constitution, everyday paper came from state-chartered banks — the First Bank of the United States (1791) was only the first of many. Thousands of plates, often engraved in New York or Philadelphia, circulated with uneven convertibility: collectors call them obsolete or broken banknotes, catalogued by Haxby. The American Numismatic Society notes that a 10 percent tax on private paper and the National Banking Act of 1863 unified the national currency during the Civil War. Banks such as the Citizens Bank of Louisiana, the State Bank of New Brunswick, the City Bank of New Haven, and the Hagerstown Bank of Maryland belong here.',
    },
  },
  {
    id: 'us-confederado',
    years: { es: '1861–1864', en: '1861–1864' },
    title: {
      es: 'Estados Confederados',
      en: 'Confederate States',
    },
    lead: {
      es: 'Graybacks del Tesoro de Richmond: siete series, sin respaldo metálico, hasta la ley del 17 de febrero de 1864.',
      en: 'Treasury graybacks from Richmond: seven series, unbacked by specie, through the act of 17 February 1864.',
    },
    body: {
      es: 'El dólar de los Estados Confederados —grayback, para distinguirlo del greenback federal— se emitió desde abril de 1861 como letra de crédito: una promesa de pago tras un tratado de paz, no un canje en oro. Wikipedia resume siete series autorizadas por el Congreso confederado, por un total de 1.700 millones de dólares, y 72 tipos Criswell. Keatinge & Ball, primero en Richmond y luego en Columbia, Carolina del Sur, grabó la mayor parte de la última emisión. La ley del 17 de febrero de 1864, la séptima, autorizó 200 millones en papel pagadero dos años después de la paz e intentó retirar emisiones anteriores. Al terminar la guerra el papel perdió todo valor de curso. En esta vitrina abre el 20 dólares T-67 de esa fecha, serial 74523.',
      en: 'The Confederate States dollar — a grayback, to distinguish it from the federal greenback — was issued from April 1861 as a bill of credit: a promise to pay after a treaty of peace, not a redemption in gold. Wikipedia summarizes seven series authorized by the Confederate Congress, totaling $1.7 billion, and 72 Criswell types. Keatinge & Ball, first in Richmond and later in Columbia, South Carolina, engraved most of the last issue. The act of 17 February 1864, the seventh series, authorized $200 million in paper payable two years after peace and tried to retire earlier issues. When the war ended the paper lost all value as currency. This case opens with the T-67 $20 of that date, serial 74523.',
    },
  },
  {
    id: 'us-notes',
    years: { es: '1862–1971', en: '1862–1971' },
    title: {
      es: 'United States Notes',
      en: 'United States Notes',
    },
    lead: {
      es: 'Legal Tender Notes o greenbacks: el primer papel federal de circulación amplia, con sello rojo.',
      en: 'Legal Tender Notes, or greenbacks: the first widely circulated federal paper, with a red seal.',
    },
    body: {
      es: 'La ley del 25 de febrero de 1862 autorizó los United States Notes —también Legal Tender Notes o greenbacks— como moneda de curso legal para deudas públicas y privadas. El Bureau of Engraving and Printing los identifica como el primer papel federal de circulación amplia; al principio los grabaron compañías privadas y el Tesoro solo selló y cortó. El BEP empezó a grabar anversos y sellos de la serie 1869. El sello y los seriales rojos distinguen el tipo. La última entrega del BEP al Tesoro fue en 1971; desde el 21 de enero de 1971 no se ponen en circulación. Los ejemplares pendientes siguen siendo redimibles a la par. Esta vitrina reunirá el 1 dólar de sello rojo de 1928 y el 100 dólares de 1966.',
      en: 'The act of 25 February 1862 authorized United States Notes — also Legal Tender Notes or greenbacks — as legal tender for public and private debts. The Bureau of Engraving and Printing calls them the first widely circulated federal paper; at first private banknote companies engraved them and the Treasury only sealed and cut. The BEP began engraving faces and seals with Series 1869. A red seal and red serials mark the type. The last BEP delivery to the Treasury was in 1971; none have been placed in circulation since 21 January 1971. Outstanding notes remain redeemable at face value. This case will gather the 1928 red-seal $1 and the 1966 $100.',
    },
  },
  {
    id: 'us-gold',
    years: { es: '1865–1934', en: '1865–1934' },
    title: {
      es: 'Gold Certificates',
      en: 'Gold Certificates',
    },
    lead: {
      es: 'Papel respaldado por oro del Tesoro, desde las primeras emisiones del BEP hasta el retiro de 1933–1934.',
      en: 'Paper backed by Treasury gold, from the BEP’s first issues to the 1933–1934 withdrawal.',
    },
    body: {
      es: 'El BEP sitúa en 1865 los primeros Gold Certificates, junto con la Fractional Currency, como una de las primeras emisiones producidas enteramente por la oficina. Representaban oro depositado en el Tesoro. El público dejó de canjearlos en 1933, al abandonarse el patrón oro; la serie 1928 fue la última de tamaño pequeño en circulación general. El certificado de 100.000 dólares de la serie 1934 —el de mayor denominación que imprimió el BEP, entre el 18 de diciembre de 1934 y el 9 de enero de 1935— circularon solo entre bancos de la Reserva Federal, nunca entre el público. En esta colección se documentará el certificado de oro de 10 dólares de 1928.',
      en: 'The BEP dates the first Gold Certificates to 1865, with Fractional Currency, as one of the first issues produced entirely by the bureau. They represented gold held by the Treasury. The public lost the right to redeem them in 1933, when the United States left the gold standard; Series 1928 was the last small-size type in general circulation. The Series 1934 $100,000 certificate — the highest denomination the BEP ever printed, from 18 December 1934 through 9 January 1935 — moved only between Federal Reserve Banks, never among the public. This collection will document the 1928 $10 Gold Certificate.',
    },
  },
  {
    id: 'us-silver',
    years: { es: '1878–1964', en: '1878–1964' },
    title: {
      es: 'Silver Certificates',
      en: 'Silver Certificates',
    },
    lead: {
      es: 'Certificados pagaderos en plata del Tesoro, el sello amarillo de África del Norte y las sobrecargas HAWAII.',
      en: 'Certificates payable in Treasury silver, the North Africa yellow seal, and HAWAII overprints.',
    },
    body: {
      es: 'En 1878 el Tesoro emitió Silver Certificates, autorizados por la legislación que aumentó la compra y acuñación de plata. El BEP y uscurrency.gov coinciden en esa fecha. En 1935, el anverso y el reverso del Gran Sello de Estados Unidos aparecieron juntos por primera vez en el 1 dólar de esta clase. Durante la Segunda Guerra Mundial, el BEP imprimió certificados de plata y billetes de la Reserva Federal con sobrecarga HAWAII, sello y seriales marrones, para poder declararlos sin valor si el archipiélago caía. El 1 dólar 1935-A de sello amarillo —la emisión de África del Norte— sirvió al mismo fin con las tropas aliadas. El canje en plata terminó en 1968. Esta vitrina abrirá con ese 1 dólar de África del Norte.',
      en: 'In 1878 the Treasury issued Silver Certificates, authorized by legislation that increased the purchase and coinage of silver. The BEP and uscurrency.gov agree on that date. In 1935 both faces of the Great Seal of the United States appeared together for the first time on the $1 of this class. During the Second World War the BEP printed silver certificates and Federal Reserve notes with a HAWAII overprint, brown seals, and brown serials, so they could be declared worthless if the islands fell. The 1935-A $1 with a yellow seal — the North Africa issue — served the same purpose with Allied troops. Redemption in silver ended in 1968. This case will open with that North Africa $1.',
    },
  },
  {
    id: 'us-frb',
    years: { es: 'desde 1914', en: 'from 1914' },
    title: {
      es: 'Federal Reserve Bank',
      en: 'Federal Reserve Bank',
    },
    lead: {
      es: 'La Ley de 1913, los Federal Reserve Notes y los Federal Reserve Bank Notes de emergencia.',
      en: 'The 1913 Act, Federal Reserve Notes, and emergency Federal Reserve Bank Notes.',
    },
    body: {
      es: 'La Federal Reserve Act de 1913 creó el banco central y autorizó dos papeles: los Federal Reserve Notes, emitidos por la Junta, y los Federal Reserve Bank Notes, moneda de emergencia de cada banco distrito en el primer tercio del siglo XX. El BEP los distingue con claridad. Desde 1914 los FRN son el papel de circulación; hoy son el único tipo que se emite. En 1934 el BEP añadió la sobrecarga HAWAII a FRN y certificados de plata. Ya tiene ficha el 10 dólares de 1934 del distrito de Chicago (G / 7), serial G30986728A. Seguirán el 100 dólares FRBN de Minneapolis de 1929, más 10 dólares de 1934 de otros distritos, el 20 dólares de Hawái de 1934 y el 100 dólares de Cleveland de 1990. Los certificados de pago militar (MPC) de Vietnam se documentan en su propia vitrina. Los cupones USDA se documentarán junto a estas series federales.',
      en: 'The Federal Reserve Act of 1913 created the central bank and authorized two papers: Federal Reserve Notes, issued by the Board, and Federal Reserve Bank Notes, emergency currency of each district bank in the early twentieth century. The BEP draws that distinction clearly. From 1914 FRNs have been the circulating paper; today they are the only type still issued. In 1934 the BEP added the HAWAII overprint to FRNs and silver certificates. The Series 1934 Chicago (G / 7) $10, serial G30986728A, already has a note page. Still to come are the 1929 Minneapolis $100 FRBN, further 1934 $10 notes from other districts, the 1934 Hawaii $20, and the 1990 Cleveland $100. Vietnam Military Payment Certificates are documented in their own case. USDA food coupons will be documented alongside these federal series.',
    },
  },
  {
    id: 'us-pop-art',
    years: { es: 'desde 2020', en: 'from 2020' },
    title: {
      es: 'Pop art',
      en: 'Pop art',
    },
    lead: {
      es: 'Intervenciones contemporáneas sobre billetes auténticos de 2 dólares, no rediseños oficiales del BEP.',
      en: 'Contemporary interventions on genuine $2 notes, not official BEP redesigns.',
    },
    body: {
      es: 'El 2 dólares de la Reserva Federal volvió a emitirse en 1976, en el 233.º aniversario de Jefferson, después de que el United States Note de 2 dólares se detuviera en 1966. Sobre ese soporte legal, artistas contemporáneos —en esta colección, sobre todo Rency Art— imprimen serigrafías y estampados que convierten el billete en objeto de pop art. No son emisiones del Tesoro ni del BEP: son piezas de arte sobre papel de curso legal. La vitrina reunirá series como Life Is Beautiful, Lionel Messi, Warhol–Basquiat, el mugshot de Trump y The King Pelé. Junto a ellas caben otras emisiones no circulantes de la colección: notas de prueba Giori y scrip conmemorativo.',
      en: 'The Federal Reserve $2 returned in 1976, on the 233rd anniversary of Jefferson’s birth, after the $2 United States Note had been halted in 1966. On that legal substrate, contemporary artists — in this collection, chiefly Rency Art — screen and stamp designs that turn the note into pop art. These are not Treasury or BEP issues: they are art objects on legal-tender paper. The case will gather series such as Life Is Beautiful, Lionel Messi, Warhol–Basquiat, the Trump mugshot, and The King Pelé. Other non-circulating pieces in the collection — Giori test notes and commemorative scrip — belong beside them.',
    },
  },
];

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.uscurrency.gov/history',
    es: 'U.S. Currency Education Program — History of U.S. Currency',
    en: 'U.S. Currency Education Program — History of U.S. Currency',
    note: {
      es: 'Massachusetts 1690, Continentals, National Banknotes, certificados de plata y sobrecarga HAWAII.',
      en: 'Massachusetts 1690, Continentals, National Banknotes, silver certificates, and the HAWAII overprint.',
    },
  },
  {
    href: 'https://www.bep.gov/currency/history',
    es: 'Bureau of Engraving and Printing — History',
    en: 'Bureau of Engraving and Printing — History',
    note: {
      es: 'Gold Certificates (1865), United States Notes (1869), Silver Certificates (1878) y Federal Reserve Act (1913).',
      en: 'Gold Certificates (1865), United States Notes (1869), Silver Certificates (1878), and the Federal Reserve Act (1913).',
    },
  },
  {
    href: 'https://www.bep.gov/currency/faqs',
    es: 'Bureau of Engraving and Printing — FAQs',
    en: 'Bureau of Engraving and Printing — FAQs',
    note: {
      es: 'United States Notes: primer papel nacional (1862); última puesta en circulación el 21 de enero de 1971. Certificado de oro de 100.000 dólares, serie 1934.',
      en: 'United States Notes: first national paper (1862); last placed in circulation 21 January 1971. Series 1934 $100,000 Gold Certificate.',
    },
  },
  {
    href: 'https://numismatics.org/a-history-of-american-currency/',
    es: 'American Numismatic Society — A History of American Currency',
    en: 'American Numismatic Society — A History of American Currency',
    note: {
      es: 'Massachusetts 1690 como primer papel público occidental; impuesto del 10 % y National Banking Act de 1863.',
      en: 'Massachusetts 1690 as the first Western public paper; the 10 percent tax and the National Banking Act of 1863.',
    },
  },
  {
    href: 'https://nnp.wustl.edu/library/imagecollection/514438',
    es: 'Newman Numismatic Portal — Massachusetts, 10 de diciembre de 1690',
    en: 'Newman Numismatic Portal — Massachusetts, 10 December 1690',
    note: {
      es: '7.000 libras en Colony or Old Charter Bills; primer papel público autorizado en Occidente.',
      en: '£7,000 in Colony or Old Charter Bills; first authorized public paper currency in the Western world.',
    },
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/AME/USA/USA.htm',
    es: 'Bank Note Museum — Estados Unidos',
    en: 'Bank Note Museum — United States',
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/AME/CSA/CSA.htm',
    es: 'Bank Note Museum — Estados Confederados de América',
    en: 'Bank Note Museum — Confederate States of America',
    note: {
      es: 'Emisión de febrero de 1864: Pick 64–73, incluido el 20 dólares P-69.',
      en: 'February 1864 issue: Pick 64–73, including the $20 P-69.',
    },
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Estados Unidos · Federal, colonial, confederado y obsoleto | Notofilia',
    metaDescription:
      'Catálogo de papel moneda de Estados Unidos: moneda colonial, billetes obsoletos, Estados Confederados, United States Notes, certificados de oro y plata, Reserva Federal y pop art.',
    kicker: 'Estados Unidos · Notafilia',
    title: 'Del papel colonial a la Reserva Federal',
    heroAlt:
      'Mapa vintage en relieve 3D de Estados Unidos sobre pergamino, con las Rocosas, el Golden Gate, la Estatua de la Libertad, el Capitolio, un pasaporte y el título Estados Unidos',
    intro: [
      'El papel moneda público nació en América, no en Europa. El 10 de diciembre de 1690, Massachusetts autorizó bills of credit para pagar una guerra; el U.S. Currency Education Program y el Newman Numismatic Portal lo registran como el primer papel público de Occidente. Las trece colonias siguieron el modelo. El Congreso Continental emitió Continentals en 1775: sin respaldo metálico y falsificados por el enemigo, acuñaron la frase «not worth a Continental».',
      'En el siglo XIX el comercio cotidiano corrió sobre obsolete notes de bancos estatales —broken banknotes en la jerga, catalogados por Haxby—. La American Numismatic Society sitúa el fin de esa pluralidad en la Guerra Civil: un impuesto del 10 % sobre el papel privado y la National Banking Act de 1863. Al mismo tiempo nació el papel federal —United States Notes (1862), Gold Certificates (1865) y Silver Certificates (1878)— y, en el Sur, el grayback de los Estados Confederados, sin respaldo metálico, hasta la ley del 17 de febrero de 1864.',
      'La Federal Reserve Act de 1913 creó el banco central y dos tipos de papel: Federal Reserve Notes y, como moneda de emergencia, Federal Reserve Bank Notes. El BEP dejó de entregar United States Notes en 1971; hoy solo se emiten FRN. La Segunda Guerra Mundial marcó certificados de plata y FRN con sobrecarga HAWAII y el 1 dólar 1935-A de sello amarillo para África del Norte.',
      'Esta vitrina no es un catálogo completo de la notafilia estadounidense: es el inventario de los ejemplares que se documentarán aquí, con referencias Friedberg, Haxby, Schwan, Criswell o Pick cuando existan. Ya tienen ficha el 1 dólar remainder del State Bank at New Brunswick (Haxby NJ-350 G16a), el 20 dólares confederado T-67 de 1864, serial 74523, y el 10 dólares Federal Reserve Note de 1934 del distrito de Chicago, serial G30986728A. Las demás se publicarán como en Filipinas, a medida que se fotografíen. Caben también certificados de pago militar (MPC), cupones USDA y notas de prueba.',
    ],
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    sourcesTitle: 'Fuentes',
  },
  en: {
    metaTitle: 'United States · Federal, colonial, Confederate, and obsolete | Notofilia',
    metaDescription:
      'Catalog of United States paper money: colonial issues, obsolete notes, Confederate States, United States Notes, gold and silver certificates, the Federal Reserve, and pop art.',
    kicker: 'United States · Notaphily',
    title: 'From colonial paper to the Federal Reserve',
    heroAlt:
      'Vintage 3D relief map of the United States on parchment, with the Rockies, the Golden Gate, the Statue of Liberty, the Capitol, a passport, and the title United States',
    intro: [
      'Public paper money was born in America, not in Europe. On 10 December 1690 Massachusetts authorized bills of credit to pay for a war; the U.S. Currency Education Program and the Newman Numismatic Portal record it as the first public paper in the Western world. The thirteen colonies followed. The Continental Congress issued Continentals in 1775: unbacked and counterfeited by the enemy, they coined the phrase “not worth a Continental.”',
      'In the nineteenth century everyday trade ran on obsolete notes of state banks — broken banknotes in the jargon, catalogued by Haxby. The American Numismatic Society places the end of that plurality in the Civil War: a 10 percent tax on private paper and the National Banking Act of 1863. Federal paper was born at the same time — United States Notes (1862), Gold Certificates (1865), and Silver Certificates (1878) — and, in the South, the unbacked Confederate grayback, through the act of 17 February 1864.',
      'The Federal Reserve Act of 1913 created the central bank and two kinds of paper: Federal Reserve Notes and, as emergency currency, Federal Reserve Bank Notes. The BEP stopped delivering United States Notes in 1971; today only FRNs are issued. The Second World War marked silver certificates and FRNs with the HAWAII overprint and the 1935-A yellow-seal $1 for North Africa.',
      'This case is not a complete catalog of United States notaphily: it is the inventory of the pieces that will be documented here, with Friedberg, Haxby, Schwan, Criswell, or Pick references when they exist. The State Bank at New Brunswick $1 remainder (Haxby NJ-350 G16a), the 1864 Confederate T-67 $20, serial 74523, and the Series 1934 Chicago Federal Reserve Note $10, serial G30986728A, already have note pages. Further pieces will be published as they are photographed, as in the Philippines case. Military Payment Certificates, USDA food coupons, and test notes belong here as well.',
    ],
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    sourcesTitle: 'Sources',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return localizePath(USA_PATH, locale);
}

export type UnitedStatesNoteId =
  | '1-dolar-state-bank-new-brunswick'
  | '20-dolares-confederados-1864'
  | '10-dolares-serie-1934-chicago';

export type UnitedStatesNote = {
  id: UnitedStatesNoteId;
  chapterId: UnitedStatesChapterId;
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
    width?: number;
    height?: number;
  };
  hero?: {
    src: LocalizedText;
    width: number;
    height: number;
  };
  heroAlt?: LocalizedText;
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  history?: LocalizedText;
  historyHeading?: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  population: LocalizedText;
  grade: LocalizedText;
  sources: CatalogSource[];
};

export const unitedStatesNotes: UnitedStatesNote[] = [
  {
    id: '1-dolar-state-bank-new-brunswick',
    chapterId: 'us-obsoleto',
    path: '/coleccion/estados-unidos/1-dolar-state-bank-new-brunswick/',
    pathEn: '/collection/united-states/1-dollar-state-bank-new-brunswick/',
    pick: 'Haxby NJ-350 G16a · N#334975',
    serial: '9890 · B',
    signatures: {
      es: 'Cajero manuscrito; presidente en blanco (remainder)',
      en: 'Manuscript cashier; president blank (remainder)',
    },
    printed: {
      es: 'National Bank Note Company, Nueva York. Remainder de las planchas de los años 1860 (patente del 23 de abril de 1860). No se publica una tirada de circulación para este tipo.',
      en: 'National Bank Note Company, New York. A remainder from the 1860s plates (patent of 23 April 1860). No circulating printage is published for this type.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/nj-350-1-dollar-new-brunswick-composite.jpg',
      front: '/images/catalog/estados-unidos/nj-350-1-dollar-new-brunswick-front.jpg',
      back: '/images/catalog/estados-unidos/nj-350-1-dollar-new-brunswick-back.jpg',
      width: 1440,
      height: 960,
    },
    hero: {
      src: {
        es: '/images/catalog/estados-unidos/hero-new-brunswick.jpg',
        en: '/images/catalog/estados-unidos/hero-new-brunswick-en.jpg',
      },
      width: 2128,
      height: 912,
    },
    heroAlt: {
      es: 'Mapa vintage en relieve 3D de Nueva Jersey sobre pergamino, con el Banco Estatal de New Brunswick, un billete obsoleto, un pasaporte y el título Nueva Jersey',
      en: 'Vintage 3D relief map of New Jersey on parchment, with the State Bank at New Brunswick, an obsolete banknote, a passport, and the title New Jersey',
    },
    title: {
      es: '1 dólar · State Bank at New Brunswick',
      en: '$1 · State Bank at New Brunswick',
    },
    kicker: {
      es: 'Estados Unidos · Billete obsoleto · Nueva Jersey',
      en: 'United States · Obsolete note · New Jersey',
    },
    lead: {
      es: 'Remainder de 1 dólar del State Bank at New Brunswick: serial rojo 9890, plancha B, fecha 18__ incompleta y reverso verde de la National Bank Note Company.',
      en: 'A $1 remainder of the State Bank at New Brunswick: red serial 9890, plate B, an incomplete 18__ date, and the National Bank Note Company’s green back.',
    },
    description: {
      es: 'El 1 dólar Haxby NJ-350 G16a (Numista N#334975) es un obsolete note del State Bank at New Brunswick, Nueva Jersey. El anverso, en negro sobre tintas verdes, se titula «The State Bank at New Brunswick» y promete pagar un dólar al portador a la vista. Arriba, en cuerpo menudo, se lee el registro ante el interventor del estado. En el centro, un óvalo con una figura femenina y un haz de grano, fábrica al fondo, va orlado de unos; a la izquierda, una locomotora sobre un puente de arcos y una barca; a la derecha, la cosecha —guadaña, gavilla y calabazas—. Los medallones de las esquinas repiten ONE alrededor del 1. El serial 9890 va en rojo a la izquierda, junto a la plancha B. La fecha impresa queda en 18__, sin el año manuscrito. Hay firma en la línea del cajero y la del presidente (PREST.) está en blanco: es un remainder, no un ejemplar puesto en circulación. El pie de imprenta es el de la National Bank Note Company. El reverso, en verde, lleva el escudo de Estados Unidos entre dos medallones con el 1 y la palabra ONE; Numista transcribe también «PATENTED APRIL 23rd 1860». Ese dorso de guilloches es el de la NBNC, de la misma familia técnica que el reverso de 1 dólar de los National Bank Notes del First Charter, no un billete nacional de esta plaza. No debe confundirse con el State Bank of New Jersey at New Brunswick (Haxby NJ-345), que en 1864 se convirtió en el National Bank of New Jersey, charter 587, ni con el Bank of New Brunswick canadiense.',
      en: 'The $1 Haxby NJ-350 G16a (Numista N#334975) is an obsolete note of the State Bank at New Brunswick, New Jersey. The face, black on green tints, is titled “The State Bank at New Brunswick” and promises to pay one dollar to the bearer on demand. A fine line at the top records registration at the state comptroller’s office. At center a female figure with a sheaf of grain, a factory behind her, sits in an oval ringed with 1s; at left a locomotive crosses an arched bridge above a boat; at right a harvest — scythe, sheaf, and squash. Corner medallions repeat ONE around the figure 1. Serial 9890 is stamped in red at left, beside plate letter B. The printed date stops at 18__, with no manuscript year. A signature sits on the cashier’s line and the president’s (PREST.) line is blank: this is a remainder, not a note placed in circulation. The imprint is the National Bank Note Company’s. The green back carries the United States shield between two medallions with 1 and the word ONE; Numista also transcribes “PATENTED APRIL 23rd 1860.” That guilloche back is NBNC’s, of the same technical family as the First Charter $1 National Bank Note reverse, not a national note of this town. It should not be confused with the State Bank of New Jersey at New Brunswick (Haxby NJ-345), which in 1864 became the National Bank of New Jersey, charter 587, or with the Canadian Bank of New Brunswick.',
    },
    history: {
      es: 'El 28 de enero de 1812 la legislatura de Nueva Jersey autorizó seis State Banks —Camden, Trenton, New Brunswick, Elizabeth, Newark y Morris— al vencer la carta del First Bank of the United States. George R. Prowell fecha el acto; el finding aid de la Library Company of Philadelphia y el inventario de Sylla y Wright sitúan el capital autorizado de New Brunswick en 400.000 dólares, a la par de Newark y por debajo de Camden. El emisor de esta ficha es The State Bank at New Brunswick (Haxby NJ-350), no el State Bank of New Jersey at New Brunswick (NJ-345), que en 1864 se nacionalizó como el National Bank of New Jersey, charter 587. En el término de septiembre de 1874, el Court of Oyer and Terminer del condado de Middlesex juzgó a Robert N. Woodworth por conspiración para defraudar al banco; el sumario impreso en New Brunswick nombra a Greenleaf W. Appleton como «late cashier, now a fugitive from justice». El 31 de marzo de 1877 el banco cerró a la una de la tarde; The New York Times lo publicó al día siguiente y anotó que los oficiales se negaron a dar un estado de cuentas. Haxby lo da por cerrado. El impuesto del 10 % sobre el papel estatal (1865–1866) y ese cierre explican por qué sobreviven tantos remainders de estas planchas de la National Bank Note Company.',
      en: 'On 28 January 1812 the New Jersey legislature authorized six State Banks — Camden, Trenton, New Brunswick, Elizabeth, Newark, and Morris — after the First Bank of the United States lost its charter. George R. Prowell dates the act; the Library Company of Philadelphia finding aid and Sylla and Wright’s inventory place New Brunswick’s authorized capital at $400,000, level with Newark and below Camden. The issuer of this record is The State Bank at New Brunswick (Haxby NJ-350), not the State Bank of New Jersey at New Brunswick (NJ-345), which in 1864 became the National Bank of New Jersey, charter 587. In the September 1874 term the Middlesex County Court of Oyer and Terminer tried Robert N. Woodworth for conspiracy to defraud the bank; the New Brunswick pamphlet names Greenleaf W. Appleton as “late cashier, now a fugitive from justice.” On 31 March 1877 the bank closed at one in the afternoon; The New York Times reported it the next day and noted that the officers refused to issue a statement. Haxby lists the bank as closed. The 10 percent tax on state-bank paper (1865–1866) and that closure explain why so many remainders of these National Bank Note Company plates survive.',
    },
    frontCaption: {
      es: 'Anverso del 1 dólar remainder, Haxby NJ-350 G16a, serial 9890, plancha B: locomotora, alegoría agrícola y serial rojo.',
      en: 'Face of the $1 remainder, Haxby NJ-350 G16a, serial 9890, plate B: locomotive, agricultural allegory, and the red serial.',
    },
    backCaption: {
      es: 'Reverso verde de la National Bank Note Company: escudo de Estados Unidos entre medallones con el 1. Patente del 23 de abril de 1860.',
      en: 'National Bank Note Company green back: the United States shield between medallions with the figure 1. Patent of 23 April 1860.',
    },
    scarcity: {
      es: 'Los 1 dólar G16a del mercado son casi todos remainders: fecha 18__, a menudo una sola firma o ninguna, serial rojo y reverso verde. Las piezas plenamente emitidas —fecha completa y las dos firmas de circulación— son mucho más escasas. Numista marca el tipo como remainder sin fecha (1860–1877) y le da un índice de rareza 87 entre sus socios, una medida de presencia en colecciones, no de existencias en subasta. Heritage y los comerciantes de obsolete notes tratan el remainder como tipo común en estados altos; el banco cerró en 1877 y las planchas de la NBNC quedaron sin terminar de firmar.',
      en: 'Almost all G16a $1 notes on the market are remainders: an 18__ date, often one signature or none, a red serial, and the green back. Fully issued pieces — a completed date and both circulating signatures — are far scarcer. Numista flags the type as an undated remainder (1860–1877) and gives it a rarity index of 87 among its members, a measure of presence in collections, not of auction supply. Heritage and obsolete-note dealers treat the remainder as a common type in high grades; the bank closed in 1877 and the NBNC plates were left unsigned.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 9890. La pieza se presenta en funda, sin encapsular, como remainder original.',
      en: 'A PMG or PCGS census for serial 9890 has not been independently verified. The note is shown in a sleeve, unslabbed, as an original remainder.',
    },
    grade: {
      es: 'Remainder, sin encapsular (colección privada)',
      en: 'Remainder, unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://en.numista.com/catalogue/note334975.html',
        es: 'Numista — 1 Dollar, State Bank at New Brunswick (N#334975)',
        en: 'Numista — 1 Dollar, State Bank at New Brunswick (N#334975)',
        note: {
          es: 'Haxby NJ-350; imprenta National Bank Note Company; reverso con escudo y «PATENTED APRIL 23rd 1860»; remainder sin fecha, 1860–1877.',
          en: 'Haxby NJ-350; National Bank Note Company imprint; shield back and “PATENTED APRIL 23rd 1860”; undated remainder, 1860–1877.',
        },
      },
      {
        href: 'https://beastcoins.com/Banknotes/Obsolete/NewJersey/NewJersey.htm',
        es: 'Beast Coins — Obsolete notes de Nueva Jersey, NJ-350',
        en: 'Beast Coins — New Jersey obsolete notes, NJ-350',
        note: {
          es: 'State Bank at New Brunswick, c. 1814–1877; 1 dólar Haxby NJ-350 G16a, National Bank Note Company; destino: cerrado.',
          en: 'State Bank at New Brunswick, c. 1814–1877; $1 Haxby NJ-350 G16a, National Bank Note Company; fate: closed.',
        },
      },
      {
        href: 'https://www.usgenwebsites.org/NJCamden/history_of_camden_county/4_banks_and_banking.html',
        es: 'George R. Prowell — History of Camden County, capítulo de banca (NJGenWeb)',
        en: 'George R. Prowell — History of Camden County, banking chapter (NJGenWeb)',
        note: {
          es: 'Acto del 28 de enero de 1812: State Banks en Camden, Trenton, New Brunswick, Elizabeth, Newark y Morris.',
          en: 'Act of 28 January 1812: State Banks at Camden, Trenton, New Brunswick, Elizabeth, Newark, and Morris.',
        },
      },
      {
        href: 'https://www.librarycompany.org/mcallister/pdf/camden.pdf',
        es: 'Library Company of Philadelphia — McAllister, State Bank at Camden (McA MSS 014)',
        en: 'Library Company of Philadelphia — McAllister, State Bank at Camden (McA MSS 014)',
        note: {
          es: 'El mismo acto de 1812; capital autorizado de New Brunswick y Newark, 400.000 dólares cada uno.',
          en: 'The same 1812 act; authorized capital of New Brunswick and Newark, $400,000 each.',
        },
      },
      {
        href: 'https://www.ineteconomics.org/uploads/papers/WP_224-SyllaWrightwithdata.pdf',
        es: 'Richard Sylla y Robert E. Wright — inventario de corporaciones estadounidenses, 1790–1860 (INET, WP 224)',
        en: 'Richard Sylla and Robert E. Wright — U.S. corporate census, 1790–1860 (INET, WP 224)',
        note: {
          es: 'State Bank at New Brunswick, 1812, Nueva Jersey; capital 400.000 dólares.',
          en: 'State Bank at New Brunswick, 1812, New Jersey; capital $400,000.',
        },
      },
      {
        href: 'https://findit.library.nd.edu/Record/ndlaw-in00002495040',
        es: 'Trial of Robert N. Woodworth (New Brunswick, 1874) — catálogo, University of Notre Dame',
        en: 'Trial of Robert N. Woodworth (New Brunswick, 1874) — University of Notre Dame catalog',
        note: {
          es: 'Middlesex County, término de septiembre de 1874: Woodworth juzgado con Greenleaf W. Appleton, «late cashier, now a fugitive», por conspiración para defraudar al State Bank at New Brunswick.',
          en: 'Middlesex County, September term 1874: Woodworth tried with Greenleaf W. Appleton, “late cashier, now a fugitive,” for conspiracy to defraud the State Bank at New Brunswick.',
        },
      },
      {
        href: 'https://www.nytimes.com/1877/04/01/archives/a-newjersey-bank-suspends-the-state-bank-of-newbrunswick-closes-its.html',
        es: 'The New York Times — A New-Jersey Bank Suspends, 1 de abril de 1877',
        en: 'The New York Times — A New-Jersey Bank Suspends, 1 April 1877',
        note: {
          es: 'Cierre el 31 de marzo de 1877 a la una de la tarde; los oficiales se negaron a dar un estado de cuentas.',
          en: 'Closed on 31 March 1877 at one in the afternoon; the officers refused to issue a statement.',
        },
      },
    ],
  },
  {
    id: '20-dolares-confederados-1864',
    chapterId: 'us-confederado',
    path: '/coleccion/estados-unidos/20-dolares-confederados-1864/',
    pathEn: '/collection/united-states/20-dollars-confederate-1864/',
    pick: 'P#69 · T-67 · N#202478',
    serial: '74523 · A',
    signatures: {
      es: 'Amanuenses manuscritos «for Register» y «for Treasurer»',
      en: 'Manuscript clerks “for Register” and “for Treasurer”',
    },
    printed: {
      es: 'Keatinge & Ball, Columbia, S.C. Wikipedia cifra el tipo T-67 en unos 4.150.000 ejemplares. La ley del 17 de febrero de 1864 autorizó 200 millones de dólares en todas las denominaciones.',
      en: 'Keatinge & Ball, Columbia, S.C. Wikipedia puts T-67 at about 4,150,000 notes. The act of 17 February 1864 authorized $200 million across all denominations.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/csa-1864-20-composite.jpg',
      front: '/images/catalog/estados-unidos/csa-1864-20-front.jpg',
      back: '/images/catalog/estados-unidos/csa-1864-20-back.jpg',
      width: 1440,
      height: 960,
    },
    hero: {
      src: {
        es: '/images/catalog/estados-unidos/hero-richmond.jpg',
        en: '/images/catalog/estados-unidos/hero-richmond.jpg',
      },
      width: 2128,
      height: 912,
    },
    heroAlt: {
      es: 'Ilustración vintage de Richmond sobre pergamino, con el Capitolio, Main Street Station, Church Hill, las Tredegar Iron Works y el título Richmond',
      en: 'Vintage illustration of Richmond on parchment, with the Capitol, Main Street Station, Church Hill, Tredegar Iron Works, and the title Richmond',
    },
    title: {
      es: '20 dólares · Estados Confederados · 1864',
      en: '$20 · Confederate States · 1864',
    },
    kicker: {
      es: 'Estados Unidos · Estados Confederados',
      en: 'United States · Confederate States',
    },
    lead: {
      es: 'Anverso con el Capitolio de Tennessee y Alexander H. Stephens; reverso azul con TWENTY. Richmond, 17 de febrero de 1864. Serial 74523, plancha A.',
      en: 'Face with the Tennessee State Capitol and Alexander H. Stephens; blue back with TWENTY. Richmond, 17 February 1864. Serial 74523, plate A.',
    },
    description: {
      es: 'El 20 dólares del 17 de febrero de 1864 (Pick 69, Criswell y Fricke T-67, Numista N#202478) es el veinte de la última emisión del Tesoro de los Estados Confederados. El anverso, en negro sobre papel crema, lleva al centro el Capitolio de Tennessee en Nashville —columnata y cúpula— y, a la derecha, el retrato oval de Alexander H. Stephens, vicepresidente de la Confederación. Los medallones superiores leen la cláusula de redención: «TWO YEARS AFTER THE RATIFICATION OF A TREATY OF PEACE» y «THE CONFEDERATE STATES AND THE UNITED STATES OF AMERICA». Bajo la viñeta, «THE CONFEDERATE STATES OF AMERICA» promete pagar TWENTY DOLLARS al portador a la vista; la fecha impresa es «Richmond, February 17th 1864». El flanco izquierdo lleva TWENTY en vertical; arriba a la derecha, un 20 en marco festoneado. El serial manuscrito 74523 se repite a ambos lados; la letra de plancha es A. Las firmas son las de los amanuenses «for Register» y «for Treasurer». El pie de imprenta es Keatinge & Ball, Columbia, S.C. El reverso, en azul, muestra TWENTY sobre un campo de guilloches y un 20 en cada esquina. En el margen superior derecho de este ejemplar hay una anotación manuscrita «Joseph». La pieza de la colección, circulada y sin encapsular, se presenta en funda.',
      en: 'The $20 of 17 February 1864 (Pick 69, Criswell and Fricke T-67, Numista N#202478) is the twenty of the Confederate Treasury’s last issue. The black face on cream paper carries the Tennessee State Capitol in Nashville — colonnade and cupola — at center and, at right, an oval portrait of Alexander H. Stephens, vice president of the Confederacy. The upper medallions read the redemption clause: “TWO YEARS AFTER THE RATIFICATION OF A TREATY OF PEACE” and “THE CONFEDERATE STATES AND THE UNITED STATES OF AMERICA.” Beneath the vignette, “THE CONFEDERATE STATES OF AMERICA” promises to pay TWENTY DOLLARS to the bearer on demand; the printed date is “Richmond, February 17th 1864.” TWENTY runs vertically at left; a scalloped 20 sits at upper right. Manuscript serial 74523 is written twice; the plate letter is A. The signatures are those of clerks “for Register” and “for Treasurer.” The imprint is Keatinge & Ball, Columbia, S.C. The blue back shows TWENTY on a guilloche field and a 20 in each corner. The upper-right margin of this piece carries a manuscript annotation “Joseph.” The collection note, circulated and unslabbed, is shown in a sleeve.',
    },
    history: {
      es: 'La ley del 17 de febrero de 1864 —séptima y última serie del dólar confederado— autorizó 200 millones de dólares en papel pagadero dos años después de un tratado de paz e intentó retirar emisiones anteriores. Wikipedia resume las siete series desde 1861 (1.700 millones en total) y 72 tipos Criswell; sitúa el grabado de T-67 en Keatinge & Ball, de Columbia, Carolina del Sur. Edward Keatinge había grabado retratos para la Southern Bank Note Company; la casa se trasladó de Richmond a Columbia en 1862. El grayback no tenía respaldo metálico: era una letra de crédito sobre la independencia del Sur. El Capitolio de Nashville, viñeta central de este veinte, había caído en manos de la Unión en febrero de 1862. Las firmas manuscritas de escribientes —el Tesoro llegó a contratar hasta doscientos por cada cargo— eran la norma en los enteros; solo el medio dólar llevó firmas impresas. Tras 1865 el papel perdió todo valor de curso.',
      en: 'The act of 17 February 1864 — the seventh and last series of the Confederate dollar — authorized $200 million in paper payable two years after a treaty of peace and tried to retire earlier issues. Wikipedia summarizes the seven series from 1861 ($1.7 billion in all) and 72 Criswell types; it places the engraving of T-67 with Keatinge & Ball of Columbia, South Carolina. Edward Keatinge had engraved portraits for the Southern Bank Note Company; the firm moved from Richmond to Columbia in 1862. The grayback had no metallic backing: it was a bill of credit on Southern independence. The Nashville Capitol, the central vignette of this twenty, had fallen to the Union in February 1862. Manuscript signatures by clerks — the Treasury eventually hired as many as two hundred for each office — were the rule on whole-dollar notes; only the 50-cent issue carried printed signatures. After 1865 the paper lost all value as currency.',
    },
    historyHeading: {
      es: 'La emisión',
      en: 'The issue',
    },
    frontCaption: {
      es: 'Anverso del 20 dólares confederado, T-67, 17 de febrero de 1864, serial 74523, plancha A: Capitolio de Tennessee y Stephens.',
      en: 'Face of the Confederate $20, T-67, 17 February 1864, serial 74523, plate A: the Tennessee Capitol and Stephens.',
    },
    backCaption: {
      es: 'Reverso azul del 20 dólares confederado T-67: TWENTY sobre guilloches y 20 en las cuatro esquinas. Anotación manuscrita «Joseph».',
      en: 'Blue back of the Confederate T-67 $20: TWENTY on guilloches and 20 in the four corners. Manuscript annotation “Joseph.”',
    },
    scarcity: {
      es: 'Wikipedia cifra T-67 en unos 4.150.000 ejemplares. Es el veinte más común de la Confederación y, a menudo, el primer grayback de una colección de tipos. El Bank Note Museum lo numera P-69, sin separar las series impresas ni las letras de plancha. El mercado trata el tipo circulado como frecuente; las claves están en los estados altos, los márgenes completos y la ausencia de cortes de cancelación. Esta ficha no inventa una tirada por serie ni por letra.',
      en: 'Wikipedia puts T-67 at about 4,150,000 notes. It is the most common Confederate twenty and often a collector’s first grayback in a type set. The Bank Note Museum numbers it P-69, without splitting printed series or plate letters. The market treats circulated examples as common; the keys are high grades, full margins, and the absence of cut cancels. This record does not invent a printage by series or letter.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 74523. La pieza se presenta en funda, circulada, sin encapsular.',
      en: 'A PMG or PCGS census for serial 74523 has not been independently verified. The note is shown in a sleeve, circulated, unslabbed.',
    },
    grade: {
      es: 'Circulada, sin encapsular (colección privada)',
      en: 'Circulated, unslabbed (private collection)',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/CSA/CSA0069.htm',
        es: 'Bank Note Museum — P-69, 20 dólares, 17 de febrero de 1864',
        en: 'Bank Note Museum — P-69, $20, 17 February 1864',
        note: {
          es: 'Capitolio de Nashville y Alexander H. Stephens; Tesoro de los Estados Confederados.',
          en: 'Nashville Capitol and Alexander H. Stephens; Treasury of the Confederate States.',
        },
      },
      {
        href: 'https://en.numista.com/catalogue/note202478.html',
        es: 'Numista — 20 Dollars, Confederate States (N#202478)',
        en: 'Numista — 20 Dollars, Confederate States (N#202478)',
        note: {
          es: 'P#69; Fricke T.67; serie de 1864; 177 × 76 mm; desmonetizado.',
          en: 'P#69; Fricke T.67; Series of 1864; 177 × 76 mm; demonetized.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Confederate_States_dollar',
        es: 'Wikipedia — Confederate States dollar',
        en: 'Wikipedia — Confederate States dollar',
        note: {
          es: 'Ley del 17 de febrero de 1864: 200 millones; T-67, Keatinge & Ball, unos 4.150.000; firmas de escribientes.',
          en: 'Act of 17 February 1864: $200 million; T-67, Keatinge & Ball, about 4,150,000; clerk signatures.',
        },
      },
      {
        href: 'https://nmaahc.si.edu/object/nmaahc_2017.108.9.16',
        es: 'Smithsonian NMAAHC — Confederate States of America twenty dollar bill',
        en: 'Smithsonian NMAAHC — Confederate States of America twenty dollar bill',
        note: {
          es: 'Descripción del anverso: Capitolio de Tennessee, cláusula de paz a dos años, Keatinge & Ball; reverso azul.',
          en: 'Face description: Tennessee Capitol, two-year peace clause, Keatinge & Ball; blue back.',
        },
      },
    ],
  },
  {
    id: '10-dolares-serie-1934-chicago',
    chapterId: 'us-frb',
    path: '/coleccion/estados-unidos/10-dolares-serie-1934-chicago/',
    pathEn: '/collection/united-states/10-dollars-series-1934-chicago/',
    pick: 'P#430 · Fr. 2004-G',
    serial: 'G30986728A',
    signatures: {
      es: 'W. A. Julian (tesorero) y Henry Morgenthau Jr. (secretario del Tesoro)',
      en: 'W. A. Julian (Treasurer) and Henry Morgenthau Jr. (Secretary of the Treasury)',
    },
    printed: {
      es: 'Tipo común del distrito de Chicago; se citan cerca de 70 millones de Fr. 2004-G en todas las variedades de sello',
      en: 'A common Chicago-district type; about 70 million Fr. 2004-G notes are cited across all seal varieties',
    },
    images: {
      composite: '/images/catalog/estados-unidos/frn-1934-10-chicago-composite.jpg',
      front: '/images/catalog/estados-unidos/frn-1934-10-chicago-front.jpg',
      back: '/images/catalog/estados-unidos/frn-1934-10-chicago-back.jpg',
    },
    title: {
      es: '10 dólares · Serie 1934 · Chicago',
      en: '$10 · Series 1934 · Chicago',
    },
    kicker: {
      es: 'Estados Unidos · Federal Reserve Note',
      en: 'United States · Federal Reserve Note',
    },
    lead: {
      es: 'Anverso con Hamilton y sello verde claro del Tesoro; reverso con el edificio del Tesoro. Distrito G / 7. Serie G30986728A.',
      en: 'Face with Hamilton and a light-green Treasury seal; back with the Treasury building. District G / 7. Serial G30986728A.',
    },
    description: {
      es: 'El 10 dólares de la serie 1934 (Pick 430, Friedberg 2004-G) es un Federal Reserve Note de tamaño pequeño del distrito de Chicago: sello circular con la G, el 7 en las cuatro esquinas interiores, y el banco «FEDERAL RESERVE BANK OF CHICAGO ILLINOIS». El anverso, en negro con sello y seriales verdes, lleva el retrato de Alexander Hamilton en óvalo y, a la derecha, el sello del Tesoro sobre la palabra TEN. Las firmas son las de W. A. Julian y Henry Morgenthau Jr. El texto de curso legal aún promete el canje «in lawful money» en el Tesoro o en cualquier banco de la Reserva. El reverso, en verde, muestra el edificio del Tesoro en Washington, D.C., con un automóvil de entreguerras frente a la fachada; el número de plancha 430 queda abajo a la derecha. Esta pieza de la colección, circulada y sin encapsular, lleva el serial G30986728A (bloque GA). No lleva la sobrecarga HAWAII ni el lema «IN GOD WE TRUST», añadido en series posteriores.',
      en: 'The Series 1934 $10 (Pick 430, Friedberg 2004-G) is a small-size Federal Reserve Note of the Chicago district: a circular seal with G, 7s in the four inner corners, and the bank legend “FEDERAL RESERVE BANK OF CHICAGO ILLINOIS.” The black face with green seal and serials carries Alexander Hamilton in an oval and, at right, the Treasury seal over TEN. The signatures are W. A. Julian and Henry Morgenthau Jr. The legal-tender clause still promises redemption “in lawful money” at the Treasury or any Federal Reserve Bank. The green back shows the Treasury building in Washington, D.C., with an interwar automobile before the façade; plate number 430 sits at lower right. This collection piece, circulated and unslabbed, is serial G30986728A (GA block). It has neither the HAWAII overprint nor the motto “IN GOD WE TRUST,” which later series added.',
    },
    frontCaption: {
      es: 'Anverso del 10 dólares, serie 1934, distrito de Chicago, serial G30986728A: Hamilton y sello verde del Tesoro.',
      en: 'Face of the Series 1934 $10, Chicago district, serial G30986728A: Hamilton and the green Treasury seal.',
    },
    backCaption: {
      es: 'Reverso del 10 dólares, serie 1934: edificio del Tesoro y TEN DOLLARS. Plancha 430.',
      en: 'Back of the Series 1934 $10: the Treasury building and TEN DOLLARS. Plate 430.',
    },
    scarcity: {
      es: 'La serie 1934 del 10 dólares —cinco emisiones, de 1934 a 1934D, los doce distritos y sellos verde claro y verde oscuro— es el papel cotidiano de la Reserva en la depresión y la guerra. El Bank Note Museum la numera P-430 (sello claro) y P-430D (sello oscuro). Fr. 2004-G cubre Chicago. El tipo es común en estados medios; las claves son los reemplazos con estrella, los mulas de plancha y el 20 dólares HAWAII, que se documentará aparte.',
      en: 'The Series 1934 $10 — five issues, 1934 through 1934D, all twelve districts, and both light- and dark-green seals — was everyday Reserve paper through the Depression and the war. The Bank Note Museum numbers it P-430 (light seal) and P-430D (dark seal). Fr. 2004-G is Chicago. The type is common in mid grades; the keys are star replacements, plate mules, and the HAWAII $20, which will be documented separately.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este número de serie. La pieza se presenta en estado original, circulada, sin encapsular.',
      en: 'A PMG or PCGS census for this serial has not been independently verified. The note is shown in original, circulated, unslabbed condition.',
    },
    grade: {
      es: 'Circulada, sin encapsular (colección privada)',
      en: 'Circulated, unslabbed (private collection)',
    },
    sources: [
      {
        href: 'http://banknote.ws/COLLECTION/countries/AME/USA/USA-FEDRES/USA0430D2.htm',
        es: 'Bank Note Museum — P-430, 10 dólares Federal Reserve Note, serie 1934',
        en: 'Bank Note Museum — P-430, Series 1934 $10 Federal Reserve Note',
        note: {
          es: 'Hamilton al anverso y el Tesoro al reverso; firmas Julian y Morgenthau en la serie 1934; distrito G = Chicago.',
          en: 'Hamilton on the face and the Treasury on the back; Julian and Morgenthau on Series 1934; district G = Chicago.',
        },
      },
      {
        href: 'https://www.papermoneyproject.com/10-frn',
        es: 'The Paper Money Project — Federal Reserve Notes de 10 dólares, serie 1934',
        en: 'The Paper Money Project — Series 1934 $10 Federal Reserve Notes',
        note: {
          es: 'Cinco series (1934–1934D), sellos LGS y DGS, y la emisión de emergencia HAWAII.',
          en: 'Five series (1934–1934D), LGS and DGS seals, and the HAWAII emergency issue.',
        },
      },
      {
        href: 'https://www.uscurrency.gov/denominations/10',
        es: 'U.S. Currency Education Program — 10 dólares',
        en: 'U.S. Currency Education Program — $10',
        note: {
          es: 'Hamilton en el 10 dólares desde 1929; el edificio del Tesoro en el reverso de las series de tamaño pequeño anteriores al rediseño de 2006.',
          en: 'Hamilton on the $10 since 1929; the Treasury building on the back of small-size series before the 2006 redesign.',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    seriesLink: 'Estados Unidos',
    collectionLink: 'Estados Unidos',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza',
    historyHeading: 'El banco',
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
    seriesLink: 'United States',
    collectionLink: 'United States',
    frontHeading: 'Face',
    backHeading: 'Back',
    aboutHeading: 'The note',
    historyHeading: 'The bank',
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

export function noteById(id: string): UnitedStatesNote | undefined {
  return unitedStatesNotes.find((note) => note.id === id);
}

export function notePath(note: UnitedStatesNote, locale: 'es' | 'en'): string {
  return localizePath(note.path, locale);
}

export function notesForChapter(chapterId: UnitedStatesChapterId): UnitedStatesNote[] {
  return unitedStatesNotes.filter((note) => note.chapterId === chapterId);
}

export const unitedStatesNoteSlugs = unitedStatesNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export const unitedStatesNoteDedicatedSlugs = unitedStatesNotes.flatMap((note) => [
  note.path.replace(/^\/|\/$/g, ''),
  note.pathEn.replace(/^\/|\/$/g, ''),
]);
