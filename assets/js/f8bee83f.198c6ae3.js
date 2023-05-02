"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[3103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={id:"backend-amqp-submit-product",title:"Submit product AMQP",sidebar_label:"Submit product AMQP",slug:"/development/backend/services/lta-manager/guides/submit-product-amqp"},i=void 0,o={unversionedId:"development/backend/regards/lta-manager/api-guides/backend-amqp-submit-product",id:"development/backend/regards/lta-manager/api-guides/backend-amqp-submit-product",title:"Submit product AMQP",description:"This section describes how to submit a new product to the LTA service of REGARDS thanks to AMQPS interfaces.",source:"@site/docs/development/backend/regards/lta-manager/api-guides/amqp-submit-product.md",sourceDirName:"development/backend/regards/lta-manager/api-guides",slug:"/development/backend/services/lta-manager/guides/submit-product-amqp",permalink:"/docs/development/backend/services/lta-manager/guides/submit-product-amqp",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/lta-manager/api-guides/amqp-submit-product.md",tags:[],version:"current",frontMatter:{id:"backend-amqp-submit-product",title:"Submit product AMQP",sidebar_label:"Submit product AMQP",slug:"/development/backend/services/lta-manager/guides/submit-product-amqp"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/lta-manager/overview/"},next:{title:"Get product progress AMQP",permalink:"/docs/development/backend/services/lta-manager/guides/get-product-progress-amqp"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Submit Product creation request",id:"submit-product-creation-request",level:2},{value:"Exchange",id:"exchange",level:3},{value:"Request format",id:"request-format",level:3}],s={toc:d},u="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how to submit a new product to the LTA service of REGARDS thanks to AMQPS interfaces."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The diagram below explains the global processing of a new product submission request by REGARDS system.",(0,r.kt)("br",{parentName:"p"}),"\n","For a REGARDS client using message queuing, the main steps are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Publish your product archive request containing product information to REGARDS Rabbitmq server."),(0,r.kt)("li",{parentName:"ol"},"Wait for notifications from REGARDS on its Rabbitmq server. Those notifications will inform you about your request progression. Request status lifecycles can be :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DENIED")," : Your request has been denied (possibly malformed request)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GRANTED")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"ERROR")," : Your request has been granted, but an internal error happened."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GRANTED")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"SUCCESS")," : Your request has been granted and processed with success.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sequence",src:n(65782).Z,width:"748",height:"612"})),(0,r.kt)("h2",{id:"submit-product-creation-request"},"Submit Product creation request"),(0,r.kt)("h3",{id:"exchange"},"Exchange"),(0,r.kt)("p",null,"Submission requests have to be published to REGARDS Rabbitmq exchange:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.ltamanager.amqp.input.SubmissionRequestDtoEvent")),(0,r.kt)("h3",{id:"request-format"},"Request format"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Message headers")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"regards.tenant": "tenant"\n"regards.request.owner":"owner"\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.tenant"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Tenant name depends on REGARDS instance project configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.owner"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the request provider.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Message body content")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "xxx",\n  "id": "xxx",\n  "datatype": "xxx",\n  "geometry": {\n    "coordinates": [\n      [\n        [\n            0.07604560969926086,\n            43.98314313658291\n        ],\n        [\n            0.14096031674824933,\n            43.99467654310261\n        ],\n        [\n            0.05530723606827761,\n            43.957963973072\n        ],\n        [\n            0.07604560969926086,\n            43.98314313658291\n        ]\n      ]\n    ],\n    "type": "Polygon"\n  },\n  "files": [\n    {\n        "type": "THUMBNAIL",\n        "url": "file:/input/LTA/2519/thumbnail-4.png",\n        "filename": "thumbnail-4.png",\n        "checksumMd5": "fb8613574312c47f215343ebebaf8ebf",\n        "mimeType": "image/png"\n    },\n    {\n        "type": "RAWDATA",\n        "url": "file:/input/LTA/2519/product-4.zip",\n        "filename": "product-4.zip",\n        "checksumMd5": "ff3d0a4640b403a02007b0039640607b",\n        "mimeType": "application/zip"\n    },\n    {\n        "type": "RAWDATA",\n        "url": "file:/input/LTA/2519/product-4-meta.xml",\n        "filename": "product-4-meta.xml.",\n        "checksumMd5": "fcd0e49a6f85e67ae6d2149a1f67d567",\n        "mimeType": "application/xml"\n    }\n  ],\n  "storePath": "",\n  "session": "",\n  "replaceMode": false,\n  "tags": [ "tag1", "tag2" ],\n  "properties": {}\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlationId"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Request correlation unique identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Product identifier. If two products are submitted with the same id, a new version is created or the previous one is replaced.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datatype"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0String"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type. Have to be a REGARDS known datatype.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"GeoJSON RFC 7946\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Product geometry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files.type\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"String\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the file can be RAWDATA, THUMBNAIL, QUICKLOOK_SD, QUICKLOOK_MD or QUICKLOOK_HD\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files.url"),(0,r.kt)("td",{parentName:"tr",align:null},"String\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"File location\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files.name"),(0,r.kt)("td",{parentName:"tr",align:null},"String\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"File name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files.checksumMd5"),(0,r.kt)("td",{parentName:"tr",align:null},"String\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"File MD5 checksum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files.mimeType"),(0,r.kt)("td",{parentName:"tr",align:null},"String\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"File mime type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storePath"),(0,r.kt)("td",{parentName:"tr",align:null},"Path"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to manually define the destination location for files on archival system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"session"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to define a session name. Many requests can be associated to a same session name for monitoring purpose.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replaceMode"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"default false - Defines whether a product with the same id should be replaced or duplicated with a new version.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},"Strings"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional labels to add in product metadata tags")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties"),(0,r.kt)("td",{parentName:"tr",align:null},"json object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Product metadata, Map of key/value properties. Mandatory properties depends on product datatype.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Click on the link Get product progress AMQP")," just below, you will discover responses RS-LTA-MANAGER will send you for your submission request."))}m.isMDXComponent=!0},65782:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/archive-request-nominal-cf20e6fccd0d993f455a6e71254d825f.png"}}]);