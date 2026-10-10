import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  WWII_EMERGENCY_PATH,
  WWII_EMERGENCY_PATH_EN,
  WWII_HAWAII_NOTE_IDS,
  WWII_HOLDING_GROUPS,
  WWII_HOLDING_NOTE_IDS,
  WWII_NORTH_AFRICA_NOTE_IDS,
  WWII_YELLOW_SEAL_NOTE_ID,
  wwiiEmergencyCopy,
  wwiiEmergencyDedicatedSlugs,
  wwiiEmergencyPath,
  wwiiEmergencySources,
} from './wwii-emergency-banknotes.ts';

const pageSource = readFileSync(
  new URL('../components/catalog/WwiiEmergencySeriesPage.astro', import.meta.url),
  'utf8',
);
const navSource = readFileSync(new URL('../lib/mega-nav.ts', import.meta.url), 'utf8');
const blog = readFileSync(new URL('./blog-articles.json', import.meta.url), 'utf8');
const bodyEs = readFileSync(new URL('./wwii-emergency-banknotes/es.html', import.meta.url), 'utf8');
const bodyEn = readFileSync(new URL('./wwii-emergency-banknotes/en.html', import.meta.url), 'utf8');
const astroConfig = readFileSync(new URL('../../astro.config.mjs', import.meta.url), 'utf8');

describe('WWII emergency banknotes series page', () => {
  it('uses a bilingual dedicated pair under notafilia, not the blog', () => {
    assert.equal(wwiiEmergencyPath('es'), WWII_EMERGENCY_PATH);
    assert.equal(wwiiEmergencyPath('en'), `/en${WWII_EMERGENCY_PATH_EN}`);
    assert.deepEqual([...wwiiEmergencyDedicatedSlugs], [
      'coleccion/notafilia/billetes-emergencia-segunda-guerra-mundial',
      'collection/notaphily/world-war-ii-emergency-banknotes',
    ]);
    assert.doesNotMatch(WWII_EMERGENCY_PATH, /\/blog\//);
    assert.doesNotMatch(blog, /billetes-emergencia-segunda-guerra-mundial/);
    assert.match(navSource, /id: 'billetes-emergencia-iigm'/);
    assert.match(navSource, /href: WWII_EMERGENCY_PATH/);
    assert.match(navSource, /flag: 'us-hi'/);
    assert.match(
      navSource,
      /id: 'estados-unidos'[\s\S]*id: 'filipinas'[\s\S]*id: 'billetes-emergencia-iigm'[\s\S]*id: 'mpc'/,
    );
    assert.doesNotMatch(
      navSource,
      /id: 'moneda-prueba-giori'[\s\S]*id: 'billetes-emergencia-iigm'[\s\S]*id: 'polimero'/,
    );
    assert.match(astroConfig, /\/blog\/billetes-emergencia-segunda-guerra-mundial\/'/);
    assert.match(astroConfig, /\/coleccion\/notafilia\/billetes-emergencia-segunda-guerra-mundial\//);
  });

  it('keeps CollectionPage chrome, a skip landmark, and locale-specific series heroes', () => {
    assert.match(pageSource, /collectionPageJsonLd/);
    assert.match(pageSource, /id="main-content"/);
    assert.match(pageSource, /max-w-content/);
    assert.match(pageSource, /max-w-\[46rem\]/);
    assert.match(pageSource, /SeriesHero/);
    assert.match(pageSource, /CatalogThumb/);
    assert.match(pageSource, /noteById/);
    assert.match(pageSource, /WWII_EMERGENCY_HERO/);
    assert.match(pageSource, /ogType="article"/);
    assert.match(pageSource, /USA_MPC_PATH/);
    assert.match(wwiiEmergencyCopy.es.title, /Billetes de Emergencia/);
    assert.match(wwiiEmergencyCopy.es.byline, /Yezid Acosta/);
    assert.match(wwiiEmergencyCopy.es.heroAlt, /Billetes de Emergencia/);
    assert.match(wwiiEmergencyCopy.en.heroAlt, /Emergency Banknotes/);
    assert.doesNotMatch(wwiiEmergencyCopy.es.title, /\bnotas\b/i);
    assert.doesNotMatch(bodyEs, /\bnotas\b/i);
    assert.match(bodyEs, /Esta vitrina recorre/);
    assert.match(bodyEn, /This case follows/);
    assert.doesNotMatch(bodyEs, /<h2 id="fuentes">/);
    assert.doesNotMatch(bodyEn, /<h2 id="sources">/);
  });

  it('corrects type facts and promotes Theresienstadt out of the AMC heading', () => {
    assert.match(bodyEs, /primera detección en 1943/);
    assert.match(bodyEn, /first detection to 1943/);
    assert.doesNotMatch(bodyEs, /se descubrió en septiembre de 1942/);
    assert.doesNotMatch(bodyEn, /found in September 1942/);
    assert.doesNotMatch(bodyEs, /no de 15/);
    assert.doesNotMatch(bodyEn, /not \$15/);
    assert.doesNotMatch(bodyEs, /no consolidada/);
    assert.doesNotMatch(bodyEn, /not consolidated/);
    assert.match(bodyEs, /10\.424\.000/);
    assert.match(bodyEs, /11\.246\.000/);
    assert.match(bodyEs, /Fr\. 2306/);
    assert.match(bodyEs, /Fr\. 1609/);
    assert.match(bodyEs, /2\.368\.000/);
    assert.match(bodyEn, /2,368,000/);
    assert.match(bodyEs, /Julian–Morgenthau/);
    assert.match(bodyEn, /Julian–Morgenthau/);
    assert.match(bodyEs, /S70884001C–S72068000C/);
    assert.match(bodyEn, /S73884001C–S75068000C/);
    assert.match(bodyEs, /S72068001C–S73884000C/);
    assert.match(bodyEn, /\*91176001A–\*91188000A/);
    assert.match(bodyEs, /\*91188001A–\*91200000A/);
    assert.match(bodyEs, /Banco de la Reserva Federal de Chicago/);
    assert.match(bodyEn, /Chicago Federal Reserve Bank/);
    assert.match(bodyEs, /por debajo del 1 %/);
    assert.match(bodyEn, /under 1%/);
    assert.doesNotMatch(bodyEs, /Star notes/);
    assert.match(bodyEs, /5\/-, 10\/-/);
    assert.match(bodyEs, /<h2 id="theresienstadt">/);
    assert.match(bodyEn, /<h2 id="theresienstadt">/);
    assert.match(bodyEs, /Jakob Edelstein/);
    assert.match(bodyEs, /AM-schilling/);
    assert.match(bodyEs, /yen B/);
    assert.match(bodyEs, /letra de bloque/);
    assert.match(bodyEs, /islas del Canal/);
    assert.match(bodyEs, /Ejército Rojo/);
    assert.match(bodyEs, /muntbiljetten/);
    assert.match(bodyEs, /<h2 id="amc">[\s\S]*<h2 id="theresienstadt">[\s\S]*<h2 id="bernhard">/);
    assert.match(bodyEs, /<h3 id="guerrilla">/);
    assert.match(bodyEn, /<h3 id="guerrilla">/);
    assert.match(bodyEs, /Ley de la República 369/);
    assert.match(bodyEn, /Republic Act No\. 369/);
    assert.match(bodyEs, /<h3 id="identificar-bernhard">/);
    assert.match(bodyEn, /<h3 id="identify-bernhard">/);
    assert.match(bodyEs, /204\.000/);
    assert.match(bodyEs, /54\.500/);
    assert.match(bodyEn, /204,000/);
    assert.match(bodyEn, /54,500/);
    assert.match(bodyEs, /Fr\. 2301m/);
    assert.match(bodyEn, /Fr\. 2301m/);
    assert.match(bodyEs, /見本/);
    assert.match(bodyEn, /THE CO-PROSPERITY SPHERE/);
    assert.match(bodyEs, /serie 461/);
    assert.match(bodyEn, /Series 461/);
    assert.match(bodyEs, /Shafer/);
    assert.match(bodyEs, /<h2 id="coleccionar">/);
    assert.match(bodyEn, /<h2 id="collecting">/);
    assert.match(bodyEs, /S40499058C/);
    assert.match(bodyEs, /L45104670B/);
    assert.match(bodyEs, /L86654132A/);
    assert.match(bodyEs, /B52497547C/);
    assert.match(bodyEn, /B52497547C/);
    assert.match(wwiiEmergencyCopy.es.holdingsValue, /B52497547C/);
    assert.match(wwiiEmergencyCopy.en.holdingsValue, /B52497547C/);
    assert.doesNotMatch(bodyEs, /\$\d/);
    assert.doesNotMatch(bodyEn, /Heritage Auctions|eBay/);
  });

  it('links the documented HAWAII holding without inventing a second serial', () => {
    assert.ok(wwiiEmergencySources.length >= 30);
    assert.match(wwiiEmergencyCopy.es.holdingsValue, /S40499058C/);
    assert.match(wwiiEmergencyCopy.en.holdingsValue, /S40499058C/);
    assert.match(wwiiEmergencyCopy.es.holdingsValue, /L86654132A/);
    assert.match(wwiiEmergencyCopy.en.holdingsValue, /L86654132A/);
    assert.match(wwiiEmergencyCopy.es.holdingsValue, /Hawaii P#36/);
    assert.match(wwiiEmergencyCopy.es.holdingsValue, /Fr\. 2305/);
    assert.match(wwiiEmergencyCopy.es.holdingsValue, /numerados en 1944/);
    assert.match(wwiiEmergencyCopy.en.holdingsValue, /numbered in 1944/);
    assert.match(bodyEs, /Hawaii P#36; numerado en 1944/);
    assert.match(bodyEn, /Hawaii P#36; numbered in 1944/);
    assert.match(bodyEs, /20-dolares-hawaii-1934a/);
    assert.match(bodyEn, /20-dolares-hawaii-1934a/);
    assert.match(bodyEs, /1-dolar-hawaii-1935a/);
    assert.match(bodyEn, /1-dolar-hawaii-1935a/);
    assert.doesNotMatch(wwiiEmergencyCopy.es.metaDescription, /\$\d/);
    assert.ok(wwiiEmergencySources.some((source) => /ushmm.*524843/.test(source.href)));
    assert.ok(wwiiEmergencySources.some((source) => /worldcat/.test(source.href)));
    assert.doesNotMatch(bodyEs, /eBay|Heritage Auctions/);
    assert.doesNotMatch(bodyEn, /eBay|Heritage Auctions/);
    assert.doesNotMatch(bodyEs, /wwii-hawaii-fr2300|wwii-yellow-seal-fr2306/);
    assert.doesNotMatch(bodyEn, /wwii-hawaii-fr2300|wwii-yellow-seal-fr2306/);
    assert.doesNotMatch(bodyEs, /Colección Numismática Nacional/);
    assert.doesNotMatch(bodyEn, /National Numismatic Collection/);
    assert.doesNotMatch(bodyEs, /Tipo Fr\. 2300\. Foto/);
    assert.doesNotMatch(bodyEs, /Tipo Fr\. 2306\. Foto/);
    assert.doesNotMatch(bodyEn, /Type Fr\. 2300\. Photograph/);
    assert.doesNotMatch(bodyEn, /Type Fr\. 2306\. Photograph/);
  });

  it('groups the fichas under Hawaii and North Africa headings', () => {
    assert.equal(wwiiEmergencyCopy.es.hawaiiSeriesHeading, 'Serie de Hawái');
    assert.equal(wwiiEmergencyCopy.en.hawaiiSeriesHeading, 'Hawaii Series');
    assert.equal(wwiiEmergencyCopy.es.northAfricaSeriesHeading, 'Serie de África del Norte');
    assert.equal(wwiiEmergencyCopy.en.northAfricaSeriesHeading, 'North Africa Series');
    assert.deepEqual(
      WWII_HOLDING_GROUPS.map((group) => group.id),
      ['hawaii-series', 'north-africa-series', 'experimental-series'],
    );
    assert.deepEqual([...WWII_HAWAII_NOTE_IDS], [
      '1-dolar-hawaii-1935a',
      '5-dolares-serie-1934a-hawaii',
      '10-dolares-serie-1934a-hawaii',
      '20-dolares-serie-1934a-hawaii',
    ]);
    assert.deepEqual([...WWII_NORTH_AFRICA_NOTE_IDS], [WWII_YELLOW_SEAL_NOTE_ID]);
    assert.deepEqual([...WWII_HOLDING_NOTE_IDS], [
      ...WWII_HAWAII_NOTE_IDS,
      ...WWII_NORTH_AFRICA_NOTE_IDS,
      '1-dolar-experimental-s-1935a',
    ]);
    assert.doesNotMatch(WWII_HAWAII_NOTE_IDS.join(' '), /sello-amarillo/);
    assert.match(pageSource, /WWII_HOLDING_GROUPS/);
    assert.match(pageSource, /\$\{group\.id\}-heading/);
    assert.match(pageSource, /holdingGroups\.map/);
    assert.match(pageSource, /aria-label=\{t\.holdingsListLabel\}/);
  });
});
