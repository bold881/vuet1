<template>
    <el-card shadow="never">
        <p class="chart-title">{{chartTitle}}</p>
        <div id="main" ref="refMainChart"></div>
    </el-card>
</template>
<script>
export default {
    name: "SimpleBarChart",
    props: ['chartTitle'],
    mounted() {
        this.drawLine()
    },
    methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(this.$refs.refMainChart)
            myChart.clear()
            // 绘制图表
            let option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };
            myChart.setOption(option);
        }
    },
}
</script>

<style scoped>
#main {
    width: 100%;
    height: 300px;
}
.chart-title {
    text-align: center;
    font-weight: bold;
    color: #000;
    font-size: 15px;
}
</style>
