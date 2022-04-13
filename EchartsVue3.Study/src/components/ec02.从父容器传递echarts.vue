<!--
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-12 09:41:36
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-13 09:02:43
 * @FilePath     : ec02.从父容器传递echarts.vue
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
-->

<template>
  EC02：
  <div id="myDiv"></div>
</template>
<script setup lang="ts">
import { inject, onMounted } from 'vue';

const ec = inject('echarts');

onMounted(() => {
  const myDiv = document.getElementById('myDiv') as HTMLElement;
  if (myDiv) {
    console.log('has myDiv');
  } else {
    console.log('no myDiv');
  }
  // ─────────────────────────────────────
  if (ec) {
    myDiv.innerText = '获取到了传递过来的ECharts！！';
  } else {
    myDiv.innerText = '你好，我们正在使用ECharts！！';
  }
});
</script>

<style lang="scss" scoped></style>
