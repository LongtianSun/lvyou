<template>
    <li>
        <div class="li-left" @click="goDetail">
            <img src="@/assets/index/wuhan.png" alt="">
        </div>
        <div class="li-right">
            <div class="row1">
                <h2 @click="goDetail">{{ itineraryInfo.hotel.name }} {{str}}</h2>
                <a href=""><i class="el-icon-document-copy"></i> 复制行程</a>
            </div>
            <div class="row2">
                <i class="el-icon-date"></i> 2018-02-14 出发
            </div>
            <div class="row3">{{ str2 }}</div>
            <div class="row4">
                <span>购物</span>
                <span>美食</span>
            </div>
            <div class="row5">
                <div class="user-info">
                    <img src="@/assets/index/Tx.png" alt="">
                    <span>夏天的烂兔子</span>
                </div>
                <div class="other-info">
                    <span>6698人浏览</span>
                    <span>183人复制</span>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        itineraryInfo: {
            type: Object,
            default: {
                hotel: {
                    name: '武汉假期游'
                },
                list: [
                    {
                        name: '欢乐谷'
                    },
                    {
                        name: '黄鹤楼'
                    },
                    {
                        name: '武汉长江大桥'
                    },
                    {
                        name: '八分山'
                    },
                ]
            }
        }
    },
    computed: {
        str() {
            const arr = this.itineraryInfo.list.map(item => item.name)
            return arr.join(' - ')
        },
        str2() {
            const arr = this.itineraryInfo.list.map(item => item.name)
            return arr.join(' · ')
        }
    },
    methods: {
        goDetail() {
            this.$router.push('/detail')
        }
    }
}
</script>

<style scoped lang="less">
li {
    width: 800px;
    height: 200px;
    border-bottom: 1px solid #f0f0f0;
    ;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    .li-left {
        width: 228px;
        height: 160px;
        cursor: pointer;
        overflow: hidden;

        img {
            object-fit: cover;
            width: 228px;
            height: 160px;
            transition: all 1s;

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    .li-right {
        width: 552px;
        height: 161px;

        .row1 {
            display: flex;
            cursor: pointer;
            justify-content: space-between;

            h2 {
                font-size: 16px;
                font-weight: 500;
                color: #323232;
            }

            a {
                font-size: 14px;
                color: #636363;
                line-height: 14px;
            }
        }

        .row2 {
            margin: 12px 0;
            font-size: 12px;
            line-height: 12px;
            color: #959595;
        }

        .row3 {
            font-size: 14px;
            color: #636363;
            line-height: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .row4 {
            margin-top: 15px;
            margin-bottom: 17px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            span {
                display: inline-block;
                margin-right: 20px;
                height: 30px;
                line-height: 30px;
                padding: 0 12px;
                text-align: center;
                font-size: 13px;
                color: rgba(0, 0, 0, .6);
                background: #f0f0f0;
                border-radius: 15px;
            }
        }

        .row5 {
            height: 30px;
            display: flex;
            justify-content: space-between;

            .user-info {
                height: 30px;

                img {
                    width: 30px;
                    height: 30px;
                    border-radius: 15px;
                }

                span {
                    display: inline-block;
                    line-height: 30px;
                    margin-left: 6px;
                    font-size: 12px;
                    font-weight: 500;
                    color: #636363;
                }
            }

            .other-info {
                height: 30px;

                span {
                    font-size: 12px;
                    color: rgba(0, 0, 0, .4);
                    margin-left: 19px;
                    line-height: 30px;
                }
            }
        }
    }
}
</style>