"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[60343],{15680:(e,r,n)=>{n.d(r,{xA:()=>m,yg:()=>g});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},m=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return n?t.createElement(g,o(o({ref:r},m),{},{components:n})):t.createElement(g,o({ref:r},m))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31983:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(58168),a=(n(96540),n(15680));const i={id:"backend-framework-starters-microservice",title:"Microservice starter",slug:"/development/backend/framework/starters/microservice/"},o=void 0,l={unversionedId:"development/backend/framework/starters/backend-framework-starters-microservice",id:"version-1.11.0/development/backend/framework/starters/backend-framework-starters-microservice",title:"Microservice starter",description:"Purpose",source:"@site/versioned_docs/version-1.11.0/development/backend/framework/starters/microservice-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/microservice/",permalink:"/docs/1.11.0/development/backend/framework/starters/microservice/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/framework/starters/microservice-starter.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-framework-starters-microservice",title:"Microservice starter",slug:"/development/backend/framework/starters/microservice/"},sidebar:"dev",previous:{title:"Microservice core starter",permalink:"/docs/1.11.0/development/backend/framework/starters/microservice-core/"},next:{title:"Module starter",permalink:"/docs/1.11.0/development/backend/framework/starters/module/"}},s={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"Maintenance management",id:"maintenance-management",level:3},{value:"Module management",id:"module-management",level:3}],m={toc:c},d="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(d,(0,t.A)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"purpose"},"Purpose"),(0,a.yg)("p",null,"This starter is used to enable microservice maitenance feature and module management feature."),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards-starter</artifactId>\n</dependency>\n")),(0,a.yg)("p",null,"Business dependency"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards</artifactId>\n</dependency>\n")),(0,a.yg)("p",null,"Dependencies :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/multitenant/"},"Multitenant starter")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/module/"},"Module starter")," business package")),(0,a.yg)("p",null,"Properties :"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-properties"},"# Maintenance mode switch\nregards.microservices.maintenance.enabled=true\n")),(0,a.yg)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,a.yg)("p",null,"Starter autoconfigures REST API endpoints."),(0,a.yg)("h2",{id:"how-to"},"How to"),(0,a.yg)("h3",{id:"maintenance-management"},"Maintenance management"),(0,a.yg)("p",null,"REGARDS microservice can handle a maintennace mode. By default each microservice are not in maintenance mode.\nThe maintenance mode is set individually for each tenant on the system.\nA microservice in maintenance mode can only handle 'GET' request. Each other requests are refused and a ",(0,a.yg)("inlineCode",{parentName:"p"},"403")," forbidden response status is sent."),(0,a.yg)("p",null,"API :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"GET /maintenance")," : get maintenance status"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"PUT /maintenance/{tenant}/enable")," : set maintenance mode for specified tenant"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"PUT /maintenance/{tenant}/disable")," : unset maintenance mode for specified tenant")),(0,a.yg)("h3",{id:"module-management"},"Module management"),(0,a.yg)("p",null,"API :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"GET /microservice/configuration/enabled")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200")," if configuration feature is implemented, else ",(0,a.yg)("inlineCode",{parentName:"p"},"501"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"GET /microservice/configuration")," : export configuration of all business modules.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"POST /microservice/configuration")," : import configuration.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"GET /microservice/ready/enabled")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200")," if ready feature is implemented, else ",(0,a.yg)("inlineCode",{parentName:"p"},"501"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"GET /microservice/ready")," : Check if all modules of the microservice is ready to run or if there is missing configurations.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"GET /microservice/restart/enabled")," : ",(0,a.yg)("inlineCode",{parentName:"p"},"200")," if restart feature is implemented, else ",(0,a.yg)("inlineCode",{parentName:"p"},"501"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"GET /microservice/restart")," : Restart microservice modules."))),(0,a.yg)("p",null,"Look at ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.11.0/development/backend/framework/starters/module/"},"Module starter")," to know how to implement configuration import/export, ready and restart features at the module level."))}p.isMDXComponent=!0}}]);