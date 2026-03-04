import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://runtime-lab.com',
  integrations: [tailwind()],
});
