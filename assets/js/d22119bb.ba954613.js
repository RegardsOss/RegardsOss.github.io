"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[40671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69651:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={layout:"classic-docs",title:"Microservice multitenant database","short-title":"Multitenant Database"},l=void 0,d={unversionedId:"development/backend/framework/modules/multitenant-database",id:"version-1.7.1/development/backend/framework/modules/multitenant-database",title:"Microservice multitenant database",description:"Overall",source:"@site/versioned_docs/version-1.7.1/development/backend/framework/modules/multitenant-database.md",sourceDirName:"development/backend/framework/modules",slug:"/development/backend/framework/modules/multitenant-database",permalink:"/docs/1.7.1/development/backend/framework/modules/multitenant-database",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/framework/modules/multitenant-database.md",tags:[],version:"1.7.1",frontMatter:{layout:"classic-docs",title:"Microservice multitenant database","short-title":"Multitenant Database"}},c={},u=[{value:"Overall",id:"overall",level:2},{value:"Initial and static configuration",id:"initial-and-static-configuration",level:2}],p={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overall"},"Overall"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(64331).Z,width:"1069",height:"431"})),(0,o.kt)("p",null,'Every microservice generated with the "microservice-archetype" use the "jpa-multitenant-regards" module to handle connection to databases.'),(0,o.kt)("p",null,'To do so, every microservice include a "remote-tenant-resolver" module which is used to communicate with the central "administration-service".',(0,o.kt)("br",{parentName:"p"}),"\n",'The only exception is for microservice "administration" which includes a "local-tenant-resolver" to use internal services instead of Rest controllers.'),(0,o.kt)("p",null,'At startup the "jpa-multitenant-regards" module is initialized with the here-under steps :'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Retrieve all tenants"),(0,o.kt)("li",{parentName:"ol"},"For each tenants retrieve microservices database connections."),(0,o.kt)("li",{parentName:"ol"},"Create the pool of connections."),(0,o.kt)("li",{parentName:"ol"},"Listen to tenant and connection event to handle a new project or an update on an existing connection.  ")),(0,o.kt)("h2",{id:"initial-and-static-configuration"},"Initial and static configuration"),(0,o.kt)("p",null,'At startup if a microservice database connections are not configured in the administration microservice, then a default project is initialized with default database connections. This project and connections are defined in the main "application.properties "file of the microservice. The available configuration values are :'),(0,o.kt)("p",null,"Disable JPA multitenant support  (default true if not present)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.enabled"),"=true"),(0,o.kt)("p",null,"Activate embedded mode with HSQLDB",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.embedded"),"=true"),(0,o.kt)("p",null,"Path for embedded databases files",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.embeddedPath"),"=target"),(0,o.kt)("p",null,"Not mandatory if embedded mode is activated",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.dialect"),"=org.hibernate.dialect.PostgreSQLDialect"),(0,o.kt)("p",null,"database user name for tenant x",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".tenant"),"=example"),(0,o.kt)("p",null,"database url for tenant x (Not mandatory if embedded mode is activated)\n",(0,o.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".url"),"=jdbc:postgresql://localhost:5432/test1"),(0,o.kt)("p",null,"database user name for tenant x (Not mandatory if embedded mode is activated)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".userName"),"=postgres"),(0,o.kt)("p",null,"database user password for tenant x (Not mandatory if embedded mode is activated)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".password"),"=postgres  "),(0,o.kt)("p",null,"database driver for tenant x (Not mandatory if embedded mode is activated)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".driverClassName"),"=org.postgresql.Driver"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"x")," : Integer value for tenant index starting with 0."))}m.isMDXComponent=!0},64331:function(e,t,n){t.Z=n.p+"assets/images/jpa-c95d1c9086d0ca823f2c745c5022908a.png"}}]);