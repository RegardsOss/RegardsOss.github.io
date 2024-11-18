"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[3672],{64423:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(74848),t=s(28453);const o={title:"How it works",sidebar_label:"How it works",slug:"/development/services/worker-manager/conception/",sidebar_position:2},i=void 0,a={id:"development/services/worker-manager/conception",title:"How it works",description:"Introduction",source:"@site/docs/development/services/worker-manager/conception.md",sourceDirName:"development/services/worker-manager",slug:"/development/services/worker-manager/conception/",permalink:"/docs/development/services/worker-manager/conception/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/worker-manager/conception.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How it works",sidebar_label:"How it works",slug:"/development/services/worker-manager/conception/",sidebar_position:2},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/services/worker-manager/overview"},next:{title:"Publish a request",permalink:"/docs/development/services/worker-manager/api-guides/amqp/publish-request"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Workers communication",id:"workers-communication",level:2},{value:"Workflow of workers",id:"workflow-of-workers",level:2},{value:"Requests states",id:"requests-states",level:2},{value:"Workers responses states",id:"workers-responses-states",level:2},{value:"Worker Manager responses states",id:"worker-manager-responses-states",level:2},{value:"Worker Manager error handling",id:"worker-manager-error-handling",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"rs-worker-manager"})," microservice is designed to act as an entry point for all processing requests dedicated to all\nworkers on the system. This microservice registers the available workers and dispatches the requests received to the\nvarious workers."]}),"\n",(0,n.jsx)(r.h2,{id:"workers-communication",children:"Workers communication"}),"\n",(0,n.jsxs)(r.p,{children:["When this microservice receives a processing request, it records the request in its database so that it can be\ntracked and then forwards it to the worker dedicated to the request thanks to a mapping between a ",(0,n.jsx)(r.strong,{children:"content type"})," and\n",(0,n.jsx)(r.strong,{children:"worker type"}),". The worker dedicated to the request is determined by the ",(0,n.jsx)(r.code,{children:"rs-worker-manager"})," using a mandatory\nparameter contained in each input request, the ",(0,n.jsx)(r.strong,{children:"content type"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The association between a worker (",(0,n.jsx)(r.strong,{children:"worker type"})," parameter) and its ",(0,n.jsx)(r.strong,{children:"content type"})," is made by configuration file.\nThis configuration is described in the ",(0,n.jsx)(r.a,{href:"/docs/development/services/worker-manager/configuration/import_export",children:"configuration section"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["To redirect a request to the right worker, the ",(0,n.jsx)(r.code,{children:"rs-worker-manager"})," waits until the worker is available. To be available\nto the ",(0,n.jsx)(r.code,{children:"rs-worker-manager"}),", a worker must indicate that it is active by regularly sending a ",(0,n.jsx)(r.strong,{children:"heart beat"})," to the\n",(0,n.jsx)(r.code,{children:"rs-worker-manager"}),". Each ",(0,n.jsx)(r.strong,{children:"heart beat"})," message naturally contains the worker type information.\nIf a worker is not considered available by the ",(0,n.jsx)(r.code,{children:"rs-worker-manager"}),", then any requests associated with that worker will\nbe kept in a waiting state (",(0,n.jsx)(r.code,{children:"NO_WORKER_AVAILABLE"}),") and will be processed as soon as the worker is available."]}),"\n",(0,n.jsxs)(r.p,{children:["A worker is considered to be unavailable as soon as the ",(0,n.jsx)(r.code,{children:"rs-worker-manager"})," has not received a ",(0,n.jsx)(r.strong,{children:"heart beat"})," from it\nfor a period of time that can be ",(0,n.jsx)(r.a,{href:"/docs/development/services/worker-manager/configuration/static_configuration",children:"configured in the service"}),"."]}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsxs)(r.p,{children:["All communication between the ",(0,n.jsx)(r.code,{children:"rs-worker-manager"})," and the workers takes place via the REGARDS RabbitMQ message bus."]})}),"\n",(0,n.jsxs)(r.p,{children:["The workers core uses ",(0,n.jsx)(r.a,{href:"https://spring.io/projects/spring-cloud-stream",children:"Spring Cloud Stream"})," to dispatch events\nto ",(0,n.jsx)(r.code,{children:"rs-worker-manager"}),". Spring Cloud Stream is a framework built on top of Spring Boot and Spring Integration that\nhelps in creating event-driven or message-driven microservices."]}),"\n",(0,n.jsxs)(r.p,{children:["Microservices architecture follows the ",(0,n.jsx)(r.strong,{children:"smart endpoints and dumb pipes"})," principle. Communication between endpoints is\ndriven by messaging-middleware parties like RabbitMQ. Services communicate by publishing domain events via these\nendpoints or channels."]}),"\n",(0,n.jsx)(r.p,{children:"The following sequence diagram presents the main interactions between the microservice and workers:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"workermanager_sequence_diagram",src:s(41684).A+"",width:"1046",height:"940"})}),"\n",(0,n.jsx)(r.h2,{id:"workflow-of-workers",children:"Workflow of workers"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"rs-worker-manager"})," service can also be used to associate request types or content types with a sequence of workers.\nTo do this, the ",(0,n.jsx)(r.code,{children:"content-type"})," is associated with a workflow configuration as described in the configuration section."]}),"\n",(0,n.jsxs)(r.p,{children:["In this mode of operation, the ",(0,n.jsx)(r.code,{children:"rs-worker-manager"})," is used to follow the progress of the request through the workflow\nstep by\nstep, where each step corresponds to a worker.\nIn the event of an error, it is possible to restart processing from the stage at which the error occurred.\nFor each step in the workflow, as in the standard function, the request is submitted to the next worker in the workflow\nonly if the worker is considered available by the ",(0,n.jsx)(r.code,{children:"rs-worker-manager"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"The following sequence diagram presents the main interactions between the microservice and workers in a workflow:"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"workermanager_workflow_sequence_diagram",src:s(62318).A+"",width:"1176",height:"940"})}),"\n",(0,n.jsx)(r.h2,{id:"requests-states",children:"Requests states"}),"\n",(0,n.jsxs)(r.p,{children:["The following state diagram presents states of request in ",(0,n.jsx)(r.code,{children:"rs-worker-manager"}),":"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"workermanager_request_state_diagram",src:s(43898).A+"",width:"425",height:"449"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"NO_WORKER_AVAILABLE"})," : the request does not correspond to any type of worker available. This status may indicate :"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["The configuration file of ",(0,n.jsx)(r.code,{children:"rs-worker-manager"})," does not contain the worker type indicated in the request in input"]}),"\n",(0,n.jsx)(r.li,{children:"The worker used by the request stopped sending heart beat events"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"DISPATCHED"})," : the request is dispatched to a worker or to a workflow of workers."]}),"\n",(0,n.jsx)(r.h2,{id:"workers-responses-states",children:"Workers responses states"}),"\n",(0,n.jsxs)(r.p,{children:["States of response from a worker to the ",(0,n.jsx)(r.code,{children:"rs-worker-manager"})," :"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"SUCCESS"})," : The treatment was correctly carried out."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"INVALID_CONTENT"})," : The request content is invalid."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ERROR"})," : An error occurred during treatment."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"worker-manager-responses-states",children:"Worker Manager responses states"}),"\n",(0,n.jsxs)(r.p,{children:["Some of the ",(0,n.jsx)(r.code,{children:"rs-worker-manager"})," response statements will be produced directly by the workers themselves."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"SKIPPED"})," : The request has been skipped and will never be handled."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"GRANTED"})," : The request has been granted by the ",(0,n.jsx)(r.code,{children:"rs-worker-manager"})," and will be processed as soon as possible."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"SUCCESS"})," : The request has been successfully carried out. The request will be deleted from database."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ERROR"})," : A problem occurred during the treatment of the request."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"INVALID_CONTENT"})," : The request content is invalid."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"DELAYED"})," : No worker is currently available for the request. The request will be processed as soon as a\nworker becomes available."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"worker-manager-error-handling",children:"Worker Manager error handling"}),"\n",(0,n.jsx)(r.p,{children:"The service allows you to define for each worker or workflow by configuration whether error requests should be kept or not. This setting ensures that errors are not kept on workers that administrators do not want to be able to restart."})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},43898:(e,r,s)=>{s.d(r,{A:()=>n});const n=s.p+"assets/images/workermanager_request_state_diagram-9a7e259e7d348871a441df86d0a9fb6c.png"},41684:(e,r,s)=>{s.d(r,{A:()=>n});const n=s.p+"assets/images/workermanager_sequence_diagram-888911bce6c1e5def0bbb1b1588742b0.png"},62318:(e,r,s)=>{s.d(r,{A:()=>n});const n=s.p+"assets/images/workermanager_workflow_sequence_diagram-6ebbfbd5d76c462d63cffc3fc523f671.png"},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var n=s(96540);const t={},o=n.createContext(t);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);