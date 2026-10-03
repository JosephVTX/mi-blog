import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config.ts';

export default defineConfig({
  site: SITE.url,
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  prefetch: false,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
