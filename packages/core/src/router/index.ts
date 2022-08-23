import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layouts/basic-layout/index.vue'),
  },
  {
    path: '/description',
    name: 'description',
    component: () => import('@/layouts/description/index.vue'),
  },
]

export default function setupRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  app.use(router)
}
