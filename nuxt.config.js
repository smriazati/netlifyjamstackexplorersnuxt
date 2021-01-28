export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nuxt Jamstack Explorers',
    titleTemplate: '%s | Nuxt Jamstack Explorers',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'JAMSTACK Mission Working Files'
      },
      // Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://jamstack-explorers-nuxt-mission.com',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Nuxt Mission',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'A mission to explore the Jamstack using Nuxt.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://jamstack-explorers-nuxt-mission.com/social-preview.png',
      },

      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'JamStack Explorers - Nuxt',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://jamstack-explorers-nuxt-mission.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Nuxt Mission',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'A mission to explore the Jamstack using Nuxt.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://jamstack-explorers-nuxt-mission.com/social-preview.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content:
          'https://jamstack-explorers-nuxt-mission.com/social-preview.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Nuxt Mission',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  components: true,
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
