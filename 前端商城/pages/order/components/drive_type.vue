<template>
	<view class="">
		<view class="uni-list">
			<radio-group @change="radioChange" >
				<label class="uni-list-cell uni-list-cell-pd" v-if="switch_list.drive_type==1 || switch_list.drive_type==2 || switch_list.drive_type==3">
					<view class="tuanzhang" >
						<view class="tz-l">
							<radio value="1" style="transform:scale(0.7)"  />
						</view> 
							<view class="tz-m">快递配送</view>
							<view class="tz-r"></view> 
					</view>
				</label>
				<label class="uni-list-cell uni-list-cell-pd" v-if="switch_list.drive_type==2 || switch_list.drive_type==3">
					<view class="tuanzhang" >
						<view class="tz-l">
							<radio value="2" style="transform:scale(0.7)"  />
						</view> 
							<view class="tz-m">同城配送</view>
							<view class="tz-r"></view> 
					</view>
				</label>
				<label class="uni-list-cell uni-list-cell-pd" v-if="switch_list.drive_type==1 || switch_list.drive_type==3">
					<view class="tuanzhang" >
						<view class="tz-l">
							<radio value="3" style="transform:scale(0.7)"  />
						</view> 
							<view class="tz-m">到店自提</view>
							<view class="tz-r"></view> 
					</view>
				</label>
			</radio-group>
		</view>
		<view class="ztdz" v-if="kuaidi==3">
			{{switch_list.zt_address}}
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				kuaidi:0				
			}
		},
		props:{
			switch_list:Object
		},
		methods:{
			radioChange(e) {
				this.kuaidi=e.detail.value 
				this.$parent.radioChange(e)
			},
		}
	}
</script>

<style lang="less">
</style>
