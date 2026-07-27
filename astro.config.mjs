import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sacsayhuamanruins.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['zh', 'en', 'es', 'qu'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
