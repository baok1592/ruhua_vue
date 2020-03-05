(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/qy/xieyi"],{"3c5f":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.xy=!1})},i=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return i})},5088:function(t,n,e){"use strict";e.r(n);var u=e("fa68"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=i.a},"56ef":function(t,n,e){},"7f30":function(t,n,e){"use strict";var u=e("56ef"),i=e.n(u);i.a},"83ea":function(t,n,e){"use strict";e.r(n);var u=e("3c5f"),i=e("5088");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("7f30");var f=e("2877"),o=Object(f["a"])(i["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},fa68:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{xy:!1}},props:{name:String},components:{},created:function(){t.getStorageSync("xyfile")||(this.xy=!0)},methods:{sapprove:function(n){t.setStorageSync("xyfile",n),this.xy=!1},jump_xieyi:function(n){t.navigateTo({url:"/pages/xieyi/xieyi?type="+n})}}};n.default=e}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/qy/xieyi-create-component',
    {
        'components/qy/xieyi-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("83ea"))
        })
    },
    [['components/qy/xieyi-create-component']]
]);
