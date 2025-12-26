// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// import node from '@astrojs/node'; for localhost with node
// import vercel from '@astrojs/vercel';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  env:{
      schema: {
        SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public'}),
        SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
      }
    },
    adapter: cloudflare(),
  /* adapter: node({
    mode: 'standalone'
  }) */
    
  // adapter: vercel()
});
