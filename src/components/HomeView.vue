<template>
    <div class="home_box">
        <div class="top_top">
            <div class="main2 flex-col"></div>
            <div class="top_img">
                <img class="top_imgs" src="../assets/ren.png" alt="">
            </div>
        </div>
        <div class="middle_text">

            <div class="middle_name">
                台康毅
            </div>
            <div class="middle_pass">
                JKU786G7899
            </div>
        </div>
        <div class="top_middle">
            <div class="middle_list">
                <!-- 列表盒子 -->
                <div class="middle_list_box" @click="goDetails">
                    <div class="middle_list_img">
                        <img class="pic1" referrerpolicy="no-referrer"
                            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5feb9966e930ba91766ef10c76191def08446d8317681f48ac8f1a1315f6ad44" />
                    </div>
                    <div class="middle_list_main">
                        <div class="middle_list_name">WATCH SERIES7</div>
                        <div class="middle_list_numb">销售：2323252</div>
                    </div>
                    <div class="middle_list_fh"></div>
                </div>
                <div class="middle_list_box">
                    <div class="middle_list_img">
                        <img class="pic1" referrerpolicy="no-referrer"
                            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5feb9966e930ba91766ef10c76191def08446d8317681f48ac8f1a1315f6ad44" />
                    </div>
                    <div class="middle_list_main">
                        <div class="middle_list_name">WATCH SERIES7</div>
                        <div class="middle_list_numb">销售：2323252</div>
                    </div>
                    <div class="middle_list_fh"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    data() {
        return {

        }
    },
    methods: {
        // 跳转路由页面
        goDetails() {
            console.log('2');
            this.$router.push({
                path: "/details",
                name: 'details'
            })
        }
    }
}
</script>

<style>
.home_box {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 896px;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
}

.top_top {
    z-index: 2;
    height: 433px;
    width: 100%;
    background: linear-gradient(180deg, #0048ff 0%, #F5F5F5 100%);
    position: relative;
}

.top_img {
    width: 100%;
    height: 403px;
    position: relative;
}

.top_imgs {
    position: absolute;
    left: 167px;
    top: 30px;
}

.middle_name {
    width: 93px;
    height: 41px;
    font-size: 29px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 41px;
    letter-spacing: 1px;
    margin-left: 20px;
}

.middle_pass {
    width: 188px;
    height: 36px;
    font-size: 25px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 36px;
    letter-spacing: 1px;
    margin-left: 20px;
}

.top_middle {
    display: flex;
    flex-direction: column;
    z-index: 55;
    align-items: center;
}

.middle_list {
    width: 366px;
    height: 100%;
    background: #FFFFFF;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
}

.middle_list_box {
    width: 91%;
    display: flex;
    height: 65px;
    margin-top: 24px;
    margin-left: 17px;
    border-bottom: 1px solid #d9d0d073;
}

.middle_list_main {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    width: 100%;
}

.middle_text {
    z-index: 99;
    margin-top: -14.75rem;
    margin-left: 13px;
}

.middle_list_name {
    width: 143px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 22px;
    letter-spacing: 1px;
}

.middle_list_numb {
    width: 100%;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.25);
    line-height: 20px;
}

.middle_list_fh {
    width: 16px;
    height: 16px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb7eb55b07417d6ba229e014122ab91d7c721622a02558eb248907a8d6846b47c) 100% no-repeat;
    margin-top: 21px;
}

.main2 {
    width: 32px;
    height: 32px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc8094b864ed3e966980881406e131a30e336e5687e4e89899685da5795e69b53) 100% no-repeat;
    position: absolute;
    left: 343px;
    top: 72px;
}
</style>