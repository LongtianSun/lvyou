<template>
    <div class="father">
        <headerQY></headerQY>
        <header>
            <div class="bg"></div>
            <div class="context">
                <div class="fg wrapper">
                    <div class="mask-bottom">
                        <div class="left">
                            <img src="@/assets/index/Tx.png" alt="">
                            <div class="name">
                                <h2>夏天的烂兔子 欢乐谷-黄鹤楼-武汉长江大桥-八分山</h2>
                                <p>出发日期：2018-02-14</p>
                            </div>
                        </div>
                        <div class="right">
                            <span><i class="el-icon-view"></i>浏览：6701</span>
                            <span><i class="el-icon-document-copy"></i>复制：183</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="body wrapper">
            <div class="body-left">
                <div class="day">
                    <div class="title">
                        <div class="left">D1</div>
                        <div class="right">
                            <p>02月14日 |</p>
                            <h2>武汉 Wuhan <i class="iconfont arrow-right icon-arrow-right"></i> 洪山宾馆</h2>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <p><i class="iconfont icon-dian"></i></p>
                            <div class="context">
                                <img src="@/assets/index/start.png" alt="">
                                <div class="content">
                                    <!-- <p><span>出发：</span> 武汉 （武汉天河国际机场）08:10</p> -->
                                    <p><span>到达：</span> 洪山宾馆 10:05</p>
                                </div>
                            </div>
                            <p><i class="iconfont icon-dian"></i></p>
                        </li>
                    </ul>
                </div>
                <div class="day">
                    <div class="title">
                        <div class="left">D2</div>
                        <div class="right">
                            <p>02月14日 |</p>
                            <h2> 洪山宾馆 <i class="iconfont arrow-right icon-arrow-right"></i> 欢乐谷</h2>
                        </div>
                    </div>
                    <ul>
                        <card title="欢乐谷" ImgSrc="./images/hlg.png"></card>
                    </ul>
                </div>
                <div class="day">
                    <div class="title">
                        <div class="left">D3</div>
                        <div class="right">
                            <p>02月14日 |</p>
                            <h2> 洪山宾馆 <i class="iconfont arrow-right icon-arrow-right"></i> 黄鹤楼</h2>
                        </div>
                    </div>
                    <ul>
                        <card title="黄鹤楼" ImgSrc="./images/D3.png"></card>
                    </ul>
                    <p style="padding-left: 27px; color: #2c3e50;;"><i class="iconfont icon-kaichela"></i></p>
                    <ul>
                        <card title="武汉长江大桥" ImgSrc="./images/whcjdq.png"></card>
                    </ul>
                </div>
                <div class="day">
                    <div class="title">
                        <div class="left">D4</div>
                        <div class="right">
                            <p>02月14日 |</p>
                            <h2> 洪山宾馆 <i class="iconfont arrow-right icon-arrow-right"></i> 武汉大学</h2>
                        </div>
                    </div>
                    <ul>
                        <card title="武汉大学" ImgSrc="./images/whdx.png"></card>
                    </ul>
                </div>
                <div class="day">
                    <div class="title">
                        <div class="left">D5</div>
                        <div class="right">
                            <p>02月14日 |</p>
                            <h2> 洪山宾馆 <i class="iconfont arrow-right icon-arrow-right"></i> 武昌江滩</h2>
                        </div>
                    </div>
                    <ul>
                        <card title="武昌江滩" ImgSrc="./images/wcjt.png"></card>
                    </ul>
                </div>
            </div>
            <div ref="move" class="body-right" @click="$router.push('/detailMap')">
            </div>
        </div>
    </div>
</template>

<script>
import headerQY from '@/views/components/header.vue'
import Card from '@/views/components/AttractionCard.vue'
export default {
    name: 'detail',
    data() {
        return {
            moveLeft: 0,
        }
    },
    components: {
        headerQY,
        Card
    },
    created() {
    },
    mounted() {
        this.moveLeft = this.$refs.move.offsetLeft
        window.addEventListener('scroll', this.scrollEvent)
    },
    methods: {
        scrollEvent() {
            if (document.documentElement.scrollTop > 430) {
                this.$refs.move.style.left = this.moveLeft + 'px'
                this.$refs.move.className = 'move'
            } else {
                this.$refs.move.className = 'body-right'
            }
        }
    },
    destroyed() {
        // 切换路由时移除window绑定scroll事件
        window.removeEventListener('scroll', this.scrollEvent)
    }
}
</script>

<style scoped lang="less">
.move {
    width: 438px;
    height: 400px;
    background: url('@/assets/index/mp.png') no-repeat center/cover;
    cursor: pointer;
    position: fixed;
    top: 50px;
}

.wrapper {
    width: 1100px;
    margin: 0 auto;
}

.body {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;

    .body-left {
        align-self: flex-start;
        width: 638px;

        // border: 1px solid #dddddd;
        .day {
            margin-bottom: 50px;
            border: 1px solid #dddddd;

            .title {
                height: 106px;
                padding: 28px;
                display: flex;
                border-bottom: 1px solid #dddddd;

                .left {
                    width: 50px;
                    height: 50px;
                    border-radius: 25px;
                    background-color: #41c074;
                    line-height: 50px;
                    text-align: center;
                    color: #fff;
                    font-size: 20px;
                    font-weight: 400;
                }

                .right {
                    margin-left: 20px;

                    p {
                        font-size: 14px;
                        color: #959595;
                    }

                    h2 {
                        margin-top: 5px;
                        font-size: 18px;
                        font-weight: 400;
                        color: #323232;
                    }
                }
            }

            ul {
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
                            height: 200px;
                            height: 150px;
                        }

                        .content {
                            margin-left: 15px;

                            p {
                                height: 24px;
                                font-size: 16px;
                                color: #323232;

                                span {
                                    color: #636363;
                                }
                            }
                        }
                    }
                }

                .travel {
                    height: 30px;
                    padding: 0 30px;
                    font-size: 12px;
                    color: #959595;
                    line-height: 30px;
                    background-color: #fbfbfb;
                }
            }
        }
    }

    .body-right {
        width: 438px;
        height: 400px;
        background-color: rgb(91, 87, 88);
        background: url('@/assets/index/mp.png') no-repeat center/cover;
        cursor: pointer;
    }
}

header {
    overflow: hidden;
    position: relative;
    height: 400px;

    .context {
        height: 400px;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;

        .fg {
            height: 400px;
            background: url('@/assets/index/wuhan-bg.png') no-repeat center/cover;
            padding-top: 288px;

            .mask-bottom {
                height: 112px;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                background-image: linear-gradient(to top, rgba(52, 31, 31, 1), rgba(52, 31, 31, 0));

                .left {
                    width: 604px;
                    height: 86px;
                    margin-left: 10px;
                    display: flex;
                    flex: 1;

                    img {
                        width: 84px;
                        height: 84px;
                        border-radius: 42px;
                    }

                    .name {
                        padding: 12px;
                        margin-left: 10px;

                        h2 {
                            font-size: 28px;
                            font-weight: 500;
                            color: #fff;
                        }

                        p {
                            margin-top: 5px;
                            font-size: 12px;
                            color: #fff;
                        }
                    }
                }

                .right {
                    align-self: center;
                    font-size: 12px;
                    color: #fff;

                    span:nth-child(2) {
                        margin-left: 15px;
                    }
                }
            }
        }
    }
}

.bg {
    width: 100%;
    height: 100%;
    background: url('@/assets/index/wuhan-bg.png') no-repeat center center/cover;
    filter: blur(5px);
    transform: scale(1.2);
    position: absolute;
    left: 0;
    top: 0;
}
</style>