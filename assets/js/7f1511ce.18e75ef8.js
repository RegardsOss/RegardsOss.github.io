"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[82996],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>u});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=p(t),m=a,u=g["".concat(c,".").concat(m)]||g[m]||d[m]||s;return t?n.createElement(u,o(o({ref:r},l),{},{components:t})):n.createElement(u,o({ref:r},l))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16109:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(58168),a=(t(96540),t(15680));const s={id:"backend-framework-starters-swagger",title:"Swagger starter",slug:"/development/backend/framework/starters/swagger/"},o=void 0,i={unversionedId:"development/backend/framework/starters/backend-framework-starters-swagger",id:"version-1.14/development/backend/framework/starters/backend-framework-starters-swagger",title:"Swagger starter",description:"Pre-requisite:",source:"@site/versioned_docs/version-1.14/development/backend/framework/starters/swagger-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/swagger/",permalink:"/docs/development/backend/framework/starters/swagger/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/framework/starters/swagger-starter.md",tags:[],version:"1.14",frontMatter:{id:"backend-framework-starters-swagger",title:"Swagger starter",slug:"/development/backend/framework/starters/swagger/"},sidebar:"dev",previous:{title:"STAF starter",permalink:"/docs/development/backend/framework/starters/staf/"},next:{title:"Web socket starter",permalink:"/docs/development/backend/framework/starters/web-socket/"}},c={},p=[],l={toc:p},g="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(g,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Pre-requisite:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"server.address=localhost # Spring boot server address\nserver.port=8080 # Spring boot server port\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"regards.swagger.enabled=false # Disable swagger support\nregards.swagger.api-name=API name # API name\nregards.swagger.api-title=API title # API title\nregards.swagger.api-description=API description # API description\nregards.swagger.api-license=API license # API license\nregards.swagger.api-version=API version # API version\n")))}d.isMDXComponent=!0}}]);