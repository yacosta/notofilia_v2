import type { CatalogSource } from './catalog';
import type { Locale } from '../lib/locale-paths';

export const EDUCATIONAL_SERIES_PATH = '/coleccion/estados-unidos/serie-educativa-1896/';
export const EDUCATIONAL_SERIES_PATH_EN = '/collection/united-states/educational-series-1896/';

export const educationalSeriesCopy = {
  es: {
    nav: 'Serie educativa de 1896',
    home: 'Inicio',
    parent: 'Estados Unidos',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Serie educativa de 1896',
    metaDescription:
      'Certificados de plata de 1896: History Instructing Youth, Ciencia y Electricidad. Friedberg 224–270, el giro de 1899 y las fuentes. Sin ejemplares en esta vitrina.',
    title: 'Serie educativa de 1896',
    kicker: 'Certificados de plata',
    lead:
      'Tres certificados de plata de tamaño grande —1, 2 y 5 dólares— encargados a muralistas y retirados a los pocos años. Esta página no publica un ejemplar: las fichas llegarán cuando se fotografíen las piezas.',
    published: '2026-09-24',
    dateLabel: '24 de septiembre de 2026',
    sourcesTitle: 'Fuentes',
    marketKind: 'Rangos de mercado secundario (no son martillos de Notofilia)',
    marketNote:
      'Las cifras en dólares del texto son observaciones de listados de dealers, notas de subasta y artículos citados abajo. No son precios de esta casa, no hay oferta de venta y no se verificó cada martillo uno a uno.',
    parentCta: 'Volver a la vitrina de Estados Unidos',
  },
  en: {
    nav: '1896 Educational Series',
    home: 'Home',
    parent: 'United States',
    breadcrumb: 'Breadcrumb',
    metaTitle: '1896 Educational Series',
    metaDescription:
      '1896 silver certificates: History Instructing Youth, Science, and Electricity. Friedberg 224–270, the 1899 turn, and the sources. No examples in this case.',
    title: '1896 Educational Series',
    kicker: 'Silver certificates',
    lead:
      'Three large-size silver certificates — $1, $2, and $5 — commissioned from muralists and withdrawn within a few years. This page does not publish an example: note pages will follow when the pieces are photographed.',
    published: '2026-09-24',
    dateLabel: 'September 24, 2026',
    sourcesTitle: 'Sources',
    marketKind: 'Secondary-market ranges (not Notofilia hammers)',
    marketNote:
      'Dollar figures in the text are observations from dealer lists, auction notes, and articles cited below. They are not prices of this house, not an offer for sale, and not hammers verified one by one.',
    parentCta: 'Back to the United States case',
  },
} as const;

export const educationalSeriesSources: CatalogSource[] = [
  {
    href: 'https://en.wikipedia.org/wiki/Educational_Series',
    es: 'Wikipedia — Educational Series',
    en: 'Wikipedia — Educational Series',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Silver_certificate_(United_States)',
    es: 'Wikipedia — Silver certificate (United States)',
    en: 'Wikipedia — Silver certificate (United States)',
  },
  {
    href: 'https://en.wikipedia.org/wiki/History_Instructing_Youth',
    es: 'Wikipedia — History Instructing Youth',
    en: 'Wikipedia — History Instructing Youth',
  },
  {
    href: 'https://en.wikipedia.org/wiki/World%27s_Columbian_Exposition',
    es: 'Wikipedia — World’s Columbian Exposition',
    en: 'Wikipedia — World’s Columbian Exposition',
  },
  {
    href: 'https://smarthistory.org/white-city-and-fairgrounds/',
    es: 'Smarthistory — The White City and the fairgrounds',
    en: 'Smarthistory — The White City and the fairgrounds',
  },
  {
    href: 'https://www.pmgnotes.com/news/article/4516/Educational-Series-Notes/',
    es: 'PMG — The Making of History: Educational Series (parte 1)',
    en: 'PMG — The Making of History: Educational Series (part 1)',
  },
  {
    href: 'https://www.pmgnotes.com/news/article/4622/Educational-Series-Notes/',
    es: 'PMG — The Making of History: Educational Series (parte 2)',
    en: 'PMG — The Making of History: Educational Series (part 2)',
  },
  {
    href: 'https://www.pmgnotes.com/news/article/4101/',
    es: 'PMG — pliegos sin cortar de 1896 (Bass)',
    en: 'PMG — 1896 uncut sheets (Bass)',
  },
  {
    href: 'https://www.coinbooks.org/esylum_v18n51a21.html',
    es: 'The E-Sylum — 1896 Educational Series: a flawed experiment',
    en: 'The E-Sylum — 1896 Educational Series: a flawed experiment',
  },
  {
    href: 'https://www.coinbooks.org/v28/esylum_v28n17a24.html',
    es: 'The E-Sylum — the artist behind the Educational Series',
    en: 'The E-Sylum — the artist behind the Educational Series',
  },
  {
    href: 'https://www.pcgs.com/news/closer-look-series-of-1896-2-dollar-silver-certificate',
    es: 'PCGS — el certificado de plata de 2 dólares de 1896',
    en: 'PCGS — the Series of 1896 $2 silver certificate',
  },
  {
    href: 'https://worldmoneyart.com/us-educational-notes-of-1896/',
    es: 'World Money Art — US “Educational” Notes of 1896',
    en: 'World Money Art — US “Educational” Notes of 1896',
  },
  {
    href: 'https://www.greatamericancoincompany.com/blogs/knowledge-base/a-brief-history-of-silver-certificates-when-they-were-made-and-why',
    es: 'Great American Coin Company — historia breve de los certificados de plata',
    en: 'Great American Coin Company — a brief history of silver certificates',
  },
  {
    href: 'https://millercenter.org/president/cleveland/domestic-affairs',
    es: 'Miller Center — Grover Cleveland, asuntos internos',
    en: 'Miller Center — Grover Cleveland, domestic affairs',
  },
  {
    href: 'https://coinweek.com/1899-2-silver-certificate-the-mini-porthole-note-with-a-rare-taft-era-signature-pair/',
    es: 'CoinWeek — el 2 dólares de 1899 y el antecedente de 1886',
    en: 'CoinWeek — the 1899 $2 and the 1886 precedent',
  },
  {
    href: 'https://coinweek.com/stacks-bowers-presents-the-harry-w-bass-jr-collection-of-educational-notes-august-17th/',
    es: 'CoinWeek — la colección Harry W. Bass Jr. de Educational Notes',
    en: 'CoinWeek — the Harry W. Bass Jr. collection of Educational Notes',
  },
  {
    href: 'https://coinweek.com/pmg-certifies-the-holy-grail-of-uncut-currency/',
    es: 'CoinWeek — PMG y el pliego Monarch de 1 dólar',
    en: 'CoinWeek — PMG and the Monarch $1 sheet',
  },
  {
    href: 'https://coinweek.com/1896-silver-certificate-educational-note-set-at-greatcollections/',
    es: 'CoinWeek — juego Educational de 1896 en GreatCollections',
    en: 'CoinWeek — 1896 Educational set at GreatCollections',
  },
  {
    href: 'https://www.saharacoins.com/sahara-coins-knowledge-center/the-educational-notes-of-1896-history-designs-value-and-collecting-guide',
    es: 'Sahara Coins — guía de las Educational Notes de 1896',
    en: 'Sahara Coins — guide to the 1896 Educational Notes',
  },
  {
    href: 'https://collectiblescurrency.com/collections/1896-5-five-dollars-silver-certificates-educational-note',
    es: 'Collectibles Currency — el 5 dólares Educational de 1896',
    en: 'Collectibles Currency — the 1896 $5 Educational note',
  },
  {
    href: 'https://www.bellevuerarecoins.com/ambitious-paper-currency-lasted/',
    es: 'Bellevue Rare Coins — por qué no duró el diseño',
    en: 'Bellevue Rare Coins — why the design did not last',
  },
  {
    href: 'https://playingintheworldgame.com/2015/02/26/beauty-in-paper-the-1896-educational-currency/',
    es: 'Playing in the World Game — Beauty in Paper',
    en: 'Playing in the World Game — Beauty in Paper',
  },
  {
    href: 'https://www.worldbanknotescoins.com/2014/10/1896-five-dollar-silver-certificate-educational-series.html',
    es: 'World Banknotes & Coins — el 5 dólares de 1896',
    en: 'World Banknotes & Coins — the 1896 $5',
  },
  {
    href: 'https://intelligentcollector.com/rediscovering-the-artist-behind-americas-most-beautiful-banknote/',
    es: 'Intelligent Collector — la modelo del 5 dólares',
    en: 'Intelligent Collector — the model for the $5',
  },
  {
    href: 'https://currency.ha.com/c/item.zx?saleNo=3578&lotNo=20039',
    es: 'Heritage — prueba de anverso Fr. 268 (lote de archivo, no es una pieza de esta colección)',
    en: 'Heritage — Fr. 268 face proof (archive lot, not a piece in this collection)',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Presidency_of_William_McKinley',
    es: 'Wikipedia — presidencia de William McKinley',
    en: 'Wikipedia — Presidency of William McKinley',
  },
  {
    href: 'https://www.reddit.com/r/papermoney/comments/o36r2x/1899_5_silver_certificate_chief_story_in_the/',
    es: 'r/papermoney — relato del 5 dólares «Chief» de 1899',
    en: 'r/papermoney — account of the 1899 $5 “Chief”',
  },
  {
    href: 'https://www.greatcollections.com/Auction-Archive/US-Currency-Prices/34/US-Paper-Money/146/Large-Size-Notes/10003853/Fr-269-1896-5-Silver-Certificate-Bruce-Roberts',
    es: 'GreatCollections — archivo Fr. 269 Bruce / Roberts',
    en: 'GreatCollections — Fr. 269 Bruce / Roberts archive',
  },
  {
    href: 'https://chulavistacoins.com/product/1896-1-educational-note-silver-certificate-fr225-pmg-very-good-8/',
    es: 'CV Coins — listado Fr. 225 en PMG Very Good 8 (precio de dealer, no martillo)',
    en: 'CV Coins — Fr. 225 listed PMG Very Good 8 (dealer price, not a hammer)',
  },
  {
    href: 'https://findbullionprices.com/blog/silver-certificate-value/',
    es: 'Find Bullion Prices — rangos citados para certificados de plata',
    en: 'Find Bullion Prices — ranges cited for silver certificates',
  },
  {
    href: 'https://www.youtube.com/watch?v=VQ36MwzzWeE',
    es: 'Vídeo citado para un 2 dólares PMG 67 EPQ (no verificado aquí)',
    en: 'Video cited for a PMG 67 EPQ $2 (not verified here)',
  },
];

export function educationalSeriesPath(locale: Locale): string {
  return locale === 'en' ? `/en${EDUCATIONAL_SERIES_PATH_EN}` : EDUCATIONAL_SERIES_PATH;
}

export const educationalSeriesParentPath = '/coleccion/estados-unidos/';

export const educationalSeriesDedicatedSlugs = [
  EDUCATIONAL_SERIES_PATH.replace(/^\/|\/$/g, ''),
  EDUCATIONAL_SERIES_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
