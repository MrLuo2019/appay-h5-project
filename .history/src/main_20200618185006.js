import Vue from "vue"
import App from "/App.vue"
import router from "./router"
import store from "./store"
import "lib-flexible" // 引入适配包
import "@assets/css/iconfont.scss" // 引入
import {
  Tabbar, TabbarItem
} from "vant"

Vue.use(Tabbar)
  .use(TabbarItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
