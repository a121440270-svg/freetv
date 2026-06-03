export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-05-23',
  nitro: {
    preset: 'cloudflare-module',
    cloudflare: {
      deployConfig: true
    }
  }
})
