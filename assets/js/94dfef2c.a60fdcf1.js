"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[8312],{95788:(e,r,t)=>{t.d(r,{Iu:()=>m,yg:()=>g});var a=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=n,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return t?a.createElement(g,i(i({ref:r},m),{},{components:t})):a.createElement(g,i({ref:r},m))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65176:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(45072),n=(t(11504),t(95788));const o={id:"backend-framework-starters",title:"REGARDS framework starters",sidebar_label:"Introduction",slug:"/development/backend/framework/starters/"},i=void 0,s={unversionedId:"development/backend/framework/backend-framework-starters",id:"version-1.11.0/development/backend/framework/backend-framework-starters",title:"REGARDS framework starters",description:"Most of the time, starter depends on a business package. Sometimes, regarding the layer you implement, you may want to use directly the starter or just the business package.",source:"@site/versioned_docs/version-1.11.0/development/backend/framework/starters.md",sourceDirName:"development/backend/framework",slug:"/development/backend/framework/starters/",permalink:"/docs/1.11.0/development/backend/framework/starters/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/framework/starters.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-framework-starters",title:"REGARDS framework starters",sidebar_label:"Introduction",slug:"/development/backend/framework/starters/"},sidebar:"dev",previous:{title:"Getting started",permalink:"/docs/1.11.0/development/backend/framework/getting-started/"},next:{title:"AMQP monitoring starter",permalink:"/docs/1.11.0/development/backend/framework/starters/amqp-monitoring/"}},l={},c=[{value:"Multitenancy",id:"multitenancy",level:3},{value:"Authentication and authorization",id:"authentication-and-authorization",level:3},{value:"Microservice communications",id:"microservice-communications",level:3},{value:"Microservice",id:"microservice",level:3}],m={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,n.yg)(d,(0,a.c)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Most of the time, starter depends on a business package. Sometimes, regarding the layer you implement, you may want to use directly the starter or just the business package."),(0,n.yg)("p",null,"The starter enables the related features and should only contains starter configuration properties and auto configuration bean(s). Business package contains all the logic and the business objects."),(0,n.yg)("p",null,"Sometimes, you have to provide your own bean to override default one. Simply create your own ",(0,n.yg)("inlineCode",{parentName:"p"},"Component")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"Configuration")," bean! It will automatically have priority over starter one."),(0,n.yg)("p",null,"See latest ",(0,n.yg)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-custom-starter"},"Spring documentation")," for further details."),(0,n.yg)("h3",{id:"multitenancy"},"Multitenancy"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/multitenant/"},"Multitenant starter"))),(0,n.yg)("admonition",{type:"danger"},(0,n.yg)("p",{parentName:"admonition"},"Most REGARDS starters are designed to handle multitenancy and depends on this base starter.")),(0,n.yg)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/authentication/"},"Authentication starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/security/"},"Security starter"))),(0,n.yg)("h3",{id:"microservice-communications"},"Microservice communications"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/amqp/"},"AMQP starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/cloud/"},"Cloud starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/feign/"},"Feign starter"))),(0,n.yg)("h3",{id:"microservice"},"Microservice"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/microservice/"},"Microservice starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/microservice-core/"},"Microservice core starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/module/"},"Module starter"))),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Microservice logger artifact just centralizes logback default configuration."),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-logger</artifactId>\n</dependency>\n")),(0,n.yg)("h3",{parentName:"admonition",id:"business-starters"},"Business starters"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/geojson/"},"GeoJSON starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/oais/"},"OAIS starter"))),(0,n.yg)("h3",{parentName:"admonition",id:"jpa-starters"},"JPA starters"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/jpa-instance/"},"JPA instance starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/jpa-multitenant/"},"JPA multitenant starter"))),(0,n.yg)("h3",{parentName:"admonition",id:"tools"},"Tools"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/gson/"},"GSON starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/hateoas/"},"HATEOAS starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/swagger/"},"Swagger starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/encryption/"},"Encryption")))))}p.isMDXComponent=!0}}]);