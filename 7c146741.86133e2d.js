(window.webpackJsonp=window.webpackJsonp||[]).push([[1267],{1336:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(2701)),i={id:"backend-framework-getting-started",title:"Getting started with REGARDS framework",sidebar_label:"Getting started",slug:"/development/backend/framework/getting-started"},c={unversionedId:"development/backend/framework/backend-framework-getting-started",id:"version-1.4.0/development/backend/framework/backend-framework-getting-started",isDocsHomePage:!1,title:"Getting started with REGARDS framework",description:"Technology stack",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/getting-started.md",slug:"/development/backend/framework/getting-started",permalink:"/docs/1.4.0/development/backend/framework/getting-started",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/getting-started.md",version:"1.4.0",sidebar_label:"Getting started",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS architecture overview",permalink:"/docs/1.4.0/development/backend/architecture/overview"},next:{title:"REGARDS framework starters",permalink:"/docs/1.4.0/development/backend/framework/starters"}},s=[{value:"Technology stack",id:"technology-stack",children:[]},{value:"Bill Of Materials (i.e. BOM)",id:"bill-of-materials-ie-bom",children:[]},{value:"Starters",id:"starters",children:[]},{value:"Modules",id:"modules",children:[]}],l={toc:s};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"technology-stack"},"Technology stack"),Object(o.b)("p",null,"REGARDS framework is built on top of ",Object(o.b)("a",{parentName:"p",href:"https://spring.io/"},"Spring projects"),":"),Object(o.b)("p",null,"At the moment, the framework relies on:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"OpenJDK 8"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot#learn"},"Spring Boot")," ",Object(o.b)("inlineCode",{parentName:"li"},"1.5.X.RELEASE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://spring.io/projects/spring-cloud#learn"},"Spring Cloud")," ",Object(o.b)("inlineCode",{parentName:"li"},"Dalston SR5"))),Object(o.b)("p",null,Object(o.b)("img",{src:r(2745).default})),Object(o.b)("h2",{id:"bill-of-materials-ie-bom"},"Bill Of Materials (i.e. BOM)"),Object(o.b)("p",null,"To use REGARDS framework building blocks, you have to import its BOM in your pom.xml."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"All dependencies are expressed in term of ",Object(o.b)("strong",{parentName:"p"},"Maven dependencies"),". "))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>fr.cnes.regards</groupId>\n                <artifactId>regards-dependencies</artifactId>\n                <version>3.0.0-RELEASE</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n")),Object(o.b)("h2",{id:"starters"},"Starters"),Object(o.b)("p",null,"REGARDS framework provides ",Object(o.b)("a",{parentName:"p",href:"starters"},"building blocks (aka starters)")," to ease modules and microservices development."),Object(o.b)("p",null,"Go to the ",Object(o.b)("a",{parentName:"p",href:"starters"},"dedicated section")," to learn more."),Object(o.b)("h2",{id:"modules"},"Modules"),Object(o.b)("p",null,"REGARDS framework provides common modules to manage ",Object(o.b)("a",{parentName:"p",href:"modules/jobs"},"jobs"),", ",Object(o.b)("a",{parentName:"p",href:"modules/plugins"},"plugins"),", ",Object(o.b)("a",{parentName:"p",href:"modules/templates"},"templates")," and ",Object(o.b)("a",{parentName:"p",href:"modules/workspace"},"workspace"),"."))}p.isMDXComponent=!0},2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||o;return r?a.a.createElement(u,c(c({ref:t},l),{},{components:r})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2745:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/microservice_architecture_spring-a11b6be393f1aba359073e6c1d314324.png"}}]);