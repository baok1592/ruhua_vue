(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invoices-invoices"],{"2d2a":function(t,i,e){var a=e("7e92");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("9e6073de",a,!0,{sourceMap:!1,shadowMode:!1})},"3d01":function(t,i,e){"use strict";e.r(i);var a=e("9152"),n=e("d6fa");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("d666");var l,o=e("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"6eebf21a",null,!1,a["a"],l);i["default"]=c.exports},"7e92":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.invoices[data-v-6eebf21a]{font-size:14px}.invoices .title[data-v-6eebf21a]{padding:20px 10px 10px;font-size:16px}.invoices .ttlx[data-v-6eebf21a]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:1px solid #f6f6f6;padding:10px 10px}.invoices .ttlx .ttlx-l[data-v-6eebf21a]{width:70px;padding:4px 0}.invoices .ttlx .ttlx-r[data-v-6eebf21a]{display:-webkit-box;display:-webkit-flex;display:flex}.invoices .ttlx .ttlx-r .ttlx-r-1[data-v-6eebf21a]{border:1px solid #ef5c80;color:#ef5c80;padding:5px 10px;border-radius:3px;margin-right:10px;min-width:60px;text-align:center}.invoices .ttlx .ttlx-r .ttlx-r-2[data-v-6eebf21a]{border:1px solid #e0e0e0;padding:5px 10px;border-radius:3px;margin-right:10px;min-width:60px;text-align:center}.invoices .ttlx .ttlx-m[data-v-6eebf21a]{padding:4px 0;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.invoices .ttlx .ttlx-m span[data-v-6eebf21a]{color:#888}.invoices .ttlx .ttlx-m uni-input[data-v-6eebf21a]{width:100%}.invoices .fpxz[data-v-6eebf21a]{padding:10px;color:#7d7d7d;font-size:12px;line-height:25px}.invoices .fpxz .fpxz-tit[data-v-6eebf21a]{padding:10px 0 5px;color:#000;font-size:14px}.invoices .B10[data-v-6eebf21a]{height:10px;background-color:#f5f5f5}.invoices .btn[data-v-6eebf21a]{position:fixed;bottom:0;left:0;margin:10px 3%;background-color:#e64340;width:94%;color:#fff;height:40px;line-height:40px;border-radius:3px;text-align:center}',""])},9152:function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"invoices"},[e("v-uni-view",{staticClass:"title"},[t._v("增值税电子普通发票")]),e("v-uni-view",{staticClass:"ttlx"},[e("v-uni-view",{staticClass:"ttlx-l"},[t._v("抬头类型")]),e("v-uni-view",{staticClass:"ttlx-r"},[e("v-uni-view",{class:1==t.fapiao?"ttlx-r-1":"ttlx-r-2",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fapiao=1}}},[t._v("不开发票")]),e("v-uni-view",{class:2==t.fapiao?"ttlx-r-1":"ttlx-r-2",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fapiao=2}}},[t._v("个人")]),e("v-uni-view",{class:3==t.fapiao?"ttlx-r-1":"ttlx-r-2",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fapiao=3}}},[t._v("单位")])],1)],1),1!=t.fapiao?e("v-uni-view",[3==t.fapiao?e("v-uni-view",{staticClass:"ttlx"},[e("v-uni-view",{staticClass:"ttlx-l"},[t._v("发票抬头")]),e("v-uni-view",{staticClass:"ttlx-m"},[e("v-uni-input",{attrs:{placeholder:"请填写单位名称"}})],1)],1):t._e(),3==t.fapiao?e("v-uni-view",{staticClass:"ttlx"},[e("v-uni-view",{staticClass:"ttlx-l"},[t._v("税号")]),e("v-uni-view",{staticClass:"ttlx-m"},[e("v-uni-input",{attrs:{placeholder:"请填写纳税人识别号"}})],1)],1):t._e(),e("v-uni-view",{staticClass:"ttlx"},[e("v-uni-view",{staticClass:"ttlx-l"},[t._v("发票内容")]),e("v-uni-view",{staticClass:"ttlx-m"},[e("v-uni-picker",{attrs:{value:t.index,range:t.array},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindPickerChange.apply(void 0,arguments)}}},[e("v-uni-view",[t._v(t._s(t.array[t.index]))])],1),e("v-uni-text",{staticClass:"yticon icon-you"})],1)],1),e("v-uni-view",{staticClass:"ttlx"},[e("v-uni-view",{staticClass:"ttlx-l"},[t._v("电子邮件")]),e("v-uni-view",{staticClass:"ttlx-m"},[e("v-uni-input",{attrs:{placeholder:"请填写接受电子发票的邮箱"}})],1)],1)],1):t._e(),1!=t.fapiao?e("v-uni-view",{staticClass:"B10"}):t._e(),1!=t.fapiao?e("v-uni-view",{staticClass:"fpxz"},[e("v-uni-view",{staticClass:"fpxz-tit"},[t._v("发票须知")]),t._v("1、电子发票与纸质发票具备同等法律效力，支持报销入账。"),e("br"),t._v("2、开票金额按订单实付计。"),e("br"),t._v("3、订单完成后可开具发票。"),e("br"),3==t.fapiao?e("span",[t._v("4、请确保抬头和纳税人识别号或统一社会信用代码准确，开票成功后无法更改。")]):t._e()],1):t._e(),e("v-uni-view",{staticClass:"btn"},[t._v("确定")])],1)},s=[];e.d(i,"b",function(){return n}),e.d(i,"c",function(){return s}),e.d(i,"a",function(){return a})},cc66:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{fapiao:1,array:["商品明细(请选择)","美国","巴西","日本"],index:0}},methods:{bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value}}};i.default=a},d666:function(t,i,e){"use strict";var a=e("2d2a"),n=e.n(a);n.a},d6fa:function(t,i,e){"use strict";e.r(i);var a=e("cc66"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a}}]);