"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[91422],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88861:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={id:"development-manual",title:"Development manual",slug:"/development/"},u=void 0,c={unversionedId:"development/development-manual",id:"version-1.7.1/development/development-manual",title:"Development manual",description:"Development contexts",source:"@site/versioned_docs/version-1.7.1/development/regards-developpement-manual.md",sourceDirName:"development",slug:"/development/",permalink:"/docs/1.7.1/development/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/regards-developpement-manual.md",tags:[],version:"1.7.1",frontMatter:{id:"development-manual",title:"Development manual",slug:"/development/"},sidebar:"dev",next:{title:"Concepts",permalink:"/docs/1.7.1/development/backend/architecture/concepts/"}},s={},p=[{value:"Development contexts",id:"development-contexts",level:2},{value:"Backend",id:"backend",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Create a new microservice",id:"create-a-new-microservice",level:2},{value:"Create a new Microservice plugin",id:"create-a-new-microservice-plugin",level:2},{value:"Contribute to REGARDS",id:"contribute-to-regards",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"development-contexts"},"Development contexts"),(0,a.kt)("h3",{id:"backend"},"Backend"),(0,a.kt)("p",null,"REGARDS allows developers to extends the REGARDS backend functionnalities by creating their own :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"backend/framework/dev-microservice/"},"Microservice"))," : In order to add new functionalities to REGARDS system throught new REST endpoints"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"backend/framework/modules/plugins/"},"Microservice plugin"))," : In order to extend microservices functionalities throught defined extension points for each REGARDS Microservice")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requirements :")," You need a development environment with :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Java 1.8"),(0,a.kt)("li",{parentName:"ul"},"Maven 3.3.1+"),(0,a.kt)("li",{parentName:"ul"},"Git client")),(0,a.kt)("h3",{id:"frontend"},"Frontend"),(0,a.kt)("p",null,"REGARDS allows developers to extends REGARDS Frontend functionnalities by creating their own :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"frontend/plugins/service/"},"UI service plugin"))," : In order to add new functionalities availables from the consultables data id the project user HMI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"frontend/plugins/criteria/"},"UI search criterion widget"))," : In order to add new criterion types in REGARDS search forms."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"frontend/plugins/"},"UI Module plugin"))," : In order to add a totaly new bundle of functionalities")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requirements :")," You need a development environment with :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"npm 4+"),(0,a.kt)("li",{parentName:"ul"},"Git client")),(0,a.kt)("h2",{id:"create-a-new-microservice"},"Create a new microservice"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"backend/framework/dev-microservice/"},"develop a new microservice")," page to create your own microservice."),(0,a.kt)("h2",{id:"create-a-new-microservice-plugin"},"Create a new Microservice plugin"),(0,a.kt)("p",null,"Refer to the following pages to develop your own plugins."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"backend/framework/modules/plugins/"},"Backend plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"frontend/plugins/"},"Frontend plugins"))),(0,a.kt)("h2",{id:"contribute-to-regards"},"Contribute to REGARDS"),(0,a.kt)("p",null,"You can share your REGARDS developments to the REGARDS community by sending a pull request on our github with your package. Your request will be checked as soon as possible by our maintenance team."))}m.isMDXComponent=!0}}]);