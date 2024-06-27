"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[80290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"backend-rest-create-product",title:"Create product REST",sidebar_label:"Create product REST",slug:"/development/backend/services/lta-manager/guides/create-product-rest"},l=void 0,o={unversionedId:"development/backend/regards/lta-manager/api-guides/backend-rest-create-product",id:"version-1.12.0/development/backend/regards/lta-manager/api-guides/backend-rest-create-product",title:"Create product REST",description:"This page assumes you know how to authenticate your REST API requests",source:"@site/versioned_docs/version-1.12.0/development/backend/regards/lta-manager/api-guides/rest-create-product.md",sourceDirName:"development/backend/regards/lta-manager/api-guides",slug:"/development/backend/services/lta-manager/guides/create-product-rest",permalink:"/docs/1.12.0/development/backend/services/lta-manager/guides/create-product-rest",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/regards/lta-manager/api-guides/rest-create-product.md",tags:[],version:"1.12.0",frontMatter:{id:"backend-rest-create-product",title:"Create product REST",sidebar_label:"Create product REST",slug:"/development/backend/services/lta-manager/guides/create-product-rest"},sidebar:"dev",previous:{title:"Get product progress AMQP",permalink:"/docs/1.12.0/development/backend/services/lta-manager/guides/get-product-progress-amqp"},next:{title:"Get request status REST",permalink:"/docs/1.12.0/development/backend/services/lta-manager/guides/get-request-status-rest"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Submit Product creation request",id:"submit-product-creation-request",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This page assumes you know how to ",(0,r.kt)("a",{parentName:"em",href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"authenticate")," your REST API requests ")),(0,r.kt)("p",null,"This section describes how to submit a new product to the Long Term Archive service using the REST interfaces."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The diagram below explains the global processing of a new product submission request by REGARDS system.",(0,r.kt)("br",{parentName:"p"}),"\n","For a REGARDS client using REST interface, the main steps are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Authenticate to REGARDS in order to retrieve a valid token. See the ",(0,r.kt)("a",{parentName:"li",href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"authenticate guide"),"."),(0,r.kt)("li",{parentName:"ol"},"Send your product archive request containing product information to RS-LTA-MANAGER microservice"),(0,r.kt)("li",{parentName:"ol"},"Ask information about your request status from RS-LTA-MANAGER microservice.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sequence",src:n(19493).Z,width:"519",height:"431"})),(0,r.kt)("h2",{id:"submit-product-creation-request"},"Submit Product creation request"),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("p",null,"These two following endpoints shares the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Request headers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Request Body"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"url"),(0,r.kt)("th",{parentName:"tr",align:null},"verb"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Product creation request with ",(0,r.kt)("strong",{parentName:"td"},"replace desactived")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<HOST>"),"/api/v1/rs-lta-manager/products"),(0,r.kt)("td",{parentName:"tr",align:null},"POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Product creation request with ",(0,r.kt)("strong",{parentName:"td"},"replace actived")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<HOST>"),"/api/v1/rs-lta-manager/products/replace"),(0,r.kt)("td",{parentName:"tr",align:null},"POST")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If your product creation request contains an error and you have a new payload to send, you can replace the previous request using the product replace endpoint")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Request headers")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Content-Type": "application/json",\n  "Authorization": "Bearer <token>"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Request Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "string",\n  "datatype": "string",\n  "geometry": {},\n  "files": [\n    {\n        "type": "THUMBNAIL",\n        "url": "file:/input/LTA/2519/thumbnail-4.png",\n        "filename": "thumbnail-4.png",\n        "checksumMd5": "fb8613574312c47f215343ebebaf8ebf",\n        "mimeType": "image/png"\n    },\n    {\n        "type": "RAWDATA",\n        "url": "file:/input/LTA/2519/product-4.zip",\n        "filename": "product-4.zip",\n        "checksumMd5": "ff3d0a4640b403a02007b0039640607b",\n        "mimeType": "application/zip"\n    },\n    {\n        "type": "RAWDATA",\n        "url": "file:/input/LTA/2519/product-4-meta.xml",\n        "filename": "product-4-meta.xml.",\n        "checksumMd5": "fcd0e49a6f85e67ae6d2149a1f67d567",\n        "mimeType": "application/xml"\n    }\n  ],\n  "storePath": "string",\n  "session": "string",\n  "tags": [ "tag1", "tag2" ],\n  "properties": {}\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Product identifier. If two products are submitted with the same id, a new version is created or the previous one is replaced.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datatype"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Product type. Have to be a REGARDS known datatype.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"geometry"),(0,r.kt)("td",{parentName:"tr",align:null},"GeoJSON RFC 7946\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Product geometry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files.type\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"String\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"File type can be RAWDATA, THUMBNAIL, QUICKLOOK_SD, QUICKLOOK_MD or QUICKLOOK_HD\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files.url"),(0,r.kt)("td",{parentName:"tr",align:null},"String\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"File location\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files.name"),(0,r.kt)("td",{parentName:"tr",align:null},"String\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"File name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files.checksumMd5"),(0,r.kt)("td",{parentName:"tr",align:null},"String\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"File MD5 checksum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"files.mimeType"),(0,r.kt)("td",{parentName:"tr",align:null},"String\xa0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"File mime type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storePath"),(0,r.kt)("td",{parentName:"tr",align:null},"Path"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to manually define the destination location for files on archival system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"session"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to define a session name. Many requests can be associated to a same session name for monitoring purpose.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tags"),(0,r.kt)("td",{parentName:"tr",align:null},"Strings"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional labels to add in product metadata tags")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"properties"),(0,r.kt)("td",{parentName:"tr",align:null},"json object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Product metadata, Map of key/value properties. Mandatory properties depends on product datatype.")))),(0,r.kt)("admonition",{title:"Difference with AMQP interface",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"On AMQP interface, there is an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," parameter. When you use the REST API, the product owner is automatically set to the logged in user who sent the submission request.")),(0,r.kt)("admonition",{title:"Integrity",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"REGARDS system will ensure integrity verification of each file of your product by checking provided md5 checksum after each file copy.")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Http status"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"Your request is successfully created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Access denied")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"422"),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid request body")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": {\n    "correlationId": "string",\n    "productId": "string",\n    "responseStatus": "GRANTED",\n    "expires": "2022-12-22T10:25:52.243Z",\n    "session": "string",\n    "message": "string"\n  },\n  "links": [\n  ]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"correlationId"),": Request identifier"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"productId"),": Id of the product to create"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"responseStatus")," : GRANTED or DENIED"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expires"),": Expiration date of your request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"session"),": Session of your request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message"),": Information message about your request")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Click on the link Get request status REST")," just below, you will discover how to retrieve Product creation updates and status."))}m.isMDXComponent=!0},19493:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/archive-request-nominal-rest-4ead70f53e1e82aa978473ae50abfbbe.png"}}]);