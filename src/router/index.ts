import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/kompleksAudit',
      name: 'Kompleks Audit',
      component: () => import('../views/KompleksAuditView.vue'),
    },
  ],
})

export default router
