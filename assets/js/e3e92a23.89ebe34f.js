"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[54447],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),v=n,u=m["".concat(o,".").concat(v)]||m[v]||d[v]||i;return a?r.createElement(u,l(l({ref:t},c),{},{components:a})):r.createElement(u,l({ref:t},c))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={id:"backend-dam-overview",title:"REGARDS data management microservice",sidebar_label:"Overview",slug:"/development/backend/services/dam/overview/"},l=void 0,s={unversionedId:"development/backend/regards/dam/backend-dam-overview",id:"version-1.5.0/development/backend/regards/dam/backend-dam-overview",title:"REGARDS data management microservice",description:"Overview",source:"@site/versioned_docs/version-1.5.0/development/backend/regards/dam/dam.md",sourceDirName:"development/backend/regards/dam",slug:"/development/backend/services/dam/overview/",permalink:"/docs/1.5.0/development/backend/services/dam/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/regards/dam/dam.md",tags:[],version:"1.5.0",frontMatter:{id:"backend-dam-overview",title:"REGARDS data management microservice",sidebar_label:"Overview",slug:"/development/backend/services/dam/overview/"},sidebar:"version-1.5.0/dev",previous:{title:"Bus message events",permalink:"/docs/1.5.0/development/backend/services/catalog/events/"},next:{title:"Access rights",permalink:"/docs/1.5.0/development/backend/services/dam/api/access-rights/"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Available APIs",id:"available-apis",level:2},{value:"Available Extension points",id:"available-extension-points",level:2},{value:"Bus message events",id:"bus-message-events",level:2},{value:"Appendices",id:"appendices",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Dam")," reponsabilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Manage data models,"),(0,n.kt)("li",{parentName:"ul"},"Harvest and index data sources,"),(0,n.kt)("li",{parentName:"ul"},"Apply access rights.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Ingest plugins",src:a(11816).Z,width:"511",height:"284"})),(0,n.kt)("h2",{id:"available-apis"},"Available APIs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/access-rights/"},"Access rights api")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/model/"},"Models api")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/collection/"},"Collection api")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/dataset/"},"Dataset api")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/datasource/"},"Datasource api")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/document/"},"Document api"))),(0,n.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../plugins/data-access-rights/"},"Access rights")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../plugins/computed-attribute/"},"Computed attributes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../plugins/datasource/"},"Data sources"))),(0,n.kt)("h2",{id:"bus-message-events"},"Bus message events"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../events/"},"Events"))),(0,n.kt)("h2",{id:"appendices"},"Appendices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../geo/"},"Geospatial behavior"))))}d.isMDXComponent=!0},11816:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dam-bc8dd392997af372adf7893df56df01f.svg"}}]);