"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[85512],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(r),s=a,g=c["".concat(p,".").concat(s)]||c[s]||u[s]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},54186:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={},p=void 0,m={unversionedId:"development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0",id:"version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0",title:"migration-1.1.0-1.2.0",description:"V1.1.0 to V1.2.0 migration",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0.md",sourceDirName:"development/backend/regards/fem/api/amqp/migrations",slug:"/development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0",permalink:"/docs/1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/migrations/migration-1.1.0-1.2.0.md",tags:[],version:"1.4.0",frontMatter:{}},d=[{value:"V1.1.0 to V1.2.0 migration",id:"v110-to-v120-migration",children:[],level:4}],u={toc:d};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"v110-to-v120-migration"},"V1.1.0 to V1.2.0 migration"),(0,o.kt)("p",null,"Removed properties (replaced by headers):"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"requestId"),(0,o.kt)("td",{parentName:"tr",align:null},"String of max 36 characters long")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"requestOwner"),(0,o.kt)("td",{parentName:"tr",align:null},"String of max 128 characters long")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"requestDate"),(0,o.kt)("td",{parentName:"tr",align:null},"ISO 8601 date")))),(0,o.kt)("p",null,"Removed headers:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Header"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"regards.converter"),(0,o.kt)("td",{parentName:"tr",align:null},"GSON")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"regards.type"),(0,o.kt)("td",{parentName:"tr",align:null},"fr.cnes.regards.modules.feature.dto.event.in.*")))),(0,o.kt)("p",null,"New headers:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Header"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"regards.request.id"),(0,o.kt)("td",{parentName:"tr",align:null},"String of max 36 characters long")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"regards.request.date"),(0,o.kt)("td",{parentName:"tr",align:null},"ISO 8601 date")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"regards.request.owner"),(0,o.kt)("td",{parentName:"tr",align:null},"String of max 128 characters long")))))}c.isMDXComponent=!0}}]);