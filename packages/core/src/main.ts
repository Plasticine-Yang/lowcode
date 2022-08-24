import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets, setupGlobalComponents } from './setup'
import setupGlobalProvide from './setup/globalProvide'
import setupPinia from './store'
import setupRouter from './router'

function bootstrap() {
  const app = createApp(App)
  setupPinia(app)
  setupRouter(app)
  setupAssets()

  setupGlobalComponents(app)

  setupGlobalProvide(app)

  app.mount('#app')
}

bootstrap()
