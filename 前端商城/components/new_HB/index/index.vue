<template>
	<view class="content">
		<!-- <view class="beijing"> -->
		<view class="post" v-show="tishi==1">
			<p style="color: #ffffff;font-size: 30upx;margin-top: 70upx;">长按保存图片至相册</p>
			<view class="content" style="text-align: center;width: 85%;margin: 0 auto;">
				<view style="padding-top: 20upx;margin-top: 30upx;background: #ffffff;">
					<view @click="guanbi">
						<img id="test" style="width: 580upx;height: 954upx;" />
					</view>
				</view>
			</view>
			<!-- #ifdef APP-PLUS -->
			<image @click="guanbi" class="cha" style="width: 80upx;height: 80upx; margin-top: 25upx;margin-left: 47%;"></image>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<image @click="guanbi" class="cha" style="width: 80upx;height: 80upx; margin-top: 25upx; margin: 0;"></image>
			<!-- #endif -->
		</view>
		<!-- </view> -->

		<view @click="erweima" style="text-align: center;"></view>
	</view>
</template>

<script>
	import canvas_x from '../mg-h5hb/common/canvas_x.js';

	export default {

		data() {
			return {
				getimg:this.$getimg,
				tishi: 0,
				userid: 0,
				img: "",
				phone: "",
				poster: {},
				qrShow: false,
				canvasId: 'default_PosterCanvasId',
				nickname: "",
				val: ""
			};
		},
		props:['product_data'],
		created() {
			//二维码地址（可从后台获取地址进行赋值） 
			var domine = window.location.href.split("#"); // 微信会自动识别#    并且清除#后面的内容
			if(domine[0]){
				this.val = domine[0]+'#'+domine[1]
			}else{
				this.val = '/../'
			}
		},
		
		methods: {

			guanbi: function() {
				this.tishi = 0;
			},
			erweima: function() {
				let my = uni.getStorageSync('my')				
				console.log("my",my.data)
				let name=""
				if(my && my.data){
					name=my.data.nickname
				}  
				console.log("name",name)
				this.tishi = 1; 
				canvas_x.makeImage({
					type: 'url',
					parts: [{
							type: 'image',
							url: this.product_data.imgs?this.getimg + this.product_data.imgs:'',
							width: 680,
							height: 680,
							// backgroundSize:680,
						},
						{
							type: 'qrcode',
							text: this.val,
							x: 0,
							y: -50,
							width: 200,
							height: 200,
							padding: 0,
							background: '#fff',
							level: 3
						},
						{
							type: 'text',
							text: name,
							textAlign: 'left',
							lineAlign: 'TOP',
							x: 230,
							y: 1050,
							color: 'black',
							size: '30px',
							// bold: true
						},
						{
							type: 'text',
							text: this.shop_name,
							textAlign: 'left',
							lineAlign: 'TOP',
							x: 230,
							y: 1155,
							color: 'black',
							size: '30px',
							// bold: true
						},
						{
							// 
							type: 'text',
							text: this.product_data.price?'￥'+this.product_data.price:'商品价格',
							textAlign: 'center',
							lineAlign: 'TOP',
							x: 0,
							y: 800,
							color: 'red',
							size: '50px',
							// bold: true
						},
						{
							type: 'text',
							text: this.product_data.goods_name?this.product_data.goods_name.slice(0,21):'商品名称',
							textAlign: 'center',
							lineAlign: 'TOP',
							overflow:'warp',
							x: 0,
							y: 880,
							width:680,
							color: 'black',
							size: '30px',
							// bold: true
						}
					],
					width: 680,
					height: 1264
				}, (err, data) => {
					document.getElementById('test').src = data
				})
			}
		}
	};
</script>

<style lang="scss">
	.post {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		position: fixed;
		top: 0upx;
		z-index: 10000;
		text-align: center;

		.wrapper {
			height: 1420upx;
			width: 610upx;
			margin: 0 auto;
			margin-top: -150upx;

			// margin-top: 50upx;
		}
	}

	.tupian {
		width: 100%;
		height: 1360upx;
		background-image: url('../../../static/mg-h5hb/tutu3.png');
		background-size: 750upx 1360upx;
	}

	.cha {
		background-image: url('../../../static/mg-h5hb/chacha.png');
		background-size: 80upx 80upx;
		position: relative;
		top: 40upx
	}
</style>
