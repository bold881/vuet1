<template>
    <div>
        <el-button type="primary" @click="onBtnClick">CompOne按钮</el-button>
    </div>
</template>

<script>
export default {
    name: 'CompOne',
    methods: {
        onBtnClick() {
            this.$emit('sayHello', '来自CompOne的Hello')
        },
        printHello(name) {
            console.log(name, ', Hello again!')
        }
    }
}
</script>