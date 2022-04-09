<template>
  <h1>ECharts ABC</h1>
  <div ref="myDiv" id="myDiv" class="default"></div>
</template>
<script lang="ts">
import * as ec from 'echarts';

export default {
  mounted(): void {
    // this.$echarts.init(this.$refs.myDiv);
    // ec.init(this.$refs.myDiv);
    const dom = document.getElementById('myDiv') as HTMLElement;
    const myChart = ec.init(dom);

    // // 注册必须的组件
    // ec.use([
    //   ec.TitleComponent,
    //   ec.TooltipComponent,
    //   ec.GridComponent,
    //   ec.DatasetComponent,
    //   ec.TransformComponent,
    //   ec.BarChart,
    //   ec.LabelLayout,
    //   ec.UniversalTransition,
    //   ec.CanvasRenderer,
    // ]);

    // 指定图表的配置项和数据
    const option = {
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {
        mainType: 'tooltip',
      },
      legend: {
        data: ['销量'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
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
