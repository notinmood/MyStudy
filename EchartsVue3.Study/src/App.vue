<template>
  <ec00></ec00>
  ─────────────────────────────────────<br />
  <ec03></ec03>
  ─────────────────────────────────────<br />
  <ec01></ec01>
  ─────────────────────────────────────<br />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ec01 from './components/ec01.vue';
import ec00 from './components/ec00AutoTip.vue';
import ec03 from './components/ec03refs.vue';

@Options({
  components: {
    ec01,
    ec00,
    ec03,
  },
})
export default class App extends Vue {}
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
