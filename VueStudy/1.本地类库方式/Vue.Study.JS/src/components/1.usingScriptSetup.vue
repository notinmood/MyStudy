<template>
    <hr />
    <h1>1.usingScriptSetup 组件</h1>
    <div>说明信息：{{ displayInfo }}</div>
</template>
<script>
export default {
    setup() {
        // let myName = "zhangsan";
        // let myAge = 20;
        // // const displayInfo = `我的名字是 ${this.myName},年龄为 ${this.myAge}`;
        // const displayInfo = `我的名字是zhangsan,年龄为20岁.`;
        // return {
        //     displayInfo,
        // };
    },
};
</script>
<script setup>
let myName = "zhangsan";
let myAge = 20;

const displayInfo = `我的名字是 ${myName},年龄为 ${myAge}`;
</script>

<style scoped></style>
