<template>
		<view class="tui-operation">
			<view class="tui-operation-left tui-col-5 ">
				<view class="tui-operation-item pad" hover-class="opcity" :hover-stay-time="150" @click="jump_tohome">
					<tui-icon name="shop" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">首页</view>
				</view>
				<view class="tui-operation-item " hover-class="opcity" :hover-stay-time="150" v-if="cart_switch"  @click="jump_tocart">
					<tui-icon name="cart" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">购物车</view>
					<tui-badge type="danger" size="small" v-if="shop_car_num>0">{{shop_car_num}}</tui-badge>
				</view>
				<view class="tui-operation-item pad" hover-class="opcity" :hover-stay-time="150" @click="collecting">
					<tui-icon :name="collected?'like-fill':'like'" :size="22" :color=" collected?'#ff201f':'#333' "></tui-icon>
					<view class="tui-operation-text tui-scale-small" :style="collected?'color: #ff201f;':''">收藏</view>
				</view>
				<view style="width: 20px;"></view>
			</view>
			<view class="tui-operation-right tui-right-flex tui-col-7 tui-btnbox-4">
				<view class="tui-flex-1" v-if="cart_switch ">
					<tui-button type="danger" shape="circle" size="mini" @click="showPopup('car')">加入购物车</tui-button>
				</view>

				<view class="tui-flex-1">
					<tui-button type="warning" shape="circle" size="mini" @click="showPopup('shopping')">立即购买</tui-button>
				</view>
			</view>
		</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiBadge from "@/components/badge/badge"
	import tuiButton from "@/components/button/button"
	export default{
		components:{
			tuiIcon,
			tuiBadge,
			tuiButton
		},
		data(){
			return{
				switch_list:'',
				cart_switch:false
			}
		}, 
		props:{
			opcity:Number,
			shop_car_num:Number,
			collected:Boolean,
			list:''
		},
		onLoad(){

		},
		created() {
			console.log(this.list,this.shop_car_num)
			// this.prmSwitch()
			this.check_switch();

		},
		methods:{
			async prmSwitch(){
				this.switch_list=await this.promise_switch.then(res=>{
					return res;
				})
			},
			async check_switch(){
				await this.prmSwitch()
				this.cart_switch = this.switch_list.is_cart?true:false
				console.log("bottom",this.cart_switch)
			},
			showPopup(e){
				this.$emit('showPopup',e)
			},
			jump_tohome() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			collecting(){
				this.$emit('collecting')
			},
			jump_tocart() {
				uni.switchTab({
					url: '../../cart/cart'
				})
			},
			showPopupxx(){
				this.$emit('showPopupxx')
			}
		}
	}
</script>

<style lang="less">
	
	/*底部操作栏*/
	
	.tui-col-7 {
		width: 58.33333333%;
	}
	
	.tui-col-5 {
		width: 41.66666667%;
	}
	
	.tui-operation {
		width: 100%;
		height: 100upx;
		/* box-sizing: border-box; */
		background: rgba(255, 255, 255, 0.98);
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 10;
		bottom: 0;
		left: 0;
		padding-bottom: env(safe-area-inset-bottom);
	}
	
	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}
	
	.tui-operation::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.tui-operation-left {
		display: flex;
		align-items: center;
	}
	
	.tui-operation-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		/* position: relative; */
	}
	
	.tui-operation-text {
		font-size: 22upx;
		color: #333;
	}
	
	.tui-opacity {
		opacity: 0.5;
	}
	
	.tui-scale-small {
		transform: scale(0.9);
		transform-origin: center center;
	}
	
	.tui-operation-right {
		height: 100upx;
		/* box-sizing: border-box; */
		padding-top: 0;
	}
	
	.tui-right-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.tui-btnbox-4 .tui-btn-class {
		width: 90% !important;
		display: block !important;
		font-size: 28upx !important;
	}
	
	.tui-operation .tui-badge-class {
		position: absolute;
		top: -6upx;
		/* #ifdef H5 */
		transform: translateX(50%)
			/* #endif  */
	}
	
	.tui-flex-1 {
		flex: 1;
	}
	
	/*底部操作栏*/
</style>
