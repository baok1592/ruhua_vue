<template>
	<view>
		<None v-if="list_empty"></None>
		<view v-for="item of list" v-else>
			<view class="list" @click="jump(item.id)">
				{{item.title}}
			</view>
		</view>

	</view>
</template>

<script>
	import None from "@/components/qy/none.vue"
	export default {
		data() {
			return {
				list_empty: false,
				list:''
			};
		},
		components:{
			None
		},
		onLoad() {
			this._load()
		},
		methods: {
			_load() {
				this.$api.http.get('article/type_article?type=5').then(res=>{
					if (res.data=='') {
						this.list_empty = true
					} else {
						this.list = res.data
					}
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
