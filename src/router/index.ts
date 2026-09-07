import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LinksPage from '../components/LinksPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: LinksPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
