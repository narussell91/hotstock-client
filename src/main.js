import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import router from "./router.js";
import HighchartsVue from "highcharts-vue";

import "bootswatch/dist/lux/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(HighchartsVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
