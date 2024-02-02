"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[33384],{95788:(e,t,n)=>{n.d(t,{Iu:()=>l,yg:()=>f});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(45072),a=(n(11504),n(95788));const s={id:"backend-framework-starters-jpa-instance",title:"JPA instance starter",slug:"/development/backend/framework/starters/jpa-instance/"},o="Configuration",i={unversionedId:"development/backend/framework/starters/backend-framework-starters-jpa-instance",id:"version-1.12.0/development/backend/framework/starters/backend-framework-starters-jpa-instance",title:"JPA instance starter",description:"To use Instance DAO, you have to annotate all your JPA Repositories and Entities with @InstanceEntity. Only those are used by the jpa-instance starter.",source:"@site/versioned_docs/version-1.12.0/development/backend/framework/starters/jpa-instance-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/jpa-instance/",permalink:"/docs/1.12.0/development/backend/framework/starters/jpa-instance/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/framework/starters/jpa-instance-starter.md",tags:[],version:"1.12.0",frontMatter:{id:"backend-framework-starters-jpa-instance",title:"JPA instance starter",slug:"/development/backend/framework/starters/jpa-instance/"},sidebar:"dev",previous:{title:"HATEOAS starter",permalink:"/docs/1.12.0/development/backend/framework/starters/hateoas/"},next:{title:"JPA multitenant starter",permalink:"/docs/1.12.0/development/backend/framework/starters/jpa-multitenant/"}},c={},d=[{value:"Use transaction with instance",id:"use-transaction-with-instance",level:2}],l={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"configuration"},"Configuration"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"# Disable JPA instance support\nregards.jpa.instance.enabled=false # disable JPA instance support\nregards.jpa.instance.embedded=true # Activate embedded mode with HSQLDB\nregards.jpa.instance.embeddedPath=target # Path for embedded databases files\nregards.jpa.instance.dialect=org.hibernate.dialect.PostgreSQLDialect # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.url=jdbc:postgresql://localhost:5432/postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.username=postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.password=postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.driverClassName=org.postgresql.Driver # Not mandatory if embedded mode is activated\nregards.jpa.instance.disableInstanceEntityAnnotation # Used to use instance starter alone without jpa-multitenant-starter.\n")),(0,a.yg)("h1",{id:"usage"},"Usage"),(0,a.yg)("p",null,"To use Instance DAO, you have to annotate all your JPA Repositories and Entities with @InstanceEntity. Only those are used by the jpa-instance starter."),(0,a.yg)("h1",{id:"disableinstanceentityannotation"},"disableInstanceEntityAnnotation"),(0,a.yg)("p",null,"Used to disable usage of InstanceEntity annotation. Only use this option if you don't use the jpa-multitenant-starter."),(0,a.yg)("h2",{id:"use-transaction-with-instance"},"Use transaction with instance"))}u.isMDXComponent=!0}}]);