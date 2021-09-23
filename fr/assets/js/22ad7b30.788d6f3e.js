"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[11596],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),v=p(n),d=i,g=v["".concat(o,".").concat(d)]||v[d]||u[d]||a;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=v;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},18623:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return v}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),s=["components"],l={id:"backend-ingest-overview",title:"REGARDS ingest microservice",sidebar_label:"Overview",slug:"/development/backend/services/ingest/overview/"},o=void 0,p={unversionedId:"development/backend/regards/ingest/backend-ingest-overview",id:"development/backend/regards/ingest/backend-ingest-overview",isDocsHomePage:!1,title:"REGARDS ingest microservice",description:"Overview",source:"@site/docs/development/backend/regards/ingest/ingest.md",sourceDirName:"development/backend/regards/ingest",slug:"/development/backend/services/ingest/overview/",permalink:"/fr/docs/development/backend/services/ingest/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/ingest.md",tags:[],version:"current",frontMatter:{id:"backend-ingest-overview",title:"REGARDS ingest microservice",sidebar_label:"Overview",slug:"/development/backend/services/ingest/overview/"},sidebar:"dev",previous:{title:"Validation",permalink:"/fr/docs/development/backend/services/dataprovider/plugins/validation/"},next:{title:"Ingest",permalink:"/fr/docs/development/backend/services/ingest/api/"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Extension points",id:"available-extension-points",children:[]},{value:"Bus message events",id:"bus-message-events",children:[]}],u={toc:c};function v(e){var t=e.components,l=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ingest")," reponsabilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ingest SIP,"),(0,a.kt)("li",{parentName:"ul"},"Transform SIP to one or more AIPs,"),(0,a.kt)("li",{parentName:"ul"},"Submit AIPs to ",(0,a.kt)("inlineCode",{parentName:"li"},"Storage"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ingest plugins",src:n(90798).Z})),(0,a.kt)("h2",{id:"available-apis"},"Available APIs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../api/"},"Ingest"))),(0,a.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../plugins/sip-pre-processing/"},"SIP Pre processing plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../plugins/sip-validation/"},"SIP Validation plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../plugins/aip-generation/"},"AIP Generation plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../plugins/aip-tagging/"},"AIP Tagging plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../plugins/sip-post-processing/"},"SIP Post processing plugins"))),(0,a.kt)("h2",{id:"bus-message-events"},"Bus message events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../events/"},"Events"))))}v.isMDXComponent=!0},90798:function(e,t,n){t.Z=n.p+"assets/images/ingest-928443295ca84c991ff51af4005f37b1.svg"}}]);