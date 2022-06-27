<template>
    <div class="home_box">
        <div class="top_tops">
            <div class="main2 flex-col"></div>
            <div class="top_card">
                <div class="card_top">
                    <div class="card_top_left">商品融资类型<span class="san"></span>
                    </div>
                    <div class="card_top_right">融资方案介绍</div>
                </div>
                <div class="card_bottom">
                    <div class="card_bottom_text1 card_bottom_text">
                        <div class="bd2 flex-col"></div>循环额度次日可还
                    </div>
                    <div class="card_bottom_text2 card_bottom_text">
                        <div class="bd2 flex-col"></div>日息最低 0.05%
                    </div>
                    <div class="card_bottom_text3 card_bottom_text">
                        <div class="bd2 flex-col"></div>提前还款无手续费
                    </div>
                    <div class="card_bottom_text4 card_bottom_text">
                        <div class="bd2 flex-col"></div>最高 24 月分期
                    </div>
                </div>
            </div>
            <div class="top_main">
                <div class="main_card">
                    <div class="main_top">
                        <div class="card_avit">方案A</div>
                        <div class="card_btn">方案B</div>
                        <div class="card_btn">方案C</div>
                    </div>
                    <div class="main_conter">
                        <div>选择</div>
                        <div>商品名</div>
                        <div>订单金额</div>
                        <div>可贷金额</div>
                    </div>
                    <!-- 盒子模型 -->
                    <div class="main_bottom">
                        <div class="bottom_title">
                            <!-- 图标 -->
                            <div class="group4 flex-col"></div>
                            <div class="bottom_time">2022年05月15日</div>
                            <div class="bd3 flex-col"></div>
                        </div>
                        <!-- for循环 -->
                        <div class="bottom_main">
                            <div class="layer6 flex-col"></div>
                            <div class="bottom_name">MacBook Air</div>
                            <div class="bottom_amount">￥9499</div>
                            <div class="bottom_money">￥9499</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="total">
                <div class="total_title">总计货款：</div>
                <div class="total_money">20000</div>
            </div>
            <div class="footer_btn">
                <van-button class="btn_money" @click="onSub" round type="info">申请货款</van-button>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {

        };
    },
    methods: {
        // 跳转路由
        onSub() {
            this.$router.push({
                path: 'upload',
                name: 'upload'
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

.top_tops {
    z-index: 2;
    width: 100%;
    background: url(../assets/Background2.png) 50% no-repeat;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.top_card {
    width: 366px;
    height: 153px;
    background: #FFFFFF;
    box-shadow: 0px 2px 25px 0px rgba(0, 0, 0, 0.02);
    border-radius: 7px;
    margin-top: 114px;
    display: flex;
    flex-direction: column;
}

.main_card {
    width: 366px;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 2px 25px 0px rgba(0, 0, 0, 0.02);
    border-radius: 7px;
    margin-top: 13px;
    display: flex;
    flex-direction: column;
}

.card_top {
    display: flex;
    justify-content: space-around;
    margin-top: 18px;
    align-items: center;
}

.main2 {
    width: 32px;
    height: 32px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc8094b864ed3e966980881406e131a30e336e5687e4e89899685da5795e69b53) 100% no-repeat;
    position: absolute;
    left: 343px;
    top: 72px;
}

.card_top_left {
    width: 134px;
    height: 29px;
    font-size: 21px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    color: #4778F6;
    line-height: 29px;
    letter-spacing: 1px;
}

.san {
    width: 0px;
    height: 0px;
    border: 5px solid transparent;
    border-top-color: #456BF9;
    position: relative;
    font-weight: bold;
    left: 8px;
    top: 14px;
}

.card_bottom {
    width: 100%;
    height: 78px;
    background: #F8F9FD;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.card_bottom_text {

    width: 10rem;
    height: 20px;
    overflow-wrap: break-word;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    letter-spacing: 0.875px;
    text-align: left;
    white-space: nowrap;
    line-height: 20px;
    display: flex;
    align-items: center;

}

.card_top_right {
    width: 102px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #4778F6;
    line-height: 22px;
    letter-spacing: 1px;
}

.bd2 {
    width: 15px;
    height: 15px;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd18bcbdb2cf1122d550f417d0b64f0bf7afb726771428544cbc5591fdf1e427c) 100% no-repeat;
    margin: 0 6px;
}

.main_top {
    width: 100%;
    height: 100%;
    background: #F8F9FD;
    border-radius: 4px;
    display: flex;
    margin: 18px 0 17px;
}

.card_btn {
    width: 96px;
    height: 34px;
    background: #FFFFFF;
    border-radius: 2px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #A3A8AE;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 1px;
}

.card_avit {
    width: 96px;
    height: 34px;
    background: #4778F6;
    border-radius: 2px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 25px;
    letter-spacing: 1px;
}

.main_conter {
    display: flex;
    width: 100%;
    justify-content: space-around;
}

.main_conter div {
    width: 4.625rem;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    line-height: 17px;
}

.bottom_title {
    width: 332px;
    height: 34px;
    background: #F8F9FD;
    border-radius: 4px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #A3A8AE;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.main_bottom {
    margin-top: 8px;
    margin-right: 17px;
    margin-left: 17px;
}

.group4 {
    width: 24px;
    height: 24px;
    background: url(../assets/dui.png) 100% no-repeat;
    margin-right: 17px;
}

.bd3 {
    width: 16px;
    height: 16px;
    background: url(../assets/dui2.png) 100% no-repeat;
    margin-right: 19px;
}

.bottom_time {
    margin-right: 7.1875rem;
}

.bottom_main {
    width: 20.75rem;
    height: 2.125rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #A3A8AE;
    line-height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.bottom_main div {
    margin: 0px 2px;
}

.bottom_money {
    width: 70px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #4778F6;
    line-height: 22px;
    letter-spacing: 1px;
}

.layer6 {
    width: 20px;
    height: 20px;
    background: url(../assets/dui4.png) 100% no-repeat;
    margin-top: 1px;
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 90px;
    background: #FFFFFF;
    box-shadow: 0px 2px 31px 0px rgba(0, 0, 0, 0.17);
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.total {}

.total_title {
    width: 75px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    line-height: 20px;
}

.total_money {
    width: 126px;
    height: 29px;
    font-size: 32px;
    font-family: DINPro-Medium, DINPro;
    font-weight: 500;
    color: #4778F6;
    line-height: 29px;
    letter-spacing: 2px;
}

.btn_money {
    width: 198px;
    height: 53px;
    background: #4778F6;
    border-radius: 27px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 28px;
    letter-spacing: 1px;
}
</style>