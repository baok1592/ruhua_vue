//  
import http from '../common/axios.js'

export default{
	// All
	getCategoryAll(){
		let url='category/all_category'
		return http.get(url).then(res=>{
			return res;
		})
	},
	
	// one
	getCategoryOne(){
		let url='category/get_category'
		return http.get(url,{id:1}).then(res=>{
			return res;
		})
	},
	
	// Cid
	getCategoryCid(index){
		let url='category/category_cid'
		return http.get(url,{id:index}).then(res=>{
			return res;
		})
	},
}