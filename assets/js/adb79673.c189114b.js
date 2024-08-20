"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[34054],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={id:"backend-get-order-status-rest",title:"Get Order status REST",sidebar_label:"Get Order status REST",slug:"/development/backend/services/order/guides/get-order-status-rest"},o=void 0,i={unversionedId:"development/backend/regards/order/api-guides/backend-get-order-status-rest",id:"version-1.15/development/backend/regards/order/api-guides/backend-get-order-status-rest",title:"Get Order status REST",description:"This page assumes you know how to authenticate your REST API requests",source:"@site/versioned_docs/version-1.15/development/backend/regards/order/api-guides/rest-get-order-status.md",sourceDirName:"development/backend/regards/order/api-guides",slug:"/development/backend/services/order/guides/get-order-status-rest",permalink:"/docs/development/backend/services/order/guides/get-order-status-rest",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/order/api-guides/rest-get-order-status.md",tags:[],version:"1.15",frontMatter:{id:"backend-get-order-status-rest",title:"Get Order status REST",sidebar_label:"Get Order status REST",slug:"/development/backend/services/order/guides/get-order-status-rest"},sidebar:"dev",previous:{title:"Create Order REST",permalink:"/docs/development/backend/services/order/guides/create-order-rest"},next:{title:"Download ordered files inside archive",permalink:"/docs/development/backend/services/order/guides/download-ordered-files"}},d={},s=[{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"cURL example",id:"curl-example",level:3}],p={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This page assumes you know how to ",(0,n.kt)("a",{parentName:"em",href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"authenticate")," your REST API requests ")),(0,n.kt)("p",null,"This guide explains how to retrieve the ",(0,n.kt)("strong",{parentName:"p"},"order status and available files links")," to download them."),(0,n.kt)("h3",{id:"request"},"Request"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"description"),(0,n.kt)("th",{parentName:"tr",align:null},"url"),(0,n.kt)("th",{parentName:"tr",align:null},"verb"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve order status and available files to download using order identifier"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<HOST>"),"/api/v1/rs-order/user/orders/{orderId}/files/available?page=0&size=50"),(0,n.kt)("td",{parentName:"tr",align:null},"GET")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"orderId"),(0,n.kt)("td",{parentName:"tr",align:null},"Int"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Order identifier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"page"),(0,n.kt)("td",{parentName:"tr",align:null},"Int"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Page number, default to ",(0,n.kt)("inlineCode",{parentName:"td"},"0"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"size"),(0,n.kt)("td",{parentName:"tr",align:null},"Int"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of available files to display, default to ",(0,n.kt)("inlineCode",{parentName:"td"},"50"))))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Request headers")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"Authorization: Bearer <token>"\n')),(0,n.kt)("h3",{id:"response"},"Response"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Http status"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"200")),(0,n.kt)("td",{parentName:"tr",align:null},"Your order request is over and all files available can be downloaded")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"204")),(0,n.kt)("td",{parentName:"tr",align:null},"Your order request is pending. No file is available for download yet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"206")),(0,n.kt)("td",{parentName:"tr",align:null},"Your order request is pending. Some files are already available for download")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"403")),(0,n.kt)("td",{parentName:"tr",align:null},"Access denied")))),(0,n.kt)("admonition",{title:"How to use HTTP status?",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can request this endpoint as long as the response status is not ",(0,n.kt)("inlineCode",{parentName:"p"},"200"),".",(0,n.kt)("br",{parentName:"p"}),"\n","If status is ",(0,n.kt)("inlineCode",{parentName:"p"},"206"),", the order is not finished but there is some available files you can already download.",(0,n.kt)("br",{parentName:"p"}),"\n","If you order creates several SubOrders (your order contains many large files), your order request can be blocked until you have successfully downloaded first available files.  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metadata": {\n    "number": 0,\n    "size:": 50,\n    "totalElements": 2,\n    "totalPages": 1\n  },\n  "content": [\n    {\n      "productId": "product",\n      "checksum": "afc76dfea831352297b9097dd4b6c8ab",\n      "fileSize": 1523654,\n      "filename": "file.txt",\n      "mimeType": "application/text",\n      "uri": "<HOST>/api/v1/rs-catalog/{productURN}/files/{fileChecksum}"\n    },\n    {\n      "productId": "product",\n      "checksum": "f3fbc55040c2113d49220f81c8cfdb52",\n      "fileSize": 1523654,\n      "filename": "file2.txt",\n      "mimeType": "application/text",\n      "uri": "<HOST>/api/v1/rs-catalog/{productURN}/files/f3fbc55040c2113d49220f81c8cfdb52"\n    }\n  ]\n}\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This endpoint gives you files link that you can download.",(0,n.kt)("br",{parentName:"p"}),"\n","The ",(0,n.kt)("a",{parentName:"p",href:"./download-ordered-files"},"Download ordered files inside archive")," is another download endpoint that creates an archive containing all availables files.")),(0,n.kt)("h3",{id:"curl-example"},"cURL example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v "<HOST>/api/v1/rs-order/orders/{orderId}/files/available" \\\n  -H "Authorization: Bearer <token>"\n')))}c.isMDXComponent=!0}}]);