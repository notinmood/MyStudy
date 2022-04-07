<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <SFC></SFC>
  <uss></uss>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SFC from './components/mySFC.vue';
import uss from './components/1.usingScriptSetup.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    SFC,
    uss,
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
