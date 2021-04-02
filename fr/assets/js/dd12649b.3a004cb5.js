(window.webpackJsonp=window.webpackJsonp||[]).push([[2258],{2332:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(2708)),c={id:"backend-architecture-overview",title:"REGARDS architecture overview",sidebar_label:"Overview",slug:"/development/backend/architecture/overview/"},o={unversionedId:"development/backend/architecture/backend-architecture-overview",id:"version-1.4.0/development/backend/architecture/backend-architecture-overview",isDocsHomePage:!1,title:"REGARDS architecture overview",description:"Microservice architecture",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/architecture/overview.md",slug:"/development/backend/architecture/overview/",permalink:"/fr/docs/1.4.0/development/backend/architecture/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/architecture/overview.md",version:"1.4.0",sidebar_label:"Overview",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS architecture concepts",permalink:"/fr/docs/1.4.0/development/backend/architecture/concepts/"},next:{title:"Getting started with REGARDS framework",permalink:"/fr/docs/1.4.0/development/backend/framework/getting-started/"}},s=[{value:"Microservice architecture",id:"microservice-architecture",children:[]}],l={toc:s};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"microservice-architecture"},"Microservice architecture"),Object(i.b)("p",null,"To meet CNES requirements, REGARDS deploys a set of business services within a distributed and modular microservices architecture."),Object(i.b)("p",null,"These microservices are highly cohesive and loosely coupled Restful web services, interacting inside the cluster using synchronous (REST through HTTP protocol) and asynchronous (event bus through AMQP protocol) communications."),Object(i.b)("p",null,"Each microservice is structured in modules, being themselves structured in layer architecture. Each service matches an elementary REGARDS function (single accountability), and has its own execution context and its own configuration (modularity). It is built, tested and deployed separately from other services (modularity, maintainability, scalability) and exposes a REST API (HATEOAS) which relies on a service contract."),Object(i.b)("p",null,"Such granular architecture ensures we can provide a strong ",Object(i.b)("strong",{parentName:"p"},"horizontal scalability"),". Several instances of the same service can be simultaneously deployed on the system, allowing it to bear load spin-up thanks to the ",Object(i.b)("em",{parentName:"p"},"\u201cload balancing\u201d")," mechanism. Such functionality allows the system to be highly fault-tolerant and resiliant to load fluctuation. On top of that, GUIs are built using responsive web architecture."),Object(i.b)("p",null,Object(i.b)("img",{src:r(2753).default})),Object(i.b)("p",null,"The here-above diagram describes principles of such architecture.",Object(i.b)("br",{parentName:"p"}),"\n","REGARDS microservices are surrounded by several components : a gateway providing a single point to allow external world to interact with our system, a discovery and registration service to let service know each other and load balancing; and finally a centralized configuration holding each kind of microservice configuration."),Object(i.b)("p",null,"The key points are that all microservices are ",Object(i.b)("strong",{parentName:"p"},"stateless")," and expose a ",Object(i.b)("strong",{parentName:"p"},"REST API")," over ",Object(i.b)("strong",{parentName:"p"},"HTTP"),". No matter what programming language is used as long as it exposes an API."))}u.isMDXComponent=!0},2708:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return v}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,v=d["".concat(c,".").concat(b)]||d[b]||p[b]||i;return r?a.a.createElement(v,o(o({ref:t},l),{},{components:r})):a.a.createElement(v,o({ref:t},l))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2753:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/microservice_architecture-8a5161937f1de10180015eb9d0ddd6ce.png"}}]);