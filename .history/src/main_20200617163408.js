import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Icon,
  Progress,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Toast,
  Image as VanImage,
  Grid,
  GridItem,
  NoticeBar,
  Tab, 
  Tabs
} from "vant";
import "lib-flexible"; // 引入适配包
import "./assets/css/iconfont.scss"; // 引入

Vue.use(Button)
  .use(Icon)
  .use(Progress)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Toast)
  .use(VanImage)
  .use(Grid)
  .use(GridItem)
  .use(NoticeBar)
  .use(Tabs);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
