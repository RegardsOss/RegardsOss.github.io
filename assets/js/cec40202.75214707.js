"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[24582],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=s(r),d=a,g=v["".concat(c,".").concat(d)]||v[d]||p[d]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=v;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},23013:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return v}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"backend-catalog-overview",title:"REGARDS catalog microservice",sidebar_label:"Overview",slug:"/development/backend/services/catalog/overview/"},c=void 0,s={unversionedId:"development/backend/regards/catalog/backend-catalog-overview",id:"version-1.6.0/development/backend/regards/catalog/backend-catalog-overview",isDocsHomePage:!1,title:"REGARDS catalog microservice",description:"Overview",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/catalog/catalog.md",sourceDirName:"development/backend/regards/catalog",slug:"/development/backend/services/catalog/overview/",permalink:"/docs/1.6.0/development/backend/services/catalog/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/catalog/catalog.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-catalog-overview",title:"REGARDS catalog microservice",sidebar_label:"Overview",slug:"/development/backend/services/catalog/overview/"},sidebar:"version-1.6.0/dev",previous:{title:"Access project API",permalink:"/docs/1.6.0/development/backend/services/access/api/"},next:{title:"Search",permalink:"/docs/1.6.0/development/backend/services/catalog/search-api/"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[{value:"Search API",id:"search-api",children:[]}]},{value:"Available Extension points",id:"available-extension-points",children:[]},{value:"Bus message events",id:"bus-message-events",children:[]},{value:"Plugins",id:"plugins",children:[]}],p={toc:u};function v(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Catalog")," reponsabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fast metadata discovery through plugable search protocol,"),(0,i.kt)("li",{parentName:"ul"},"On the fly metadata transformation.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Store plugins",src:r(79384).Z})),(0,i.kt)("h2",{id:"available-apis"},"Available APIs"),(0,i.kt)("h3",{id:"search-api"},"Search API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../search-api/"},"Catalog"))),(0,i.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../service-plugins/"},"Catalog service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../search-engine-plugins/"},"Search engine"))),(0,i.kt)("h2",{id:"bus-message-events"},"Bus message events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../events/"},"Events"))),(0,i.kt)("h2",{id:"plugins"},"Plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../stac-plugin/"},"STAC plugin"))))}v.isMDXComponent=!0},79384:function(e,t,r){t.Z=r.p+"assets/images/catalog-f3dc9417931664dde25f2707f3d9009d.svg"}}]);