(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(t,e,r){var content=r(319);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("0cdafa88",content,!0,{sourceMap:!1})},318:function(t,e,r){"use strict";var n=r(189);r.n(n).a},319:function(t,e,r){(e=r(48)(!1)).push([t.i,".project[data-v-54ad2def]{display:flex;align-items:center;padding:20px 25px}.project[data-v-54ad2def]:not(.edit){border:1px solid #ececec;border-radius:5px;background:#fff}.project__logo[data-v-54ad2def]{max-width:70px;margin-right:15px}.project__name[data-v-54ad2def]{font-weight:700;flex-grow:1;cursor:pointer;color:#000;text-decoration:none;margin-right:20px}.project__name[data-v-54ad2def]:hover{text-decoration:underline}.project__name.input[data-v-54ad2def]{padding:7px 3px;cursor:inherit;font-weight:400}.project__name.input[data-v-54ad2def]:hover{text-decoration:none}.project__status[data-v-54ad2def]{flex-grow:1;color:red;font-weight:700;margin-right:20px}.project__status.active[data-v-54ad2def]{color:green}.project-activity__item[data-v-54ad2def]{display:flex;margin-bottom:7px}.project-activity__item[data-v-54ad2def]:last-child{margin-bottom:0}.project-activity__item span[data-v-54ad2def]:first-child{margin-right:20px}.project-activity__item span[data-v-54ad2def]:last-child{font-weight:700;margin-left:auto}",""]),t.exports=e},321:function(t,e,r){var content=r(330);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("1d386b56",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";r(10);var n=r(188),o=r.n(n),c={components:{},props:{data:{type:Object,default:function(){}},edit:{type:Boolean,default:!1}},data:function(){return{name:this.data.name}},methods:{getTime:function(t){return o()("2015-01-01").startOf("day").seconds(t).format("H:mm:ss")},selectProject:function(){this.$store.dispatch("project/set",this.data)},changeProject:function(){if(this.data){var data=Object.assign({},this.data);data.name=this.name,this.$store.dispatch("project/set",data)}}}},j=(r(318),r(19)),component=Object(j.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["project",{edit:t.edit}]},[r("img",{staticClass:"project__logo",attrs:{src:t.data.logo_url}}),t._v(" "),t.edit?r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"project__name input",domProps:{value:t.name},on:{change:t.changeProject,input:function(e){e.target.composing||(t.name=e.target.value)}}}):r("nuxt-link",{staticClass:"project__name",attrs:{to:""+t.data.id},nativeOn:{click:function(e){return t.selectProject(e)}}},[t._v("\n    "+t._s(t.data.name)+"\n  ")]),t._v(" "),r("div",{class:["project__status",{active:t.data.is_active}]},[t._v("\n    "+t._s(t.data.is_active?"Active":"Not active")+"\n  ")]),t._v(" "),r("div",{staticClass:"project__activity"},[r("div",{staticClass:"project-activity__item"},[r("span",[t._v("time this week")]),t._v(" "),r("span",[t._v(t._s(t.getTime(t.data.spent_time_week)))])]),t._v(" "),r("div",{staticClass:"project-activity__item"},[r("span",[t._v("this month")]),t._v(" "),r("span",[t._v(t._s(t.getTime(t.data.spent_time_month)))])]),t._v(" "),r("div",{staticClass:"project-activity__item"},[r("span",[t._v("total")]),t._v(" "),r("span",[t._v(t._s(t.getTime(t.data.spent_time_all)))])])])],1)}),[],!1,null,"54ad2def",null);e.a=component.exports},323:function(t,e,r){var map={"./af":190,"./af.js":190,"./ar":191,"./ar-dz":192,"./ar-dz.js":192,"./ar-kw":193,"./ar-kw.js":193,"./ar-ly":194,"./ar-ly.js":194,"./ar-ma":195,"./ar-ma.js":195,"./ar-sa":196,"./ar-sa.js":196,"./ar-tn":197,"./ar-tn.js":197,"./ar.js":191,"./az":198,"./az.js":198,"./be":199,"./be.js":199,"./bg":200,"./bg.js":200,"./bm":201,"./bm.js":201,"./bn":202,"./bn.js":202,"./bo":203,"./bo.js":203,"./br":204,"./br.js":204,"./bs":205,"./bs.js":205,"./ca":206,"./ca.js":206,"./cs":207,"./cs.js":207,"./cv":208,"./cv.js":208,"./cy":209,"./cy.js":209,"./da":210,"./da.js":210,"./de":211,"./de-at":212,"./de-at.js":212,"./de-ch":213,"./de-ch.js":213,"./de.js":211,"./dv":214,"./dv.js":214,"./el":215,"./el.js":215,"./en-SG":216,"./en-SG.js":216,"./en-au":217,"./en-au.js":217,"./en-ca":218,"./en-ca.js":218,"./en-gb":219,"./en-gb.js":219,"./en-ie":220,"./en-ie.js":220,"./en-il":221,"./en-il.js":221,"./en-nz":222,"./en-nz.js":222,"./eo":223,"./eo.js":223,"./es":224,"./es-do":225,"./es-do.js":225,"./es-us":226,"./es-us.js":226,"./es.js":224,"./et":227,"./et.js":227,"./eu":228,"./eu.js":228,"./fa":229,"./fa.js":229,"./fi":230,"./fi.js":230,"./fo":231,"./fo.js":231,"./fr":232,"./fr-ca":233,"./fr-ca.js":233,"./fr-ch":234,"./fr-ch.js":234,"./fr.js":232,"./fy":235,"./fy.js":235,"./ga":236,"./ga.js":236,"./gd":237,"./gd.js":237,"./gl":238,"./gl.js":238,"./gom-latn":239,"./gom-latn.js":239,"./gu":240,"./gu.js":240,"./he":241,"./he.js":241,"./hi":242,"./hi.js":242,"./hr":243,"./hr.js":243,"./hu":244,"./hu.js":244,"./hy-am":245,"./hy-am.js":245,"./id":246,"./id.js":246,"./is":247,"./is.js":247,"./it":248,"./it-ch":249,"./it-ch.js":249,"./it.js":248,"./ja":250,"./ja.js":250,"./jv":251,"./jv.js":251,"./ka":252,"./ka.js":252,"./kk":253,"./kk.js":253,"./km":254,"./km.js":254,"./kn":255,"./kn.js":255,"./ko":256,"./ko.js":256,"./ku":257,"./ku.js":257,"./ky":258,"./ky.js":258,"./lb":259,"./lb.js":259,"./lo":260,"./lo.js":260,"./lt":261,"./lt.js":261,"./lv":262,"./lv.js":262,"./me":263,"./me.js":263,"./mi":264,"./mi.js":264,"./mk":265,"./mk.js":265,"./ml":266,"./ml.js":266,"./mn":267,"./mn.js":267,"./mr":268,"./mr.js":268,"./ms":269,"./ms-my":270,"./ms-my.js":270,"./ms.js":269,"./mt":271,"./mt.js":271,"./my":272,"./my.js":272,"./nb":273,"./nb.js":273,"./ne":274,"./ne.js":274,"./nl":275,"./nl-be":276,"./nl-be.js":276,"./nl.js":275,"./nn":277,"./nn.js":277,"./pa-in":278,"./pa-in.js":278,"./pl":279,"./pl.js":279,"./pt":280,"./pt-br":281,"./pt-br.js":281,"./pt.js":280,"./ro":282,"./ro.js":282,"./ru":283,"./ru.js":283,"./sd":284,"./sd.js":284,"./se":285,"./se.js":285,"./si":286,"./si.js":286,"./sk":287,"./sk.js":287,"./sl":288,"./sl.js":288,"./sq":289,"./sq.js":289,"./sr":290,"./sr-cyrl":291,"./sr-cyrl.js":291,"./sr.js":290,"./ss":292,"./ss.js":292,"./sv":293,"./sv.js":293,"./sw":294,"./sw.js":294,"./ta":295,"./ta.js":295,"./te":296,"./te.js":296,"./tet":297,"./tet.js":297,"./tg":298,"./tg.js":298,"./th":299,"./th.js":299,"./tl-ph":300,"./tl-ph.js":300,"./tlh":301,"./tlh.js":301,"./tr":302,"./tr.js":302,"./tzl":303,"./tzl.js":303,"./tzm":304,"./tzm-latn":305,"./tzm-latn.js":305,"./tzm.js":304,"./ug-cn":306,"./ug-cn.js":306,"./uk":307,"./uk.js":307,"./ur":308,"./ur.js":308,"./uz":309,"./uz-latn":310,"./uz-latn.js":310,"./uz.js":309,"./vi":311,"./vi.js":311,"./x-pseudo":312,"./x-pseudo.js":312,"./yo":313,"./yo.js":313,"./zh-cn":314,"./zh-cn.js":314,"./zh-hk":315,"./zh-hk.js":315,"./zh-tw":316,"./zh-tw.js":316};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=323},329:function(t,e,r){"use strict";var n=r(321);r.n(n).a},330:function(t,e,r){(e=r(48)(!1)).push([t.i,".project-id[data-v-4f2d3a2a]{position:absolute;width:100%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.44)}.project-id__item[data-v-4f2d3a2a]{width:100%;max-width:800px;display:flex;flex-direction:column;background:#fff;border-radius:5px}.project-id__save[data-v-4f2d3a2a]{display:flex;align-items:center;padding:5px 22px 20px}.project-id__error[data-v-4f2d3a2a]{font-size:14px;color:red}.project-id__btn[data-v-4f2d3a2a]{margin-left:auto;text-transform:uppercase;padding:7px 25px;border-radius:5px;font-weight:700;cursor:pointer}.project-id__btn[data-v-4f2d3a2a]:hover{background:#f1f1f1}",""]),t.exports=e},334:function(t,e,r){"use strict";r.r(e);r(81),r(22),r(23),r(12),r(66),r(17);var n=r(2),o=r(61),c=r(78);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={components:{Project:r(322).a},middleware:"projectItem",data:function(){return{error:{visible:!1,text:""}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({project:"project/data"})),methods:{save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("project/edit",{project:t.project,token:t.$store.getters["auth/token"]}).catch((function(t){r=t}));case 2:if(!r){e.next=5;break}return t.setError(r),e.abrupt("return");case 5:t.hideError(),t.$store.dispatch("project/list/edit",t.project),t.$router.push("/");case 8:case"end":return e.stop()}}),e)})))()},setError:function(t){this.error={visible:!0,text:"Error: ".concat(t.response.status)}},hideError:function(){this.error={visible:!1,text:""}}}},l=(r(329),r(19)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-id",on:{click:function(e){return e.target!==e.currentTarget?null:t.$router.push("/")}}},[r("div",{staticClass:"project-id__item"},[r("Project",{attrs:{data:t.project,edit:!0}}),t._v(" "),r("div",{staticClass:"project-id__save"},[t.error.visible?r("div",{staticClass:"project-id__error"},[t._v("\n        "+t._s(t.error.text)+"\n      ")]):t._e(),t._v(" "),r("button",{staticClass:"project-id__btn",on:{click:t.save}},[t._v("\n        Save\n      ")])])],1)])}),[],!1,null,"4f2d3a2a",null);e.default=component.exports}}]);