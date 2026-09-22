import type { CatalogSource } from './catalog';
import type { Locale } from '../lib/locale-paths';

export const WWII_EMERGENCY_PATH = '/coleccion/notafilia/billetes-emergencia-segunda-guerra-mundial/';
export const WWII_EMERGENCY_PATH_EN = '/collection/notaphily/world-war-ii-emergency-banknotes/';
export const WWII_HAWAII_NOTE_ID = '1-dolar-hawaii-1935a';

export const WWII_EMERGENCY_HERO = {
  es: {
    src: '/uploads/wwii-emergency-hero-es.jpg',
    width: 1916,
    height: 821,
  },
  en: {
    src: '/uploads/wwii-emergency-hero-en.jpg',
    width: 1916,
    height: 821,
  },
} as const;

export const wwiiEmergencyCopy = {
  es: {
    metaTitle: 'Billetes de emergencia de la II Guerra Mundial | Notofilia',
    metaDescription:
      'Vitrina de los billetes de emergencia de 1939–1948: Hawái, sello amarillo, AMC, Theresienstadt, Operación Bernhard, dinero de invasión japonés y BAFSV, con fuentes. Ejemplar HAWAII Fr. 2300, serial S40499058C.',
    kicker: 'Notafilia · 1939–1948',
    title: 'Billetes de Emergencia de la Segunda Guerra Mundial',
    breadcrumbCurrent: 'Billetes de emergencia · II Guerra Mundial',
    parentLink: 'Notafilia',
    intro: [
      'Hawái, África del Norte, la moneda militar aliada, la Operación Bernhard y los vales británicos de posguerra: el papel moneda como arma entre 1939 y 1948.',
    ],
    factsHeading: 'El marco',
    periodLabel: 'Periodo',
    periodValue: '1939–1948, con el eco de los BAFSV hasta 1982.',
    typesLabel: 'Emisiones',
    typesValue:
      'Sobreimpresión HAWAII, certificado de plata de sello amarillo, experimentales R/S, Moneda Militar Aliada (lira, franco, marco, chelín y yen), Ghetto-Kronen de Theresienstadt y otro papel de gueto y campo, Operación Bernhard, dinero de invasión japonés y yen militar, Reichskreditkassenscheine, islas del Canal, emisiones soviéticas de 1944, muntbiljetten neerlandeses de 1943 y BAFSV.',
    holdingsLabel: 'En esta vitrina',
    holdingsValue:
      '1 dólar HAWAII serie 1935 A (Hawaii P#36 · Fr. 2300), serial S40499058C, numerado en 1944, PMG 58 EPQ — Choice About Uncirculated. El sello amarillo aún no tiene ficha.',
    holdingsNote:
      'El papel federal de la era de la guerra, los certificados de pago militar y la Serie Victory de Filipinas tienen vitrina propia.',
    viewNote: 'Ver la ficha',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    holdingsListLabel: 'Ejemplar fichado en esta vitrina',
    heroAlt:
      'Ilustración de escritorio con billetes de emergencia de la Segunda Guerra Mundial, un tórculo y un mapa. Título Billetes de Emergencia. No es un ejemplar fichado.',
    usLead: 'El papel federal de la era de la guerra se documenta en la vitrina de Estados Unidos.',
    usLink: 'Estados Unidos',
    mpcLead: 'El perímetro que, desde 1946, cerró el agujero de los dólares de sello amarillo y la AMC está en la vitrina de MPC de Corea.',
    mpcLink: 'MPC - Guerra de Corea (1951 - 1954)',
    mpcVietnamLead: 'El mismo perímetro, ya en polímero y en el teatro de Indochina, continúa en la vitrina de Vietnam.',
    mpcVietnamLink: 'MPC - Guerra de Vietnam (1955-1975)',
    updatedLabel: 'Actualizado',
    updatedDate: '21 de septiembre de 2026',
    byline: 'Texto de Yezid Acosta',
    philippinesLead: 'El papel de la liberación filipina, distinto de los vales de guerrilla, está en la Serie Victory.',
    philippinesLink: 'Filipinas · Serie Victory',
    sourcesTitle: 'Fuentes',
    sourcesLead:
      'El relato se apoya en las fichas de tipo, en archivos de museos y en la bibliografía citada. No se republican precios de subasta, de escaparate ni de Heritage.',
    notafiliaCta: 'Volver a la vitrina de notafilia',
  },
  en: {
    metaTitle: 'World War II Emergency Banknotes | Notofilia',
    metaDescription:
      'A case on emergency banknotes of 1939–1948: Hawaii, the yellow seal, AMC, Theresienstadt, Operation Bernhard, Japanese invasion money, and BAFSV, with sources. HAWAII Fr. 2300 holding, serial S40499058C.',
    kicker: 'Notaphily · 1939–1948',
    title: 'World War II Emergency Banknotes',
    breadcrumbCurrent: 'WWII emergency banknotes',
    parentLink: 'Notaphily',
    intro: [
      'Hawaii, North Africa, Allied military currency, Operation Bernhard, and postwar British forces vouchers: paper money as a weapon from 1939 to 1948.',
    ],
    factsHeading: 'The frame',
    periodLabel: 'Period',
    periodValue: '1939–1948, with the BAFSV echo running to 1982.',
    typesLabel: 'Issues',
    typesValue:
      'HAWAII overprints, yellow-seal silver certificates, R/S experimentals, Allied Military Currency (lire, francs, marks, schillings, and yen), Theresienstadt Ghetto-Kronen and other ghetto and camp paper, Operation Bernhard, Japanese invasion money and military yen, Reichskreditkassenscheine, Channel Islands issues, Soviet 1944 notes, 1943 Dutch muntbiljetten, and BAFSV.',
    holdingsLabel: 'In this case',
    holdingsValue:
      'Series 1935A HAWAII $1 (Hawaii P#36 · Fr. 2300), serial S40499058C, numbered in 1944, PMG 58 EPQ — Choice About Uncirculated. No yellow-seal note is recorded yet.',
    holdingsNote:
      'Federal paper from the war years, military payment certificates, and the Philippine Victory Series have their own cases.',
    viewNote: 'Open the note page',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    holdingsListLabel: 'Holding recorded in this case',
    heroAlt:
      'Desk illustration with World War II emergency banknotes, a printing press, and a map. Title Emergency Banknotes. Not a catalogued holding.',
    usLead: 'Federal paper from the war years is documented in the United States case.',
    usLink: 'United States',
    mpcLead: 'The perimeter that, from 1946, closed the gap opened by yellow-seal dollars and AMC lives in the Korean War MPC case.',
    mpcLink: 'MPC - Korean War (1951 - 1954)',
    mpcVietnamLead: 'The same perimeter, later in the Indochina theatre, continues in the Vietnam MPC case.',
    mpcVietnamLink: 'MPC - Vietnam War (1955-1975)',
    updatedLabel: 'Updated',
    updatedDate: '21 September 2026',
    byline: 'Text by Yezid Acosta',
    philippinesLead: 'Philippine liberation paper, distinct from the guerrilla vouchers, is in the Victory Series.',
    philippinesLink: 'Philippines · Victory Series',
    sourcesTitle: 'Sources',
    sourcesLead:
      'The narrative rests on type records, museum files, and the bibliography cited here. Auction, dealer, and Heritage prices are not republished.',
    notafiliaCta: 'Back to the notaphily case',
  },
} as const;

export const wwiiEmergencySources: CatalogSource[] = [
  {
    href: 'https://en.wikipedia.org/wiki/Hawaii_overprint_note',
    es: 'Wikipedia — Hawaii overprint note',
    en: 'Wikipedia — Hawaii overprint note',
  },
  {
    href: 'https://coinsite.com/world-war-2-emergency-money/',
    es: 'CoinSite — World War II Emergency Money',
    en: 'CoinSite — World War II Emergency Money',
  },
  {
    href: 'https://pearlharbor.org/blog/the-history-of-the-hawaii-overprint-note/',
    es: 'Pearl Harbor — historia de la sobreimpresión HAWAII',
    en: 'Pearl Harbor — history of the HAWAII overprint',
  },
  {
    href: 'https://coinweek.com/hawaii-overprint-currency-note/',
    es: 'CoinWeek — Hawaii Overprint Currency Note',
    en: 'CoinWeek — Hawaii Overprint Currency Note',
  },
  {
    href: 'https://www.bep.gov/media/1056/download?inline',
    es: 'Bureau of Engraving and Printing — hoja histórica',
    en: 'Bureau of Engraving and Printing — historical fact sheet',
  },
  {
    href: 'https://papermoneybuyers.com/hawaii_north_africa/',
    es: 'Paper Money Buyers — Hawái y África del Norte',
    en: 'Paper Money Buyers — Hawaii and North Africa',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Allied_Military_Currency',
    es: 'Wikipedia — Allied Military Currency',
    en: 'Wikipedia — Allied Military Currency',
  },
  {
    href: 'https://en.wikipedia.org/wiki/AM-Lira',
    es: 'Wikipedia — AM-Lira',
    en: 'Wikipedia — AM-Lira',
  },
  {
    href: 'https://en.wikipedia.org/wiki/AM-Franc',
    es: 'Wikipedia — AM-Franc',
    en: 'Wikipedia — AM-Franc',
  },
  {
    href: 'https://en.wikipedia.org/wiki/AM-Mark',
    es: 'Wikipedia — AM-Mark',
    en: 'Wikipedia — AM-Mark',
  },
  {
    href: 'https://collections.ushmm.org/search/catalog/irn524924',
    es: 'Museo del Holocausto de EE. UU. — 100 francos AMC',
    en: 'U.S. Holocaust Memorial Museum — AMC 100 francs',
  },
  {
    href: 'https://collections.ushmm.org/search/catalog/irn524922',
    es: 'Museo del Holocausto de EE. UU. — 50 marcos AMC',
    en: 'U.S. Holocaust Memorial Museum — AMC 50 marks',
  },
  {
    href: 'https://en.numista.com/205023',
    es: 'Numista — 1 marco de la Autoridad Militar Aliada',
    en: 'Numista — Allied Military Authority 1 mark',
  },
  {
    href: 'https://en.numista.com/206793',
    es: 'Numista — 100 francos AMC',
    en: 'Numista — AMC 100 francs',
  },
  {
    href: 'https://azmemory.azlibrary.gov/nodes/view/157443',
    es: 'Arizona Memory Project — ½ marco AMC',
    en: 'Arizona Memory Project — AMC ½ mark',
  },
  {
    href: 'https://www.bancaditalia.it/chi-siamo/storia/seconda-guerra-mondiale/index.html?com.dotmarketing.htmlpage.language=1',
    es: 'Banca d’Italia — estabilización monetaria de posguerra',
    en: 'Bank of Italy — postwar monetary stabilization',
  },
  {
    href: 'https://jeeh.it/article/view/922/946',
    es: 'Journal of European Economic History — destrucción de capital en Italia',
    en: 'Journal of European Economic History — capital destruction in Italy',
  },
  {
    href: 'https://www.nber.org/system/files/working_papers/w3852/w3852.pdf',
    es: 'NBER — detener la inflación en Italia y Francia',
    en: 'NBER — halting inflation in Italy and France',
  },
  {
    href: 'https://achh.army.mil/history/book-wwii-civilaffairs-chapter9/',
    es: 'AMEDD — asuntos civiles, capítulo 9',
    en: 'AMEDD — civil affairs, chapter 9',
  },
  {
    href: 'https://www.strictly-gi.com/article/wwii-allied-invasion-currency/',
    es: 'Strictly GI — moneda de invasión aliada',
    en: 'Strictly GI — Allied invasion currency',
  },
  {
    href: 'https://warfarehistorynetwork.com/article/treasury-spy-for-stalin/',
    es: 'Warfare History Network — Harry Dexter White',
    en: 'Warfare History Network — Harry Dexter White',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Operation_Bernhard',
    es: 'Wikipedia — Operation Bernhard',
    en: 'Wikipedia — Operation Bernhard',
  },
  {
    href: 'https://www.pmgnotes.com/news/article/7262/Operation-Bernhard-Counterfeiting-During-World-War-II/',
    es: 'PMG — Operation Bernhard',
    en: 'PMG — Operation Bernhard',
  },
  {
    href: 'https://www.bankofengland.co.uk/museum/online-collections/blog/operation-bernhard',
    es: 'Banco de Inglaterra — Operation Bernhard',
    en: 'Bank of England — Operation Bernhard',
  },
  {
    href: 'https://www.spymuseum.org/exhibition-experiences/about-the-collection/collection-highlights/operation-bernhard-printing-plate/',
    es: 'International Spy Museum — plancha de Bernhard',
    en: 'International Spy Museum — Bernhard plate',
  },
  {
    href: 'https://www.pmgnotes.com/news/article/6971/Propaganda-Notes-of-Japanese-Occupied-China/',
    es: 'PMG — billetes de propaganda en la China ocupada',
    en: 'PMG — propaganda notes in occupied China',
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/ASI/CIN/CIN-PUP/CIN-PUP.htm',
    es: 'Bank Note Museum — bancos títere en China',
    en: 'Bank Note Museum — Chinese puppet banks',
  },
  {
    href: 'https://www.coins.calkinsc.com/philippines_wwii_guerrilla.html',
    es: 'Calkins — emisiones de guerrilla filipina',
    en: 'Calkins — Philippine guerrilla issues',
  },
  {
    href: 'https://oldgermancoins.com/reichskreditkassen_coins/',
    es: 'Reichskreditkassen (contexto de las cajas de crédito)',
    en: 'Reichskreditkassen (credit-office context)',
  },
  {
    href: 'https://www.lonesentry.com/articles/ttt/german-currency-occupation-wwii.html',
    es: 'Lone Sentry — monedas alemanas en países ocupados',
    en: 'Lone Sentry — German currencies in occupied countries',
  },
  {
    href: 'https://www.banknoteworld.com/blog/british-armed-forces-special-vouchers-ww2-currency/',
    es: 'Banknote World — BAFSV',
    en: 'Banknote World — BAFSV',
  },
  {
    href: 'https://collection.nam.ac.uk/detail.php?acc=1994-06-169-12',
    es: 'National Army Museum — vales BAFSV de 1948',
    en: 'National Army Museum — 1948 BAFSV',
  },
  {
    href: 'https://www.iwm.org.uk/collections/item/object/30057427',
    es: 'Imperial War Museums — vale de 3 peniques',
    en: 'Imperial War Museums — 3-pence voucher',
  },
  {
    href: 'https://blog.littletoncoin.com/special-wartime-money-helped-win-wwii-70-years-ago/',
    es: 'Littleton — el dinero de guerra',
    en: 'Littleton — wartime money',
  },
  {
    href: 'https://www.worldcat.org/title/world-war-ii-remembered-history-in-your-hands-a-numismatic-study/oclc/33404791',
    es: 'Schwan y Boling — World War II Remembered (WorldCat)',
    en: 'Schwan and Boling — World War II Remembered (WorldCat)',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Krueger%27s_Men',
    es: 'Lawrence Malkin — Krueger’s Men',
    en: 'Lawrence Malkin — Krueger’s Men',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Adolf_Burger',
    es: 'Adolf Burger — testimonio de Sachsenhausen (The Devil’s Workshop)',
    en: 'Adolf Burger — Sachsenhausen memoir (The Devil’s Workshop)',
  },
  {
    href: 'https://collections.ushmm.org/search/catalog/irn524843',
    es: 'Museo del Holocausto de EE. UU. — 1 corona de Theresienstadt',
    en: 'U.S. Holocaust Memorial Museum — Theresienstadt 1 krone',
  },
  {
    href: 'https://digital.kenyon.edu/bulmash/1174',
    es: 'Kenyon / Bulmash — Currency Notes from Theresienstadt',
    en: 'Kenyon / Bulmash — Currency Notes from Theresienstadt',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Japanese_invasion_money',
    es: 'Wikipedia — Japanese invasion money',
    en: 'Wikipedia — Japanese invasion money',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Japanese_military_yen',
    es: 'Wikipedia — yen militar japonés',
    en: 'Wikipedia — Japanese military yen',
  },
  {
    href: 'https://en.wikipedia.org/wiki/B_yen',
    es: 'Wikipedia — yen B de Okinawa',
    en: 'Wikipedia — B yen (Okinawa)',
  },
  {
    href: 'https://en.numista.com/384168',
    es: 'Numista — 5 chelines BAFSV, 1.ª serie',
    en: 'Numista — BAFSV 5 shillings, 1st series',
  },
  {
    href: 'https://rapc-association.org.uk/pay-services-history/ww2/bafsv.html',
    es: 'Royal Army Pay Corps — historia de los BAFSV',
    en: 'Royal Army Pay Corps — BAFSV history',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Banknotes_of_the_British_Armed_Forces',
    es: 'Wikipedia — Banknotes of the British Armed Forces',
    en: 'Wikipedia — Banknotes of the British Armed Forces',
  },
  {
    href: 'https://coinweek.com/the-red-r-dollar-how-a-failed-wartime-paper-test-created-a-collector-classic/',
    es: 'CoinWeek — experimentales R y S de 1944',
    en: 'CoinWeek — 1944 R and S experimentals',
  },
  {
    href: 'http://www.neilsberman.com/currency/PaperMoneyoftheUS_Part5_Emergency_Notes.pdf',
    es: 'Friedberg / Berman — Emergency Notes (tiradas HAWAII y sello amarillo)',
    en: 'Friedberg / Berman — Emergency Notes (HAWAII and yellow-seal printages)',
  },
  {
    href: 'https://learn.apmex.com/answers/what-are-north-african-notes/',
    es: 'APMEX — certificados de sello amarillo',
    en: 'APMEX — North Africa yellow-seal notes',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Occupation_of_the_Channel_Islands',
    es: 'Wikipedia — ocupación de las islas del Canal',
    en: 'Wikipedia — Occupation of the Channel Islands',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Allied_occupation_of_Austria',
    es: 'Wikipedia — ocupación aliada de Austria (AM-schilling)',
    en: 'Wikipedia — Allied occupation of Austria (AM-schilling)',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Hungarian_peng%C5%91',
    es: 'Wikipedia — pengő húngaro (emisión soviética de 1944)',
    en: 'Wikipedia — Hungarian pengő (1944 Soviet issue)',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Dutch_guilder',
    es: 'Wikipedia — florín neerlandés (muntbiljetten de liberación)',
    en: 'Wikipedia — Dutch guilder (liberation muntbiljetten)',
  },
  {
    href: 'https://en.wikipedia.org/wiki/%C5%81%C3%B3d%C5%BA_Ghetto',
    es: 'Wikipedia — gueto de Łódź (Quittungen)',
    en: 'Wikipedia — Łódź Ghetto (Quittungen)',
  },
];

export function wwiiEmergencyPath(locale: Locale): string {
  return locale === 'en' ? `/en${WWII_EMERGENCY_PATH_EN}` : WWII_EMERGENCY_PATH;
}

export const wwiiEmergencyDedicatedSlugs = [
  WWII_EMERGENCY_PATH.replace(/^\/|\/$/g, ''),
  WWII_EMERGENCY_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;

