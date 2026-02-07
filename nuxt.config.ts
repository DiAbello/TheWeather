import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    css: [
        '@/assets/css/_nullstyle.css',
        '@/assets/css/darkTheme.css'
    ],
    devtools: {enabled: true},
    pinia: {
        storesDirs: ['./stores/**']
    },
    build: {
        transpile: ['vuetify'],
    },
    imports: {
        dirs: [
            'composables',
            'composables/**',
            'utils',
            'utils/**'
        ]
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        "@pinia/nuxt"
    ],
    runtimeConfig: {
        public: {
            apiKey: process.env.NUXT_PUBLIC_API_KEY
        }
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
})