<template>
	<view>
		<web-view :src="url" v-if="url.length"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:'',
				data:''
			}
		},
		onLoad(option) {
	
			this.url="http://192.168.1.118:8081/order/ali_order?order_id="+option.order_num
		
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
