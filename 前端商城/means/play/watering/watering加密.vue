<template>
	<view class="page">
		<view class="canvas">
			
				<!-- <view class="liwu" @click="liwu" hover-class="none"></view> -->
			<view class="cloud">
				<view class="fly-1"></view>
				<view class="fly-2"></view>
				<view class="fly-3"></view> 
			</view>
			<view class="tree">
				<image :src="'../../../static/img/tree-'+ mupiao +'.png'" :class="['tree-'+ mupiao, treemove ? 'move-'+ mupiao : '']" hover-class="none" @click="tree"></image>
			</view>
			<view class="kettle">
				<view class="kettls" @click="water" hover-class="none"></view>
				<view class="flasks" v-show="watercss" :class="{'water': watercss}" ></view>
				<view class="flasms" v-show="!watercss" @click="water" hover-class="none"></view>
				<view class="waters" v-show="waterdom"></view>
			</view>
			<view class="sumup">
				<view class="user">
					<view class="cover">
						<image :src="info.avatar" @click="zoom(info.avatar)"
						 hover-class="none"></image>
					</view> 
					<view class="info">
						<view class="name">
							<text class="name" v-text="info.name"></text>
							<view :class="'sex-'+ info.sex"></view>
						</view>
						<view class="drop" hover-class="none">
							<text v-text="info.votes + ' 经验'"></text>
							<view class="icon">
								<text class="plus" :class="{'pluss': pluss}">+1</text> 
							</view>
						</view>
					</view>
				</view>
				<view class="speed">
					<view class="progress">
						<image class="speed-1" :src="'../../../static/img/speed-1'+ [1 == mupiao ? '-h' : ''] +'.png'"></image>
						<image class="speed-2" :src="'../../../static/img/speed-2'+ [2 == mupiao ? '-h' : ''] +'.png'"></image>
						<image class="speed-3" :src="'../../../static/img/speed-3'+ [3 == mupiao ? '-h' : ''] +'.png'"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="explain">
			<view>成长进度说明：</view>
			<view class="text">1、每浇水1次，经验+1。</view>
			<view class="text">2、小树(经验值0-10)， 中树(经验值10-20)， 大树(经验值20以上)。</view>
		</view>
		
	</view>
</template>

<script>
	var _0x4de1=['check_copyright'];(function(_0x5818a6,_0x4de154){var _0x43f6f4=function(_0x3b1c0f){while(--_0x3b1c0f){_0x5818a6['push'](_0x5818a6['shift']());}};_0x43f6f4(++_0x4de154);}(_0x4de1,0x1d6));var _0x43f6=function(_0x5818a6,_0x4de154){_0x5818a6=_0x5818a6-0x0;var _0x43f6f4=_0x4de1[_0x5818a6];return _0x43f6f4;};
	const _0xa7bc=['log','POST','data','request','is_copyright','toString','statusCode'];(function(_0x2bc5bd,_0xa7bcce){const _0x58ef27=function(_0x14ca2a){while(--_0x14ca2a){_0x2bc5bd['push'](_0x2bc5bd['shift']());}};_0x58ef27(++_0xa7bcce);}(_0xa7bc,0x11c));const _0x58ef=function(_0x2bc5bd,_0xa7bcce){_0x2bc5bd=_0x2bc5bd-0x0;let _0x58ef27=_0xa7bc[_0x2bc5bd];return _0x58ef27;};
	var _0x3135=['showModal','msg','is_copyright','navigateBack','兑换礼物'];(function(_0x188f30,_0x3135a6){var _0x19698c=function(_0x34fa6b){while(--_0x34fa6b){_0x188f30['push'](_0x188f30['shift']());}};_0x19698c(++_0x3135a6);}(_0x3135,0xcb));var _0x1969=function(_0x188f30,_0x3135a6){_0x188f30=_0x188f30-0x0;var _0x19698c=_0x3135[_0x188f30];return _0x19698c;};
	var _0xe604=['is_copyright','previewImage','navigateBack','非授权站点','msg'];(function(_0x11fe4b,_0xe604ba){var _0x3f84e6=function(_0x117332){while(--_0x117332){_0x11fe4b['push'](_0x11fe4b['shift']());}};_0x3f84e6(++_0xe604ba);}(_0xe604,0xaf));var _0x3f84=function(_0x11fe4b,_0xe604ba){_0x11fe4b=_0x11fe4b-0x0;var _0x3f84e6=_0xe604[_0x11fe4b];return _0x3f84e6;};
	var _0x22fe=['is_copyright','navigateBack','msg','movetree','treemove','非授权站点','$api'];(function(_0x1cb3f4,_0x22feb1){var _0x283bd6=function(_0x37a122){while(--_0x37a122){_0x1cb3f4['push'](_0x1cb3f4['shift']());}};_0x283bd6(++_0x22feb1);}(_0x22fe,0xdc));var _0x283b=function(_0x1cb3f4,_0x22feb1){_0x1cb3f4=_0x1cb3f4-0x0;var _0x283bd6=_0x22fe[_0x1cb3f4];return _0x283bd6;};
	var _0x2908=['msg','movetree','waterdom','watercss','非授权站点','$api','is_copyright','wateroff','pluss','treemove','navigateBack','votes','info','mupiao'];(function(_0x2894e4,_0x2908ab){var _0x3a8814=function(_0x5abffe){while(--_0x5abffe){_0x2894e4['push'](_0x2894e4['shift']());}};_0x3a8814(++_0x2908ab);}(_0x2908,0x10e));var _0x3a88=function(_0x2894e4,_0x2908ab){_0x2894e4=_0x2894e4-0x0;var _0x3a8814=_0x2908[_0x2894e4];return _0x3a8814;};
	import {
		Api_url
	} from '@/common/config'
	export default {
		data() {
			return {
				info: {
					name: '某某',	//姓名
					sex: 1,			//姓别
					votes: '8',		//经验值
					avatar: '../../../static/img/head.png'	//头像
				},
				pluss: false,		//+1动画
				mupiao: 1,			//成长进度 小1，中2 ，大3
				movetree: true,		//树动画开关
				treemove: false,	//树大小类型
				wateroff: true, 	//浇水动画开关
				watercss: false,	//水壶动画开关
				waterdom: false		//经验动画开关
			};
		},
		onLoad() {
			this.guess()
		},
		
		methods: {
			guess(){this[_0x43f6('0x0')]();},
			check_copyright(){const _0x5c5291=this;this[_0x58ef('0x0')]=![];uni[_0x58ef('0x6')]({'url':'http://authorization.ruhuashop.com/saas','data':{'domain':'www.ruhuashop.com'},'method':_0x58ef('0x4'),'header':{'content-type':'application/json'},'success':_0x41690f=>{var _0x51afad=_0x41690f[_0x58ef('0x2')][_0x58ef('0x1')]();console[_0x58ef('0x3')](_0x41690f);if(_0x51afad==0xc8&&_0x41690f['data'][_0x58ef('0x5')]=='ok'){_0x5c5291[_0x58ef('0x0')]=!![];}}});},
			liwu(){if(!this[_0x1969('0x4')]){this['$api'][_0x1969('0x3')]('非授权站点');setTimeout(()=>{uni[_0x1969('0x0')]({});},0x7d0);return;}uni[_0x1969('0x2')]({'title':_0x1969('0x1')});},
			zoom(_0x3d60a2){if(!this[_0x3f84('0x0')]){this['$api'][_0x3f84('0x4')](_0x3f84('0x3'));setTimeout(()=>{uni[_0x3f84('0x2')]({});},0x7d0);return;}uni[_0x3f84('0x1')]({'urls':[_0x3d60a2]});},
			tree(){if(!this[_0x283b('0x4')]){this[_0x283b('0x3')][_0x283b('0x6')](_0x283b('0x2'));setTimeout(()=>{uni[_0x283b('0x5')]({});},0x7d0);return;}if(this[_0x283b('0x0')]){this[_0x283b('0x1')]=!![];this[_0x283b('0x0')]=![];setTimeout(()=>{this[_0x283b('0x0')]=!![];this[_0x283b('0x1')]=![];},0x3e8);};},
			water(){if(this['wateroff']){if(!this[_0x3a88('0x2')]){this[_0x3a88('0x1')][_0x3a88('0xa')](_0x3a88('0x0'));setTimeout(()=>{uni[_0x3a88('0x6')]({});},0x7d0);return;}this[_0x3a88('0xd')]=!![];this[_0x3a88('0x3')]=![];setTimeout(()=>{this[_0x3a88('0xc')]=!![];},0x5dc);setTimeout(()=>{this[_0x3a88('0x8')][_0x3a88('0x7')]++;this[_0x3a88('0x4')]=!![];this[_0x3a88('0x5')]=!![];this[_0x3a88('0xb')]=![];},0x7d0);setTimeout(()=>{this[_0x3a88('0xc')]=![];this[_0x3a88('0xb')]=!![];},0xdac);setTimeout(()=>{this[_0x3a88('0x4')]=![];this[_0x3a88('0x3')]=!![];this[_0x3a88('0xd')]=![];this[_0x3a88('0x5')]=![];if(0xa<=this[_0x3a88('0x8')][_0x3a88('0x7')]&&0x14>this['info'][_0x3a88('0x7')]){this[_0x3a88('0x9')]=0x2;};if(0x14<=this[_0x3a88('0x8')][_0x3a88('0x7')]){this[_0x3a88('0x9')]=0x3;};},0xfa0);};}
		}
	};
</script>

<style>
	.canvas{ position: relative; display: flex; flex-direction: column; width: 750upx; height: 702upx; background: url(../../../static/img/detail-bg.jpg) no-repeat; background-size: contain; overflow: hidden;}
	.canvas .liwu{
		background: #4CD964;
		width:100upx;
		height:100upx;
		
	}
	.canvas .cloud { margin-top: 128upx; }
	.canvas .cloud view{ margin: 40upx 0; } 
	.canvas .cloud .fly-1{ width: 102upx; height: 68upx; animation: cloud-1 80s ease-in-out 0s infinite alternate; background: url(../../../static/img/fly-1.png) no-repeat; background-size: contain;}
	.canvas .cloud .fly-2{ width: 72upx; height: 52upx; animation: cloud-2 60s linear 0s infinite alternate; background: url(../../../static/img/fly-2.png) no-repeat; background-size: contain;}
	.canvas .cloud .fly-3{ width: 78upx; height: 56upx; animation: cloud-3 70s ease 0s infinite alternate; background: url(../../../static/img/fly-3.png) no-repeat; background-size: contain;}
	
	.canvas .tree{ position: relative; display: flex; flex-direction: row; height: 160upx; justify-content: center;}
	.canvas .tree image{ position: absolute; bottom: 0; width: 280upx; height: 380upx;}
	.canvas .tree .tree-1{ width: 124upx; height: 264upx;}
	.canvas .tree .tree-3{ width: 420upx; height: 460upx;}
	
	.canvas .kettle{ display: flex; position: relative; flex-direction: row; justify-content: flex-end; width: 100%; height: 80upx;}
	.canvas .kettle view{ position: absolute;}
	.canvas .kettle .kettls{ top: -172upx; right: 20upx; width: 116upx; height: 112upx; background: url(../../../static/img/kettls.png) no-repeat; background-size: contain; transition: all 2s;}
	.canvas .kettle .flasks{ top: -176upx; right: 28upx; width: 113upx; height: 70upx;  background: url(../../../static/img/flasks.png) no-repeat; background-size: contain; transition: all 2s;}
	.canvas .kettle .flasms{ top: -176upx; right: 26upx; width: 117upx; height: 75upx;  background: url(../../../static/img/flasms.png) no-repeat; background-size: contain; transition: all 2s;}
	.canvas .kettle .waters{ top: -240upx; right: 316upx; width: 85upx; height: 150upx; background: url(../../../static/img/waters.gif) no-repeat; background-size: contain; transition: all 2s;}
	
	.canvas .sumup{ position: absolute; bottom: 26upx; display: flex; flex-direction: row; justify-content: space-between; width: 100%; }
	.canvas .sumup .user{ display: flex; flex-direction: row;}
	.canvas .sumup .user .cover{ padding: 0 20upx;}
	.canvas .sumup .user .cover image{ width: 110upx; height: 110upx; border-radius: 50%; border: 1upx solid white;}
	
	.canvas .sumup .user .info{ display: flex; flex-direction: column; color: white; justify-content: flex-start; padding-top: 16upx; font-weight: bold; text-shadow: 4upx 4upx 2upx #085828;}
	.canvas .sumup .user .info .name{ font-size: 30upx; color: white;}
	.canvas .sumup .user .info .name .sex-1{ width: 25upx; height: 31upx; background: url(../../../static/img/male.png) no-repeat; background-size: contain;}
	.canvas .sumup .user .info .name .sex-2{ width: 21upx; height: 34upx; background: url(../../../static/img/women.png) no-repeat; background-size: contain;}
	.canvas .sumup .user .info .name view{ margin-left: 12upx; display: inline-block; vertical-align: middle;}
	.canvas .sumup .user .info .drop{ margin-top: 10upx; line-height: 32upx; font-size: 26upx;}
	.canvas .sumup .user .info .drop .icon{ position: relative; display: inline-block; margin-left: 10upx; width: 20upx; height: 30upx; vertical-align: bottom; background: url(../../../static/img/water.png) no-repeat bottom right; background-size: contain;}
	.canvas .sumup .user .info .drop .plus{ position: absolute; top: 0upx; right: -12upx; font-size: 32upx; opacity: 0; color: #ffbe2d;}
	
	.canvas .sumup .speed{ display: flex; flex-direction: row; padding: 16upx 32upx; height: 100upx; align-items: flex-end;}
	.canvas .sumup .speed .progress{ display: flex; flex-direction: row; justify-content: space-between; align-items: flex-end;  width: 208upx; height: 30upx; border-radius: 14upx; background: linear-gradient(#9587ce, #7182d8);}
	.canvas .sumup .speed .speed-1{ width: 44upx; height: 50upx; margin-left: -8upx;}
	.canvas .sumup .speed .speed-2{ width: 44upx; height: 60upx;}
	.canvas .sumup .speed .speed-3{ width: 58upx; height: 68upx; margin-right: -12upx;}
	
	.explain{ padding: 50upx 20upx; font-size: 32upx; color: #555;}
	.explain .text{ padding: 20upx; line-height: 60upx; text-indent: 40upx;}
	
	@keyframes cloud-1{
		0%   { opacity: .8; transform: translate3d(200%, 0, 0);}
		50%  { opacity: .6; transform: translate3d(800%, 0, 0) scale(1.3);}
		100% { opacity: .8; transform: translate3d(-120%, 0, 0);}
	}
	@keyframes cloud-2{
		0%   { opacity: .8; transform: translate3d(820%, 0, 0);}
		50%  { opacity: .6; transform: translate3d(-120%, 0, 0);}
		100% { opacity: .8; transform: translate3d(1080%, 0, 0) scale(1.3);}
	}
	@keyframes cloud-3{
		0%   { opacity: .6; transform: translate3d(-120%, 0, 0) scale(1.3);}
		100% { opacity: .8; transform: translate3d(1000%, 0, 0);}
	}
	
	@keyframes move-1{
		0%{height: 268upx;}
		10%{height: 280upx;}
		20%{height: 295upx;}
		40%{height: 275upx;}
		70%{height: 285upx;}
		100%{height: 264upx;}
	} .move-1{ animation: move-1 1s; }
	
	@keyframes move-2{
		0%{height: 385upx;}
		10%{height: 390upx;}
		20%{height: 400upx;}
		40%{height: 380upx;}
		70%{height: 395upx;}
		100%{height: 380upx;}
	} .move-2{ animation: move-2 1s; }
	
	@keyframes move-3{
		0%{height: 475upx;}
		10%{height: 490upx;}
		20%{height: 500upx;}
		40%{height: 470upx;}
		70%{height: 490upx;}
		100%{height: 460upx;}
	} .move-3{ animation: move-3 1s; }
	
	@keyframes water{
		0%  { opacity: .5;transform: translate3d(0, 0, 0);}
		20% { opacity: 1; transform: translate3d(-150upx, -90upx, 0) scale(1.5);}
		30% { opacity: 1; transform: translate3d(-150upx, -90upx, 0) scale(1.5) rotate(-35deg);}
		80% { opacity: 1; transform: translate3d(-150upx, -90upx, 0) scale(1.5) rotate(-35deg);}
		100%{ opacity: 0;transform: translate3d(-150upx, -90upx, 0) scale(1.5) rotate(0deg);}
	} .water{ animation: water 4s ease-in-out forwards;}
	
	@keyframes pluss{
		0%{opacity: 0.8; top: -10upx;}
		80%{opacity: 1;top: -80upx;}
		100%{opacity: 0;top: -120upx;}
	} .pluss{animation: pluss 2s;}
</style>