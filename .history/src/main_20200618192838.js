import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
import "lib-flexible" // 引入适配包
import "@assets/css/iconfont.less" // 引入图标库
import "@assets/css/index.less" // 自定义主题库
import {
  Tabbar, 
  TabbarItem,
  NoticeBar
} from "vant"

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(NoticeBar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
