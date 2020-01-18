<template>
	<view>
		<view v-for="item of list">
			<view class="list" @click="jump(item.id)">
				{{item.title}}
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:''
			};
		},
		onLoad() {
			this._load()
		},
		methods: {
			_load() {
				this.$api.http.get('article/type_article?type=5').then(res=>{
					this.list = res.data
				})
			},
			jump(id) {
				uni.navigateTo({
					url: '/pages/article/article?id='+id,
				});
			}
		}
	}
</script>

<style lang="scss">
	.list {
		color: #7C7C7C;
		height: 40px;
		line-height: 40px;
		padding: 0 10px;
		border-bottom: 1px solid #E9E8E5;
		font-size: 14px;
	}
</style>
