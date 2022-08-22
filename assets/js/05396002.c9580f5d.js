"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[20761],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(r),g=n,v=p["".concat(l,".").concat(g)]||p[g]||c[g]||s;return r?a.createElement(v,o(o({ref:t},m),{},{components:r})):a.createElement(v,o({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},97325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const s={id:"backend-storage-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/storage/events/"},o=void 0,i={unversionedId:"development/backend/regards/storage/events/backend-storage-events",id:"development/backend/regards/storage/events/backend-storage-events",title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/docs/development/backend/regards/storage/events/events.md",sourceDirName:"development/backend/regards/storage/events",slug:"/development/backend/services/storage/events/",permalink:"/docs/development/backend/services/storage/events/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/storage/events/events.md",tags:[],version:"current",frontMatter:{id:"backend-storage-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/storage/events/"},sidebar:"dev",previous:{title:"Security delegation",permalink:"/docs/development/backend/services/storage/plugins/security-delegation/"},next:{title:"Overview",permalink:"/docs/development/backend/services/worker-manager/overview/"}},l={},d=[],m={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To know more about bus message mechanism look at ",(0,n.kt)("a",{parentName:"p",href:"../../../framework/starters/amqp/"},"AMQP starter"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Target"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/AIPEvent.java"},"AIPEvent")),(0,n.kt)("td",{parentName:"tr",align:"left"},"ONE_PER_MICROSERVICE_TYPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Biggest granularity information event on what's happening on an AIP. If you need informations on each StorageDataFile.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataFileEvent.java"},"DataFileEvent")),(0,n.kt)("td",{parentName:"tr",align:"left"},"ALL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Events mainly for rs-order, gives information on StorageDataFile granularity, not AIP.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataStorageEvent.java"},"DataStorageEvent")),(0,n.kt)("td",{parentName:"tr",align:"left"},"MICROSERVICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unicast"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Published when a file is stored, deleted or restored")))))}c.isMDXComponent=!0}}]);