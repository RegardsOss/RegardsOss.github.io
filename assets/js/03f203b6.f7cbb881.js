"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[62549],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={id:"backend-create-order-rest",title:"Create Order REST",sidebar_label:"Create Order REST",slug:"/development/backend/services/order/guides/create-order-rest"},o=void 0,i={unversionedId:"development/backend/regards/order/api-guides/backend-create-order-rest",id:"version-1.13.0/development/backend/regards/order/api-guides/backend-create-order-rest",title:"Create Order REST",description:"This page assumes you know how to authenticate your REST API requests",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/order/api-guides/rest-create-order.md",sourceDirName:"development/backend/regards/order/api-guides",slug:"/development/backend/services/order/guides/create-order-rest",permalink:"/docs/1.13.0/development/backend/services/order/guides/create-order-rest",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/order/api-guides/rest-create-order.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-create-order-rest",title:"Create Order REST",sidebar_label:"Create Order REST",slug:"/development/backend/services/order/guides/create-order-rest"},sidebar:"dev",previous:{title:"Get Order progress AMQP",permalink:"/docs/1.13.0/development/backend/services/order/guides/get-order-progress-amqp"},next:{title:"Get Order status REST",permalink:"/docs/1.13.0/development/backend/services/order/guides/get-order-status-rest"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Submit Order request",id:"submit-order-request",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This page assumes you know how to ",(0,a.kt)("a",{parentName:"em",href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"authenticate")," your REST API requests ")),(0,a.kt)("p",null,"This section describes how to order one or many products from the order service through REST interfaces."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The diagram below explains the global processing of an Order request by REGARDS system.",(0,a.kt)("br",{parentName:"p"}),"\n","For a REGARDS client using REST interface, the main steps are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Authenticate to REGARDS in order to retrieve a valid token. See the ",(0,a.kt)("a",{parentName:"li",href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"authenticate guide"),"."),(0,a.kt)("li",{parentName:"ol"},"Send an order request to REGARDS."),(0,a.kt)("li",{parentName:"ol"},"Retrieve order status and available files."),(0,a.kt)("li",{parentName:"ol"},"When one or many files are available(s), you can download them. "),(0,a.kt)("li",{parentName:"ol"},"Repeat again until end of order : retrieve order status, download available files...")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sequence",src:r(69116).Z,width:"704",height:"558"})),(0,a.kt)("h2",{id:"submit-order-request"},"Submit Order request"),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"url"),(0,a.kt)("th",{parentName:"tr",align:null},"verb"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Product order request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<HOST>"),"/api/v1/rs-order/user/orders/apply"),(0,a.kt)("td",{parentName:"tr",align:null},"POST")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Request headers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Content-Type": "application/json",\n  "Authorization": "Bearer <token>"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Request body")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queries": [],\n  "filters": {\n    "dataTypes": [],\n    "filenameRegExp" : "",\n  }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"queries"),(0,a.kt)("td",{parentName:"tr",align:null},"Lucene strings"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"List of lucene formatted queries to find products to order.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filters.datatypes"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"List of REGARDS datatypes to filter files from ordered products. Datatypes can be ",(0,a.kt)("inlineCode",{parentName:"td"},"RAWDATA")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"QUICKLOOK"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filters.filenameRegExp"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Regular expression to filter files by their names from ordered products.")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NOTE"),": Here is the link to the ",(0,a.kt)("a",{parentName:"p",href:"https://regardsoss.github.io/docs/development/appendices/lucene-query/"},"REGARDS Lucene format")),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Http status"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"201"),(0,a.kt)("td",{parentName:"tr",align:null},"Your order request is successfully created")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"403"),(0,a.kt)("td",{parentName:"tr",align:null},"Access denied")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"422"),(0,a.kt)("td",{parentName:"tr",align:null},"Invalid request body")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "orderId" : 54,\n    "status": "GRANTED"\n}\n')),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"If you want to retrieve a product by its identifier, the order request is :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queries": [\n        "productId:my_product_identifier"\n    ]\n}\n')),(0,a.kt)("p",null,"If you want to retrieve many products by their identifiers, the order request is :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queries": [\n        "productId:(my_product_id_1 OR my_product_id_2 OR my_product_id_3 OR my_product_id_4)"\n    ]\n}\n')),(0,a.kt)("p",null,"If you want to retrieve all products from a specific metadata like datatype (depends on configured REGARDS data models), the order request is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queries": [\n        "datatype:type1"\n    ]\n}\n')),(0,a.kt)("p",null,"If you want to retrieve all products from a specific metadata like datatype (depends on configured REGARDS data models) and retrieve only image files, the order request is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queries": [\n        "datatype:type1"\n    ],\n    "filters": {\n        "dataTypes": [\n            "QUICKLOOK"\n        ],\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Click on the link Get Order status REST")," just below, you will discover how to retrieve Order and availables ordered files."))}c.isMDXComponent=!0},69116:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/restore-request-nominal-rest-2c564884e52306ff0dacbd503063a21e.png"}}]);