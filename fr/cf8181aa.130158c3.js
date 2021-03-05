(window.webpackJsonp=window.webpackJsonp||[]).push([[2124],{2194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(2699)),s={id:"backend-processing-process-api",title:"REGARDS Processing Process API",sidebar_label:"Process",slug:"/development/backend/processing/api/process"},o={unversionedId:"development/backend/regards/processing/api/backend-processing-process-api",id:"development/backend/regards/processing/api/backend-processing-process-api",isDocsHomePage:!1,title:"REGARDS Processing Process API",description:"GET /process",source:"@site/docs/development/backend/regards/processing/api/process-api.md",slug:"/development/backend/processing/api/process",permalink:"/fr/docs/development/backend/processing/api/process",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/processing/api/process-api.md",version:"current",sidebar_label:"Process",sidebar:"dev",previous:{title:"REGARDS processing microservice",permalink:"/fr/docs/development/backend/processing/overview"},next:{title:"REGARDS Processing Batch API",permalink:"/fr/docs/development/backend/processing/api/batch"}},p=[],i={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"get-process"},"GET /process"),Object(c.b)("p",null,"Find all processes / plugin configurations."),Object(c.b)("h5",{id:"responses"},"Responses"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Code"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"200"),Object(c.b)("td",{parentName:"tr",align:null},"default response")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"500"),Object(c.b)("td",{parentName:"tr",align:null},"default response")))),Object(c.b)("p",null,"Sample 200 response body:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "processId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "processName": "string",\n    "active": true,\n    "processInfo": {\n      "additionalProp1": {},\n      "additionalProp2": {},\n      "additionalProp3": {}\n    },\n    "params": [{}]\n  }\n]\n')),Object(c.b)("h4",{id:"get-processprocessbusinessid"},"GET /process/{processBusinessId}"),Object(c.b)("p",null,"Find a process / plugin configuration by its business UUID."),Object(c.b)("h5",{id:"parameters"},"Parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Located in"),Object(c.b)("th",{parentName:"tr",align:null},"Description"),Object(c.b)("th",{parentName:"tr",align:null},"Required"),Object(c.b)("th",{parentName:"tr",align:null},"Schema"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"processBusinessId"),Object(c.b)("td",{parentName:"tr",align:null},"path"),Object(c.b)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID."),Object(c.b)("td",{parentName:"tr",align:null},"Yes"),Object(c.b)("td",{parentName:"tr",align:null},"string (uuid)")))),Object(c.b)("h5",{id:"responses-1"},"Responses"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Code"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"200"),Object(c.b)("td",{parentName:"tr",align:null},"default response")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"500"),Object(c.b)("td",{parentName:"tr",align:null},"default response")))),Object(c.b)("p",null,"Sample 200 response body:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "processId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "processName": "string",\n  "active": true,\n  "processInfo": {\n    "additionalProp1": {},\n    "additionalProp2": {},\n    "additionalProp3": {}\n  },\n  "params": [{}]\n}\n')))}l.isMDXComponent=!0},2699:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||c;return n?a.a.createElement(m,o(o({ref:t},i),{},{components:n})):a.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<c;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);