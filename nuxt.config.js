require('dotenv').config()
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
 axios: {
  baseURL: process.env.APP_URL,
},

  router: {
    middleware: ['auth']
  },

  proxy: {
  // '/api/': { target: process.env.APP_URL_API, pathRewrite: {'^/api/': ''} },
  // '/oauth/token/': { target: process.env.APP_URL_OAUTH, pathRewrite: {'^/oauth/token/': ''} }
  },

 auth: {
  redirect: {
    login: '/auth/login',
    logout: '/',
    // callback: '/login',
    home: '/'
  },
  strategies: {
    local: false,
    password_grant: {
      _scheme: 'local',
      endpoints: {
        login: {
          url: '/oauth/token',
          method: 'post',
          propertyName: 'access_token'
        },
        logout: false,
        user: {
          url: 'api/auth/me',
          method: 'get',
          propertyName: 'user'
        }
      }
    }
  }
},

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
