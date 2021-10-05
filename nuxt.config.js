import baseConfig from './base.config';

export default {
    server: {
        port: baseConfig.port,
    },

    /*
    ** Headers of the page
    */

    head: {
        htmlAttrs: {
            lang: 'ru'
        },
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=360, initial-scale=1, user-scalable=no, shrink-to-fit=no'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
            {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
            {name: 'msapplication-TileColor', content: '#ffffff'},
            {name: 'theme-color', content: '#ffffff'},
            {name: 'msapplication-config', content: 'favicon/browserconfig.xml'},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico'},
            {rel: 'shortcut icon', href: '/favicon/favicon.ico'},
            {rel: 'apple-touch-icon', sizes: "180x180", href: '/favicon/apple-touch-icon.png'},
            {rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon/favicon-32x32.png'},
            {rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon/favicon-16x16.png'},
            {rel: 'icon', sizes: "192x192", href: '/favicon/android-chrome-192x192.png'},
            {rel: 'icon', sizes: "512x512", href: '/favicon/android-chrome-512x512.png'},
            {rel: 'manifest', href: '/favicon/site.webmanifest'},
            {rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#00bc81'},
        ],
        script: [
            {
                src: 'https://cdn.tiny.cloud/1/bd6fvp9ckt2cki50r16bkuk5gyxw6f5ir5yge1fc7silefn5/tinymce/5/tinymce.min.js'
            }
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    axios: {
        baseURL: baseConfig.apiUrl,
    },

    /*router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'tabs-tab-slug',
                path: '/:_tabs/:tab/:slug',
                component: resolve(__dirname, 'components/nestedPages/cars.vue'),
            })

            routes.push({
                name: 'tabs',
                path: '/:_tabs',
                component: resolve(__dirname, 'components/nestedPages/cars.vue'),
                children: [
                    {
                        name: 'tabs-tab',
                        path: ':tab',
                        component: resolve(__dirname, 'components/nestedPages/cars.vue'),
                    }],
            });


        }
    },*/
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~/plugins/swiper.js', ssr: false},
        {src: '~/plugins/customInput.js', ssr: true},
        {src: '~/plugins/range.js', ssr: false},
        {src: '~/plugins/toast.js', ssr: false},
        '~/plugins/vMask',
        '~/plugins/scroll',
        '~/plugins/multiselect',
        '~/plugins/btn',
        '~/plugins/slideUpDown',
        '~/plugins/axios',
    ],
    /*
    ** Global CSS
    */
    css: [
        {src: '~assets/scss/app.scss', lang: 'scss'},
    ],
    styleResources: {
        scss: [
            'assets/scss/vars.scss',
            'assets/scss/mixins.scss'
        ]
    },
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/router',
    ],
    vuetify: {
        /* module options */
        treeShake: true,
    },
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/style-resources',
        '@nuxtjs/svg-sprite',
        '@nuxtjs/axios',
        '@nuxtjs/auth',
    ],

    auth: {
        // Options
    },

    extractCSS: true,
    cache: true,
    "html.minify": {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        },

        babel: {
            plugins: [["@babel/plugin-proposal-optional-chaining"]]
        }
    },
}
