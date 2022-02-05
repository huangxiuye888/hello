<template>
  <div class="home">
    <div id="box" style="width: 1200px; height: 800px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Lista",
  data() {
    return {};
  },
  methods: {
    getCharts() {
      const myChart = echarts.init(document.querySelector("#box"));
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          data: ["aaa", "bbb", "ccc",'Temperature'],
        },
        color: ["red", "yellow", "green",'#333'],
        xAxis: {
          data: ["A", "B", "C", "D", "E"],
        },
        yAxis: [
          {
            type: "value",
            name: "Precipitation",
            interval: 5,
            axisLabel: {
              formatter: "{value} ml",
            },
          },
          {
            type: "value",
            name: "Temperature",
            interval: 5,
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        series: [
          {
            name: "aaa",
            data: [10, 22, 28, 43, 49],
            type: "bar",
            stack: "x",
          },
          {
            name: "bbb",
            data: [5, 4, 3, 5, 10],
            type: "bar",
            stack: "x",
          },
          {
            name: "ccc",
            data: [15, 14, 13, 15, 20],
            type: "bar",
            stack: "x",
          },
          {
            name: "Temperature",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.getCharts();
  },
};
</script>