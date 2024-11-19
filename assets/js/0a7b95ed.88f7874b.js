"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[80564],{2410:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=t(74848),n=t(28453);const o={id:"backend-dam-overview",title:"RS-DAM microservice",sidebar_label:"Overview",sidebar_position:1,slug:"/development/services/dam/overview/"},r=void 0,c={id:"development/services/dam/backend-dam-overview",title:"RS-DAM microservice",description:"The Data management or rs-dam microservice is the main service used in",source:"@site/docs/development/services/dam/overview.md",sourceDirName:"development/services/dam",slug:"/development/services/dam/overview/",permalink:"/docs/development/services/dam/overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/dam/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"backend-dam-overview",title:"RS-DAM microservice",sidebar_label:"Overview",sidebar_position:1,slug:"/development/services/dam/overview/"},sidebar:"dev",previous:{title:"Static configuration",permalink:"/docs/development/backend/services/catalog/configuration/static-configuration"},next:{title:"How it works",permalink:"/docs/development/services/dam/conception/"}},a={},d=[{value:"How to use",id:"how-to-use",level:3},{value:"How to configure",id:"how-to-configure",level:2},{value:"How to access source code",id:"how-to-access-source-code",level:2}];function l(e){const s={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"Data management"})," or ",(0,i.jsx)(s.strong,{children:"rs-dam"})," microservice is the main service used in\nthe ",(0,i.jsx)(s.a,{href:"/docs/development/functional-overview/meta-catalog-services",children:"Functional overview - Meta catalog services"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"This microservice purpose is to :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Manage ",(0,i.jsx)(s.a,{href:"/docs/development/concepts/meta-catalog/",children:"Data sources and Data models"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Manage ",(0,i.jsx)(s.a,{href:"/docs/development/concepts/products/",children:"products"})," access rights for users."]}),"\n",(0,i.jsxs)(s.li,{children:["Populate ",(0,i.jsx)(s.a,{href:"/docs/development/concepts/meta-catalog/",children:"meta catalog"})," with products crawled form data sources."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["To populate the meta catalog, the ",(0,i.jsx)(s.strong,{children:"rs-dam"})," microservice inserts items in a highly performant ",(0,i.jsx)(s.strong,{children:"Elasticsearch"})," index.\nThe meta catalog is the ",(0,i.jsx)(s.strong,{children:"Elasticsearch index"}),"."]})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Concept"}),(0,i.jsx)(s.th,{children:"Compatibility"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/development/concepts/multitenant/",children:"Multitenant"})}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Can handle multiple tenants/projects"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/development/concepts/scalability/#vertical-scalability",children:"Vertical scalability"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Do not uses Jobs system"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/development/concepts/scalability/#horizontal-scalability",children:"Horizontal scalability"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Service can not be deployed with multiple instances"})]})]})]}),"\n",(0,i.jsxs)(s.p,{children:["You can learn how the service works with the ",(0,i.jsx)(s.a,{href:"/docs/development/services/dam/conception/",children:"conception section"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsxs)(s.p,{children:["You can learn how to ",(0,i.jsx)(s.strong,{children:"operate"})," with the microservice thanks to ",(0,i.jsx)(s.strong,{children:"API Guides"})," :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Browse"})," all ",(0,i.jsx)(s.a,{href:"/docs/development/services/dam/api-guides/rest/api-swagger",children:"REST API available endpoints"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-configure",children:"How to configure"}),"\n",(0,i.jsxs)(s.p,{children:["To learn how the microservice is configured with ",(0,i.jsx)(s.strong,{children:"static parameters from properties files"}),"\nsee ",(0,i.jsx)(s.a,{href:"/docs/development/services/dam/configuration/static-configuration",children:"Configuration section"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["To understand the ",(0,i.jsx)(s.strong,{children:"configuration of specific tenant"})," (aka project)\nsee ",(0,i.jsx)(s.a,{href:"/docs/development/services/dam/configuration/import-export",children:"Import/export configuration section"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-access-source-code",children:"How to access source code"}),"\n",(0,i.jsxs)(s.p,{children:["Microservice source code is available\non ",(0,i.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-backend/tree/master/rs-dam",children:"GitHub"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var i=t(96540);const n={},o=i.createContext(n);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);