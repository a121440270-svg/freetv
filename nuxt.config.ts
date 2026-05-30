export default defineNuxtConfig({
  compatibilityDate: '2025-05-23',
  devtools: { enabled: true },
  components: true,
  modules: ['@pinia/nuxt'],

  nitro: {
    preset: 'cloudflare-module',
    externals: {
      inline: [],
      trace: [],
      // Completely exclude better-sqlite3 from build
      outDir: '.output/server',
    },
    rollupConfig: {
      external: ['better-sqlite3', 'fs', 'path', 'util'],
      output: {
        external: ['better-sqlite3'],
      },
    },
  },
})
