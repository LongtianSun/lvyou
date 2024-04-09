<template>
  <div>
    <map-container ref="map"></map-container>
    <div class="search">
      <div class="text">
        <span>想去哪里:</span><i @click="doSearch" class="el-icon-search"></i>
      </div>
      <el-input v-model="place" @change="doSearch" placeholder="输入你想去的城市或者景点"></el-input>
    </div>
  </div>
</template>

<script>
import MapContainer from '../map/MapContainer.vue'
export default {
    components: {
        MapContainer
    },
    data() {
        return {
            mapRef: null,
            place: ''
        }
    },
    mounted() {
      this.mapRef = this.$refs.map
    },
    methods: {
      doSearch() {
        this.mapRef.doSearch(this.place)
      }
    }
}
</script>

<style lang="less" scoped>
.search {
  position: fixed;
  top: 50px;
  left: 50px;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .el-input {
    margin-top: 5px;
    align-self: center;
  }
  .text {
    display: flex;
    justify-content: space-between;
  }
}

</style>