(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xieyi/xieyi"],{"1b0f":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{type:"",content:""}},onLoad:function(t){this.type=t.type,this._load()},methods:{_load:function(){var t=this;this.$api.http.get("index/get_file?type="+this.type).then(function(n){t.content=n})}}};n.default=u},"2ae4":function(t,n,e){},"5f5e":function(t,n,e){"use strict";(function(t){e("6417"),e("921b");u(e("66fd"));var n=u(e("fd81"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},8144:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return i})},b7d9:function(t,n,e){"use strict";var u=e("2ae4"),i=e.n(u);i.a},e4bc:function(t,n,e){"use strict";e.r(n);var u=e("1b0f"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=i.a},fd81:function(t,n,e){"use strict";e.r(n);var u=e("8144"),i=e("e4bc");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("b7d9");var o=e("2877"),f=Object(o["a"])(i["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports}},[["5f5e","common/runtime","common/vendor"]]]);