<template>
    <div>
        <headerQY></headerQY>
        <div class="bgc">
            <div class="wrapper">
                <span>网站作者是个大帅哥</span>
            </div>
        </div>
        <div class="user-info">
            <div class="wrapper">
                <div class="info">
                    <img src="@/assets/index/200.png" alt="">
                    <div class="content">
                        <div class="left">
                            <p>湘霜寒</p>
                            <div>
                                等级：<span>新进弟子</span>
                            </div>
                        </div>
                        <div class="right"></div>
                    </div>
                </div>
                <div class="tab">
                    <ul>
                        <li>行程计划</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="plan wrapper">
            <div class="left">
                <ul>
                    <li>我的行程计划</li>
                </ul>
            </div>
            <div class="right">
                <div class="header">
                    <div class="create-plan">
                        + 创建行程
                    </div>
                </div>
                <ul>
                    <ItineraryItem></ItineraryItem>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import headerQY from "../components/header.vue"
import ItineraryItem from '../components/ItineraryItem.vue'
export default {
    components: {
        headerQY,
        ItineraryItem
    }
}
</script>

<style scoped lang="less">
.bgc {
    background-image: url(//fes.qyerstatic.com/FkB6AO8K-AvSxz3MX3pESaV36fhK);
    height: 200px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;

    .wrapper {
        position: relative;
        height: 200px;

        span {
            position: absolute;
            right: 20px;
            bottom: 20px;
            font-size: 16px;
            font-weight: 700;
            color: #fff;
        }
    }
}

.wrapper {
    margin: 0 156px;
}

.user-info {
    height: 148px;
    box-shadow: 0 3px 9px hsla(0, 0%, 87.5%, 0.77);

    .wrapper {
        height: 148px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .tab {
            height: 40px;

            ul {
                height: 100%;
                width: 100%;
                display: flex;

                li {
                    font-size: 18px;
                    color: #28b76c;
                    font-weight: 700;
                    padding: 0 12px 20px;
                    border-bottom: 2px solid #28b76c;
                }
            }
        }

        .info {
            height: 66px;
            display: flex;

            img {
                width: 100px;
                height: 100px;
                align-self: center;
                border-radius: 50px;
                margin-right: 20px;
            }

            .content {
                height: 44px;
                padding: 22px 0 0;
                display: flex;
                justify-content: space-between;

                .left {
                    p {
                        width: 428px;
                        font-size: 18px;
                        font-weight: 700;
                        line-height: 20px;
                    }

                    div {
                        font-size: 14px;
                        margin-top: 10px;

                        span {
                            color: #28b76c;
                        }
                    }

                }

                .right {
                    width: 130px;
                }
            }
        }
    }
}

.plan {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;

    .left {
        width: 318px;

        ul {
            border-top: 1px solid #ececec;
            border-left: 1px solid #ececec;
            border-right: 1px solid #ececec;

            li {
                height: 60px;
                line-height: 60px;
                text-align: center;
                color: #28b76c;
                font-weight: 700;
                border-bottom: 1px solid #ececec;
                ;
            }
        }

    }

    .right {
        .header {
            height: 34px;
            display: flex;
            justify-content: end;
            margin-bottom: 10px;

            .create-plan {
                cursor: pointer;
                width: 100px;
                height: 34px;
                color: #fff;
                text-align: center;
                line-height: 34px;
                font-size: 14px;
                background-color: #28b76c;
            }
        }

        width: 800px;
    }
}
</style>