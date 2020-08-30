<template>
  <div id="app">
    <TrailerHead />
    <Recent />
    <TrailerOfTheWeek/>
  </div>
</template>

<script>
import TrailerHead from './components/TrailerHead.vue'
import TrailerOfTheWeek from './components/TrailerOfTheWeek.vue'

import Recent from './components/Recent.vue'


export default {
  name: 'App',
  components: {
    TrailerHead,
    Recent,
    TrailerOfTheWeek,
  }
}
</script>

<style>
#app {
  color: #ffffff;
}
</style>
