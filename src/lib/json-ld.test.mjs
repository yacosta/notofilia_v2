import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import {
  definedTermJsonLd,
  faqPageJsonLd,
  imageObjectJsonLd,
  inferGradingService,
  visualArtworkJsonLd,
} from './json-ld.ts';

const articlePage = readFileSync(new URL('../components/editorial/EditorialArticlePage.astro', import.meta.url), 'utf8');

describe('catalogue VisualArtwork JSON-LD', () => {
  it('emits Pick, issuer, printer, grader, and cert only when supplied', () => {
    const full = visualArtworkJsonLd({
      name: 'Ducado de Utrecht',
      description: 'Gold ducat',
      url: '/coleccion/paises-bajos-numismatica/ducado-utrecht-1761/',
      locale: 'es',
      artform: 'Coin',
      catalogNumber: 'KM# 7.4',
      issuer: 'Utrecht',
      printer: 'Provincial mint of Utrecht',
      gradingService: 'NGC',
      certNumber: '4685927-012',
      serial: '',
      image: '/images/catalog/netherlands/utrecht-ducat.jpg',
    });
    assert.equal(full['@type'], 'VisualArtwork');
    assert.equal(full.identifier, 'KM# 7.4');
    assert.equal(full.publisher.name, 'Utrecht');
    assert.equal(full.producer.name, 'Provincial mint of Utrecht');
    const names = full.additionalProperty.map((item) => item.name);
    assert.deepEqual(names, ['catalogNumber', 'gradingService', 'certificateNumber']);
    assert.equal(full.image.creator['@type'], 'Person');
    assert.equal(full.image.creator.name, 'Yezid Acosta');
    assert.match(full.image.copyrightNotice, /^© \d{4} NOTOFILIA$/);

    assert.equal(inferGradingService('NGC AU Details · Edge Filing'), 'NGC');
    assert.equal(inferGradingService('Sin encapsular (colección privada)'), undefined);

    const bare = visualArtworkJsonLd({
      name: 'Note',
      description: 'Lead',
      url: '/coleccion/colombia/1-peso-oro-1954/',
      locale: 'en',
      artform: 'Banknote',
    });
    assert.equal(bare.identifier, undefined);
    assert.equal(bare.publisher, undefined);
    assert.equal(bare.additionalProperty, undefined);
  });
});

describe('ImageObject JSON-LD', () => {
  it('includes Google Images attribution and licensing metadata', () => {
    const image = imageObjectJsonLd({
      image: '/uploads/example-banknote.jpg',
      locale: 'en',
      caption: 'Example banknote',
    });

    assert.equal(image.contentUrl, 'https://notofilia.com/uploads/example-banknote.jpg');
    assert.equal(image.creator['@type'], 'Person');
    assert.equal(image.creator['@id'], 'https://notofilia.com/#yezid-acosta');
    assert.equal(image.creator.name, 'Yezid Acosta');
    assert.match(image.copyrightNotice, /^© \d{4} NOTOFILIA$/);
    assert.equal(image.license, 'https://notofilia.com/en/editorial/');
    assert.equal(image.acquireLicensePage, 'https://notofilia.com/en/contact/');
  });

  it('is shared by editorial article images', () => {
    assert.match(articlePage, /image: imageObjectJsonLd\(\{ image: imageUrl, locale,/);
  });
});

describe('glossary and FAQ JSON-LD', () => {
  it('points DefinedTerm at the glossary DefinedTermSet', () => {
    const term = definedTermJsonLd({
      name: 'Notafilia',
      alternateName: 'Notaphily',
      description: 'Paper-money collecting',
      url: '/glosario/notafilia/',
      locale: 'es',
    });
    assert.equal(term['@type'], 'DefinedTerm');
    assert.equal(term['@id'], 'https://notofilia.com/glosario/notafilia/#term');
    assert.equal(term.url, 'https://notofilia.com/glosario/notafilia/');
    assert.equal(term.inDefinedTermSet, 'https://notofilia.com/glosario/#glossary');
  });

  it('builds FAQPage questions from supplied pairs', () => {
    const faq = faqPageJsonLd([{ question: '¿Se vende algo?', answer: 'No. La colección es privada.' }]);
    assert.equal(faq['@type'], 'FAQPage');
    assert.equal(faq.mainEntity[0]['@type'], 'Question');
    assert.equal(faq.mainEntity[0].acceptedAnswer['@type'], 'Answer');
  });

  it('always attaches reviewedBy on editorial articles', () => {
    assert.match(articlePage, /reviewedBy: \{ '@type': 'Person', name: reviewerName/);
    assert.match(articlePage, /const reviewerName = article\.reviewer \|\| SITE_AUTHOR/);
  });

  it('letterboxes contain figures and lists primary sources with a new-window hint', () => {
    assert.match(articlePage, /containImage \? 'h-auto object-contain'/);
    assert.match(articlePage, /article\.primarySources/);
    assert.match(articlePage, /primary-sources-heading/);
  });
});
