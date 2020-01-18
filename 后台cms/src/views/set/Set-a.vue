<template>
	<div class="set">
		<el-form ref="form" label-width="200px">
			<el-row>
				<template v-for="(item,index) in list" v-key="index">
					<el-col :span="6" v-if="item.switch == 1">
						<el-form-item :label="item.desc">
							<template>
								<el-switch v-model="item.value" active-value="1" inactive-value="0" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
							</template>
						</el-form-item>
					</el-col>
				</template>
			</el-row>

			<template v-for="(item,index) in list" v-key="index">
				<el-row class="inp" v-if="item.switch != 1">
					<el-form-item :label="item.desc">
						<el-input v-model="item.value"></el-input>
					</el-form-item>
				</el-row>
			</template>
			</el-row>

			<el-form-item style="width: 80%">
				<el-button type="primary" @click="onSubmit">提交修改</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: "Set-a",
		data() {
			return {
				list: [],
				value1: true,
				value2: true,
				value: ''
			};
		},
		methods: {
			onSubmit() {
				var that = this;
				this.http.post_show("cms/edit_config", that.list).then(res => {
					that.$message({
						showClose: true,
						message: "修改成功",
						type: "success"
					});
				});
			},
			post_config() {
				var that = this;
				this.http.post("cms/get_config", {
					type: 1
				}).then(res => {
					that.list = res.data; //收藏返回的是商品和店铺
					// for (let [k, v] of Object.entries(res.data)) {
					//   if (v.key == "ThemeColor") {
					//     that.ra_color = v.value;
					//   }
					//   if (v.key == "ThemeList") {
					//     that.item.value = v.value;
					//   }
					//   if (v.key == "ThemeBox") {
					//     that.item.value = v.value;
					//   }
					// }
				});
			}
		},
		//vue生命函数
		mounted() {
			this.post_config();
		}
	};
</script>

<style lang="less">
	.set {
		.product {
			display: flex;
		}

		.pro {
			text-align: center;
			width: 207px;
			padding-left: 30px;
		}

		.pro img {
			width: 207px;
			height: 260px;
		}

		.detail {
			display: flex;
		}

		.det {
			text-align: center;
			width: 340px;
			padding-left: 20px;
		}

		.det img {
			width: 340px;
			height: 170px;
			border: 1px solid #545c64;
		}

		.el-form-item {
			margin-bottom: 12px !important;
		}

		.el-form-item__content {
			font-size: 14px;
			color: #606266;
			padding-left: 30px;
			line-height: 40px;
			text-align: left;
		}
	}
</style>
