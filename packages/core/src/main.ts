import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets, setupGlobalComponents } from './setup'

function bootstrap() {
  const app = createApp(App)

  setupAssets()

  setupGlobalComponents(app)

  app.mount('#app')
}

bootstrap()
