"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[11596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,u=d["".concat(l,".").concat(g)]||d[g]||v[g]||s;return n?r.createElement(u,a(a({ref:t},p),{},{components:n})):r.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},18623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const s={id:"backend-ingest-overview",title:"REGARDS ingest microservice",sidebar_label:"Overview",slug:"/development/backend/services/ingest/overview/"},a=void 0,o={unversionedId:"development/backend/regards/ingest/backend-ingest-overview",id:"development/backend/regards/ingest/backend-ingest-overview",title:"REGARDS ingest microservice",description:"Overview",source:"@site/docs/development/backend/regards/ingest/ingest.md",sourceDirName:"development/backend/regards/ingest",slug:"/development/backend/services/ingest/overview/",permalink:"/docs/development/backend/services/ingest/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/ingest.md",tags:[],version:"current",frontMatter:{id:"backend-ingest-overview",title:"REGARDS ingest microservice",sidebar_label:"Overview",slug:"/development/backend/services/ingest/overview/"},sidebar:"dev",previous:{title:"Validation",permalink:"/docs/development/backend/services/dataprovider/plugins/validation/"},next:{title:"API",permalink:"/docs/development/backend/services/ingest/api-swagger"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Available Extension points",id:"available-extension-points",level:2},{value:"Bus message events",id:"bus-message-events",level:2}],p={toc:c},d="wrapper";function v(e){let{components:t,...s}=e;return(0,i.kt)(d,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Ingest")," reponsabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ingest SIP,"),(0,i.kt)("li",{parentName:"ul"},"Transform SIP to one or more AIPs,"),(0,i.kt)("li",{parentName:"ul"},"Submit AIPs to ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ingest plugins",src:n(93498).Z,width:"630",height:"245"})),(0,i.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/development/backend/services/ingest/plugins/sip-pre-processing/"},"SIP Pre processing plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/development/backend/services/ingest/plugins/sip-validation/"},"SIP Validation plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/development/backend/services/ingest/plugins/aip-generation/"},"AIP Generation plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/development/backend/services/ingest/plugins/aip-tagging/"},"AIP Tagging plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/development/backend/services/ingest/plugins/sip-post-processing/"},"SIP Post processing plugins"))),(0,i.kt)("h2",{id:"bus-message-events"},"Bus message events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/development/backend/services/ingest/events/"},"Events"))))}v.isMDXComponent=!0},93498:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ingest-928443295ca84c991ff51af4005f37b1.svg"}}]);