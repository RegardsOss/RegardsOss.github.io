"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[12283],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4274:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"release-notes-v1.6.0",title:"Version 1.6.0",slug:"/v1.6.0/"},l=void 0,c={unversionedId:"notes/release-notes-v1.6.0",id:"notes/release-notes-v1.6.0",title:"Version 1.6.0",description:"Released on: September, 2021",source:"@site/release_notes/notes/V1.6.0 .md",sourceDirName:"notes",slug:"/v1.6.0/",permalink:"/release-notes/v1.6.0/",tags:[],version:"current",frontMatter:{id:"release-notes-v1.6.0",title:"Version 1.6.0",slug:"/v1.6.0/"},sidebar:"release_notes",previous:{title:"Version 1.7.1",permalink:"/release-notes/v1.7.1/"},next:{title:"Version 1.5.0",permalink:"/release-notes/v1.5.0/"}},p=[{value:"STAC",id:"stac",children:[],level:2},{value:"Session dashboard",id:"session-dashboard",children:[],level:2},{value:"Order",id:"order",children:[],level:2},{value:"Cache system",id:"cache-system",children:[],level:2},{value:"Map",id:"map",children:[],level:2},{value:"Others improvements &amp; bugfix",id:"others-improvements--bugfix",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Released on: ",(0,a.kt)("strong",{parentName:"p"},"September, 2021"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-GPLv3-blue.svg",alt:"License: GPL v3"}))),(0,a.kt)("h2",{id:"stac"},"STAC"),(0,a.kt)("p",null,"REGARDS catalog can be configured to provide a STAC catalog ",(0,a.kt)("a",{parentName:"p",href:"https://stacspec.org/"},"STAC Spec")),(0,a.kt)("h2",{id:"session-dashboard"},"Session dashboard"),(0,a.kt)("p",null,"The session dashboard has been fully refactored. It provides a single view for administrator to monitor data threw these steps: Acquisition / Referencing / Storage / Dissemination"),(0,a.kt)("h2",{id:"order"},"Order"),(0,a.kt)("p",null,"The orders HMI have been improved for users and administrators."),(0,a.kt)("h2",{id:"cache-system"},"Cache system"),(0,a.kt)("p",null,"The cache system, used by orders and storage, has been improved."),(0,a.kt)("h2",{id:"map"},"Map"),(0,a.kt)("p",null,"We now allow users to add custom toponyms to its geographical research by uploading shapefiles (Drag'n drop).  "),(0,a.kt)("h2",{id:"others-improvements--bugfix"},"Others improvements & bugfix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improve the feature description popup in the user app."),(0,a.kt)("li",{parentName:"ul"},"More than 18 tickets closed")))}d.isMDXComponent=!0}}]);