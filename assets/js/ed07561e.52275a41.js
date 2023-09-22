"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[90539],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=d(r),p=o,f=m["".concat(i,".").concat(p)]||m[p]||s[p]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:o,l[1]=c;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={layout:"classic-docs",title:"Generate a new microservice module","short-title":"Generate module"},l=void 0,c={unversionedId:"development/backend/framework/module/create-module",id:"version-1.12.0/development/backend/framework/module/create-module",title:"Generate a new microservice module",description:"Once you have created the microservice container, you have to create modules.",source:"@site/versioned_docs/version-1.12.0/development/backend/framework/module/create-module.md",sourceDirName:"development/backend/framework/module",slug:"/development/backend/framework/module/create-module",permalink:"/docs/1.12.0/development/backend/framework/module/create-module",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/framework/module/create-module.md",tags:[],version:"1.12.0",frontMatter:{layout:"classic-docs",title:"Generate a new microservice module","short-title":"Generate module"}},i={},d=[],u={toc:d},m="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once you have created the microservice container, you have to create modules."),(0,o.kt)("p",null,"To add a new module to your microservice you have to add a new maven module with the module-archetype. To do so :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the root folder of the microservice")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd myMicroService\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generate a new module")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate -DarchetypeCatalog=local\n")),(0,o.kt)("p",null,"Choose the right archetype (",(0,o.kt)("inlineCode",{parentName:"p"},"fr.cnes.regards.modules:helloworld-module-archetype"),") and enter requested field as follow :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"groupId : ",(0,o.kt)("inlineCode",{parentName:"li"},"fr.cnes.regards.modules")),(0,o.kt)("li",{parentName:"ul"},"artifactId : the module name in camel case, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"microModules")),(0,o.kt)("li",{parentName:"ul"},"version : press enter to apply default value"),(0,o.kt)("li",{parentName:"ul"},"package : press enter to apply default value"),(0,o.kt)("li",{parentName:"ul"},"Add the following dependency to ",(0,o.kt)("inlineCode",{parentName:"li"},"bootstrap-myMicroservice/pom.xml")," file:")),(0,o.kt)("p",null,'For instance, with the module artifact id "myModule" :'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>fr.cnes.regards.modules.myModule</groupId>\n    <artifactId>myModule-rest</artifactId>\n    <version>1.0-SNAPSHOT</version>\n  </dependency>\n")))}s.isMDXComponent=!0}}]);