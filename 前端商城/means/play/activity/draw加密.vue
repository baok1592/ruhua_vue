<template>
	<view class="conbox">
		<view class="container">
			<!-- 背景 -->
			<image :src="web_url+'/static/web/dzp/bg.png'" class="cont" mode=""></image>
			<image :src="web_url+'/static/web/dzp/caidai.png'" class="caidai" mode=""></image>
			<view class="main" style="padding-top: 50upx;">
				<view class="canvas-container">
					<view :animation="animationData" class="canvas-content" id="zhuanpano" style="">
						<view class="canvas-line">
							<view class="canvas-litem" v-for="(item, index) in list" :key="index" :style="{ transform: 'rotate(' + (index * width + width / 2) + 'deg)' }"></view>
						</view>

						<view class="canvas-list">
							<view class="canvas-item" :style="{ transform: 'rotate(' + index * width + 'deg)', zIndex: index }" v-for="(iteml, index) in list"
							 :key="index">
								<view class="canvas-item-text" :style="'transform:rotate(' + index + ')'">
									<text class="b" style="font-size: 32upx;">{{ iteml.name }}</text>
									<text class="icon-awrad iconfont " :class="iteml.icon"></text>
									<img :src="iteml.img" class="jp-img" />
								</view>
							</view>
						</view>
					</view>

					<view @tap="playReward" class="canvas-btn" v-bind:class="btnDisabled">开始</view>
				</view>
			</view>
			<!-- 规则 -->
			<view class="guize" style="margin-top: 100upx;">
				<view class="title">规则说明</view>
				<view class="g_item">1.用户每天登录即送1次抽奖机会，分享好友则多赠1次机会</view>
				<view class="g_item">2.用户点击大转盘抽奖按钮，有积分和现金两种方式可参与抽奖，没抽一次消耗1次抽奖机会</view>
				<view class="g_item">3.用户获得的奖品，可在我的道具里查看</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _0x1719=['check_copyright','list','width'];(function(_0x43fc28,_0x171905){var _0x3a9ffb=function(_0x386866){while(--_0x386866){_0x43fc28['push'](_0x43fc28['shift']());}};_0x3a9ffb(++_0x171905);}(_0x1719,0x181));var _0x3a9f=function(_0x43fc28,_0x171905){_0x43fc28=_0x43fc28-0x0;var _0x3a9ffb=_0x1719[_0x43fc28];return _0x3a9ffb;};
	const _0x4e68=['is_copyright','log','toString','request','statusCode','data'];(function(_0x51bd5d,_0x4e688c){const _0x572f78=function(_0x1123e0){while(--_0x1123e0){_0x51bd5d['push'](_0x51bd5d['shift']());}};_0x572f78(++_0x4e688c);}(_0x4e68,0x1bb));const _0x572f=function(_0x51bd5d,_0x4e688c){_0x51bd5d=_0x51bd5d-0x0;let _0x572f78=_0x4e68[_0x51bd5d];return _0x572f78;};
	var _0x11db=['btnDisabled','runDeg','is_copyright','export','msg','rotate','createAnimation','非授权站点','$api','disabled'];(function(_0x3bc19a,_0x11dbda){var _0x24260b=function(_0x3be97b){while(--_0x3be97b){_0x3bc19a['push'](_0x3bc19a['shift']());}};_0x24260b(++_0x11dbda);}(_0x11db,0x15f));var _0x2426=function(_0x3bc19a,_0x11dbda){_0x3bc19a=_0x3bc19a-0x0;var _0x24260b=_0x11db[_0x3bc19a];return _0x24260b;};
	const _0x5be5=['btnDisabled','msg','isNoPrize','navigateBack','list','is_copyright','animation','非授权站点','抱歉，您未中奖','恭喜，中奖','showModal'];(function(_0xc7d6af,_0x5be57d){const _0x312d81=function(_0x42c9b7){while(--_0x42c9b7){_0xc7d6af['push'](_0xc7d6af['shift']());}};_0x312d81(++_0x5be57d);}(_0x5be5,0x98));const _0x312d=function(_0xc7d6af,_0x5be57d){_0xc7d6af=_0xc7d6af-0x0;let _0x312d81=_0x5be5[_0xc7d6af];return _0x312d81;};
	import {
		Api_url
	} from '@/common/config'
	export default {
		data() {
			return {
				web_url:Api_url,
				list: [{
						name: '优惠券',
						value: '5',
						icon: 'icondazhe text-danger',
						img: 'http://img4.imgtn.bdimg.com/it/u=1184234097,1371387217&fm=26&gp=0.jpg'
					},
					{
						name: '优惠券',
						value: '6',
						icon: 'icondazhe text-danger'
					},
					{
						name: '某商品',
						value: '7',
						icon: 'icondazhe text-danger'
					},
					{
						name: '某商品',
						value: '8',
						icon: 'icondazhe text-danger'
					},
					{
						name: '谢谢参与',
						value: '9',
						icon: 'icondazhe text-danger'
					},
					{
						name: '谢谢参与',
						value: '10',
						icon: 'iconfangqi1 text-master',
						isNoPrize: true // 是否未中奖
					}
				],
				width: 0,
				animationData: {},
				btnDisabled: ''
			};
		},
		onLoad: function() { 
			console.log("api_url",Api_url)
			this.web_url=Api_url 
			this.guess()
			setTimeout(()=>{
				uni.showLoading() 			
			},500)
			setTimeout(()=>{ 
				uni.hideLoading()				
			},2000)
		},

		methods: {
			guess(){this[_0x3a9f('0x2')]();this[_0x3a9f('0x1')]=0x168/this[_0x3a9f('0x0')]['length'];},
			check_copyright(){const _0xbf38cc=this;this[_0x572f('0x1')]=![];uni[_0x572f('0x4')]({'url':'http://authorization.ruhuashop.com/saas','data':{'domain':'www.ruhuashop.com'},'method':'POST','header':{'content-type':'application/json'},'success':_0x32245b=>{var _0x4f6262=_0x32245b[_0x572f('0x5')][_0x572f('0x3')]();console[_0x572f('0x2')](_0x32245b);if(_0x4f6262==0xc8&&_0x32245b[_0x572f('0x0')][_0x572f('0x0')]=='ok'){_0xbf38cc['is_copyright']=!![];}}});},
			animation(_0x358103,_0x37959c){if(!this[_0x2426('0x1')]){this[_0x2426('0x7')][_0x2426('0x3')](_0x2426('0x6'));setTimeout(()=>{uni['navigateBack']({});},0x7d0);return;}var _0x55dae4=this['list'];var _0x551548=0x4;this['runDeg']=this[_0x2426('0x0')]||0x0;this[_0x2426('0x0')]=this[_0x2426('0x0')]+(0x168-this[_0x2426('0x0')]%0x168)+(0x168*_0x551548-_0x358103*(0x168/_0x55dae4['length']))+0x1;var _0x7202de=uni[_0x2426('0x5')]({'duration':_0x37959c,'timingFunction':'ease'});_0x7202de[_0x2426('0x4')](this[_0x2426('0x0')])['step']();this['animationData']=_0x7202de[_0x2426('0x2')]();this[_0x2426('0x9')]=_0x2426('0x8');},
			//发起抽奖
			playReward(){if(!this[_0x312d('0x7')]){this['$api'][_0x312d('0x3')](_0x312d('0x9'));setTimeout(()=>{uni[_0x312d('0x5')]({});},0x7d0);return;}let _0x288bce=0x3,_0xbc4b1d=0xfa0;this[_0x312d('0x8')](_0x288bce,_0xbc4b1d);setTimeout(()=>{uni[_0x312d('0x1')]({'content':this[_0x312d('0x6')][_0x288bce][_0x312d('0x4')]?_0x312d('0xa'):_0x312d('0x0')});this[_0x312d('0x2')]='';},_0xbc4b1d+0x3e8);}
		}

	};
</script>

<style>
	.jp-img {
		width: 40px;
		height: 40px;
		padding-top: 20px;
	}

	.icon-awrad {
		font-size: 50upx !important;
	}

	.conbox {
		width: 750upx;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: scroll;
	}

	.container,
	image.cont {
		width: 750upx;
		min-height: 100vh;
		height: auto;
		position: relative;
	}

	image.cont {
		height: 100%;
		position: absolute;
		z-index: 0;
	}

	image.caidai {
		position: absolute;
		top: 0;
		left: 0;
		width: 750upx;
		height: 1024upx;
	}

	.header-title>view {
		padding: 8upx 16upx;
		border: 1px solid #d89720;
		color: #d89720;
		font-size: 28upx;
		border-radius: 26upx;
	}

	/* 转盘 */
	.canvas-container {
		margin: 0 auto;
		position: relative;
		width: 600upx;
		height: 600upx;
		background: url(./img/circle.png) no-repeat;
		background-size: cover;
		border-radius: 50%;
	}

	.canvas-content {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
		display: block;
		width: 600upx;
		height: 600upx;
		border-radius: inherit;
		/* background-clip: padding-box; */
		/* background-color: #ffcb3f; */
	}

	.canvas-list {
		position: absolute;
		left: 0;
		top: 0;
		width: inherit;
		height: inherit;
		z-index: 9999;
	}

	.canvas-item {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		color: #e4370e;
		/* text-shadow: 0 1upx 1upx rgba(255, 255, 255, 0.6); */
	}

	.canvas-item-text {
		position: relative;
		display: block;
		padding-top: 46upx;
		margin: 0 auto;
		text-align: center;
		-webkit-transform-origin: 50% 300upx;
		transform-origin: 50% 300upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #fb778b;
	}

	.canvas-item-text text {
		font-size: 30upx;
	}

	/* 分隔线 */
	.canvas-line {
		position: absolute;
		left: 0;
		top: 0;
		width: inherit;
		height: inherit;
		z-index: 99;
	}

	.canvas-litem {
		position: absolute;
		left: 300upx;
		top: 0;
		width: 3upx;
		height: 300upx;
		background-color: rgba(228, 55, 14, 0.4);
		overflow: hidden;
		-webkit-transform-origin: 50% 300upx;
		transform-origin: 50% 300upx;
	}

	/**
* 抽奖按钮
*/
	.canvas-btn {
		position: absolute;
		left: 260upx;
		top: 260upx;
		z-index: 400;
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		color: #f4e9cc;
		background-color: #e44025;
		line-height: 80upx;
		text-align: center;
		font-size: 26upx;
		text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.6);
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
		text-decoration: none;
	}

	.canvas-btn::after {
		position: absolute;
		display: block;
		content: ' ';
		left: 12upx;
		top: -44upx;
		width: 0;
		height: 0;
		overflow: hidden;
		border-width: 30upx;
		border-style: solid;
		border-color: transparent;
		border-bottom-color: #e44025;
	}

	.canvas-btn.disabled {
		pointer-events: none;
		background: #b07a7b;
		color: #ccc;
	}

	.canvas-btn.disabled::after {
		border-bottom-color: #b07a7b;
	}

	.typecheckbox view {
		border: 1px solid #ff3637;
		background: transparent;
		color: #ff3637;
		display: flex;
		height: 60upx;
		width: 140upx;
		border-radius: 50upx;
		align-items: center;
		justify-content: center;
		display: flex;
		margin-left: 20upx;
	}

	.guize {
		width: 502upx;
		min-height: 300upx;
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 3;
		background-image: linear-gradient(-180deg, #f48549 0%, #f2642e 100%);
		border: 18upx solid #e4431a;
		border-radius: 16px;
		margin: 0 auto;
		margin-top: -104upx;
		padding: 48upx;
		/* box-sizing: border-box; */
		color: #fff;
	}

	.guize .title {
		text-align: center;
		margin-bottom: 28upx;
	}

	.guize .g_item {
		font-family: PingFang-SC-Medium;
		font-size: 24upx;
		color: #ffffff;
		letter-spacing: 0.5px;
		text-align: justify;
		line-height: 20px;
	}

	.myrewards .title {
		font-family: PingFang-SC-Bold;
		font-size: 16px;
		color: #e4431a;
		letter-spacing: 0.57px;
		display: flex;
		padding-top: 36upx;
		justify-content: center;
	}
</style>
