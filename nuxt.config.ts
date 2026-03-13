import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error vuetify plugin typing is incompatible with vite plugin array
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia/nuxt',
    '@nuxt/eslint',
  ],
  imports: {
    dirs: [
      'composables',
      'composables/**',
      'utils',
      'utils/**',
    ],
  },
  devtools: { enabled: true }, app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '512x512' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '32x32' },
      ],
    },
  },
  css: [
    '@/assets/css/_nullstyle.css',
    '@/assets/css/base.css',
  ],
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_PUBLIC_API_KEY,
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-11-01',
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
