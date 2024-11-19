"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[79521],{51916:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(74848),n=t(28453);const i={id:"backend-rest-request-status",title:"Get request status REST",sidebar_label:"Get request status",slug:"/development/backend/services/lta-manager/guides/get-request-status-rest",sidebar_position:2},d=void 0,c={id:"development/services/lta-manager/api-guides/rest/backend-rest-request-status",title:"Get request status REST",description:"*This page assumes you know how",source:"@site/docs/development/services/lta-manager/api-guides/rest/rest-get-request-status.md",sourceDirName:"development/services/lta-manager/api-guides/rest",slug:"/development/backend/services/lta-manager/guides/get-request-status-rest",permalink:"/docs/development/backend/services/lta-manager/guides/get-request-status-rest",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/lta-manager/api-guides/rest/rest-get-request-status.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"backend-rest-request-status",title:"Get request status REST",sidebar_label:"Get request status",slug:"/development/backend/services/lta-manager/guides/get-request-status-rest",sidebar_position:2},sidebar:"dev",previous:{title:"Create product",permalink:"/docs/development/backend/services/lta-manager/guides/create-product-rest"},next:{title:"All endpoints (OpenAPI)",permalink:"/docs/development/backend/services/lta-manager/api-swagger"}},l={},a=[{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function o(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["*This page assumes you know how\nto ",(0,r.jsx)(s.a,{href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-oauth2/",children:"authenticate"})," your REST API requests *"]}),"\n",(0,r.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"description"}),(0,r.jsx)(s.th,{children:"url"}),(0,r.jsx)(s.th,{children:"verb"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Product creation request info"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<HOST>/api/v1/rs-lta-manager/products/{correlationId}/info"})}),(0,r.jsx)(s.td,{children:"GET"})]})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"Request headers"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "Content-Type": "application/json",\n  "Authorization": "Bearer <token>"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Http status"}),(0,r.jsx)(s.th,{children:"description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"200"}),(0,r.jsx)(s.td,{children:"Your request is successfully created"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"403"}),(0,r.jsx)(s.td,{children:"Access denied"})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "content": {\n    "correlationId": "string",\n    "productId": "string",\n    "status": "DONE",\n    "statusDate": "2022-12-22T10:25:52.243Z",\n    "session": "string",\n    "message": "string"\n  },\n  "links": [\n  ]\n}\n'})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Optional"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"correlationId"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(s.td,{children:"Request identifier"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"productId"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(s.td,{children:"Id of the product to create"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"status"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(s.td,{children:"Status of the request. More details below."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"expires"}),(0,r.jsx)(s.td,{children:"String Date ISO 8601"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsxs)(s.td,{children:["Request expiration date. Format yyyy-MM-dd'T'HH:mm",":ss",".SSSZ"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"session"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"No"}),(0,r.jsx)(s.td,{children:"Request session name"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"message"}),(0,r.jsx)(s.td,{children:"String"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"Yes"}),(0,r.jsx)(s.td,{children:"Information message about your request"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"status"})," : can be :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"VALIDATED"})," : Your request is valid and will be processed soon."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"GENERATION_PENDING"})," : Your request is processing."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"GENERATED"}),": Your request is processing."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"INGESTION_PENDING"}),": Your request is processing."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DONE"}),": Your request is successfully done."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"GENERATION_ERROR"})," : Your request is terminated in error during OAIS product generation."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"INGESTION_ERROR"})," : Your request is terminated in error during OAIS product ingestion."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>c});var r=t(96540);const n={},i=r.createContext(n);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);