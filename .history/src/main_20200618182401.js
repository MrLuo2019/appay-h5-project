import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import {
  Tabbar, TabbarItem
} from "vant"
import "lib-flexible" // 引入适配包
import "./assets/css/iconfont.scss" // 引入

Vue.use(Tabbar)
  .use

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
