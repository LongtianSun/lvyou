<template>
    <div>
        <div id="container"></div>
        <div class="show" id="my-panel"></div>
        <div class="my-plan">
            <h3>我的行程</h3>
            <div class="content">
                <ul v-if="planList.length">
                    <li v-for="(item, index) in planList" :key="index">
                        <i class="el-icon-error" @click="delPlan(item, index)"></i>
                        {{ item.data.name }}
                    </li>
                </ul>
                <img class="emty" src="@/assets/index/kkry.png" alt="" v-else>
            </div>
            <div class="button" @click="planRoute">规划路线 <i class="el-icon-s-promotion"></i></div>
        </div>
        <PlanRoute ref="plan" @createPlan="createPlan"></PlanRoute>
    </div>

</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import PlanRoute from "./PlanRoute.vue"
window._AMapSecurityConfig = {
    securityJsCode: 'dc2b12f08e35af65685333ad83959c51'
}
export default {
    name: "map-view",
    components: {
        PlanRoute,
    },
    data() {
        return {
            map: null,
            placeSearch: null,
            planList: [],
            planRef: {}         // 规划路线弹框组件实例
        };
    },
    mounted() {
        this.initAMap();
        this.planRef = this.$refs.plan
    },
    beforeDestroy() {
        this.map?.destroy();
    },
    methods: {
        initAMap() {
            AMapLoader.load({
                key: "93c050d9d67ccdf87c989b7f98b99f61", // 申请好的Web端开发者Key，首次调用 load 时必填
                version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
            })
                .then((AMap) => {
                    this.map = new AMap.Map("container", {
                        // 设置地图容器id
                        viewMode: "3D", // 是否为3D地图模式
                        zoom: 11, // 初始化地图级别
                        center: [116.397428, 39.90923], // 初始化地图中心点位置
                    });

                    // 搜索插件
                    AMap.plugin(["AMap.PlaceSearch"], () => {
                        this.placeSearch = new AMap.PlaceSearch({
                            pageSize: 5, //单页显示结果条数
                            pageIndex: 1, //页码
                            // city: "010", //兴趣点城市
                            citylimit: false, //是否强制限制在设置的城市内搜索
                            map: this.map, //展现结果的地图实例
                            panel: "my-panel", //结果列表将在此容器中进行展示。
                            autoFitView: true, //是否自动调整地图视野使绘制的 Marker 点都处于视口的可见范围
                        });
                        // this.placeSearch.search("北京大学"); //使用插件搜索关键字并查看结果
                        this.placeSearch.on('listElementClick', (e) => {
                            console.log(e)
                            if(e.data.entr_location) {
                                this.planList.push(e)
                            }else {
                                this.$message.error('此景点已过期')
                            }
                        })
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        doSearch(place) {
            this.placeSearch.search(place)
        },
        delPlan(item, index) {
            this.planList.splice(index, 1)
        },
        planRoute() {
            this.planRef.showPlan()
        },
        createPlan(hotel) {
            console.log('this.planList', this.planList)
            const localData = this.planList.map(item => {
                return {
                    name: item.data.name,
                    coordinates: [item.data.entr_location.lng, item.data.entr_location.lat]
                }
            })
            localStorage.setItem('Hotel', JSON.stringify({name: hotel.name, coordinates: hotel.coordinates}))
            localStorage.setItem('listData', JSON.stringify(localData))
            const localDataArr = JSON.parse(localStorage.getItem('myListData') || '[]')
            localDataArr.push({
                hotel: {name: hotel.name, coordinates: hotel.coordinates},
                list: localData
            })
            localStorage.setItem('myListData', JSON.stringify(localDataArr))
            const loading = this.$loading({
                lock: true,
                text: '正在为您规划路线...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {

                loading.close();
                this.$confirm('行程创建完成!', '提示', {
                    confirmButtonText: '预览',
                    cancelButtonText: '进入行程主页',
                    type: 'warning'
                }).then(() => {
                    console.log('这里是预览')
                    this.$router.replace('/detailMap?id=1')
                }).catch(() => {
                    console.log('这里是进入行程主页')
                    this.$router.replace('/itineraryhome')
                });
            }, 2000);
        }
    },
};
</script>
<style lang="less" scoped>
.emty {
    width: 308px;
}

#container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 800px;
}

.show {
    position: fixed;
    top: 150px;
    left: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    max-width: 300px;
}

.my-plan {
    position: fixed;
    top: 100px;
    right: 50px;
    width: 350px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
        /* Chrome, Safari, Opera */
    }

    max-height: 600px;

    h3 {
        padding: 20px;
        background-color: #f5f5f5;
        color: #6e7070;
    }

    .content {
        padding: 20px;
    }

    .button {
        height: 70px;
        text-align: center;
        line-height: 70px;
        background-color: #45aae3;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }

    li {
        padding: 5px;
        height: 36px;
        border-radius: 4px;
        line-height: 26px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
        background: #fff;
        transition: all .5s;
        margin-bottom: 10px;

        &:hover {
            background-color: #fdf0ab;
        }

        i {
            margin: 0 10px;
            color: #b9b9b8;
            cursor: pointer;
        }
    }
}
</style>