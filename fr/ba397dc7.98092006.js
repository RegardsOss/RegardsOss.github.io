(window.webpackJsonp=window.webpackJsonp||[]).push([[1945],{2015:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(2701)),i={layout:"classic-docs",title:"Microservice multitenant database","short-title":"Multitenant Database"},c={unversionedId:"development/backend/framework/modules/multitenant-database",id:"version-1.4.0/development/backend/framework/modules/multitenant-database",isDocsHomePage:!1,title:"Microservice multitenant database",description:"Overall",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/modules/multitenant-database.md",slug:"/development/backend/framework/modules/multitenant-database",permalink:"/fr/docs/development/backend/framework/modules/multitenant-database",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/modules/multitenant-database.md",version:"1.4.0"},s=[{value:"Overall",id:"overall",children:[]},{value:"Initial and static configuration",id:"initial-and-static-configuration",children:[]}],l={toc:s};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overall"},"Overall"),Object(o.b)("p",null,Object(o.b)("img",{src:n(2736).default})),Object(o.b)("p",null,'Every microservice generated with the "microservice-archetype" use the "jpa-multitenant-regards" module to handle connection to databases.'),Object(o.b)("p",null,'To do so, every microservice include a "remote-tenant-resolver" module which is used to communicate with the central "administration-service".',Object(o.b)("br",{parentName:"p"}),"\n",'The only exception is for microservice "administration" which includes a "local-tenant-resolver" to use internal services instead of Rest controllers.'),Object(o.b)("p",null,'At startup the "jpa-multitenant-regards" module is initialized with the here-under steps :'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Retrieve all tenants"),Object(o.b)("li",{parentName:"ol"},"For each tenants retrieve microservices database connections."),Object(o.b)("li",{parentName:"ol"},"Create the pool of connections."),Object(o.b)("li",{parentName:"ol"},"Listen to tenant and connection event to handle a new project or an update on an existing connection.  ")),Object(o.b)("h2",{id:"initial-and-static-configuration"},"Initial and static configuration"),Object(o.b)("p",null,'At startup if a microservice database connections are not configured in the administration microservice, then a default project is initialized with default database connections. This project and connections are defined in the main "application.properties "file of the microservice. The available configuration values are :'),Object(o.b)("p",null,"Disable JPA multitenant support  (default true if not present)",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"regards.jpa.multitenant.enabled"),"=true"),Object(o.b)("p",null,"Activate embedded mode with HSQLDB",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"regards.jpa.multitenant.embedded"),"=true"),Object(o.b)("p",null,"Path for embedded databases files",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"regards.jpa.multitenant.embeddedPath"),"=target"),Object(o.b)("p",null,"Not mandatory if embedded mode is activated",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"regards.jpa.multitenant.dialect"),"=org.hibernate.dialect.PostgreSQLDialect"),Object(o.b)("p",null,"database user name for tenant x",Object(o.b)("br",null),"\n",Object(o.b)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".tenant"),"=example"),Object(o.b)("p",null,"database url for tenant x (Not mandatory if embedded mode is activated)\n",Object(o.b)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".url"),"=jdbc:postgresql://localhost:5432/test1"),Object(o.b)("p",null,"database user name for tenant x (Not mandatory if embedded mode is activated)",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".userName"),"=postgres"),Object(o.b)("p",null,"database user password for tenant x (Not mandatory if embedded mode is activated)",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".password"),"=postgres  "),Object(o.b)("p",null,"database driver for tenant x (Not mandatory if embedded mode is activated)",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"regards.jpa.multitenant.tenants","[x]",".driverClassName"),"=org.postgresql.Driver"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"x")," : Integer value for tenant index starting with 0."))}d.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2736:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/jpa-c95d1c9086d0ca823f2c745c5022908a.png"}}]);