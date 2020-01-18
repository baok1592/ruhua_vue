<template>
	<view class="j">
		<view class="head">
			<img src="../../../imgs/heika.jpg"></img>
		</view>
		<view class="taoc">
			<view :class="xz==1?'zhong':'tc_01'"  @click="xuan(1)">
				<view class="tc_01_1">单月体验卡</view>
				<view class="tc_01_2">¥ <span>28</span></view>
			</view>
			<view :class="xz==2?'zhong':'tc_01'" @click="xuan(2)">
				<view class="tc_01_1">半年卡</view>
				<view class="tc_01_2">¥ <span>169</span></view>
			</view>
			<view :class="xz==3?'zhong':'tc_01'" @click="xuan(3)">
				<view class="tc_01_1">尊享年卡</view>
				<view class="tc_01_2">¥ <span>279</span></view>
				<view class="zhe">限时8折</view>
			</view>
		</view>
		<view class="btn">立即购买一年卡 ¥ 279</view>
		<view class="quan">
			<view class="q_tit">8大超值会员权益</view>
			<view class="q_qy" v-for="(item,index) of list" :key="index">
				<uni-icon type="spinner" size="20" color="#E09A39"></uni-icon>
				<span>1元充20话费</span>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni/uni-icon/uni-icon.vue"
	export default {
		data() {
			return {
				xz:'3',
				list:[1,2,3]
			};
		},
		components: {uniIcon},
		methods:{
			xuan(e){
				this.xz=e
			}
		},
		onPullDownRefresh() {
			//this._load()
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style lang="scss">
.j{font-size: 14px;
	.head{background: url(../../../imgs/00.jpg) no-repeat ;background-size: 100% 100%;height: 250px;width: 100%;color: #E8B374;
	box-sizing: border-box;padding: 55px 20px 0;
		img{width: 100%;height: 168px;}
		.head_01{display: flex;justify-content: space-between;font-size: 15px;padding: 0 4px 40px 15px;}
		.head_02{display: flex;
			.head_02_1{line-height: 40px;width: 25%;text-align: center;}
		}
		
	}
	.taoc{display: flex;justify-content: space-around;margin: 25px 10px;
		.tc_01{border: 1px solid #DCDCDC;border-radius: 5px;text-align: center;width: 28%;position: relative;
			.tc_01_1{border-bottom: 1px solid #F2F2F2;padding: 8px 0;color: #96713F;}
			.tc_01_2{padding: 15px 0;color: #7F5214;
				span{font-size: 24px;font-weight: 600;}
			}
			.zhe{position: absolute;top: -20px;left: 50px;background: linear-gradient(to right, #E22208, #FF9E6A);color: #fff;
			padding: 3px 8px;border-top-left-radius:15px;border-bottom-right-radius: 15px;white-space: nowrap;font-size: 12px;
			}
		}
		.zhong{border: 1px solid #FFC476;border-radius: 5px;text-align: center;width: 28%;position: relative;
			.tc_01_1{background-color: #FFCB85;border-bottom: 1px solid #FFCB85;padding: 8px 0;color: #96713F;}
			.tc_01_2{background-color: #FFDCAD;padding: 15px 0;color: #7F5214;
				span{font-size: 24px;font-weight: 600;}
				}
			.zhe{position: absolute;top: -20px;left: 50px;background: linear-gradient(to right, #E22208, #FF9E6A);color: #fff;
			padding: 3px 8px;border-top-left-radius:15px;border-bottom-right-radius: 15px;white-space: nowrap;font-size: 12px;
			}
		}
	}
	.btn{margin: 20px 25px;background: linear-gradient(to bottom, #E8BE86, #D88D28);color: #fff;text-align: center;height: 45px;line-height: 45px;
	border-radius: 30px;font-size: 16px;border: 1px solid #EBB163;margin-bottom: 40px;
	}
	.quan{margin: 10px;
		.q_tit{border-left: 2px solid #E09A39;padding-left: 10px;font-size: 15px;font-weight: 600;margin-bottom: 10px;}
		.q_qy{padding: 10px;
			span{padding-left: 10px;}
		}
	}
}
</style>
