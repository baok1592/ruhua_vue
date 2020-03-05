<template>
	<div class="coupon">
		<el-container>
			<el-aside width="200px">
				<NavTo></NavTo>
			</el-aside>
			<el-container>
				<el-header style="border-bottom: 1px solid #d0d0d0;background-color: #FFFFFF;">
					<Header></Header>
				</el-header>

				<transition appear appear-active-class="animated fadeInLeft">
					<el-main>
						<div class="article">
							<el-button type="primary" @click="add_user">添加优惠券</el-button>
							<div style="height:20px;">&nbsp;</div>
							<template>
								<el-table :data="list" border style="width: 100%">
									<el-table-column type="index" label="序号" width="50px"></el-table-column>
									<el-table-column prop="name" label="优惠券名称"></el-table-column>
									<!-- <el-table-column prop="img.url" label="图片">
										<template slot-scope="scope">
											<template v-if="scope.row.img">
												<img :src="scope.row.img.url" />
											</template>
											<template v-if="!scope.row.img && scope.row.img_url">
												<img :src="scope.row.img_url[0]" />
											</template>
										</template>
									</el-table-column> -->
									<el-table-column prop="status" label="使用次数">
										<template slot-scope="scope">
											{{scope.row.status == 1?'一次':'不限'}}
										</template>
									</el-table-column>
									<el-table-column prop="type" label="类型">
										<template slot-scope="scope">
											{{scope.row.type == 1?'店铺优惠券':'其他'}}
										</template>
									</el-table-column>
									<el-table-column prop="goods_ids" label="可使用商品">
										<template slot-scope="scope">
											{{scope.row.goods_ids == 0?'全部商品':'部分商品'}}
										</template>
									</el-table-column>
									<el-table-column prop="full" label="满多少">
										<template slot-scope="scope">
											<template v-if="scope.row.full == 0">无门槛</template>
											<template v-else>{{scope.row.full}}</template>
										</template>
									</el-table-column>
									<el-table-column prop="reduce" label="减多少"></el-table-column>
									<el-table-column prop="start_time" label="起始时间"></el-table-column>
									<el-table-column prop="end_time" label="结束时间"></el-table-column>
									<el-table-column prop="stock" label="库存">
										<template slot-scope="scope">
											<template v-if="!scope.row.stock">无限张</template>
											<template v-else>{{scope.row.stock}}</template>
										</template>
									</el-table-column>
									<el-table-column prop="operation" label="操作" width="300px">
										<template slot-scope="scope">
											<!-- <el-button @click="edit(scope.row)"
											 type="success" size="small">修改</el-button> -->

											<el-button style="margin-left: 10px" type="danger" size="small" slot="reference" @click="del(scope.row.id)">删除</el-button>
										</template>
									</el-table-column><strong></strong>
								</el-table>
							</template>

						</div>
						<el-pagination style="margin-top: 50px;" background layout="prev, pager, next" :total="total" :page-size="size"
						 @current-change="jump_page">
						</el-pagination>
					</el-main>

				</transition>


			</el-container>

		</el-container>


		<el-dialog title="修改" :visible.sync="dialogVisible" width="30%">

			<!-- 修改 -->
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="优惠券名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="使用次数">
					<el-radio v-model="status" label="1" border size="medium">一次</el-radio>
					<el-radio v-model="status" label="2" border size="medium">不限</el-radio>
				</el-form-item>
				<el-form-item label="满多少">
					<el-input v-model="form.full"></el-input>
				</el-form-item>
				<el-form-item label="减多少">
					<el-input v-model="form.reduce"></el-input>
				</el-form-item>
				<el-form-item label="可用商品" v-model="form.goods_ids">
					<el-radio v-model="goods_ids" label="0" border size="medium">全部商品</el-radio>
					<el-radio v-model="goods_ids" label="2" border size="medium">部分商品</el-radio>
				</el-form-item>
				<el-form-item label="日期">
					<el-date-picker v-model="value1" type="datetimerange" range-separator="至" :start-placeholder="form.start_time" :end-placeholder="form.end_time">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="张数类型">
					<el-radio v-model="form.stock_type" label="0" border size="medium">有限张</el-radio>
					<el-radio v-model="form.stock_type" label="1" border size="medium">无限张</el-radio>
				</el-form-item>

				<!-- <el-form-item label="商品图片"> 
					<el-upload action="" list-type="picture-card" :on-preview="handlePictureCardPreview"
					:on-remove="handleRemove" :limit="3">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisiblea">
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
				</el-form-item> -->
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="sub_edit()">确
					定</el-button>
			</span>

		</el-dialog>


		<!-- 添加弹出框 -->
		<el-dialog title="添加商品" :visible.sync="dialogVisibleadd" width="30%">
			<el-form ref="form" :model="form_pro" label-width="80px">
				<el-form-item label="商品名称">
					<el-input v-model="form_pro.goods_name"></el-input>
				</el-form-item>
				<el-form-item label="商品内容">
					<el-input v-model="form_pro.content"></el-input>
				</el-form-item>
				<el-form-item label="库存">
					<el-input v-model="form_pro.stock"></el-input>
				</el-form-item>
				<el-form-item label="积分">
					<el-input v-model="form_pro.points"></el-input>
				</el-form-item>
				<el-form-item label="商品图片">
					<!-- <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview"
					 :on-remove="handleRemove" :on-success="res_banner_imgs" :file-list="upfile_banner_list">
						<i class="el-icon-plus"></i>
					</el-upload> -->

					<el-upload :action="upfile_url" :data="{use:'jp'}" :on-success="res_banner_imgs" :headers="upfile_head" :limit="5"
					 :file-list="upfile_banner_list" name="upload-images" :on-remove="handleRemove" list-type="picture-card">
						<i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog :visible.sync="dialogVisiblea">
						<img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisibleadd = false">取 消</el-button>
				<el-button type="primary" @click="onSubmit">确 定</el-button>
			</span>
		</el-dialog>

	</div>

</template>

<script>
	import {
		Loading
	} from 'element-ui';
	import {
		Api_url
	} from "@/common/config";

	import NavTo from '@/components/navTo.vue'
	import Header from '@/components/header.vue'
	export default {
		data() {
			return {
				status:'1',
				stock_type:'0',
				goods_ids:'0',
				
				dialogImageUrl: '',
				dialogVisiblea: false,
				tab_nav: false,
				dialogVisible: false,
				dialogVisibleadd: false,
				dialogFormVisible: false,
				oid: 0,
				form: {},
				form_pro: {
					goods_name: '',
					content: '',
					img_id: [],
					stock: '',
					points: ''
				},
				formLabelWidth: '120px',
				list: [],
				all: '',
				size: 10,
				total: '',
				options: [],
				value: '',
				typeList: [],
				upfile_banner_list: [],
				upfile_url: Api_url + 'com/up_img?back=id',
				upfile_head: {
					token: localStorage.getItem("token")
				},
				upfile_list: [], //上传文件列表
			}
		},
		components: {
			Header,
			NavTo
		},
		methods: {
			get_goods_id(){
				
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			onSubmit() {
				
			},
			res_banner_imgs(res) {

				console.log('res:', res)
				this.form_pro.img_id.push(res);
				// if (this.form_pro.img_id.length < 1) {
				// 	this.form_pro.img_id = res;
				// } else {
				// 	this.form_pro.img_id = this.form_pro.img_id + "," + res;
				// }
				console.log('xx:', this.form_pro.img_id)

			},
			add_user() {
				this.$router.push({
					path: './addcoupon'
				})
			},
			edit(item) {
				this.form = item
				this.dialogVisible = true
			},
			sub_edit() {
				
			},
			jump_page(e) {
				const that = this;
				let start = (e - 1) * that.size;
				let end = e * that.size;
				console.log(start, end)
				this.list = this.all.slice(start, end);
			},
			sub() {
				
			},
			//获取优惠券列表
			get_coupon() {
				this.http.get('coupon/admin/get_coupon').then(res => {
					this.list = res.data
				})
			},
			//删除优惠券
			del(id) {
				var that = this;
				this.$confirm('是否删除?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.http.put_show('coupon/admin/del_coupon', {
						id: id
					}).then(() => {
						that.$message({
							showClose: true,
							message: '删除成功',
							type: 'success'
						});
						this.get_coupon()
						// that.list.splice(index, 1);
					});
				})
			},
			close_fun(done) {
				this.clear_data()
				done(); //官方实例用法
			},

			clear_data() {
				this.dialogFormVisible = false
			},
		},
		mounted() {
			this.get_coupon();
		}
	}
</script>

<style lang="less">
	.coupon {
		background-color: #F3F3F3;

		.el-table__row {
			line-height: 40px !important;

			img {
				width: 80px !important;
				height: 80px !important;
			}
		}

		.el-main {
			height: auto !important;
			background-color: #F3F3F3;
			padding: 15px;

			.el-table {
				height: auto !important;
			}

			.el-table__body-wrapper,
			.is-scrolling-none,
			.el-table__body {
				height: auto !important;
			}
		}

		.article {
			line-height: 30px;
			background-color: #fff;
			padding: 15px;
			text-align: left;
		}

		.list-head {
			padding-bottom: 10px
		}

		.el-form-item__content {
			display: flex;
			justify-content: flex-start;
		}
	}
</style>
