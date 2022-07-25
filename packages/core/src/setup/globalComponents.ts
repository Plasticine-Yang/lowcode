import type { App } from 'vue'
import { Icon } from '@iconify/vue'

export default function setupGlobalComponents(app: App) {
  // 注册 iconify 的组件为全局组件
  app.component('Icon', Icon)
}
