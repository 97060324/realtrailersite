<template>
  <div class="traileroftheweek">
  <!-- <h2 class="trialerofw">Trailers of the week</h2>
  <a href="#">
    <div class="card">
    <div class="card-text">
      <div class="portada">
        <img v-bind:src="image.api">
      </div>
      <div class="title-total">   
        <h2>Unhinged</h2>
        <div class="desc"><b>9,7</b>/10</div>
        <div class="desc">1h 31min</div>
        <div class="desc">action, adventure, sci-fi</div>
      </div>
    </div>
  </div>
  </a> -->
</div>
</template>


<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
export default {
  data() {
    return {
      maintrailers: [],
      list: undefined,
    }
  },
  // mounted() {
  //   Vue.axios.get('https://davidvandenpol.nl/json/cardtrailer.json')
  //   .then((resp)=>{
  //     this.list=resp.data.maintrailer;
  //     // console.warn(resp.data.maintrailer)
  //   })
  // },
}
</script>
