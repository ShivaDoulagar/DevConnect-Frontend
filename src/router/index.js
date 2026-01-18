import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Import your components (adjust paths as needed)
import SignIn from '@/views/SignIn.vue'
import LandingPage from '@/views/LandingPage.vue'
import SignUp from '@/views/SignUp.vue' // Renamed from SiginUp.vue
import DashBoard from '@/views/DashBoard.vue'
import FeedLayout from '@/layouts/FeedLayout.vue'

const routes = [
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: { requiresAuth: false }, // Public
  },
  {
    path: '/register',
    name: 'SignUp', // Updated name
    component: SignUp,
    meta: { requiresAuth: false }, // Public
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: { requiresAuth: false }, // Make public so users can access without auth
  },
  {
    path: '/home',
    name: 'DashBoard',
    component: DashBoard,
    meta: { requiresAuth: true }, // Protected
  },
  {
    path: '/feed',
    name: 'Feed',
    component: FeedLayout,
    meta: { requiresAuth: true }, // Protected
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isTokenValid) {
    next('/signin')
  } else {
    next()
  }
})

export default router
