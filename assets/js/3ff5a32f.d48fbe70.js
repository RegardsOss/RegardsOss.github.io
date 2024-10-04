"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[75487],{34059:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=s(74848),t=s(28453);const i={title:"Overview",sidebar_label:"Overview",slug:"/development/backend/services/lta-manager/overview/",sidebar_position:1},o=void 0,a={id:"development/services/lta-manager/lta-manager",title:"Overview",description:"The LTA Manager or rs-lta-manager microservice (LTA : Long Term Archive request) has been designed to improve",source:"@site/docs/development/services/lta-manager/lta-manager.md",sourceDirName:"development/services/lta-manager",slug:"/development/backend/services/lta-manager/overview/",permalink:"/docs/development/backend/services/lta-manager/overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/lta-manager/lta-manager.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/development/backend/services/lta-manager/overview/",sidebar_position:1},sidebar:"dev",previous:{title:"Static configuration",permalink:"/docs/development/backend/services/fem/configuration/static-configuration"},next:{title:"How it works",permalink:"/docs/development/backend/services/lta-manager/conception/"}},c={},d=[{value:"How to use",id:"how-to-use",level:3},{value:"How to configure",id:"how-to-configure",level:2},{value:"How to access source code",id:"how-to-access-source-code",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"LTA Manager"})," or ",(0,n.jsx)(r.code,{children:"rs-lta-manager"})," microservice (LTA : Long Term Archive request) has been designed to improve\ninteroperability between external applications and REGARDS OAIS catalog.\nIt provides a single service that let you create product and check creation progress and errors."]}),"\n",(0,n.jsxs)(r.p,{children:["It is an optional service of\nthe ",(0,n.jsx)(r.a,{href:"/docs/development/functional-overview/oais-catalog-services/",children:"OAIS Services (Functional overview)"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["To do so, ",(0,n.jsx)(r.code,{children:"LTA Manager"})," or ",(0,n.jsx)(r.code,{children:"rs-lta-manager"})," provides these functionalities:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["OAIS Product creation","\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["the payload is lighter than the one used by ",(0,n.jsx)(r.a,{href:"/docs/development/backend/services/ingest/overview/",children:"OAIS catalog"})]}),"\n",(0,n.jsx)(r.li,{children:"product can be enhancement by workers"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["Get request status and errors - avoid you to connect to sub service used like ",(0,n.jsx)(r.code,{children:"rs-worker-manager"}),", ",(0,n.jsx)(r.code,{children:"rs-ingest"}),"\nand ",(0,n.jsx)(r.code,{children:"rs-storage"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{title:"Mandatory",type:"info",children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"LTA Manager"})," or ",(0,n.jsx)(r.code,{children:"rs-lta-manager"})," need a worker to transform LTA request to SIP.\nThis worker must be deployed and registered in\nthe ",(0,n.jsx)(r.a,{href:"/docs/development/services/worker-manager/overview",children:"rs-worker-manager microservice"}),"."]})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Concept"}),(0,n.jsx)(r.th,{children:"Compatibility"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/development/concepts/multitenant/",children:"Multitenant"})}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Can handle multiple tenants/projects"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/development/concepts/scalability/#vertical-scalability",children:"Vertical scalability"})}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Uses Jobs system"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/development/concepts/scalability/#horizontal-scalability",children:"Horizontal scalability"})}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:"Service can be deployed with multiple instances"})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:["You can learn how the service works with the ",(0,n.jsx)(r.a,{href:"/docs/development/backend/services/lta-manager/conception/",children:"How it works section"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"how-to-use",children:"How to use"}),"\n",(0,n.jsxs)(r.p,{children:["You can learn how to ",(0,n.jsx)(r.strong,{children:"operate"})," with the microservice thanks to ",(0,n.jsx)(r.strong,{children:"API Guides"})," :"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Create product ",(0,n.jsx)(r.a,{href:"/docs/development/backend/services/lta-manager/guides/create-product-rest",children:"using REST API"}),"\nor ",(0,n.jsx)(r.a,{href:"/docs/development/backend/services/lta-manager/guides/submit-product-amqp",children:"using AMQP API"})," shows you how to create a ",(0,n.jsx)(r.em,{children:"Long Term Archive request"})," and\nsent it to REGARDS."]}),"\n",(0,n.jsxs)(r.li,{children:["Get product ",(0,n.jsx)(r.a,{href:"/docs/development/backend/services/lta-manager/guides/get-request-status-rest",children:"status using REST API"}),"\nor ",(0,n.jsx)(r.a,{href:"/docs/development/backend/services/lta-manager/guides/get-product-progress-amqp",children:"progress using AMQP API"})," shows you how to retrieve ",(0,n.jsx)(r.em,{children:"Long Term\nArchive request"})," updates."]}),"\n",(0,n.jsxs)(r.li,{children:["Browse all ",(0,n.jsx)(r.a,{href:"/docs/development/backend/services/lta-manager/api-swagger",children:"REST API available endpoints"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"how-to-configure",children:"How to configure"}),"\n",(0,n.jsxs)(r.p,{children:["To learn how the microservice is configured with ",(0,n.jsx)(r.strong,{children:"static parameters from properties files"}),"\nsee ",(0,n.jsx)(r.a,{href:"/docs/development/backend/services/lta-manager/configuration/static-configuration",children:"Configuration section"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["To understand the ",(0,n.jsx)(r.strong,{children:"configuration of specific tenant"})," (aka project)\nsee ",(0,n.jsx)(r.a,{href:"/docs/development/backend/services/lta-manager/configuration/import-export",children:"Import/export configuration section"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"how-to-access-source-code",children:"How to access source code"}),"\n",(0,n.jsxs)(r.p,{children:["Microservice source code is available\non ",(0,n.jsx)(r.a,{href:"https://github.com/RegardsOss/regards-backend/tree/master/rs-lta-manager",children:"GitHub"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>a});var n=s(96540);const t={},i=n.createContext(t);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);