<template> 
	<view class="container">
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px',background:'rgba(255,255,255,'+opcity+')'}">
			<view class="tui-header" :style="{paddingTop:top+'px', opacity:opcity}">
				商品详情
			</view>
			<view class="tui-header-icon" :style="{marginTop:top+'px'}">
				<view class="tui-icon tui-icon-arrowleft tui-icon-back" :style="{color:opcity>=1?'#000':'#fff',background:'rgba(0, 0, 0,'+iconOpcity+')'}"
				 @tap="back"></view>

			</view>
		</view>
		<!--header-->

		<!--banner-->
		<view class="tui-banner-swiper">
			<swiper :autoplay="true" :interval="5000" :duration="150" :circular="true" :style="{height:scrollH + 'px'}" @change="bannerChange">
				<block v-for="(item,index) in list.banner_imgs_url" :key="index">
					<swiper-item :data-index="index" @click="bigimage(index)">
						<img :src="getimg+item" class="tui-slide-image" :style="{height:scrollH+'px'}" />
					</swiper-item>
				</block>
			</swiper>
			<tui-tag type="translucent" shape="circleLeft" size="small">{{bannerIndex+1}}
			/{{list.banner_imgs_url.length}}</tui-tag>
			<block v-if="discount_start == 1">
				<view class="xszk" v-if="!detail">限时折扣</view>
			</block>
			
		</view>
		<!--banner-->


		<view class="tui-pro-detail">
			<view class="tui-product-title tui-border-radius">
				<view v-if="!detail">
					<block v-if="discount_start == 1">
						<view class="detail">
							<view>
								<view class="tui-pro-pricebox tui-padding red">
									<view class="tui-pro-price">
										<view>￥<text class="tui-price">{{price}}</text></view>
										<!-- <view class="tag">新品</view> -->
									</view>
								</view>
								<view class="tui-original-price tui-gray">
									价格
									<text class="tui-line-through">￥{{list.market_price}}</text>
								</view>
							</view>
							<view class="time">
								<view class="juli">距离活动结束还剩</view>
								<uni-countdown :day="discount_time.days" border-color="#FF4342" color="#FF4342" splitor-color="#fff" :hour="discount_time.hours"
								 :minute="discount_time.minutes" :second="discount_time.seconds">
								</uni-countdown>

							</view>
						</view>
					</block>
					<block v-else>
						<view class="tui-pro-pricebox tui-padding">
							<view class="tui-pro-price">
								<view>{{is_vip?'VIP':'¥'}}
									<text class="tui-price">{{price}}</text>
								</view>
								<!-- <tui-tag :plain="true" type="high-green" shape="circle">新品</tui-tag> -->
							</view>
						
							<view class="tui-original-price tui-gray" style="font-weight: 100;flex-grow: 1;" v-if="is_vip">
								价格
								<text class="tui-line-through">￥{{list.market_price}}</text>
							</view>
						</view>
					</block>


				</view>

				<view v-else>
					<view class="tui-pro-pricebox tui-padding">
						<view class="tui-pro-price">
							<view>{{is_vip?'VIP':'¥'}}
								<text class="tui-price">{{price}}</text>
							</view>
							<!-- <tui-tag :plain="true" type="high-green" shape="circle">新品</tui-tag> -->
						</view>

						<view class="tui-original-price tui-gray" style="font-weight: 100;flex-grow: 1;" v-if="is_vip">
							价格
							<text class="tui-line-through">￥{{list.market_price}}</text>
						</view>
					</view>
					<!-- <view class="tui-original-price tui-gray" v-if="is_vip">
						价格
						<text class="tui-line-through">￥{{list.market_price}}</text>
					</view> -->
				</view>
				<view class="tui-pro-titbox">
					<view class="tui-pro-title">
						{{list.goods_name}}
					</view>

					<button @click="is_share=true" class="tui-share-btn tui-share-position share" style="margin-top: -7px;">
						<tui-tag type="gray" tui-tag-class="tui-tag-share tui-size" shape="circleLeft" size="small">
							<view class="tui-icon tui-icon-partake" style="color:#999;font-size:15px"></view>
							<text class="tui-share-text tui-gray">分享</text>
							
						</tui-tag>
					</button>

				</view>
				<view class="tui-padding" v-if="list.discount.discount">
					<block v-if="list.discount.discount.start_time">
						<view class="tui-sub-title tui-size font-red">此商品将于{{list.discount.discount.start_time}}开启限时折扣</view>
					</block>
					<view class="tui-sale-info tui-size tui-gray">
						<view>快递：{{list.delivery.name}}</view>
						<view>月销：{{list.sales}}</view>
						<view>{{list.city}}</view>
					</view>
				</view>
			</view>

			<view class="tui-discount-box tui-radius-all tui-mtop" v-if="couponList.length > 0">
				<view class="tui-list-cell" @click="toggleMask('show')">
					<view class="tui-bold tui-cell-title">领券</view>
					<view class="tui-tag-coupon-box">
						<template v-for="(item,index) of couponList" v-if="index <= 2">
							<tui-tag size="small" type="red" shape="circle" tui-tag-class="tui-tag-coupon">满{{item.full}}减{{item.reduce}}</tui-tag>
						</template>
					</view>
					<tui-icon name="more-fill" :size="20" class="tui-right tui-top40" color="#666"></tui-icon>
				</view>
			</view>

			<view class="tui-basic-info tui-mtop tui-radius-all" v-if="list.sku.length>0">
				<view class="tui-list-cell" @tap="showPopup">
					<view class="tui-bold tui-cell-title">已选</view>
					<view class="tui-selected-box">{{xz_sku_name}}</view>
					<tui-icon name="more-fill" :size="20" class="tui-right" color="#666"></tui-icon>
				</view>
			</view>

			<view class="tui-cmt-box tui-mtop tui-radius-all">
				<view class="tui-list-cell tui-last tui-between">
					<view class="tui-bold tui-cell-title">评价</view>
					<view @click="jump_toevaluate(list.goods_id)">
						<text class="tui-cmt-all">查看全部</text>
						<!-- <tui-icon name="more-fill" size="20" color="#ff201f"></tui-icon> -->
					</view>
				</view>

				<view class="tui-cmt-content tui-padding" v-if="applist">
					<view class="tui-cmt-user" v-if="applist.user">
						<image :src="applist.user.headpic" class="tui-acatar"></image>
						<view>{{applist.user.nickname}}</view>
					</view>
					<view class="tui-cmt">{{applist.content}}</view> 
				</view>

				<view class="tui-cmt-btn">
					<tui-tag type="black" :plain="true" tui-tag-class="tui-tag-cmt" @tap="jump_toevaluate(list.goods_id)">查看全部评价</tui-tag>
				</view>
			</view>


			<view class="tui-nomore-box">
				<tui-nomore text="详情介绍" :visible="true" bgcolor="#f7f7f7"></tui-nomore>
			</view>
			<view class="tui-product-img tui-radius-all">
				<rich-text :nodes="content" ></rich-text>
			</view>
			<tui-nomore text="已经到最底了" :visible="true" bgcolor="#f7f7f7"></tui-nomore>
			<view class="tui-safearea-bottom"></view>

		</view>

		<!--底部操作栏-->
		<view class="tui-operation">
			<view class="tui-operation-left tui-col-5">
				<view class="tui-operation-item" hover-class="opcity" :hover-stay-time="150" @click="jump_tohome">
					<tui-icon name="shop" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">首页</view>
				</view>
				<view class="tui-operation-item" hover-class="opcity" :hover-stay-time="150" @click="jump_tocart">
					<tui-icon name="cart" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">购物车</view>
					<tui-badge type="danger" size="small" v-if="shop_car_num>0">{{shop_car_num}}</tui-badge>
				</view>
				<view class="tui-operation-item" hover-class="opcity" :hover-stay-time="150" @click="collecting">
					<tui-icon :name="collected?'like-fill':'like'" :size="22" :color=" collected?'#ff201f':'#333' "></tui-icon>
					<view class="tui-operation-text tui-scale-small" :style="collected?'color: #ff201f;':''">收藏</view>
				</view>
				<view class="tui-operation-item" hover-class="opcity" :hover-stay-time="150"></view>
			</view>
			<view class="tui-operation-right tui-right-flex tui-col-7 tui-btnbox-4">
				<view class="tui-flex-1">
					<tui-button type="danger" shape="circle" size="mini" @click="showPopup">加入购物车</tui-button>
				</view>
				<view class="tui-flex-1">
					<tui-button type="warning" shape="circle" size="mini" @click="showPopup">立即购买</tui-button>
				</view>
			</view>
		</view>
		<!--底部操作栏--->

		<!--规格选择-->
		<tui-bottom-popup :show="popupShow" @close="hidePopup">
			<view class="tui-popup-box">
				<view class="tui-product-box tui-padding">
					<img :src="getimg+list.imgs" class="tui-popup-img" />
					<view class="tui-popup-price">
						<view class="tui-amount tui-bold">￥{{list.price}}</view>
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
							<tui-numberbox :max="list.stock" :min="1" :value="num" @change="sku_change_num"></tui-numberbox>
						</view>

					</view>
				</scroll-view>
				<view class="tui-operation tui-operation-right tui-right-flex tui-popup-btn">
					<tui-button type="red" tui-button-class="tui-btn-equals" shape="circle" size="mini" class="tui-flex-1" @click="add_cart">加入购物车</tui-button>
					<tui-button type="warning" tui-button-class="tui-btn-equals" shape="circle" size="mini" class="tui-flex-1" @click="add_shopping">立即购买</tui-button>
				</view>
				<view class="tui-icon tui-icon-close-fill tui-icon-close" style="color: #999;font-size:20px" @tap="hidePopup"></view>
				<!-- <tui-icon name="close-fill" color="#999" class="tui-icon-close" size="20" @tap="hidePopup"></tui-icon> -->
			</view>
		</tui-bottom-popup>
		<!--规格选择-->

		<!-- 优惠券面板 -->
		<view class="mask" :class="maskState===0 ? 'none' : maskState===1 ? 'show' : ''" @click="toggleMask">

			<view class="mask-content" >
				<!-- 优惠券页面，仿mt -->
				<view class="coupon-item" v-for="(item,index) in couponList" :key="index">
					<view class="con">
						<view class="left">
							<text class="title">{{item.name}}</text>
							<text class="time">有效期至{{item.end_time}}</text>
						</view>
						<view class="right">
							<text class="price">{{item.reduce}}</text>
							<text>满{{item.full}}可用</text>
						</view>

						<view class="circle l"></view>
						<view class="circle r"></view>
					</view>
					<view class="dott">
						<text class="tips">限新用户使用</text>
						<div class="an" @click="lq_coupon(item.id)">立即领取</div>
					</view>

				</view>
			</view>

		</view>

		<!-- 分享 -->
		<view class="sha_tan" v-if="is_share">
			<view class="mask" @click="is_share=false"></view>
			<view class="share_tan">
				<view class="s_title">— · 分享 · —</view>
				<view class=''>
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
							<view bindtap='show_hb'>生成海报</view>
						</view>
					</view>
				</view>
				<view class="bye" @click="is_share=false">取消</view>
			</view>
		</view>
		<hchPoster ref="hchPoster" :canvasFlag.sync="canvasFlag" @cancel="canvasCancel" :posterObj.sync="posterData" />
		<view :hidden="canvasFlag">
			<!-- 海报 要放外面放组件里面 会找不到 canvas-->
			<canvas class="canvas" canvas-id="myCanvas"></canvas><!-- 海报 -->
		</view>

		<!-- <view class="r_b">
			<view class="back">
				<view class="tui-icon tui-icon-top" style="color:#999;font-size:18px"></view>
			</view>
			<view class="back">
				<view class="tui-icon tui-icon-mobile" style="color:#999;font-size:18px"></view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import uniCountdown from "@/components/uni/uni-countdown/uni-countdown.vue"
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiBadge from "@/components/badge/badge"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiButton from "@/components/button/button"
	import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
	import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
	import tuiNumberbox from "@/components/numberbox/numberbox" 
	import hchPoster from '@/components/hch-poster/hch-poster.vue'

	export default {
		components: {
			tuiIcon,
			tuiTag,
			tuiBadge,
			tuiNomore,
			tuiButton,
			tuiTopDropdown,
			tuiBottomPopup,
			tuiNumberbox, 
			uniCountdown,
			hchPoster
		},
		data() {
			return {
				discount_start: 0,
				discount_time: {
					days: '',
					hours: "",
					minutes: '',
					seconds: '',
				},
				end_time: '',
				canvasFlag: true,
				posterData: {},
				content: "",
				xz_sku_name: '',
				price: '', //原始价格
				x: 0, //简便的数据更新方法
				sku_index: '', //规格下标
				num: 1, //购买数量
				getimg: this.$getimg,
				is_vip: 0,
				shop_car_num: '',
				vid: 0,
				sku_arr: '',
				poster: {},
				qrShow: false,
				is_share: false,
				detail: true, //限时折扣
				couponList: [],
				maskState: 0, //优惠券面板显示状态
				height: 64, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
				banner: {
					"url": "http://www.thorui.cn/img/product/11.jpg",
					"url1": "http://www.thorui.cn/img/product/33.jpg"
				},
				bannerIndex: 0,
				menuShow: false,
				popupShow: false,
				goods_num: 1,
				id: '',
				zk_price:'',
				list: {},
				applist: [],
				collected: '',
				detailData: '',
				shareList: ''
			}
		},
		onLoad: function(options) {
			this.id = options.id
			this.is_like(options.id)
					
			this._load()
			let cache = uni.getStorageSync('cart')
			if (!cache) {
				this.shop_car_num = 0
			} else {
				const cache_count = Object.entries(cache).length
				this.shop_car_num = cache_count
			}
			let obj = {};
			// #ifdef MP-WEIXIN
			obj = wx.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-BAIDU
			obj = swan.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-ALIPAY
			my.hideAddToDesktopMenu();
			// #endif

			uni.getSystemInfo({
				success: (res) => {
					this.width = obj.left || res.windowWidth;
					this.height = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
					this.top = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
					this.scrollH = res.windowWidth //APP不支持css的vw，所以用这种
				}
			})
		},
		methods: {
			shareFc() {
				console.log('生成海报')

				// 这个是固定写死的小程序码
				Object.assign(this.posterData, {
					url: this.getimg + this.list.imgs, //商品主图
					icon: 'https://img0.zuipin.cn/mp_zuipin/poster/hch-hyj.png', //醉品价图标
					title: this.list.goods_name, //标题
					discountPrice: this.list.price, //折后价格
					orignPrice: this.list.market_price, //原价
					code: 'https://img0.zuipin.cn/mp_zuipin/poster/hch-code.png', //小程序码
				})
				this.$forceUpdate(); //强制渲染数据
				setTimeout(() => {
					this.canvasFlag = false; //显示canvas海报
					this.is_share = false; //关闭分享弹窗
					this.$refs.hchPoster.createCanvasImage(); //调用子组件的方法
				}, 500)
			},
			_load() {
				this.$api.http.get('product/get_product?id=', {
					id: this.id
				}).then(res => {
					this.detail = res.data.discount.id ? false : true //限时折扣 
					if(!this.detail){
						this.zk_price=res.data.discount.reduce_price*1
						this.price = res.data.price*1 - this.zk_price
					}else{
						this.price = res.data.price*1
					}
					this.list = res.data
					if (this.list.discount.discount) {
						let etime = this.list.discount.discount.end_time
						//----------------------------------------------计算时间差
						let now_time = new Date().getTime()
						let end_time = new Date(etime).getTime()
						if (end_time > now_time) {
							let time = end_time - now_time
							let day = Math.floor(time / (24 * 3600 * 1000))
							var usedTime = end_time - now_time; //两个时间戳相差的毫秒数
							var days = Math.floor(usedTime / (24 * 3600 * 1000));
							//计算出小时数
							var leave1 = usedTime % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
							var hours = Math.floor(leave1 / (3600 * 1000));
							//计算相差分钟数
							var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
							var minutes = Math.floor(leave2 / (60 * 1000));
							var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
							var seconds = Math.round(leave3 / 1000)
						}
						this.discount_time.days = days
						this.discount_time.hours = hours
						this.discount_time.minutes = minutes
						this.discount_time.seconds = seconds
						//-----------------------------------------------计算时间差结束						
						
						
						//-----------------------------------------------判断限时活动是否开启
						let stime = this.list.discount.discount.start_time
						let start_time = new Date(stime).getTime()
						let anow_time = now_time
						console.log('当前时间',anow_time)
						console.log('开始时间',start_time)
						if (anow_time > start_time) {
							this.discount_start = 1
							console.log('活动已开启')
						} else {
							this.discount_start = 0
							console.log('活动还未开始')
						}
						//----------------------------------------------判断限时活动是否开启结束
					}
					const re_style = new RegExp('style=""', 'gi')
					res.data.content = res.data.content.replace(re_style, ``);
					const regex = new RegExp('<img', 'gi')
					this.content = res.data.content.replace(regex, `<img style="max-width: 100%; height: auto"`);
					if (this.list.sku_arr) {
						this.sku_arr = this.list.sku_arr
						this.xz_sku_name = '请选择规格'
					}
					if (res.data.sku.length > 0) {
						res.data.sku_arr.initialSku = {}
						res.data.sku_arr.initialSku['selectedNum'] = 1
						for (let [k, v] of Object.entries(res.data.sku_arr.tree)) {
							res.data.sku_arr.initialSku[v.k_s] = ''
						}
					}
				})
				this.$api.http.get('product/get_evaluate?id=', {
					id: this.id
				}).then(res => {
					this.applist = res.data[0]
					console.log(this.applist)
				})
				this.$api.http.get('coupon/get_coupon').then(res => {
					this.couponList = res.data
					console.log(this.couponList)
				})
			},
			canvasCancel(val) {
				this.canvasFlag = val;
			},
			//数量选择
			sku_change_num(e) {
				console.log('num:', e.value)
				const detail = e.value
				let g = this.list
				if (g.sku.length > 0) {
					g.sku_arr.initialSku.selectedNum = detail
				} else {
					g.sku_arr.initialSku = {}
					g.sku_arr.initialSku.selectedNum = detail
				}
				console.log('num2:', detail)
				this.list = g,
					this.num = detail
			},
			//切换规格图片
			change_sku_img(id) {
				let g = this.list.sku_arr.tree[0].v
				console.log('sku_img', g)
				for (let [k, v] of Object.entries(g)) {
					console.log('sku_img_v', v)
					if (id == v.id && v.imgUrl) {
						this.list.imgs = v.imgUrl
					}
				}
			},
			//选择规格-显示价格
			xz_sku_cs(ik, iv) {
				let g = this.list
				let isku = g.sku_arr.initialSku
				isku[ik] = iv //选中了的1-3级规格  initialSku  
				this.change_sku_img(iv)

				let count = Object.keys(isku).length - 1 //有几级规格
				let price = g.price
				let stock = g.stock
				let sku_name = ''
				let sku_index = -1
				for (let [k, v] of Object.entries(g.sku_arr.list)) {
					if (count == 1) {
						if (isku['s1'] == v['s1']) {
							price = v.price
							stock = v.stock_num
							sku_name = v['s1_name']
							sku_index = k
						}
					}
					if (count == 2) {
						if (isku['s1'] == v['s1'] && isku['s2'] == v['s2']) {
							price = v.price
							stock = v.stock_num
							sku_name = v['s1_name'] + ' ' + v['s2_name']
							sku_index = k
						}
					}
					if (count == 3) {
						if (isku['s1'] == v['s1'] && isku['s2'] == v['s2'] && isku['s3'] == v['s3']) {
							price = v.price
							stock = v.stock_num
							sku_name = v['s1_name'] + ' ' + v['s2_name'] + ' ' + v['s3_name']
							sku_index = k
						}
					}
				}
				g.price = price
				g.stock = stock
				g.sku_name = sku_name
				this.xz_sku_name = g.sku_name
				this.list = g,
					this.sku_index = sku_index
				this.x++
				console.log('sku_index:', sku_index)
			},
			//加入购物车
			add_cart() {
				const that = this
				if (!this.check_sku()) {
					return;
				}
				const sku_index = this.sku_index
				var cache_id = this.list.goods_id;
				if (sku_index >= 0) {
					cache_id = cache_id + '-' + sku_index
				}
				console.log('cache', cache_id, sku_index)
				let arr = {}
				let cache_obj = uni.getStorageSync('cart')
				const cache_count = Object.keys(cache_obj).length

				if (cache_count > 0) {
					for (let [k, v] of Object.entries(cache_obj)) {
						if (cache_id == k) {
							that.$api.msg('已存在')
							return;
						}
					}
					cache_obj[cache_id] = this._setOrderData()
					uni.setStorageSync('cart', cache_obj)
					this.shop_car_num++
				} else {
					arr[cache_id] = this._setOrderData()
					uni.setStorageSync('cart', arr)
					this.shop_car_num = 1
				}

				that.$api.msg('加入成功')
				this.popupShow = false
			},
			//直接购物
			add_shopping() { 
				if (!this.check_sku()) {
					return;
				}
				console.log('add_shopping')
				const arr = this._setOrderData() //组合数据
				if(!arr){ 
					return;
				}
				const id = arr['goods_id'];
				//放缓存
				uni.setStorageSync('buy', {
					0: arr
				})
				uni.redirectTo({
					url: '/pages/order/createOrder?state=buy'
				})
			},
			//检查规格是否都已选择
			check_sku() {
				console.log('check_sku')
				const that = this
				if (this.list.sku.length < 1) {
					return true
				}
				let isku = this.list.sku_arr.initialSku
				for (let [k, v] of Object.entries(isku)) {
					if (v == '') {
						that.$api.msg('未选择规格')
						return false
					}
				}
				return true
			},
			//组合数据
			_setOrderData() { 
				const that = this
				const sku_index = this.sku_index
				const goods = this.list 
				if (goods.stock == 0) {
					that.$api.msg('库存不足')
					return;
				} 
				let arr = {};
				arr['goods_id'] = goods.goods_id
				arr['goods_name'] = goods.goods_name
				arr['shopping_fee'] = goods.shipping_fee
				arr['radio'] = true
				arr['imgs'] = goods.imgs ? goods.imgs : ''
				arr['price'] = goods.price
				arr['num'] = this.num
				arr['stock'] = goods.stock
				if (goods.sku.length > 0) {
					arr['num'] = goods.sku_arr.initialSku.selectedNum
					arr['sku'] = goods.sku_arr.list[sku_index]
					arr['sku_name'] = goods.sku_name
				}
				return arr
			},
			is_like(id) {
				this.$api.http.post('favorite/get_one_fav', {
					id: id
				}).then(res => {
					if (!res.data) {
						this.collected = false
					} else {
						this.collected = true
					}
				})
			},
			 
			lq_coupon(id) { //领取优惠券

				this.$api.http.get("coupon/add_coupon", {
					id: id
				}).then(res => {
					if (res.status == 200) {
						this.$api.msg('领取成功')
					}
					if (res.status == 400) {
						this.$api.msg(res.msg)
					}

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
			jump_tohome() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			jump_to() {
				uni.setStorageSync('buy', this.list)
				uni.navigateTo({
					url: '../../order/createOrder?state=buy'
				})
			},
			jump_toshop() {
				uni.navigateTo({
					url: '../../shop/shop'
				})
			},
			jump_toevaluate(id) {
				uni.navigateTo({
					url: '../../evaluate/evaluate?id=' + id
				})
			},
			jump_tocart() {
				uni.switchTab({
					url: '../../cart/cart'
				})
			},


			bannerChange: function(e) {
				this.bannerIndex = e.detail.current
			},
			bigimage(index){
				let arr=[]
				const img=this.$getimg
				for (let k in this.list.banner_imgs_url) {
					const v=this.list.banner_imgs_url[k]
					arr[k]=img+v
				}
				console.log('arr:',arr)
				uni.previewImage({
					current: 0,
					urls: arr,
					current:index
				});
			
			},
			back: function() {
				uni.navigateBack()
			},
			openMenu: function() {
				this.menuShow = true
			},
			closeMenu: function() {
				this.menuShow = false
			},
			showPopup: function() {
				this.popupShow = true
			},
			hidePopup: function() {
				this.popupShow = false
			},
			change: function(e) {
				this.value = e.value
			},
			collecting: function() {

				if (this.collected) {
					this.$api.http.put('favorite/del_fav', {
						id: this.id
					}).then(res => {
						this.$api.msg('取消收藏')
					})
				} else {
					let data = {
						fav_id: this.id,
						type: 'goods',
						price: this.list.price,
					}
					this.$api.http.post('favorite/add_fav', data).then(res => {
						this.$api.msg('收藏成功')
					})
				}
				this.collected = !this.collected
			},

		},
		onPageScroll(e) {
			let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
			let opcity = scroll / this.scrollH;
			if (this.opcity >= 1 && opcity >= 1) {
				return;
			}
			this.opcity = opcity;
			this.iconOpcity = 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
		},
		onShareAppMessage(res) {
			return {
				title: '如花',
			}
		},
		onPullDownRefresh() {
			this._load()
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 2000);
		}
	}
</script>

<style lang="scss">
	/* icon 也可以使用组件*/
	@import "../../../static/style/icon.css";

	page {
		background: #f7f7f7;
	}
	//返回顶部 
	.r_b{position: fixed;right: 10px;bottom: 70px;z-index: 9;
		.back{background-color: #EDEDED;width: 35px;height: 35px;border-radius: 50%;display: flex;justify-content: center;
		align-items: center;margin-bottom: 10px;background-color:rgba(0,0,0,0.1);}
	}
	.font-red{
		color:#FF201F
	}
	// 分享
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
		}

		.s_t_tit {
			font-size: 16px;
		}

		.s_t_tit span {
			color: #999999;
		}

		.s_t_x {
			display: flex;
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
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
			overflow-y: scroll;
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

	/* 优惠券列表 */
	.coupon-item {
		display: flex;
		flex-direction: column;
		margin: 20upx 24upx;
		background: #fff;

		.con {
			display: flex;
			align-items: center;
			position: relative;
			height: 120upx;
			padding: 0 30upx;

			&:after {
				position: absolute;
				left: 0;
				bottom: 0;
				content: '';
				width: 100%;
				height: 0;
				border-bottom: 1px dashed #f3f3f3;
				transform: scaleY(50%);
			}
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

		.dott {
			display: flex;
			justify-content: space-between;

			.tips {
				font-size: 24upx;
				color: $font-color-light;
				line-height: 60upx;
				padding-left: 30upx;
			}

			.an {
				background-color: #FF201F;
				font-size: 12px;
				color: #fff;
				margin-right: 15px;
				height: 23px;
				line-height: 23px;
				padding: 0 8px;
				border-radius: 20px;
				margin-top: 3px;
			}
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

	.share {
		padding: 0 !important;
		border: none !important;
		background: none;
		color: #666;
	}

	.share::after {
		border: 0;
	}

	.container {
		padding-bottom: 110upx;
	}

	.tui-header-box {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9998;
	}

	.tui-header {
		width: 100%;
		font-size: 18px;
		line-height: 18px;
		font-weight: 500;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-header-icon {
		position: fixed;
		top: 0;
		left: 10px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		height: 32px;
		transform: translateZ(0);
		z-index: 99999;
	}



	.tui-header-icon .tui-badge {
		background: #e41f19 !important;
		position: absolute;
		right: -4px;
	}

	.tui-icon-ml {
		margin-left: 20upx;
	}

	.tui-icon {
		border-radius: 16px;
	}


	.tui-icon-back {
		height: 32px !important;
		width: 32px !important;
		display: block !important;
	}

	.tui-header-icon .tui-icon-more-fill {
		height: 20px !important;
		width: 20px !important;
		padding: 6px !important;
		display: block !important;
	}

	.tui-banner-swiper {
		position: relative;
	}

	.tui-banner-swiper .tui-tag-class {
		position: absolute;
		color: #fff;
		bottom: 30upx;
		right: 0;
	}

	.tui-slide-image {
		width: 100%;
		display: block;
	}

	/*顶部菜单*/

	.tui-menu-box {
		box-sizing: border-box;
	}

	.tui-menu-header {
		font-size: 34upx;
		color: #fff;
		height: 32px;
		display: flex;
		align-items: center;
	}

	.tui-top-dropdown {
		z-index: 9999 !important;
	}

	/* .tui-menu-itembox {
		color: #fff;
		padding: 40upx 10upx 0 10upx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		font-size: 26upx;
	} */

	.tui-menu-item {
		width: 22%;
		height: 160upx;
		border-radius: 24upx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		background: rgba(0, 0, 0, 0.4);
		margin-right: 4%;
		margin-bottom: 4%;
	}

	.tui-menu-item:nth-of-type(4n) {
		margin-right: 0;
	}

	/* .tui-badge-box {
		position: relative;
	}

	.tui-badge-box .tui-badge-class {
		position: absolute;
		top: -8px;
		right: -8px;
	} */

	.tui-msg-badge {
		top: -10px;
	}

	.tui-icon-up {
		position: relative;
		display: inline-block;
		left: 50%;
		transform: translateX(-50%);
	}

	.tui-menu-text {
		padding-top: 12upx;
	}

	.tui-opcity .tui-menu-text,
	.tui-opcity .tui-badge-box {
		opacity: 0.5;
		transition: opacity 0.2s ease-in-out;
	}

	/*顶部菜单*/

	/*内容 部分*/

	.tui-padding {
		padding: 0 30upx;
		box-sizing: border-box;
	}

	.tui-size {
		font-size: 24upx;
		line-height: 24upx;
	}

	.tui-gray {
		color: #999;
	}

	.tui-icon-red {
		color: #ff201f;
	}

	.tui-border-radius {
		border-bottom-left-radius: 24upx;
		border-bottom-right-radius: 24upx;
		overflow: hidden;
	}

	.tui-radius-all {
		border-radius: 24upx;
		overflow: hidden;
	}

	.tui-mtop {
		margin-top: 26upx;
	}

	.tui-pro-detail {
		box-sizing: border-box;
		color: #333;
	}

	.tui-product-title {
		background: #fff;
		padding: 30upx 0;
	}

	.xszk {
		position: absolute;
		bottom: 0px;
		left: 0;
		line-height: 25px;
		background-color: #FF4342;
		font-size: 12px;
		color: #fff;
		text-align: center;
		border-top-right-radius: 8px;
		width: 80px;
		height: 25px;
		z-index: 9;
		border-bottom-left-radius: 0px;
	}

	.detail {
		display: flex;
		justify-content: space-between;
		position: relative;
		background-color: #FF4342;
		margin-top: -30upx;
		padding-top: 30upx;
		color: #fff;

		.tui-pro-pricebox {
			color: #fff;
		}

		.tui-gray {
			color: #FBB3AB;
		}

		.time {
			padding-right: 10px;

			.juli {
				font-size: 12px;
				margin-top: -5px;
				padding-bottom: 5px;
			}
		}

		.tag {
			font-size: 12px;
			border: 1px solid #fff;
			border-radius: 10px;
			padding: 0 5px;
			line-height: 15px;
			margin: -5px 0 0 5px;
			font-weight: 100;
		}
	}

	.tui-pro-pricebox {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #ff201f;
		font-size: 36upx;
		font-weight: bold;
		line-height: 44upx;
	}

	.tui-pro-price {
		display: flex;
		align-items: center;
	}

	.tui-pro-price .tui-tag-class {
		transform: scale(0.7);
		transform-origin: center center;
		line-height: 24upx;
		font-weight: normal;
	}

	.tui-price {
		font-size: 58upx;
		padding-left: 3px;
	}

	.tui-original-price {
		font-size: 26upx;
		line-height: 26upx;
		padding: 10upx 30upx;
		box-sizing: border-box;
	}

	.tui-line-through {
		text-decoration: line-through;
	}

	.tui-collection {
		color: #333;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		height: 44upx;
	}

	.tui-scale {
		transform: scale(0.7);
		transform-origin: center center;
		line-height: 24upx;
		font-weight: normal;
	}

	.tui-icon-collection {
		line-height: 20px !important;
		margin-bottom: 0 !important;

	}

	.tui-pro-titbox {
		font-size: 32upx;
		font-weight: 500;
		position: relative;
		padding: 10upx 150upx 0 30upx;
		box-sizing: border-box;
	}

	.tui-pro-title {
		padding: 5upx 0px 0 0;
		max-height: 40px;
		line-height: 20px;
		margin-bottom: 10px;
		overflow: hidden;
	}

	.tui-share-btn {
		display: block;
		background: none;
		margin: 0;
		padding: 0;
		border-radius: 0;
	}

	.tui-tag-share {
		display: flex;
		align-items: center;
	}

	.tui-share-position {
		position: absolute;
		right: 0;
		top: 30upx;
	}

	.tui-share-text {
		padding-left: 8upx;
	}

	.tui-sub-title {
		padding: 20upx 0;
	}

	.tui-sale-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 30upx;
	}

	.tui-discount-box {
		background: #fff;
	}

	.tui-list-cell {
		position: relative;
		display: flex;
		align-items: center;
		font-size: 26upx;
		line-height: 26upx;
		padding: 36upx 30upx;
		box-sizing: border-box;
	}

	.tui-right {
		position: absolute;
		right: 30upx;
		top: 30upx;
	}

	.tui-top40 {
		top: 40upx !important;
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-list-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 126upx;
	}

	.tui-last::after {
		border-bottom: 0 !important;
	}

	.tui-tag-coupon-box {
		display: flex;
		align-items: center;
	}

	.tui-tag-coupon-box .tui-tag-class {
		margin-right: 20upx;
	}


	.tui-cell-title {
		width: 66upx;
		padding-right: 30upx;
		flex-shrink: 0;
	}

	.tui-promotion-box {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 10upx 0;
		width: 74%;
	}

	.tui-promotion-box .tui-tag-class {
		display: inline-block !important;
		transform: scale(0.8);
		transform-origin: 0 center;
	}

	/* .tui-inline-block {
		display: inline-block !important;
		transform: scale(0.8);
		transform-origin: 0 center;
	} */

	.tui-basic-info {
		background: #fff;
	}

	.tui-addr-box {
		width: 76%;
	}

	.tui-addr-item {
		padding: 10upx;
		line-height: 34upx;
	}

	.tui-guarantee {
		background: #fdfdfd;
		display: flex;
		flex-wrap: wrap;
		padding: 20upx 30upx 30upx 30upx;
		font-size: 24upx;
	}

	.tui-guarantee-item {
		color: #999;
		padding-right: 30upx;
		padding-top: 10upx;
	}

	.tui-pl {
		padding-left: 4upx;
	}

	.tui-cmt-box {
		background: #fff;
	}

	.tui-between {
		justify-content: space-between !important;
	}

	.tui-cmt-all {
		color: #555;
		padding-right: 8upx;
	}

	.tui-cmt-content {
		font-size: 26upx;
	}

	.tui-cmt-user {
		display: flex;
		align-items: center;
	}

	.tui-acatar {
		width: 60upx;
		height: 60upx;
		border-radius: 30upx;
		display: block;
		margin-right: 16upx;
	}

	.tui-cmt {
		padding: 14upx 0;
	}

	.tui-attr {
		font-size: 24upx;
		color: #999;
		padding: 6upx 0;
	}

	.tui-cmt-btn {
		padding: 50upx 0 30upx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-tag-cmt {
		min-width: 130upx;
		padding: 20upx 52upx !important;
		font-size: 26upx !important;
		display: inline-block;
	}

	.tui-nomore-box {
		padding-top: 10upx;
	}

	.tui-product-img {
		transform: translateZ(0);
	}

	.tui-product-img image {
		width: 100%;
		display: block;
	}

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

	/*底部选择弹层*/

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

	/*底部选择弹层*/
</style>
