import Vue from 'vue'
import App from './App.vue'
import './css/style.css'
import './css/html.css'
import './css/trailerrecent.css'
import './css/traileroverview.css'
import '../vue.config'

import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-180796467-1',
  checkDuplicatedScript: true
})

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
