// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from 'store'
import * as components from './components'
import { registerComponents } from './utils'

Vue.config.productionTip = false

registerComponents(Vue, components)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});