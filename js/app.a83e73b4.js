(function(t){function n(n){for(var r,a,c=n[0],u=n[1],s=n[2],f=0,l=[];f<c.length;f++)a=c[f],i[a]&&l.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);h&&h(n);while(l.length)l.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,a=1;a<e.length;a++){var c=e[a];0!==i[c]&&(r=!1)}r&&(o.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},a={app:0},i={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-010fb3ec":"22d5a3a5","chunk-1558b69c":"f33b5634","chunk-32d2aa39":"d8f6501a","chunk-477c5ba8":"48bbbbda","chunk-71b038fa":"672b713d","chunk-71e62e76":"a586ce00","chunk-cf56ad62":"2a0a3f2a"}[t]+".js"}function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.e=function(t){var n=[],e={"chunk-010fb3ec":1,"chunk-1558b69c":1,"chunk-32d2aa39":1,"chunk-477c5ba8":1,"chunk-71b038fa":1,"chunk-71e62e76":1,"chunk-cf56ad62":1};a[t]?n.push(a[t]):0!==a[t]&&e[t]&&n.push(a[t]=new Promise(function(n,e){for(var r="css/"+({}[t]||t)+"."+{"chunk-010fb3ec":"9361dc7d","chunk-1558b69c":"08d502bb","chunk-32d2aa39":"7a779203","chunk-477c5ba8":"283f6bf6","chunk-71b038fa":"80ca41d9","chunk-71e62e76":"f29032e2","chunk-cf56ad62":"9900d4ec"}[t]+".css",i=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===i))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],f=s.getAttribute("data-href");if(f===r||f===i)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.request=r,delete a[t],h.parentNode.removeChild(h),e(o)},h.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){a[t]=0}));var r=i[t];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(function(n,e){r=i[t]=[n,e]});n.push(r[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=c(t),s=function(n){f.onerror=f.onload=null,clearTimeout(l);var e=i[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,e[1](o)}i[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(n)},u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/DestinyChild/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var h=f;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"07f0":function(t,n,e){},"0f80":function(t,n,e){},"1e56":function(t,n,e){"use strict";var r=e("07f0"),a=e.n(r);a.a},"52ca":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var r=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("global-header"),e("router-view"),e("global-footer")],1)},i=[],o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"global-header"},[e("div",{staticClass:"container"},[e("nav",[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("首頁")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/Library"}},[t._v("圖鑑")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/Item"}},[t._v("裝備")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/SoulCarta"}},[t._v("魂卡")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/Narrative"}},[t._v("收集品")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/Live2D-Repacked"}},[t._v("Live 2D")])],1)])])},c=[],u={name:"global-header"},s=u,f=(e("d17c"),e("2877")),l=Object(f["a"])(s,o,c,!1,null,"0638374d",null);l.options.__file="index.vue";var h=l.exports,d=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"global-footer"},[e("div",{staticClass:"container"},[t._v("----- Have Fun! -----")])])}],p={name:"global-footer"},_=p,v=(e("1e56"),Object(f["a"])(_,d,m,!1,null,"216614e6",null));v.options.__file="index.vue";var A=v.exports,b={components:{GlobalHeader:h,GlobalFooter:A}},C=b,E=(e("94de"),Object(f["a"])(C,a,i,!1,null,null,null));E.options.__file="App.vue";var T=E.exports,O=e("8c4f"),g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"transition",class:[t.showTrans(),{active:t.isActive}],style:"margin-top: "+-1*t.innerHeight/2+"px; margin-left: "+-1*t.innerWidth/2+"px;width:"+t.innerWidth+"px;height:"+t.innerHeight+"px;"})])},R=[],k={name:"home",data:function(){return{isActive:!1,innerWidth:0,innerHeight:0,trans:["trans_01","trans_02","trans_03","trans_04","trans_05","trans_06","trans_07","trans_char_01","trans_char_02"]}},beforeMount:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler)},mounted:function(){this.doTransition()},methods:{resizeHandler:function(){this.isActive=!1,this.innerHeight=1.05*window.innerHeight,this.innerWidth=3*this.innerHeight,this.doTransition()},showTrans:function(){var t=Math.floor(Math.random()*this.trans.length);return this.trans[t]},doTransition:function(){var t=this;setTimeout(function(){t.isActive=!0},10)}}},D=k,L=(e("6832"),Object(f["a"])(D,g,R,!1,null,"258a4a9e",null));L.options.__file="index.vue";var y=L.exports;r["a"].use(O["a"]);var P=new O["a"]({mode:"history",base:"/DestinyChild/",routes:[{path:"/",name:"home",meta:{title:"首頁"},component:y},{path:"/Library",name:"Library",meta:{title:"圖鑑"},component:function(){return Promise.all([e.e("chunk-1558b69c"),e.e("chunk-32d2aa39")]).then(e.bind(null,"15b4"))}},{path:"/Item",name:"Item",meta:{title:"裝備資料"},component:function(){return e.e("chunk-71e62e76").then(e.bind(null,"b00b"))}},{path:"/SoulCarta",name:"SoulCarta",meta:{title:"魂卡資料"},component:function(){return Promise.all([e.e("chunk-1558b69c"),e.e("chunk-477c5ba8")]).then(e.bind(null,"f89f"))}},{path:"/Narrative",name:"Narrative",meta:{title:"收集品試算"},component:function(){return e.e("chunk-010fb3ec").then(e.bind(null,"0dac"))}},{path:"/Live2D-Repacked",name:"Live2DRepacked",meta:{title:"模組再包裝工具"},component:function(){return e.e("chunk-cf56ad62").then(e.bind(null,"dbab"))}},{path:"/Form/:formName/:id",name:"Form-Update",component:function(){return e.e("chunk-71b038fa").then(e.bind(null,"c111"))},meta:{title:"資料更新"}},{path:"/Form/:formName/",name:"Form-Create",component:function(){return e.e("chunk-71b038fa").then(e.bind(null,"c111"))},meta:{title:"資料新增"}},{path:"*",redirect:{name:"home"}}],scrollBehavior:function(){return{x:0,y:0}}}),I=e("2f62");r["a"].use(I["a"]);var H={data:"./api/data.json",portrait:"./api/portrait",item:"./api/item",soulCarta:"./api/soulCarta"},S=new I["a"].Store({state:{groupConfig:{},characters:[],items:[],soulCartaList:[]},mutations:{GROUP_CONFIG_ADD:function(t,n){},GROUP_CONFIG_LOAD:function(t,n){t.groupConfig=n},GROUP_CONFIG_PATCH:function(t,n){},GROUP_CONFIG_DESTROY:function(t,n){},CHARACTER_ADD:function(){},CHARACTER_LOAD:function(t,n){t.characters=n},CHARACTER_PATCH:function(){},CHARACTER_DESTROY:function(){},ITEM_ADD:function(){},ITEM_LOAD:function(t,n){t.items=n},ITEM_PATCH:function(){},ITEM_DESTROY:function(){},SOUL_CARTA_ADD:function(){},SOUL_CARTA_LOAD:function(t,n){t.soulCartaList=n},SOUL_CARTA_PATCH:function(){},SOUL_CARTA_DESTROY:function(){}},actions:{APP_INIT:function(t){fetch(H.data).then(function(t){return t.json()}).then(function(n){t.commit("GROUP_CONFIG_LOAD",n.groupConfig||{}),t.commit("CHARACTER_LOAD",n.character||[]),t.commit("ITEM_LOAD",n.item||[]),t.commit("SOUL_CARTA_LOAD",n.soulCarta||[])})},GROUP_CONFIG_CREATE:function(t){},GROUP_CONFIG_READ:function(t){fetch(H.data).then(function(t){return t.json()}).then(function(n){t.commit("GROUP_CONFIG_LOAD",n.groupConfig||{})})},GROUP_CONFIG_UPDATE:function(t){},GROUP_CONFIG_DELETE:function(t){},CHARACTER_CREATE:function(t){},CHARACTER_READ:function(t){fetch(H.data).then(function(t){return t.json()}).then(function(n){t.commit("CHARACTER_LOAD",n.character||[])})},CHARACTER_UPDATE:function(t){},CHARACTER_DELETE:function(t){},ITEM_CREATE:function(){},ITEM_READ:function(t){fetch(H.data).then(function(t){return t.json()}).then(function(n){t.commit("ITEM_LOAD",n.item||[])})},ITEM_UPDATE:function(){},ITEM_DELETE:function(){},SOUL_CARTA_CREATE:function(){},SOUL_CARTA_READ:function(t){fetch(H.data).then(function(t){return t.json()}).then(function(n){t.commit("SOUL_CARTA_LOAD",n.soulCarta||[])})},SOUL_CARTA_UPDATE:function(){},SOUL_CARTA_DELETE:function(){}}});r["a"].config.productionTip=!1,r["a"].directive("focus",{inserted:function(t){t.focus()}}),P.beforeEach(function(t,n,e){var r="DESTINY CHILD - 日服資訊整理";t.meta.title&&(r=t.meta.title+" - "+r),document.title=r,e()}),new r["a"]({router:P,store:S,render:function(t){return t(T)}}).$mount("#app")},6832:function(t,n,e){"use strict";var r=e("52ca"),a=e.n(r);a.a},"94de":function(t,n,e){"use strict";var r=e("0f80"),a=e.n(r);a.a},d17c:function(t,n,e){"use strict";var r=e("d727"),a=e.n(r);a.a},d727:function(t,n,e){}});
//# sourceMappingURL=app.a83e73b4.js.map