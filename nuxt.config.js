export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '艾瑞的博客',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: "apple-mobile-web-app-title",
        name: 'apple-mobile-web-app-title',
        content: "艾瑞前端，艾瑞的个人博客，十年生死两茫茫！"
      },
      {
        hid: "author",
        name: 'author',
        content: '艾瑞,cirev.cn,blog.cirev.cn,408718358@qq.com',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: "blog,article"
      },
      {
        hid: "og:site_name",
        name: 'og:site_name',
        content: "cirev.cn,blog.cirev.cn,m.cirev.cn"
      },
      {
        hid: 'description',
        name: 'description',
        content: "艾瑞前端，艾瑞的个人博客，十年生死两茫茫！"
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: "艾瑞前端，艾瑞的个人博客，十年生死两茫茫！"
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '~static/favicon.ico'
    }],
    script: [{
        src: "http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js"
      },
      {
        src: "http://api.map.baidu.com/api?v=3.0&ak=ZHavbHCLCfVtcpWAh3Pby0seTOGPurWS"
      }
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:5000'
  },

  loding: {
    color: "#00c58e"
  },
  /*
   ** Global CSS
   */
  css: [
    'iview/dist/styles/iview.css',
    {
      src: '~assets/css/common.css',
      ssr: false
    },
    {
      src: '~assets/css/page-transition.css'
    }

  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{
      src: '@/plugins/iview',
      ssr: false
    },
    {
      src: '@/plugins/antDesignVue',
      ssr: false
    },
    {
      src: '@/plugins/mavonEditor',
      ssr: false
    },
    {
      src: '@/plugins/globalFun',
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: "http://localhost:9000"
    baseURL: "http://api.cirev.cn/"
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}
