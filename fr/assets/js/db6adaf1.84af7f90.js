"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[35591],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),v=n,g=d["".concat(l,".").concat(v)]||d[v]||u[v]||i;return r?a.createElement(g,s(s({ref:t},p),{},{components:r})):a.createElement(g,s({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49297:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),s=["components"],o={id:"backend-storage-overview",title:"REGARDS storage microservice",sidebar_label:"Overview",slug:"/development/backend/services/storage/overview/"},l=void 0,c={unversionedId:"development/backend/regards/storage/backend-storage-overview",id:"version-1.5.0/development/backend/regards/storage/backend-storage-overview",isDocsHomePage:!1,title:"REGARDS storage microservice",description:"Overview",source:"@site/versioned_docs/version-1.5.0/development/backend/regards/storage/storage.md",sourceDirName:"development/backend/regards/storage",slug:"/development/backend/services/storage/overview/",permalink:"/fr/docs/1.5.0/development/backend/services/storage/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/regards/storage/storage.md",tags:[],version:"1.5.0",frontMatter:{id:"backend-storage-overview",title:"REGARDS storage microservice",sidebar_label:"Overview",slug:"/development/backend/services/storage/overview/"},sidebar:"version-1.5.0/dev",previous:{title:"Processing",permalink:"/fr/docs/1.5.0/development/backend/services/processing/plugins/"},next:{title:"Storage",permalink:"/fr/docs/1.5.0/development/backend/services/storage/api/"}},p=[{value:"Overview",id:"overview",children:[{value:"Store AIP",id:"store-aip",children:[]},{value:"Retrive AIP files",id:"retrive-aip-files",children:[]}]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Extension points",id:"available-extension-points",children:[]},{value:"Bus message events",id:"bus-message-events",children:[]}],u={toc:p};function d(e){var t=e.components,o=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," reponsabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Store/Delete/Monitor AIPs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add/remove tag(s) on AIPs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Makes AIP files available in cache system for retrieval."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:r(38480).Z})))),(0,i.kt)("h3",{id:"store-aip"},"Store AIP"),(0,i.kt)("p",null,"The schema here under shows the main process of AIP storing. ",(0,i.kt)("a",{parentName:"p",href:"../plugins/allocation-strategy/"},"Allocation strategy")," and ",(0,i.kt)("a",{parentName:"p",href:"../plugins/data-storage/"},"Data storages")," are designed as extension points to allow developer to create their own businness needs."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(2931).Z})),(0,i.kt)("h3",{id:"retrive-aip-files"},"Retrive AIP files"),(0,i.kt)("p",null,"In order to optimize files access time, REGARDS handle a cache storage system. When a file is asked to be retrieve, if the file is not directly accessible from disk storage ",(0,i.kt)("a",{parentName:"p",href:"../plugins/data-storage/"},"Online Data storages")," the file is temporarly copied in cache system. The expiration date of a file in this cache system is configurable in the retrieve access request."),(0,i.kt)("h2",{id:"available-apis"},"Available APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/"},"Storage"))),(0,i.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/allocation-strategy/"},"Allocation strategy plugins")," : Strategy to dispatch files in available storage systems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/data-storage/"},"Data storage plugins")," : Storage systems"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/security-delegation/"},"Security delegation plugins")," : Delegate access rights to stored files")),(0,i.kt)("h2",{id:"bus-message-events"},"Bus message events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../events/"},"Events"))))}d.isMDXComponent=!0},38480:function(e,t,r){t.Z=r.p+"assets/images/storage-6a04f3ba9b5014967890ff56afade41c.svg"},2931:function(e,t,r){t.Z=r.p+"assets/images/sto-store-aip-simple-f1d5424f7a47c2d9b49a46bda421ce74.png"}}]);