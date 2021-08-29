import Vue from 'vue'
import router from "./router";
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import plugins from "./plugins";
import VueDayjs from 'vue-dayjs-plugin'

Vue.use(VueDayjs)

Vue.config.productionTip = false


Vue.use(VueAxios, axios)

plugins.create(Vue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");