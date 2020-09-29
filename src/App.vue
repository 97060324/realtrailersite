<template>
  <div id="app">
    <TrailerHead />
    <Recent />
    <TrailerOfTheWeek/>
    <TrailerCategorys/>
  </div>
</template>

<script>
import TrailerHead from './components/TrailerHead.vue'
import TrailerOfTheWeek from './components/TrailerOfTheWeek.vue'

import Recent from './components/Recent.vue'
import TrailerCategorys from './components/TrailerCategorys'


export default {
  name: 'App',
  components: {
    TrailerHead,
    Recent,
    TrailerOfTheWeek,
    TrailerCategorys,
  }
}
</script>

<style>
#app {
  color: #ffffff;
}
</style>
