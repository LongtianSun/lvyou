<template>
    <div class="father">
        <div class="left">
            <ul>
                <li class="active"><span>ALL</span> 全部行程</li>
                <li @click="resetMap(...Hotel.coordinates)"><span>1</span>{{ Hotel.name }}</li>
                <li @click="getDriving(Hotel.coordinates, item.coordinates)" v-for="(item, i) in listData" :key="i">
                    <span>{{ i + 2 }}</span>
                    {{ Hotel.name }}-{{ item.name }}
                </li>
            </ul>
        </div>
        <div id="container" class="container"></div>
        <div id="panel" class="navigation"></div>
        <!-- <div class="search">
            <p>请输入关键字:</p>
            <input id="search" type="text" @select="getSelect(e)" v-model="search">
        </div> -->
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
window._AMapSecurityConfig = {
    securityJsCode: 'dc2b12f08e35af65685333ad83959c51'
}
export default {
    name: 'detailMap',
    data() {
        return {
            Hotel: {
                name: '洪山宾馆',
                coordinates: [114.337636, 30.546368],
            },
            listData: [
                {
                    name: '欢乐谷',
                    coordinates: [114.391474, 30.590843],
                },
                {
                    name: '黄鹤楼',
                    coordinates: [114.302494, 30.544658],
                },
                {
                    name: '武汉长江大桥',
                    coordinates: [114.292743, 30.547347],
                },
                {
                    name: '武汉大学',
                    coordinates: [114.364237, 30.536741],
                },
                {
                    name: '武昌江滩',
                    coordinates: [114.322897, 30.589031],
                }
            ],
            map: null,
            toolbar: null,     // 工具条插件
            points: [
                { keyword: '北京市地震局（公交站）', city: '北京' }, //起始点坐标
                { keyword: '亦庄文化园（地铁站）', city: '北京' } //终点坐标
            ],
            driving: null,   //  引入和创建驾车规划插件，获取起终点规划线路    
            geolocation: null, //地位插件
            autoComplete: null, //输入提示插件
            search: '',
            placeSearch: null, //POI搜索插件
            marker: null,       //地图标记
            AMap: null,
        }
    },
    created() {
        if(this.$route.query.id) {
            this.Hotel = JSON.parse(localStorage.getItem('Hotel'))
            this.listData = JSON.parse(localStorage.getItem('listData'))
            console.log(this.Hotel, this.listData)
        }
    },
    mounted() {
        this.initMap()
    },
    methods: {
        initMap() {
            AMapLoader.load({
                key: "93c050d9d67ccdf87c989b7f98b99f61",             // 申请好的Web端开发者Key，首次调用 load 时必填
                version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                plugins: ["AMap.ToolBar", 'AMap.Geolocation', 'AMap.Driving', "AMap.AutoComplete", 'AMap.PlaceSearch'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            }).then((AMap) => {
                this.AMap = AMap
                this.map = new AMap.Map("container", {  //设置地图容器id
                    viewMode: "3D",    //是否为3D地图模式
                    zoom: 15,           //初始化地图级别
                    center: [114.337636, 30.546368], //初始化地图中心点位置
                });

                this.map.on('click', function (e) {
                    console.log(e.lnglat.lng, e.lnglat.lat)
                });

                // 构造路线导航
                // this.getDriving(AMap)

                //在回调函数中实例化插件，并使用插件功能
                this.toolbar = new AMap.ToolBar(); //创建工具条插件实例
                this.map.addControl(this.toolbar); //添加工具条插件到页面
                this.toolbar.show()                //控制工具条展示
            })
        },
        getDriving(start = [114.337636, 30.546368], end = [114.391474, 30.590843]) {
            if(this.marker) {
                this.marker.setMap(null);
                this.marker = null;
            }
            //构造路线导航类
            if (this.driving) {
                this.driving.clear()
                this.driving = null
            }
            if (!this.driving) {
                this.driving = new this.AMap.Driving({
                    map: this.map,
                    panel: "panel"
                });
                // 根据起终点经纬度规划驾车导航路线
                this.driving.search(new this.AMap.LngLat(...start), new this.AMap.LngLat(...end), (status, result) => {
                    if (status === 'complete') {
                        // this.map.setCenter([116.442581,39.882498])
                    } else {
                    }
                });
            }
        },
        // 实例化点标记
        addMarker(lon, lat) {
            if (true) {
                this.marker = new AMap.Marker({
                    icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
                    position: [lon, lat],
                    offset: new AMap.Pixel(-13, -30)
                });
                this.marker.setMap(this.map);
            }
        },
        // 清除 marker
        clearMarker() {
            if (this.marker) {
                this.marker.setMap(null);
                this.marker = null;
            }
        },
        // 重新定位地图中心位置
        resetMap(lon, lat) {
            this.map.setCenter([lon, lat])
            this.addMarker(lon, lat)
        }
    },
    beforeDestroy() {
        //销毁地图，并清空地图容器
        this.map.destroy();
        //地图对象赋值为null
        this.map = null
    }
}
</script>

<style scoped lang="less">
.navigation {
    width: 265px;
    max-height: 600px;
    position: fixed;
    top: 50px;
    left: 290px;
    background-color: pink;
    overflow: scroll;
    border-radius: 10px;
}

.navigation::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Opera */
}

.search {
    position: fixed;
    top: 5px;
    right: 10px;
    width: 190px;
    height: 60px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 5px;
}

.father {
    display: flex;
    height: 100vh;

    .left {
        width: 270px;

        ul {
            li {
                width: 270px;
                height: 59px;
                background-color: #fff;
                padding-left: 20px;
                line-height: 59px;
                border-top: 1px solid #e5e5e5;
                cursor: pointer;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

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