"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[11596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,g=u["".concat(l,".").concat(d)]||u[d]||v[d]||a;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"backend-ingest-overview",title:"REGARDS ingest microservice",sidebar_label:"Overview",slug:"/development/backend/services/ingest/overview/"},s=void 0,o={unversionedId:"development/backend/regards/ingest/backend-ingest-overview",id:"development/backend/regards/ingest/backend-ingest-overview",title:"REGARDS ingest microservice",description:"Overview",source:"@site/docs/development/backend/regards/ingest/ingest.md",sourceDirName:"development/backend/regards/ingest",slug:"/development/backend/services/ingest/overview/",permalink:"/docs/development/backend/services/ingest/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/ingest.md",tags:[],version:"current",frontMatter:{id:"backend-ingest-overview",title:"REGARDS ingest microservice",sidebar_label:"Overview",slug:"/development/backend/services/ingest/overview/"},sidebar:"dev",previous:{title:"Validation",permalink:"/docs/development/backend/services/dataprovider/plugins/validation/"},next:{title:"API",permalink:"/docs/development/backend/services/ingest/api-swagger"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Available Extension points",id:"available-extension-points",level:2},{value:"Bus message events",id:"bus-message-events",level:2}],c={toc:p},u="wrapper";function v(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Ingest")," reponsabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ingest SIP,"),(0,i.kt)("li",{parentName:"ul"},"Transform SIP to one or more AIPs,"),(0,i.kt)("li",{parentName:"ul"},"Submit AIPs to ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ingest plugins",src:n(93498).Z,width:"630",height:"245"})),(0,i.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/sip-pre-processing/"},"SIP Pre processing plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/sip-validation/"},"SIP Validation plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/aip-generation/"},"AIP Generation plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/aip-tagging/"},"AIP Tagging plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/sip-post-processing/"},"SIP Post processing plugins"))),(0,i.kt)("h2",{id:"bus-message-events"},"Bus message events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../events/"},"Events"))))}v.isMDXComponent=!0},93498:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ingest-928443295ca84c991ff51af4005f37b1.svg"}}]);