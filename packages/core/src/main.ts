import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets, setupGlobalComponents } from './setup'
import setupGlobalProvide from './setup/globalProvide'
import setupPinia from './store'

function bootstrap() {
  const app = createApp(App)

  setupAssets()

  setupGlobalComponents(app)

  setupGlobalProvide(app)

  setupPinia(app)
  app.mount('#app')
}

bootstrap()
