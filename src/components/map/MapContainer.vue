<template>
    <div>
        <div id="container"></div>
        <div class="show" id="my-panel"></div>
    </div>

</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
window._AMapSecurityConfig = {
    securityJsCode: 'dc2b12f08e35af65685333ad83959c51'
}
export default {
    name: "map-view",
    data() {
        return {
            map: null,
            placeSearch: null,
        };
    },
    mounted() {
        this.initAMap();
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
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        doSearch(place) {
            this.placeSearch.search(place)
        }
    },
};
</script>
<style lang="less" scoped>
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
}
</style>