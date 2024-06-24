import { createRouter, createWebHistory } from 'vue-router'
import CustomElMessageBoxView from '../views/CustomElMessageBoxView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CustomElMessageBoxView',
      component: CustomElMessageBoxView
    },
    {
      path: '/CustomElLoadingView',
      name: 'CustomElLoadingView',
      component: () => import('../views/CustomElLoadingView.vue')
    },
    {
      path: '/CustomCountdownView',
      name: 'CustomCountdownView',
      component: () => import('../views/CustomCountdownView.vue')
    }
  ]
})

export default router
