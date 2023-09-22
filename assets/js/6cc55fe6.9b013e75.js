"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[79684],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const a={id:"backend-framework-dev-plugin",title:"Develop a plugin",sidebar_label:"How to create a plugin",slug:"/development/backend/framework/dev-plugin/"},o=void 0,l={unversionedId:"development/backend/framework/backend-framework-dev-plugin",id:"version-1.12.0/development/backend/framework/backend-framework-dev-plugin",title:"Develop a plugin",description:"REGARDS plugins are designed to customize functionalities for business specifics needs. The available extension points are defined for each microservice in this documentation under specific microservice section.",source:"@site/versioned_docs/version-1.12.0/development/backend/framework/dev-plugin.md",sourceDirName:"development/backend/framework",slug:"/development/backend/framework/dev-plugin/",permalink:"/docs/1.12.0/development/backend/framework/dev-plugin/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/framework/dev-plugin.md",tags:[],version:"1.12.0",frontMatter:{id:"backend-framework-dev-plugin",title:"Develop a plugin",sidebar_label:"How to create a plugin",slug:"/development/backend/framework/dev-plugin/"},sidebar:"dev",previous:{title:"Plugins introduction",permalink:"/docs/1.12.0/development/backend/framework/modules/plugins/"},next:{title:"Overview",permalink:"/docs/1.12.0/development/backend/services/overview/"}},s={},d=[{value:"Requirements for development:",id:"requirements-for-development",level:2},{value:"Set-up",id:"set-up",level:2},{value:"Create your plugin maven module",id:"create-your-plugin-maven-module",level:2},{value:"References",id:"references",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...a}=e;return(0,i.kt)(c,(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"REGARDS plugins are designed to customize functionalities for business specifics needs. The available extension points are defined for each microservice in this documentation under specific microservice section."),(0,i.kt)("h2",{id:"requirements-for-development"},"Requirements for development:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Git client"),(0,i.kt)("li",{parentName:"ul"},"Maven v3.8.4+"),(0,i.kt)("li",{parentName:"ul"},"JDK Eclipse Temurin v17.0.3+")),(0,i.kt)("h2",{id:"set-up"},"Set-up"),(0,i.kt)("p",null,"Clone mandatory common github repositories :  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"git clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend.git"},"https://github.com/RegardsOss/regards-backend.git")),(0,i.kt)("li",{parentName:"ul"},"git clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins.git"},"https://github.com/RegardsOss/regards-plugins.git"))),(0,i.kt)("p",null,"Now compile each repository with maven ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn clean install -DskipTests")," with the here under order :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"regards-backend"),(0,i.kt)("li",{parentName:"ol"},"regards-plugins")),(0,i.kt)("h2",{id:"create-your-plugin-maven-module"},"Create your plugin maven module"),(0,i.kt)("p",null,"Create a new maven module in the ",(0,i.kt)("inlineCode",{parentName:"p"},"regards-plugins")," repository under the associated microservice module. For exemple to create a Catalog microservice plugin named 'MyCatalogPlugin' create it in ",(0,i.kt)("inlineCode",{parentName:"p"},"regards-plugins/catalog-plugins/myCatalogPlugin"),"."),(0,i.kt)("p",null,"Edit your ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," and add the here under standard plugin information :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<project xmlns="http://maven.apache.org/POM/4.0.0"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>fr.cnes.regards.modules.catalog.plugins</groupId>\n  <artifactId>myPlugin</artifactId>\n  <description>TODO</description>\n\n  <parent>\n    <groupId>fr.cnes.regards.modules.catalog.plugins</groupId>\n    <artifactId>catalog-plugins</artifactId>\n    <version>1.8.0</version>\n  </parent\n\n  <url>https://github.com/RegardsOss/RegardsOss.github.io</url>\n  <inceptionYear>2019</inceptionYear>\n  <licenses>\n    <license>\n      <name>GNU General Public License (GNU GPL)</name>\n      <url>http://www.gnu.org/licenses/gpl.html</url>\n      <distribution>repo</distribution>\n    </license>\n  </licenses>\n\n  <organization>\n    <name>CNES</name>\n    <url>https://cnes.fr/fr</url>\n  </organization>\n\n  <developers>\n    <developer>\n      <name>TODO</name>\n      <organization>TODO</organization>\n      <organizationUrl>TODO</organizationUrl>\n    </developer>\n  </developers>\n\n  <dependencies>\n    <dependency>\n      <groupId>fr.cnes.regards.modules</groupId>\n      <artifactId>catalog-services-plugin</artifactId>\n      <scope>provided</scope>\n    </dependency>\n  </dependencies>\n\n  <build>\n    <plugins>\n      <plugin>\n          <groupId>org.apache.maven.plugins</groupId>\n          <artifactId>maven-shade-plugin</artifactId>\n          <executions>\n            <execution>\n                <phase>package</phase>\n                <goals>\n                  <goal>shade</goal>\n                </goals>\n                <configuration>\n                <minimizeJar>false</minimizeJar>\n                <artifactSet>\n                  <includes>\n                    <include>fr.cnes.regards.modules.catalog.plugins.myPlugin:*</include>\n                  </includes>\n                </artifactSet>\n              </configuration>\n          </execution>\n        </executions>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The shaded plugin is mandatory to build your plugin in order to ensure the compiled jar is self sufficient (include all his dependencies)")),(0,i.kt)("p",null,"You can now develop your plugin implementation following the documentation of the extension point found in this github documentation."),(0,i.kt)("p",null,"Here under is an exemple of an empty implementation :"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(72560).Z,width:"914",height:"378"})),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"You can also find a tutorial documentation on how to build REGARDS plugins and microservices ",(0,i.kt)("a",{target:"_blank",href:t(3525).Z},"here")))}u.isMDXComponent=!0},3525:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/regards-backend-tutorial-67ece5d5bea022c4ddc0721f69bd6016.odp"},72560:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/backend-plugin-impl-exemple-bf85231898e5d47eb2793def8be777c1.png"}}]);