export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Josh + Katie's Wedding!",
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    purgeCSS: {
        whitelistPatterns: [/svg.*/, /fa.*/],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // SCSS file in the project
        '~/assets/sass/gradients.scss',
        '~/assets/sass/navbar.scss',
        '~/assets/sass/background.scss',
        '~/assets/sass/fonts.scss',
        '~/assets/sass/map.scss',
        '@fortawesome/fontawesome-svg-core/styles.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/fontawesome.js', '~/plugins/vue2-google-maps.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        // Simple usage
        '@nuxtjs/vuetify',
        '@nuxtjs/google-fonts',
        '@nuxtjs/dotenv',
    ],

    googleFonts: {
        families: {
            'Alex+Brush': true,
            Montserrat: [400, 700, 900],
        },
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^vue2-google-maps($|\/)/],
    },
}
