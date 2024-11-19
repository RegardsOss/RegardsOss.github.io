"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[14551],{90312:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(74848),n=i(28453);const r={title:"Overview",sidebar_label:"Overview",slug:"/development/backend/services/config/overview/",sidebar_position:1},c=void 0,o={id:"development/services/config/overview",title:"Overview",description:"The Config microservice (or rs-config) is the service that manages the configuration of the various",source:"@site/docs/development/services/config/overview.md",sourceDirName:"development/services/config",slug:"/development/backend/services/config/overview/",permalink:"/docs/development/backend/services/config/overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/config/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/development/backend/services/config/overview/",sidebar_position:1},sidebar:"dev",previous:{title:"Available plugins",permalink:"/docs/development/backend/services/authentication/contributor-guides/plugins/"},next:{title:"How it works",permalink:"/docs/development/backend/services/config/conception/"}},d={},l=[{value:"How to access source code",id:"how-to-access-source-code",level:2}];function a(e){const s={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Config"})," microservice (or ",(0,t.jsx)(s.strong,{children:"rs-config"}),") is the service that manages the configuration of the various\n",(0,t.jsx)(s.a,{href:"/docs/development/concepts/microservices/",children:"Regards microservices"}),". It is a mandatory microservice in the REGARDS\n",(0,t.jsx)(s.a,{href:"/docs/development/concepts/microservices/",children:"microservices architecture"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The aim is to ensure consistency in the configuration of the various instances of Regards microservices. This\nconfiguration is therefore centralized within the ",(0,t.jsx)(s.strong,{children:"rs-config"})," microservice."]}),"\n",(0,t.jsx)(s.p,{children:"The various services call the config service to :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Retrieve their configuration"}),": the configuration of a microservice is common to all instances of this microservice"]}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Concept"}),(0,t.jsx)(s.th,{children:"Compatibility"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/development/concepts/multitenant/",children:"Multitenant"})}),(0,t.jsx)(s.td,{children:"Yes"}),(0,t.jsx)(s.td,{children:"Can handle multiple tenants/projects"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/development/concepts/scalability/#vertical-scalability",children:"Vertical scalability"})}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"Uses Jobs system"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/development/concepts/scalability/#horizontal-scalability",children:"Horizontal scalability"})}),(0,t.jsx)(s.td,{children:"No"}),(0,t.jsx)(s.td,{children:"Service can not be deployed with multiple instances"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["You can learn how the service works with the ",(0,t.jsx)(s.a,{href:"/docs/development/backend/services/config/conception/",children:"How it works section"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-access-source-code",children:"How to access source code"}),"\n",(0,t.jsxs)(s.p,{children:["Microservice source code is available on ",(0,t.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-backend/tree/master/rs-cloud/rs-config",children:"GitHub"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>o});var t=i(96540);const n={},r=t.createContext(n);function c(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);