(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-1558b69c":"f33b5634","chunk-0748ac32":"7ea0f835","chunk-4eed8cbb":"2133e2e6","chunk-260e05b5":"fc79f7fb","chunk-71e62e76":"a586ce00","chunk-cf56ad62":"2a0a3f2a"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-1558b69c":1,"chunk-0748ac32":1,"chunk-4eed8cbb":1,"chunk-260e05b5":1,"chunk-71e62e76":1,"chunk-cf56ad62":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1558b69c":"08d502bb","chunk-0748ac32":"37820855","chunk-4eed8cbb":"65eb4f06","chunk-260e05b5":"f5f3e4f8","chunk-71e62e76":"f29032e2","chunk-cf56ad62":"9900d4ec"}[t]+".css",i=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.request=r,delete a[t],h.parentNode.removeChild(h),n(o)},h.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){a[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t),s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}i[t]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/DestinyChild/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07f0":function(t,e,n){},"0f80":function(t,e,n){},"1e56":function(t,e,n){"use strict";var r=n("07f0"),a=n.n(r);a.a},"52ca":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("global-header"),n("router-view"),n("global-footer")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"global-header"},[n("div",{staticClass:"container"},[n("nav",[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("首頁")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/Library"}},[t._v("圖鑑")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/Item"}},[t._v("裝備")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/SoulCarta"}},[t._v("魂卡")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/Narrative"}},[t._v("收集品")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/Live2D-Repacked"}},[t._v("Live 2D")])],1)])])},c=[],u={name:"global-header"},s=u,l=(n("d17c"),n("2877")),f=Object(l["a"])(s,o,c,!1,null,"0638374d",null);f.options.__file="index.vue";var h=f.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"global-footer"},[n("div",{staticClass:"container"},[t._v("----- Have Fun! -----")])])}],v={name:"global-footer"},m=v,_=(n("1e56"),Object(l["a"])(m,d,p,!1,null,"216614e6",null));_.options.__file="index.vue";var b=_.exports,A={components:{GlobalHeader:h,GlobalFooter:b}},C=A,E=(n("94de"),Object(l["a"])(C,a,i,!1,null,null,null));E.options.__file="App.vue";var T=E.exports,g=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"transition",class:[t.showTrans(),{active:t.isActive}],style:"margin-top: "+-1*t.innerHeight/2+"px; margin-left: "+-1*t.innerWidth/2+"px;width:"+t.innerWidth+"px;height:"+t.innerHeight+"px;"})])},R=[],y={name:"home",data:function(){return{isActive:!1,innerWidth:0,innerHeight:0,trans:["trans_01","trans_02","trans_03","trans_04","trans_05","trans_06","trans_07","trans_char_01","trans_char_02"]}},beforeMount:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler)},mounted:function(){this.doTransition()},methods:{resizeHandler:function(){this.isActive=!1,this.innerHeight=1.05*window.innerHeight,this.innerWidth=3*this.innerHeight,this.doTransition()},showTrans:function(){var t=Math.floor(Math.random()*this.trans.length);return this.trans[t]},doTransition:function(){var t=this;setTimeout(function(){t.isActive=!0},10)}}},L=y,O=(n("6832"),Object(l["a"])(L,k,R,!1,null,"258a4a9e",null));O.options.__file="index.vue";var D=O.exports;r["a"].use(g["a"]);var w=new g["a"]({mode:"history",base:"/DestinyChild/",routes:[{path:"/",name:"home",meta:{title:"首頁"},component:D},{path:"/Library",name:"Library",meta:{title:"圖鑑"},component:function(){return Promise.all([n.e("chunk-1558b69c"),n.e("chunk-0748ac32")]).then(n.bind(null,"15b4"))}},{path:"/Item",name:"Item",meta:{title:"裝備資料"},component:function(){return n.e("chunk-71e62e76").then(n.bind(null,"b00b"))}},{path:"/SoulCarta",name:"SoulCarta",meta:{title:"魂卡資料"},component:function(){return Promise.all([n.e("chunk-1558b69c"),n.e("chunk-4eed8cbb")]).then(n.bind(null,"f89f"))}},{path:"/Narrative",name:"Narrative",meta:{title:"收集品試算"},component:function(){return n.e("chunk-260e05b5").then(n.bind(null,"0dac"))}},{path:"/Live2D-Repacked",name:"Live2DRepacked",meta:{title:"模組再包裝工具"},component:function(){return n.e("chunk-cf56ad62").then(n.bind(null,"dbab"))}},{path:"*",redirect:{name:"home"}}],scrollBehavior:function(){return{x:0,y:0}}}),H=n("2f62");r["a"].use(H["a"]);var S={data:"./api/data.json",portrait:"./api/portrait",item:"./api/item",soulCarta:"./api/soulCarta"},x=new H["a"].Store({state:{characters:[],items:[],soulCartaList:[]},mutations:{CHARACTER_ADD:function(){},CHARACTER_LOAD:function(t,e){t.characters=e},CHARACTER_PATCH:function(){},CHARACTER_DESTROY:function(){},ITEM_ADD:function(){},ITEM_LOAD:function(t,e){t.items=e},ITEM_PATCH:function(){},ITEM_DESTROY:function(){},SOUL_CARTA_ADD:function(){},SOUL_CARTA_LOAD:function(t,e){t.soulCartaList=e},SOUL_CARTA_PATCH:function(){},SOUL_CARTA_DESTROY:function(){}},actions:{CHARACTER_CREATE:function(t){},CHARACTER_READ:function(t){fetch(S.data).then(function(t){return t.json()}).then(function(e){t.commit("CHARACTER_LOAD",e.character||[])})},CHARACTER_UPDATE:function(t){},CHARACTER_DELETE:function(t){},ITEM_CREATE:function(){},ITEM_READ:function(t){fetch(S.data).then(function(t){return t.json()}).then(function(e){t.commit("ITEM_LOAD",e.item||[])})},ITEM_UPDATE:function(){},ITEM_DELETE:function(){},SOUL_CARTA_CREATE:function(){},SOUL_CARTA_READ:function(t){fetch(S.data).then(function(t){return t.json()}).then(function(e){t.commit("SOUL_CARTA_LOAD",e.soulCarta||[])})},SOUL_CARTA_UPDATE:function(){},SOUL_CARTA_DELETE:function(){}}});r["a"].config.productionTip=!1,r["a"].directive("focus",{inserted:function(t){t.focus()}}),w.beforeEach(function(t,e,n){var r="DESTINY CHILD - 日服資訊整理";t.meta.title&&(r=t.meta.title+" - "+r),document.title=r,n()}),new r["a"]({router:w,store:x,render:function(t){return t(T)}}).$mount("#app")},6832:function(t,e,n){"use strict";var r=n("52ca"),a=n.n(r);a.a},"94de":function(t,e,n){"use strict";var r=n("0f80"),a=n.n(r);a.a},d17c:function(t,e,n){"use strict";var r=n("d727"),a=n.n(r);a.a},d727:function(t,e,n){}});
//# sourceMappingURL=app.bc6caed0.js.map