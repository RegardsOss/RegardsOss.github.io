"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[72933],{47994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(74848),a=t(28453);const i={id:"backend-framework-starters-feign",title:"Feign starter",slug:"/development/backend/framework/starters/feign/"},s=void 0,o={id:"development/framework/starters/backend-framework-starters-feign",title:"Feign starter",description:"Purpose",source:"@site/docs/development/framework/starters/feign-starter.md",sourceDirName:"development/framework/starters",slug:"/development/backend/framework/starters/feign/",permalink:"/docs/development/backend/framework/starters/feign/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/framework/starters/feign-starter.md",tags:[],version:"current",frontMatter:{id:"backend-framework-starters-feign",title:"Feign starter",slug:"/development/backend/framework/starters/feign/"},sidebar:"dev",previous:{title:"Encryption starter",permalink:"/docs/development/backend/framework/starters/encryption/"},next:{title:"GeoJSON starter",permalink:"/docs/development/backend/framework/starters/geojson/"}},c={},l=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to create a client",id:"how-to-create-a-client",level:3},{value:"How to use a client",id:"how-to-use-a-client",level:3},{value:"How to make a system (i.e. internal) call",id:"how-to-make-a-system-ie-internal-call",level:3},{value:"How to create a client programmatically",id:"how-to-create-a-client-programmatically",level:3},{value:"How to mock Feign",id:"how-to-mock-feign",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,r.jsx)(n.p,{children:"This starters enables Feign client discovery and use. Feign clients are REST clients used for synchronous HTTP communications between microservices. Requests are automatically load balanced."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Add starter dependency to your POM (version depends on the REGARDS BOM)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>feign-regards-starter</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Dependency :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/development/backend/framework/starters/multitenant/",children:"Multitenant starter"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/development/backend/framework/starters/gson/",children:"GSON starter"})}),"\n",(0,r.jsx)(n.li,{children:"Security utils to manage Json Web Tokens"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"# See multitenant starter properties\n# Security utils needs JWT secret\n"})}),"\n",(0,r.jsx)(n.h2,{id:"autoconfiguration",children:"Autoconfiguration"}),"\n",(0,r.jsx)(n.p,{children:"Starter autoconfigures:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FeignSecurityManager"})," to manage security token injection into request headers."]}),"\n",(0,r.jsxs)(n.li,{children:["Enable automatic client discovery in package ",(0,r.jsx)(n.code,{children:"fr.cnes.regards"})," (unless ",(0,r.jsx)(n.code,{children:"test"})," profile is activated)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"how-to",children:"How to"}),"\n",(0,r.jsx)(n.h3,{id:"how-to-create-a-client",children:"How to create a client"}),"\n",(0,r.jsxs)(n.p,{children:["Create a Spring MVC interface annotated with ",(0,r.jsx)(n.code,{children:"RestClient"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@RestClient(name = "targetMicroserviceName")\n@RequestMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)\npublic interface IHelloClient {\n\n    @RequestMapping(method = RequestMethod.GET, value = "/hello")\n    ResponseEntity<Hello> getHello();\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["When using request or path parameters, you have to explicitly declare expected names (e.g. ",(0,r.jsx)(n.code,{children:'@PathVariable("param_name")'}),")!"]})}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["Produce and consume format has to be set to JSON in ",(0,r.jsx)(n.code,{children:"@RequestMapping"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use-a-client",children:"How to use a client"}),"\n",(0,r.jsxs)(n.p,{children:["Importing Feign starter in your pom.xml, all classes annotated with ",(0,r.jsx)(n.code,{children:"RestClient"})," are automatically discovered in package ",(0,r.jsx)(n.code,{children:"fr.cnes.regards"}),".\nSo, you can ",(0,r.jsx)(n.code,{children:"@Autowired"})," it in your service."]}),"\n",(0,r.jsxs)(n.p,{children:["If client is in a different package, use ",(0,r.jsx)(n.code,{children:"@EnableFeignClients"})," in a configuration class to declare this package."]}),"\n",(0,r.jsx)(n.h3,{id:"how-to-make-a-system-ie-internal-call",children:"How to make a system (i.e. internal) call"}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.code,{children:"FeignSecurityManager"})," propagates user token in Feign request from security holder."]}),"\n",(0,r.jsxs)(n.p,{children:["To call an endpoint as system, you must inform ",(0,r.jsx)(n.code,{children:"FeignSecurityManager"})," before process request."]}),"\n",(0,r.jsxs)(n.p,{children:["If you act as a daemon and you have to manage tenant in ",(0,r.jsx)(n.strong,{children:"system"})," client call, use ",(0,r.jsx)(n.code,{children:"IRuntimeTenantResolver"})," to force the right tenant."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'try {\n  // Optionnaly specify working tenant (thread safe action)\n  runtimeTenantResolver.forceTenant("tenant");\n  // Enable system call as follow (thread safe action)\n  FeignSecurityManager.asSystem();\n  // Process client request ...\n} finally {\n  // We advice you to clean context\n  runtimeTenantResolver.clearTenant();\n  FeignSecurityManager.reset();\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-create-a-client-programmatically",children:"How to create a client programmatically"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"FeignClientBuilder"}),", ",(0,r.jsx)(n.code,{children:"TokenClientProvider"})," and ",(0,r.jsx)(n.code,{children:"FeignSecurityManager"})," to init one :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'MyClient client = FeignClientBuilder.build(new TokenClientProvider<>(MyClient.class,\n        "url", feignSecurityManager));\n'})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-mock-feign",children:"How to mock Feign"}),"\n",(0,r.jsxs)(n.p,{children:["Feign starter allows to disable client discovery. To do so, run the tests in a ",(0,r.jsx)(n.code,{children:"test"})," profile (use ",(0,r.jsx)(n.code,{children:"@ActiveProfiles"}),") and mock your clients as you wish (using stub, Mockito, etc.)."]}),"\n",(0,r.jsx)(n.p,{children:"If you set your own annotation on a configuration class, we recommend to add profile annotation as follow to be able to mock client in test profile :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@Profile("!test")\n@Configuration\n@EnableFeignClients("your.package")\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);