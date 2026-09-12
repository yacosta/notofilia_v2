import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { guideFaqs, localizeFaq, seriesFaqs } from './page-faq.ts';

describe('FAQ copy for guides and country pages', () => {
  it('covers the four featured guides with question-form bilingual answers', () => {
    const slugs = [
      'mejores-empresas-certificacion-monedas-billetes',
      'mylar-si-plastico-no-como-guardar-billetes',
      'tres-imprentas-misterio-pie-imprenta-billetes-colombianos',
      'como-empezar-coleccion-billetes',
    ];
    for (const slug of slugs) {
      const items = guideFaqs[slug];
      assert.ok(items?.length >= 3, slug);
      for (const item of localizeFaq(items, 'es')) {
        assert.match(item.question, /¿/);
        assert.ok(item.answer.length > 40);
      }
      for (const item of localizeFaq(items, 'en')) {
        assert.match(item.question, /\?$/);
        assert.ok(item.answer.length > 40);
      }
    }
  });

  it('covers Colombia, United States, Philippines, and China series pages', () => {
    for (const key of ['colombia', 'united-states', 'philippines', 'china']) {
      assert.ok(seriesFaqs[key].length >= 3, key);
    }
  });

  it('adds Philippines Victory type facts without inventing holdings', () => {
    const questions = seriesFaqs.philippines.map((item) => item.question.es).join(' ');
    const answers = seriesFaqs.philippines.map((item) => item.answer.es).join(' ');
    assert.match(questions, /denominaciones de la Serie Victory/);
    assert.match(questions, /combinaciones de firmas/);
    assert.match(questions, /Mickey Mouse/);
    assert.match(answers, /Pick 94–101/);
    assert.match(answers, /Osmeña–Guevara/);
    assert.match(answers, /no tiene esos ejemplares/);
  });
});
