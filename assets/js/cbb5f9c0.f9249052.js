"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[90296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?i.createElement(m,a(a({ref:t},u),{},{components:r})):i.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var i=r(87462),n=(r(67294),r(3905));const o={id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/services/notifier/overview/"},a=void 0,c={unversionedId:"development/backend/regards/notifier/backend-notifier-overview",id:"development/backend/regards/notifier/backend-notifier-overview",title:"Notifier microservice",description:"Notifier responsibilities:",source:"@site/docs/development/backend/regards/notifier/notifier.md",sourceDirName:"development/backend/regards/notifier",slug:"/development/backend/services/notifier/overview/",permalink:"/docs/development/backend/services/notifier/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/notifier.md",tags:[],version:"current",frontMatter:{id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/services/notifier/overview/"},sidebar:"dev",previous:{title:"REST API",permalink:"/docs/development/backend/services/lta-manager/api-swagger"},next:{title:"Architecture",permalink:"/docs/development/backend/services/notifier/architecture/"}},l={},s=[{value:"Plugins configuration",id:"plugins-configuration",level:2},{value:"API Guides",id:"api-guides",level:3},{value:"REST API",id:"rest-api",level:3},{value:"Architecture",id:"architecture",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Notifier")," responsibilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Receive JSON notification,"),(0,n.kt)("li",{parentName:"ul"},"Dispatch them to various recipients according to matching rules.")),(0,n.kt)("h2",{id:"plugins-configuration"},"Plugins configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/development/backend/services/notifier/plugins/intro"},"Notifier plugins overview")," shows you how to configure Notifier. ",(0,n.kt)("strong",{parentName:"li"},"Highly recommended")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/development/backend/services/notifier/plugins/rule-matcher"},"Rule matchers guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/development/backend/services/notifier/plugins/recipient-sender"},"Recipient senders guide"))),(0,n.kt)("h3",{id:"api-guides"},"API Guides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/development/backend/services/notifier/guides/amqp/publish-notifier"},"Publish a notification request")," shows you how to create a ",(0,n.kt)("em",{parentName:"li"},"Notification\nrequest")," and sent it to Notifier")),(0,n.kt)("h3",{id:"rest-api"},"REST API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/docs/development/backend/services/notifier/guides/rest/api"},"microservice REST API")," auto generated using OpenAPI."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"/docs/development/backend/notifier/guides/rest/import-plugin-configuration"},"import plugin configuration REST API")," to configure notifier\nplugins.")),(0,n.kt)("h3",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To learn more about how the microservice is designed"),", refer to the following\ndocumentation ",(0,n.kt)("a",{parentName:"p",href:"/docs/development/backend/services/notifier/architecture/"},"notifier architecture"),"."))}d.isMDXComponent=!0}}]);