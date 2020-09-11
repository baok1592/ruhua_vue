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
			luckPosition: 1	//中奖位置
		};
	},	
	onLoad() { 
		//uni.showLoading() 
		const that=this
		this.web_url=Api_url 
		//this.play() 
		that.is_play = true
		that.show=true
		// setTimeout(()=>{ 
		// 	uni.hideLoading()
		// 	that.show=true				
		// },2000)
		
	},
	methods: { 
		play() {
			const that = this
			this.is_play = false
			uni.request({
				url: 'http://authorization.ruhuashop.com/saas',
				data: {
					domain: Api_url
				},
				method:'POST',
				header: {
					'content-type': 'application/json' 
				},
				success: (res) => {
					var res_code = res.statusCode.toString();  
					if(res_code == 200 && res.data.data == 'ok'){
						that.is_play = true
					}  
					that.show=true		
					uni.hideLoading();
				},
			});
		},
		//点击抽奖按钮
		clickLucks() {
			if (this.clickLuck == 'clickLuck') {
				var e = this;
				if(!this.is_play){
					this.$api.msg("非授权站点")
					setTimeout(()=>{
						uni.navigateBack({						
					})
					},2000)
					return
				}
				//判断中奖位置格式
				if (e.luckPosition == null || isNaN(e.luckPosition) || e.luckPosition > 7) {
					uni.showModal({
						title: '提示',
						content: '请填写正确数值'
					});
					return;
				}

				//设置按钮不可点击
				e.btnconfirm = '../../../static/images/9click1.png';
				e.clickLuck = '';

				//清空计时器
				clearInterval(interval);
				var index = 0;
				//循环设置每一项的透明度,开始转动
				//interval是setInterval的ID值，不是计数器
				interval = setInterval(function() {
					if (index > 7) {
						index = 0;
						e.color[7].opa = 0.5;
					} else if (index != 0) {
						e.color[index - 1].opa = 0.5;
					}
					e.color[index].opa = 1;
					index++;
				}, intime);		//intime 旋转速度
				console.log("aa:",interval)
				//模拟网络请求时间  设为两秒
				var stoptime = 2000; 
				setTimeout(function() {
					e.stop(e.luckPosition);
				}, stoptime);
			}
		},
		//停止旋转
		stop(which) {
			var e = this;
			//清空计数器
			clearInterval(interval);
			//初始化当前位置
			var current = -1;
			var color = e.color;
			for (var i = 0; i < color.length; i++) {
				if (color[i].opa == 1) {
					current = i;
				}
			}
			//下标从1开始
			var index = current + 1;
			e.stopLuck(which, index, intime, 10);
		},
		//停止位置
		stopLuck(which, index, time, splittime) {
			var e = this;
			//值越大出现中奖结果后减速时间越长
			setTimeout(function() {
				//重置前一个位置
				if (index > 7) {
					index = 0;
					e.color[7].opa = 0.5;
				} else if (index != 0) {
					e.color[index - 1].opa = 0.5;
				}
				//当前位置为选中状态
				e.color[index].opa = 1;
				//如果旋转时间过短或者当前位置不等于中奖位置则递归执行
				//直到旋转至中奖位置
				if (time < 400 || index != which) {
					//越来越慢
					splittime++;
					time += splittime;
					//当前位置+1
					index++;
					e.stopLuck(which, index, time, splittime);
				} else {
					//1秒后显示弹窗
					setTimeout(function() {
						if (which == 0) {
							//中奖
							uni.showModal({
								content: '恭喜获得：' + e.color[which].name,
								showCancel: false,
								confirmColor: '#F8C219',
								success: res => {
									if (res.confirm) {
										//设置按钮可以点击
										e.btnconfirm = '../../../static/images/9click.png';
										e.clickLuck = 'clickLuck'; 
									}
								}
							});
						} else {
							//未中奖
							uni.showModal({
								content: '很遗憾未中奖',
								showCancel: false,
								confirmColor: '#F8C219',
								success: res => {
									if (res.confirm) {
										//设置按钮可以点击
										e.btnconfirm = '../../../static/images/9click.png';
										e.clickLuck = 'clickLuck'; 
									}
								}
							});
						}
					}, 1000);
				}
			}, time);
		},
		
		//可以删除。进入时，自动旋转表演
		/* loadAnimation: function() {
			console.log("abc",interval)
			var e = this;
			var index = 0;
			if (interval == null) {
				interval = setInterval(function() {
					if (index > 7) {
						index = 0;
						e.color[7].opa = 0.5;
					} else if (index != 0) {
						e.color[index - 1].opa = 0.5;
					}
					e.color[index].opa = 1;
					index++;
				}, 1000);
			}
		} */
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
