<template>
    <div class="father">
        <div class="left">
            <ul>
                <li class="active"><span>ALL</span> 全部行程</li>
                <li><span>1</span>武汉珠海</li>
                <li><span>2</span>珠海</li>
                <li><span>3</span>珠海</li>
            </ul>
        </div>
        <div id="container" class="container"></div>
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
window._AMapSecurityConfig = {
    securityJsCode: 'dc2b12f08e35af65685333ad83959c51'
}
export default {
    name: 'detailMap',
    data () {
        return {
            map: null
        }
    },
    mounted() {
        this.initMap()
    },
    methods:{
        initMap(){
            AMapLoader.load({
                key:"93c050d9d67ccdf87c989b7f98b99f61",             // 申请好的Web端开发者Key，首次调用 load 时必填
                version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                plugins:[''],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            }).then((AMap)=>{
                this.map = new AMap.Map("container",{  //设置地图容器id
                    viewMode:"3D",    //是否为3D地图模式
                    zoom:5,           //初始化地图级别
                    center:[105.602725,37.076636], //初始化地图中心点位置
                });
            }).catch(e=>{
                console.log(e);
            })
        },
    },
    destroyed() {
        //销毁地图，并清空地图容器
        this.map.destroy();
        //地图对象赋值为null
        this.map = null
    }
}
</script>

<style scoped lang="less">
.father {
    display: flex;
    height: 100vh;
    .left {
        width: 270px;
        ul{
            li {
                width: 270px;
                height: 59px;
                background-color: #fff;
                padding-left: 20px;
                line-height: 59px;
                border-top: 1px solid #e5e5e5;
                cursor:pointer;
                span {
                    display: inline-block;
                    width: 58px;
                    text-align: center;
                }
            }
            li:hover {
                background-color: #f3f3f3;
            }
            .active {
                background-color: #f3f3f3;
            }
        }
    }
    .container {
        flex: 1;
        background-color: rgb(157, 79, 79);
    }
}
</style>