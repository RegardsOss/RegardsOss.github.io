"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[64140],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>v});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=l(n),m=r,v=g["".concat(c,".").concat(m)]||g[m]||p[m]||s;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const s={id:"backend-catalog-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/catalog/events/"},o=void 0,i={unversionedId:"development/backend/regards/catalog/events/backend-catalog-events",id:"version-1.14/development/backend/regards/catalog/events/backend-catalog-events",title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/versioned_docs/version-1.14/development/backend/regards/catalog/events/events.md",sourceDirName:"development/backend/regards/catalog/events",slug:"/development/backend/services/catalog/events/",permalink:"/docs/development/backend/services/catalog/events/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/catalog/events/events.md",tags:[],version:"1.14",frontMatter:{id:"backend-catalog-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/catalog/events/"},sidebar:"dev",previous:{title:"Search engine",permalink:"/docs/development/backend/services/catalog/search-engine-plugins/"},next:{title:"Overview",permalink:"/docs/development/backend/services/dam/overview/"}},c={},l=[],d={toc:l},g="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"To know more about bus message mechanism look at ",(0,r.yg)("a",{parentName:"p",href:"/docs/development/backend/framework/starters/amqp/"},"AMQP starter"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Event"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Target"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Mode"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/event/LinkPluginsDatasetsEvent.java"},"LinkPluginsDatasetsEvent")),(0,r.yg)("td",{parentName:"tr",align:"left"},"ALL"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Broadcast"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Published when a link between a business service plugin and a dataset is created")))))}p.isMDXComponent=!0}}]);