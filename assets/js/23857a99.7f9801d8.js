"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[33697],{54865:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=i(74848),r=i(28453);const s={title:"How it works",sidebar_label:"How it works",slug:"/development/backend/services/config/conception/",sidebar_position:2},t=void 0,c={id:"development/services/config/conception",title:"How it works",description:"The config microservice is based on Spring Cloud Config.",source:"@site/docs/development/services/config/conception.md",sourceDirName:"development/services/config",slug:"/development/backend/services/config/conception/",permalink:"/docs/development/backend/services/config/conception/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/config/conception.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How it works",sidebar_label:"How it works",slug:"/development/backend/services/config/conception/",sidebar_position:2},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/config/overview/"},next:{title:"Retrieve Configuration",permalink:"/docs/development/backend/services/config/guides/rest/get-configuration"}},d={},a=[];function l(e){const n={a:"a",br:"br",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The config microservice is based on ",(0,o.jsx)(n.a,{href:"https://docs.spring.io/spring-cloud-config/docs/current/reference/html/",children:"Spring Cloud Config"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Spring Cloud Config"})," provides a centralized server for managing the configuration of an application.",(0,o.jsx)(n.br,{}),"\n","It allows you to centralize configuration files in a repository (typically Git) and distribute them to multiple\nmicroservices in a distributed architecture."]}),"\n",(0,o.jsxs)(n.p,{children:["The main concepts behind ",(0,o.jsx)(n.strong,{children:"Spring Cloud Config"})," are :"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Centralized configuration storage"}),": The Regards services configuration files are stored in a centralized\nrepository. These configurations can specific to an environment or to a particular microservice."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Config server"}),": The ",(0,o.jsx)(n.strong,{children:"Spring Cloud Config Server"})," is a Spring Boot application that exposes a REST API,\nenabling microservices te retrieve their configurations. This is the role of the ",(0,o.jsx)(n.strong,{children:"Config"})," microservice."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Config clients"}),": the multiple ",(0,o.jsx)(n.strong,{children:"Regards microservices"})," use the ",(0,o.jsx)(n.strong,{children:"Spring Cloud Config Client"})," to retrieve\ntheir configuration. On startup, each microservice connects to the ",(0,o.jsx)(n.strong,{children:"Config server"})," and recover its configuration."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(16727).A+"",width:"685",height:"362"})})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},16727:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/config-conception-edbf2d264b46a45f6462b388edc654b5.png"},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var o=i(96540);const r={},s=o.createContext(r);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);