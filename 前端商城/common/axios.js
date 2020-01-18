import {Api_url} from './config'
// import {Token} from './token.js'
// var token = new Token();

export default { 
	async post(url, param) {
		const res = await this.uni_request(url,param,'post')  
		return res;
	},
	async get(url, param) {
		const res = await this.uni_request(url,param,'get') 
		return res;
	}, 
	async put(url, param) {
		const res = await this.uni_request(url,param,'put') 
		return res;
	}, 
	uni_request(url,param,method,again_quest=true) {
		const that=this
		let token=''
		if(uni.getStorageSync("token")){
			token=uni.getStorageSync("token")
		}
	    return new Promise((cback, reject) => {
	    	uni.request({
	    		url: Api_url + url,
	    		data: param,
	    		method:method,
	    		header: {
					token
	    		},
	    	}).then(data => { //data为一个数组，数组第一项为错误信息，第二项为返回数据
	    		var [error, res] = data;
	    		var res_code = res.statusCode.toString(); 
	    		if (res_code.charAt(0) == 2) { 
	    			if(res_code==200){
	    				console.log('200',url)
	    				cback(res.data); 
	    			}else{
						console.log('201',url)
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				}else{
					if(res_code==401){
						//登录失效
						console.log('401',url) 
						if(again_quest){
							// token.getTokenFromServer(()=>{
							// 	const again_res=that.uni_request(url,param,method,false)	
							// 	//注意这里需要cback，因为是上一个promis的cback
							// 	cback(again_res); 
							// });				
						}else{
							console.log('再次登陆仍然失败',url)
						} 
					}else{
						console.log('400/500',url,error,res)
						uni.showToast({
							title:res.data.msg?res.data.msg:'请求异常',
							icon:'none'
						})
					}
				}	
			}).catch(err => { 
				console.log('catch:',err);					 
			})
		})	
	}, 

}
