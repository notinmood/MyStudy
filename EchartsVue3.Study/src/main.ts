/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-08 07:04:09
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-13 12:34:44
 * @FilePath     : main.ts
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */
import {createApp}  from "vue";
import * as echarts from "echarts";

// import App from './App.vue';
// import App from "./Container1.vue";
// import App          from "./EChartsComponentUsing.vue";
import App          from "./Container2.vue";

const app = createApp(App);

// 1. 可以通过全局属性传递 信息给各个子组件。但不建议这么做，因为子组件使用setup机制的时候，是没有 this 关键字的。
app.config.globalProperties.$echarts = echarts;

// 2. 建议通过 provide/inject 机制传递数据。//provide('echarts', echarts);
// 参见 App.vue 中的代码

app.mount("#app");
