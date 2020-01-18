import Vue from 'vue'
import App from './App'  
import http from './common/axios.js'
import {Api_url} from './common/config'	//去这里修改API域名
  
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
Vue.prototype.$getimg = Api_url;
 
   					 		


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()


