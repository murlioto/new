(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-14d9012c":"575dd267","chunk-24290ab3":"6886a06b","chunk-25d324ee":"8811540b","chunk-285c3592":"72c52015","chunk-2e6e7431":"9dad3357","chunk-6423f71a":"80d02c96","chunk-ccd468f2":"fbe31ced"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-14d9012c":1,"chunk-24290ab3":1,"chunk-25d324ee":1,"chunk-285c3592":1,"chunk-2e6e7431":1,"chunk-6423f71a":1,"chunk-ccd468f2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-14d9012c":"6d0b8a3a","chunk-24290ab3":"eb2f9f6e","chunk-25d324ee":"eb2f9f6e","chunk-285c3592":"aede1f31","chunk-2e6e7431":"eb2f9f6e","chunk-6423f71a":"48f8abf0","chunk-ccd468f2":"0862d3bd"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],h.parentNode.removeChild(h),n(c)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00fa":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));n("96cf");var r=n("1da1"),a=n("bc3a"),o=n.n(a),c="2145a20a0757492ebca3c6d9f4eddc3e";function u(){return i.apply(this,arguments)}function i(){return i=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("http://ali-news.showapi.com/channelList",{headers:{Authorization:"APPCODE ".concat(c)}});case 2:return t=e.sent,e.abrupt("return",t.data.showapi_res_body);case 4:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function s(){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"5572a108b3cdc86cf39001cd",n=u.length>1&&void 0!==u[1]?u[1]:1,r=u.length>2&&void 0!==u[2]?u[2]:10,e.next=5,o.a.get("http://ali-news.showapi.com/newsList",{headers:{Authorization:"APPCODE ".concat(c)},params:{channelId:t,page:n,maxResult:r,needAllList:!1,needContent:1}});case 5:return a=e.sent,e.abrupt("return",a.data.showapi_res_body.pagebean);case 7:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}},"136d":function(e,t,n){"use strict";var r=n("2543"),a=n.n(r);a.a},2543:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"container"},[n("router-view")],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-container"},[n("div",{staticClass:"navbar"},[n("router-link",{attrs:{to:{name:"home"}}},[e._v("首页")]),e._l(e.data.slice(0,5),(function(t){return n("router-link",{key:t.channelId,attrs:{to:{name:"channel",params:{id:t.channelId}}}},[e._v(e._s(t.name))])}))],2),n("div",{staticClass:"user"},[e.isLoginIng?n("span",[e._v("Loading...")]):e.loginUser?[n("router-link",{attrs:{to:{name:"personal"}}},[e._v("用户名:"+e._s(e.loginUser.nickname))]),n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.handleLoginOut(t)}}},[e._v("退出登录")])]:[n("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v("登录")]),n("router-link",{staticClass:"registered",attrs:{to:{name:"reg"}}},[e._v("注册")])]],2)])])},u=[],i=n("5530"),s=n("2f62"),l={name:"Header",computed:Object(i["a"])(Object(i["a"])({},Object(s["b"])("channels",["data","isLoading"])),Object(s["b"])("loginUser",{loginUser:"data",isLoginIng:"isLoading"})),methods:{handleLoginOut:function(){this.$store.dispatch("loginUser/loginOut"),this.$router.push({name:"login"})}}},d=l,h=(n("136d"),n("2877")),f=Object(h["a"])(d,c,u,!1,null,"317cfb30",null),p=f.exports,m={name:"App",components:{Header:p}},g=m,b=(n("fb39"),Object(h["a"])(g,a,o,!1,null,"6011a164",null)),v=b.exports,k=(n("96dd"),n("8c4f")),w=(n("d3b7"),{mode:"history",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-6423f71a").then(n.bind(null,"bb51"))},meta:{auth:!0}},{path:"/login",name:"login",component:function(){return n.e("chunk-ccd468f2").then(n.bind(null,"a55b"))}},{path:"/reg",name:"reg",component:function(){return n.e("chunk-14d9012c").then(n.bind(null,"b8b8"))}},{path:"/channel/:id",name:"channel",component:function(){return n.e("chunk-285c3592").then(n.bind(null,"3244"))},meta:{auth:!0}},{path:"*",component:function(){return n.e("chunk-24290ab3").then(n.bind(null,"9703"))}},{path:"/personal",name:"personal",component:function(){return n.e("chunk-25d324ee").then(n.bind(null,"90ab"))},meta:{auth:!0}},{path:"/auth",name:"auth",component:function(){return n.e("chunk-2e6e7431").then(n.bind(null,"2fef"))}}]}),y=(n("96cf"),n("1da1")),O=n("00fa"),j={namespaced:!0,state:{data:[],isLoading:!1},mutations:{setIsLoading:function(e,t){e.isLoading=t},setData:function(e,t){e.data=t}},actions:{fetchDatas:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("setIsLoading",!0),t.next=3,Object(O["b"])();case 3:n=t.sent,e.commit("setData",n.channelList),e.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()}}},L=n("6e4f"),x={namespaced:!0,state:{data:null,isLoading:!1},mutations:{setIsLoading:function(e,t){e.isLoading=t},setData:function(e,t){e.data=t}},actions:{login:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("setIsLoading",!0),n.next=3,Object(L["a"])(t);case 3:return r=n.sent,a=!1,0===r.code&&(e.commit("setData",r.data),a=!0),e.commit("setIsLoading",!1),n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))()},whoAmI:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("setIsLoading",!0),t.next=3,Object(L["d"])();case 3:n=t.sent,e.commit("setData",n),e.commit("setIsLoading",!1);case 6:case"end":return t.stop()}}),t)})))()},loginOut:function(e){Object(L["b"])(),e.commit("setData",null)}}};r["a"].use(s["a"]);var _=new s["a"].Store({modules:{channels:j,loginUser:x}}),I=_;r["a"].use(k["a"]);var C=new k["a"](w),R=k["a"].prototype.push;k["a"].prototype.push=function(e){return R.call(this,e).catch((function(e){return e}))},C.beforeEach((function(e,t,n){e.meta.auth?I.state.loginUser.isLoading?n({name:"auth"}):I.state.loginUser.data?n():n({name:"login"}):n()}));var A=C;r["a"].config.productionTip=!1,I.dispatch("channels/fetchDatas"),I.dispatch("loginUser/whoAmI"),new r["a"]({render:function(e){return e(v)},router:A,store:I}).$mount("#app")},"5baa":function(e,t,n){},"6e4f":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d}));n("96cf");var r=n("1da1"),a=n("bc3a"),o=n.n(a);function c(e){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/api/user/login",t);case 2:return n=e.sent,r=n.headers.authorization,r&&localStorage.setItem("token",r),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function i(){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token"),t){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,o.a.get("/api/user/whoami",{headers:{authorization:"bearer ".concat(t)}});case 5:return n=e.sent,e.abrupt("return",n.data.data);case 7:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function l(){localStorage.removeItem("token")}function d(e){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/api/user/reg",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}},"96dd":function(e,t,n){},fb39:function(e,t,n){"use strict";var r=n("5baa"),a=n.n(r);a.a}});
//# sourceMappingURL=app.15938326.js.map