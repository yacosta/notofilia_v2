import type { CatalogSource, LocalizedText } from './catalog';
import { localizePath } from '../lib/locale-paths';

export const USA_PATH = '/coleccion/estados-unidos/';
export const USA_PATH_EN = '/collection/united-states/';
export const USA_MPC_PATH = '/coleccion/estados-unidos/mpc-vietnam/';
export const USA_MPC_PATH_EN = '/collection/united-states/mpc-vietnam/';
export const USA_MISC_PATH = '/coleccion/estados-unidos/miscelaneos/';
export const USA_MISC_PATH_EN = '/collection/united-states/miscellaneous/';

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
      es: 'Graybacks del Tesoro: de Montgomery a Richmond, sin oro ni reconocimiento, hasta la reforma de 1864.',
      en: 'Treasury graybacks: from Montgomery to Richmond, without gold or recognition, through the 1864 reform.',
    },
    body: {
      es: 'El Tesoro confederado nació casi vacío: la riqueza del Sur estaba en la tierra y en las personas esclavizadas, no en metal, y el bloqueo unionista cortó el algodón que habría podido comprar oro. Wikipedia sitúa las primeras letras de crédito en marzo–abril de 1861, en Montgomery, antes de que la capital pasara a Richmond. Christopher G. Memminger recurrió a la prensa; las planchas del Norte se cerraron y grabaron Hoyer & Ludwig, Keatinge & Ball y Archer & Daly, a menudo en litografía. Siete series sumaron unos 1.700 millones de dólares en 72 tipos Criswell. El grayback prometía un pago tras la paz; al perderse la guerra no valía nada, y la Decimocuarta Enmienda declaró nula esa deuda. En esta vitrina están el 5 dólares T-69, serial 6164, y el 20 dólares T-67, serial 74523, ambos de febrero de 1864.',
      en: 'The Confederate Treasury opened almost empty: Southern wealth sat in land and enslaved people, not in coin, and the Union blockade cut off the cotton that might have bought gold. Wikipedia dates the first bills of credit to March–April 1861, at Montgomery, before the capital moved to Richmond. Christopher G. Memminger turned to the press; Northern plates closed and Hoyer & Ludwig, Keatinge & Ball, and Archer & Daly engraved, often by lithography. Seven series ran to about $1.7 billion in 72 Criswell types. The grayback promised payment after peace; when the war was lost it was worth nothing, and the Fourteenth Amendment voided that debt. This case holds the T-69 $5, serial 6164, and the T-67 $20, serial 74523, both of February 1864.',
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
      es: 'En 1878 el Tesoro emitió Silver Certificates, autorizados por la legislación que aumentó la compra y acuñación de plata. El BEP y uscurrency.gov coinciden en esa fecha. En 1935, el anverso y el reverso del Gran Sello de Estados Unidos aparecieron juntos por primera vez en el 1 dólar de esta clase. Durante la Segunda Guerra Mundial, el BEP imprimió certificados de plata y billetes de la Reserva Federal con sobrecarga HAWAII, sello y seriales marrones, para poder declararlos sin valor si el archipiélago caía. El 1 dólar 1935-A de sello amarillo —la emisión de África del Norte— sirvió al mismo fin con las tropas aliadas. El canje en plata terminó en 1968. Esta vitrina abre con el 1 dólar certificado de plata serie 1957 B, serial S35513454A, y seguirá con el de África del Norte de sello amarillo.',
      en: 'In 1878 the Treasury issued Silver Certificates, authorized by legislation that increased the purchase and coinage of silver. The BEP and uscurrency.gov agree on that date. In 1935 both faces of the Great Seal of the United States appeared together for the first time on the $1 of this class. During the Second World War the BEP printed silver certificates and Federal Reserve notes with a HAWAII overprint, brown seals, and brown serials, so they could be declared worthless if the islands fell. The 1935-A $1 with a yellow seal — the North Africa issue — served the same purpose with Allied troops. Redemption in silver ended in 1968. This case opens with the Series 1957-B $1 Silver Certificate, serial S35513454A, and will add that North Africa yellow-seal $1.',
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
      es: 'La Federal Reserve Act de 1913 creó el banco central y autorizó dos papeles: los Federal Reserve Notes, emitidos por la Junta, y los Federal Reserve Bank Notes, moneda de emergencia de cada banco distrito en el primer tercio del siglo XX. El BEP los distingue con claridad. Desde 1914 los FRN son el papel de circulación; hoy son el único tipo que se emite. En 1934 el BEP añadió la sobrecarga HAWAII a FRN y certificados de plata. Ya tienen ficha el 10 dólares de 1934 del distrito de Chicago (G / 7), serial G30986728A, el 10 dólares de 1934 A del mismo distrito, serial G74025286A, y el 1 dólar de 2003 del distrito de Atlanta (F / 6), reemplazo con estrella F05033622★. Seguirán el 100 dólares FRBN de Minneapolis de 1929, más 10 dólares de 1934 de otros distritos, el 20 dólares de Hawái de 1934 y el 100 dólares de Cleveland de 1990. Los certificados de pago militar (MPC) de Vietnam se documentan en su propia vitrina. Los cupones USDA se documentarán junto a estas series federales.',
      en: 'The Federal Reserve Act of 1913 created the central bank and authorized two papers: Federal Reserve Notes, issued by the Board, and Federal Reserve Bank Notes, emergency currency of each district bank in the early twentieth century. The BEP draws that distinction clearly. From 1914 FRNs have been the circulating paper; today they are the only type still issued. In 1934 the BEP added the HAWAII overprint to FRNs and silver certificates. The Series 1934 Chicago (G / 7) $10, serial G30986728A, the Series 1934A $10 of the same district, serial G74025286A, and the Series 2003 Atlanta (F / 6) $1 star replacement F05033622★ already have note pages. Still to come are the 1929 Minneapolis $100 FRBN, further 1934 $10 notes from other districts, the 1934 Hawaii $20, and the 1990 Cleveland $100. Vietnam Military Payment Certificates are documented in their own case. USDA food coupons will be documented alongside these federal series.',
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
      'Mapa vintage de Estados Unidos sobre pergamino con los doce distritos de la Reserva Federal, un billete de 10 dólares de 1914, un pasaporte y un sello de 1913',
    intro: [
      'El papel moneda público nació en América, no en Europa. El 10 de diciembre de 1690, Massachusetts autorizó bills of credit para pagar una guerra; el U.S. Currency Education Program y el Newman Numismatic Portal lo registran como el primer papel público de Occidente. Las trece colonias siguieron el modelo. El Congreso Continental emitió Continentals en 1775: sin respaldo metálico y falsificados por el enemigo, acuñaron la frase «not worth a Continental».',
      'En el siglo XIX el comercio cotidiano corrió sobre obsolete notes de bancos estatales —broken banknotes en la jerga, catalogados por Haxby—. La American Numismatic Society sitúa el fin de esa pluralidad en la Guerra Civil: un impuesto del 10 % sobre el papel privado y la National Banking Act de 1863. Al mismo tiempo nació el papel federal —United States Notes (1862), Gold Certificates (1865) y Silver Certificates (1878)— y, en el Sur, el grayback de los Estados Confederados, sin respaldo metálico, hasta la ley del 17 de febrero de 1864.',
      'La Federal Reserve Act de 1913 creó el banco central y dos tipos de papel: Federal Reserve Notes y, como moneda de emergencia, Federal Reserve Bank Notes. El BEP dejó de entregar United States Notes en 1971; hoy solo se emiten FRN. La Segunda Guerra Mundial marcó certificados de plata y FRN con sobrecarga HAWAII y el 1 dólar 1935-A de sello amarillo para África del Norte.',
      'Esta vitrina no es un catálogo completo de la notafilia estadounidense: es el inventario de los ejemplares que se documentarán aquí, con referencias Friedberg, Haxby, Schwan, Criswell o Pick cuando existan. Ya tienen ficha el 1 dólar remainder del State Bank at New Brunswick (Haxby NJ-350 G16a), el 5 dólares confederado T-69 de 1864, serial 6164, el 20 dólares T-67, serial 74523, el 10 dólares Federal Reserve Note de 1934 del distrito de Chicago, serial G30986728A, el 10 dólares de 1934 A del mismo distrito, serial G74025286A, el 1 dólar de 2003 del distrito de Atlanta, reemplazo F05033622★, y el 1 dólar certificado de plata serie 1957 B, serial S35513454A. Las demás se publicarán como en Filipinas, a medida que se fotografíen. Caben también certificados de pago militar (MPC), cupones USDA y notas de prueba.',
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
      'Vintage map of the United States on parchment showing the twelve Federal Reserve districts, a 1914 ten-dollar note, a passport, and a 1913 postage stamp',
    intro: [
      'Public paper money was born in America, not in Europe. On 10 December 1690 Massachusetts authorized bills of credit to pay for a war; the U.S. Currency Education Program and the Newman Numismatic Portal record it as the first public paper in the Western world. The thirteen colonies followed. The Continental Congress issued Continentals in 1775: unbacked and counterfeited by the enemy, they coined the phrase “not worth a Continental.”',
      'In the nineteenth century everyday trade ran on obsolete notes of state banks — broken banknotes in the jargon, catalogued by Haxby. The American Numismatic Society places the end of that plurality in the Civil War: a 10 percent tax on private paper and the National Banking Act of 1863. Federal paper was born at the same time — United States Notes (1862), Gold Certificates (1865), and Silver Certificates (1878) — and, in the South, the unbacked Confederate grayback, through the act of 17 February 1864.',
      'The Federal Reserve Act of 1913 created the central bank and two kinds of paper: Federal Reserve Notes and, as emergency currency, Federal Reserve Bank Notes. The BEP stopped delivering United States Notes in 1971; today only FRNs are issued. The Second World War marked silver certificates and FRNs with the HAWAII overprint and the 1935-A yellow-seal $1 for North Africa.',
      'This case is not a complete catalog of United States notaphily: it is the inventory of the pieces that will be documented here, with Friedberg, Haxby, Schwan, Criswell, or Pick references when they exist. The State Bank at New Brunswick $1 remainder (Haxby NJ-350 G16a), the 1864 Confederate T-69 $5, serial 6164, the T-67 $20, serial 74523, the Series 1934 Chicago Federal Reserve Note $10, serial G30986728A, the Series 1934A $10 of the same district, serial G74025286A, the Series 2003 Atlanta $1 star replacement F05033622★, and the Series 1957-B $1 Silver Certificate, serial S35513454A, already have note pages. Further pieces will be published as they are photographed, as in the Philippines case. Military Payment Certificates, USDA food coupons, and test notes belong here as well.',
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
  | '1-dolar-serie-2003-atlanta'
  | '5-dolares-confederados-1864'
  | '20-dolares-confederados-1864'
  | '10-dolares-serie-1934-chicago'
  | '10-dolares-serie-1934a-chicago'
  | '1-dolar-certificado-plata-1957b';

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
  history?: LocalizedText | LocalizedText[];
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
    id: '5-dolares-confederados-1864',
    chapterId: 'us-confederado',
    path: '/coleccion/estados-unidos/5-dolares-confederados-1864/',
    pathEn: '/collection/united-states/5-dollars-confederate-1864/',
    pick: 'P#67 · T-69 · N#226718',
    serial: '6164 · 3 · A',
    signatures: {
      es: 'C. Howell («for Register») y M. Allen («for Treasurer»)',
      en: 'C. Howell (“for Register”) and M. Allen (“for Treasurer”)',
    },
    printed: {
      es: 'Keatinge & Ball, Columbia, S.C.; litografía de Evans & Cogswell. Wikipedia cifra el tipo T-69 en unos 5.526.100 ejemplares. La ley del 17 de febrero de 1864 autorizó 200 millones de dólares en todas las denominaciones.',
      en: 'Keatinge & Ball, Columbia, S.C.; lithographed by Evans & Cogswell. Wikipedia puts T-69 at about 5,526,100 notes. The act of 17 February 1864 authorized $200 million across all denominations.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/csa-1864-5-composite.jpg',
      front: '/images/catalog/estados-unidos/csa-1864-5-front.jpg',
      back: '/images/catalog/estados-unidos/csa-1864-5-back.jpg',
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
      es: '5 dólares · Estados Confederados · 1864',
      en: '$5 · Confederate States · 1864',
    },
    kicker: {
      es: 'Estados Unidos · Estados Confederados',
      en: 'United States · Confederate States',
    },
    lead: {
      es: 'Anverso rosa con el Capitolio de Virginia y C. G. Memminger; reverso azul con FIVE. Richmond, 17 de febrero de 1864. Serial 6164, 3.ª serie, plancha A.',
      en: 'Pink face with the Virginia State Capitol and C. G. Memminger; blue back with FIVE. Richmond, 17 February 1864. Serial 6164, 3rd series, plate A.',
    },
    description: {
      es: 'El 5 dólares del 17 de febrero de 1864 (Pick 67, Criswell y Fricke T-69, Numista N#226718) es el cinco de la última emisión del Tesoro de los Estados Confederados. El anverso, en negro sobre un tinte rosa, lleva al centro el Capitolio de Virginia en Richmond —frontón y columnata entre árboles— y, abajo a la derecha, el retrato oval de Christopher G. Memminger, primer secretario del Tesoro. El arco superior lee la cláusula de redención: «TWO YEARS AFTER THE RATIFICATION OF A TREATY OF PEACE BETWEEN THE CONFEDERATE STATES & THE UNITED STATES». Bajo la viñeta, «The Confederate States of America» promete pagar FIVE DOLLARS al portador; la fecha impresa es «Richmond, February 17th 1864». El flanco izquierdo lleva FIVE en vertical; arriba a la derecha, un 5 en marco festoneado. El serial manuscrito 6164 va en tinta oscura junto al 5; la pieza es de la 3.ª serie, plancha A. Las firmas son las de C. Howell («for Register») y M. Allen («for Treasurer»). El pie de grabado es Keatinge & Ball, Columbia, S.C.; el Bank Note Museum y el Smithsonian anotan también la litografía de Evans & Cogswell. El reverso, en azul, muestra FIVE sobre un campo de guilloches y un 5 en cada esquina. La pieza de la colección, circulada y sin encapsular, se presenta en funda.',
      en: 'The $5 of 17 February 1864 (Pick 67, Criswell and Fricke T-69, Numista N#226718) is the five of the Confederate Treasury’s last issue. The black face on a pink tint carries the Virginia State Capitol in Richmond — pediment and colonnade among trees — at center and, at lower right, an oval portrait of Christopher G. Memminger, first secretary of the Treasury. The upper arc reads the redemption clause: “TWO YEARS AFTER THE RATIFICATION OF A TREATY OF PEACE BETWEEN THE CONFEDERATE STATES & THE UNITED STATES.” Beneath the vignette, “The Confederate States of America” promises to pay FIVE DOLLARS to the bearer; the printed date is “Richmond, February 17th 1864.” FIVE runs vertically at left; a scalloped 5 sits at upper right. Manuscript serial 6164 sits in dark ink beside the 5; the piece is 3rd series, plate A. The signatures are C. Howell (“for Register”) and M. Allen (“for Treasurer”). The engraving imprint is Keatinge & Ball, Columbia, S.C.; the Bank Note Museum and the Smithsonian also note Evans & Cogswell’s lithography. The blue back shows FIVE on a guilloche field and a 5 in each corner. The collection note, circulated and unslabbed, is shown in a sleeve.',
    },
    history: [
      {
        es: 'El Tesoro confederado nació casi vacío. La riqueza del Sur estaba en la tierra y en las personas esclavizadas, no en metal; el bloqueo unionista cortó las exportaciones de algodón que habrían podido comprar oro. Wikipedia sitúa las primeras letras de crédito en marzo–abril de 1861, en Montgomery, Alabama, antes de que la capital pasara a Richmond. Christopher G. Memminger, el retrato de este cinco, fue el primer secretario del Tesoro y el que recurrió a la prensa: los impuestos y los bonos cubrían solo una fracción de la guerra. El grayback no era un canje en oro. Era una promesa de pago si el Sur ganaba.',
        en: 'The Confederate Treasury opened almost empty. Southern wealth sat in land and enslaved people, not in coin; the Union blockade cut off the cotton exports that might have bought gold. Wikipedia dates the first bills of credit to March–April 1861, at Montgomery, Alabama, before the capital moved to Richmond. Christopher G. Memminger, the portrait on this five, was the first secretary of the Treasury and the man who turned to the press: taxes and bonds covered only a fraction of the war. The grayback was not a redemption in gold. It was a promise to pay if the South won.',
      },
      {
        es: 'Casi todos los grabadores y las planchas de banco estaban en Nueva York y Filadelfia. Wikipedia registra las primeras planchas de la National Bank Note Company y de su sucursal de Nueva Orleans, la Southern Bank Note Company, hasta que esa vía se cerró. Este cinco lo grabó Keatinge & Ball en Columbia y lo litografió Evans & Cogswell: el Bank Note Museum y el Smithsonian lo anotan así. Hoyer & Ludwig y Archer & Daly cubrieron otras denominaciones, a menudo en litografía, con papeles y planchas desiguales por el bloqueo. El resultado se copiaba con facilidad. Samuel C. Upham, de Filadelfia, vendió desde 1862 «fac-simile Confederate notes» como recuerdos; los contrabandistas recortaban el pie y los hacían circular en el Sur.',
        en: 'Almost all the engravers and bank plates sat in New York and Philadelphia. Wikipedia records the first plates of the National Bank Note Company and of its New Orleans branch, the Southern Bank Note Company, until that route closed. Keatinge & Ball engraved this five in Columbia and Evans & Cogswell lithographed it: the Bank Note Museum and the Smithsonian record both imprints. Hoyer & Ludwig and Archer & Daly covered other denominations, often by lithography, on uneven paper and plates under the blockade. The result was easy to copy. Samuel C. Upham of Philadelphia sold “fac-simile Confederate notes” as souvenirs from 1862; smugglers trimmed the imprint and passed them in the South.',
      },
      {
        es: 'El anverso de este T-69 es el de la capital que aún tenía la Confederación: el Capitolio de Virginia, en Richmond, no el de Nashville que ya había caído en 1862. Memminger —el retrato de la derecha— dimitió en 1864, el mismo año de esta ley. Las firmas manuscritas de escribientes —el Tesoro llegó a contratar hasta doscientos por cada cargo, a menudo mujeres— eran la norma en los enteros; solo el medio dólar llevó firmas impresas. Las primeras series prometían el pago seis meses después de un tratado de paz. La cláusula de 1864, la de esta pieza, dilató el canje a dos años.',
        en: 'The face of this T-69 is the capital the Confederacy still held: the Virginia State Capitol in Richmond, not the Nashville building that had fallen in 1862. Memminger — the portrait at right — resigned in 1864, the same year as this act. Manuscript signatures by clerks — the Treasury eventually hired as many as two hundred for each office, often women — were the rule on whole-dollar notes; only the 50-cent issue carried printed signatures. Early series promised payment six months after a treaty of peace. The 1864 clause, the one on this note, stretched redemption to two years.',
      },
      {
        es: 'Entre 1861 y 1864 hubo siete series. Wikipedia cifra el total autorizado en 1.700 millones de dólares y T-69 en unos 5.526.100 ejemplares. Sin respaldo metálico, el grayback se hundió con las malas noticias: a finales de 1863 valía unos seis centavos de oro; en septiembre de 1864, tres. La ley del 17 de febrero de 1864 —la de este cinco— autorizó 200 millones en papel nuevo e intentó forzar el canje de los billetes viejos a descuento. No restauró la confianza. Tras Appomattox el papel perdió todo valor de curso. La Sección 4 de la Decimocuarta Enmienda declara ilegales y nulas las deudas contraídas en ayuda de la rebelión: ni los Estados Unidos ni ningún estado pueden asumirlas.',
        en: 'Between 1861 and 1864 there were seven series. Wikipedia puts the authorized total at $1.7 billion and T-69 at about 5,526,100 notes. Unbacked by specie, the grayback sank with the bad news: by the end of 1863 it was worth about six cents in gold; by September 1864, three. The act of 17 February 1864 — the act behind this five — authorized $200 million in new paper and tried to force the exchange of old notes at a discount. It did not restore trust. After Appomattox the paper lost all value as currency. Section 4 of the Fourteenth Amendment holds debts incurred in aid of rebellion illegal and void: neither the United States nor any state may assume them.',
      },
    ],
    historyHeading: {
      es: 'La emisión',
      en: 'The issue',
    },
    frontCaption: {
      es: 'Anverso del 5 dólares confederado, T-69, 17 de febrero de 1864, serial 6164, 3.ª serie, plancha A: Capitolio de Virginia y Memminger.',
      en: 'Face of the Confederate $5, T-69, 17 February 1864, serial 6164, 3rd series, plate A: the Virginia Capitol and Memminger.',
    },
    backCaption: {
      es: 'Reverso azul del 5 dólares confederado T-69: FIVE sobre guilloches y 5 en las cuatro esquinas.',
      en: 'Blue back of the Confederate T-69 $5: FIVE on guilloches and 5 in the four corners.',
    },
    scarcity: {
      es: 'Wikipedia cifra T-69 en unos 5.526.100 ejemplares. Es el cinco más común de 1864 y, con el T-67, el grayback de entrada de muchas colecciones de tipos. El Bank Note Museum lo numera P-67 y anota a Evans & Cogswell junto a Keatinge & Ball. El mercado trata el tipo circulado como frecuente; las claves están en los estados altos, los márgenes completos y la ausencia de cortes de cancelación. Esta ficha no inventa una tirada por serie ni por letra.',
      en: 'Wikipedia puts T-69 at about 5,526,100 notes. It is the most common 1864 five and, with T-67, the entry grayback of many type sets. The Bank Note Museum numbers it P-67 and records Evans & Cogswell with Keatinge & Ball. The market treats circulated examples as common; the keys are high grades, full margins, and the absence of cut cancels. This record does not invent a printage by series or letter.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial 6164. La pieza se presenta en funda, circulada, sin encapsular.',
      en: 'A PMG or PCGS census for serial 6164 has not been independently verified. The note is shown in a sleeve, circulated, unslabbed.',
    },
    grade: {
      es: 'Circulada, sin encapsular (colección privada)',
      en: 'Circulated, unslabbed (private collection)',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/CSA/CSA0067.htm',
        es: 'Bank Note Museum — P-67, 5 dólares, 17 de febrero de 1864',
        en: 'Bank Note Museum — P-67, $5, 17 February 1864',
        note: {
          es: 'Capitolio de Richmond y Christopher G. Memminger; Keatinge & Ball y Evans & Cogswell.',
          en: 'Richmond Capitol and Christopher G. Memminger; Keatinge & Ball and Evans & Cogswell.',
        },
      },
      {
        href: 'https://en.numista.com/catalogue/note226718.html',
        es: 'Numista — 5 Dollars, Confederate States (N#226718)',
        en: 'Numista — 5 Dollars, Confederate States (N#226718)',
        note: {
          es: 'Capitolio de Richmond y Memminger; Keatinge & Ball; 180 × 80 mm; desmonetizado.',
          en: 'Richmond Capitol and Memminger; Keatinge & Ball; 180 × 80 mm; demonetized.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Confederate_States_dollar',
        es: 'Wikipedia — Confederate States dollar',
        en: 'Wikipedia — Confederate States dollar',
        note: {
          es: 'T-69, Keatinge & Ball, unos 5.526.100; siete series y 1.700 millones; cláusula de paz a dos años.',
          en: 'T-69, Keatinge & Ball, about 5,526,100; seven series and $1.7 billion; two-year peace clause.',
        },
      },
      {
        href: 'https://nmaahc.si.edu/object/nmaahc_2017.108.9.5',
        es: 'Smithsonian NMAAHC — Confederate States of America five dollar bill',
        en: 'Smithsonian NMAAHC — Confederate States of America five dollar bill',
        note: {
          es: 'Capitolio de Virginia, cláusula de paz a dos años, Keatinge & Ball y Evans & Cogswell; reverso azul.',
          en: 'Virginia Capitol, two-year peace clause, Keatinge & Ball and Evans & Cogswell; blue back.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Samuel_Curtis_Upham',
        es: 'Wikipedia — Samuel C. Upham',
        en: 'Wikipedia — Samuel C. Upham',
        note: {
          es: 'Facsímiles vendidos en Filadelfia desde 1862; el pie se recortaba y el papel circulaba en el Sur.',
          en: 'Facsimiles sold in Philadelphia from 1862; the imprint was trimmed and the paper circulated in the South.',
        },
      },
      {
        href: 'https://constitution.congress.gov/browse/amendment-14/section-4/',
        es: 'Constitution Annotated — Decimocuarta Enmienda, Sección 4',
        en: 'Constitution Annotated — Fourteenth Amendment, Section 4',
        note: {
          es: 'Ni los Estados Unidos ni ningún estado asumirán deudas contraídas en ayuda de la rebelión; tales deudas son ilegales y nulas.',
          en: 'Neither the United States nor any state shall assume debts incurred in aid of rebellion; such debts are illegal and void.',
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
    history: [
      {
        es: 'El Tesoro confederado nació casi vacío. La riqueza del Sur estaba en la tierra y en las personas esclavizadas, no en metal; el bloqueo unionista cortó las exportaciones de algodón que habrían podido comprar oro. Wikipedia sitúa las primeras letras de crédito en marzo–abril de 1861, en Montgomery, Alabama, antes de que la capital pasara a Richmond. Christopher G. Memminger, secretario del Tesoro, recurrió a la prensa: los impuestos y los bonos cubrían solo una fracción de la guerra. El grayback no era un canje en oro. Era una promesa de pago si el Sur ganaba.',
        en: 'The Confederate Treasury opened almost empty. Southern wealth sat in land and enslaved people, not in coin; the Union blockade cut off the cotton exports that might have bought gold. Wikipedia dates the first bills of credit to March–April 1861, at Montgomery, Alabama, before the capital moved to Richmond. Christopher G. Memminger, secretary of the Treasury, turned to the press: taxes and bonds covered only a fraction of the war. The grayback was not a redemption in gold. It was a promise to pay if the South won.',
      },
      {
        es: 'Casi todos los grabadores y las planchas de banco estaban en Nueva York y Filadelfia. Wikipedia registra las primeras planchas de la National Bank Note Company y de su sucursal de Nueva Orleans, la Southern Bank Note Company, hasta que esa vía se cerró. Entonces imprimieron Hoyer & Ludwig en Richmond, Keatinge & Ball —Edward Keatinge había grabado retratos para la Southern Bank Note Company; la casa pasó de Richmond a Columbia en 1862— y Archer & Daly, a menudo en litografía, con papeles y planchas desiguales por el bloqueo. El resultado se copiaba con facilidad. Samuel C. Upham, de Filadelfia, vendió desde 1862 «fac-simile Confederate notes» como recuerdos; los contrabandistas recortaban el pie y los hacían circular en el Sur.',
        en: 'Almost all the engravers and bank plates sat in New York and Philadelphia. Wikipedia records the first plates of the National Bank Note Company and of its New Orleans branch, the Southern Bank Note Company, until that route closed. Then Hoyer & Ludwig printed in Richmond, Keatinge & Ball — Edward Keatinge had engraved portraits for the Southern Bank Note Company; the firm moved from Richmond to Columbia in 1862 — and Archer & Daly, often by lithography, on uneven paper and plates under the blockade. The result was easy to copy. Samuel C. Upham of Philadelphia sold “fac-simile Confederate notes” as souvenirs from 1862; smugglers trimmed the imprint and passed them in the South.',
      },
      {
        es: 'Los anversos llevaron a Jefferson Davis, Alexander H. Stephens, Memminger y Judah P. Benjamin, alegorías clásicas y escenas del comercio y de la esclavitud. Wikipedia cuenta que, de 72 tipos, cinco mostraron personas esclavizadas. Este veinte es el de Stephens y el Capitolio de Nashville, ya en manos de la Unión desde febrero de 1862. Las firmas manuscritas de escribientes —el Tesoro llegó a contratar hasta doscientos por cada cargo, a menudo mujeres— eran la norma en los enteros; solo el medio dólar llevó firmas impresas. Las primeras series prometían el pago seis meses después de un tratado de paz. La cláusula de 1864, la de esta pieza, dilató el canje a dos años.',
        en: 'The faces carried Jefferson Davis, Alexander H. Stephens, Memminger, and Judah P. Benjamin, classical allegories, and scenes of Southern commerce and slavery. Wikipedia notes that five of the 72 types depicted enslaved people. This twenty is Stephens’s, with the Nashville Capitol, already in Union hands since February 1862. Manuscript signatures by clerks — the Treasury eventually hired as many as two hundred for each office, often women — were the rule on whole-dollar notes; only the 50-cent issue carried printed signatures. Early series promised payment six months after a treaty of peace. The 1864 clause, the one on this note, stretched redemption to two years.',
      },
      {
        es: 'Entre 1861 y 1864 hubo siete series. Wikipedia cifra el total autorizado en 1.700 millones de dólares. Sin respaldo metálico, el grayback se hundió con las malas noticias: a finales de 1863 valía unos seis centavos de oro; en septiembre de 1864, tres. La ley del 17 de febrero de 1864 —la de este T-67— autorizó 200 millones en papel nuevo e intentó forzar el canje de los billetes viejos a descuento. No restauró la confianza. Tras Appomattox el papel perdió todo valor de curso. La Sección 4 de la Decimocuarta Enmienda declara ilegales y nulas las deudas contraídas en ayuda de la rebelión: ni los Estados Unidos ni ningún estado pueden asumirlas.',
        en: 'Between 1861 and 1864 there were seven series. Wikipedia puts the authorized total at $1.7 billion. Unbacked by specie, the grayback sank with the bad news: by the end of 1863 it was worth about six cents in gold; by September 1864, three. The act of 17 February 1864 — the act behind this T-67 — authorized $200 million in new paper and tried to force the exchange of old notes at a discount. It did not restore trust. After Appomattox the paper lost all value as currency. Section 4 of the Fourteenth Amendment holds debts incurred in aid of rebellion illegal and void: neither the United States nor any state may assume them.',
      },
    ],
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
      es: 'Wikipedia cifra T-67 en unos 4.150.000 ejemplares. Las emisiones tardías de 1864 —este veinte entre ellas— sobrevivieron a montones en desvanes y cajas; las de Montgomery de 1861 son otra escala. Es el veinte más común de la Confederación y, a menudo, el primer grayback de una colección de tipos. El Bank Note Museum lo numera P-69, sin separar las series impresas ni las letras de plancha. El mercado trata el tipo circulado como frecuente; las claves están en los estados altos, los márgenes completos y la ausencia de cortes de cancelación. Esta ficha no inventa una tirada por serie ni por letra.',
      en: 'Wikipedia puts T-67 at about 4,150,000 notes. The late 1864 issues — this twenty among them — survived in attics and boxes by the million; the Montgomery notes of 1861 are another scale. It is the most common Confederate twenty and often a collector’s first grayback in a type set. The Bank Note Museum numbers it P-69, without splitting printed series or plate letters. The market treats circulated examples as common; the keys are high grades, full margins, and the absence of cut cancels. This record does not invent a printage by series or letter.',
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
          es: 'Montgomery 1861; siete series y 1.700 millones; litografía y planchas del Norte; cláusula de paz; inflación a seis y tres centavos de oro; T-67, Keatinge & Ball, unos 4.150.000.',
          en: 'Montgomery 1861; seven series and $1.7 billion; lithography and Northern plates; peace clause; inflation to six and three cents in gold; T-67, Keatinge & Ball, about 4,150,000.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Samuel_Curtis_Upham',
        es: 'Wikipedia — Samuel C. Upham',
        en: 'Wikipedia — Samuel C. Upham',
        note: {
          es: 'Facsímiles vendidos en Filadelfia desde 1862; el pie se recortaba y el papel circulaba en el Sur.',
          en: 'Facsimiles sold in Philadelphia from 1862; the imprint was trimmed and the paper circulated in the South.',
        },
      },
      {
        href: 'https://constitution.congress.gov/browse/amendment-14/section-4/',
        es: 'Constitution Annotated — Decimocuarta Enmienda, Sección 4',
        en: 'Constitution Annotated — Fourteenth Amendment, Section 4',
        note: {
          es: 'Ni los Estados Unidos ni ningún estado asumirán deudas contraídas en ayuda de la rebelión; tales deudas son ilegales y nulas.',
          en: 'Neither the United States nor any state shall assume debts incurred in aid of rebellion; such debts are illegal and void.',
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
      width: 1440,
      height: 960,
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
      es: 'El 10 dólares de la serie 1934 (Pick 430, Friedberg 2004-G) es un Federal Reserve Note de tamaño pequeño del distrito de Chicago: sello circular con la G, el 7 en las cuatro esquinas interiores, y el banco «FEDERAL RESERVE BANK OF CHICAGO ILLINOIS». El anverso, en negro con sello y seriales verdes, lleva el retrato de Alexander Hamilton en óvalo y, a la derecha, el sello del Tesoro sobre la palabra TEN. Las firmas son las de W. A. Julian y Henry Morgenthau Jr. El texto de curso legal aún promete el canje «in lawful money» en el Tesoro o en cualquier banco de la Reserva. El reverso, en verde, muestra el edificio del Tesoro en Washington, D.C., con un automóvil de entreguerras frente a la fachada; el número de plancha 430 queda abajo a la derecha. Esta pieza de la colección, circulada y sin encapsular, se presenta en funda y lleva el serial G30986728A (bloque GA). No lleva la sobrecarga HAWAII ni el lema «IN GOD WE TRUST», añadido en series posteriores.',
      en: 'The Series 1934 $10 (Pick 430, Friedberg 2004-G) is a small-size Federal Reserve Note of the Chicago district: a circular seal with G, 7s in the four inner corners, and the bank legend “FEDERAL RESERVE BANK OF CHICAGO ILLINOIS.” The black face with green seal and serials carries Alexander Hamilton in an oval and, at right, the Treasury seal over TEN. The signatures are W. A. Julian and Henry Morgenthau Jr. The legal-tender clause still promises redemption “in lawful money” at the Treasury or any Federal Reserve Bank. The green back shows the Treasury building in Washington, D.C., with an interwar automobile before the façade; plate number 430 sits at lower right. This collection piece, circulated and unslabbed, is shown in a sleeve and is serial G30986728A (GA block). It has neither the HAWAII overprint nor the motto “IN GOD WE TRUST,” which later series added.',
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
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este número de serie. La pieza se presenta en funda, circulada, sin encapsular.',
      en: 'A PMG or PCGS census for this serial has not been independently verified. The note is shown in a sleeve, circulated, unslabbed.',
    },
    grade: {
      es: 'Circulada, sin encapsular, en funda (colección privada)',
      en: 'Circulated, unslabbed, in a sleeve (private collection)',
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
  {
    id: '10-dolares-serie-1934a-chicago',
    chapterId: 'us-frb',
    path: '/coleccion/estados-unidos/10-dolares-serie-1934a-chicago/',
    pathEn: '/collection/united-states/10-dollars-series-1934a-chicago/',
    pick: 'P#430Da · Fr. 2006-G',
    serial: 'G74025286A',
    signatures: {
      es: 'W. A. Julian (tesorero) y Henry Morgenthau Jr. (secretario del Tesoro)',
      en: 'W. A. Julian (Treasurer) and Henry Morgenthau Jr. (Secretary of the Treasury)',
    },
    printed: {
      es: 'Tipo común del distrito de Chicago. La serie 1934 A es la segunda de las cinco emisiones 1934–1934D; esta ficha no inventa una tirada por bloque de serie.',
      en: 'A common Chicago-district type. Series 1934A is the second of the five 1934–1934D issues; this record does not invent a printage by serial block.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/frn-1934a-10-chicago-g74025286-composite.jpg',
      front: '/images/catalog/estados-unidos/frn-1934a-10-chicago-g74025286-front.jpg',
      back: '/images/catalog/estados-unidos/frn-1934a-10-chicago-g74025286-back.jpg',
      width: 1440,
      height: 960,
    },
    title: {
      es: '10 dólares · Serie 1934 A · Chicago',
      en: '$10 · Series 1934A · Chicago',
    },
    kicker: {
      es: 'Estados Unidos · Federal Reserve Note',
      en: 'United States · Federal Reserve Note',
    },
    lead: {
      es: 'Anverso con Hamilton y sello verde del Tesoro; reverso con el edificio del Tesoro. Distrito G / 7. Serie 1934 A, serial G74025286A.',
      en: 'Face with Hamilton and a green Treasury seal; back with the Treasury building. District G / 7. Series 1934A, serial G74025286A.',
    },
    description: {
      es: 'El 10 dólares de la serie 1934 A (Pick 430Da, Friedberg 2006-G) es un Federal Reserve Note de tamaño pequeño del distrito de Chicago: sello circular con la G, el 7 en las cuatro esquinas interiores, y el banco «FEDERAL RESERVE BANK OF CHICAGO ILLINOIS». El anverso, en negro con sello y seriales verdes, lleva el retrato de Alexander Hamilton en óvalo y, a la derecha, el sello del Tesoro sobre la palabra TEN. Las firmas son las de W. A. Julian y Henry Morgenthau Jr., las mismas de la serie 1934 sin letra. El texto de curso legal aún promete el canje «in lawful money» en el Tesoro o en cualquier banco de la Reserva. La plancha de anverso J118, en cuerpo macro, queda abajo a la derecha. El reverso, en verde, muestra el edificio del Tesoro en Washington, D.C., con un automóvil de entreguerras frente a la fachada. Esta pieza de la colección, circulada y sin encapsular, se presenta en funda y lleva el serial G74025286A (bloque GA). No lleva la sobrecarga HAWAII ni el lema «IN GOD WE TRUST». No es el 10 dólares de 1934 (sin A) del mismo distrito, serial G30986728A, que ya tiene ficha propia.',
      en: 'The Series 1934A $10 (Pick 430Da, Friedberg 2006-G) is a small-size Federal Reserve Note of the Chicago district: a circular seal with G, 7s in the four inner corners, and the bank legend “FEDERAL RESERVE BANK OF CHICAGO ILLINOIS.” The black face with green seal and serials carries Alexander Hamilton in an oval and, at right, the Treasury seal over TEN. The signatures are W. A. Julian and Henry Morgenthau Jr., the same pair as on Series 1934 without a letter. The legal-tender clause still promises redemption “in lawful money” at the Treasury or any Federal Reserve Bank. Face plate J118, in macro size, sits at lower right. The green back shows the Treasury building in Washington, D.C., with an interwar automobile before the façade. This collection piece, circulated and unslabbed, is shown in a sleeve and is serial G74025286A (GA block). It has neither the HAWAII overprint nor the motto “IN GOD WE TRUST.” It is not the Series 1934 (no letter) $10 of the same district, serial G30986728A, which already has its own note page.',
    },
    history: [
      {
        es: 'La serie 1934 A del 10 dólares conserva las firmas Julian–Morgenthau y el mismo grabado de Hamilton. El cambio que la distingue de la serie 1934 es tipográfico: los números de plancha pasan de micro a macro. The Paper Money Project sitúa esa transición en la 1934 A; un mule nace cuando una cara macro se casa con un reverso micro, o al revés. Las 1934 A llevan sello verde oscuro (DGS / BGS), no el amarillo-verde claro de las primeras 1934.',
        en: 'Series 1934A $10 notes keep the Julian–Morgenthau signatures and the same Hamilton engraving. What sets them apart from Series 1934 is typographic: plate numbers grow from micro to macro. The Paper Money Project places that change on 1934A; a mule is a macro face paired with a micro back, or the reverse. Series 1934A notes carry the dark (blue-green) seal, not the yellow-green of the earliest 1934 printings.',
      },
      {
        es: 'La producción de la 1934 A cubrió los años de la guerra. El Bank Note Museum la numera P-430Da dentro del grupo de sello oscuro. Chicago es el distrito G / 7. Esta pieza, bloque GA, no es un reemplazo con estrella ni un HAWAII. El lema «IN GOD WE TRUST» aún no figura en el reverso.',
        en: '1934A production ran through the war years. The Bank Note Museum numbers the type P-430Da in the dark-seal group. Chicago is district G / 7. This GA-block piece is neither a star replacement nor a HAWAII note. The motto “IN GOD WE TRUST” is not yet on the back.',
      },
    ],
    historyHeading: {
      es: 'La serie 1934 A',
      en: 'Series 1934A',
    },
    frontCaption: {
      es: 'Anverso del 10 dólares, serie 1934 A, distrito de Chicago, serial G74025286A: Hamilton, sello verde del Tesoro y plancha J118.',
      en: 'Face of the Series 1934A $10, Chicago district, serial G74025286A: Hamilton, the green Treasury seal, and plate J118.',
    },
    backCaption: {
      es: 'Reverso del 10 dólares, serie 1934 A: edificio del Tesoro y TEN DOLLARS. Sin lema IN GOD WE TRUST.',
      en: 'Back of the Series 1934A $10: the Treasury building and TEN DOLLARS. No IN GOD WE TRUST motto.',
    },
    scarcity: {
      es: 'La serie 1934 A del 10 dólares —firmas Julian–Morgenthau, sello verde oscuro, los doce distritos— es el papel cotidiano de la Reserva en la guerra. El Bank Note Museum la numera P-430Da. Fr. 2006-G cubre Chicago. El tipo es común en estados medios; las claves son los reemplazos con estrella, los mulas de plancha y el 20 dólares HAWAII, que se documentará aparte. Esta ficha no inventa una tirada por bloque.',
      en: 'Series 1934A $10 notes — Julian–Morgenthau signatures, dark-green seal, all twelve districts — were everyday Reserve paper during the war. The Bank Note Museum numbers the type P-430Da. Fr. 2006-G is Chicago. The type is common in mid grades; the keys are star replacements, plate mules, and the HAWAII $20, which will be documented separately. This record does not invent a printage by block.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial G74025286A. La pieza se presenta en funda, circulada, sin encapsular.',
      en: 'A PMG or PCGS census for serial G74025286A has not been independently verified. The note is shown in a sleeve, circulated, unslabbed.',
    },
    grade: {
      es: 'Circulada, sin encapsular, en funda (colección privada)',
      en: 'Circulated, unslabbed, in a sleeve (private collection)',
    },
    sources: [
      {
        href: 'http://banknote.ws/COLLECTION/countries/AME/USA/USA-FEDRES/USA0430D2.htm',
        es: 'Bank Note Museum — P-430D, 10 dólares Federal Reserve Note, series 1934–1934D',
        en: 'Bank Note Museum — P-430D, Series 1934–1934D $10 Federal Reserve Note',
        note: {
          es: '430Da: serie 1934 A, firmas Julian y Morgenthau; distrito G = Chicago; sello verde oscuro.',
          en: '430Da: Series 1934A, Julian and Morgenthau signatures; district G = Chicago; dark-green seal.',
        },
      },
      {
        href: 'https://www.papermoneyproject.com/10-frn',
        es: 'The Paper Money Project — Federal Reserve Notes de 10 dólares, serie 1934',
        en: 'The Paper Money Project — Series 1934 $10 Federal Reserve Notes',
        note: {
          es: 'Cinco series (1934–1934D); la 1934 A introduce planchas macro y sello verde oscuro; mulas micro/macro.',
          en: 'Five series (1934–1934D); 1934A introduces macro plates and the dark-green seal; micro/macro mules.',
        },
      },
      {
        href: 'https://www.greysheet.com/prices/item/fr-2006g-1934a-ten-dollar-federal-reserve-note-small-size/gsid/63233',
        es: 'Greysheet — Fr. 2006G, 1934A $10 Federal Reserve Note, Chicago',
        en: 'Greysheet — Fr. 2006G, 1934A $10 Federal Reserve Note, Chicago',
        note: {
          es: 'Tipo de tamaño pequeño, sello verde oscuro, distrito de Chicago.',
          en: 'Small-size type, dark-green seal, Chicago district.',
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
  {
    id: '1-dolar-serie-2003-atlanta',
    chapterId: 'us-frb',
    path: '/coleccion/estados-unidos/1-dolar-serie-2003-atlanta/',
    pathEn: '/collection/united-states/1-dollar-series-2003-atlanta/',
    pick: 'P#515a · Fr. 1929-F*',
    serial: 'F05033622★',
    signatures: {
      es: 'Rosario Marin (tesorera) y John W. Snow (secretario del Tesoro)',
      en: 'Rosario Marin (Treasurer) and John W. Snow (Secretary of the Treasury)',
    },
    printed: {
      es: 'BEP, Fort Worth (FW). USPaperMoney.Info sitúa F05033622★ en la tirada de reemplazo de agosto de 2005, F03200001★–F06400000★ (3.200.000 notas). Friedberg cifra Fr. 1929-F* en 3.200.000.',
      en: 'BEP, Fort Worth (FW). USPaperMoney.Info places F05033622★ in the August 2005 replacement run, F03200001★–F06400000★ (3,200,000 notes). Friedberg lists Fr. 1929-F* at 3,200,000.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/frn-2003-1-atlanta-f05033622-composite.jpg',
      front: '/images/catalog/estados-unidos/frn-2003-1-atlanta-f05033622-front.jpg',
      back: '/images/catalog/estados-unidos/frn-2003-1-atlanta-f05033622-back.jpg',
      width: 1440,
      height: 960,
    },
    title: {
      es: '1 dólar · Serie 2003 · Atlanta ★',
      en: '$1 · Series 2003 · Atlanta ★',
    },
    kicker: {
      es: 'Estados Unidos · Federal Reserve Note',
      en: 'United States · Federal Reserve Note',
    },
    lead: {
      es: 'Anverso con Washington, sello de Atlanta (F / 6) y serial de reemplazo F 05033622 ★; reverso con el Gran Sello. Serie 2003, Marin–Snow, Fort Worth.',
      en: 'Face with Washington, the Atlanta seal (F / 6), and replacement serial F 05033622 ★; back with the Great Seal. Series 2003, Marin–Snow, Fort Worth.',
    },
    description: {
      es: 'El 1 dólar de la serie 2003 (Pick 515a, Friedberg 1929-F*) es un Federal Reserve Note de tamaño pequeño del distrito de Atlanta: sello negro con la F, el 6 en las cuatro esquinas interiores, y el banco «FEDERAL RESERVE BANK OF ATLANTA GEORGIA». El anverso, en negro con sello y seriales verdes, lleva el retrato de George Washington en óvalo y, a la derecha, el sello del Tesoro sobre ONE. Las firmas son las de Rosario Marin y John W. Snow, entregadas al BEP el 5 de marzo de 2003. El lema «IN GOD WE TRUST» ya figura en el reverso. Las marcas de plancha son C3 arriba a la izquierda y FW C 222 abajo a la derecha: el prefijo FW identifica la planta de Fort Worth. El reverso, en verde, muestra ambas caras del Gran Sello —la pirámide y el águila— flanqueando ONE; la plancha 88 queda a la derecha del bloque central. Esta pieza de la colección, circulada y sin encapsular, va en una funda rígida y lleva el serial de reemplazo F 05033622 ★ (bloque F★), impreso a la izquierda abajo y a la derecha arriba.',
      en: 'The Series 2003 $1 (Pick 515a, Friedberg 1929-F*) is a small-size Federal Reserve Note of the Atlanta district: a black seal with F, 6s in the four inner corners, and the bank legend “FEDERAL RESERVE BANK OF ATLANTA GEORGIA.” The black face with green seal and serials carries George Washington in an oval and, at right, the Treasury seal over ONE. The signatures are Rosario Marin and John W. Snow, delivered to the BEP on 5 March 2003. The motto “IN GOD WE TRUST” is already on the back. Plate marks are C3 at upper left and FW C 222 at lower right: the FW prefix identifies the Fort Worth plant. The green back shows both faces of the Great Seal — the pyramid and the eagle — flanking ONE; plate 88 sits to the right of the central block. This collection piece, circulated and unslabbed, is in a rigid holder and bears replacement serial F 05033622 ★ (F★ block), printed at lower left and upper right.',
    },
    frontCaption: {
      es: 'Anverso del 1 dólar, serie 2003, distrito de Atlanta, serial de reemplazo F 05033622 ★: Washington y sello verde del Tesoro.',
      en: 'Face of the Series 2003 $1, Atlanta district, replacement serial F 05033622 ★: Washington and the green Treasury seal.',
    },
    backCaption: {
      es: 'Reverso del 1 dólar, serie 2003: ambas caras del Gran Sello y ONE DOLLAR. Plancha 88.',
      en: 'Back of the Series 2003 $1: both faces of the Great Seal and ONE DOLLAR. Plate 88.',
    },
    scarcity: {
      es: 'La serie 2003 del 1 dólar —firmas Marin–Snow, impresa de julio de 2003 a octubre de 2005— es papel cotidiano de la Reserva. El Bank Note Museum la numera P-515a. Atlanta tuvo 1.075.200.000 notas ordinarias y 3.520.000 estrellas en dos tiradas. La primera, de julio de 2003 en Washington (Fr. 1928-F*, F00000001★–F00320000★, 320.000 notas), es la escasa. Esta pieza cae en la segunda: Fort Worth, agosto de 2005, Fr. 1929-F*, F03200001★–F06400000★, 3.200.000 notas. El tipo con estrella es un reemplazo; esta tirada FW es la común del distrito.',
      en: 'Series 2003 $1 notes — Marin–Snow signatures, printed from July 2003 through October 2005 — were everyday Reserve paper. The Bank Note Museum numbers the type P-515a. Atlanta had 1,075,200,000 regular notes and 3,520,000 stars in two runs. The first, July 2003 in Washington (Fr. 1928-F*, F00000001★–F00320000★, 320,000 notes), is the scarce one. This piece falls in the second: Fort Worth, August 2005, Fr. 1929-F*, F03200001★–F06400000★, 3,200,000 notes. A star marks a replacement; this FW run is the common Atlanta star of the series.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este número de serie. La pieza se presenta en estado original, circulada, sin encapsular, en una funda rígida.',
      en: 'A PMG or PCGS census for this serial has not been independently verified. The note is shown in original, circulated, unslabbed condition, in a rigid holder.',
    },
    grade: {
      es: 'Circulada, sin encapsular, en funda rígida (colección privada)',
      en: 'Circulated, unslabbed, in a rigid holder (private collection)',
    },
    sources: [
      {
        href: 'http://banknote.ws/COLLECTION/countries/AME/USA/USA-FEDRES/USA0515.htm',
        es: 'Bank Note Museum — P-515, 1 dólar Federal Reserve Note, series 2003 y 2003A',
        en: 'Bank Note Museum — P-515, Series 2003 and 2003A $1 Federal Reserve Note',
        note: {
          es: 'P-515a: serie 2003, firmas Marin y Snow; distrito F = Atlanta.',
          en: 'P-515a: Series 2003, Marin and Snow signatures; district F = Atlanta.',
        },
      },
      {
        href: 'https://www.uspapermoney.info/serials/f2003_s.html',
        es: 'USPaperMoney.Info — Series 2003 $1, rangos de serial y estrellas',
        en: 'USPaperMoney.Info — Series 2003 $1 serial ranges and stars',
        note: {
          es: 'Atlanta: 1.075.200.000 ordinarias y 3.520.000 estrellas en dos tiradas. Agosto de 2005: F03200001★–F06400000★.',
          en: 'Atlanta: 1,075,200,000 regular notes and 3,520,000 stars in two runs. August 2005: F03200001★–F06400000★.',
        },
      },
      {
        href: 'https://home.treasury.gov/news/press-releases/js84',
        es: 'Departamento del Tesoro — firmas de Snow y Marin para la serie 2003 (JS-84)',
        en: 'U.S. Department of the Treasury — Snow and Marin signatures for Series 2003 (JS-84)',
        note: {
          es: '5 de marzo de 2003: las firmas se entregan al BEP; la producción del 1 dólar se esperaba para abril y el envío a la Reserva para julio.',
          en: '5 March 2003: signatures delivered to the BEP; $1 production expected in April and shipment to the Reserve in July.',
        },
      },
      {
        href: 'https://www.uscurrency.gov/denominations/1',
        es: 'U.S. Currency Education Program — 1 dólar',
        en: 'U.S. Currency Education Program — $1',
        note: {
          es: 'Washington en el 1 dólar desde 1869; ambas caras del Gran Sello en el reverso desde 1935.',
          en: 'Washington on the $1 since 1869; both faces of the Great Seal on the back since 1935.',
        },
      },
    ],
  },
  {
    id: '1-dolar-certificado-plata-1957b',
    chapterId: 'us-silver',
    path: '/coleccion/estados-unidos/1-dolar-certificado-plata-1957b/',
    pathEn: '/collection/united-states/1-dollar-silver-certificate-1957b/',
    pick: 'P#419b · Fr. 1621',
    serial: 'S35513454A',
    signatures: {
      es: 'Kathryn O\'Hay Granahan (tesorera) y C. Douglas Dillon (secretario del Tesoro)',
      en: 'Kathryn O\'Hay Granahan (Treasurer) and C. Douglas Dillon (Secretary of the Treasury)',
    },
    printed: {
      es: 'Serie 1957 B; el Greysheet cita unos 718.400.000 ejemplares de Fr. 1621. Fue una de las últimas emisiones de certificados de plata antes de que el BEP dejara de imprimirlos.',
      en: 'Series 1957 B; Greysheet cites about 718,400,000 notes for Fr. 1621. It was among the last silver-certificate issues before the BEP stopped printing them.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/sc-1957b-1-dollar-composite.jpg',
      front: '/images/catalog/estados-unidos/sc-1957b-1-dollar-front.jpg',
      back: '/images/catalog/estados-unidos/sc-1957b-1-dollar-back.jpg',
      width: 1800,
      height: 600,
    },
    title: {
      es: '1 dólar · Certificado de plata · Serie 1957 B',
      en: '$1 · Silver Certificate · Series 1957 B',
    },
    kicker: {
      es: 'Estados Unidos · Certificado de plata',
      en: 'United States · Silver Certificate',
    },
    lead: {
      es: 'Anverso con Washington, sello azul del Tesoro y seriales azules; reverso con el Gran Sello y el lema IN GOD WE TRUST. Serie 1957 B, serial S35513454A.',
      en: 'Face with Washington, a blue Treasury seal, and blue serials; back with the Great Seal and the motto IN GOD WE TRUST. Series 1957 B, serial S35513454A.',
    },
    description: {
      es: 'El 1 dólar certificado de plata serie 1957 B (Pick 419b, Friedberg 1621) es uno de los últimos billetes de esta clase que imprimió el Bureau of Engraving and Printing antes de que el dólar pasara por completo a Federal Reserve Notes con sello verde. El anverso, en negro con sello y seriales azules, lleva el retrato de George Washington en óvalo y la leyenda SILVER CERTIFICATE en el arco superior. El texto promete un depósito en plata en el Tesoro y el pago de ONE DOLLAR en plata al portador; abajo a la izquierda recuerda que el certificado es curso legal. El sello circular azul del Tesoro va a la derecha, sobre WASHINGTON, D.C. Las firmas son las de Kathryn O\'Hay Granahan y C. Douglas Dillon; la serie impresa, 1957 B, queda junto al secretario. Los seriales azules S35513454A se repiten arriba a la derecha y abajo a la izquierda (bloque SA). Las posiciones de plancha H2 y H751 figuran en los márgenes superior izquierdo e inferior derecho. El reverso, en verde, muestra el ONE central con IN GOD WE TRUST encima, el Gran Sello de Estados Unidos en los medallones laterales —pirámide inacabada a la izquierda, águila a la derecha— y la leyenda ONE DOLLAR abajo; la plancha de reverso 418 queda impresa abajo a la derecha. Esta pieza de la colección, en estado about uncirculated y sin encapsular, se presenta en funda.',
      en: 'The Series 1957-B $1 Silver Certificate (Pick 419b, Friedberg 1621) is one of the last notes of this class the Bureau of Engraving and Printing produced before the dollar moved entirely to green-seal Federal Reserve Notes. The black face with blue seal and serials carries George Washington in an oval and the legend SILVER CERTIFICATE in the upper arc. The text promises a deposit of silver in the Treasury and payment of ONE DOLLAR in silver to the bearer; at lower left it notes that the certificate is legal tender. The blue circular Treasury seal sits at right, over WASHINGTON, D.C. The signatures are Kathryn O\'Hay Granahan and C. Douglas Dillon; the printed series, 1957 B, sits beside the Secretary. Blue serials S35513454A repeat at upper right and lower left (SA block). Plate positions H2 and H751 appear at the upper-left and lower-right margins. The green back shows the central ONE with IN GOD WE TRUST above, the Great Seal of the United States in the side medallions — the unfinished pyramid at left, the eagle at right — and ONE DOLLAR below; reverse plate 418 is printed at lower right. This collection piece, in about-uncirculated condition and unslabbed, is shown in a sleeve.',
    },
    frontCaption: {
      es: 'Anverso del 1 dólar certificado de plata serie 1957 B, serial S35513454A: Washington, sello azul del Tesoro y planchas H2 / H751.',
      en: 'Face of the Series 1957-B $1 Silver Certificate, serial S35513454A: Washington, the blue Treasury seal, and plate positions H2 / H751.',
    },
    backCaption: {
      es: 'Reverso del 1 dólar certificado de plata serie 1957 B: ONE, IN GOD WE TRUST y el Gran Sello. Plancha de reverso 418.',
      en: 'Back of the Series 1957-B $1 Silver Certificate: ONE, IN GOD WE TRUST, and the Great Seal. Reverse plate 418.',
    },
    scarcity: {
      es: 'La subserie 1957 B (Pick 419b, Fr. 1621) es común: el Greysheet cita unos 718 millones de ejemplares. Es el cierre de los certificados de plata de un dólar; el mercado trata el tipo circulado como frecuente y reserva prima a los estados altos, a las estrellas de reemplazo y a los bloques raros. Esta ficha no inventa una tirada por bloque de serie.',
      en: 'The 1957-B sub-series (Pick 419b, Fr. 1621) is common: Greysheet cites about 718 million notes. It closes the $1 silver-certificate line; the market treats circulated examples as plentiful and reserves premiums for high grades, star replacements, and scarce blocks. This record does not invent a printage by serial block.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial S35513454A. La pieza se presenta en funda, sin encapsular.',
      en: 'A PMG or PCGS census for serial S35513454A has not been independently verified. The note is shown in a sleeve, unslabbed.',
    },
    grade: {
      es: 'About uncirculated, sin encapsular (colección privada)',
      en: 'About uncirculated, unslabbed (private collection)',
    },
    sources: [
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/AME/USA/USA-SILVER/USA0419.htm',
        es: 'Bank Note Museum — P-419, certificado de plata de 1 dólar, series 1957–1957B',
        en: 'Bank Note Museum — P-419, $1 Silver Certificate, Series 1957–1957B',
        note: {
          es: '419b: serie 1957 B, firmas Granahan y Dillon; sello y seriales azules.',
          en: '419b: Series 1957 B, Granahan and Dillon signatures; blue seal and serials.',
        },
      },
      {
        href: 'https://www.greysheet.com/prices/item/fr-1621-1957b-one-dollar-silver-certificate-small/gsid/64167',
        es: 'Greysheet — Fr. 1621, 1957B $1 Silver Certificate',
        en: 'Greysheet — Fr. 1621, 1957B $1 Silver Certificate',
        note: {
          es: 'Tipo de tamaño pequeño; unos 718.400.000 ejemplares citados.',
          en: 'Small-size type; about 718,400,000 notes cited.',
        },
      },
      {
        href: 'https://www.uscurrency.gov/history',
        es: 'U.S. Currency Education Program — History of U.S. Currency',
        en: 'U.S. Currency Education Program — History of U.S. Currency',
        note: {
          es: 'Certificados de plata desde 1878; canje en plata hasta 1968.',
          en: 'Silver certificates from 1878; redemption in silver until 1968.',
        },
      },
      {
        href: 'https://www.bep.gov/currency/history',
        es: 'Bureau of Engraving and Printing — History',
        en: 'Bureau of Engraving and Printing — History',
        note: {
          es: 'Silver Certificates desde 1878; el Gran Sello completo en el 1 dólar de 1935.',
          en: 'Silver Certificates from 1878; the full Great Seal on the 1935 $1.',
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
