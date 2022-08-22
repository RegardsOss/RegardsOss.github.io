"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[88927],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>u});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,m=d["".concat(c,".").concat(u)]||d[u]||g[u]||i;return r?t.createElement(m,s(s({ref:n},p),{},{components:r})):t.createElement(m,s({ref:n},p))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92862:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(87462),a=(r(67294),r(3905));const i={id:"backend-catalog-search-engine-plugins",title:"Search engine plugins",sidebar_label:"Search engine",slug:"/development/backend/services/catalog/search-engine-plugins/"},s=void 0,o={unversionedId:"development/backend/regards/catalog/plugins/backend-catalog-search-engine-plugins",id:"version-1.8.0/development/backend/regards/catalog/plugins/backend-catalog-search-engine-plugins",title:"Search engine plugins",description:"Overview",source:"@site/versioned_docs/version-1.8.0/development/backend/regards/catalog/plugins/search-engine-plugins.md",sourceDirName:"development/backend/regards/catalog/plugins",slug:"/development/backend/services/catalog/search-engine-plugins/",permalink:"/docs/1.8.0/development/backend/services/catalog/search-engine-plugins/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.0/development/backend/regards/catalog/plugins/search-engine-plugins.md",tags:[],version:"1.8.0",frontMatter:{id:"backend-catalog-search-engine-plugins",title:"Search engine plugins",sidebar_label:"Search engine",slug:"/development/backend/services/catalog/search-engine-plugins/"},sidebar:"dev",previous:{title:"Catalog service",permalink:"/docs/1.8.0/development/backend/services/catalog/service-plugins/"},next:{title:"Bus message events",permalink:"/docs/1.8.0/development/backend/services/catalog/events/"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Interface",id:"interface",level:2},{value:"Implementation",id:"implementation",level:2}],p={toc:l};function g(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This extension point allows to define a new search protocol to request REGARDS catalog.")),(0,a.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/search/search-service/src/main/java/fr/cnes/regards/modules/search/service/engine/plugin/legacy/LegacySearchEngine.java"},"LegacySearchEngine")," : First search engine defined for REGARDS frontend."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/search/search-service/src/main/java/fr/cnes/regards/modules/search/service/engine/plugin/opensearch/OpenSearchEngine.java"},"OpenSearchEngine")," : Standard opensearch protocol.")),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("p",null,"   ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/search/search-domain/src/main/java/fr/cnes/regards/modules/search/domain/plugin/ISearchEngine.java"},"ISearchEngine")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"To learn more about how to create your own plugin see ",(0,a.kt)("a",{parentName:"p",href:"../../../framework/modules/plugins/"},"Plugins")),(0,a.kt)("p",null,"To lean more about the implemented search engines see ",(0,a.kt)("a",{parentName:"p",href:"../search-api/"},"Search API")))}g.isMDXComponent=!0}}]);