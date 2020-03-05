//  用户的缓存数据 
import http from '../axios.js'

var time = Date.parse(new Date()) / 1000

class CUser { 
	constructor() { 
		console.log('tine:',time)
	}
	
	info(){   
		const my=uni.getStorageSync('my')
		if(my && (my.save_time+3600*2)>time){
			return my.data
		}
		return http.get('/user/info').then(res => {
			console.log('ass:',res)
			let arr={}
			arr['data'] = res.data
			arr['save_time']=time
			uni.setStorageSync('my', arr);//放入缓存
			return res.data			
		})
	}
} 


export { CUser };