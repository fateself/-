'use strict';
//引入vue
import Vue from 'vue';
//引入vue-router 并安装插件、实例化、配置路由、加入到vue实例对象配置中
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
        linkActiveClass: 'mui-active',
    }

    //配置当按钮被点击以后的自动高亮样式
    // {
    // //配置规则
    // routes: [
    //     {name:'home',path:'/home',component:Home}
    // ]}
);
//引入axios 加其挂载到Vue的原型上，以后this.axios就可以使用
import Axios from 'axios';
//设置基本的URL
Axios.defaults.baseURL = 'http://webhm.top:8899/api/';
Vue.prototype.axios = Axios;


//引入UI: mint-ui 安装插件 -> template直接用、 js部分就按需引入
import MintUi from 'mint-ui';
//css部分
import 'mint-ui/lib/style.css';
Vue.use(MintUi); //安装插件

// 引入mui 的css
import './static/vendor/mui-master/dist/css/mui.css';
// 引入我们自己定义的全局css
import './static/css/global.css';

//引入moment对象
import Moment from 'moment';

// console.log(Moment('2015-04-16T03:50:28.000Z').format('YYYY年MM月DD日'));

//引入home组件
import Home from './components/home/home.vue';
//引入app.vue
import App from './app.vue';
import Member from './components/member/member.vue';
import Shopcar from './components/goods/shopcar.vue';
import Search from './components/search/search.vue';
import NewsList from './components/news/list.vue';
import NewsDetail from './components/news/detail.vue';
import PicList from './components/picture/share.vue'; //图片分享
//定义导航的全局组件
import NavBar from './components/commons/navBar.vue';
import MyHeader from './components/partials/myHeader.vue';
import MyFooter from './components/partials/myFooter.vue';


//路由配置开始
router.addRoutes([
    { name: 'home', path: '/home', component: Home },
    { name: 'default', path: '/', redirect: '/home' }, //跳转到Home ,redirect也可以使用名称 redirect:{name:"home"}
    { name: 'member', path: '/member', component: Member }, //会员
    { name: 'shopcar', path: '/shopcar', component: Shopcar }, //购物车
    { name: 'search', path: '/search', component: Search }, //查找
    { name: 'news.list', path: '/news/list', component: NewsList }, //新闻列表
    { name: 'news.detail', path: '/news/detail', component: NewsDetail }, //新闻详情
    { name: 'pic.list', path: '/pic/list', component: PicList }, //图片分享
]);
//路由配置结束



//注册全局过滤器
Vue.filter('format_date', function(time) { //  {{ xxx.date | format_date}}
    return Moment(time).format('YYYY-MM-DD');
})

//注册全局的组件，具备返回功能的导航栏
Vue.component('navBar', NavBar); //使用nav-bar
Vue.component('myHeader', MyHeader); //使用my-header
Vue.component('myFooter', MyFooter); //底部组件

new Vue({
    el: '#app',
    router, //配置到vue实例中，让路由对象发生作用
    render: c => c(App)
});
