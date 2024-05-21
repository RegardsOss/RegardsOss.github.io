"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[27306],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),v=i,g=d["".concat(c,".").concat(v)]||d[v]||p[v]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(58168),i=(n(96540),n(15680));const a={id:"backend-authentication-overview",title:"RS-AUTHENTICATION microservice",sidebar_label:"Overview",slug:"/development/backend/services/authentication/overview/"},o=void 0,s={unversionedId:"development/backend/regards/authentication/backend-authentication-overview",id:"version-1.11.0/development/backend/regards/authentication/backend-authentication-overview",title:"RS-AUTHENTICATION microservice",description:"The RS-AUTHENTICATION multi-tenant microservice allows users to authenticate.",source:"@site/versioned_docs/version-1.11.0/development/backend/regards/authentication/authentication.md",sourceDirName:"development/backend/regards/authentication",slug:"/development/backend/services/authentication/overview/",permalink:"/docs/1.11.0/development/backend/services/authentication/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/regards/authentication/authentication.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-authentication-overview",title:"RS-AUTHENTICATION microservice",sidebar_label:"Overview",slug:"/development/backend/services/authentication/overview/"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.11.0/development/backend/services/overview/"},next:{title:"Retrieve token REST",permalink:"/docs/1.11.0/development/backend/services/authentication/api-guides/retrieve-token-rest/"}},c={},l=[{value:"API Guides",id:"api-guides",level:3},{value:"REST API",id:"rest-api",level:3},{value:"Contributors guides",id:"contributors-guides",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The RS-AUTHENTICATION multi-tenant microservice allows users to authenticate.",(0,i.yg)("br",{parentName:"p"}),"\n","To do so, RS-AUTHENTICATION provides these functionnalities:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"allow authentication using REGARDS internal user base"),(0,i.yg)("li",{parentName:"ul"},"allow fully externalized authentication system to connect through external SSO"),(0,i.yg)("li",{parentName:"ul"},"allow connection using deported external user base (LDAP,...).")),(0,i.yg)("h3",{id:"api-guides"},"API Guides"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/services/authentication/api-guides/retrieve-token-rest/"},"Get token using REST API")," shows how to retrieve a REGARDS token using user and password and use it in following requests.  ")),(0,i.yg)("h3",{id:"rest-api"},"REST API"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/services/authentication/api-swagger"},"RS-AUTHENTICATION microservice REST API")," auto generated using OpenAPI.  ")),(0,i.yg)("h3",{id:"contributors-guides"},"Contributors guides"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/services/authentication/contributor-guides/plugins/"},"Authentication plugins")," shows to contributors how to implement new authentication plugin")))}p.isMDXComponent=!0}}]);