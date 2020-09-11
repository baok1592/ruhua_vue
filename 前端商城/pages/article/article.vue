<template>
	<view class="article">
		<view class="tit">{{art.title}}</view>
		<block v-if="is_form == 0">
			
			<view class="time">
				<!-- {{art.create_time}} -->
			</view>
			<view class="content">
				<rich-text :nodes="art.content"></rich-text>
			</view>
		</block>
		<block v-else>
			<!-- -------------------------------------------万能表单组件 -->
			<view style="margin-top: 20px;">
				<Formt :data_form="data_form" :farther_fun="get_data" :kg="kg"></Formt>
			</view>
			<button style="margin-top: 20px; ">提交</button>
			
			<!-- -------------------------------------------万能表单结束 -->
		</block>

	</view>
</template>

<script>
	import Formt from '@/components/form_data/form_data.vue'
	export default {
		data() {
			return {
				kg:0,
				art: '',
				is_form: 0,
				data_form:[{
						type: "input",
						desc: "输入框",
						default: "测试",
						show: true,
						options: "",
						name: "nameA"
					},
					{
						type: "radio",
						desc: "单选",
						default: "",
						show: false,
						option: [{
							value: '0',
							name: "女",
							default: 1
						}, {
							value: '1',
							name: "男"
						}],
						name: "sex"
					},
					{
						type: "date",
						desc: "日期",
						default: "",
						show: true,
						options: "2020-05-06",
						name: "dateA"
					},
					
					{
						type: "switch",
						desc: "开关",
						default: "xxx",
						show: true,
						options: "",
						name: "switchA"
					},
					 {
						type: "check",
						desc: "多选",
						default: "",
						show: false,
						option: [{
							value: 0,
							name: "A"
						}, {
							value: 1,
							name: "B"
						}, {
							value: 2,
							name: "C"
						}],
						name: "checkA"
					},
					{
						type: "time",
						desc: "时间",
						default: "xxx",
						show: true,
						options: "",
						name: "timeA"
					},
					{
						type: "select",
						desc: "下拉",
						default: "请选择",
						show: true,
						options: [
							'中国',
							'日国',
							'韩国',
							'美国',
						],
						name: "selectA"
					},
					{
						type: "address",
						desc: "地址",
						default: "请选择",
						show: true,
						options: [],
						name: "address"
					},
				]
			};
		},
		components: {
			Formt
		},
		onLoad(options) {
			this.get_art_detail(options.id)
		},
		methods: {
			jump() {

			},
			get_art_detail(id) {
				this.$api.http.get('article/get_one_article?id=' + id).then(res => {
					this.art = res.data
					if (res.data.is_from == 1) {
						this.is_form = 1
					} else {
						this.is_form = 0
					}
					console.log(this.is_form)
				})
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

<style lang="less">
	.article {
		padding: 20px 10px;
		font-size: 14px;

		.tit {
			text-align: center;
			font-size: 16px;
		}

		.time {
			padding: 5px 0 15px;
			text-align: center;
			color: #D1D1D1;
		}
	}
</style>
