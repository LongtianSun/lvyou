<template>
    <div class="header">
        <div class="left">
            <h1></h1>
            <ul @click="showMessage">
                <li><a href="">目的地</a></li>
                <li><a href="">锦囊</a></li>
                <li><a href="">社区</a></li>
                <li><a href="">行程助手</a></li>
                <li><a href="">商城</a></li>
                <li><a href="">酒店·民宿</a></li>
                <li><a href="">特价酒店</a></li>
            </ul>
        </div>
        <div class="right">
            <span v-if="$store.state.userInfo.username"><i class="el-icon-user-solid"></i> {{ $store.state.userInfo.username }}</span>
            <a href="#/login" v-else>登录</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'headerQY',
    methods: {
      showMessage(e) {
        e.preventDefault()
        this.$message({
          message: '该功能还没有开放哦！',
          center: true
        });
      }
    }
};
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
    span {
      color: #fff;
    }
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
</style>