import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets } from './setup'

function bootstrap() {
  const app = createApp(App)

  setupAssets()

  app.mount('#app')
}

bootstrap()
