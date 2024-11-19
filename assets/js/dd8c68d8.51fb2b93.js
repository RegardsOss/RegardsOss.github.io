"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[69114],{79945:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=i(74848),r=i(28453);const s={title:"Static Configuration",sidebar_label:"Static configuration",slug:"/development/backend/services/ingest/configuration/static-configuration",sidebar_position:2},o=void 0,c={id:"development/services/ingest/configuration/configurations",title:"Static Configuration",description:"Static configuration is the microservice configuration set before microservice startup in a property file.",source:"@site/docs/development/services/ingest/configuration/configurations.md",sourceDirName:"development/services/ingest/configuration",slug:"/development/backend/services/ingest/configuration/static-configuration",permalink:"/docs/development/backend/services/ingest/configuration/static-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/ingest/configuration/configurations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Static Configuration",sidebar_label:"Static configuration",slug:"/development/backend/services/ingest/configuration/static-configuration",sidebar_position:2},sidebar:"dev",previous:{title:"Importation/Exportation",permalink:"/docs/development/backend/services/ingest/configuration/import-export"},next:{title:"Overview",permalink:"/docs/development/backend/services/gateway/overview/"}},a={},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Static configuration is the microservice configuration set before microservice startup in a property file.\nThis configuration is common to all tenant."}),"\n",(0,n.jsxs)(t.p,{children:["Static configuration for ",(0,n.jsx)(t.code,{children:"Ingest"})," service is :"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Default Value"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.ingest.aips.scan.iteration-limit"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"100"})}),(0,n.jsx)(t.td,{children:"Maximum number of requests to handle in a batch of AIP processing for deletion or update"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.storage.client.response.batch.size"}),(0,n.jsx)(t.td,{children:"integer"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"500"})}),(0,n.jsx)(t.td,{children:"Maximum number of AMQP events received from storage service to handle in batch"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"regards.aip.dump.zip-limit"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"1000"})}),(0,n.jsx)(t.td,{children:"Page size of AIPs retrieve during dump process"})]})]})]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["Some of these properties are customizable in ansible\ninventory. ",(0,n.jsx)(t.a,{href:"/docs/setup/swarm/advanced/optimizations/#dataprovider-optimization",children:"see installation guide"}),".\nlink"]}),(0,n.jsx)(t.p,{children:"To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role."})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);