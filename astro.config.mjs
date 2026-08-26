// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://notofilia.com',
  trailingSlash: 'always',
  compressHTML: false,
  redirects: {
    '/en/coleccion/estados-unidos': '/en/coleccion/united-states/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
