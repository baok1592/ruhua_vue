
import productModel from "@/model/product.js"
var time = Date.parse(new Date()) / 1000

export default { 
	_set_home_cache(res){  
		console.log('11')
		console.log(res[0])
		let arr={}
		arr['data'] = res
		arr['cache_time']=time
		uni.setStorageSync('home', arr);//放入缓存
		console.log('set')
	},
	//第一次设置缓存
	_set_product_cache(res){
		console.log("productCache")
		uni.removeStorageSync('product')
		let goods={
			data:{},
			pro_time:time+60*20
		}
		goods.data[res.goods_id]=res 
		uni.setStorageSync('product',goods)
	},
	
	
	async get_pro_detail(id,xiala){
		let cache=uni.getStorageSync('product')
		if(cache.pro_time && time < cache.pro_time){ // 时间戳是否过期
			if(cache.data[id] && xiala==false){ // 查询缓存，存在就返回
				return {
					data:cache.data[id]
				};
			}else{ // 查询缓存，不存在就进行请求加入缓存再返回				
				return productModel.getProduct(id).then(res=>{
					const pro =res.data
					cache.data[pro.goods_id]=pro
					uni.removeStorageSync('product')
					uni.setStorageSync('product',cache)
					return res;
				})
			}
			return
		}else{
			const pro_data=await productModel.getProduct(id).then(res=>{
				this._set_product_cache(res.data)
				return res				
			})
			return pro_data;
		}	
	},
}  