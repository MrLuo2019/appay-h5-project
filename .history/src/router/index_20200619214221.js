import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/invest',
    name: 'Invest',
    component: Home
  },
  {
    path: '/promotion',
    name: 'Promotion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Promotion.vue')
  },
  {
    path: '/vip',
    name: 'Vip',
    component: () => import('../views/Vip.vue')
  },
  {
    path: '/discover',
    name: 'Discover',
    component: () => import('../views/Discover.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/Discover.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
