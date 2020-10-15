<template>
    <div class="trailer-overview">
        <div class="trailer-overview-container">
            <img class="trailer-overview-array" v-for="trailer in trailers" :key="trailer.id" :src="trailer.image">
        </div>
        <div class="trailer-overview-title">

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
            trailers: undefined,
        }
    },
    mounted() {
        Vue.axios.get('https://api.npoint.io/1f7da34f4106e07d3fc3')

        .then((resp)=>{
        this.trailers=resp.data.traileroftheweek;
        })
    },
    methods: {
        closeTrailerOverview() {
            document.getElementsByClassName('trailer-overview')[0].style.display = 'none';
            document.getElementsByClassName('body')[0].style.display = 'block';
            document.getElementsByClassName('title')[0].style.display = 'block';
        }
    },
}
</script>
