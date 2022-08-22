"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[96302],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"backend-framework-getting-started",title:"Getting started with REGARDS framework",sidebar_label:"Getting started",slug:"/development/backend/framework/getting-started/"},i=void 0,s={unversionedId:"development/backend/framework/backend-framework-getting-started",id:"version-1.8.0/development/backend/framework/backend-framework-getting-started",title:"Getting started with REGARDS framework",description:"Technology stack",source:"@site/versioned_docs/version-1.8.0/development/backend/framework/getting-started.md",sourceDirName:"development/backend/framework",slug:"/development/backend/framework/getting-started/",permalink:"/docs/1.8.0/development/backend/framework/getting-started/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.0/development/backend/framework/getting-started.md",tags:[],version:"1.8.0",frontMatter:{id:"backend-framework-getting-started",title:"Getting started with REGARDS framework",sidebar_label:"Getting started",slug:"/development/backend/framework/getting-started/"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.8.0/development/backend/architecture/overview/"},next:{title:"Introduction",permalink:"/docs/1.8.0/development/backend/framework/starters/"}},l={},p=[{value:"Technology stack",id:"technology-stack",level:2},{value:"Bill Of Materials (i.e. BOM)",id:"bill-of-materials-ie-bom",level:2},{value:"Starters",id:"starters",level:2},{value:"Modules",id:"modules",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"technology-stack"},"Technology stack"),(0,a.kt)("p",null,"REGARDS framework is built on top of ",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/"},"Spring projects"),":"),(0,a.kt)("p",null,"At the moment, the framework relies on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OpenJDK 8"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot#learn"},"Spring Boot")," ",(0,a.kt)("inlineCode",{parentName:"li"},"1.5.X.RELEASE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-cloud#learn"},"Spring Cloud")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Dalston SR5"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Note that we are upgrading COTS : cf. ",(0,a.kt)("a",{parentName:"p",href:"/roadmap/"},"Roadmap"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(67529).Z,width:"890",height:"591"})),(0,a.kt)("h2",{id:"bill-of-materials-ie-bom"},"Bill Of Materials (i.e. BOM)"),(0,a.kt)("p",null,"To use REGARDS framework building blocks, you have to import its BOM in your pom.xml."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All dependencies are expressed in term of ",(0,a.kt)("strong",{parentName:"p"},"Maven dependencies"),". ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>fr.cnes.regards</groupId>\n                <artifactId>regards-dependencies</artifactId>\n                <version>3.0.0-RELEASE</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n")),(0,a.kt)("h2",{id:"starters"},"Starters"),(0,a.kt)("p",null,"REGARDS framework provides ",(0,a.kt)("a",{parentName:"p",href:"../starters/"},"building blocks (aka starters)")," to ease modules and microservices development."),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("a",{parentName:"p",href:"../starters/"},"dedicated section")," to learn more."),(0,a.kt)("h2",{id:"modules"},"Modules"),(0,a.kt)("p",null,"REGARDS framework provides common modules to manage ",(0,a.kt)("a",{parentName:"p",href:"../modules/jobs/"},"jobs"),", ",(0,a.kt)("a",{parentName:"p",href:"../modules/plugins/"},"plugins"),", ",(0,a.kt)("a",{parentName:"p",href:"../modules/templates/"},"templates")," and ",(0,a.kt)("a",{parentName:"p",href:"../modules/workspace/"},"workspace"),"."))}c.isMDXComponent=!0},67529:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/microservice_architecture_spring-a11b6be393f1aba359073e6c1d314324.png"}}]);