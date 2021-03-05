(window.webpackJsonp=window.webpackJsonp||[]).push([[1016],{1086:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),c=(t(0),t(2699)),o={id:"backend-framework-starters-microservice-core",title:"Microservice core starter",slug:"/development/backend/framework/starters/microservice-core"},i={unversionedId:"development/backend/framework/starters/backend-framework-starters-microservice-core",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-microservice-core",isDocsHomePage:!1,title:"Microservice core starter",description:"Purpose",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/starters/microservice-core-starter.md",slug:"/development/backend/framework/starters/microservice-core",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/microservice-core",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/starters/microservice-core-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"JPA multitenant starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/jpa-multitenant"},next:{title:"Microservice starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/microservice"}},s=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={toc:s};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"purpose"},"Purpose"),Object(c.b)("p",null,"This starter is just an utility wrapper for all REGARDS microservice base dependencies."),Object(c.b)("h2",{id:"configuration"},"Configuration"),Object(c.b)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-core-starter</artifactId>\n</dependency>\n")),Object(c.b)("p",null,"Dependencies :"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"microservice"},"Microservice starter"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"multitenant"},"Multitenant starter")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"module"},"Module starter")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"gson"},"GSON starter")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"security"},"Security starter"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"multitenant"},"Multitenant starter")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"authentication"},"Authentication starter")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"amqp"},"AMQP starter")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"swagger"},"Swagger starter")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"cloud"},"Cloud starter"))))}u.isMDXComponent=!0},2699:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||c;return t?a.a.createElement(d,i(i({ref:r},l),{},{components:t})):a.a.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);