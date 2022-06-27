<template>
    <div class="login_box">
        <div class="top">
            <!-- 左边 -->
            <div class="top_left">
                <div class="left_ellipse"></div>
                <div class="left_text">
                    <span>
                        你好！
                    </span>
                    <span>
                        欢迎使用
                    </span>
                </div>
            </div>
            <!-- 右边 -->
            <div class="top_right">
                <div class="right_logo"></div>
            </div>
        </div>
        <div class="central">
            <div class="central_login">注册</div>
            <div class="login_box">
                <van-form @submit="onSubmit">
                    <van-field class="pho" v-model="phone" name="phone" label="手机号码" placeholder="请输入绑定的手机号码"
                        :rules="telRules" validata />
                    <van-field class="veri" v-model="code" center clearable name="code" :rules="codeRules" label="验证码"
                        placeholder="请输入验证码">
                        <template #button>
                            <van-button native-type="button" @click="onCode" v-if="showCountdown == false" size="small"
                                type="primary">{{
                                        btnname
                                }}</van-button>
                            <van-button native-type="button" v-else-if="showCountdown == true" rsize="small"
                                type="primary">
                                <van-count-down class="van-button--primary " :time="time" style="color:#fff"
                                    @finish='countDownFinish' format="ss秒后重试" />
                            </van-button>
                        </template>
                    </van-field>
                    <van-field class="username" v-model="username" name="username" label="抖音账号名"
                        placeholder="请输入登入密码" />
                    <van-field class="uname" v-model="uname" name="uname" label="昵称" placeholder="请输入昵称" />
                    <div style="margin: 16px;">
                        <van-button class="sit" round block type="info" native-type="submit">查看额度</van-button>
                    </div>
                </van-form>
            </div>

        </div>
    </div>
</template>

<script>

import Vue from 'vue';
import { Field, Form, Button, CountDown } from 'vant';
// import axios from 'axios'
import { apiAddress } from '@/request/api';// 导入我们的api接口
import 'vant/lib/index.css'
Vue.use(Form);
Vue.use(Field);
Vue.use(Button)
Vue.use(CountDown)
export default {
    name: 'LoginView',
    data() {
        return {
            phone: '',
            code: '',
            username: '',
            uname: '',
            time: 60 * 1000,//倒计时的时间  毫秒级 60秒要*10000
            showCountdown: false,//是否显示倒计时
            btnname: "获取验证码",
            telRules: [{
                required: true,
                message: '手机号码不能为空',

                trigger: 'onBlur'
            }, {
                // 自定义校验规则
                validator: value => {
                    return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
                        .test(value)
                },
                message: '请输入正确格式的手机号码',
                trigger: 'onBlur'
            }],
            codeRules: [{
                required: true,
                message: '验证码不能为空',
                trigger: 'onSubmit'
            }]

        };
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        onCode(codebtn) {
            console.log(codebtn);
            let pattern = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
            let mobile = this.phone;
            if (pattern.test(mobile)) {
                console.log('可以了');
                console.log(mobile);
                this.showCountdown = true //修改倒计时
                apiAddress({
                    mobile
                }).then(res => {
                    console.log(res);
                })

            } else {
                alert('获取失败，请查看手机号码是否正确')
            }
        },
        countDownFinish() {
            this.showCountdown = false //隐藏倒计时
        }

    },
}
</script>

<style>
.login_box {
    width: 100%;
    background: #FFFFFF;

}

.top {
    display: flex;
    width: 100%;
}

.top_left {
    display: flex;
    flex-direction: column;
    margin-top: 37px;
    align-items: center;
}

.left_text {
    width: 136px;
    height: 84px;
    font-size: 32px;
    font-family: Alibaba-PuHuiTi-B, Alibaba-PuHuiTi;
    font-weight: bold;
    color: #4778F6;
    line-height: 42px;
    letter-spacing: 2px;
    display: flex;
    flex-direction: column;
    margin-left: 25px;
}

.left_text span {
    text-align: left;
}

.top_right {
    width: 100%;
    height: 283px;
    background: url(../assets/2.png) 100% no-repeat;
    display: flex;
    align-content: center;
}

.left_ellipse {
    width: 66px;
    height: 66px;
    background: linear-gradient(180deg, #2E91FC 0%, rgba(255, 255, 255, 0) 100%);
    opacity: 0.19;
    border-radius: 50%;
    margin-left: 99px;

}

.right_logo {
    width: 100%;
    height: 60px;
    background: url(../assets/123.png) 100% no-repeat;
    position: relative;
    right: 32px;
    top: 115px;
}

.txt3 {
    width: 150px;
    height: 14px;
    overflow-wrap: break-word;
    color: rgba(17, 17, 17, 1);
    font-size: 14px;
    letter-spacing: 1px;
    text-align: right;
    white-space: nowrap;
    line-height: 14px;
    display: block;
}


.central_login {
    width: 73px;
    height: 34px;
    font-size: 34px;
    font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #1E1E1E;
    line-height: 34px;
    letter-spacing: 2px;
    margin-left: 35px;

}

.van-button--primary {
    border: 0.0625rem solid #1989fa;
    width: 6.5625rem;
    height: 31px;
    background: #4778F6;
    box-shadow: 0px 8px 18px 0px rgba(71, 120, 246, 0.25);
    border-radius: 3px;
}

.sit {

    background: #4778F6;
    box-shadow: 0px 8px 18px 0px rgba(71, 120, 246, 0.25);
    border-radius: 26px;
    margin-top: 37px;
    font-size: 20px;
    font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 20px;
    letter-spacing: 1px;
}



.van-cell {
    padding: 0.625rem 2.1rem;
    letter-spacing: 1px;
}

.pho {
    margin-top: 35px;

}

.veri {
    margin-top: 8px;
    letter-spacing: 5px;

}
</style>