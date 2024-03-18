"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[2777],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>g});var o=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),l=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(d.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(g,i(i({ref:r},c),{},{components:t})):o.createElement(g,i({ref:r},c))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22921:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(58168),n=(t(96540),t(15680));const a={id:"backend-order-overview",title:"RS-ORDER microservice",sidebar_label:"Overview",slug:"/development/backend/services/order/overview/"},i=void 0,s={unversionedId:"development/backend/regards/order/backend-order-overview",id:"version-1.12.0/development/backend/regards/order/backend-order-overview",title:"RS-ORDER microservice",description:"The RS-ORDER microservice allows authenticated users to order files from the REGARDS catalog and download them.",source:"@site/versioned_docs/version-1.12.0/development/backend/regards/order/order.md",sourceDirName:"development/backend/regards/order",slug:"/development/backend/services/order/overview/",permalink:"/docs/1.12.0/development/backend/services/order/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/regards/order/order.md",tags:[],version:"1.12.0",frontMatter:{id:"backend-order-overview",title:"RS-ORDER microservice",sidebar_label:"Overview",slug:"/development/backend/services/order/overview/"},sidebar:"dev",previous:{title:"Bus message events",permalink:"/docs/1.12.0/development/backend/services/ingest/events/"},next:{title:"Order lifecycle",permalink:"/docs/1.12.0/development/backend/services/order/guides/order-lifecycle"}},d={},l=[{value:"API Guides",id:"api-guides",level:3},{value:"REST API",id:"rest-api",level:3},{value:"Contributors guides",id:"contributors-guides",level:3}],c={toc:l},u="wrapper";function p(e){let{components:r,...t}=e;return(0,n.yg)(u,(0,o.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The RS-ORDER microservice allows authenticated users to order files from the REGARDS catalog and download them.",(0,n.yg)("br",{parentName:"p"}),"\n","To do so, RS-ORDER provides these functionnalities:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"an user basket - you can add a selection of catalog products to your cart and order them later"),(0,n.yg)("li",{parentName:"ul"},"create order - you can transform your user basket selection into an order"),(0,n.yg)("li",{parentName:"ul"},"retrieve order status - the order may be running or even wait for user to download a subset of the order (SubOrders)"),(0,n.yg)("li",{parentName:"ul"},"download ordered files"),(0,n.yg)("li",{parentName:"ul"},"process ordered files - your ordered files can be reprocessed before you download them")),(0,n.yg)("admonition",{title:"Max order size ",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"There is no limit on the number of files or even on the size of the files users can order.",(0,n.yg)("br",{parentName:"p"}),"\n","Nevertheless, if the order is too big, it will be devided in many groups of files we name ",(0,n.yg)("strong",{parentName:"p"},"SubOrders"),".",(0,n.yg)("br",{parentName:"p"}),"\n","In that case, user has to retrieve available files from the finished SubOrder, before the next one can be processed by the system.")),(0,n.yg)("h3",{id:"api-guides"},"API Guides"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.12.0/development/backend/services/order/guides/order-lifecycle"},"Order life cycle")," allows you to understand how an order will progress over time."),(0,n.yg)("li",{parentName:"ul"},"Create Order ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.12.0/development/backend/services/order/guides/create-order-rest"},"using REST API")," or ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.12.0/development/backend/services/order/guides/create-order-amqp"},"using AMQP API")," shows you how to create a basket selection and create the order in a single request. ",(0,n.yg)("strong",{parentName:"li"},"Recommended for interoperability since v1.12")),(0,n.yg)("li",{parentName:"ul"},"Get Order ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.12.0/development/backend/services/order/guides/get-order-status-rest"},"status using REST API")," or ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.12.0/development/backend/services/order/guides/get-order-progress-amqp"},"progress threw AMQP API")," shows you how to create a basket selection and create the order in a single request. ",(0,n.yg)("strong",{parentName:"li"},"Recommended for interoperability since v1.12")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.12.0/development/backend/services/order/guides/download-ordered-files"},"Download ordered files using REST API"))),(0,n.yg)("h3",{id:"rest-api"},"REST API"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.12.0/development/backend/services/order/api-swagger"},"RS-ORDER microservice REST API")," auto generated using OpenAPI.  ")),(0,n.yg)("h3",{id:"contributors-guides"},"Contributors guides"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"more incomming...")))}p.isMDXComponent=!0}}]);