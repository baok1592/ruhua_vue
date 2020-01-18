import {Api_url} from './config'

const Wxcode_url= Api_url+"/auth/wxcode_url"
const Token_url= Api_url+"/auth/gzh_token"

// 获取openid需到公众号平台设置：IP白名单 和 授权域名；
// ip是服务器IP，域名是前端域名
class WxToken { 	
	constructor() { 
		
	}
	
	verify(e=''){
		let type=''
		if(e=='userinfo'){ 
			type='userinfo'
		}  
		const code = this.GetUrlParame('code') // 截取code  
		var domine = window.location.href.split("#")[0]; // 微信会自动识别#    并且清除#后面的内容 
		var domine = domine.split("?code")[0]; 
		if (!code) {
			console.log('获取code')		
			var token = uni.getStorageSync('token'); //获取缓存
			if (token) { 
				return; 
			}
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
		} else {
			console.log('获取token,跳:',domine)			
			uni.request({
			  	url: Token_url,
			  	method: 'GET',
				data:{code},
			  	success: function (res) {	
			  		console.log(res.data);
			  		if (res.data.token) { 
			  			uni.setStorageSync("token", res.data.token);						
			  			window.location.href =domine 		
						// uni.switchTab({
						// 	url:'/pages/index/index'
						// })
			  		}
			  	}
			});  
		}
	}
	
	spliceCode(){	
		const code = this.GetUrlParame('code') // 截取code  
		var domine = window.location.href.split("?code")[0]; // 微信会自动识别#    并且清除#后面的内容 
		if (code) {
			uni.request({
			  	url: Token_url,
			  	method: 'GET',
				data:{code},
			  	success: function (res) {
			  		console.log(res.data);
			  		if (res.data.token) { 
			  			uni.setStorageSync("gzh_token", res.data.token);	
						console.log('页面end:',res.data.token) 						
			  			window.location.href =domine
			  		}
			  	}
			});  
		}
	}
	
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