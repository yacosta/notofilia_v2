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
    '/coleccion/numismatica/paises-bajos': '/coleccion/paises-bajos-numismatica/',
    '/coleccion/numismatica/paises-bajos/ducado-utrecht-1761': '/coleccion/paises-bajos-numismatica/ducado-utrecht-1761/',
    '/en/coleccion/numismatica/paises-bajos': '/en/collection/netherlands-numismatics/',
    '/en/coleccion/numismatica/paises-bajos/ducado-utrecht-1761': '/en/collection/netherlands-numismatics/ducado-utrecht-1761/',
    '/paises-bajos-numismatica': '/coleccion/paises-bajos-numismatica/',
    '/paises-bajos-numismatica/ducado-utrecht-1761': '/coleccion/paises-bajos-numismatica/ducado-utrecht-1761/',
    '/en/netherlands-numismatica': '/en/collection/netherlands-numismatics/',
    '/en/netherlands-numismatica/ducado-utrecht-1761': '/en/collection/netherlands-numismatics/ducado-utrecht-1761/',
    '/en/paises-bajos-numismatica': '/en/collection/netherlands-numismatics/',
    '/en/paises-bajos-numismatica/ducado-utrecht-1761': '/en/collection/netherlands-numismatics/ducado-utrecht-1761/',
    '/coleccion/ecuador/100-sucres-1993': '/coleccion/ecuador/',
    '/en/coleccion/ecuador/100-sucres-1993': '/en/collection/ecuador/',
    '/nosotros': '/acerca-de/',
    '/en/nosotros': '/en/about/',
    '/sobre-mi': '/acerca-de/',
    '/en/sobre-mi': '/en/about/',
    '/en/acerca-de': '/en/about/',
    '/about': '/en/about/',
    '/contact': '/en/contact/',
    '/contacto.dc': '/contacto/',
    '/contacto.dc.html': '/contacto/',
    '/en/contact.dc': '/en/contact/',
    '/en/contact.dc.html': '/en/contact/',
    '/coleccion/colombia/2-pesos-oro-1955': '/coleccion/colombia/2-pesos-oro-1944/',
    '/en/collection/colombia/2-pesos-oro-1955': '/en/collection/colombia/2-pesos-oro-1944/',
    '/en/coleccion/colombia/2-pesos-oro-1955': '/en/collection/colombia/2-pesos-oro-1944/',
    '/coleccion/colombia/10-pesos-oro-1943-anverso': '/coleccion/colombia/10-pesos-oro-1943/',
    '/coleccion/colombia/10-pesos-oro-1943-reverso': '/coleccion/colombia/10-pesos-oro-1943/',
    '/en/collection/colombia/10-pesos-oro-1943-anverso': '/en/collection/colombia/10-pesos-oro-1943/',
    '/en/collection/colombia/10-pesos-oro-1943-reverso': '/en/collection/colombia/10-pesos-oro-1943/',
    '/en/coleccion/colombia/10-pesos-oro-1943-anverso': '/en/collection/colombia/10-pesos-oro-1943/',
    '/en/coleccion/colombia/10-pesos-oro-1943-reverso': '/en/collection/colombia/10-pesos-oro-1943/',
    '/coleccion/colombia/banco-de-la-republica-2000-pesos-oro': '/coleccion/colombia/2000-pesos-oro-1983/',
    '/en/collection/colombia/banco-de-la-republica-2000-pesos-oro': '/en/collection/colombia/2000-pesos-oro-1983/',
    '/en/coleccion/colombia/banco-de-la-republica-2000-pesos-oro': '/en/collection/colombia/2000-pesos-oro-1983/',
    '/coleccion/polimero-mundial/canada': '/coleccion/polimero-mundial/Canada/',
    '/coleccion/polimero-mundial/america-del-norte/canada': '/coleccion/polimero-mundial/Canada/',
    '/en/collection/world-polymer/canada': '/en/collection/world-polymer/Canada/',
    '/en/collection/world-polymer/north-america/canada': '/en/collection/world-polymer/Canada/',
    '/en/coleccion/polimero-mundial/canada': '/en/collection/world-polymer/Canada/',
    '/en/coleccion/polimero-mundial/Canada': '/en/collection/world-polymer/Canada/',
    '/en/coleccion/polimero-mundial/america-del-norte/canada': '/en/collection/world-polymer/Canada/',
    '/coleccion/estados-unidos/renci': '/coleccion/estados-unidos/rency/',
    '/coleccion/estados-unidos/renci/pele-the-beautiful-game':
      '/coleccion/estados-unidos/rency/pele-the-beautiful-game/',
    '/coleccion/estados-unidos/renci/warhol-basquiat-life-is-beautiful':
      '/coleccion/estados-unidos/rency/warhol-basquiat-life-is-beautiful/',
    '/coleccion/estados-unidos/renci/trump-never-surrender':
      '/coleccion/estados-unidos/rency/trump-never-surrender/',
    '/en/collection/united-states/renci': '/en/collection/united-states/rency/',
    '/en/collection/united-states/renci/pele-the-beautiful-game':
      '/en/collection/united-states/rency/pele-the-beautiful-game/',
    '/en/collection/united-states/renci/warhol-basquiat-life-is-beautiful':
      '/en/collection/united-states/rency/warhol-basquiat-life-is-beautiful/',
    '/en/collection/united-states/renci/trump-never-surrender':
      '/en/collection/united-states/rency/trump-never-surrender/',
    '/en/coleccion/estados-unidos/renci': '/en/collection/united-states/rency/',
    '/en/coleccion/estados-unidos/rency': '/en/collection/united-states/rency/',
    ...generated,
  },
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'cf-image-dev-passthrough',
        configureServer(server) {
          return () => {
            server.middlewares.use((req, _res, next) => {
              const url = req.url ?? '';
              if (!url.startsWith('/cdn-cgi/image/')) {
                next();
                return;
              }
              const q = url.indexOf('?');
              const pathOnly = q === -1 ? url : url.slice(0, q);
              const search = q === -1 ? '' : url.slice(q);
              const slash = pathOnly.indexOf('/', '/cdn-cgi/image/'.length);
              if (slash === -1) {
                next();
                return;
              }
              req.url = `${pathOnly.slice(slash)}${search}`;
              next();
            });
          };
        },
      },
    ],
    build: {
      assetsInlineLimit: 0,
    },
  },
});
