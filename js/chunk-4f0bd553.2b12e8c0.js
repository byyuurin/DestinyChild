(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f0bd553"],{"26d6":function(t,a,e){},"3f5a":function(t,a,e){},"55d9":function(t,a,e){},"73f9":function(t,a,e){},8022:function(t,a,e){"use strict";var r=e("3f5a"),o=e.n(r);o.a},"85b9":function(t,a,e){"use strict";var r=e("55d9"),o=e.n(r);o.a},9060:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"soul-carta-information"},[e("div",{staticClass:"frame",class:{disabled:t.isFrameHidden},attrs:{"data-star":t.star}},[e("div",{staticClass:"frame-header"},[e("div",{staticClass:"name"},[t._v(t._s(t.it.name_ch?t.it.name_ch:t.it.name_jp))]),e("div",{staticClass:"stars"},t._l(t.star,function(t){return e("span",{staticClass:"star"})}),0)]),e("div",{staticClass:"description"},[e("div",{staticClass:"text"},[t._v(t._s(t.it.description))]),e("div",{staticClass:"effects"},[e("ul",[t.it.hp?e("li",{attrs:{"data-title":"HP"}},[t._v(t._s(t._f("numberWithComma")(t.it.hp)))]):t._e(),t.it.atk?e("li",{attrs:{"data-title":"攻擊力"}},[t._v("\r\n            "+t._s(t._f("numberWithComma")(t.it.atk))+"\r\n          ")]):t._e(),t.it.def?e("li",{attrs:{"data-title":"防禦力"}},[t._v("\r\n            "+t._s(t._f("numberWithComma")(t.it.def))+"\r\n          ")]):t._e(),t.it.agl?e("li",{attrs:{"data-title":"機敏性"}},[t._v("\r\n            "+t._s(t._f("numberWithComma")(t.it.agl))+"\r\n          ")]):t._e(),t.it.crt?e("li",{attrs:{"data-title":"爆擊"}},[t._v("\r\n            "+t._s(t._f("numberWithComma")(t.it.crt))+"\r\n          ")]):t._e()])]),e("div",{staticClass:"text",domProps:{innerHTML:t._s(t.spaceToBr(t.it.effect))}})])]),e("img",{attrs:{src:"/DestinyChild/icon/soul_carta/"+t.it.icon+".png",alt:t.it.icon}}),e("a",{staticClass:"button button-frame",class:{active:t.isFrameHidden},attrs:{href:"javascript:;"},on:{click:function(a){t.isFrameHidden=!t.isFrameHidden}}},[t._v("no-frame")]),t._t("default",[e("a",{staticClass:"button button-close",attrs:{href:"javascript:;"}},[t._v("close")])]),t._t("form")],2)},o=[],i=(e("6b54"),e("28a5"),e("a481"),{name:"soul-carta-information",props:{it:{type:Object,required:!0,default:function(){return{id:0,name_ch:"",name_jp:"",icon:"",hp:0,atk:0,def:0,agl:0,crt:0,description:"",effect:""}}}},data:function(){return{isFrameHidden:!1}},computed:{star:function(){return 1*this.it.icon.substring(0,6).replace(/soul-/,"")}},methods:{numberHighlight:function(t){return t.replace(/[(+|\-)?\d.?\d(%)?]+/gi,function(t){return'<span class="highlight">'.concat(t,"</span>")})},spaceToBr:function(t){return t?t.split(" ").join("<br/>"):""}},filters:{numberWithComma:function(t){var a=/(-?\d+)(\d{3})/,e=t.toString();while(a.test(e))e=e.replace(a,"$1,$2");return e}}}),n=i,s=(e("8022"),e("2877")),l=Object(s["a"])(n,r,o,!1,null,"bbba688c",null);l.options.__file="index.vue";a["a"]=l.exports},b9c4:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"edit-form"},[e("h2",[t._v("資料"+t._s(t.icon?"更新":"新增"))]),e(t.template+"Form",{tag:"component",attrs:{icon:t.icon}})],1)},o=[],i=(e("a481"),e("cadf"),e("551c"),e("097d"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"character-form"},[e("skill-information",{attrs:{it:t.formData}},[e("a",{staticClass:"button button-close",attrs:{href:"javascript:;"},on:{click:t.closeHandler}},[t._v("close")])]),e("div",{staticClass:"form"},[e("ul",[e("li",[e("label",{attrs:{"data-title":"屬性"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.type,expression:"formData.type"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.$set(t.formData,"type",a.target.multiple?e:e[0])}}},t._l(t.types,function(a,r){return e("option",{domProps:{value:a}},[t._v(t._s(t.typeText[r]))])}),0)])]),e("li",[e("label",{attrs:{"data-title":"類型"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.formData.profession,expression:"formData.profession"}],on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.$set(t.formData,"profession",a.target.multiple?e:e[0])},t.professionChangeHandler]}},t._l(t.professions,function(a,r){return e("option",{domProps:{value:a}},[t._v(t._s(t.professionText[r]))])}),0)])]),e("li",[e("label",{attrs:{"data-title":"技能冷卻時間"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.cooldown,expression:"formData.cooldown",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"-- 無資料 --"},domProps:{value:t.formData.cooldown},on:{input:function(a){a.target.composing||t.$set(t.formData,"cooldown",t._n(a.target.value))},blur:function(a){t.$forceUpdate()}}})])]),e("li",{staticClass:"full-input"},[e("label",{attrs:{"data-title":"暱稱"}},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.nickname,expression:"formData.nickname",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"-- 無資料 --"},domProps:{value:t.formData.nickname},on:{input:function(a){a.target.composing||t.$set(t.formData,"nickname",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})])]),e("li",[e("label",{attrs:{"data-title":"中文名稱"}},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.name_CH,expression:"formData.name_CH",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"-- 無資料 --"},domProps:{value:t.formData.name_CH},on:{input:function(a){a.target.composing||t.$set(t.formData,"name_CH",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})])]),e("li",[e("label",{attrs:{"data-title":"日文名稱"}},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.name_JP,expression:"formData.name_JP",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"-- 無資料 --"},domProps:{value:t.formData.name_JP},on:{input:function(a){a.target.composing||t.$set(t.formData,"name_JP",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})])]),e("li",[e("label",{attrs:{"data-title":"韓文名稱"}},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.name_KR,expression:"formData.name_KR",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"-- 無資料 --"},domProps:{value:t.formData.name_KR},on:{input:function(a){a.target.composing||t.$set(t.formData,"name_KR",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})])]),e("li",{staticClass:"full-input"},[e("label",{attrs:{"data-title":"基本攻擊"}},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.BaseSkill,expression:"formData.BaseSkill",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"-- 無資料 --"},domProps:{value:t.formData.BaseSkill},on:{input:function(a){a.target.composing||t.$set(t.formData,"BaseSkill",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})])]),e("li",{staticClass:"full-input"},[e("label",{attrs:{"data-title":"NS"}},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.NormalSkill,expression:"formData.NormalSkill",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"-- 無資料 --"},domProps:{value:t.formData.NormalSkill},on:{input:function(a){a.target.composing||t.$set(t.formData,"NormalSkill",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})])]),e("li",{staticClass:"full-input"},[e("label",{attrs:{"data-title":"SS"}},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.SlideSkill,expression:"formData.SlideSkill",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"-- 無資料 --"},domProps:{value:t.formData.SlideSkill},on:{input:function(a){a.target.composing||t.$set(t.formData,"SlideSkill",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})])]),e("li",{staticClass:"full-input"},[e("label",{attrs:{"data-title":"DS"}},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.DriveSkill,expression:"formData.DriveSkill",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"-- 無資料 --"},domProps:{value:t.formData.DriveSkill},on:{input:function(a){a.target.composing||t.$set(t.formData,"DriveSkill",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})])]),e("li",{staticClass:"full-input"},[e("label",{attrs:{"data-title":"隊長增益"}},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.LeaderSkill,expression:"formData.LeaderSkill",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"-- 無資料 --"},domProps:{value:t.formData.LeaderSkill},on:{input:function(a){a.target.composing||t.$set(t.formData,"LeaderSkill",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})])])]),e("a",{staticClass:"button button-submit",attrs:{href:"javascript:;"},on:{click:t.submitHandler}},[t._v("完成")])])],1)}),n=[],s=(e("456d"),e("ac6a"),e("b621")),l=e("d049"),m={name:"character-form",props:{icon:{type:String,default:function(){return this.$route.query.icon}}},data:function(){return{types:["fire","water","forest","light","dark"],typeText:["火屬性","水屬性","木屬性","光屬性","闇屬性"],professions:["attack","protect","support","confusion","medic"],professionText:["攻擊型","防禦型","支援型","妨礙型","回復型"],formData:{id:0,nickname:"",name_CH:"",name_JP:"",name_KR:"",icon:"",star:"",type:"",profession:"",recommended:"0",cooldown:"",LeaderSkill:"",BaseSkill:"對目標造成___點基本攻擊（自動）",NormalSkill:"",SlideSkill:"",DriveSkill:"",createDate:"",createUser:null,model:[]}}},computed:{rawList:function(){return this.$store.state.characters},dataMap:function(){var t={};return this.rawList.forEach(function(a){t[a.icon]=a}),t},rawData:function(){return this.dataMap[this.$props.icon]}},beforeCreate:function(){this.$store.dispatch("CHARACTER_READ")},created:function(){this.formData.icon=this.$props.icon,this.formData.star=this.$props.icon.substring(0,7).replace(/[a-z]+-/,"")},methods:{home:function(){this.$router.replace("/")},closeHandler:function(){this.$router.go(-1)},professionChangeHandler:function(){var t=this.formData.profession,a=[8,7,7,8,10],e=a[this.professions.indexOf(t)];1*this.formData.star===5&&"medic"===t&&(e=9),this.formData.cooldown=e},submitHandler:function(){var t=this,a=!0,e=[],r=["id","createUser","createDate"];Object.keys(this.formData).forEach(function(o){!t.formData[o]&&r.indexOf(o)<0&&(e.push(o+" is empty\n"),a=!1)}),a?this.$store.dispatch(this.formData.id?"CHARACTER_UPDATE":"CHARACTER_CREATE",this.formData).then(function(){console.log(t.rawList),t.closeHandler()}):console.log("[FORM CHECK]",a,"\n",e.join(""))}},watch:{rawList:function(){this.$route.query.icon||!this.rawList.length||this.rawData||(console.log("[ERROR UPDATE URL]",location.href),this.home())},rawData:function(){var t=this;this.rawData.icon===this.$route.query.icon&&(console.log("[ERROR CREATE URL]",location.href),this.home()),Object.keys(this.rawData).forEach(function(a){t.formData[a]=t.rawData[a]})}},components:{CharacterPortrait:s["a"],SkillInformation:l["a"]}},c=m,u=(e("fc09"),e("2877")),f=Object(u["a"])(c,i,n,!1,null,"9a2b6fca",null);f.options.__file="index.vue";var d=f.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"soul-carta-form"},[t.formData.icon?e("soul-carta-information",{attrs:{it:t.formData}},[e("a",{staticClass:"button button-close",attrs:{href:"javascript:;"},on:{click:t.closeHandler}},[t._v("x")]),e("div",{staticClass:"form",attrs:{slot:"form"},slot:"form"},[e("ul",[e("li",[e("label",{attrs:{"data-title":"中文名稱"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name_ch,expression:"formData.name_ch"}],attrs:{type:"text",placeholder:"-- 無資料 --"},domProps:{value:t.formData.name_ch},on:{input:function(a){a.target.composing||t.$set(t.formData,"name_ch",a.target.value)}}})])]),e("li",[e("label",{attrs:{"data-title":"日文名稱"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name_jp,expression:"formData.name_jp"}],attrs:{type:"text",placeholder:"-- 無資料 --"},domProps:{value:t.formData.name_jp},on:{input:function(a){a.target.composing||t.$set(t.formData,"name_jp",a.target.value)}}})])]),e("li",[e("label",{attrs:{"data-title":"HP"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.hp,expression:"formData.hp",modifiers:{number:!0}}],attrs:{type:"number",min:"0",placeholder:"-- 無資料 --"},domProps:{value:t.formData.hp},on:{input:function(a){a.target.composing||t.$set(t.formData,"hp",t._n(a.target.value))},blur:function(a){t.$forceUpdate()}}})])]),e("li",[e("label",{attrs:{"data-title":"攻擊力"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.atk,expression:"formData.atk",modifiers:{number:!0}}],attrs:{type:"number",min:"0",placeholder:"-- 無資料 --"},domProps:{value:t.formData.atk},on:{input:function(a){a.target.composing||t.$set(t.formData,"atk",t._n(a.target.value))},blur:function(a){t.$forceUpdate()}}})])]),e("li",[e("label",{attrs:{"data-title":"防禦力"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.def,expression:"formData.def",modifiers:{number:!0}}],attrs:{type:"number",min:"0",placeholder:"-- 無資料 --"},domProps:{value:t.formData.def},on:{input:function(a){a.target.composing||t.$set(t.formData,"def",t._n(a.target.value))},blur:function(a){t.$forceUpdate()}}})])]),e("li",[e("label",{attrs:{"data-title":"機敏"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.agl,expression:"formData.agl",modifiers:{number:!0}}],attrs:{type:"number",min:"0",placeholder:"-- 無資料 --"},domProps:{value:t.formData.agl},on:{input:function(a){a.target.composing||t.$set(t.formData,"agl",t._n(a.target.value))},blur:function(a){t.$forceUpdate()}}})])]),e("li",[e("label",{attrs:{"data-title":"爆擊"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.crt,expression:"formData.crt",modifiers:{number:!0}}],attrs:{type:"number",min:"0",placeholder:"-- 無資料 --"},domProps:{value:t.formData.crt},on:{input:function(a){a.target.composing||t.$set(t.formData,"crt",t._n(a.target.value))},blur:function(a){t.$forceUpdate()}}})])]),e("li",[e("label",{attrs:{"data-title":"魂卡介紹"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.description,expression:"formData.description"}],attrs:{placeholder:"-- 無資料 --"},domProps:{value:t.formData.description},on:{input:function(a){a.target.composing||t.$set(t.formData,"description",a.target.value)}}})])]),e("li",[e("label",{attrs:{"data-title":"特殊效果"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.effect,expression:"formData.effect"}],attrs:{placeholder:"-- 無資料 --"},domProps:{value:t.formData.effect},on:{input:function(a){a.target.composing||t.$set(t.formData,"effect",a.target.value)}}})])])]),e("a",{staticClass:"button button-submit",attrs:{href:"javascript:;"},on:{click:t.submitHandler}},[t._v("完成")])])]):t._e()],1)},v=[],h=e("9060"),D={name:"soul-carta-form",props:{icon:{type:String,default:function(){return this.$route.query.icon}}},data:function(){return{formData:{id:0,name_ch:"",name_jp:"",icon:"",hp:0,atk:0,def:0,agl:0,crt:0,description:"",effect:""}}},computed:{rawList:function(){return this.$store.state.soulCartaList},dataMap:function(){var t={};return this.rawList.forEach(function(a){t[a.icon]=a}),t},rawData:function(){return this.dataMap[this.$props.icon]}},beforeCreate:function(){this.$store.dispatch("SOUL_CARTA_READ")},created:function(){this.formData.icon=this.$props.icon},methods:{home:function(){this.$router.replace("/")},closeHandler:function(){this.$router.go(-1)},submitHandler:function(){var t=this,a=!0,e=[],r=["name_jp","effect"];Object.keys(this.formData).forEach(function(o){!t.formData[o]&&r.indexOf(o)>=0&&(e.push(o+" is empty\n"),a=!1)}),a?this.$store.dispatch(this.formData.id?"SOUL_CARTA_UPDATE":"SOUL_CARTA_CREATE",this.formData).then(function(){console.log(t.rawList),t.closeHandler()}):console.log("[FORM CHECK]",a,"\n",e.join(""))}},watch:{rawList:function(){this.$route.query.icon||!this.rawList.length||this.rawData||(console.log("[ERROR UPDATE URL]",location.href),this.home())},rawData:function(){var t=this;this.rawData.icon===this.$route.query.icon&&(console.log("[ERROR CREATE URL]",location.href),this.home()),Object.keys(this.rawData).forEach(function(a){t.formData[a]=t.rawData[a]})}},components:{SoulCartaInformation:h["a"]}},_=D,b=(e("f796"),Object(u["a"])(_,p,v,!1,null,"94d8cfa4",null));b.options.__file="index.vue";var g=b.exports,C={name:"edit-form",data:function(){return{formName:"",icon:""}},computed:{template:function(){return this.formName}},created:function(){var t=["character","soulCarta"],a=this.$route.params,e=a.formName,r=a.icon,o=!0;t.indexOf(e)<0&&(o=!1),r&&!/^\w+-\d{1}-\d{3}$/.test(r)&&(o=!1),o||this.$router.replace({name:"home"}),this.formName=e.charAt(0).toUpperCase()+e.slice(1),this.icon=r},components:{CharacterForm:d,SoulCartaForm:g}},$=C,w=(e("85b9"),Object(u["a"])($,r,o,!1,null,"501b2941",null));w.options.__file="index.vue";a["default"]=w.exports},f796:function(t,a,e){"use strict";var r=e("73f9"),o=e.n(r);o.a},fc09:function(t,a,e){"use strict";var r=e("26d6"),o=e.n(r);o.a}}]);
//# sourceMappingURL=chunk-4f0bd553.2b12e8c0.js.map