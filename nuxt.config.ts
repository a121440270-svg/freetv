export default defineNuxtConfig({
  compatibilityDate: '2025-05-23',
  devtools: { enabled: true },
  components: true,
  modules: ['@pinia/nuxt'],

  nitro: {
    preset: 'cloudflare-module',
  },
})
