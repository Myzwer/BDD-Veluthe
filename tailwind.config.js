module.exports = {
    /*
     *
     * More information: https://tailwindcss.com/blog/tailwindcss-v3
     */
    theme: {
        screens: {
            sm: '39.9375em',
            // => @media (min-width: 640px) { ... }

            md: '63.9375em',
            // => @media (min-width: 768px) { ... }

            lg: '64em',
            // => @media (min-width: 1024px) { ... }

            xl: '74.9375em',
            // => @media (min-width: 1280px) { ... }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            /* HEY FUTURE JOSH HERE'S HOW TO USE THIS
             *
             * Default is the normal base color.
             * Plug in the wedding colors, and adjust slightly for the gradient color.
             *
             * Classes are named text-CLASSNAME
             *
             * https://tailwindcss.com/docs/customizing-colors#custom-colors
             * */

            // The light text color used on the site. It will be white or close to it.
            white: {
                DEFAULT: '#eae5df',
            },

            // The dark text color used on the site. It will be black or close to it.
            black: {
                DEFAULT: '#333333',
            },

            // The client's primary wedding color + a close variation of the color. Ideally a dark color.
            primary: {
                DEFAULT: '#bd477d',
                alt: '#771639',
                special: '#b02c5e'
            },

            // The client's secondary wedding color + a close variation. Ideally a light color.
            secondary: {
                DEFAULT: '#b9a9a7',
                alt: '#f5e0db',
            },

            // This is for buttons, it should be complementary but different than primary and secondary
            accent: {
                DEFAULT: '#686aa8',
                alt: '#5052b6',
            },
        },
    },
    plugins: [],
}
