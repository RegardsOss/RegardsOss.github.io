"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[8242],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=s,m=p["".concat(o,".").concat(g)]||p[g]||u[g]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31231:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"depracated-installation-source",title:"Installation from source",slug:"/setup/deprecated/installation-source/"},o=void 0,c={unversionedId:"setup/deprecated/depracated-installation-source",id:"version-1.6.0/setup/deprecated/depracated-installation-source",title:"Installation from source",description:"Here is the tutorial to compile the IzPack installer that you can use to install REGARDS on any server.",source:"@site/versioned_docs/version-1.6.0/setup/deprecated/from-sources.md",sourceDirName:"setup/deprecated",slug:"/setup/deprecated/installation-source/",permalink:"/docs/1.6.0/setup/deprecated/installation-source/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/setup/deprecated/from-sources.md",tags:[],version:"1.6.0",frontMatter:{id:"depracated-installation-source",title:"Installation from source",slug:"/setup/deprecated/installation-source/"}},d=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Build",id:"build",children:[],level:2},{value:"Install with root",id:"install-with-root",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here is the tutorial to compile the IzPack installer that you can use to install REGARDS on any server.",(0,a.kt)("br",{parentName:"p"}),"\n","If you do not care about compiling REGARDS by yourself, jump ","[to the next step]","."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Build relies on :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Maven 3.3+"),(0,a.kt)("li",{parentName:"ul"},"OpenJDK 8"),(0,a.kt)("li",{parentName:"ul"},"Groovy 2.4+"),(0,a.kt)("li",{parentName:"ul"},"Node.js 8.10+"),(0,a.kt)("li",{parentName:"ul"},"Npm 5.7.1+")),(0,a.kt)("p",null,"Permissions :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You shall not use the root user while compiling REGARDS, as any other software.")),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("p",null,"First, you need to compile every REGARDS server components and the HMI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/RegardsOss/regards-bom.git\ncd regards-bom\nmvn install -DskipTests -P install\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-microservice.git\ncd regards-microservice\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-admin.git\ncd regards-admin\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-cloud.git\ncd regards-cloud\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-storage.git\ncd regards-storage\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-dam.git\ncd regards-dam\nmvn clean install -Dmaven.test.skip=true -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-catalog.git\ncd regards-catalog\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-access.git\ncd regards-access\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-ingest.git\ncd regards-ingest\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-dataprovider.git\ncd regards-dataprovider\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-order.git\ncd regards-order\nmvn install -DskipTests -P install,delivery\n\ncd ..\ngit clone https://github.com/RegardsOss/regards-frontend.git\ncd regards-frontend/webapp\nnpm install\nnpm run build:production\nnpm run build:plugins\ncd ../frontend-boot/\nmvn clean install -DskipTests -Dwebapp.dir=../webapp -P install\n")),(0,a.kt)("p",null,"Now every REGARDS components are installed, the last step is to generate the REGARDS Izpack installer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../..\ngit clone https://github.com/RegardsOss/regards-deployment.git\ncd regards-deployment\nmvn install -DskipTests -P install,delivery\n")),(0,a.kt)("p",null,"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"regards-deployment")," repository, grab the IzPack installer located in ",(0,a.kt)("inlineCode",{parentName:"p"},"./izpack/installer/target/REGARDS-OSS-Installer.jar"),".",(0,a.kt)("br",{parentName:"p"}),"\n","You will use that file ","[in the IzPack setup]"," to continue the installation."),(0,a.kt)("h2",{id:"install-with-root"},"Install with root"),(0,a.kt)("p",null,"There is no known issue with Java to compile with the root user.",(0,a.kt)("br",{parentName:"p"}),"\n","If you want to run the regards-frontend compilation, you have to add the hereunder line in your .npmrc file.\nIf your root user does not have any .npmrc file yet, you can create it in your root user home directory. You can read ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/npmrc"},"npm documentation about npmrc here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"unsafe-perm=true\n")))}p.isMDXComponent=!0}}]);