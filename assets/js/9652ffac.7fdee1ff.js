"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[61107],{8735:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(74848),n=t(28453);const o={id:"concepts-workers",title:"REGARDS Workers",sidebar_label:"Workers",slug:"/development/concepts/workers/"},i=void 0,a={id:"development/concepts/concepts-workers",title:"REGARDS Workers",description:"Workers have been designed to enable massive parallel processing of requests. For this purpose:",source:"@site/docs/development/concepts/08-workers.md",sourceDirName:"development/concepts",slug:"/development/concepts/workers/",permalink:"/docs/development/concepts/workers/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/concepts/08-workers.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"concepts-workers",title:"REGARDS Workers",sidebar_label:"Workers",slug:"/development/concepts/workers/"},sidebar:"dev",previous:{title:"Scalability",permalink:"/docs/development/concepts/scalability/"},next:{title:"Requests & Jobs",permalink:"/docs/development/concepts/requests-jobs/"}},c={},l=[];function d(e){const s={a:"a",admonition:"admonition",br:"br",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Workers have been designed to enable massive parallel processing of requests. For this purpose:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Workers ",(0,r.jsxs)(s.strong,{children:["use the ",(0,r.jsx)(s.a,{href:"/docs/development/concepts/amqp-api/",children:"AMQP API"})," to retrieve the requests to be processed"]}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Workers can be ",(0,r.jsx)(s.strong,{children:"massively replicated"})," to handle a high volume of requests in parallel."]}),"\n",(0,r.jsx)(s.li,{children:"Workers do not use a database to retrieve requests, manage their states, or utilize shared locks to prevent another\nreplica from performing the same activity in parallel. This is main difference with a REGARDS microservice."}),"\n",(0,r.jsx)(s.li,{children:"Workers do not support multi-tenancy, it's just a metadata used to contact back REGARDS services after the processing\nis done."}),"\n",(0,r.jsxs)(s.li,{children:["Workers ",(0,r.jsx)(s.strong,{children:"can be chained"})," to allow different types of processing chain."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The implementation of processing tasks on workers is therefore simplified compared to those performed by REGARDS\nmicroservices. A deployed worker will regularly send a heartbeat to the Worker Manager to confirm that its worker type\nis active. Workers listen to its AMQP processing queue to retrieve requests to be executed."}),"\n",(0,r.jsx)(s.p,{children:"The following processing steps illustrate commonly implemented possibilities:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Retrieve a message during a transaction, allowing the message to remain in the input queue if the processing fails for\nan undetermined reason."}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"File processing"})," : move a file from one storage system to another, extract archives..."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Metadata processing"})," : read a product data file, extract business metadata, and generate an AMQP message to modify\nthe GeoJSON product, enriching the product's metadata."]}),"\n",(0,r.jsx)(s.li,{children:"Acknowledge the AMQP message when processing is complete. If the processing failed, send the error reason to the\nWorker Manager. If the processing was successful, the worker can either send a success message or issue a new\nprocessing request for the Worker Manager, which can then take this payload and send it to a new worker."}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["Workers can actually be developed\nwith ",(0,r.jsx)(s.a,{href:"https://www.rabbitmq.com/client-libraries/devtools",children:"any language that provides a client library to connect to RabbitMQ"})," !",(0,r.jsx)(s.br,{}),"\n","Checkout the Java Spring cloud Stream or Python implementations to\nmake your own worker."]})})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var r=t(96540);const n={},o=r.createContext(n);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);