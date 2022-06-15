"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[16509],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},753:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),o=["components"],l={id:"backend-framework-dev-plugin",title:"Develop a plugin",sidebar_label:"How to create a plugin",slug:"/development/backend/framework/dev-plugin/"},s=void 0,u={unversionedId:"development/backend/framework/backend-framework-dev-plugin",id:"version-1.8.0/development/backend/framework/backend-framework-dev-plugin",title:"Develop a plugin",description:"REGARDS plugins are designed to customize functionalities for business specifics needs. The available extension points are defined for each microservice in this documentation under specific microservice section.",source:"@site/versioned_docs/version-1.8.0/development/backend/framework/dev-plugin.md",sourceDirName:"development/backend/framework",slug:"/development/backend/framework/dev-plugin/",permalink:"/docs/1.8.0/development/backend/framework/dev-plugin/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.0/development/backend/framework/dev-plugin.md",tags:[],version:"1.8.0",frontMatter:{id:"backend-framework-dev-plugin",title:"Develop a plugin",sidebar_label:"How to create a plugin",slug:"/development/backend/framework/dev-plugin/"},sidebar:"dev",previous:{title:"Plugins introduction",permalink:"/docs/1.8.0/development/backend/framework/modules/plugins/"},next:{title:"Plugins API",permalink:"/docs/1.8.0/development/backend/framework/plugins-api/"}},d={},p=[{value:"Requirements for development:",id:"requirements-for-development",level:2},{value:"Set-up",id:"set-up",level:2},{value:"Create your plugin maven module",id:"create-your-plugin-maven-module",level:2},{value:"References",id:"references",level:2}],c={toc:p};function m(e){var n=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"REGARDS plugins are designed to customize functionalities for business specifics needs. The available extension points are defined for each microservice in this documentation under specific microservice section."),(0,a.kt)("h2",{id:"requirements-for-development"},"Requirements for development:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Git client"),(0,a.kt)("li",{parentName:"ul"},"Maven 3.x"),(0,a.kt)("li",{parentName:"ul"},"JDK 1.8")),(0,a.kt)("h2",{id:"set-up"},"Set-up"),(0,a.kt)("p",null,"Clone mandatory common github repositories :  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"git clone ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend.git"},"https://github.com/RegardsOss/regards-backend.git")),(0,a.kt)("li",{parentName:"ul"},"git clone ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins.git"},"https://github.com/RegardsOss/regards-plugins.git"))),(0,a.kt)("p",null,"Now compile each repository with maven ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean install -DskipTests")," with the here under order :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"regards-backend"),(0,a.kt)("li",{parentName:"ol"},"regards-plugins")),(0,a.kt)("h2",{id:"create-your-plugin-maven-module"},"Create your plugin maven module"),(0,a.kt)("p",null,"Create a new maven module in the ",(0,a.kt)("inlineCode",{parentName:"p"},"regards-plugins")," repository under the associated microservice module. For exemple to create a Catalog microservice plugin named 'MyCatalogPlugin' create it in ",(0,a.kt)("inlineCode",{parentName:"p"},"regards-plugins/catalog-plugins/myCatalogPlugin"),"."),(0,a.kt)("p",null,"Edit your ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," and add the here under standard plugin information :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<project xmlns="http://maven.apache.org/POM/4.0.0"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>fr.cnes.regards.modules.catalog.plugins</groupId>\n  <artifactId>myPlugin</artifactId>\n  <description>TODO</description>\n  <version>1.0.0</version>\n\n  <url>https://github.com/RegardsOss/RegardsOss.github.io</url>\n  <inceptionYear>2019</inceptionYear>\n  <licenses>\n    <license>\n      <name>GNU General Public License (GNU GPL)</name>\n      <url>http://www.gnu.org/licenses/gpl.html</url>\n      <distribution>repo</distribution>\n    </license>\n  </licenses>\n\n  <organization>\n    <name>CNES</name>\n    <url>https://cnes.fr/fr</url>\n  </organization>\n\n  <developers>\n    <developer>\n      <name>TODO</name>\n      <organization>TODO</organization>\n      <organizationUrl>TODO</organizationUrl>\n    </developer>\n  </developers>\n\n  <parent>\n    <groupId>fr.cnes.regards.modules.catalog.plugins</groupId>\n    <artifactId>catalog-plugins</artifactId>\n    <version>3.1.0-RC</version>\n  </parent\n\n  <dependencies>\n    <dependency>\n      <groupId>fr.cnes.regards.modules</groupId>\n      <artifactId>catalog-services-plugin</artifactId>\n      <scope>provided</scope>\n    </dependency>\n  </dependencies>\n\n  <build>\n    <plugins>\n      <plugin>\n          <groupId>org.apache.maven.plugins</groupId>\n          <artifactId>maven-shade-plugin</artifactId>\n          <executions>\n            <execution>\n                <phase>package</phase>\n                <goals>\n                  <goal>shade</goal>\n                </goals>\n                <configuration>\n                <minimizeJar>false</minimizeJar>\n                <artifactSet>\n                  <includes>\n                    <include>fr.cnes.regards.modules.catalog.plugins.myPlugin:*</include>\n                  </includes>\n                </artifactSet>\n              </configuration>\n          </execution>\n        </executions>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n')),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The shaded plugin is mandatory to build your plugin in order to ensure the compiled jar is self sufficient (include all his dependencies)"))),(0,a.kt)("p",null,"You can now develop your plugin implementation following the documentation of the extension point found in this github documentation.\nSee ",(0,a.kt)("a",{parentName:"p",href:"../plugins-api/"},"plugins API")," for more information."),(0,a.kt)("p",null,"Here under is an exemple of an empty implementation :"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(72560).Z,width:"914",height:"378"})),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,"You can also find a tutorial documentation on how to build REGARDS plugins and microservices ",(0,a.kt)("a",{target:"_blank",href:t(3525).Z},"here")))}m.isMDXComponent=!0},3525:function(e,n,t){n.Z=t.p+"assets/files/regards-backend-tutorial-67ece5d5bea022c4ddc0721f69bd6016.odp"},72560:function(e,n,t){n.Z=t.p+"assets/images/backend-plugin-impl-exemple-bf85231898e5d47eb2793def8be777c1.png"}}]);