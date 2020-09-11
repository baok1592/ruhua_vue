<template>
	<view>
		<tui-bottom-popup :show="popupShow" @close="hidePopup">
			<view class="tui-popup-box">
				<view class="tui-product-box tui-padding">
					<img :src="getimg+list.imgs" class="tui-popup-img" />
					<view class="tui-popup-price">
						<template v-if="list.discount != '[]'">
							<view class="tui-amount tui-bold">￥{{price}}</view>
						</template>
						<template v-else>
							<view class="tui-amount tui-bold">￥{{price}}</view>
						</template>
		
						<view class="tui-number"><text v-if="list.sku_name">{{list.sku_name}}</text> <text>库存：{{list.stock}}</text>
						</view>
					</view>
				</view>
		
				<scroll-view scroll-y class="tui-popup-scroll">
					<view class="tui-scrollview-box">
						<template v-for="(item,index) of sku_arr.tree">
							<view class="tui-bold tui-attr-title">{{item.k}}</view>
							<view class="tui-attr-box">
								<view :class="list.sku_arr.initialSku['s'+(index+1)]==i.id?'tui-attr-item-active':'tui-attr-item'" v-for="(i,j) of item.v"
								 @click="xz_sku_cs('s'+(index*1+1),i.id)">
									<view class="guige_03_01">
										{{i.name}}
									</view>
								</view>
							</view>
						</template>
		
						<view class="tui-number-box tui-bold tui-attr-title">
							<view class="tui-attr-title">数量</view>
							<tui-numberbox :max="list.stock*1" :min="1" :value="num" @change="sku_change_num"></tui-numberbox>
						</view>
		
					</view>
				</scroll-view>
				<view class="tui-operation tui-operation-right tui-right-flex tui-popup-btn" style="padding-left: 10px;padding-right: 10px;">
					<!-- <tui-button v-if="!list.pt.price" type="red" tui-button-class="tui-btn-equals" shape="circle" size="mini" class="tui-flex-1"
					 @click="sure">确定</tui-button> -->
					<tui-button type="warning" tui-button-class="tui-btn-equals" shape="circle" size="mini" class="tui-flex-1" @click="sure">确定</tui-button>
				</view> 
				<view class="tui-icon tui-icon-close-fill tui-icon-close" style="color: #999;font-size:20px" @tap="hidePopup"></view>
				<!-- <tui-icon name="close-fill" color="#999" class="tui-icon-close" size="20" @tap="hidePopup"></tui-icon> -->
			</view>
		</tui-bottom-popup>
	</view>
</template>

<script>
	import tuiButton from "@/components/button/button"
	import tuiNumberbox from "@/components/numberbox/numberbox"
	import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
	export default{
		components:{
			tuiBottomPopup,
			tuiNumberbox,
			tuiButton
		},
		data(){
			return{
				getimg: this.$getimg,
			}
		},
		props:['popupShow','list','price','sku_arr','num'],
		
		watch:{
			popupShow(e){
				console.log(e)
				this.popupShow = e
			}
		},
		created() {
			console.log(this.sku_arr)
		},
		methods:{
			xz_sku_cs(ik, iv){  
				this.sku_arr = this.list 
				this.$root.xz_sku_cs(ik, iv)
			},
			sure(){
				this.$emit('sure')
			},
			sku_change_num(e){
				this.$emit('sku_change_num',e)
			},
			hidePopup(){
				this.$emit('hidePopup')
			}
		}
	}
</script>

<style lang="less">
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
	/*底部选择弹层*/
	.tui-padding {
		padding: 0 30upx;
		box-sizing: border-box;
	}
	.tui-popup-class {
		border-top-left-radius: 24upx;
		border-top-right-radius: 24upx;
		padding-bottom: env(safe-area-inset-bottom);
	}
	
	.tui-popup-box {
		position: relative;
		padding: 30upx 0 100upx 0;
	}
	
	.tui-popup-btn {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	
	.tui-popup-btn .tui-btn-class {
		width: 90% !important;
		display: block !important;
		font-size: 28upx !important;
	}
	
	.tui-icon-close {
		position: absolute;
		top: 30upx;
		right: 30upx;
	}
	
	.tui-product-box {
		display: flex;
		align-items: flex-end;
		font-size: 24upx;
		padding-bottom: 30upx;
	}
	
	.tui-popup-img {
		height: 200upx;
		width: 200upx;
		border-radius: 24upx;
		display: block;
	}
	
	.tui-popup-price {
		padding-left: 20upx;
		padding-bottom: 8upx;
	}
	
	.tui-amount {
		color: #ff201f;
		font-size: 36upx;
	}
	
	.tui-number {
		font-size: 24upx;
		line-height: 24upx;
		padding-top: 12upx;
		color: #999;
	}
	
	.tui-popup-scroll {
		height: 600upx;
		font-size: 26upx;
	}
	
	.tui-scrollview-box {
		padding: 0 30upx 60upx 30upx;
		box-sizing: border-box;
	}
	
	.tui-attr-title {
		padding: 10upx 0;
		color: #333;
	}
	
	.tui-attr-box {
		font-size: 0;
		padding: 20upx 0;
	}
	
	.tui-attr-item {
		max-width: 100%;
		min-width: 200upx;
		height: 64upx;
		display: -webkit-inline-flex;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: #f7f7f7;
		padding: 0 26upx;
		box-sizing: border-box;
		border-radius: 32upx;
		margin-right: 20upx;
		margin-bottom: 20upx;
		font-size: 26upx;
	}
	
	.tui-attr-item-active {
		max-width: 100%;
		min-width: 200upx;
		height: 64upx;
		display: -webkit-inline-flex;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: #f7f7f7;
		padding: 0 26upx;
		box-sizing: border-box;
		border-radius: 32upx;
		border: 1px solid #E54D42;
		margin-right: 20upx;
		margin-bottom: 20upx;
		font-size: 26upx;
		color: #E54D42;
	}
	
	.tui-attr-active {
		background: #fcedea !important;
		color: #e41f19;
		font-weight: bold;
		position: relative;
	}
	
	.tui-attr-active::after {
		content: "";
		position: absolute;
		border: 1upx solid #e41f19;
		width: 100%;
		height: 100%;
		border-radius: 40upx;
		left: 0;
		top: 0;
	}
	
	.tui-number-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20upx 0 30upx 0;
		box-sizing: border-box;
	}
	
	.pro-content {
		margin-top: 30upx;
		background: #fff;
		padding: 0 2% 40upx;
	}
	
	/*底部选择弹层*/
</style>
