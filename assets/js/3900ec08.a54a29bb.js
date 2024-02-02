"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[22688],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>m});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(45072),r=(t(11504),t(95788));const o={id:"backend-framework-starters-feign",title:"Feign starter",slug:"/development/backend/framework/starters/feign/"},i=void 0,l={unversionedId:"development/backend/framework/starters/backend-framework-starters-feign",id:"version-1.11.0/development/backend/framework/starters/backend-framework-starters-feign",title:"Feign starter",description:"Purpose",source:"@site/versioned_docs/version-1.11.0/development/backend/framework/starters/feign-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/feign/",permalink:"/docs/1.11.0/development/backend/framework/starters/feign/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/framework/starters/feign-starter.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-framework-starters-feign",title:"Feign starter",slug:"/development/backend/framework/starters/feign/"},sidebar:"dev",previous:{title:"Encryption starter",permalink:"/docs/1.11.0/development/backend/framework/starters/encryption/"},next:{title:"GeoJSON starter",permalink:"/docs/1.11.0/development/backend/framework/starters/geojson/"}},s={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to create a client",id:"how-to-create-a-client",level:3},{value:"How to use a client",id:"how-to-use-a-client",level:3},{value:"How to make a system (i.e. internal) call",id:"how-to-make-a-system-ie-internal-call",level:3},{value:"How to create a client programmatically",id:"how-to-create-a-client-programmatically",level:3},{value:"How to mock Feign",id:"how-to-mock-feign",level:3}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"purpose"},"Purpose"),(0,r.yg)("p",null,"This starters enables Feign client discovery and use. Feign clients are REST clients used for synchronous HTTP communications between microservices. Requests are automatically load balanced."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>feign-regards-starter</artifactId>\n</dependency>\n")),(0,r.yg)("p",null,"Dependency :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/multitenant/"},"Multitenant starter")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/framework/starters/gson/"},"GSON starter")),(0,r.yg)("li",{parentName:"ul"},"Security utils to manage Json Web Tokens")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"# See multitenant starter properties\n# Security utils needs JWT secret\n")),(0,r.yg)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,r.yg)("p",null,"Starter autoconfigures:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"FeignSecurityManager")," to manage security token injection into request headers."),(0,r.yg)("li",{parentName:"ul"},"Enable automatic client discovery in package ",(0,r.yg)("inlineCode",{parentName:"li"},"fr.cnes.regards")," (unless ",(0,r.yg)("inlineCode",{parentName:"li"},"test")," profile is activated)")),(0,r.yg)("h2",{id:"how-to"},"How to"),(0,r.yg)("h3",{id:"how-to-create-a-client"},"How to create a client"),(0,r.yg)("p",null,"Create a Spring MVC interface annotated with ",(0,r.yg)("inlineCode",{parentName:"p"},"RestClient")," :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'@RestClient(name = "targetMicroserviceName")\n@RequestMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)\npublic interface IHelloClient {\n\n    @RequestMapping(method = RequestMethod.GET, value = "/hello")\n    ResponseEntity<Hello> getHello();\n}\n')),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"When using request or path parameters, you have to explicitly declare expected names (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},'@PathVariable("param_name")'),")!")),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Produce and consume format has to be set to JSON in ",(0,r.yg)("inlineCode",{parentName:"p"},"@RequestMapping"),".")),(0,r.yg)("h3",{id:"how-to-use-a-client"},"How to use a client"),(0,r.yg)("p",null,"Importing Feign starter in your pom.xml, all classes annotated with ",(0,r.yg)("inlineCode",{parentName:"p"},"RestClient")," are automatically discovered in package ",(0,r.yg)("inlineCode",{parentName:"p"},"fr.cnes.regards"),".\nSo, you can ",(0,r.yg)("inlineCode",{parentName:"p"},"@Autowired")," it in your service."),(0,r.yg)("p",null,"If client is in a different package, use ",(0,r.yg)("inlineCode",{parentName:"p"},"@EnableFeignClients")," in a configuration class to declare this package."),(0,r.yg)("h3",{id:"how-to-make-a-system-ie-internal-call"},"How to make a system (i.e. internal) call"),(0,r.yg)("p",null,"By default, ",(0,r.yg)("inlineCode",{parentName:"p"},"FeignSecurityManager")," propagates user token in Feign request from security holder."),(0,r.yg)("p",null,"To call an endpoint as system, you must inform ",(0,r.yg)("inlineCode",{parentName:"p"},"FeignSecurityManager")," before process request."),(0,r.yg)("p",null,"If you act as a daemon and you have to manage tenant in ",(0,r.yg)("strong",{parentName:"p"},"system")," client call, use ",(0,r.yg)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," to force the right tenant."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'try {\n  // Optionnaly specify working tenant (thread safe action)\n  runtimeTenantResolver.forceTenant("tenant");\n  // Enable system call as follow (thread safe action)\n  FeignSecurityManager.asSystem();\n  // Process client request ...\n} finally {\n  // We advice you to clean context\n  runtimeTenantResolver.clearTenant();\n  FeignSecurityManager.reset();\n}\n')),(0,r.yg)("h3",{id:"how-to-create-a-client-programmatically"},"How to create a client programmatically"),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"FeignClientBuilder"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"TokenClientProvider")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"FeignSecurityManager")," to init one :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'MyClient client = FeignClientBuilder.build(new TokenClientProvider<>(MyClient.class,\n        "url", feignSecurityManager));\n')),(0,r.yg)("h3",{id:"how-to-mock-feign"},"How to mock Feign"),(0,r.yg)("p",null,"Feign starter allows to disable client discovery. To do so, run the tests in a ",(0,r.yg)("inlineCode",{parentName:"p"},"test")," profile (use ",(0,r.yg)("inlineCode",{parentName:"p"},"@ActiveProfiles"),") and mock your clients as you wish (using stub, Mockito, etc.)."),(0,r.yg)("p",null,"If you set your own annotation on a configuration class, we recommend to add profile annotation as follow to be able to mock client in test profile :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'@Profile("!test")\n@Configuration\n@EnableFeignClients("your.package")\n')))}g.isMDXComponent=!0}}]);