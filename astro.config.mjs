import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: ['astro.build', 'https://i.imgur.com'],
  },
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
});
