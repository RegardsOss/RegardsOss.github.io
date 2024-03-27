"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[88830],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),g=a,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return t?n.createElement(m,d(d({ref:r},p),{},{components:t})):n.createElement(m,d({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,d=new Array(o);d[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:a,d[1]=i;for(var s=2;s<o;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1843:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(58168),a=(t(96540),t(15680));const o={id:"backend-order-download-ordered-files",title:"Download ordered files inside archive",sidebar_label:"Download ordered files inside archive",slug:"/development/backend/services/order/guides/download-ordered-files"},d=void 0,i={unversionedId:"development/backend/regards/order/api-guides/backend-order-download-ordered-files",id:"version-1.14/development/backend/regards/order/api-guides/backend-order-download-ordered-files",title:"Download ordered files inside archive",description:"This page assumes you know how to authenticate your REST API requests",source:"@site/versioned_docs/version-1.14/development/backend/regards/order/api-guides/rest-download-ordered-files.md",sourceDirName:"development/backend/regards/order/api-guides",slug:"/development/backend/services/order/guides/download-ordered-files",permalink:"/docs/development/backend/services/order/guides/download-ordered-files",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/order/api-guides/rest-download-ordered-files.md",tags:[],version:"1.14",frontMatter:{id:"backend-order-download-ordered-files",title:"Download ordered files inside archive",sidebar_label:"Download ordered files inside archive",slug:"/development/backend/services/order/guides/download-ordered-files"},sidebar:"dev",previous:{title:"Get Order status REST",permalink:"/docs/development/backend/services/order/guides/get-order-status-rest"},next:{title:"REST API",permalink:"/docs/development/backend/services/order/api-swagger"}},l={},s=[{value:"cURL example",id:"curl-example",level:3}],p={toc:s},c="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(c,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"This page assumes you know how to ",(0,a.yg)("a",{parentName:"em",href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"authenticate")," your REST API requests ")),(0,a.yg)("p",null,"Once your order request is processed, you can download the order result as a zip archive file using the here-under endpoint.  "),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"description"),(0,a.yg)("th",{parentName:"tr",align:null},"url"),(0,a.yg)("th",{parentName:"tr",align:null},"verb"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Download all available files from provided order ID"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"<HOST>"),"/api/v1/rs-order/user/orders/{orderId}/download"),(0,a.yg)("td",{parentName:"tr",align:null},"GET")))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Request headers")," :"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"Authorization: Bearer <token>"\n')),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Optional"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"orderId")),(0,a.yg)("td",{parentName:"tr",align:null},"Int"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"Order identifier")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"token")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:"center"},"No"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"Authentication token"))))),(0,a.yg)("p",null,"The downloaded file is named ",(0,a.yg)("inlineCode",{parentName:"p"},"order_<orderId>_<date>.zip"),".",(0,a.yg)("br",{parentName:"p"}),"\n","Example: ",(0,a.yg)("inlineCode",{parentName:"p"},"order_1_2023-01-24T09_21_50.727542704Z.zip"),"  "),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"This endpoint will download currently available files from your order.",(0,a.yg)("br",{parentName:"p"}),"\n","This file is a zip archive file containing all files associated to ordered products.",(0,a.yg)("br",{parentName:"p"}),"\n","You can use this endpoint everytime new files are available.")),(0,a.yg)("h3",{id:"curl-example"},"cURL example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'curl -v -O "<HOST>/api/v1/rs-order/user/orders/1234/download" \\\n  -H "Authorization: Bearer <token>"\n')))}u.isMDXComponent=!0}}]);