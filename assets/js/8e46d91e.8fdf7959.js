"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[11444],{95788:(e,t,r)=>{r.d(t,{Iu:()=>m,yg:()=>g});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return r?a.createElement(g,i(i({ref:t},m),{},{components:r})):a.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67228:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(45072),n=(r(11504),r(95788));const o={id:"backend-framework-starters",title:"REGARDS framework starters",sidebar_label:"Introduction",slug:"/development/backend/framework/starters/"},i=void 0,s={unversionedId:"development/backend/framework/backend-framework-starters",id:"development/backend/framework/backend-framework-starters",title:"REGARDS framework starters",description:"Most of the time, starter depends on a business package. Sometimes, regarding the layer you implement, you may want to use directly the starter or just the business package.",source:"@site/docs/development/backend/framework/starters.md",sourceDirName:"development/backend/framework",slug:"/development/backend/framework/starters/",permalink:"/docs/development/backend/framework/starters/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters.md",tags:[],version:"current",frontMatter:{id:"backend-framework-starters",title:"REGARDS framework starters",sidebar_label:"Introduction",slug:"/development/backend/framework/starters/"},sidebar:"dev",previous:{title:"Getting started",permalink:"/docs/development/backend/framework/getting-started/"},next:{title:"AMQP monitoring starter",permalink:"/docs/development/backend/framework/starters/amqp-monitoring/"}},l={},c=[{value:"Multitenancy",id:"multitenancy",level:3},{value:"Authentication and authorization",id:"authentication-and-authorization",level:3},{value:"Microservice communications",id:"microservice-communications",level:3},{value:"Microservice",id:"microservice",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Most of the time, starter depends on a business package. Sometimes, regarding the layer you implement, you may want to use directly the starter or just the business package."),(0,n.yg)("p",null,"The starter enables the related features and should only contains starter configuration properties and auto configuration bean(s). Business package contains all the logic and the business objects."),(0,n.yg)("p",null,"Sometimes, you have to provide your own bean to override default one. Simply create your own ",(0,n.yg)("inlineCode",{parentName:"p"},"Component")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"Configuration")," bean! It will automatically have priority over starter one."),(0,n.yg)("p",null,"See latest ",(0,n.yg)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-custom-starter"},"Spring documentation")," for further details."),(0,n.yg)("h3",{id:"multitenancy"},"Multitenancy"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/multitenant/"},"Multitenant starter"))),(0,n.yg)("admonition",{type:"danger"},(0,n.yg)("p",{parentName:"admonition"},"Most REGARDS starters are designed to handle multitenancy and depends on this base starter.")),(0,n.yg)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/authentication/"},"Authentication starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/security/"},"Security starter"))),(0,n.yg)("h3",{id:"microservice-communications"},"Microservice communications"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/amqp/"},"AMQP starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/cloud/"},"Cloud starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/feign/"},"Feign starter"))),(0,n.yg)("h3",{id:"microservice"},"Microservice"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/microservice/"},"Microservice starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/microservice-core/"},"Microservice core starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/module/"},"Module starter"))),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Microservice logger artifact just centralizes logback default configuration."),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-logger</artifactId>\n</dependency>\n")),(0,n.yg)("h3",{parentName:"admonition",id:"business-starters"},"Business starters"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/geojson/"},"GeoJSON starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/oais/"},"OAIS starter"))),(0,n.yg)("h3",{parentName:"admonition",id:"jpa-starters"},"JPA starters"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/jpa-instance/"},"JPA instance starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/jpa-multitenant/"},"JPA multitenant starter"))),(0,n.yg)("h3",{parentName:"admonition",id:"tools"},"Tools"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/gson/"},"GSON starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/hateoas/"},"HATEOAS starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/swagger/"},"Swagger starter")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/encryption/"},"Encryption")))))}p.isMDXComponent=!0}}]);