import type { App } from 'vue'
import EventBus from '@/lib/bus'

export default function setupGlobalProvide(app: App) {
  setupEventBus(app)
}

/**
 * @description 事件总线
 */
const setupEventBus = (app: App) => {
  // 创建事件总线实例
  const $bus = new EventBus()
  // 全局注入事件总线
  app.provide('$bus', $bus)
}
