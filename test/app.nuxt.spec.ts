import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '../app/app.vue'

// Teste de fumaca, mesma categoria do contextLoads() do backend: afirma que a
// aplicacao monta sem quebrar. Hoje app.vue so tem <NuxtRouteAnnouncer /> e
// <NuxtWelcome />, entao o valor nao esta no que ele verifica agora - esta em
// o arnes existir antes do primeiro componente de verdade.
describe('app.vue', () => {
  it('monta sem erro', async () => {
    const component = await mountSuspended(App)
    expect(component.html()).toBeTruthy()
  })
})
