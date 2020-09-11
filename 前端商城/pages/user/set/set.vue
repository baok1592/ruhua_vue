<template>
	<view class="set">
		
			<view class="list" @click="jump_toset">
				<view>个人资料</view>
				<view><tui-icon name="arrowright" :size="22" color='#A0A0A0'></tui-icon></view>
			</view>
			<view class="list">
				<view>版本更新</view>
				<view><tui-icon name="arrowright" :size="22" color='#A0A0A0'></tui-icon></view>
			</view>
			<view class="list" @click='show2' >
				<view>退出</view>
				<view><tui-icon name="arrowright" :size="22" color='#A0A0A0'></tui-icon></view>
			</view>
			
		<tui-modal :show="modal2" @click="handleClick2" @cancel="hide2" content="确定退出登录吗？" color="#333" :size="32">
			
		</tui-modal>
	</view>
</template>

<script>
	import tuiModal from "@/components/modal/modal"
	import tuiIcon from "@/components/icon/icon"
	export default {
		data() {
			return {
				modal2: false,
			};
		},
		components:{
			tuiIcon,
			tuiModal
		},
		methods:{
			jump_toset() {
				/* if (!Check.a()) {
					return
				} */
				uni.navigateTo({
					url: '/pages/set/set'
				})
			},
			clear_cache() {
				// uni.clearStorageSync()
				
			},
			handleClick2(e) {
				let index = e.index;
				if (index === 0) {
					
				} else {
					uni.removeStorageSync('token')
					this.$api.msg('已清空')
					uni.switchTab({
						url: '/pages/index/index'
					})
				}
				this.hide2()
			},
			show2() {
				this.modal2 = true
			},
			hide2() {
				this.modal2 = false
			}
		}
	}
</script>

<style lang="scss">
.set{font-size: 14px;
	.list{border-bottom: 1px solid #F1F3F6;display: flex;justify-content: space-between;padding: 10px;}
	.b_b{border-bottom: 1px solid #F1F3F6;}
}
</style>
