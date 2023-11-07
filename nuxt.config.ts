// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  ui: {
    global: true,
  },
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.scss',
  ],
  app: {
    head:{
      link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap'
        }
      ]
    },
  }
  // alias: {
  //   '@': './src',
  // }
})
