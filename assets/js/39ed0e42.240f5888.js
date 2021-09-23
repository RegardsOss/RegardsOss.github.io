"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88300],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47026:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"backend-framework-starters-feign",title:"Feign starter",slug:"/development/backend/framework/starters/feign/"},s=void 0,c={unversionedId:"development/backend/framework/starters/backend-framework-starters-feign",id:"version-1.5.0/development/backend/framework/starters/backend-framework-starters-feign",isDocsHomePage:!1,title:"Feign starter",description:"Purpose",source:"@site/versioned_docs/version-1.5.0/development/backend/framework/starters/feign-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/feign/",permalink:"/docs/1.5.0/development/backend/framework/starters/feign/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/framework/starters/feign-starter.md",version:"1.5.0",frontMatter:{id:"backend-framework-starters-feign",title:"Feign starter",slug:"/development/backend/framework/starters/feign/"},sidebar:"version-1.5.0/dev",previous:{title:"Encryption starter",permalink:"/docs/1.5.0/development/backend/framework/starters/encryption/"},next:{title:"GeoJSON starter",permalink:"/docs/1.5.0/development/backend/framework/starters/geojson/"}},p=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]},{value:"How to",id:"how-to",children:[{value:"How to create a client",id:"how-to-create-a-client",children:[]},{value:"How to use a client",id:"how-to-use-a-client",children:[]},{value:"How to make a system (i.e. internal) call",id:"how-to-make-a-system-ie-internal-call",children:[]},{value:"How to create a client programmatically",id:"how-to-create-a-client-programmatically",children:[]},{value:"How to mock Feign",id:"how-to-mock-feign",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"This starters enables Feign client discovery and use. Feign clients are REST clients used for synchronous HTTP communications between microservices. Requests are automatically load balanced."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>feign-regards-starter</artifactId>\n</dependency>\n")),(0,i.kt)("p",null,"Dependency :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../multitenant/"},"Multitenant starter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../gson/"},"GSON starter")),(0,i.kt)("li",{parentName:"ul"},"Security utils to manage Json Web Tokens")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# See multitenant starter properties\n# Security utils needs JWT secret\n")),(0,i.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,i.kt)("p",null,"Starter autoconfigures:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FeignSecurityManager")," to manage security token injection into request headers."),(0,i.kt)("li",{parentName:"ul"},"Enable automatic client discovery in package ",(0,i.kt)("inlineCode",{parentName:"li"},"fr.cnes.regards")," (unless ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," profile is activated)")),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("h3",{id:"how-to-create-a-client"},"How to create a client"),(0,i.kt)("p",null,"Create a Spring MVC interface annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"RestClient")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@RestClient(name = "targetMicroserviceName")\n@RequestMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)\npublic interface IHelloClient {\n\n    @RequestMapping(method = RequestMethod.GET, value = "/hello")\n    ResponseEntity<Hello> getHello();\n}\n')),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When using request or path parameters, you have to explicitly declare expected names (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'@PathVariable("param_name")'),")!"))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Produce and consume format has to be set to JSON in ",(0,i.kt)("inlineCode",{parentName:"p"},"@RequestMapping"),"."))),(0,i.kt)("h3",{id:"how-to-use-a-client"},"How to use a client"),(0,i.kt)("p",null,"Importing Feign starter in your pom.xml, all classes annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"RestClient")," are automatically discovered in package ",(0,i.kt)("inlineCode",{parentName:"p"},"fr.cnes.regards"),".\nSo, you can ",(0,i.kt)("inlineCode",{parentName:"p"},"@Autowired")," it in your service."),(0,i.kt)("p",null,"If client is in a different package, use ",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableFeignClients")," in a configuration class to declare this package."),(0,i.kt)("h3",{id:"how-to-make-a-system-ie-internal-call"},"How to make a system (i.e. internal) call"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"FeignSecurityManager")," propagates user token in Feign request from security holder."),(0,i.kt)("p",null,"To call an endpoint as system, you must inform ",(0,i.kt)("inlineCode",{parentName:"p"},"FeignSecurityManager")," before process request."),(0,i.kt)("p",null,"If you act as a daemon and you have to manage tenant in ",(0,i.kt)("strong",{parentName:"p"},"system")," client call, use ",(0,i.kt)("inlineCode",{parentName:"p"},"IRuntimeTenantResolver")," to force the right tenant."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'try {\n  // Optionnaly specify working tenant (thread safe action)\n  runtimeTenantResolver.forceTenant("tenant");\n  // Enable system call as follow (thread safe action)\n  FeignSecurityManager.asSystem();\n  // Process client request ...\n} finally {\n  // We advice you to clean context\n  runtimeTenantResolver.clearTenant();\n  FeignSecurityManager.reset();\n}\n')),(0,i.kt)("h3",{id:"how-to-create-a-client-programmatically"},"How to create a client programmatically"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"FeignClientBuilder"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenClientProvider")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FeignSecurityManager")," to init one :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'MyClient client = FeignClientBuilder.build(new TokenClientProvider<>(MyClient.class,\n        "url", feignSecurityManager));\n')),(0,i.kt)("h3",{id:"how-to-mock-feign"},"How to mock Feign"),(0,i.kt)("p",null,"Feign starter allows to disable client discovery. To do so, run the tests in a ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," profile (use ",(0,i.kt)("inlineCode",{parentName:"p"},"@ActiveProfiles"),") and mock your clients as you wish (using stub, Mockito, etc.)."),(0,i.kt)("p",null,"If you set your own annotation on a configuration class, we recommend to add profile annotation as follow to be able to mock client in test profile :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Profile("!test")\n@Configuration\n@EnableFeignClients("your.package")\n')))}u.isMDXComponent=!0}}]);