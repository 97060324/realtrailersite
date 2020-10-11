<template>
  <div id="app">
    <TrailerOverview/>
    <TrailerHead />
    <Recent />
  </div>
</template>

<script>
import TrailerHead from './components/TrailerHead.vue'
import Recent from './components/Recent.vue'
import TrailerOverview from './components/TrailerOverview'

export default {
  name: 'App',
  components: {
    TrailerHead,
    Recent,
    TrailerOverview,
  }
}
</script>

<style>
#app {
  color: #ffffff;
}
</style>
