(window.webpackJsonp=window.webpackJsonp||[]).push([[1788],{1858:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(2701)),i={id:"backend-framework-starters-jpa-multitenant",title:"JPA multitenant starter",slug:"/development/backend/framework/starters/jpa-multitenant"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-jpa-multitenant",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-jpa-multitenant",isDocsHomePage:!1,title:"JPA multitenant starter",description:"1\\. Configuration",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/starters/jpa-multitenant-starter.md",slug:"/development/backend/framework/starters/jpa-multitenant",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/jpa-multitenant",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/starters/jpa-multitenant-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"JPA instance starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/jpa-instance"},next:{title:"Microservice core starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/microservice-core"}},s=[{value:"3.1. How to manage repository by tenant",id:"31-how-to-manage-repository-by-tenant",children:[]},{value:"3.2. How to avoid transaction manager conflict",id:"32-how-to-avoid-transaction-manager-conflict",children:[]},{value:"3.3. How to test datasource",id:"33-how-to-test-datasource",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"1-configuration"},"1","."," Configuration"),Object(o.b)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>jpa-multitenant-starter</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"Dependency :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"multitenant"},"Multitenant starter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"amqp"},"AMQP starter"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"regards.jpa.multitenant.enabled=true # Disable JPA multitenant support\nregards.jpa.multitenant.embedded=false # Activate embedded mode with HSQLDB\nregards.jpa.multitenant.embeddedPath= # Path for embedded databases files if enabled\nregards.jpa.multitenant.dialect=org.hibernate.dialect.PostgreSQLDialect # Not mandatory if embedded mode is activated\nregards.jpa.multitenant.tenants[<x>].tenant=\nregards.jpa.multitenant.tenants[<x>].url= # Not mandatory if embedded mode is activated (e.g. jdbc:postgresql://localhost:5432/test1)\nregards.jpa.multitenant.tenants[<x>].userName= # Not mandatory if embedded mode is activated\nregards.jpa.multitenant.tenants[<x>].password= # Not mandatory if embedded mode is activated\nregards.jpa.multitenant.tenants[<x>].driverClassName=org.postgresql.Driver # Not mandatory if embedded mode is activated\n\n<x> : Integer value for tenant index starting with 0.\n")),Object(o.b)("h1",{id:"2-autoconfiguration"},"2","."," Autoconfiguration"),Object(o.b)("p",null,"Starter :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"manages all tenant connections for the current microservice,")),Object(o.b)("p",null,"Following endpoints are supplied to monitor datasources :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/regards/{tenant}/datasource/test")," to test tenant datasource,"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/regards/{tenant}/datasource/status")," to check in production datasource status (pooled connections).")),Object(o.b)("h1",{id:"3-how-to"},"3","."," How to"),Object(o.b)("h2",{id:"31-how-to-manage-repository-by-tenant"},"3.1. How to manage repository by tenant"),Object(o.b)("p",null,"JPA repositories have no specifities in your source code. Starter purpose is only to route request to the right datasource."),Object(o.b)("p",null,"To do so, multitenant router use ",Object(o.b)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," from ",Object(o.b)("a",{parentName:"p",href:"multitenant"},"Multitenant starter")," transparently."),Object(o.b)("h2",{id:"32-how-to-avoid-transaction-manager-conflict"},"3.2. How to avoid transaction manager conflict"),Object(o.b)("p",null,"You can annotated your service or test with the following meta annotation to manage transaction if multiple managers exist else you can use ",Object(o.b)("inlineCode",{parentName:"p"},"RegardsTransactional"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"@MultitenantTransactional\n")),Object(o.b)("h2",{id:"33-how-to-test-datasource"},"3.3. How to test datasource"),Object(o.b)("p",null,"TODO explain test module"))}d.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);