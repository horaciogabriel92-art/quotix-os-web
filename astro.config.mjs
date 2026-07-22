import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { getAlternates } from './src/data/i18nAlternates.js';

const siteUrl = 'https://www.quotixos.com';

export default defineConfig({
  site: siteUrl,
  integrations: [
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        const alternates = getAlternates(url.pathname);
        if (alternates) {
          item.links = Object.entries(alternates).map(([hrefLang, path]) => ({
            url: `${siteUrl}${path}`,
            lang: hrefLang,
          }));
        }
        return item;
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 4321,
    host: true
  },
  prefetch: {
    prefetchAll: true
  }
});
