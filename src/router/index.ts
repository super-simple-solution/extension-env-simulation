import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/baichuan',
    component: Layout,
    name: 'index',
    meta: { title: '首页' },
    children: [
      {
        component: () => import('@/views/baichuan/index.vue'),
        path: 'baichuan',
        name: 'baichuan',
        meta: { title: 'baichuan' },
      },
      {
        component: () => import('@/views/baidu_ai/index.vue'),
        path: 'baidu_ai',
        name: 'baidu_ai',
        meta: { title: 'baidu_ai' },
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory('/'),
  routes: routes,
})
