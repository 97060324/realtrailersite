<template>
  <div>
    <h2 style="padding-left: 20px;">Trailers of the week</h2>
        <div v-for="item in list" :key="item.id">
            <div class="card">
                <img class="card-image" width="101px" v-bind:src=" item.cardimage" /> 
                <div class="card-title">
                    <p>{{ item.name }}</p>
                </div>
            </div>
        </div>
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
  mounted() {
    Vue.axios.get('https://api.npoint.io/1f7da34f4106e07d3fc3')
    .then((resp)=>{
      this.list=resp.data.traileroftheweek;
    //   console.warn(resp.data.traileroftheweek)
    })
  },
}
</script>
