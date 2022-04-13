<!--
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-09 10:33:15
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-13 09:11:44
 * @FilePath     : ec03refs.vue
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
-->
<template>
  这里是 this.$refs 的使用演示：
  <div ref="myDiv">ec03</div>
  <span ref="mySpan"></span> <br>
</template>
<script lang="ts">

import {Vue} from 'vue-class-component';

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
