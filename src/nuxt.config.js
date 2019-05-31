module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', name: 'description', 
        content: '' 
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
 
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
  //   { src: '~/plugins/some-external-client-side-lib', ssr: false },
  // ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },


  /*
  ** Build configuration
  */
  buildDir: 'nuxt',
  build: {
    extractCSS: true,
    // babel: {
    //   presets: ({ isServer }) => [
    //     [
    //       '@nuxt/babel-preset-app',
    //       {
    //         targets: isServer
    //           ? { node: '8.11.1' }
    //           : { browsers: [ 'defaults' ] },
    //       },
    //     ],
    //   ],
    // },
    // /*
    // ** Run ESLint on save
    // */
    // extend(config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/,
    //     });
    //   }
    // },
  },
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    timing: false,
  }
}
