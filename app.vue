<template>
    <!-- template中只能包含一个根节点vue 2.xx -->
    <div>
        <!-- 头部 -->
        <my-header myTitle="传智24期CMS系统"></my-header>
        <!-- 路由显示的地方 -->
        <router-view></router-view>
        <!-- 底部 -->
        <my-footer></my-footer>
    </div>
</template>
<script>
</script>
<!-- scoped让css只对当前template有效 -->
<style scoped>
.icon-shopcar,
.icon-member {
    font-size: 25px;
}

.router-link-active {
    color: red;
}
</style>
