import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sacsayhuamanruins.com',
  // 所有 URL 统一带结尾斜杠（/en/、/es/...），与 canonical/hreflang 一致，避免权重拆散。
  trailingSlash: 'always',
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
