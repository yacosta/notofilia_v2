import type { CatalogSource, LocalizedText } from './catalog';
import {
  COLOMBIA_COINAGE_PATH,
  colombiaCoinageChapters,
  type ColombiaCoinageChapterId,
} from './colombia-coinage';
import { LAZARETTOS_NUMISMATICS_PATH } from './lazarettos-numismatics';

export type ColombiaCoinagePieceId =
  | '1-escudo-popayan-1801-p-jf'
  | '1-real-bogota-1810-nr-jf'
  | '1-4-real-santa-marta-1820'
  | '2-centavos-lazareto-1921';

export type ColombiaCoinagePiece = {
  id: ColombiaCoinagePieceId;
  path: string;
  chapterId: ColombiaCoinageChapterId;
  year: string;
  denomination: LocalizedText;
  metal: LocalizedText;
  mint: LocalizedText;
  reference: string;
  title: LocalizedText;
  kicker: LocalizedText;
  lead: LocalizedText;
  description: LocalizedText;
  frontCaption: LocalizedText;
  backCaption: LocalizedText;
  scarcity: LocalizedText;
  grade: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
  };
  sources: CatalogSource[];
  /** Internal essays that discuss this piece. Spanish paths; pages localize them. */
  related?: ReadonlyArray<{ href: string; label: LocalizedText }>;
};

export const colombiaCoinagePieces: ColombiaCoinagePiece[] = [
  {
    id: '1-escudo-popayan-1801-p-jf',
    path: `${COLOMBIA_COINAGE_PATH}1-escudo-popayan-1801-p-jf/`,
    chapterId: 'santa-fe',
    year: '1801',
    denomination: { es: '1 escudo', en: '1 escudo' },
    metal: { es: 'Oro .875 (tipo)', en: 'Gold .875 (type specification)' },
    mint: {
      es: 'Popayán (P)',
      en: 'Popayán (P)',
    },
    reference: 'KM# 56.2 · Restrepo 85.20 · Calicó 1160 · Fr#59 · Numista N#52837',
    title: {
      es: '1 escudo · Popayán P–JF · 1801',
      en: '1 escudo · Popayán P–JF · 1801',
    },
    kicker: {
      es: 'Colombia-Numismática · Popayán colonial',
      en: 'Colombia-Numismatics · colonial Popayán',
    },
    lead: {
      es: 'Un escudo de oro de 1801, labrado en Popayán a nombre de Carlos IV. El anverso lleva el busto y la fecha; el reverso, el valor 1 S y las marcas P · JF.',
      en: 'An 1801 gold escudo struck at Popayán in the name of Charles IV. The obverse carries the bust and the date; the reverse, the value 1 S and the marks P · JF.',
    },
    description: {
      es: 'En 1801 la casa de Popayán, en labores desde 1758, seguía labrando oro de cordoncillo a nombre de Carlos IV. Este disco muestra la fecha 1801 bajo el retrato, el valor 1 S y, a ambos lados del vellocino, las marcas P y JF. Eso es el tipo KM# 56.2 —Restrepo 85.20, Calicó 1160, Friedberg 59—, no el KM# 56.1 de Santa Fe con marca NR–JJ. La leyenda del anverso, normalizada, lee CAROL · IIII · D · G · HISP · ET IND · R · 1801 (IIII, no IV); abre Carolus IIII Dei Gratia Hispaniarum et Indiarum Rex: «Carlos IV, por la gracia de Dios, rey de las Españas y de las Indias». La del reverso, IN · UTROQ · FELIX · A · D ·, abrevia In utroque felix, auspice Deo. El 1 a la izquierda y la S a la derecha marcan un escudo, no un 15. El oro .875, unos 3,38 g de tipo y un módulo de 18 o 19 mm (Numista da 19 mm) son cifras de catálogo: este ejemplar no se pesó ni se midió. No hay tirada verificada; las tablas BanRep de moneda empiezan en 1987. Sin encapsular; las fotografías no autentican el metal. No es el medio escudo de Madrid de 1757 ni el real de plata de Bogotá de 1810.',
      en: 'In 1801 the Popayán mint, at work since 1758, was still striking milled gold in the name of Charles IV. This disc shows the date 1801 under the portrait, the value 1 S, and, on either side of the fleece, the marks P and JF. That is type KM# 56.2 — Restrepo 85.20, Calicó 1160, Friedberg 59 — not Santa Fe’s KM# 56.1 with mintmark NR–JJ. Normalized obverse legend: CAROL · IIII · D · G · HISP · ET IND · R · 1801 (IIII, not IV); it expands to Carolus IIII Dei Gratia Hispaniarum et Indiarum Rex: “Charles IV, by the grace of God, king of the Spains and the Indies.” Reverse: IN · UTROQ · FELIX · A · D ·, for In utroque felix, auspice Deo. The 1 at left and S at right mark one escudo, not 15. Gold .875, a type weight of about 3.38 g, and a module of 18 or 19 mm (Numista gives 19 mm) are catalogue figures: this disc was not weighed or measured. No mintage is verified; BanRep’s coin tables begin in 1987. Unslabbed; photographs do not authenticate the metal. It is not the 1757 Madrid half escudo, nor Bogotá’s 1810 silver real.',
    },
    frontCaption: {
      es: 'Anverso: busto de Carlos IV a la derecha, leyenda con IIII y fecha 1801.',
      en: 'Obverse: bust of Charles IV facing right, legend with IIII, and the date 1801.',
    },
    backCaption: {
      es: 'Reverso: escudo coronado y Toisón; 1 S; marcas P y JF a ambos lados del vellocino.',
      en: 'Reverse: crowned arms and the Golden Fleece; 1 S; marks P and JF beside the fleece.',
    },
    scarcity: {
      es: 'Numista cubre el tipo KM# 56.2 (N#52837) y no publica una tirada del 1801 P–JF. Heritage y Sedwick documentan esa fecha y ensaye en ejemplares ajenos a esta ficha. No se publica aquí un censo de encapsulados ni un martillo.',
      en: 'Numista covers type KM# 56.2 (N#52837) and does not publish an 1801 P–JF mintage. Heritage and Sedwick document that date and assayer on specimens that are not this record. No slab census and no hammer are published here.',
    },
    grade: {
      es: 'Sin encapsular; sin grado asignado. Retrato aplanado, rayas y marcas de contacto; fecha, 1 S y P–JF legibles. Las fotografías no autentican el disco (colección privada)',
      en: 'Unslabbed; no grade assigned. Flattened portrait, hairlines and contact marks; date, 1 S, and P–JF readable. Photographs do not authenticate the disc (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-popayan-1-escudo-1801-charles-iv-p-jf-composite.jpg',
      front: '/images/catalog/colombia/colombia-popayan-1-escudo-1801-charles-iv-p-jf-front.jpg',
      back: '/images/catalog/colombia/colombia-popayan-1-escudo-1801-charles-iv-p-jf-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/52837',
        es: 'Numista — 1 escudo, Carlos IV, Colombia (N#52837)',
        en: 'Numista — 1 escudo, Charles IV, Colombia (N#52837)',
        note: {
          es: 'KM# 56.2; oro de tipo .875; ceca P de Popayán. No se cita aquí una tirada.',
          en: 'KM# 56.2; type gold .875; P mint of Popayán. No mintage is cited here.',
        },
      },
      {
        href: 'https://coins.ha.com/itm/colombia/colombia-charles-iv-gold-escudo-1801-p-jf-au58-ngc-/a/232321-64310.s',
        es: 'Heritage — 1 escudo de Popayán, Carlos IV, 1801 P–JF',
        en: 'Heritage — Popayán 1 escudo, Charles IV, 1801 P–JF',
        note: {
          es: 'Comparable de subasta de la combinación 1801 P–JF. No es este ejemplar; no se publican precios ni el grado de esa pieza.',
          en: 'Auction comparable for the 1801 P–JF combination. Not this specimen; prices and that coin’s grade are not published.',
        },
      },
      {
        href: 'https://www.numisbids.com/sale/10611/lot/1048',
        es: 'Sedwick / NumisBids — 1 escudo de Popayán, Carlos IV, 1801 JF',
        en: 'Sedwick / NumisBids — Popayán 1 escudo, Charles IV, 1801 JF',
        note: {
          es: 'Reúne KM# 56.2, Restrepo 85.20, Calicó 1160 y Friedberg 59. Comparable; no es esta ficha y no se publican precios.',
          en: 'Gathers KM# 56.2, Restrepo 85.20, Calicó 1160, and Friedberg 59. A comparable; not this record, and prices are not published.',
        },
      },
      {
        href: 'https://enciclopedia.banrepcultural.org/Casa_de_acu%C3%B1aci%C3%B3n_de_moneda_de_Popay%C3%A1n',
        es: 'Enciclopedia Banrepcultural — Casa de acuñación de Popayán',
        en: 'Banrepcultural Encyclopedia — The Popayán mint',
        note: {
          es: 'La casa comenzó a labrar en 1758. Contexto de ceca, no autenticación de este disco.',
          en: 'The house began striking in 1758. Mint context, not authentication of this disc.',
        },
      },
    ],
  },
  {
    id: '1-real-bogota-1810-nr-jf',
    path: `${COLOMBIA_COINAGE_PATH}1-real-bogota-1810-nr-jf/`,
    chapterId: 'santa-fe',
    year: '1810',
    denomination: { es: '1 real', en: '1 real' },
    metal: { es: 'Plata .896 (tipo)', en: 'Silver .896 (type specification)' },
    mint: {
      es: 'Santa Fe de Nuevo Reino, Bogotá (NR)',
      en: 'Santa Fe de Nuevo Reino, Bogotá (NR)',
    },
    reference: 'KM# 68.1 · Restrepo 111.3 · Calicó 651 · Numista N#41692',
    title: {
      es: '1 real · Bogotá NR–JF · 1810',
      en: '1 real · Bogotá NR–JF · 1810',
    },
    kicker: {
      es: 'Colombia-Numismática · Santa Fe colonial',
      en: 'Colombia-Numismatics · colonial Santa Fe',
    },
    lead: {
      es: 'Un real de plata de 1810, labrado en Santa Fe de Nuevo Reino en nombre de Fernando VII. El anverso conserva el busto de Carlos IV; el reverso identifica la ceca NR, el valor 1R y el ensaye JF.',
      en: 'An 1810 silver real struck at Santa Fe de Nuevo Reino in the name of Ferdinand VII. The obverse keeps Charles IV’s bust; the reverse names mint NR, value 1R, and assayer JF.',
    },
    description: {
      es: 'En 1810 la Casa de Santa Fe seguía labrando el real colonial de cordoncillo, ya con orla de Fernando VII. Este disco muestra la fecha 1810 bajo el retrato, la marca NR de Nuevo Reino (Bogotá) y el ensaye JF. El tipo KM# 68.1 retiene el busto de Carlos IV a la derecha: el nombre del rey y el retrato no coinciden. La leyenda del anverso, normalizada, lee FERDND · VII · DEI · GRATIA · 1810; la del reverso, HISPAN · ET IND · REX · NR · 1R · JF. Las fotografías no bastan para el sobrefecha 1810/9 ni para el ensaye repunchado JF/JJ (Restrepo 111.3a); esta ficha registra el 1810 JF ordinario, Restrepo 111.3 y Calicó 651. La plata .896 y el peso de tipo de unos 3,38 g son cifras de catálogo, no medidas de este ejemplar. No hay tirada verificada: las tablas BanRep de moneda empiezan en 1987. No es el cuartillo de cobre de sitio de Santa Marta de 1820 ni un 1 real de ceca peninsular.',
      en: 'In 1810 the Santa Fe mint was still striking the reeded colonial real, already with Ferdinand VII’s legend. This disc shows the date 1810 under the portrait, mintmark NR for Nuevo Reino (Bogotá), and assayer JF. Type KM# 68.1 keeps Charles IV’s bust facing right: the king named in the legend is not the bust on the coin. Normalized obverse legend: FERDND · VII · DEI · GRATIA · 1810; reverse: HISPAN · ET IND · REX · NR · 1R · JF. The photographs do not establish the 1810/9 overdate or the JF/JJ recut assayer (Restrepo 111.3a); this record is the ordinary 1810 JF issue, Restrepo 111.3 and Calicó 651. Silver .896 and a type weight of about 3.38 g are catalogue figures, not measurements of this specimen. No mintage is verified: BanRep’s coin tables begin in 1987. It is not the 1820 Santa Marta copper siege cuartillo, nor a 1-real of a Spanish peninsula mint.',
    },
    frontCaption: {
      es: 'Anverso: busto de Carlos IV a la derecha, leyenda de Fernando VII y fecha 1810.',
      en: 'Obverse: bust of Charles IV facing right, Ferdinand VII legend, and the date 1810.',
    },
    backCaption: {
      es: 'Reverso: escudo coronado entre columnas; NR, 1R y ensaye JF en la orla.',
      en: 'Reverse: crowned arms between pillars; NR, 1R, and assayer JF in the legend.',
    },
    scarcity: {
      es: 'Numista cubre el tipo KM# 68.1 (N#41692) y no publica una tirada del 1810 JF. Sedwick documenta esa fecha y ensaye, y trata aparte la variedad JF/JJ. Esta ficha no inventa un censo de encapsulados ni atribuye esa variedad.',
      en: 'Numista covers type KM# 68.1 (N#41692) and does not publish an 1810 JF mintage. Sedwick documents that date and assayer, and treats the JF/JJ variety separately. This record does not invent a slab census or assign that variety.',
    },
    grade: {
      es: 'Circulada, con desgaste marcado en el retrato y mejor lectura en el reverso; gris con recesos más oscuros. Sin encapsular (colección privada)',
      en: 'Circulated, with heavy portrait wear and a clearer reverse; gray surfaces with darker recesses. Unslabbed (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-bogota-1-real-1810-ferdinand-vii-nr-jf-composite.jpg',
      front: '/images/catalog/colombia/colombia-bogota-1-real-1810-ferdinand-vii-nr-jf-front.jpg',
      back: '/images/catalog/colombia/colombia-bogota-1-real-1810-ferdinand-vii-nr-jf-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/41692',
        es: 'Numista — 1 real, Fernando VII (retrato de Carlos IV), Colombia (N#41692)',
        en: 'Numista — 1 real, Ferdinand VII (portrait of Charles IV), Colombia (N#41692)',
        note: {
          es: 'KM# 68.1; plata de tipo .896; ceca NR de Santa Fe / Bogotá. No se cita aquí una tirada.',
          en: 'KM# 68.1; type silver .896; NR mint of Santa Fe / Bogotá. No mintage is cited here.',
        },
      },
      {
        href: 'https://auction.sedwickcoins.com/COLOMBIA-Bogot-bust-1-real-Ferdinand-VII-1810-JF-NGC-VF-30-ex-Becerra_i56359917',
        es: 'Sedwick — 1 real de Bogotá, Fernando VII, 1810 JF',
        en: 'Sedwick — Bogotá 1 real, Ferdinand VII, 1810 JF',
        note: {
          es: 'Comparable de subasta del 1810 JF (Restrepo 111.3; Calicó 651). No es este ejemplar; no se publican precios.',
          en: 'Auction comparable for the 1810 JF issue (Restrepo 111.3; Calicó 651). Not this specimen; prices are not published.',
        },
      },
      {
        href: 'https://auction.sedwickcoins.com/Bogota-Colombia-bust-1-real-Ferdinand-VII-bust-of-Charles-IV-1810JF-JJ-scarce-KM-68-1-Restr_i12160048',
        es: 'Sedwick — 1 real de Bogotá, busto de Carlos IV, variedad 1810 JF/JJ',
        en: 'Sedwick — Bogotá 1 real, bust of Charles IV, 1810 JF/JJ variety',
        note: {
          es: 'Documenta el retrato retenido de Carlos IV y la variedad Restrepo 111.3a, no atribuida a esta ficha.',
          en: 'Documents the retained Charles IV bust and Restrepo 111.3a, not attributed to this record.',
        },
      },
    ],
  },
  {
    id: '1-4-real-santa-marta-1820',
    path: `${COLOMBIA_COINAGE_PATH}1-4-real-santa-marta-1820/`,
    chapterId: 'independencia',
    year: '1820',
    denomination: { es: '1/4 real', en: '1/4 real' },
    metal: { es: 'Cobre', en: 'Copper' },
    mint: {
      es: 'Santa Marta (ceca de sitio realista)',
      en: 'Santa Marta (royalist siege mint)',
    },
    reference: 'KM# B4 · Restrepo 104 · Hernández 11 · Numista N#18073',
    title: {
      es: '1/4 real · Santa Marta · 1820',
      en: '1/4 real · Santa Marta · 1820',
    },
    kicker: {
      es: 'Colombia-Numismática · Independencia',
      en: 'Colombia-Numismatics · Independence',
    },
    lead: {
      es: 'Cuartillo de cobre de sitio: corona sobre 1/4 y 1820; al otro lado, cruz que parte las letras S y M de Santa Marta.',
      en: 'A copper siege cuartillo: a crown over 1/4 and 1820; on the other side, a cross dividing the letters S and M of Santa Marta.',
    },
    description: {
      es: 'En 1820 Santa Marta seguía en manos realistas. Esta ceca de emergencia labró un cuarto de real de cobre —no el cuartillo de plata de Santa Fe o Popayán— para pagar plaza y tropa mientras duró el sitio. Hernández y los índices de denominación agrupan cuartillos patriotas y realistas entre 1813 y 1822; esta ficha es el cobre de sitio de 1820, no un censo de esos años. Numista y Restrepo lo describen así: en un lado, corona, fracción 1/4, castillo a la izquierda, espada y pirámide de balas a la derecha, y la fecha 1820; en el otro, una cruz que reparte S, M, un castillo y la espada con las balas. Las letras S M son Santa Marta. CoinVarieties anota que la facción realista fue derrotada en 1821 y que la circulación debió de ser breve; los ejemplares suelen verse poco gastados y, a la vez, mal acuñados o sobre cospel irregular. Esta pieza de la colección, sin encapsular, muestra esa labor tosca y la pátina de cobre. No es el 1/4 de plata de cornucopia de 1826–1836 (KM 85) ni el cuartillo colonial de castillos y leones de 1796–1819 (KM 63 y 67).',
      en: 'In 1820 Santa Marta was still in royalist hands. This emergency mint struck a copper quarter-real — not the silver cuartillo of Santa Fe or Popayán — to pay the square and the troop while the siege lasted. Hernández and denomination indexes group patriot and royalist cuartillos from 1813 to 1822; this record is the 1820 copper siege type, not a census of those years. Numista and Restrepo describe it thus: on one side, a crown, the fraction 1/4, a castle at left, a sword and a pyramid of shot at right, and the date 1820; on the other, a cross that divides S, M, a castle, and the sword with shot. The letters S M are Santa Marta. CoinVarieties notes that the royalist faction was defeated in 1821 and that circulation must have been brief; surviving pieces often show little wear and, at the same time, a weak strike or an irregular planchet. This collection piece, unslabbed, shows that crude work and a copper patina. It is not the silver cornucopia 1/4 of 1826–1836 (KM 85), nor the colonial lions-and-castles cuartillo of 1796–1819 (KM 63 and 67).',
    },
    frontCaption: {
      es: 'Anverso según Numista: cruz que parte S y M — Santa Marta — con el castillo y la artillería en los cuarteles inferiores.',
      en: 'Obverse as Numista assigns it: a cross dividing S and M — Santa Marta — with the castle and artillery in the lower quarters.',
    },
    backCaption: {
      es: 'Reverso según Numista: corona sobre 1/4, castillo a la izquierda, espada y balas a la derecha, fecha 1820.',
      en: 'Reverse as Numista assigns it: a crown over 1/4, castle at left, sword and shot at right, date 1820.',
    },
    scarcity: {
      es: 'Numista da rareza 54 y un peso de tipo de 2,15 g sobre 21 mm. No publica una tirada. CoinVarieties recuerda que el tipo es escaso y que los ejemplares se ven más por cospel y acuñación que por desgaste. Esta ficha no inventa un censo de encapsulados para este ejemplar.',
      en: 'Numista gives a rarity index of 54 and a type weight of 2.15 g on 21 mm. It does not publish a mintage. CoinVarieties notes that the type is scarce and that survivors are graded more for planchet and strike than for wear. This record does not invent a slab census for this specimen.',
    },
    grade: {
      es: 'Circulada, sin encapsular (colección privada)',
      en: 'Circulated, unslabbed (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-santa-marta-1-4-real-1820-composite.jpg',
      front: '/images/catalog/colombia/colombia-santa-marta-1-4-real-1820-front.jpg',
      back: '/images/catalog/colombia/colombia-santa-marta-1-4-real-1820-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/18073',
        es: 'Numista — ¼ real de Santa Marta, 1820 (N#18073)',
        en: 'Numista — Santa Marta ¼ real, 1820 (N#18073)',
        note: {
          es: 'KM# B4, Restrepo 104, Hernández 11 (Cód. 11 en la 8.ª ed. 2023); cobre de sitio; leyenda S M = Santa Marta.',
          en: 'KM# B4, Restrepo 104, Hernández 11 (Cód. 11 in the 8th ed. 2023); copper siege issue; S M = Santa Marta.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Santa_Marta_1820_1/4_real',
        es: 'CoinVarieties — Santa Marta 1820 1/4 real',
        en: 'CoinVarieties — Santa Marta 1820 1/4 real',
        note: {
          es: 'Emisión realista de cobre; la plaza cayó en 1821 y la circulación fue breve.',
          en: 'Royalist copper issue; the town fell in 1821 and circulation was brief.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
        note: {
          es: 'Cód. 11: cuarto de real de cobre de Santa Marta, 1820, con SM y cruz. No se publican precios.',
          en: 'Cód. 11: Santa Marta copper quarter-real, 1820, with SM and a cross. Prices are not published here.',
        },
      },
    ],
  },
  {
    id: '2-centavos-lazareto-1921',
    path: `${COLOMBIA_COINAGE_PATH}2-centavos-lazareto-1921/`,
    chapterId: 'republica',
    year: '1921',
    denomination: { es: '2 centavos', en: '2 centavos' },
    metal: { es: 'Cuproníquel (tipo)', en: 'Copper-nickel (type specification)' },
    mint: { es: 'Bogotá', en: 'Bogotá' },
    reference: 'KM# L10 · Restrepo 355.1 · Hernández Cód. 313 · Numista N#6830',
    title: {
      es: '2 centavos · Lazareto · 1921',
      en: '2 centavos · Lazaretto · 1921',
    },
    kicker: {
      es: 'Colombia-Numismática · Lazaretos',
      en: 'Colombia-Numismatics · Lazarettos',
    },
    lead: {
      es: 'Dos centavos de cuproníquel de 1921, labrados en Bogotá para el cordón de los lazaretos. El anverso muestra la cruz con LAZARETO y la fecha; el reverso, el valor entre ramos.',
      en: 'A 1921 cupronickel 2 centavos, struck at Bogotá for the lazaretto cordon. The obverse shows the cross with LAZARETO and the date; the reverse, the value inside a wreath.',
    },
    description: {
      es: 'En 1921 la Casa de Bogotá labró cuproníquel cuyo curso estaba limitado al cordón de los lazaretos: Agua de Dios, Contratación y Caño del Oro. Este disco muestra en el anverso la cruz con LAZARETO, la leyenda REPUBLICA DE COLOMBIA —sin tilde, como está grabada— y la fecha 1921; en el reverso, un 2 ornamental sobre CENTAVOS, dentro de una corona vegetal atada con lazo. Es el tipo KM# L10, Restrepo 355.1 y Hernández Cód. 313 (8.ª ed. 2023). Hernández agrupa en ese año, también en cuproníquel y con la misma leyenda, el 1, el 5, el 10 y el 50 centavos. Las iniciales RH del grabador Roberto Hinestrosa son rasgo del tipo, bajo el lazo del reverso; ahí queda una marca gastada y las letras no se leen con seguridad. No marcan una variedad. El peso de 3 g, el diámetro de 18,89 mm, el canto liso y la alineación moneda son cifras de catálogo: este ejemplar no se pesó ni se midió. El diseño no nombra un lazareto. El apodo coscoja nació con los pesos P/M de níquel de 1907; esta pieza no es aquel módulo, ni el bronce de 50 centavos de 1928, ni el latón de Palonegro de 1902. Sin encapsular; las fotografías no autentican el metal.',
      en: 'In 1921 the Bogotá mint struck cupronickel whose circulation was limited to the lazaretto cordon: Agua de Dios, Contratación, and Caño del Oro. This disc shows, on the obverse, the cross with LAZARETO, the legend REPUBLICA DE COLOMBIA — without an accent, as engraved — and the date 1921; on the reverse, an ornamental 2 above CENTAVOS, inside a leafy wreath tied with a bow. It is type KM# L10, Restrepo 355.1, and Hernández Cód. 313 (8th ed. 2023). Hernández groups with that year, also in cupronickel and with the same legend, the 1, 5, 10, and 50 centavos. The initials RH of engraver Roberto Hinestrosa belong to the type, under the reverse bow; a worn mark remains there and the letters cannot be read with certainty. They do not mark a variety. A weight of 3 g, a diameter of 18.89 mm, a plain edge, and coin alignment are catalogue figures: this specimen was not weighed or measured. The design names no single lazaretto. The nickname coscoja began with the 1907 nickel paper-money pesos; this piece is not that module, nor the 1928 bronze 50 centavos, nor the 1902 Palonegro brass. Unslabbed; the photographs do not authenticate the metal.',
    },
    frontCaption: {
      es: 'Anverso: cruz con LAZARETO, leyenda REPUBLICA DE COLOMBIA y fecha 1921.',
      en: 'Obverse: cross with LAZARETO, legend REPUBLICA DE COLOMBIA, and the date 1921.',
    },
    backCaption: {
      es: 'Reverso: 2 ornamental sobre CENTAVOS, dentro de una corona atada con lazo.',
      en: 'Reverse: an ornamental 2 above CENTAVOS, inside a wreath tied with a bow.',
    },
    scarcity: {
      es: 'Numista publica 300.000 piezas para el 1921 RH (N#6830). CoinVarieties, con el KM# L10 y Restrepo 355.1, publica 350.000. Son totales de catálogo en desacuerdo, no un intervalo de acuñación ni una cifra del Banco de la República: las tablas BanRep de moneda empiezan en 1987. En estado circulado el tipo se encuentra. Esta ficha no publica precios ni un censo de encapsulados.',
      en: 'Numista publishes 300,000 pieces for the 1921 RH issue (N#6830). CoinVarieties, for KM# L10 and Restrepo 355.1, publishes 350,000. Those are disagreeing catalogue totals, not a production range and not a Banco de la República figure: BanRep’s coin tables begin in 1987. The type turns up in circulated condition. This record publishes neither prices nor a slab census.',
    },
    grade: {
      es: 'Circulada, sin encapsular. Fecha 1921, leyenda y valor 2 legibles; bajo el lazo hay una marca gastada y las iniciales RH no se leen con seguridad. Las fotografías no autentican el metal (colección privada)',
      en: 'Circulated, unslabbed. The date 1921, the legend, and the value 2 are readable; a worn mark sits under the bow and the initials RH cannot be read with certainty. Photographs do not authenticate the metal (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-lazareto-2-centavos-1921-composite.jpg',
      front: '/images/catalog/colombia/colombia-lazareto-2-centavos-1921-front.jpg',
      back: '/images/catalog/colombia/colombia-lazareto-2-centavos-1921-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/6830',
        es: 'Numista — 2 centavos, moneda de lazareto, Colombia (N#6830)',
        en: 'Numista — 2 centavos, leprosarium coinage, Colombia (N#6830)',
        note: {
          es: 'KM# L10; cuproníquel de tipo, 3 g y 18,89 mm; canto liso; alineación moneda. Publica 300.000 para el 1921 RH. Las iniciales RH van bajo el lazo. No se citan aquí columnas de valor.',
          en: 'KM# L10; type copper-nickel, 3 g and 18.89 mm; plain edge; coin alignment. It publishes 300,000 for the 1921 RH issue. The initials RH sit under the bow. Value columns are not cited here.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Lazareto_1921-RH_2_centavos_token',
        es: 'CoinVarieties — 2 centavos de lazareto, 1921 RH',
        en: 'CoinVarieties — Lazaretto 2 centavos, 1921 RH',
        note: {
          es: 'Restrepo 355.1 y KM# L10; publica 350.000, y las iniciales RH de Roberto Hinestrosa. No se publican precios de subasta.',
          en: 'Restrepo 355.1 and KM# L10; it publishes 350,000, and the initials RH of Roberto Hinestrosa. Auction prices are not published.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
        note: {
          es: 'Cód. 313: 2 centavos de 1921, Bogotá, cuproníquel; anverso República de Colombia, cruz y Lazareto. En la misma tabla, el 1, el 5, el 10 y el 50 de ese año. No se publican columnas de precios ni láminas.',
          en: 'Cód. 313: 1921 2 centavos, Bogotá, copper-nickel; obverse República de Colombia, cross, and Lazareto. The same table lists the 1, 5, 10, and 50 centavos of that year. Price columns and plates are not published.',
        },
      },
      {
        href: 'https://www.banrepcultural.org/exposiciones/la-moneda-de-los-lazaretos',
        es: 'Banrepcultural — La moneda de los lazaretos',
        en: 'Banrepcultural — The coin of the lazarettos',
        note: {
          es: 'Series de 1901, 1907, 1921 y 1928 para Agua de Dios, Contratación y Caño del Oro. El diseño de esta pieza no nombra uno de los tres.',
          en: 'The 1901, 1907, 1921, and 1928 series for Agua de Dios, Contratación, and Caño del Oro. This piece’s design names none of the three.',
        },
      },
    ],
    related: [
      {
        href: LAZARETTOS_NUMISMATICS_PATH,
        label: {
          es: 'Numismática de los Lazaretos',
          en: 'Numismatics of the Lazarettos',
        },
      },
    ],
  },
];

export const coinagePieceCopy = {
  es: {
    collectionLink: 'Colombia-Numismática',
    chapterLink: 'Independencia y Gran Colombia',
    frontHeading: 'Anverso',
    backHeading: 'Reverso',
    aboutHeading: 'La pieza',
    scarcityHeading: 'Rareza',
    factsHeading: 'Datos de catálogo',
    sourcesHeading: 'Fuentes',
    referenceLabel: 'Referencia',
    yearLabel: 'Año',
    metalLabel: 'Metal',
    mintLabel: 'Ceca',
    gradeLabel: 'Conservación',
    expandImage: 'Ampliar imagen',
    closeLightbox: 'Cerrar',
  },
  en: {
    collectionLink: 'Colombia-Numismatics',
    chapterLink: 'Independence and Gran Colombia',
    frontHeading: 'Obverse',
    backHeading: 'Reverse',
    aboutHeading: 'The piece',
    scarcityHeading: 'Scarcity',
    factsHeading: 'Catalog facts',
    sourcesHeading: 'Sources',
    referenceLabel: 'Reference',
    yearLabel: 'Year',
    metalLabel: 'Metal',
    mintLabel: 'Mint',
    gradeLabel: 'Condition',
    expandImage: 'Enlarge image',
    closeLightbox: 'Close',
  },
} as const;

export function coinagePieceById(id: string): ColombiaCoinagePiece | undefined {
  return colombiaCoinagePieces.find((piece) => piece.id === id);
}

export function coinagePieceChapter(piece: ColombiaCoinagePiece) {
  return colombiaCoinageChapters.find((chapter) => chapter.id === piece.chapterId);
}

export function coinagePiecePath(piece: ColombiaCoinagePiece, locale: 'es' | 'en'): string {
  return locale === 'en' ? piece.path.replace('/coleccion/', '/en/collection/').replace('colombia-numismatica', 'colombia-numismatics') : piece.path;
}

export const colombiaCoinagePieceSlugs = colombiaCoinagePieces.map((piece) =>
  piece.path.replace(/^\/|\/$/g, ''),
);
