import Vue from 'vue'
import App from './App.vue'
import axios from 'axois'


Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
