import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "@/store/index";

import { DropdownMenu, DropdownItem, Button, Uploader } from "vant";

Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.use(Button);
Vue.use(Uploader);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
