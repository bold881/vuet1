<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button type="primary" @click="callCompOneFunc">测试</el-button>
    <CompOne v-on:sayHello="onSayHello" ref="refCompOne"/>
    <SimpleBarChart chartTitle="Echarts入门"/>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import CompOne from '../../components/CompOne.vue'
import SimpleBarChart from '../../components/SimpleBarChart.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    CompOne,
    SimpleBarChart
  },
  methods: {
    onSayHello(params) {
      console.log(params)
    },
    callCompOneFunc() {
      this.$refs.refCompOne.printHello('李明')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
