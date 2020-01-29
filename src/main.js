import Vue from 'vue'
import App from './App.vue'
import VueLogger from 'vuejs-logger';
import router from "./router";
import VueGtag from "vue-gtag";
import store from './store.js'

import { LOG_LEVEL } from './config'

Vue.config.productionTip = false

const loggingOptions = {
  isEnabled: true,
  logLevel : LOG_LEVEL,
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, loggingOptions);
Vue.use(VueGtag, {
  config: { id: "UA-33541793-1" }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
