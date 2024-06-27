"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[70426],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),c=a,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},53202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"backend-create-order-amqp",title:"Create Order AMQP",sidebar_label:"Create Order AMQP",slug:"/development/backend/services/order/guides/create-order-amqp"},l=void 0,i={unversionedId:"development/backend/regards/order/api-guides/backend-create-order-amqp",id:"version-1.12.0/development/backend/regards/order/api-guides/backend-create-order-amqp",title:"Create Order AMQP",description:"This guide describes how to order one or many products from the order service through AMQP interface.",source:"@site/versioned_docs/version-1.12.0/development/backend/regards/order/api-guides/amqp-create-order.md",sourceDirName:"development/backend/regards/order/api-guides",slug:"/development/backend/services/order/guides/create-order-amqp",permalink:"/docs/1.12.0/development/backend/services/order/guides/create-order-amqp",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/regards/order/api-guides/amqp-create-order.md",tags:[],version:"1.12.0",frontMatter:{id:"backend-create-order-amqp",title:"Create Order AMQP",sidebar_label:"Create Order AMQP",slug:"/development/backend/services/order/guides/create-order-amqp"},sidebar:"dev",previous:{title:"Order lifecycle",permalink:"/docs/1.12.0/development/backend/services/order/guides/order-lifecycle"},next:{title:"Get Order progress AMQP",permalink:"/docs/1.12.0/development/backend/services/order/guides/get-order-progress-amqp"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Submit Order request",id:"submit-order-request",level:2},{value:"Exchange",id:"exchange",level:3},{value:"Order request format",id:"order-request-format",level:3},{value:"Order request examples",id:"order-request-examples",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide describes how to order one or many products from the order service through AMQP interface."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The diagram below explains the global processing of an order request by REGARDS system.\nFor a REGARDS client using message queuing, the main steps are :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Publish your product order request to REGARDS Rabbitmq server."),(0,a.kt)("li",{parentName:"ol"},"Wait for notifications from REGARDS on its Rabbitmq server. Request status lifecycles can be :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DENIED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GRANTED")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"SUBORDER_DONE")," (occurs 0 to many times) -> ",(0,a.kt)("inlineCode",{parentName:"li"},"FAILED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GRANTED")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"SUBORDER_DONE")," (occurs 1 to many times) -> ",(0,a.kt)("inlineCode",{parentName:"li"},"DONE")))),(0,a.kt)("li",{parentName:"ol"},"Download order archive everytime you receive a ",(0,a.kt)("inlineCode",{parentName:"li"},"SUBORDER_DONE")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"DONE")," message. ",(0,a.kt)("inlineCode",{parentName:"li"},"SUBORDER_DONE")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"DONE")," contains the URL to the ",(0,a.kt)("a",{parentName:"li",href:"./download-ordered-files"},"Download ordered files")," REST API to download all available files related to an order.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sequence",src:r(13047).Z,width:"628",height:"809"})),(0,a.kt)("h2",{id:"submit-order-request"},"Submit Order request"),(0,a.kt)("h3",{id:"exchange"},"Exchange"),(0,a.kt)("p",null,"Exchange to submit Order requests:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.order.amqp.input.OrderRequestDtoEvent")),(0,a.kt)("h3",{id:"order-request-format"},"Order request format"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Message headers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"regards.tenant": "tenant"\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"regards.tenant")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Tenant name depends on REGARDS instance project configuration")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Message body content")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "correlationId": "xxx",\n    "queries": [],\n    "user" : "",\n    "filters": {\n        "dataTypes": [],\n        "filenameRegExp" : "",\n    }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"correlationId"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"The request correlation id.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"queries"),(0,a.kt)("td",{parentName:"tr",align:null},"Lucene strings"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"List of lucene formatted queries to find products to order.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"user"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Email of your REGARDS user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filters.datatypes"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"List of REGARDS datatypes to filter files from orderd products. Datatypes can be ",(0,a.kt)("inlineCode",{parentName:"td"},"RAWDATA")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"QUICKLOOK"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filters.filenameRegExp"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Regular expression to filter files by their names from orderd products.")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NOTE"),": Here is the link to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.12.0/development/appendices/lucene-query/"},"REGARDS Lucene format")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NOTE"),": A REGARDS user is mandatory to order products. Your user must be activated and remaining download quota must allow you to order."),(0,a.kt)("h3",{id:"order-request-examples"},"Order request examples"),(0,a.kt)("p",null,"If you want to retrieve a product by its identifier, the order request is :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queries": [\n        "productId:my_product_identifier"\n    ],\n    "user" : "myself@cnes.fr"\n}\n')),(0,a.kt)("p",null,"If you want to retrieve many products using their identifiers, the order request is :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queries": [\n        "productId:(my_product_id_1 OR my_product_id_2 OR my_product_id_3 OR my_product_id_4)"\n    ],\n    "user" : "myself@cnes.fr"\n}\n')),(0,a.kt)("p",null,"If you want to retrieve all products from a specific metadata like datatype (depends on configured REGARDS data models), the restoration request is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queries": [\n        "datatype:type1"\n    ],\n    "user" : "myself@cnes.fr"\n}\n')),(0,a.kt)("p",null,"If you want to retrieve all products from a specific metadata like datatype (depends on configured REGARDS data models) and retrieve only image files, the restoration request is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queries": [\n        "datatype:type1"\n    ],\n    "user" : "myself@cnes.fr",\n    "filters": {\n        "dataTypes": [\n            "QUICKLOOK"\n        ],\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Click on the link Get Order progress AMQP")," just below, you will discover responses RS-ORDER will send you for your order."))}m.isMDXComponent=!0},13047:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/restitution-sequence-3.0-1559380f24220259a098114a4df5aabe.png"}}]);