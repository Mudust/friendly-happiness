<template>
    <div>
        <div class="upload_box">
            <van-form @submit="onSubmit">
                <van-field v-model="username" name="username" label="姓名" placeholder="请输入姓名"
                    :rules="[{ required: true, message: '请填写姓名' }]" />
                <van-field name="radio" label="性别">
                    <template #input>
                        <van-radio-group v-model="radio" direction="horizontal">
                            <van-radio name="1">男</van-radio>
                            <van-radio name="2">女</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <van-field v-model="education" name="education" label="学历" placeholder="请输入学历"
                    :rules="[{ required: true, message: '请填写学历' }]" />
                <van-field readonly clickable name="calendar" :value="value" label="出生年月" placeholder="点击选择日期"
                    @click="showCalendar = true" />
                <van-calendar v-model="showCalendar" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />
                <van-field name="property" label="房产">
                    <template #input>
                        <van-radio-group v-model="property" direction="horizontal">
                            <van-radio name="1">有</van-radio>
                            <van-radio name="2">无</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <van-field name="vehicle" label="车辆">
                    <template #input>
                        <van-radio-group v-model="vehicle" direction="horizontal">
                            <van-radio name="1">有</van-radio>
                            <van-radio name="2">无</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <van-field name="uploader" label="信用征信(近一个月内)">
                    <template #input>
                        <van-uploader v-model="uploader" />
                    </template>
                </van-field>
                <van-field name="certificate" label="产品证书">
                    <template #input>
                        <van-uploader v-model="certificate" />
                    </template>
                </van-field>
                <div class="cer_title">产品结构</div>
                <van-field class="cer_name" v-model="directCost" name="directCost" label="直接成本" />
                <van-field class="cer_name" v-model="packagingCost" name="packagingCost" label="包装成本" />
                <van-field class="cer_name" v-model="logisticsCost" name="logisticsCost" label="物流成本" />
                <van-field class="cer_name" v-model="salesCommission" name="salesCommission" label="销售佣金" />
                <div class="bottom_name">*说明：该资料会影响到实际贷款金额，请如实填写信息，已获得更高的贷款额度。</div>
                <div class="footer_btn">
                    <van-button class="btn_money" @click="onSubmit" round type="info">申请货款</van-button>
                </div>
            </van-form>


        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            radio: '1',
            education: '',
            value: '',
            property: '1',
            vehicle: '1',
            // 直接成本
            directCost: '',
            packagingCost: '',
            logisticsCost: '',
            salesCommission: '',
            showCalendar: false,
            minDate: new Date(1970, 0, 1),
            maxDate: new Date(2022, 12, 31),
            uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
            certificate: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
        };
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        onConfirm(date) {
            this.value = `${date.getMonth() + 1}/${date.getDate()}`;
            this.showCalendar = false;
            console.log(this.value);
        },
    },
}
</script>

<style>
.upload_box {
    width: 100%;
    height: 100%;
    margin-top: 20px;
}

.van-field__label {
    width: 4.75rem;
    height: 16px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #111111;
    line-height: 16px;
    letter-spacing: 1px;
}

.van-cell {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cer_title {
    padding: 0.625rem 2.1rem;
    letter-spacing: 0.0625rem;
    height: 16px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #111111;
    line-height: 16px;
    border-bottom: 0.0625rem solid #ebedf0;
    margin-top: 10px;
}

.cer_name {
    margin-top: 10px;
}

.cer_name span {
    color: #999090;
}

.bottom_name {
    padding: 0.625rem 2.1rem;
    letter-spacing: 0.0625rem;
    height: 16px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #111111;
    line-height: 25px;
    margin-top: 10px;
    color: #999090;
}

.footer_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
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