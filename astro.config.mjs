// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://notofilia.com',
  trailingSlash: 'always',
  compressHTML: false,
  redirects: {
    '/coleccion/numismatica/colombia': '/coleccion/colombia-numismatica/',
    '/en/coleccion/numismatica/colombia': '/en/coleccion/colombia-numismatica/',
    '/coleccion/numismatica/paises-bajos': '/paises-bajos-numismatica/',
    '/coleccion/numismatica/paises-bajos/ducado-utrecht-1761': '/paises-bajos-numismatica/ducado-utrecht-1761/',
    '/en/coleccion/numismatica/paises-bajos': '/en/netherlands-numismatica/',
    '/en/coleccion/numismatica/paises-bajos/ducado-utrecht-1761': '/en/netherlands-numismatica/ducado-utrecht-1761/',
    '/en/coleccion/estados-unidos': '/en/coleccion/united-states/',
    '/en/coleccion/estados-unidos/mpc-vietnam': '/en/coleccion/united-states/mpc-vietnam/',
    '/en/coleccion/estados-unidos/mpc-vietnam/10-dolares-serie-641': '/en/coleccion/united-states/mpc-vietnam/10-dollars-series-641/',
    '/en/coleccion/estados-unidos/mpc-vietnam/1-dolar-serie-681': '/en/coleccion/united-states/mpc-vietnam/1-dollar-series-681/',
    '/coleccion/ecuador/100-sucres-1993': '/coleccion/ecuador/',
    '/en/coleccion/ecuador/100-sucres-1993': '/en/coleccion/ecuador/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
