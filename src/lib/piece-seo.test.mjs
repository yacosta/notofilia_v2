import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  limitMetaDescription,
  META_DESCRIPTION_MAX,
  parsePieceTitleParts,
  pieceDocumentTitle,
  pieceH1,
  piecePageMeta,
} from './piece-seo.ts';

describe('piece SEO titles and descriptions', () => {
  it('caps meta descriptions at 155 characters on a word boundary', () => {
    const long =
      'Pieza de la colección Notofilia con referencia Pick, serial visible, firmas del gerente y del cajero, y contexto histórico del emisor colombiano documentado en 1983.';
    assert.ok(long.length > META_DESCRIPTION_MAX);
    const clipped = limitMetaDescription(long);
    assert.ok(clipped.length <= META_DESCRIPTION_MAX);
    assert.doesNotMatch(clipped, / $/);
    assert.equal(limitMetaDescription('Corta.'), 'Corta.');
  });

  it('builds Colombian note H1 and document title without Pick', () => {
    const parts = parsePieceTitleParts({
      kind: 'note',
      title: '2.000 pesos oro · Banco de la República · 1983',
      kicker: 'Colombia · Banco de la República',
      country: 'Colombia',
      locale: 'es',
    });
    assert.equal(pieceH1(parts, 'es'), 'Billete de 2.000 pesos oro, 1983');
    const title = pieceDocumentTitle(parts, 'es');
    assert.match(title, /^Billete de 2\.000 pesos oro 1983 · Banco de la República \(Colombia\) \| Notofilia$/);
    assert.doesNotMatch(title, /Pick/i);
  });

  it('reads issuer from the kicker when the catalogue title is denomination · year', () => {
    const parts = parsePieceTitleParts({
      kind: 'note',
      title: '2.000 pesos oro · 1983',
      kicker: 'Colombia · Banco de la República · Espécimen TDLR',
      country: 'Colombia',
      locale: 'es',
    });
    assert.equal(parts.issuer, 'Banco de la República');
    assert.equal(parts.year, '1983');
    assert.equal(
      pieceDocumentTitle(parts, 'es'),
      'Billete de 2.000 pesos oro 1983 · Banco de la República (Colombia) | Notofilia',
    );
  });

  it('builds coin titles with Moneda / coin and keeps KM out of the title', () => {
    const es = piecePageMeta({
      kind: 'coin',
      title: 'Ducado · Utrecht · 1761',
      kicker: 'Países Bajos · Utrecht',
      lead: 'Ducado de oro de Utrecht, referencia KM# 7.4, certificado NGC.',
      locale: 'es',
      country: 'Países Bajos',
    });
    assert.equal(es.h1, 'Moneda de Ducado, 1761');
    assert.match(es.documentTitle, /^Moneda de Ducado 1761 · Utrecht \(Países Bajos\) \| Notofilia$/);
    assert.doesNotMatch(es.documentTitle, /KM/i);
    assert.match(es.description, /KM# 7\.4/);
    assert.ok(es.description.length <= META_DESCRIPTION_MAX);

    const en = piecePageMeta({
      kind: 'coin',
      title: 'Ducat · Utrecht · 1761',
      kicker: 'Netherlands · Utrecht',
      lead: 'Gold ducat of Utrecht, KM# 7.4, NGC certified.',
      locale: 'en',
      country: 'Netherlands',
    });
    assert.equal(en.h1, 'Ducat coin, 1761');
  });

  it('keeps Confederate English titles with note, Confederate, and value — no invented price', () => {
    const meta = piecePageMeta({
      kind: 'note',
      title: '$5 · Confederate States of America · 1864',
      kicker: 'United States · Confederate States of America',
      lead: 'Type 69 Confederate $5 note dated 1864. No market price is published here.',
      locale: 'en',
      country: 'United States',
    });
    assert.match(meta.h1, /Confederate/i);
    assert.match(meta.h1, /\bnote\b/i);
    assert.match(meta.h1, /\$5/);
    assert.match(meta.documentTitle, /Confederate/i);
    assert.match(meta.documentTitle, /\bnote\b/i);
    assert.match(meta.documentTitle, /\$5/);
    assert.doesNotMatch(meta.documentTitle, /\$\d{2,}|hammer|sold for|market value/i);
    assert.doesNotMatch(meta.h1, /Pick/i);
  });
});
