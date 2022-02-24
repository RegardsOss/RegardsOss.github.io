"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[97027],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},53002:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"backend-framework-starters-microservice",title:"Microservice starter",slug:"/development/backend/framework/starters/microservice/"},c=void 0,s={unversionedId:"development/backend/framework/starters/backend-framework-starters-microservice",id:"version-1.5.0/development/backend/framework/starters/backend-framework-starters-microservice",title:"Microservice starter",description:"Purpose",source:"@site/versioned_docs/version-1.5.0/development/backend/framework/starters/microservice-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/microservice/",permalink:"/fr/docs/1.5.0/development/backend/framework/starters/microservice/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/framework/starters/microservice-starter.md",tags:[],version:"1.5.0",frontMatter:{id:"backend-framework-starters-microservice",title:"Microservice starter",slug:"/development/backend/framework/starters/microservice/"},sidebar:"version-1.5.0/dev",previous:{title:"Microservice core starter",permalink:"/fr/docs/1.5.0/development/backend/framework/starters/microservice-core/"},next:{title:"Module starter",permalink:"/fr/docs/1.5.0/development/backend/framework/starters/module/"}},m=[{value:"Purpose",id:"purpose",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Autoconfiguration",id:"autoconfiguration",children:[],level:2},{value:"How to",id:"how-to",children:[{value:"Maintenance management",id:"maintenance-management",children:[],level:3},{value:"Module management",id:"module-management",children:[],level:3}],level:2}],d={toc:m};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"This starter is used to enable microservice maitenance feature and module management feature."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards-starter</artifactId>\n</dependency>\n")),(0,i.kt)("p",null,"Business dependency"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards</artifactId>\n</dependency>\n")),(0,i.kt)("p",null,"Dependencies :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../multitenant/"},"Multitenant starter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../module/"},"Module starter")," business package")),(0,i.kt)("p",null,"Properties :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Maintenance mode switch\nregards.microservices.maintenance.enabled=true\n")),(0,i.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,i.kt)("p",null,"Starter autoconfigures REST API endpoints."),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("h3",{id:"maintenance-management"},"Maintenance management"),(0,i.kt)("p",null,"REGARDS microservice can handle a maintennace mode. By default each microservice are not in maintenance mode.\nThe maintenance mode is set individually for each tenant on the system.\nA microservice in maintenance mode can only handle 'GET' request. Each other requests are refused and a ",(0,i.kt)("inlineCode",{parentName:"p"},"403")," forbidden response status is sent."),(0,i.kt)("p",null,"API :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /maintenance")," : get maintenance status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PUT /maintenance/{tenant}/enable")," : set maintenance mode for specified tenant"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PUT /maintenance/{tenant}/disable")," : unset maintenance mode for specified tenant")),(0,i.kt)("h3",{id:"module-management"},"Module management"),(0,i.kt)("p",null,"API :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET /microservice/configuration/enabled")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," if configuration feature is implemented, else ",(0,i.kt)("inlineCode",{parentName:"p"},"501"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET /microservice/configuration")," : export configuration of all business modules.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"POST /microservice/configuration")," : import configuration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET /microservice/ready/enabled")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," if ready feature is implemented, else ",(0,i.kt)("inlineCode",{parentName:"p"},"501"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET /microservice/ready")," : Check if all modules of the microservice is ready to run or if there is missing configurations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET /microservice/restart/enabled")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," if restart feature is implemented, else ",(0,i.kt)("inlineCode",{parentName:"p"},"501"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GET /microservice/restart")," : Restart microservice modules."))),(0,i.kt)("p",null,"Look at ",(0,i.kt)("a",{parentName:"p",href:"../module/"},"Module starter")," to know how to implement configuration import/export, ready and restart features at the module level."))}p.isMDXComponent=!0}}]);