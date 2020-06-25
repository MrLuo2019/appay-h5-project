import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    wepy.redirectTo({ url: 'url' });
    
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Game',
    name: 'Game',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Game.vue')
  },
  {
    path: '/Wallet',
    name: 'Wallet',
    component: () => import('../views/Wallet.vue')
  },
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/My.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
