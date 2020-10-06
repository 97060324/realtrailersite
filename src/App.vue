<template>
  <div id="app">
    <TrailerHead />
    <Recent />
  </div>
</template>

<script>
import TrailerHead from './components/TrailerHead.vue'
import Recent from './components/Recent.vue'


export default {
  name: 'App',
  components: {
    TrailerHead,
    Recent,
  }
}
</script>

<style>
#app {
  color: #ffffff;
}
</style>
