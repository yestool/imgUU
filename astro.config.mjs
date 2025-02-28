// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite'; 
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [ alpinejs(), mdx()]
});