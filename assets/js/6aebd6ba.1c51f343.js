"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[46468],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>u});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||g[m]||s;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(45072),a=(n(11504),n(95788));const s={id:"backend-ingest-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/ingest/events/"},o=void 0,i={unversionedId:"development/backend/regards/ingest/events/backend-ingest-events",id:"development/backend/regards/ingest/events/backend-ingest-events",title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/docs/development/backend/regards/ingest/events/events.md",sourceDirName:"development/backend/regards/ingest/events",slug:"/development/backend/services/ingest/events/",permalink:"/docs/development/backend/services/ingest/events/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/events/events.md",tags:[],version:"current",frontMatter:{id:"backend-ingest-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/ingest/events/"},sidebar:"dev",previous:{title:"SIP post processing",permalink:"/docs/development/backend/services/ingest/plugins/sip-post-processing/"},next:{title:"Overview",permalink:"/docs/development/backend/services/lta-manager/overview/"}},c={},l=[],d={toc:l},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"To know more about bus message mechanism look at ",(0,a.yg)("a",{parentName:"p",href:"/docs/development/backend/framework/starters/amqp/"},"AMQP starter"))),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Event"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Target"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Mode"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-ingest/blob/master/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/event/SIPEvent.java"},"SIPEvent")),(0,a.yg)("td",{parentName:"tr",align:"left"},"ONE_PER_MICROSERVICE_TYPE"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Published  to inform system for all SIPEntity state modification")))))}g.isMDXComponent=!0}}]);