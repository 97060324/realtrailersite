<template>
  <div class="body">
    <div class="trailer-recent" v-for="items in list" :key="items.id">
        <img class="trailer-image" v-bind:src="items.image" />
          <div class="trailer-title">
            <h1>{{items.name}}</h1>
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
    }
  },
  mounted() {
    Vue.axios.get('https://api.npoint.io/8f1508e4c976b0fdafbf')

    .then((resp)=>{
      this.list=resp.data.maintrailer;
    })
  },
  components: {
  }
}
</script>
