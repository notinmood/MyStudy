<!--
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-08 07:04:08
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-13 09:22:25
 * @FilePath     : App.vue
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
-->
<template>
  <ec00></ec00>
  ─────────────────────────────────────<br/>
  <ec03></ec03>
  ─────────────────────────────────────<br/>
  <ec01></ec01>
  ─────────────────────────────────────<br/>
</template>

<script setup lang="ts">
import {provide}    from 'vue';
import * as echarts from 'echarts';

import ec00 from './components/ec00AutoTip.vue';
import ec01 from './components/ec01入门.vue';
import ec03 from './components/ec03refs.vue';

// 通过 provide/inject 机制传递数据。
provide('echarts', echarts);

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
