"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[56712],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),v=i,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},13811:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={id:"backend-architecture-overview",title:"REGARDS architecture overview",sidebar_label:"Overview",slug:"/development/backend/architecture/overview/"},s=void 0,l={unversionedId:"development/backend/architecture/backend-architecture-overview",id:"version-1.5.0/development/backend/architecture/backend-architecture-overview",isDocsHomePage:!1,title:"REGARDS architecture overview",description:"Microservice architecture",source:"@site/versioned_docs/version-1.5.0/development/backend/architecture/overview.md",sourceDirName:"development/backend/architecture",slug:"/development/backend/architecture/overview/",permalink:"/docs/1.5.0/development/backend/architecture/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/architecture/overview.md",tags:[],version:"1.5.0",frontMatter:{id:"backend-architecture-overview",title:"REGARDS architecture overview",sidebar_label:"Overview",slug:"/development/backend/architecture/overview/"},sidebar:"version-1.5.0/dev",previous:{title:"Concepts",permalink:"/docs/1.5.0/development/backend/architecture/concepts/"},next:{title:"Getting started",permalink:"/docs/1.5.0/development/backend/framework/getting-started/"}},u=[{value:"Microservice architecture",id:"microservice-architecture",children:[]}],d={toc:u};function p(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"microservice-architecture"},"Microservice architecture"),(0,a.kt)("p",null,"To meet CNES requirements, REGARDS deploys a set of business services within a distributed and modular microservices architecture."),(0,a.kt)("p",null,"These microservices are highly cohesive and loosely coupled Restful web services, interacting inside the cluster using synchronous (REST through HTTP protocol) and asynchronous (event bus through AMQP protocol) communications."),(0,a.kt)("p",null,"Each microservice is structured in modules, being themselves structured in layer architecture. Each service matches an elementary REGARDS function (single accountability), and has its own execution context and its own configuration (modularity). It is built, tested and deployed separately from other services (modularity, maintainability, scalability) and exposes a REST API (HATEOAS) which relies on a service contract."),(0,a.kt)("p",null,"Such granular architecture ensures we can provide a strong ",(0,a.kt)("strong",{parentName:"p"},"horizontal scalability"),". Several instances of the same service can be simultaneously deployed on the system, allowing it to bear load spin-up thanks to the ",(0,a.kt)("em",{parentName:"p"},"\u201cload balancing\u201d")," mechanism. Such functionality allows the system to be highly fault-tolerant and resiliant to load fluctuation. On top of that, GUIs are built using responsive web architecture."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(65965).Z})),(0,a.kt)("p",null,"The here-above diagram describes principles of such architecture.",(0,a.kt)("br",{parentName:"p"}),"\n","REGARDS microservices are surrounded by several components : a gateway providing a single point to allow external world to interact with our system, a discovery and registration service to let service know each other and load balancing; and finally a centralized configuration holding each kind of microservice configuration."),(0,a.kt)("p",null,"The key points are that all microservices are ",(0,a.kt)("strong",{parentName:"p"},"stateless")," and expose a ",(0,a.kt)("strong",{parentName:"p"},"REST API")," over ",(0,a.kt)("strong",{parentName:"p"},"HTTP"),". No matter what programming language is used as long as it exposes an API."))}p.isMDXComponent=!0},65965:function(e,t,r){t.Z=r.p+"assets/images/microservice_architecture-8a5161937f1de10180015eb9d0ddd6ce.png"}}]);