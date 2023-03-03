"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[87307],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,u=d["".concat(l,".").concat(g)]||d[g]||v[g]||i;return r?a.createElement(u,s(s({ref:t},p),{},{components:r})):a.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={id:"backend-storage-overview",title:"REGARDS storage microservice",sidebar_label:"Overview",slug:"/development/backend/services/storage/overview/"},s=void 0,o={unversionedId:"development/backend/regards/storage/backend-storage-overview",id:"development/backend/regards/storage/backend-storage-overview",title:"REGARDS storage microservice",description:"Overview",source:"@site/docs/development/backend/regards/storage/storage.md",sourceDirName:"development/backend/regards/storage",slug:"/development/backend/services/storage/overview/",permalink:"/docs/development/backend/services/storage/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/storage/storage.md",tags:[],version:"current",frontMatter:{id:"backend-storage-overview",title:"REGARDS storage microservice",sidebar_label:"Overview",slug:"/development/backend/services/storage/overview/"},sidebar:"dev",previous:{title:"Processing",permalink:"/docs/development/backend/services/processing/plugins/"},next:{title:"API",permalink:"/docs/development/backend/services/storage/api-swagger"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Store AIP",id:"store-aip",level:3},{value:"Retrive AIP files",id:"retrive-aip-files",level:3},{value:"Available APIs",id:"available-apis",level:2},{value:"Available Extension points",id:"available-extension-points",level:2},{value:"Bus message events",id:"bus-message-events",level:2}],p={toc:c},d="wrapper";function v(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Storage")," reponsabilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Store/Delete/Monitor AIPs.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add/remove tag(s) on AIPs.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Makes AIP files available in cache system for retrieval."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(82095).Z,width:"483",height:"264"})))),(0,n.kt)("h3",{id:"store-aip"},"Store AIP"),(0,n.kt)("p",null,"The schema here under shows the main process of AIP storing. ",(0,n.kt)("a",{parentName:"p",href:"../plugins/allocation-strategy/"},"Allocation strategy")," and ",(0,n.kt)("a",{parentName:"p",href:"../plugins/data-storage/"},"Data storages")," are designed as extension points to allow developer to create their own businness needs."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(210).Z,width:"910",height:"387"})),(0,n.kt)("h3",{id:"retrive-aip-files"},"Retrive AIP files"),(0,n.kt)("p",null,"In order to optimize files access time, REGARDS handle a cache storage system. When a file is asked to be retrieve, if the file is not directly accessible from disk storage ",(0,n.kt)("a",{parentName:"p",href:"../plugins/data-storage/"},"Online Data storages")," the file is temporarly copied in cache system. The expiration date of a file in this cache system is configurable in the retrieve access request."),(0,n.kt)("h2",{id:"available-apis"},"Available APIs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/"},"Storage"))),(0,n.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../plugins/allocation-strategy/"},"Allocation strategy plugins")," : Strategy to dispatch files in available storage systems."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../plugins/data-storage/"},"Data storage plugins")," : Storage systems"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../plugins/security-delegation/"},"Security delegation plugins")," : Delegate access rights to stored files")),(0,n.kt)("h2",{id:"bus-message-events"},"Bus message events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../events/"},"Events"))))}v.isMDXComponent=!0},82095:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/storage-6a04f3ba9b5014967890ff56afade41c.svg"},210:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sto-store-aip-simple-f1d5424f7a47c2d9b49a46bda421ce74.png"}}]);