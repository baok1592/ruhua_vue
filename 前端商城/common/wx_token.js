import {Api_url} from './config' 
import http from './axios.js'
import Vue from 'vue'

const Wxcode_url= Api_url+"/auth/wxcode_url"
const Token_url= Api_url+"/auth/gzh_token"
const VerifyUrl = Api_url + '/auth/token_verify';

// 获取openid需到公众号平台设置：IP白名单 和 授权域名；
// ip是服务器IP，域名是前端域名

class WxToken { 	
	constructor() { 
		
	}	
	 
	
	//初始化登陆
	async verify(e) { 		
		console.log("H5验证登陆")
		// 判断是否是微信浏览器打开
		var ua = navigator.userAgent.toLowerCase();
		var isWeixin = ua.indexOf('micromessenger') != -1;
		if (!isWeixin) { 
			console.log("非公众号-暂不登陆")
		    return false;
		} 
		console.log("微信浏览器访问中")
		
		var token = uni.getStorageSync('token'); //获取缓存
		let type = e=='userinfo'?'userinfo':'';
		
		if(token){		
			console.log("验证token")	
			this._veirfyFromServer(token,type)	//验证token是否失效
		}else{
			console.log("进行登陆中")
			this.login(type)	//登陆
		}
		 
	}	
	
	login(type){		
		const code = this.GetUrlParame('code') // 截取code		
		
		if (!code) {
			this.get_code(type)
		}else{
			this.get_token()
		}	
	}	
	
	get_code(type){		 
		console.log("获取code")
		
		var domine = window.location.href.split("#")[0]; // 微信会自动识别#    并且清除#后面的内容
		domine = domine.split("?code")[0]; 
		uni.request({
		  	url: Wxcode_url,
		  	method: 'GET',  
			data:{
				url:domine,
				type
			},
		  	success: function (res) {   	
				console.log('codes:',res)
				const err=res.data.indexOf('object')//错误的url会包含object
				if(res.data && err<0){ 
					window.location.href = res.data;
				}
		  	}
		}); 
	}
	
	get_token(e){
		const code = this.GetUrlParame('code') // 截取code		
		uni.request({
		  	url: Token_url,
		  	method: 'GET',
			data:{code},
		  	success: function (res) {	 
				console.log(res)
		  		if (res.data.token) { 
					console.log(res)
		  			uni.setStorageSync("token", res.data.token);						
		  			window.location.href =domine 		 
		  		}
		  	}
		});  	
	}	
	
	 
	//验证token
	_veirfyFromServer(token,type) {
		var that = this;
		uni.request({
			url: VerifyUrl,
			method: 'POST',
			data: {
				token: token
			},
			success: function(res) {
				var valid = res.data.isValid;
				if (!valid) {
					that.login(type);
				}else{
					console.log("token有效")
				}
			}
		})
	}
	 
	//截取code
	GetUrlParame(parameName) {  
		/// 获取地址栏指定参数的值
		/// <param name="parameName">参数名</param>
		// 获取url中跟在问号后面的部分
		var parames = window.location.search
		// 检测参数是否存在
		if (parames.indexOf(parameName) > -1) {
			var parameValue = ''
			parameValue = parames.substring(parames.indexOf(parameName), parames.length)
			// 检测后面是否还有参数
			if (parameValue.indexOf('&') > -1) {
				// 去除后面多余的参数, 得到最终 parameName=parameValue 形式的值
				parameValue = parameValue.substring(0, parameValue.indexOf('&'))
				// 去掉参数名, 得到最终纯值字符串
				parameValue = parameValue.replace(parameName + '=', '')
				return parameValue
			}
			return ''
		}
	}

} 


export { WxToken };