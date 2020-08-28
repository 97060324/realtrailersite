<template>
  <div class="body">
    <carousel :perPage="1.45" :pagination-enabled="false">
      <slide>
        <a href="trialer1"><img src="../assets/Trailers/trailer1.png"></a>
      </slide>
      <slide>
        <a href="trailer2"><img src="../assets/Trailers/trailer2.png"></a>
      </slide>
      <slide>
        <a href="trailer2"><img src="../assets/Trailers/trailer3.png"></a>
      </slide>
      <slide>
        <a href="trailer2"><img src="../assets/Trailers/trailer4.png"></a>
      </slide>
      <slide>
        <a href="trailer2"><img src="../assets/Trailers/trailer5.png"></a>
      </slide>
    </carousel>

    <h2 class="trialerofw">Trailer of the week</h2>
    <div class="totw">
    
      <img class="image-totw" src="../assets/Trailers/trailer3.png">
      
    </div><br>
    <div class="totw">
      <img class="image-totw" src="../assets/Trailers/trailer4.png">
    </div><br>
    <div class="totw">
      <img class="image-totw" src="../assets/Trailers/trailer1.png">
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