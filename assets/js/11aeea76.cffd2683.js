"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[57558],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,v=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(v,l(l({ref:t},p),{},{components:a})):r.createElement(v,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26966:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],s={id:"backend-dam-overview",title:"REGARDS data management microservice",sidebar_label:"Overview",slug:"/development/backend/services/dam/overview/"},o=void 0,c={unversionedId:"development/backend/regards/dam/backend-dam-overview",id:"version-1.6.0/development/backend/regards/dam/backend-dam-overview",title:"REGARDS data management microservice",description:"Overview",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/dam/dam.md",sourceDirName:"development/backend/regards/dam",slug:"/development/backend/services/dam/overview/",permalink:"/docs/1.6.0/development/backend/services/dam/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/dam/dam.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-dam-overview",title:"REGARDS data management microservice",sidebar_label:"Overview",slug:"/development/backend/services/dam/overview/"},sidebar:"version-1.6.0/dev",previous:{title:"Bus message events",permalink:"/docs/1.6.0/development/backend/services/catalog/events/"},next:{title:"Access rights",permalink:"/docs/1.6.0/development/backend/services/dam/api/access-rights/"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Available APIs",id:"available-apis",children:[],level:2},{value:"Available Extension points",id:"available-extension-points",children:[],level:2},{value:"Bus message events",id:"bus-message-events",children:[],level:2},{value:"Appendices",id:"appendices",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Dam")," reponsabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manage data models,"),(0,i.kt)("li",{parentName:"ul"},"Harvest and index data sources,"),(0,i.kt)("li",{parentName:"ul"},"Apply access rights.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ingest plugins",src:a(58704).Z,width:"511",height:"284"})),(0,i.kt)("h2",{id:"available-apis"},"Available APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/access-rights/"},"Access rights api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/model/"},"Models api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/collection/"},"Collection api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/dataset/"},"Dataset api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/datasource/"},"Datasource api")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/document/"},"Document api"))),(0,i.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/data-access-rights/"},"Access rights")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/computed-attribute/"},"Computed attributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../plugins/datasource/"},"Data sources"))),(0,i.kt)("h2",{id:"bus-message-events"},"Bus message events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../events/"},"Events"))),(0,i.kt)("h2",{id:"appendices"},"Appendices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../geo/"},"Geospatial behavior"))))}u.isMDXComponent=!0},58704:function(e,t,a){t.Z=a.p+"assets/images/dam-bc8dd392997af372adf7893df56df01f.svg"}}]);