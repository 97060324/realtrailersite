import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// CSS shit
import './css/style.css'
import './css/html.css'
import './css/trailerrecent.css'
import './css/traileroverview.css'
import '../vue.config'

import TrailerOne from './components/TrailerOne';
import Home from './App.vue';

// Vue router shit
Vue.use(VueRouter);

Vue.use(Vuex);


const routes = [
  { path: "/", component: Home },
  { path: "/TrailerOne", component: TrailerOne },
];

const router = new VueRouter({
  routes
});


import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router,
}).$mount('#app')
