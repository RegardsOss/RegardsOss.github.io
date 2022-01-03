"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[34144],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8162:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"depracated-cli",title:"REGARDS Command line interface",slug:"/setup/deprecated/cli/"},l=void 0,c={unversionedId:"setup/deprecated/depracated-cli",id:"version-1.6.0/setup/deprecated/depracated-cli",isDocsHomePage:!1,title:"REGARDS Command line interface",description:"Start the system",source:"@site/versioned_docs/version-1.6.0/setup/deprecated/cli.md",sourceDirName:"setup/deprecated",slug:"/setup/deprecated/cli/",permalink:"/fr/docs/1.6.0/setup/deprecated/cli/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/setup/deprecated/cli.md",tags:[],version:"1.6.0",frontMatter:{id:"depracated-cli",title:"REGARDS Command line interface",slug:"/setup/deprecated/cli/"}},p=[{value:"Start the system",id:"start-the-system",children:[]},{value:"Check the components status",id:"check-the-components-status",children:[]},{value:"Stop the components",id:"stop-the-components",children:[]},{value:"Contents of the installation directory",id:"contents-of-the-installation-directory",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"start-the-system"},"Start the system"),(0,o.kt)("p",null,"In order to start REGARDS, you will have to run specific commands."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"Security Level")," you choosed was ",(0,o.kt)("inlineCode",{parentName:"p"},"Enforce")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"and you installed ",(0,o.kt)("strong",{parentName:"li"},"all")," the components on the current host, you can start the whole system in a single command:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/regards/REGARDS/sbin/microservice_regards.sh start\n")),(0,o.kt)("p",{parentName:"li"},"Previously, it is necessary to add these commands to the ",(0,o.kt)("strong",{parentName:"p"},"sudoers")," configuration file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/sudoers.d/regards\n%rsadmin      ALL=(regards)       NOPASSWD: /opt/regards/REGARDS/bin/start_microservice.sh\n%rsadmin      ALL=(regards)       NOPASSWD: /opt/regards/REGARDS/bin/status_microservice.sh\n%rsadmin      ALL=(regards)       NOPASSWD: /opt/regards/REGARDS/bin/stop_microservice.sh\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"and you installed ",(0,o.kt)("strong",{parentName:"li"},"some")," components on the current host, you will need to start each component installed with the following command (remember to always begin the components in the good start order):")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/regards/REGARDS/sbin/microservice_regards.sh -t {component_name} start\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"Security Level")," you choosed was ",(0,o.kt)("inlineCode",{parentName:"p"},"Standard"),", you will need to start each component installed with the following command (remember to always begin the components in the good start order):"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/regards/REGARDS/bin/start_microservice.sh -t {component_name}\n")),(0,o.kt)("p",null,"Microservices start order :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," : All microservices get their centralized configuration from this microservice"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"registry")," : All microservices register themself to this registry"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"admin-instance")," : All microservices get their database connections information from this microservice"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"admin")," : All microservices get users information from this microservice"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"dam")," : Handle data management")),(0,o.kt)("p",null,"Once those microservices are up you start all remaining microservices"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"authentication")," : All microservices use this microservice to check user authentications"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"catalog")," : Handle project catalog"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"storage")," : Handle data files storage"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ingest")," : Handle SIP ingestion"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"fem")," : Feature manager. Handle GeoJson features"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"dataprovider")," : Handle SIP generation"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"order")," : handle orders"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"frontend")," : All microservices use this microservice to check user authentications"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"access-instance")," : Configuration of instance HMI (admin instance & portal)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"access-project")," : Configration of projet HMI"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"gateway")," : Load balancer")),(0,o.kt)("h2",{id:"check-the-components-status"},"Check the components status"),(0,o.kt)("p",null,"You can check if a given component is currently running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/regards/REGARDS/sbin/microservice_regards.sh -t {component_name} status\n")),(0,o.kt)("h2",{id:"stop-the-components"},"Stop the components"),(0,o.kt)("p",null,"You can stop a given component which is currently running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/regards/REGARDS/bin/stop_microservice.sh -t {component_name} stop\n")),(0,o.kt)("h2",{id:"contents-of-the-installation-directory"},"Contents of the installation directory"),(0,o.kt)("p",null,"The contents of the installation directory with all the microservices is :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/\nbootstrap-access-instance.jar\nbootstrap-access-project.jar\nbootstrap-administration.jar\nbootstrap-authentication.jar\nbootstrap-catalog.jar\nbootstrap-config.jar\nbootstrap-dam.jar\nbootstrap-dataprovider.jar\nbootstrap-frontend.war\nbootstrap-order.jar\nbootstrap-registry.jar\nbootstrap-ingest.jar\nbootstrap-gateway.jar\nconfig/\nlib/\nlogs/\nplugins/\nsbin/\nrun/\nwww/\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"config")," folder contains among others the logback configuration file for each microservice, in the the subfolders ",(0,o.kt)("strong",{parentName:"p"},"config/logback/{microservice-name}"),". This subfolders contains the log4j context configuration file as ",(0,o.kt)("a",{parentName:"p",href:"https://logback.qos.ch/manual/configuration.html"},"logback.xml"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"plugins")," folder contains a subfolder foreach microservice ",(0,o.kt)("strong",{parentName:"p"},"plugins/{microservice-name}"),". This subfolders must contains the plugins to used for the specified microservice."))}d.isMDXComponent=!0}}]);