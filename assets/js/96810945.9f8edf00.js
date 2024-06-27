"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[2951],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={layout:"classic-docs",title:"Microservice multitenant database","short-title":"Multitenant Database"},i=void 0,s={unversionedId:"development/backend/framework/modules/multitenant-database",id:"version-1.12.0/development/backend/framework/modules/multitenant-database",title:"Microservice multitenant database",description:"Overall",source:"@site/versioned_docs/version-1.12.0/development/backend/framework/modules/multitenant-database.md",sourceDirName:"development/backend/framework/modules",slug:"/development/backend/framework/modules/multitenant-database",permalink:"/docs/1.12.0/development/backend/framework/modules/multitenant-database",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/framework/modules/multitenant-database.md",tags:[],version:"1.12.0",frontMatter:{layout:"classic-docs",title:"Microservice multitenant database","short-title":"Multitenant Database"}},l={},d=[{value:"Overall",id:"overall",level:2},{value:"Initial and static configuration",id:"initial-and-static-configuration",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overall"},"Overall"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(64331).Z,width:"1069",height:"431"})),(0,r.kt)("p",null,'Every microservice generated with the "microservice-archetype" use the "jpa-multitenant-regards" module to handle connection to databases.'),(0,r.kt)("p",null,'To do so, every microservice include a "remote-tenant-resolver" module which is used to communicate with the central "administration-service".',(0,r.kt)("br",{parentName:"p"}),"\n",'The only exception is for microservice "administration" which includes a "local-tenant-resolver" to use internal services instead of Rest controllers.'),(0,r.kt)("p",null,'At startup the "jpa-multitenant-regards" module is initialized with the here-under steps :'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Retrieve all tenants"),(0,r.kt)("li",{parentName:"ol"},"For each tenants retrieve microservices database connections."),(0,r.kt)("li",{parentName:"ol"},"Create the pool of connections."),(0,r.kt)("li",{parentName:"ol"},"Listen to tenant and connection event to handle a new project or an update on an existing connection.  ")),(0,r.kt)("h2",{id:"initial-and-static-configuration"},"Initial and static configuration"),(0,r.kt)("p",null,'At startup if a microservice database connections are not configured in the administration microservice, then a default project is initialized with default database connections. This project and connections are defined in the main "application.properties "file of the microservice. The available configuration values are :'),(0,r.kt)("p",null,"Disable JPA multitenant support  (default true if not present)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.enabled"),"=true"),(0,r.kt)("p",null,"Activate embedded mode with HSQLDB",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.embedded"),"=true"),(0,r.kt)("p",null,"Path for embedded databases files",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.embeddedPath"),"=target"),(0,r.kt)("p",null,"Not mandatory if embedded mode is activated",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.dialect"),"=org.hibernate.dialect.PostgreSQLDialect"),(0,r.kt)("p",null,"database user name for tenant x",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".tenant"),"=example"),(0,r.kt)("p",null,"database url for tenant x (Not mandatory if embedded mode is activated)\n",(0,r.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".url"),"=jdbc:postgresql://localhost:5432/test1"),(0,r.kt)("p",null,"database user name for tenant x (Not mandatory if embedded mode is activated)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".userName"),"=postgres"),(0,r.kt)("p",null,"database user password for tenant x (Not mandatory if embedded mode is activated)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".password"),"=postgres  "),(0,r.kt)("p",null,"database driver for tenant x (Not mandatory if embedded mode is activated)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".driverClassName"),"=org.postgresql.Driver"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"x")," : Integer value for tenant index starting with 0."))}m.isMDXComponent=!0},64331:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jpa-c95d1c9086d0ca823f2c745c5022908a.png"}}]);