"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[65609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"backend-framework-starters-feign",title:"Feign starter",slug:"/development/backend/framework/starters/feign/"},i=void 0,l={unversionedId:"development/backend/framework/starters/backend-framework-starters-feign",id:"version-1.7.1/development/backend/framework/starters/backend-framework-starters-feign",title:"Feign starter",description:"Purpose",source:"@site/versioned_docs/version-1.7.1/development/backend/framework/starters/feign-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/feign/",permalink:"/docs/1.7.1/development/backend/framework/starters/feign/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/framework/starters/feign-starter.md",tags:[],version:"1.7.1",frontMatter:{id:"backend-framework-starters-feign",title:"Feign starter",slug:"/development/backend/framework/starters/feign/"},sidebar:"dev",previous:{title:"Encryption starter",permalink:"/docs/1.7.1/development/backend/framework/starters/encryption/"},next:{title:"GeoJSON starter",permalink:"/docs/1.7.1/development/backend/framework/starters/geojson/"}},s={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to create a client",id:"how-to-create-a-client",level:3},{value:"How to use a client",id:"how-to-use-a-client",level:3},{value:"How to make a system (i.e. internal) call",id:"how-to-make-a-system-ie-internal-call",level:3},{value:"How to create a client programmatically",id:"how-to-create-a-client-programmatically",level:3},{value:"How to mock Feign",id:"how-to-mock-feign",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"This starters enables Feign client discovery and use. Feign clients are REST clients used for synchronous HTTP communications between microservices. Requests are automatically load balanced."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>feign-regards-starter</artifactId>\n</dependency>\n")),(0,r.kt)("p",null,"Dependency :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../multitenant/"},"Multitenant starter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../gson/"},"GSON starter")),(0,r.kt)("li",{parentName:"ul"},"Security utils to manage Json Web Tokens")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# See multitenant starter properties\n# Security utils needs JWT secret\n")),(0,r.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,r.kt)("p",null,"Starter autoconfigures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FeignSecurityManager")," to manage security token injection into request headers."),(0,r.kt)("li",{parentName:"ul"},"Enable automatic client discovery in package ",(0,r.kt)("inlineCode",{parentName:"li"},"fr.cnes.regards")," (unless ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," profile is activated)")),(0,r.kt)("h2",{id:"how-to"},"How to"),(0,r.kt)("h3",{id:"how-to-create-a-client"},"How to create a client"),(0,r.kt)("p",null,"Create a Spring MVC interface annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"RestClient")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RestClient(name = "targetMicroserviceName")\n@RequestMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)\npublic interface IHelloClient {\n\n    @RequestMapping(method = RequestMethod.GET, value = "/hello")\n    ResponseEntity<Hello> getHello();\n}\n')),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"When using request or path parameters, you have to explicitly declare expected names (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'@PathVariable("param_name")'),")!")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Produce and consume format has to be set to JSON in ",(0,r.kt)("inlineCode",{parentName:"p"},"@RequestMapping"),".")),(0,r.kt)("h3",{id:"how-to-use-a-client"},"How to use a client"),(0,r.kt)("p",null,"Importing Feign starter in your pom.xml, all classes annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"RestClient")," are automatically discovered in package ",(0,r.kt)("inlineCode",{parentName:"p"},"fr.cnes.regards"),".\nSo, you can ",(0,r.kt)("inlineCode",{parentName:"p"},"@Autowired")," it in your service."),(0,r.kt)("p",null,"If client is in a different package, use ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableFeignClients")," in a configuration class to declare this package."),(0,r.kt)("h3",{id:"how-to-make-a-system-ie-internal-call"},"How to make a system (i.e. internal) call"),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"FeignSecurityManager")," propagates user token in Feign request from security holder."),(0,r.kt)("p",null,"To call an endpoint as system, you must inform ",(0,r.kt)("inlineCode",{parentName:"p"},"FeignSecurityManager")," before process request."),(0,r.kt)("p",null,"If you act as a daemon and you have to manage tenant in ",(0,r.kt)("strong",{parentName:"p"},"system")," client call, use ",(0,r.kt)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," to force the right tenant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'try {\n  // Optionnaly specify working tenant (thread safe action)\n  runtimeTenantResolver.forceTenant("tenant");\n  // Enable system call as follow (thread safe action)\n  FeignSecurityManager.asSystem();\n  // Process client request ...\n} finally {\n  // We advice you to clean context\n  runtimeTenantResolver.clearTenant();\n  FeignSecurityManager.reset();\n}\n')),(0,r.kt)("h3",{id:"how-to-create-a-client-programmatically"},"How to create a client programmatically"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"FeignClientBuilder"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenClientProvider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FeignSecurityManager")," to init one :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'MyClient client = FeignClientBuilder.build(new TokenClientProvider<>(MyClient.class,\n        "url", feignSecurityManager));\n')),(0,r.kt)("h3",{id:"how-to-mock-feign"},"How to mock Feign"),(0,r.kt)("p",null,"Feign starter allows to disable client discovery. To do so, run the tests in a ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," profile (use ",(0,r.kt)("inlineCode",{parentName:"p"},"@ActiveProfiles"),") and mock your clients as you wish (using stub, Mockito, etc.)."),(0,r.kt)("p",null,"If you set your own annotation on a configuration class, we recommend to add profile annotation as follow to be able to mock client in test profile :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Profile("!test")\n@Configuration\n@EnableFeignClients("your.package")\n')))}u.isMDXComponent=!0}}]);