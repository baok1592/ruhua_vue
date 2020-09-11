// 商品请求
import http from '../common/axios.js'
// 所有商品
function getProList(){ 
	let url='product/get_recent'
	return http.get(url).then(res=>{
		return res;
	})
}
//分类商品
function getProductCate(index){ 
	let url='product/get_cate_pros?id='
	return http.get(url,{id:index}).then(res=>{
		return res;
	})
}
//搜索商品
function getProductSearch(key){ 
	let url='product/search?name='
	return http.get(url + key).then(res=>{
		return res;
	})
}
//分销商品
function getProductFx(){ 
	let url='/fx/get_goods'
	return http.get(url).then(res=>{
		return res;
	})
}
//修改商品
function postProductEdit(item){ 
	let url='product/mcms/edit_product'
	return http.post(url,item).then(res=>{
		return res;
	})
}
// 获取单个商品的信息
function getProduct(index){ 
	let url='product/get_product?id=';
	return http.get(url, {
		id: index
	}).then(res=>{
		return res
	})
}
// 拼团相关
function getPtItem(index){ 
	let url='pt/get_item'
	return http.get(url,{
		id:index,
	}).then(res=>{
		return res;
	})
}
//热门推荐
function getProductHotRecent(){ 
	let url='product/get_recent'
	return http.get(url,{type:'hot'}).then(res=>{
		return res;
	})
}
//新品推荐
function getProductNewRecent(){ 
	let url='product/get_recent'
	return http.get(url,{type:'new'}).then(res=>{
		return res;
	})
}
//
function postProductAllInfo(){ 
	let url='product/mcms/all_goods_info'
	return http.post(url).then(res=>{
		return res;
	})
}
// 上架/下架商品
function putProductUpdate(index){ 
	let url='/mcms/update'
	return http.put(url,{
		id:index,
		db:'goods',
		field:'state'
	}).then(res=>{
		return res;
	})
}
// 删除
function putProductDel(index){ 
	let url='product/mcms/del_product'
	return http.put(url,{id:index}).then(res=>{
		return res;
	})
}

function postProductSimPrice(item){
	let url='product/get_shipment_price'
	return http.psot(url,item).then(res=>{
		return res;
	})
}

// 二维码 MP-WEIXIN
function postWxCode(index){  
	let url='user/get_xcx_code'
	return http.post(url,{
		path: 'pages/extend-view/productDetail/productDetail',
		scene: index
	}).then(res=>{
		return res;
	})
}
// 二维码 H5
function postH5Code(index){ 
	let url='user/get_web_code'
	return http.post(url,{
		path: 'pages/extend-view/productDetail/productDetail?id=' + index,
	}).then(res=>{
		return res;
	})
}
// 获取评价
function getEvalutes(index){
	let url='product/get_evaluate?id='
	return http.get(url,{id:index}).then(res=>{
		return res;
	})
}
function getCoupons(){
	let url='coupon/get_coupon'
	return http.get(url).then(res=>{
		return res;
	})
}
//
function postIsLike(index){
	let url='favorite/get_one_fav'
	return http.post(url,{id:index}).then(res=>{
		return res;
	})
}
// 领取优惠券
function getAddCoupons(index){
	let url='coupon/add_coupon'
	return http.get(url,{id:index}).then(res=>{
		return res;
	})
}
// 收藏--取消收藏
function putDelFavorite(index){ 
	let url='favorite/del_fav'
	return http.put(url,{id:index}).then(res=>{
		return res;
	})
}
// 收藏--收藏成功
function postAddFavorite(item){ 
	let url='favorite/add_fav'
	return http.post(url,item).then(res=>{
		return res;
	})
}

export default {
	getProduct, // 获取单个商品的信息
	getPtItem,  // MP-WEIXIN
	postWxCode,  // H5
	postH5Code,
	getEvalutes, // 获取评价
	getCoupons, // 
	postIsLike,
	getAddCoupons, // 领取优惠券
	putDelFavorite, // 取消收藏
	postAddFavorite, // 收藏成功
	getProList, // 所有商品
	getProductCate, // 分类商品
	getProductSearch, // 搜索商品
	getProductFx, // 分销商品
	getProductHotRecent, // 热门推荐
	getProductNewRecent, // 新品推荐
	postProductEdit, // 修改商品
	postProductAllInfo,
	putProductUpdate,  // 上架/下架商品
	putProductDel, // 删除
	postProductSimPrice, // 获取运费
}