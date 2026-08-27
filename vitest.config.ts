import { defineVitestConfig } from '@nuxt/test-utils/config'

// O ambiente 'nuxt' da aos testes o mesmo runtime da aplicacao: auto-imports,
// componentes e composables resolvidos como em producao. Sem ele, montar um
// componente que usa <NuxtWelcome /> falharia por componente desconhecido.
export default defineVitestConfig({
  test: {
    environment: 'nuxt'
  }
})
