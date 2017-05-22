<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <a :href="img.url">
                    <img :src="img.img">
                </a>
            </mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:'news.list'}">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:'pic.list'}">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品展示</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">搜索资讯</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                text: '我就是home',
                imgs: [], //初始的数据类型能大概说明这个对象是什么类型
            }
        }, //在组件创建的时候
        created() {
            this.axios.get('getlunbo')
                .then(res => {
                    this.imgs = res.data.message;
                }) //第一个then,也能在给一个,失败的回调函数
                .catch(err => {
                    console.log('获取轮播图出现异常');
                })
        }
}
</script>
<style scoped>
/*处理轮播图*/

.mint-swipe {
    height: 220px;
}

.mint-swipe img {
    height: 220px;
    width: 100%;
}


/*处理字体图标，清空并指定背景图片*/

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    content: '';
}


/*放入图片背景*/

.mui-icon {
    height: 50px;
    width: 50px;
}

.mui-icon-home {
    background-image: url(../../static/img/news.png);
    background-repeat: round;
}

.mui-icon-email {
    background-image: url(../../static/img/picShare.png);
    background-repeat: round;
}

.mui-icon-chatbubble {
    background-image: url(../../static/img/goodShow.png);
    background-repeat: round;
}

.mui-icon-location {
    background-image: url(../../static/img/feedback.png);
    background-repeat: round;
}

.mui-icon-search {
    background-image: url(../../static/img/search.png);
    background-repeat: round;
}

.mui-icon-phone {
    background-image: url(../../static/img/callme.png);
    background-repeat: round;
}


/*去除li的黑色边框*/

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    background-color: white;
    border: 0;
}


/*去除ul的边框*/

.mui-table-view.mui-grid-view.mui-grid-9 {
    border: 0;
    background-color: white;
}
</style>
