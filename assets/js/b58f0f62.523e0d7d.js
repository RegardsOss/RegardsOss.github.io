"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[73976],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"backend-framework-starters-security",title:"Security starter",slug:"/development/backend/framework/starters/security/"},i=void 0,s={unversionedId:"development/backend/framework/starters/backend-framework-starters-security",id:"development/backend/framework/starters/backend-framework-starters-security",title:"Security starter",description:"Purpose",source:"@site/docs/development/backend/framework/starters/security-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/security/",permalink:"/docs/development/backend/framework/starters/security/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters/security-starter.md",tags:[],version:"current",frontMatter:{id:"backend-framework-starters-security",title:"Security starter",slug:"/development/backend/framework/starters/security/"},sidebar:"dev",previous:{title:"Plugins starter",permalink:"/docs/development/backend/framework/starters/plugins/"},next:{title:"STAF starter",permalink:"/docs/development/backend/framework/starters/staf/"}},l={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to secure endpoints",id:"how-to-secure-endpoints",level:3},{value:"Json Web Token (JWT)",id:"json-web-token-jwt",level:3},{value:"How to retrieve all default endpoint access configuration",id:"how-to-retrieve-all-default-endpoint-access-configuration",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This starter enables security feature."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-regards-starter</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"Business dependency"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-regards</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"Business dependency just containing security annotation and roles. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-config</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"Dependency :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../multitenant/"},"Multitenant starter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../authentication/"},"Authentication starter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../amqp/"},"AMQP starter"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Authorize system to access all endpoints\nregards.security.system.voter.enabled=true\n\n# Authorize instance admin to access all endpoints\nregards.security.instance.voter.enabled=true\n\n# Authorize project admin to access all endpoints\nregards.security.project.admin.voter.enabled=true\n\n# JSON Web Token secret key\njwt.secret=\n")),(0,a.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,a.kt)("p",null,"Security starter overrides ",(0,a.kt)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," (",(0,a.kt)("a",{parentName:"p",href:"../multitenant/"},"Multitenant starter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"IAuthenticationResolver")," (",(0,a.kt)("a",{parentName:"p",href:"../authentication/"},"Authentication starter"),") default behavior to a ",(0,a.kt)("strong",{parentName:"p"},"thread safe")," implementation based on JWT authentification."),(0,a.kt)("p",null,"It autoconfigures :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An authorization service based on a REST endpoint collector ",(0,a.kt)("inlineCode",{parentName:"li"},"IAuthoritiesProvider")," you have to override."),(0,a.kt)("li",{parentName:"ul"},"An authentication provider to retrieve authentication properties from JWT."),(0,a.kt)("li",{parentName:"ul"},"A set of access voter to grant or deny accesses.")),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"how-to-secure-endpoints"},"How to secure endpoints"),(0,a.kt)("p",null,"If this starter is on your classpath, all REST enpoint accesses is intercepted by starter security filter. Access is granted or denied according to custom endpoint configuration."),(0,a.kt)("p",null,"At the beginning, all endpoints have to declare a default access level that can be changed dynamically."),(0,a.kt)("p",null,"To do this, annotate your endpoints with ",(0,a.kt)("inlineCode",{parentName:"p"},"ResourceAccess")," as below :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/hello")\npublic class HelloController {\n\n    @ResourceAccess(description = "Say hello!", role = DefaultRole.PUBLIC)\n    @RequestMapping(method = RequestMethod.GET, value = "/{name}")\n    public ResponseEntity<String> sayHello(@PathVariable("name") String name) {\n        return ResponseEntity.ok(String.format("Hello %s!", name));\n    }\n')),(0,a.kt)("p",null,"By default, all client will have granted access to this PUBLIC endpoint."),(0,a.kt)("p",null,"REGARDS manages five hierarchical default roles :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"INSTANCE_ADMIN, a cross tenant role with very specific behaviour. Endpoints with this level of access cannot be changed and are hidden from tenant users."),(0,a.kt)("li",{parentName:"ul"},"PROJECT_ADMIN (default annotation role) only grant access to the tenant (i.e. project) main administrator(s). If voter is enabled, user with this role will have full access to all endpoints regardless the project access configuration."),(0,a.kt)("li",{parentName:"ul"},"ADMIN (tenant dependant),"),(0,a.kt)("li",{parentName:"ul"},"REGISTERED_USER (tenant dependant),"),(0,a.kt)("li",{parentName:"ul"},"PUBLIC (tenant dependant).")),(0,a.kt)("h3",{id:"json-web-token-jwt"},"Json Web Token (JWT)"),(0,a.kt)("p",null,"This starter depends on JWT authentication token."),(0,a.kt)("p",null,"To be able to decrypt the JWT :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Token has to be provided in a bearer authentication scheme,"),(0,a.kt)("li",{parentName:"ul"},"And has to be generated with starter service ",(0,a.kt)("inlineCode",{parentName:"li"},"JWTService")," that can be found in ",(0,a.kt)("inlineCode",{parentName:"li"},"fr.cnes.regards.framework.security-regards")," module or artifact.")),(0,a.kt)("h3",{id:"how-to-retrieve-all-default-endpoint-access-configuration"},"How to retrieve all default endpoint access configuration"),(0,a.kt)("p",null,"Starter exposes a REST API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /security/resources\n")))}p.isMDXComponent=!0}}]);