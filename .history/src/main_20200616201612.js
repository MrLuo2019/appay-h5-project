import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Popup } from 'vant';
Vue.use(Button).use(Popup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(Vant)
