
function globalurl(){
	return "http://ttdelay.zhongrenweiye.com:8099/renren-fast/"
	// return "http://192.168.3.14:8099/renren-fast/"
}
function auth_method(){
	uni.request({
		 url:globalurl()+"app/auth/initAuth",
    header: {
      
    },
    success: (res) => {
       location.assign(res.data.url)
	   // console.log(res.data.url)
    }
	})
	
}
function globalajaxByput(url,data,fun){
	// var token;
	// uni.getStorage({
	// 	key: 'token',
	// 	success: function(res) {
	// 		token = res.data;
	// 	},
	// 	fail:function(){
	// 		auth_method();
	// 	}
	// });
	if(data=={}){
		console.log(111111);
		uni.request({
			url:globalurl()+url,
			header: {
				'Content-Type': "application/x-www-form-urlencoded",
				'X-Nideshop-Token': 123 //测试环境 test
			},
			method:"PUT",
			success: (res) => {
				return fun(res);
			},
			fail:(res)=>{
				console.log(234)
			}
		});
	}else{
		console.log(22222);
		uni.request({
			url:globalurl()+url,
			data:data,
			header: {
				'Content-Type': "application/x-www-form-urlencoded",
				'X-Nideshop-Token': 1 //测试环境 test
			},
			method:"PUT",
			success: (res) => {
				return fun(res);
			},
			fail:(res)=>{
				console.log(234)
			}
		});
	}
}
function globalajax(url,data,fun){
	var token;
	uni.getStorage({
		key: 'token',
		success: function(res) {
			token = res.data;
		},
		fail:function(){
			auth_method();
		}
	});
	if(data=={}){
		uni.request({
			url:globalurl()+url,
			header: {
				'Content-Type': "application/x-www-form-urlencoded",
				'X-Nideshop-Token': token //测试环境 test
			},
			method:"POST",
			success: (res) => {
				if(res.code==401|| res.data.code==401){
					auth_method();
				}else{
					return fun(res);
				}
			}
		});
	}else{
		uni.request({
			url:globalurl()+url,
			data:data,
			header: {
				'Content-Type': "application/x-www-form-urlencoded",
				'X-Nideshop-Token': token //测试环境 test
			},
			method:"POST",
			success: (res) => {
				if(res.code==401|| res.data.code==401){
					auth_method();
				}else{
					return fun(res);
				}
				
			}
		});
	}
}
function globalUserId(fun){
	uni.getStorage({
		key: 'userId',
		success: function(res) {
			return fun(res.data)
		},
		fail:function(){
			auth_method();
		}
	});
}
function judgeLevel(fun){
	uni.getStorage({
		key: 'judge',
		success: function(res) {
		
			return fun(res.data)
		},
		fail:function(){
		
			auth_method();
		}
	});
}




export {
	 globalurl,
	 auth_method,
	 globalajax,
	 globalUserId,
	 judgeLevel,
	 globalajaxByput
}