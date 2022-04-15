<template>
  <div id="myDiv"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import {onMounted}  from "vue";

const option: echarts.EChartsOption = {
  // 图例
  legend : {
    top: "bottom",
  },
  // 右上角的工具箱
  toolbox: {
    show   : true,
    feature: {
      mark       : {show: true},
      dataView   : {
        show    : false,
        readOnly: false,
      },
      restore    : {show: true},
      saveAsImage: {show: true},
    },
  },
  series : [
    {
      name     : "Nightingale Chart",
      type     : "pie",
      radius   : [20, 250],
      center   : ["50%", "50%"],
      roseType : "area",
      itemStyle: {
        borderRadius: 8,
      },
      data     : [
        {
          value: 40,
          name : "rose 1",
        },
        {
          value: 38,
          name : "rose 2",
        },
        {
          value: 32,
          name : "rose 3",
        },
        {
          value: 30,
          name : "rose 4",
        },
        {
          value: 28,
          name : "rose 5",
        },
        {
          value: 26,
          name : "rose 6",
        },
        {
          value: 22,
          name : "rose 7",
        },
        {
          value: 18,
          name : "rose 8",
        },
      ],
    },
  ],
};

// +--------------------------------------------------------------------------
// |::说明·| echarts 的各种准备数据在外侧进行；在 onMounted 内部仅仅进行最后的展示。
// +--------------------------------------------------------------------------
onMounted(() => {
  const chartDom = document.getElementById("myDiv") as HTMLDivElement;
  const myChart = echarts.init(chartDom);
  myChart.setOption(option);
});

</script>

<style scoped>
#myDiv {
  width: 600px;
  height: 600px;
}
</style>
