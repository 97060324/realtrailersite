import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './css/style.css'
import './css/html.css'
import './css/trailerrecent.css'
import './css/traileroverview.css'
import '../vue.config'

Vue.use(VueRouter);

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
