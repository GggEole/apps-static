(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{234:function(t,e,n){},235:function(t,e,n){},236:function(t,e,n){},258:function(t,e,n){"use strict";n(234)},259:function(t,e,n){"use strict";n(235)},260:function(t,e,n){"use strict";n(236)},286:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(21),n(91)),c=(n(258),n(2)),l=Object(c.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("container",{staticClass:"bonnes-pratiques-intro"},[n("div",{staticClass:"content"},[n("h1",{staticClass:"bonnes-pratiques-title is-title is-xl has-text-primary-accent is-mb-0"},[t._v("\n      "+t._s(t.$t("bonnesPratiques.title"))+"\n    ")]),t._v(" "),n("div",{staticClass:"rectangle has-background-white"})])])}),[],!1,null,"49585e8e",null).exports,d={props:{bonnesPratiques:{type:Object,default:function(){return{}}}},data:function(){return{isSectionsEnabled:!1,isSectionsOpen:-1}}},f=(n(259),{components:{BonnesPratiquesList:Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"is-title is-main is-mb-3 has-text-primary-darker"},[t._v("\n    "+t._s(t.bonnesPratiques.faq.title)+"\n  ")]),t._v(" "),t._l(t.bonnesPratiques.faq.tips,(function(e,r){return n("p",{key:r,staticClass:"is-text is-semi-bold has-text-primary-darker is-mb-3"},[t._v("\n    "+t._s(e)+"\n  ")])})),t._v(" "),t.isSectionsEnabled?t._l(t.bonnesPratiques.sections,(function(e,r){return n("b-collapse",{key:r,attrs:{animation:"slide",open:t.isSectionsOpen==r},on:{open:function(e){t.isSectionsOpen=r}},scopedSlots:t._u([{key:"trigger",fn:function(r){return n("div",{attrs:{role:"button"}},[n("div",{staticClass:"bonnes-pratiques-header"},[n("h2",{staticClass:"is-title is-large has-text-primary-darker"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("a",[n("b-icon",{attrs:{icon:r.open?"chevron-up":"chevron-down"}})],1)])])}}],null,!0)},[t._v(" "),e.texts?n("div",t._l(e.texts,(function(text,e){return n("div",{key:e,staticClass:"has-text-neutral is-mb-1"},[text.title?n("div",{staticClass:"is-text is-semi-bold has-text-primary is-mb-1",domProps:{innerHTML:t._s(text.title)}}):t._e(),t._v(" "),n("div",{staticClass:"has-text-neutral is-mb-1",domProps:{innerHTML:t._s(text.body)}})])})),0):t._e()])})):t._e()],2)}),[],!1,null,"a862868e",null).exports,BonnesPratiquesIntro:l},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.bonnesPratiques();case 2:return e=t.sent,t.abrupt("return",{bonnesPratiques:e});case 4:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.$t("siteTitle")+" "+this.$t("bonnesPratiques.pageTitle")}}}),_=(n(260),Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("bonnes-pratiques-intro",{staticClass:"intro"}),t._v(" "),n("container",[n("bonnes-pratiques-list",{attrs:{"bonnes-pratiques":t.bonnesPratiques}})],1)],1)}),[],!1,null,"9fd417b8",null));e.default=_.exports}}]);