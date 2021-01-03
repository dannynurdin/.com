import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import titleMixin from './mixins/titleMixin.js'


Vue.config.productionTip = false
Vue.mixin(titleMixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
