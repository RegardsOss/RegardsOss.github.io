"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[2902],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76474:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"backend-framework-starters-security",title:"Security starter",slug:"/development/backend/framework/starters/security/"},l=void 0,c={unversionedId:"development/backend/framework/starters/backend-framework-starters-security",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-security",isDocsHomePage:!1,title:"Security starter",description:"Purpose",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/starters/security-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/security/",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/security/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/starters/security-starter.md",tags:[],version:"1.4.0",frontMatter:{id:"backend-framework-starters-security",title:"Security starter",slug:"/development/backend/framework/starters/security/"},sidebar:"version-1.4.0/dev",previous:{title:"Plugins starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/plugins/"},next:{title:"STAF starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/staf/"}},u=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"How to secure endpoints",id:"how-to-secure-endpoints",children:[]},{value:"Json Web Token (JWT)",id:"json-web-token-jwt",children:[]},{value:"How to retrieve all default endpoint access configuration",id:"how-to-retrieve-all-default-endpoint-access-configuration",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"This starter enables security feature."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-regards-starter</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"Business dependency"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-regards</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"Business dependency just containing security annotation and roles. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-config</artifactId>\n</dependency>\n")),(0,o.kt)("p",null,"Dependency :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../multitenant/"},"Multitenant starter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../authentication/"},"Authentication starter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../amqp/"},"AMQP starter"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# Authorize system to access all endpoints\nregards.security.system.voter.enabled=true\n\n# Authorize instance admin to access all endpoints\nregards.security.instance.voter.enabled=true\n\n# Authorize project admin to access all endpoints\nregards.security.project.admin.voter.enabled=true\n\n# JSON Web Token secret key\njwt.secret=\n")),(0,o.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,o.kt)("p",null,"Security starter overrides ",(0,o.kt)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," (",(0,o.kt)("a",{parentName:"p",href:"../multitenant/"},"Multitenant starter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"IAuthenticationResolver")," (",(0,o.kt)("a",{parentName:"p",href:"../authentication/"},"Authentication starter"),") default behavior to a ",(0,o.kt)("strong",{parentName:"p"},"thread safe")," implementation based on JWT authentification."),(0,o.kt)("p",null,"It autoconfigures :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An authorization service based on a REST endpoint collector ",(0,o.kt)("inlineCode",{parentName:"li"},"IAuthoritiesProvider")," you have to override."),(0,o.kt)("li",{parentName:"ul"},"An authentication provider to retrieve authentication properties from JWT."),(0,o.kt)("li",{parentName:"ul"},"A set of access voter to grant or deny accesses.")),(0,o.kt)("h2",{id:"how-to"},"How to"),(0,o.kt)("h3",{id:"how-to-secure-endpoints"},"How to secure endpoints"),(0,o.kt)("p",null,"If this starter is on your classpath, all REST enpoint accesses is intercepted by starter security filter. Access is granted or denied according to custom endpoint configuration."),(0,o.kt)("p",null,"At the beginning, all endpoints have to declare a default access level that can be changed dynamically."),(0,o.kt)("p",null,"To do this, annotate your endpoints with ",(0,o.kt)("inlineCode",{parentName:"p"},"ResourceAccess")," as below :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/hello")\npublic class HelloController {\n\n    @ResourceAccess(description = "Say hello!", role = DefaultRole.PUBLIC)\n    @RequestMapping(method = RequestMethod.GET, value = "/{name}")\n    public ResponseEntity<String> sayHello(@PathVariable("name") String name) {\n        return ResponseEntity.ok(String.format("Hello %s!", name));\n    }\n')),(0,o.kt)("p",null,"By default, all client will have granted access to this PUBLIC endpoint."),(0,o.kt)("p",null,"REGARDS manages five hierarchical default roles :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"INSTANCE_ADMIN, a cross tenant role with very specific behaviour. Endpoints with this level of access cannot be changed and are hidden from tenant users."),(0,o.kt)("li",{parentName:"ul"},"PROJECT_ADMIN (default annotation role) only grant access to the tenant (i.e. project) main administrator(s). If voter is enabled, user with this role will have full access to all endpoints regardless the project access configuration."),(0,o.kt)("li",{parentName:"ul"},"ADMIN (tenant dependant),"),(0,o.kt)("li",{parentName:"ul"},"REGISTERED_USER (tenant dependant),"),(0,o.kt)("li",{parentName:"ul"},"PUBLIC (tenant dependant).")),(0,o.kt)("h3",{id:"json-web-token-jwt"},"Json Web Token (JWT)"),(0,o.kt)("p",null,"This starter depends on JWT authentication token."),(0,o.kt)("p",null,"To be able to decrypt the JWT :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Token has to be provided in a bearer authentication scheme,"),(0,o.kt)("li",{parentName:"ul"},"And has to be generated with starter service ",(0,o.kt)("inlineCode",{parentName:"li"},"JWTService")," that can be found in ",(0,o.kt)("inlineCode",{parentName:"li"},"fr.cnes.regards.framework.security-regards")," module or artifact.")),(0,o.kt)("h3",{id:"how-to-retrieve-all-default-endpoint-access-configuration"},"How to retrieve all default endpoint access configuration"),(0,o.kt)("p",null,"Starter exposes a REST API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /security/resources\n")))}p.isMDXComponent=!0}}]);