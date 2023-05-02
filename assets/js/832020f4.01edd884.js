"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[54249],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={id:"backend-rest-request-status",title:"Get request status REST",sidebar_label:"Get request status REST",slug:"/development/backend/services/lta-manager/guides/get-request-status-rest"},i=void 0,l={unversionedId:"development/backend/regards/lta-manager/api-guides/backend-rest-request-status",id:"development/backend/regards/lta-manager/api-guides/backend-rest-request-status",title:"Get request status REST",description:"This page assumes you know how to authenticate your REST API requests",source:"@site/docs/development/backend/regards/lta-manager/api-guides/rest-get-request-status.md",sourceDirName:"development/backend/regards/lta-manager/api-guides",slug:"/development/backend/services/lta-manager/guides/get-request-status-rest",permalink:"/docs/development/backend/services/lta-manager/guides/get-request-status-rest",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/lta-manager/api-guides/rest-get-request-status.md",tags:[],version:"current",frontMatter:{id:"backend-rest-request-status",title:"Get request status REST",sidebar_label:"Get request status REST",slug:"/development/backend/services/lta-manager/guides/get-request-status-rest"},sidebar:"dev",previous:{title:"Create product REST",permalink:"/docs/development/backend/services/lta-manager/guides/create-product-rest"},next:{title:"REST API",permalink:"/docs/development/backend/services/lta-manager/api-swagger"}},o={},u=[{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This page assumes you know how to ",(0,a.kt)("a",{parentName:"em",href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"authenticate")," your REST API requests ")),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"url"),(0,a.kt)("th",{parentName:"tr",align:null},"verb"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Product creation request info"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<HOST>"),"/api/v1/rs-lta-manager/products/{correlationId}/info"),(0,a.kt)("td",{parentName:"tr",align:null},"GET")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Request headers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Content-Type": "application/json",\n  "Authorization": "Bearer <token>"\n}\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Http status"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"Your request is successfully created")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"403"),(0,a.kt)("td",{parentName:"tr",align:null},"Access denied")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "content": {\n    "correlationId": "string",\n    "productId": "string",\n    "status": "DONE",\n    "statusDate": "2022-12-22T10:25:52.243Z",\n    "session": "string",\n    "message": "string"\n  },\n  "links": [\n  ]\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"correlationId"),": Request identifier"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"productId"),": Id of the product to create"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status")," : can be :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VALIDATED")," : Your request is valid and will be processed soon."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GENERATION_PENDING")," : Your request is processing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GENERATED"),": Your request is processing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"INGESTION_PENDING"),": Your request is processing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DONE"),": Your request is successfully done."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GENERATION_ERROR")," : Your request is terminated in error during OAIS product generation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"INGESTION_ERROR")," : Your request is terminated in error during OAIS product ingestion."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expires"),": Expiration date of your request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"session"),": Session of your request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message"),": Information message about your request")))}c.isMDXComponent=!0}}]);