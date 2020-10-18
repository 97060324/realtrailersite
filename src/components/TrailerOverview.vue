<template>
    <div class="trailer-overview">

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
