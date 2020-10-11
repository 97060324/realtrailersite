<template>
  <div class="body">
    <div class="trailer-recent" v-for="trailer in list" :key="trailer.id">
        <img class="trailer-image" :src="trailer.image" />
          <div class="trailer-title">
            <h1>{{ trailer.name }}</h1>
            <h3>{{ trailer.year }}</h3>
            <h3>{{ trailer.rating }}</h3>
            <h3>{{ trailer.category }}</h3>
          </div>
    </div>

    <div class="trailer-categorys-title">
        <h1>Categorys</h1>
    </div>
    <div class="trailer-categorys">
      <div class="trailer-array" v-for="category in categorys" :key="category.id">{{ category.title }}</div>
    </div>

    <div class="trailer-list" v-for="trailerlist in trailers" :key="trailerlist.id">
      <img class="trailer-list-image" :src="trailerlist.image">
      <div class="trailer-list-title">
        <h2>{{ trailerlist.name }}</h2>
        <h3>{{ trailerlist.year }}</h3>
        <h3>{{ trailerlist.rating }}</h3>
        <h3>{{ trailerlist.category }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)
export default {
  data() {
    return {
      maintrailers: [],
      list: undefined,
      categorys: undefined,
      trailers: undefined,
    }
  },
  mounted() {
    Vue.axios.get('https://api.npoint.io/8f1508e4c976b0fdafbf')

    .then((resp)=>{
      this.list=resp.data.maintrailer;
    }),

    Vue.axios.get('https://api.npoint.io/c6814c2454d61cd7ef85')

    .then((resp)=>{
      this.categorys=resp.data.categorys;
    }),

    Vue.axios.get('https://api.npoint.io/1f7da34f4106e07d3fc3')

    .then((resp)=>{
      this.trailers=resp.data.traileroftheweek;
    })

  }
}
</script>
