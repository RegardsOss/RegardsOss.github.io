(window.webpackJsonp=window.webpackJsonp||[]).push([[1168],{1238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(2701)),i={id:"backend-framework-starters-security",title:"Security starter",slug:"/development/backend/framework/starters/security"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-security",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-security",isDocsHomePage:!1,title:"Security starter",description:"Purpose",source:"@site/versioned_docs/version-1.4.0/development/backend/framework/starters/security-starter.md",slug:"/development/backend/framework/starters/security",permalink:"/docs/1.4.0/development/backend/framework/starters/security",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/framework/starters/security-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"Plugins starter",permalink:"/docs/1.4.0/development/backend/framework/starters/plugins"},next:{title:"STAF starter",permalink:"/docs/1.4.0/development/backend/framework/starters/staf"}},s=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"How to secure endpoints",id:"how-to-secure-endpoints",children:[]},{value:"Json Web Token (JWT)",id:"json-web-token-jwt",children:[]},{value:"How to retrieve all default endpoint access configuration",id:"how-to-retrieve-all-default-endpoint-access-configuration",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"This starter enables security feature."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-regards-starter</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"Business dependency"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-regards</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"Business dependency just containing security annotation and roles. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-config</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"Dependency :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"multitenant"},"Multitenant starter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"authentication"},"Authentication starter")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"amqp"},"AMQP starter"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"# Authorize system to access all endpoints\nregards.security.system.voter.enabled=true\n\n# Authorize instance admin to access all endpoints\nregards.security.instance.voter.enabled=true\n\n# Authorize project admin to access all endpoints\nregards.security.project.admin.voter.enabled=true\n\n# JSON Web Token secret key\njwt.secret=\n")),Object(o.b)("h2",{id:"autoconfiguration"},"Autoconfiguration"),Object(o.b)("p",null,"Security starter overrides ",Object(o.b)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," (",Object(o.b)("a",{parentName:"p",href:"multitenant"},"Multitenant starter"),") and ",Object(o.b)("inlineCode",{parentName:"p"},"IAuthenticationResolver")," (",Object(o.b)("a",{parentName:"p",href:"authentication"},"Authentication starter"),") default behavior to a ",Object(o.b)("strong",{parentName:"p"},"thread safe")," implementation based on JWT authentification."),Object(o.b)("p",null,"It autoconfigures :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An authorization service based on a REST endpoint collector ",Object(o.b)("inlineCode",{parentName:"li"},"IAuthoritiesProvider")," you have to override."),Object(o.b)("li",{parentName:"ul"},"An authentication provider to retrieve authentication properties from JWT."),Object(o.b)("li",{parentName:"ul"},"A set of access voter to grant or deny accesses.")),Object(o.b)("h2",{id:"how-to"},"How to"),Object(o.b)("h3",{id:"how-to-secure-endpoints"},"How to secure endpoints"),Object(o.b)("p",null,"If this starter is on your classpath, all REST enpoint accesses is intercepted by starter security filter. Access is granted or denied according to custom endpoint configuration."),Object(o.b)("p",null,"At the beginning, all endpoints have to declare a default access level that can be changed dynamically."),Object(o.b)("p",null,"To do this, annotate your endpoints with ",Object(o.b)("inlineCode",{parentName:"p"},"ResourceAccess")," as below :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("/hello")\npublic class HelloController {\n\n    @ResourceAccess(description = "Say hello!", role = DefaultRole.PUBLIC)\n    @RequestMapping(method = RequestMethod.GET, value = "/{name}")\n    public ResponseEntity<String> sayHello(@PathVariable("name") String name) {\n        return ResponseEntity.ok(String.format("Hello %s!", name));\n    }\n')),Object(o.b)("p",null,"By default, all client will have granted access to this PUBLIC endpoint."),Object(o.b)("p",null,"REGARDS manages five hierarchical default roles :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"INSTANCE_ADMIN, a cross tenant role with very specific behaviour. Endpoints with this level of access cannot be changed and are hidden from tenant users."),Object(o.b)("li",{parentName:"ul"},"PROJECT_ADMIN (default annotation role) only grant access to the tenant (i.e. project) main administrator(s). If voter is enabled, user with this role will have full access to all endpoints regardless the project access configuration."),Object(o.b)("li",{parentName:"ul"},"ADMIN (tenant dependant),"),Object(o.b)("li",{parentName:"ul"},"REGISTERED_USER (tenant dependant),"),Object(o.b)("li",{parentName:"ul"},"PUBLIC (tenant dependant).")),Object(o.b)("h3",{id:"json-web-token-jwt"},"Json Web Token (JWT)"),Object(o.b)("p",null,"This starter depends on JWT authentication token."),Object(o.b)("p",null,"To be able to decrypt the JWT :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Token has to be provided in a bearer authentication scheme,"),Object(o.b)("li",{parentName:"ul"},"And has to be generated with starter service ",Object(o.b)("inlineCode",{parentName:"li"},"JWTService")," that can be found in ",Object(o.b)("inlineCode",{parentName:"li"},"fr.cnes.regards.framework.security-regards")," module or artifact.")),Object(o.b)("h3",{id:"how-to-retrieve-all-default-endpoint-access-configuration"},"How to retrieve all default endpoint access configuration"),Object(o.b)("p",null,"Starter exposes a REST API."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GET /security/resources\n")))}u.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);