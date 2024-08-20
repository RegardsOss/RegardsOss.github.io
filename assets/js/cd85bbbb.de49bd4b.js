"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[85170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,k=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return r?n.createElement(k,o(o({ref:t},m),{},{components:r})):n.createElement(k,o({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},39965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"backend-framework-starters-microservice",title:"Microservice starter",slug:"/development/backend/framework/starters/microservice/"},o=void 0,l={unversionedId:"development/backend/framework/starters/backend-framework-starters-microservice",id:"version-1.15/development/backend/framework/starters/backend-framework-starters-microservice",title:"Microservice starter",description:"Purpose",source:"@site/versioned_docs/version-1.15/development/backend/framework/starters/microservice-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/microservice/",permalink:"/docs/development/backend/framework/starters/microservice/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/framework/starters/microservice-starter.md",tags:[],version:"1.15",frontMatter:{id:"backend-framework-starters-microservice",title:"Microservice starter",slug:"/development/backend/framework/starters/microservice/"},sidebar:"dev",previous:{title:"Microservice core starter",permalink:"/docs/development/backend/framework/starters/microservice-core/"},next:{title:"Module starter",permalink:"/docs/development/backend/framework/starters/module/"}},s={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"Maintenance management",id:"maintenance-management",level:3},{value:"Module management",id:"module-management",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This starter is used to enable microservice maitenance feature and module management feature."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards-starter</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"Business dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"Dependencies :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/multitenant/"},"Multitenant starter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/development/backend/framework/starters/module/"},"Module starter")," business package")),(0,a.kt)("p",null,"Properties :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Maintenance mode switch\nregards.microservices.maintenance.enabled=true\n")),(0,a.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,a.kt)("p",null,"Starter autoconfigures REST API endpoints."),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"maintenance-management"},"Maintenance management"),(0,a.kt)("p",null,"REGARDS microservice can handle a maintennace mode. By default each microservice are not in maintenance mode.\nThe maintenance mode is set individually for each tenant on the system.\nA microservice in maintenance mode can only handle 'GET' request. Each other requests are refused and a ",(0,a.kt)("inlineCode",{parentName:"p"},"403")," forbidden response status is sent."),(0,a.kt)("p",null,"API :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /maintenance")," : get maintenance status"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PUT /maintenance/{tenant}/enable")," : set maintenance mode for specified tenant"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PUT /maintenance/{tenant}/disable")," : unset maintenance mode for specified tenant")),(0,a.kt)("h3",{id:"module-management"},"Module management"),(0,a.kt)("p",null,"API :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET /microservice/configuration/enabled")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," if configuration feature is implemented, else ",(0,a.kt)("inlineCode",{parentName:"p"},"501"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET /microservice/configuration")," : export configuration of all business modules.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"POST /microservice/configuration")," : import configuration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET /microservice/ready/enabled")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," if ready feature is implemented, else ",(0,a.kt)("inlineCode",{parentName:"p"},"501"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET /microservice/ready")," : Check if all modules of the microservice is ready to run or if there is missing configurations.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET /microservice/restart/enabled")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," if restart feature is implemented, else ",(0,a.kt)("inlineCode",{parentName:"p"},"501"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET /microservice/restart")," : Restart microservice modules."))),(0,a.kt)("p",null,"Look at ",(0,a.kt)("a",{parentName:"p",href:"/docs/development/backend/framework/starters/module/"},"Module starter")," to know how to implement configuration import/export, ready and restart features at the module level."))}p.isMDXComponent=!0}}]);