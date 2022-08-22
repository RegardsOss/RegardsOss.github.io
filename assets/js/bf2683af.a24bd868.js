"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[58984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},27568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"backend-framework-starters-authentication",title:"Authentication starter",slug:"/development/backend/framework/starters/authentication/"},i=void 0,u={unversionedId:"development/backend/framework/starters/backend-framework-starters-authentication",id:"development/backend/framework/starters/backend-framework-starters-authentication",title:"Authentication starter",description:"Purpose",source:"@site/docs/development/backend/framework/starters/authentication-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/authentication/",permalink:"/docs/development/backend/framework/starters/authentication/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters/authentication-starter.md",tags:[],version:"current",frontMatter:{id:"backend-framework-starters-authentication",title:"Authentication starter",slug:"/development/backend/framework/starters/authentication/"},sidebar:"dev",previous:{title:"AMQP starter",permalink:"/docs/development/backend/framework/starters/amqp/"},next:{title:"Cloud starter",permalink:"/docs/development/backend/framework/starters/cloud/"}},s={},l=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to use",id:"how-to-use",level:3},{value:"How to override default behaviour",id:"how-to-override-default-behaviour",level:3}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This starter is used to retrieve current user properties regardless of the authentication management."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>authentication-regards-starter</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"Business dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>authentication-regards</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"Dependency :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None")),(0,a.kt)("p",null,"Used by :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../security/"},"Security starter"))),(0,a.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,a.kt)("p",null,"Starter autoconfigures beans ",(0,a.kt)("strong",{parentName:"p"},"unless it already exists")," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IAuthenticationResolver")," to retrieve current user and role at runtime,")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"In production, the implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"IAuthenticationResolver")," must be ",(0,a.kt)("strong",{parentName:"p"},"thread safe"),".")),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"Just inject bean in your component."),(0,a.kt)("h3",{id:"how-to-override-default-behaviour"},"How to override default behaviour"),(0,a.kt)("p",null,"Create your own ",(0,a.kt)("inlineCode",{parentName:"p"},"IAuthenticationResolver")," bean to implement your own authentication info retrieval."))}d.isMDXComponent=!0}}]);