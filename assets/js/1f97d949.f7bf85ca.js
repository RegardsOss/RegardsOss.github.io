"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[41730],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>u});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),v=n,u=p["".concat(l,".").concat(v)]||p[v]||m[v]||i;return r?a.createElement(u,s(s({ref:t},c),{},{components:r})):a.createElement(u,s({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},46487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(58168),n=(r(96540),r(15680));const i={id:"backend-dam-overview",title:"REGARDS data management microservice",sidebar_label:"Overview",slug:"/development/backend/services/dam/overview/"},s=void 0,o={unversionedId:"development/backend/regards/dam/backend-dam-overview",id:"development/backend/regards/dam/backend-dam-overview",title:"REGARDS data management microservice",description:"Overview",source:"@site/docs/development/backend/regards/dam/dam.md",sourceDirName:"development/backend/regards/dam",slug:"/development/backend/services/dam/overview/",permalink:"/docs/development/backend/services/dam/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/dam.md",tags:[],version:"current",frontMatter:{id:"backend-dam-overview",title:"REGARDS data management microservice",sidebar_label:"Overview",slug:"/development/backend/services/dam/overview/"},sidebar:"dev",previous:{title:"Bus message events",permalink:"/docs/development/backend/services/catalog/events/"},next:{title:"API",permalink:"/docs/development/backend/services/dam/api-swagger"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Available Extension points",id:"available-extension-points",level:2},{value:"Bus message events",id:"bus-message-events",level:2},{value:"Appendices",id:"appendices",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...i}=e;return(0,n.yg)(p,(0,a.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Dam")," reponsabilities:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Manage data models,"),(0,n.yg)("li",{parentName:"ul"},"Harvest and index data sources,"),(0,n.yg)("li",{parentName:"ul"},"Apply access rights.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Ingest plugins",src:r(80934).A,width:"511",height:"284"})),(0,n.yg)("h2",{id:"available-extension-points"},"Available Extension points"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/services/dam/plugins/data-access-rights/"},"Access rights")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/services/dam/plugins/computed-attribute/"},"Computed attributes")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/services/dam/plugins/datasource/"},"Data sources"))),(0,n.yg)("h2",{id:"bus-message-events"},"Bus message events"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/services/dam/events/"},"Events"))),(0,n.yg)("h2",{id:"appendices"},"Appendices"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/services/dam/geo/"},"Geospatial behavior"))))}m.isMDXComponent=!0},80934:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/dam-bc8dd392997af372adf7893df56df01f.svg"}}]);