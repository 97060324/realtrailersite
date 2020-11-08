<template>
  <div class="body">
    <div @click="setTrailer(TRAILERS.HEAD) " class="trailer-recent" v-for="trailer in list" :key="trailer.id">
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

    <div @click="setTrailer(TRAILERS.ONE)" class="trailer-list" v-for="trailerlist in trailers" :key="trailerlist.id">
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

const TRAILERS = {
  HEAD: 'Trailer Head',
  ONE: 'Trailer One',
}

Vue.use(VueAxios,axios)
export default {
  data() {
    return {
      maintrailers: [],
      list: undefined,
      categorys: undefined,
      trailers: undefined,

      TRAILERS,
      trailer: TRAILERS.HEAD,

    }
  },
  mounted() {
    Vue.axios.get('https://api.npoint.io/8f1508e4c976b0fdafbf') // MainTrailer API

    .then((resp)=>{
      this.list=resp.data.maintrailer;
    }),

    Vue.axios.get('https://api.npoint.io/c6814c2454d61cd7ef85') // Categorys API

    .then((resp)=>{
      this.categorys=resp.data.categorys;
    }),

    Vue.axios.get('https://api.npoint.io/1f7da34f4106e07d3fc3') // Trailer of the week

    .then((resp)=>{
      this.trailers=resp.data.traileroftheweek;
    })
  },
  methods: {
    setTrailer(trailer) {
      this.trailer = trailer;

      switch (this.trailer) {
        case TRAILERS.HEAD:
          document.getElementsByClassName('trailer-overview')[0].style.display = 'block';
          document.getElementsByClassName('body')[0].style.display = 'none';
          document.getElementsByClassName('title')[0].style.display = 'none';
          break;
          case TRAILERS.ONE:
            document.getElementsByClassName('trailer-one')[0].style.display = 'block';
            document.getElementsByClassName('body')[0].style.display = 'none';
            document.getElementsByClassName('title')[0].style.display = 'none';
          break;
      }
    },

    // openTrailerOverview() {
    //   document.getElementsByClassName('trailer-overview')[0].style.display = 'block'; //trailer-overview kan dan naar verschillende trailers
    //   document.getElementsByClassName('body')[0].style.display = 'none';
    //   document.getElementsByClassName('title')[0].style.display = 'none';
    // }
  }
}
</script>
