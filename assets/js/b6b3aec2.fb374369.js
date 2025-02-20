"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[28947],{83113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(74848),s=n(28453);const o={title:"Overview",sidebar_label:"Overview",slug:"/development/backend/services/authentication/overview/",sidebar_position:1},r=void 0,c={id:"development/services/authentication/authentication-overview",title:"Overview",description:"This microservice is a mandatory microservice of the REGARDS architecture and is an integral part of",source:"@site/docs/development/services/authentication/authentication-overview.md",sourceDirName:"development/services/authentication",slug:"/development/backend/services/authentication/overview/",permalink:"/docs/development/backend/services/authentication/overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/authentication/authentication-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/development/backend/services/authentication/overview/",sidebar_position:1},sidebar:"dev",previous:{title:"Importation/Exportation",permalink:"/docs/development/services/admin/import-export"},next:{title:"How it works",permalink:"/docs/development/backend/services/authentication/"}},a={},l=[{value:"How to use",id:"how-to-use",level:2},{value:"Plugins",id:"plugins",level:2},{value:"How to configure",id:"how-to-configure",level:2},{value:"How to access through UI",id:"how-to-access-through-ui",level:2}];function d(e){const t={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This microservice is a mandatory microservice of the REGARDS architecture and is an integral part of\nthe ",(0,i.jsx)(t.a,{href:"/docs/development/functional-overview/meta-catalog-services",children:"main functional group"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The RS-AUTHENTICATION multi-tenant microservice allows users to authenticate.\nTo do so, RS-AUTHENTICATION provides these functionalities:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"allow authentication using REGARDS internal user base"}),"\n",(0,i.jsx)(t.li,{children:"allow fully externalized authentication system to connect through external SSO"}),"\n",(0,i.jsx)(t.li,{children:"allow external user base (LDAP,...)."}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Concept"}),(0,i.jsx)(t.th,{children:"Compatibility"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/development/concepts/multitenant/",children:"Multitenant"})}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"Can handle multiple tenants/projects"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/development/concepts/scalability/#vertical-scalability",children:"Vertical scalability"})}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"Service do not use Jobs system"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/development/concepts/scalability/#horizontal-scalability",children:"Horizontal scalability"})}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"Service can be deployed with multiple instances"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["You can learn how the service works with the ",(0,i.jsx)(t.a,{href:"/docs/development/backend/services/authentication/",children:"How it works section"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsxs)(t.p,{children:["You can learn how to ",(0,i.jsx)(t.strong,{children:"operate"})," with the microservice thanks to ",(0,i.jsx)(t.strong,{children:"API Guides"})," :"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/development/backend/services/authentication/api-guides/retrieve-token-oauth2/",children:"Get token using REST API"})," shows how to retrieve a REGARDS token using user and\npassword and use it in following requests."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Browse"})," all ",(0,i.jsx)(t.a,{href:"/docs/development/backend/services/authentication/api-guides",children:"REST API available endpoints"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"plugins",children:"Plugins"}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/docs/development/backend/services/authentication/contributor-guides/plugins/",children:"Plugins section"})," to learn how to customize authentication system."]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-configure",children:"How to configure"}),"\n",(0,i.jsx)(t.p,{children:"There is currently no API configuration system. You have to use the\nadministrator UI to configure the authorised authentication systems."}),"\n",(0,i.jsx)(t.h2,{id:"how-to-access-through-ui",children:"How to access through UI"}),"\n",(0,i.jsxs)(t.p,{children:["You can follow the ",(0,i.jsx)(t.strong,{children:"User manuel"})," to learn about the administrator UI related functionalities :"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/user-guide/project-configuration/users/authentication/",children:"How to configure **Authentication systems\n**"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);