<template>
	<view class="cash">
		<view class="H10"></view>
		<!-- <view class='txz'>提现至:</view> -->
		<view class="H10"></view>
		<view class='money'>
			<view class='ktx'>可提现金额：0.00元</view>
		</view>
		<view class='jine'>
			<view class="jine_01">¥</view>
			<view class="jine_02">
				<input type="number" class="uni-input" placeholder="请输入金额" />
			</view>
		</view>
		<!-- <view class='kg'>        
		<view class="kg_l">大额提现(单笔5万以上）</view>
		<switch checked style="transform:scale(0.7)" />            
      </view> -->
		<view class='khh'>银行名称 &emsp;<input type="text" v-model="form.bk_name" /></view>
		<view class='khh'>银行户名 &emsp;<input type="text" v-model="form.bk_uname" /></view>
		<view class='khh'>银行卡号 &emsp;<input type="number" v-model="form.card" /></view>
		<view class='txfy'>
			<view class='txfy_01'>
				<view class='txfy_01_l'>提现费用:</view>
				<view class='txfy_01_r'>0.00元</view>
			</view>
			<view class='txfy_02'>
				<view class='txfy_02_l'>预计到账时间</view>
				<view class='txfy_02_r'>当日到账</view>
			</view>
		</view>
		<view class='btn' @click="cash">提现</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				min_money:'',
				form:{
					bk_name:'',
					card:'',
					bk_uname:''
				},
				money:'',
				checked: true
			};
		},
		computed: {

		},
		components: {},
		onLoad(option) {
			this.money = option.money
			this.prmSwitch()
			this.min_money = obj.min_money
		},
		methods: {
			async prmSwitch(){
				let obj=await this.promise_switch.then(res=>{
					return res;
				})
			},
			cash() //分销提现接口，直接使用
			{
				if(this.money*1 < this.min_money*1){
					uni.showToast({
						icon:"none",
						title:"提现金额小于"+this.min_money+"元",
						duration:2000
					})
					return
				}
				if(!this.form.bk_name){
					uni.showToast({
						icon:"none",
						title:"未填写银行名称",
						duration:2000
					})
					return
				}
				if(!this.form.bk_uname){
					uni.showToast({
						icon:"none",
						title:"未填写银行户名",
						duration:2000
					})
					return
				}
				if(!this.form.card){
					uni.showToast({
						icon:"none",
						title:"未填写银行卡号",
						duration:2000
					})
					return
				}
				this.$api.http.post('fx/user/apply_api',this.form).then(res=>{
					uni.showToast({
						icon:"none",
						title:"提交申请成功！",
						duration:2000
					})
					setTimeout(()=>{
						uni.navigateBack()
					},2000)
				})
				
			}
		}
	};
</script>

<style lang="less">
	
	.cash {
		.uni-input{
			background-color: #FFFFFF;
			margin-top: 5px;
		}
		
		
		background-color: #f5f5f5;
		height: 100vh;
		font-size: 14px;

		.txz {
			padding: 15px 10px;
			background-color: #fff;
		}

		.money {
			background-color: #fff;
			padding: 10px;
		}

		.ktx {
			font-size: 12px;
			color: #949398;
		}

		.jine {
			display: flex;
			background-color: #fff;
			padding: 9px 10px;
			border-bottom: 1px solid #F8F8F8;
			border-top: 1px solid #F8F8F8;
		}

		.jine_01 {
			padding: 7px 10px 0 0;
		}

		.kg {
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			padding: 9px 0px 7px 10px;
		}

		.kg_l {
			padding-top: 8px;
		}

		.khh {
			background-color: #fff;
			border-top: 1px solid #F8F8F8;
			padding: 17px 15px 12px;
		}

		.txfy {
			background-color: #fff;
			padding: 5px 10px;
			font-size: 12px;
		}

		.txfy_01 {
			display: flex;
			justify-content: space-between;
			border-top: 1px solid #F8F8F8;
			padding: 10px 0 5px;
		}

		.txfy_02 {
			display: flex;
			justify-content: space-between;
			color: #B8B8BC;
			padding-bottom: 10px;
		}

		.btn {
			margin: 30px 10px 10px;
			background-color: #FF976A;
			height: 43px;
			line-height: 43px;
			text-align: center;
			border-radius: 20px;
			color: #fff;
		}
	}
</style>
