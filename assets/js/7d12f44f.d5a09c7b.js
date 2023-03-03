"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[59378],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,m=p["".concat(l,".").concat(u)]||p[u]||v[u]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},50740:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const i={id:"backend-order-overview",title:"REGARDS order microservice",sidebar_label:"Overview",slug:"/development/backend/services/order/overview/"},o=void 0,s={unversionedId:"development/backend/regards/order/backend-order-overview",id:"development/backend/regards/order/backend-order-overview",title:"REGARDS order microservice",description:"Overview",source:"@site/docs/development/backend/regards/order/order.md",sourceDirName:"development/backend/regards/order",slug:"/development/backend/services/order/overview/",permalink:"/docs/development/backend/services/order/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/order/order.md",tags:[],version:"current",frontMatter:{id:"backend-order-overview",title:"REGARDS order microservice",sidebar_label:"Overview",slug:"/development/backend/services/order/overview/"},sidebar:"dev",previous:{title:"Bus message events",permalink:"/docs/development/backend/services/ingest/events/"},next:{title:"API",permalink:"/docs/development/backend/services/order/api-swagger"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Available APIs",id:"available-apis",level:2}],c={toc:d},p="wrapper";function v(e){let{components:r,...i}=e;return(0,a.kt)(p,(0,n.Z)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Order")," reponsabilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Manage user basket,")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Order files,")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download ordered files,"),(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Order")," microservice is designed to allow authenticated users to order files of the REGARDS catalog. To do so, users have to build a basket by adding entities in it thanks to ",(0,a.kt)("inlineCode",{parentName:"p"},"opensearch")," requests."),(0,a.kt)("p",{parentName:"li"},"There is no limit on the number of files or even on the size of the files users can order. Nevertheless, if the order is too big, it will be devided in many groups of files (suborders). In this case, the user have to retrieve the available group files (suborder) before the next one is made available by the system."),(0,a.kt)("p",{parentName:"li"},"Here under is the state diagram of the order process :"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:t(19701).Z,width:"950",height:"780"})))),(0,a.kt)("h2",{id:"available-apis"},"Available APIs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/basket/"},"Basket")," : API to manage user basket (add and remove entities/)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/"},"Order")," : API to submit, cancel and monitoring user orders.")))}v.isMDXComponent=!0},19701:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/ord_state_diagram-753c50ae0d1f3441bf8096f7a33c0f83.png"}}]);