import { createRouter, createWebHistory } from 'vue-router'
import Payment from '@/views/Payment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     { path:'/',
      name:'home',
      component: Payment
    }
  ]
})

export default router
