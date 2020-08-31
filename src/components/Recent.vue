<template>
  <div class="body">
    <div class="recenttrailer">
      <carousel :perPageCustom="[[768, 5], [1024, 4]]" :loop="true" :pagination-enabled="false" :autoplay="true">
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
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>
