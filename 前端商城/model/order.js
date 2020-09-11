//  订单请求
import http from '../common/axios.js'

export default{
	// 
	postOrderAll(){
		let url='order/user/all_order'
		return http.post(url).then(res=>{
			return res;
		})
	},

	// 支付  Mp-WEIXIN
	postOrderWxPay(index){  
		let url='order/pay/pre_order'
		return http.post(url,{id:index}).then(res=>{
			return res;
		})
	},
	// 支付 App-plus
	postOrderAppPay(index){  
		let url='order/pay/pre_app'
		return http.post(url,{id:index}).then(res=>{
			return res;
		})
	},
	// 支付 h5
	postOrderH5Pay(index){  
		let url='order/second_pay'
		return http.post(url,{id:index}).then(res=>{
			return res;
		})
	},
	
	// 删除订单
	putOrderdel(index){
		let url='order/user/del_order?id='
		return http.put(url,{id:index}).then(res=>{
			return res;
		})
	},
	
	// pt
	getPtOneItem(index){
		let url='pt/get_one_item'
		return http.post(url,{id:index}).then(res=>{
			return res;
		})
	},
	// 团长下单
	postPtCreateItem(obj){  
		let url='pt/create_pt_item'
		return http.post(url,obj).then(res=>{
			return res;
		})
	},
	// 团员下单
	postPtCreateItems(obj){  
		let url='pt/create_pt'
		return http.post(url,obj).then(res=>{
			return res;
		})
	},
	
	
}