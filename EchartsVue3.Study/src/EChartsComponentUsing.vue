<template>
  <div id="test">
    <ecc :echartsData="echartsData"/>
  </div>
</template>

<script>
import ecc from "./components/EChartsComponent.vue";

export default {
  components: {
    ecc,
  },
  data() {
    return {
      echartsData: {
        tooltip: {
          trigger    : "axis",
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为："line" | "shadow"
          },
        },
        grid   : {
          top         : 10,
          left        : "2%",
          right       : "2%",
          bottom      : "3%",
          containLabel: true,
        },
        xAxis  : [{
          type    : "category",
          data    : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true,
          },
        }],
        yAxis  : [{
          type    : "value",
          axisTick: {
            show: false,
          },
        }],
        series : [{
          name    : "pageA",
          type    : "bar",
          stack   : "vistors",
          barWidth: "60%",
          data    : [79, 52, 200, 334, 390, 330, 220],
        }, {
          name    : "pageB",
          type    : "bar",
          stack   : "vistors",
          barWidth: "60%",
          data    : [80, 52, 200, 334, 390, 330, 220],
        }, {
          name    : "pageC",
          type    : "bar",
          stack   : "vistors",
          barWidth: "60%",
          data    : [30, 52, 200, 334, 390, 330, 220],
        }],
      },
    };
  },
};
</script>

<style scoped>
#test {
  width: 100%;
  height: 100%;
  background: antiquewhite;
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>
