import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    name: '',
    component: () => import('@/layouts/basic-layout/index.vue'),
  },
  {
    path: '/description',
    name: 'description',
    component: () => import('@/layouts/description/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/layouts/description/Introduce.vue'),
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import('@/layouts/description/Detail.vue'),
      },
      {
        path: 'install',
        name: 'install',
        component: () => import('@/layouts/description/Install.vue'),
      },
      {
        path: 'use',
        name: 'use',
        component: () => import('@/layouts/description/Use.vue'),
      },
    ],
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: () => import('@/layouts/user/index.vue'),
  },
  {
    path: '/sign_in',
    name: 'sign_in',
    component: () => import('@/layouts/user/index.vue'),
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

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default function setupRouter(app: App) {
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  app.use(router)
}
