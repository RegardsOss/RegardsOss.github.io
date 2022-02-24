"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[84245],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return v}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),v=i,m=u["".concat(l,".").concat(v)]||u[v]||p[v]||o;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4256:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"backend-order-overview",title:"REGARDS order microservice",sidebar_label:"Overview",slug:"/development/backend/services/order/overview/"},l=void 0,d={unversionedId:"development/backend/regards/order/backend-order-overview",id:"version-1.6.0/development/backend/regards/order/backend-order-overview",title:"REGARDS order microservice",description:"Overview",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/order/order.md",sourceDirName:"development/backend/regards/order",slug:"/development/backend/services/order/overview/",permalink:"/docs/1.6.0/development/backend/services/order/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/order/order.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-order-overview",title:"REGARDS order microservice",sidebar_label:"Overview",slug:"/development/backend/services/order/overview/"},sidebar:"version-1.6.0/dev",previous:{title:"Bus message events",permalink:"/docs/1.6.0/development/backend/services/ingest/events/"},next:{title:"Basket",permalink:"/docs/1.6.0/development/backend/services/order/api/basket/"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Available APIs",id:"available-apis",children:[],level:2}],p={toc:c};function u(e){var r=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Order")," reponsabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Manage user basket,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Order files,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Download ordered files,"),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Order")," microservice is designed to allow authenticated users to order files of the REGARDS catalog. To do so, users have to build a basket by adding entities in it thanks to ",(0,o.kt)("inlineCode",{parentName:"p"},"opensearch")," requests."),(0,o.kt)("p",{parentName:"li"},"There is no limit on the number of files or even on the size of the files users can order. Nevertheless, if the order is too big, it will be devided in many groups of files (suborders). In this case, the user have to retrieve the available group files (suborder) before the next one is made available by the system."),(0,o.kt)("p",{parentName:"li"},"Here under is the state diagram of the order process :"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:t(16054).Z,width:"950",height:"780"})))),(0,o.kt)("h2",{id:"available-apis"},"Available APIs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../api/basket/"},"Basket")," : API to manage user basket (add and remove entities/)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../api/"},"Order")," : API to submit, cancel and monitoring user orders.")))}u.isMDXComponent=!0},16054:function(e,r,t){r.Z=t.p+"assets/images/ord_state_diagram-753c50ae0d1f3441bf8096f7a33c0f83.png"}}]);