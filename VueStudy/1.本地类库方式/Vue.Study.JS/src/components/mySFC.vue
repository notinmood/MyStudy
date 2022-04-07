<template>
    <hr />
    <h1 class="box">我是第一个DIY的单文件组件</h1>
    ─────────────────────────────────────<br />
    本段数据来源于 data() <br />
    <div>姓名为：{{ name }}</div>
    <div>年龄为：{{ getAge() }}</div>
    ─────────────────────────────────────<br />
    本段数据来源于 setup() <br />
    <div>学校为：{{ school }}</div>
    <div>城市为：{{ city }}</div>
    <div>工作：{{ job }}</div>
    <div>全体信息：{{ misc }}</div>
    ─────────────────────────────────────<br />
</template>

<script>
// +--------------------------------------------------------------------------
// |::说明·|
// +--------------------------------------------------------------------------
export default {
    name: "mySFC",
    data() {
        return {
            name: "zhangsan",
            age: 20,
            key: "value",
            getName: function () {
                return this.name;
            },
        };
    },
    methods: {
        getAge: function () {
            return this.age;
        },
    },
    //   setup: function (props, context) {
    //     let school = "Tsinghua University";
    //     return {
    //       city: "QingdaoCity",
    //       school,
    //     };
    //   },
};
</script>

<script setup>
let school = "Tsinghua University";
let city = "QingdaoCity";
let job = "Engineer";
let misc = "我的其他信息";
</script>

<style scoped>
.box {
    color: brown;
}
</style>
