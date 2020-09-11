<template>
	<view class="root">
		<view class="tui-discount-box tui-radius-all tui-mtop" v-if="coupon_list.length > 0">
			<view class="tui-list-cell" @click="toggleMask('show')">
				<view class="tui-bold tui-cell-title">领券</view>
				<view class="tui-tag-coupon-box">
					<template v-for="(item,index) of coupon_list" v-if="index <= 2">
						<tui-tag size="small" type="red" shape="circle" tui-tag-class="tui-tag-coupon">满{{item.full}}减{{item.reduce}}</tui-tag>
					</template>
				</view>
				<tui-icon name="more-fill" :size="20" class="tui-right tui-top40" color="#666"></tui-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	export default{
		components:{
			tuiIcon,
			tuiTag,
		},
		data(){
			return{
				
			}
		},
		props:{
			coupon_list:Array
		},
		methods:{
			toggleMask(e){
				 this.$emit('toggleMask',e)
			}
		}
	}
</script>

<style lang="scss">
	.tui-right {
		position: absolute;
		right: 30upx;
		top: 30upx;
	}
	
	.tui-top40 {
		top: 40upx !important;
	}
	.tui-tag-coupon-box {
		display: flex;
		align-items: center;
	}
	.tui-cell-title {
		width: 66upx;
		padding-right: 30upx;
		flex-shrink: 0;
	}
	.tui-discount-box {
		background: #fff;
	}
	.tui-radius-all {
		border-radius: 24upx;
		overflow: hidden;
	}
	.tui-mtop {
		margin-top: 26upx;
	}
	.tui-list-cell {
		position: relative;
		display: flex;
		align-items: center;
		font-size: 26upx;
		line-height: 26upx;
		padding: 36upx 30upx;
		box-sizing: border-box;
	}
	.tui-bold {
		font-weight: bold;
	}
	
	.tui-list-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 126upx;
	}
</style>
