<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script lang="ts">
import * as ec           from "echarts";
import {defineComponent} from "vue";

const animationDuration = 6000;
// const aa: ec.EChartsOption = {};
export default defineComponent({
  props: {
    className: {
      type   : String,
      default: "chart",
    },
    width    : {
      type   : String,
      default: "100%",
    },
    height   : {
      type   : String,
      default: "100%",
    },
    // 数据源
    echartsData: {
      type   : Object,
      default:
          () => ({} as ec.EChartsOption),
    },
  },

  data() {
    return {
      chart: null,
    };
  },

  watch: {},

// // 初始化
//   mounted(
//       {
//         // this
//         // .
//         // initChart();
// // window.addEventListener("resize", function () {
// //   this.chart.resize();
// // });
// },
//
// // 销毁
// beforeUnmount();
// {
//   if (!this.chart) {
//     return;
//   }
//   // window.removeEventListener("resize", this.resizeHandler);
//   this.chart.dispose();
//   this.chart = null;
// },
//
// methods = {
//   initChart() {
//     // this.chart = echarts.init(this.$el, "macarons");
//     this.chart = this.echarts.init(this.$el);
//     this.chart.setOption(this.echartsData, animationDuration);
//   },
// }
});
</script>
