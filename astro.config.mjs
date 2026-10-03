import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config.ts';

export default defineConfig({
  site: SITE.url,
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  prefetch: false,
  i18n: { defaultLocale: 'es', locales: ['es', 'en'], routing: { prefixDefaultLocale: false } },
  integrations: [sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es-PE', en: 'en' } } })],
  vite: { plugins: [tailwindcss()] },
});
