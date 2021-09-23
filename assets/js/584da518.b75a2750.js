"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6023],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65105:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"backend-framework-starters-jpa-instance",title:"JPA instance starter",slug:"/development/backend/framework/starters/jpa-instance/"},c="Configuration",d={unversionedId:"development/backend/framework/starters/backend-framework-starters-jpa-instance",id:"version-1.5.0/development/backend/framework/starters/backend-framework-starters-jpa-instance",isDocsHomePage:!1,title:"JPA instance starter",description:"`properties",source:"@site/versioned_docs/version-1.5.0/development/backend/framework/starters/jpa-instance-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/jpa-instance/",permalink:"/docs/1.5.0/development/backend/framework/starters/jpa-instance/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/framework/starters/jpa-instance-starter.md",version:"1.5.0",frontMatter:{id:"backend-framework-starters-jpa-instance",title:"JPA instance starter",slug:"/development/backend/framework/starters/jpa-instance/"},sidebar:"version-1.5.0/dev",previous:{title:"HATEOAS starter",permalink:"/docs/1.5.0/development/backend/framework/starters/hateoas/"},next:{title:"JPA multitenant starter",permalink:"/docs/1.5.0/development/backend/framework/starters/jpa-multitenant/"}},p=[{value:"Use transaction with instance",id:"use-transaction-with-instance",children:[]}],l={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"configuration"},"Configuration"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties"},"# Disable JPA instance support\nregards.jpa.instance.enabled=false # disable JPA instance support\nregards.jpa.instance.embedded=true # Activate embedded mode with HSQLDB\nregards.jpa.instance.embeddedPath=target # Path for embedded databases files\nregards.jpa.instance.dialect=org.hibernate.dialect.PostgreSQLDialect # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.url=jdbc:postgresql://localhost:5432/postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.username=postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.password=postgres # Not mandatory if embedded mode is activated\nregards.jpa.instance.datasource.driverClassName=org.postgresql.Driver # Not mandatory if embedded mode is activated\nregards.jpa.instance.disableInstanceEntityAnnotation # Used to use instance starter alone without jpa-multitenant-starter.\n")),(0,s.kt)("h1",{id:"usage"},"Usage"),(0,s.kt)("p",null,"To use Instance DAO, you have to annotate all your JPA Repositories and Entities with @InstanceEntity. Only those are used by the jpa-instance starter."),(0,s.kt)("h1",{id:"disableinstanceentityannotation"},"disableInstanceEntityAnnotation"),(0,s.kt)("p",null,"Used to disable usage of InstanceEntity annotation. Only use this option if you don't use the jpa-multitenant-starter."),(0,s.kt)("h2",{id:"use-transaction-with-instance"},"Use transaction with instance"))}u.isMDXComponent=!0}}]);