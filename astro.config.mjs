import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [],
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
