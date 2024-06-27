"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[95558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(n),u=a,c=g["".concat(s,".").concat(u)]||g[u]||m[u]||i;return n?r.createElement(c,l(l({ref:t},d),{},{components:n})):r.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"backend-processing-monitoring-api",title:"REGARDS Processing Monitoring API",sidebar_label:"Monitoring",slug:"/development/backend/services/processing/api/monitoring/"},l=void 0,o={unversionedId:"development/backend/regards/processing/api/backend-processing-monitoring-api",id:"version-1.13.0/development/backend/regards/processing/api/backend-processing-monitoring-api",title:"REGARDS Processing Monitoring API",description:"GET /monitoring/executions",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/processing/api/monitoring-api.md",sourceDirName:"development/backend/regards/processing/api",slug:"/development/backend/services/processing/api/monitoring/",permalink:"/docs/1.13.0/development/backend/services/processing/api/monitoring/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/processing/api/monitoring-api.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-processing-monitoring-api",title:"REGARDS Processing Monitoring API",sidebar_label:"Monitoring",slug:"/development/backend/services/processing/api/monitoring/"},sidebar:"dev",previous:{title:"Batch",permalink:"/docs/1.13.0/development/backend/services/processing/api/batch/"},next:{title:"Open",permalink:"/docs/1.13.0/development/backend/services/processing/api/open/"}},s={},p=[{value:"GET <code>/monitoring/executions</code>",id:"get-monitoringexecutions",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Responses",id:"responses",level:3}],d={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-monitoringexecutions"},"GET ",(0,a.kt)("inlineCode",{parentName:"h2"},"/monitoring/executions")),(0,a.kt)("p",null,"List the executions present in the processing database, filtered by diverse criteria."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Located in"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tenant"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"The tenant"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of execution status"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"[ RUNNING, SUCCESS, FAILURE, TIMED_OUT ]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userEmail"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"The optional user who launched the executions"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"processBusinessId"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"The optional process business ID the executions refer to"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"from"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"The execution 'last updated' minimum timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"to"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"The execution 'last updated' maximum timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"page"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"The page number"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"integer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"size"),(0,a.kt)("td",{parentName:"tr",align:null},"query"),(0,a.kt)("td",{parentName:"tr",align:null},"The page size"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"integer")))),(0,a.kt)("h3",{id:"responses"},"Responses"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"default response")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"default response")))),(0,a.kt)("p",null,"Sample 200 response body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "links": [\n    {\n      "rel": "string",\n      "href": "string",\n      "hreflang": "string",\n      "media": "string",\n      "title": "string",\n      "type": "string",\n      "deprecation": "string",\n      "profile": "string",\n      "name": "string"\n    }\n  ],\n  "content": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "executionCorrelationId": "string",\n      "batchId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "batchCorrelationId": "string",\n      "expectedDuration": 0,\n      "inputFiles": [{}],\n      "steps": [{}],\n      "tenant": "string",\n      "userName": "string",\n      "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "created": "2020-12-31T00:00:00Z",\n      "lastUpdated": "2020-12-31T00:00:00Z",\n      "version": 0,\n      "persisted": true,\n      "processName": "string",\n      "links": [\n        {\n          "rel": "string",\n          "href": "string",\n          "hreflang": "string",\n          "media": "string",\n          "title": "string",\n          "type": "string",\n          "deprecation": "string",\n          "profile": "string",\n          "name": "string"\n        }\n      ]\n    }\n  ],\n  "page": {\n    "size": 0,\n    "totalElements": 0,\n    "totalPages": 0,\n    "number": 0\n  }\n}\n')))}m.isMDXComponent=!0}}]);