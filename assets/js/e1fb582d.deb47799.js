"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[46226],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),v=s(t),d=i,f=v["".concat(c,".").concat(d)]||v[d]||p[d]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=v;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},53827:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return v}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/services/notifier/overview/"},c=void 0,s={unversionedId:"development/backend/regards/notifier/backend-notifier-overview",id:"version-1.5.0/development/backend/regards/notifier/backend-notifier-overview",title:"Notifier microservice",description:"Overview",source:"@site/versioned_docs/version-1.5.0/development/backend/regards/notifier/notifier.md",sourceDirName:"development/backend/regards/notifier",slug:"/development/backend/services/notifier/overview/",permalink:"/docs/1.5.0/development/backend/services/notifier/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/regards/notifier/notifier.md",tags:[],version:"1.5.0",frontMatter:{id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/services/notifier/overview/"},sidebar:"version-1.5.0/dev",previous:{title:"Feature Factory",permalink:"/docs/1.5.0/development/backend/services/fem/plugins/feature-factory/"},next:{title:"Notifier",permalink:"/docs/1.5.0/development/backend/services/notifier/api/"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Available APIs",id:"available-apis",children:[],level:2},{value:"Available Plugins",id:"available-plugins",children:[],level:2}],p={toc:u};function v(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Notifier")," reponsabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Receive JSON notification,"),(0,o.kt)("li",{parentName:"ul"},"Dispatch them to various recipients according to matching rules.")),(0,o.kt)("h2",{id:"available-apis"},"Available APIs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../api/configuration/"},"Configuration API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../api/"},"API"))),(0,o.kt)("h2",{id:"available-plugins"},"Available Plugins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../plugins#rule-matcher-plugins"},"Rule matchers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../plugins#recipient-sender-plugins"},"Recipient senders"))))}v.isMDXComponent=!0}}]);