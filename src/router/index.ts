import { createRouter, createWebHistory } from 'vue-router'
import LeSeuil from '@/view/LeSeuil.vue'

const routes = [
  {
    path: '/',
    name: 'le-seuil',
    component: LeSeuil,
  },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})
