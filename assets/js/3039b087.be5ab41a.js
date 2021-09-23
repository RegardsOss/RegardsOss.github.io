"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62719],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20535:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],p={id:"backend-processing-process-api",title:"REGARDS Processing Process API",sidebar_label:"Process",slug:"/development/backend/processing/api/process/"},i=void 0,l={unversionedId:"development/backend/regards/processing/api/backend-processing-process-api",id:"version-1.4.0/development/backend/regards/processing/api/backend-processing-process-api",isDocsHomePage:!1,title:"REGARDS Processing Process API",description:"GET /process",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/processing/api/process-api.md",sourceDirName:"development/backend/regards/processing/api",slug:"/development/backend/processing/api/process/",permalink:"/docs/1.4.0/development/backend/processing/api/process/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/processing/api/process-api.md",version:"1.4.0",frontMatter:{id:"backend-processing-process-api",title:"REGARDS Processing Process API",sidebar_label:"Process",slug:"/development/backend/processing/api/process/"},sidebar:"version-1.4.0/dev",previous:{title:"Overview",permalink:"/docs/1.4.0/development/backend/processing/overview/"},next:{title:"Batch",permalink:"/docs/1.4.0/development/backend/processing/api/batch/"}},c=[],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"get-process"},"GET /process"),(0,s.kt)("p",null,"Find all processes / plugin configurations."),(0,s.kt)("h5",{id:"responses"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "processId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "processName": "string",\n    "active": true,\n    "processInfo": {\n      "additionalProp1": {},\n      "additionalProp2": {},\n      "additionalProp3": {}\n    },\n    "params": [{}]\n  }\n]\n')),(0,s.kt)("h4",{id:"get-processprocessbusinessid"},"GET /process/{processBusinessId}"),(0,s.kt)("p",null,"Find a process / plugin configuration by its business UUID."),(0,s.kt)("h5",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"processBusinessId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID."),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string (uuid)")))),(0,s.kt)("h5",{id:"responses-1"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "processId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "processName": "string",\n  "active": true,\n  "processInfo": {\n    "additionalProp1": {},\n    "additionalProp2": {},\n    "additionalProp3": {}\n  },\n  "params": [{}]\n}\n')))}u.isMDXComponent=!0}}]);