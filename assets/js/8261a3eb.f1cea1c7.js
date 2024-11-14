"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[28919],{85075:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=t(74848),n=t(28453);const s={title:"Static Configuration",sidebar_label:"Static configuration",slug:"/development/backend/services/order/configuration/static-configuration",sidebar_position:2},d=void 0,o={id:"development/services/order/configuration/configurations",title:"Static Configuration",description:"Static configuration is the microservice configuration set before microservice startup in a property file.",source:"@site/docs/development/services/order/configuration/configurations.md",sourceDirName:"development/services/order/configuration",slug:"/development/backend/services/order/configuration/static-configuration",permalink:"/docs/development/backend/services/order/configuration/static-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/order/configuration/configurations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Static Configuration",sidebar_label:"Static configuration",slug:"/development/backend/services/order/configuration/static-configuration",sidebar_position:2},sidebar:"dev",previous:{title:"Importation/Exportation",permalink:"/docs/development/backend/services/order/configuration/import-export"},next:{title:"Overview",permalink:"/docs/development/backend/services/processing/overview/"}},c={},a=[];function l(e){const r={a:"a",admonition:"admonition",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Static configuration is the microservice configuration set before microservice startup in a property file.\nThis configuration is common to all tenant."}),"\n",(0,i.jsxs)(r.p,{children:["Static configuration for ",(0,i.jsx)(r.code,{children:"Order"})," service is :"]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Default Value"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"regards.order.secret"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:"use to generate auth token to use on order endpoints"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"regards.order.max.storage.files.jobs.per.user"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"2"}),(0,i.jsx)(r.td,{children:"Max number of concurrent storage files retrieval jobs per user"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"regards.order.client.response.batch.size"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"1000"}),(0,i.jsx)(r.td,{children:"Max bulk size of AutoOrderEvent managed in a row"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"regards.order.cancel.request.bulk.size"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"1000"}),(0,i.jsx)(r.td,{children:"Max bulk size of OrderCancelEvent managed in a row"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"regards.order.request.bulk.size"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"1000"}),(0,i.jsx)(r.td,{children:"Max bulk size of OrderRequestEvent managed in a row"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"regards.order.batch.size"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"10000"}),(0,i.jsx)(r.td,{children:"Page size of the search request generated (destinated to rs-catalog)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"regards.order.basket.upload.file.max.lines"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"1000"}),(0,i.jsxs)(r.td,{children:["Max number of provider ids of uploaded file (see ",(0,i.jsx)(r.a,{href:"/docs/development/backend/services/order/guides/fill-basket-from-file",children:"basket upload file api"}),")"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"regards.order.files.bucket.size.Mb"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"100"}),(0,i.jsx)(r.td,{children:"Max size of files to retreive in a single storage job (single suborder)"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"regards.order.clean.expired.rate.ms"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"3600000   (1h)"}),(0,i.jsx)(r.td,{children:"Frequency of check order expiration."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"regards.order.computation.update.rate.ms"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"1000 (1s)"}),(0,i.jsx)(r.td,{children:"Scheduled method frequency to update all current running orders completions values and all order available files count values into database"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"regards.order.periodic.files.availability.check.cron"}),(0,i.jsx)(r.td,{children:"cron"}),(0,i.jsx)(r.td,{children:"0 0 7 * * MON-FRI (every working day at 7 am)"}),(0,i.jsx)(r.td,{children:"Frequency of sending email to users, for remind that some orders are waiting for him"})]})]})]}),"\n",(0,i.jsxs)(r.admonition,{type:"info",children:[(0,i.jsxs)(r.p,{children:["Some of these properties are customizable in ansible\ninventory. ",(0,i.jsx)(r.a,{href:"/docs/setup/swarm/advanced/optimizations/#dataprovider-optimization",children:"see installation guide"}),".\nlink"]}),(0,i.jsx)(r.p,{children:"To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role."})]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>o});var i=t(96540);const n={},s=i.createContext(n);function d(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);