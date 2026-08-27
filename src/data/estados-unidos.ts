import type { CatalogSource, LocalizedText } from './catalog';

export const USA_PATH = '/coleccion/estados-unidos/';
export const USA_PATH_EN = '/coleccion/united-states/';
export const USA_MPC_PATH = '/coleccion/estados-unidos/mpc-vietnam/';
export const USA_MPC_PATH_EN = '/coleccion/united-states/mpc-vietnam/';

export type UnitedStatesChapterId =
  | 'us-colonial'
  | 'us-obsoleto'
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
      es: 'La Federal Reserve Act de 1913 creó el banco central y autorizó dos papeles: los Federal Reserve Notes, emitidos por la Junta, y los Federal Reserve Bank Notes, moneda de emergencia de cada banco distrito en el primer tercio del siglo XX. El BEP los distingue con claridad. Desde 1914 los FRN son el papel de circulación; hoy son el único tipo que se emite. En 1934 el BEP añadió la sobrecarga HAWAII a FRN y certificados de plata. Esta vitrina reunirá el 100 dólares FRBN de Minneapolis de 1929, los 10 dólares de 1934 de varios distritos, el 20 dólares de Hawái de 1934 y el 100 dólares de Cleveland de 1990. Los certificados de pago militar (MPC) de Vietnam se documentan en su propia vitrina. Los cupones USDA se documentarán junto a estas series federales.',
      en: 'The Federal Reserve Act of 1913 created the central bank and authorized two papers: Federal Reserve Notes, issued by the Board, and Federal Reserve Bank Notes, emergency currency of each district bank in the early twentieth century. The BEP draws that distinction clearly. From 1914 FRNs have been the circulating paper; today they are the only type still issued. In 1934 the BEP added the HAWAII overprint to FRNs and silver certificates. This case will gather the 1929 Minneapolis $100 FRBN, the 1934 $10 notes of several districts, the 1934 Hawaii $20, and the 1990 Cleveland $100. Vietnam Military Payment Certificates are documented in their own case. USDA food coupons will be documented alongside these federal series.',
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
];

export const seriesCopy = {
  es: {
    metaTitle: 'Estados Unidos · Federal, colonial y obsoleto | Notofilia',
    metaDescription:
      'Catálogo de papel moneda de Estados Unidos: moneda colonial, billetes obsoletos, United States Notes, certificados de oro y plata, Reserva Federal y pop art.',
    kicker: 'Estados Unidos · Notafilia',
    title: 'Del papel colonial a la Reserva Federal',
    heroAlt:
      'Mapa vintage en relieve 3D de Estados Unidos sobre pergamino, con las Rocosas, el Golden Gate, la Estatua de la Libertad, el Capitolio, un pasaporte y el título Estados Unidos',
    intro: [
      'El papel moneda público nació en América, no en Europa. El 10 de diciembre de 1690, Massachusetts autorizó bills of credit para pagar una guerra; el U.S. Currency Education Program y el Newman Numismatic Portal lo registran como el primer papel público de Occidente. Las trece colonias siguieron el modelo. El Congreso Continental emitió Continentals en 1775: sin respaldo metálico y falsificados por el enemigo, acuñaron la frase «not worth a Continental».',
      'En el siglo XIX el comercio cotidiano corrió sobre obsolete notes de bancos estatales —broken banknotes en la jerga, catalogados por Haxby—. La American Numismatic Society sitúa el fin de esa pluralidad en la Guerra Civil: un impuesto del 10 % sobre el papel privado y la National Banking Act de 1863. Al mismo tiempo nació el papel federal: United States Notes (1862), Gold Certificates (1865) y Silver Certificates (1878).',
      'La Federal Reserve Act de 1913 creó el banco central y dos tipos de papel: Federal Reserve Notes y, como moneda de emergencia, Federal Reserve Bank Notes. El BEP dejó de entregar United States Notes en 1971; hoy solo se emiten FRN. La Segunda Guerra Mundial marcó certificados de plata y FRN con sobrecarga HAWAII y el 1 dólar 1935-A de sello amarillo para África del Norte.',
      'Esta vitrina no es un catálogo completo de la notafilia estadounidense: es el inventario de los ejemplares que se documentarán aquí, con referencias Friedberg, Haxby, Schwan o Pick cuando existan. Las fichas de cada pieza se publicarán como en Filipinas, a medida que se fotografíen. Caben también certificados de pago militar (MPC), cupones USDA y notas de prueba.',
    ],
    holdingsTitle: 'El catálogo',
    holdingsIntro:
      'Ocho entradas, de izquierda a derecha por época: moneda colonial, billete obsoleto, United States Notes, Gold Certificates, Silver Certificates, Federal Reserve Bank, US Military Payment Certificate y pop art. El certificado de pago militar abre la vitrina de Vietnam. Las fichas de cada pieza se publicarán a medida que se documenten.',
    viewChapter: 'Leer el capítulo',
    viewMpc: 'Ver los MPC de Vietnam',
    mpcLabel: 'Vietnam',
    sourcesTitle: 'Fuentes',
    eraLabel: 'Época',
  },
  en: {
    metaTitle: 'United States · Federal, colonial, and obsolete | Notofilia',
    metaDescription:
      'Catalog of United States paper money: colonial issues, obsolete notes, United States Notes, gold and silver certificates, the Federal Reserve, and pop art.',
    kicker: 'United States · Notaphily',
    title: 'From colonial paper to the Federal Reserve',
    heroAlt:
      'Vintage 3D relief map of the United States on parchment, with the Rockies, the Golden Gate, the Statue of Liberty, the Capitol, a passport, and the title United States',
    intro: [
      'Public paper money was born in America, not in Europe. On 10 December 1690 Massachusetts authorized bills of credit to pay for a war; the U.S. Currency Education Program and the Newman Numismatic Portal record it as the first public paper in the Western world. The thirteen colonies followed. The Continental Congress issued Continentals in 1775: unbacked and counterfeited by the enemy, they coined the phrase “not worth a Continental.”',
      'In the nineteenth century everyday trade ran on obsolete notes of state banks — broken banknotes in the jargon, catalogued by Haxby. The American Numismatic Society places the end of that plurality in the Civil War: a 10 percent tax on private paper and the National Banking Act of 1863. Federal paper was born at the same time: United States Notes (1862), Gold Certificates (1865), and Silver Certificates (1878).',
      'The Federal Reserve Act of 1913 created the central bank and two kinds of paper: Federal Reserve Notes and, as emergency currency, Federal Reserve Bank Notes. The BEP stopped delivering United States Notes in 1971; today only FRNs are issued. The Second World War marked silver certificates and FRNs with the HAWAII overprint and the 1935-A yellow-seal $1 for North Africa.',
      'This case is not a complete catalog of United States notaphily: it is the inventory of the pieces that will be documented here, with Friedberg, Haxby, Schwan, or Pick references when they exist. Individual note pages will be published as they are photographed, as in the Philippines case. Military Payment Certificates, USDA food coupons, and test notes belong here as well.',
    ],
    holdingsTitle: 'The catalog',
    holdingsIntro:
      'Eight entries, left to right by period: colonial coinage, obsolete notes, United States Notes, Gold Certificates, Silver Certificates, Federal Reserve Bank, US Military Payment Certificate, and pop art. The military payment certificate opens the Vietnam case. Individual note pages will be published as they are documented.',
    viewChapter: 'Read the chapter',
    viewMpc: 'View the Vietnam MPCs',
    mpcLabel: 'Vietnam',
    sourcesTitle: 'Sources',
    eraLabel: 'Period',
  },
} as const;

export type UnitedStatesCatalogItem = {
  id: string;
  years: LocalizedText;
  title: LocalizedText;
  href: string;
  kind: 'chapter' | 'collection';
};

export const unitedStatesMpcCard = {
  id: 'us-mpc',
  years: { es: '1965–1973', en: '1965–1973' },
  title: {
    es: 'US Military Payment Certificate',
    en: 'US Military Payment Certificate',
  },
  href: USA_MPC_PATH,
  kind: 'collection' as const,
};

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${USA_PATH_EN}` : USA_PATH;
}

export function chapterHref(id: UnitedStatesChapterId): string {
  return `#${id}`;
}

export function unitedStatesCatalogItems(): UnitedStatesCatalogItem[] {
  const items: UnitedStatesCatalogItem[] = [];
  for (const chapter of unitedStatesChapters) {
    items.push({
      id: chapter.id,
      years: chapter.years,
      title: chapter.title,
      href: chapterHref(chapter.id),
      kind: 'chapter',
    });
    if (chapter.id === 'us-frb') {
      items.push(unitedStatesMpcCard);
    }
  }
  return items;
}
