"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[84918],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2475:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={id:"backend-processing-batch-api",title:"REGARDS Processing Batch API",sidebar_label:"Batch",slug:"/development/backend/services/processing/api/batch/"},c=void 0,p={unversionedId:"development/backend/regards/processing/api/backend-processing-batch-api",id:"development/backend/regards/processing/api/backend-processing-batch-api",title:"REGARDS Processing Batch API",description:"POST /batch",source:"@site/docs/development/backend/regards/processing/api/batch-api.md",sourceDirName:"development/backend/regards/processing/api",slug:"/development/backend/services/processing/api/batch/",permalink:"/docs/development/backend/services/processing/api/batch/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/processing/api/batch-api.md",tags:[],version:"current",frontMatter:{id:"backend-processing-batch-api",title:"REGARDS Processing Batch API",sidebar_label:"Batch",slug:"/development/backend/services/processing/api/batch/"},sidebar:"dev",previous:{title:"Process",permalink:"/docs/development/backend/services/processing/api/process/"},next:{title:"Monitoring",permalink:"/docs/development/backend/services/processing/api/monitoring/"}},l={},d=[{value:"POST <code>/batch</code>",id:"post-batch",level:2},{value:"Request",id:"request",level:3},{value:"Responses",id:"responses",level:3}],u={toc:d};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"post-batch"},"POST ",(0,o.kt)("inlineCode",{parentName:"h2"},"/batch")),(0,o.kt)("p",null,"Attempt to create a batch for future executions"),(0,o.kt)("h3",{id:"request"},"Request"),(0,o.kt)("p",null,"Sample request body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "string",\n  "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "tenant": "string",\n  "user": "string",\n  "userRole": "string",\n  "parameters": {\n    "additionalProp1": {},\n    "additionalProp2": {},\n    "additionalProp3": {}\n  },\n  "filesetsByDataset": {\n    "additionalProp1": {},\n    "additionalProp2": {},\n    "additionalProp3": {}\n  }\n}\n')),(0,o.kt)("h3",{id:"responses"},"Responses"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"200"),(0,o.kt)("td",{parentName:"tr",align:null},"default response")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"500"),(0,o.kt)("td",{parentName:"tr",align:null},"default response")))),(0,o.kt)("p",null,"Sample 200 response body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "batchId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "correlationId": "string"\n}\n')))}b.isMDXComponent=!0}}]);