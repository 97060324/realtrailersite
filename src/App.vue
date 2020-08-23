<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <TrailerHead />
  </div>
</template>

<script>
import TrailerHead from './components/TrailerHead.vue'

export default {
  name: 'App',
  components: {
    TrailerHead
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #ffffff;
}
</style>
