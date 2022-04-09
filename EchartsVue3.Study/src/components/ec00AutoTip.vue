<template>
  <div ref="myDiv" class="default"></div>
</template>
<script lang="ts">
import * as echarts from 'echarts';
import { Vue } from 'vue-class-component';

export default class Home extends Vue {
  mounted(): void {
    const myDiv = this.$refs.myDiv as HTMLElement;
    const myChart = echarts.init(myDiv);
    // myChart.setOption()
  }
}
</script>

<style scoped>
.default {
  width: 600px;
  height: 400px;
}
</style>
