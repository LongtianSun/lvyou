<template>
    <div class="login-contoiner">
        <div class="title">
            <img src="@/assets/index/logo.png" alt="">
            <span>登录</span>
        </div>
        <div class="content">
            <div class="left">
                <div class="header">账号登录</div>
                <div class="form">
                    <el-form ref="formRef" :model="formData" :rules="rules">
                        <el-form-item label="用户名：" prop="username">
                            <el-input v-model="formData.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码：" prop="username">
                            <el-input type="password" v-model="formData.password"></el-input>
                        </el-form-item>
                    </el-form>
                    <button class="login" @click="login">登录</button>
                </div>
            </div>
            <div class="right">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            forRef: {},
            formData: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
        this.formRef = this.$refs.formRef
    },
    methods: {
        async login() {
            await this.formRef.validate()
            this.$message({
                message: '登录成功',
                type: 'success'
            })
            this.$store.commit('setUserInfo', this.formData)
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="less">
.login-contoiner {
    width: 100vw;
    height: 100vh;
    padding-top: 60px;
    background: url(//fes.qyerstatic.com/fe_ssr_passport/ecb39528d488b6c520f7ddd3898379d6.jpg) top/cover no-repeat;
}

.title {
    width: 380px;
    height: 46px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;

    span {
        align-self: flex-end;
        margin-bottom: 4px;
        margin-left: 5px;
        font-size: 24px;
        color: #fff;
        text-shadow: 0 0 4px rgba(0, 0, 0, .3);
    }
}

.content {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 50px auto;
    display: flex;
    width: 655px;

    .left {
        width: 380px;
        min-height: 100px;
        background-color: #fdf4fb;

        .header {
            margin: 10px auto;
            width: 165px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            border-bottom: 2px solid #10b041;
            color: #3f9f5f;
        }

        .form {
            padding: 10px;
        }

        .login {
            width: 360px;
            height: 40px;
            border-radius: 5px;
            border: none;
            color: #fff;
            background-color: #5cad77;
            margin-bottom: 10px;
            font-size: 16px;
        }
    }

    .right {
        width: 275px;
        min-height: 100px;
        background: url(@/assets/index/Seashore.png) no-repeat left top/cover;
    }
}
</style>