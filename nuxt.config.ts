// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Modulo oficial: gera a configuracao do ESLint a partir deste arquivo,
  // entao ele ja entende a estrutura app/ do Nuxt 4 sem config manual.
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module']
})
