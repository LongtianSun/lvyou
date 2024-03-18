<template>
  <li>
    <p><i class="iconfont icon-dian"></i></p>
        <div class="context">
            <img src="@/assets/index/jiuzhou.png" alt="">
            <div class="content">
                <h5>九洲港</h5>
                <p>
                    <el-rate v-model="value" disabled></el-rate>
                </p>
            </div>
        </div>
    <p><i class="iconfont icon-dian"></i></p>
    </li>
</template>

<script>
export default {
    name: 'AttractionCard',
    data () {
        return {
            value: 1
        }
    }
}
</script>

<style scoped lang="less">
li {
    height: 210px;
    padding: 0 30px;
    p {
        height: 30px;
        line-height: 30px;
        color: #efefef;
    }
    .context {
        height: 150px;
        display: flex;
        img {
            width: 200px;
            height: 150px;
        }
        .content {
            margin-left: 15px;
            h5 {
                font-size: 16px;
                font-weight: 400;
                color: #323232;
            }
            p {
                padding-top: 5px;
                font-size: 0;
                line-height: 12px;
                height: 23px;
            }
        }
    }
}
</style>