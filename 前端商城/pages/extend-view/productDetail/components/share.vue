<template>
	<view class="">
		<view class="sha_tan" v-if="is_share">
			<view class="mask" @click="cancel_share"></view>
			<view class="share_tan">
				<view class="s_title">— · 分享 · —</view>
				<view class=''>
					<block v-if="list.fx>0">
						<view class="st_tit" >分享后预计可赚取佣金¥{{list.fx}}</view>
					<view class="st_des" >朋友通过你分享的页面成功买够后，你可获得对应的佣金。
					佣金可在“我的页面-分销中心”里查看</view>
					</block>
					<!-- #ifndef H5 -->
					<view class='s_t_x'>
						<view class='s_t_l'>
							<button open-type="share" class="s_t_l_s share"><img src='@/imgs/share1.png' /></button>
						</view>
						<view class='s_t_l'>
							<view class='s_t_l_s' @click="shareFc"><img src='@/imgs/share2.png' /></view>
						</view>
					</view>
					<view class='s_t_x'>
						<view class='s_t_l'>
							<button open-type="share" class="share">分享好友</button>
						</view>
						<view class='s_t_l'>
							<view @click="shareFc">生成海报</view>
						</view>
					</view>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<view class='s_t_x'>
						<view class='s_t_l'>
							<view class='s_t_l_s' @click="shareFc"><img src='@/imgs/share2.png' /></view>
						</view>
					</view>
					<view class='s_t_x m-b'>
						<view class='s_t_l'>
							<view @click="shareFc">生成海报</view>
						</view>
					</view>
					<!-- #endif -->
				</view>
				<view class="bye" @click="cancel_share">取消</view>
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
			is_share:Boolean,
			list:Object
		},
		methods:{
			shareFc(){
				this.$emit('shareFc')
			},
			cancel_share(){
				this.$emit('cancel_share')
			}
		}
	}
</script>

<style lang="scss">
	.canvas {
		position: fixed !important;
		top: 0 !important;
		left: 0 !important;
		display: block !important;
		width: 100% !important;
		height: 100% !important;
		z-index: 10;
	}
	.sha_tan {
		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}
	
		.share_tan {
			background-color: #fff;
			padding-top: 15px;
			box-shadow: 0 1px 15px #D3D3D3;
			position: fixed;
			bottom: 0px;
			width: 100%;
			text-align: center;
			z-index: 199;
	
			.s_title {
				font-size: 16px;
			}
	
			.bye {
				height: 40px;
				line-height: 40px;
				border-top: 1px solid #EFEFEF;
				font-size: 14px;
			}
	
			.st_tit {
				font-size: 16px;
			}
	
			.st_des {
				padding: 10px 20px 0;
				color: #ADAEB0;
				font-size: 13px;
			}
		}
	
		.s_t_tit {
			font-size: 16px;
		}
	
		.s_t_tit span {
			color: #999999;
		}
	
		.m-b {
			margin-bottom: 30px;
		}
	
		.s_t_x {
			display: flex;
			justify-content: center;
			padding-top: 10px;
		}
	
		.s_t_l {
			width: 50%;
			text-align: center;
			font-size: 12px;
			display: flex;
			justify-content: center;
			line-height: 13px;
			color: #000;
		}
	
		.s_t_l button {
			line-height: 13px;
			color: #000;
			font-size: 12px;
		}
	
		.s_t_l image {
			width: 50px;
			height: 50px;
			margin-top: 15px;
		}
	
		.s_t_l_s {
			background-color: #F37401;
			width: 45px;
			height: 45px;
			border-radius: 50px;
			display: flex;
			justify-content: center;
			margin-top: 15px;
		}
	
		.share {
			background-color: #fff;
	
			img {
				width: 50px;
				height: 50px;
				margin-top: 0px;
				border-radius: 50px;
			}
		}
	
		.s_t_l_s image {
			width: 50px;
			height: 50px;
			margin-top: 0px;
		}
	
		.s_t_q {
			line-height: 40px;
			height: 40px;
			border-top: 1px solid #EFEFEF;
			margin-top: 16px;
		}
	
	}
</style>
