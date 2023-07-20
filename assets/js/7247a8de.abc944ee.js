"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[30052],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60019:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={id:"release-notes-v1.4.0",title:"Version 1.4.0",slug:"/v1.4.0/"},i=void 0,o={unversionedId:"notes/release-notes-v1.4.0",id:"notes/release-notes-v1.4.0",title:"Version 1.4.0",description:"Released on: January, 2021",source:"@site/release_notes/notes/V1.4.0.md",sourceDirName:"notes",slug:"/v1.4.0/",permalink:"/release-notes/v1.4.0/",draft:!1,tags:[],version:"current",frontMatter:{id:"release-notes-v1.4.0",title:"Version 1.4.0",slug:"/v1.4.0/"},sidebar:"release_notes",previous:{title:"Version 1.5.0",permalink:"/release-notes/v1.5.0/"},next:{title:"Version 1.3.0",permalink:"/release-notes/v1.3.0/"}},l={},u=[{value:"Manual migration",id:"manual-migration",level:2},{value:"AMQP subscribers changes",id:"amqp-subscribers-changes",level:2},{value:"HMI improvements",id:"hmi-improvements",level:2},{value:"Quotas",id:"quotas",level:2},{value:"Processing service",id:"processing-service",level:2},{value:"Others",id:"others",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Released on: ",(0,a.kt)("strong",{parentName:"p"},"January, 2021"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-GPLv3-blue.svg",alt:"License: GPL v3"}))),(0,a.kt)("admonition",{title:"disclaimer",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This version modify some APIs of existing services.",(0,a.kt)("br",{parentName:"p"}),"\n","Existing catalogs needs to be reset.")),(0,a.kt)("h2",{id:"manual-migration"},"Manual migration"),(0,a.kt)("p",null,"As 1.4.0 Version of REGARDS modify the way to index any data in Elasticsearch catalog, catalog of every projects of a REGARDS instance should be reset. To do so, you can use the reset option from the administration interface as describe ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-guide/crawler/reset-catalog"},"here")),(0,a.kt)("h2",{id:"amqp-subscribers-changes"},"AMQP subscribers changes"),(0,a.kt)("p",null,'The here under changes modify how applications can interract with "Feature Manager" REGARDS sevice to send feature requests through AMQP messages'),(0,a.kt)("p",null,(0,a.kt)("h3",{parentName:"p"},"AMQP Feature requests"),(0,a.kt)("h4",{parentName:"p"},"Feature creation request"),(0,a.kt)("admonition",{parentName:"p",title:"disclaimer",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"No changes in amqp interfaces.")),(0,a.kt)("h4",{parentName:"p"},"Feature creation request by file reference"),(0,a.kt)("ul",{parentName:"p"},(0,a.kt)("li",{parentName:"ul"},'Reference requests in previous version are renamed to "Extraction requests" in V1.4.0.'),(0,a.kt)("li",{parentName:"ul"},"New extraction requests has to be published on this exchange :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,"regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionRequestEvent`")))),(0,a.kt)("li",{parentName:"ul"},"In previous version reference requests were sent to :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureReferenceRequestEvent"))))),(0,a.kt)("admonition",{parentName:"p",title:"disclaimer",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The requests body and header has not changed.")),(0,a.kt)("h4",{parentName:"p"},"Feature patch request"),(0,a.kt)("admonition",{parentName:"p",title:"disclaimer",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"No changes in amqp interfaces.")),(0,a.kt)("h4",{parentName:"p"},"Feature deletion request"),(0,a.kt)("admonition",{parentName:"p",title:"disclaimer",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"No changes in amqp interfaces.")),(0,a.kt)("h3",{parentName:"p"},"AMQP monitoring API"),(0,a.kt)("h4",{parentName:"p"},"Requests response"),(0,a.kt)("ul",{parentName:"p"},(0,a.kt)("li",{parentName:"ul"},"In previuous version requests responses were all sent to : ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent")))),(0,a.kt)("li",{parentName:"ul"},"In new version All Creation/Notification/Deletion/Update requests responses are sent to : ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent")))),(0,a.kt)("li",{parentName:"ul"},"In new version All Extraction requests responses are sent to : ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("b",null,"regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionResponseEvent")))))),(0,a.kt)("h2",{id:"hmi-improvements"},"HMI improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add new feature in Geographical view on user interface"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("a",{parentName:"li",href:"https://cesium.com/"},"Cesium")," as graphical 3D engine renderer for Geographical view in user interface.")),(0,a.kt)("h2",{id:"quotas"},"Quotas"),(0,a.kt)("p",null,"New Administrators configuration option to limit users download throught quotas. "),(0,a.kt)("h2",{id:"processing-service"},"Processing service"),(0,a.kt)("p",null,"New Processing service allows administrator to define data treatements applicable to user order data. To learn more about this new feature, you can read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-guide/data-services/processing-services"},"Processing walkthrough guide")),(0,a.kt)("h2",{id:"others"},"Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improve notifications sent to subscribed client to inform for all new feature added / modified / deleted from any REGARDS datasource."),(0,a.kt)("li",{parentName:"ul"},"Improve Elasticsearch mapping of indexed attributs thanks to defined data models and included typed attributes.")))}m.isMDXComponent=!0}}]);