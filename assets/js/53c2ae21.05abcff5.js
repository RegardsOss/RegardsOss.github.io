"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[61037],{51384:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=s(74848),t=s(28453);const n={id:"backend-delivery-architecture",title:"RS-DELIVERY Conception",sidebar_label:"How it works",sidebar_position:2,slug:"/development/backend/services/delivery/architecture/"},d=void 0,o={id:"development/services/delivery/backend-delivery-architecture",title:"RS-DELIVERY Conception",description:"Basically, rs-delivery is a microservice that interacts with REGARDS core functionalities to make files available",source:"@site/docs/development/services/delivery/develiry-conception.md",sourceDirName:"development/services/delivery",slug:"/development/backend/services/delivery/architecture/",permalink:"/docs/development/backend/services/delivery/architecture/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/delivery/develiry-conception.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"backend-delivery-architecture",title:"RS-DELIVERY Conception",sidebar_label:"How it works",sidebar_position:2,slug:"/development/backend/services/delivery/architecture/"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/delivery/overview/"},next:{title:"Publish a request",permalink:"/docs/development/backend/services/delivery/api-guides/amqp/publish-a-delivery-request"}},c={},l=[{value:"Create a delivery request",id:"create-a-delivery-request",level:2},{value:"Monitor the request progress",id:"monitor-the-request-progress",level:2}];function a(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Basically, rs-delivery is a microservice that interacts with REGARDS core functionalities to make files available\nfor download in a configurable S3 server. The following sequence diagram presents the main interactions when a delivery\nrequest is sent."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"delivery_sequence_diagram",src:s(10489).A+"",width:"1088",height:"1010"})}),"\n",(0,i.jsx)(r.h2,{id:"create-a-delivery-request",children:"Create a delivery request"}),"\n",(0,i.jsx)(r.p,{children:"First, a delivery event is published by an external client and is then received by REGARDS to be proceeded."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsxs)(r.em,{children:["see ",(0,i.jsx)(r.a,{href:"/docs/development/backend/services/delivery/api-guides/amqp/publish-a-delivery-request",children:"create a delivery request"})]})}),"\n",(0,i.jsx)(r.p,{children:"REGARDS checks the conformity of the message received:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["if it is valid, the request is saved and a delivery response with ",(0,i.jsx)(r.code,{children:"GRANTED"})," status is sent,"]}),"\n",(0,i.jsxs)(r.li,{children:["otherwise, the response with the ",(0,i.jsx)(r.code,{children:"DENIED"})," status is sent with the error received by delivery."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsxs)(r.em,{children:["see ",(0,i.jsx)(r.a,{href:"/docs/development/backend/services/delivery/api-guides/amqp/subscribe-to-delivery-responses",children:"subscribe to delivery responses"})]})}),"\n",(0,i.jsx)(r.h2,{id:"monitor-the-request-progress",children:"Monitor the request progress"}),"\n",(0,i.jsxs)(r.p,{children:["Internally, the request is then forwarded to ",(0,i.jsx)(r.a,{href:"../order/overview",children:"rs-order microservice"})," to be\nprocessed."]}),"\n",(0,i.jsx)(r.p,{children:"Files requested are retrieved and made available locally by rs-order. An event is then sent from rs-order to rs-delivery\nto indicate that the suborder has been processed."}),"\n",(0,i.jsx)(r.admonition,{title:"Current limitation",type:"info",children:(0,i.jsxs)(r.p,{children:["For now, only one suborder is allowed per delivery request. If there are more than one,\nthe delivery request is set to ",(0,i.jsx)(r.code,{children:"ERROR"})," status."]})}),"\n",(0,i.jsx)(r.p,{children:"When rs-delivery receives the final order event, it handles the response in two different ways:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"In case of error"}),", an event is sent from rs-delivery to rs-order to delete the order and the request status is set\nto ",(0,i.jsx)(r.code,{children:"ERROR"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"In case of success"}),", files are retrieved by rs-delivery and copied to its local workspace. They are then zipped and\nuploaded to the configured S3 server. The checksums are systematically verified to ensure data integrity. A ",(0,i.jsx)(r.code,{children:"DONE"}),"\nresponse is then published to notify the end of the delivery."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsxs)(r.em,{children:["see ",(0,i.jsx)(r.a,{href:"/docs/development/backend/services/delivery/api-guides/amqp/subscribe-to-delivery-responses",children:"subscribe to delivery responses"})]})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},10489:(e,r,s)=>{s.d(r,{A:()=>i});const i=s.p+"assets/images/delivery_sequence_diagram-a44fd1803be475eb6d284ee4eceeb3ec.png"},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>o});var i=s(96540);const t={},n=i.createContext(t);function d(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);