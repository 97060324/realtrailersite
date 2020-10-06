<template>
  <div class="body">
    <div class="recenttrailer">
      <carousel :perPageCustom="[[370, 1.5], [768, 5]]" :loop="true" :pagination-enabled="false" :autoplay="true">
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
    Vue.axios.get('https://api.npoint.io/8f1508e4c976b0fdafbf')

    .then((resp)=>{
      this.list=resp.data.maintrailer;
    })
  },
  components: {
    Carousel,
    Slide
  }
}
</script>
