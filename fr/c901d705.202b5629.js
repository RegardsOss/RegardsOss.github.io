(window.webpackJsonp=window.webpackJsonp||[]).push([[2059],{2129:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return m}));var r=t(3),a=t(7),i=(t(0),t(2699)),o={id:"backend-framework-starters-microservice",title:"Microservice starter",slug:"/development/backend/framework/starters/microservice"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-microservice",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-microservice",isDocsHomePage:!1,title:"Microservice starter",description:"Purpose",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/starters/microservice-starter.md",slug:"/development/backend/framework/starters/microservice",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/microservice",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/starters/microservice-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"Microservice core starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/microservice-core"},next:{title:"Module starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/module"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"Maintenance management",id:"maintenance-management",children:[]},{value:"Module management",id:"module-management",children:[]}]}],s={toc:l};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"purpose"},"Purpose"),Object(i.b)("p",null,"This starter is used to enable microservice maitenance feature and module management feature."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards-starter</artifactId>\n</dependency>\n")),Object(i.b)("p",null,"Business dependency"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards</artifactId>\n</dependency>\n")),Object(i.b)("p",null,"Dependencies :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"multitenant"},"Multitenant starter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"module"},"Module starter")," business package")),Object(i.b)("p",null,"Properties :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-properties"},"# Maintenance mode switch\nregards.microservices.maintenance.enabled=true\n")),Object(i.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(i.b)("p",null,"Starter autoconfigures REST API endpoints."),Object(i.b)("h2",{id:"how-to"},"How to"),Object(i.b)("h3",{id:"maintenance-management"},"Maintenance management"),Object(i.b)("p",null,"REGARDS microservice can handle a maintennace mode. By default each microservice are not in maintenance mode.\nThe maintenance mode is set individually for each tenant on the system.\nA microservice in maintenance mode can only handle 'GET' request. Each other requests are refused and a ",Object(i.b)("inlineCode",{parentName:"p"},"403")," forbidden response status is sent."),Object(i.b)("p",null,"API :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET /maintenance")," : get maintenance status"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PUT /maintenance/{tenant}/enable")," : set maintenance mode for specified tenant"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PUT /maintenance/{tenant}/disable")," : unset maintenance mode for specified tenant")),Object(i.b)("h3",{id:"module-management"},"Module management"),Object(i.b)("p",null,"API :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/configuration/enabled")," : ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if configuration feature is implemented, else ",Object(i.b)("inlineCode",{parentName:"p"},"501"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/configuration")," : export configuration of all business modules.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"POST /microservice/configuration")," : import configuration.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/ready/enabled")," : ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if ready feature is implemented, else ",Object(i.b)("inlineCode",{parentName:"p"},"501"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/ready")," : Check if all modules of the microservice is ready to run or if there is missing configurations.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/restart/enabled")," : ",Object(i.b)("inlineCode",{parentName:"p"},"200")," if restart feature is implemented, else ",Object(i.b)("inlineCode",{parentName:"p"},"501"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"GET /microservice/restart")," : Restart microservice modules."))),Object(i.b)("p",null,"Look at ",Object(i.b)("a",{parentName:"p",href:"module"},"Module starter")," to know how to implement configuration import/export, ready and restart features at the module level."))}m.isMDXComponent=!0},2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),m=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=m(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(t),u=r,b=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);