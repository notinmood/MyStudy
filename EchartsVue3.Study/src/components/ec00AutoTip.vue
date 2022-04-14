<!--
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-09 09:10:50
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-12 09:44:40
 * @FilePath     : ec00AutoTip.vue
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
-->
<template>
  本组件演示 echarts 的代码自动提示功能：
  <div ref="myDiv" class="default"></div>
</template>
<script lang="ts">
import * as echarts from 'echarts';
import {Vue}        from 'vue-class-component';

export default class Home extends Vue {
  mounted(): void {
    const myDiv = this.$refs.myDiv as HTMLElement;
    const myChart = echarts.init(myDiv);
    // myChart.setOption();
  }
}
</script>

<style scoped>
.default {
  width: 600px;
  height: 400px;
}
</style>
