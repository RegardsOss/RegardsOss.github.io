"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[91422],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"development-manual",title:"Development manual",slug:"/development/"},l=void 0,i={unversionedId:"development/development-manual",id:"version-1.7.1/development/development-manual",title:"Development manual",description:"Development contexts",source:"@site/versioned_docs/version-1.7.1/development/regards-developpement-manual.md",sourceDirName:"development",slug:"/development/",permalink:"/docs/1.7.1/development/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/regards-developpement-manual.md",tags:[],version:"1.7.1",frontMatter:{id:"development-manual",title:"Development manual",slug:"/development/"},sidebar:"dev",next:{title:"Concepts",permalink:"/docs/1.7.1/development/backend/architecture/concepts/"}},c={},s=[{value:"Development contexts",id:"development-contexts",level:2},{value:"Backend",id:"backend",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Create a new microservice",id:"create-a-new-microservice",level:2},{value:"Create a new Microservice plugin",id:"create-a-new-microservice-plugin",level:2},{value:"Contribute to REGARDS",id:"contribute-to-regards",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"development-contexts"},"Development contexts"),(0,o.kt)("h3",{id:"backend"},"Backend"),(0,o.kt)("p",null,"REGARDS allows developers to extends the REGARDS backend functionnalities by creating their own :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"backend/framework/dev-microservice/"},"Microservice"))," : In order to add new functionalities to REGARDS system throught new REST endpoints"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"backend/framework/modules/plugins/"},"Microservice plugin"))," : In order to extend microservices functionalities throught defined extension points for each REGARDS Microservice")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirements :")," You need a development environment with :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Java 1.8"),(0,o.kt)("li",{parentName:"ul"},"Maven 3.3.1+"),(0,o.kt)("li",{parentName:"ul"},"Git client")),(0,o.kt)("h3",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"REGARDS allows developers to extends REGARDS Frontend functionnalities by creating their own :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"frontend/plugins/service/"},"UI service plugin"))," : In order to add new functionalities availables from the consultables data id the project user HMI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"frontend/plugins/criteria/"},"UI search criterion widget"))," : In order to add new criterion types in REGARDS search forms."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"frontend/plugins/"},"UI Module plugin"))," : In order to add a totaly new bundle of functionalities")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requirements :")," You need a development environment with :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"npm 4+"),(0,o.kt)("li",{parentName:"ul"},"Git client")),(0,o.kt)("h2",{id:"create-a-new-microservice"},"Create a new microservice"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"backend/framework/dev-microservice/"},"develop a new microservice")," page to create your own microservice."),(0,o.kt)("h2",{id:"create-a-new-microservice-plugin"},"Create a new Microservice plugin"),(0,o.kt)("p",null,"Refer to the following pages to develop your own plugins."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"backend/framework/modules/plugins/"},"Backend plugins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"frontend/plugins/"},"Frontend plugins"))),(0,o.kt)("h2",{id:"contribute-to-regards"},"Contribute to REGARDS"),(0,o.kt)("p",null,"You can share your REGARDS developments to the REGARDS community by sending a pull request on our github with your package. Your request will be checked as soon as possible by our maintenance team."))}u.isMDXComponent=!0}}]);