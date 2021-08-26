(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{210:function(t,e,n){},211:function(t,e,n){},231:function(t,e,n){"use strict";var l=n(210);n.n(l).a},232:function(t,e,n){"use strict";var l=n(211);n.n(l).a},234:function(t,e,n){},235:function(t,e,n){},236:function(t,e,n){},237:function(t,e,n){},238:function(t,e,n){"use strict";n(15);var l=n(3),r={props:{application:{type:Object,default:null},showAvailable:{type:Boolean,default:!0}},methods:{goToApplication:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.url){n.next=4;break}window.location.href=t.url,n.next=6;break;case 4:return n.next=6,e.$router.push({name:"applications-id",params:{id:t.id}});case 6:case"end":return n.stop()}}),n)})))()}}},c=(n(231),n(2)),o=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.application?n("card",{key:t.application.id,staticClass:"item",attrs:{role:"button",tabindex:"0"},nativeOn:{click:function(e){return t.goToApplication(t.application)}}},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("icon",{attrs:{"aria-hidden":"true",icon:t.application.icon,size:"is-large",card:"",type:t.application.isDisabled?"is-danger":null}}),t._v(" "),n("div",{staticClass:"item-titles"},[n("h3",{class:["item-title",t.application.isDisabled?"has-text-danger":null]},[t._v(t._s(t.application.title))]),t._v(" "),t.showAvailable?[t.application.isDisabled?n("p",{staticClass:"is-text is-mini-text has-text-danger"},[t._v("\n              "+t._s(t.$t("common.unavailable"))+"\n            ")]):n("p",{staticClass:"is-text is-mini-text has-text-success"},[t._v("\n              "+t._s(t.$t("common.available"))+"\n            ")])]:t._e(),t._v(" "),n("p",{staticClass:"is-text has-text-primary"},[t._v(t._s(t.application.subtitle)+" ")])],2)],1)]),t._v(" "),n("div",{staticClass:"icon-container"},[n("b-icon",{attrs:{"aria-hidden":"true",role:"img",icon:"chevron-right",size:"is-medium"}})],1)]):t._e()}),[],!1,null,"3d68997d",null).exports,h={props:{title:{type:String,default:function(){return this.$t("applications.listTitle")}},applications:{type:Array,default:function(){return[]}},showAvailable:{type:Boolean,default:!1}},components:{ApplicationItem:o}},d=(n(232),Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"applications-list"},[n("h2",{staticClass:"applications-list-title is-large"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"columns is-multiline"},t._l(t.applications,(function(e,l){return n("div",{key:l,staticClass:"application column is-half-tablet is-one-third-fullhd"},[n("application-item",{attrs:{application:e,"show-available":t.showAvailable}})],1)})),0)])}),[],!1,null,null,null));e.a=d.exports},262:function(t,e,n){t.exports=n.p+"img/f94b42f.png"},263:function(t,e,n){"use strict";var l=n(234);n.n(l).a},264:function(t,e,n){"use strict";var l=n(235);n.n(l).a},265:function(t,e,n){t.exports=n.p+"img/a2ed248.png"},266:function(t,e,n){"use strict";var l=n(236);n.n(l).a},267:function(t,e,n){"use strict";var l=n(237);n.n(l).a},268:function(t,e,n){"use strict";n.r(e);n(15);var l=n(3),r=(n(263),n(2)),c=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"home-header has-background-primary-accent-hollow"},[l("div",{staticClass:"content"},[l("div",{staticClass:"content-column content-left"},[l("h1",{staticClass:"is-title is-large"},[t._v("\n        "+t._s(t.$t("home.header.title"))+"\n      ")]),t._v(" "),l("p",{staticClass:"is-text has-text-primary is-mb-1"},[t._v("\n        "+t._s(t.$t("home.header.description"))+"\n      ")]),t._v(" "),l("platform-btn",{staticClass:"is-fullwidth-mobile",attrs:{size:"large"}})],1),t._v(" "),l("div",{staticClass:"content-column content-right"},[l("img",{staticClass:"illustration",attrs:{"aria-hidden":"true",role:"presentation",src:n(262),alt:t.$t("home.header.imageAltText")}}),t._v(" "),l("div",{staticClass:"illustration-background"})])])])}),[],!1,null,"55d465e2",null).exports,o={data:function(){return{tchapChannelUrl:"https://www.tchap.gouv.fr/#/room/#apps.education.fr:agent.education.tchap.gouv.fr",sendEmailActive:!1}},methods:{goToTchapChannel:function(){if(!this.tchapChannelUrl)return!1;window.location.href=this.tchapChannelUrl}}},h=(n(264),Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-projet"},[n("h2",{staticClass:"is-title is-large is-mb-1"},[t._v("\n      "+t._s(t.$t("home.project.title"))+"\n    ")]),t._v(" "),n("p",{staticClass:"has-text-primary is-mb-1"},[t._v("\n      "+t._s(t.$t("home.project.description"))+"\n    ")]),t._v(" "),n("a",{staticClass:"tchap-link is-text is-semi-bold has-text-primary-accent is-mb-1",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.goToTchapChannel(e)}}},[n("span",[t._v("\n        "+t._s(t.$t("home.project.contact.default"))+"\n      ")]),t._v(" "),n("icon",{staticClass:"is-inline has-text-primary-accent",attrs:{"aria-hidden":"true",icon:"arrow-right",size:"is-medium"}})],1),t._v(" "),t.sendEmailActive?[n("div",{staticClass:"input-container"},[n("div",{staticClass:"text-field-container"},[n("text-field",{staticClass:"is-fullwidth is-mb-1",attrs:{placeholder:t.$t("home.project.contact.placeholder")}})],1),t._v(" "),n("div",{staticClass:"btn-container"},[n("btn",{staticClass:"is-fullwidth-mobile"},[t._v("\n              "+t._s(t.$t("home.project.contact.send"))+"\n            ")])],1)])]:t._e()],2)}),[],!1,null,"01276816",null).exports),d=n(238),m=(n(266),Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("card",{staticClass:"bonnes-pratiques-card"},[l("div",{staticClass:"columns"},[l("div",{staticClass:"column is-half-widescreen"},[l("h2",{staticClass:"is-title is-large is-mb-1"},[t._v("\n        "+t._s(t.$t("home.bonnesPratiques.title"))+"\n      ")]),t._v(" "),l("p",{staticClass:"has-text-primary text"},[t._v("\n        "+t._s(t.$t("home.bonnesPratiques.description"))+"\n      ")]),t._v(" "),l("btn",{attrs:{to:{name:"bonnes-pratiques"},size:"large"}},[t._v("\n          "+t._s(t.$t("home.bonnesPratiques.link.default"))+"\n      ")])],1),t._v(" "),l("div",{staticClass:"column is-half-widescreen bonnes-pratiques-illustration-container"},[l("img",{staticClass:"bonnes-pratiques-illustration",attrs:{"aria-hidden":"true",role:"presentation",src:n(265),alt:t.$t("home.bonnesPratiques.imageAltText")}})])])])}),[],!1,null,"24095491",null).exports),v=n(91),f={name:"HomePage",components:{HomeHeader:c,HomeProjet:h,ApplicationsList:d.a,BonnesPratiquesCard:m},asyncData:function(){return Object(l.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.findAllApplications();case 2:return e=t.sent,t.next=5,v.a.findAllApplicationsGeneral();case 5:return n=t.sent,t.abrupt("return",{applications:e,generalApplications:n});case 7:case"end":return t.stop()}}),t)})))()},head:function(){return{title:this.$t("siteTitle")+" "+this.$t("home.pageTitle")}},computed:{generalApplicationsByCategory:function(){return function(t){return this.generalApplications.filter((function(e){return e.category&&e.category===t}))}}}},_=(n(267),Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("home-header"),this._v(" "),e("container",{staticClass:"applications-container"},[e("applications-list",{staticClass:"applications-list",attrs:{applications:this.applications}}),this._v(" "),e("applications-list",{staticClass:"applications-list",attrs:{applications:this.generalApplicationsByCategory("webconference"),"show-available":!1,title:"Services de webconférences et réunions"}})],1),this._v(" "),e("container",[e("bonnes-pratiques-card")],1),this._v(" "),e("container",[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-half-widescreen"},[e("home-projet")],1)])])],1)}),[],!1,null,"a0d63836",null));e.default=_.exports}}]);