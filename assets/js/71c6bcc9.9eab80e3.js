"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[7912],{95788:(e,r,a)=>{a.d(r,{Iu:()=>p,yg:()=>g});var n=a(11504);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,n,o=function(e,r){if(null==e)return{};var a,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var a=e.components,o=e.mdxType,t=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||t;return a?n.createElement(g,i(i({ref:r},p),{},{components:a})):n.createElement(g,i({ref:r},p))}));function g(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=a.length,i=new Array(t);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<t;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36440:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>s});var n=a(45072),o=(a(11504),a(95788));const t={id:"backend-framework-dev-microservice",title:"Develop a new microservice",sidebar_label:"How to create a microservice",slug:"/development/backend/framework/dev-microservice/"},i=void 0,l={unversionedId:"development/backend/framework/backend-framework-dev-microservice",id:"version-1.13.0/development/backend/framework/backend-framework-dev-microservice",title:"Develop a new microservice",description:"REGARDS Microservices are REST services exposed by a Jetty web server contained in a Spring boot application and composed of modules. Each microservice is a Maven project aggregating Maven modules. There is two modules by default: one responsible for running the microservice and one responsible for business. In case a microservice needs to be composed by more than one business module, a module archetype is available.",source:"@site/versioned_docs/version-1.13.0/development/backend/framework/dev-microservice.md",sourceDirName:"development/backend/framework",slug:"/development/backend/framework/dev-microservice/",permalink:"/docs/1.13.0/development/backend/framework/dev-microservice/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/framework/dev-microservice.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-framework-dev-microservice",title:"Develop a new microservice",sidebar_label:"How to create a microservice",slug:"/development/backend/framework/dev-microservice/"},sidebar:"dev",previous:{title:"Jobs",permalink:"/docs/1.13.0/development/backend/framework/modules/jobs/"},next:{title:"Plugins introduction",permalink:"/docs/1.13.0/development/backend/framework/modules/plugins/"}},c={},s=[{value:"Requirements for development",id:"requirements-for-development",level:2},{value:"Common features",id:"common-features",level:2},{value:"Create your first microservice",id:"create-your-first-microservice",level:2},{value:"Create your first module",id:"create-your-first-module",level:2},{value:"Configure microservice to run locally with a remote REGARDS server instance",id:"configure-microservice-to-run-locally-with-a-remote-regards-server-instance",level:2},{value:"Test the microservice",id:"test-the-microservice",level:2},{value:"Centralize your new microservice configuration",id:"centralize-your-new-microservice-configuration",level:2},{value:"References",id:"references",level:2}],p={toc:s},m="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(m,(0,n.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"REGARDS Microservices are REST services exposed by a Jetty web server contained in a Spring boot application and composed of modules. Each microservice is a Maven project aggregating Maven modules. There is two modules by default: one responsible for running the microservice and one responsible for business. In case a microservice needs to be composed by more than one business module, a module archetype is available."),(0,o.yg)("h2",{id:"requirements-for-development"},"Requirements for development"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Git client"),(0,o.yg)("li",{parentName:"ul"},"Maven v3.8.4+"),(0,o.yg)("li",{parentName:"ul"},"JDK Eclipse Temurin v17.0.3+")),(0,o.yg)("h2",{id:"common-features"},"Common features"),(0,o.yg)("p",null,"Each microservice offers the features :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"REST Resources authorization access by user ROLES"),(0,o.yg)("li",{parentName:"ul"},"Access to the Cloud Eureka Registry client to communicate with others microservices"),(0,o.yg)("li",{parentName:"ul"},"Access to the Cloud Config Server to centralize configurations properties"),(0,o.yg)("li",{parentName:"ul"},"Swagger Interface : ",(0,o.yg)("a",{parentName:"li",href:"http://address:port/swagger-ui.html"},"http://address:port/swagger-ui.html"))),(0,o.yg)("h2",{id:"create-your-first-microservice"},"Create your first microservice"),(0,o.yg)("p",null,"To create a new microservice you have to create a new maven project with the microservice-archetype. To do so :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Clone the git regards-backend repository  ")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/RegardsOss/regards-backend.git\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Compile and install the maven project  ")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd regards-backend\nmvn clean install -DskipTests\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Generate the new microservice in another folder than regards-backend thanks to the maven project archetype:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir ../myMicroservice\ncd ../myMicroservice\nmvn archetype:generate -DarchetypeCatalog=local\n")),(0,o.yg)("p",null,"You have many archetype proposed to you, under the format"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-txt"},"number: [local|remote] -> archetype_group_id:archetype_artifact_id (archetype_description)\n")),(0,o.yg)("p",null,"find the line"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-txt"},"X: local -> fr.cnes.regards.microservices:microservice-archetype (microservice-archetype)\n")),(0,o.yg)("p",null,"and enter ",(0,o.yg)("inlineCode",{parentName:"p"},"X")),(0,o.yg)("p",null,"where X is the actual number of the microservice creation archetype. Then enter the requested fields as follow :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"groupId")," : fr.cnes.regards.microservices.mymicroservice"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"artifactId")," : mymicroservice"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"version")," : press enter to apply default value"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"package")," : press enter to apply default value"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"microserviceDescription")," : My microservice description"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"microserviceName")," : mymicroservice"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"microserviceTitle")," : My Microservice")),(0,o.yg)("h2",{id:"create-your-first-module"},"Create your first module"),(0,o.yg)("p",null,"Once you have created the microservice container, you have to create modules."),(0,o.yg)("p",null,"To add a new module to your microservice you have to add a new maven module with the module-archetype. To do so :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Inside the microservice root folder, execute the following command to generate a module")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"  cd myMicroservice\n  mvn archetype:generate -DarchetypeCatalog=local\n")),(0,o.yg)("p",null,"Choose the right archetype (",(0,o.yg)("inlineCode",{parentName:"p"},"fr.cnes.regards.modules:module-archetype"),") and enter requested field as follow :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"groupId")," : fr.cnes.regards.modules"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"artifactId")," : my-module"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"version")," : press enter to apply default value"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"package")," : press enter to apply default value")),(0,o.yg)("p",null,"Add the following dependency to ",(0,o.yg)("inlineCode",{parentName:"p"},"bootstrap-myMicroservice/pom.xml")," file (for instance, with the module artifact id ",(0,o.yg)("inlineCode",{parentName:"p"},"myModule"),") :"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.modules</groupId>\n  <artifactId>my-module-rest</artifactId>\n  <version>1.0-SNAPSHOT</version>\n</dependency>\n")),(0,o.yg)("h2",{id:"configure-microservice-to-run-locally-with-a-remote-regards-server-instance"},"Configure microservice to run locally with a remote REGARDS server instance"),(0,o.yg)("p",null,"In order to help developers test their microservice, local configuration files are available when you generate a microservice through the maven archetype. Those files are :"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"src/main/resources/application-local-properties"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"src/main/resources/bootstrap-local-properties"),".")),(0,o.yg)("p",null,"Fill those configuration files with the missing informations."),(0,o.yg)("h2",{id:"test-the-microservice"},"Test the microservice"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"To compile the new microservice :")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd myMicroService\nmvn clean install\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"To run the new microservice :")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd myMicroService/bootstrap-myMicroservice\nmvn spring-boot:run -Dspring.profiles.active=local\n16:07:14.417 [main            ]    INFO o.s.b.c.e.j.JettyEmbeddedServletContainer - Jetty started on port(s) 8999 (http/1.1)\n16:07:14.421 [main            ]    INFO o.s.c.n.e.EurekaDiscoveryClientConfiguration - Updating port to 8999\n16:07:14.429 [main            ]    INFO f.c.r.microservices.Application - Started Application in 16.691 seconds (JVM running for 23.349)\n\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"To authenticate :")),(0,o.yg)("p",null,"To get an authentication token, the following POST request should be send to the authentication microservice :"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'http://host:port/oauth/token?grant_type=password&username=regards-admin@c-s.fr&password=root_admin&scope=project1' \\\n-H 'accept: application/json' \\\n-H 'Cache-Control: no-cache' \\\n-H 'authorization: Basic Y2xpZW50OnNlY3JldA=='\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"API exemple access :")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'curl http://localhost:8999/api/greeting/ -H "Authorization: Bearer <user_acces_token>"\ncurl http://localhost:8999/api/me/ -H "Authorization: Bearer <admin_acces_token>"\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Swagger UI access :")," ",(0,o.yg)("a",{parentName:"p",href:"http://localhost:8999/swagger-ui.html"},"http://localhost:8999/swagger-ui.html")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"NOTE")," : To add new REST resource follow example on file"),(0,o.yg)("p",null," ",(0,o.yg)("inlineCode",{parentName:"p"},"myModule/myModule-rest/src/main/java/fr/cnes/regards/modules/myModule/GreetingsController.java")),(0,o.yg)("h2",{id:"centralize-your-new-microservice-configuration"},"Centralize your new microservice configuration"),(0,o.yg)("p",null," To centralize the configuration of your microservice, you can copy your application-local.properties file to the rs-config microservice installation directory :  "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cp myMicroservice/bootstrap-myMycroservice/src/main/resources/application-local.properties rs-config/config/regards/myMicroservice.properties\n")),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("p",null,"You can also find a tutorial documentation on how to build REGARDS plugins and microservices ",(0,o.yg)("a",{target:"_blank",href:a(33472).c},"here")))}u.isMDXComponent=!0},33472:(e,r,a)=>{a.d(r,{c:()=>n});const n=a.p+"assets/files/regards-backend-tutorial-67ece5d5bea022c4ddc0721f69bd6016.odp"}}]);