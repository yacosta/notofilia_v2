import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { localizePath } from '../lib/locale-paths.ts';

const data = readFileSync(new URL('./estados-unidos-coinage.ts', import.meta.url), 'utf8');
const holdings = readFileSync(new URL('./holdings.ts', import.meta.url), 'utf8');
const notes = readFileSync(new URL('./estados-unidos.ts', import.meta.url), 'utf8');
const numismatica = readFileSync(new URL('./numismatica.ts', import.meta.url), 'utf8');
const seriesPage = readFileSync(
  new URL('../components/catalog/UnitedStatesSeriesPage.astro', import.meta.url),
  'utf8',
);
const esSeries = readFileSync(
  new URL('../pages/coleccion/estados-unidos-numismatica/index.astro', import.meta.url),
  'utf8',
);
const enSeries = readFileSync(
  new URL('../pages/en/collection/united-states-numismatics/index.astro', import.meta.url),
  'utf8',
);
const esCoin = readFileSync(
  new URL('../pages/coleccion/estados-unidos-numismatica/1-dolar-trump-1776-2026/index.astro', import.meta.url),
  'utf8',
);
const enCoin = readFileSync(
  new URL('../pages/en/collection/united-states-numismatics/1-dollar-trump-1776-2026/index.astro', import.meta.url),
  'utf8',
);
const esHt34Series = readFileSync(
  new URL('../pages/coleccion/estados-unidos-numismatica/fichas-hard-times/index.astro', import.meta.url),
  'utf8',
);
const enHt34Series = readFileSync(
  new URL('../pages/en/collection/united-states-numismatics/hard-times-tokens/index.astro', import.meta.url),
  'utf8',
);
const hardTimesEssay = readFileSync(new URL('./estados-unidos-hard-times.ts', import.meta.url), 'utf8');

describe('US Trump Semiquincentennial dollar', () => {
  it('registers one bilingual coinage series and one holding', () => {
    assert.match(data, /USA_COINAGE_PATH = '\/coleccion\/estados-unidos-numismatica\/'/);
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/', 'en'),
      '/en/collection/united-states-numismatics/',
    );
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/1-dolar-trump-1776-2026/', 'en'),
      '/en/collection/united-states-numismatics/1-dollar-trump-1776-2026/',
    );
    assert.match(data, /id: '1-dolar-trump-1776-2026'/);
    assert.match(data, /no_serial_reason:\n      'Struck circulating United States dollar/);
    assert.match(data, /Latón-manganeso \(88,5 % Cu, 6 % Zn, 3,5 % Mn, 2 % Ni\)/);
    assert.match(data, /Manganese brass \(88.5% Cu, 6% Zn, 3.5% Mn, 2% Ni\)/);
    assert.match(data, /Pub\. L\. 116-330 · 31 U\.S\.C\. § 5112\(y\)\(1\)\(C\)/);
    assert.match(data, /Filadelfia \(sin marca de ceca\)/);
    assert.match(data, /Never Surrender/);
    assert.match(data, /JULY 4th/);
    assert.match(data, /agotó esos rollos/);
    assert.match(data, /sold out those rolls/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.doesNotMatch(data, /\$\d+\.\d{2}/);
    assert.match(holdings, /us-2026-1-dollar-trump-1776-2026/);
    assert.match(holdings, /id: 'us-2026-1-dollar-trump-1776-2026', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-renci-trump-never-surrender/);
  });

  it('keeps thin ES and EN routes on the coinage type layouts', () => {
    assert.match(esSeries, /UnitedStatesCoinagePage locale="es"/);
    assert.match(enSeries, /UnitedStatesCoinagePage locale="en"/);
    assert.match(esCoin, /UnitedStatesCoinPage locale="es"/);
    assert.match(enCoin, /UnitedStatesCoinPage locale="en"/);
    assert.match(data, /united-states-mint-1-dollar-1776-2026-trump-composite\.jpg/);
    assert.match(data, /united-states-mint-1-dollar-1776-2026-trump-front\.jpg/);
    assert.match(data, /united-states-mint-1-dollar-1776-2026-trump-back\.jpg/);
  });

  it('cross-links paper and coinage and opens five numismatic houses', () => {
    assert.match(notes, /coinageLead: 'La moneda metálica de este país se documenta en la vitrina de numismática.'/);
    assert.match(notes, /coinageLink: 'Estados Unidos · Numismática'/);
    assert.match(seriesPage, /USA_COINAGE_PATH/);
    assert.match(seriesPage, /t\.coinageLead/);
    assert.doesNotMatch(seriesPage, /target="_blank"/);
    assert.match(numismatica, /Hoy abren Colombia-Numismática, España, Estados Unidos, Lazarettos, Países Bajos y Puerto Rico/);
    assert.match(numismatica, /the United States, Lazarettos, the Netherlands, and Puerto Rico open the row/);
    assert.match(numismatica, /href: USA_COINAGE_PATH/);
    assert.match(data, /notesLead: 'El papel moneda de este país se documenta en la vitrina de notafilia.'/);
  });
});

describe('US 1908 Indian Head quarter eagle', () => {
  it('registers one bilingual Philadelphia gold holding, with the studio pair as one coin', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/2-50-dolares-1908-cabeza-de-indio/', 'en'),
      '/en/collection/united-states-numismatics/2-50-dollars-1908-indian-head/',
    );
    assert.match(data, /id: '2-50-dolares-1908-cabeza-de-indio'/);
    assert.match(data, /chapterId: 'ceca-filadelfia'/);
    assert.match(data, /Cuarto de águila de 1908, cabeza de indio/);
    assert.match(data, /1908 Indian Head quarter eagle/);
    assert.match(data, /united-states-mint-2-50-dollars-1908-indian-head-composite\.jpg/);
    assert.match(data, /united-states-mint-2-50-dollars-1908-indian-head-front\.jpg/);
    assert.match(data, /united-states-mint-2-50-dollars-1908-indian-head-back\.jpg/);
    assert.match(data, /KM# 128 · Fr# 121 · PCGS# 7939/);
    assert.match(data, /564\.821/);
    assert.match(data, /565\.057/);
    assert.match(data, /no_serial_reason:\n      'Struck United States quarter eagle/);
    assert.match(data, /una sola pieza/);
    assert.match(data, /one piece/);
    assert.match(data, /2½ DOLLARS/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.match(holdings, /id: 'us-1908-2-50-dolares-cabeza-de-indio', kind: 'coin', country: 'US'/);
    assert.match(holdings, /id: 'us-1908-2-50-km128'/);
  });
});

describe('US Hard Times HT-34 1837 token', () => {
  it('registers a bilingual no-serial holding distinct from HT-33', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/ht-34-1837-burro-tortuga/', 'en'),
      '/en/collection/united-states-numismatics/ht-34-1837-donkey-turtle/',
    );
    assert.match(data, /id: 'ht-34-1837-burro-tortuga'/);
    assert.match(data, /id: 'hard-times'/);
    assert.match(data, /la oreja hacia atrás parece tocar la I de IN/);
    assert.match(data, /FINANCIERING —así, no «financing»/);
    assert.match(data, /millercenter.org\/president\/vanburen\/domestic-affairs/);
    assert.match(data, /pcgs.com\/coinfacts\/coin\/1837-ae-token-ht-34/);
    assert.match(data, /60161-93126/);
    assert.doesNotMatch(data, /numisbids.com\/sale\/1846\/lot\/8572/);
    assert.match(data, /Ficha Hard Times de 1837 — HT-34 \/ Low-20/);
    assert.match(data, /STEPS, no «footsteps»/);
    assert.match(data, /Independent Treasury/);
    assert.match(data, /DeWitt CE-1838-4/);
    assert.match(data, /el 1838 no cambia la fecha 1837/);
    assert.match(data, /relatedLead:\n      'Otra pieza de la colección de Estados Unidos.'/);
    assert.match(data, /EXECUTIVE FINANCIERING/);
    assert.match(data, /EXECUTIVE EXPERIMENT/);
    assert.match(data, /no_serial_reason:\n      'Private Hard Times copper token/);
    assert.match(data, /Rulau-Fuld/);
    assert.doesNotMatch(data, /\$20 to \$50/);
    assert.match(holdings, /id: 'us-1837-ht-34-burro-tortuga', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-1837-ht-34-low-20/);
  });

  it('keeps a bilingual Hard Times tokens series page that links the HT-34 holding', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/fichas-hard-times/', 'en'),
      '/en/collection/united-states-numismatics/hard-times-tokens/',
    );
    assert.match(esHt34Series, /UnitedStatesHardTimesSeriesPage locale="es"/);
    assert.match(enHt34Series, /UnitedStatesHardTimesSeriesPage locale="en"/);
    assert.match(data, /USA_HARD_TIMES_PATH = '\/coleccion\/estados-unidos-numismatica\/fichas-hard-times\/'/);
    assert.match(hardTimesEssay, /hero-hard-times\.jpg/);
    assert.match(hardTimesEssay, /chapterId === 'hard-times'/);
    assert.match(hardTimesEssay, /HT-181/);
    assert.match(hardTimesEssay, /Specie Circular/);
    assert.match(hardTimesEssay, /NOT ONE CENT/);
    assert.match(hardTimesEssay, /Feuchtwanger/);
    assert.match(hardTimesEssay, /Independent Treasury Act/);
    assert.match(hardTimesEssay, /parodia, no una frase literal del inaugural/);
    assert.doesNotMatch(hardTimesEssay, /\$20 to \$50/);
    assert.doesNotMatch(hardTimesEssay, /Broward/);
  });
});

describe('US Hard Times HT-181 John J. Adams token', () => {
  it('registers a bilingual no-serial store card, distinct from the copper type’s other metals', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/ht-181-c1835-jabali-cerdas/', 'en'),
      '/en/collection/united-states-numismatics/ht-181-circa-1835-boar-bristles/',
    );
    assert.match(data, /id: 'ht-181-c1835-john-j-adams'/);
    assert.match(data, /Cash for Bristles/);
    assert.match(data, /W-MA-320-10a/);
    assert.match(data, /HT-181A/);
    assert.match(data, /HT-181B/);
    assert.match(data, /es: 'Cobre',\n      en: 'Copper',/);
    assert.match(data, /pcgs.com\/coinfacts\/coin\/1835-token-ht-181-john-j-adams-ma-bn\/77447/);
    assert.match(data, /no_serial_reason:\n      'Undated Hard Times merchant token/);
    assert.match(data, /77447/);
    assert.match(data, /60185-91189/);
    assert.doesNotMatch(data, /\$59/);
    assert.doesNotMatch(data, /89\.99/);
    assert.match(holdings, /id: 'us-c1835-ht-181-john-j-adams', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-c1835-ht-181-low-300/);
    assert.match(hardTimesEssay, /John J\. Adams/);
  });
});

describe('US Hard Times HT-10A 1834 Running Boar', () => {
  it('registers a bilingual no-serial silvered-brass token, distinct from HT-9 and HT-10', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/ht-10a-1834-jabali/', 'en'),
      '/en/collection/united-states-numismatics/ht-10a-1834-running-boar/',
    );
    assert.match(data, /id: 'ht-10a-1834-jabali'/);
    assert.match(data, /PERISH CREDIT/);
    assert.match(data, /MY SUBSTITUTE FOR THE U\.S\. BANK/);
    assert.match(data, /MY \/ THIRD HEAT/);
    assert.match(data, /DeWitt CE-1834-10/);
    assert.match(data, /W-10-210b/);
    assert.match(data, /PCGS 77621/);
    assert.match(data, /hardtimestokens.com\/HT1HT20.html/);
    assert.match(data, /1834-ht-10a-running-boar-ms/);
    assert.match(data, /no_serial_reason:\n      'Private 1834 Hard Times political token/);
    assert.match(data, /Latón plateado/);
    assert.match(data, /HT-9/);
    assert.match(data, /united-states-hard-times-token-ht-10a-1834-front\.jpg/);
    assert.doesNotMatch(data, /\$210/);
    assert.doesNotMatch(data, /\$660/);
    assert.doesNotMatch(data, /\$1,800/);
    assert.match(holdings, /id: 'us-1834-ht-10a-jabali', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-1834-ht-10a-low-9b/);
    assert.match(hardTimesEssay, /HT-10A/);
  });
});

describe('US 1878 Liberty Head quarter eagle', () => {
  it('registers one bilingual unslabbed Philadelphia piece with no serial', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/2-50-dolares-1878-liberty-head/', 'en'),
      '/en/collection/united-states-numismatics/2-50-dollars-1878-liberty-head/',
    );
    assert.match(data, /id: '2-50-dolares-1878-liberty-head'/);
    assert.match(data, /chapterId: 'ceca-filadelfia'/);
    assert.match(data, /Christian Gobrecht/);
    assert.match(data, /PCGS #7828 · Numista N#13432/);
    assert.match(data, /286\.240/);
    assert.match(data, /286,240/);
    assert.match(data, /LIBERTY en la coroneta/);
    assert.match(data, /2 1\/2 D\./);
    assert.match(data, /no_serial_reason:\n      'Struck United States quarter eagle/);
    assert.match(data, /united-states-mint-2-50-dollars-1878-liberty-head-composite\.jpg/);
    assert.match(data, /pcgs.com\/coinfacts\/coin\/1878-2-50\/7828/);
    assert.match(data, /en\.numista\.com\/13432/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.doesNotMatch(data, /\$\d+\.\d{2}/);
    assert.match(holdings, /id: 'us-2-50-dolares-1878-liberty-head', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-1878-quarter-eagle-pcgs7828/);
  });
});

describe('US 1912 Indian Head quarter eagle', () => {
  it('registers one bilingual unslabbed Philadelphia piece with no serial', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/2-50-dolares-1912-indian-head/', 'en'),
      '/en/collection/united-states-numismatics/2-50-dollars-1912-indian-head/',
    );
    assert.match(data, /id: '2-50-dolares-1912-indian-head'/);
    assert.match(data, /chapterId: 'ceca-filadelfia'/);
    assert.match(data, /Bela Lyon Pratt/);
    assert.match(data, /KM# 128 · PCGS# 7944 · N# 6158/);
    assert.match(data, /Oro \.900 \(90 % Au, 10 % Cu\)/);
    assert.match(data, /Gold \.900 \(90% Au, 10% Cu\)/);
    assert.match(data, /4,18 g/);
    assert.match(data, /616\.000/);
    assert.match(data, /616,000/);
    assert.match(data, /no_serial_reason:\n      'Struck United States quarter eagle/);
    assert.match(data, /united-states-mint-2-50-dollars-1912-indian-head-composite\.jpg/);
    assert.match(data, /pcgs.com\/coinfacts\/coin\/1912-2-50\/7944/);
    assert.match(data, /en\.numista\.com\/6158/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.match(holdings, /id: 'us-2-50-dolares-1912-indian-head', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-1912-quarter-eagle-km128/);
  });
});

describe('US 1856 Indian Princess gold dollar', () => {
  it('registers one bilingual unslabbed Philadelphia Type 3 with no serial', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/1-dolar-oro-1856-cabeza-grande/', 'en'),
      '/en/collection/united-states-numismatics/1-dollar-gold-1856-large-head/',
    );
    const esCoin = readFileSync(
      new URL('../pages/coleccion/estados-unidos-numismatica/1-dolar-oro-1856-cabeza-grande/index.astro', import.meta.url),
      'utf8',
    );
    const enCoin = readFileSync(
      new URL('../pages/en/collection/united-states-numismatics/1-dollar-gold-1856-large-head/index.astro', import.meta.url),
      'utf8',
    );
    assert.match(esCoin, /UnitedStatesCoinPage locale="es"/);
    assert.match(enCoin, /UnitedStatesCoinPage locale="en"/);
    assert.match(data, /id: '1-dolar-oro-1856-cabeza-grande'/);
    assert.match(data, /James Barton Longacre/);
    assert.match(data, /KM# 86 · PCGS# 7540 · N# 23120/);
    assert.match(data, /1,672 g/);
    assert.match(data, /1\.672 g/);
    assert.match(data, /1\.762\.936/);
    assert.match(data, /1,762,936/);
    assert.match(data, /no_serial_reason:\n      'Struck United States gold dollar/);
    assert.match(data, /united-states-mint-1-dollar-gold-1856-large-head-composite\.jpg/);
    assert.match(data, /pcgs.com\/coinfacts\/coin\/7540/);
    assert.match(data, /en\.numista\.com\/23120/);
    assert.match(data, /9 Stat\. 397/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.match(holdings, /id: 'us-1-dolar-oro-1856-cabeza-grande', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-1856-gold-dollar-km86/);
  });
});

describe('US Hard Times HT-16 1841 Webster token', () => {
  it('registers a bilingual no-serial plain-edge type, with the reeded edge unassigned', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/ht-16-1841-daniel-webster/', 'en'),
      '/en/collection/united-states-numismatics/ht-16-1841-daniel-webster/',
    );
    assert.match(data, /id: 'ht-16-1841-daniel-webster'/);
    assert.match(data, /CONSTITUTION/);
    assert.match(data, /MILLIONS FOR DEFENCE/);
    assert.match(data, /NOT ONE CENT/);
    assert.match(data, /DeWitt CE-1838-8/);
    assert.match(data, /Wright 11-280a/);
    assert.match(data, /N#121196/);
    assert.match(data, /PCGS 77215/);
    assert.match(data, /HT-16A/);
    assert.match(data, /el 1838 no cambia la fecha 1841/);
    assert.match(data, /número de variedad de Lyman H\. Low, no un serial/);
    assert.doesNotMatch(data, /serial: '58'/);
    assert.match(data, /no_serial_reason:\n      'Private 1841 Hard Times political token/);
    assert.match(data, /united-states-hard-times-token-ht-16-1841-front\.jpg/);
    assert.match(data, /en\.numista\.com\/121196/);
    assert.match(data, /nmah_1447779/);
    assert.match(data, /1841-token-ht-16-daniel-webster-bn\/77215/);
    assert.doesNotMatch(data, /\$99/);
    assert.doesNotMatch(data, /\$408/);
    assert.doesNotMatch(data, /\$450/);
    assert.match(holdings, /id: 'us-1841-ht-16-daniel-webster', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-1841-ht-16-low-58/);
    assert.match(hardTimesEssay, /HT-16/);
  });
});

describe('US 1883-CC Morgan dollar', () => {
  it('registers one bilingual unslabbed Carson City dollar with no serial', () => {
    assert.equal(
      localizePath('/coleccion/estados-unidos-numismatica/1-dolar-morgan-1883-cc/', 'en'),
      '/en/collection/united-states-numismatics/1-dollar-morgan-1883-cc/',
    );
    const esCoin = readFileSync(
      new URL('../pages/coleccion/estados-unidos-numismatica/1-dolar-morgan-1883-cc/index.astro', import.meta.url),
      'utf8',
    );
    const enCoin = readFileSync(
      new URL('../pages/en/collection/united-states-numismatics/1-dollar-morgan-1883-cc/index.astro', import.meta.url),
      'utf8',
    );
    assert.match(esCoin, /UnitedStatesCoinPage locale="es"/);
    assert.match(enCoin, /UnitedStatesCoinPage locale="en"/);
    assert.match(data, /id: '1-dolar-morgan-1883-cc'/);
    assert.match(data, /chapterId: 'dolar-morgan'/);
    assert.match(data, /George T\. Morgan/);
    assert.match(data, /KM# 110 · PCGS# 7144 · N# 1492/);
    assert.match(data, /Plata \.900 \(90 % Ag, 10 % Cu\)/);
    assert.match(data, /Silver \.900 \(90% Ag, 10% Cu\)/);
    assert.match(data, /26,73 g/);
    assert.match(data, /26\.73 g/);
    assert.match(data, /1\.204\.000/);
    assert.match(data, /1,204,000/);
    assert.match(data, /755\.518/);
    assert.match(data, /755,518/);
    assert.match(data, /700\.000/);
    assert.match(data, /700,000/);
    assert.match(data, /no_serial_reason:\n      'Struck United States Morgan silver dollar/);
    assert.match(data, /united-states-mint-1-dollar-1883-cc-morgan-composite\.jpg/);
    assert.match(data, /pcgs.com\/coinfacts\/coin\/1883-cc-1\/7144/);
    assert.match(data, /en\.numista\.com\/1492/);
    assert.match(data, /Bland–Allison/);
    assert.match(data, /marca CC/);
    assert.doesNotMatch(data, /serial: '/);
    assert.doesNotMatch(data, /cert_number:/);
    assert.doesNotMatch(data, /\$\d+\.\d{2}/);
    assert.match(holdings, /id: 'us-1-dolar-morgan-1883-cc', kind: 'coin', country: 'US'/);
    assert.match(holdings, /us-1883-cc-morgan-km110/);
  });
});
