(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c79abde"],{"0864":function(t,a,n){"use strict";var e=n("f32e"),r=n.n(e);r.a},"11e9":function(t,a,n){var e=n("52a7"),r=n("4630"),i=n("6821"),o=n("6a99"),s=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;a.f=n("9e1e")?u:function(t,a){if(t=i(t),a=o(a,!0),c)try{return u(t,a)}catch(n){}if(s(t,a))return r(!e.f.call(t,a),t[a])}},"208a":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"collection-info",class:{"inner-style":!t.total}},[t._l(t.stars,function(t){return n("span",{staticClass:"star"})}),t.total?n("div",{staticClass:"info"},[n("span",{staticClass:"counts"},[t._v(t._s(t.counts))]),n("span",{staticClass:"total"},[t._v(t._s(t.total))])]):t._e()],2)},r=[],i=(n("c5f6"),n("cadf"),n("551c"),n("097d"),{name:"collection-info",props:{stars:{type:Number,required:!0,default:1},counts:{type:Number,required:!1,default:0},total:{type:Number,required:!1,default:0}}}),o=i,s=(n("0864"),n("2877")),c=Object(s["a"])(o,e,r,!1,null,"c0524416",null);c.options.__file="index.vue";a["a"]=c.exports},3846:function(t,a,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3f5a":function(t,a,n){},"52a7":function(t,a){a.f={}.propertyIsEnumerable},"5dbc":function(t,a,n){var e=n("d3f4"),r=n("8b97").set;t.exports=function(t,a,n){var i,o=a.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&e(i)&&r&&r(t,i),t}},"6b54":function(t,a,n){"use strict";n("3846");var e=n("cb7c"),r=n("0bfb"),i=n("9e1e"),o="toString",s=/./[o],c=function(t){n("2aba")(RegExp.prototype,o,t,!0)};n("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)}):s.name!=o&&c(function(){return s.call(this)})},8022:function(t,a,n){"use strict";var e=n("3f5a"),r=n.n(e);r.a},"81a4":function(t,a,n){"use strict";var e=n("e488"),r=n.n(e);r.a},"8b97":function(t,a,n){var e=n("d3f4"),r=n("cb7c"),i=function(t,a){if(r(t),!e(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,a,e){try{e=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),e(t,[]),a=!(t instanceof Array)}catch(r){a=!0}return function(t,n){return i(t,n),a?t.__proto__=n:e(t,n),t}}({},!1):void 0),check:i}},9060:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"soul-carta-information"},[n("div",{staticClass:"frame",class:{disabled:t.isFrameHidden},attrs:{"data-star":t.star}},[n("div",{staticClass:"frame-header"},[n("div",{staticClass:"name"},[n("div",{staticClass:"name-text"}),t._v("\r\n        "+t._s(t.it.name_jp)+"\r\n        "),t.it.name_ch&&t.it.name_ch!==t.it.name_jp?n("div",{staticClass:"name-text"},[t._v("\r\n          ("+t._s(t.it.name_ch)+")\r\n        ")]):t._e()]),n("div",{staticClass:"stars"},t._l(t.star,function(t){return n("span",{staticClass:"star"})}),0)]),n("div",{staticClass:"description"},[n("div",{staticClass:"text",domProps:{innerHTML:t._s(t.spaceToBr(t.it.description))}}),n("div",{staticClass:"effects"},[n("ul",[t.it.hp?n("li",{attrs:{"data-title":"HP"}},[t._v(t._s(t._f("numberWithComma")(t.it.hp)))]):t._e(),t.it.atk?n("li",{attrs:{"data-title":"攻擊力"}},[t._v("\r\n            "+t._s(t._f("numberWithComma")(t.it.atk))+"\r\n          ")]):t._e(),t.it.def?n("li",{attrs:{"data-title":"防禦力"}},[t._v("\r\n            "+t._s(t._f("numberWithComma")(t.it.def))+"\r\n          ")]):t._e(),t.it.agl?n("li",{attrs:{"data-title":"機敏度"}},[t._v("\r\n            "+t._s(t._f("numberWithComma")(t.it.agl))+"\r\n          ")]):t._e(),t.it.crt?n("li",{attrs:{"data-title":"爆擊"}},[t._v("\r\n            "+t._s(t._f("numberWithComma")(t.it.crt))+"\r\n          ")]):t._e()])]),n("div",{staticClass:"text",domProps:{innerHTML:t._s(t.spaceToBr(t.it.effect))}})])]),n("img",{attrs:{src:"/DestinyChild/icon/soul_carta/"+t.it.icon+".png",alt:t.it.icon}}),n("a",{staticClass:"button button-frame",class:{active:t.isFrameHidden},attrs:{href:"javascript:;"},on:{click:function(a){t.isFrameHidden=!t.isFrameHidden}}},[t._v("no-frame")]),t._t("default",[n("a",{staticClass:"button button-close",attrs:{href:"javascript:;"}},[t._v("close")])]),t._t("form")],2)},r=[],i=(n("6b54"),n("28a5"),n("a481"),{name:"soul-carta-information",props:{it:{type:Object,required:!0,default:function(){return{id:0,name_ch:"",name_jp:"",icon:"",hp:0,atk:0,def:0,agl:0,crt:0,description:"",effect:""}}}},data:function(){return{isFrameHidden:!1}},computed:{star:function(){return 1*this.it.icon.substring(0,6).replace(/soul-/,"")}},methods:{numberHighlight:function(t){return t.replace(/[(+|\-)?\d.?\d(%)?]+/gi,function(t){return'<span class="highlight">'.concat(t,"</span>")})},spaceToBr:function(t){return t?t.split(" ").join("<br/>"):""}},filters:{numberWithComma:function(t){var a=/(-?\d+)(\d{3})/,n=t.toString();while(a.test(n))n=n.replace(a,"$1,$2");return n}}}),o=i,s=(n("8022"),n("2877")),c=Object(s["a"])(o,e,r,!1,null,"bbba688c",null);c.options.__file="index.vue";a["a"]=c.exports},9093:function(t,a,n){var e=n("ce10"),r=n("e11e").concat("length","prototype");a.f=Object.getOwnPropertyNames||function(t){return e(t,r)}},aa77:function(t,a,n){var e=n("5ca1"),r=n("be13"),i=n("79e5"),o=n("fdef"),s="["+o+"]",c="​",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),f=function(t,a,n){var r={},s=i(function(){return!!o[t]()||c[t]()!=c}),u=r[t]=s?a(d):o[t];n&&(r[n]=u),e(e.P+e.F*s,"String",r)},d=f.trim=function(t,a){return t=String(r(t)),1&a&&(t=t.replace(u,"")),2&a&&(t=t.replace(l,"")),t};t.exports=f},b929:function(t,a,n){"use strict";var e=n("ec9b"),r=n.n(e);r.a},c5f6:function(t,a,n){"use strict";var e=n("7726"),r=n("69a8"),i=n("2d95"),o=n("5dbc"),s=n("6a99"),c=n("79e5"),u=n("9093").f,l=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,p="Number",m=e[p],_=m,v=m.prototype,h=i(n("2aeb")(v))==p,b="trim"in String.prototype,g=function(t){var a=s(t,!1);if("string"==typeof a&&a.length>2){a=b?a.trim():d(a,3);var n,e,r,i=a.charCodeAt(0);if(43===i||45===i){if(n=a.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(a.charCodeAt(1)){case 66:case 98:e=2,r=49;break;case 79:case 111:e=8,r=55;break;default:return+a}for(var o,c=a.slice(2),u=0,l=c.length;u<l;u++)if(o=c.charCodeAt(u),o<48||o>r)return NaN;return parseInt(c,e)}}return+a};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var a=arguments.length<1?0:t,n=this;return n instanceof m&&(h?c(function(){v.valueOf.call(n)}):i(n)!=p)?o(new _(g(a)),n,m):g(a)};for(var C,y=n("9e1e")?u(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;y.length>E;E++)r(_,C=y[E])&&!r(m,C)&&f(m,C,l(_,C));m.prototype=v,v.constructor=m,n("2aba")(e,p,m)}},e488:function(t,a,n){},ec9b:function(t,a,n){},f32e:function(t,a,n){},f89f:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"soul-carta"},[t.soulCarta?n("div",{staticClass:"overlay",on:{click:function(a){return a.target!==a.currentTarget?null:t.closeInformationHandler(a)}}},[n("soul-carta-information",{attrs:{it:t.soulCarta}},[n("a",{staticClass:"button button-close",attrs:{href:"#close"},on:{click:function(a){return a.preventDefault(),t.closeInformationHandler(a)}}},[t._v("x")])])],1):t._e(),n("div",{staticClass:"soul-carta-header"}),t.groupSize?n("div",{class:["container",{blur:t.soulCarta}]},t._l(t.soulCartaGroups,function(a,e){return a.length?n("div",{class:["group",e]},[n("div",{staticClass:"group-header"},[n("collection-info",{attrs:{stars:t.getGroupStars(e),counts:t.getCollectionCounts(a),total:a.length}})],1),n("div",{staticClass:"group-content"},t._l(a,function(a){return n("soul-carta-portrait",{key:a.icon,staticClass:"cursor-pointer",attrs:{it:a},nativeOn:{click:function(n){t.informationHandler(a.icon)},contextmenu:function(n){n.preventDefault(),t.editHandler(a.icon)}}})}),1)]):t._e()}),0):t._e()])},r=[],i=(n("6b54"),n("28a5"),n("456d"),n("ac6a"),n("a481"),n("cadf"),n("551c"),n("097d"),function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{class:["soul-carta-portrait",{disabled:!t.it.id}]},[n("div",{staticClass:"frame"}),n("img",{attrs:{src:"/DestinyChild/icon/item/"+t.it.icon+".png",alt:t.it.name_CH}}),n("div",{staticClass:"name"},[t._t("default")],2)])}),o=[],s={name:"soul-carta-portrait",props:{it:{type:Object,required:!0,default:function(){return{id:0,name_ch:"",name_jp:"",icon:"",hp:0,atk:0,def:0,agl:0,crt:0}}}}},c=s,u=(n("81a4"),n("2877")),l=Object(u["a"])(c,i,o,!1,null,"58d4f127",null);l.options.__file="index.vue";var f=l.exports,d=n("9060"),p=n("208a"),m={name:"soul-carta",data:function(){return{showUnknown:!0}},computed:{editable:function(){return this.$store.state.editorEnabled},groupSize:function(){return this.$store.state.groupConfig.soulCarta},soulCarta:function(){var t=this.$route.params.icon,a=this.soulCartaMap[t]||null;if(this.soulCartaList.length&&a){var n=a.name_jp;a.name_ch&&(n+="(".concat(a.name_ch,")")),document.title=document.title.replace("{name}",n)}return a},soulCartaList:function(){return this.$store.state.soulCartaList},soulCartaMap:function(){var t={};return this.soulCartaList.forEach(function(a){t[a.icon]=a}),t},soulCartaGroups:function(){var t=this,a={};return Object.keys(this.groupSize).forEach(function(n){a[n]||(a[n]=[]);for(var e=1;e<=t.groupSize[n];e++){var r=n+"-"+t.numberToString(e,3),i=t.soulCartaMap[r]||{icon:r};a[n].push(i)}a[n]=a[n].reverse()}),a}},created:function(){this.$store.dispatch("APP_INIT"),window.document.body.style="background-image: none;"},methods:{lockWindow:function(t){t?document.body.classList.add("locked"):document.body.classList.remove("locked")},numberToString:function(t,a){for(var n=t.toString().split(""),e=n.length;e<a;e++)n.unshift("0");return n.join("")},getGroupStars:function(t){var a=1;return/soul-\d/.test(t)&&(a=1*t.replace(/soul-/,"")),a},getCollectionCounts:function(t){var a=0;return t.forEach(function(t){t.id&&a++}),a},informationHandler:function(t){var a=this.soulCartaMap[t]||{};if(!a.id)return!1;this.$router.push({name:"SoulCarta-Reader",params:{icon:t}})},closeInformationHandler:function(){this.$router.push({name:"SoulCarta"})},editHandler:function(t){var a="soulCarta",n=this.soulCartaMap[t];this.editable&&(n?this.$router.push({path:"/form/".concat(a,"/").concat(t)}):this.$router.push({path:"/form/".concat(a,"?icon=").concat(t)}))}},beforeDestroy:function(){this.lockWindow(!1),window.document.body.style=""},components:{CollectionInfo:p["a"],SoulCartaPortrait:f,SoulCartaInformation:d["a"]}},_=m,v=(n("b929"),Object(u["a"])(_,e,r,!1,null,"ca347f44",null));v.options.__file="index.vue";a["default"]=v.exports},fdef:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-4c79abde.5a34d22f.js.map