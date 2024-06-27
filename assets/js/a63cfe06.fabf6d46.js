"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[27217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),v=a,g=p["".concat(c,".").concat(v)]||p[v]||m[v]||s;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=v;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},96411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={id:"backend-ingest-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/ingest/events/"},o=void 0,i={unversionedId:"development/backend/regards/ingest/events/backend-ingest-events",id:"version-1.13.0/development/backend/regards/ingest/events/backend-ingest-events",title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/ingest/events/events.md",sourceDirName:"development/backend/regards/ingest/events",slug:"/development/backend/services/ingest/events/",permalink:"/docs/1.13.0/development/backend/services/ingest/events/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/ingest/events/events.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-ingest-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/ingest/events/"},sidebar:"dev",previous:{title:"SIP post processing",permalink:"/docs/1.13.0/development/backend/services/ingest/plugins/sip-post-processing/"},next:{title:"Overview",permalink:"/docs/1.13.0/development/backend/services/order/overview/"}},c={},l=[],d={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To know more about bus message mechanism look at ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/framework/starters/amqp/"},"AMQP starter"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Target"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mode"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-ingest/blob/master/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/event/SIPEvent.java"},"SIPEvent")),(0,a.kt)("td",{parentName:"tr",align:"left"},"ONE_PER_MICROSERVICE_TYPE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Published  to inform system for all SIPEntity state modification")))))}m.isMDXComponent=!0}}]);