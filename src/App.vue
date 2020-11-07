<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SandBoxMock/>
    <SandBoxServer/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import SandBoxMock from './components/SandBoxMock'
import SandBoxServer from './components/SandBoxServer'

export default {
  name: 'App',
  components: {
    SandBoxMock,
    SandBoxServer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
