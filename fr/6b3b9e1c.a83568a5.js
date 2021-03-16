(window.webpackJsonp=window.webpackJsonp||[]).push([[1100],{1170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),s=(n(0),n(2701)),c={id:"backend-processing-process-api",title:"REGARDS Processing Process API",sidebar_label:"Process",slug:"/development/backend/processing/api/process"},o={unversionedId:"development/backend/regards/processing/api/backend-processing-process-api",id:"version-1.4.0/development/backend/regards/processing/api/backend-processing-process-api",isDocsHomePage:!1,title:"REGARDS Processing Process API",description:"GET /process",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/processing/api/process-api.md",slug:"/development/backend/processing/api/process",permalink:"/fr/docs/1.4.0/development/backend/processing/api/process",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/processing/api/process-api.md",version:"1.4.0",sidebar_label:"Process",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS processing microservice",permalink:"/fr/docs/1.4.0/development/backend/processing/overview"},next:{title:"REGARDS Processing Batch API",permalink:"/fr/docs/1.4.0/development/backend/processing/api/batch"}},p=[],i={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h4",{id:"get-process"},"GET /process"),Object(s.b)("p",null,"Find all processes / plugin configurations."),Object(s.b)("h5",{id:"responses"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "processId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "processName": "string",\n    "active": true,\n    "processInfo": {\n      "additionalProp1": {},\n      "additionalProp2": {},\n      "additionalProp3": {}\n    },\n    "params": [{}]\n  }\n]\n')),Object(s.b)("h4",{id:"get-processprocessbusinessid"},"GET /process/{processBusinessId}"),Object(s.b)("p",null,"Find a process / plugin configuration by its business UUID."),Object(s.b)("h5",{id:"parameters"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Name"),Object(s.b)("th",{parentName:"tr",align:null},"Located in"),Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"Required"),Object(s.b)("th",{parentName:"tr",align:null},"Schema"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"processBusinessId"),Object(s.b)("td",{parentName:"tr",align:null},"path"),Object(s.b)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID."),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"string (uuid)")))),Object(s.b)("h5",{id:"responses-1"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "processId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "processName": "string",\n  "active": true,\n  "processInfo": {\n    "additionalProp1": {},\n    "additionalProp2": {},\n    "additionalProp3": {}\n  },\n  "params": [{}]\n}\n')))}l.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||s;return n?a.a.createElement(m,o(o({ref:t},i),{},{components:n})):a.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<s;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);