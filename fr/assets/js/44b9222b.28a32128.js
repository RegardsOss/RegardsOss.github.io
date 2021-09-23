"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[13146],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(v,l(l({ref:t},p),{},{components:a})):n.createElement(v,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92163:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:"backend-dam-overview",title:"REGARDS data management microservice",sidebar_label:"Overview",slug:"/development/backend/dam/overview/"},s=void 0,c={unversionedId:"development/backend/regards/dam/backend-dam-overview",id:"version-1.4.0/development/backend/regards/dam/backend-dam-overview",isDocsHomePage:!1,title:"REGARDS data management microservice",description:"Overview",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/dam.md",sourceDirName:"development/backend/regards/dam",slug:"/development/backend/dam/overview/",permalink:"/fr/docs/1.4.0/development/backend/dam/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/dam.md",tags:[],version:"1.4.0",frontMatter:{id:"backend-dam-overview",title:"REGARDS data management microservice",sidebar_label:"Overview",slug:"/development/backend/dam/overview/"},sidebar:"version-1.4.0/dev",previous:{title:"Bus message events",permalink:"/fr/docs/1.4.0/development/backend/catalog/events/"},next:{title:"Access rights",permalink:"/fr/docs/1.4.0/development/backend/dam/api/access-rights/"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Extension points",id:"available-extension-points",children:[]},{value:"Bus message events",id:"bus-message-events",children:[]},{value:"Appendices",id:"appendices",children:[]}],d={toc:p};function u(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Dam")," reponsabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manage data models,"),(0,i.kt)("li",{parentName:"ul"},"Harvest and index data sources,"),(0,i.kt)("li",{parentName:"ul"},"Apply access rights.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ingest plugins",src:a(80669).Z})),(0,i.kt)("h2",{id:"available-apis"},"Available APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/access-rights/"},"Access rights api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/model/"},"Models api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/collection/"},"Collection api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/dataset/"},"Dataset api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/datasource/"},"Datasource api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/document/"},"Document api"))),(0,i.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/data-access-rights/"},"Access rights")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/computed-attribute/"},"Computed attributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/datasource/"},"Data sources"))),(0,i.kt)("h2",{id:"bus-message-events"},"Bus message events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../events/"},"Events"))),(0,i.kt)("h2",{id:"appendices"},"Appendices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../geo/"},"Geospatial behavior"))))}u.isMDXComponent=!0},80669:function(e,t,a){t.Z=a.p+"assets/images/dam-bc8dd392997af372adf7893df56df01f.svg"}}]);