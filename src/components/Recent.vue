<template>
  <div class="body">
    <!-- <ul>
      <li v-for="item in list" :key="item.id">
        {{ item }}
      </li>
    </ul> -->
    <div class="recenttrailer">
      <carousel :perPageCustom="[[480, 2], [768, 3]]" :loop="true" :pagination-enabled="false" :autoplay="true">
      <slide class="slide" v-for="item in list" :key="item.id">
        <a href="#"><img class="imageSlide" v-bind:src="item.cardimage"></a>
      </slide>  
    </carousel>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)
export default {
  data() {
    return {
      maintrailers: [],
      list: undefined,
    }
  },
  mounted() {
    Vue.axios.get('https://davidvandenpol.nl/json/cardtrailer.json')
    .then((resp)=>{
      this.list=resp.data.maintrailer;
      // console.warn(resp.data.maintrailer)
    })
  },
  components: {
    Carousel,
    Slide
  }
}
</script>