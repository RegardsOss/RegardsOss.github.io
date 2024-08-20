"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[41481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(r),c=a,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},11938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={id:"backend-amqp-subscribe-to-delivery-response",title:"Monitor a delivery request progress",sidebar_label:"Subscribe to responses",slug:"/development/backend/services/delivery/guides/amqp/subscribe-to-delivery-responses"},i=void 0,o={unversionedId:"development/backend/regards/delivery/api-guides/amqp/backend-amqp-subscribe-to-delivery-response",id:"version-1.15/development/backend/regards/delivery/api-guides/amqp/backend-amqp-subscribe-to-delivery-response",title:"Monitor a delivery request progress",description:"This section describes how to subscribe to delivery response events with AMQP message.",source:"@site/versioned_docs/version-1.15/development/backend/regards/delivery/api-guides/amqp/amqp-subscribe-response.md",sourceDirName:"development/backend/regards/delivery/api-guides/amqp",slug:"/development/backend/services/delivery/guides/amqp/subscribe-to-delivery-responses",permalink:"/docs/development/backend/services/delivery/guides/amqp/subscribe-to-delivery-responses",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/delivery/api-guides/amqp/amqp-subscribe-response.md",tags:[],version:"1.15",frontMatter:{id:"backend-amqp-subscribe-to-delivery-response",title:"Monitor a delivery request progress",sidebar_label:"Subscribe to responses",slug:"/development/backend/services/delivery/guides/amqp/subscribe-to-delivery-responses"},sidebar:"dev",previous:{title:"Publish a request",permalink:"/docs/development/backend/services/delivery/guides/amqp/publish-a-delivery-request"},next:{title:"Configure settings",permalink:"/docs/development/backend/services/delivery/guides/rest/configure-settings"}},s={},d=[{value:"Exchange",id:"exchange",level:2},{value:"AMQP message format",id:"amqp-message-format",level:2},{value:"Headers",id:"headers",level:3},{value:"GRANTED body",id:"granted-body",level:3},{value:"DONE body",id:"done-body",level:3},{value:"DENIED body",id:"denied-body",level:3},{value:"ERROR body",id:"error-body",level:3}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to subscribe to delivery response events with AMQP message."),(0,a.kt)("h2",{id:"exchange"},"Exchange"),(0,a.kt)("p",null,"Subscribe to the following exchange to receive delivery responses on vhost ",(0,a.kt)("inlineCode",{parentName:"p"},"regards.multitenant.manager"),":",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.ltamanager.amqp.output.DeliveryResponseDtoEvent")),(0,a.kt)("admonition",{title:"Get delivery requests response",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The REGARDS administrator must create for you a dedicated queue bound to this exchange and allow your RabbitMQ user to\naccess to that queue. By doing so, it let you access to messages from that exchange.")),(0,a.kt)("h2",{id:"amqp-message-format"},"AMQP message format"),(0,a.kt)("h3",{id:"headers"},"Headers"),(0,a.kt)("p",null,"Headers are the same for all type of responses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "app_id": "xxx",\n  "timestamp": "xxx",\n  "correlation_id": "xxx",\n  "priority": xxx,\n  "delivery_mode": 2,\n  "content_encoding": "UTF-8",\n  "content_type": "application/json",\n  "headers": {\n    "regards.tenant": "xxx"\n  }\n}\n')),(0,a.kt)("h3",{id:"granted-body"},"GRANTED body"),(0,a.kt)("p",null,"REGARDS publishes a granted notification when the delivery request is valid and ready to be processed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "xxx",\n  "status": "GRANTED"\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"correlationId"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Request identifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"The request is granted.")))),(0,a.kt)("h3",{id:"done-body"},"DONE body"),(0,a.kt)("p",null,"REGARDS publishes a done notification when the delivery has been processed successfully, i.e, the zip with files ordered\nhas been uploaded to the S3 server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "xxx",\n  "status": "DONE",\n  "url": "xxx",\n  "md5": "xxx"\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"correlationId"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Request identifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"The delivery request has been processed successfully.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"S3 formatted zip location (s3://bucket/correlationId/zipName.zip).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"md5"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Zip checksum in MD5 format.")))),(0,a.kt)("h3",{id:"denied-body"},"DENIED body"),(0,a.kt)("p",null,"REGARDS publishes a denied notification when the request is not valid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "xxx",\n  "status": "DENIED",\n  "message": "xxx",\n  "errorType": "xxx"\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"correlationId"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Request identifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"The request cannot be processed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Description of the error.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errorType"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Associated error code.")))),(0,a.kt)("p",null,"A request can be invalid, if the delivery request is not well-formed."),(0,a.kt)("admonition",{title:"How to handle it?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/development/backend/services/delivery/guides/amqp/publish-a-delivery-request"},"request format"),", fix your payload and submit a new request.")),(0,a.kt)("h3",{id:"error-body"},"ERROR body"),(0,a.kt)("p",null,"After request has been granted by REGARDS, internal errors may occur. In such case, an error response will be published\non the response exchange."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "xxx",\n  "status": "ERROR",\n  "message": "xxx",\n  "errorType": "xxx"\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"correlationId"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Request identifier.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"The request cannot be processed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Description of the error.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errorType"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Associated error code.")))),(0,a.kt)("p",null,"There are several error types:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Error Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"INVALID_CONTENT"),(0,a.kt)("td",{parentName:"tr",align:null},"The delivery request is malformed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FORBIDDEN"),(0,a.kt)("td",{parentName:"tr",align:null},"The provided user is not allowed to access delivery features.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ORDER_LIMIT_REACHED"),(0,a.kt)("td",{parentName:"tr",align:null},"The order requested is too big and cannot be performed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TOO_MANY_SUBORDERS"),(0,a.kt)("td",{parentName:"tr",align:null},"The order returns more than one sub-order for a given delivery request. Only one sub-order is allowed for now.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EMPTY_ORDER"),(0,a.kt)("td",{parentName:"tr",align:null},"The order requested contains no data to order.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EXPIRED"),(0,a.kt)("td",{parentName:"tr",align:null},"The delivery request has expired.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"INTERNAL_ERROR"),(0,a.kt)("td",{parentName:"tr",align:null},"An internal error occurred during the processing of the order.")))),(0,a.kt)("admonition",{title:"How to handle it?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Retry later with a new request or contact REGARDS administrators.")))}m.isMDXComponent=!0}}]);