"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87506],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(m,c(c({ref:r},l),{},{components:t})):n.createElement(m,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},30638:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],s={id:"backend-framework-starters-cloud",title:"Cloud starter",slug:"/development/backend/framework/starters/cloud/"},i=void 0,u={unversionedId:"development/backend/framework/starters/backend-framework-starters-cloud",id:"development/backend/framework/starters/backend-framework-starters-cloud",isDocsHomePage:!1,title:"Cloud starter",description:"Purpose",source:"@site/docs/development/backend/framework/starters/cloud-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/cloud/",permalink:"/fr/docs/development/backend/framework/starters/cloud/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters/cloud-starter.md",version:"current",frontMatter:{id:"backend-framework-starters-cloud",title:"Cloud starter",slug:"/development/backend/framework/starters/cloud/"},sidebar:"dev",previous:{title:"Authentication starter",permalink:"/fr/docs/development/backend/framework/starters/authentication/"},next:{title:"Encryption starter",permalink:"/fr/docs/development/backend/framework/starters/encryption/"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]}],d={toc:l};function p(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This starter enables Eureka client discovery."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>cloud-regards-starter</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"No business dependency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Disable cloud support\nregards.cloud.enabled=false\n")))}p.isMDXComponent=!0}}]);