(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1046:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var o=n(7);function r(){var e=Object(o.c)();return{openReportModal:function(t,n){if(e){var o=e.proxy.$getBean("eventBus");o.emit(o.eventType.REPORT_CONTENT,t,n)}}}}function c(){var e=Object(o.m)({visible:!1,show:!1});return{reportModalData:e,showReportModal:function(t,n){e.show||(e.show=!0),e.visible=!0,e.itemId=t,e.idType=n}}}},1778:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n(6),n(23);var o=n(5),r=n(9),c=n(108),l=n(22),d=n(18),h=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1e3,e.abrupt("return",setTimeout((function(){return Promise.resolve()}),t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function f(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||Object(d.e)()){e.next=17;break}if(localStorage.getItem(l.a.userFirstVisitDispatchCoupon)!==t){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,c.a.UserCouponReceiveDiscountFirstOrder({},{showError:!1});case 7:if((null==(n=e.sent)?void 0:n.err_no)!==r.ERROR_NO.OK){e.next=12;break}return localStorage.setItem(l.a.userFirstVisitDispatchCoupon,t),e.next=12,h();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error("userFirstVisitDispatchCoupon api request error:",e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)}},3060:function(e,t,n){},3061:function(e,t,n){},3062:function(e,t,n){},3063:function(e,t,n){},3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(83),n(218);var o=n(183);function r(e,t){var n,r,c=localStorage.getItem("hideExtension"),l=void 0!==(null!==(r=(null!==(n=null===document||void 0===document?void 0:document.cookie)&&void 0!==n?n:"").split(";"))&&void 0!==r?r:[]).find((function(e){return"_jj_ext=1"===e.trim()})),d=(null==t?void 0:t.utm_source)===o.i;return!c&&!l&&!d}},3065:function(e,t,n){},3066:function(e,t,n){},4250:function(e,t,n){e.exports=n.p+"img/233.6b9e673.png"},4251:function(e,t,n){e.exports=n.p+"img/666.5f186ea.png"},4252:function(e,t,n){e.exports=n.p+"img/thumbs-up.33598de.png"},4253:function(e,t,n){"use strict";n(3060)},4254:function(e,t,n){"use strict";n(3061)},4255:function(e,t,n){"use strict";n(3062)},4256:function(e,t,n){n(16),n(15),n(11),n(6),n(14);var o=n(40),r=n(42);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}e.exports={functional:!0,render:function(e,t){var n=t._c,data=(t._v,t.data),l=t.children,d=void 0===l?[]:l,h=data.class,f=data.staticClass,style=data.style,m=data.staticStyle,v=data.attrs,_=void 0===v?{}:v,w=r(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){o(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[h,f],style:[style,m],attrs:Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},_)},w),d.concat([n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM7.89913 7.89775C8.1188 7.67808 8.47495 7.67808 8.69462 7.89775L12.0234 11.2266L15.3523 7.89775C15.5719 7.67808 15.9281 7.67808 16.1477 7.89775C16.3674 8.11742 16.3674 8.47357 16.1477 8.69324L12.8189 12.0221L16.3844 15.5875C16.6041 15.8072 16.6041 16.1634 16.3844 16.383C16.1647 16.6027 15.8086 16.6027 15.5889 16.383L12.0234 12.8176L8.45796 16.383C8.23829 16.6027 7.88214 16.6027 7.66247 16.383C7.4428 16.1634 7.4428 15.8072 7.66247 15.5875L11.2279 12.0221L7.89913 8.69324C7.67946 8.47357 7.67946 8.11742 7.89913 7.89775Z"}})]))}}},4257:function(e,t,n){"use strict";n(3063)},4258:function(e,t,n){"use strict";n(3065)},4259:function(e,t,n){"use strict";n(3066)},4444:function(e,t,n){"use strict";n.r(t);n(16),n(15),n(11),n(6),n(14),n(136),n(23);var o=n(5),r=(n(120),n(137),n(39),n(43),n(53),n(0)),c=n(223),l=n(84),d=n(4),h=n(48),f=n(26),m={head:function(){return{title:"错误"}}},v=n(28),_=Object(v.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("view-container",[t("div",{staticClass:"view error-view"},[t("h1",[this._v("有一个错误已经发生")])])])}),[],!1,null,"3e90d13e",null).exports,w={233:n(4250),666:n(4251),up:n(4252)};function O(e){for(var t=[],i=0;i<15;i++){var n=parseInt(14*Math.random()+16)+"px",o=y("width",n),r=y("height",n),c=y("display","block"),l=y("position","absolute"),d=y("left",parseInt(100*Math.random())+"%"),h=y("top",parseInt(100*Math.random())+"%"),f=y("background","url(".concat(w[e],") no-repeat center center")),m=y("background-size","contain"),v='\n      <span class="barrage-emoji" style="'.concat(o+r+l+d+h+f+c+m,'">\n       </span>\n    ');t.push(v)}return function(e){return'\n        <div\n          class="template"\n          style="\n            position:relative;\n            width:100%;\n            height:100%;\n          "\n        >\n          '.concat(e,"\n        </div>\n      ")}(t.join(""))}function y(e,t){return"".concat(e,":").concat(t,";")}var C={data:function(){return{running:{type:"233",show:!1},barrageShowDuration:6100,barrageTimeout:null,barrageHtml:[]}},methods:{stop:function(){clearTimeout(this.barrageTimeout),this.running.show=!1},renderBarrage:function(){this.barrageHtml=function(e){for(var t=[],n=0;n<3;n++){var o=O(e);t.push(o)}return t}(this.running.type),this.$nextTick((function(){document.querySelectorAll(".emoji-inner-screen").forEach((function(e){e.classList.add("animate")}))}))}},watch:{"running.show":function(e){var t=this;clearTimeout(this.barrageTimeout),e&&(this.renderBarrage(),this.barrageTimeout=setTimeout((function(){t.running.show=!1}),this.barrageShowDuration))}},mounted:function(){var e=this,t=this.$getBean("eventBus");t.onVmLife(this,t.eventType.ARTICLE_COMMENT_BARRAGE,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"233";e.running.type=t,e.running.show=!0}))}},T=(n(4253),Object(v.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"emoji-barrage"},[e.running.show?n("div",{staticClass:"full-screen",on:{dblclick:e.stop}},e._l(e.barrageHtml,(function(t,o){return n("div",{staticClass:"emoji-inner-screen",class:"emojin-inner-screen__"+o,domProps:{innerHTML:e._s(t)}})})),0):e._e()])}),[],!1,null,"68506677",null).exports),E={props:["type","content"]},P=(n(4254),{components:{Alert:Object(v.a)(E,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"alert",class:[this.type]},[this._v(this._s(this.content))])}),[],!1,null,"6b99392a",null).exports},props:["timeout"],data:function(){return{list:[]}},mounted:function(){var e=this;this.$on("push",(function(t){e.list.unshift(t),window.setTimeout((function(){e.list=e.list.filter((function(e){return e!==t}))}),e.timeout||3e3)}))}}),L=(n(4255),Object(v.a)(P,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"alert-list"},this._l(this.list,(function(e,n){return t("alert",{key:n,staticClass:"alert",attrs:{content:e.content,type:e.type}})})),1)}),[],!1,null,"262fe4c6",null).exports),A=n(7),R=n(1046),V=n(22),j=n(154),M=n(71),k=n.n(M),x=n(156),I=n(8),S=n(4256),D=n.n(S),N=Object(I.d)({components:{CloseIcon:D.a},emits:["show"],setup:function(e,t){var n=t.root,r=t.emit,c=[{name:"timelineIndex",alias:"home",traceShowKey:"ad_web_pop_show",traceClickKey:"ad_web_pop_click"},{name:"column",alias:"post",traceShowKey:"ad_web_article_pop_show",traceClickKey:"ad_web_article_pop_click"}],l=Object(A.v)(),h=Object(I.r)(),f=function(){var e=localStorage.getItem(V.a.showAdTccModal)||"[]",t=[];try{var n=JSON.parse(e);Array.isArray(n)&&(t=n)}catch(e){console.error(e),t=[]}return t},m=function(){return c.filter((function(e){return e.name===(l.value.name||"")}))},v=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var t,o,c,l,v,w,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.$device.isDesktop){e.next=2;break}return e.abrupt("return");case 2:if(!(c=m()).length){e.next=13;break}return e.next=6,n.$store.dispatch(d.TCC_CONFIG,"juejin_config_web_ad_home_post");case 6:l=e.sent,v=(null===(t=l)||void 0===t?void 0:t[c[0].alias])||[],w=Date.now()/1e3,(O=v.filter((function(e){return w>k()(e.startTime).unix()&&w<k()(e.endTime).unix()}))).length&&!f().includes("".concat((null===(o=O[0])||void 0===o?void 0:o.id)||""))&&(r("show"),h.value=O[0],_(c[0].traceShowKey)),e.next=14;break;case 13:h.value&&(h.value=void 0);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(I.x)((function(){return l.value.name}),(function(){v()})),Object(I.m)((function(){v()}));var _=function(e){var t,o;e&&n.$TEA(e,{id:(null===(t=h.value)||void 0===t?void 0:t.id)||"",ad_url:(null===(o=h.value)||void 0===o?void 0:o.url)||""})},w=function(e){var t,o,r;n.$TEA(null===(t=m()[0])||void 0===t?void 0:t.traceClickKey,{id:(null===(o=h.value)||void 0===o?void 0:o.id)||"",ad_url:(null===(r=h.value)||void 0===r?void 0:r.url)||"",click_type:e})};return{activeAd:h,closeAd:function(){var e;localStorage.setItem(V.a.showAdTccModal,JSON.stringify(f().concat(["".concat((null===(e=h.value)||void 0===e?void 0:e.id)||"")]))),w("skip"),h.value=void 0},handleClick:function(){w("enter"),window.open(h.value.url,"_blank")}}}}),U=(n(4257),Object(v.a)(N,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.activeAd?n("div",{staticClass:"poster-wrap",on:{click:function(t){return t.stopPropagation(),e.handleClick(t)}}},[n("div",{staticClass:"poster-close-wrap",on:{click:function(t){return t.stopPropagation(),e.closeAd(t)}}},[n("CloseIcon",{staticClass:"poster-close-icon"})],1),e._v(" "),n("div",{staticClass:"poster-img-wrap"},[n("img",{staticClass:"poster-img",attrs:{src:e.activeAd.imgUrl}})]),e._v(" "),n("div",{staticClass:"poster-title"},[e._v(e._s(e.activeAd.title))])]):e._e()}),[],!1,null,"6742a10e",null).exports),B=n(313),$=n(170),F=n(3064),G=n(1778),H=n(121);function K(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function Y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?K(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):K(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var Q=0,W=["/bind","/login","/mobile/lottery","/mobile/lottery/welfare","/getting-started","/app","/delete/account","/mobile/bugfix","/bugfix/rank","/challenge/1","/challenge/1/detail"],J=Object(A.b)({components:{Barrage:T,AlertList:L,ErrorView:_,BindPhoneModal:function(){return n.e(34).then(n.bind(null,4392))},NotFoundView:function(){return n.e(38).then(n.bind(null,3123))},NewUserLead:function(){return n.e(134).then(n.bind(null,4479))},PinModal:function(){return Promise.all([n.e(9),n.e(75)]).then(n.bind(null,4558))},AuthModal:function(){return n.e(18).then(n.bind(null,4391))},CaptchaModal:function(){return n.e(184).then(n.bind(null,3135))},SuspensionPanel:function(){return n.e(22).then(n.bind(null,3120))},ActivityRecommend:function(){return n.e(196).then(n.bind(null,4559))},ExtensionRecommend:function(){return n.e(197).then(n.bind(null,4560))},AccountDeleteModal:function(){return n.e(174).then(n.bind(null,3125))},VipBorrowModal:function(){return n.e(181).then(n.bind(null,4511))},UserGrowthLead:function(){return n.e(114).then(n.bind(null,4478))},UserGrowthPopup:function(){return n.e(139).then(n.bind(null,4561))},UpgradeBox:function(){return n.e(176).then(n.bind(null,4562))},Report:function(){return Promise.all([n.e(188),n.e(130)]).then(n.bind(null,4512))},LoginGuide:function(){return n.e(36).then(n.bind(null,4556))},HomePostTccAd:U},setup:function(e,t){var n=t.root,o=Object(A.x)();o.dispatch(d.LOAD_THEME);var r=Object(R.b)(),c=r.showReportModal,l=r.reportModalData;return Object(A.j)((function(){var e,t,r=n.$getBean("eventBus");r.onVmLife(n,r.eventType.REPORT_CONTENT,c),(null===(t=null===(e=o.state.auth)||void 0===e?void 0:e.user)||void 0===t?void 0:t.user_id)&&(o.dispatch(d.FETCH_ORE_COUNT),o.dispatch(d.FETCH_AVATAR_MENU_INFO),H.a.CompleteTask())})),Y(Y({},Object(j.b)()),{},{reportModalData:l})},data:function(){return{visibleAuthForm:null,isSuspensionPanelVisible:!1,isAlertListVisible:!1,newuserTicket:!1,isVisiblePinEditor:!1,isBindPhoneNumberModalVisible:!1,visibleCaptcha:!1,captchaType:"SLIDE",verifyCallback:"",bindPhoneMsg:"",to:"",isLogoutModalVisible:!1,UserLeadPopupShowed:!1,isFromMainPageSigninClick:!1,enter_method:"",newLeadVisibility:!1,bindPhoneOption:{},popupMutex:!1,isShowVipBorrow:!1,vipTeaParams:{},bookInfo:{},hideRecommendComponent:!1,closeRedirectParams:null,loginGuideFooterVisible:!1,hasTccAd:!1}},computed:Y(Y({},Object(l.mapGetters)({user:d.USER,activity:d.ACTIVITY,logined:d.LOGINED,unreadNotificationCount:d.UNREAD_NOTIFICATION_COUNT,errorView:d.ERROR_VIEW,needSuspension:d.NEED_SUSPENSION})),{},{displayedUnreadNotificationAmount:function(){return Object(c.c)(this.unreadNotificationCount.total)},titleTemplate:function(){return this.displayedUnreadNotificationAmount?"(".concat(this.displayedUnreadNotificationAmount,") %s - 掘金"):"%s - 掘金"},date:function(){return Object(f.a)(new Date,"MMDD")},recommendComponent:function(){var e,t;return this.hideRecommendComponent||["login","lognIndex","bindIndex","offer","presalePay","presaleIndex","presaleResult","vipPay","vipIndex","vipPayResult","membership","membershipHome","integral","property","mall"].includes(this.$route.name)||this.$route.path.startsWith("/creator")?null:1===(null===(e=this.activity[2020])||void 0===e?void 0:e.is_show)?"ActivityRecommend":Object(F.a)(null===(t=this.$nuxt)||void 0===t?void 0:t.context,this.$route.query)?"ExtensionRecommend":null},isMobile:function(){return this.$device.isMobile},isPathExcluded:function(){var path=this.$router.currentRoute.path;return W.some((function(e){return e===path}))}}),watch:{visibleAuthForm:function(e){this.visibleMobileExtension(!e)},user:function(e){var t=this.$route.name||"";("courseIndex"!==t||this.$route.path.includes("bytetech"))&&(["bookInfo","column"].includes(t)||Object(G.a)((null==e?void 0:e.user_id)||""))},$route:function(){this.checkLogin()}},mounted:function(){var e,t=this;Q=new Date,this.initEventListener(),this.mountAlertList(),this.mountSuspensionPanel(),this.fetchUnreadNotificationCount(),this.$store.dispatch(d.ACTIVITY),this.$device.isDesktop&&(null===(e=this.user)||void 0===e?void 0:e.need_lead)&&!this.isPathExcluded&&(this.popupMutex||(this.newLeadVisibility=!0,this.popupMutex=!0)),"1"!==window.sessionStorage.getItem("IS_DELETE")||this.popupMutex||this.isPathExcluded||(this.isLogoutModalVisible=!0,this.popupMutex=!0,window.sessionStorage.removeItem("IS_DELETE")),this.checkLogin(),this.$device.isDesktop&&Object(B.a)({name:"login_guide",key:"login_type",value:["nav","all"],defaultValue:"default"}).then((function(e){if(e){var n=t.$getBean("eventBus");n.onVmLife(t,n.eventType.HEADER_NAV_VISIBILITY_CHANGE,(function(e){var n=e.visible,o=window.localStorage.getItem(V.a.loginGuideFooterTime);t.user||n||t.recommendComponent||t.hasTccAd||k()().isSame(o,"day")||(t.loginGuideFooterVisible=!0,t.$TEA("login_guide_show",{from:x.a.footer,type:x.b.auto}),window.localStorage.setItem(V.a.loginGuideFooterTime,k()().format("YYYY-MM-DD")))}))}}))},beforeDestroy:function(){Object(h.q)(this.handleVisibilityChange)},methods:Y(Y({},Object(l.mapActions)({fetchUnreadNotificationCount:d.FETCH_UNREAD_NOTIFICATION_COUNT,fetchCurrentUser:d.FETCH_CURRENT_USER})),{},{visibleMobileExtension:function(e){var t=document.getElementById("mobile-newuser-ticket");null!==t&&(t.style.opacity=Number(e))},checkLogin:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$store.getters.USER){t.next=6;break}return t.next=3,e.$store.dispatch(d.TCC_CONFIG,"juejin_login_config");case 3:r=t.sent,(null==(c=null===(o=null===(n=r.mustLogin)||void 0===n?void 0:n.bookIds)||void 0===o?void 0:o.map((function(e){return{reg:new RegExp("^/((book)|(video))/(m/)?".concat(e,"/section/\\d+$")),id:e}})))?void 0:c.length)&&window.location.pathname&&c.forEach((function(t){var n=t.reg,o=t.id;n.test(window.location.pathname)&&e.$requestLogin(!1,void 0,{name:"bookInfo",params:{id:o}})}));case 6:case"end":return t.stop()}}),t)})))()},initEventListener:function(){var e=this,t=this.$getBean("eventBus"),n=t.eventType;t.onVmLife(this,n.VISIBLE_LOGOUT_MODAL,(function(){e.isLogoutModalVisible=!0})),t.onVmLife(this,n.REQUEST_LOGIN,(function(t,n,o){e.isFromMainPageSigninClick=t,e.enter_method=n,e.visibleAuthForm="login-with-phone",e.newuserTicket=null,e.closeRedirectParams=o||null})),t.onVmLife(this,n.SHOW_VIP_BORROW_MODAL,(function(t,n){e.isShowVipBorrow=!0,e.bookInfo=t,e.vipTeaParams=n})),t.onVmLife(this,n.REQUEST_LOGIN_REDIRECT,(function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0;e.isFromMainPageSigninClick=t,e.enter_method=n,e.visibleAuthForm="login-with-phone",e.newuserTicket=null,e.to=o})),t.onVmLife(this,n.REQUEST_REGISTER,(function(t){e.visibleAuthForm="register",e.newuserTicket=t})),t.onVmLife(this,n.REQUEST_RESET_PASSWORD,(function(){e.visibleAuthForm="reset-password"})),t.onVmLife(this,n.AUTHORIZED,(function(){e.visibleAuthForm=null})),t.onVmLife(this,n.REQUEST_LOGOUT,(function(){e.$store.dispatch(d.LOGOUT)})),t.onVmLife(this,n.ALERT,(function(content,t){e.$refs.alertList.$emit("push",{content:content,type:t})})),t.onVmLife(this,n.CREATE_PIN,(function(t){e.isVisiblePinEditor="pin",e.editorProps=t})),t.onVmLife(this,n.BIND_PHONE_NUMBER,(function(t,option){e.bindPhoneMsg=t||"",e.isBindPhoneNumberModalVisible=!0,e.bindPhoneOption=option;var n=e.$getBean("eventBus");n.emit(n.eventType.LOCK_ROOT_CONTAINER_SCROLL)})),t.onVmLife(this,n.TOGGLE_CAPTCHA_MODAL,(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"SLIDE",o=arguments.length>2?arguments[2]:void 0;e.captchaType=n,e.visibleCaptcha=t,e.verifyCallback=o})),Object($.d)(),Object(h.o)(this.handleVisibilityChange)},mountAlertList:function(){this.isAlertListVisible=!0},mountSuspensionPanel:function(){this.isSuspensionPanelVisible=!this.isPathExcluded},onBindPhoneNumberModalClose:function(){var e=this.$getBean("eventBus");this.fetchCurrentUser(),this.isBindPhoneNumberModalVisible=!1,e.emit(e.eventType.UNLOCK_ROOT_CONTAINER_SCROLL)},collectPageStayTime:function(){var e=0;Q&&(e=new Date-Q),this.$TEA("main_site_stay",{user_id:this.user?this.user.id:"unknown",page_link:window.location.href,stay_time:e}),Q=0},handleVisibilityChange:function(){var e=Object(h.d)();document[e]?this.collectPageStayTime():Q=new Date},onVerify:function(){this.visibleCaptcha=!1;var e=this.$getBean("eventBus");e.emit(e.eventType.CAPTCHA_VERIFIED,this.verifyCallback)},closeRecommendComponent:function(){this.hideRecommendComponent=!0},closeAuthModal:function(e){this.visibleAuthForm=null,!0!==e&&this.closeRedirectParams&&this.$router.push(this.closeRedirectParams)}})}),Z=(n(4258),n(4259),Object(v.a)(J,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"juejin"}},[e.errorView?n(e.errorView,{tag:"component",staticClass:"error-view"}):e._e(),e._v(" "),e.errorView?e._e():n("router-view"),e._v(" "),e.recommendComponent?n(e.recommendComponent,{tag:"component",attrs:{logined:e.logined},on:{close:e.closeRecommendComponent}}):e._e(),e._v(" "),n("div",{staticClass:"global-component-box"},[e.isAlertListVisible?n("alert-list",{ref:"alertList",staticClass:"alert-list"}):e._e(),e._v(" "),e.isSuspensionPanelVisible&&e.needSuspension?n("suspension-panel",{staticClass:"suspension-panel",attrs:{"has-extension-banner":Boolean(e.recommendComponent)}}):e._e(),e._v(" "),e.visibleAuthForm?n("auth-modal",{attrs:{type:e.visibleAuthForm,"newuser-ticket":e.newuserTicket,to:e.to,"is-from-main-page-signin-click":e.isFromMainPageSigninClick,enter_method:e.enter_method},on:{close:e.closeAuthModal}}):e._e(),e._v(" "),e.isShowVipBorrow?n("VipBorrowModal",{attrs:{"book-info":e.bookInfo,"tea-params":e.vipTeaParams},on:{closeVipBorrowModal:function(t){e.isShowVipBorrow=!1}}}):e._e(),e._v(" "),e.isVisiblePinEditor?n("pin-modal",{attrs:{"editor-props":e.editorProps},on:{close:function(t){e.isVisiblePinEditor=!1}}}):e._e(),e._v(" "),e.isBindPhoneNumberModalVisible?n("BindPhoneModal",{attrs:{visible:e.isBindPhoneNumberModalVisible,msg:e.bindPhoneMsg,to:e.bindPhoneOption.toUrl||"",closable:e.bindPhoneOption.closable,title:e.bindPhoneOption.title,"trigger-type":e.bindPhoneOption.triggerType},on:{close:e.onBindPhoneNumberModalClose}}):e._e(),e._v(" "),e.visibleCaptcha?n("captcha-modal",{ref:"captcha",attrs:{type:e.captchaType},on:{onSuccess:e.onVerify}}):e._e()],1),e._v(" "),n("ClientOnly",[n("NewUserLead",{attrs:{visible:e.newLeadVisibility},on:{close:function(t){e.newLeadVisibility=!1},finish:function(t){e.newLeadVisibility=!1}}}),e._v(" "),e.user_growth_lead?n("UserGrowthLead",{attrs:{logined:e.logined},on:{confirm:function(t){return e.handleUser_growth_leadDismiss("confirm")},dismiss:function(t){return e.handleUser_growth_leadDismiss("dismiss")}}}):e._e(),e._v(" "),e.showUserGrowthPopup||e.showUserGrowthPopup.visible?n("UserGrowthPopup",{attrs:{popup:e.showUserGrowthPopup.data},on:{dismiss:e.handleShowUserGrowthPopupDismiss}}):e._e(),e._v(" "),n("UpgradeBox",{attrs:{visible:e.isUpgradeBoxVisible.visible,user:e.user,"growth-info":e.isUpgradeBoxVisible.data},on:{close:e.handleIsUpgradeBoxVisibleDismiss}})],1),e._v(" "),e.isLogoutModalVisible?n("AccountDeleteModal",{attrs:{"need-qrcode":!1},on:{close:function(t){e.isLogoutModalVisible=!1}}},[e._v("\n    掘友您好，您当前登录账号正在注销审核期，故无法访问稀土掘金内容。如果需要取消注销申请，请登录稀土掘金App，进行放弃注销操作。如果您有任何建议和反馈，可以发送邮箱到\n    feedback@xitu.io 联系我们。给您带来的不便，我们深感抱歉。\n  ")]):e._e(),e._v(" "),e.reportModalData.show?n("Report",{attrs:{"item-id":e.reportModalData.itemId,"item-type":e.reportModalData.idType},model:{value:e.reportModalData.visible,callback:function(t){e.$set(e.reportModalData,"visible",t)},expression:"reportModalData.visible"}}):e._e(),e._v(" "),n("ClientOnly",[n("HomePostTccAd",{class:{"home-post-tcc-add":!0,"tcc-ad-with-recommend":!!e.recommendComponent},on:{show:function(t){e.hasTccAd=!0}}}),e._v(" "),e.loginGuideFooterVisible?n("LoginGuide",{staticClass:"login-guide-popup",attrs:{position:"footer"},on:{close:function(t){e.loginGuideFooterVisible=!1}}}):e._e()],1)],1)}),[],!1,null,null,null));t.default=Z.exports}}]);