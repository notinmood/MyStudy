<!--
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-12 08:39:34
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-12 08:47:29
 * @FilePath     : 3.provideAndInject.vue
 * @Description  : 
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved. 
-->

<template>
    <div></div>
</template>
<script setup>
import { inject } from "vue";

const echarts = inject("provide.name");
console.log("——————");
console.log(echarts);
</script>
<style lang="scss" scoped></style>
