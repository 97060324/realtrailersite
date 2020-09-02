<template>
  <div class="body">
    <div class="recenttrailer">
      <carousel :perPageCustom="[[480, 1.5], [768, 4]]" :loop="true" :pagination-enabled="false" :autoplay="true">
      <slide class="slide">
        <a href="trialer1"><img src="../assets/Trailers/trailer1.png"></a>
      </slide>
      <slide class="slide">
        <a href="trailer2"><img src="../assets/Trailers/trailer2.png"></a>
      </slide>
      <slide class="slide">
        <a href="trailer3"><img src="../assets/Trailers/trailer3.png"></a>
      </slide>
      <slide class="slide">
        <a href="trailer4"><img src="../assets/Trailers/trailer4.png"></a>
      </slide>
      <slide class="slide">
        <a href="trailer5"><img src="../assets/Trailers/trailer5.png"></a>
      </slide>  
    </carousel>

    <ul>
      <li v-for="maintrailer in maintrailers" :key="maintrailer.id">
        {{ maintrailer }}
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios';

export default {
  data() {
    return {
      maintrailers: [],
    }
  },
  async created() {
    try {
      const red = await axios.get('https://davidvandenpol.nl/json/cardtrailer.json');

      this.maintrailer = red.data;
    } catch {
      console.error();
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>