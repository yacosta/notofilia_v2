import type { CatalogSource, LocalizedText } from './catalog';
import {
  COLOMBIA_COINAGE_PATH,
  colombiaCoinageChapters,
  type ColombiaCoinageChapterId,
} from './colombia-coinage';
import { COSCOJAS_SANTANDER_PATH } from './coscojas-santander';
import { LAZARETTOS_NUMISMATICS_PATH } from './lazarettos-numismatics';

export type ColombiaCoinagePieceId =
  | '1-escudo-popayan-1801-p-jf'
  | '8-escudos-popayan-1801-p-jf'
  | '1-escudo-popayan-1806-p-jf'
  | '1-real-bogota-1810-nr-jf'
  | '2-reales-cartagena-1812-1814'
  | '1-4-real-santa-marta-1820'
  | '8-reales-bogota-1821-ba-jf'
  | '1-peso-bogota-1826-jf'
  | '2-centavos-lazareto-1921'
  | '50-centavos-lazareto-1931'
  | '50-centavos-santander-1902'
  | '20-centavos-santander-1902'
  | '10-centavos-santander-1902';

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
      es: 'Numista cubre el tipo KM# 56.2 (N#52837) y no publica una tirada del 1801 P–JF. Heritage y Sedwick documentan esa fecha y ensaye en ejemplares ajenos a esta ficha. No se publica aquí un censo de encapsulados ni un martillo. El 1806 P–JF es otra ficha de esta colección.',
      en: 'Numista covers type KM# 56.2 (N#52837) and does not publish an 1801 P–JF mintage. Heritage and Sedwick document that date and assayer on specimens that are not this record. No slab census and no hammer are published here. The 1806 P–JF is a separate record in this collection.',
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
    related: [
      {
        href: `${COLOMBIA_COINAGE_PATH}1-escudo-popayan-1806-p-jf/`,
        label: {
          es: '1 escudo de Popayán, 1806 P–JF',
          en: 'Popayán 1 escudo, 1806 P–JF',
        },
      },
      {
        href: `${COLOMBIA_COINAGE_PATH}8-escudos-popayan-1801-p-jf/`,
        label: {
          es: '8 escudos de Popayán, 1801 P–JF',
          en: 'Popayán 8 escudos, 1801 P–JF',
        },
      },
    ],
  },
  {
    id: '8-escudos-popayan-1801-p-jf',
    path: `${COLOMBIA_COINAGE_PATH}8-escudos-popayan-1801-p-jf/`,
    chapterId: 'santa-fe',
    year: '1801',
    denomination: { es: '8 escudos', en: '8 escudos' },
    metal: { es: 'Oro .875 (tipo)', en: 'Gold .875 (type specification)' },
    mint: {
      es: 'Popayán (P)',
      en: 'Popayán (P)',
    },
    reference: 'KM# 62.2 · Cayón 14557 · Fr#52 · Numista N#22976',
    title: {
      es: '8 escudos · Popayán P–JF · 1801',
      en: '8 escudos · Popayán P–JF · 1801',
    },
    kicker: {
      es: 'Colombia-Numismática · Popayán colonial',
      en: 'Colombia-Numismatics · colonial Popayán',
    },
    lead: {
      es: 'Ocho escudos de oro de 1801, labrados en Popayán a nombre de Carlos IV. El anverso lleva el busto y la fecha; el reverso, el valor 8 S y las marcas P · JF.',
      en: 'An 1801 gold 8 escudos struck at Popayán for Charles IV. The obverse carries the bust and the date; the reverse, the value 8 S and the marks P · JF.',
    },
    description: {
      es: 'En 1801 la casa de Popayán, en labores desde 1758, seguía labrando oro de cordoncillo a nombre de Carlos IV. Este disco muestra la fecha 1801 bajo el retrato, el valor 8 S y, a ambos lados del vellocino, las marcas P y JF. Eso es el tipo KM# 62.2 —Cayón 14557, Friedberg 52—, no el KM# 62.1 de Santa Fe con marca NR–JJ, ni el 1 escudo de la misma ceca y el mismo ensaye (KM# 56.2). La leyenda del anverso, normalizada, lee CAROL · IIII · D · G · HISP · ET IND · R · 1801 (IIII, no IV); abre Carolus IIII Dei Gratia Hispaniarum et Indiarum Rex: «Carlos IV, por la gracia de Dios, rey de las Españas y de las Indias». La del reverso, IN · UTROQ · FELIX · AUSPICE · DEO, abrevia In utroque felix, auspice Deo. El 8 a la izquierda y la S a la derecha marcan ocho escudos, la onza del sistema colonial. En inglés de coleccionista esa pieza se llama a veces doubloon; aquí la denominación queda en 8 escudos. El oro .875, 27,0674 g de tipo y un módulo de 37 mm son cifras de Numista: este ejemplar no se pesó ni se midió. Numista da al tipo el cordoncillo y la alineación de medalla; estas fotografías no muestran el canto ni fijan el eje de este disco. No hay tirada verificada: CoinVarieties deja el 1801 P–JF sin cifra, NGC no publica una acuñación de esa fecha, y las tablas BanRep de moneda empiezan en 1987. Sin encapsular; las fotografías no autentican el metal.',
      en: 'In 1801 the Popayán mint, at work since 1758, was still striking milled gold in the name of Charles IV. This disc shows the date 1801 under the portrait, the value 8 S, and, on either side of the fleece, the marks P and JF. That is type KM# 62.2 — Cayón 14557, Friedberg 52 — not Santa Fe’s KM# 62.1 with mintmark NR–JJ, and not the 1 escudo of the same mint and assayer (KM# 56.2). Normalized obverse legend: CAROL · IIII · D · G · HISP · ET IND · R · 1801 (IIII, not IV); it expands to Carolus IIII Dei Gratia Hispaniarum et Indiarum Rex: “Charles IV, by the grace of God, king of the Spains and the Indies.” Reverse: IN · UTROQ · FELIX · AUSPICE · DEO, for In utroque felix, auspice Deo. The 8 at left and S at right mark eight escudos, the onza of the colonial system. English-speaking collectors sometimes call that piece a doubloon; the catalogue denomination here stays 8 escudos. Gold .875, a type weight of 27.0674 g, and a module of 37 mm are Numista figures: this disc was not weighed or measured. Numista gives the type a reeded edge and medal alignment; these photographs do not show the edge and do not fix this disc’s axis. No mintage is verified: CoinVarieties leaves the 1801 P–JF without a figure, NGC does not publish a mintage for that date, and BanRep’s coin tables begin in 1987. Unslabbed; photographs do not authenticate the metal.',
    },
    frontCaption: {
      es: 'Anverso: busto de Carlos IV a la derecha, leyenda con IIII y fecha 1801.',
      en: 'Obverse: bust of Charles IV facing right, legend with IIII, and the date 1801.',
    },
    backCaption: {
      es: 'Reverso: escudo coronado y Toisón; 8 S; marcas P y JF a ambos lados del vellocino.',
      en: 'Reverse: crowned arms and the Golden Fleece; 8 S; marks P and JF beside the fleece.',
    },
    scarcity: {
      es: 'Numista cubre el tipo KM# 62.2 (N#22976) y lista la combinación 1801 P–JF, sin una tirada. CoinVarieties deja esa fecha y ensaye sin cifra. No se publica aquí un censo de encapsulados ni un valor de catálogo. El 1 escudo de 1801 P–JF es otra ficha de esta colección.',
      en: 'Numista covers type KM# 62.2 (N#22976) and lists the 1801 P–JF combination, without a mintage. CoinVarieties leaves that date and assayer without a figure. No slab census and no catalogue value are published here. The 1801 P–JF 1 escudo is a separate record in this collection.',
    },
    grade: {
      es: 'Sin encapsular; sin grado asignado. Fecha, 8 S y P–JF legibles. Las fotografías no autentican el disco (colección privada)',
      en: 'Unslabbed; no grade assigned. Date, 8 S, and P–JF readable. Photographs do not authenticate the disc (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-popayan-8-escudos-1801-charles-iv-p-jf-composite.jpg',
      front: '/images/catalog/colombia/colombia-popayan-8-escudos-1801-charles-iv-p-jf-front.jpg',
      back: '/images/catalog/colombia/colombia-popayan-8-escudos-1801-charles-iv-p-jf-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/22976',
        es: 'Numista — 8 escudos, Carlos IV, Colombia (N#22976)',
        en: 'Numista — 8 escudos, Charles IV, Colombia (N#22976)',
        note: {
          es: 'KM# 62.2 para la ceca P de Popayán; el 1801 P–JF figura en esa variante. Oro de tipo .875, 27,0674 g y 37 mm. No se cita aquí una tirada ni un valor.',
          en: 'KM# 62.2 for the P mint of Popayán; 1801 P–JF is listed under that variety. Type gold .875, 27.0674 g, and 37 mm. No mintage and no value are cited here.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Colombia_1801-P_JF_8_escudos',
        es: 'CoinVarieties — 8 escudos de Popayán, Carlos IV, 1801 P–JF',
        en: 'CoinVarieties — Popayán 8 escudos, Charles IV, 1801 P–JF',
        note: {
          es: 'Cayón 14557 y KM# 62.2. Deja la tirada sin cifra. El lote de Heritage que ilustra es otro ejemplar; no se publican precios.',
          en: 'Cayón 14557 and KM# 62.2. Leaves the mintage unstated. The Heritage lot it illustrates is another specimen; prices are not published.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Colombia_1796-P_JF_8_escudos',
        es: 'CoinVarieties — tipo de 8 escudos de Popayán, Carlos IV, Friedberg 52',
        en: 'CoinVarieties — Popayán Charles IV 8 escudos type, Friedberg 52',
        note: {
          es: 'Asigna Fr-52 al tipo KM# 62.2 de Popayán. Esa página es de 1796, no de este disco, y no se publican precios.',
          en: 'Assigns Fr-52 to the Popayán KM# 62.2 type. That page is 1796, not this disc, and prices are not published.',
        },
      },
      {
        href: 'https://www.ngccoin.com/price-guide/world/colombia-8-escudos-km-622-1791-1808-cuid-14400-duid-47901',
        es: 'NGC — 8 escudos de Colombia, KM# 62.2, 1791–1808',
        en: 'NGC — Colombia 8 escudos, KM# 62.2, 1791–1808',
        note: {
          es: 'Lista 1801P JF bajo KM# 62.2 y no publica una acuñación de esa fecha. No se citan aquí los valores de esa guía.',
          en: 'Lists 1801P JF under KM# 62.2 and does not publish a mintage for that date. Values on that guide are not cited here.',
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
    related: [
      {
        href: `${COLOMBIA_COINAGE_PATH}1-escudo-popayan-1801-p-jf/`,
        label: {
          es: '1 escudo de Popayán, 1801 P–JF',
          en: 'Popayán 1 escudo, 1801 P–JF',
        },
      },
      {
        href: `${COLOMBIA_COINAGE_PATH}1-escudo-popayan-1806-p-jf/`,
        label: {
          es: '1 escudo de Popayán, 1806 P–JF',
          en: 'Popayán 1 escudo, 1806 P–JF',
        },
      },
    ],
  },
  {
    id: '1-escudo-popayan-1806-p-jf',
    path: `${COLOMBIA_COINAGE_PATH}1-escudo-popayan-1806-p-jf/`,
    chapterId: 'santa-fe',
    year: '1806',
    denomination: { es: '1 escudo', en: '1 escudo' },
    metal: { es: 'Oro .875 (tipo)', en: 'Gold .875 (type specification)' },
    mint: {
      es: 'Popayán (P)',
      en: 'Popayán (P)',
    },
    reference: 'KM# 56.2 · Restrepo 85.34 · Calicó 1168 · Hernández 688 · Cayón 14127 · Fr#59 · Numista N#52837',
    title: {
      es: '1 escudo · Popayán P–JF · 1806',
      en: '1 escudo · Popayán P–JF · 1806',
    },
    kicker: {
      es: 'Colombia-Numismática · Popayán colonial',
      en: 'Colombia-Numismatics · colonial Popayán',
    },
    lead: {
      es: 'Un escudo de oro de 1806, labrado en Popayán a nombre de Carlos IV. El anverso lleva el busto y la fecha; el reverso, el valor 1 S y las marcas P · JF.',
      en: 'An 1806 gold escudo struck at Popayán for Charles IV. The obverse carries the bust and the date; the reverse, the value 1 S and the marks P · JF.',
    },
    description: {
      es: 'En 1806 la casa de Popayán, en labores desde 1758, seguía labrando oro de cordoncillo a nombre de Carlos IV. Este disco muestra la fecha 1806 bajo el retrato, el valor 1 S y, a ambos lados del vellocino, las marcas P y JF. Eso es el tipo KM# 56.2 —Restrepo 85.34, Calicó 1168, Hernández 688, Cayón 14127, Friedberg 59—, no el KM# 56.1 de Santa Fe con marca NR–JJ. Tampoco es el 1 escudo de 1801 P–JF de esta colección (Restrepo 85.20, Calicó 1160) ni el 1806 P–JT: Numista no confirma esa combinación en Hernández, y CoinVarieties la lista aparte como Restrepo 85.36. La leyenda del anverso, normalizada, lee CAROL · IIII · D · G · HISP · ET IND · R · 1806 (IIII, no IV); abre Carolus IIII Dei Gratia Hispaniarum et Indiarum Rex: «Carlos IV, por la gracia de Dios, rey de las Españas y de las Indias». La del reverso, IN · UTROQ · FELIX · A · D ·, abrevia In utroque felix, auspice Deo. El 1 a la izquierda y la S a la derecha marcan un escudo, no un 15. El oro .875, unos 3,38 g de tipo y un módulo de 19 mm son cifras de Numista: este ejemplar no se pesó ni se midió. Numista da al tipo el cordoncillo y la alineación de medalla. El canto se ve estriado en estas fotografías; no hay una toma aparte del canto, y las dos caras no fijan el eje de este disco. No hay tirada verificada: CoinVarieties deja el 1806 P–JF sin cifra, Numista no publica una acuñación, y las tablas BanRep de moneda empiezan en 1987. Sin encapsular; las fotografías no autentican el metal.',
      en: 'In 1806 the Popayán mint, at work since 1758, was still striking milled gold in the name of Charles IV. This disc shows the date 1806 under the portrait, the value 1 S, and, on either side of the fleece, the marks P and JF. That is type KM# 56.2 — Restrepo 85.34, Calicó 1168, Hernández 688, Cayón 14127, Friedberg 59 — not Santa Fe’s KM# 56.1 with mintmark NR–JJ. It is not this collection’s 1801 P–JF escudo (Restrepo 85.20, Calicó 1160), nor the 1806 P–JT: Numista does not confirm that combination in Hernández, and CoinVarieties lists it separately as Restrepo 85.36. Normalized obverse legend: CAROL · IIII · D · G · HISP · ET IND · R · 1806 (IIII, not IV); it expands to Carolus IIII Dei Gratia Hispaniarum et Indiarum Rex: “Charles IV, by the grace of God, king of the Spains and the Indies.” Reverse: IN · UTROQ · FELIX · A · D ·, for In utroque felix, auspice Deo. The 1 at left and S at right mark one escudo, not 15. Gold .875, a type weight of about 3.38 g, and a module of 19 mm are Numista figures: this disc was not weighed or measured. Numista gives the type a reeded edge and medal alignment. The edge looks reeded in these photographs; there is no separate edge view, and the two faces do not fix this disc’s axis. No mintage is verified: CoinVarieties leaves the 1806 P–JF without a figure, Numista does not publish a mintage, and BanRep’s coin tables begin in 1987. Unslabbed; photographs do not authenticate the metal.',
    },
    frontCaption: {
      es: 'Anverso: busto de Carlos IV a la derecha, leyenda con IIII y fecha 1806.',
      en: 'Obverse: bust of Charles IV facing right, legend with IIII, and the date 1806.',
    },
    backCaption: {
      es: 'Reverso: escudo coronado y Toisón; 1 S; marcas P y JF a ambos lados del vellocino.',
      en: 'Reverse: crowned arms and the Golden Fleece; 1 S; marks P and JF beside the fleece.',
    },
    scarcity: {
      es: 'Numista cubre el tipo KM# 56.2 (N#52837) y lista el 1806 P–JF como Hernández 688, sin una tirada. CoinVarieties deja esa fecha y ensaye sin cifra. El 1806 P–JT es otra combinación, no confirmada por Hernández en Numista. No se publica aquí un censo de encapsulados ni un martillo. El 1 escudo de 1801 P–JF es otra ficha de esta colección.',
      en: 'Numista covers type KM# 56.2 (N#52837) and lists the 1806 P–JF as Hernández 688, without a mintage. CoinVarieties leaves that date and assayer without a figure. The 1806 P–JT is another combination, not confirmed by Hernández on Numista. No slab census and no hammer are published here. The 1801 P–JF 1 escudo is a separate record in this collection.',
    },
    grade: {
      es: 'Sin encapsular; sin grado asignado. Retrato gastado por la circulación, reverso más legible; fecha, 1 S y P–JF se leen. Las fotografías no autentican el disco (colección privada)',
      en: 'Unslabbed; no grade assigned. Portrait worn by circulation, reverse clearer; date, 1 S, and P–JF readable. Photographs do not authenticate the disc (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-popayan-1-escudo-1806-charles-iv-p-jf-composite.jpg',
      front: '/images/catalog/colombia/colombia-popayan-1-escudo-1806-charles-iv-p-jf-front.jpg',
      back: '/images/catalog/colombia/colombia-popayan-1-escudo-1806-charles-iv-p-jf-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/52837',
        es: 'Numista — 1 escudo, Carlos IV, Colombia (N#52837)',
        en: 'Numista — 1 escudo, Charles IV, Colombia (N#52837)',
        note: {
          es: 'KM# 56.2 para la ceca P; el 1806 P–JF figura como Hernández 688. Oro de tipo .875, unos 3,38 g y 19 mm. No se cita aquí una tirada.',
          en: 'KM# 56.2 for the P mint; 1806 P–JF is listed as Hernández 688. Type gold .875, about 3.38 g, and 19 mm. No mintage is cited here.',
        },
      },
      {
        href: 'https://en.numista.com/catalogue/literature.php?id=100183',
        es: 'Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
        en: 'Hernández — Monedas y billetes de Colombia, 8th ed. 2023 (Numista L100183)',
        note: {
          es: 'Numista asigna el Cód. 688 al 1806 P–JF de este tipo. No se copian las columnas de precio de esa edición, ni se lee ahí una tirada.',
          en: 'Numista assigns Cód. 688 to the 1806 P–JF of this type. Price columns from that edition are not copied, and no mintage is read from them.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Colombia_1806-P_JF_escudo',
        es: 'CoinVarieties — 1 escudo de Popayán, Carlos IV, 1806 P–JF',
        en: 'CoinVarieties — Popayán 1 escudo, Charles IV, 1806 P–JF',
        note: {
          es: 'Cayón 14127, Friedberg 59 y KM# 56.2. Deja la tirada sin cifra. El lote de Heritage que ilustra es otro ejemplar; no se publican precios.',
          en: 'Cayón 14127, Friedberg 59, and KM# 56.2. Leaves the mintage unstated. The Heritage lot it illustrates is another specimen; prices are not published.',
        },
      },
      {
        href: 'https://www.numisbids.com/sale/10611/lot/1974',
        es: 'Sedwick / NumisBids — 1 escudo de Popayán, Carlos IV, 1806 JF',
        en: 'Sedwick / NumisBids — Popayán 1 escudo, Charles IV, 1806 JF',
        note: {
          es: 'Reúne Restrepo 85.34, KM# 56.2, Calicó 1168 y Friedberg 59. Comparable; no es esta ficha y no se publican precios.',
          en: 'Gathers Restrepo 85.34, KM# 56.2, Calicó 1168, and Friedberg 59. A comparable; not this record, and prices are not published.',
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
    related: [
      {
        href: `${COLOMBIA_COINAGE_PATH}1-escudo-popayan-1801-p-jf/`,
        label: {
          es: '1 escudo de Popayán, 1801 P–JF',
          en: 'Popayán 1 escudo, 1801 P–JF',
        },
      },
      {
        href: `${COLOMBIA_COINAGE_PATH}8-escudos-popayan-1801-p-jf/`,
        label: {
          es: '8 escudos de Popayán, 1801 P–JF',
          en: 'Popayán 8 escudos, 1801 P–JF',
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
    id: '2-reales-cartagena-1812-1814',
    path: `${COLOMBIA_COINAGE_PATH}2-reales-cartagena-1812-1814/`,
    chapterId: 'independencia',
    year: 'ca. 1812–1814',
    denomination: { es: '2 reales', en: '2 reales' },
    metal: { es: 'Cobre', en: 'Copper' },
    mint: {
      es: 'Cartagena (Estado de Cartagena)',
      en: 'Cartagena (State of Cartagena)',
    },
    reference: 'KM# D1 · Restrepo 136 · Hernández 195 · Numista N#48276',
    title: {
      es: '2 reales · Cartagena · ca. 1812–1814',
      en: '2 reales · Cartagena · ca. 1812–1814',
    },
    kicker: {
      es: 'Colombia-Numismática · Independencia',
      en: 'Colombia-Numismatics · Independence',
    },
    lead: {
      es: 'Cobre de sitio del Estado de Cartagena. Orla «…O · DE · CARTA…». La fecha no se lee; este ejemplar no se pesó ni se midió.',
      en: 'Siege copper of the State of Cartagena. Rim “…O · DE · CARTA…”. The date is unread; this specimen was not weighed or measured.',
    },
    description: {
      es: 'En 1811 la Junta de Cartagena mandó cobre de medio real y de dos reales, con leyendas en castellano. Esta ficha lo registra como 2 reales del tipo patriota, KM# D1 y Restrepo 136 (Hernández 195, Cód. 195 en la 8.ª ed. 2023, según Numista N#48276), años de catálogo 1811–1814. En el lado de la leyenda se lee la orla «…O · DE · CARTA…», con grafila de puntos y, abajo, rayos cortos. En el campo hay letras verticales gastadas: no se transcriben, y no forman un lema publicado del tipo. Numista pone en el reverso de ese 2 reales la leyenda ESTADO DE CARTAGENA VALE DOS REALES, con el valor en el centro; el ejemplo que publica lleva 1813. Aquí no se leen el año, ni «VALE DOS REALES» entero, ni un 2, ni un 1/2. El otro lado está muy gastado. Queda un relieve que puede verse como fortificación o figura heráldica; Numista describe en el anverso del tipo una figura bajo un árbol. Las fotografías no cierran esa lectura. En el canto izquierdo de ese lado hay una grieta, propia del cospel tosco. El medio real de la misma junta es KM# D2, Restrepo 131 (Numista N#48277): apila 1/2 y ESTADO / CARTA / GENA, y el catálogo da 3,45 g y 21 mm de tipo, no de este disco. La serie de 1815, Restrepo 118, es cobre de imitación, de estilo parecido. Sin fecha legible, sin marca de valor y sin peso ni diámetro de este ejemplar, la ficha no separa esos vecinos por una medida. Tampoco asigna el 4 girado de 1814 (Restrepo 136.3). Numista no publica peso ni diámetro del KM# D1. No hay tirada verificada: CoinVarieties deja la del 1814 sin cifra, y las tablas BanRep de moneda empiezan en 1987. Sin encapsular. No es el 2 reales de papel impreso en Mompós en 1812, ni el 1 real de papel de Cartagena de 1813 firmado por Gutiérrez de Piñeres, ni la moneda de la china de Santa Fe, ni el cuartillo de cobre de Santa Marta de 1820.',
      en: 'In 1811 Cartagena’s junta ordered copper pieces of a half real and of two reales, with legends in Castilian. This record lists it as a 2 reales of the patriot type, KM# D1 and Restrepo 136 (Hernández 195, Cód. 195 in the 8th ed. 2023, as Numista N#48276 lists it), catalogue years 1811–1814. On the legend side the rim reads “…O · DE · CARTA…”, with a beaded border and, at the bottom, short rays. Worn vertical letters stand in the field: they are not transcribed, and they are not a motto published for the type. Numista places on the reverse of that 2 reales the legend ESTADO DE CARTAGENA VALE DOS REALES, with the value in the center; the sample it publishes carries 1813. Here the year, the full “VALE DOS REALES”, a 2, and a 1/2 are unread. The other side is heavily worn. A device remains that can be seen as a fortification or a heraldic figure; Numista describes on the type’s obverse a figure under a tree. The photographs do not settle that reading. A crack runs into the left edge of that side, the sort of flaw these crude planchets show. The half real of the same junta is KM# D2, Restrepo 131 (Numista N#48277): it stacks 1/2 and ESTADO / CARTA / GENA, and the catalogue gives 3.45 g and 21 mm for the type, not for this disc. The 1815 series, Restrepo 118, is imitation copper of a similar style. Without a readable date, a value mark, or a weight and diameter of this specimen, the record does not split those neighbors by a measurement. It also does not assign the rotated 4 of 1814 (Restrepo 136.3). Numista publishes neither weight nor diameter for KM# D1. No mintage is verified: CoinVarieties leaves the 1814 issue without a figure, and BanRep’s coin tables begin in 1987. Unslabbed. It is not the paper 2 reales printed at Mompós in 1812, nor the Cartagena paper 1 real of 1813 signed by Gutiérrez de Piñeres, nor Santa Fe’s china coin, nor the 1820 Santa Marta copper cuartillo.',
    },
    frontCaption: {
      es: 'Lado de la leyenda: orla «…O · DE · CARTA…», grafila de puntos, letras verticales en el campo —sin transcribir— y rayos cortos abajo. Numista coloca esa leyenda en el reverso del KM# D1.',
      en: 'Legend side: rim “…O · DE · CARTA…”, a beaded border, vertical letters in the field — not transcribed — and short rays below. Numista places that legend on the reverse of KM# D1.',
    },
    backCaption: {
      es: 'Lado gastado: relieve central sin nombre seguro y una grieta en el canto izquierdo. Numista describe en el anverso del tipo una figura bajo un árbol; aquí no se lee.',
      en: 'Worn side: a central device without a secure name, and a crack in the left edge. Numista describes a figure under a tree on the type’s obverse; it is not read here.',
    },
    scarcity: {
      es: 'Numista no publica tirada, peso ni diámetro del 2 reales (N#48276). Para el medio real (N#48277) da 3,45 g y 21 mm de tipo. Este ejemplar no se pesó ni se midió, y la ficha no publica un censo de encapsulados.',
      en: 'Numista publishes no mintage, weight, or diameter for the 2 reales (N#48276). For the half real (N#48277) it gives a type weight of 3.45 g and 21 mm. This specimen was not weighed or measured, and the record publishes no slab census.',
    },
    grade: {
      es: 'Circulada, muy gastada, sin encapsular (colección privada)',
      en: 'Circulated, heavily worn, unslabbed (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-cartagena-2-reales-1812-1814-composite.jpg',
      front: '/images/catalog/colombia/colombia-cartagena-2-reales-1812-1814-front.jpg',
      back: '/images/catalog/colombia/colombia-cartagena-2-reales-1812-1814-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/48276',
        es: 'Numista — 2 reales de Cartagena, 1811–1814 (N#48276)',
        en: 'Numista — Cartagena 2 reales, 1811–1814 (N#48276)',
        note: {
          es: 'KM# D1, Restrepo 136, Hernández 195 (Cód. 195 en la 8.ª ed. 2023); cobre; leyenda ESTADO DE CARTAGENA VALE DOS REALES.',
          en: 'KM# D1, Restrepo 136, Hernández 195 (Cód. 195 in the 8th ed. 2023); copper; legend ESTADO DE CARTAGENA VALE DOS REALES.',
        },
      },
      {
        href: 'https://en.numista.com/48277',
        es: 'Numista — 1/2 real de Cartagena, 1811–1814 (N#48277)',
        en: 'Numista — Cartagena 1/2 real, 1811–1814 (N#48277)',
        note: {
          es: 'KM# D2, Restrepo 131, Hernández 75. Vecino de módulo: 3,45 g y 21 mm son cifras del tipo, no de este disco. No se publican precios.',
          en: 'KM# D2, Restrepo 131, Hernández 75. A neighbor in module: 3.45 g and 21 mm are type figures, not measurements of this disc. Prices are not published.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Cartagena_1814_2_reales',
        es: 'CoinVarieties — Cartagena 1814 2 reales',
        en: 'CoinVarieties — Cartagena 1814 2 reales',
        note: {
          es: 'Página del 1814 (KM# D1, Restrepo 136.3, 4 girado). Comparable de tipo; la fecha de esta ficha no se lee. No se publican precios.',
          en: 'The 1814 page (KM# D1, Restrepo 136.3, rotated 4). A type comparable; the date on this record is unread. Prices are not published.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
        note: {
          es: 'Cód. 195, según Numista, para este cobre. El 2 reales de 1812 que Hernández sitúa en Mompós es papel, no esta moneda. No se publican precios.',
          en: 'Cód. 195, as Numista lists it, for this copper. The 1812 2 reales Hernández places at Mompós is paper, not this coin. Prices are not published here.',
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
    id: '8-reales-bogota-1821-ba-jf',
    path: `${COLOMBIA_COINAGE_PATH}8-reales-bogota-1821-ba-jf/`,
    chapterId: 'independencia',
    year: '1821',
    denomination: { es: '8 reales', en: '8 reales' },
    metal: { es: 'Plata .666 (tipo)', en: 'Silver .666 (type specification)' },
    mint: {
      es: 'Bogotá (BA), leyenda Cundinamarca',
      en: 'Bogotá (BA), Cundinamarca legend',
    },
    reference: 'KM# C6 · Restrepo 157.4 · Hernández 285 · Numista N#35034',
    title: {
      es: '8 reales · Bogotá BA–JF · 1821',
      en: '8 reales · Bogotá BA–JF · 1821',
    },
    kicker: {
      es: 'Colombia-Numismática · Independencia',
      en: 'Colombia-Numismatics · Independence',
    },
    lead: {
      es: 'Ocho reales de 1821 con la india de la libertad americana. Al reverso, la granada de Cundinamarca, la marca BA de Bogotá y el ensaye JF.',
      en: 'An 1821 8 reales with the Indian of American liberty. On the reverse, the pomegranate of Cundinamarca, Bogotá’s BA mintmark, and assayer JF.',
    },
    description: {
      es: 'En 1821 la Casa de Bogotá labró este ocho reales de la República de Colombia. El anverso lleva el busto de la india —la libertad americana que Nariño encargó en 1813 como moneda «de la china» y que Bolívar volvió a pedir el 18 de agosto de 1819— con la leyenda REPUBLICA DE COLOMBIA, sin acento en el cuño, y la fecha 1821 bajo el perfil. El reverso muestra la granada de la Nueva Granada, la leyenda CUNDINAMARCA, la R del valor a la derecha del fruto y, en el exergo, BA · JF. BA es la marca de ceca de Bogotá en este tipo; JF, el ensayador. El catálogo lo numera KM# C6 y Restrepo 157.4, la variante con BA; Restrepo 157.3 es el 1821 JF sin esa marca. Hernández, en la 8.ª edición de 2023, abre los ocho reales de la Gran Colombia con la mula de 1820 en el cód. 282 y la lámina siguiente reúne los cód. 283, 284 y 285: el 1821 BA·JF de Bogotá es la tercera de esas filas. Numista agrupa el tipo en N#35034 y pone la granada como anverso y la india como reverso; esta ficha toma el retrato como anverso. La plata .666, unos 23 g y 37 mm son cifras de tipo: este disco no se pesó ni se midió, y las fotografías no autentican el metal. El 8 está gastado hasta casi desaparecer. Las tablas BanRep de moneda empiezan en 1987, con el peso moderno, y no traen una tirada de 1821. Esta pieza no es el columnario colonial, ni el peso republicano de 1825, ni el cuartillo de cobre de Santa Marta de 1820.',
      en: 'In 1821 the Bogotá mint struck this 8 reales of the Republic of Colombia. The obverse carries the Indian bust — American liberty, the china coin Nariño ordered in 1813 and that Bolívar asked for again on 18 August 1819 — with the legend REPUBLICA DE COLOMBIA, unaccented on the die, and the date 1821 under the profile. The reverse shows the pomegranate of New Granada, the legend CUNDINAMARCA, the R of the value to the right of the fruit, and, in the exergue, BA · JF. BA is Bogotá’s mintmark on this type; JF is the assayer. Catalogues number it KM# C6 and Restrepo 157.4, the variety with BA; Restrepo 157.3 is the 1821 JF without that mark. Hernández, in the 8th edition of 2023, opens the Gran Colombia 8 reales with the 1820 mule as Cód. 282, and the next plate gathers Cód. 283, 284, and 285: the 1821 Bogotá BA·JF is the third of those rows. Numista groups the type as N#35034 and puts the pomegranate on the obverse and the Indian on the reverse; this record takes the portrait as the obverse. Silver .666, about 23 g, and 37 mm are type figures: this disc was not weighed or measured, and the photographs do not authenticate the metal. The 8 is worn nearly smooth. BanRep’s coin tables begin in 1987, with the modern peso, and do not give an 1821 mintage. This piece is not the colonial pillar dollar, nor the republican peso of 1825, nor the 1820 Santa Marta copper cuartillo.',
    },
    frontCaption: {
      es: 'Anverso: busto de la india a la izquierda, leyenda REPUBLICA DE COLOMBIA y fecha 1821.',
      en: 'Obverse: Indian bust facing left, legend REPUBLICA DE COLOMBIA, and the date 1821.',
    },
    backCaption: {
      es: 'Reverso: granada, CUNDINAMARCA, R del valor y BA · JF en el exergo. El 8 está casi liso.',
      en: 'Reverse: pomegranate, CUNDINAMARCA, the R of the value, and BA · JF in the exergue. The 8 is nearly smooth.',
    },
    scarcity: {
      es: 'Numista cubre el tipo KM# C6 (N#35034), acuñado en 1820 y 1821, y no publica una tirada. El 1821 con BA es la combinación que más registra; el 1821 JF sin BA es Restrepo 157.3. Esta ficha no inventa un censo de encapsulados ni publica martillos.',
      en: 'Numista covers type KM# C6 (N#35034), struck in 1820 and 1821, and does not publish a mintage. The 1821 with BA is the combination it records most often; the 1821 JF without BA is Restrepo 157.3. This record does not invent a slab census or publish hammers.',
    },
    grade: {
      es: 'Circulada, sin encapsular. Perfil aplanado y rayas en el campo; se leen 1821, CUNDINAMARCA, BA, JF y la R. El 8 está casi liso. Las fotografías no autentican el disco (colección privada)',
      en: 'Circulated, unslabbed. Flattened profile and hairlines in the field; 1821, CUNDINAMARCA, BA, JF, and the R are readable. The 8 is nearly smooth. Photographs do not authenticate the disc (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-bogota-8-reales-1821-indian-head-ba-jf-composite.jpg',
      front: '/images/catalog/colombia/colombia-bogota-8-reales-1821-indian-head-ba-jf-front.jpg',
      back: '/images/catalog/colombia/colombia-bogota-8-reales-1821-indian-head-ba-jf-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/35034',
        es: 'Numista — 8 reales, República de Colombia (N#35034)',
        en: 'Numista — 8 reales, Republic of Colombia (N#35034)',
        note: {
          es: 'KM# C6; plata de tipo .666, unos 23 g y 37 mm; ceca de Bogotá; fechas 1820–1821, con la combinación 1821 Ba JF. Numista pone la granada en el anverso. No se cita aquí una tirada.',
          en: 'KM# C6; type silver .666, about 23 g and 37 mm; Bogotá mint; dates 1820–1821, including the 1821 Ba JF combination. Numista puts the pomegranate on the obverse. No mintage is cited here.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Cundinamarca_1821-Ba_JF_8_reales',
        es: 'CoinVarieties — Cundinamarca 1821-Ba JF 8 reales',
        en: 'CoinVarieties — Cundinamarca 1821-Ba JF 8 reales',
        note: {
          es: 'Tipo de busto indígena y granada, KM# C6, Restrepo 157.4, plata .666 de unos 23 g. Comparable de tipo; no es este ejemplar y no se publican precios.',
          en: 'Indian-bust and pomegranate type, KM# C6, Restrepo 157.4, .666 silver of about 23 g. A type comparable; not this specimen, and prices are not published.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
        note: {
          es: 'Ocho reales de la Gran Colombia: cód. 282 es la mula de 1820; la lámina de los cód. 283, 284 y 285 cierra con el 1821 BA·JF de Bogotá. No se publican precios ni láminas.',
          en: 'Gran Colombia 8 reales: Cód. 282 is the 1820 mule; the plate for Cód. 283, 284, and 285 ends with the 1821 Bogotá BA·JF. Prices and plates are not published.',
        },
      },
    ],
  },
  {
    id: '1-peso-bogota-1826-jf',
    path: `${COLOMBIA_COINAGE_PATH}1-peso-bogota-1826-jf/`,
    chapterId: 'independencia',
    year: '1826',
    denomination: { es: '1 peso', en: '1 peso' },
    metal: { es: 'Oro .875 (tipo)', en: 'Gold .875 (type specification)' },
    mint: { es: 'Bogotá', en: 'Bogotá' },
    reference: 'KM# 84 · Restrepo 160.3 · Fr#73 · Hernández 808 · Numista N#48297',
    title: {
      es: '1 peso · Bogotá JF · 1826',
      en: '1 peso · Bogotá JF · 1826',
    },
    kicker: {
      es: 'Colombia-Numismática · Independencia',
      en: 'Colombia-Numismatics · Independence',
    },
    lead: {
      es: 'Un peso de oro de 1826, labrado en Bogotá. El anverso lleva la Libertad y la fecha; el reverso, las armas de la Gran Colombia y las iniciales J · F.',
      en: 'An 1826 gold peso struck at Bogotá. The obverse carries Liberty and the date; the reverse, the arms of Gran Colombia and the initials J · F.',
    },
    description: {
      es: 'En 1826 la Casa de Bogotá labró este peso de oro de la República de Colombia. El anverso lleva el busto de la Libertad a la izquierda, con ínfula, la leyenda REPUBLICA DE COLOMBIA —sin tilde, como está grabada— y la fecha 1826 bajo el perfil. La ley del 14 de marzo de 1825 mandó ese busto en traje romano y la palabra libertad en la ínfula; en esta fotografía las letras de la cinta no se leen con seguridad. El reverso muestra las armas fijadas el 4 de octubre de 1821: fasces, arco y flechas cruzados, y dos cornucopias. Alrededor se leen BOGOTA, el valor 1 · P, una roseta y las iniciales J · F. Eso es el tipo KM# 84, Friedberg 73. Hernández, en la 8.ª edición de 2023, reúne el 1825 y el 1826 de Bogotá con ensaye JF en el cód. 808; Numista agrupa el tipo (N#48297) en los cód. 808–810. Las descripciones de lote del 1826 JF citan Restrepo 160.3. Numista anota además un sobrefecha 1826/5 en ese ensaye. Esta fotografía lee 1826 y no muestra un numeral bajo el 6; la ficha no asigna ese subtipo de cuño. El mismo año existe con JR y con PJ; las iniciales de este reverso se leen J · F. El oro .875, 1,69 g y 15 mm son cifras de Numista para el tipo. CoinVarieties da el mismo peso, la misma ley y Friedberg 73, y deja la tirada sin cifra. La pieza de 1826 de la Colección Numismática del Banco (NMO3974) mide 15 mm y 1,7 g; no es este disco. Este ejemplar no se pesó ni se midió. La alineación moneda es la del tipo en Numista; estas fotografías, lado a lado, no fijan el eje. Las tablas BanRep de moneda empiezan en 1987 y no traen una acuñación de 1826. Bogotá fue, según el Banco, la única ceca que labró este peso de oro entre 1825 y 1836. Un peso de oro equivalía a medio escudo; el de plata, a ocho reales. Sin encapsular; las fotografías no autentican el metal. No es el ocho reales de plata de 1821 BA–JF ni el escudo colonial de Popayán.',
      en: 'In 1826 the Bogotá mint struck this gold peso of the Republic of Colombia. The obverse carries Liberty’s bust facing left, with a headband, the legend REPUBLICA DE COLOMBIA — unaccented, as engraved — and the date 1826 under the profile. The law of 14 March 1825 ordered that bust in Roman dress and the word libertad on the headband; the letters on the band cannot be read with certainty in this photograph. The reverse shows the arms fixed on 4 October 1821: fasces, a crossed bow and arrows, and two cornucopias. Around them one reads BOGOTA, the value 1 · P, a rosette, and the initials J · F. That is type KM# 84, Friedberg 73. Hernández, in the 8th edition of 2023, gathers the 1825 and 1826 Bogotá issues with assayer JF as Cód. 808; Numista groups the type (N#48297) under Cód. 808–810. Lot descriptions of the 1826 JF cite Restrepo 160.3. Numista also notes an 1826/5 overdate for that assayer. This photograph reads 1826 and does not show a numeral under the 6; the record does not assign that die subtype. The same year exists with JR and with PJ; the initials on this reverse read J · F. Gold .875, 1.69 g, and 15 mm are Numista’s figures for the type. CoinVarieties gives the same weight, the same fineness, and Friedberg 73, and leaves the mintage unstated. The Bank’s Numismatic Collection piece of 1826 (NMO3974) measures 15 mm and 1.7 g; it is not this disc. This specimen was not weighed or measured. Coin alignment is the type’s orientation on Numista; these photographs, side by side, do not fix the axis. BanRep’s coin tables begin in 1987 and do not give an 1826 mintage. Bogotá was, according to the Bank, the only mint that struck this gold peso from 1825 through 1836. One gold peso equalled half an escudo; the silver peso, eight reales. Unslabbed; the photographs do not authenticate the metal. It is not the 1821 silver 8 reales BA–JF, nor the colonial Popayán escudo.',
    },
    frontCaption: {
      es: 'Anverso: busto de la Libertad a la izquierda, ínfula, leyenda REPUBLICA DE COLOMBIA y fecha 1826.',
      en: 'Obverse: bust of Liberty facing left, headband, legend REPUBLICA DE COLOMBIA, and the date 1826.',
    },
    backCaption: {
      es: 'Reverso: fasces, arco y flechas, cornucopias; BOGOTA, 1 · P, roseta y J · F.',
      en: 'Reverse: fasces, bow and arrows, cornucopias; BOGOTA, 1 · P, a rosette, and J · F.',
    },
    scarcity: {
      es: 'Numista cubre el tipo KM# 84 (N#48297), labrado de 1825 a 1836, y lista el 1826 JF junto a JR y PJ. Anota un sobrefecha 1826/5 en el JF; esta fotografía no lo establece. CoinVarieties deja la tirada del 1826 JF sin cifra. Las tablas BanRep de moneda empiezan en 1987. Esta ficha no publica un censo de encapsulados ni martillos.',
      en: 'Numista covers type KM# 84 (N#48297), struck from 1825 to 1836, and lists 1826 JF alongside JR and PJ. It notes an 1826/5 overdate on the JF; this photograph does not establish it. CoinVarieties leaves the 1826 JF mintage unstated. BanRep’s coin tables begin in 1987. This record publishes neither a slab census nor hammers.',
    },
    grade: {
      es: 'Sin encapsular; sin grado asignado. Se leen 1826, BOGOTA, 1 · P y J · F. El busto está gastado y el campo tiene marcas de contacto. El 6 no muestra aquí un numeral subyacente. Las fotografías no autentican el disco (colección privada)',
      en: 'Unslabbed; no grade assigned. 1826, BOGOTA, 1 · P, and J · F are readable. The bust is worn and the field shows contact marks. The 6 does not show an underlying numeral here. Photographs do not authenticate the disc (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-bogota-1-peso-1826-liberty-jf-composite.jpg',
      front: '/images/catalog/colombia/colombia-bogota-1-peso-1826-liberty-jf-front.jpg',
      back: '/images/catalog/colombia/colombia-bogota-1-peso-1826-liberty-jf-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/48297',
        es: 'Numista — 1 peso, República de Colombia (N#48297)',
        en: 'Numista — 1 peso, Republic of Colombia (N#48297)',
        note: {
          es: 'KM# 84 y Hernández 808–810. Oro de tipo .875, 1,69 g y 15 mm; técnica de cordoncillo; alineación moneda. Fechas 1825–1836, con 1826 JF, JR y PJ, y la nota de un sobrefecha 1826/5 en el JF. No se citan aquí columnas de valor ni una tirada.',
          en: 'KM# 84 and Hernández 808–810. Type gold .875, 1.69 g, and 15 mm; milled; coin alignment. Dates 1825–1836, with 1826 JF, JR, and PJ, and a note that an 1826/5 overdate exists on the JF. Value columns and a mintage are not cited here.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Colombia_1826-B_JF_peso_oro',
        es: 'CoinVarieties — peso de oro de Bogotá, 1826 JF',
        en: 'CoinVarieties — Bogotá gold peso, 1826 JF',
        note: {
          es: 'Fr-73 y KM-84; 1,69 g y oro 0,875. Deja la tirada sin cifra. El lote que ilustra es otro ejemplar; no se publican precios.',
          en: 'Fr-73 and KM-84; 1.69 g and 0.875 gold. It leaves the mintage unstated. The lot it illustrates is another specimen; prices are not published.',
        },
      },
      {
        href: 'https://colecciones.banrepcultural.org/document/moneda-de-un-peso/63a069155d96b8790f3444fb',
        es: 'Colección Numismática del Banco de la República — moneda de un peso, 1826 (NMO3974)',
        en: 'Banco de la República Numismatic Collection — one-peso coin, 1826 (NMO3974)',
        note: {
          es: 'Otro ejemplar de 1826, oro, Casa de Bogotá, 15 mm y 1,7 g. Resume la ley del 14 de marzo de 1825 —el dieciseisavo de onza, llamado colombiano de oro— y las armas de la ley del 4 de octubre de 1821. No es este disco.',
          en: 'Another 1826 specimen, gold, Bogotá mint, 15 mm and 1.7 g. It summarizes the law of 14 March 1825 — the sixteenth of an onza, called colombiano de oro — and the arms of the law of 4 October 1821. It is not this disc.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
        note: {
          es: 'Cód. 808: 1 peso de la República de Colombia, 1825 y 1826, Bogotá, ensaye J.F., anverso República de Colombia y efigie de la Libertad, ley 0,875. No se publican columnas de precios ni láminas. El peso de esa fila no se transcribe: el OCR de esta edición no se lee con seguridad.',
          en: 'Cód. 808: 1 peso of the Republic of Colombia, 1825 and 1826, Bogotá, assayer J.F., obverse República de Colombia and a Liberty bust, fineness 0.875. Price columns and plates are not published. The weight on that row is not transcribed: the OCR of this edition cannot be read with certainty.',
        },
      },
      {
        href: 'https://www.numisbids.com/sale/10256/lot/25081',
        es: 'Heritage / NumisBids — peso de oro de Bogotá, 1826 JF',
        en: 'Heritage / NumisBids — Bogotá gold peso, 1826 JF',
        note: {
          es: 'Comparable del tipo: 1826 BOGOTA-JF, KM# 84, Restrepo 160.3. No es este ejemplar y no se publican precios.',
          en: 'A type comparable: 1826 BOGOTA-JF, KM# 84, Restrepo 160.3. Not this specimen, and prices are not published.',
        },
      },
    ],
    related: [
      {
        href: `${COLOMBIA_COINAGE_PATH}8-reales-bogota-1821-ba-jf/`,
        label: {
          es: '8 reales de Bogotá, 1821 BA–JF',
          en: 'Bogotá 8 reales, 1821 BA–JF',
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
  {
    id: '50-centavos-lazareto-1931',
    path: `${COLOMBIA_COINAGE_PATH}50-centavos-lazareto-1931/`,
    chapterId: 'republica',
    year: '1931',
    denomination: { es: '50 centavos', en: '50 centavos' },
    metal: { es: 'No determinado en este ejemplar', en: 'Not determined on this specimen' },
    mint: { es: 'Sin marca de ceca en el disco', en: 'No mint mark on the disc' },
    reference: 'Atribución pendiente · no es KM# 193.1',
    title: {
      es: '50 centavos · Lazareto · 1931',
      en: '50 centavos · Lazaretto · 1931',
    },
    kicker: {
      es: 'Colombia-Numismática · Lazaretos',
      en: 'Colombia-Numismatics · Lazarettos',
    },
    lead: {
      es: 'Cincuenta centavos con la cruz de los lazaretos y la fecha 1931 en el disco. El diseño es de esa serie. KM, Hernández y Restrepo no listan ese año, y esta ficha no le asigna número.',
      en: 'A 50 centavos with the lazaretto cross and the date 1931 on the disc. The design belongs to that series. KM, Hernández, and Restrepo do not list that year, and this record assigns it no number.',
    },
    description: {
      es: 'Este disco lleva grabada la fecha 1931, la leyenda REPUBLICA DE COLOMBIA —sin tilde, como está grabada— y la cruz del tipo de lazareto. La palabra del centro está gastada: se leen con más claridad BA y RETO, resto de LAZARETO. El reverso muestra un 50 ornamental sobre CENTAVOS, dentro de una corona vegetal atada con lazo, y una estrella sobre el valor. Dos estrellas flanquean la fecha. Ese es el módulo de curso limitado al cordón de Agua de Dios, Contratación y Caño del Oro. El 50 centavos nacional de 1931 es otra moneda: KM# 193.1, plata .900, 12,5 g, busto de Simón Bolívar, escudo con cóndor y leyenda CINCUENTA CENTAVOS, G. 12.500, LEY 0.900. Nada de eso está en este ejemplar. Numista, Restrepo y Hernández documentan el 50 centavos de este diseño en 1921 (KM# L13, Restrepo 417, Hernández Cód. 316, cuproníquel, canto liso) y en 1928 (KM# L14, Restrepo 418, Hernández Cód. 317, bronce, canto estriado). También hay un 50 centavos de lazareto de 1901, de otro diseño. No listan 1931. Esta ficha no asigna L13 ni L14 a la fecha grabada. Las iniciales RH de Roberto Hinestrosa son rasgo de los tipos de 1921 y 1928, bajo el lazo; aquí no se leen. El peso, el diámetro y el canto de esos catálogos no se midieron en este disco. Las tablas BanRep de moneda empiezan en 1987 y no cubren la pieza. El diseño no nombra un lazareto. No es el 2 centavos de 1921 (KM# L10) ni el latón de Palonegro de 1902. Sin encapsular. Que 1931 sea una emisión oficial de catálogo queda sin confirmar: puede tratarse de una fecha no listada, de una reacuñación o de una fecha alterada. Las fotografías no autentican el metal.',
      en: 'This disc is engraved with the date 1931, the legend REPUBLICA DE COLOMBIA — without an accent, as engraved — and the lazaretto-type cross. The word in the centre is worn: BA and RETO, the remains of LAZARETO, read most clearly. The reverse shows an ornamental 50 above CENTAVOS, inside a leafy wreath tied with a bow, and a star above the value. Two stars flank the date. That is the module whose circulation was limited to the cordon of Agua de Dios, Contratación, and Caño del Oro. The national 50 centavos of 1931 is a different coin: KM# 193.1, .900 silver, 12.5 g, a bust of Simón Bolívar, arms with a condor, and the legend CINCUENTA CENTAVOS, G. 12.500, LEY 0.900. None of that is on this specimen. Numista, Restrepo, and Hernández document the 50 centavos of this design for 1921 (KM# L13, Restrepo 417, Hernández Cód. 316, copper-nickel, plain edge) and for 1928 (KM# L14, Restrepo 418, Hernández Cód. 317, bronze, reeded edge). There is also a 1901 lazaretto 50 centavos, of another design. They do not list 1931. This record assigns neither L13 nor L14 to the engraved date. The initials RH of Roberto Hinestrosa belong to the 1921 and 1928 types, under the bow; they cannot be read here. The weight, diameter, and edge in those catalogues were not measured on this disc. BanRep’s coin tables begin in 1987 and do not cover the piece. The design names no single lazaretto. It is not the 1921 2 centavos (KM# L10), nor the 1902 Palonegro brass. Unslabbed. Whether 1931 is an official catalogued emission remains unconfirmed: it may be an unlisted date, a restrike, or an altered date. The photographs do not authenticate the metal.',
    },
    frontCaption: {
      es: 'Anverso: cruz con LAZARETO gastado, leyenda REPUBLICA DE COLOMBIA y fecha 1931.',
      en: 'Obverse: cross with worn LAZARETO, legend REPUBLICA DE COLOMBIA, and the date 1931.',
    },
    backCaption: {
      es: 'Reverso: 50 ornamental sobre CENTAVOS, dentro de una corona atada con lazo. Las iniciales RH no se leen.',
      en: 'Reverse: an ornamental 50 above CENTAVOS, inside a wreath tied with a bow. The initials RH cannot be read.',
    },
    scarcity: {
      es: 'No hay una tirada publicada para un 50 centavos de lazareto fechado 1931. Numista da 120.000 piezas para el 1921 RH (N#7542, KM# L13) y 50.000 para el 1928 RH (N#21644, KM# L14). Esas cifras son de esas fechas, no de este disco. Las tablas BanRep de moneda empiezan en 1987. Esta ficha no publica precios ni un censo de encapsulados.',
      en: 'No mintage is published for a lazaretto 50 centavos dated 1931. Numista gives 120,000 pieces for the 1921 RH issue (N#7542, KM# L13) and 50,000 for the 1928 RH issue (N#21644, KM# L14). Those figures belong to those dates, not to this disc. BanRep’s coin tables begin in 1987. This record publishes neither prices nor a slab census.',
    },
    grade: {
      es: 'Circulada, sin encapsular. La fecha 1931, la leyenda y el valor 50 se leen; LAZARETO está gastado y las iniciales RH no se leen. Las fotografías no autentican el metal (colección privada)',
      en: 'Circulated, unslabbed. The date 1931, the legend, and the value 50 are readable; LAZARETO is worn and the initials RH cannot be read. Photographs do not authenticate the metal (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-lazareto-50-centavos-1931-composite.jpg',
      front: '/images/catalog/colombia/colombia-lazareto-50-centavos-1931-front.jpg',
      back: '/images/catalog/colombia/colombia-lazareto-50-centavos-1931-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/7542',
        es: 'Numista — 50 centavos, moneda de lazareto, 1921 (N#7542)',
        en: 'Numista — 50 centavos, leprosarium coinage, 1921 (N#7542)',
        note: {
          es: 'KM# L13, Hernández Cód. 316, Restrepo 417. Cuproníquel de tipo, 9,8 g y 30 mm; canto liso. Publica 120.000 para el 1921 RH. Es el módulo de diseño, no la fecha de este disco. No se citan columnas de valor.',
          en: 'KM# L13, Hernández Cód. 316, Restrepo 417. Type copper-nickel, 9.8 g and 30 mm; plain edge. It publishes 120,000 for the 1921 RH issue. That is the design module, not this disc’s date. Value columns are not cited.',
        },
      },
      {
        href: 'https://en.numista.com/21644',
        es: 'Numista — 50 centavos, moneda de lazareto, 1928 (N#21644)',
        en: 'Numista — 50 centavos, leprosarium coinage, 1928 (N#21644)',
        note: {
          es: 'KM# L14, Hernández Cód. 317, Restrepo 418. Bronce de tipo, 9,8 g y 30 mm; canto estriado. Publica 50.000 para el 1928 RH. No se asigna L14 a este ejemplar. No se citan columnas de valor.',
          en: 'KM# L14, Hernández Cód. 317, Restrepo 418. Type bronze, 9.8 g and 30 mm; reeded edge. It publishes 50,000 for the 1928 RH issue. L14 is not assigned to this specimen. Value columns are not cited.',
        },
      },
      {
        href: 'https://en.numista.com/20273',
        es: 'Numista — 50 centavos de plata, Colombia, 1912–1933 (N#20273)',
        en: 'Numista — silver 50 centavos, Colombia, 1912–1933 (N#20273)',
        note: {
          es: 'KM# 193.1: plata .900, 12,5 g, busto de Bolívar y escudo. Incluye 1931 y 1931 B. Es la moneda nacional de ese año, no este disco.',
          en: 'KM# 193.1: .900 silver, 12.5 g, Bolívar’s bust and the arms. It includes 1931 and 1931-B. That is the national coin of that year, not this disc.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
        note: {
          es: 'Cód. 316 es el 50 centavos de 1921; Cód. 317, el de 1928. No se cita aquí una fila de 1931 para este diseño. No se publican columnas de precios ni láminas.',
          en: 'Cód. 316 is the 1921 50 centavos; Cód. 317, the 1928 piece. No 1931 row for this design is cited here. Price columns and plates are not published.',
        },
      },
      {
        href: 'https://www.banrepcultural.org/exposiciones/la-moneda-de-los-lazaretos',
        es: 'Banrepcultural — La moneda de los lazaretos',
        en: 'Banrepcultural — The coin of the lazarettos',
        note: {
          es: 'Series de 1901, 1907, 1921 y 1928 para Agua de Dios, Contratación y Caño del Oro. El diseño de esta pieza no nombra uno de los tres, y la exposición no lista 1931.',
          en: 'The 1901, 1907, 1921, and 1928 series for Agua de Dios, Contratación, and Caño del Oro. This piece’s design names none of the three, and the exhibition does not list 1931.',
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
  {
    id: '50-centavos-santander-1902',
    path: `${COLOMBIA_COINAGE_PATH}50-centavos-santander-1902/`,
    chapterId: 'republica',
    year: '1902',
    denomination: { es: '50 centavos', en: '50 centavos' },
    metal: { es: 'Latón (tipo)', en: 'Brass (type specification)' },
    mint: {
      es: 'Bucaramanga (tipo; sin marca de ceca en el disco)',
      en: 'Bucaramanga (type; no mint mark on the disc)',
    },
    reference: 'KM# A3 · Restrepo 412 · Hernández Cód. 326 · Numista N#30954',
    title: {
      es: '50 centavos · Santander · 1902',
      en: '50 centavos · Santander · 1902',
    },
    kicker: {
      es: 'Colombia-Numismática · Santander',
      en: 'Colombia-Numismatics · Santander',
    },
    lead: {
      es: 'Cincuenta centavos de latón de 1902, del Estado de Santander. El anverso lleva SANTANDER, el 50 y la fecha; el reverso queda incuso y en espejo.',
      en: 'A 1902 brass necessity piece of the State of Santander. The obverse carries SANTANDER, 50, and the date; the reverse is incuse and reversed.',
    },
    description: {
      es: 'En 1902 el Estado de Santander puso en curso una moneda de necesidad de latón, de una sola cara. Este disco muestra en el anverso SANTANDER en arco, el 50 dentro de un círculo —la «C» grande del tipo— y la fecha 1902. El reverso no tiene cuño propio: el golpe atraviesa la lámina y la leyenda queda incusa y en espejo, de modo que el 50 se lee 05 y 1902 se lee 2001. Es el tipo KM# A3, Restrepo 412 y Hernández Cód. 326 (8.ª ed. 2023), Numista N#30954. La leyenda de catálogo es SANTANDER 50 C 1902. Numista da latón, 1,45 g, 23,1 mm de diámetro, 1,1 mm de grosor, canto liso y alineación de medalla. Son cifras de tipo: este ejemplar no se pesó ni se midió. El general Ramón González Valencia, jefe civil y militar del departamento, autorizó la emisión el 19 de julio de 1902. Los apuntes sitúan el trabajo en el taller de los hermanos Penagos, en Bucaramanga, con casquillos de fusil recogidos tras Palonegro (11 al 25 de mayo de 1900). La misma serie incluye el 10 y el 20 centavos; cada uno está en otra ficha. No es el 50 centavos nacional de plata de 1902, KM# 192, labrado en Filadelfia, ni la moneda exclusiva de los lazaretos. Sin encapsular. La pátina verde y parda y el golpe irregular son propios del latón de cartuchería. Las fotografías no autentican el metal.',
      en: 'In 1902 the State of Santander issued a one-faced brass necessity coin. This disc shows, on the obverse, SANTANDER in an arc, 50 inside a circle — the type’s large “C” — and the date 1902. The reverse has no die of its own: the blow passes through the sheet, and the legend is left incuse and mirrored, so that 50 reads as 05 and 1902 as 2001. It is type KM# A3, Restrepo 412, and Hernández Cód. 326 (8th ed. 2023), Numista N#30954. The catalogue lettering is SANTANDER 50 C 1902. Numista gives brass, 1.45 g, a diameter of 23.1 mm, a thickness of 1.1 mm, a plain edge, and medal alignment. Those are type figures: this specimen was not weighed or measured. General Ramón González Valencia, civil and military chief of the department, authorized the issue on 19 July 1902. The notes place the work in the workshop of the Penagos brothers, in Bucaramanga, using rifle-cartridge cases gathered after Palonegro (11–25 May 1900). The same series includes the 10 and the 20 centavos; each is on another record. It is not the national silver 50 centavos of 1902, KM# 192, struck at Philadelphia, nor the exclusive coin of the lazarettos. Unslabbed. The green and brown patina and the uneven strike belong to cartridge brass. The photographs do not authenticate the metal.',
    },
    frontCaption: {
      es: 'Anverso: SANTANDER en arco, 50 dentro del círculo y fecha 1902.',
      en: 'Obverse: SANTANDER in an arc, 50 inside the circle, and the date 1902.',
    },
    backCaption: {
      es: 'Reverso incuso: la misma leyenda, hundida y en espejo. El 50 se lee 05 y 1902 se lee 2001.',
      en: 'Incuse reverse: the same legend, recessed and mirrored. 50 reads as 05 and 1902 as 2001.',
    },
    scarcity: {
      es: 'CoinVarieties registra la tirada como desconocida. Los apuntes «Las monedas sangrientas», ya citados en la página de las coscojas, dan 684.000 piezas de 50 centavos —342.000 pesos de valor facial— dentro de los 750.000 pesos autorizados. No es una cifra del Banco de la República: las tablas BanRep de moneda empiezan en 1987. Esta ficha no publica precios ni un censo de encapsulados.',
      en: 'CoinVarieties records the mintage as unknown. The notes “Las monedas sangrientas”, already cited on the coscojas page, give 684,000 pieces of 50 centavos — 342,000 pesos face value — within the 750,000 pesos authorized. That is not a Banco de la República figure: BanRep’s coin tables begin in 1987. This record publishes neither prices nor a slab census.',
    },
    grade: {
      es: 'Circulada, sin encapsular. SANTANDER, el 50 y 1902 se leen en el anverso; el reverso es incuso y está al revés. Pátina verde y parda, golpe desigual. Las fotografías no autentican el metal (colección privada)',
      en: 'Circulated, unslabbed. SANTANDER, 50, and 1902 read on the obverse; the reverse is incuse and reversed. Green and brown patina, uneven strike. Photographs do not authenticate the metal (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-santander-50-centavos-1902-composite.jpg',
      front: '/images/catalog/colombia/colombia-santander-50-centavos-1902-front.jpg',
      back: '/images/catalog/colombia/colombia-santander-50-centavos-1902-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/30954',
        es: 'Numista — 50 centavos, Estado de Santander, 1902 (N#30954)',
        en: 'Numista — 50 centavos, State of Santander, 1902 (N#30954)',
        note: {
          es: 'KM# A3, Hernández 326, Restrepo 412. Latón, 1,45 g, 23,1 mm y 1,1 mm; canto liso; alineación de medalla. Leyenda SANTANDER 50 C 1902, valor dentro de una «C» grande. No se citan columnas de valor.',
          en: 'KM# A3, Hernández 326, Restrepo 412. Brass, 1.45 g, 23.1 mm, and 1.1 mm; plain edge; medal alignment. Lettering SANTANDER 50 C 1902, the value inside a large “C”. Value columns are not cited.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
        note: {
          es: 'Numista cita Hernández 326 para este 50 centavos de 1902. No se publican columnas de precios ni láminas.',
          en: 'Numista cites Hernández 326 for this 1902 50 centavos. Price columns and plates are not published.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Santander_1902_50_centavos',
        es: 'CoinVarieties — Santander 1902 50 centavos',
        en: 'CoinVarieties — Santander 1902 50 centavos',
        note: {
          es: 'KM A3, latón, unifaz. Registra la tirada como desconocida. No se publican precios.',
          en: 'KM A3, brass, uniface. It records the mintage as unknown. Prices are not published.',
        },
      },
      {
        href: 'https://en.numista.com/18276',
        es: 'Numista — 50 centavos de plata, Colombia, 1902 (N#18276)',
        en: 'Numista — silver 50 centavos, Colombia, 1902 (N#18276)',
        note: {
          es: 'KM# 192: plata .835, 12,5 g, 30 mm, ceca de Filadelfia, leyenda REPUBLICA DE COLOMBIA. Es la moneda nacional de ese año, no este disco. No se citan columnas de valor.',
          en: 'KM# 192: .835 silver, 12.5 g, 30 mm, Philadelphia mint, legend REPUBLICA DE COLOMBIA. That is the national coin of that year, not this disc. Value columns are not cited.',
        },
      },
      {
        href: 'http://elnumismatico1975.blogspot.com/2015/04/las-monedas-sangrientas.html',
        es: 'El numismático1975, «Las monedas sangrientas»',
        en: 'El numismático1975, “Las monedas sangrientas”',
        note: {
          es: 'Taller Penagos y 684.000 piezas de 50 centavos. No es un pesaje de este ejemplar.',
          en: 'The Penagos workshop and 684,000 pieces of 50 centavos. Not a weighing of this specimen.',
        },
      },
    ],
    related: [
      {
        href: COSCOJAS_SANTANDER_PATH,
        label: {
          es: 'Las coscojas de Santander',
          en: 'The coscojas of Santander',
        },
      },
    ],
  },
  {
    id: '20-centavos-santander-1902',
    path: `${COLOMBIA_COINAGE_PATH}20-centavos-santander-1902/`,
    chapterId: 'republica',
    year: '1902',
    denomination: { es: '20 centavos', en: '20 centavos' },
    metal: { es: 'Latón (tipo)', en: 'Brass (type specification)' },
    mint: {
      es: 'Bucaramanga (tipo; sin marca de ceca en el disco)',
      en: 'Bucaramanga (type; no mint mark on the disc)',
    },
    reference: 'KM# A2 · Restrepo 387 · Hernández Cód. 325 · Numista N#48341',
    title: {
      es: '20 centavos · Santander · 1902',
      en: '20 centavos · Santander · 1902',
    },
    kicker: {
      es: 'Colombia-Numismática · Santander',
      en: 'Colombia-Numismatics · Santander',
    },
    lead: {
      es: 'Veinte centavos de latón de 1902, del Estado de Santander. El anverso lleva SANTANDER, el 20 y la fecha; el reverso queda incuso y en espejo.',
      en: 'A 1902 brass necessity piece of the State of Santander. The obverse carries SANTANDER, 20, and the date; the reverse is incuse and reversed.',
    },
    description: {
      es: 'En 1902 el Estado de Santander puso en curso una moneda de necesidad de latón, de una sola cara, llamada luego coscoja. Este disco muestra en el anverso SANTANDER en arco, el 20 en el centro y la fecha 1902. El reverso no tiene cuño propio: el golpe atraviesa la lámina y la leyenda queda incusa y en espejo, de modo que el 20 se lee 02 y 1902 se lee 2001. Es el tipo KM# A2, Restrepo 387 y Hernández Cód. 325 (8.ª ed. 2023), Numista N#48341. La leyenda de catálogo es SANTANDER C 20 1902. Numista da latón, 0,7 g, 20 mm de diámetro y alineación de medalla. El canto, como en el 50 centavos de la serie, es liso. Son cifras de tipo: este ejemplar no se pesó ni se midió. El general Ramón González Valencia, jefe civil y militar del departamento, autorizó la emisión el 19 de julio de 1902. Los apuntes sitúan el trabajo en el taller de los hermanos Penagos, en Bucaramanga, con casquillos de fusil recogidos tras Palonegro (11 al 25 de mayo de 1900). A diferencia del 10 centavos, que va sin fecha, este 20 centavos lleva 1902. Se conoce un modelo de 20 centavos sin fecha que no llegó a adoptarse; no es este disco. La misma serie incluye el 10 y el 50 centavos; cada uno está en otra ficha. No es el 20 centavos nacional de plata de esos años. Sin encapsular. La pátina verde y parda y el golpe irregular son propios del latón de cartuchería. Las fotografías no autentican el metal.',
      en: 'In 1902 the State of Santander issued a one-faced brass necessity coin, later called a coscoja. This disc shows, on the obverse, SANTANDER in an arc, 20 in the center, and the date 1902. The reverse has no die of its own: the blow passes through the sheet, and the legend is left incuse and mirrored, so that 20 reads as 02 and 1902 as 2001. It is type KM# A2, Restrepo 387, and Hernández Cód. 325 (8th ed. 2023), Numista N#48341. The catalogue lettering is SANTANDER C 20 1902. Numista gives brass, 0.7 g, a diameter of 20 mm, and medal alignment. The edge, as on the 50 centavos of the series, is plain. Those are type figures: this specimen was not weighed or measured. General Ramón González Valencia, civil and military chief of the department, authorized the issue on 19 July 1902. The notes place the work in the workshop of the Penagos brothers, in Bucaramanga, using rifle-cartridge cases gathered after Palonegro (11–25 May 1900). Unlike the 10 centavos, which carries no date, this 20 centavos carries 1902. An undated 20-centavo model that was not adopted is known; this disc is not that model. The same series includes the 10 and the 50 centavos; each is on another record. It is not the national silver 20 centavos of those years. Unslabbed. The green and brown patina and the uneven strike belong to cartridge brass. The photographs do not authenticate the metal.',
    },
    frontCaption: {
      es: 'Anverso: SANTANDER en arco, 20 en el centro y fecha 1902.',
      en: 'Obverse: SANTANDER in an arc, 20 in the center, and the date 1902.',
    },
    backCaption: {
      es: 'Reverso incuso: la misma leyenda, hundida y en espejo. El 20 se lee 02 y 1902 se lee 2001.',
      en: 'Incuse reverse: the same legend, recessed and mirrored. 20 reads as 02 and 1902 as 2001.',
    },
    scarcity: {
      es: 'Numista no publica tirada. Los apuntes «Las monedas sangrientas», ya citados en la página de las coscojas, dan 130.500 piezas de 20 centavos dentro de los 750.000 pesos autorizados. No es una cifra del Banco de la República: las tablas BanRep de moneda empiezan en 1987. Numista publica un índice de rareza de 91, calculado sobre las colecciones de sus miembros. Esta ficha no publica precios ni un censo de encapsulados.',
      en: 'Numista does not publish a mintage. The notes “Las monedas sangrientas”, already cited on the coscojas page, give 130,500 pieces of 20 centavos within the 750,000 pesos authorized. That is not a Banco de la República figure: BanRep’s coin tables begin in 1987. Numista publishes a rarity index of 91, calculated from its members’ collections. This record publishes neither prices nor a slab census.',
    },
    grade: {
      es: 'Circulada, sin encapsular. SANTANDER, el 20 y 1902 se leen en el anverso; el reverso es incuso y está al revés. Pátina verde y parda, golpe desigual. Las fotografías no autentican el metal (colección privada)',
      en: 'Circulated, unslabbed. SANTANDER, 20, and 1902 read on the obverse; the reverse is incuse and reversed. Green and brown patina, uneven strike. Photographs do not authenticate the metal (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-santander-20-centavos-1902-composite.jpg',
      front: '/images/catalog/colombia/colombia-santander-20-centavos-1902-front.jpg',
      back: '/images/catalog/colombia/colombia-santander-20-centavos-1902-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/48341',
        es: 'Numista — 20 centavos, Estado de Santander, 1902 (N#48341)',
        en: 'Numista — 20 centavos, State of Santander, 1902 (N#48341)',
        note: {
          es: 'KM# A2, Hernández 325, Restrepo 387. Latón, 0,7 g y 20 mm; alineación de medalla. Leyenda SANTANDER C 20 1902. Índice de rareza 91. No se citan columnas de valor.',
          en: 'KM# A2, Hernández 325, Restrepo 387. Brass, 0.7 g, and 20 mm; medal alignment. Lettering SANTANDER C 20 1902. Rarity index 91. Value columns are not cited.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
        note: {
          es: 'Numista cita Hernández 325 para este 20 centavos de 1902. No se publican columnas de precios ni láminas.',
          en: 'Numista cites Hernández 325 for this 1902 20 centavos. Price columns and plates are not published.',
        },
      },
      {
        href: 'http://elnumismatico1975.blogspot.com/2015/04/las-monedas-sangrientas.html',
        es: 'El numismático1975, «Las monedas sangrientas»',
        en: 'El numismático1975, “Las monedas sangrientas”',
        note: {
          es: 'Taller Penagos y 130.500 piezas de 20 centavos. No es un pesaje de este ejemplar.',
          en: 'The Penagos workshop and 130,500 pieces of 20 centavos. Not a weighing of this specimen.',
        },
      },
    ],
    related: [
      {
        href: COSCOJAS_SANTANDER_PATH,
        label: {
          es: 'Las coscojas de Santander',
          en: 'The coscojas of Santander',
        },
      },
    ],
  },
  {
    id: '10-centavos-santander-1902',
    path: `${COLOMBIA_COINAGE_PATH}10-centavos-santander-1902/`,
    chapterId: 'republica',
    year: '1902',
    denomination: { es: '10 centavos', en: '10 centavos' },
    metal: { es: 'Latón (tipo)', en: 'Brass (type specification)' },
    mint: {
      es: 'Bucaramanga (tipo; sin marca de ceca en el disco)',
      en: 'Bucaramanga (type; no mint mark on the disc)',
    },
    reference: 'KM# A1 · Restrepo 375.1 · Hernández Cód. 324 · Numista N#48340',
    title: {
      es: '10 centavos · Santander · 1902',
      en: '10 centavos · Santander · 1902',
    },
    kicker: {
      es: 'Colombia-Numismática · Santander',
      en: 'Colombia-Numismatics · Santander',
    },
    lead: {
      es: 'Diez centavos de latón, sin fecha, del Estado de Santander (1902). El anverso lleva SANTANDER, el 10 y la C; el reverso queda incuso y en espejo.',
      en: 'An undated brass necessity piece of the State of Santander, struck in 1902. The obverse carries SANTANDER, 10, and C; the reverse is incuse and reversed.',
    },
    description: {
      es: 'En 1902 el Estado de Santander puso en curso una moneda de necesidad de latón, de una sola cara, llamada luego coscoja. Este disco es el módulo de 10 centavos, el más pequeño de la serie, y no lleva fecha. El anverso muestra SANTANDER en arco, el 10 y la C grande del tipo. El reverso no tiene cuño propio: el golpe atraviesa la lámina y la leyenda queda incusa y en espejo, de modo que el 10 se lee 01. Es el tipo KM# A1, Restrepo 375.1 y Hernández Cód. 324 (8.ª ed. 2023), Numista N#48340. La leyenda de catálogo es SANTANDER 10 C. Numista da latón, 0,5 g, 15,5 mm de diámetro, 0,62 mm de grosor y alineación de medalla. Numista lista Restrepo 375; CoinVarieties precisa 375.1. Son cifras de tipo: este ejemplar no se pesó ni se midió. El general Ramón González Valencia, jefe civil y militar del departamento, autorizó la emisión el 19 de julio de 1902. Los apuntes sitúan el trabajo en el taller de los hermanos Penagos, en Bucaramanga, con casquillos de fusil recogidos tras Palonegro (11 al 25 de mayo de 1900). El 20 y el 50 centavos de la misma serie llevan la fecha 1902 y están en otras fichas. No es la moneda exclusiva de los lazaretos. Sin encapsular. Las manchas oscuras y el tono desigual son propios del latón de cartuchería. Las fotografías no autentican el metal.',
      en: 'In 1902 the State of Santander issued a one-faced brass necessity coin, later called a coscoja. This disc is the 10-centavo module, the smallest of the series, and it carries no date. The obverse shows SANTANDER in an arc, 10, and the type’s large C. The reverse has no die of its own: the blow passes through the sheet, and the legend is left incuse and mirrored, so that 10 reads as 01. It is type KM# A1, Restrepo 375.1, and Hernández Cód. 324 (8th ed. 2023), Numista N#48340. The catalogue lettering is SANTANDER 10 C. Numista gives brass, 0.5 g, a diameter of 15.5 mm, a thickness of 0.62 mm, and medal alignment. Numista lists Restrepo 375; CoinVarieties specifies 375.1. Those are type figures: this specimen was not weighed or measured. General Ramón González Valencia, civil and military chief of the department, authorized the issue on 19 July 1902. The notes place the work in the workshop of the Penagos brothers, in Bucaramanga, using rifle-cartridge cases gathered after Palonegro (11–25 May 1900). The 20 and 50 centavos of the same series carry the date 1902 and are on other records. It is not the exclusive coin of the lazarettos. Unslabbed. The dark spots and the uneven tone belong to cartridge brass. The photographs do not authenticate the metal.',
    },
    frontCaption: {
      es: 'Anverso: SANTANDER en arco, 10 y C grande. Sin fecha.',
      en: 'Obverse: SANTANDER in an arc, 10, and a large C. No date.',
    },
    backCaption: {
      es: 'Reverso incuso: la misma leyenda, hundida y en espejo. El 10 se lee 01.',
      en: 'Incuse reverse: the same legend, recessed and mirrored. 10 reads as 01.',
    },
    scarcity: {
      es: 'Numista no publica tirada. CoinVarieties la registra como desconocida. Los apuntes «Las monedas sangrientas», ya citados en la página de las coscojas, dan 250.000 piezas de 10 centavos dentro de los 750.000 pesos autorizados. No es una cifra del Banco de la República: las tablas BanRep de moneda empiezan en 1987. Esta ficha no publica precios ni un censo de encapsulados.',
      en: 'Numista does not publish a mintage. CoinVarieties records it as unknown. The notes “Las monedas sangrientas”, already cited on the coscojas page, give 250,000 pieces of 10 centavos within the 750,000 pesos authorized. That is not a Banco de la República figure: BanRep’s coin tables begin in 1987. This record publishes neither prices nor a slab census.',
    },
    grade: {
      es: 'Circulada, sin encapsular. SANTANDER, el 10 y la C se leen en el anverso; el reverso es incuso y está al revés. Manchas oscuras y tono desigual de latón. Las fotografías no autentican el metal (colección privada)',
      en: 'Circulated, unslabbed. SANTANDER, 10, and C read on the obverse; the reverse is incuse and reversed. Dark spots and uneven brass tone. Photographs do not authenticate the metal (private collection)',
    },
    images: {
      composite: '/images/catalog/colombia/colombia-santander-10-centavos-1902-composite.jpg',
      front: '/images/catalog/colombia/colombia-santander-10-centavos-1902-front.jpg',
      back: '/images/catalog/colombia/colombia-santander-10-centavos-1902-back.jpg',
    },
    sources: [
      {
        href: 'https://en.numista.com/48340',
        es: 'Numista — 10 centavos, Estado de Santander, s.f. (1902) (N#48340)',
        en: 'Numista — 10 centavos, State of Santander, ND (1902) (N#48340)',
        note: {
          es: 'KM# A1, Hernández 324, Restrepo 375. Latón, 0,5 g, 15,5 mm y 0,62 mm; alineación de medalla. Leyenda SANTANDER 10 C. Fecha ND (1902). No se citan columnas de valor.',
          en: 'KM# A1, Hernández 324, Restrepo 375. Brass, 0.5 g, 15.5 mm, and 0.62 mm; medal alignment. Lettering SANTANDER 10 C. Date ND (1902). Value columns are not cited.',
        },
      },
      {
        href: 'https://en.numista.com/L100183',
        es: 'Pedro Pablo Hernández — Monedas y billetes de Colombia, 8.ª ed. 2023 (Numista L100183)',
        en: 'Pedro Pablo Hernández — Coins and Banknotes of Colombia, 8th ed. 2023 (Numista L100183)',
        note: {
          es: 'Numista cita Hernández 324 para este 10 centavos sin fecha. No se publican columnas de precios ni láminas.',
          en: 'Numista cites Hernández 324 for this undated 10 centavos. Price columns and plates are not published.',
        },
      },
      {
        href: 'https://coinvarieties.com/index.php/Santander_1902_10_centavos',
        es: 'CoinVarieties — Santander 1902 10 centavos',
        en: 'CoinVarieties — Santander 1902 10 centavos',
        note: {
          es: 'KM A1, Restrepo 375.1, latón, sin fecha (1902). Registra la tirada como desconocida. No se publican precios.',
          en: 'KM A1, Restrepo 375.1, brass, undated (1902). It records the mintage as unknown. Prices are not published.',
        },
      },
      {
        href: 'http://elnumismatico1975.blogspot.com/2015/04/las-monedas-sangrientas.html',
        es: 'El numismático1975, «Las monedas sangrientas»',
        en: 'El numismático1975, “Las monedas sangrientas”',
        note: {
          es: 'Taller Penagos y 250.000 piezas de 10 centavos. No es un pesaje de este ejemplar.',
          en: 'The Penagos workshop and 250,000 pieces of 10 centavos. Not a weighing of this specimen.',
        },
      },
    ],
    related: [
      {
        href: COSCOJAS_SANTANDER_PATH,
        label: {
          es: 'Las coscojas de Santander',
          en: 'The coscojas of Santander',
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
