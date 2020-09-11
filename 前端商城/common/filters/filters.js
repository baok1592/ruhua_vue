const new_price = (price) => {
	if(price > 1){
		price = Math.floor(price)
	}else{
		price = price
	}
	return price
}
const count_price = (price)=>{
	price = Math.floor(price * 100)/100
	return price.toFixed(2)
}
const date_filter = (v,new_date) => {
	let date = new Date(v * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = date.getDate() + ' ';
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
	var s = date.getSeconds();
	if(new_date == "M-D h-m"){
		return M + D + h + m
	}
	if(!new_date){
		return Y + M + D + h + m + s
	}
	
}
export{
	new_price,
	count_price,
	date_filter
}
