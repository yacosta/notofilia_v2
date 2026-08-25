export const SERIES_PATH = '/coleccion/filipinas/';

export type VictoryNoteId = '1-peso' | '2-pesos' | '5-pesos' | '20-pesos';

export type LocalizedText = { es: string; en: string };

export type CatalogSource = {
  href: string;
  es: string;
  en: string;
  note?: LocalizedText;
};

export const seriesSources: CatalogSource[] = [
  {
    href: 'https://www.bsp.gov.ph/SitePages/CoinsAndNotes/EnglishSeries.aspx',
    es: 'Bangko Sentral ng Pilipinas — Serie inglesa y billetes desmonetizados',
    en: 'Bangko Sentral ng Pilipinas — English Series / demonetized notes',
    note: {
      es: 'La Serie Victory n.º 66 llegó en 1944; sobrecarga CBP; curso legal hasta el 30 de julio de 1964.',
      en: 'Victory Series No. 66 arrived in 1944; CBP overprint; legal tender until 30 July 1964.',
    },
  },
  {
    href: 'https://www.bsp.gov.ph/Pages/CoinsAndNotes/HistoryOfPhilippineMoney/HistoryOfPhilippineMoney.aspx',
    es: 'Bangko Sentral ng Pilipinas — Historia del dinero filipino',
    en: 'Bangko Sentral ng Pilipinas — History of Philippine Money',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Banknotes_of_the_Philippine_peso#American_Period',
    es: 'Wikipedia — Billetes del peso filipino (periodo estadounidense)',
    en: 'Wikipedia — Banknotes of the Philippine peso (American Period)',
  },
  {
    href: 'https://en.wikipedia.org/wiki/Banknotes_of_the_Philippine_peso#%22VICTORY-CBP%22_banknotes',
    es: 'Wikipedia — Billetes del peso filipino (sección VICTORY-CBP)',
    en: 'Wikipedia — Banknotes of the Philippine peso (VICTORY-CBP section)',
  },
  {
    href: 'https://www.numismatics.ph/banknotes/victory-series/',
    es: 'numismatics.ph — Catálogo de Certificados del Tesoro, Serie Victory n.º 66',
    en: 'numismatics.ph — Victory Series No. 66 Treasury Certificate Catalog',
  },
  {
    href: 'http://www.banknote.ws/COLLECTION/countries/ASI/PIL/PIL-PITC.htm',
    es: 'Bank Note Museum — Filipinas (Pick 94–101 y 117+)',
    en: 'Bank Note Museum — Philippines (Pick 94–101 and 117+)',
  },
  {
    href: 'https://en.numista.com/201642',
    es: 'Numista — 1 Peso (Victory)',
    en: 'Numista — 1 Peso (Victory)',
  },
  {
    href: 'https://en.numista.com/203356',
    es: 'Numista — 2 Pesos (Victory)',
    en: 'Numista — 2 Pesos (Victory)',
  },
  {
    href: 'https://www.officialgazette.gov.ph/1944/11/18/executive-order-no-25-s-1944/',
    es: 'Orden Ejecutiva n.º 25, s. 1944 (18 de noviembre de 1944)',
    en: 'Executive Order No. 25, s. 1944 (18 November 1944)',
    note: {
      es: 'Reconocimiento de los Victory Pesos como moneda de curso legal.',
      en: 'Recognition of Victory Pesos as legal tender.',
    },
  },
];

export type VictoryNote = {
  id: VictoryNoteId;
  path: string;
  pick: string;
  serial: string;
  signatures: LocalizedText;
  printed: LocalizedText;
  images: {
    composite: string;
    front: string;
    back: string;
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

export const victoryNotes: VictoryNote[] = [
  {
    id: '1-peso',
    path: '/coleccion/filipinas/1-peso/',
    pick: 'P#94a',
    serial: 'F70618009',
    signatures: {
      es: 'Sergio Osmeña (presidente) y Jaime Hernandez (auditor general)',
      en: 'Sergio Osmeña (President) and Jaime Hernandez (Auditor General)',
    },
    printed: {
      es: '61.192.000 ejemplares (P#94a, Numista / numismatics.ph)',
      en: '61,192,000 notes (P#94a, Numista / numismatics.ph)',
    },
    images: {
      composite: '/images/catalog/philippines/1-peso-composite.jpg',
      front: '/images/catalog/philippines/1-peso-front.jpg',
      back: '/images/catalog/philippines/1-peso-back.jpg',
    },
    title: {
      es: '1 peso · Serie Victory n.º 66',
      en: '1 Peso · Victory Series No. 66',
    },
    kicker: {
      es: 'Filipinas · Commonwealth · Certificado del Tesoro',
      en: 'Philippines · Commonwealth · Treasury Certificate',
    },
    lead: {
      es: 'Anverso con Apolinario Mabini; reverso naranja con la sobrecarga VICTORY. Impreso por el Bureau of Engraving and Printing de Estados Unidos.',
      en: 'Obverse with Apolinario Mabini; orange reverse with the VICTORY overprint. Printed by the U.S. Bureau of Engraving and Printing.',
    },
    description: {
      es: 'El certificado de 1 peso (P#94a) es la denominación más numerosa de la Serie Victory n.º 66. En el anverso, un retrato circular de Apolinario Mabini —ideólogo de la Primera República Filipina— ocupa la izquierda; a la derecha aparece el sello azul del Commonwealth of the Philippines. El texto certifica un depósito en el Tesoro de Filipinas, pagadero al portador en pesos de plata o en moneda de curso legal de Estados Unidos de valor equivalente, en virtud de una ley de la legislatura filipina aprobada por el presidente de Estados Unidos el 13 de junio de 1922. «Victory Series No. 66» sustituye a la fecha. El reverso, en naranja, lleva la gran sobrecarga negra VICTORY. Esta pieza de la colección, sin encapsular, lleva el número de serie F70618009 y las firmas de Osmeña y Hernandez. No lleva la sobrecarga posterior del Central Bank of the Philippines (Pick 117+).',
      en: 'The 1-peso Treasury Certificate (P#94a) is the most numerous denomination of Victory Series No. 66. The face shows a circular portrait of Apolinario Mabini — theorist of the First Philippine Republic — at left and the blue Commonwealth of the Philippines seal at right. The text certifies a deposit in the Treasury of the Philippines, payable to the bearer in silver pesos or in legal-tender currency of the United States of equivalent value, under an act of the Philippine Legislature approved by the President of the United States on 13 June 1922. “Victory Series No. 66” stands in place of a date. The orange back carries the large black VICTORY overprint. This collection piece, unslabbed, is serial F70618009 with Osmeña–Hernandez signatures. It does not carry the later Central Bank of the Philippines overprint (Pick 117+).',
    },
    frontCaption: {
      es: 'Anverso del 1 peso, serie F70618009: Mabini a la izquierda y sello azul del Commonwealth.',
      en: 'Face of the 1-peso note, serial F70618009: Mabini at left and the blue Commonwealth seal.',
    },
    backCaption: {
      es: 'Reverso naranja del 1 peso con la sobrecarga negra VICTORY.',
      en: 'Orange back of the 1-peso note with the black VICTORY overprint.',
    },
    scarcity: {
      es: 'Numista y numismatics.ph coinciden en 61.192.000 ejemplares impresos para P#94a (Osmeña–Hernandez). Es la pieza más fácil de la serie; los reemplazos con estrella (P#94r) y los especímenes (P#94s) son mucho más escasos. El 2 pesos de la misma serie (P#95a) tuvo 16.231.272 ejemplares, según Numista.',
      en: 'Numista and numismatics.ph both record 61,192,000 notes printed for P#94a (Osmeña–Hernandez). It is the most available note in the series; star replacements (P#94r) and specimens (P#94s) are far scarcer. The companion 2-peso Victory note (P#95a) had 16,231,272 printed, according to Numista.',
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
        href: 'https://www.numismatics.ph/banknotes/victory-series/1-peso-osmena-hernandez.html',
        es: 'numismatics.ph — 1 peso Osmeña–Hernandez',
        en: 'numismatics.ph — 1 Peso Osmeña–Hernandez',
      },
      {
        href: 'https://en.numista.com/201642',
        es: 'Numista — 1 Peso (Victory), P#94a',
        en: 'Numista — 1 Peso (Victory), P#94a',
      },
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/ASI/PIL/PIL0094.htm',
        es: 'Bank Note Museum — Filipinas P-94',
        en: 'Bank Note Museum — Philippines P-94',
      },
    ],
  },
  {
    id: '2-pesos',
    path: '/coleccion/filipinas/2-pesos/',
    pick: 'P#95a',
    serial: 'F13317943',
    signatures: {
      es: 'Sergio Osmeña (presidente) y Jaime Hernandez (auditor general)',
      en: 'Sergio Osmeña (President) and Jaime Hernandez (Auditor General)',
    },
    printed: {
      es: '16.231.272 ejemplares (P#95a, Numista / numismatics.ph)',
      en: '16,231,272 notes (P#95a, Numista / numismatics.ph)',
    },
    images: {
      composite: '/images/catalog/philippines/2-pesos-composite.jpg',
      front: '/images/catalog/philippines/2-pesos-front.jpg',
      back: '/images/catalog/philippines/2-pesos-back.jpg',
    },
    title: {
      es: '2 pesos · Serie Victory n.º 66',
      en: '2 Pesos · Victory Series No. 66',
    },
    kicker: {
      es: 'Filipinas · Commonwealth · Certificado del Tesoro',
      en: 'Philippines · Commonwealth · Treasury Certificate',
    },
    lead: {
      es: 'Anverso con José Rizal; reverso azul con la sobrecarga VICTORY. Impreso por el Bureau of Engraving and Printing de Estados Unidos.',
      en: 'Obverse with José Rizal; blue reverse with the VICTORY overprint. Printed by the U.S. Bureau of Engraving and Printing.',
    },
    description: {
      es: 'El certificado de 2 pesos (P#95a) muestra a José Rizal a la izquierda y el sello azul del Commonwealth of the Philippines a la derecha. El texto certifica un depósito en el Tesoro de Filipinas, pagadero al portador en pesos de plata o en moneda de curso legal de Estados Unidos de valor equivalente. «Victory Series No. 66» sustituye a la fecha (ND 1944). El reverso, en azul, lleva la gran sobrecarga negra VICTORY. Esta pieza de la colección, sin encapsular, mide unos 161,9 × 67,4 mm, lleva el número de serie F13317943 y las firmas de Osmeña y Hernandez (auditor general). El serial cae en el tramo F00000001–F16575000 que numismatics.ph asigna a P#95a, no a la variedad más escasa Roxas–Guevara (P#95b). No lleva la sobrecarga posterior del Central Bank of the Philippines (Pick 117+).',
      en: 'The 2-peso Treasury Certificate (P#95a) shows José Rizal at left and the blue Commonwealth of the Philippines seal at right. The text certifies a deposit in the Treasury of the Philippines, payable to the bearer in silver pesos or in legal-tender currency of the United States of equivalent value. “Victory Series No. 66” stands in place of a date (ND 1944). The blue back carries the large black VICTORY overprint. This collection piece, unslabbed, measures about 161.9 × 67.4 mm, is serial F13317943, and has Osmeña–Hernandez (Auditor General) signatures. The serial falls in the F00000001–F16575000 range that numismatics.ph assigns to P#95a, not the scarcer Roxas–Guevara variety (P#95b). It does not carry the later Central Bank of the Philippines overprint (Pick 117+).',
    },
    frontCaption: {
      es: 'Anverso del 2 pesos, serie F13317943: Rizal a la izquierda y sello azul del Commonwealth.',
      en: 'Face of the 2-peso note, serial F13317943: Rizal at left and the blue Commonwealth seal.',
    },
    backCaption: {
      es: 'Reverso azul del 2 pesos con la sobrecarga negra VICTORY.',
      en: 'Blue back of the 2-peso note with the black VICTORY overprint.',
    },
    scarcity: {
      es: 'Numista y numismatics.ph coinciden en 16.231.272 ejemplares impresos para P#95a (Osmeña–Hernandez), series F00000001–F16575000. La variedad P#95b (Roxas–Guevara) se cita en 2.347.728 ejemplares (F16575001–F18975000) y es más escasa. Los reemplazos con estrella y los especímenes son mucho más raros. El 1 peso de la misma serie (P#94a) tuvo 61.192.000 ejemplares.',
      en: 'Numista and numismatics.ph both record 16,231,272 notes printed for P#95a (Osmeña–Hernandez), serials F00000001–F16575000. The P#95b Roxas–Guevara variety is cited at 2,347,728 notes (F16575001–F18975000) and is scarcer. Star replacements and specimens are much rarer. The companion 1-peso Victory note (P#94a) had 61,192,000 printed.',
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
        href: 'https://www.numismatics.ph/banknotes/victory-series/2-pesos-osmena-hernandez.html',
        es: 'numismatics.ph — 2 pesos Osmeña–Hernandez',
        en: 'numismatics.ph — 2 Pesos Osmeña–Hernandez',
      },
      {
        href: 'https://en.numista.com/203356',
        es: 'Numista — 2 Pesos (Victory), P#95a',
        en: 'Numista — 2 Pesos (Victory), P#95a',
      },
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/ASI/PIL/PIL0095.htm',
        es: 'Bank Note Museum — Filipinas P-95',
        en: 'Bank Note Museum — Philippines P-95',
      },
    ],
  },
  {
    id: '5-pesos',
    path: '/coleccion/filipinas/5-pesos/',
    pick: 'P#96a',
    serial: 'F00618071',
    signatures: {
      es: 'Sergio Osmeña (presidente) y Jaime Hernandez (auditor general)',
      en: 'Sergio Osmeña (President) and Jaime Hernandez (Auditor General)',
    },
    printed: {
      es: '17.355.000 ejemplares (P#96a, Numista / numismatics.ph)',
      en: '17,355,000 notes (P#96a, Numista / numismatics.ph)',
    },
    images: {
      composite: '/images/catalog/philippines/5-pesos-composite.jpg',
      front: '/images/catalog/philippines/5-pesos-front.jpg',
      back: '/images/catalog/philippines/5-pesos-back.jpg',
    },
    title: {
      es: '5 pesos · Serie Victory n.º 66',
      en: '5 Pesos · Victory Series No. 66',
    },
    kicker: {
      es: 'Filipinas · Commonwealth · Certificado del Tesoro',
      en: 'Philippines · Commonwealth · Treasury Certificate',
    },
    lead: {
      es: 'Dobles retratos de William McKinley y el almirante George Dewey; reverso amarillo-naranja con VICTORY. Serie F00618071.',
      en: 'Paired portraits of William McKinley and Admiral George Dewey; yellow-orange reverse with VICTORY. Serial F00618071.',
    },
    description: {
      es: 'El 5 pesos (P#96 / P#96a) conserva la composición de los certificados del Tesoro de preguerra: McKinley a la izquierda y Dewey a la derecha, con «PHILIPPINES» y «FIVE PESOS» en el centro y el sello azul del Commonwealth. Las dos menciones «Victory Series No. 66» y los números de serie azules F00618071 identifican la emisión de liberación. El reverso, en tinta amarillo-oro, concentra la sobrecarga negra VICTORY sobre el medallón central. No hay sobrecarga roja «CENTRAL BANK OF THE PHILIPPINES», de modo que la pieza pertenece a la emisión original de 1944 y no a Pick 117+. En la colección se documenta un solo ejemplar de este número de serie; una segunda fotografía del mismo billete no se cataloga aparte.',
      en: 'The 5-peso note (P#96 / P#96a) keeps the pre-war Treasury Certificate layout: McKinley at left, Dewey at right, “PHILIPPINES” and “FIVE PESOS” at center, and the blue Commonwealth seal. Twin “Victory Series No. 66” legends and blue serials F00618071 mark the liberation issue. The yellow-gold back carries the black VICTORY overprint across the central medallion. There is no red “CENTRAL BANK OF THE PHILIPPINES” overprint, so the piece is the original 1944 issue, not Pick 117+. The collection records one example of this serial; a second photograph of the same note is not catalogued separately.',
    },
    frontCaption: {
      es: 'Anverso del 5 pesos, serie F00618071: McKinley, Dewey y sello del Commonwealth.',
      en: 'Face of the 5-peso note, serial F00618071: McKinley, Dewey, and the Commonwealth seal.',
    },
    backCaption: {
      es: 'Reverso amarillo-oro del 5 pesos con la sobrecarga VICTORY.',
      en: 'Yellow-gold back of the 5-peso note with the VICTORY overprint.',
    },
    scarcity: {
      es: 'Numista y numismatics.ph registran 17.355.000 ejemplares para P#96a, con series F00000001–F22500000. Es menos común que el 1 peso, pero sigue siendo una denominación de circulación amplia. Los reemplazos (P#96r) y especímenes (P#96s) son escasos.',
      en: 'Numista and numismatics.ph record 17,355,000 notes for P#96a, serials F00000001–F22500000. The type is scarcer than the 1-peso but remains a high-printage circulation denomination. Replacements (P#96r) and specimens (P#96s) are scarce.',
    },
    population: {
      es: 'No se ha verificado de forma independiente un censo de población de terceros (PMG/PCGS) para F00618071. La pieza se muestra sin encapsular.',
      en: 'A third-party population census (PMG/PCGS) for F00618071 has not been independently verified. The note is shown unslabbed.',
    },
    grade: {
      es: 'Sin encapsular (colección privada)',
      en: 'Unslabbed (private collection)',
    },
    sources: [
      {
        href: 'https://www.numismatics.ph/banknotes/victory-series/5-pesos-osmena-hernandez.html',
        es: 'numismatics.ph — 5 pesos Osmeña–Hernandez',
        en: 'numismatics.ph — 5 Pesos Osmeña–Hernandez',
      },
      {
        href: 'https://en.numista.com/203362',
        es: 'Numista — 5 Pesos (Victory), P#96',
        en: 'Numista — 5 Pesos (Victory), P#96',
      },
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/ASI/PIL/PIL0096.htm',
        es: 'Bank Note Museum — Filipinas P-96',
        en: 'Bank Note Museum — Philippines P-96',
      },
    ],
  },
  {
    id: '20-pesos',
    path: '/coleccion/filipinas/20-pesos/',
    pick: 'P#98a',
    serial: 'F04661756',
    signatures: {
      es: 'Sergio Osmeña (presidente) y Jaime Hernandez (auditor general)',
      en: 'Sergio Osmeña (President) and Jaime Hernandez (Auditor General)',
    },
    printed: {
      es: '12.439.635 ejemplares (P#98a, numismatics.ph / catálogos de la serie)',
      en: '12,439,635 notes (P#98a, numismatics.ph / series catalogs)',
    },
    images: {
      composite: '/images/catalog/philippines/20-pesos-composite.jpg',
      front: '/images/catalog/philippines/20-pesos-front.jpg',
      back: '/images/catalog/philippines/20-pesos-back.jpg',
    },
    title: {
      es: '20 pesos · Serie Victory n.º 66',
      en: '20 Pesos · Victory Series No. 66',
    },
    kicker: {
      es: 'Filipinas · Commonwealth · Certificado del Tesoro',
      en: 'Philippines · Commonwealth · Treasury Certificate',
    },
    lead: {
      es: 'Mayón en el anverso; encapsulado PMG 55 EPQ, certificado 8083882-032, serie F04661756.',
      en: 'Mount Mayon on the face; PMG 55 EPQ, certificate 8083882-032, serial F04661756.',
    },
    description: {
      es: 'El 20 pesos P#98a muestra el volcán Mayón —con palmeras al pie— en lugar de un retrato, junto al sello azul del Commonwealth y las firmas Osmeña–Hernandez (título de auditor general). El Standard Catalog of World Paper Money distingue esta combinación (P#98a) de la más escasa Roxas–Guevara (P#98b). El reverso, en naranja-oro, lleva la sobrecarga VICTORY. Esta pieza está encapsulada por PMG como About Uncirculated 55 Exceptional Paper Quality; el certificado 8083882-032 identifica además la posición de plancha B y el impresor USBEP. No presenta la sobrecarga del Central Bank of the Philippines.',
      en: 'The 20-peso P#98a shows Mount Mayon — with palms at its base — instead of a portrait, beside the blue Commonwealth seal and Osmeña–Hernandez signatures (Auditor General title). The Standard Catalog of World Paper Money separates this combination (P#98a) from the scarcer Roxas–Guevara pairing (P#98b). The orange-gold back carries the VICTORY overprint. This example is slabbed by PMG as About Uncirculated 55 Exceptional Paper Quality; certificate 8083882-032 also records plate position B and USBEP as printer. It does not carry the Central Bank of the Philippines overprint.',
    },
    frontCaption: {
      es: 'Anverso encapsulado del 20 pesos P#98a, PMG 55 EPQ, serie F04661756, con el Mayón.',
      en: 'Slabbed face of the 20-peso P#98a, PMG 55 EPQ, serial F04661756, showing Mount Mayon.',
    },
    backCaption: {
      es: 'Reverso encapsulado del 20 pesos, certificado PMG 8083882-032, con sobrecarga VICTORY.',
      en: 'Slabbed back of the 20-peso note, PMG certificate 8083882-032, with the VICTORY overprint.',
    },
    scarcity: {
      es: 'numismatics.ph indica 12.439.635 ejemplares para la variedad Osmeña–Hernandez (series F00000001–F14050000). La variedad P#98b (Roxas–Guevara) se cita en unos 1.063.765 ejemplares y es claramente más escasa. Los 500 pesos de la misma serie se desmonetizaron antes, por las leyes de la República 1191 y 1516.',
      en: 'numismatics.ph records 12,439,635 notes for the Osmeña–Hernandez variety (serials F00000001–F14050000). The P#98b Roxas–Guevara variety is cited at about 1,063,765 notes and is clearly scarcer. The series’ 500-peso notes were demonetized earlier under Republic Acts 1191 and 1516.',
    },
    population: {
      es: 'PMG publica un informe de población de Filipinas 20 pesos, pero el recuento concreto de P#98a en 55 EPQ no se ha verificado aquí de forma independiente (el informe en línea requiere cuenta). Se documenta el certificado 8083882-032 y el grado impreso en el encapsulado, no un censo.',
      en: 'PMG publishes a Philippines 20-peso population report, but the specific P#98a 55 EPQ headcount has not been independently verified here (the online report requires an account). This page records certificate 8083882-032 and the grade printed on the holder, not a census total.',
    },
    grade: {
      es: 'PMG 55 EPQ · certificado 8083882-032',
      en: 'PMG 55 EPQ · certificate 8083882-032',
    },
    sources: [
      {
        href: 'https://www.numismatics.ph/banknotes/victory-series/20-pesos-osmena-hernandez.html',
        es: 'numismatics.ph — 20 pesos Osmeña–Hernandez',
        en: 'numismatics.ph — 20 Pesos Osmeña–Hernandez',
      },
      {
        href: 'http://www.banknote.ws/COLLECTION/countries/ASI/PIL/PIL0098.htm',
        es: 'Bank Note Museum — Filipinas P-98',
        en: 'Bank Note Museum — Philippines P-98',
      },
      {
        href: 'https://www.pmgnotes.com/population-report/philippines/philippines/20-pesos/',
        es: 'PMG — Informe de población, 20 pesos de Filipinas',
        en: 'PMG — Population report, Philippines 20 Pesos',
      },
    ],
  },
];

export const seriesCopy = {
  es: {
    metaTitle: 'Filipinas · Commonwealth · Serie Victory n.º 66 | Notofilia',
    metaDescription:
      'Catálogo de Certificados del Tesoro de la Serie Victory n.º 66: 1, 2, 5 y 20 pesos de la Commonwealth de Filipinas, con historia, imágenes y fuentes.',
    kicker: 'Filipinas · Commonwealth',
    title: 'Serie Victory n.º 66',
    heroAlt:
      'Mapa vintage en relieve 3D del archipiélago filipino sobre pergamino, con islas verdes, edificios y el título Filipinas escrito en caligrafía decorativa',
    intro: [
      'Los Certificados del Tesoro de la Serie Victory n.º 66 fueron el último papel moneda impreso bajo la administración de Estados Unidos en Filipinas. Los grabó el Bureau of Engraving and Printing en pliegos de diez sujetos, con reemplazos marcados por una estrella al estilo estadounidense.',
      'Según el BEP, el «n.º 66» se eligió porque era la edad atribuida al presidente Manuel L. Quezon al morir. Quezon nació el 19 de agosto de 1878 y murió el 1 de agosto de 1944, a los 65 años —meses antes de la liberación—, de modo que el número conmemora una edad que no llegó a cumplir. El 20 de octubre de 1944, al desembarcar las fuerzas de Douglas MacArthur en Leyte, llegaron cajas de estos certificados, puestos en circulación ese mismo día. El total emitido de la serie fue de ₱1.019.544.000.',
      'El 18 de noviembre de 1944, la Orden Ejecutiva n.º 25, firmada por Sergio Osmeña, reconoció los Victory Pesos como moneda de curso legal junto con los certificados y monedas de preguerra, a razón de dos Victory Pesos por un dólar estadounidense.',
      'En 1949, al crearse el Central Bank of the Philippines, parte de la serie recibió en el reverso la sobrecarga «CENTRAL BANK OF THE PHILIPPINES» (Pick 117 y siguientes). Los 500 pesos se retiraron antes, por las leyes de la República 1191 y 1516. El resto, por la Circular n.º 156 de 1963 del banco central, fue de curso legal hasta el 30 de julio de 1964 y pudo canjearse hasta el 30 de julio de 1967. El Bangko Sentral ng Pilipinas sitúa la llegada de la serie en 1944 y confirma que las sobrecargas CBP siguieron siendo de curso legal hasta esa fecha de 1964.',
    ],
    holdingsTitle: 'Piezas de la colección',
    holdingsIntro:
      'Cuatro certificados únicos, en la misma fila de izquierda a derecha por denominación: 1, 2, 5 y 20 pesos. Un segundo archivo del 5 pesos (misma serie F00618071) no se cataloga dos veces.',
    viewNote: 'Ver la ficha',
    sourcesTitle: 'Fuentes',
    pickLabel: 'Pick',
    serialLabel: 'Serie',
    gradeLabel: 'Grado',
  },
  en: {
    metaTitle: 'Philippines · Commonwealth · Victory Series No. 66 | Notofilia',
    metaDescription:
      'Catalog of Victory Series No. 66 Treasury Certificates: 1, 2, 5, and 20 pesos of the Philippine Commonwealth, with history, images, and sources.',
    kicker: 'Philippines · Commonwealth',
    title: 'Victory Series No. 66',
    heroAlt:
      'Vintage 3D relief map of the Philippine archipelago on parchment, with green islands, buildings, and the title Philippines in decorative lettering',
    intro: [
      'Victory Series No. 66 Treasury Certificates were the last paper money printed under United States administration in the Philippines. The U.S. Bureau of Engraving and Printing produced them in 10-subject sheets, with star replacements in the American manner.',
      'According to the BEP, “No. 66” was chosen as President Manuel L. Quezon’s age at death. Quezon was born on 19 August 1878 and died on 1 August 1944 at 65 — months before liberation — so the series number commemorates an age he did not reach. When Douglas MacArthur’s forces landed on Leyte on 20 October 1944, they brought crates of these certificates and issued them that same day. The series totaled ₱1,019,544,000.',
      'On 18 November 1944, Executive Order No. 25, signed by Sergio Osmeña, recognized Victory Pesos as legal tender alongside pre-war certificates and coin, at two Victory Pesos to one United States dollar.',
      'In 1949, after the Central Bank of the Philippines was created, part of the series received a “CENTRAL BANK OF THE PHILIPPINES” overprint on the back (Pick 117 and later). The 500-peso notes were withdrawn earlier under Republic Acts 1191 and 1516. The remaining denominations, by Central Bank Circular No. 156 of 1963, were legal tender until 30 July 1964 and exchangeable until 30 July 1967. The Bangko Sentral ng Pilipinas places the series’ arrival in 1944 and confirms that the CBP overprints remained legal tender through that 1964 date.',
    ],
    holdingsTitle: 'Notes in the collection',
    holdingsIntro:
      'Four unique certificates in one row, left to right by denomination: 1, 2, 5, and 20 pesos. A second file of the 5-peso note (same serial F00618071) is not catalogued twice.',
    viewNote: 'Open the note page',
    sourcesTitle: 'Sources',
    pickLabel: 'Pick',
    serialLabel: 'Serial',
    gradeLabel: 'Grade',
  },
} as const;

export const notePageCopy = {
  es: {
    seriesLink: 'Serie Victory n.º 66',
    collectionLink: 'Filipinas',
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
  },
  en: {
    seriesLink: 'Victory Series No. 66',
    collectionLink: 'Philippines',
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
  },
} as const;

export function noteById(id: string): VictoryNote | undefined {
  return victoryNotes.find((note) => note.id === id);
}

export function notePath(note: VictoryNote, locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${note.path}` : note.path;
}

export function seriesPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${SERIES_PATH}` : SERIES_PATH;
}

export const catalogNoteSlugs = victoryNotes.map((note) => note.path.replace(/^\/|\/$/g, ''));

export const dedicatedCatalogPaths = new Set<string>(['coleccion/filipinas', ...catalogNoteSlugs]);
