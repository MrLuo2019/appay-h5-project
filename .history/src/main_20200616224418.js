import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Progress } from 'vant'
import 'lib-flexible' // 引入适配包

Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')