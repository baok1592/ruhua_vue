<template>
	<div class="header">

		<div class="name"> {{admin_name}}</div>
		<div class="head-img">
			<el-dropdown trigger="click" @command="head">
				<span class="el-dropdown-link head-img-click">
					<img src="../../public/image/bbbb.jpg" /><i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="edit">修改密码</el-dropdown-item>
					<el-dropdown-item command="lout">退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>

		<div class="list-head">
			<el-row>
				<el-dialog title="" :visible.sync="dialogFormVisible" width="35%" center>
					<el-form :model="form">
						<el-form-item label="原密码" :label-width="formLabelWidth">
							<el-input type="password" v-model="form.old_psw" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="新密码" :label-width="formLabelWidth">
							<el-input type="password" v-model="form.new_psw" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="再次输入密码" :label-width="formLabelWidth">
							<el-input type="password" v-model="form.password2" auto-complete="off" @keyup.enter.native="edit"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button type="primary" @click="edit()">确 定</el-button>
					</div>
				</el-dialog>
			</el-row>
		</div>
		</div>
</template>

<script>
	export default {
		name: 'Header',
		props: [
			'admin_name',
		],
		data() {
			return {
				sct: '',
				dialogFormVisible: false,
				formLabelWidth: '120px',
				form: {
					old_psw: '',
					new_psw: '',
					password2: '',
				},
				total: '',
				event: '',
				event_num: ''
			}
		},
		mounted() {
			const token = localStorage.getItem("token");
			if (token) {
				this._load()
			}
		},
		methods: {
			_load() {
				this.http.get_show('statistic/admin/remind').then(res => {
					this.event = res.data
					this.event_num = this.event.total
				})
			},
			edit() {
				if (this.form.new_psw != this.form.password2) {
					this.$message({
						message: '两次输入的密码不一致',
						type: 'warning'
					});
					this.form = {
						old_psw: '',
						new_psw: '',
						password2: '',
					}
					return
				}
				this.http.post_show('cms/admin/edit_psw', this.form).then(res => {
					this.$message({
						message: '修改密码成功',
						type: 'success'
					});
					this.form = {
						old_psw: '',
						new_psw: '',
						password2: '',
					}
					this.dialogFormVisible = false
				})
			},
			jump_money() {
				let key = '5-1'
				localStorage.setItem("act", key);
				this.$router.push({
					path: '/money'
				})
			},
			jump_order() {
				let key = '4-1'
				localStorage.setItem("act", key);
				this.$router.push({
					path: '/order/order'
				})
			},
			jump_product() {
				let key = '3-1'
				localStorage.setItem("act", key);
				this.$router.push({
					path: '/product/new_product'
				})
			},

			handleClose() {
				this.dialogVisible = false
			},
			head(command) {
				if (command == 'lout') {
					this.$confirm('此操作将退出管理系统, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						localStorage.clear(); //清除所有缓存
						this.$router.push({
							path: '/login',
						})
						this.$message({
							type: 'success',
							message: '退出成功!'
						});
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消'
						});
					});

				}
				if (command == 'edit') {
					this.dialogFormVisible = true
				}
			},
		}
	}
</script>

<style lang="less">
	.header {
		display: flex;
		justify-content: flex-end;


		.name {
			padding-right: 20px;
		}

		.head-img img {
			height: 40px;
			width: 40px;
			padding-top: 10px
		}

		.head-x {
			padding-right: 35px;
			line-height: 60px;


		}

		.head-img-click {
			cursor: pointer;
		}

		.item {
			text-align: center;
			margin-right: 40px;
			height: 28px;
			line-height: 28px;
			margin-top: 15px;
		}

		.name_dai {
			width: 30%;
			text-align: right;
		}

		.num {
			width: 20%;
			margin-left: 40%;
		}

		.wai {
			height: 40px;
		}
	}
</style>
