"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[81153],{24449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(74848),s=n(28453);const r={layout:"classic-docs",title:"Microservice multitenant database","short-title":"Multitenant Database"},i=void 0,o={id:"development/backend/framework/modules/multitenant-database",title:"Microservice multitenant database",description:"Overall",source:"@site/versioned_docs/version-1.15/development/backend/framework/modules/multitenant-database.md",sourceDirName:"development/backend/framework/modules",slug:"/development/backend/framework/modules/multitenant-database",permalink:"/docs/1.15/development/backend/framework/modules/multitenant-database",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/framework/modules/multitenant-database.md",tags:[],version:"1.15",frontMatter:{layout:"classic-docs",title:"Microservice multitenant database","short-title":"Multitenant Database"}},d={},c=[{value:"Overall",id:"overall",level:2},{value:"Initial and static configuration",id:"initial-and-static-configuration",level:2}];function l(e){const t={br:"br",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"overall",children:"Overall"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(67401).A+"",width:"1069",height:"431"})}),"\n",(0,a.jsx)(t.p,{children:'Every microservice generated with the "microservice-archetype" use the "jpa-multitenant-regards" module to handle connection to databases.'}),"\n",(0,a.jsxs)(t.p,{children:['To do so, every microservice include a "remote-tenant-resolver" module which is used to communicate with the central "administration-service".',(0,a.jsx)(t.br,{}),"\n",'The only exception is for microservice "administration" which includes a "local-tenant-resolver" to use internal services instead of Rest controllers.']}),"\n",(0,a.jsx)(t.p,{children:'At startup the "jpa-multitenant-regards" module is initialized with the here-under steps :'}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Retrieve all tenants"}),"\n",(0,a.jsx)(t.li,{children:"For each tenants retrieve microservices database connections."}),"\n",(0,a.jsx)(t.li,{children:"Create the pool of connections."}),"\n",(0,a.jsx)(t.li,{children:"Listen to tenant and connection event to handle a new project or an update on an existing connection."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"initial-and-static-configuration",children:"Initial and static configuration"}),"\n",(0,a.jsx)(t.p,{children:'At startup if a microservice database connections are not configured in the administration microservice, then a default project is initialized with default database connections. This project and connections are defined in the main "application.properties "file of the microservice. The available configuration values are :'}),"\n",(0,a.jsxs)(t.p,{children:["Disable JPA multitenant support  (default true if not present)",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.strong,{children:"regards.jpa.multitenant.enabled"}),"=true"]}),"\n",(0,a.jsxs)(t.p,{children:["Activate embedded mode with HSQLDB",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.strong,{children:"regards.jpa.multitenant.embedded"}),"=true"]}),"\n",(0,a.jsxs)(t.p,{children:["Path for embedded databases files",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.strong,{children:"regards.jpa.multitenant.embeddedPath"}),"=target"]}),"\n",(0,a.jsxs)(t.p,{children:["Not mandatory if embedded mode is activated",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.strong,{children:"regards.jpa.multitenant.dialect"}),"=org.hibernate.dialect.PostgreSQLDialect"]}),"\n",(0,a.jsxs)(t.p,{children:["database user name for tenant x",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.strong,{children:"regards.jpa.multitenant.tenants[x].tenant"}),"=example"]}),"\n",(0,a.jsxs)(t.p,{children:["database url for tenant x (Not mandatory if embedded mode is activated)\n",(0,a.jsx)(t.strong,{children:"regards.jpa.multitenant.tenants[x].url"}),"=jdbc:postgresql://localhost:5432/test1"]}),"\n",(0,a.jsxs)(t.p,{children:["database user name for tenant x (Not mandatory if embedded mode is activated)",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.strong,{children:"regards.jpa.multitenant.tenants[x].userName"}),"=postgres"]}),"\n",(0,a.jsxs)(t.p,{children:["database user password for tenant x (Not mandatory if embedded mode is activated)",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.strong,{children:"regards.jpa.multitenant.tenants[x].password"}),"=postgres"]}),"\n",(0,a.jsxs)(t.p,{children:["database driver for tenant x (Not mandatory if embedded mode is activated)",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.strong,{children:"regards.jpa.multitenant.tenants[x].driverClassName"}),"=org.postgresql.Driver"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"x"})," : Integer value for tenant index starting with 0."]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},67401:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/jpa-c95d1c9086d0ca823f2c745c5022908a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);