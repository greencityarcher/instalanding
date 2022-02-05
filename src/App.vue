<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SimpleLinks/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SimpleLinks from './components/SimpleLinks.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SimpleLinks
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
