"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[94642],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57424:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],c={id:"backend-framework-starters-microservice-core",title:"Microservice core starter",slug:"/development/backend/framework/starters/microservice-core/"},s=void 0,l={unversionedId:"development/backend/framework/starters/backend-framework-starters-microservice-core",id:"version-1.8.0/development/backend/framework/starters/backend-framework-starters-microservice-core",title:"Microservice core starter",description:"Purpose",source:"@site/versioned_docs/version-1.8.0/development/backend/framework/starters/microservice-core-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/microservice-core/",permalink:"/docs/1.8.0/development/backend/framework/starters/microservice-core/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.0/development/backend/framework/starters/microservice-core-starter.md",tags:[],version:"1.8.0",frontMatter:{id:"backend-framework-starters-microservice-core",title:"Microservice core starter",slug:"/development/backend/framework/starters/microservice-core/"},sidebar:"dev",previous:{title:"JPA multitenant starter",permalink:"/docs/1.8.0/development/backend/framework/starters/jpa-multitenant/"},next:{title:"Microservice starter",permalink:"/docs/1.8.0/development/backend/framework/starters/microservice/"}},u={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2}],m={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"This starter is just an utility wrapper for all REGARDS microservice base dependencies."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-core-starter</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"Dependencies :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../microservice/"},"Microservice starter"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../multitenant/"},"Multitenant starter")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../module/"},"Module starter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../gson/"},"GSON starter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../security/"},"Security starter"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../multitenant/"},"Multitenant starter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../authentication/"},"Authentication starter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../amqp/"},"AMQP starter")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../swagger/"},"Swagger starter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../cloud/"},"Cloud starter"))))}d.isMDXComponent=!0}}]);