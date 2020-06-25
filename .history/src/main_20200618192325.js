import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
import "lib-flexible" // 引入适配包
import "@assets/css/iconfont.less" // 引入图标库
import "@assets/css/theme.less" // 引入主题库
import "@assets/css/theme.less" // 自定义主题库
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
