<template>
	<view class="">
		<view class="goods-section">
			<!-- <view class="g-header b-b"> -->
				<!-- <image class="logo" src="http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png"></image>
				<text class="name">西城小店铺</text> -->
			<!-- </view> -->
			<!-- 商品列表 -->
			<view class="g-item" style="padding-top: 10px;" v-for="(item,index) of buy_data" :key="index">
				<image :src="getimg + item.imgs"></image>
				<view class="right">
					<text class="title clamp">{{item.goods_name}}</text>
					<text class="spec">{{item.sku_name?item.sku_name:''}}</text>
					<view class="price-box">
						<text class="price" v-if="item.vip_price">￥{{item.price - item.vip_price}}</text>
						<text class="price" v-else>￥{{item.price}}</text>
						<!-- <text class="price">￥{{item.price}}</text> -->
						<text class="number">x {{item.num}}</text>
					</view>
				</view>
			</view>
			<!-- 商品列表结束 -->
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				getimg: this.$getimg,
			}
		},
		props:{
			buy_data:Object
		},
		watch:{
			buy_data(){
				console.log(this.buy_data)
			}
		},
		methods:{
			
		}
		
	}
</script>

<style lang="scss">
	.goods-section {
		margin-top: 16upx;
		background: #fff;
		padding-bottom: 1px;
	
		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			padding: 0 30upx;
			position: relative;
		}
	
		.logo {
			display: block;
			width: 50upx;
			height: 50upx;
			border-radius: 100px;
		}
	
		.name {
			font-size: 30upx;
			color: $font-color-base;
			margin-left: 24upx;
		}
	
		.g-item {
			display: flex;
			margin: 20upx 30upx;
	
			image {
				flex-shrink: 0;
				display: block;
				width: 140upx;
				height: 140upx;
				border-radius: 4upx;
			}
	
			.right {
				flex: 1;
				padding-left: 24upx;
				overflow: hidden;
			}
	
			.title {
				font-size: 30upx;
				color: $font-color-dark;
			}
	
			.spec {
				font-size: 26upx;
				color: $font-color-light;
			}
	
			.price-box {
				display: flex;
				align-items: center;
				font-size: 32upx;
				color: $font-color-dark;
				padding-top: 10upx;
	
				.price {
					margin-bottom: 4upx;
				}
	
				.number {
					font-size: 26upx;
					color: $font-color-base;
					margin-left: 20upx;
				}
			}
	
			.step-box {
				position: relative;
			}
		}
	}
</style>

