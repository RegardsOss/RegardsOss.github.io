"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[91375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35676:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={id:"release-notes-v1.15.2",title:"Version 1.15.2",slug:"/v1.15.2/"},l=void 0,o={unversionedId:"notes/release-notes-v1.15.2",id:"notes/release-notes-v1.15.2",title:"Version 1.15.2",description:"Released on : July 2024",source:"@site/release_notes/notes/V1.15.2.md",sourceDirName:"notes",slug:"/v1.15.2/",permalink:"/release-notes/v1.15.2/",draft:!1,tags:[],version:"current",frontMatter:{id:"release-notes-v1.15.2",title:"Version 1.15.2",slug:"/v1.15.2/"},sidebar:"release_notes",previous:{title:"Version 1.16.0",permalink:"/release-notes/v1.16.0/"},next:{title:"Version 1.15.1",permalink:"/release-notes/v1.15.1/"}},s={},u=[{value:"Bug fixes",id:"bug-fixes",level:2},{value:"UI Fixes:",id:"ui-fixes",level:3},{value:"Backend Fixes:",id:"backend-fixes",level:3},{value:"Grafana Fixes:",id:"grafana-fixes",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Released on : ",(0,a.kt)("strong",{parentName:"p"},"July 2024"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-GPLv3-blue.svg",alt:"License: GPL v3"})),"\n",(0,a.kt)("strong",{parentName:"p"},"Operational version")),(0,a.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,a.kt)("h3",{id:"ui-fixes"},"UI Fixes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed UI issue when downloading a list of CSV orders."),(0,a.kt)("li",{parentName:"ul"},"Fixed UI issue with distortion on the 3D map."),(0,a.kt)("li",{parentName:"ul"},"Fixed UI issue with search criteria at the bottom of the list in the public catalog search module."),(0,a.kt)("li",{parentName:"ul"},"Fixed UI issue with cone searches."),(0,a.kt)("li",{parentName:"ul"},"Fixed UI issue with the display of the plugin configuration form."),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue that prevented account removal using the HMI.")),(0,a.kt)("h3",{id:"backend-fixes"},"Backend Fixes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed issue with product reprocessing when there are a large number of files in the order."),(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"nextPage")," STAC links in search results."),(0,a.kt)("li",{parentName:"ul"},"Fixed issue where the GeoJSON product ",(0,a.kt)("inlineCode",{parentName:"li"},"lastUpdate")," date was not updated when the Storage microservice response was processed."),(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"NullPointerException")," when relaunching queries on the FEM catalog."),(0,a.kt)("li",{parentName:"ul"},"Fixed decoding of special characters during searches in the public catalog."),(0,a.kt)("li",{parentName:"ul"},"Fixed external cache management in the Storage service."),(0,a.kt)("li",{parentName:"ul"},"Fixed issue with the crawler when associating products with datasets."),(0,a.kt)("li",{parentName:"ul"},"Implemented separate S3 clients per job to improve performance during Storage operations."),(0,a.kt)("li",{parentName:"ul"},"Fixed the Glacier S3 plugin to better handle locks.")),(0,a.kt)("h3",{id:"grafana-fixes"},"Grafana Fixes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed ElasticSearch always yellow on the home dashboard.")))}d.isMDXComponent=!0}}]);