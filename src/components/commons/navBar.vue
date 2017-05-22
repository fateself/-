<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack"></a>
            <h1 class="mui-title">{{title}}</h1>
        </header>
    </div>
</template>
<script>
export default {
    data() {
            return {

            }
        },
        //声明接受父组件属性
        props: ['title'],
        methods: {
            goBack() {
                //使用vue-router提供功能的对象的函数
                this.$router.go(-1); //进入上一次浏览的历史记录
            }
        }
}
</script>
<style scoped>
.mui-bar.mui-bar-nav {
    position: relative;
}
</style>
