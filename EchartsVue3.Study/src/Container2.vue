<!--
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-13 09:15:37
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-13 11:40:31
 * @FilePath     : Container1.vue
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
-->
<template>
  <div>
    <ecc></ecc>
  </div>
</template>
<script lang="ts" setup>
import {provide}    from "vue";
import * as echarts from "echarts";

import ecc from "./components/ec05Rose.vue";

// 通过 provide/inject 机制传递数据。
provide("echarts", echarts);
</script>
<style lang="scss" scoped></style>
