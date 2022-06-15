"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[70165],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),v=o,m=p["".concat(c,".").concat(v)]||p[v]||d[v]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45782:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],s={id:"backend-services-overview",title:"REGARDS services overview",sidebar_label:"Overview",slug:"/development/backend/services/overview/"},c=void 0,l={unversionedId:"development/backend/regards/backend-services-overview",id:"version-1.8.0/development/backend/regards/backend-services-overview",title:"REGARDS services overview",description:"How to access API endpoints",source:"@site/versioned_docs/version-1.8.0/development/backend/regards/overview.md",sourceDirName:"development/backend/regards",slug:"/development/backend/services/overview/",permalink:"/docs/1.8.0/development/backend/services/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.0/development/backend/regards/overview.md",tags:[],version:"1.8.0",frontMatter:{id:"backend-services-overview",title:"REGARDS services overview",sidebar_label:"Overview",slug:"/development/backend/services/overview/"},sidebar:"dev",previous:{title:"Plugins API",permalink:"/docs/1.8.0/development/backend/framework/plugins-api/"},next:{title:"Overview",permalink:"/docs/1.8.0/development/backend/services/authentication/overview/"}},u={},d=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",level:2},{value:"Access microservices directly",id:"access-microservices-directly",level:3},{value:"Access from outside",id:"access-from-outside",level:3}],p={toc:d};function v(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),(0,i.kt)("h3",{id:"access-microservices-directly"},"Access microservices directly"),(0,i.kt)("p",null,"You can access each REGARDS API endpoint thanks to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Curl")," request."),(0,i.kt)("p",null,"You can request without authentication by adding the REGARDS project in the request thanks to the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<microservice port>/<endpoint>?scope=<project>\n")),(0,i.kt)("p",null,"Or you can authenticate to access admin endpoints first. To do so, use the ",(0,i.kt)("a",{parentName:"p",href:"../authentication/api/"},"authentication API")," to get a verified REGARDS token and then add the token to the request headers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<microservice port>/<endpoint> -H 'Authorization: bearer <token>'\n")),(0,i.kt)("h3",{id:"access-from-outside"},"Access from outside"),(0,i.kt)("p",null,"To access endpoints from ",(0,i.kt)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/<microservice>/api/v1/<endpoint>\n")),(0,i.kt)("p",null,"Alternatively, you can access endpoints from ",(0,i.kt)("inlineCode",{parentName:"p"},"outside"),' through the "gateway" microservice using an external Oauth2 token direclty (one that was not generated by REGARDS).'),(0,i.kt)("p",null,'To do so, you must first authenticate through a configured "Service Provider" authentication plugin, see the ',(0,i.kt)("a",{parentName:"p",href:"../authentication/plugins/"},"authentication plugins")," page."),(0,i.kt)("p",null,'Once you have successfully authenticated and retrieved an external Oauth2 token, you can use it against the "gateway" microservice which will verify its validity and allow the request to reach its destination inside the REGARDS microservices using a hidden, internal REGARDS token.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/<microservice>/api/v1/<endpoint> -H 'Authorization: bearer <sso token>'\n")))}v.isMDXComponent=!0}}]);