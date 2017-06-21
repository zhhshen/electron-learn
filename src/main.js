// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Directives from './directives'

Vue.config.productionTip = false

Object.keys(Directives).forEach(key => {
  Vue.directive(key, Directives[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
