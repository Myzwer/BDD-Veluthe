import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

// eslint-disable-next-line no-console
console.log('======= GOOGLE_MAPS ========', process.env.NUXT_ENV_MAPS_KEY)
Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.NUXT_ENV_MAPS_KEY,
        libraries: 'places',
    },
})
