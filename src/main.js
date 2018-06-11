import Vue from 'vue'
import App from './App.vue'
import Slidernav from './lib/index.js'

Vue.use(Slidernav)

new Vue({
  el: '#app',
  render: h => h(App)
})
