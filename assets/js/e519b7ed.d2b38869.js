"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[93923],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},17392:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var n=t(83117),o=t(80102),a=(t(67294),t(3905)),s=["components"],c={id:"backend-framework-starters-cloud",title:"Cloud starter",slug:"/development/backend/framework/starters/cloud/"},i=void 0,u={unversionedId:"development/backend/framework/starters/backend-framework-starters-cloud",id:"version-1.8.0/development/backend/framework/starters/backend-framework-starters-cloud",title:"Cloud starter",description:"Purpose",source:"@site/versioned_docs/version-1.8.0/development/backend/framework/starters/cloud-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/cloud/",permalink:"/docs/1.8.0/development/backend/framework/starters/cloud/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.0/development/backend/framework/starters/cloud-starter.md",tags:[],version:"1.8.0",frontMatter:{id:"backend-framework-starters-cloud",title:"Cloud starter",slug:"/development/backend/framework/starters/cloud/"},sidebar:"dev",previous:{title:"Authentication starter",permalink:"/docs/1.8.0/development/backend/framework/starters/authentication/"},next:{title:"Encryption starter",permalink:"/docs/1.8.0/development/backend/framework/starters/encryption/"}},l={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2}],p={toc:d};function f(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This starter enables Eureka client discovery."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>cloud-regards-starter</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"No business dependency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Disable cloud support\nregards.cloud.enabled=false\n")))}f.isMDXComponent=!0}}]);