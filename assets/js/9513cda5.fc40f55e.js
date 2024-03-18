"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[9222],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>m});var o=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=o.createContext({}),i=function(e){var r=o.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=i(e.components);return o.createElement(l.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=i(n),c=t,m=u["".concat(l,".").concat(c)]||u[c]||g[c]||a;return n?o.createElement(m,s(s({ref:r},p),{},{components:n})):o.createElement(m,s({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,s=new Array(a);s[0]=c;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d[u]="string"==typeof e?e:t,s[1]=d;for(var i=2;i<a;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48959:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var o=n(58168),t=(n(96540),n(15680));const a={id:"backend-get-order-progress-amqp",title:"Get Order progress AMQP",sidebar_label:"Get Order progress AMQP",slug:"/development/backend/services/order/guides/get-order-progress-amqp"},s=void 0,d={unversionedId:"development/backend/regards/order/api-guides/backend-get-order-progress-amqp",id:"development/backend/regards/order/api-guides/backend-get-order-progress-amqp",title:"Get Order progress AMQP",description:"Exchange",source:"@site/docs/development/backend/regards/order/api-guides/amqp-get-order-progress.md",sourceDirName:"development/backend/regards/order/api-guides",slug:"/development/backend/services/order/guides/get-order-progress-amqp",permalink:"/docs/development/backend/services/order/guides/get-order-progress-amqp",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/order/api-guides/amqp-get-order-progress.md",tags:[],version:"current",frontMatter:{id:"backend-get-order-progress-amqp",title:"Get Order progress AMQP",sidebar_label:"Get Order progress AMQP",slug:"/development/backend/services/order/guides/get-order-progress-amqp"},sidebar:"dev",previous:{title:"Create Order AMQP",permalink:"/docs/development/backend/services/order/guides/create-order-amqp"},next:{title:"Create Order REST",permalink:"/docs/development/backend/services/order/guides/create-order-rest"}},l={},i=[{value:"Exchange",id:"exchange",level:3},{value:"AMQP Headers",id:"amqp-headers",level:3},{value:"Granted response",id:"granted-response",level:3},{value:"SubOrder done response",id:"suborder-done-response",level:3},{value:"Order done response",id:"order-done-response",level:3},{value:"Invalid response",id:"invalid-response",level:3},{value:"Internal error response",id:"internal-error-response",level:3}],p={toc:i},u="wrapper";function g(e){let{components:r,...n}=e;return(0,t.yg)(u,(0,o.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h3",{id:"exchange"},"Exchange"),(0,t.yg)("p",null,"Exchange where Order requests responses are sent:",(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.order.amqp.output.OrderResponseDtoEvent"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("em",{parentName:"p"},"To listen to Order requests responses, the REGARDS administrator must create for you a dedicated queue bound to this exchange and allow your RabbitMQ user to access to that queue.")),(0,t.yg)("h3",{id:"amqp-headers"},"AMQP Headers"),(0,t.yg)("p",null,"Headers are the same for all kind of responses."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "app_id": "REGARDS",\n  "timestamp" : 1681461977,\n  "correlation_id": "xxx",\n  "priority": 1,\n  "delivery_mode" : 2,\n  "content_encoding": "UTF-8",\n  "content_type": "application/json",\n  "headers": {\n    "regards.tenant": "tenant"\n  }\n}\n')),(0,t.yg)("h3",{id:"granted-response"},"Granted response"),(0,t.yg)("p",null,"REGARDS will publish a request granted event on response exchange when request is validated."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "xxx",\n  "orderId": 1,\n  "status" : "GRANTED"\n}\n')),(0,t.yg)("h3",{id:"suborder-done-response"},"SubOrder done response"),(0,t.yg)("p",null,"REGARDS will publish SubOrder done events on response exchange. "),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"If your order creates several SubOrders (when order contains many large files), you should react to ",(0,t.yg)("inlineCode",{parentName:"strong"},"SUBORDER_DONE")," event."),"  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "SUBORDER_DONE",\n  "orderId": 1234,\n  "correlationId": "xxx",\n  "message": "A sub-order of user john@cnes.fr is finished and ready to download",\n  "downloadLink": "<host>/api/v1/rs-order/user/orders/1234/download",\n  "totalSubOrders": 3, \n  "subOrderId": 2\n}\n')),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"Use the ",(0,t.yg)("a",{parentName:"p",href:"./download-ordered-files"},"downloadLink value to perform a REST request")," to download all available files related to this order and allow next SubOrder to start.")),(0,t.yg)("h3",{id:"order-done-response"},"Order done response"),(0,t.yg)("p",null,"REGARDS will publish an order done event on response exchange."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"If your order always creates a single SubOrders, you should react to ",(0,t.yg)("inlineCode",{parentName:"strong"},"DONE")," event."),"  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : "DONE",\n    "orderId": 1234,\n    "correlationId": "xxx",\n    "message": "Order of user john@cnes.fr is finished",\n    "downloadLink": "<host>/api/v1/rs-order/user/orders/1234/download"\n}\n')),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"Use the ",(0,t.yg)("a",{parentName:"p",href:"./download-ordered-files"},"downloadLink value to perform a REST request")," to download all available files related to this order to complete the Order.")),(0,t.yg)("h3",{id:"invalid-response"},"Invalid response"),(0,t.yg)("p",null,"REGARDS will publish a request denied event on response exchange when request is not valid."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : "DENIED",\n    "correlationId": "xxx",\n    "message" : "deny cause",\n    "errorCode": "INVALID_CONTENT",\n    "errors": 2,\n}\n')),(0,t.yg)("admonition",{title:"How to handle it?",type:"info"},(0,t.yg)("p",{parentName:"admonition"},"Look at your request, fix it and submit a new one.")),(0,t.yg)("h3",{id:"internal-error-response"},"Internal error response"),(0,t.yg)("p",null,"After request has been granted by REGARDS, internal errors can occur. In such case, an error response will be published on response exchange."),(0,t.yg)("p",null,"This error response will be published if at least one file of the order has failed."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : "FAILED",\n    "orderId": 1,\n    "correlationId": "xxx",\n    "message": "Error cause",\n    "errorCode": "INTERNAL_ERROR",\n    "errors": 3,\n}\n')),(0,t.yg)("admonition",{title:"How to handle it?",type:"info"},(0,t.yg)("p",{parentName:"admonition"},"Retry later with new order request or contact REGARDS administrators.")))}g.isMDXComponent=!0}}]);