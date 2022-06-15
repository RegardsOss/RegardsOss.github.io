"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[99607],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,g=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11136:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={layout:"classic-docs",title:"Requirement report","short-title":"Requirement report"},p="Prerequisites",u={unversionedId:"development/backend/framework/modules/reporting",id:"development/backend/framework/modules/reporting",title:"Requirement report",description:"Automatic reporting collection is running with JUnit tests.",source:"@site/docs/development/backend/framework/modules/reporting.md",sourceDirName:"development/backend/framework/modules",slug:"/development/backend/framework/modules/reporting",permalink:"/docs/development/backend/framework/modules/reporting",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/modules/reporting.md",tags:[],version:"current",frontMatter:{layout:"classic-docs",title:"Requirement report","short-title":"Requirement report"}},c={},l=[],d={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Automatic reporting collection is running with ",(0,a.kt)("strong",{parentName:"p"},"JUnit tests"),"."),(0,a.kt)("h1",{id:"report-annotation"},"Report annotation"),(0,a.kt)("p",null,"Add dependency to test artifact (if not already defined) :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.microservices</groupId>\n    <artifactId>microservice-core-test</artifactId>\n    <scope>test</scope>\n</dependency>\n")),(0,a.kt)("p",null,"Use :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Requirement("DSL_REQUIREMENT?")\n')),(0,a.kt)("p",null,"many times to identify all requirements associated to your test."),(0,a.kt)("p",null,"Use :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Purpose("Purpose of your test?")\n')),(0,a.kt)("p",null,"to describe the unit test."),(0,a.kt)("h1",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Requirement("REGARDS_DSL_DAM_MOD_010")\n@Requirement("REGARDS_DSL_DAM_MOD_020")\n@Purpose("Get model attributes to manage data models")\n@Test\npublic void testSomething() {\n}\n')),(0,a.kt)("h1",{id:"how-to-generate-requirement-reports"},"How to generate requirement reports?"),(0,a.kt)("p",null,"Maven test plugins has to be configured to add a specific reporting listener."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<plugins>\n  <plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-failsafe-plugin</artifactId>\n    <configuration>\n      <properties>\n        <property>\n          <name>listener</name>\n          <value>fr.cnes.regards.microservices.core.test.report.RequirementMatrixReportListener</value>\n        </property>\n      </properties>\n    </configuration>\n    <executions>\n      <execution>\n        <goals>\n          <goal>integration-test</goal>\n          <goal>verify</goal>\n        </goals>\n      </execution>\n    </executions>\n  </plugin>\n  <plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <configuration>\n      <properties>\n        <property>\n          <name>listener</name>\n          <value>fr.cnes.regards.microservices.core.test.report.RequirementMatrixReportListener</value>\n        </property>\n      </properties>\n    </configuration>\n  </plugin>\n</plugins>\n</pluginManagement>\n")),(0,a.kt)("h1",{id:"where-reports-are-generated"},"Where reports are generated?"),(0,a.kt)("p",null,"Reports are generated in maven default build directory (i.e. target) under ",(0,a.kt)("strong",{parentName:"p"},"requirement-reports")," directory. A report starts with ",(0,a.kt)("strong",{parentName:"p"},"RQMT-")," prefix and is saved as an XML file."),(0,a.kt)("h1",{id:"how-to-generate-an-aggregated-report"},"How to generate an aggregated report"),(0,a.kt)("p",null,"Use REGARDS ",(0,a.kt)("strong",{parentName:"p"},"Maven report plugin"),"."),(0,a.kt)("p",null,"From the root directory of your microservice :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mvn fr.cnes.regards.microservices:report-maven-plugin:1.0-SNAPSHOT:gen --non-recursive\n")),(0,a.kt)("p",null,"An XLSX file (Windows office document) is created under target directory."))}m.isMDXComponent=!0}}]);