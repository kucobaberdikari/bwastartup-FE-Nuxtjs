export default {
   server: {
    port: 8000 // default: 3000
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  loadingIndicator: {
    // name: 'chasing-dots',
    color: 'green',
    background: 'white'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Backer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {           
        rel:"icon",
        type:'image/svg+xml',
        sizes:'16x16',
        href:'/logo.svg' 
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap' 
      },
      {
        rel:'stylesheet',
        href:'https://pro.fontawesome.com/releases/v5.10.0/css/all.css',
        integrity:"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
        crossorigin:"anonymous"
      },
      // { 
      //     rel:'stylesheet',
      //    href:'https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css' 
      // }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/ngrok',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/postcss8',
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8081',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/v1/sessions',
            method: 'post',
            propertyName: 'data.token',
          },
          logout: false,
          user: {
            url: '/api/v1/users/fetch',
            method: 'get',
            propertyName: 'data',
          },
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true,
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
