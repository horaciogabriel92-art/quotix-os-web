import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.quotixos.com',
  integrations: [sitemap(), react()],
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
