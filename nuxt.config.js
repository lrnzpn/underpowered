export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Underpowered | The GUIDON',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Underpowered by Kris M. Fetiza, Derick M. Gabrillo, and Zachary C. Gonzales' },
      { property: "og:title", content: "Underpowered"
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "" },
      { property: "og:description", content: "Underpowered" },
      { property: "og:url", content: "" }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;700&family=Poppins:wght@300;400;500;700&family=Chivo:wght@300;400;700&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['vue-scrollto/nuxt', {duration: 300, easing: "ease"}],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
    styleResources: {
        scss: [
            '~/assets/styles/*.scss',
        ]
    },
}
