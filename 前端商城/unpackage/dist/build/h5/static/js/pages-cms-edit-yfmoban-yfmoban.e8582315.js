(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cms-edit-yfmoban-yfmoban"],{"1b0a":function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{list:[1,2,3],yfmoban:""}},onLoad:function(){this.yfmoban=this.$api.json.yfmoban}};a.default=i},3529:function(n,a,t){"use strict";t.r(a);var i=t("1b0a"),s=t.n(i);for(var e in i)"default"!==e&&function(n){t.d(a,n,function(){return i[n]})}(e);a["default"]=s.a},"4b31":function(n,a,t){"use strict";var i,s=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("v-uni-view",{staticClass:"yfmoban"},[t("v-uni-view",{staticClass:"list"},[t("v-uni-view",{staticClass:"list_l"},[n._v("模板名称")]),t("v-uni-view",{staticClass:"list_r"},[n._v(n._s(n.yfmoban.name))])],1),t("v-uni-view",{staticClass:"list"},[t("v-uni-view",{staticClass:"list_l"},[n._v("使用范围")]),t("v-uni-view",{staticClass:"list_r"},[n._v(n._s(n.yfmoban.fanwei))])],1),n._l(n.yfmoban.quyu,function(a,i){return t("v-uni-view",{key:i,staticClass:"fan"},[t("v-uni-view",{staticClass:"fan_01"},[n._v("可配送区域")]),t("v-uni-view",{staticClass:"fan_02"},[n._v(n._s(a.province))]),t("v-uni-view",{staticClass:"fan_03"},[t("v-uni-view",{staticClass:"fan_01_01"},[t("v-uni-view",{staticClass:"fan_01_01_l"},[n._v("首件")]),t("v-uni-view",{staticClass:"fan_01_01_r"},[n._v(n._s(a.shou)),t("span",[n._v("件")])])],1),t("v-uni-view",{staticClass:"fan_01_01"},[t("v-uni-view",{staticClass:"fan_01_01_l"},[n._v("运费")]),t("v-uni-view",{staticClass:"fan_01_01_r"},[n._v(n._s(a.s_price)),t("span",[n._v("元")])])],1),t("v-uni-view",{staticClass:"fan_01_01"},[t("v-uni-view",{staticClass:"fan_01_01_l"},[n._v("续件")]),t("v-uni-view",{staticClass:"fan_01_01_r"},[n._v(n._s(a.xu)),t("span",[n._v("件")])])],1),t("v-uni-view",{staticClass:"fan_01_01"},[t("v-uni-view",{staticClass:"fan_01_01_l"},[n._v("续费")]),t("v-uni-view",{staticClass:"fan_01_01_r"},[n._v(n._s(a.x_price)),t("span",[n._v("元")])])],1)],1)],1)})],2)},e=[];t.d(a,"b",function(){return s}),t.d(a,"c",function(){return e}),t.d(a,"a",function(){return i})},8556:function(n,a,t){"use strict";var i=t("d2b8"),s=t.n(i);s.a},a6e2:function(n,a,t){"use strict";t.r(a);var i=t("4b31"),s=t("3529");for(var e in s)"default"!==e&&function(n){t.d(a,n,function(){return s[n]})}(e);t("8556");var f,o=t("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"6b481912",null,!1,i["a"],f);a["default"]=c.exports},b007:function(n,a,t){a=n.exports=t("2350")(!1),a.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.yfmoban[data-v-6b481912]{background-color:#f3f4f6;min-height:100vh;padding-top:1px;font-size:16px}.yfmoban .list[data-v-6b481912]{background-color:#fff;margin:20px 0 5px;padding:19px 15px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:1px solid #ededef;border-top:1px solid #ededef}.yfmoban .list .list_r[data-v-6b481912]{color:#777}.yfmoban .fan[data-v-6b481912]{margin:15px 0 10px;background-color:#fff;padding:0 15px;line-height:40px}.yfmoban .fan .fan_02[data-v-6b481912]{border-top:1px solid #f5f5f5;color:#9a9a9a}.yfmoban .fan .fan_03[data-v-6b481912]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.yfmoban .fan .fan_03 .fan_01_01[data-v-6b481912]{width:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;box-sizing:border-box;border-top:1px solid #f5f5f5}.yfmoban .fan .fan_03 .fan_01_01 span[data-v-6b481912]{color:#9c9c9c;padding:0 10px 0 5px}',""])},d2b8:function(n,a,t){var i=t("b007");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var s=t("4f06").default;s("f7f8e45e",i,!0,{sourceMap:!1,shadowMode:!1})}}]);