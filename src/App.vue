<template>
  <div id="app">
    <TrailerHead />
    <Recent />
    <Recommend />
    <Popular />
  </div>
</template>

<script>
import TrailerHead from './components/TrailerHead.vue'

import Recent from './components/Recent.vue'
import Recommend from './components/Recommend.vue'
import Popular from './components/Popular.vue'

export default {
  name: 'App',
  components: {
    TrailerHead,
    Recent,
    Recommend,
    Popular,
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #ffffff;
}
</style>
