<template>
    <div>
      <div class="trailer-overview">
        <button @click="closeTrailerOverview()">Go back</button>
        <h1>TrailerOverview van Trailer Head</h1>
      </div>
      <div class="trailer-one">
        <button @click="closeTrailerOne()">Go back</button>
        <h1>Hoii Trailer-one hierr</h1>
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
    methods: {
        closeTrailerOverview() {
            document.getElementsByClassName('trailer-overview')[0].style.display = 'none';
            document.getElementsByClassName('body')[0].style.display = 'block';
            document.getElementsByClassName('title')[0].style.display = 'block';
        },
        closeTrailerOne() {
          document.getElementsByClassName('trailer-one')[0].style.display = 'none';
          document.getElementsByClassName('body')[0].style.display = 'block';
          document.getElementsByClassName('title')[0].style.display = 'block';
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
}
</script>
