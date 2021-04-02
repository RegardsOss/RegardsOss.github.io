(window.webpackJsonp=window.webpackJsonp||[]).push([[1070],{1143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),i=(n(0),n(2708)),c={id:"backend-framework-starters-microservice",title:"Microservice starter",slug:"/development/backend/framework/starters/microservice/"},o={unversionedId:"development/backend/framework/starters/backend-framework-starters-microservice",id:"development/backend/framework/starters/backend-framework-starters-microservice",isDocsHomePage:!1,title:"Microservice starter",description:"Purpose",source:"@site/docs/development/backend/framework/starters/microservice-starter.md",slug:"/development/backend/framework/starters/microservice/",permalink:"/docs/development/backend/framework/starters/microservice/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters/microservice-starter.md",version:"current",sidebar:"dev",previous:{title:"Microservice core starter",permalink:"/docs/development/backend/framework/starters/microservice-core/"},next:{title:"Module starter",permalink:"/docs/development/backend/framework/starters/module/"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"Maintenance management",id:"maintenance-management",children:[]},{value:"Module management",id:"module-management",children:[]}]}],s={toc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"purpose"},"Purpose"),Object(i.b)("p",null,"This starter is used to enable microservice maitenance feature and module management feature."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards-starter</artifactId>\n</dependency>\n")),Object(i.b)("p",null,"Business dependency"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards</artifactId>\n</dependency>\n")),Object(i.b)("p",null,"Dependencies :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../multitenant/"},"Multitenant starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../module/"},"Module starter")," business package")),Object(i.b)("p",null,"Properties :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-properties"},"# Maintenance mode switch\nregards.microservices.maintenance.enabled=true\n")),Object(i.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(i.b)("p",null,"Starter autoconfigures REST API endpoints."),Object(i.b)("h2",{id:"how-to"},"How to"),Object(i.b)("h3",{id:"maintenance-management"},"Maintenance management"),Object(i.b)("p",null,"REGARDS microservice can handle a maintennace mode. By default each microservice are not in maintenance mode.\nThe maintenance mode is set individually for each tenant on the system.\nA microservice in maintenance mode can only handle 'GET' request. Each other requests are refused and a ",Object(i.b)("inlineCode",{parentName:"p"},"403")," forbidden response status is sent."),Object(i.b)("p",null,"API :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET /maintenance")," : get maintenance status"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PUT /maintenance/{tenant}/enable")," : set maintenance mode for specified tenant"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PUT /maintenance/{tenant}/disable")," : unset maintenance mode for specified tenant")),Object(i.b)("h3",{id:"module-management"},"Module management"),Object(i.b)("p",null,"API :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/configuration/enabled")," : ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if configuration feature is implemented, else ",Object(i.b)("inlineCode",{parentName:"p"},"501"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/configuration")," : export configuration of all business modules.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"POST /microservice/configuration")," : import configuration.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/ready/enabled")," : ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if ready feature is implemented, else ",Object(i.b)("inlineCode",{parentName:"p"},"501"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/ready")," : Check if all modules of the microservice is ready to run or if there is missing configurations.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/restart/enabled")," : ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if restart feature is implemented, else ",Object(i.b)("inlineCode",{parentName:"p"},"501"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/restart")," : Restart microservice modules."))),Object(i.b)("p",null,"Look at ",Object(i.b)("a",{parentName:"p",href:"../module/"},"Module starter")," to know how to implement configuration import/export, ready and restart features at the module level."))}m.isMDXComponent=!0},2708:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,u=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(u,o(o({ref:t},s),{},{components:n})):a.a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);