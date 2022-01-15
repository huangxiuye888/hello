import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const defaultRoutes = [
  {
    path: '/404',
    name: '404',
    component:()=>import('@/views/404.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component:()=>import('@/views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:defaultRoutes
})

export default router
