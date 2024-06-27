"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[76769],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>k});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return t?n.createElement(k,d(d({ref:r},p),{},{components:t})):n.createElement(k,d({ref:r},p))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,d=new Array(o);d[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:a,d[1]=i;for(var s=2;s<o;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},75839:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={id:"backend-order-download-ordered-files",title:"Download ordered files inside archive",sidebar_label:"Download ordered files inside archive",slug:"/development/backend/services/order/guides/download-ordered-files"},d=void 0,i={unversionedId:"development/backend/regards/order/api-guides/backend-order-download-ordered-files",id:"version-1.13.0/development/backend/regards/order/api-guides/backend-order-download-ordered-files",title:"Download ordered files inside archive",description:"This page assumes you know how to authenticate your REST API requests",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/order/api-guides/rest-download-ordered-files.md",sourceDirName:"development/backend/regards/order/api-guides",slug:"/development/backend/services/order/guides/download-ordered-files",permalink:"/docs/1.13.0/development/backend/services/order/guides/download-ordered-files",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/order/api-guides/rest-download-ordered-files.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-order-download-ordered-files",title:"Download ordered files inside archive",sidebar_label:"Download ordered files inside archive",slug:"/development/backend/services/order/guides/download-ordered-files"},sidebar:"dev",previous:{title:"Get Order status REST",permalink:"/docs/1.13.0/development/backend/services/order/guides/get-order-status-rest"},next:{title:"REST API",permalink:"/docs/1.13.0/development/backend/services/order/api-swagger"}},l={},s=[{value:"cURL example",id:"curl-example",level:3}],p={toc:s},c="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This page assumes you know how to ",(0,a.kt)("a",{parentName:"em",href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"authenticate")," your REST API requests ")),(0,a.kt)("p",null,"Once your order request is processed, you can download the order result as a zip archive file using the here-under endpoint.  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"url"),(0,a.kt)("th",{parentName:"tr",align:null},"verb"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Download all available files from provided order ID"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<HOST>"),"/api/v1/rs-order/user/orders/{orderId}/download"),(0,a.kt)("td",{parentName:"tr",align:null},"GET")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Request headers")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"Authorization: Bearer <token>"\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"orderId")),(0,a.kt)("td",{parentName:"tr",align:null},"Int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Order identifier")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"token")),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"No"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"Authentication token"))))),(0,a.kt)("p",null,"The downloaded file is named ",(0,a.kt)("inlineCode",{parentName:"p"},"order_<orderId>_<date>.zip"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"order_1_2023-01-24T09_21_50.727542704Z.zip"),"  "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This endpoint will download currently available files from your order.",(0,a.kt)("br",{parentName:"p"}),"\n","This file is a zip archive file containing all files associated to ordered products.",(0,a.kt)("br",{parentName:"p"}),"\n","You can use this endpoint everytime new files are available.")),(0,a.kt)("h3",{id:"curl-example"},"cURL example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -v -O "<HOST>/api/v1/rs-order/user/orders/1234/download" \\\n  -H "Authorization: Bearer <token>"\n')))}u.isMDXComponent=!0}}]);