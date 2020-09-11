<template>
	<view class="root">
		<!-- 邀新拼团 -->
		<view class="yxpt" v-if="pro_type == 'new_pt'">
			<view class="yxpt_l">
				<view class="yxpt_l_l">邀新<br />专享</view>
				<view class="yxpt_l_r">
					¥<span>{{price}}</span></br>单独买¥{{list.market_price}}
				</view>
			</view>
			<view class="yxpt_r">邀请新用户参团<br />限拼购1件</view>
		</view>
		<!-- 邀新拼团 -->
		
		
		<!-- 一般拼团 ↓↓ -->
		<block v-if="pro_type == 'pt'">
			<view class="tui-pro-pricebox tui-padding">
				<view class="tui-pro-price">
					<view>{{is_vip?'VIP':'¥'}}
						<text class="tui-price">{{price}}</text>
					</view>
					<!-- <tui-tag :plain="true" type="high-green" shape="circle">新品</tui-tag> -->
				</view>
		
				<view class="tui-original-price tui-gray" style="font-weight: 100;flex-grow: 1;" v-if="is_vip">
					价格
					<text class="tui-line-through">￥{{list.market_price}}</text>
				</view>
			</view>
		</block>
		
		<!-- 普通商品 -->
		<block v-if="pro_type == 'pro' ">
			<view class="tui-pro-pricebox tui-padding">
				<view class="tui-pro-price">
					<view>¥
						<text class="tui-price">{{list.price}}</text>
					</view>
				</view>
				<view class="tui-original-price tui-gray" style="font-weight: 100;flex-grow: 1;" v-if="is_vip">
					价格
					<text class="tui-line-through">￥{{list.market_price}}</text>
				</view>
			</view>
			<view class="kait" v-if="sys_switch.is_vip == 1">
		
				<view class="kt_01">
					<img src="@/imgs/vip.png"></img>
				</view>
				<view class="kt_02">VIP享超值优惠价¥{{list.price - list.vip_price}}</view>
				<view v-if="!my.vip" class="kt_03" @click="jump_vip">立即开通 ></view>
			</view>
		</block>
		<!-- 活动倒计时 -->
		<view class="tui-padding" v-if="zk_status=='wait'">
			<block>
				<view class="tui-sub-title tui-size font-red">此商品将于{{list.discount.discount.start_time}}开启限时折扣</view>
			</block>
			<view class="tui-sale-info tui-size tui-gray">
				<view>快递：{{list.delivery.name}}</view>
				<view>月销：{{list.sales}}</view>
				<view>{{list.city}}</view>
			</view>
		</view>
		<!-- 活动倒计时结束 -->
		
		
	</view>
</template>

<script>
	import uniCountdown from "@/components/uni/uni-countdown/uni-countdown.vue"
	export default{
		components:{
			uniCountdown
		},
		data(){
			return{
				sys_switch:'',
				discount_time: {
					days: '',
					hours: "",
					minutes: '',
					seconds: '',
				},
			}
		},
		props:{
			pro_type:String,
			list:Object,
			price:String,
			is_vip:Number,
			vip_switch:Boolean,
			my:Object,
			zk_status:String
		},
		watch:{
		
		},
		created() {
			console.log(this.pro_type,this.price,this.list) 
			this.prmSwitch()
		},
		methods:{
			async prmSwitch(){
				this.sys_switch=await this.promise_switch.then(res=>{
					return res;
				})
				console.log("res",this.sys_switch)
			},
		}
	}
</script>

<style lang="scss">
	.tui-sale-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 30upx;
	}
	.font-red {
		color: #FF201F
	}
	.tui-sub-title {
		padding: 20upx 0;
	}
	.kait {
		margin: 10px;
		background-color: #F7F8FC;
		padding: 10px;
		border-radius: 30px;
		display: flex;
		font-size: 14px;
	
		.kt_01 {
			background-color: #000;
			border-radius: 50%;
			width: 25px;
			height: 25px;
			text-align: center;
	
			img {
				width: 18px;
				height: 18px;
				padding-top: 3px;
			}
		}
	
		.kt_02 {
			padding-left: 5px;
			height: 25px;
			line-height: 25px;
			flex-grow: 1;
		}
	
		.kt_03 {
			background-color: #000;
			color: #DDCFC2;
			height: 25px;
			line-height: 25px;
			border-radius: 15px;
			padding: 0 10px;
			font-size: 12px;
		}
	}
	.tui-line-through {
		text-decoration: line-through;
	}
	.tui-original-price {
		font-size: 26upx;
		line-height: 26upx;
		padding: 10upx 30upx;
		box-sizing: border-box;
	}
	.tui-pro-price {
		display: flex;
		align-items: center;
	}
	
	.tui-pro-price .tui-tag-class {
		transform: scale(0.7);
		transform-origin: center center;
		line-height: 24upx;
		font-weight: normal;
	}
	
	.tui-price {
		font-size: 58upx;
		padding-left: 3px;
	}
	/*内容 部分*/
	
	.tui-padding {
		padding: 0 30upx;
		box-sizing: border-box;
	}
	
	.tui-size {
		font-size: 24upx;
		line-height: 24upx;
	}
	
	.tui-gray {
		color: #999;
	}
	
	.tui-icon-red {
		color: #ff201f;
	}
	
	.tui-border-radius {
		border-bottom-left-radius: 24upx;
		border-bottom-right-radius: 24upx;
		overflow: hidden;
	}
	
	.tui-radius-all {
		border-radius: 24upx;
		overflow: hidden;
	}
	
	.tui-mtop {
		margin-top: 26upx;
	}
	
	.tui-pro-detail {
		box-sizing: border-box;
		color: #333;
	}
	
	.tui-product-title {
		background: #fff;
		padding: 30upx 0;
	}
	
	.xszk {
		position: absolute;
		bottom: 0px;
		left: 0;
		line-height: 25px;
		background-color: #FF4342;
		font-size: 12px;
		color: #fff;
		text-align: center;
		border-top-right-radius: 8px;
		width: 80px;
		height: 25px;
		z-index: 9;
		border-bottom-left-radius: 0px;
	}
	.detail {
		display: flex;
		justify-content: space-between;
		position: relative;
		background-color: #FF4342;
		margin-top: -30upx;
		padding-top: 30upx;
		color: #fff;
	
		.tui-pro-pricebox {
			color: #fff;
		}
	
		.tui-gray {
			color: #FBB3AB;
		}
	
		.time {
			padding-right: 10px;
	
			.juli {
				font-size: 12px;
				margin-top: -5px;
				padding-bottom: 5px;
			}
		}
	
		.tag {
			font-size: 12px;
			border: 1px solid #fff;
			border-radius: 10px;
			padding: 0 5px;
			line-height: 15px;
			margin: -5px 0 0 5px;
			font-weight: 100;
		}
	}
	
	.tui-pro-pricebox {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #ff201f;
		font-size: 36upx;
		font-weight: bold;
		line-height: 44upx;
	}
	.yxpt {
		display: flex;
		font-size: 12px;
		margin-top: -30upx;
	
		.yxpt_l {
			width: 70%;
			background: linear-gradient(to right, #FF4B2B, #FE1957);
			color: #fff;
			display: flex;
			padding: 5px 10px;
	
			.yxpt_l_l {
				background-color: #CE250C;
				font-weight: 600;
				padding: 3px 6px;
				border-radius: 3px;
				margin-right: 10px;
			}
	
			.yxpt_l_r span {
				font-size: 20px;
			}
		}
	
		.yxpt_r {
			width: 30%;
			background-color: #FEE9E8;
			text-align: center;
			color: #E96280;
			padding: 5px 0;
			font-size: 12px;
			line-height: 20px;
		}
	}
</style>
