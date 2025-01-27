// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
  ],
  css: [
    '~/assets/css/main.css',
    '@unocss/reset/tailwind.css'
  ]
})
