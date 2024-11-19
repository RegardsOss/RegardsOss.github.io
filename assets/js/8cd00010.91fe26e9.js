"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[8867],{30278:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var n=i(74848),t=i(28453);const l={id:"concepts-scalability",title:"Microservices Scalability",sidebar_label:"Scalability",slug:"/development/concepts/scalability/"},c=void 0,o={id:"development/concepts/concepts-scalability",title:"Microservices Scalability",description:"Vertical scalability",source:"@site/docs/development/concepts/07-scalability.md",sourceDirName:"development/concepts",slug:"/development/concepts/scalability/",permalink:"/docs/development/concepts/scalability/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/concepts/07-scalability.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"concepts-scalability",title:"Microservices Scalability",sidebar_label:"Scalability",slug:"/development/concepts/scalability/"},sidebar:"dev",previous:{title:"AMQP API",permalink:"/docs/development/concepts/amqp-api/"},next:{title:"Workers",permalink:"/docs/development/concepts/workers/"}},r={},a=[{value:"Vertical scalability",id:"vertical-scalability",level:2},{value:"Horizontal scalability",id:"horizontal-scalability",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const s={a:"a",br:"br",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"vertical-scalability",children:"Vertical scalability"}),"\n",(0,n.jsxs)(s.p,{children:["Vertical scalability consist of ",(0,n.jsx)(s.strong,{children:"scaling up resources and capacity of a single server"}),".",(0,n.jsx)(s.br,{}),"\n","Regards Microservices can use Vertical scalability by :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["scaling up the number of requests processed in a bulk in a ",(0,n.jsx)(s.strong,{children:"Job"})]}),"\n",(0,n.jsxs)(s.li,{children:["scaling up the number of ",(0,n.jsx)(s.strong,{children:"Jobs"})," executed in parallel (one Job = one Thread)."]}),"\n",(0,n.jsx)(s.li,{children:"scaling up the number of database pool connection authorised"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:i(40754).A+"",width:"1265",height:"863"})}),"\n",(0,n.jsx)(s.h2,{id:"horizontal-scalability",children:"Horizontal scalability"}),"\n",(0,n.jsxs)(s.p,{children:["Horizontal scalability consist of deploying multiple instances of the same ",(0,n.jsx)(s.a,{href:"/docs/development/concepts/microservices/",children:"microservice"}),"\nor ",(0,n.jsx)(s.a,{href:"/docs/development/concepts/workers/",children:"worker"})," in many servers. This stability type\nallows to scale up the processable requests of a service type by adding replicas without scaling up server resources."]}),"\n",(0,n.jsx)(s.p,{children:"To handle horizontal scalability, each Regards microservice is designed to be aware of the possibility that there is\nanother replica doing the same work as it is doing."}),"\n",(0,n.jsxs)(s.p,{children:["To be compatible with the ",(0,n.jsx)(s.strong,{children:"Jobs system"}),", ",(0,n.jsx)(s.strong,{children:"Shared locks"})," are used. Shared locks are stored in microservice database.\nThey are mainly used to ensure :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Schedulers execution"})," are only done in a single instance of a microservice at a time."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Resources"})," are handled by a single instance of microservice at a time."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["As every instance of a given microservice provides an independent ",(0,n.jsx)(s.strong,{children:"Jobs pool"})," with several ",(0,n.jsx)(s.strong,{children:"Job slots"})," available,\nthe first instance with a ",(0,n.jsx)(s.strong,{children:"Job slots"})," available process takes waiting jobs and execute them."]}),"\n",(0,n.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsxs)(s.p,{children:["Regards ",(0,n.jsx)(s.strong,{children:"Jobs system"})," allows to :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Executes more parallel processes in a single instance of microservice with vertical scalability."}),"\n",(0,n.jsxs)(s.li,{children:["Run many instances of the same microservice, with horizontal scalability, to duplicates ",(0,n.jsx)(s.strong,{children:"Jobs pools"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},40754:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/requests_to_job_workflow-848d7203bb7eb9c6b24225f7e7204ec4.png"},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>o});var n=i(96540);const t={},l=n.createContext(t);function c(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);