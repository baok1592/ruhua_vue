<template>
	<view class="">
		<!-- 拼团单 -->
		<view class="yt-list" v-if="is_pt == 1">
			<view class="jr">
				<view class="jr_tit">为您加入仅差{{pt_data.num}}人的团，支付后即可拼购成功</view>
				<view class="jr_img">
					<view class="img_01 img_01_border">
						<img :src="pt_data.c_pic"></img>
						<view class="zhicheng">团长</view>
					</view>
					<view class="img_01" v-for="item of pt_data.item_pic">
						<img :src="item"></img>
					</view>
					<view class="img_01">
						<img :src="head.avatarUrl"></img>
						<view class="zhicheng">待支付</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 拼团单 -->
		
		<!-- 开团单 -->
		<view class="yt-list" v-if="is_kai == 1">
			<view class="jr">
				<view class="jr_tit">立即支付，即可开团成功</view>
				<view class="jr_img">
					<view class="img_01 img_01_border">
						<img :src="head.avatarUrl"></img>
						<view class="zhicheng">待支付</view>
					</view>
					<view class="img_01 img_01_borderx" v-for="(item,index) of buy_data[0].pt.pt.user_num-1" :key="index">?</view>
				</view>
			</view>
		</view>
		<!-- 开团单 -->
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		props:{
			is_pt:Number,
			is_kai:Number,
			head:Object,
			pt_data:Object,
			buy_data:Array
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.yt-list {
		margin-top: 16upx;
		background: #fff;
	}
	
	.yt-list-cell {
		display: flex;
		align-items: center;
		padding: 10upx 30upx 10upx 40upx;
		line-height: 70upx;
		position: relative;
	
		&.cell-hover {
			background: #fafafa;
		}
	
		&.b-b:after {
			left: 30upx;
		}
	
		.cell-icon {
			height: 32upx;
			width: 32upx;
			font-size: 22upx;
			color: #fff;
			text-align: center;
			line-height: 32upx;
			background: #f85e52;
			border-radius: 4upx;
			margin-right: 12upx;
	
			&.hb {
				background: #ffaa0e;
			}
	
			&.lpk {
				background: #3ab54a;
			}
	
		}
	
		.cell-more {
			align-self: center;
			font-size: 24upx;
			color: $font-color-light;
			margin-left: 8upx;
			margin-right: -10upx;
		}
	
		.cell-tit {
			flex: 1;
			font-size: 26upx;
			color: $font-color-light;
			margin-right: 10upx;
		}
	
		.cell-tip {
			font-size: 26upx;
			color: $font-color-dark;
	
			&.disabled {
				color: $font-color-light;
			}
	
			&.active {
				color: $base-color;
			}
	
			&.red {
				color: $base-color;
			}
		}
	
		&.desc-cell {
			.cell-tit {
				max-width: 90upx;
			}
		}
	
		.desc {
			flex: 1;
			font-size: $font-base;
			color: $font-color-dark;
		}
	}
</style>
