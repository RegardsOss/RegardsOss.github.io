"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[59987],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19610:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"backend-framework-starters-jpa-multitenant",title:"JPA multitenant starter",slug:"/development/backend/framework/starters/jpa-multitenant/"},l="1. Configuration",d={unversionedId:"development/backend/framework/starters/backend-framework-starters-jpa-multitenant",id:"version-1.5.0/development/backend/framework/starters/backend-framework-starters-jpa-multitenant",isDocsHomePage:!1,title:"JPA multitenant starter",description:"Add starter dependency to your POM (version depends on the REGARDS BOM)",source:"@site/versioned_docs/version-1.5.0/development/backend/framework/starters/jpa-multitenant-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/jpa-multitenant/",permalink:"/fr/docs/1.5.0/development/backend/framework/starters/jpa-multitenant/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/framework/starters/jpa-multitenant-starter.md",tags:[],version:"1.5.0",frontMatter:{id:"backend-framework-starters-jpa-multitenant",title:"JPA multitenant starter",slug:"/development/backend/framework/starters/jpa-multitenant/"},sidebar:"version-1.5.0/dev",previous:{title:"JPA instance starter",permalink:"/fr/docs/1.5.0/development/backend/framework/starters/jpa-instance/"},next:{title:"Microservice core starter",permalink:"/fr/docs/1.5.0/development/backend/framework/starters/microservice-core/"}},c=[{value:"3.1. How to manage repository by tenant",id:"31-how-to-manage-repository-by-tenant",children:[]},{value:"3.2. How to avoid transaction manager conflict",id:"32-how-to-avoid-transaction-manager-conflict",children:[]},{value:"3.3. How to test datasource",id:"33-how-to-test-datasource",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-configuration"},"1","."," Configuration"),(0,o.kt)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>jpa-multitenant-starter</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"Dependency :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../multitenant/"},"Multitenant starter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../amqp/"},"AMQP starter"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"regards.jpa.multitenant.enabled=true # Disable JPA multitenant support\nregards.jpa.multitenant.embedded=false # Activate embedded mode with HSQLDB\nregards.jpa.multitenant.embeddedPath= # Path for embedded databases files if enabled\nregards.jpa.multitenant.dialect=org.hibernate.dialect.PostgreSQLDialect # Not mandatory if embedded mode is activated\nregards.jpa.multitenant.tenants[<x>].tenant=\nregards.jpa.multitenant.tenants[<x>].url= # Not mandatory if embedded mode is activated (e.g. jdbc:postgresql://localhost:5432/test1)\nregards.jpa.multitenant.tenants[<x>].userName= # Not mandatory if embedded mode is activated\nregards.jpa.multitenant.tenants[<x>].password= # Not mandatory if embedded mode is activated\nregards.jpa.multitenant.tenants[<x>].driverClassName=org.postgresql.Driver # Not mandatory if embedded mode is activated\n\n<x> : Integer value for tenant index starting with 0.\n")),(0,o.kt)("h1",{id:"2-autoconfiguration"},"2","."," Autoconfiguration"),(0,o.kt)("p",null,"Starter :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"manages all tenant connections for the current microservice,")),(0,o.kt)("p",null,"Following endpoints are supplied to monitor datasources :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/regards/{tenant}/datasource/test")," to test tenant datasource,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/regards/{tenant}/datasource/status")," to check in production datasource status (pooled connections).")),(0,o.kt)("h1",{id:"3-how-to"},"3","."," How to"),(0,o.kt)("h2",{id:"31-how-to-manage-repository-by-tenant"},"3.1. How to manage repository by tenant"),(0,o.kt)("p",null,"JPA repositories have no specifities in your source code. Starter purpose is only to route request to the right datasource."),(0,o.kt)("p",null,"To do so, multitenant router use ",(0,o.kt)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," from ",(0,o.kt)("a",{parentName:"p",href:"../multitenant/"},"Multitenant starter")," transparently."),(0,o.kt)("h2",{id:"32-how-to-avoid-transaction-manager-conflict"},"3.2. How to avoid transaction manager conflict"),(0,o.kt)("p",null,"You can annotated your service or test with the following meta annotation to manage transaction if multiple managers exist else you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"RegardsTransactional"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@MultitenantTransactional\n")),(0,o.kt)("h2",{id:"33-how-to-test-datasource"},"3.3. How to test datasource"),(0,o.kt)("p",null,"TODO explain test module"))}p.isMDXComponent=!0}}]);