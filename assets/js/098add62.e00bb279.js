"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[55100],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>k});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),l=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},m=function(e){var r=l(e.components);return a.createElement(i.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(t),u=n,k=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return t?a.createElement(k,s(s({ref:r},m),{},{components:t})):a.createElement(k,s({ref:r},m))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[d]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85252:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(87462),n=(t(67294),t(3905));const o={id:"backend-framework-starters-microservice-core",title:"Microservice core starter",slug:"/development/backend/framework/starters/microservice-core/"},s=void 0,c={unversionedId:"development/backend/framework/starters/backend-framework-starters-microservice-core",id:"version-1.14/development/backend/framework/starters/backend-framework-starters-microservice-core",title:"Microservice core starter",description:"Purpose",source:"@site/versioned_docs/version-1.14/development/backend/framework/starters/microservice-core-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/microservice-core/",permalink:"/docs/1.14/development/backend/framework/starters/microservice-core/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/framework/starters/microservice-core-starter.md",tags:[],version:"1.14",frontMatter:{id:"backend-framework-starters-microservice-core",title:"Microservice core starter",slug:"/development/backend/framework/starters/microservice-core/"},sidebar:"dev",previous:{title:"JPA multitenant starter",permalink:"/docs/1.14/development/backend/framework/starters/jpa-multitenant/"},next:{title:"Microservice starter",permalink:"/docs/1.14/development/backend/framework/starters/microservice/"}},i={},l=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2}],m={toc:l},d="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"This starter is just an utility wrapper for all REGARDS microservice base dependencies."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-core-starter</artifactId>\n</dependency>\n")),(0,n.kt)("p",null,"Dependencies :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/development/backend/framework/starters/microservice/"},"Microservice starter"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/development/backend/framework/starters/multitenant/"},"Multitenant starter")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/development/backend/framework/starters/module/"},"Module starter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/development/backend/framework/starters/gson/"},"GSON starter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/development/backend/framework/starters/security/"},"Security starter"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/development/backend/framework/starters/multitenant/"},"Multitenant starter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/development/backend/framework/starters/authentication/"},"Authentication starter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/development/backend/framework/starters/amqp/"},"AMQP starter")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/development/backend/framework/starters/swagger/"},"Swagger starter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/1.14/development/backend/framework/starters/cloud/"},"Cloud starter"))))}p.isMDXComponent=!0}}]);