<!--
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-12 09:43:45
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-13 12:25:59
 * @FilePath     : ec04配置options.vue
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
-->

<template>
  <h1>ECharts ABC</h1>
  <div ref="myDiv" id="myDiv" class="default"></div>
</template>
<script lang="ts">
import * as ec from "echarts";

export default {
  mounted(): void {
    const dom = document.getElementById("myDiv") as HTMLElement;
    const myChart = ec.init(dom);

    // // 指定图表的配置项和数据
    const option: ec.EChartsOption = {
      // const option = {
      title  : {
        text     : "ECharts-入门示例",
        textAlign: "left",
      },
      tooltip: {
        mainType: "tooltip",
      },
      legend : {
        data: ["销量"],
      },
      xAxis  : {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis  : {
        type: "value",
      },
      series : [
        {
          name: "销量信息",
          type: "bar",
          data: [5, {value: 20, itemStyle: {color: "#900000"}}, 36, 10, 10, 20],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
};
</script>
<style scoped>
.default {
  width: 600px;
  height: 400px;
}
</style>
