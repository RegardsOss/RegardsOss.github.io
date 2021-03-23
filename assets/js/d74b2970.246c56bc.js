(window.webpackJsonp=window.webpackJsonp||[]).push([[2201],{2273:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(2704)),o={id:"backend-framework-dev-plugin",title:"Develop a plugin",sidebar_label:"How to create a plugin",slug:"/development/backend/framework/dev-plugin/"},c={unversionedId:"development/backend/framework/backend-framework-dev-plugin",id:"development/backend/framework/backend-framework-dev-plugin",isDocsHomePage:!1,title:"Develop a plugin",description:"REGARDS plugins are designed to customize functionalities for business specifics needs. The available extension points are defined for each microservice in this documentation under specific microservice section.",source:"@site/docs/development/backend/framework/dev-plugin.md",slug:"/development/backend/framework/dev-plugin/",permalink:"/docs/development/backend/framework/dev-plugin/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/dev-plugin.md",version:"current",sidebar_label:"How to create a plugin",sidebar:"dev",previous:{title:"Plugins introduction",permalink:"/docs/development/backend/framework/modules/plugins/"},next:{title:"REGARDS Plugins API",permalink:"/docs/development/backend/framework/plugins-api/"}},l=[{value:"Requirements for development:",id:"requirements-for-development",children:[]},{value:"Set-up",id:"set-up",children:[]},{value:"Create your plugin maven module",id:"create-your-plugin-maven-module",children:[]},{value:"References",id:"references",children:[]}],s={toc:l};function p(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"REGARDS plugins are designed to customize functionalities for business specifics needs. The available extension points are defined for each microservice in this documentation under specific microservice section."),Object(i.b)("h2",{id:"requirements-for-development"},"Requirements for development:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Git client"),Object(i.b)("li",{parentName:"ul"},"Maven 3.x"),Object(i.b)("li",{parentName:"ul"},"JDK 1.8")),Object(i.b)("h2",{id:"set-up"},"Set-up"),Object(i.b)("p",null,"Clone mandatory common github repositories :  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"git clone ",Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-bom.git"},"https://github.com/RegardsOss/regards-bom.git")),Object(i.b)("li",{parentName:"ul"},"git clone ",Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-microservice.git"},"https://github.com/RegardsOss/regards-microservice.git")),Object(i.b)("li",{parentName:"ul"},"git clone ",Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-admin.git"},"https://github.com/RegardsOss/regards-admin.git")),Object(i.b)("li",{parentName:"ul"},"git clone ",Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins.git"},"https://github.com/RegardsOss/regards-plugins.git"))),Object(i.b)("p",null,'Clone specific github repositories for the plugin you want to generate. For exemple if you want to generate a plugin of the "Catalog" microservice, you need to clone the Catalog microservice repository.'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"git clone ",Object(i.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-catalog.git"},"https://github.com/RegardsOss/regards-catalog.git"))),Object(i.b)("p",null,"Now compile each repository with maven ",Object(i.b)("inlineCode",{parentName:"p"},"mvn clean install -DskipTests")," with the here under order :"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"regards-bom"),Object(i.b)("li",{parentName:"ol"},"regards-microservice"),Object(i.b)("li",{parentName:"ol"},"regards-admin"),Object(i.b)("li",{parentName:"ol"},"regards-catalog (or other microservice repository)")),Object(i.b)("h2",{id:"create-your-plugin-maven-module"},"Create your plugin maven module"),Object(i.b)("p",null,"Create a new maven module in the ",Object(i.b)("inlineCode",{parentName:"p"},"regards-plugins")," repository under the associated microservice module. For exemple to create a Catalog microservice plugin named 'MyCatalogPlugin' create it in ",Object(i.b)("inlineCode",{parentName:"p"},"regards-plugins/catalog-plugins/myCatalogPlugin"),"."),Object(i.b)("p",null,"Edit your ",Object(i.b)("inlineCode",{parentName:"p"},"pom.xml")," and add the here under standard plugin information :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<project xmlns="http://maven.apache.org/POM/4.0.0"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>fr.cnes.regards.modules.catalog.plugins</groupId>\n  <artifactId>myPlugin</artifactId>\n  <description>TODO</description>\n  <version>1.0.0</version>\n\n  <url>https://github.com/RegardsOss/RegardsOss.github.io</url>\n  <inceptionYear>2019</inceptionYear>\n  <licenses>\n    <license>\n      <name>GNU General Public License (GNU GPL)</name>\n      <url>http://www.gnu.org/licenses/gpl.html</url>\n      <distribution>repo</distribution>\n    </license>\n  </licenses>\n\n  <organization>\n    <name>CNES</name>\n    <url>https://cnes.fr/fr</url>\n  </organization>\n\n  <developers>\n    <developer>\n      <name>TODO</name>\n      <organization>TODO</organization>\n      <organizationUrl>TODO</organizationUrl>\n    </developer>\n  </developers>\n\n  <parent>\n    <groupId>fr.cnes.regards.modules.catalog.plugins</groupId>\n    <artifactId>catalog-plugins</artifactId>\n    <version>3.1.0-RC</version>\n  </parent\n\n  <dependencies>\n    <dependency>\n      <groupId>fr.cnes.regards.modules</groupId>\n      <artifactId>catalog-services-plugin</artifactId>\n      <scope>provided</scope>\n    </dependency>\n  </dependencies>\n\n  <build>\n    <plugins>\n      <plugin>\n          <groupId>org.apache.maven.plugins</groupId>\n          <artifactId>maven-shade-plugin</artifactId>\n          <executions>\n            <execution>\n                <phase>package</phase>\n                <goals>\n                  <goal>shade</goal>\n                </goals>\n                <configuration>\n                <minimizeJar>false</minimizeJar>\n                <artifactSet>\n                  <includes>\n                    <include>fr.cnes.regards.modules.catalog.plugins.myPlugin:*</include>\n                  </includes>\n                </artifactSet>\n              </configuration>\n          </execution>\n        </executions>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The shaded plugin is mandatory to build your plugin in order to ensure the compiled jar is self sufficient (include all his dependencies)"))),Object(i.b)("p",null,"You can now develop your plugin implementation following the documentation of the extension point found in this github documentation.\nSee ",Object(i.b)("a",{parentName:"p",href:"../plugins-api/"},"plugins API")," for more information."),Object(i.b)("p",null,"Here under is an exemple of an empty implementation :"),Object(i.b)("p",null,Object(i.b)("img",{src:t(2750).default})),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("p",null,"You can also find a tutorial documentation on how to build REGARDS plugins and microservices ",Object(i.b)("a",{target:"_blank",href:t(2707).default},"here"),"  "))}p.isMDXComponent=!0},2704:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?a.a.createElement(g,c(c({ref:n},s),{},{components:t})):a.a.createElement(g,c({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2707:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/files/regards-backend-tutorial-67ece5d5bea022c4ddc0721f69bd6016.odp"},2750:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/backend-plugin-impl-exemple-bf85231898e5d47eb2793def8be777c1.png"}}]);