"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[21672],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>g});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(45072),o=(t(11504),t(95788));const a={id:"development-manual",title:"Development manual",slug:"/development/"},l=void 0,i={unversionedId:"development/development-manual",id:"development/development-manual",title:"Development manual",description:"Development contexts",source:"@site/docs/development/regards-developpement-manual.md",sourceDirName:"development",slug:"/development/",permalink:"/docs/development/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/regards-developpement-manual.md",tags:[],version:"current",frontMatter:{id:"development-manual",title:"Development manual",slug:"/development/"},sidebar:"dev",next:{title:"Concepts",permalink:"/docs/development/backend/architecture/concepts/"}},c={},p=[{value:"Development contexts",id:"development-contexts",level:2},{value:"Backend",id:"backend",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Create a new microservice",id:"create-a-new-microservice",level:2},{value:"Create a new Microservice plugin",id:"create-a-new-microservice-plugin",level:2},{value:"Contribute to REGARDS",id:"contribute-to-regards",level:2}],u={toc:p},d="wrapper";function s(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"development-contexts"},"Development contexts"),(0,o.yg)("h3",{id:"backend"},"Backend"),(0,o.yg)("p",null,"REGARDS allows developers to extends the REGARDS backend functionnalities by creating their own :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/dev-microservice/"},"Microservice")," : In order to add new functionalities to REGARDS system throught new REST endpoints"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/modules/plugins/"},"Microservice plugin")," : In order to extend microservices functionalities throught defined extension points for each REGARDS Microservice")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Requirements :")," You need a development environment with :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Maven v3.8.4+"),(0,o.yg)("li",{parentName:"ul"},"JDK Eclipse Temurin v17.0.3+"),(0,o.yg)("li",{parentName:"ul"},"Git client")),(0,o.yg)("h3",{id:"frontend"},"Frontend"),(0,o.yg)("p",null,"REGARDS allows developers to extends REGARDS Frontend functionnalities by creating their own :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/development/frontend/plugins/service/"},"UI service plugin")," : In order to add new functionalities availables from the consultables data id the project user HMI."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/development/frontend/plugins/criteria/"},"UI search criterion widget")," : In order to add new criterion types in REGARDS search forms."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/development/frontend/plugins/"},"UI Module plugin")," : In order to add a totaly new bundle of functionalities")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Requirements :")," You need a development environment with :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"node v8.10+"),(0,o.yg)("li",{parentName:"ul"},"npm v16+ (npm i -g npm to upgrade)"),(0,o.yg)("li",{parentName:"ul"},"Git client")),(0,o.yg)("h2",{id:"create-a-new-microservice"},"Create a new microservice"),(0,o.yg)("p",null,"Refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/development/backend/framework/dev-microservice/"},"develop a new microservice")," page to create your own microservice."),(0,o.yg)("h2",{id:"create-a-new-microservice-plugin"},"Create a new Microservice plugin"),(0,o.yg)("p",null,"Refer to the following pages to develop your own plugins."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/development/backend/framework/modules/plugins/"},"Backend plugins")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/development/frontend/plugins/"},"Frontend plugins"))),(0,o.yg)("h2",{id:"contribute-to-regards"},"Contribute to REGARDS"),(0,o.yg)("p",null,"You can share your REGARDS developments to the REGARDS community by sending a pull request on our github with your package. Your request will be checked as soon as possible by our maintenance team."))}s.isMDXComponent=!0}}]);