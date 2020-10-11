<template>
    <div class="trailer-overview">
        <carousel :perPage="1" :paginationEnabled="false" :autoplay="true">
            <slide v-for="trailer in trailers" :key="trailer.id">
                <img class="trailer-overview-backgroundimage" :src="trailer.image">
                <div class="trailer-carousel">
                    <img class="trailer-carousel-image" :src="trailer.image">
                </div>  
            </slide>
        </carousel>
    </div>
</template>


<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { Carousel, Slide } from 'vue-carousel';

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
     components: {
        Carousel,
        Slide
    }
}
</script>
