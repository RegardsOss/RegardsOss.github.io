"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[86096],{28863:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var s=n(74848),o=n(28453);const d={id:"backend-get-order-progress-amqp",title:"Get Order progress AMQP",sidebar_label:"Get Order progress AMQP",slug:"/development/backend/services/order/guides/get-order-progress-amqp"},a=void 0,t={id:"development/backend/regards/order/api-guides/backend-get-order-progress-amqp",title:"Get Order progress AMQP",description:"Exchange",source:"@site/versioned_docs/version-1.15/development/backend/regards/order/api-guides/amqp-get-order-progress.md",sourceDirName:"development/backend/regards/order/api-guides",slug:"/development/backend/services/order/guides/get-order-progress-amqp",permalink:"/docs/1.15/development/backend/services/order/guides/get-order-progress-amqp",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/order/api-guides/amqp-get-order-progress.md",tags:[],version:"1.15",frontMatter:{id:"backend-get-order-progress-amqp",title:"Get Order progress AMQP",sidebar_label:"Get Order progress AMQP",slug:"/development/backend/services/order/guides/get-order-progress-amqp"},sidebar:"dev",previous:{title:"Create Order AMQP",permalink:"/docs/1.15/development/backend/services/order/guides/create-order-amqp"},next:{title:"Create Order REST",permalink:"/docs/1.15/development/backend/services/order/guides/create-order-rest"}},i={},l=[{value:"Exchange",id:"exchange",level:3},{value:"AMQP Headers",id:"amqp-headers",level:3},{value:"Granted response",id:"granted-response",level:3},{value:"SubOrder done response",id:"suborder-done-response",level:3},{value:"Order done response",id:"order-done-response",level:3},{value:"Invalid response",id:"invalid-response",level:3},{value:"Internal error response",id:"internal-error-response",level:3}];function c(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h3,{id:"exchange",children:"Exchange"}),"\n",(0,s.jsxs)(r.p,{children:["Exchange where Order requests responses are sent:",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.code,{children:"regards.broadcast.fr.cnes.regards.modules.order.amqp.output.OrderResponseDtoEvent"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.em,{children:"To listen to Order requests responses, the REGARDS administrator must create for you a dedicated queue bound to this exchange and allow your RabbitMQ user to access to that queue."})]}),"\n",(0,s.jsx)(r.h3,{id:"amqp-headers",children:"AMQP Headers"}),"\n",(0,s.jsx)(r.p,{children:"Headers are the same for all kind of responses."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "app_id": "REGARDS",\n  "timestamp" : 1681461977,\n  "correlation_id": "xxx",\n  "priority": 1,\n  "delivery_mode" : 2,\n  "content_encoding": "UTF-8",\n  "content_type": "application/json",\n  "headers": {\n    "regards.tenant": "tenant"\n  }\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"granted-response",children:"Granted response"}),"\n",(0,s.jsx)(r.p,{children:"REGARDS will publish a request granted event on response exchange when request is validated."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "correlationId": "xxx",\n  "orderId": 1,\n  "status" : "GRANTED"\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"suborder-done-response",children:"SubOrder done response"}),"\n",(0,s.jsx)(r.p,{children:"REGARDS will publish SubOrder done events on response exchange."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.strong,{children:["If your order creates several SubOrders (when order contains many large files), you should react to ",(0,s.jsx)(r.code,{children:"SUBORDER_DONE"})," event."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "status": "SUBORDER_DONE",\n  "orderId": 1234,\n  "correlationId": "xxx",\n  "message": "A sub-order of user john@cnes.fr is finished and ready to download",\n  "downloadLink": "<host>/api/v1/rs-order/user/orders/1234/download",\n  "totalSubOrders": 3, \n  "subOrderId": 2\n}\n'})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["Use the ",(0,s.jsx)(r.a,{href:"./download-ordered-files",children:"downloadLink value to perform a REST request"})," to download all available files related to this order and allow next SubOrder to start."]})}),"\n",(0,s.jsx)(r.h3,{id:"order-done-response",children:"Order done response"}),"\n",(0,s.jsx)(r.p,{children:"REGARDS will publish an order done event on response exchange."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.strong,{children:["If your order always creates a single SubOrders, you should react to ",(0,s.jsx)(r.code,{children:"DONE"})," event."]})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n    "status" : "DONE",\n    "orderId": 1234,\n    "correlationId": "xxx",\n    "message": "Order of user john@cnes.fr is finished",\n    "downloadLink": "<host>/api/v1/rs-order/user/orders/1234/download"\n}\n'})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["Use the ",(0,s.jsx)(r.a,{href:"./download-ordered-files",children:"downloadLink value to perform a REST request"})," to download all available files related to this order to complete the Order."]})}),"\n",(0,s.jsx)(r.h3,{id:"invalid-response",children:"Invalid response"}),"\n",(0,s.jsx)(r.p,{children:"REGARDS will publish a request denied event on response exchange when request is not valid."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n    "status" : "DENIED",\n    "correlationId": "xxx",\n    "message" : "deny cause",\n    "errorCode": "INVALID_CONTENT",\n    "errors": 2,\n}\n'})}),"\n",(0,s.jsx)(r.admonition,{title:"How to handle it?",type:"info",children:(0,s.jsx)(r.p,{children:"Look at your request, fix it and submit a new one."})}),"\n",(0,s.jsx)(r.h3,{id:"internal-error-response",children:"Internal error response"}),"\n",(0,s.jsx)(r.p,{children:"After request has been granted by REGARDS, internal errors can occur. In such case, an error response will be published on response exchange."}),"\n",(0,s.jsx)(r.p,{children:"This error response will be published if at least one file of the order has failed."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n    "status" : "FAILED",\n    "orderId": 1,\n    "correlationId": "xxx",\n    "message": "Error cause",\n    "errorCode": "INTERNAL_ERROR",\n    "errors": 3,\n}\n'})}),"\n",(0,s.jsx)(r.admonition,{title:"How to handle it?",type:"info",children:(0,s.jsx)(r.p,{children:"Retry later with new order request or contact REGARDS administrators."})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>t});var s=n(96540);const o={},d=s.createContext(o);function a(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);