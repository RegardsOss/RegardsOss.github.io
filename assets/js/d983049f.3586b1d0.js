"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[41020],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),v=o,m=u["".concat(c,".").concat(v)]||u[v]||p[v]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"backend-services-overview",title:"REGARDS services overview",sidebar_label:"Overview",slug:"/development/backend/services/overview/"},i=void 0,s={unversionedId:"development/backend/regards/backend-services-overview",id:"version-1.6.0/development/backend/regards/backend-services-overview",title:"REGARDS services overview",description:"How to access API endpoints",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/overview.md",sourceDirName:"development/backend/regards",slug:"/development/backend/services/overview/",permalink:"/docs/1.6.0/development/backend/services/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/overview.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-services-overview",title:"REGARDS services overview",sidebar_label:"Overview",slug:"/development/backend/services/overview/"},sidebar:"version-1.6.0/dev",previous:{title:"Plugins API",permalink:"/docs/1.6.0/development/backend/framework/plugins-api/"},next:{title:"Overview",permalink:"/docs/1.6.0/development/backend/services/authentication/overview/"}},c={},l=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",level:2},{value:"Access microservices directly",id:"access-microservices-directly",level:3},{value:"Access from outside",id:"access-from-outside",level:3}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),(0,o.kt)("h3",{id:"access-microservices-directly"},"Access microservices directly"),(0,o.kt)("p",null,"You can access each REGARDS API endpoint thanks to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Curl")," request."),(0,o.kt)("p",null,"You can request without authentication by adding the REGARDS project in the request thanks to the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"scope")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<microservice port>/<endpoint>?scope=<project>\n")),(0,o.kt)("p",null,"Or you can authenticate to access admin endpoints first. To do so, use the ",(0,o.kt)("a",{parentName:"p",href:"../authentication/api/"},"authentication API")," to get a verified REGARDS token and then add the token to the request headers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<microservice port>/<endpoint> -H 'Authorization: bearer <token>'\n")),(0,o.kt)("h3",{id:"access-from-outside"},"Access from outside"),(0,o.kt)("p",null,"To access endpoints from ",(0,o.kt)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/<microservice>/api/v1/<endpoint>\n")),(0,o.kt)("p",null,"Alternatively, you can access endpoints from ",(0,o.kt)("inlineCode",{parentName:"p"},"outside"),' through the "gateway" microservice using an external Oauth2 token direclty (one that was not generated by REGARDS).'),(0,o.kt)("p",null,'To do so, you must first authenticate through a configured "Service Provider" authentication plugin, see the ',(0,o.kt)("a",{parentName:"p",href:"../authentication/plugins/"},"authentication plugins")," page."),(0,o.kt)("p",null,'Once you have successfully authenticated and retrieved an external Oauth2 token, you can use it against the "gateway" microservice which will verify its validity and allow the request to reach its destination inside the REGARDS microservices using a hidden, internal REGARDS token.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/<microservice>/api/v1/<endpoint> -H 'Authorization: bearer <sso token>'\n")))}p.isMDXComponent=!0}}]);