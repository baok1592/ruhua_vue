import {Api_url} from './config'
import http from './axios.js'

class AppToken {
	constructor() { 
		this.verifyUrl = Api_url + 'auth/token_verify'; 
	}

	//初始化登陆
	verify() { 
		console.log("app验证token") 
		var token = uni.getStorageSync('token'); //获取缓存2
		if (!token) { 
			this.login_page();
		} else {
			this._veirfyFromServer(token); //验证token是否过期，过期调用.getTokenFromServer函数获取
		} 
	}
	//验证token
	_veirfyFromServer(token) {
		var that = this;
		uni.request({
			url: that.verifyUrl,
			method: 'POST',
			data: {
				token: token
			},
			success: function(res) {
				var valid = res.data.isValid;
				if (!valid) {
					that.login_page();
				}
			}
		})
	}
	 
	login_page(){
		let gl=1
		http.get("index/user/sys_config").then(res=>{
			for (let k in res.data) { 
				let v = res.data[k]
				if(v.key=="merge_mode"){
					gl=v.value
				} 
			} 
			if (gl == 1) {
				uni.redirectTo({
					url: '/pages/login/login'
				})
			} else if (gl == 2) {
				uni.redirectTo({
					url: '/pages/login/loginA/loginA'
				})
			} else{
				uni.redirectTo({
					url: '/pages/login/loginB/loginB'
				}) 
			} 
		})    
	}
	
	
}
export {
	AppToken
};


