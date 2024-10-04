"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[16685],{51333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(74848),s=t(28453);const a={id:"backend-framework-starters-security",title:"Security starter",slug:"/development/backend/framework/starters/security/"},i=void 0,o={id:"development/backend/framework/starters/backend-framework-starters-security",title:"Security starter",description:"Purpose",source:"@site/versioned_docs/version-1.13.0/development/backend/framework/starters/security-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/security/",permalink:"/docs/1.13.0/development/backend/framework/starters/security/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/framework/starters/security-starter.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-framework-starters-security",title:"Security starter",slug:"/development/backend/framework/starters/security/"},sidebar:"dev",previous:{title:"Plugins starter",permalink:"/docs/1.13.0/development/backend/framework/starters/plugins/"},next:{title:"STAF starter",permalink:"/docs/1.13.0/development/backend/framework/starters/staf/"}},c={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to secure endpoints",id:"how-to-secure-endpoints",level:3},{value:"Json Web Token (JWT)",id:"json-web-token-jwt",level:3},{value:"How to retrieve all default endpoint access configuration",id:"how-to-retrieve-all-default-endpoint-access-configuration",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,r.jsx)(n.p,{children:"This starter enables security feature."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Add starter dependency to your POM (version depends on the REGARDS BOM)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-regards-starter</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Business dependency"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-regards</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Business dependency just containing security annotation and roles."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>security-config</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Dependency :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/1.13.0/development/backend/framework/starters/multitenant/",children:"Multitenant starter"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/1.13.0/development/backend/framework/starters/authentication/",children:"Authentication starter"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/1.13.0/development/backend/framework/starters/amqp/",children:"AMQP starter"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"# Authorize system to access all endpoints\nregards.security.system.voter.enabled=true\n\n# Authorize instance admin to access all endpoints\nregards.security.instance.voter.enabled=true\n\n# Authorize project admin to access all endpoints\nregards.security.project.admin.voter.enabled=true\n\n# JSON Web Token secret key\njwt.secret=\n"})}),"\n",(0,r.jsx)(n.h2,{id:"autoconfiguration",children:"Autoconfiguration"}),"\n",(0,r.jsxs)(n.p,{children:["Security starter overrides ",(0,r.jsx)(n.code,{children:"IRuntimeTenantResolver"})," (",(0,r.jsx)(n.a,{href:"/docs/1.13.0/development/backend/framework/starters/multitenant/",children:"Multitenant starter"})," and ",(0,r.jsx)(n.code,{children:"IAuthenticationResolver"})," (",(0,r.jsx)(n.a,{href:"/docs/1.13.0/development/backend/framework/starters/authentication/",children:"Authentication starter"}),") default behavior to a ",(0,r.jsx)(n.strong,{children:"thread safe"})," implementation based on JWT authentification."]}),"\n",(0,r.jsx)(n.p,{children:"It autoconfigures :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["An authorization service based on a REST endpoint collector ",(0,r.jsx)(n.code,{children:"IAuthoritiesProvider"})," you have to override."]}),"\n",(0,r.jsx)(n.li,{children:"An authentication provider to retrieve authentication properties from JWT."}),"\n",(0,r.jsx)(n.li,{children:"A set of access voter to grant or deny accesses."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"how-to",children:"How to"}),"\n",(0,r.jsx)(n.h3,{id:"how-to-secure-endpoints",children:"How to secure endpoints"}),"\n",(0,r.jsx)(n.p,{children:"If this starter is on your classpath, all REST enpoint accesses is intercepted by starter security filter. Access is granted or denied according to custom endpoint configuration."}),"\n",(0,r.jsx)(n.p,{children:"At the beginning, all endpoints have to declare a default access level that can be changed dynamically."}),"\n",(0,r.jsxs)(n.p,{children:["To do this, annotate your endpoints with ",(0,r.jsx)(n.code,{children:"ResourceAccess"})," as below :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@RestController\n@RequestMapping("/hello")\npublic class HelloController {\n\n    @ResourceAccess(description = "Say hello!", role = DefaultRole.PUBLIC)\n    @RequestMapping(method = RequestMethod.GET, value = "/{name}")\n    public ResponseEntity<String> sayHello(@PathVariable("name") String name) {\n        return ResponseEntity.ok(String.format("Hello %s!", name));\n    }\n'})}),"\n",(0,r.jsx)(n.p,{children:"By default, all client will have granted access to this PUBLIC endpoint."}),"\n",(0,r.jsx)(n.p,{children:"REGARDS manages five hierarchical default roles :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"INSTANCE_ADMIN, a cross tenant role with very specific behaviour. Endpoints with this level of access cannot be changed and are hidden from tenant users."}),"\n",(0,r.jsx)(n.li,{children:"PROJECT_ADMIN (default annotation role) only grant access to the tenant (i.e. project) main administrator(s). If voter is enabled, user with this role will have full access to all endpoints regardless the project access configuration."}),"\n",(0,r.jsx)(n.li,{children:"ADMIN (tenant dependant),"}),"\n",(0,r.jsx)(n.li,{children:"REGISTERED_USER (tenant dependant),"}),"\n",(0,r.jsx)(n.li,{children:"PUBLIC (tenant dependant)."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"json-web-token-jwt",children:"Json Web Token (JWT)"}),"\n",(0,r.jsx)(n.p,{children:"This starter depends on JWT authentication token."}),"\n",(0,r.jsx)(n.p,{children:"To be able to decrypt the JWT :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Token has to be provided in a bearer authentication scheme,"}),"\n",(0,r.jsxs)(n.li,{children:["And has to be generated with starter service ",(0,r.jsx)(n.code,{children:"JWTService"})," that can be found in ",(0,r.jsx)(n.code,{children:"fr.cnes.regards.framework.security-regards"})," module or artifact."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"how-to-retrieve-all-default-endpoint-access-configuration",children:"How to retrieve all default endpoint access configuration"}),"\n",(0,r.jsx)(n.p,{children:"Starter exposes a REST API."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /security/resources\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);