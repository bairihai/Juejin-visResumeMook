(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{3111:function(t,e,c){},4382:function(t,e,c){t.exports=c.p+"8b117d08ff469dc6a7bdd2b0c190a68e.svg"},4383:function(t,e,c){t.exports=c.p+"842d7cde3cc133c8c62f0aea40d01c0c.svg"},4384:function(t,e,c){t.exports=c.p+"8867e249c23a7c0ea596c139befc04d7.svg"},4385:function(t,e,c){"use strict";c(3111)},4564:function(t,e,c){"use strict";c.r(e);var n=c(8),o=c(176),l=c(7),r=c(51),d=Object(n.d)({components:{BModal:o.Modal},props:{user:{type:Object,default:function(){return{}}},visible:{type:Boolean,default:function(){return!1}},growthInfo:{type:Array,default:function(){return[]}}},emits:["close"],setup:function(t,e){var c=Object(l.x)();return{isDarkTheme:Object(l.a)((function(){var t;return(null===(t=c.state.common)||void 0===t?void 0:t.theme)===r.c.dark})),userLevel:Object(l.a)((function(){return t.user.level})),closeModal:function(){e.emit("close")}}}}),v=(c(4385),c(29)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BModal",{staticClass:"upgrade-new-modal",attrs:{value:t.visible,"footer-hide":!0,width:"311px",closable:!1},on:{"on-close":t.closeModal},scopedSlots:t._u([{key:"header",fn:function(){return[t.growthInfo.length?n("div",{staticClass:"header-content"},[n("div",{staticClass:"message-title"},[t._v("\n        恭喜你升级为\n        "),n("span",{staticClass:"bold"},[t._v("LV."+t._s(t.userLevel))])]),t._v(" "),n("div",{staticClass:"message-desc"},[t._v("期待你在掘金带来更多精彩创作~")])]):t._e()]},proxy:!0}])},[t._v(" "),t.growthInfo.length?n("div",{staticClass:"content",class:{"dark-content":t.isDarkTheme}},[n("div",{staticClass:"unlock-equity"},[n("div",{staticClass:"horizontal"},[n("img",{attrs:{src:c(4382),alt:""}})]),t._v(" "),n("div",{staticClass:"unlock-new-equity"},[t._v("解锁新权益")]),t._v(" "),n("div",{staticClass:"horizontal"},[n("img",{attrs:{src:c(4383),alt:""}})])]),t._v(" "),n("ul",{staticClass:"equity-type-list"},t._l(t.growthInfo[0].growth_award,(function(e){return n("li",{key:e.priv_id,staticClass:"equity-type-item"},[n("div",{staticClass:"equity-icon"},[n("img",{attrs:{src:e.web_icon[1],alt:""}})]),t._v(" "),n("div",{staticClass:"equity-desc"},[t._v(t._s(e.title))])])})),0),t._v(" "),n("a",{staticClass:"goto-btn",attrs:{href:"/creator/growth/grade",target:"_blank"}},[t._v("\n      前往体验\n    ")])]):t._e(),t._v(" "),n("div",{staticClass:"close-icon",on:{click:t.closeModal}},[n("img",{attrs:{src:c(4384),alt:""}})])])}),[],!1,null,"8bb78912",null);e.default=component.exports}}]);