<template>
  <div class="body">
    <carousel :perPage="1.45" :loop="true" :pagination-enabled="false" :autoplay="true">
      <slide>
        <a href="trialer1"><img src="../assets/Trailers/trailer1.png"></a>
      </slide>
      <slide>
        <a href="trailer2"><img src="../assets/Trailers/trailer2.png"></a>
      </slide>
      <slide>
        <a href="trailer3"><img src="../assets/Trailers/trailer3.png"></a>
      </slide>
      <slide>
        <a href="trailer4"><img src="../assets/Trailers/trailer4.png"></a>
      </slide>
      <slide>
        <a href="trailer5"><img src="../assets/Trailers/trailer5.png"></a>
      </slide>
    </carousel>
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