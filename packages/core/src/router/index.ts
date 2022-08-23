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
  {
    path: '/404',
    name: '404',
    component: () => import('@/layouts/notFound/index.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
]

export default function setupRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  app.use(router)
}
