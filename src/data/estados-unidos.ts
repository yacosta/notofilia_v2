import type { CatalogProsePart, CatalogSource, LocalizedText } from './catalog';
import { catalogProseText } from './catalog';
import { localizePath } from '../lib/locale-paths';

export const WHERES_GEORGE_HREF = 'https://www.wheresgeorge.com';

const miscChapterBodyParts: CatalogProsePart[] = [
  {
    text: {
      es: 'Fuera del papel de curso legal «limpio» y de las intervenciones contemporáneas sobre el 1 dólar, esta vitrina reúne piezas que no forman una serie propia: un Federal Reserve Note estampado para ',
      en: 'Outside “clean” legal-tender paper and the contemporary interventions on the $1, this case holds pieces that do not form a series of their own: a Federal Reserve Note stamped for ',
    },
  },
  {
    href: WHERES_GEORGE_HREF,
    label: { es: 'Where’s George?', en: 'Where’s George?' },
  },
  {
    text: {
      es: ', notas de prueba Giori del BEP, scrip conmemorativo y emisiones promocionales. Ya tienen ficha el 1 dólar serie 2006 del distrito de Dallas, serial K46602688C —sigue siendo curso legal, pero los sellos rojos lo documentan como objeto de un seguimiento de circulación, no como un FRN de tipo— y la nota de prueba Giori uniface del Lincoln Memorial, hacia los años 1970, sin serial. Las demás fichas se publicarán aquí a medida que se fotografíen.',
      en: ', BEP Giori test notes, commemorative scrip, and promotional issues. The Series 2006 Dallas $1, serial K46602688C — still legal tender, but documented by the red stamps as a circulation-tracking object, not as a type FRN — and the uniface Giori Lincoln Memorial test note, ca. 1970s, with no serial, already have note pages. Further note pages will be published here as they are photographed.',
    },
  },
];

export const USA_PATH = '/coleccion/estados-unidos/';
export const USA_PATH_EN = '/collection/united-states/';
export const USA_MPC_PATH = '/coleccion/estados-unidos/mpc-vietnam/';
export const USA_MPC_PATH_EN = '/collection/united-states/mpc-vietnam/';
export const USA_MISC_PATH = '/coleccion/estados-unidos/miscelaneos/';
export const USA_MISC_PATH_EN = '/collection/united-states/miscellaneous/';
export const USA_RENCY_PATH = '/coleccion/estados-unidos/rency/';
export const USA_RENCY_PATH_EN = '/collection/united-states/rency/';

export type UnitedStatesChapterId =
  | 'us-colonial'
  | 'us-obsoleto'
  | 'us-confederado'
  | 'us-notes'
  | 'us-gold'
  | 'us-silver'
  | 'us-frb'
  | 'us-pop-art'
  | 'us-miscelaneos';

export type UnitedStatesChapter = {
  id: UnitedStatesChapterId;
  years: LocalizedText;
  title: LocalizedText;
  lead: LocalizedText;
  body: LocalizedText;
  /** When set, the series page renders this as inline markup (real `<a>` tags), not a plain string. */
  bodyParts?: CatalogProsePart[];
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
      es: 'La Federal Reserve Act de 1913 creó el banco central y autorizó dos papeles: los Federal Reserve Notes, emitidos por la Junta, y los Federal Reserve Bank Notes, moneda de emergencia de cada banco distrito en el primer tercio del siglo XX. El BEP los distingue con claridad. Desde 1914 los FRN son el papel de circulación; hoy son el único tipo que se emite. En 1934 el BEP añadió la sobrecarga HAWAII a FRN y certificados de plata. Ya tienen ficha el 10 dólares de 1934 del distrito de Chicago (G / 7), serial G30986728A, el 10 dólares de 1934 A del mismo distrito, serial G74025286A, el 10 dólares de 1934 A del distrito de Cleveland (D / 4), serial D78652996A, el 10 dólares de 1934 D del distrito de Richmond (E / 5), serial E60822246B, y el 1 dólar de 2003 del distrito de Atlanta (F / 6), reemplazo con estrella F05033622★. Seguirán el 100 dólares FRBN de Minneapolis de 1929, más 10 dólares de 1934 de otros distritos, el 20 dólares de Hawái de 1934 y el 100 dólares de Cleveland de 1990. Los certificados de pago militar (MPC) de Vietnam se documentan en su propia vitrina. Los cupones USDA se documentarán junto a estas series federales.',
      en: 'The Federal Reserve Act of 1913 created the central bank and authorized two papers: Federal Reserve Notes, issued by the Board, and Federal Reserve Bank Notes, emergency currency of each district bank in the early twentieth century. The BEP draws that distinction clearly. From 1914 FRNs have been the circulating paper; today they are the only type still issued. In 1934 the BEP added the HAWAII overprint to FRNs and silver certificates. The Series 1934 Chicago (G / 7) $10, serial G30986728A, the Series 1934A $10 of the same district, serial G74025286A, the Series 1934A Cleveland (D / 4) $10, serial D78652996A, the Series 1934D Richmond (E / 5) $10, serial E60822246B, and the Series 2003 Atlanta (F / 6) $1 star replacement F05033622★ already have note pages. Still to come are the 1929 Minneapolis $100 FRBN, further 1934 $10 notes from other districts, the 1934 Hawaii $20, and the 1990 Cleveland $100. Vietnam Military Payment Certificates are documented in their own case. USDA food coupons will be documented alongside these federal series.',
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
      es: 'Intervenciones contemporáneas sobre billetes auténticos de Estados Unidos, no rediseños oficiales del BEP.',
      en: 'Contemporary interventions on genuine United States notes, not official BEP redesigns.',
    },
    body: {
      es: 'Sobre papel de curso legal —sobre todo el 1 y el 2 dólares de la Reserva Federal—, artistas contemporáneos imprimen, estampan o dibujan hasta convertir el billete en objeto de pop art. No son emisiones del Tesoro ni del BEP. En esta colección esa intervención es, sobre todo, Rency (firma manuscrita RENCY). Ya tienen ficha Pelé / The Beautiful Game, edición 5/200; Life Is Beautiful / LIFE SPRAY, también 5/200; Warhol y Basquiat / Life Is Beautiful; y Trump / Never Surrender. Pelé, LIFE SPRAY y Warhol–Basquiat muestran el serial impreso F71235101A y son objetos distintos; en Never Surrender el serial del papel no es legible bajo la superposición. Lionel Messi se documentará en la vitrina de Rency a medida que se fotografíe.',
      en: 'On legal-tender paper — chiefly the Federal Reserve $1 and $2 — contemporary artists print, stamp, or draw until the note becomes a pop-art object. These are not Treasury or BEP issues. In this collection that intervention is chiefly Rency (manuscript signature RENCY). Pelé / The Beautiful Game, edition 5/200; Life Is Beautiful / LIFE SPRAY, also 5/200; Warhol & Basquiat / Life Is Beautiful; and Trump / Never Surrender already have note pages. Pelé, LIFE SPRAY, and Warhol–Basquiat show printed serial F71235101A and are distinct objects; on Never Surrender the paper serial is not readable under the overlay. Lionel Messi will be documented in the Rency case as it is photographed.',
    },
  },
  {
    id: 'us-miscelaneos',
    years: { es: 's. XX–XXI', en: '20th–21st c.' },
    title: {
      es: 'Misceláneos',
      en: 'Miscellaneous',
    },
    lead: {
      es: 'Papel marcado en circulación, notas de prueba, scrip conmemorativo y otras piezas que no caben en las series federales ni en el pop art.',
      en: 'Marked circulating paper, test notes, commemorative scrip, and other pieces that sit outside the federal series and pop art.',
    },
    bodyParts: miscChapterBodyParts,
    body: {
      es: catalogProseText(miscChapterBodyParts, 'es'),
      en: catalogProseText(miscChapterBodyParts, 'en'),
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
      'Catálogo de papel moneda de Estados Unidos: moneda colonial, billetes obsoletos, Estados Confederados, United States Notes, certificados de oro y plata, Reserva Federal, pop art y misceláneos.',
    kicker: 'Estados Unidos · Notafilia',
    title: 'Del papel colonial a la Reserva Federal',
    heroAlt:
      'Mapa vintage de Estados Unidos sobre pergamino con los doce distritos de la Reserva Federal, un billete de 10 dólares de 1914, un pasaporte y un sello de 1913',
    intro: [
      'El papel moneda público nació en América, no en Europa. El 10 de diciembre de 1690, Massachusetts autorizó bills of credit para pagar una guerra; el U.S. Currency Education Program y el Newman Numismatic Portal lo registran como el primer papel público de Occidente. Las trece colonias siguieron el modelo. El Congreso Continental emitió Continentals en 1775: sin respaldo metálico y falsificados por el enemigo, acuñaron la frase «not worth a Continental».',
      'En el siglo XIX el comercio cotidiano corrió sobre obsolete notes de bancos estatales —broken banknotes en la jerga, catalogados por Haxby—. La American Numismatic Society sitúa el fin de esa pluralidad en la Guerra Civil: un impuesto del 10 % sobre el papel privado y la National Banking Act de 1863. Al mismo tiempo nació el papel federal —United States Notes (1862), Gold Certificates (1865) y Silver Certificates (1878)— y, en el Sur, el grayback de los Estados Confederados, sin respaldo metálico, hasta la ley del 17 de febrero de 1864.',
      'La Federal Reserve Act de 1913 creó el banco central y dos tipos de papel: Federal Reserve Notes y, como moneda de emergencia, Federal Reserve Bank Notes. El BEP dejó de entregar United States Notes en 1971; hoy solo se emiten FRN. La Segunda Guerra Mundial marcó certificados de plata y FRN con sobrecarga HAWAII y el 1 dólar 1935-A de sello amarillo para África del Norte.',
      'Esta vitrina no es un catálogo completo de la notafilia estadounidense: es el inventario de los ejemplares que se documentarán aquí, con referencias Friedberg, Haxby, Schwan, Criswell o Pick cuando existan. Ya tienen ficha el 1 dólar remainder del State Bank at New Brunswick (Haxby NJ-350 G16a), el 5 dólares confederado T-69 de 1864, serial 6164, el 20 dólares T-67, serial 74523, el 10 dólares Federal Reserve Note de 1934 del distrito de Chicago, serial G30986728A, el 10 dólares de 1934 A del mismo distrito, serial G74025286A, el 10 dólares de 1934 A del distrito de Cleveland, serial D78652996A, el 10 dólares de 1934 D del distrito de Richmond, serial E60822246B, el 1 dólar de 2003 del distrito de Atlanta, reemplazo F05033622★, el 1 dólar certificado de plata serie 1957 B, serial S35513454A, y, en Misceláneos, el 1 dólar serie 2006 del distrito de Dallas estampado para Where’s George?, serial K46602688C, y la nota de prueba Giori uniface del Lincoln Memorial, hacia los años 1970, sin serial. Las demás se publicarán como en Filipinas, a medida que se fotografíen. Caben también certificados de pago militar (MPC), cupones USDA y otras notas de prueba.',
    ],
    viewNote: 'Ver la ficha',
    viewRencyCase: 'Abrir la vitrina de Rency',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    sourcesTitle: 'Fuentes',
  },
  en: {
    metaTitle: 'United States · Federal, colonial, Confederate, and obsolete | Notofilia',
    metaDescription:
      'Catalog of United States paper money: colonial issues, obsolete notes, Confederate States, United States Notes, gold and silver certificates, the Federal Reserve, pop art, and miscellaneous issues.',
    kicker: 'United States · Notaphily',
    title: 'From colonial paper to the Federal Reserve',
    heroAlt:
      'Vintage map of the United States on parchment showing the twelve Federal Reserve districts, a 1914 ten-dollar note, a passport, and a 1913 postage stamp',
    intro: [
      'Public paper money was born in America, not in Europe. On 10 December 1690 Massachusetts authorized bills of credit to pay for a war; the U.S. Currency Education Program and the Newman Numismatic Portal record it as the first public paper in the Western world. The thirteen colonies followed. The Continental Congress issued Continentals in 1775: unbacked and counterfeited by the enemy, they coined the phrase “not worth a Continental.”',
      'In the nineteenth century everyday trade ran on obsolete notes of state banks — broken banknotes in the jargon, catalogued by Haxby. The American Numismatic Society places the end of that plurality in the Civil War: a 10 percent tax on private paper and the National Banking Act of 1863. Federal paper was born at the same time — United States Notes (1862), Gold Certificates (1865), and Silver Certificates (1878) — and, in the South, the unbacked Confederate grayback, through the act of 17 February 1864.',
      'The Federal Reserve Act of 1913 created the central bank and two kinds of paper: Federal Reserve Notes and, as emergency currency, Federal Reserve Bank Notes. The BEP stopped delivering United States Notes in 1971; today only FRNs are issued. The Second World War marked silver certificates and FRNs with the HAWAII overprint and the 1935-A yellow-seal $1 for North Africa.',
      'This case is not a complete catalog of United States notaphily: it is the inventory of the pieces that will be documented here, with Friedberg, Haxby, Schwan, Criswell, or Pick references when they exist. The State Bank at New Brunswick $1 remainder (Haxby NJ-350 G16a), the 1864 Confederate T-69 $5, serial 6164, the T-67 $20, serial 74523, the Series 1934 Chicago Federal Reserve Note $10, serial G30986728A, the Series 1934A $10 of the same district, serial G74025286A, the Series 1934A Cleveland $10, serial D78652996A, the Series 1934D Richmond $10, serial E60822246B, the Series 2003 Atlanta $1 star replacement F05033622★, the Series 1957-B $1 Silver Certificate, serial S35513454A, and, under Miscellaneous, the Series 2006 Dallas $1 stamped for Where’s George?, serial K46602688C, and the uniface Giori Lincoln Memorial test note, ca. 1970s, with no serial, already have note pages. Further pieces will be published as they are photographed, as in the Philippines case. Military Payment Certificates, USDA food coupons, and other test notes belong here as well.',
    ],
    viewNote: 'Open the note page',
    viewRencyCase: 'Open the Rency case',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    sourcesTitle: 'Sources',
  },
} as const;

export function seriesPath(locale: 'es' | 'en'): string {
  return localizePath(USA_PATH, locale);
}

export function miscSeriesPath(locale: 'es' | 'en'): string {
  return localizePath(USA_MISC_PATH, locale);
}

export function rencySeriesPath(locale: 'es' | 'en'): string {
  return localizePath(USA_RENCY_PATH, locale);
}

export const miscSeriesIntro: CatalogProsePart[][] = [
  [
    {
      text: {
        es: 'Esta vitrina reúne papel estadounidense que no cabe en las series federales ni en el pop art sobre el 1 dólar: un Federal Reserve Note marcado para un seguimiento de circulación, una nota de prueba Giori, y más adelante scrip y emisiones promocionales.',
        en: 'This case holds United States paper that does not belong in the federal series or in pop art on the $1: a Federal Reserve Note marked for circulation tracking, a Giori test note, and later scrip and promotional issues.',
      },
    },
  ],
  [
    {
      href: WHERES_GEORGE_HREF,
      label: { es: 'Where’s George?', en: 'Where’s George?' },
    },
    {
      text: {
        es: ' es un sitio web que registra el recorrido geográfico del papel moneda de Estados Unidos. Lo lanzó Hank Eskin el 23 de diciembre de 1998. El nombre apunta al retrato de George Washington en el 1 dólar. Quien tiene un billete anota la denominación, la serie, el número de serie y el código postal. Si otra persona vuelve a introducir el mismo serial, el sitio registra un «hit»: ciudad, distancia y tiempo de viaje. El propio FAQ dice que existe «por diversión y porque nadie lo había hecho». Las reglas piden circulación natural: gastar el billete en la vida cotidiana, no enviarlo por correo ni pasarlo a conocidos para fabricar hits.',
        en: ' is a website that records the geographic path of United States paper money. Hank Eskin launched it on 23 December 1998. The name points to George Washington’s portrait on the $1. Anyone holding a note enters the denomination, series, serial number, and ZIP code. When someone else later enters the same serial, the site logs a “hit”: city, distance, and travel time. The FAQ says the site exists “for fun and because it had not been done yet.” The rules ask for natural circulation: spend the note in everyday life; do not mail it or pass it to acquaintances in order to manufacture hits.',
      },
    },
  ],
  [
    {
      text: {
        es: 'Abre la vitrina el 1 dólar serie 2006 del distrito de Dallas, serial K46602688C, con sellos rojos de Where’s George? y de un «Currency Circulation Study». Sigue siendo curso legal; los sellos lo documentan como objeto de ese seguimiento, no como un FRN de tipo. Lo acompaña la nota de prueba Giori uniface del Lincoln Memorial, hacia los años 1970: verde, sin seriales ni sellos, con el reverso en blanco. No es curso legal. Las demás piezas se publicarán a medida que se fotografíen.',
        en: 'The case opens with the Series 2006 Dallas $1, serial K46602688C, with red Where’s George? stamps and a “Currency Circulation Study” mark. It remains legal tender; the stamps document it as a tracking object, not as a type FRN. Beside it is the uniface Giori Lincoln Memorial test note, ca. 1970s: green, with no serials or seals and a blank back. It is not legal tender. Further pieces will be published as they are photographed.',
      },
    },
  ],
];

const whereGeorgeHistory: CatalogProsePart[][] = [
  [
    {
      href: WHERES_GEORGE_HREF,
      label: { es: 'Where’s George?', en: 'Where’s George?' },
    },
    {
      text: {
        es: ' es un proyecto web que sigue el recorrido geográfico del papel moneda de Estados Unidos. Hank Eskin, consultor de bases de datos en Brookline, Massachusetts, lo puso en marcha el 23 de diciembre de 1998. El nombre apunta a Washington en el 1 dólar, aunque el sitio acepta también 2, 5, 10, 20, 50 y 100 dólares; el 1 concentra la mayor parte de las entradas. El mecanismo es deliberadamente simple: se anotan denominación, serie, número de serie y código postal. Si más adelante otra persona introduce el mismo serial, el sitio registra un hit —ciudad, distancia y tiempo de viaje—. El FAQ oficial responde a «¿por qué existe este sitio?» con «por diversión y porque nadie lo había hecho».',
        en: ' is a web project that follows the geographic path of United States paper money. Hank Eskin, a database consultant in Brookline, Massachusetts, launched it on 23 December 1998. The name points to Washington on the $1, though the site also accepts $2, $5, $10, $20, $50, and $100 notes; the $1 accounts for most entries. The mechanism is deliberately simple: enter denomination, series, serial number, and ZIP code. If someone later enters the same serial, the site logs a hit — city, distance, and travel time. The official FAQ answers “Why does this site exist?” with “for fun and because it had not been done yet.”',
      },
    },
  ],
  [
    {
      text: {
        es: 'El punto del sitio es documentar la circulación natural, no fabricar recorridos. Las reglas piden gastar el billete en la vida cotidiana y prohíben enviarlo por correo o pasarlo a conocidos para generar hits. Los sellos y la escritura en el papel —como los de esta pieza— son el reclamo para que el siguiente tenedor visite ',
        en: 'The point of the site is to document natural circulation, not to manufacture itineraries. The rules ask users to spend the note in everyday life and forbid mailing it or passing it to acquaintances in order to generate hits. Stamps and writing on the paper — as on this piece — are the prompt for the next holder to visit ',
      },
    },
    {
      href: WHERES_GEORGE_HREF,
      label: { es: 'www.wheresgeorge.com', en: 'www.wheresgeorge.com' },
    },
    {
      text: {
        es: ' e introduzca el serial. En 2006, Dirk Brockmann, Lars Hufnagel y Theo Geisel usaron ese registro en Nature como proxy del desplazamiento humano en Estados Unidos. Esta ficha describe el objeto físico y el proyecto; no republica el mapa de hits del serial K46602688C.',
        en: ' and enter the serial. In 2006 Dirk Brockmann, Lars Hufnagel, and Theo Geisel used that register in Nature as a proxy for human travel in the United States. This record describes the physical object and the project; it does not republish the hit map for serial K46602688C.',
      },
    },
  ],
];

export const miscSeriesCopy = {
  es: {
    metaTitle: 'Estados Unidos · Misceláneos | Notofilia',
    metaDescription:
      'Vitrina miscelánea de Estados Unidos: el 1 dólar serie 2006 de Dallas estampado para Where’s George?, serial K46602688C, y la nota de prueba Giori del Lincoln Memorial, hacia los años 1970.',
    kicker: 'Estados Unidos · Misceláneos',
    title: 'Fuera de las series federales',
    breadcrumbCurrent: 'Misceláneos',
    parentLink: 'Estados Unidos',
    heroAlt:
      'Mapa vintage de Estados Unidos sobre pergamino con los doce distritos de la Reserva Federal, un billete de 10 dólares de 1914, un pasaporte y un sello de 1913',
    intro: miscSeriesIntro.map((paragraph) => catalogProseText(paragraph, 'es')),
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    sourcesTitle: 'Fuentes',
    holdingsLabel: 'En esta vitrina',
  },
  en: {
    metaTitle: 'United States · Miscellaneous | Notofilia',
    metaDescription:
      'United States miscellaneous case: the Series 2006 Dallas $1 stamped for Where’s George?, serial K46602688C, and the Giori Lincoln Memorial test note, ca. 1970s.',
    kicker: 'United States · Miscellaneous',
    title: 'Outside the federal series',
    breadcrumbCurrent: 'Miscellaneous',
    parentLink: 'United States',
    heroAlt:
      'Vintage map of the United States on parchment showing the twelve Federal Reserve districts, a 1914 ten-dollar note, a passport, and a 1913 postage stamp',
    intro: miscSeriesIntro.map((paragraph) => catalogProseText(paragraph, 'en')),
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    sourcesTitle: 'Sources',
    holdingsLabel: 'In this case',
  },
} as const;

export const miscSeriesSources: CatalogSource[] = [
  {
    href: 'https://www.wheresgeorge.com/',
    es: 'Where’s George? — sitio oficial',
    en: 'Where’s George? — official site',
    note: {
      es: 'Seguimiento de serial y código postal; un hit es una reentrada posterior del mismo billete.',
      en: 'Serial and ZIP tracking; a hit is a later re-entry of the same note.',
    },
  },
  {
    href: 'https://www.wheresgeorge.com/faq-rules-privacy.php',
    es: 'Where’s George? — FAQ y reglas',
    en: 'Where’s George? — FAQ and rules',
    note: {
      es: 'Lanzamiento el 23 de diciembre de 1998; circulación natural; el sitio existe «por diversión y porque nadie lo había hecho».',
      en: 'Launched 23 December 1998; natural circulation; the site exists “for fun and because it had not been done yet.”',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/Where%27s_George%3F',
    es: 'Wikipedia — Where’s George?',
    en: 'Wikipedia — Where’s George?',
    note: {
      es: 'Hank Eskin; el 1 dólar es la denominación más registrada; los datos se han usado para estudiar la movilidad.',
      en: 'Hank Eskin; the $1 is the most recorded denomination; the data have been used to study mobility.',
    },
  },
  {
    href: 'https://www.nature.com/articles/nature04292',
    es: 'Brockmann, Hufnagel y Geisel — The scaling laws of human travel (Nature, 2006)',
    en: 'Brockmann, Hufnagel and Geisel — The scaling laws of human travel (Nature, 2006)',
    note: {
      es: 'Usan el registro de Where’s George? como proxy del desplazamiento humano en Estados Unidos.',
      en: 'Uses the Where’s George? register as a proxy for human travel in the United States.',
    },
  },
  {
    href: 'https://www.coinbooks.org/esylum_v15n53a10.html',
    es: 'The E-Sylum — American Can Company and the Giori test notes (vol. 15, n.º 53)',
    en: 'The E-Sylum — American Can Company and the Giori test notes (vol. 15, no. 53)',
    note: {
      es: 'Gualtiero Giori; pruebas de Ginebra (Nueva York) hacia los años 1970; planchas «nonsense» del BEP; la posesión privada se legalizó más tarde.',
      en: 'Gualtiero Giori; Geneva, New York trials in the 1970s; BEP nonsense plates; private ownership later made legal.',
    },
  },
];

export const rencySeriesCopy = {
  es: {
    metaTitle: 'Estados Unidos · Rency | Notofilia',
    metaDescription:
      'Vitrina de pop art de Rency sobre billetes auténticos de Estados Unidos: Pelé / The Beautiful Game, Life Is Beautiful / LIFE SPRAY, Warhol y Basquiat / Life Is Beautiful, y Trump / Never Surrender.',
    kicker: 'Estados Unidos · Pop art',
    title: 'Rency sobre papel de curso legal',
    breadcrumbCurrent: 'Rency',
    parentLink: 'Estados Unidos',
    heroAlt:
      'Mapa vintage de Estados Unidos sobre pergamino con los doce distritos de la Reserva Federal, un billete de 10 dólares de 1914, un pasaporte y un sello de 1913',
    intro: [
      'Rency —de currency; en las piezas suele firmar en mayúsculas RENCY— es un artista de pop y street art estadounidense que interviene billetes auténticos. Trabaja de forma anónima. Las comparaciones con Banksy que aparecen en fichas de dealers son marketing, no un hecho documentado. No es Rency Punnoose, diseñador de otro oficio.',
      'El soporte es papel de curso legal, no un rediseño del BEP ni una emisión del Tesoro: sobre todo el 1 y el 2 dólares de la Reserva Federal. El 2 dólares FRN volvió en 1976, en el 233.º aniversario de Jefferson, después de que el United States Note de esa denominación se detuviera en 1966.',
      'La vitrina reúne Pelé / The Beautiful Game, edición 5/200 —anverso de un 1 dólar con superposición pop y reverso de un 2 dólares, plancha 52—; Life Is Beautiful / LIFE SPRAY, también 5/200 —ocho latas LIFE SPRAY sobre un 1 dólar y reverso de un 2 dólares—; Warhol y Basquiat / Life Is Beautiful, un 2 dólares intervenido por ambas caras, plancha 23, con firma manuscrita Rency y sin fracción de edición; y Trump / Never Surrender, collage vertical del mugshot de Fulton County de 2023 sobre el reverso de un 2 dólares fotografiado en vertical, también con firma manuscrita Rency y sin fracción de edición. Pelé, LIFE SPRAY y Warhol–Basquiat muestran el serial impreso F71235101A; no son el mismo objeto. En Never Surrender el serial del papel no es legible. Lionel Messi se documentará aquí a medida que se fotografíe.',
    ],
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    sourcesTitle: 'Fuentes',
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Cada pieza tiene su propia ficha, con anverso, reverso y el serial del papel subyacente cuando es legible.',
    emptyHoldings:
      'Aún no hay fichas en esta vitrina. Se documentarán aquí cuando se suban las imágenes.',
  },
  en: {
    metaTitle: 'United States · Rency | Notofilia',
    metaDescription:
      'Rency pop-art case on genuine United States notes: Pelé / The Beautiful Game, Life Is Beautiful / LIFE SPRAY, Warhol & Basquiat / Life Is Beautiful, and Trump / Never Surrender.',
    kicker: 'United States · Pop art',
    title: 'Rency on legal-tender paper',
    breadcrumbCurrent: 'Rency',
    parentLink: 'United States',
    heroAlt:
      'Vintage map of the United States on parchment showing the twelve Federal Reserve districts, a 1914 ten-dollar note, a passport, and a 1913 postage stamp',
    intro: [
      'Rency — from currency; on these pieces the artist often signs in capitals RENCY — is an anonymous United States pop and street artist who works on genuine notes. Dealer copy that likens the work to Banksy is marketing, not a documented fact. This is not Rency Punnoose, a designer in another field.',
      'The substrate is legal-tender paper, not a BEP redesign or a Treasury issue: chiefly the Federal Reserve $1 and $2. The $2 FRN returned in 1976, on the 233rd anniversary of Jefferson’s birth, after the United States Note of that denomination had been halted in 1966.',
      'The case holds Pelé / The Beautiful Game, edition 5/200 — a $1 face with a pop overlay and a $2 reverse, plate 52 —; Life Is Beautiful / LIFE SPRAY, also 5/200, with eight LIFE SPRAY cans and a $2 reverse; Warhol & Basquiat / Life Is Beautiful, a $2 intervened on both faces, plate 23, with a manuscript Rency signature and no edition fraction; and Trump / Never Surrender, a vertical collage of the 2023 Fulton County mugshot on a $2 reverse photographed upright, also with a manuscript Rency and no edition fraction. Pelé, LIFE SPRAY, and Warhol–Basquiat show printed serial F71235101A; they are not the same object. On Never Surrender the paper serial is not readable. Lionel Messi will be documented here as it is photographed.',
    ],
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    sourcesTitle: 'Sources',
    holdingsTitle: 'Notes in the collection',
    holdingsIntro:
      'Each piece has its own record, with face, back, and the serial of the underlying paper when it is readable.',
    emptyHoldings:
      'There are no note pages in this case yet. They will be documented here when the images are uploaded.',
  },
} as const;

export const rencySeriesSources: CatalogSource[] = [
  {
    href: 'https://www.uscurrency.gov/denominations/1',
    es: 'U.S. Currency Education Program — 1-dollar note',
    en: 'U.S. Currency Education Program — $1 note',
    note: {
      es: 'Washington y el Gran Sello; el anverso de Pelé / The Beautiful Game y el de Life Is Beautiful / LIFE SPRAY parten de este tipo.',
      en: 'Washington and the Great Seal; the faces of Pelé / The Beautiful Game and Life Is Beautiful / LIFE SPRAY start from this type.',
    },
  },
  {
    href: 'https://www.uscurrency.gov/denominations/2',
    es: 'U.S. Currency Education Program — 2-dollar note',
    en: 'U.S. Currency Education Program — 2-dollar note',
    note: {
      es: 'El FRN de 2 dólares se reanudó en 1976; Pelé / The Beautiful Game y Life Is Beautiful / LIFE SPRAY usan el reverso de Trumbull; Warhol y Basquiat / Life Is Beautiful usa ambas caras de este tipo, y Trump / Never Surrender también usa el reverso de Trumbull.',
      en: 'The $2 FRN resumed in 1976; Pelé / The Beautiful Game and Life Is Beautiful / LIFE SPRAY use Trumbull’s reverse; Warhol & Basquiat / Life Is Beautiful uses both faces of this type, and Trump / Never Surrender also uses Trumbull’s reverse.',
    },
  },
  {
    href: 'https://www.bep.gov/currency/history',
    es: 'Bureau of Engraving and Printing — History',
    en: 'Bureau of Engraving and Printing — History',
    note: {
      es: 'Contexto de la imprenta federal; las intervenciones de Rency no son emisiones del BEP.',
      en: 'Context for the federal printer; Rency interventions are not BEP issues.',
    },
  },
  {
    href: 'https://en.wikipedia.org/wiki/United_States_two-dollar_bill',
    es: 'Wikipedia — United States two-dollar bill',
    en: 'Wikipedia — United States two-dollar bill',
    note: {
      es: 'United States Note de 2 dólares hasta 1966; FRN desde 1976 con el reverso de Trumbull.',
      en: 'United States Note $2 through 1966; FRN from 1976 with the Trumbull reverse.',
    },
  },
];

export type UnitedStatesNoteId =
  | '1-dolar-state-bank-new-brunswick'
  | '1-dolar-serie-2003-atlanta'
  | '5-dolares-confederados-1864'
  | '20-dolares-confederados-1864'
  | '10-dolares-serie-1934-chicago'
  | '10-dolares-serie-1934a-chicago'
  | '10-dolares-serie-1934a-cleveland'
  | '10-dolares-serie-1934d-richmond'
  | '1-dolar-certificado-plata-1957b'
  | '1-dolar-serie-2006-dallas-wheres-george'
  | 'nota-prueba-giori-lincoln-memorial'
  | 'renci-pele-the-beautiful-game'
  | 'renci-warhol-basquiat-life-is-beautiful'
  | 'renci-trump-never-surrender'
  | 'renci-life-is-beautiful-life-spray';

export type UnitedStatesNote = {
  id: UnitedStatesNoteId;
  chapterId: UnitedStatesChapterId;
  path: string;
  pathEn: string;
  pick: string;
  serial: string;
  /** Required when no serial was printed (proofs, uniface tests). */
  no_serial_reason?: string;
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
  history?: LocalizedText | LocalizedText[] | CatalogProsePart[][];
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
    id: '10-dolares-serie-1934a-cleveland',
    chapterId: 'us-frb',
    path: '/coleccion/estados-unidos/10-dolares-serie-1934a-cleveland/',
    pathEn: '/collection/united-states/10-dollars-series-1934a-cleveland/',
    pick: 'P#430Da · Fr. 2006-D',
    serial: 'D78652996A',
    signatures: {
      es: 'W. A. Julian (tesorero) y Henry Morgenthau Jr. (secretario del Tesoro)',
      en: 'W. A. Julian (Treasurer) and Henry Morgenthau Jr. (Secretary of the Treasury)',
    },
    printed: {
      es: 'Tipo común del distrito de Cleveland. La serie 1934 A es la segunda de las cinco emisiones 1934–1934D; esta ficha no inventa una tirada por bloque de serie.',
      en: 'A common Cleveland-district type. Series 1934A is the second of the five 1934–1934D issues; this record does not invent a printage by serial block.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/frn-1934a-10-cleveland-d78652996-composite.jpg',
      front: '/images/catalog/estados-unidos/frn-1934a-10-cleveland-d78652996-front.jpg',
      back: '/images/catalog/estados-unidos/frn-1934a-10-cleveland-d78652996-back.jpg',
      width: 1440,
      height: 960,
    },
    title: {
      es: '10 dólares · Serie 1934 A · Cleveland',
      en: '$10 · Series 1934A · Cleveland',
    },
    kicker: {
      es: 'Estados Unidos · Federal Reserve Note',
      en: 'United States · Federal Reserve Note',
    },
    lead: {
      es: 'Anverso con Hamilton y sello verde del Tesoro; reverso con el edificio del Tesoro. Distrito D / 4. Serie 1934 A, serial D78652996A.',
      en: 'Face with Hamilton and a green Treasury seal; back with the Treasury building. District D / 4. Series 1934A, serial D78652996A.',
    },
    description: {
      es: 'El 10 dólares de la serie 1934 A (Pick 430Da, Friedberg 2006-D) es un Federal Reserve Note de tamaño pequeño del distrito de Cleveland: sello circular con la D, el 4 en las cuatro esquinas interiores, y el banco «FEDERAL RESERVE BANK OF CLEVELAND OHIO». El anverso, en negro con sello y seriales verdes, lleva el retrato de Alexander Hamilton en óvalo y, a la derecha, el sello del Tesoro sobre la palabra TEN. Las firmas son las de W. A. Julian y Henry Morgenthau Jr., las mismas de la serie 1934 sin letra. El texto de curso legal aún promete el canje «in lawful money» en el Tesoro o en cualquier banco de la Reserva. La plancha de anverso J120, en cuerpo macro, queda abajo a la derecha. El reverso, en verde, muestra el edificio del Tesoro en Washington, D.C., con un automóvil de entreguerras frente a la fachada; el número de plancha 949 queda junto al borde interior derecho. Esta pieza de la colección, circulada y sin encapsular, se presenta en funda y lleva el serial D78652996A (bloque DA). No lleva la sobrecarga HAWAII ni el lema «IN GOD WE TRUST». No es el 10 dólares de 1934 (sin A) del distrito de Chicago, serial G30986728A, ni el 10 dólares de 1934 A de ese mismo distrito, serial G74025286A: los distingue el serial y el distrito (D / 4 Cleveland frente a G / 7 Chicago).',
      en: 'The Series 1934A $10 (Pick 430Da, Friedberg 2006-D) is a small-size Federal Reserve Note of the Cleveland district: a circular seal with D, 4s in the four inner corners, and the bank legend “FEDERAL RESERVE BANK OF CLEVELAND OHIO.” The black face with green seal and serials carries Alexander Hamilton in an oval and, at right, the Treasury seal over TEN. The signatures are W. A. Julian and Henry Morgenthau Jr., the same pair as on Series 1934 without a letter. The legal-tender clause still promises redemption “in lawful money” at the Treasury or any Federal Reserve Bank. Face plate J120, in macro size, sits at lower right. The green back shows the Treasury building in Washington, D.C., with an interwar automobile before the façade; plate number 949 sits near the right inner border. This collection piece, circulated and unslabbed, is shown in a sleeve and is serial D78652996A (DA block). It has neither the HAWAII overprint nor the motto “IN GOD WE TRUST.” It is not the Series 1934 (no letter) Chicago $10, serial G30986728A, nor the Series 1934A $10 of that same district, serial G74025286A: serial and district distinguish them (D / 4 Cleveland versus G / 7 Chicago).',
    },
    history: [
      {
        es: 'La serie 1934 A del 10 dólares conserva las firmas Julian–Morgenthau y el mismo grabado de Hamilton. El cambio que la distingue de la serie 1934 es tipográfico: los números de plancha pasan de micro a macro. The Paper Money Project sitúa esa transición en la 1934 A; un mule nace cuando una cara macro se casa con un reverso micro, o al revés. Las 1934 A llevan sello verde oscuro (DGS / BGS), no el amarillo-verde claro de las primeras 1934.',
        en: 'Series 1934A $10 notes keep the Julian–Morgenthau signatures and the same Hamilton engraving. What sets them apart from Series 1934 is typographic: plate numbers grow from micro to macro. The Paper Money Project places that change on 1934A; a mule is a macro face paired with a micro back, or the reverse. Series 1934A notes carry the dark (blue-green) seal, not the yellow-green of the earliest 1934 printings.',
      },
      {
        es: 'La producción de la 1934 A cubrió los años de la guerra. El Bank Note Museum la numera P-430Da dentro del grupo de sello oscuro. Cleveland es el distrito D / 4. Esta pieza, bloque DA, no es un reemplazo con estrella ni un HAWAII. El lema «IN GOD WE TRUST» aún no figura en el reverso.',
        en: '1934A production ran through the war years. The Bank Note Museum numbers the type P-430Da in the dark-seal group. Cleveland is district D / 4. This DA-block piece is neither a star replacement nor a HAWAII note. The motto “IN GOD WE TRUST” is not yet on the back.',
      },
    ],
    historyHeading: {
      es: 'La serie 1934 A',
      en: 'Series 1934A',
    },
    frontCaption: {
      es: 'Anverso del 10 dólares, serie 1934 A, distrito de Cleveland, serial D78652996A: Hamilton, sello verde del Tesoro y plancha J120.',
      en: 'Face of the Series 1934A $10, Cleveland district, serial D78652996A: Hamilton, the green Treasury seal, and plate J120.',
    },
    backCaption: {
      es: 'Reverso del 10 dólares, serie 1934 A: edificio del Tesoro y TEN DOLLARS. Plancha 949. Sin lema IN GOD WE TRUST.',
      en: 'Back of the Series 1934A $10: the Treasury building and TEN DOLLARS. Plate 949. No IN GOD WE TRUST motto.',
    },
    scarcity: {
      es: 'La serie 1934 A del 10 dólares —firmas Julian–Morgenthau, sello verde oscuro, los doce distritos— es el papel cotidiano de la Reserva en la guerra. El Bank Note Museum la numera P-430Da. Fr. 2006-D cubre Cleveland. El tipo es común en estados medios; las claves son los reemplazos con estrella, los mulas de plancha y el 20 dólares HAWAII, que se documentará aparte. Esta ficha no inventa una tirada por bloque.',
      en: 'Series 1934A $10 notes — Julian–Morgenthau signatures, dark-green seal, all twelve districts — were everyday Reserve paper during the war. The Bank Note Museum numbers the type P-430Da. Fr. 2006-D is Cleveland. The type is common in mid grades; the keys are star replacements, plate mules, and the HAWAII $20, which will be documented separately. This record does not invent a printage by block.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial D78652996A. La pieza se presenta en funda, circulada, sin encapsular.',
      en: 'A PMG or PCGS census for serial D78652996A has not been independently verified. The note is shown in a sleeve, circulated, unslabbed.',
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
          es: '430Da: serie 1934 A, firmas Julian y Morgenthau; distrito D = Cleveland; sello verde oscuro.',
          en: '430Da: Series 1934A, Julian and Morgenthau signatures; district D = Cleveland; dark-green seal.',
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
        href: 'https://www.greysheet.com/prices/item/fr-2006d-1934a-ten-dollar-federal-reserve-note-small-size/gsid/63227',
        es: 'Greysheet — Fr. 2006D, 1934A $10 Federal Reserve Note, Cleveland',
        en: 'Greysheet — Fr. 2006D, 1934A $10 Federal Reserve Note, Cleveland',
        note: {
          es: 'Tipo de tamaño pequeño, sello verde oscuro, distrito de Cleveland.',
          en: 'Small-size type, dark-green seal, Cleveland district.',
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
    id: '10-dolares-serie-1934d-richmond',
    chapterId: 'us-frb',
    path: '/coleccion/estados-unidos/10-dolares-serie-1934d-richmond/',
    pathEn: '/collection/united-states/10-dollars-series-1934d-richmond/',
    pick: 'P#430Dd · Fr. 2009-E',
    serial: 'E60822246B',
    signatures: {
      es: 'Georgia Neese Clark (tesorera) y John W. Snyder (secretario del Tesoro)',
      en: 'Georgia Neese Clark (Treasurer) and John W. Snyder (Secretary of the Treasury)',
    },
    printed: {
      es: 'Tipo común del distrito de Richmond. La serie 1934 D es la quinta de las cinco emisiones 1934–1934D; esta ficha no inventa una tirada por bloque de serie.',
      en: 'A common Richmond-district type. Series 1934D is the fifth of the five 1934–1934D issues; this record does not invent a printage by serial block.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/frn-1934d-10-richmond-e60822246-composite.jpg',
      front: '/images/catalog/estados-unidos/frn-1934d-10-richmond-e60822246-front.jpg',
      back: '/images/catalog/estados-unidos/frn-1934d-10-richmond-e60822246-back.jpg',
      width: 1440,
      height: 960,
    },
    title: {
      es: '10 dólares · Serie 1934 D · Richmond',
      en: '$10 · Series 1934D · Richmond',
    },
    kicker: {
      es: 'Estados Unidos · Federal Reserve Note',
      en: 'United States · Federal Reserve Note',
    },
    lead: {
      es: 'Anverso con Hamilton y sello verde del Tesoro; reverso con el edificio del Tesoro. Distrito E / 5. Serie 1934 D, serial E60822246B.',
      en: 'Face with Hamilton and a green Treasury seal; back with the Treasury building. District E / 5. Series 1934D, serial E60822246B.',
    },
    description: {
      es: 'El 10 dólares de la serie 1934 D (Pick 430Dd, Friedberg 2009-E) es un Federal Reserve Note de tamaño pequeño del distrito de Richmond: sello circular con la E, el 5 en las cuatro esquinas interiores, y el banco «FEDERAL RESERVE BANK OF RICHMOND VIRGINIA». El anverso, en negro con sello y seriales verdes, lleva el retrato de Alexander Hamilton en óvalo y, a la derecha, el sello del Tesoro sobre la palabra TEN. Las firmas son las de Georgia Neese Clark y John W. Snyder, distintas de las Julian–Morgenthau de las series 1934 y 1934 A. El texto de curso legal aún promete el canje «in lawful money» en el Tesoro o en cualquier banco de la Reserva. La plancha de anverso F155 queda abajo a la derecha; la letra de control F se lee encima del sello de la Reserva. El reverso, en verde, muestra el edificio del Tesoro en Washington, D.C., con un automóvil de entreguerras frente a la fachada; el número de plancha 1297 queda abajo a la derecha de la viñeta. Esta pieza de la colección, circulada y sin encapsular, se presenta en funda y lleva el serial E60822246B (bloque EB). No lleva la sobrecarga HAWAII ni el lema «IN GOD WE TRUST». No es el 10 dólares de 1934 (sin letra) de Chicago, serial G30986728A, ni el 10 dólares de 1934 A de ese distrito, serial G74025286A, ni el 10 dólares de 1934 A de Cleveland, serial D78652996A: los distinguen la letra de serie D, el distrito E / 5, las firmas Clark–Snyder y este serial.',
      en: 'The Series 1934D $10 (Pick 430Dd, Friedberg 2009-E) is a small-size Federal Reserve Note of the Richmond district: a circular seal with E, 5s in the four inner corners, and the bank legend “FEDERAL RESERVE BANK OF RICHMOND VIRGINIA.” The black face with green seal and serials carries Alexander Hamilton in an oval and, at right, the Treasury seal over TEN. The signatures are Georgia Neese Clark and John W. Snyder, not the Julian–Morgenthau pair of Series 1934 and 1934A. The legal-tender clause still promises redemption “in lawful money” at the Treasury or any Federal Reserve Bank. Face plate F155 sits at lower right; check letter F sits above the Reserve seal. The green back shows the Treasury building in Washington, D.C., with an interwar automobile before the façade; plate number 1297 sits at the lower right of the vignette. This collection piece, circulated and unslabbed, is shown in a sleeve and is serial E60822246B (EB block). It has neither the HAWAII overprint nor the motto “IN GOD WE TRUST.” It is not the Series 1934 (no letter) Chicago $10, serial G30986728A, nor the Series 1934A $10 of that district, serial G74025286A, nor the Series 1934A Cleveland $10, serial D78652996A: the series letter D, district E / 5, Clark–Snyder signatures, and this serial distinguish it.',
    },
    history: [
      {
        es: 'La serie 1934 D cierra las cinco emisiones 1934–1934D del 10 dólares. El Bank Note Museum la numera P-430Dd: firmas Clark y Snyder, sello verde oscuro. Georgia Neese Clark, tesorera desde 1949, sustituye a W. A. Julian; Snyder permanece como secretario. The Paper Money Project sitúa la 1934 D en el grupo de planchas macro y, en muchos distritos, en el formato estrecho. Esta ficha no inventa una tirada por bloque.',
        en: 'Series 1934D closes the five 1934–1934D $10 issues. The Bank Note Museum numbers it P-430Dd: Clark and Snyder signatures, dark-green seal. Georgia Neese Clark, Treasurer from 1949, replaces W. A. Julian; Snyder remains Secretary. The Paper Money Project places 1934D in the macro-plate group and, in many districts, on the narrow format. This record does not invent a printage by block.',
      },
      {
        es: 'Richmond es el distrito E / 5. Esta pieza, bloque EB, no es un reemplazo con estrella ni un HAWAII. El lema «IN GOD WE TRUST» aún no figura en el reverso. La plancha de anverso es F155; la del reverso, 1297.',
        en: 'Richmond is district E / 5. This EB-block piece is neither a star replacement nor a HAWAII note. The motto “IN GOD WE TRUST” is not yet on the back. The face plate is F155; the back plate is 1297.',
      },
    ],
    historyHeading: {
      es: 'La serie 1934 D',
      en: 'Series 1934D',
    },
    frontCaption: {
      es: 'Anverso del 10 dólares, serie 1934 D, distrito de Richmond, serial E60822246B: Hamilton, sello verde del Tesoro y plancha F155.',
      en: 'Face of the Series 1934D $10, Richmond district, serial E60822246B: Hamilton, the green Treasury seal, and plate F155.',
    },
    backCaption: {
      es: 'Reverso del 10 dólares, serie 1934 D: edificio del Tesoro y TEN DOLLARS. Plancha 1297. Sin lema IN GOD WE TRUST.',
      en: 'Back of the Series 1934D $10: the Treasury building and TEN DOLLARS. Plate 1297. No IN GOD WE TRUST motto.',
    },
    scarcity: {
      es: 'La serie 1934 D del 10 dólares —firmas Clark–Snyder, sello verde oscuro, los doce distritos— es el papel cotidiano de la Reserva de la posguerra. El Bank Note Museum la numera P-430Dd. Fr. 2009-E cubre Richmond. El tipo es común en estados medios; las claves son los reemplazos con estrella, los mulas de plancha y el 20 dólares HAWAII, que se documentará aparte. Esta ficha no inventa una tirada por bloque.',
      en: 'Series 1934D $10 notes — Clark–Snyder signatures, dark-green seal, all twelve districts — were everyday Reserve paper after the war. The Bank Note Museum numbers the type P-430Dd. Fr. 2009-E is Richmond. The type is common in mid grades; the keys are star replacements, plate mules, and the HAWAII $20, which will be documented separately. This record does not invent a printage by block.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial E60822246B. La pieza se presenta en funda, circulada, sin encapsular.',
      en: 'A PMG or PCGS census for serial E60822246B has not been independently verified. The note is shown in a sleeve, circulated, unslabbed.',
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
          es: '430Dd: serie 1934 D, firmas Clark y Snyder; distrito E = Richmond; sello verde oscuro.',
          en: '430Dd: Series 1934D, Clark and Snyder signatures; district E = Richmond; dark-green seal.',
        },
      },
      {
        href: 'https://www.papermoneyproject.com/10-frn',
        es: 'The Paper Money Project — Federal Reserve Notes de 10 dólares, serie 1934',
        en: 'The Paper Money Project — Series 1934 $10 Federal Reserve Notes',
        note: {
          es: 'Cinco series (1934–1934D); la 1934 D cierra el grupo con firmas Clark–Snyder y planchas macro.',
          en: 'Five series (1934–1934D); 1934D closes the group with Clark–Snyder signatures and macro plates.',
        },
      },
      {
        href: 'https://www.greysheet.com/prices/item/fr-2009e-1934d-ten-dollar-federal-reserve-note-small-size/gsid/63560',
        es: 'Greysheet — Fr. 2009E, 1934D $10 Federal Reserve Note, Richmond',
        en: 'Greysheet — Fr. 2009E, 1934D $10 Federal Reserve Note, Richmond',
        note: {
          es: 'Tipo de tamaño pequeño, sello verde oscuro, distrito de Richmond.',
          en: 'Small-size type, dark-green seal, Richmond district.',
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
  {
    id: '1-dolar-serie-2006-dallas-wheres-george',
    chapterId: 'us-miscelaneos',
    path: '/coleccion/estados-unidos/miscelaneos/1-dolar-serie-2006-dallas-wheres-george/',
    pathEn: '/collection/united-states/miscellaneous/1-dollar-series-2006-dallas-wheres-george/',
    pick: 'P#523a · Fr. 1933-K',
    serial: 'K46602688C',
    signatures: {
      es: 'Anna Escobedo Cabral (tesorera) y Henry M. Paulson, Jr. (secretario del Tesoro)',
      en: 'Anna Escobedo Cabral (Treasurer) and Henry M. Paulson, Jr. (Secretary of the Treasury)',
    },
    printed: {
      es: 'BEP. USPaperMoney.Info sitúa la serie 2006 del 1 dólar entre marzo de 2007 y noviembre de 2010 (firmas Cabral–Paulson). Dallas imprimió 569.600.000 notas ordinarias en seis bloques. El serial K46602688C (bloque KC) cae en la producción de marzo de 2008 de ese distrito. Esta ficha no inventa una tirada solo para el bloque KC.',
      en: 'BEP. USPaperMoney.Info places Series 2006 $1 notes from March 2007 through November 2010 (Cabral–Paulson signatures). Dallas printed 569,600,000 regular notes in six blocks. Serial K46602688C (KC block) falls in that district’s March 2008 production. This record does not invent a printage for the KC block alone.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/frn-2006-1-dallas-k46602688-composite.jpg',
      front: '/images/catalog/estados-unidos/frn-2006-1-dallas-k46602688-front.jpg',
      back: '/images/catalog/estados-unidos/frn-2006-1-dallas-k46602688-back.jpg',
      width: 1440,
      height: 960,
    },
    title: {
      es: '1 dólar · Serie 2006 · Dallas · Where’s George?',
      en: '$1 · Series 2006 · Dallas · Where’s George?',
    },
    kicker: {
      es: 'Estados Unidos · Misceláneos · Where’s George?',
      en: 'United States · Miscellaneous · Where’s George?',
    },
    lead: {
      es: 'Federal Reserve Note de 1 dólar, serie 2006, distrito de Dallas (K / 11), serial K46602688C, con sellos rojos de Where’s George? para seguir su circulación.',
      en: 'A Series 2006 $1 Federal Reserve Note of the Dallas district (K / 11), serial K46602688C, with red Where’s George? stamps that ask finders to track its circulation.',
    },
    description: {
      es: 'El 1 dólar de la serie 2006 (Pick 523a, Friedberg 1933-K) es un Federal Reserve Note de tamaño pequeño del distrito de Dallas: sello negro con la K, el 11 en las cuatro esquinas interiores, y el banco «FEDERAL RESERVE BANK OF DALLAS TEXAS». El anverso, en negro con sello y seriales verdes, lleva el retrato de George Washington en óvalo y, a la derecha, el sello del Tesoro sobre ONE. Las firmas son las de Anna Escobedo Cabral y Henry M. Paulson, Jr.; la serie impresa, 2006, queda junto al secretario. Los seriales K 46602688 C se repiten abajo a la izquierda y arriba a la derecha (bloque KC). El reverso, en verde, muestra ambas caras del Gran Sello —la pirámide y el águila— flanqueando ONE, con IN GOD WE TRUST encima. Sobre ese tipo cotidiano, un tenedor anterior aplicó sellos en tinta roja que no son del BEP ni del Tesoro: a la derecha del retrato, un sello circular «Track this bill» / www.wheresgeorge.com; junto a él, «Currency Circulation Study / FM B 70»; a la izquierda, un pictograma de pavo; en los márgenes del reverso, «FOLLOW MY JOURNEY AT» y www.WHERESGEORGE.com en vertical. Esta pieza de la colección, circulada y sin encapsular, se presenta en funda, con manchas de foxing en los bordes. No es el 1 dólar de 2003 de Atlanta con estrella, serial F05033622★: los distinguen la serie 2006, el distrito K / 11, las firmas Cabral–Paulson, este serial y los sellos.',
      en: 'The Series 2006 $1 (Pick 523a, Friedberg 1933-K) is a small-size Federal Reserve Note of the Dallas district: a black seal with K, 11s in the four inner corners, and the bank legend “FEDERAL RESERVE BANK OF DALLAS TEXAS.” The black face with green seal and serials carries George Washington in an oval and, at right, the Treasury seal over ONE. The signatures are Anna Escobedo Cabral and Henry M. Paulson, Jr.; the printed series, 2006, sits beside the Secretary. Serials K 46602688 C repeat at lower left and upper right (KC block). The green back shows both faces of the Great Seal — the pyramid and the eagle — flanking ONE, with IN GOD WE TRUST above. On that everyday type a previous holder applied red-ink stamps that are neither BEP nor Treasury work: to the right of the portrait, a circular “Track this bill” / www.wheresgeorge.com stamp; beside it, “Currency Circulation Study / FM B 70”; at left, a turkey pictogram; on the back margins, vertical “FOLLOW MY JOURNEY AT” and www.WHERESGEORGE.com. This collection piece, circulated and unslabbed, is shown in a sleeve, with foxing along the edges. It is not the Series 2003 Atlanta star $1, serial F05033622★: Series 2006, district K / 11, Cabral–Paulson signatures, this serial, and the stamps distinguish it.',
    },
    history: whereGeorgeHistory,
    historyHeading: {
      es: 'Where’s George?',
      en: 'Where’s George?',
    },
    frontCaption: {
      es: 'Anverso del 1 dólar, serie 2006, distrito de Dallas, serial K46602688C: Washington, sello verde del Tesoro y sellos rojos de Where’s George?.',
      en: 'Face of the Series 2006 $1, Dallas district, serial K46602688C: Washington, the green Treasury seal, and red Where’s George? stamps.',
    },
    backCaption: {
      es: 'Reverso del 1 dólar, serie 2006: el Gran Sello y, en los márgenes, FOLLOW MY JOURNEY AT / www.WHERESGEORGE.com.',
      en: 'Back of the Series 2006 $1: the Great Seal and, in the margins, FOLLOW MY JOURNEY AT / www.WHERESGEORGE.com.',
    },
    scarcity: {
      es: 'La serie 2006 del 1 dólar —firmas Cabral–Paulson, los doce distritos— es papel cotidiano de la Reserva. El Bank Note Museum la numera P-523a. Fr. 1933-K cubre Dallas. El tipo es común; Dallas imprimió 569.600.000 notas ordinarias en esa serie. El interés de esta pieza no es la rareza del FRN, sino los sellos de Where’s George? sobre un serial ordinario. Esta ficha no inventa una tirada por bloque.',
      en: 'Series 2006 $1 notes — Cabral–Paulson signatures, all twelve districts — were everyday Reserve paper. The Bank Note Museum numbers the type P-523a. Fr. 1933-K is Dallas. The type is common; Dallas printed 569,600,000 regular notes in the series. This piece’s interest is not FRN scarcity but the Where’s George? stamps on an ordinary serial. This record does not invent a printage by block.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial K46602688C. La pieza se presenta en funda, circulada, sin encapsular.',
      en: 'A PMG or PCGS census for serial K46602688C has not been independently verified. The note is shown in a sleeve, circulated, unslabbed.',
    },
    grade: {
      es: 'Circulada, sin encapsular, en funda (colección privada)',
      en: 'Circulated, unslabbed, in a sleeve (private collection)',
    },
    sources: [
      {
        href: 'https://www.wheresgeorge.com/',
        es: 'Where’s George? — sitio oficial',
        en: 'Where’s George? — official site',
        note: {
          es: 'Introducir denominación, serie, serial y código postal; un hit es una reentrada posterior.',
          en: 'Enter denomination, series, serial, and ZIP code; a hit is a later re-entry.',
        },
      },
      {
        href: 'https://www.wheresgeorge.com/faq-rules-privacy.php',
        es: 'Where’s George? — FAQ y reglas',
        en: 'Where’s George? — FAQ and rules',
        note: {
          es: '23 de diciembre de 1998; circulación natural; «por diversión y porque nadie lo había hecho».',
          en: '23 December 1998; natural circulation; “for fun and because it had not been done yet.”',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Where%27s_George%3F',
        es: 'Wikipedia — Where’s George?',
        en: 'Wikipedia — Where’s George?',
        note: {
          es: 'Hank Eskin; el 1 dólar concentra la mayoría de las entradas.',
          en: 'Hank Eskin; the $1 accounts for most entries.',
        },
      },
      {
        href: 'https://www.nature.com/articles/nature04292',
        es: 'Brockmann, Hufnagel y Geisel — The scaling laws of human travel (Nature, 2006)',
        en: 'Brockmann, Hufnagel and Geisel — The scaling laws of human travel (Nature, 2006)',
        note: {
          es: 'El registro de Where’s George? como proxy del desplazamiento humano.',
          en: 'The Where’s George? register as a proxy for human travel.',
        },
      },
      {
        href: 'http://banknote.ws/COLLECTION/countries/AME/USA/USA-FEDRES/USA0523.htm',
        es: 'Bank Note Museum — P-523, 1 dólar Federal Reserve Note, serie 2006',
        en: 'Bank Note Museum — P-523, Series 2006 $1 Federal Reserve Note',
        note: {
          es: 'P-523a: serie 2006, firmas Cabral y Paulson; distrito K = Dallas.',
          en: 'P-523a: Series 2006, Cabral and Paulson signatures; district K = Dallas.',
        },
      },
      {
        href: 'https://www.uspapermoney.info/serials/f2006_s.html',
        es: 'USPaperMoney.Info — Series 2006 $1, rangos de serial',
        en: 'USPaperMoney.Info — Series 2006 $1 serial ranges',
        note: {
          es: 'Dallas: 569.600.000 ordinarias en seis bloques. Marzo de 2008 incluye el bloque KC.',
          en: 'Dallas: 569,600,000 regular notes in six blocks. March 2008 includes the KC block.',
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
    id: 'nota-prueba-giori-lincoln-memorial',
    chapterId: 'us-miscelaneos',
    path: '/coleccion/estados-unidos/miscelaneos/nota-prueba-giori-lincoln-memorial/',
    pathEn: '/collection/united-states/miscellaneous/giori-test-note-lincoln-memorial/',
    pick: 'Giori · Lincoln Memorial (uniface)',
    serial: '—',
    no_serial_reason:
      'Uniface Giori press test: no serials, Treasury seal, or Federal Reserve seal were printed.',
    signatures: {
      es: 'Ninguna (nota de prueba uniface)',
      en: 'None (uniface test note)',
    },
    printed: {
      es: 'Prensa Giori (Gualtiero Giori). Hacia los años 1970. The E-Sylum sitúa pruebas con planchas «nonsense» del BEP en Ginebra, Nueva York, en esa década; otras tiradas de ensayo se atribuyen a evaluaciones de la prensa en Alemania. Esta ficha no inventa una tirada para el tipo ni para este ejemplar.',
      en: 'Giori press (Gualtiero Giori). Ca. 1970s. The E-Sylum places trials with BEP “nonsense” plates at Geneva, New York, in that decade; other test runs are attributed to press evaluations in Germany. This record does not invent a printage for the type or for this piece.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/giori-lincoln-memorial-composite.jpg',
      front: '/images/catalog/estados-unidos/giori-lincoln-memorial-front.jpg',
      back: '/images/catalog/estados-unidos/giori-lincoln-memorial-back.jpg',
      width: 1440,
      height: 960,
    },
    title: {
      es: 'Nota de prueba Giori · Lincoln Memorial · ca. 1970',
      en: 'Giori test note · Lincoln Memorial · ca. 1970s',
    },
    kicker: {
      es: 'Estados Unidos · Misceláneos · Prueba Giori',
      en: 'United States · Miscellaneous · Giori proof',
    },
    lead: {
      es: 'Nota de prueba uniface de la prensa Giori, hacia los años 1970: anverso verde con el Lincoln Memorial y elementos del 1 dólar; reverso en blanco; sin seriales ni sellos. No es curso legal.',
      en: 'A uniface Giori press test note, ca. 1970s: a green face with the Lincoln Memorial and $1 design elements; a blank back; no serials or seals. It is not legal tender.',
    },
    description: {
      es: 'Esta pieza es una prueba de prensa, no un Federal Reserve Note. El anverso, en una sola tinta verde hierba sobre papel crema, reúne fragmentos de planchas de curso legal: al centro, el grabado del Lincoln Memorial que el BEP usa en el reverso del 5 dólares; en las esquinas superiores, el 1 con ONE inscrito en vertical, tomado del reverso del 1 dólar; abajo, THE UNITED STATES OF AMERICA en letras con sombra; a la derecha, WASHINGTON. D.C. y ONE en vertical. Un arco fino cruza el memorial; a la izquierda hay bloques de patrón festoneado. No hay seriales, sello del Tesoro, sello de distrito ni firmas: el BEP ensayó la prensa Giori con planchas canceladas o «nonsense» para no entregar una plancha completa de circulación. El reverso de este ejemplar está en blanco: es uniface. No es el reverso verde del 5 dólares de circulación —le faltan el memorial en contexto de FIVE DOLLARS y lleva, en cambio, los 1 del 1 dólar— ni las pruebas Giori de dos caras con Jefferson al centro. Esta pieza de la colección se presenta en funda, sin encapsular.',
      en: 'This piece is a press test, not a Federal Reserve Note. The face, in a single grass-green ink on cream paper, gathers fragments of circulating plates: at center, the Lincoln Memorial engraving the BEP uses on the back of the $5; in the upper corners, the 1 with ONE set vertically, taken from the back of the $1; below, THE UNITED STATES OF AMERICA in shadowed capitals; at right, WASHINGTON. D.C. and a tall ONE. A thin arch spans the memorial; scalloped pattern blocks sit at left. There are no serials, Treasury seal, district seal, or signatures: the BEP tried the Giori press with cancelled or “nonsense” plates so that a complete circulating plate would not leave the bureau. The back of this example is blank: it is uniface. It is not the green back of a circulating $5 — it lacks the FIVE DOLLARS setting of that memorial and instead carries the $1 corner 1s — nor the two-sided Giori tests with Jefferson at center. This collection piece is shown in a sleeve, unslabbed.',
    },
    history: [
      {
        es: 'Al terminar la Segunda Guerra Mundial, el italiano Gualtiero Giori ideó una prensa de calcografía capaz de aplicar dos o tres colores en una sola pasada, con rodillos de caucho recortados que entintaban zonas distintas de la misma plancha. The E-Sylum resume ese salto: más rápido que las máquinas anteriores del Bureau of Engraving and Printing. El BEP encargó evaluaciones de la prensa; para probarla sin comprometer la seguridad de las planchas de circulación, envió segmentos cancelados de tipos entonces en uso.',
        en: 'At the end of the Second World War the Italian Gualtiero Giori devised an intaglio press that could lay two or three colours in a single pass, with cut rubber rollers inking different areas of the same plate. The E-Sylum summarises that leap: faster than the Bureau of Engraving and Printing’s earlier machines. The BEP commissioned evaluations of the press; to test it without releasing a complete circulating plate, it sent cancelled segments of types then in use.',
      },
      {
        es: 'The E-Sylum (2012) recoge el llamado tesoro Pigman: Edgar L. Pigman, ingeniero de la American Can Company en Ginebra, Nueva York, diseñó y ensayó prensas Giori como subcontratista de la American Bank Note Company para el BEP, hacia los años 1970. Las planchas «nonsense» mezclaban viñetas —Washington del 1, Lincoln del 5, Grant del 50— en pliegos de 32. Esas pruebas no eran curso legal; durante años el BEP consideró ilegal poseerlas porque se parecían al papel auténtico. Un cambio de política posterior permitió el comercio entre coleccionistas. Otras pruebas Giori de dos caras, a menudo con Jefferson al centro, se atribuyen a ensayos en Alemania. Esta ficha describe el objeto físico; no afirma que el ejemplar proceda del tesoro Pigman.',
        en: 'The E-Sylum (2012) records the so-called Pigman hoard: Edgar L. Pigman, an American Can Company engineer in Geneva, New York, designed and tested Giori presses as an American Bank Note Company subcontractor for the BEP, in the 1970s. The “nonsense” plates mixed vignettes — Washington from the $1, Lincoln from the $5, Grant from the $50 — on sheets of 32. Those tests were not legal tender; for years the BEP treated private ownership as unlawful because the paper resembled genuine currency. A later policy change allowed collector trade. Other two-sided Giori tests, often with Jefferson at center, are attributed to trials in Germany. This record describes the physical object; it does not claim that this example comes from the Pigman hoard.',
      },
    ],
    historyHeading: {
      es: 'La prensa Giori',
      en: 'The Giori press',
    },
    frontCaption: {
      es: 'Anverso uniface de la nota de prueba Giori, hacia los años 1970: Lincoln Memorial en verde, THE UNITED STATES OF AMERICA y 1 de las esquinas del 1 dólar, sin serial.',
      en: 'Uniface face of the Giori test note, ca. 1970s: Lincoln Memorial in green, THE UNITED STATES OF AMERICA and the $1 corner 1s, with no serial.',
    },
    backCaption: {
      es: 'Reverso en blanco de la misma nota de prueba Giori, en funda: sin tinta, grabado ni serial.',
      en: 'Blank back of the same Giori test note, in a sleeve: no ink, engraving, or serial.',
    },
    scarcity: {
      es: 'Las notas de prueba Giori no fueron emisión de circulación. The E-Sylum indica que los pliegos de ensayo debían destruirse o quedaron al margen; algunos sobrevivieron y, una vez levantada la restricción del BEP, entraron en el mercado de coleccionistas. No hay Pick ni Friedberg para este collage uniface del Lincoln Memorial. Esta ficha no inventa una tirada ni un censo.',
      en: 'Giori test notes were not a circulating issue. The E-Sylum notes that trial sheets were meant to be destroyed or otherwise kept aside; some survived and, once the BEP restriction was lifted, entered the collector market. There is no Pick or Friedberg number for this uniface Lincoln Memorial collage. This record does not invent a printage or a census.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este ejemplar. La pieza se presenta en funda, sin encapsular, sin número de certificado.',
      en: 'A PMG or PCGS census for this example has not been independently verified. The note is shown in a sleeve, unslabbed, with no certificate number.',
    },
    grade: {
      es: 'Sin encapsular, en funda (colección privada)',
      en: 'Unslabbed, in a sleeve (private collection)',
    },
    sources: [
      {
        href: 'https://www.coinbooks.org/esylum_v15n53a10.html',
        es: 'The E-Sylum — American Can Company and the Giori test notes (vol. 15, n.º 53, 23 de diciembre de 2012)',
        en: 'The E-Sylum — American Can Company and the Giori test notes (vol. 15, no. 53, 23 December 2012)',
        note: {
          es: 'Gualtiero Giori; American Can / Edgar L. Pigman en Ginebra, N.Y.; planchas nonsense del BEP; posesión privada legalizada después.',
          en: 'Gualtiero Giori; American Can / Edgar L. Pigman in Geneva, N.Y.; BEP nonsense plates; private ownership later made legal.',
        },
      },
      {
        href: 'http://www.coins.calkinsc.com/us_notes_test.html',
        es: 'Calkins — United States test notes',
        en: 'Calkins — United States test notes',
        note: {
          es: 'Tipos Giori: Jefferson de dos caras y pruebas uniface verdes sin serial (tesoro Pigman).',
          en: 'Giori types: two-sided Jefferson notes and green uniface tests without serials (Pigman hoard).',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Gualtiero_Giori',
        es: 'Wikipedia — Gualtiero Giori',
        en: 'Wikipedia — Gualtiero Giori',
        note: {
          es: 'Inventor de la prensa de calcografía en varios colores; origen de las pruebas que llevan su nombre.',
          en: 'Inventor of the multi-colour intaglio press; origin of the tests that bear his name.',
        },
      },
      {
        href: 'https://www.bep.gov/currency/history',
        es: 'Bureau of Engraving and Printing — History',
        en: 'Bureau of Engraving and Printing — History',
        note: {
          es: 'Contexto de la imprenta federal; estas pruebas no son una serie de circulación del BEP.',
          en: 'Context for the federal printer; these tests are not a BEP circulating series.',
        },
      },
    ],
  },
  {
    id: 'renci-pele-the-beautiful-game',
    chapterId: 'us-pop-art',
    path: '/coleccion/estados-unidos/rency/pele-the-beautiful-game/',
    pathEn: '/collection/united-states/rency/pele-the-beautiful-game/',
    pick: 'Rency · 5/200',
    serial: 'F71235101A',
    signatures: {
      es: 'Mary Ellen Withrow (tesorera, anverso del 1 dólar); firma manuscrita RENCY / Rency 5/200 (artista)',
      en: 'Mary Ellen Withrow (Treasurer, $1 face); manuscript RENCY / Rency 5/200 (artist)',
    },
    printed: {
      es: 'Papel de la Reserva Federal (BEP) con intervención de Rency. Edición manuscrita 5/200 en el reverso. Esta ficha no inventa una tirada del BEP para el tipo ni trata el 5/200 como censo de población.',
      en: 'Federal Reserve paper (BEP) with a Rency intervention. Manuscript edition 5/200 on the back. This record does not invent a BEP printage for the type, and it does not treat 5/200 as a population census.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/renci-pele-f71235101-composite.jpg',
      front: '/images/catalog/estados-unidos/renci-pele-f71235101-front.jpg',
      back: '/images/catalog/estados-unidos/renci-pele-f71235101-back.jpg',
      width: 1440,
      height: 960,
    },
    title: {
      es: 'Pelé / The Beautiful Game · 5/200',
      en: 'Pelé / The Beautiful Game · 5/200',
    },
    kicker: {
      es: 'Estados Unidos · Pop art · Rency',
      en: 'United States · Pop art · Rency',
    },
    lead: {
      es: 'Una sola pieza: anverso pop de un 1 dólar auténtico, serial F 71235101 A, y reverso de un 2 dólares (Declaración de Independencia), edición manuscrita 5/200.',
      en: 'One object: a pop-art face on a genuine $1, serial F 71235101 A, and the back of a $2 (Declaration of Independence), manuscript edition 5/200.',
    },
    description: {
      es: 'El anverso parte de un Federal Reserve Note de 1 dólar: seriales verdes F 71235101 A, sello del Tesoro y la firma de Mary Ellen Withrow, tesorera de Estados Unidos de 1994 a 2001. Sobre ese grabado, Rency superpone retratos de Pelé —joven con la camiseta de Brasil, la chilena en silueta, el gesto de celebración—, la firma de Pelé, las leyendas «the beautiful game» y «LOVE WHAT YOU ARE DOING», salpicaduras de color y, en vertical a la derecha, RENCY. El reverso no es el Gran Sello del 1 dólar: es el reverso del 2 dólares FRN, con la Declaración de Independencia de Trumbull, la plancha 52 y, a mano, «Rency» y «5/200». Es un único objeto coleccionable —anverso y reverso de la misma pieza—, no dos billetes catalogados por separado, y no es una emisión del Tesoro ni del BEP.',
      en: 'The face starts from a $1 Federal Reserve Note: green serials F 71235101 A, the Treasury seal, and the signature of Mary Ellen Withrow, Treasurer of the United States from 1994 to 2001. Over that engraving Rency overlays portraits of Pelé — young in the Brazil jersey, the bicycle-kick silhouette, the celebrating pose — Pelé’s signature, the legends “the beautiful game” and “LOVE WHAT YOU ARE DOING,” paint splatters, and, vertically at right, RENCY. The back is not the $1 Great Seal: it is the FRN $2 reverse, Trumbull’s Declaration of Independence, plate 52, and, in marker, “Rency” and “5/200.” It is one collectible — face and back of the same object — not two separately catalogued notes, and not a Treasury or BEP issue.',
    },
    historyHeading: {
      es: 'El artista',
      en: 'The artist',
    },
    history: {
      es: 'Rency es el nombre público del artista; en el papel suele firmar RENCY en mayúsculas. Es un artista de pop y street art estadounidense que trabaja de forma anónima sobre billetes auténticos. Las comparaciones con Banksy que publican dealers son un argumento de venta, no una atribución ni una biografía verificada. No debe confundirse con Rency Punnoose. Pelé (Edson Arantes do Nascimento, 1940–2022) es el motivo: «the beautiful game» nombra el fútbol; la chilena y la camiseta de Brasil son los clichés visuales de su carrera. Esta ficha describe el objeto físico; no tasamos la edición ni republicamos precios de subasta.',
      en: 'Rency is the public name of this artist; on the paper the signature is often RENCY in capitals. The artist is an anonymous United States pop and street artist who works on genuine notes. Dealer copy that likens the work to Banksy is a sales line, not an attribution or a verified biography. This is not Rency Punnoose. Pelé (Edson Arantes do Nascimento, 1940–2022) is the subject: “the beautiful game” names football; the bicycle kick and the Brazil jersey are the visual clichés of his career. This record describes the physical object; it does not value the edition or republish auction prices.',
    },
    frontCaption: {
      es: 'Anverso pop sobre un 1 dólar auténtico, serial F 71235101 A: retratos de Pelé, «the beautiful game», «LOVE WHAT YOU ARE DOING» y firma vertical RENCY.',
      en: 'Pop-art face on a genuine $1, serial F 71235101 A: Pelé portraits, “the beautiful game,” “LOVE WHAT YOU ARE DOING,” and vertical RENCY.',
    },
    backCaption: {
      es: 'Reverso de un 2 dólares FRN (Declaración de Independencia), plancha 52, con firma manuscrita Rency y edición 5/200.',
      en: 'Back of an FRN $2 (Declaration of Independence), plate 52, with manuscript Rency and edition 5/200.',
    },
    scarcity: {
      es: 'El artista numeró esta pieza 5/200. Esa fracción es una declaración de edición sobre el papel, no un censo PMG o PCGS ni una tirada del BEP. No se publica aquí un recuento independiente de ejemplares supervivientes. El híbrido 1 dólar / 2 dólares con retratos de Pelé distingue el objeto de Life Is Beautiful / LIFE SPRAY, otro híbrido 1/2 dólares también 5/200, y de Warhol y Basquiat / Life Is Beautiful, el 2 dólares intervenido por ambas caras; las tres muestran el serial impreso F71235101A.',
      en: 'The artist numbered this piece 5/200. That fraction is an edition statement on the paper, not a PMG or PCGS census and not a BEP printage. This record does not publish an independent count of surviving examples. The $1 / $2 hybrid with Pelé portraits sets the object apart from Life Is Beautiful / LIFE SPRAY, another $1/$2 hybrid also numbered 5/200, and from Warhol & Basquiat / Life Is Beautiful, the $2 intervened on both faces; all three show printed serial F71235101A.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para el serial F71235101A ni para la edición 5/200. La pieza se presenta sin encapsular.',
      en: 'A PMG or PCGS census for serial F71235101A or for edition 5/200 has not been independently verified. The note is shown unslabbed.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://www.uscurrency.gov/denominations/1',
        es: 'U.S. Currency Education Program — 1-dollar note',
        en: 'U.S. Currency Education Program — $1 note',
        note: {
          es: 'Tipo de 1 dólar de la Reserva Federal: Washington y el Gran Sello; esta pieza conserva el anverso de ese tipo bajo la superposición.',
          en: 'Federal Reserve $1 type: Washington and the Great Seal; this piece keeps that type’s face under the overlay.',
        },
      },
      {
        href: 'https://www.uscurrency.gov/denominations/2',
        es: 'U.S. Currency Education Program — 2-dollar note',
        en: 'U.S. Currency Education Program — $2 note',
        note: {
          es: 'El FRN de 2 dólares se reanudó en 1976; el reverso de Trumbull es el de esta pieza.',
          en: 'The $2 FRN resumed in 1976; Trumbull’s reverse is the back of this piece.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Mary_Ellen_Withrow',
        es: 'Wikipedia — Mary Ellen Withrow',
        en: 'Wikipedia — Mary Ellen Withrow',
        note: {
          es: 'Tesorera de Estados Unidos, 1994–2001; firma visible en el anverso del 1 dólar.',
          en: 'Treasurer of the United States, 1994–2001; signature visible on the $1 face.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Pel%C3%A9',
        es: 'Wikipedia — Pelé',
        en: 'Wikipedia — Pelé',
        note: {
          es: 'Edson Arantes do Nascimento (1940–2022); motivo de la superposición.',
          en: 'Edson Arantes do Nascimento (1940–2022); subject of the overlay.',
        },
      },
      {
        href: 'https://www.bep.gov/currency/history',
        es: 'Bureau of Engraving and Printing — History',
        en: 'Bureau of Engraving and Printing — History',
        note: {
          es: 'Contexto de la imprenta federal; la superposición no es una emisión del BEP.',
          en: 'Context for the federal printer; the overlay is not a BEP issue.',
        },
      },
    ],
  },
  {
    id: 'renci-warhol-basquiat-life-is-beautiful',
    chapterId: 'us-pop-art',
    path: '/coleccion/estados-unidos/rency/warhol-basquiat-life-is-beautiful/',
    pathEn: '/collection/united-states/rency/warhol-basquiat-life-is-beautiful/',
    pick: 'Rency',
    serial: 'F71235101A',
    signatures: {
      es: 'Firma manuscrita Rency (reverso); las firmas del Tesoro del 2 dólares quedan bajo la superposición',
      en: 'Manuscript Rency (back); the $2 Treasury signatures sit under the overlay',
    },
    printed: {
      es: 'Papel de la Reserva Federal (BEP) de 2 dólares con intervención de Rency en anverso y reverso. No hay fracción de edición manuscrita. Esta ficha no inventa una tirada del BEP para el tipo.',
      en: 'Federal Reserve $2 paper (BEP) with a Rency intervention on both faces. There is no manuscript edition fraction. This record does not invent a BEP printage for the type.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/renci-warhol-basquiat-life-is-beautiful-composite.jpg',
      front: '/images/catalog/estados-unidos/renci-warhol-basquiat-life-is-beautiful-front.jpg',
      back: '/images/catalog/estados-unidos/renci-warhol-basquiat-life-is-beautiful-back.jpg',
      width: 1440,
      height: 960,
    },
    title: {
      es: 'Warhol y Basquiat / Life Is Beautiful',
      en: 'Warhol & Basquiat / Life Is Beautiful',
    },
    kicker: {
      es: 'Estados Unidos · Pop art · Rency',
      en: 'United States · Pop art · Rency',
    },
    lead: {
      es: 'Una sola pieza: anverso pop sobre un 2 dólares auténtico, serial F 71235101 A, y reverso de Trumbull con firma manuscrita Rency y plancha 23.',
      en: 'One object: a pop-art face on a genuine $2, serial F 71235101 A, and Trumbull’s reverse with a manuscript Rency signature and plate 23.',
    },
    description: {
      es: 'El anverso parte de un Federal Reserve Note de 2 dólares: numeral 2 en las esquinas y seriales verdes F 71235101 A. Sobre ese grabado, Rency superpone a Andy Warhol (izquierda: cabello blanco, cuello de tortuga negro) y Jean-Michel Basquiat (derecha: chaqueta estampada) espalda contra espalda, una lata Campbell’s Tomato Soup a la izquierda, una calavera al estilo Basquiat a la derecha y la corona de tres picos en el centro superior. Las leyendas incluyen «SAMO LIVES», «WORLD FAMOUS», «TOMATO SOUP», «CURRENCY», «NEW YORK CITY», «LIFE IS BEAUTIFUL», «THIS ART WILL LAST FOREVER», «STUDIO 54» y «FOLLOW YOUR DREAMS», con salpicaduras de pintura. El reverso es el del 2 dólares FRN: la Declaración de Independencia de Trumbull, el número de plancha 23 junto al grabado y, a mano en rotulador negro, «Rency». No hay fracción de edición. Es un único objeto coleccionable —anverso y reverso de la misma pieza—, no dos billetes catalogados por separado, y no es una emisión del Tesoro ni del BEP. El serial impreso F71235101A también aparece en Pelé / The Beautiful Game y en Life Is Beautiful / LIFE SPRAY de esta vitrina; son objetos físicos distintos (este 2 dólares por ambas caras frente a los híbridos 1/2 dólares).',
      en: 'The face starts from a $2 Federal Reserve Note: corner 2s and green serials F 71235101 A. Over that engraving Rency overlays Andy Warhol (left: white hair, black turtleneck) and Jean-Michel Basquiat (right: patterned jacket) back to back, a Campbell’s Tomato Soup can at left, a Basquiat-style skull at right, and the three-pointed crown at top center. The legends include “SAMO LIVES,” “WORLD FAMOUS,” “TOMATO SOUP,” “CURRENCY,” “NEW YORK CITY,” “LIFE IS BEAUTIFUL,” “THIS ART WILL LAST FOREVER,” “STUDIO 54,” and “FOLLOW YOUR DREAMS,” with paint splatters. The back is the FRN $2 reverse: Trumbull’s Declaration of Independence, plate 23 beside the engraving, and, in black marker, “Rency.” There is no edition fraction. It is one collectible — face and back of the same object — not two separately catalogued notes, and not a Treasury or BEP issue. Printed serial F71235101A also appears on Pelé / The Beautiful Game and on Life Is Beautiful / LIFE SPRAY in this case; they are distinct physical objects (this $2 on both faces versus the $1/$2 hybrids).',
    },
    historyHeading: {
      es: 'El artista',
      en: 'The artist',
    },
    history: {
      es: 'Rency es el nombre público del artista; en el papel suele firmar RENCY en mayúsculas. Es un artista de pop y street art estadounidense que trabaja de forma anónima sobre billetes auténticos. Las comparaciones con Banksy que publican dealers son un argumento de venta, no una atribución ni una biografía verificada. No debe confundirse con Rency Punnoose. Andy Warhol (1928–1987) y Jean-Michel Basquiat (1960–1988) son el motivo: la lata Campbell’s y el retrato de Warhol citan la Factory; la corona, la calavera y «SAMO LIVES» citan a Basquiat; «STUDIO 54» y «NEW YORK CITY» sitúan la escena. Esta ficha describe el objeto físico; no tasamos la intervención ni republicamos precios de subasta.',
      en: 'Rency is the public name of this artist; on the paper the signature is often RENCY in capitals. The artist is an anonymous United States pop and street artist who works on genuine notes. Dealer copy that likens the work to Banksy is a sales line, not an attribution or a verified biography. This is not Rency Punnoose. Andy Warhol (1928–1987) and Jean-Michel Basquiat (1960–1988) are the subject: the Campbell’s can and Warhol’s portrait cite the Factory; the crown, skull, and “SAMO LIVES” cite Basquiat; “STUDIO 54” and “NEW YORK CITY” place the scene. This record describes the physical object; it does not value the intervention or republish auction prices.',
    },
    frontCaption: {
      es: 'Anverso pop sobre un 2 dólares auténtico, serial F 71235101 A: Warhol y Basquiat, lata Campbell’s, calavera, corona y leyendas que incluyen «LIFE IS BEAUTIFUL» y «SAMO LIVES».',
      en: 'Pop-art face on a genuine $2, serial F 71235101 A: Warhol and Basquiat, Campbell’s can, skull, crown, and legends including “LIFE IS BEAUTIFUL” and “SAMO LIVES.”',
    },
    backCaption: {
      es: 'Reverso de un 2 dólares FRN (Declaración de Independencia), plancha 23, con firma manuscrita Rency en rotulador negro. Sin fracción de edición.',
      en: 'Back of an FRN $2 (Declaration of Independence), plate 23, with a manuscript Rency in black marker. No edition fraction.',
    },
    scarcity: {
      es: 'El reverso lleva la firma manuscrita Rency y el número de plancha 23; no hay fracción de edición. Esa ausencia no se interpreta aquí como tirada abierta ni como censo. El 2 dólares intervenido por ambas caras distingue el objeto de los híbridos 1/2 dólares Pelé / The Beautiful Game y Life Is Beautiful / LIFE SPRAY, ambos edición 5/200, que muestran el mismo serial impreso.',
      en: 'The back carries a manuscript Rency and plate 23; there is no edition fraction. That absence is not read here as an open edition or as a census. The $2 intervened on both faces sets the object apart from the $1/$2 hybrids Pelé / The Beautiful Game and Life Is Beautiful / LIFE SPRAY, both edition 5/200, which show the same printed serial.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este objeto. El serial impreso F71235101A coincide con el de Pelé / The Beautiful Game y el de Life Is Beautiful / LIFE SPRAY; la coincidencia se registra y no fusiona las fichas. La pieza se presenta sin encapsular.',
      en: 'A PMG or PCGS census for this object has not been independently verified. Printed serial F71235101A matches Pelé / The Beautiful Game and Life Is Beautiful / LIFE SPRAY; the match is recorded and does not merge the records. The note is shown unslabbed.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://www.uscurrency.gov/denominations/2',
        es: 'U.S. Currency Education Program — 2-dollar note',
        en: 'U.S. Currency Education Program — $2 note',
        note: {
          es: 'Tipo de 2 dólares de la Reserva Federal: Jefferson y el reverso de Trumbull; esta pieza usa ambas caras de ese tipo bajo la superposición.',
          en: 'Federal Reserve $2 type: Jefferson and Trumbull’s reverse; this piece uses both faces of that type under the overlay.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Andy_Warhol',
        es: 'Wikipedia — Andy Warhol',
        en: 'Wikipedia — Andy Warhol',
        note: {
          es: 'Andrew Warhola (1928–1987); retrato y lata Campbell’s en la superposición.',
          en: 'Andrew Warhola (1928–1987); portrait and Campbell’s can in the overlay.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Jean-Michel_Basquiat',
        es: 'Wikipedia — Jean-Michel Basquiat',
        en: 'Wikipedia — Jean-Michel Basquiat',
        note: {
          es: 'Jean-Michel Basquiat (1960–1988); retrato, corona, calavera y «SAMO LIVES».',
          en: 'Jean-Michel Basquiat (1960–1988); portrait, crown, skull, and “SAMO LIVES.”',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/United_States_two-dollar_bill',
        es: 'Wikipedia — United States two-dollar bill',
        en: 'Wikipedia — United States two-dollar bill',
        note: {
          es: 'United States Note de 2 dólares hasta 1966; FRN desde 1976 con el reverso de Trumbull.',
          en: 'United States Note $2 through 1966; FRN from 1976 with the Trumbull reverse.',
        },
      },
      {
        href: 'https://www.bep.gov/currency/history',
        es: 'Bureau of Engraving and Printing — History',
        en: 'Bureau of Engraving and Printing — History',
        note: {
          es: 'Contexto de la imprenta federal; la superposición no es una emisión del BEP.',
          en: 'Context for the federal printer; the overlay is not a BEP issue.',
        },
      },
    ],
  },
    id: 'renci-trump-never-surrender',
    chapterId: 'us-pop-art',
    path: '/coleccion/estados-unidos/rency/trump-never-surrender/',
    pathEn: '/collection/united-states/rency/trump-never-surrender/',
    pick: 'Rency',
    serial: '—',
    no_serial_reason:
      'Pop overlay covers the Federal Reserve face; BEP serials are not readable on the photographs. The $2 reverse has no serials.',
    signatures: {
      es: 'Firma manuscrita Rency (anverso, abajo a la derecha; reverso, rotulador negro a gran escala). Las firmas del Tesoro no son legibles bajo la superposición.',
      en: 'Manuscript Rency (face, lower right; back, large black marker). The Treasury signatures are not readable under the overlay.',
    },
    printed: {
      es: 'Papel de la Reserva Federal (BEP) de 2 dólares con intervención de Rency. El anverso es un collage pop vertical; el reverso es el grabado de Trumbull fotografiado en vertical (la plancha queda rotada). No hay fracción de edición manuscrita. Esta ficha no inventa una tirada del BEP para el tipo.',
      en: 'Federal Reserve $2 paper (BEP) with a Rency intervention. The face is a vertical pop collage; the back is Trumbull’s engraving photographed upright (the plate is rotated). There is no manuscript edition fraction. This record does not invent a BEP printage for the type.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/renci-trump-never-surrender-composite.jpg',
      front: '/images/catalog/estados-unidos/renci-trump-never-surrender-front.jpg',
      back: '/images/catalog/estados-unidos/renci-trump-never-surrender-back.jpg',
      width: 1440,
      height: 960,
    },
    title: {
      es: 'Trump / Never Surrender',
      en: 'Trump / Never Surrender',
    },
    kicker: {
      es: 'Estados Unidos · Pop art · Rency',
      en: 'United States · Pop art · Rency',
    },
    lead: {
      es: 'Una sola pieza: collage pop vertical del mugshot de Donald Trump (Fulton County, 2023) y reverso de un 2 dólares (Declaración de Independencia) fotografiado en vertical, con firma manuscrita Rency.',
      en: 'One object: a vertical pop collage of Donald Trump’s 2023 Fulton County mugshot and a $2 reverse (Declaration of Independence) photographed upright, with a manuscript Rency signature.',
    },
    description: {
      es: 'El anverso es un collage pop en formato retrato sobre papel de curso legal: el mugshot de Donald Trump de 2023 en el condado de Fulton, en semitono, con traje oscuro y corbata roja; detrás, una escala de altura con 70, 60, 50 y 40; las leyendas «Life, LIBERTY and the Pursuit of Happiness», «NEVER SURRENDER» en rojo y, en vertical a la derecha, «STAND UP FOR AMERICA»; el sello del sheriff del condado de Fulton con la sobrecarga «WITCH HUNT»; filigranas de currency, salpicaduras de pintura y un borde naranja-marrón. Abajo a la derecha, firma manuscrita Rency. El reverso es el del 2 dólares FRN —la Declaración de Independencia de Trumbull— fotografiado en vertical, de modo que el grabado queda rotado, con un «Rency» grande en rotulador negro sobre el centro. Los seriales del BEP no son legibles bajo la superposición; el reverso del 2 dólares no lleva serial. Es un único objeto coleccionable —anverso y reverso de la misma pieza—, no dos billetes catalogados por separado, y no es una emisión del Tesoro ni del BEP. No duplica Pelé / The Beautiful Game, Life Is Beautiful / LIFE SPRAY ni Warhol y Basquiat / Life Is Beautiful.',
      en: 'The face is a portrait-format pop collage on legal-tender paper: Donald Trump’s 2023 Fulton County mugshot in halftone, dark suit and red tie; behind him a height chart with 70, 60, 50, and 40; the legends “Life, LIBERTY and the Pursuit of Happiness,” “NEVER SURRENDER” in red, and, vertically at right, “STAND UP FOR AMERICA”; the Fulton County sheriff’s seal overprinted “WITCH HUNT”; currency scrollwork, paint splatters, and an orange-brown border. At lower right, a manuscript Rency. The back is the FRN $2 reverse — Trumbull’s Declaration of Independence — photographed upright, so the engraving is rotated, with a large black-marker “Rency” across the center. BEP serials are not readable under the overlay; the $2 reverse carries none. It is one collectible — face and back of the same object — not two separately catalogued notes, and not a Treasury or BEP issue. It does not duplicate Pelé / The Beautiful Game, Life Is Beautiful / LIFE SPRAY, or Warhol & Basquiat / Life Is Beautiful.',
    },
    historyHeading: {
      es: 'El artista',
      en: 'The artist',
    },
    history: {
      es: 'Rency es el nombre público del artista; en el papel suele firmar RENCY en mayúsculas. Es un artista de pop y street art estadounidense que trabaja de forma anónima sobre billetes auténticos. Las comparaciones con Banksy que publican dealers son un argumento de venta, no una atribución ni una biografía verificada. No debe confundirse con Rency Punnoose. El motivo es el mugshot de Donald Trump tomado el 24 de agosto de 2023 en la cárcel del condado de Fulton, Georgia; las leyendas «NEVER SURRENDER», «STAND UP FOR AMERICA» y «WITCH HUNT» pertenecen a la superposición, no a una emisión del Tesoro. Esta ficha describe el objeto físico; no tasamos la intervención ni republicamos precios de subasta.',
      en: 'Rency is the public name of this artist; on the paper the signature is often RENCY in capitals. The artist is an anonymous United States pop and street artist who works on genuine notes. Dealer copy that likens the work to Banksy is a sales line, not an attribution or a verified biography. This is not Rency Punnoose. The subject is Donald Trump’s mugshot taken on 24 August 2023 at the Fulton County Jail in Georgia; the legends “NEVER SURRENDER,” “STAND UP FOR AMERICA,” and “WITCH HUNT” belong to the overlay, not to a Treasury issue. This record describes the physical object; it does not value the intervention or republish auction prices.',
    },
    frontCaption: {
      es: 'Anverso pop en formato retrato: mugshot de Trump (Fulton County, 2023), «NEVER SURRENDER», «STAND UP FOR AMERICA», sello «WITCH HUNT» y firma Rency abajo a la derecha.',
      en: 'Portrait-format pop face: Trump mugshot (Fulton County, 2023), “NEVER SURRENDER,” “STAND UP FOR AMERICA,” “WITCH HUNT” seal, and Rency at lower right.',
    },
    backCaption: {
      es: 'Reverso de un 2 dólares FRN (Declaración de Independencia) fotografiado en vertical, con firma manuscrita Rency en rotulador negro. Sin fracción de edición.',
      en: 'Back of an FRN $2 (Declaration of Independence) photographed upright, with a manuscript Rency in black marker. No edition fraction.',
    },
    scarcity: {
      es: 'El reverso lleva la firma manuscrita Rency a gran escala; no hay fracción de edición. Esa ausencia no se interpreta aquí como tirada abierta ni como censo. El collage vertical del mugshot y el reverso de 2 dólares fotografiado en vertical distinguen el objeto de los híbridos 5/200 Pelé / The Beautiful Game y Life Is Beautiful / LIFE SPRAY, y de Warhol y Basquiat / Life Is Beautiful, el 2 dólares intervenido por ambas caras con serial impreso F71235101A.',
      en: 'The back carries a large manuscript Rency; there is no edition fraction. That absence is not read here as an open edition or as a census. The vertical mugshot collage and the $2 reverse photographed upright set the object apart from the 5/200 hybrids Pelé / The Beautiful Game and Life Is Beautiful / LIFE SPRAY, and from Warhol & Basquiat / Life Is Beautiful, the $2 intervened on both faces with printed serial F71235101A.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este objeto. El serial del BEP no es legible en las fotografías; no se asigna aquí el serial F71235101A de otras piezas de la vitrina. La pieza se presenta sin encapsular.',
      en: 'A PMG or PCGS census for this object has not been independently verified. The BEP serial is not readable in the photographs; this record does not assign serial F71235101A from other pieces in the case. The note is shown unslabbed.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://www.uscurrency.gov/denominations/2',
        es: 'U.S. Currency Education Program — 2-dollar note',
        en: 'U.S. Currency Education Program — $2 note',
        note: {
          es: 'Tipo de 2 dólares de la Reserva Federal: el reverso de Trumbull es el de esta pieza, fotografiado en vertical.',
          en: 'Federal Reserve $2 type: Trumbull’s reverse is the back of this piece, photographed upright.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/Mug_shot_of_Donald_Trump',
        es: 'Wikipedia — Mug shot of Donald Trump',
        en: 'Wikipedia — Mug shot of Donald Trump',
        note: {
          es: 'Fotografía del 24 de agosto de 2023 en la cárcel del condado de Fulton; motivo de la superposición.',
          en: 'Photograph of 24 August 2023 at the Fulton County Jail; subject of the overlay.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/United_States_two-dollar_bill',
        es: 'Wikipedia — United States two-dollar bill',
        en: 'Wikipedia — United States two-dollar bill',
        note: {
          es: 'United States Note de 2 dólares hasta 1966; FRN desde 1976 con el reverso de Trumbull.',
          en: 'United States Note $2 through 1966; FRN from 1976 with the Trumbull reverse.',
        },
      },
      {
        href: 'https://www.bep.gov/currency/history',
        es: 'Bureau of Engraving and Printing — History',
        en: 'Bureau of Engraving and Printing — History',
        note: {
          es: 'Contexto de la imprenta federal; la superposición no es una emisión del BEP.',
          en: 'Context for the federal printer; the overlay is not a BEP issue.',
        },
      },
    ],
  },
  {
    id: 'renci-life-is-beautiful-life-spray',
    chapterId: 'us-pop-art',
    path: '/coleccion/estados-unidos/rency/life-is-beautiful-life-spray/',
    pathEn: '/collection/united-states/rency/life-is-beautiful-life-spray/',
    pick: 'Rency · 5/200',
    serial: 'F71235101A',
    signatures: {
      es: 'Firma manuscrita RENCY / 5/200 (reverso); Rency en vertical a la derecha del anverso. Las firmas del Tesoro quedan bajo la superposición',
      en: 'Manuscript RENCY / 5/200 (back); vertical Rency at right on the face. The Treasury signatures sit under the overlay',
    },
    printed: {
      es: 'Papel de la Reserva Federal (BEP) con intervención de Rency. Edición manuscrita 5/200 en el reverso. Esta ficha no inventa una tirada del BEP para el tipo ni trata el 5/200 como censo de población.',
      en: 'Federal Reserve paper (BEP) with a Rency intervention. Manuscript edition 5/200 on the back. This record does not invent a BEP printage for the type, and it does not treat 5/200 as a population census.',
    },
    images: {
      composite: '/images/catalog/estados-unidos/renci-life-is-beautiful-life-spray-composite.jpg',
      front: '/images/catalog/estados-unidos/renci-life-is-beautiful-life-spray-front.jpg',
      back: '/images/catalog/estados-unidos/renci-life-is-beautiful-life-spray-back.jpg',
      width: 1440,
      height: 960,
    },
    title: {
      es: 'Life Is Beautiful / LIFE SPRAY · 5/200',
      en: 'Life Is Beautiful / LIFE SPRAY · 5/200',
    },
    kicker: {
      es: 'Estados Unidos · Pop art · Rency',
      en: 'United States · Pop art · Rency',
    },
    lead: {
      es: 'Una sola pieza: anverso pop de un 1 dólar auténtico con ocho latas LIFE SPRAY, serial F 71235101 A, y reverso de un 2 dólares (Declaración de Independencia), edición manuscrita 5/200.',
      en: 'One object: a pop-art face on a genuine $1 with eight LIFE SPRAY cans, serial F 71235101 A, and the back of a $2 (Declaration of Independence), manuscript edition 5/200.',
    },
    description: {
      es: 'El anverso parte de un Federal Reserve Note de 1 dólar: seriales verdes F 71235101 A sobre un fondo de grabado de curso legal. Sobre ese papel, Rency alinea ocho latas de spray —tapas verde, naranja, rojo, púrpura, azul, negro, amarillo y gris—; cada una lleva «Rency» en cursiva, un sello «FEDERAL BANK OF RENCY» con una R, las leyendas «LIFE» y «SPRAY», una hilera de corazones y goteos de pintura. Cruzando las latas, «life is beautiful» en neón amarillo-naranja, con corazones en los puntos de las i. A la derecha, Rency en vertical. El reverso no es el Gran Sello del 1 dólar: es el reverso del 2 dólares FRN, con la Declaración de Independencia de Trumbull y, a mano en rotulador negro, «RENCY» y «5/200». Es un único objeto coleccionable —anverso y reverso de la misma pieza—, no dos billetes catalogados por separado, y no es una emisión del Tesoro ni del BEP. El serial impreso F71235101A también aparece en Pelé / The Beautiful Game (otro híbrido 1/2 dólares, edición 5/200, con retratos de Pelé) y en Warhol y Basquiat / Life Is Beautiful (un 2 dólares por ambas caras, sin fracción de edición); son tres objetos físicos distintos.',
      en: 'The face starts from a $1 Federal Reserve Note: green serials F 71235101 A on a legal-tender engraved ground. Over that paper Rency lines up eight spray cans — caps in green, orange, red, purple, blue, black, yellow, and grey — each with cursive “Rency,” a “FEDERAL BANK OF RENCY” seal with an R, the legends “LIFE” and “SPRAY,” a row of hearts, and dripping paint. Across the cans, “life is beautiful” in yellow-orange neon, with hearts on the i-dots. At right, vertical Rency. The back is not the $1 Great Seal: it is the FRN $2 reverse, Trumbull’s Declaration of Independence, and, in black marker, “RENCY” and “5/200.” It is one collectible — face and back of the same object — not two separately catalogued notes, and not a Treasury or BEP issue. Printed serial F71235101A also appears on Pelé / The Beautiful Game (another $1/$2 hybrid, edition 5/200, with Pelé portraits) and on Warhol & Basquiat / Life Is Beautiful (a $2 on both faces, with no edition fraction); they are three distinct physical objects.',
    },
    historyHeading: {
      es: 'El artista',
      en: 'The artist',
    },
    history: {
      es: 'Rency es el nombre público del artista; en el papel suele firmar RENCY en mayúsculas. Es un artista de pop y street art estadounidense que trabaja de forma anónima sobre billetes auténticos. Las comparaciones con Banksy que publican dealers son un argumento de venta, no una atribución ni una biografía verificada. No debe confundirse con Rency Punnoose. El motivo es la lata de spray como marca propia: «LIFE SPRAY», el sello «FEDERAL BANK OF RENCY» y la leyenda neón «life is beautiful». No duplica Warhol y Basquiat / Life Is Beautiful, que usa la misma frase sobre retratos de Warhol y Basquiat. Esta ficha describe el objeto físico; no tasamos la edición ni republicamos precios de subasta.',
      en: 'Rency is the public name of this artist; on the paper the signature is often RENCY in capitals. The artist is an anonymous United States pop and street artist who works on genuine notes. Dealer copy that likens the work to Banksy is a sales line, not an attribution or a verified biography. This is not Rency Punnoose. The subject is the spray can as a house brand: “LIFE SPRAY,” the “FEDERAL BANK OF RENCY” seal, and the neon legend “life is beautiful.” It does not duplicate Warhol & Basquiat / Life Is Beautiful, which uses the same phrase over portraits of Warhol and Basquiat. This record describes the physical object; it does not value the edition or republish auction prices.',
    },
    frontCaption: {
      es: 'Anverso pop sobre un 1 dólar auténtico, serial F 71235101 A: ocho latas LIFE SPRAY, «life is beautiful» en neón y firma vertical Rency.',
      en: 'Pop-art face on a genuine $1, serial F 71235101 A: eight LIFE SPRAY cans, neon “life is beautiful,” and vertical Rency.',
    },
    backCaption: {
      es: 'Reverso de un 2 dólares FRN (Declaración de Independencia), plancha 52, con firma manuscrita RENCY y edición 5/200.',
      en: 'Back of an FRN $2 (Declaration of Independence), plate 52, with manuscript RENCY and edition 5/200.',
    },
    scarcity: {
      es: 'El artista numeró esta pieza 5/200. Esa fracción es una declaración de edición sobre el papel, no un censo PMG o PCGS ni una tirada del BEP. No se publica aquí un recuento independiente de ejemplares supervivientes. Las ocho latas LIFE SPRAY distinguen el objeto del híbrido Pelé / The Beautiful Game, también 5/200 con el mismo serial impreso, y de Warhol y Basquiat / Life Is Beautiful, el 2 dólares intervenido por ambas caras, sin fracción de edición.',
      en: 'The artist numbered this piece 5/200. That fraction is an edition statement on the paper, not a PMG or PCGS census and not a BEP printage. This record does not publish an independent count of surviving examples. The eight LIFE SPRAY cans set the object apart from the Pelé / The Beautiful Game hybrid, also 5/200 with the same printed serial, and from Warhol & Basquiat / Life Is Beautiful, the $2 intervened on both faces, with no edition fraction.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo PMG o PCGS para este objeto. El serial impreso F71235101A coincide con el de Pelé / The Beautiful Game y el de Warhol y Basquiat / Life Is Beautiful; la coincidencia se registra y no fusiona las fichas. La pieza se presenta sin encapsular.',
      en: 'A PMG or PCGS census for this object has not been independently verified. Printed serial F71235101A matches Pelé / The Beautiful Game and Warhol & Basquiat / Life Is Beautiful; the match is recorded and does not merge the records. The note is shown unslabbed.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://www.uscurrency.gov/denominations/1',
        es: 'U.S. Currency Education Program — 1-dollar note',
        en: 'U.S. Currency Education Program — $1 note',
        note: {
          es: 'Tipo de 1 dólar de la Reserva Federal: Washington y el Gran Sello; esta pieza conserva el anverso de ese tipo bajo la superposición.',
          en: 'Federal Reserve $1 type: Washington and the Great Seal; this piece keeps that type’s face under the overlay.',
        },
      },
      {
        href: 'https://www.uscurrency.gov/denominations/2',
        es: 'U.S. Currency Education Program — 2-dollar note',
        en: 'U.S. Currency Education Program — $2 note',
        note: {
          es: 'El FRN de 2 dólares se reanudó en 1976; el reverso de Trumbull es el de esta pieza.',
          en: 'The $2 FRN resumed in 1976; Trumbull’s reverse is the back of this piece.',
        },
      },
      {
        href: 'https://en.wikipedia.org/wiki/United_States_two-dollar_bill',
        es: 'Wikipedia — United States two-dollar bill',
        en: 'Wikipedia — United States two-dollar bill',
        note: {
          es: 'United States Note de 2 dólares hasta 1966; FRN desde 1976 con el reverso de Trumbull.',
          en: 'United States Note $2 through 1966; FRN from 1976 with the Trumbull reverse.',
        },
      },
      {
        href: 'https://www.bep.gov/currency/history',
        es: 'Bureau of Engraving and Printing — History',
        en: 'Bureau of Engraving and Printing — History',
        note: {
          es: 'Contexto de la imprenta federal; la superposición no es una emisión del BEP.',
          en: 'Context for the federal printer; the overlay is not a BEP issue.',
        },
      },
    ],
  },
];

export const notePageCopy = {
  es: {
    seriesLink: 'Estados Unidos',
    miscLink: 'Misceláneos',
    rencyLink: 'Rency',
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
    miscLink: 'Miscellaneous',
    rencyLink: 'Rency',
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

export function noteSeriesHref(note: UnitedStatesNote, locale: 'es' | 'en'): string {
  if (note.chapterId === 'us-miscelaneos') return miscSeriesPath(locale);
  if (note.chapterId === 'us-pop-art') return rencySeriesPath(locale);
  return `${seriesPath(locale)}#${note.chapterId}`;
}

export function notesForChapter(chapterId: UnitedStatesChapterId): UnitedStatesNote[] {
  return unitedStatesNotes.filter((note) => note.chapterId === chapterId);
}

export const unitedStatesNoteSlugs = unitedStatesNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export const unitedStatesNoteDedicatedSlugs = unitedStatesNotes.flatMap((note) => [
  note.path.replace(/^\/|\/$/g, ''),
  note.pathEn.replace(/^\/|\/$/g, ''),
]);
