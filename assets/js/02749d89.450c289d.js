"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[49266],{15680:(e,n,r)=>{r.d(n,{xA:()=>g,yg:()=>m});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),l=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},g=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=l(r),u=t,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return r?a.createElement(m,s(s({ref:n},g),{},{components:r})):a.createElement(m,s({ref:n},g))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:t,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},83526:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(58168),t=(r(96540),r(15680));const i={id:"backend-catalog-search-engine-plugins",title:"Search engine plugins",sidebar_label:"Search engine",slug:"/development/backend/services/catalog/search-engine-plugins/"},s=void 0,o={unversionedId:"development/backend/regards/catalog/plugins/backend-catalog-search-engine-plugins",id:"version-1.13.0/development/backend/regards/catalog/plugins/backend-catalog-search-engine-plugins",title:"Search engine plugins",description:"Overview",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/catalog/plugins/search-engine-plugins.md",sourceDirName:"development/backend/regards/catalog/plugins",slug:"/development/backend/services/catalog/search-engine-plugins/",permalink:"/docs/1.13.0/development/backend/services/catalog/search-engine-plugins/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/catalog/plugins/search-engine-plugins.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-catalog-search-engine-plugins",title:"Search engine plugins",sidebar_label:"Search engine",slug:"/development/backend/services/catalog/search-engine-plugins/"},sidebar:"dev",previous:{title:"Catalog service",permalink:"/docs/1.13.0/development/backend/services/catalog/service-plugins/"},next:{title:"Bus message events",permalink:"/docs/1.13.0/development/backend/services/catalog/events/"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],g={toc:l},p="wrapper";function d(e){let{components:n,...r}=e;return(0,t.yg)(p,(0,a.A)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"overview"},"Overview"),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"This extension point allows to define a new search protocol to request REGARDS catalog.")),(0,t.yg)("p",null,"REGARDS provides many implementation of this extension point :"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/search/search-service/src/main/java/fr/cnes/regards/modules/search/service/engine/plugin/legacy/LegacySearchEngine.java"},"LegacySearchEngine")," : First search engine defined for REGARDS frontend."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/search/search-service/src/main/java/fr/cnes/regards/modules/search/service/engine/plugin/opensearch/OpenSearchEngine.java"},"OpenSearchEngine")," : Standard opensearch protocol.")),(0,t.yg)("h2",{id:"interface"},"Interface"),(0,t.yg)("p",null,"   ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/search/search-domain/src/main/java/fr/cnes/regards/modules/search/domain/plugin/ISearchEngine.java"},"ISearchEngine")),(0,t.yg)("h2",{id:"implementation"},"Implementation"),(0,t.yg)("p",null,"To learn more about how to create your own plugin see ",(0,t.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/framework/modules/plugins/"},"Plugins")),(0,t.yg)("p",null,"To lean more about the implemented search engines see ",(0,t.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/services/catalog/search-api/"},"Search API")))}d.isMDXComponent=!0}}]);