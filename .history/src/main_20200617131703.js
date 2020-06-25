import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Progress, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Toast } from 'vant'
import 'lib-flexible' // 引入适配包
import '@/src/assets/css/iconfont.css' // 引入

Vue.use(Button).use(Progress).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')