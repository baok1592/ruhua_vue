<template>
	<view class="">
		<view class="mask" :class="maskState===0 ? 'none' : maskState===1 ? 'show' : ''" @click="toggleMask">
			<view class="mask-content">
				<!-- 优惠券页面，仿mt -->
				<scroll-view class="scroll" scroll-y>
					<view class="coupon-item" style="margin-bottom: 55px;" v-for="(item,index) in couponList" :key="index">
						<block v-if="item.status == 0">
							<view class="con">
								<view class="left">
									<text class="title" v-if="item.full==0">减{{item.reduce}}</text>
									<text class="title" v-else>满{{item.full}} 减{{item.reduce}}</text>
									<!-- <text class="time"></text> -->
								</view>
								<view class="right">
									<text class="price">{{item.reduce}}</text>
									<!-- <text>满{{item.full}}可用</text> -->
								</view>
		
								<view class="circle l"></view>
								<view class="circle r"></view>
							</view>
							<view class="use" style="display: flex;justify-content: space-between;">
								<text class="tips">有效期至{{item.end_time}}</text>
								<view class="tips2" @click="to_use(index)">去使用</view>
							</view>
						</block>
					</view>
				</scroll-view>
				<view class="btn" @click="cancel_use">不使用优惠券</view>
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
			couponList:Array,
			maskState:Number
		},
		methods:{
			to_use(e){
				this.$emit('touse',e)
			},
			cancel_use(){
				this.$emit('cancel_use')
			},
			toggleMask(){
				this.$emit('toggleMask')
			}
		}
	}
</script>

<style lang="scss">
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
			padding: 20px 0px 60px;
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
			overflow-y: scroll;
		}
	
		.btn {
			position: fixed;
			bottom: 0;
			width: 95%;
			text-align: center;
			border: 1px solid #FA436A;
			background-color: #FA436A;
			color: #FFFFFF;
			border-radius: 20px;
			margin: 10px;
			padding: 5px;
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
	
	.scroll {
		max-height: 55vh;
	}
	/* 优惠券列表 */
	.coupon-item {
		display: flex;
		flex-direction: column;
		margin: 3upx 24upx;
		background: #fff;
	
		.con {
			display: flex;
			align-items: center;
			position: relative;
			height: 120upx;
			padding: 0 30upx;
	
	
			/* &:after {
				position: absolute;
				left: 0;
				bottom: 10;
				content: '';
				width: 100%;
				height: 0;
				border-bottom: 1px dashed #f3f3f3;
				transform: scaleY(50%);
			} */
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
	
		.tips {
			font-size: 24upx;
			color: $font-color-light;
			line-height: 60upx;
			white-space: nowrap;
			padding-left: 30upx;
		}
	
		.tips2 {
			font-size: 24upx;
			color: $font-color-light;
			line-height: 50upx;
			;
			height: 50upx;
			;
			text-align: center;
			margin: 5upx 10px 0 0;
			width: 80px;
			border: 1px solid #FA436A;
			background-color: #FA436A;
			color: #FFFFFF;
			border-radius: 25px;
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
</style>
