<template>
	<view class="mask">
		<view class="mask-content">
			<!-- 优惠券页面，仿mt -->
			<view class="coupon-item" v-for="(item,index) in couponList" :key="index">
				<view class="con">
					<view class="left">
						<text class="title">{{item.name}}</text>
						<text class="time" v-if="item.end_time">有效期至{{item.end_time}}</text> 
					</view>
					<view class="right">
						<text class="price">{{item.reduce}}</text>
						<text>满{{item.full}}可用</text>
					</view>
					<view class="circle l"></view>
					<view class="circle r"></view>
				</view>
				<view class="dott">
					<text class="tips">限新用户使用</text>
					<div class="an" v-if="item.uesr_status == 1"  @click="lq_coupon(item.id)">立即领取</div>
					<div class="an" style="background: #BEBEBE;color: #fff;" v-else>已领取</div>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			couponList:Array
		},
		methods:{
			lq_coupon(e){
				this.$emit('lq_coupon',e)
			}
		}
	}
</script>

<style lang="scss">
		.coupon-item {
			display: flex;
			flex-direction: column;
			margin: 20upx 24upx;
			background: #fff;
		
			.con {
				display: flex;
				align-items: center;
				position: relative;
				height: 120upx;
				padding: 0 30upx;
		
				&:after {
					position: absolute;
					left: 0;
					bottom: 0;
					content: '';
					width: 100%;
					height: 0;
					border-bottom: 1px dashed #f3f3f3;
					transform: scaleY(50%);
				}
			}
		
			.left {
				display: flex;
				flex-direction: column;
				justify-content: center;
				flex: 1;
				overflow: hidden;
				height: 100upx;
			}
		
			.title {
				font-size: 32upx;
				color: $font-color-dark;
				margin-bottom: 10upx;
			}
		
			.time {
				font-size: 24upx;
				color: $font-color-light;
			}
		
			.right {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 26upx;
				color: $font-color-base;
				height: 100upx;
			}
		
			.price {
				font-size: 44upx;
				color: $base-color;
		
				&:before {
					content: '￥';
					font-size: 34upx;
				}
			}
		
			.dott {
				display: flex;
				justify-content: space-between;
		
				.tips {
					font-size: 24upx;
					color: $font-color-light;
					line-height: 60upx;
					padding-left: 30upx;
				}
		
				.an {
					background-color: #FF201F;
					font-size: 12px;
					color: #fff;
					margin-right: 15px;
					height: 23px;
					line-height: 23px;
					padding: 0 8px;
					border-radius: 20px;
					margin-top: 3px;
				}
			}
		
			.circle {
				position: absolute;
				left: -6upx;
				bottom: -10upx;
				z-index: 10;
				width: 20upx;
				height: 20upx;
				background: #f3f3f3;
				border-radius: 100px;
		
				&.r {
					left: auto;
					right: -6upx;
				}
			}
		}
		/* 优惠券面板 */
		.mask {
			display: flex;
			align-items: flex-end;
			position: fixed;
			left: 0;
			top: var(--window-top);
			bottom: 0;
			width: 100%;
			background: rgba(0, 0, 0, 0);
			z-index: 9995;
			transition: .3s;
		
			.mask-content {
				width: 100%;
				min-height: 30vh;
				max-height: 70vh;
				background: #f3f3f3;
				transform: translateY(100%);
				transition: .3s;
				overflow-y: scroll;
			}
		
			&.none {
				display: none;
			}
		
			&.show {
				background: rgba(0, 0, 0, .4);
		
				.mask-content {
					transform: translateY(0);
				}
			}
		}
	
</style>
