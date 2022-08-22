"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[21493],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27697:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={layout:"classic-docs",title:"Requirement report","short-title":"Requirement report"},i="Prerequisites",s={unversionedId:"development/backend/framework/modules/reporting",id:"version-1.6.0/development/backend/framework/modules/reporting",title:"Requirement report",description:"Automatic reporting collection is running with JUnit tests.",source:"@site/versioned_docs/version-1.6.0/development/backend/framework/modules/reporting.md",sourceDirName:"development/backend/framework/modules",slug:"/development/backend/framework/modules/reporting",permalink:"/docs/1.6.0/development/backend/framework/modules/reporting",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/framework/modules/reporting.md",tags:[],version:"1.6.0",frontMatter:{layout:"classic-docs",title:"Requirement report","short-title":"Requirement report"}},p={},l=[],c={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Automatic reporting collection is running with ",(0,o.kt)("strong",{parentName:"p"},"JUnit tests"),"."),(0,o.kt)("h1",{id:"report-annotation"},"Report annotation"),(0,o.kt)("p",null,"Add dependency to test artifact (if not already defined) :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.microservices</groupId>\n    <artifactId>microservice-core-test</artifactId>\n    <scope>test</scope>\n</dependency>\n")),(0,o.kt)("p",null,"Use :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Requirement("DSL_REQUIREMENT?")\n')),(0,o.kt)("p",null,"many times to identify all requirements associated to your test."),(0,o.kt)("p",null,"Use :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Purpose("Purpose of your test?")\n')),(0,o.kt)("p",null,"to describe the unit test."),(0,o.kt)("h1",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Requirement("REGARDS_DSL_DAM_MOD_010")\n@Requirement("REGARDS_DSL_DAM_MOD_020")\n@Purpose("Get model attributes to manage data models")\n@Test\npublic void testSomething() {\n}\n')),(0,o.kt)("h1",{id:"how-to-generate-requirement-reports"},"How to generate requirement reports?"),(0,o.kt)("p",null,"Maven test plugins has to be configured to add a specific reporting listener."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<plugins>\n  <plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-failsafe-plugin</artifactId>\n    <configuration>\n      <properties>\n        <property>\n          <name>listener</name>\n          <value>fr.cnes.regards.microservices.core.test.report.RequirementMatrixReportListener</value>\n        </property>\n      </properties>\n    </configuration>\n    <executions>\n      <execution>\n        <goals>\n          <goal>integration-test</goal>\n          <goal>verify</goal>\n        </goals>\n      </execution>\n    </executions>\n  </plugin>\n  <plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-surefire-plugin</artifactId>\n    <configuration>\n      <properties>\n        <property>\n          <name>listener</name>\n          <value>fr.cnes.regards.microservices.core.test.report.RequirementMatrixReportListener</value>\n        </property>\n      </properties>\n    </configuration>\n  </plugin>\n</plugins>\n</pluginManagement>\n")),(0,o.kt)("h1",{id:"where-reports-are-generated"},"Where reports are generated?"),(0,o.kt)("p",null,"Reports are generated in maven default build directory (i.e. target) under ",(0,o.kt)("strong",{parentName:"p"},"requirement-reports")," directory. A report starts with ",(0,o.kt)("strong",{parentName:"p"},"RQMT-")," prefix and is saved as an XML file."),(0,o.kt)("h1",{id:"how-to-generate-an-aggregated-report"},"How to generate an aggregated report"),(0,o.kt)("p",null,"Use REGARDS ",(0,o.kt)("strong",{parentName:"p"},"Maven report plugin"),"."),(0,o.kt)("p",null,"From the root directory of your microservice :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mvn fr.cnes.regards.microservices:report-maven-plugin:1.0-SNAPSHOT:gen --non-recursive\n")),(0,o.kt)("p",null,"An XLSX file (Windows office document) is created under target directory."))}u.isMDXComponent=!0}}]);