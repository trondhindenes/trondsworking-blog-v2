import Vue from 'vue'
import App from './App.vue'
import VueLogger from 'vuejs-logger';
import router from "./router";

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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
