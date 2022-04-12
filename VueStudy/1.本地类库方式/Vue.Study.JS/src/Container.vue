<!--
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-06 16:29:01
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-12 08:45:59
 * @FilePath     : Container.vue
 * @Description  : 
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved. 
-->
<template>
    <div>Container</div>
    <uss></uss>
    <ppp></ppp>
    <MyMixinUsing></MyMixinUsing>
    <pai></pai>
</template>
<script>
// 以下代码演示 Mixins 功能。引入 Mixins 跟引入普通的 Vue 方式一样。
import {my} from "@/mixins/my.js";
import { provide } from "vue";
export default {
    mixins: [my],
};
</script>
<script setup>
// 以下代码演示将文件导入后，在本地可以任意命名
import uss from "./components/1.usingScriptSetup.vue";
import ppp from "./components/1.usingScriptSetup.vue";

import pai from './components/3.provideAndInject.vue';
/**
 * 另外：在 setup 内引入的组件，不用再次暴露，就可以直接在 template 里面使用。
 */

provide("provide.name","myStory");
</script>

<style lang="scss" scoped></style>
