import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '512x512' },
                { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '32x32' },
            ],
        },
    },
    compatibilityDate: '2024-11-01',
    css: [
        '@/assets/css/_nullstyle.css',
        '@/assets/css/base.css'
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