"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36371],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(n),g=a,v=p["".concat(l,".").concat(g)]||p[g]||c[g]||o;return n?r.createElement(v,s(s({ref:t},m),{},{components:n})):r.createElement(v,s({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47268:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"backend-storage-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/storage/events/"},l=void 0,d={unversionedId:"development/backend/regards/storage/events/backend-storage-events",id:"version-1.5.0/development/backend/regards/storage/events/backend-storage-events",isDocsHomePage:!1,title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/versioned_docs/version-1.5.0/development/backend/regards/storage/events/events.md",sourceDirName:"development/backend/regards/storage/events",slug:"/development/backend/services/storage/events/",permalink:"/docs/1.5.0/development/backend/services/storage/events/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/regards/storage/events/events.md",version:"1.5.0",frontMatter:{id:"backend-storage-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/storage/events/"},sidebar:"version-1.5.0/dev",previous:{title:"Security delegation",permalink:"/docs/1.5.0/development/backend/services/storage/plugins/security-delegation/"},next:{title:"Setup",permalink:"/docs/1.5.0/development/frontend/introduction/setup/"}},m=[],c={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To know more about bus message mechanism look at ",(0,o.kt)("a",{parentName:"p",href:"../../../framework/starters/amqp/"},"AMQP starter")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Target"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/AIPEvent.java"},"AIPEvent")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ONE_PER_MICROSERVICE_TYPE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Biggest granularity information event on what's happening on an AIP. If you need informations on each StorageDataFile.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataFileEvent.java"},"DataFileEvent")),(0,o.kt)("td",{parentName:"tr",align:"left"},"ALL"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Events mainly for rs-order, gives information on StorageDataFile granularity, not AIP.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataStorageEvent.java"},"DataStorageEvent")),(0,o.kt)("td",{parentName:"tr",align:"left"},"MICROSERVICE"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unicast"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Published when a file is stored, deleted or restored")))))}p.isMDXComponent=!0}}]);