(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,f=b["".concat(o,".").concat(u)]||b[u]||d[u]||c;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},465:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(2701)),o={id:"backend-processing-batch-api",title:"REGARDS Processing Batch API",sidebar_label:"Batch",slug:"/development/backend/processing/api/batch"},i={unversionedId:"development/backend/regards/processing/api/backend-processing-batch-api",id:"development/backend/regards/processing/api/backend-processing-batch-api",isDocsHomePage:!1,title:"REGARDS Processing Batch API",description:"POST /batch",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/processing/api/batch-api.md",slug:"/development/backend/processing/api/batch",permalink:"/fr/docs/next/development/backend/processing/api/batch",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/processing/api/batch-api.md",version:"current",sidebar_label:"Batch",sidebar:"dev",previous:{title:"REGARDS Processing Process API",permalink:"/fr/docs/next/development/backend/processing/api/process"},next:{title:"REGARDS Processing Monitoring API",permalink:"/fr/docs/next/development/backend/processing/api/monitoring"}},s=[{value:"POST <code>/batch</code>",id:"post-batch",children:[{value:"Request",id:"request",children:[]},{value:"Responses",id:"responses",children:[]}]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"post-batch"},"POST ",Object(c.b)("inlineCode",{parentName:"h2"},"/batch")),Object(c.b)("p",null,"Attempt to create a batch for future executions"),Object(c.b)("h3",{id:"request"},"Request"),Object(c.b)("p",null,"Sample request body:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "correlationId": "string",\n  "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "tenant": "string",\n  "user": "string",\n  "userRole": "string",\n  "parameters": {\n    "additionalProp1": {},\n    "additionalProp2": {},\n    "additionalProp3": {}\n  },\n  "filesetsByDataset": {\n    "additionalProp1": {},\n    "additionalProp2": {},\n    "additionalProp3": {}\n  }\n}\n')),Object(c.b)("h3",{id:"responses"},"Responses"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Code"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"200"),Object(c.b)("td",{parentName:"tr",align:null},"default response")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"500"),Object(c.b)("td",{parentName:"tr",align:null},"default response")))),Object(c.b)("p",null,"Sample 200 response body:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "batchId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "correlationId": "string"\n}\n')))}l.isMDXComponent=!0}}]);