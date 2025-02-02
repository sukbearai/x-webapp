import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'

import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: '/src/pages/_app',
      jsx: true,
      devtools: true,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
