"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[91877],{49366:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var i=n(74848),t=n(28453);const c={title:"RS-ACCESS-INSTANCE microservice",sidebar_label:"Overview",slug:"/development/services/access-instance/overview",sidebar_position:1},r=void 0,o={id:"development/services/access-instance/overview",title:"RS-ACCESS-INSTANCE microservice",description:"Overview",source:"@site/docs/development/services/access-instance/overview.md",sourceDirName:"development/services/access-instance",slug:"/development/services/access-instance/overview",permalink:"/docs/development/services/access-instance/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/access-instance/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"RS-ACCESS-INSTANCE microservice",sidebar_label:"Overview",slug:"/development/services/access-instance/overview",sidebar_position:1},sidebar:"dev",previous:{title:"Services configuration",permalink:"/docs/development/services/common/common-import-export-configuration"},next:{title:"How it works",permalink:"/docs/development/services/access-instance/conception"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"How to access through UI",id:"how-to-access-through-ui",level:2},{value:"How to access source code",id:"how-to-access-source-code",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Access instance"})," (or ",(0,i.jsx)(s.strong,{children:"rs-access-instance"}),") microservice manage the configuration of instance UI such as the portal.\nRegards has another microservice with similar functionalities, ",(0,i.jsx)(s.code,{children:"rs-access-project"}),",\nwith ",(0,i.jsx)(s.a,{href:"/docs/development/concepts/multitenant/",children:"multitenant"})," conpect to handle configuration of projects or tenant user UI."]}),"\n",(0,i.jsxs)(s.p,{children:["There are two versions of this microservice. One (",(0,i.jsx)(s.code,{children:"rs-access-instance"}),") is compatible with toponym management and\nrequires a postgres database with the postgis extension installed, and the other (",(0,i.jsx)(s.code,{children:"rs-access-instance-light"}),") is not\ncompatible with a standard postgres database :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"rs-access-instance"})," responsibilities :","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["handle the configuration of UI for the portal interface :","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"UI modules (portal menu and List of projects),"}),"\n",(0,i.jsx)(s.li,{children:"application's theme or layout"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:"toponyms : create/search geographic locations in a database"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"rs-access-instance-light"})," responsibilities :","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["handle the configuration of UI for the portal interface :","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"UI modules (portal menu and List of projects),"}),"\n",(0,i.jsx)(s.li,{children:"application's theme or layout"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Concept"}),(0,i.jsx)(s.th,{children:"Compatibility"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/development/concepts/multitenant/",children:"Multitenant"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Can handle multiple tenants/projects"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/development/concepts/scalability/#vertical-scalability",children:"Vertical scalability"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Do not uses Jobs system"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/development/concepts/scalability/#horizontal-scalability",children:"Horizontal scalability"})}),(0,i.jsx)(s.td,{children:"No"}),(0,i.jsx)(s.td,{children:"Service can not be deployed with multiple instances"})]})]})]}),"\n",(0,i.jsxs)(s.p,{children:["You can learn how the service works with the ",(0,i.jsx)(s.a,{href:"/docs/development/services/access-instance/conception",children:"How it works section"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsxs)(s.p,{children:["You can learn how to ",(0,i.jsx)(s.strong,{children:"operate"})," with the microservice thanks to ",(0,i.jsx)(s.strong,{children:"API Guides"})," :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Browse all ",(0,i.jsx)(s.a,{href:"/docs/development/services/access-instance/api-guides/rest/api-swagger/",children:"REST API available endpoints"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-access-through-ui",children:"How to access through UI"}),"\n",(0,i.jsxs)(s.p,{children:["You can follow the ",(0,i.jsx)(s.strong,{children:"User manuel"})," to learn about the instance administrator UI related functionalities :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsxs)(s.a,{href:"/docs/user-guide/global-configuration/portal/",children:["How to configure ",(0,i.jsx)(s.strong,{children:"Portal UI"})]}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-access-source-code",children:"How to access source code"}),"\n",(0,i.jsxs)(s.p,{children:["Microservice source code for ",(0,i.jsx)(s.code,{children:"rs-access-instance"})," is available\non ",(0,i.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-backend/tree/master/rs-access/bootstrap-access-instance",children:"Github"})]}),"\n",(0,i.jsxs)(s.p,{children:["Microservice source code for ",(0,i.jsx)(s.code,{children:"rs-access-instance-light"})," is available\non ",(0,i.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-backend/tree/master/rs-access/bootstrap-access-instance-light",children:"Github"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"uiconfiguration"})," module source included in this microservice is available\non ",(0,i.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-backend/tree/master/rs-access/uiconfiguration",children:"Github"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"toponyms-instance"})," module source included in this microservice is available\non ",(0,i.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-backend/tree/master/rs-access/toponyms-instance",children:"Github"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var i=n(96540);const t={},c=i.createContext(t);function r(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);