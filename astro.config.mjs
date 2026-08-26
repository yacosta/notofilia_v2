// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://notofilia.com',
  trailingSlash: 'always',
  compressHTML: false,
  redirects: {
    '/coleccion/numismatica/paises-bajos': '/paises-bajos-numismatica/',
    '/coleccion/numismatica/paises-bajos/ducado-utrecht-1761': '/paises-bajos-numismatica/ducado-utrecht-1761/',
    '/en/coleccion/numismatica/paises-bajos': '/en/netherlands-numismatica/',
    '/en/coleccion/numismatica/paises-bajos/ducado-utrecht-1761': '/en/netherlands-numismatica/ducado-utrecht-1761/',
    '/en/coleccion/estados-unidos': '/en/coleccion/united-states/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
