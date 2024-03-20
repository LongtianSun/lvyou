<template>
  <li>
    <p><i class="iconfont icon-dian"></i></p>
        <div class="context">
            <img :src="ImgSrc" alt="">
            <div class="content">
                <h5>{{ title }}</h5>
                <p>
                    <el-rate v-model="value" disabled></el-rate>
                    <span>11分</span>
                </p>
                <div class="user">
                    <img src="@/assets/index/janAu.png" alt="">
                    <p>JanAu ： 珠海境内都不需要出示港澳通行证，除非你是飞澳门机场或者香港机场然后到珠海。珠海大桥，金湾机场，九洲港码头都是珠海市内的</p>
                </div>
            </div>
        </div>
    <p><i class="iconfont icon-dian"></i></p>
    </li>
</template>

<script>
export default {
    name: 'AttractionCard',
    props: {
        title: {
            type: String,
            default: '九州港'
        },
        ImgSrc: {
            type: String,
            default: '/images/hlg.png'
        }
    },
    data () {
        return {
            value: 4.5
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
            flex: 1;
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
            .user {
                margin-top: 10px;
                display: flex;
                img {
                    width: 24px;
                    height: 24px;
                    border-radius: 12px;
                }
                p {
                    margin: 0 0 0 10px;
                    padding-top: 0;
                    width: 320px;
                    line-height: 1.5;
                    height: 52px;
                    font-size: 12px;
                    color: #636363;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>