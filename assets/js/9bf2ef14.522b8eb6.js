"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[52276],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return r?a.createElement(g,i(i({ref:t},o),{},{components:r})):a.createElement(g,i({ref:t},o))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:n,i[1]=d;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5029:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"backend-amqp-publish-delivery-request",title:"Publish a delivery request event",sidebar_label:"Publish a request",slug:"/development/backend/services/delivery/guides/amqp/publish-a-delivery-request"},i=void 0,d={unversionedId:"development/backend/regards/delivery/api-guides/amqp/backend-amqp-publish-delivery-request",id:"version-1.15/development/backend/regards/delivery/api-guides/amqp/backend-amqp-publish-delivery-request",title:"Publish a delivery request event",description:"This section describes how to publish a new delivery request event to REGARDS with AMQP message.",source:"@site/versioned_docs/version-1.15/development/backend/regards/delivery/api-guides/amqp/amqp-publish-request.md",sourceDirName:"development/backend/regards/delivery/api-guides/amqp",slug:"/development/backend/services/delivery/guides/amqp/publish-a-delivery-request",permalink:"/docs/development/backend/services/delivery/guides/amqp/publish-a-delivery-request",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/delivery/api-guides/amqp/amqp-publish-request.md",tags:[],version:"1.15",frontMatter:{id:"backend-amqp-publish-delivery-request",title:"Publish a delivery request event",sidebar_label:"Publish a request",slug:"/development/backend/services/delivery/guides/amqp/publish-a-delivery-request"},sidebar:"dev",previous:{title:"Architecture",permalink:"/docs/development/backend/services/delivery/architecture/"},next:{title:"Subscribe to responses",permalink:"/docs/development/backend/services/delivery/guides/amqp/subscribe-to-delivery-responses"}},s={},p=[{value:"Exchange",id:"exchange",level:2},{value:"AMQP message format",id:"amqp-message-format",level:2},{value:"Properties",id:"properties",level:3},{value:"Headers",id:"headers",level:3},{value:"Body",id:"body",level:3}],o={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section describes how to publish a new delivery request event to REGARDS with AMQP message."),(0,n.kt)("h2",{id:"exchange"},"Exchange"),(0,n.kt)("p",null,"Delivery requests have to be published to REGARDS RabbitMQ exchange on vhost 'regards.multitenant.manager':",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.delivery.amqp.input.DeliveryRequestDtoEvent")),(0,n.kt)("h2",{id:"amqp-message-format"},"AMQP message format"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"app_id"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Standard RabbitMQ property to track message origin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"priority"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Standard RabbitMQ property to sort messages by priority order.")))),(0,n.kt)("h3",{id:"headers"},"Headers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"regards.tenant": "tenant"\n"regards.request.owner": "owner"\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"regards.tenant"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Tenant name depends on REGARDS instance project configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"regards.request.owner"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the request provider.")))),(0,n.kt)("h3",{id:"body"},"Body"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "xxxxxx",\n  "targetDelivery": "regards-s3-minio",\n  "order": {\n    "user": "xxxxxx",\n    "queries": [\n      "providerId:xxxxx"\n    ],\n    "filters": [\n      {\n        "dataTypes": [],\n        "filenameRegExp": ""\n      }\n    ]\n  }\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"correlationId"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier to track the request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"targetDelivery"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the S3 configuration to use. For now, provide the default value ",(0,n.kt)("inlineCode",{parentName:"td"},"regards-s3-minio"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"queries"),(0,n.kt)("td",{parentName:"tr",align:null},"Lucene strings"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"List of lucene formatted queries to find products to order. (refer to ",(0,n.kt)("a",{parentName:"td",href:"/docs/development/appendices/lucene-query/"},"lucene documentation"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Email of your REGARDS user.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filters.datatypes"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"List of REGARDS datatypes to filter files from ordered products. Datatypes can be either ",(0,n.kt)("inlineCode",{parentName:"td"},"RAWDATA")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"QUICKLOOK"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"filters.filenameRegExp"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Regular expression to filter files by their names from ordered products.")))))}m.isMDXComponent=!0}}]);