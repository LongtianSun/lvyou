<template>
  <div>
    <headerQY></headerQY>
    <div class="banner">
      <div class="title-box">你好, 世界!</div>
      <div class="search">
        <input placeholder="搜索城市、目的地" type="text">
        <div class="right" @click="search"><i class="el-icon-search"></i> 搜索</div>
      </div>
    </div>

    <!-- 热门城市区域 -->
    <hotCity></hotCity>
  </div>
</template>

<script>
// 导入热门城市组件
import hotCity from '@/components/hotCity.vue'
import headerQY from '@/views/components/header.vue'

export default {
  components: {
    hotCity,
    headerQY
  },
  methods: {
    search() {
      this.$router.push('/itinerary')
    }
  }
}
</script>

<style scoped lang="less">
.header {
  background-color: #323232;
  height: 30px;
  padding: 0px 38px;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  .left {
    height: 30px;
    display: flex;
  }
  h1 {
    width: 58px;
    height: 18px;
    align-self: center;
    background: url(@/assets/index/logo.png) no-repeat left center/cover;
  }
  ul {
    display: flex;
    margin-left: 10px;
    font-weight: 700;
    li {
      padding: 0 10px;
      a {
        color: #c0c0c0;
      }
    }
    li:hover a{
      color: #1bb041;
    }
  }
  .right {
    height: 30px;
    display: flex;
    align-items: center;
    a {
      color: silver;
      font-size: 14px;
      transition: all 0.3s;
    }
    a:hover {
      color: #1bb041;
    }

  }
}

.banner {
  height: 500px;
  background-color: pink;
  background-image: url(@/assets/index/banner.png);
  background-size: cover;
  padding-top: 162px;
  .title-box {
    text-align: center;
    font-weight: 700;
    color: #fff;
    font-size: 56px;
  }
  .search {
    overflow: hidden;
    display: flex;
    margin: 40px auto;
    width: 760px;
    height: 60px;
    background-color: pink;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
    .right {
      width: 160px;
      background-color: #28b76c;
      line-height: 60px;
      text-align: center;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
    }
    .right:hover {
      background-color: #27ad66;
    }
    input {
      flex: 1;
      border: none;
      padding: 0px 24px;
      font-size: 18px;
      outline: none; 
    }
    input::placeholder {
      font-family: 宋体;
      color: #b4b5b4;
    }
  }
}

</style>
