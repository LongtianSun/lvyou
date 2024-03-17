<template>
  <div class="father">
    <div class="title">热门城市推荐</div>
    <div class="context">
      <div class="tap">
        <ul>
          <li>热门推荐</li>
          <li>日韩 港澳台</li>
          <li>东南亚及亚洲其他</li>
          <li>欧洲</li>
          <li>大洋洲 北美</li>
          <li>非洲 南美</li>
        </ul>
      </div>
      <div class="body-box">
        <ul>
          <li>
            <div class="title">泰国</div>
            <div class="body">
              <span>曼谷</span>
              <span>普吉岛</span>
              <span>苏梅岛</span>
              <span>芭提雅</span>
              <span>甲米</span>
              <span>花心</span>
              <span>皮皮岛</span>
            </div>
          </li>
          <li>
            <div class="title">新加坡</div>
            <div class="body">
              <span>新加坡</span>
            </div>
          </li>
          <li>
            <div class="title">越南</div>
            <div class="body">
              <span>芽庄</span>
              <span>胡志明市</span>
              <span>河内</span>
              <span>美奈</span>
              <span>达纳</span>
              <span>富国岛</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'hotCity',
    data () {
        return {
          activeName: 'second'
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style scoped lang="less">
.father {
  padding-top: 70px;
  .title {
    text-align: center;
    font-size: 24px;
    color: #000
  }
  .context {
    width: 980px;
    margin: 40px auto;
    .tap {
      width: 780px;
      margin: 0 auto;
      ul {
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        height: 33px;
        justify-content: space-between;
        font-size: 18px;
        color: #929292;
        cursor: pointer;
        li:hover {
          color: #520000;
        border-bottom: 2px solid #28b76c;
        }
      }
    }
    .body-box {
      margin-top: 15px;
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          width: 306px;
          height: 100px;
          // background-color: pink;
          margin-top: 30px;
          .title {
            font-size: 16px;
            text-align: left;
            margin-bottom:5px;
          }
          .body {
            font-size: 14px;
            display: flex;
            flex-wrap: wrap;
            span {
              margin-right: 21px;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}

</style>