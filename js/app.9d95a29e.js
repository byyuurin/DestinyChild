(function(t){function n(n){for(var r,i,c=n[0],u=n[1],s=n[2],l=0,f=[];l<c.length;l++)i=c[l],a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);h&&h(n);while(f.length)f.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,i=1;i<e.length;i++){var c=e[i];0!==a[c]&&(r=!1)}r&&(o.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},i={app:0},a={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-260e05b5":"fc79f7fb","chunk-4a229f36":"6cbd9cec","chunk-71e62e76":"a586ce00","chunk-96c2f448":"c657ba5c","chunk-cf56ad62":"2a0a3f2a"}[t]+".js"}function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.e=function(t){var n=[],e={"chunk-260e05b5":1,"chunk-4a229f36":1,"chunk-71e62e76":1,"chunk-96c2f448":1,"chunk-cf56ad62":1};i[t]?n.push(i[t]):0!==i[t]&&e[t]&&n.push(i[t]=new Promise(function(n,e){for(var r="css/"+({}[t]||t)+"."+{"chunk-260e05b5":"11a5df8c","chunk-4a229f36":"b1847c00","chunk-71e62e76":"f29032e2","chunk-96c2f448":"2d745f1e","chunk-cf56ad62":"9900d4ec"}[t]+".css",a=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.request=r,delete i[t],h.parentNode.removeChild(h),e(o)},h.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){i[t]=0}));var r=a[t];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(function(n,e){r=a[t]=[n,e]});n.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t),s=function(n){l.onerror=l.onload=null,clearTimeout(f);var e=a[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,e[1](o)}a[t]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/DestinyChild/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var h=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"07f0":function(t,n,e){},"0f80":function(t,n,e){},"1e56":function(t,n,e){"use strict";var r=e("07f0"),i=e.n(r);i.a},"2dd4":function(t,n,e){},"43bf":function(t,n,e){"use strict";var r=e("2dd4"),i=e.n(r);i.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("global-header"),e("router-view"),e("global-footer")],1)},a=[],o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"global-header"},[e("div",{staticClass:"container"},[e("nav",[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("首頁")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/Library"}},[t._v("圖鑑")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/Item"}},[t._v("裝備")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/Soul"}},[t._v("魂卡")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/Narrative"}},[t._v("收集品")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/Live2D-Repacked"}},[t._v("Live 2D")])],1)])])},c=[],u={name:"global-header"},s=u,l=(e("d17c"),e("2877")),f=Object(l["a"])(s,o,c,!1,null,"0638374d",null);f.options.__file="index.vue";var h=f.exports,d=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"global-footer"},[e("div",{staticClass:"container"},[t._v("----- Have Fun! -----")])])}],p={name:"global-footer"},m=p,_=(e("1e56"),Object(l["a"])(m,d,v,!1,null,"216614e6",null));_.options.__file="index.vue";var b=_.exports,E={components:{GlobalHeader:h,GlobalFooter:b}},A=E,T=(e("94de"),Object(l["a"])(A,i,a,!1,null,null,null));T.options.__file="App.vue";var g=T.exports,C=e("8c4f"),k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"transition",class:[t.showTrans(),{active:t.isActive}],style:"width:"+t.innerWidth+"px;height:"+t.innerHeight+"px;"})])},y=[],O={name:"home",data:function(){return{isActive:!1,innerWidth:0,innerHeight:0,trans:["trans_01","trans_02","trans_03","trans_04","trans_05","trans_06","trans_07","trans_char_01","trans_char_02"]}},beforeMount:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler)},mounted:function(){this.doTransition()},methods:{resizeHandler:function(){this.isActive=!1,this.innerHeight=1*window.innerHeight,this.innerWidth=3*this.innerHeight,this.doTransition()},showTrans:function(){var t=Math.floor(Math.random()*this.trans.length);return this.trans[t]},doTransition:function(){var t=this;setTimeout(function(){t.isActive=!0},10)}}},D=O,R=(e("43bf"),Object(l["a"])(D,k,y,!1,null,"b89fe290",null));R.options.__file="index.vue";var L=R.exports;r["a"].use(C["a"]);var w=new C["a"]({mode:"history",base:"/DestinyChild/",routes:[{path:"/",name:"home",meta:{title:"首頁"},component:L},{path:"/Library",name:"Library",meta:{title:"圖鑑"},component:function(){return e.e("chunk-4a229f36").then(e.bind(null,"15b4"))}},{path:"/Item",name:"Item",meta:{title:"裝備資料"},component:function(){return e.e("chunk-71e62e76").then(e.bind(null,"b00b"))}},{path:"/Soul",name:"Soul",meta:{title:"魂卡資料"},component:function(){return e.e("chunk-96c2f448").then(e.bind(null,"edfe"))}},{path:"/Narrative",name:"Narrative",meta:{title:"收集品試算"},component:function(){return e.e("chunk-260e05b5").then(e.bind(null,"0dac"))}},{path:"/Live2D-Repacked",name:"Live2DRepacked",meta:{title:"模組再包裝工具"},component:function(){return e.e("chunk-cf56ad62").then(e.bind(null,"dbab"))}},{path:"*",redirect:{name:"home"}}],scrollBehavior:function(){return{x:0,y:0}}}),S=e("2f62");r["a"].use(S["a"]);var H={data:"./api/data.json",portrait:"./api/portrait.json",item:"",soul:""},j=new S["a"].Store({state:{characters:[],items:[],souls:[]},mutations:{CHARACTER_ADD:function(){},CHARACTER_LOAD:function(t,n){t.characters=n},CHARACTER_PATCH:function(){},CHARACTER_DESTROY:function(){},ITEM_ADD:function(){},ITEM_LOAD:function(t,n){t.items=n},ITEM_PATCH:function(){},ITEM_DESTROY:function(){},SOUL_ADD:function(){},SOUL_LOAD:function(t,n){t.souls=n},SOUL_PATCH:function(){},SOUL_DESTROY:function(){}},actions:{CHARACTER_CREATE:function(t){},CHARACTER_READ:function(t){fetch(H.data).then(function(t){return t.json()}).then(function(n){t.commit("CHARACTER_LOAD",n.character||[])})},CHARACTER_UPDATE:function(t){},CHARACTER_DELETE:function(t){},ITEM_CREATE:function(){},ITEM_READ:function(t){fetch(H.data).then(function(t){return t.json()}).then(function(n){t.commit("ITEM_LOAD",n.item||[])})},ITEM_UPDATE:function(){},ITEM_DELETE:function(){},SOUL_CREATE:function(){},SOUL_READ:function(t){fetch(H.data).then(function(t){return t.json()}).then(function(n){t.commit("SOUL_LOAD",n.soul||[])})},SOUL_UPDATE:function(){},SOUL_DELETE:function(){}}});r["a"].config.productionTip=!1,r["a"].directive("focus",{inserted:function(t){t.focus()}}),w.beforeEach(function(t,n,e){var r="DESTINY CHILD - 日服資訊整理";t.meta.title&&(r=t.meta.title+" - "+r),document.title=r,e()}),new r["a"]({router:w,store:j,render:function(t){return t(g)}}).$mount("#app")},"94de":function(t,n,e){"use strict";var r=e("0f80"),i=e.n(r);i.a},d17c:function(t,n,e){"use strict";var r=e("d727"),i=e.n(r);i.a},d727:function(t,n,e){}});
//# sourceMappingURL=app.9d95a29e.js.map