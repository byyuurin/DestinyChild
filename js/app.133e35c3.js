(function(t){function n(n){for(var r,a,c=n[0],u=n[1],f=n[2],s=0,l=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(n);while(l.length)l.shift()();return i.push.apply(i,f||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,a=1;a<e.length;a++){var c=e[a];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-02feffd5":"6896d537","chunk-52597dad":"afbf8478","chunk-17d325d2":"8a0bf225","chunk-c6b77908":"51da8143","chunk-71e62e76":"3bd65f95","chunk-8c342156":"520e7114","chunk-cf56ad62":"ea7a1f0c"}[t]+".js"}function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.e=function(t){var n=[],e={"chunk-02feffd5":1,"chunk-52597dad":1,"chunk-17d325d2":1,"chunk-c6b77908":1,"chunk-71e62e76":1,"chunk-8c342156":1,"chunk-cf56ad62":1};a[t]?n.push(a[t]):0!==a[t]&&e[t]&&n.push(a[t]=new Promise((function(n,e){for(var r="css/"+({}[t]||t)+"."+{"chunk-02feffd5":"1082df9b","chunk-52597dad":"6b48439d","chunk-17d325d2":"90504ae5","chunk-c6b77908":"ebf4fca7","chunk-71e62e76":"f29032e2","chunk-8c342156":"65358874","chunk-cf56ad62":"9900d4ec"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var f=i[c],s=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(s===r||s===o))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){f=l[c],s=f.getAttribute("data-href");if(s===r||s===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),e(i)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,e){r=o[t]=[n,e]}));n.push(r[2]=i);var f,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(t);var l=new Error;f=function(n){s.onerror=s.onload=null,clearTimeout(d);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,e[1](l)}o[t]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:s})}),12e4);s.onerror=s.onload=f,document.head.appendChild(s)}return Promise.all(n)},u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/DestinyChild/",u.oe=function(t){throw console.error(t),t};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var d=s;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"07f0":function(t,n,e){},"0f80":function(t,n,e){},"1e56":function(t,n,e){"use strict";var r=e("07f0"),a=e.n(r);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("a481"),e("ac6a"),e("456d"),e("28a5"),e("7f7f"),e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("global-header"),e("router-view"),e("global-footer")],1)},o=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"global-header"},[e("div",{staticClass:"container"},[e("nav",[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("首頁")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/Library"}},[t._v("圖鑑")]),e("router-link",{staticClass:"nav-link",attrs:{to:"/SoulCarta"}},[t._v("魂卡")])],1)])])},c=[],u={name:"global-header"},f=u,s=(e("d17c"),e("2877")),l=Object(s["a"])(f,i,c,!1,null,"0638374d",null),d=l.exports,h=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"global-footer"},[e("div",{staticClass:"container"},[t._v("----- Have Fun! -----")])])}],p={name:"global-footer"},E=p,C=(e("1e56"),Object(s["a"])(E,h,m,!1,null,"216614e6",null)),A=C.exports,v={components:{GlobalHeader:d,GlobalFooter:A},methods:{keyupHandler:function(t){var n=this.$route.name,e=/-Reader$/;27===t.keyCode&&e.test(n)&&this.$router.push({name:n.replace(e,"")})}},beforeMount:function(){window.addEventListener("keyup",this.keyupHandler)},beforeDestroy:function(){window.removeEventListener("keyup",this.keyupHandler)}},_=v,T=(e("94de"),Object(s["a"])(_,a,o,!1,null,null,null)),g=T.exports,b=e("8c4f"),R=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"transition",class:[t.showTrans(),{active:t.isActive}],style:"margin-top: "+-1*t.innerHeight/2+"px; margin-left: "+-1*t.innerWidth/2+"px;width:"+t.innerWidth+"px;height:"+t.innerHeight+"px;"})])},y=[],k={name:"home",data:function(){return{isActive:!1,innerWidth:0,innerHeight:0}},beforeMount:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler)},mounted:function(){this.doTransition()},methods:{resizeHandler:function(){this.isActive=!1,this.innerHeight=1.05*window.innerHeight,this.innerWidth=3*this.innerHeight,this.doTransition()},showTrans:function(){var t=6,n=18,e="trans_",r=[0,0,0],a=Math.floor(t+Math.random()*(n-t+1));return r[2]=a%10,r[1]=Math.floor(a/10)%10,r[0]=Math.floor(a/100)%10,e+r.join("")},doTransition:function(){var t=this;setTimeout((function(){t.isActive=!0}),10)}}},O=k,D=(e("ffe3"),Object(s["a"])(O,R,y,!1,null,"271b86e6",null)),L=D.exports;r["a"].use(b["a"]);var w=new b["a"]({mode:"history",base:"/DestinyChild/",routes:[{path:"/",name:"home",meta:{title:"首頁"},component:L},{path:"/Library",name:"Library",meta:{title:"角色圖鑑"},component:function(){return Promise.all([e.e("chunk-52597dad"),e.e("chunk-c6b77908")]).then(e.bind(null,"15b4"))}},{path:"/Library/:icon",name:"Library-Reader",meta:{title:"{name}"},component:function(){return Promise.all([e.e("chunk-52597dad"),e.e("chunk-c6b77908")]).then(e.bind(null,"15b4"))}},{path:"/Item",name:"Item",meta:{title:"裝備資料"},component:function(){return e.e("chunk-71e62e76").then(e.bind(null,"b00b"))}},{path:"/SoulCarta",name:"SoulCarta",meta:{title:"魂卡資料"},component:function(){return e.e("chunk-02feffd5").then(e.bind(null,"f89f"))}},{path:"/SoulCarta/:icon",name:"SoulCarta-Reader",meta:{title:"{name}"},component:function(){return e.e("chunk-02feffd5").then(e.bind(null,"f89f"))}},{path:"/Narrative",name:"Narrative",meta:{title:"收集品試算"},component:function(){return e.e("chunk-8c342156").then(e.bind(null,"0dac"))}},{path:"/Live2D-Repacked",name:"Live2DRepacked",meta:{title:"模組再包裝工具"},component:function(){return e.e("chunk-cf56ad62").then(e.bind(null,"dbab"))}},{path:"/Form/:formName/:icon",name:"Form-Update",component:function(){return Promise.all([e.e("chunk-52597dad"),e.e("chunk-17d325d2")]).then(e.bind(null,"b9c4"))},meta:{title:"資料更新"}},{path:"/Form/:formName/",name:"Form-Create",component:function(){return Promise.all([e.e("chunk-52597dad"),e.e("chunk-17d325d2")]).then(e.bind(null,"b9c4"))},meta:{title:"資料新增"}},{path:"*",redirect:{name:"home"}}],scrollBehavior:function(t,n,e){var r={from:n.name.split("-")[0],to:t.name.split("-")[0]};return r.from===r.to?{}:{x:0,y:0}}}),P=e("2f62");r["a"].use(P["a"]);var U={data:"/DestinyChild/api/data.json",character:"/DestinyChild/api/character",item:"/DestinyChild/api/item",soulCarta:"/DestinyChild/api/soulCarta"},j=function(t,n){return{body:JSON.stringify(n),method:t,headers:new Headers({"Content-Type":"application/json"})}},H=function(t){return j("POST",t)},S=function(t){return j("PATCH",t)},I=new P["a"].Store({state:{groupConfig:{},characters:[],items:[],soulCartaList:[],editorEnabled:/^http:\/\/(localhost|127.0.0.1)/.test(location.href)},mutations:{GROUP_CONFIG_CREATE:function(t,n){},GROUP_CONFIG_READ:function(t,n){t.groupConfig=n},GROUP_CONFIG_UPDATE:function(t,n){},GROUP_CONFIG_DELETE:function(t,n){},CHARACTER_CREATE:function(t,n){t.characters.push(n)},CHARACTER_READ:function(t,n){t.characters=n},CHARACTER_UPDATE:function(t,n){var e=n.data,r=n.index;t.characters[r]=e},CHARACTER_DELETE:function(t,n){},ITEM_CREATE:function(t,n){},ITEM_READ:function(t,n){t.items=n},ITEM_UPDATE:function(t,n){n.data,n.index},ITEM_DELETE:function(t,n){},SOUL_CARTA_CREATE:function(t,n){t.soulCartaList.push(n)},SOUL_CARTA_READ:function(t,n){t.soulCartaList=n},SOUL_CARTA_UPDATE:function(t,n){var e=n.data,r=n.index;t.soulCartaList[r]=e},SOUL_CARTA_DELETE:function(t,n){}},actions:{APP_INIT:function(t){fetch(U.data).then((function(t){return t.json()})).then((function(n){t.commit("GROUP_CONFIG_READ",n.groupConfig||{}),t.commit("CHARACTER_READ",n.character||[]),t.commit("ITEM_READ",n.item||[]),t.commit("SOUL_CARTA_READ",n.soulCarta||[])}))},GROUP_CONFIG_CREATE:function(t){},GROUP_CONFIG_READ:function(t){fetch(U.data).then((function(t){return t.json()})).then((function(n){t.commit("GROUP_CONFIG_READ",n.groupConfig||{})}))},GROUP_CONFIG_UPDATE:function(t){},GROUP_CONFIG_DELETE:function(t){},CHARACTER_CREATE:function(t,n){delete n.id,fetch(U.character,H(n)).then((function(t){return t.json()})).then((function(n){t.commit("CHARACTER_CREATE",n)}))},CHARACTER_READ:function(t){fetch(U.character).then((function(t){return t.json()})).then((function(n){t.commit("CHARACTER_READ",n||[])}))},CHARACTER_UPDATE:function(t,n){var e=n.id,r=t.state.characters.filter((function(t){return t.id===e}))[0],a=t.state.characters.indexOf(r);if(a<0)return!1;fetch("".concat(U.character,"/").concat(e),S(n)).then((function(t){return t.json()})).then((function(n){t.commit("CHARACTER_UPDATE",{data:n,storeIndex:a})}))},CHARACTER_DELETE:function(t){},ITEM_CREATE:function(t){},ITEM_READ:function(t){fetch(U.item).then((function(t){return t.json()})).then((function(n){t.commit("ITEM_READ",n||[])}))},ITEM_UPDATE:function(t){},ITEM_DELETE:function(t){},SOUL_CARTA_CREATE:function(t,n){delete n.id,fetch(U.soulCarta,H(n)).then((function(t){return t.json()})).then((function(n){t.commit("SOUL_CARTA_CREATE",n)}))},SOUL_CARTA_READ:function(t){fetch(U.soulCarta).then((function(t){return t.json()})).then((function(n){t.commit("SOUL_CARTA_READ",n||[])}))},SOUL_CARTA_UPDATE:function(t,n){var e=n.id,r=t.state.soulCartaList.filter((function(t){return t.id===e}))[0],a=t.state.soulCartaList.indexOf(r);if(a<0)return!1;fetch("".concat(U.soulCarta,"/").concat(e),S(n)).then((function(t){return t.json()})).then((function(n){t.commit("SOUL_CARTA_UPDATE",{data:n,storeIndex:a})}))},SOUL_CARTA_DELETE:function(t){}}});function x(t){return new Promise((function(n,e){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");a.src=t,a.async=!0,a.charset="utf8",a.onload=n,a.onerror=e,r.appendChild(a)}))}function N(t){var n="https://www.googletagmanager.com/gtag/js?id=".concat(t);return x(n)}function G(){var t=document,n=t.title,e=["{name}"];return e.filter((function(t){return n.indexOf(t)>=0})).length}function M(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",e=window,r=e.gtag;return!!r&&(G()?setTimeout((function(){return M(t,n)}),10):(r("config",t,{page_path:n}),!0))}var F="UA-132696737-1";/^byyuurin.github.io$/.test(location.host)&&N(F).then((function(){var t=window;t.dataLayer=t.dataLayer||[],t.gtag=t.gtag||function(){t.dataLayer.push(arguments)},t.gtag("js",new Date)})),r["a"].config.productionTip=!1,r["a"].directive("focus",{inserted:function(t){t.focus()}}),w.beforeEach((function(t,n,e){e()})),w.afterEach((function(t,n){var e=t.meta,r={from:n.name?n.name.split("-")[0]:"",to:t.name?t.name.split("-")[0]:""},a=r.from===r.to,o=!!n.name&&n.name.indexOf("-Reader")>=0,i=function n(){if(!M(F,t.fullPath))return setTimeout(n,10)},c=function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=I.state.groupConfig,u=!!t.name&&t.name.indexOf("-Reader")>=0,f=Object.keys(c).length;return!f&&G()?setTimeout(e,10):f&&u&&G()?r<3?setTimeout((function(){return e(++r)}),10):w.replace({path:n.path}):void(o&&a||i())},u="DESTINY CHILD - 日服資訊";e.title&&(u=e.title+" - "+u),document.title=u,c()})),new r["a"]({router:w,store:I,render:function(t){return t(g)}}).$mount("#app")},"94de":function(t,n,e){"use strict";var r=e("0f80"),a=e.n(r);a.a},c294:function(t,n,e){},d17c:function(t,n,e){"use strict";var r=e("d727"),a=e.n(r);a.a},d727:function(t,n,e){},ffe3:function(t,n,e){"use strict";var r=e("c294"),a=e.n(r);a.a}});
//# sourceMappingURL=app.133e35c3.js.map