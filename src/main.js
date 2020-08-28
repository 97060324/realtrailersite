import Vue from 'vue'
import App from './App.vue'
import './css/style.css'
import './css/html.css'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
