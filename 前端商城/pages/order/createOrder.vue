<template>
	<view>
		<!-- 地址 -->
		<navigator url="/pages/address/address?source=1" class="address-section">
			<view class="order-content">
				<text class="yticon icon-shouhuodizhi"></text>
				<view class="cen" v-if="address">
					<view class="top">
						<text class="name">{{address.name}}</text>
						<text class="mobile">{{address.mobile}}</text>
					</view>
					<text class="address">{{address.province}} {{address.city}}{{address.county}}</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>


		</navigator>

		<view class="goods-section">
			<!-- <view class="g-header b-b">
				<image class="logo" src="http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png"></image>
				<text class="name">西城小店铺</text>
			</view> -->
			<!-- 商品列表 -->
			<view class="g-item" v-for="(item,index) of buy_data" :key="index">
				<image :src="getimg + item.imgs"></image>
				<view class="right">
					<text class="title clamp">{{item.goods_name}}</text>
					<text class="spec">{{item.sku_name?item.sku_name:''}}</text>
					<view class="price-box">
						<text class="price">￥{{item.price}}</text>
						<!-- <text class="price">￥{{item.price}}</text> -->
						<text class="number">x {{item.num}}</text>
					</view>
				</view>
			</view>

		</view>
		<!-- 优惠明细 -->
		<view class="yt-list">
			<view class="yt-list-cell b-b" @click="toggleMask('show')">
				<view class="cell-icon">
					券
				</view>
				<text class="cell-tit clamp">优惠券</text>
				<text class="cell-tip active">
					{{coupon_text}}
				</text>
				<text class="cell-more wanjia wanjia-gengduo-d"></text>
			</view>
			<!-- <view class="yt-list-cell b-b">
				<view class="cell-icon hb">
					减
				</view>
				<text class="cell-tit clamp">商家促销</text>
				<text class="cell-tip disabled">暂无可用优惠</text>
			</view> -->
		</view>


		<!-- 金额明细 -->
		<view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">商品金额</text>
				<text class="cell-tip">￥{{goods_money}}</text>
			</view>
			<view class="yt-list-cell b-b" v-if="coupon_money>0">
				<text class="cell-tit clamp">优惠金额</text>
				<text class="cell-tip red">-￥{{coupon_money}}</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">运费</text>
				<text class="cell-tip" v-if="yunfei_money">￥ {{yunfei_money}}</text>
				<text class="cell-tip" v-else>免运费</text>
			</view>
			<view class="yt-list-cell b-b" @click="jump_invoices">
				<text class="cell-tit clamp">发票</text>
				<text class="cell-tip">不开发票</text>
				<text class="yticon icon-you"></text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">备注</text>
				<input class="desc" type="text" v-model="obj.msg" placeholder="请填写备注信息" placeholder-class="placeholder" />
			</view>
		</view>

		<!-- 底部 -->
		<view class="footer">
			<view class="price-content">
				<text>实付款</text>
				<text class="price-tip">￥</text>
				<text class="price">{{pay_money}}</text>
			</view>
			<text class="submit" @click="submit">提交订单</text>
		</view>

		<!-- 优惠券面板 -->
		<view class="mask" :class="maskState===0 ? 'none' : maskState===1 ? 'show' : ''" @click="toggleMask">
			<view class="mask-content">
				<!-- 优惠券页面，仿mt -->
				<scroll-view class="scroll" scroll-y>
					<view class="coupon-item" v-for="(item,index) in couponList" :key="index">
						<block v-if="item.status == 0">
							<view class="con">
								<view class="left">
									<text class="title">满{{item.full}}减{{item.reduce}}</text>
									<!-- <text class="time"></text> -->
								</view>
								<view class="right">
									<text class="price">{{item.reduce}}</text>
									<!-- <text>满{{item.full}}可用</text> -->
								</view>

								<view class="circle l"></view>
								<view class="circle r"></view>
							</view>
							<view class="use" style="display: flex;justify-content: space-between;">
								<text class="tips">有效期至{{item.end_time}}</text>
								<view class="tips2" @click="to_use(index)">去使用</view>
							</view>
						</block>
					</view>
				</scroll-view>


				<view class="btn" @click="cancel_use">不使用优惠券</view>
			</view>
		</view>

		<view class="tan" v-if="xieyi">
			<div class="black" @click="xieyi=false">
				<div class="container"></div>
			</div>
			<view class="t_con">

				<view class="t_c_con">
					<rich-text :nodes="content"></rich-text>
				</view>

				<view class="t_c_btn">
					<view class="t_c_btn_01 bg_gery" @click="xieyi=false">不同意</view>
					<view class="t_c_btn_01 bg_red" @click="xieyi=false">同意</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '',
				xieyi: false,
				sku_id: '',
				head: '',
				is_kai: 0,
				pid: '',
				is_pt: 0,
				pt_data: '',
				coupon_id: 0,
				save_cache: {},
				order_id: 0,
				getimg: this.$getimg,
				maskState: 0, //优惠券面板显示状态
				desc: '', //备注
				payType: 1, //1微信 2支付宝
				yunfei_money: 0, //运费
				couponList: [],
				addressData: {},
				state: '',
				buy_data: '',
				address: '',
				paying: '', //防止多次提交订单
				coupon_text: '选择优惠券',
				coupon_money: 0, //优惠金额				
				obj: {
					msg: "",
					order_from: "xcx",
					payment_type: "wx",
					total_price: "",
					shoping_price: "",
					coupon_price: "",
					coupon_id: 0,
					discount: ""
				}

			}
		},
		onLoad(option) {
			this.state = option.state
			if (option.state == 'buy') {
				let buy_data = uni.getStorageSync('buy')
				this.buy_data = buy_data
			}
			if (option.state == 'car') {
				let buy_data = uni.getStorageSync('cart')
				let arr = []
				let cache = {}
				let x = 0
				for (let k in buy_data) {
					const v = buy_data[k]
					console.log(k, v)
					if (v.radio) {
						arr[x] = v //购物车中选中的商品
						x++
					} else {
						cache[k] = v //购物车未选中的商品 
					}
				}
				this.buy_data = arr
				this.save_cache = cache
			}
			if (this.buy_data[0].goods_name == "如花商城商业版-授权") {
				this.xieyi = true
			}
			let id = uni.getStorageSync('pid')
			if (id) {
				this.pid = id
				console.log(id)
				this.is_pt = 1
				this.get_pid(id)
			}
			this.head = uni.getStorageSync('userInfo')
			this.is_kai = uni.getStorageSync('is_kai')
			uni.removeStorageSync('is_kai')
			console.log('onLoad', this.buy_data)
			this._load()
			//商品数据s
			//let data = JSON.parse(option.data);
			//console.log(data);
		},
		onShow() {
			this.$api.http.get('address/get_default_address').then(res => {
				this.address = res.data
			})
		},
		computed: {
			//商品金额
			goods_money() {
				const buy = this.buy_data
				let total = 0
				for (let k in buy) {
					const v = buy[k]
					total += v.price * v.num
				}
				console.log('总价', total)
				return total;
			},
			//订单应付金额
			pay_money() {
				return this.goods_money + this.yunfei_money - this.coupon_money;
			}
		},
		methods: {
			_load() {
				console.log('load')
				this.$api.http.get('coupon/user/get_coupon').then(res => {
					this.couponList = res.data
				})
				this.get_yunfei() 
			},
			jump_invoices() {
				uni.navigateTo({
					url: '/pages/invoices/invoices',
				});
			},
			get_pid(id) {
				this.$api.http.get('pt/get_one_item', {
					id: id
				}).then(res => {
					this.pt_data = res.data
					uni.removeStorageSync('pid');
				})
			},
			//获取运费
			get_yunfei() {
				console.log('get_yunfei', this.buy_data)
				const buy_data = this.buy_data
				let obj = []
				for (let k in buy_data) {
					const v = buy_data[k]
					obj[k] = {}
					obj[k]['goods_id'] = v.goods_id
					obj[k]['num'] = v.num
					console.log('v:', obj)
				}
				console.log('get_obj', obj)
				this.$api.http.post('product/get_shipment_price', obj).then(res => {
					this.yunfei_money = res.data
				})
			},
			//显示优惠券面板
			toggleMask(type) {
				let timer = type === 'show' ? 10 : 300;
				let state = type === 'show' ? 1 : 0;
				this.maskState = 2;
				setTimeout(() => {
					this.maskState = state;
				}, timer)
			},
			//使用优惠券
			to_use(index) {
				this.maskState = 0
				this.coupon_id = this.couponList[index].id ? this.couponList[index].id : 0
				const reduce = this.couponList[index].reduce
				this.coupon_money = reduce
				this.coupon_text = '已优惠' + reduce + '元'
			},
			//取消使用优惠券
			cancel_use() {
				this.maskState = 0
				this.coupon_id = 0
				this.coupon_money = 0
				this.coupon_text = '选择优惠券'
			},
			numberChange(data) {
				this.number = data.number;
			},
			changePayType(type) {
				this.payType = type;
			},
			//设置订单数据
			set_order_data() {
				console.log(this.buy_data)
				if (this.buy_data[0].discount != '[]') {
					this.obj.discount = 1
				} else {
					this.obj.discount = 0
				}
				let obj = this.obj
				obj.total_price = this.pay_money
				obj.shoping_price = this.yunfei_money
				obj.coupon_price = this.coupon_money
				obj.coupon_id = this.coupon_id
				obj.goods_id = this.buy_data[0].goods_id,
					obj.price = this.buy_data[0].price,
					obj.num = this.buy_data[0].num,
					obj.order_from = 0
				obj.payment_type = 'xcx'


				if (this.buy_data[0].pt) {
					obj.is_captain_sign = 1
				}
				this.is_item = uni.getStorageSync('is_item')
				if (this.is_item) {
					obj.item_id = this.pt_data.id
					uni.removeStorageSync('is_item')
				}
				let pro = this.buy_data
				let sku = {}
				for (let k in pro) {
					const v = pro[k]
					let name = v.goods_id
					if (v.sku) {
						name = v.goods_id + '-' + v.sku.id
						this.sku_id = v.sku.id
					}
					sku[name] = v
					sku[name].sku_id = 0
					if (v.sku) {
						sku[name].sku_id = v.sku.id
					}
					delete sku[name].radio
					delete sku[name].sku
					delete sku[name].sku_name
					delete sku[name].goods_name
				}
				obj.json = sku
				console.log('obj', obj)
				return obj;
			},
			check_sub_data() {
				if (!this.address) {
					this.$api.msg('未填写地址')
					return;
				}
				if (this.paying) {
					return;
				}
				let url = ''
				//#ifdef MP-WEIXIN || APP-PLUS
				url = 'order/create'
				//#endif
				//#ifdef H5
				url = 'order/create_cart'
				//#endif
				console.log('url:', url)
				return url
			},
			//创建订单
			async submit() {
				/* if (this.buy_data[0].pindan_data.length > 0) {
					uni.navigateTo({
						url: '../invite/invite?id=' + this.pid
					})
				} */
				let is_pin = uni.getStorageSync('is_item')
				uni.removeStorageSync('is_item')
				const url = this.check_sub_data()
				if (!url) {
					return;
				}
				let obj = this.set_order_data()

				console.log('submit:', obj)
				/* let obj = {  
					goods_id: this.buy_data[0].goods_id,
					price: this.buy_data[0].price,
					num: this.buy_data[0].num,
					sku_id: this.sku_id,
					msg: order_data.msg,
					order_from: 0,
					payment_type: 'xcx',
					total_price: order_data.total_price,
					shoping_price: order_data.shoping_price,
				} */
				if (this.sku_id == '') {
					obj.sku_id = 0
				} else {
					obj.sku_id = this.sku_id
				}
				let order_json = ''



				//普通下单
				order_json = await this.$api.http.post(url, obj).then(res => {
					return res
				})

				this.paying = true
				console.log("创建订单：", order_json)
				if (!order_json.data) {
					this.$api.msg(order_json.msg)
					setTimeout(() => {
						uni.navigateBack({})
					}, 1000);
					return;
				}


				if (this.state == 'buy') {
					uni.removeStorageSync('buy')
				} else {
					uni.removeStorageSync('cart')
					uni.setStorageSync('cart', this.save_cache)
				}
				const order_id = order_json.data

				this.order_id = order_id

				//#ifdef MP-WEIXIN
				const pay_data = await this.$api.http.post('order/pay/pre_order', {
					id: order_id
				}).then(res => {
					console.log('pay:', res)
					return res
				})
				await this.pay(pay_data)
				//#endif

				//#ifdef APP-PLUS 
				console.log('id:', order_id)
				const app_data = await this.$api.http.post('order/pay/pre_app', {
					id: order_id
				}).then(res => {
					console.log('app-pay:', res)
					return res
				})
				console.log('获取到app支付参数：', app_data)
				await this.app_pay(app_data)
				//#endif


				//#ifdef H5
				this.wxPay(order_id)
				//#endif
			},
			//公众号支付
			wxPay(json) {
				if (typeof WeixinJSBridge == "undefined") {
					if (document.addEventListener) {
						document.addEventListener("WeixinJSBridgeReady", jsApiCall, false);
					} else if (document.attachEvent) {
						document.attachEvent("WeixinJSBridgeReady", jsApiCall);
						document.attachEvent("onWeixinJSBridgeReady", jsApiCall);
					}
				} else {
					this.jsApiCall(json);
				}
			},
			jsApiCall(json) {
				const that = this;
				WeixinJSBridge.invoke("getBrandWCPayRequest", json, function(res) {
					WeixinJSBridge.log('a:', res.err_msg);
					if (res.err_msg == "get_brand_wcpay_request:ok") {
						that.$api.msg("支付成功!");
						uni.navigateTo({
							url: '../invite/invite?id=' + that.pid
						})
						return
					} else if (res.err_msg == "get_brand_wcpay_request:cancel") {
						that.$api.msg("取消支付");
					} else {
						that.$api.msg("支付失败");
					}
					setTimeout(() => {
						uni.redirectTo({
							url: '/pages/order/order'
						});
					}, 1000);
				});
			},
			//小程序支付
			pay(data) {
				const order_id = this.order_id
				uni.requestPayment({
					provider: "wxpay",
					timeStamp: data.timeStamp,
					nonceStr: data.nonceStr,
					package: data.package,
					signType: data.signType,
					paySign: data.paySign,
					success: function(res) {
						console.log('success:', res);
						uni.redirectTo({
							url: '/pages/user/myorder/myorder?id=' + order_id
						})
					},
					fail: function(err) {
						console.log('fail:' + JSON.stringify(err));
						uni.redirectTo({
							url: '/pages/user/myorder/myorder?id=' + order_id
						})
					}
				});
			},
			//APP支付
			app_pay(data) {
				const order_id = this.order_id
				uni.requestPayment({
					provider: "wxpay",
					orderInfo: JSON.stringify(data),
					success: function(res) {
						console.log('success:', res);
						uni.redirectTo({
							url: '/pages/user/myorder/myorder?id=' + order_id
						})
					},
					fail: function(err) {
						console.log('fail:' + JSON.stringify(err));
						uni.redirectTo({
							url: '/pages/user/myorder/myorder?id=' + order_id
						})
					}
				});
			},
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-bottom: 100upx;
	}

	.black {
		.container {
			background-color: #000000;
			position: fixed;
			top: 0;
			opacity: 0.6;
			width: 100%;
			height: 100%;
			z-index: 999;
		}

	}

	.t_con {
		background-color: #fff;
		position: fixed;
		top: 120px;
		left: 10%;
		width: 80%;
		padding: 20px;
		border-radius: 5px;
		z-index: 1999;
		overflow: hidden;

		.t_c_tit {
			font-size: 16px;
			text-align: center;
			font-weight: 600;
			padding-bottom: 10px;
		}

		.t_c_con {
			font-size: 14px;
			height: 280px;
			overflow-y: scroll;
			width: 100%;
			overflow-x: hidden;
		}

		.t_c_more {
			text-align: center;
			color: #868686;
			padding: 15px 0 10px;
			font-size: 14px;

			span {
				color: #4B73CE;
			}
		}

		.t_c_btn {
			display: flex;
			justify-content: space-between;

			.t_c_btn_01 {
				height: 35px;
				line-height: 35px;
				color: #fff;
				border-radius: 20px;
				text-align: center;
				width: 47%;
				font-size: 14px;
				margin-top: 10px;
			}

			.bg_red {
				background-color: #429CE3;
			}

			.bg_gery {
				background-color: #CCCCCC;
			}
		}
	}

	.tuanzhang {
		background: #fff;
		margin-top: 10px;
		padding: 10px;
		display: flex;
		font-size: 12px;

		.tz-l {
			width: 30px;

			input {
				border: 1px solid #000;
			}
		}

		.tz-m {
			flex-grow: 1;
			color: #FF8D42;
			padding-top: 2px;
		}

		.tz-r {
			padding-top: 3px;
		}
	}

	.jr {
		padding: 10px;
		font-size: 14px;

		.jr_tit {
			font-weight: 600;
			text-align: center;
			padding-bottom: 10px;
		}

		.jr_img {
			display: flex;
			justify-content: center;

			.img_01 {
				position: relative;
				border-radius: 50%;
				margin: 0 7px;
				width: 44px;
				height: 44px;

				img {
					width: 40px;
					height: 40px;
					border-radius: 50%;
				}

				.zhicheng {
					position: absolute;
					bottom: -5px;
					left: 0;
					background-color: #E93B3D;
					color: #fff;
					font-size: 12px;
					border-radius: 10px;
					width: 40px;
					text-align: center;
				}
			}

			.img_01_border {
				border: 2px solid #E93B3D;
			}

			.img_01_borderx {
				border: 2px dashed #E6E6E6;
				text-align: center;
				line-height: 44px;
				color: #E6E6E6;
			}
		}
	}

	.address-section {
		padding: 30upx 0;
		background: #fff;
		position: relative;

		.order-content {
			display: flex;
			align-items: center;
		}

		.icon-shouhuodizhi {
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 90upx;
			color: #888;
			font-size: 44upx;
		}

		.cen {
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 28upx;
			color: $font-color-dark;
		}

		.name {
			font-size: 34upx;
			margin-right: 24upx;
		}

		.address {
			margin-top: 16upx;
			margin-right: 20upx;
			color: $font-color-light;
		}

		.icon-you {
			font-size: 32upx;
			color: $font-color-light;
			margin-right: 30upx;
		}

		.a-bg {
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			width: 100%;
			height: 5upx;
		}
	}

	.goods-section {
		margin-top: 16upx;
		background: #fff;
		padding-bottom: 1px;

		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			padding: 0 30upx;
			position: relative;
		}

		.logo {
			display: block;
			width: 50upx;
			height: 50upx;
			border-radius: 100px;
		}

		.name {
			font-size: 30upx;
			color: $font-color-base;
			margin-left: 24upx;
		}

		.g-item {
			display: flex;
			margin: 20upx 30upx;

			image {
				flex-shrink: 0;
				display: block;
				width: 140upx;
				height: 140upx;
				border-radius: 4upx;
			}

			.right {
				flex: 1;
				padding-left: 24upx;
				overflow: hidden;
			}

			.title {
				font-size: 30upx;
				color: $font-color-dark;
			}

			.spec {
				font-size: 26upx;
				color: $font-color-light;
			}

			.price-box {
				display: flex;
				align-items: center;
				font-size: 32upx;
				color: $font-color-dark;
				padding-top: 10upx;

				.price {
					margin-bottom: 4upx;
				}

				.number {
					font-size: 26upx;
					color: $font-color-base;
					margin-left: 20upx;
				}
			}

			.step-box {
				position: relative;
			}
		}
	}

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

	/* 支付列表 */
	.pay-list {
		padding-left: 40upx;
		margin-top: 16upx;
		background: #fff;

		.pay-item {
			display: flex;
			align-items: center;
			padding-right: 20upx;
			line-height: 1;
			height: 110upx;
			position: relative;
		}

		.icon-weixinzhifu {
			width: 80upx;
			font-size: 40upx;
			color: #6BCC03;
		}

		.icon-alipay {
			width: 80upx;
			font-size: 40upx;
			color: #06B4FD;
		}

		.icon-xuanzhong2 {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60upx;
			height: 60upx;
			font-size: 40upx;
			color: $base-color;
		}

		.tit {
			font-size: 32upx;
			color: $font-color-dark;
			flex: 1;
		}
	}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 995;
		display: flex;
		align-items: center;
		width: 100%;
		height: 90upx;
		justify-content: space-between;
		font-size: 30upx;
		background-color: #fff;
		z-index: 998;
		color: $font-color-base;
		box-shadow: 0 -1px 5px rgba(0, 0, 0, .1);

		.price-content {
			padding-left: 30upx;
		}

		.price-tip {
			color: $base-color;
			margin-left: 8upx;
		}

		.price {
			font-size: 36upx;
			color: $base-color;
		}

		.submit {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 280upx;
			height: 100%;
			color: #fff;
			font-size: 32upx;
			background-color: $base-color;
		}
	}

	/* 优惠券面板 */
	.mask {
		display: flex;
		align-items: flex-end;
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		z-index: 9995;
		transition: .3s;

		.mask-content {
			width: 100%;
			min-height: 30vh;
			max-height: 70vh;
			padding: 20px 0px 60px;
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
			overflow-y: scroll;
		}

		.btn {
			position: fixed;
			bottom: 0;
			width: 95%;
			text-align: center;
			border: 1px solid #FA436A;
			background-color: #FA436A;
			color: #FFFFFF;
			border-radius: 20px;
			margin: 10px;
			padding: 5px;
		}


		&.none {
			display: none;
		}

		&.show {
			background: rgba(0, 0, 0, .4);

			.mask-content {
				transform: translateY(0);
			}
		}
	}

	.scroll {
		max-height: 55vh;
	}

	/* 优惠券列表 */
	.coupon-item {
		display: flex;
		flex-direction: column;
		margin: 3upx 24upx;
		background: #fff;

		.con {
			display: flex;
			align-items: center;
			position: relative;
			height: 120upx;
			padding: 0 30upx;


			/* &:after {
				position: absolute;
				left: 0;
				bottom: 10;
				content: '';
				width: 100%;
				height: 0;
				border-bottom: 1px dashed #f3f3f3;
				transform: scaleY(50%);
			} */
		}

		.left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			overflow: hidden;
			height: 100upx;
		}

		.title {
			font-size: 32upx;
			color: $font-color-dark;
			margin-bottom: 10upx;
		}

		.time {
			font-size: 24upx;
			color: $font-color-light;
		}

		.right {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: $font-color-base;
			height: 100upx;
		}

		.price {
			font-size: 44upx;
			color: $base-color;

			&:before {
				content: '￥';
				font-size: 34upx;
			}
		}

		.tips {
			font-size: 24upx;
			color: $font-color-light;
			line-height: 60upx;
			white-space: nowrap;
			padding-left: 30upx;
		}

		.tips2 {
			font-size: 24upx;
			color: $font-color-light;
			line-height: 50upx;
			;
			height: 50upx;
			;
			text-align: center;
			margin: 5upx 10px 0 0;
			width: 80px;
			border: 1px solid #FA436A;
			background-color: #FA436A;
			color: #FFFFFF;
			border-radius: 25px;
		}

		.circle {
			position: absolute;
			left: -6upx;
			bottom: -10upx;
			z-index: 10;
			width: 20upx;
			height: 20upx;
			background: #f3f3f3;
			border-radius: 100px;

			&.r {
				left: auto;
				right: -6upx;
			}
		}

	}
</style>
