"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[93288],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>u});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,u=p["".concat(l,".").concat(m)]||p[m]||v[m]||i;return r?n.createElement(u,s(s({ref:t},c),{},{components:r})):n.createElement(u,s({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(45072),a=(r(11504),r(95788));const i={id:"backend-dam-overview",title:"REGARDS data management microservice",sidebar_label:"Overview",slug:"/development/backend/services/dam/overview/"},s=void 0,o={unversionedId:"development/backend/regards/dam/backend-dam-overview",id:"version-1.13.0/development/backend/regards/dam/backend-dam-overview",title:"REGARDS data management microservice",description:"Overview",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/dam/dam.md",sourceDirName:"development/backend/regards/dam",slug:"/development/backend/services/dam/overview/",permalink:"/docs/1.13.0/development/backend/services/dam/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/dam/dam.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-dam-overview",title:"REGARDS data management microservice",sidebar_label:"Overview",slug:"/development/backend/services/dam/overview/"},sidebar:"dev",previous:{title:"Bus message events",permalink:"/docs/1.13.0/development/backend/services/catalog/events/"},next:{title:"API",permalink:"/docs/1.13.0/development/backend/services/dam/api-swagger"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Available Extension points",id:"available-extension-points",level:2},{value:"Bus message events",id:"bus-message-events",level:2},{value:"Appendices",id:"appendices",level:2}],c={toc:d},p="wrapper";function v(e){let{components:t,...i}=e;return(0,a.yg)(p,(0,n.c)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Dam")," reponsabilities:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Manage data models,"),(0,a.yg)("li",{parentName:"ul"},"Harvest and index data sources,"),(0,a.yg)("li",{parentName:"ul"},"Apply access rights.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Ingest plugins",src:r(88256).c,width:"511",height:"284"})),(0,a.yg)("h2",{id:"available-extension-points"},"Available Extension points"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/dam/plugins/data-access-rights/"},"Access rights")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/dam/plugins/computed-attribute/"},"Computed attributes")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/dam/plugins/datasource/"},"Data sources"))),(0,a.yg)("h2",{id:"bus-message-events"},"Bus message events"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/dam/events/"},"Events"))),(0,a.yg)("h2",{id:"appendices"},"Appendices"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/dam/geo/"},"Geospatial behavior"))))}v.isMDXComponent=!0},88256:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/dam-bc8dd392997af372adf7893df56df01f.svg"}}]);