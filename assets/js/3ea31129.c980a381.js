"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[22804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},v="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=c(a),d=n,g=v["".concat(s,".").concat(d)]||v[d]||u[d]||l;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[v]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71184:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={id:"backend-catalog-overview",title:"REGARDS catalog microservice",sidebar_label:"Overview",slug:"/development/backend/services/catalog/overview/"},i=void 0,o={unversionedId:"development/backend/regards/catalog/backend-catalog-overview",id:"development/backend/regards/catalog/backend-catalog-overview",title:"REGARDS catalog microservice",description:"Overview",source:"@site/docs/development/backend/regards/catalog/catalog.md",sourceDirName:"development/backend/regards/catalog",slug:"/development/backend/services/catalog/overview/",permalink:"/docs/development/backend/services/catalog/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/catalog/catalog.md",tags:[],version:"current",frontMatter:{id:"backend-catalog-overview",title:"REGARDS catalog microservice",sidebar_label:"Overview",slug:"/development/backend/services/catalog/overview/"},sidebar:"dev",previous:{title:"Access instance API",permalink:"/docs/development/backend/services/access-instance/api-swagger"},next:{title:"API",permalink:"/docs/development/backend/services/catalog/api-swagger"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Available APIs",id:"available-apis",level:2},{value:"Search API",id:"search-api",level:3},{value:"Available Extension points",id:"available-extension-points",level:2},{value:"Bus message events",id:"bus-message-events",level:2},{value:"Plugins",id:"plugins",level:2}],p={toc:c},v="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(v,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Catalog")," reponsabilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fast metadata discovery through plugable search protocol,"),(0,n.kt)("li",{parentName:"ul"},"On the fly metadata transformation.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Store plugins",src:a(76027).Z,width:"374",height:"266"})),(0,n.kt)("h2",{id:"available-apis"},"Available APIs"),(0,n.kt)("h3",{id:"search-api"},"Search API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../search-api/"},"Catalog"))),(0,n.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../service-plugins/"},"Catalog service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../search-engine-plugins/"},"Search engine"))),(0,n.kt)("h2",{id:"bus-message-events"},"Bus message events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../events/"},"Events"))),(0,n.kt)("h2",{id:"plugins"},"Plugins"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../stac-plugin/"},"STAC plugin"))))}u.isMDXComponent=!0},76027:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/catalog-f3dc9417931664dde25f2707f3d9009d.svg"}}]);