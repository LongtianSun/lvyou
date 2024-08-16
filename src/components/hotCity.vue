<template>
  <div class="father">
    <div class="title">热门城市推荐</div>
    <div class="context">
      <div class="tap">
        <ul>
          <li>热门推荐</li>
          <li v-for="(item, i) in fatherList" :class="{ active: i === active }" :key="i" @click="tabClick(item, i)">{{
            item.name }}</li>
        </ul>
      </div>
      <div class="body-box">
        <ul>
          <li v-for="(item, index) in hotList" :key="index">
            <div class="title">{{ item.name }}</div>
            <div class="body">
              <span v-for="(a, i) in item.city" :key="i">{{ a }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hotCity',
  data() {
    return {
      activeName: 'second',
      active: 0,
      fatherList: [
        {
          name: '日韩 港澳台',
          list: [
            {
              name: '港澳台',
              city: ['香港', '澳门', '台北', '垦丁', '花莲', '高雄市', '台中市', '九份', '台南', '淡水', '宜兰']
            },
            {
              name: '日本',
              city: ['东京', '大阪', '京都', '冲绳', '北海道', '名古屋', '奈良', '札幌', '富士山地区', '镰仓', '神户']
            },
            {
              name: '韩国',
              city: ['首尔', '济州岛', '釜山']
            },
          ]
        },
        {
          name: '东南亚及亚洲其他',
          list: [
            {
              name: '泰国',
              city: ['曼谷', '普吉岛', '苏梅岛', '芭提雅', '甲米', '花心', '皮皮岛']
            },
            {
              name: '新加坡',
              city: ['新加坡']
            },
            {
              name: '越南',
              city: ['芽庄', '胡志明市', '河内', '美奈', '达纳', '富国岛']
            },
          ]
        },
        {
          name: '欧洲',
          list: [
            {
              name: '泰国',
              city: ['曼谷', '普吉岛', '苏梅岛', '芭提雅', '甲米', '花心', '皮皮岛']
            },
            {
              name: '新加坡',
              city: ['新加坡']
            },
            {
              name: '越南',
              city: ['芽庄', '胡志明市', '河内', '美奈', '达纳', '富国岛']
            },
          ]
        },
        {
          name: '大洋洲 北美',
          list: [
            {
              name: '泰国',
              city: ['曼谷', '普吉岛', '苏梅岛', '芭提雅', '甲米', '花心', '皮皮岛']
            },
            {
              name: '新加坡',
              city: ['新加坡']
            },
            {
              name: '越南',
              city: ['芽庄', '胡志明市', '河内', '美奈', '达纳', '富国岛']
            },
          ]
        },
        {
          name: '非洲 南美',
          list: [
            {
              name: '泰国',
              city: ['曼谷', '普吉岛', '苏梅岛', '芭提雅', '甲米', '花心', '皮皮岛']
            },
            {
              name: '新加坡',
              city: ['新加坡']
            },
            {
              name: '越南',
              city: ['芽庄', '胡志明市', '河内', '美奈', '达纳', '富国岛']
            },
          ]
        }
      ],
      hotList: [
        {
          name: '港澳台',
          city: ['香港', '澳门', '台北', '垦丁', '花莲', '高雄市', '台中市', '九份', '台南', '淡水', '宜兰']
        },
        {
          name: '日本',
          city: ['东京', '大阪', '京都', '冲绳', '北海道', '名古屋', '奈良', '札幌', '富士山地区', '镰仓', '神户']
        },
        {
          name: '韩国',
          city: ['首尔', '济州岛', '釜山']
        },
      ]
    }
  },
  created() {

  },
  methods: {
    tabClick(item, index) {
      this.active = index
      this.hotList = item.list
    },
    async getList() {
      // const res = axios({
      //   url: '/api/hotList',
      //   method: 'GET'
      // })
      // this.fatherList = res.data.fatherList
      // this.hotList = this.fatherList[0].list
    }
  }
}
</script>

<style scoped lang="less">
.active {
  color: #520000;
  border-bottom: 2px solid #28b76c;
}

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
          margin-top: 30px;

          .title {
            font-size: 16px;
            text-align: left;
            margin-bottom: 5px;
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