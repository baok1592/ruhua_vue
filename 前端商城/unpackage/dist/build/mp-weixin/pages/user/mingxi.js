(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/mingxi"],{"2e88":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return Promise.all([e.e("common/vendor"),e.e("components/qy/none")]).then(e.bind(null,"4397"))},u=function(){return e.e("components/uni/uni-icon/uni-icon").then(e.bind(null,"1bc1"))},i={data:function(){return{total:0,num:0,vipList:[],vipList2:[{user_id:4,vip_order_id:17,from_mobile:"18208627757",money:"0.01",status:0,type:1,create_time:"2019-09-15"}],list_empty:!1}},components:{uniIcon:u,None:o},onLoad:function(){this._load()},methods:{_load:function(){var n=this;this.$api.http.get("fx/user/get_fx_record").then(function(t){n.vipList=t.data})},change:function(n){this.num=n,console.log(n)}},onPullDownRefresh:function(){console.log("refresh"),this._load(),setTimeout(function(){n.stopPullDownRefresh()},2e3)}};t.default=i}).call(this,e("543d")["default"])},"53b4":function(n,t,e){"use strict";(function(n){e("6417"),e("921b");o(e("66fd"));var t=o(e("f895"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"9fa6":function(n,t,e){"use strict";e.r(t);var o=e("2e88"),u=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=u.a},a2fa:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})},a386:function(n,t,e){"use strict";var o=e("f095"),u=e.n(o);u.a},f095:function(n,t,e){},f895:function(n,t,e){"use strict";e.r(t);var o=e("a2fa"),u=e("9fa6");for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);e("a386");var a=e("2877"),r=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports}},[["53b4","common/runtime","common/vendor"]]]);