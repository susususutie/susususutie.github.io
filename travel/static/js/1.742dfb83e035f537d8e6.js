webpackJsonp([1],{"/9oH":function(t,n,e){var r=e("Mr+r"),i=e("cM3n");t.exports=e("berT")?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},"1bUF":function(t,n,e){var r=e("B2yg"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},"2LXA":function(t,n,e){e("xIUw"),t.exports=e("Rv9F").Object.assign},"4YfN":function(t,n,e){"use strict";n.__esModule=!0;var r,i=e("aA9S"),s=(r=i)&&r.__esModule?r:{default:r};n.default=s.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},"67ME":function(t,n){},"6tXx":function(t,n){},"8leu":function(t,n,e){var r=e("BE4u"),i=e("Rv9F"),s=e("mR54"),o=e("/9oH"),a=e("l9T2"),c=function(t,n,e){var u,l,f,p=t&c.F,v=t&c.G,d=t&c.S,h=t&c.P,m=t&c.B,_=t&c.W,y=v?i:i[n]||(i[n]={}),g=y.prototype,b=v?r:d?r[n]:(r[n]||{}).prototype;for(u in v&&(e=n),e)(l=!p&&b&&void 0!==b[u])&&a(y,u)||(f=l?b[u]:e[u],y[u]=v&&"function"!=typeof b[u]?e[u]:m&&l?s(f,r):_&&b[u]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):h&&"function"==typeof f?s(Function.call,f):f,h&&((y.virtual||(y.virtual={}))[u]=f,t&c.R&&g&&!g[u]&&o(g,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},"9tun":function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},B2yg:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},BE4u:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},BcUX:function(t,n,e){var r=e("PUvy");t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},E5yg:function(t,n,e){var r=e("bkRK"),i=e("hsAM");t.exports=Object.keys||function(t){return r(t,i)}},HQgd:function(t,n,e){var r=e("PUvy"),i=e("BE4u").document,s=r(i)&&r(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},KyAV:function(t,n){},"Mr+r":function(t,n,e){var r=e("fRqy"),i=e("SJYL"),s=e("BcUX"),o=Object.defineProperty;n.f=e("berT")?Object.defineProperty:function(t,n,e){if(r(t),n=s(n,!0),r(e),i)try{return o(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},Myb3:function(t,n,e){var r=e("kKxU");t.exports=function(t){return Object(r(t))}},PUvy:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},Qslx:function(t,n){n.f={}.propertyIsEnumerable},RpAZ:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},Rv9F:function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},SJYL:function(t,n,e){t.exports=!e("berT")&&!e("9tun")(function(){return 7!=Object.defineProperty(e("HQgd")("div"),"a",{get:function(){return 7}}).a})},VpqT:function(t,n){},WBgg:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},WsMO:function(t,n){},X1tf:function(t,n){t.exports=!0},aA9S:function(t,n,e){t.exports={default:e("2LXA"),__esModule:!0}},aJPw:function(t,n,e){var r=e("sX97"),i=e("kKxU");t.exports=function(t){return r(i(t))}},bYoP:function(t,n,e){"use strict";var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",{staticClass:"footer"},[e("ul",{staticClass:"footer-nav border-bottom"},[e("li",[e("a",{attrs:{href:"https://baidu.com"}},[t._v("登    录")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://baidu.com"}},[t._v("我的订单")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://baidu.com"}},[t._v("个人中心")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://baidu.com"}},[t._v("最近浏览")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://baidu.com"}},[t._v("关于我们")])])]),t._v(" "),e("ul",{staticClass:"mobile-pc"},[e("li",[e("a",{attrs:{href:"https://baidu.com"}},[t._v("触屏版")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://baidu.com"}},[t._v("电脑版")])])]),t._v(" "),e("div",{staticClass:"copyright"},[e("span",[t._v("Qunar 京ICP备05021087")]),t._v(" "),e("a",{attrs:{href:"https://baidu.com"}},[t._v("意见反馈")])])])}]};var i=e("C7Lr")({name:"VFooter"},r,!1,function(t){e("fW2u")},"data-v-2c3d3982",null);n.a=i.exports},berT:function(t,n,e){t.exports=!e("9tun")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},bkRK:function(t,n,e){var r=e("l9T2"),i=e("aJPw"),s=e("hdzP")(!1),o=e("hWJj")("IE_PROTO");t.exports=function(t,n){var e,a=i(t),c=0,u=[];for(e in a)e!=o&&r(a,e)&&u.push(e);for(;n.length>c;)r(a,e=n[c++])&&(~s(u,e)||u.push(e));return u}},cM3n:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},caAB:function(t,n,e){var r=e("Rv9F"),i=e("BE4u"),s=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return s[t]||(s[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("X1tf")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},cr3F:function(t,n){},eu6x:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},fRqy:function(t,n,e){var r=e("PUvy");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},fW2u:function(t,n){},ghUT:function(t,n,e){var r=e("B2yg"),i=Math.max,s=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):s(t,n)}},hWJj:function(t,n,e){var r=e("caAB")("keys"),i=e("WBgg");t.exports=function(t){return r[t]||(r[t]=i(t))}},hdzP:function(t,n,e){var r=e("aJPw"),i=e("1bUF"),s=e("ghUT");t.exports=function(t){return function(n,e,o){var a,c=r(n),u=i(c.length),l=s(o,u);if(t&&e!=e){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===e)return t||l||0;return!t&&-1}}},hsAM:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},i9aj:function(t,n){},kKxU:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},l9T2:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},ly0G:function(t,n,e){"use strict";var r=e("berT"),i=e("E5yg"),s=e("z6h9"),o=e("Qslx"),a=e("Myb3"),c=e("sX97"),u=Object.assign;t.exports=!u||e("9tun")(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=u({},t)[e]||Object.keys(u({},n)).join("")!=r})?function(t,n){for(var e=a(t),u=arguments.length,l=1,f=s.f,p=o.f;u>l;)for(var v,d=c(arguments[l++]),h=f?i(d).concat(f(d)):i(d),m=h.length,_=0;m>_;)v=h[_++],r&&!p.call(d,v)||(e[v]=d[v]);return e}:u},mR54:function(t,n,e){var r=e("eu6x");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},sX97:function(t,n,e){var r=e("RpAZ");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},tIfe:function(t,n){},wXUp:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("4YfN"),i=e.n(r),s=e("2bvH"),o={name:"VHeader",computed:i()({},Object(s.c)(["city"]))},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"header"},[t._m(0),t._v(" "),e("router-link",{staticClass:"header-input",attrs:{tag:"div",to:"/city"}},[e("span",{staticClass:"iconfont search-icon"},[t._v("")]),t._v("\n      输入城市查询\n    ")]),t._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[t._v("\n        "+t._s(this.city)+"\n        "),e("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"header-left"},[n("div",{staticClass:"iconfont back-icon"},[this._v("")])])}]};var c=e("C7Lr")(o,a,!1,function(t){e("WsMO")},"data-v-0feb4448",null).exports,u={name:"VSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"wrapper"},[this.showSwiper?n("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return n("swiper-slide",{key:t.id},[n("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var f=e("C7Lr")(u,l,!1,function(t){e("cr3F")},"data-v-27b5baf6",null).exports,p={name:"VIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1,pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.list.forEach(function(n,e){var r=Math.floor(e/8);t[r]||(t[r]=[]),t[r].push(n)}),t}}},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"icons"},[e("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(n,r){return e("swiper-slide",{key:r},t._l(n,function(n){return e("router-link",{key:n.id,staticClass:"icon",attrs:{tag:"div",to:"detail_"+n.id}},[e("div",{staticClass:"icon-img"},[e("img",{staticClass:"icon-img-content",attrs:{src:n.imgUrl}})]),t._v(" "),e("p",{staticClass:"icon-title"},[t._v(t._s(n.desc))])])}),1)}),1),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)},staticRenderFns:[]};var d=e("C7Lr")(p,v,!1,function(t){e("6tXx")},"data-v-1a83f67a",null).exports,h={name:"InlineIcon",props:{type:{type:Number,default:1},size:{type:Number,default:2}},computed:{cls:function(){return"icon-"+this.size+" "+["heart","hot"][this.type]}}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"inline-icon",class:this.cls})},staticRenderFns:[]};var _=e("C7Lr")(h,m,!1,function(t){e("i9aj")},"data-v-5e5ed77b",null).exports,y={name:"VStar",props:{score:{type:Number,default:70}}},g={render:function(){var t=this.$createElement,n=this._self._c||t;return n("span",{staticClass:"star-wrapper"},[n("span",{staticClass:"iconfont star"},[this._v("")]),this._v(" "),n("span",{staticClass:"iconfont star-solid",style:{width:this.score+"%"}},[this._v("")])])},staticRenderFns:[]};var b=e("C7Lr")(y,g,!1,function(t){e("67ME")},"data-v-1a780a8d",null).exports,w={name:"VRecommend",props:{list:Array},components:{InlineIcon:_,VStar:b}},C={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"recommend"},[e("div",{staticClass:"title"},[e("inline-icon",{attrs:{type:1,size:3}}),t._v("\n    热销推荐\n  ")],1),t._v(" "),e("ul",{staticClass:"like-list"},t._l(t.list,function(n){return e("router-link",{key:n.id,staticClass:"like-item border-bottom",attrs:{tag:"li",to:"/detail_"+n.id}},[e("div",{staticClass:"item-img-wrapper"},[e("img",{staticClass:"item-img",attrs:{src:n.imgUrl,alt:n.title}})]),t._v(" "),e("div",{staticClass:"item-info"},[e("div",{staticClass:"item-info-title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"item-info-comment"},[e("v-star",{staticClass:"comment-star",attrs:{score:n.score}}),t._v(" "),e("span",{staticClass:"comment-num"},[t._v(t._s(n.comment)+"条评论")])],1),t._v(" "),e("div",{staticClass:"item-info-price"},[e("span",{staticClass:"price"},[t._v("￥"),e("em",[t._v(t._s(n.price))])]),t._v("起\n          "),e("span",{staticClass:"adress"},[t._v(t._s(n.adress))])])])])}),1)])},staticRenderFns:[]};var x=e("C7Lr")(w,C,!1,function(t){e("VpqT")},"data-v-d94bbfe8",null).exports,k={name:"VWeekend",props:{list:Array},components:{InlineIcon:_}},O={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"weekend"},[e("div",{staticClass:"title"},[e("inline-icon",{attrs:{type:0,size:2}}),t._v("\n    周末去哪\n  ")],1),t._v(" "),e("ul",t._l(t.list,function(n){return e("router-link",{key:n.id,staticClass:"item",attrs:{tag:"li",to:"/detail_"+n.id}},[e("div",{staticClass:"item-img-wrapper"},[e("img",{staticClass:"item-img",attrs:{src:n.imgUrl,alt:n.title}})]),t._v(" "),e("div",{staticClass:"item-info-wrapper"},[e("div",{staticClass:"item-info-title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"item-info-desc"},[t._v(t._s(n.desc))])])])}),1)])},staticRenderFns:[]};var E=e("C7Lr")(k,O,!1,function(t){e("tIfe")},"data-v-379a1a38",null).exports,j=e("bYoP"),L=e("Muz9"),M=e.n(L),P={name:"Home",components:{VHeader:c,VSwiper:f,VIcons:d,VRecommend:x,VWeekend:E,VFooter:j.a},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[],lastCity:""}},computed:i()({},Object(s.c)(["city"])),methods:{getHomeInfo:function(){M.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){(t=t.data).ret&&t.data&&(this.swiperList=t.data.swiperList,this.iconList=t.data.iconList,this.recommendList=t.data.recommendList,this.weekendList=t.data.weekendList)}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},R={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home-page"},[e("v-header",{staticClass:"home-header"}),t._v(" "),e("div",{staticClass:"home-main"},[e("v-swiper",{attrs:{list:t.swiperList}}),t._v(" "),e("v-icons",{attrs:{list:t.iconList}}),t._v(" "),e("v-recommend",{attrs:{list:t.recommendList}}),t._v(" "),e("v-weekend",{attrs:{list:t.weekendList}})],1),t._v(" "),e("v-footer",{staticClass:"home-footer"})],1)},staticRenderFns:[]};var S=e("C7Lr")(P,R,!1,function(t){e("KyAV")},"data-v-08739f9c",null);n.default=S.exports},xIUw:function(t,n,e){var r=e("8leu");r(r.S+r.F,"Object",{assign:e("ly0G")})},z6h9:function(t,n){n.f=Object.getOwnPropertySymbols}});
//# sourceMappingURL=1.742dfb83e035f537d8e6.js.map