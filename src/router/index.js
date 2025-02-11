import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ProfileView from '@/views/ProfileView.vue'
import StoreView from '@/views/StoreView.vue'
import NotFound from '@/components/NotFound.vue'
import StoreItemView from '@/views/StoreItemView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
     path: '/login',
     name: 'login',
     component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView
    },
    {
      path: '/store/:id',
      name: 'storeitem',
      props: true,
      component: StoreItemView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    // 404 redirect
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
