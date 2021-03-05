(window.webpackJsonp=window.webpackJsonp||[]).push([[1461],{1531:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),i=(r(0),r(2699)),o={id:"backend-framework-starters",title:"REGARDS framework starters",sidebar_label:"Introduction",slug:"/development/backend/framework/starters"},c={unversionedId:"development/backend/framework/backend-framework-starters",id:"development/backend/framework/backend-framework-starters",isDocsHomePage:!1,title:"REGARDS framework starters",description:"Most of the time, starter depends on a business package. Sometimes, regarding the layer you implement, you may want to use directly the starter or just the business package.",source:"@site/docs/development/backend/framework/starters.md",slug:"/development/backend/framework/starters",permalink:"/fr/docs/development/backend/framework/starters",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters.md",version:"current",sidebar_label:"Introduction",sidebar:"dev",previous:{title:"Getting started with REGARDS framework",permalink:"/fr/docs/development/backend/framework/getting-started"},next:{title:"AMQP monitoring starter",permalink:"/fr/docs/development/backend/framework/starters/amqp-monitoring"}},s=[{value:"Multitenancy",id:"multitenancy",children:[]},{value:"Authentication and authorization",id:"authentication-and-authorization",children:[]},{value:"Microservice communications",id:"microservice-communications",children:[]},{value:"Microservice",id:"microservice",children:[]},{value:"Business starters",id:"business-starters",children:[]},{value:"JPA starters",id:"jpa-starters",children:[]},{value:"Tools",id:"tools",children:[]}],l={toc:s};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Most of the time, starter depends on a business package. Sometimes, regarding the layer you implement, you may want to use directly the starter or just the business package."),Object(i.b)("p",null,"The starter enables the related features and should only contains starter configuration properties and auto configuration bean(s). Business package contains all the logic and the business objects."),Object(i.b)("p",null,"Sometimes, you have to provide your own bean to override default one. Simply create your own ",Object(i.b)("inlineCode",{parentName:"p"},"Component")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Configuration")," bean! It will automatically have priority over starter one."),Object(i.b)("p",null,"See latest ",Object(i.b)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-custom-starter"},"Spring documentation")," for further details."),Object(i.b)("h3",{id:"multitenancy"},"Multitenancy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/multitenant"},"Multitenant starter"))),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Most REGARDS starters are designed to handle multitenancy and depends on this base starter."))),Object(i.b)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/authentication"},"Authentication starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/security"},"Security starter"))),Object(i.b)("h3",{id:"microservice-communications"},"Microservice communications"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/amqp"},"AMQP starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/cloud"},"Cloud starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/feign"},"Feign starter"))),Object(i.b)("h3",{id:"microservice"},"Microservice"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/microservice"},"Microservice starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/microservice-core"},"Microservice core starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/module"},"Module starter"))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Microservice logger artifact just centralizes logback default configuration."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n<groupId>fr.cnes.regards.framework</groupId>\nartifactId>microservice-logger</artifactId>\n</dependency>\n")))),Object(i.b)("h3",{id:"business-starters"},"Business starters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/geojson"},"GeoJSON starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/oais"},"OAIS starter"))),Object(i.b)("h3",{id:"jpa-starters"},"JPA starters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/jpa-instance"},"JPA instance starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/jpa-multitenant"},"JPA multitenant starter"))),Object(i.b)("h3",{id:"tools"},"Tools"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/gson"},"GSON starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/hateoas"},"HATEOAS starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/swagger"},"Swagger starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"starters/encryption"},"Encryption"))))}b.isMDXComponent=!0},2699:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return p}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=b(r),d=a,p=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return r?n.a.createElement(p,c(c({ref:t},l),{},{components:r})):n.a.createElement(p,c({ref:t},l))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);