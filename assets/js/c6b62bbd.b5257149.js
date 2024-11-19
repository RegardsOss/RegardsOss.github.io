"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[23410],{12439:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=t(74848),r=t(28453);const n={id:"backend-registry-overview",title:"Overview",sidebar_label:"Overview",slug:"/development/backend/services/registry/overview/",sidebar_position:1},c=void 0,o={id:"development/services/registry/backend-registry-overview",title:"Overview",description:"Registry (or rs-registry) microservice is a service that helps communication between",source:"@site/docs/development/services/registry/overview.md",sourceDirName:"development/services/registry",slug:"/development/backend/services/registry/overview/",permalink:"/docs/development/backend/services/registry/overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/registry/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"backend-registry-overview",title:"Overview",sidebar_label:"Overview",slug:"/development/backend/services/registry/overview/",sidebar_position:1},sidebar:"dev",previous:{title:"Static configuration",permalink:"/docs/development/backend/services/processing/configuration/static-configuration"},next:{title:"How it works",permalink:"/docs/development/backend/services/registry/conception/"}},d={},l=[{value:"How to access source code",id:"how-to-access-source-code",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Registry"})," (or ",(0,i.jsx)(s.strong,{children:"rs-registry"}),") microservice is a service that helps communication between\n",(0,i.jsx)(s.a,{href:"/docs/development/concepts/microservices/",children:"microservices"})," manages load balancing."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"rs-registry"})," responsibilities:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Microservice registry"}),": the service keeps track of all microservices in the application and their locations. It\nenables microservices to dynamically discover and communicate with each other without needing to know the\naddresses of other services in advance."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Load balancing"}),": the service helps distribute requests among different instances of a microservice."]}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Concept"}),(0,i.jsx)(s.th,{children:"Compatibility"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/development/concepts/multitenant/",children:"Multitenant"})}),(0,i.jsx)(s.td,{children:"Yes"}),(0,i.jsx)(s.td,{children:"Can handle multiple tenants/projects"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/development/concepts/scalability/#vertical-scalability",children:"Vertical scalability"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Uses Jobs system"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/development/concepts/scalability/#horizontal-scalability",children:"Horizontal scalability"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Service can not be deployed with multiple instances"})]})]})]}),"\n",(0,i.jsxs)(s.p,{children:["You can learn how the service works with the ",(0,i.jsx)(s.a,{href:"./conception",children:"How it works section"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-access-source-code",children:"How to access source code"}),"\n",(0,i.jsxs)(s.p,{children:["Microservice source code is available on ",(0,i.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-backend/tree/master/rs-cloud/rs-registry",children:"GitHub"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>o});var i=t(96540);const r={},n=i.createContext(r);function c(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);