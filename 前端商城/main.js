import Vue from 'vue'
import App from './App' 
import http from './common/axios.js'
import {Api_url} from './common/config'
import Switch from 'common/switch.js' 
import * as filters from 'common/filters/filters.js'
App.mpType = 'app'  

 
const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}
Vue.prototype.$api = {msg,http,prePage};
Vue.prototype.$getimg = Api_url	
Vue.prototype.shop_name = "如花商城" 
 
Vue.prototype.version = "shops2"  //首页,个人中心

//过滤器集合
Object.keys(filters).forEach(key =>{
	Vue.filter(key,filters[key])
})
 
Vue.prototype.promise_switch = Switch.set_storage() 
 

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()


