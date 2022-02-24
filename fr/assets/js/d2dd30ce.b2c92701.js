"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[70241],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12825:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"backend-fem-overview",title:"REGARDS feature management microservice",sidebar_label:"Overview",slug:"/development/backend/services/fem/overview/"},c=void 0,u={unversionedId:"development/backend/regards/fem/backend-fem-overview",id:"development/backend/regards/fem/backend-fem-overview",title:"REGARDS feature management microservice",description:"Overview",source:"@site/docs/development/backend/regards/fem/fem.md",sourceDirName:"development/backend/regards/fem",slug:"/development/backend/services/fem/overview/",permalink:"/fr/docs/development/backend/services/fem/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/fem.md",tags:[],version:"current",frontMatter:{id:"backend-fem-overview",title:"REGARDS feature management microservice",sidebar_label:"Overview",slug:"/development/backend/services/fem/overview/"},sidebar:"dev",previous:{title:"Geospatial features management",permalink:"/fr/docs/development/backend/services/dam/geo/"},next:{title:"Feature Manager configuration",permalink:"/fr/docs/development/backend/services/fem/api/configuration/"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Available APIs",id:"available-apis",children:[],level:2}],s={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Fem")," reponsabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Feature extraction thanks to one of ",(0,i.kt)("a",{parentName:"li",href:"../plugins/feature-factory/"},"IFeatureFactoryPlugin")," implementation,"),(0,i.kt)("li",{parentName:"ul"},"Feature creation,"),(0,i.kt)("li",{parentName:"ul"},"Feature update,"),(0,i.kt)("li",{parentName:"ul"},"Feature deletion.")),(0,i.kt)("h2",{id:"available-apis"},"Available APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/configuration/"},"Configuration REST API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/rest/"},"REST API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../api/amqp/"},"AMQP API"))))}m.isMDXComponent=!0}}]);