import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
	  
	{
      path: '/',
      name: 'home',
      component: Home
    },
	{
	  	path: '/PicList',
	  	name: 'PicList',
	  	component: () => import('./views/PicList.vue')
	  },
	{
	  	path: '/login',
	  	name: 'Login',
	  	component: () => import('./views/login/Login.vue')
	  },
	{
		path: '/set_gift',
		name: 'set_gift',
		component: () => import('./views/set_gift/set_gift.vue')
	},
	{
		path: '/product/new_product',
		name: 'product',
		component: () => import('./views/product/new_product.vue')
	},
	{
		path: '/order/order',
		name: 'order',
		component: () => import('./views/order/order.vue')
	},
	
	{
		path: '/new_product',
		name: 'new_product',
		component: () => import('./views/product/new_product.vue')
	},
	{
		path: '/backup/backup',
		name: 'backup',
		component: () => import('./views/backup/backup.vue')
	},
	{
		path: '/user',
		name: 'user',
		component: () => import('./views/user/user.vue')
	},
	
	
	
	{
		path: '/money',
		name: 'money',
		component: () => import('./views/money/money.vue')
	},
	{
		path: '/data/data',
		name: 'data',
		component: () => import('./views/data/data.vue')
	},
	
	{
		path: '/ad',
		name: 'ad',
		component: () => import('./views/ad/ad.vue')
	},
	{
		path: '/ad/hot',
		name: 'hot',
		component: () => import('./views/ad/hot.vue')
	},
	{
		path: '/article',
		name: 'article',
		component: () => import('./views/ad/article.vue')
	},
	{
		path: '/ad/nav',
		name: 'nav',
		component: () => import('./views/ad/nav.vue')
	},
	{
		path: '/order/evaluate',
		name: 'evaluate',
		component: () => import('./views/order/evaluate.vue')
	},
	
	{
		path: '/user/point',
		name: 'point',
		component: () => import('./views/user/point.vue')
	},
	{
		path: '/product/template',
		name: 'template',
		component: () => import('./views/product/template.vue')
	},
	{
		path: '/product/addtemplate',
		name: 'template',
		component: () => import('./views/product/addtemplate.vue')
	},
	{
		path: '/product/edittemplate',
		name: 'edittemplate',
		component: () => import('./views/product/edittemplate.vue')
	},
	{
		path: '/extend',
		name: 'extend',
		component: () => import('./views/extend/extend.vue')
	},
	
	{
		path: '/components/time_range/time_range',
		name: 'time_range',
		component: () => import('./components/time_range/time_range.vue')
	},
	{
		path: '/product/category',
		name: 'cate',
		component: () => import('./views/product/category.vue')
	},
	{
		path: '/coupon',
		name: 'coupon',
		component: () => import('./views/extend/coupon.vue')
	},
	{
		path: '/addcoupon',
		name: 'addcoupon',
		component: () => import('./views/extend/addcoupon.vue')
	},
	{
		path: '/set',
		name: 'set',
		component: () => import('./views/set/set.vue')
	},
	
	{
		path: '/lout',
		name: 'lout',
		component: () => import('./views/login/lout.vue')
	}, 
	{
		path: '/good',
		name: 'good',
		component: () => import('./views/product/Good.vue')
	}
  ]
})
