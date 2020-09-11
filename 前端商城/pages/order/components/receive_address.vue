<template>
	<view class="">
		<navigator url="/pages/address/address?source=1" class="address-section">
			<view class="order-content">
				<text class="yticon icon-shouhuodizhi"></text>
				<view class="cen" v-if="address">
					<view class="top">
						<text class="name">{{address.name}}</text>
						<text class="mobile">{{address.mobile}}</text>
					</view>
					<text class="address">{{address.province}} {{address.city}}{{address.county}}</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			address:Object
		}
	}
</script>

<style lang="scss">
	.address-section {
		padding: 30upx 0;
		background: #fff;
		position: relative;
	
		.order-content {
			display: flex;
			align-items: center;
		}
	
		.icon-shouhuodizhi {
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 90upx;
			color: #888;
			font-size: 44upx;
		}
	
		.cen {
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 28upx;
			color: $font-color-dark;
		}
	
		.name {
			font-size: 34upx;
			margin-right: 24upx;
		}
	
		.address {
			margin-top: 16upx;
			margin-right: 20upx;
			color: $font-color-light;
		}
	
		.icon-you {
			font-size: 32upx;
			color: $font-color-light;
			margin-right: 30upx;
		}
	
		.a-bg {
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			width: 100%;
			height: 5upx;
		}
	}
</style>
