<template>
	<view class="form">
		<view v-for="(item,index) of data_form" :key="index">
			<view class="biao" v-if="item.type=='radio'">
				<view class="biao-l">{{item.desc}}:</view>
				<view class="biao-r">
					<radio-group class="radio-group" name="sex" @change="radioChange($event,item.name)">
						<label class="tui-radio" v-for="option of item.options">
							<radio :value="option.value" :checked="item.value==1?true:false" style="zoom: 90%;" /> {{option.name}}<span></span>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="biao" v-if="item.type=='input'">
				<view class="biao-l">{{item.desc}}:</view>
				<view class="biao-r">
					<input @blur="input_get($event,item.name)" placeholder="请输入.." />
				</view>
			</view>
			<view class="biao" v-if="item.type=='textarea'">
				<view class="biao-l">{{item.desc}}:</view>
				<view class="biao-r">
					<textarea name="msg" v-model="arr.msg" placeholder="请输入.."></textarea>
				</view>
			</view>
			<view class="biao" v-if="item.type=='switch'" style="">
				<view class="biao-l" style="padding-top: 3px;">{{item.desc}}:</view>
				<view class="biao-r">
					<switch name="switch" @change="switch1Change($event,item.name)" style="transform:scale(0.7)" />
				</view>
			</view>
			<view class="biao" v-if="item.type=='check'">
				<view class="biao-l">{{item.desc}}:</view>
				<view class="biao-r">
					<checkbox-group @change="checkboxChange($event,item.name)">
						<label v-for="it of item.options" :key="it.value">
							<checkbox :value="it.value+''" :checked="it.checked" />{{it.name}}<span></span>
						</label>
					</checkbox-group>
				</view>
			</view>
			<!-- <view class="biao" v-if="item.type=='date'">
				<view class="biao-l">{{item.desc}}:</view> 
				<input class="biao-r" disabled="disabled" v-model="form[index].default" :placeholder="item.default?item.default:'请选择'" @click="show_date(1,index,item.name)"></input>
			</view>
			<view class="biao" v-if="item.type=='time'">
				<view class="biao-l">{{item.desc}}:</view>
				<input class="biao-r" disabled="disabled" v-model="form[index].default" :placeholder="item.default?item.default:'请选择'" @click="show_time(3,index,item.name)"></input>
			</view> -->
			<view class="biao" v-if="item.type=='address'">
				<view class="biao-l">{{item.desc}}:</view>
				<view class="biao-r" @click="toggleTab">
					{{resultInfo.result}}
				</view>
			</view>
			<view class="biao" v-if="item.type=='country'">
				<view class="biao-l">{{item.desc}}:</view>
				<view class="biao-r">
					<picker @change="bindPickerChange($event,item.type,index,item.name)" :value="ind" :range="item.options">
						<view class="uni-input">{{item.options[ind]}}</view>
					</picker>
				</view>
			</view>
			<view class="biao" v-if="item.type=='select'">
				<view class="biao-l">{{item.desc}}:</view>
				<view class="biao-r">
					<!-- <view class="uni-list-cell-db">
						<picker @change="bindPickerChange($event,item.type,index,item.name)" :value="i" :range="item.options">

							<view class="uni-input">{{form[index].default?form[index].default:'点击选择'}}</view>
						</picker>
					</view> -->
				</view>
			</view>
		</view>
		<!-- <view class="btn">
			<button class="tui-btn tui-btn-block tui-danger tui-fillet" hover-class="tui-danger-hover" @click="submit">
				提交</button>
		</view> -->
		<tui-datetime ref="dateData" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor" :color="color"
		 :setDateTime="setDateTime" @confirm="change_date"></tui-datetime>
		<tui-datetime ref="dateTime" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor" :color="color"
		 :setDateTime="setDateTime" @confirm="change_time"></tui-datetime>
		<w-picker mode="region" :defaultVal="['北京市','市辖区','东城区']" @confirm="onConfirm" ref="region"></w-picker>
	</view>

</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	import tuiButton from "@/components/button/button"
	import tuiDatetime from "@/components/dateTime/dateTime"
	export default {
		components: {
			tuiButton,
			tuiDatetime,
			wPicker
		},
		data() {

			return {
				i: '',
				select_data: '点击选择',
				form: [],
				indexx: '',
				input: '',
				ind: 0,
				resultInfo: {
					result: '请选择地区'
				},
				text: "选择城市",
				type: 1,
				startYear: 1980,
				endYear: 2030,
				cancelColor: "#888",
				color: "#5677fc",
				setDateTime: "",
				result: "选择日期",
				time: "选择时间",
				arr: {},

				data: [{
						type: "radio",
						name: "sex",
						desc: "性别",
						value: "",
						option: [{
							value: 0,
							name: "女",
							default: 1
						}, {
							value: 1,
							name: "男"
						}]
					},
					{
						type: "input",
						name: "name",
						desc: "姓名",
						value: ""
					},
					{
						type: "textarea",
						name: "msg",
						desc: "留言",
						value: ""
					},
					{
						type: "date",
						name: "date",
						desc: "日期",
						value: ""
					},
					{
						type: "switch",
						name: "switch",
						desc: "开关",
						value: ""
					},
					{
						type: "check",
						name: "check",
						desc: "套餐",
						value: "",
						option: [{
							value: 0,
							name: "A"
						}, {
							value: 1,
							name: "B"
						}],
					},
					{
						type: "city",
						name: "city",
						desc: "城市",
						value: ""
					},
					{
						type: "time",
						name: "time",
						desc: "时间",
						value: ""
					},
					{
						type: "country",
						name: "country",
						desc: "国家",
						value: "",
						option: ["中国",

							"美国",


							"巴西"
						]
					}
				],
			}
		},
		// props:['data_form','farther_fun'],
		props: {
			data_form: Array,
			
			kg: ''
		},
		created() {
			
			// const data = this.data
			// let arr = {}
			// for (let k in data) {
			// 	const v = data[k]
			// 	arr[v.name] = v.value + ''
			// }
			// this.arr = arr

		},
		watch: {
			
		},

		methods: {
			get_form(){
				this.$emit('get_data',this.arr)
			},
			input_get(e, name) {
				console.log(e, name)
				this.arr[name] = e.detail.value
			},
			bindPickerChange: function(e, type, index, name) {
				if (type == 'country') {
					console.log('picker发送选择改变，携带值为', e.target.value)
					this.ind = e.target.value
					this.arr.country = e.target.value
				}
				if (type == 'select') {
					console.log(e)
					this.i = e.detail.value
					this.form[index].default = this.form[index].options[e.detail.value]
					this.arr[name] = this.form[index].options[e.detail.value]
				}

			},
			toggleTab() {
				this.$refs['region'].show();
			},
			onConfirm(val) {
				console.log(val);
				//如果页面需要调用多个mode类型，可以根据mode处理结果渲染到哪里;
				// switch(this.mode){
				// 	case "date":
				// 		break;
				// }
				this.resultInfo = val;
				this.arr.city = this.resultInfo.result
			},

			checkboxChange: function(e, name) {
				this.arr[name] = e.detail.value

			},
			switch1Change: function(e, name) {
				this.arr[name] = e.target.value
			},
			submit() {
				console.log(this.arr)
			},

			radioChange(e, name) {
				this.arr[name] = e.detail.value
			},
			show_date: function(type, index, name) {
				this.cancelColor = "#888";
				this.color = "#5677fc";
				this.setDateTime = "";
				this.startYear = 1980;
				this.endYear = 2030;
				switch (type) {
					case 1:
						//this.setDateTime = "2019-10-12";
						this.type = 2;
						this.indexx = index
						this.date_name = name
						break;
					case 3:
						// this.setDateTime = "18:01";
						this.type = 4;
						this.indexx = index
						this.date_name = name
						break;
					default:
						break;
				}
				this.$refs.dateData.show()
			},
			change_date: function(e) {
				const that = this
				console.log(e)
				this.data_form[this.indexx].default = e.result
				this.form[this.indexx].default = e.result
				console.log(this.form[this.indexx])
				this.arr[this.date_name] = e.result

				// this.result = e.result
			},
			show_time: function(type, index, name) {
				this.cancelColor = "#888";
				this.color = "#5677fc";
				this.setDateTime = "";
				this.startYear = 1980;
				this.endYear = 2030;
				switch (type) {
					case 1:
						//this.setDateTime = "2019-10-12";
						this.type = 2;
						this.indexx = index
						this.time_name = name
						break;
					case 3:
						// this.setDateTime = "18:01";
						this.type = 4;
						this.indexx = index
						this.time_name = name
						break;
					default:
						break;
				}
				this.$refs.dateTime.show()
			},
			change_time: function(e) {
				console.log(e)
				this.data_form[this.indexx].default = e.result
				this.arr[this.time_name] = e.result
			}
		}
	}
</script>

<style lang="scss">
	@import '../../static/style/thorui.css';

	input::-webkit-input-placeholder {
		/* placeholder颜色  */
		
		/* placeholder字体大小  */
		font-size: 26upx;
		/* placeholder位置  */
		text-align: right;
	}
	.uni-input-placeholder{
		font-size: 26upx;
	}
	.form {
		font-size: 26upx;
		color: $font-color-light;

		.biao {
			display: flex;
			border-bottom: 1px solid #EDECE8;
			padding: 10upx 30upx 10upx 40upx;
			align-items: center;
			line-height: 70upx;
			position: relative;
			justify-content: space-between;

			.biao-l {

				text-align: right;
				flex-shrink: 0;
				font-size: 26upx;
				color: $font-color-light;
			}

			.biao-r {
				input::-webkit-input-placeholder {
					font-size: 20px;
					color: $font-color-light;
				}

				font-size: 26upx;
				padding-left: 25px;
				// flex-grow: 1;
				text-align: right;

				textarea {
					width: 90%;
					height: 80px;
				}

				span {
					padding-left: 10px;
				}
			}
		}

		.btn {
			padding: 50px 10px 0;
		}

		.uni-input {
			background-color: #fff;
		}
	}
</style>
