<template>
    <div>Container</div>
    <uss></uss>
    <ppp></ppp>
    <MyMixinUsing></MyMixinUsing>
</template>
<script>
// 以下代码演示 Mixins 功能。引入 Mixins 跟引入普通的 Vue 方式一样。
import {my} from "@/mixins/my.js";
export default {
    mixins: [my],
};
</script>
<script setup>
// 以下代码演示将文件导入后，在本地可以任意命名
import uss from "./components/1.usingScriptSetup.vue";
import ppp from "./components/1.usingScriptSetup.vue";
</script>

<style lang="scss" scoped></style>
