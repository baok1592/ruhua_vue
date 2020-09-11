<template>
	<view class="conbox" v-if="show">
		<image class="cont"  :src="web_url+'/static/web/jgg/bg.png'" mode=""></image>
		<!--index.wxml-->
		<view class="container">
			<!-- 停止位置:<input :value='luckPosition' style="width:100%;text-align:center" @input='input' type='number'></input> -->
			<view class="frame_view">
				<view class="frame_row">
					<view class="frame_item frame_item0" :style="{ opacity: color[0].opa }" :src="images[0]">
						<view class="title">{{ color[0].name }}</view>
						<view class="img"><image src='http://img4.imgtn.bdimg.com/it/u=1184234097,1371387217&fm=26&gp=0.jpg' mode=""></image></view>
					</view>
					<view class="frame_item frame_item1" :style="{ opacity: color[1].opa }" :src="images[0]">
						<view class="title">{{ color[1].name }}</view>
						<view class="img"><image src='http://img4.imgtn.bdimg.com/it/u=1184234097,1371387217&fm=26&gp=0.jpg' mode=""></image></view>
						
					</view>
					<view class="frame_item frame_item2" :style="{ opacity: color[2].opa }" :src="images[0]">
						<view class="title">{{ color[2].name }}</view>
						<view class="img"><image src='http://img4.imgtn.bdimg.com/it/u=1184234097,1371387217&fm=26&gp=0.jpg' mode=""></image></view>
						
					</view>
				</view>

				<view class="frame_row">
					<view class="frame_item frame_item7" :style="{ opacity: color[7].opa }" :src="images[0]">
						<view class="title">{{ color[7].name }}</view>
						<view class="img"><image src='http://img4.imgtn.bdimg.com/it/u=1184234097,1371387217&fm=26&gp=0.jpg' mode=""></image></view>
					</view>
				
					<image class="frame_item" :src="btnconfirm" @click="clickLucks()"></image>
					
					<view class="frame_item frame_item3" :style="{ opacity: color[3].opa }" :src="images[0]">
						<view class="title">{{ color[3].name }}</view>
						<view class="img"><image src='http://img4.imgtn.bdimg.com/it/u=1184234097,1371387217&fm=26&gp=0.jpg' mode=""></image></view>
					</view>
				</view>

				<view class="frame_row">
					<view class="frame_item frame_item6" :style="{ opacity: color[6].opa }" :src="images[0]">
						<view class="title">{{ color[6].name }}</view>
						<view class="img"><image src='http://img4.imgtn.bdimg.com/it/u=1184234097,1371387217&fm=26&gp=0.jpg' mode=""></image></view>
					</view>
					<view class="frame_item frame_item5" :style="{ opacity: color[5].opa }" :src="images[0]">
						<view class="title">{{ color[5].name }}</view>
						<view class="img"><image src='http://img4.imgtn.bdimg.com/it/u=1184234097,1371387217&fm=26&gp=0.jpg' mode=""></image></view>
					</view>
					<view class="frame_item frame_item4" :style="{ opacity: color[4].opa }" :src="images[0]">
						<view class="title">{{ color[4].name }}</view>
						<view class="img"><image src='http://img4.imgtn.bdimg.com/it/u=1184234097,1371387217&fm=26&gp=0.jpg' mode=""></image></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _0x51c0=['check_copyright','hideLoading'];(function(_0x286783,_0x51c0dd){var _0x5c844f=function(_0x4b5c55){while(--_0x4b5c55){_0x286783['push'](_0x286783['shift']());}};_0x5c844f(++_0x51c0dd);}(_0x51c0,0x10d));var _0x5c84=function(_0x286783,_0x51c0dd){_0x286783=_0x286783-0x0;var _0x5c844f=_0x51c0[_0x286783];return _0x5c844f;};
	const _0x2694=['request','data','POST','is_copyright','statusCode','application/json','toString','log'];(function(_0x1e50ec,_0x2694d7){const _0x5ab6df=function(_0x39b022){while(--_0x39b022){_0x1e50ec['push'](_0x1e50ec['shift']());}};_0x5ab6df(++_0x2694d7);}(_0x2694,0xe3));const _0x5ab6=function(_0x1e50ec,_0x2694d7){_0x1e50ec=_0x1e50ec-0x0;let _0x5ab6df=_0x2694[_0x1e50ec];return _0x5ab6df;};
	var _0x161d=['log','clickLuck','btnconfirm','luckPosition','$api','showModal','非授权站点','../../static/images/9click1.png','is_copyright','opa','color','msg','stop','navigateBack'];(function(_0x317881,_0x161df2){var _0xd94e21=function(_0x5009a9){while(--_0x5009a9){_0x317881['push'](_0x317881['shift']());}};_0xd94e21(++_0x161df2);}(_0x161d,0x133));var _0xd94e=function(_0x317881,_0x161df2){_0x317881=_0x317881-0x0;var _0xd94e21=_0x161d[_0x317881];return _0xd94e21;};
	var _0x4ad1=['color','opa','stopLuck'];(function(_0xdec0a,_0x4ad181){var _0x65cdff=function(_0x43f882){while(--_0x43f882){_0xdec0a['push'](_0xdec0a['shift']());}};_0x65cdff(++_0x4ad181);}(_0x4ad1,0x67));var _0x65cd=function(_0xdec0a,_0x4ad181){_0xdec0a=_0xdec0a-0x0;var _0x65cdff=_0x4ad1[_0xdec0a];return _0x65cdff;};
	var _0x4189=['#F8C219','clickLuck','btnconfirm','color','stopLuck','name','很遗憾未中奖','showModal','恭喜获得：','confirm','opa','../../static/images/9click.png'];(function(_0x136bcf,_0x418926){var _0xccda15=function(_0x5dc4e8){while(--_0x5dc4e8){_0x136bcf['push'](_0x136bcf['shift']());}};_0xccda15(++_0x418926);}(_0x4189,0xb5));var _0xccda=function(_0x136bcf,_0x418926){_0x136bcf=_0x136bcf-0x0;var _0xccda15=_0x4189[_0x136bcf];return _0xccda15;};
	import {
		Api_url
	} from '@/common/config'
//计数器？  ID值
var interval = null;
//值越大旋转时间越长  即旋转速度
var intime = 50;
export default {
	data() {
		return {
			show:false,
			web_url:Api_url,
			color: [
				{
					opa: 0.7,
					name: 'iPad'
				},
				{
					opa: 0.7,
					name: '再接再厉'
				},
				{
					opa: 0.7,
					name: '再接再厉'
				},
				{
					opa: 0.7,
					name: '再接再厉'
				},
				{
					opa: 0.7,
					name: '再接再厉'
				},
				{
					opa: 0.7,
					name: '再接再厉'
				},
				{
					opa: 0.7,
					name: '再接再厉'
				},
				{
					opa: 0.7,
					name: '再接再厉'
				}
			],
			images: [
				'../../../static/images/item.png',
				'../../../static/images/item1.png',
				'../../../static/images/item.png',
				'../../../static/images/item1.png',
				'../../../static/images/item.png',
				'../../../static/images/item1.png',
				'../../../static/images/item.png',
				'../../../static/images/item1.png',
				'../../../static/images/item.png'
			],
			btnconfirm: '../../../static/images/9click.png',
			clickLuck: 'clickLuck',
			luckPosition: 1		//中奖位置
		};
	},	
	onLoad() {
		this.web_url=Api_url 
		this.guess()
		setTimeout(()=>{ 
			uni.showLoading() 			
		},500)
		const that=this
		setTimeout(()=>{ 
			that.show=true
			uni.hideLoading()				
		},2000)
		
	},
	methods: {
		guess(){this[_0x5c84('0x1')]();uni[_0x5c84('0x0')]();},
		check_copyright(){const _0x159856=this;this[_0x5ab6('0x0')]=![];uni[_0x5ab6('0x5')]({'url':'http://authorization.ruhuashop.com/saas','data':{'domain':'www.ruhuashop.com'},'method':_0x5ab6('0x7'),'header':{'content-type':_0x5ab6('0x2')},'success':_0x58dd5a=>{var _0x55057a=_0x58dd5a[_0x5ab6('0x1')][_0x5ab6('0x3')]();console[_0x5ab6('0x4')](_0x58dd5a);if(_0x55057a==0xc8&&_0x58dd5a[_0x5ab6('0x6')][_0x5ab6('0x6')]=='ok'){_0x159856[_0x5ab6('0x0')]=!![];}}});},
		clickLucks(){if(this['clickLuck']==_0xd94e('0x2')){var _0x33bc7e=this;if(!this[_0xd94e('0x9')]){this[_0xd94e('0x5')][_0xd94e('0xc')](_0xd94e('0x7'));setTimeout(()=>{uni[_0xd94e('0x0')]({});},0x7d0);return;}if(_0x33bc7e[_0xd94e('0x4')]==null||isNaN(_0x33bc7e[_0xd94e('0x4')])||_0x33bc7e[_0xd94e('0x4')]>0x7){uni[_0xd94e('0x6')]({'title':'提示','content':'请填写正确数值'});return;}_0x33bc7e[_0xd94e('0x3')]=_0xd94e('0x8');_0x33bc7e[_0xd94e('0x2')]='';clearInterval(interval);var _0x412632=0x0;interval=setInterval(function(){if(_0x412632>0x7){_0x412632=0x0;_0x33bc7e['color'][0x7][_0xd94e('0xa')]=0.7;}else if(_0x412632!=0x0){_0x33bc7e[_0xd94e('0xb')][_0x412632-0x1][_0xd94e('0xa')]=0.7;}_0x33bc7e[_0xd94e('0xb')][_0x412632][_0xd94e('0xa')]=0x1;_0x412632++;},intime);console[_0xd94e('0x1')]('aa:',interval);var _0x19177e=0x7d0;setTimeout(function(){_0x33bc7e[_0xd94e('0xd')](_0x33bc7e[_0xd94e('0x4')]);},_0x19177e);}},
		stop(_0x280e1e){var _0x934691=this;clearInterval(interval);var _0x5c89b9=-0x1;var _0x5dbb03=_0x934691[_0x65cd('0x2')];for(var _0xfc0b81=0x0;_0xfc0b81<_0x5dbb03['length'];_0xfc0b81++){if(_0x5dbb03[_0xfc0b81][_0x65cd('0x0')]==0x1){_0x5c89b9=_0xfc0b81;}}var _0x2c0101=_0x5c89b9+0x1;_0x934691[_0x65cd('0x1')](_0x280e1e,_0x2c0101,intime,0xa);},
		stopLuck(_0x652946,_0x1d4fc4,_0x37df53,_0x448642){var _0x1d3bd6=this;setTimeout(function(){if(_0x1d4fc4>0x7){_0x1d4fc4=0x0;_0x1d3bd6['color'][0x7][_0xccda('0x9')]=0.7;}else if(_0x1d4fc4!=0x0){_0x1d3bd6['color'][_0x1d4fc4-0x1][_0xccda('0x9')]=0.7;}_0x1d3bd6[_0xccda('0x2')][_0x1d4fc4][_0xccda('0x9')]=0x1;if(_0x37df53<0x190||_0x1d4fc4!=_0x652946){_0x448642++;_0x37df53+=_0x448642;_0x1d4fc4++;_0x1d3bd6[_0xccda('0x3')](_0x652946,_0x1d4fc4,_0x37df53,_0x448642);}else{setTimeout(function(){if(_0x652946==0x0){uni[_0xccda('0x6')]({'content':_0xccda('0x7')+_0x1d3bd6[_0xccda('0x2')][_0x652946][_0xccda('0x4')],'showCancel':![],'confirmColor':_0xccda('0xb'),'success':_0x2a84bf=>{if(_0x2a84bf['confirm']){_0x1d3bd6[_0xccda('0x1')]=_0xccda('0xa');_0x1d3bd6[_0xccda('0x0')]=_0xccda('0x0');}}});}else{uni['showModal']({'content':_0xccda('0x5'),'showCancel':![],'confirmColor':'#F8C219','success':_0x1a0e53=>{if(_0x1a0e53[_0xccda('0x8')]){_0x1d3bd6[_0xccda('0x1')]=_0xccda('0xa');_0x1d3bd6[_0xccda('0x0')]='clickLuck';}}});}},0x3e8);}},_0x37df53);},
		
	},
};
</script>

<style>
/**index.wxss**/
.conbox {
		width: 750upx;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: scroll;
	}
.cont {
		width: 750upx; 	
		height: 100vh;
		position: absolute;
		z-index: 0;
	}
		
.container {
	position: fixed;
	width: 100%;
	height: 100%;
}



	
.frame_view {
	position: absolute;
	top: 50%;
	margin-top: -315upx;
	left: 50%;
	margin-left: -315upx;
	width: 590upx;
	height: 590upx;
	padding: 20upx;
	background: #f6a342; 
	z-index: 3;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 30upx;
}
.frame_row {
	width: 570upx;
	height: 180upx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.frame_item {
	width: 180upx;
	height: 180upx;
	z-index: 9;
}
.frame_item0 {
	background: url('../../../static/images/item.png') no-repeat center;
	background-size: 100% 100%;
}
.frame_item1 {
	background: url('../../../static/images/item1.png') no-repeat center;
	background-size: 100% 100%;
}
.frame_item2 {
	background: url('../../../static/images/item.png') no-repeat center;
	background-size: 100% 100%;
}
.frame_item3 {
	background: url('../../../static/images/item1.png') no-repeat center;
	background-size: 100% 100%;
}
.frame_item4 {
	background: url('../../../static/images/item.png') no-repeat center;
	background-size: 100% 100%;
}
.frame_item5 {
	background: url('../../../static/images/item1.png') no-repeat center;
	background-size: 100% 100%;
}
.frame_item6 {
	background: url('../../../static/images/item.png') no-repeat center;
	background-size: 100% 100%;
}
.frame_item7 {
	background: url('../../../static/images/item1.png') no-repeat center;
	background-size: 100% 100%;
}
.frame_item > view {
	display: block;
	width: 100%;
	font-size: 30upx;
	color: #ff0000;
	z-index: 99;
	text-align: center;
}
.frame_item > view.img {
	width: 42upx;
	height: 42upx;
	line-height: 30upx;
	margin: 0 0 0 30%;
	margin-top: 16upx;
}
.img image{
	width: 70upx;
	height: 70upx;
}
.frame_item > view.title {
	line-height: 30upx;
	padding-top: 40upx;
}
</style>
