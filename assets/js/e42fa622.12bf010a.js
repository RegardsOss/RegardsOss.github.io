"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[70177],{51810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(74848),o=t(28453);const r={title:"LTA-MANAGER microservice conception",sidebar_label:"How it works",slug:"/development/backend/services/lta-manager/conception/",sidebar_position:2},i=void 0,a={id:"development/services/lta-manager/lta-manager-conception",title:"LTA-MANAGER microservice conception",description:"Introduction",source:"@site/docs/development/services/lta-manager/lta-manager-conception.md",sourceDirName:"development/services/lta-manager",slug:"/development/backend/services/lta-manager/conception/",permalink:"/docs/development/backend/services/lta-manager/conception/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/lta-manager/lta-manager-conception.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"LTA-MANAGER microservice conception",sidebar_label:"How it works",slug:"/development/backend/services/lta-manager/conception/",sidebar_position:2},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/lta-manager/overview/"},next:{title:"Create product",permalink:"/docs/development/backend/services/lta-manager/guides/submit-product-amqp"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Data types",id:"data-types",level:2},{value:"Versioning",id:"versioning",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["LTA Manager is used to simplify data ingestion. To do so,\nLTA use a datatype configuration. It allows to associate a label (datatype name) to a configuration (\nsee ",(0,s.jsx)(n.a,{href:"/docs/development/backend/services/lta-manager/configuration/import-export",children:"LTA Manager configuration"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"The submission requests must indicate a datatype to let LTA Manager knows which configuration use.\nOtherwise, the request will be denied."}),"\n",(0,s.jsxs)(n.p,{children:["The main purpose of the microservice is to transfer product creation requests to the ",(0,s.jsx)(n.code,{children:"rs-worker-manager"})," service.\nThe product will then be transformed into a SIP and sent to the ",(0,s.jsx)(n.code,{children:"rs-ingest"})," service using a\ndedicated ",(0,s.jsx)(n.a,{href:"/docs/development/concepts/workers/",children:"worker"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To learn how to submit product creation request to the ",(0,s.jsx)(n.code,{children:"LTA Manager"})," microservice, please refer to\nthe ",(0,s.jsx)(n.a,{href:"/docs/development/backend/services/lta-manager/guides/submit-product-amqp",children:"AMQP API Guide"}),"\nand ",(0,s.jsx)(n.a,{href:"/docs/development/backend/services/lta-manager/guides/create-product-rest",children:"REST API Guide"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"LTA request are stored in database, and status requests can be followed from admin UI (Admin/LTA Manager)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"conception_diagram.png",src:t(33742).A+"",width:"1096",height:"880"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"We've illustrated an error on the Worker side, but you can also have an error on the Ingestion step and on the Storage\nstep."})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"lta-sip-generation-worker"})," will not be explained in this documentation section but is mandatory to generate SIPs."]})}),"\n",(0,s.jsx)(n.h2,{id:"data-types",children:"Data types"}),"\n",(0,s.jsxs)(n.p,{children:["Every ",(0,s.jsx)(n.a,{href:"/docs/development/concepts/products/",children:"product"})," submitted to the ",(0,s.jsx)(n.code,{children:"LTA Manager"})," microservice must define a *\n",(0,s.jsx)(n.em,{children:"Data Type"}),"*."]}),"\n",(0,s.jsx)(n.p,{children:"The Data Type concept is the main concept enabling the microservice to know how to process the product creation request."}),"\n",(0,s.jsx)(n.p,{children:"All Data Types must be configured on the service in order to define for each one :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/development/concepts/meta-catalog/",children:"data model"})," used to validate the product"]}),"\n",(0,s.jsx)(n.li,{children:"The sub-directory for storing the files associated with the product in the long-term archive."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"versioning",children:"Versioning"}),"\n",(0,s.jsxs)(n.p,{children:["Versioning of products is the same as describe in the ",(0,s.jsx)(n.a,{href:"/docs/development/backend/services/ingest/conception/#versioning",children:"rs-ingest documentation"}),".\nNevertheless, only two versioning methods are available with ",(0,s.jsx)(n.code,{children:"LTA Manager"}),", ",(0,s.jsx)(n.strong,{children:"REPLACE"})," and ",(0,s.jsx)(n.strong,{children:"INC_VERSION"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When you submit a creation request you can provide a parameter to choose the versioning mode. Please refer to\nthe ",(0,s.jsx)(n.a,{href:"/docs/development/backend/services/lta-manager/guides/submit-product-amqp",children:"AMQP Guide"})," and\nthe ",(0,s.jsx)(n.a,{href:"/docs/development/backend/services/lta-manager/guides/create-product-rest",children:"Rest API Guide"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},33742:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/conception_diagram-8ad6b6b692e901a9525ae68621d2dcc5.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);