import { createApp } from 'vue'
import App from './App.vue'
import EventBus from '@/lib/bus'
import { setupAssets, setupGlobalComponents } from './setup'
import setupPinia from './store'

function bootstrap() {
  const app = createApp(App)
  // 创建事件总线实例
  const $bus = new EventBus()

  setupAssets()

  setupGlobalComponents(app)
  // 全局注入事件总线
  app.provide('$bus', $bus)

  setupPinia(app)

  app.mount('#app')
}

bootstrap()
