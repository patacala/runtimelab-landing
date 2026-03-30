import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://runtime-lab.com',
  integrations: [
    tailwind(),
    sitemap({
      // Refuerzo suave: la raíz (ES) es el sitio principal; /en es variante en inglés.
      // Google no garantiza orden en SERP, pero priority/changefreq ayudan como pista.
      serialize(item) {
        const normalized = item.url.replace(/\/$/, '');
        if (normalized === 'https://runtime-lab.com') {
          return { ...item, priority: 1, changefreq: 'weekly' };
        }
        if (normalized === 'https://runtime-lab.com/en') {
          return { ...item, priority: 0.65, changefreq: 'weekly' };
        }
        return item;
      },
    }),
    mdx(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
