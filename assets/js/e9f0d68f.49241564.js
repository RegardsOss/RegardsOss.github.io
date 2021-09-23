"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66833],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85296:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"backend-framework-getting-started",title:"Getting started with REGARDS framework",sidebar_label:"Getting started",slug:"/development/backend/framework/getting-started/"},d=void 0,l={unversionedId:"development/backend/framework/backend-framework-getting-started",id:"version-1.5.0/development/backend/framework/backend-framework-getting-started",isDocsHomePage:!1,title:"Getting started with REGARDS framework",description:"Technology stack",source:"@site/versioned_docs/version-1.5.0/development/backend/framework/getting-started.md",sourceDirName:"development/backend/framework",slug:"/development/backend/framework/getting-started/",permalink:"/docs/1.5.0/development/backend/framework/getting-started/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/framework/getting-started.md",version:"1.5.0",frontMatter:{id:"backend-framework-getting-started",title:"Getting started with REGARDS framework",sidebar_label:"Getting started",slug:"/development/backend/framework/getting-started/"},sidebar:"version-1.5.0/dev",previous:{title:"Overview",permalink:"/docs/1.5.0/development/backend/architecture/overview/"},next:{title:"Introduction",permalink:"/docs/1.5.0/development/backend/framework/starters/"}},p=[{value:"Technology stack",id:"technology-stack",children:[]},{value:"Bill Of Materials (i.e. BOM)",id:"bill-of-materials-ie-bom",children:[]},{value:"Starters",id:"starters",children:[]},{value:"Modules",id:"modules",children:[]}],c={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"technology-stack"},"Technology stack"),(0,o.kt)("p",null,"REGARDS framework is built on top of ",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/"},"Spring projects"),":"),(0,o.kt)("p",null,"At the moment, the framework relies on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OpenJDK 8"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot#learn"},"Spring Boot")," ",(0,o.kt)("inlineCode",{parentName:"li"},"1.5.X.RELEASE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-cloud#learn"},"Spring Cloud")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Dalston SR5"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that we are upgrading COTS : cf. ",(0,o.kt)("a",{parentName:"p",href:"/roadmap/"},"Roadmap")))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(49380).Z})),(0,o.kt)("h2",{id:"bill-of-materials-ie-bom"},"Bill Of Materials (i.e. BOM)"),(0,o.kt)("p",null,"To use REGARDS framework building blocks, you have to import its BOM in your pom.xml."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All dependencies are expressed in term of ",(0,o.kt)("strong",{parentName:"p"},"Maven dependencies"),". "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>fr.cnes.regards</groupId>\n                <artifactId>regards-dependencies</artifactId>\n                <version>3.0.0-RELEASE</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n")),(0,o.kt)("h2",{id:"starters"},"Starters"),(0,o.kt)("p",null,"REGARDS framework provides ",(0,o.kt)("a",{parentName:"p",href:"../starters/"},"building blocks (aka starters)")," to ease modules and microservices development."),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"../starters/"},"dedicated section")," to learn more."),(0,o.kt)("h2",{id:"modules"},"Modules"),(0,o.kt)("p",null,"REGARDS framework provides common modules to manage ",(0,o.kt)("a",{parentName:"p",href:"../modules/jobs/"},"jobs"),", ",(0,o.kt)("a",{parentName:"p",href:"../modules/plugins/"},"plugins"),", ",(0,o.kt)("a",{parentName:"p",href:"../modules/templates/"},"templates")," and ",(0,o.kt)("a",{parentName:"p",href:"../modules/workspace/"},"workspace"),"."))}m.isMDXComponent=!0},49380:function(e,t,n){t.Z=n.p+"assets/images/microservice_architecture_spring-a11b6be393f1aba359073e6c1d314324.png"}}]);