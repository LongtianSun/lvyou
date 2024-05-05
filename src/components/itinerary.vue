<template>
  <div>
    <div class="itinerary">
        <headerQY></headerQY>
        <div class="top">
            <div class="wrapper">
                <div class="search">
                    <input type="text">
                    <button><i class="el-icon-search"></i></button>
                    <div class="question">
                        <i class="el-icon-plus"></i>
                        提问
                    </div>
                    <div class="tip">这里有高人指路</div>
                </div>
            </div>
            <div class="tap wrapper">
                <ul>
                    <li><div class="active">行程<span>(2000+)</span></div></li>
                    <!-- <li><div>酒店</div></li>
                    <li><div>帖子<span>(1000)</span></div></li>
                    <li><div>问答<span>(2000)</span></div></li>
                    <li><div>旅行商城</div></li> -->
                    <!-- <li><div>用户<span>(31)</span></div></li> -->
                </ul>
            </div>
        </div>
        <div class="body wrapper">
            <div class="left">
                <p>为您找到"武汉"相关行程结果 <span>46429</span> 条</p>
                <ul>
                    <li v-for="(item, index) in 5" :key="index">
                        <div class="li-left" @click="goDetail">
                            <img src="@/assets/index/wuhan.png" alt="">
                        </div>
                        <div class="li-right">
                            <div class="row1">
                                <h2 @click="goDetail">武汉假期游 欢乐谷-黄鹤楼-武汉长江大桥-八分山</h2>
                                <a href=""><i class="el-icon-document-copy"></i> 复制行程</a>
                            </div>
                            <div class="row2">
                                <i class="el-icon-date"></i> 2018-02-14 出发
                            </div>
                            <div class="row3">欢乐谷 · 黄鹤楼 · 武汉长江大桥 · 八分山</div>
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
                </ul>
            </div>
            <div class="right">
                <div class="new-post" @click="$router.push('/createitinerary')"><i class="el-icon-edit"></i>创建我的行程</div>
                <div class="goto-forum" @click="$router.push('/itineraryhome')">行程助手首页</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import headerQY from '@/views/components/header'
export default {
    components: {
        headerQY
    },
    data() {
        return {
            name: 'skt'
        }
    },
    // beforeCreate() {
    //     console.log('beforeCreate',this.name,this.goDetail)
    // },
    // created() {
    //     console.log('created',this.name,this.goDetail)
    // },
    // beforeMount() {
    //     console.log('beforeMount',this.name,this.goDetail)
    // },
    // mounted() {
    //     console.log('mounted',this.name,this.goDetail)
    // },
    methods: {
        goDetail() {
            this.$router.push('/detail')
        }
    }
}
</script>

<style scoped lang="less">
.wrapper {
    width: 1160px;
    margin: 0 auto;
}
.body {
    display: flex;
    justify-content: space-between;
    .left {
        width: 800px;
        p {
            color: #999;
            font-size: 14px;
            margin-top: 30px;
            line-height: 14px;
            span {
                color: #34bb74;
                font-weight: 700;
            }
        }
        ul {
            li {
                width: 800px;
                height: 200px;
                border-bottom: 1px solid #f0f0f0;;
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
                            height: 30px ;
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
        }
    }
    .right {
        width: 310px;
        margin-top: 28px;
        display: flex;
        justify-content: space-between;
        line-height: 42px;
        text-align: center;
        font-size: 14px;
        .new-post {
            margin: 32px 0;
            width: 190px;
            height: 42px;
            color: #fff;
            background-color: #1995dd;
            cursor: pointer;
        }
        .goto-forum {
            margin: 32px 0;
            width: 110px;
            height: 42px;
            border: 1px solid #1995dd;
            color: #1995dd;
            cursor: pointer;
            &:hover {
                color: #fff;
                background-color: #1995dd;
            }
        }
    }
}
.top {
    height: 150px;
    padding-top: 10px;
    box-shadow: 0 3px 9px hsla(0,0%,87.5%,.77);
    .tap {
        height: 60px;
        ul {
            display: flex;
            li {
                width: 160px;
                height: 60px;
                color: #636363;
                font-size: 18px;
                line-height: 60px;
                div {
                    display: inline-block;
                    height: 60px;
                }
                .active {
                    border-bottom: 2px solid #28b76c;
                    color: #28b76c;
                }
                span {
                    font-size: 14px;
                    color: #a5a5a5;
                }
            }
        }
    }
    .search {
        height: 80px;
        padding: 20px 0;
        display: flex;
        input {
            width: 510px;
            height: 40px;
            border: none;
            outline: none;
            padding: 0 16px;
            border: 1px solid #ececec;
            font-size: 18px;
            background-color: #fafafa;
        }
        button {
            width: 50px;
            height: 40px;
            vertical-align: top;
            font-size: 14px;
            background-color: #28b76c;
            border: 0;
            color: #fff;
        }
        .question {
            width: 105px;
            height: 40px;
            margin-left: 20px;
            background-color: #28b76c;
            text-align: center;
            line-height: 40px;
            color: #fff;
        }
        .tip {
            position: relative;
            display: inline-block;
            margin-left: 10px;
            vertical-align: top;
            width: 100px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            background: #fb6850;
            color: #fff;
            font-weight: 500;
            font-size: 12px;
        }
        .tip:before {
            content: "";
            display: block;
            position: absolute;
            top: 8px;
            left: -8px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-right-color: #fb6850;
        }
    }
}
</style>