<template>
  <div ref="myDiv">ec03</div>
  <span ref="mySpan"></span>
</template>
<script lang="ts">
// import * as ec from 'echarts';
import { Vue } from 'vue-class-component';

export default class EC03 extends Vue {
  mounted(): void {
    /**
     * 类型必须继承于 Vue，内部才能使用 this.$refs 定位 DOM
     */
    const domDiv = this.$refs.myDiv as HTMLElement;
    domDiv.innerText = 'hello';

    const domSpan = this.$refs.mySpan as HTMLSpanElement;
    domSpan.textContent = '我是一个span！';
  }
}
</script>
<style scoped></style>
