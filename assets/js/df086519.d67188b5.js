"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[89318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),g=s,u=d["".concat(l,".").concat(g)]||d[g]||v[g]||n;return r?a.createElement(u,i(i({ref:t},p),{},{components:r})):a.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,i=new Array(n);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>v,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=r(87462),s=(r(67294),r(3905));const n={id:"backend-storage-overview",title:"REGARDS storage microservice",sidebar_label:"Overview",slug:"/development/backend/services/storage/overview/"},i=void 0,o={unversionedId:"development/backend/regards/storage/backend-storage-overview",id:"version-1.12.0/development/backend/regards/storage/backend-storage-overview",title:"REGARDS storage microservice",description:"Overview",source:"@site/versioned_docs/version-1.12.0/development/backend/regards/storage/storage.md",sourceDirName:"development/backend/regards/storage",slug:"/development/backend/services/storage/overview/",permalink:"/docs/1.12.0/development/backend/services/storage/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/regards/storage/storage.md",tags:[],version:"1.12.0",frontMatter:{id:"backend-storage-overview",title:"REGARDS storage microservice",sidebar_label:"Overview",slug:"/development/backend/services/storage/overview/"},sidebar:"dev",previous:{title:"Processing",permalink:"/docs/1.12.0/development/backend/services/processing/plugins/"},next:{title:"API",permalink:"/docs/1.12.0/development/backend/services/storage/api-swagger"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Store AIP",id:"store-aip",level:3},{value:"Retrive AIP files",id:"retrive-aip-files",level:3},{value:"Available Extension points",id:"available-extension-points",level:2},{value:"Bus message events",id:"bus-message-events",level:2}],p={toc:c},d="wrapper";function v(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Storage")," reponsabilities:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Store/Delete/Monitor AIPs.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Add/remove tag(s) on AIPs.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Makes AIP files available in cache system for retrieval."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{src:r(82095).Z,width:"483",height:"264"})))),(0,s.kt)("h3",{id:"store-aip"},"Store AIP"),(0,s.kt)("p",null,"The schema here under shows the main process of AIP storing. ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.12.0/development/backend/services/storage/plugins/allocation-strategy/"},"Allocation strategy")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.12.0/development/backend/services/storage/plugins/data-storage/"},"Data storages")," are designed as extension points to allow developer to create their own businness needs."),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(210).Z,width:"910",height:"387"})),(0,s.kt)("h3",{id:"retrive-aip-files"},"Retrive AIP files"),(0,s.kt)("p",null,"In order to optimize files access time, REGARDS handle a cache storage system. When a file is asked to be retrieve, if the file is not directly accessible from disk storage ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.12.0/development/backend/services/storage/plugins/data-storage/"},"Online Data storages")," the file is temporarly copied in cache system. The expiration date of a file in this cache system is configurable in the retrieve access request."),(0,s.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/backend/services/storage/plugins/allocation-strategy/"},"Allocation strategy plugins")," : Strategy to dispatch files in available storage systems."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/backend/services/storage/plugins/data-storage/"},"Data storage plugins")," : Storage systems"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/backend/services/storage/plugins/security-delegation/"},"Security delegation plugins")," : Delegate access rights to stored files")),(0,s.kt)("h2",{id:"bus-message-events"},"Bus message events"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/backend/services/storage/events/"},"Events"))))}v.isMDXComponent=!0},82095:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/storage-6a04f3ba9b5014967890ff56afade41c.svg"},210:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sto-store-aip-simple-f1d5424f7a47c2d9b49a46bda421ce74.png"}}]);