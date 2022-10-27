export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TestNuxt',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Стоматологические услуги' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },

  css: [
    'swiper/css',
    '~/assets/styles/main.scss'
  ],

  styleResources: {
    scss: ['~/assets/styles/scss/*.scss']
  },

  plugins: [
    '~/plugins/portalVue.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules: [
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/svg'
    // '@/node_modules/swiper/vue'
  ],
  axios: {
    baseURL: '/'
  },

  build: {
    standalone: true, // for work last version Swiper Slider
    extend (config, ctx) {
      // fix to work with swiperjs 8 add needed deps. you can get them from error when doing nuxt generate
      config.externals = [
        {
          encoding: 'encoding'
        }
      ]
    }
  },

  svg: {
    vueSvgLoader: {
      // vue-svg-loader options
    },
    svgSpriteLoader: {
      // svg-sprite-loader options
    },
    fileLoader: {
      // file-loader options
    }
  }
}
