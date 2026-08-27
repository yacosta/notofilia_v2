export const LAZARETTOS_PATH = '/coleccion/lazarettos/';

export const lazarettosCopy = {
  es: {
    metaTitle: 'Lazarettos | Notofilia',
    metaDescription:
      'Catálogo de lazaretos: cuarentena de Ragusa, Lazzaretto Vecchio de Venecia, Manoel Island en Malta y la red mediterránea de fichas y marcas sanitarias.',
    kicker: 'Numismática',
    title: 'Lazarettos',
    intro: [
      'Un lazareto no es una ceca. Es la casa donde el tráfico se detenía: naves, fardos y cartas de tierras pestíferas, cuarenta días al margen de la ciudad. El nombre viene de Lázaro. La práctica nació en Ragusa en 1377; Venecia la convirtió en hospital-isla en 1423; Malta la llevó a Manoel Island en 1643. Del Mediterráneo entero salieron marcas de desinfección, jetones de juntas de sanidad y fichas de necesidad.',
      'Esta vitrina reúne esa exonumia del cordón sanitario. No sustituye a las monedas de Santa Fe ni al papel de la banca libre: las acompaña. Las fichas de cada tipo se publicarán como en Filipinas y en Colombia-Numismática, a medida que se documenten.',
    ],
    holdingsTitle: 'El catálogo',
  },
  en: {
    metaTitle: 'Lazarettos | Notofilia',
    metaDescription:
      'Catalog of lazarettos: Ragusa’s quarantine, Venice’s Lazzaretto Vecchio, Manoel Island in Malta, and the Mediterranean network of sanitary tokens and marks.',
    kicker: 'Numismatics',
    title: 'Lazarettos',
    intro: [
      'A lazaretto is not a mint. It is the house where traffic stopped: ships, bales, and letters from pestiferous lands, forty days outside the city. The name comes from Lazarus. The practice was born in Ragusa in 1377; Venice made it an island hospital in 1423; Malta took it to Manoel Island in 1643. From the whole Mediterranean came disinfection marks, health-board jetons, and necessity tokens.',
      'This case gathers that exonumia of the sanitary cordon. It does not replace the coins of Santa Fe or free-banking paper: it stands beside them. Individual type pages will be published as they are documented, as in the Philippines case and Colombia-Numismatics.',
    ],
    holdingsTitle: 'The catalog',
  },
} as const;

export function lazarettosPath(locale: 'es' | 'en'): string {
  return locale === 'en' ? `/en${LAZARETTOS_PATH}` : LAZARETTOS_PATH;
}
