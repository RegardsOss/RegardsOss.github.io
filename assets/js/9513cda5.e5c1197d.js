"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[83792],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>g});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),i=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?t.createElement(g,s(s({ref:r},p),{},{components:n})):t.createElement(g,s({ref:r},p))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d[u]="string"==typeof e?e:o,s[1]=d;for(var i=2;i<a;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55030:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var t=n(87462),o=(n(67294),n(3905));const a={id:"backend-get-order-progress-amqp",title:"Get Order progress AMQP",sidebar_label:"Get Order progress AMQP",slug:"/development/backend/services/order/guides/get-order-progress-amqp"},s=void 0,d={unversionedId:"development/backend/regards/order/api-guides/backend-get-order-progress-amqp",id:"development/backend/regards/order/api-guides/backend-get-order-progress-amqp",title:"Get Order progress AMQP",description:"Exchange",source:"@site/docs/development/backend/regards/order/api-guides/amqp-get-order-progress.md",sourceDirName:"development/backend/regards/order/api-guides",slug:"/development/backend/services/order/guides/get-order-progress-amqp",permalink:"/docs/next/development/backend/services/order/guides/get-order-progress-amqp",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/order/api-guides/amqp-get-order-progress.md",tags:[],version:"current",frontMatter:{id:"backend-get-order-progress-amqp",title:"Get Order progress AMQP",sidebar_label:"Get Order progress AMQP",slug:"/development/backend/services/order/guides/get-order-progress-amqp"},sidebar:"dev",previous:{title:"Create Order AMQP",permalink:"/docs/next/development/backend/services/order/guides/create-order-amqp"},next:{title:"Create Order REST",permalink:"/docs/next/development/backend/services/order/guides/create-order-rest"}},l={},i=[{value:"Exchange",id:"exchange",level:3},{value:"AMQP Headers",id:"amqp-headers",level:3},{value:"Granted response",id:"granted-response",level:3},{value:"SubOrder done response",id:"suborder-done-response",level:3},{value:"Order done response",id:"order-done-response",level:3},{value:"Invalid response",id:"invalid-response",level:3},{value:"Internal error response",id:"internal-error-response",level:3}],p={toc:i},u="wrapper";function c(e){let{components:r,...n}=e;return(0,o.kt)(u,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"exchange"},"Exchange"),(0,o.kt)("p",null,"Exchange where Order requests responses are sent:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.order.amqp.output.OrderResponseDtoEvent"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"To listen to Order requests responses, the REGARDS administrator must create for you a dedicated queue bound to this exchange and allow your RabbitMQ user to access to that queue.")),(0,o.kt)("h3",{id:"amqp-headers"},"AMQP Headers"),(0,o.kt)("p",null,"Headers are the same for all kind of responses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "app_id": "REGARDS",\n  "timestamp" : 1681461977,\n  "correlation_id": "xxx",\n  "priority": 1,\n  "delivery_mode" : 2,\n  "content_encoding": "UTF-8",\n  "content_type": "application/json",\n  "headers": {\n    "regards.tenant": "tenant"\n  }\n}\n')),(0,o.kt)("h3",{id:"granted-response"},"Granted response"),(0,o.kt)("p",null,"REGARDS will publish a request granted event on response exchange when request is validated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "xxx",\n  "orderId": 1,\n  "status" : "GRANTED"\n}\n')),(0,o.kt)("h3",{id:"suborder-done-response"},"SubOrder done response"),(0,o.kt)("p",null,"REGARDS will publish SubOrder done events on response exchange. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your order creates several SubOrders (when order contains many large files), you should react to ",(0,o.kt)("inlineCode",{parentName:"strong"},"SUBORDER_DONE")," event."),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "SUBORDER_DONE",\n  "orderId": 1234,\n  "correlationId": "xxx",\n  "message": "A sub-order of user john@cnes.fr is finished and ready to download",\n  "downloadLink": "<host>/api/v1/rs-order/user/orders/1234/download"\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Use the ",(0,o.kt)("a",{parentName:"p",href:"./download-ordered-files"},"downloadLink value to perform a REST request")," to download all available files related to this order and allow next SubOrder to start.")),(0,o.kt)("h3",{id:"order-done-response"},"Order done response"),(0,o.kt)("p",null,"REGARDS will publish an order done event on response exchange."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If your order always creates a single SubOrders, you should react to ",(0,o.kt)("inlineCode",{parentName:"strong"},"DONE")," event."),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : "DONE",\n    "orderId": 1234,\n    "correlationId": "xxx",\n    "message": "Order of user john@cnes.fr is finished",\n    "downloadLink": "<host>/api/v1/rs-order/user/orders/1234/download"\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Use the ",(0,o.kt)("a",{parentName:"p",href:"./download-ordered-files"},"downloadLink value to perform a REST request")," to download all available files related to this order to complete the Order.")),(0,o.kt)("h3",{id:"invalid-response"},"Invalid response"),(0,o.kt)("p",null,"REGARDS will publish a request denied event on response exchange when request is not valid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : "DENIED",\n    "correlationId": "xxx",\n    "message" : "deny cause",\n}\n')),(0,o.kt)("admonition",{title:"How to handle it?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Look at your request, fix it and submit a new one.")),(0,o.kt)("h3",{id:"internal-error-response"},"Internal error response"),(0,o.kt)("p",null,"After request has been granted by REGARDS, internal errors can occur. In such case, an error response will be published on response exchange."),(0,o.kt)("p",null,"This error response will be published if at least one file of the order has failed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : "FAILED",\n    "orderId": 1,\n    "correlationId": "xxx",\n    "message": "Error cause",\n}\n')),(0,o.kt)("admonition",{title:"How to handle it?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Retry later with new order request or contact REGARDS administrators.")))}c.isMDXComponent=!0}}]);