(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6b77908"],{"0864":function(t,e,r){"use strict";var n=r("f32e"),i=r.n(n);i.a},"11e9":function(t,e,r){var n=r("52a7"),i=r("4630"),a=r("6821"),o=r("6a99"),s=r("69a8"),c=r("c69a"),l=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?l:function(t,e){if(t=a(t),e=o(e,!0),c)try{return l(t,e)}catch(r){}if(s(t,e))return i(!n.f.call(t,e),t[e])}},"15b4":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"library"},[t.openFilter?n("div",{staticClass:"overlay",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.openFilter=!1}}},[n("div",{staticClass:"filter-options"},[n("div",{staticClass:"filter-header"}),n("div",{staticClass:"filter-content"},[n("a",{staticClass:"button button-close",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.openFilter=!1}}},[t._v("Close")]),n("div",{staticClass:"option-group"},[n("div",{staticClass:"option-group-title"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.showUnknown,expression:"showUnknown"}],staticClass:"option-enabled",attrs:{id:"chk-unknown",type:"checkbox"},domProps:{checked:Array.isArray(t.showUnknown)?t._i(t.showUnknown,null)>-1:t.showUnknown},on:{change:function(e){var r=t.showUnknown,n=e.target,i=!!n.checked;if(Array.isArray(r)){var a=null,o=t._i(r,a);n.checked?o<0&&(t.showUnknown=r.concat([a])):o>-1&&(t.showUnknown=r.slice(0,o).concat(r.slice(o+1)))}else t.showUnknown=i}}}),n("label",{staticClass:"checkbox",attrs:{for:"chk-unknown"}}),n("label",{attrs:{for:"chk-unknown"}},[t._v("顯示無資料的角色")])])]),n("div",{staticClass:"option-group"},[n("div",{staticClass:"option-group-title"},[t._v("顯示")]),n("div",{staticClass:"option-group-content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.displayMode,expression:"displayMode"}],staticClass:"option-enabled",attrs:{type:"radio",value:"group",id:"radio-group"},domProps:{checked:t._q(t.displayMode,"group")},on:{change:function(e){t.displayMode="group"}}}),n("label",{staticClass:"option-text",attrs:{for:"radio-group"}},[t._v("圖鑑風格")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.displayMode,expression:"displayMode"}],staticClass:"option-enabled",attrs:{type:"radio",value:"list",id:"radio-list"},domProps:{checked:t._q(t.displayMode,"list")},on:{change:function(e){t.displayMode="list"}}}),n("label",{staticClass:"option-text",attrs:{for:"radio-list"}},[t._v("技能列表")])])]),n("div",{staticClass:"option-group"},[n("div",{staticClass:"option-group-title"},[t._v("屬性")]),n("div",{staticClass:"option-group-content"},[t._l(t.types,(function(e){return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.type[e],expression:"filter.type[type]"}],staticClass:"option-enabled",attrs:{id:"chk-type-"+e,type:"checkbox"},domProps:{checked:Array.isArray(t.filter.type[e])?t._i(t.filter.type[e],null)>-1:t.filter.type[e]},on:{input:function(r){t.filterHandler("type."+e,r.target)},change:function(r){var n=t.filter.type[e],i=r.target,a=!!i.checked;if(Array.isArray(n)){var o=null,s=t._i(n,o);i.checked?s<0&&t.$set(t.filter.type,e,n.concat([o])):s>-1&&t.$set(t.filter.type,e,n.slice(0,s).concat(n.slice(s+1)))}else t.$set(t.filter.type,e,a)}}}),n("label",{class:"type-"+e,attrs:{for:"chk-type-"+e}})]}))],2)]),n("div",{staticClass:"option-group"},[n("div",{staticClass:"option-group-title"},[t._v("類型")]),n("div",{staticClass:"option-group-content"},[t._l(t.professions,(function(e){return[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.profession[e],expression:"filter.profession[profession]"}],staticClass:"option-enabled",attrs:{id:"chk-profession-"+e,type:"checkbox"},domProps:{checked:Array.isArray(t.filter.profession[e])?t._i(t.filter.profession[e],null)>-1:t.filter.profession[e]},on:{input:function(r){t.filterHandler("profession."+e,r.target)},change:function(r){var n=t.filter.profession[e],i=r.target,a=!!i.checked;if(Array.isArray(n)){var o=null,s=t._i(n,o);i.checked?s<0&&t.$set(t.filter.profession,e,n.concat([o])):s>-1&&t.$set(t.filter.profession,e,n.slice(0,s).concat(n.slice(s+1)))}else t.$set(t.filter.profession,e,a)}}}),n("label",{class:"profession-"+e,attrs:{for:"chk-profession-"+e}})]}))],2)])])])]):t._e(),t.character?n("div",{staticClass:"overlay",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeInformationHandler(e)}}},[n("skill-information",{attrs:{it:t.character}},[n("a",{staticClass:"button button-close",attrs:{href:"#close"},on:{click:function(e){return e.preventDefault(),t.closeInformationHandler(e)}}},[t._v("x")])])],1):t._e(),n("div",{class:["library-header",{blur:t.character||t.openFilter}]}),n("div",{class:["library-controls",{blur:t.character||t.openFilter}]},[n("div",{staticClass:"container"},[n("div",{staticClass:"group search",class:{focus:t.openSearch}},[n("label",{class:["search-name",{focus:t.openSearch}],on:{keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.openSearch=!1},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.openSearch=!1}]}},[n("img",{attrs:{src:r("dcca"),alt:"filter search"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.openSearch=!t.openSearch}}}),t.openSearch?n("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.name,expression:"filter.name"}],staticClass:"option-text",attrs:{maxlength:"10",type:"text",placeholder:"再按一次圖示可關閉。"},domProps:{value:t.filter.name},on:{input:[function(e){e.target.composing||t.$set(t.filter,"name",e.target.value)},function(e){t.filterHandler("name",e.target)}]}}):t._e(),t.openSearch?t._e():n("input",{attrs:{type:"text",placeholder:"再按一次圖示可關閉。"},domProps:{value:t.filter.name}})]),n("label",{staticClass:"button button-setting",on:{click:function(e){t.openFilter=!0,t.openSearch=!1}}},[n("img",{attrs:{src:r("85c9"),alt:"filter setup"}})])])])]),t.groupSize&&"group"===t.displayMode?n("div",{class:["character-group","container",{blur:t.character||t.openFilter}]},t._l(t.characterGroups,(function(e,r){return e.length?n("div",{class:["group",r]},[n("div",{staticClass:"group-header"},[n("collection-info",{attrs:{stars:t.getGroupStars(r),counts:t.getCollectionCounts(e),total:e.length}})],1),n("div",{staticClass:"group-content"},t._l(e,(function(e){return n("character-portrait",{key:e.icon,class:{"cursor-pointer":!!e.id},attrs:{it:e},nativeOn:{click:function(r){t.informationHandler(e.icon)},contextmenu:function(r){r.preventDefault(),t.editHandler(e.icon)}}},[n("div",{staticClass:"ch"},[t._v(t._s(e.name_CH))]),n("div",{staticClass:"jp"},[t._v("("+t._s(e.name_JP)+")")])])})),1)]):t._e()})),0):t._e(),t.groupSize&&"list"===t.displayMode?n("div",{staticClass:"character-list"},[n("div",{staticClass:"container-fluid"},[n("table",[t._m(0),t._m(1),n("tbody",[t._l(t.characterGroups,(function(e,r){return e.length?t._l(e,(function(e){return n("tr",{directives:[{name:"show",rawName:"v-show",value:e.profession,expression:"character.profession"}],key:e.icon},[n("td",[n("character-portrait",{attrs:{it:e}},[n("div",{staticClass:"ch"},[t._v(t._s(e.name_CH))]),n("div",{staticClass:"jp"},[t._v("("+t._s(e.name_JP)+")")])]),n("collection-info",{attrs:{stars:t.getGroupStars(r)}})],1),n("td",{staticClass:"column-pc",domProps:{innerHTML:t._s(t.numberHighlight(e.BaseSkill))}}),n("td",{staticClass:"column-pc",domProps:{innerHTML:t._s(t.numberHighlight(e.NormalSkill))}}),n("td",{staticClass:"column-pc",domProps:{innerHTML:t._s(t.numberHighlight(e.SlideSkill))}}),n("td",{staticClass:"column-pc",domProps:{innerHTML:t._s(t.numberHighlight(e.DriveSkill))}}),n("td",{staticClass:"column-pc",domProps:{innerHTML:t._s(t.numberHighlight(e.LeaderSkill))}}),n("td",{staticClass:"column-mobile"},[n("p",{staticClass:"skill-text",attrs:{"data-title":"基本攻擊"},domProps:{innerHTML:t._s(t.numberHighlight(e.BaseSkill))}}),n("p",{staticClass:"skill-text",attrs:{"data-title":"NS"},domProps:{innerHTML:t._s(t.numberHighlight(e.NormalSkill))}}),n("p",{staticClass:"skill-text",attrs:{"data-title":"SS"},domProps:{innerHTML:t._s(t.numberHighlight(e.SlideSkill))}}),n("p",{staticClass:"skill-text",attrs:{"data-title":"DS"},domProps:{innerHTML:t._s(t.numberHighlight(e.DriveSkill))}}),n("p",{staticClass:"skill-text",attrs:{"data-title":"隊長增幅"},domProps:{innerHTML:t._s(t.numberHighlight(e.LeaderSkill))}})])])})):t._e()}))],2)])])]):t._e()])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("colgroup",[r("col",{attrs:{width:"120"}}),r("col",{staticClass:"column-pc",attrs:{width:"150"}}),r("col",{staticClass:"column-pc"}),r("col",{staticClass:"column-pc"}),r("col",{staticClass:"column-pc"}),r("col",{staticClass:"column-pc",attrs:{width:"150"}}),r("col",{staticClass:"column-mobile"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[r("small",[t._v("Portrait")]),r("br"),t._v("頭像")]),r("th",{staticClass:"column-pc"},[r("small",[t._v("Base")]),r("br"),t._v("基本攻擊")]),r("th",{staticClass:"column-pc"},[r("small",[t._v("Normal Skill")]),r("br"),t._v("NS")]),r("th",{staticClass:"column-pc"},[r("small",[t._v("Slide Skill")]),r("br"),t._v("SS")]),r("th",{staticClass:"column-pc"},[r("small",[t._v("Drive Skill")]),r("br"),t._v("DS")]),r("th",{staticClass:"column-pc"},[r("small",[t._v("Leader Buff")]),r("br"),t._v("隊長增幅")]),r("th",{staticClass:"column-mobile"},[r("small",[t._v("Skills")]),r("br"),t._v("技能")])])])}],a=(r("6b54"),r("456d"),r("a481"),r("28a5"),r("ac6a"),r("7f7f"),r("b621")),o=r("d049"),s=r("208a"),c="characterFilterSetting",l={name:"library",data:function(){return{openFilter:!1,openSearch:!1,showUnknown:!1,displayMode:"group",types:["fire","water","forest","light","dark"],professions:["attack","protect","support","confusion","medic"],filter:{}}},computed:{editable:function(){return this.$store.state.editorEnabled},groupSize:function(){return this.$store.state.groupConfig.character},filteredCharacters:function(){var t=this;return this.$store.state.characters.filter((function(e){var r=t.filter,n=r.name,i=r.type,a=r.profession;if(!n&&!i&&!a)return!0;var o=!0;return n&&(o=e.nickname.indexOf(n)>=0,o=o||e.name_CH.indexOf(n)>=0,o=o||e.name_JP.indexOf(n)>=0,o=o||e.name_KR.indexOf(n)>=0),e.type&&(o=o&&i[e.type]),e.profession&&(o=o&&a[e.profession]),o}))},character:function(){var t=this.$route.params.icon,e=this.characterMap[t]||null;if(this.characters.length&&e){var r=[e.name_CH];e.nickname.split(" ").forEach((function(t){t!==e.name_CH&&r.push(t)})),document.title=document.title.replace("{name}","".concat(e.name_JP,"(").concat(r.join("/"),")"))}return this.lockWindow(!!e),e},characters:function(){return this.filteredCharacters},characterMap:function(){var t={};return this.characters.forEach((function(e){t[e.icon]=e})),t},characterGroups:function(){var t=this,e={},r=["water","fire","forest","light","dark","fire"];return Object.keys(this.groupSize).forEach((function(n){e[n]||(e[n]=[]);for(var i=1;i<=t.groupSize[n];i++){var a=n+"-"+t.numberToString(i,3),o=t.characterMap[a];t.showUnknown&&!o&&(o={icon:a},i<=6?(6===i?(o.name_CH="進化素材",o.name_JP="オロラミム"):(o.name_CH="強化素材",o.name_JP="アオラミム"),o.type=r[i-1],o.profession=""):o.type||(o.name_CH="無資料",o.name_JP="Unknown")),o&&e[n].push(o)}e[n]=e[n].reverse()})),e}},watch:{openFilter:function(){this.lockWindow(this.openFilter)}},created:function(){var t=this;this.$store.dispatch("APP_INIT"),this.types.forEach((function(e){t.filter.type={},t.types.forEach((function(e){t.filter.type[e]=!0})),t.filter.profession={},t.professions.forEach((function(e){t.filter.profession[e]=!0})),t.filter.name=""})),window.document.body.style="background-image: none;"},beforeMount:function(){this.showUnknown=this.editable},methods:{lockWindow:function(t){t?document.body.classList.add("locked"):document.body.classList.remove("locked")},numberToString:function(t,e){for(var r=t.toString().split(""),n=r.length;n<e;n++)r.unshift("0");return r.join("")},getGroupStars:function(t){var e=1;return/child-\d/.test(t)&&(e=1*t.replace(/child-/,"")),e},getCollectionCounts:function(t){var e=this,r=0;return t.forEach((function(t){(e.showUnknown&&t.type||!e.showUnknown&&t.id)&&r++})),r},filterClone:function(){var t=this,e=this.filter,r=e.name,n=e.type,i=e.profession,a={};return a.name=r,this.types.forEach((function(e){a.type={},t.types.forEach((function(t){a.type[t]=n[t]})),a.profession={},t.professions.forEach((function(t){a.profession[t]=i[t]}))})),a},filterHandler:function(t,e){var r=this.filterClone();if("name"===t)r[t]=e.value;else{var n=t.split(".");r[n[0]][n[1]]=e.checked}this.filter=r},informationHandler:function(t){var e=this.characterMap[t]||{};if(!e.id)return!1;this.$router.push({name:"Library-Reader",params:{icon:t}})},closeInformationHandler:function(){this.$router.push({name:"Library"})},editHandler:function(t){var e="character",r=this.characterMap[t];this.editable&&(r?this.$router.push({path:"/form/".concat(e,"/").concat(t)}):this.$router.push({path:"/form/".concat(e,"?icon=").concat(t)}))},saveFilterSetting:function(){localStorage.setItem(c,JSON.stringify(this.filter))},numberHighlight:function(t){return t?t.replace(/[(+|\-)?\d.?\d(%)?]+/gi,(function(t){return'<span class="highlight">'.concat(t,"</span>")})):""}},beforeDestroy:function(){this.lockWindow(!1),window.document.body.style=""},components:{CharacterPortrait:a["a"],SkillInformation:o["a"],CollectionInfo:s["a"]}},u=l,p=(r("c4ba"),r("2877")),f=Object(p["a"])(u,n,i,!1,null,"4438374b",null);e["default"]=f.exports},"208a":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"collection-info",class:{"inner-style":!t.total}},[t._l(t.stars,(function(t){return r("span",{staticClass:"star"})})),t.total?r("div",{staticClass:"info"},[r("span",{staticClass:"counts"},[t._v(t._s(t.counts))]),r("span",{staticClass:"total"},[t._v(t._s(t.total))])]):t._e()],2)},i=[],a=(r("c5f6"),{name:"collection-info",props:{stars:{type:Number,required:!0,default:1},counts:{type:Number,required:!1,default:0},total:{type:Number,required:!1,default:0}}}),o=a,s=(r("0864"),r("2877")),c=Object(s["a"])(o,n,i,!1,null,"c0524416",null);e["a"]=c.exports},"5dbc":function(t,e,r){var n=r("d3f4"),i=r("8b97").set;t.exports=function(t,e,r){var a,o=e.constructor;return o!==r&&"function"==typeof o&&(a=o.prototype)!==r.prototype&&n(a)&&i&&i(t,a),t}},"5ebc":function(t,e,r){},"85c9":function(t,e,r){t.exports=r.p+"img/btn_home_config.9ce2d092.png"},"8b97":function(t,e,r){var n=r("d3f4"),i=r("cb7c"),a=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,r){return a(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:a}},9093:function(t,e,r){var n=r("ce10"),i=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},aa77:function(t,e,r){var n=r("5ca1"),i=r("be13"),a=r("79e5"),o=r("fdef"),s="["+o+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),p=function(t,e,r){var i={},s=a((function(){return!!o[t]()||c[t]()!=c})),l=i[t]=s?e(f):o[t];r&&(i[r]=l),n(n.P+n.F*s,"String",i)},f=p.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=p},c4ba:function(t,e,r){"use strict";var n=r("5ebc"),i=r.n(n);i.a},c5f6:function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),a=r("2d95"),o=r("5dbc"),s=r("6a99"),c=r("79e5"),l=r("9093").f,u=r("11e9").f,p=r("86cc").f,f=r("aa77").trim,d="Number",h=n[d],m=h,v=h.prototype,g=a(r("2aeb")(v))==d,_="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():f(e,3);var r,n,i,a=e.charCodeAt(0);if(43===a||45===a){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var o,c=e.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>i)return NaN;return parseInt(c,n)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof h&&(g?c((function(){v.valueOf.call(r)})):a(r)!=d)?o(new m(y(e)),r,h):y(e)};for(var b,k=r("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;k.length>C;C++)i(m,b=k[C])&&!i(h,b)&&p(h,b,u(m,b));h.prototype=v,v.constructor=h,r("2aba")(n,d,h)}},dcca:function(t,e,r){t.exports=r.p+"img/btn_search.11d58ffc.png"},f32e:function(t,e,r){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-c6b77908.51da8143.js.map