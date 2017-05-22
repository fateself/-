<template>
    <div class="tmpl">
        <!-- 引入返回导航 -->
        <div class="photo-header">
            <ul>
                <li v-for="item in categorys" :key="item.id">
                    <a href="javascript:;" @click="getImgsById(item.id)">{{item.title}}</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="item in imgs" :key="item.id">
                    <a>
                        <img :src="item.img_url">
                        <p>
                            <span>{{item.title}}</span>
                            <br>
                            <span>{{item.zhaiyao}}</span>
                        </p>
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
            categorys: [], //分类
            imgs: [], //图片
        }
    }, created() {
        //首先获取导航栏分类
        // this.axios.get('getimgcategory')
        //     .then(res => {
        //         this.categorys = res.data.message; //数据返回来了，但是获取错误
        //         //添加一个数据
        //         this.categorys.unshift({
        //             id: 0,
        //             title: '全部'
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         console.log('获取图片分类信息失败');
        //     });

        //     this.getImgsById(0);//默认加载全部

        //合并请求
        //
        //
        this.axios.all([
                this.axios.get('getimgcategory'),
                this.axios.get('getimages/' + 0)
            ]) //两个请求同时成功才会then
            .then(this.axios.spread((res1, res2) => {
                //操作分类
                this.categorys = res1.data.message; //数据返回来了，但是获取错误
                //添加一个数据
                this.categorys.unshift({
                    id: 0,
                    title: '全部'
                });
                this.imgs = res2.data.message;


            }))
            .catch(err => {
                console.log(err);
                console.log('获取图片分类或者图片信息失败');
            });
    }, methods: {
        getImgsById(id) {
            this.axios.get('getimages/' + id)
                .then(res => {
                    this.imgs = res.data.message;
                })
                .catch(err => {
                    console.log('获取图片信息失败');
                })
        },
    }
}
</script>
<style>
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}

.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}


/*下面的图片*/

.photo-list li {
    list-style: none;
    position: relative;
}

.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul {
    padding-left: 0px;
    margin: 0;
}

.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}
</style>
