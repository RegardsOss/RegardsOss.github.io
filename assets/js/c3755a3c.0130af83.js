"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[57533],{5248:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var r=n(74848),i=n(28453);const d={id:"backend-processing-process-api",title:"REGARDS Processing Process API",sidebar_label:"Process",slug:"/development/backend/services/processing/api/process/"},c=void 0,o={id:"development/backend/regards/processing/api/backend-processing-process-api",title:"REGARDS Processing Process API",description:"GET /process",source:"@site/versioned_docs/version-1.14/development/backend/regards/processing/api/process-api.md",sourceDirName:"development/backend/regards/processing/api",slug:"/development/backend/services/processing/api/process/",permalink:"/docs/1.14/development/backend/services/processing/api/process/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/processing/api/process-api.md",tags:[],version:"1.14",frontMatter:{id:"backend-processing-process-api",title:"REGARDS Processing Process API",sidebar_label:"Process",slug:"/development/backend/services/processing/api/process/"},sidebar:"dev",previous:{title:"API",permalink:"/docs/1.14/development/backend/services/processing/api-swagger"},next:{title:"Batch",permalink:"/docs/1.14/development/backend/services/processing/api/batch/"}},t={},a=[{value:"GET /process",id:"get-process",level:4},{value:"Responses",id:"responses",level:5},{value:"GET /process/<code>{processBusinessId}</code>",id:"get-processprocessbusinessid",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Responses",id:"responses-1",level:5}];function l(e){const s={code:"code",h4:"h4",h5:"h5",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h4,{id:"get-process",children:"GET /process"}),"\n",(0,r.jsx)(s.p,{children:"Find all processes / plugin configurations."}),"\n",(0,r.jsx)(s.h5,{id:"responses",children:"Responses"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Code"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"200"}),(0,r.jsx)(s.td,{children:"default response"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"500"}),(0,r.jsx)(s.td,{children:"default response"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Sample 200 response body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'[\n  {\n    "processId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "processName": "string",\n    "active": true,\n    "processInfo": {\n      "additionalProp1": {},\n      "additionalProp2": {},\n      "additionalProp3": {}\n    },\n    "params": [{}]\n  }\n]\n'})}),"\n",(0,r.jsxs)(s.h4,{id:"get-processprocessbusinessid",children:["GET /process/",(0,r.jsx)(s.code,{children:"{processBusinessId}"})]}),"\n",(0,r.jsx)(s.p,{children:"Find a process / plugin configuration by its business UUID."}),"\n",(0,r.jsx)(s.h5,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Located in"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Required"}),(0,r.jsx)(s.th,{children:"Schema"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"processBusinessId"}),(0,r.jsx)(s.td,{children:"path"}),(0,r.jsx)(s.td,{children:"The process / plugin configuration business ID."}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{children:"string (uuid)"})]})})]}),"\n",(0,r.jsx)(s.h5,{id:"responses-1",children:"Responses"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Code"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"200"}),(0,r.jsx)(s.td,{children:"default response"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"500"}),(0,r.jsx)(s.td,{children:"default response"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Sample 200 response body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "processId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "processName": "string",\n  "active": true,\n  "processInfo": {\n    "additionalProp1": {},\n    "additionalProp2": {},\n    "additionalProp3": {}\n  },\n  "params": [{}]\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var r=n(96540);const i={},d=r.createContext(i);function c(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);