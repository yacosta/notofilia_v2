// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { newsArticles } from './src/data/editorial.ts';
import { glossaryTerms } from './src/data/glossary.ts';
import { englishRedirects } from './src/lib/locale-paths.ts';

const generated = englishRedirects();
for (const term of glossaryTerms) {
  generated[`/en/glosario/${term.slug}/`] = `/en/glossary/${term.slug}/`;
}
for (const article of newsArticles) {
  generated[`/en/noticias/${article.slug}/`] = `/en/news/${article.slug}/`;
}

export default defineConfig({
  site: 'https://notofilia.com',
  trailingSlash: 'always',
  compressHTML: false,
  redirects: {
    '/coleccion/numismatica/colombia': '/coleccion/colombia-numismatica/',
    '/en/coleccion/numismatica/colombia': '/en/collection/colombia-numismatics/',
    '/coleccion/numismatica/paises-bajos': '/paises-bajos-numismatica/',
    '/coleccion/numismatica/paises-bajos/ducado-utrecht-1761': '/paises-bajos-numismatica/ducado-utrecht-1761/',
    '/en/coleccion/numismatica/paises-bajos': '/en/netherlands-numismatica/',
    '/en/coleccion/numismatica/paises-bajos/ducado-utrecht-1761': '/en/netherlands-numismatica/ducado-utrecht-1761/',
    '/coleccion/ecuador/100-sucres-1993': '/coleccion/ecuador/',
    '/en/coleccion/ecuador/100-sucres-1993': '/en/collection/ecuador/',
    '/nosotros': '/acerca-de/',
    '/en/nosotros': '/en/about/',
    '/sobre-mi': '/acerca-de/',
    '/en/sobre-mi': '/en/about/',
    '/en/acerca-de': '/en/about/',
    '/about': '/en/about/',
    '/contact': '/en/contact/',
    '/coleccion/colombia/10-pesos-oro-1943-anverso': '/coleccion/colombia/10-pesos-oro-1943/',
    '/coleccion/colombia/10-pesos-oro-1943-reverso': '/coleccion/colombia/10-pesos-oro-1943/',
    '/en/collection/colombia/10-pesos-oro-1943-anverso': '/en/collection/colombia/10-pesos-oro-1943/',
    '/en/collection/colombia/10-pesos-oro-1943-reverso': '/en/collection/colombia/10-pesos-oro-1943/',
    '/en/coleccion/colombia/10-pesos-oro-1943-anverso': '/en/collection/colombia/10-pesos-oro-1943/',
    '/en/coleccion/colombia/10-pesos-oro-1943-reverso': '/en/collection/colombia/10-pesos-oro-1943/',
    ...generated,
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0,
    },
  },
});
