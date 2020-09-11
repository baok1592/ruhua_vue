<template>
	<view class="grade">
		<view class="product">
			<view class="pic"><img :src="getimg + order.imgs.url"></img></view>
			<view class="title">
				<view class="tit_01">{{order.goods_name}}</view>
				<view class="tit_02">
					<view class="tit_02_l">x{{order.num}}</view>
					<view class="tit_02_r">共 {{order.total_price}}元</view>
				</view>
			</view>
		</view>
		<view class="BH10"></view>
		<view class="pingj">
			<view class="pj_c">
				<textarea style="height: 100px;" v-model="form.content" placeholder="请输入..."></textarea>
			</view>
			<view class="tui-box-upload">
				<tui-upload :serverUrl="serverUrl" :limit="9"  @complete="result" @remove="remove" :fileKeyName="'img'"></tui-upload>
			</view>
		</view>
		<view class="BH10"></view>
		<view class="star">
			<view class="star_01">
				物流服务：
				<!-- #ifdef H5 -->
				<view class="star-01-rete">
					<uni-rates value="0" @change="get_rate" :index="index"></uni-rates>
				</view>
				<!-- #endif -->
				<!-- #ifndef H5 -->
					<uni-rate value="0" @change="get_rate" :index="index"></uni-rate>
				<!-- #endif -->
			</view>
		</view>
		<view class="BH10"></view>
		<view class="BH10"></view>
		<view class="BH10"></view>
		<view class="BH10"></view>
		<view class="BH10"></view>

		<view class="btn" @click="sub_grade">发布</view>
		<view style="height: 50px;"></view>
	</view>
</template>

<script>
	import {
		Api_url
	} from '@/common/config'
	import tuiUpload from '@/components/tui-upload/tui-upload'
	import uniRate from "@/components/uni/uni-rate/uni-rate.vue"
	import uniRates from "@/components/uni/uni-rate/uni-rates.vue"
	export default {
		data() {
			return {
				imgList: [],
				order: '',
				order_id: '',
				goods_id:'',
				getimg: this.$getimg,
				form: {
					id: '',
					goods_id: '',
					rate: '',
					content: '',
					imgs:'',
					video:'/uploads/video/5ee08c643b4cc.mp4',//新增视频上传链接
				},
				grade_list: '',
				ImgBox: [],
				imageData: [],
				//上传地址
				serverUrl:Api_url +'index/upload/img'
			};
		},
		components: {
			uniRate,
			tuiUpload,
			uniRates
		},
		onLoad(option) {
			let cache = uni.getStorageSync('grade_pro')
			this.order = cache.data
			this.order_id = option.order_id
			this.goods_id = option.goods_id
			
			this.creat_obj()
		},
		onShow() {
			console.log('触发了onshow')
		},
		methods: {
			result: function(e) {
				console.log(e)
				this.ImgBox = e.imgArr;
			},
			remove: function(e) {
				//移除图片
				console.log(e)
				let index = e.index
			},
			creat_obj() {
				let num = this.order.length
				console.log(num)
				let arr = []
				let ImgBox = []
				let obj = {
					goods_id: '',
					content: '',
					imgs: [],
					rate: ''
				}
				const that = this
				for (var i = 0; i < num; i++) {
					arr[i] = obj
					ImgBox[i] = []
				}
				this.grade_list = arr
				this.ImgBox = ImgBox
				console.log('ImgBox:', this.ImgBox)
			},
			async sub_grade() {
				this.form.imgs = this.ImgBox
				this.form.id = this.order_id
				this.form.goods_id = this.goods_id
				console.log(this.form);
				this.$api.http.post('order/user/set_pj', this.form).then(res => {
					this.$api.msg('发布成功')
					uni.hideLoading();
					setTimeout(() => {
						uni.navigateBack()
					}, 1000);
				})
			},
			get_rate(e) {
				console.log(e)
				this.form.rate = e.value
				this.order[e.index]['rate'] = e.value
			},
			upload_video(){  //视频上传接口,只有接口地址，自己修改,返回地址
				this.$api.http.post('user/add_video').then(res=>{
					
				})
			}
		}
	}
</script>

<style lang="less">
	.grade {
		font-size: 14px;
		.tui-box-upload{
			padding-left: 25rpx;
			box-sizing: border-box;
		}
		.product {
			padding: 10px;
			display: flex;

			.pic {
				padding-right: 20px;

				img {
					width: 90px;
					height: 90px;
				}
			}

			.title {
				font-size: 16px;
				width: 80%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.tit_01 {
					overflow: hidden;
					line-height: 20px;
					height: 60px;
				}

				.tit_02 {
					display: flex;
					justify-content: space-between;
				}
			}
		}

		.BH10 {
			height: 10px;
			background-color: #F4F4F6;
		}

		.pingj {
			padding: 15px 10px;

			.pj_c {
				border: 1px solid #EFEFEF;
				padding: 5px;
				margin-bottom: 18px;
				height: 100px;
			}

			.tu {
				img {
					width: 50px;
					height: 50px;
					margin-right: 15px;
				}
			}
		}

		.star {
			padding: 15px 10px;

			.star_01 {
				display: flex;
				line-height: 25px;
				padding-bottom: 5px;
				.star-01-rete{padding-top: 10px;}
			}
		}

		.btn {
			margin: 25px 10px 0;
			background-color: #57406E;
			border-radius: 20px;
			text-align: center;
			color: #fff;
			line-height: 40px;
		}
	}
</style>
