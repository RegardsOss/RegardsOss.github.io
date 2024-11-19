"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[19706],{46825:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(74848),i=n(28453);const r={id:"concepts-amqp-api",title:"Microservices AMQP API",sidebar_label:"AMQP API",slug:"/development/concepts/amqp-api/"},o=void 0,a={id:"development/concepts/concepts-amqp-api",title:"Microservices AMQP API",description:"Description",source:"@site/docs/development/concepts/06-amqp-api.md",sourceDirName:"development/concepts",slug:"/development/concepts/amqp-api/",permalink:"/docs/development/concepts/amqp-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/concepts/06-amqp-api.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"concepts-amqp-api",title:"Microservices AMQP API",sidebar_label:"AMQP API",slug:"/development/concepts/amqp-api/"},sidebar:"dev",previous:{title:"REST API",permalink:"/docs/development/concepts/rest-api/"},next:{title:"Scalability",permalink:"/docs/development/concepts/scalability/"}},d={},c=[{value:"Description",id:"description",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Things to get",id:"things-to-get",level:3},{value:"Virtual Hosts",id:"virtual-hosts",level:3},{value:"Payload, exchange and queues informations",id:"payload-exchange-and-queues-informations",level:3},{value:"Publish message to REGARDS",id:"publish-message-to-regards",level:3},{value:"Subscribe to Regards published events",id:"subscribe-to-regards-published-events",level:3},{value:"REGARDS published event exemple",id:"regards-published-event-exemple",level:3},{value:"More",id:"more",level:2}];function l(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The Regards ",(0,t.jsx)(s.strong,{children:"AMQP API"})," should be used to ",(0,t.jsx)(s.strong,{children:"submit large volume of requests"})," or to ",(0,t.jsx)(s.strong,{children:"subscribe on events"})," that\nappears on Regards system. Many REGARDS microservices provide an ",(0,t.jsx)(s.strong,{children:"AMQP API"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["You can connect to the ",(0,t.jsx)(s.a,{href:"https://www.rabbitmq.com/",children:"RabbitMQ"})," server used by the instance of REGARDS to interact with the\n",(0,t.jsx)(s.strong,{children:"AMQP API"})," of that instance."]}),"\n",(0,t.jsx)(s.admonition,{title:"Service documentation",type:"info",children:(0,t.jsxs)(s.p,{children:["On every REGARDS service documentation, you will find ",(0,t.jsx)(s.strong,{children:"API GUIDES"})," that describes main interfaces with detailed\nexemple of requests and responses messages."]})}),"\n",(0,t.jsx)(s.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(s.h3,{id:"things-to-get",children:"Things to get"}),"\n",(0,t.jsx)(s.p,{children:"To subscribe or to submit messages, you need to know :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Which RabbitMQ ",(0,t.jsx)(s.strong,{children:"virtual Host"})," I need to connect to ?"]}),"\n",(0,t.jsxs)(s.li,{children:["Which ",(0,t.jsx)(s.strong,{children:"exchange"})," I need to subscribe to ?"]}),"\n",(0,t.jsxs)(s.li,{children:["Which ",(0,t.jsx)(s.strong,{children:"exchange"})," I need to submit messages to ?"]}),"\n",(0,t.jsxs)(s.li,{children:["What is the ",(0,t.jsx)(s.strong,{children:"payload"})," I need to send or receive ?"]}),"\n",(0,t.jsxs)(s.li,{children:["What is the ",(0,t.jsx)(s.strong,{children:"address"})," of the RabbitMQ server ? Does it use a ",(0,t.jsx)(s.strong,{children:"TLS"})," certificate ?"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"virtual-hosts",children:"Virtual Hosts"}),"\n",(0,t.jsxs)(s.p,{children:["By default, Regards defines two main ",(0,t.jsx)(s.strong,{children:"Virtual Hosts"})," on its RabbitMQ server :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"regards.instance.manager"})," is dedicated to ",(0,t.jsx)(s.a,{href:"/docs/development/concepts/multitenant/",children:"instance microservices"})," (like\n",(0,t.jsx)(s.a,{href:"/docs/development/services/admin-instance/overview",children:"rs-admin-instance"}),")."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"regards.multitenant.manager"})," is dedicated to all tenants and used by ",(0,t.jsx)(s.a,{href:"/docs/development/concepts/multitenant/",children:"project microservices"})," (like\n",(0,t.jsx)(s.a,{href:"/docs/development/services/admin/overview",children:"rs-admin"}),"). This is the ",(0,t.jsx)(s.strong,{children:"main virtual host"})," that should be used by external\nsystems and applications."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["Most of the time, you will use ",(0,t.jsx)(s.code,{children:"regards.multitenant.manager"})," virtual host."]})}),"\n",(0,t.jsx)(s.h3,{id:"payload-exchange-and-queues-informations",children:"Payload, exchange and queues informations"}),"\n",(0,t.jsx)(s.p,{children:"On the REGARDS Developers web documentation, you will find guides for main AMQP interfaces, with detailed exemple of\nrequests and responses to help you to interact with REGARDS."}),"\n",(0,t.jsx)(s.p,{children:"Every guides provides:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Payload and state machines"}),"\n",(0,t.jsx)(s.li,{children:"Exchange names to submit messages to"}),"\n",(0,t.jsxs)(s.li,{children:["Exchange names where REGARDS sends response events, status events...\nsee ",(0,t.jsx)(s.a,{href:"#subscribe-to-regards-published-events",children:"Subscribe to Regards system events"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For example, here\nis ",(0,t.jsx)(s.a,{href:"/docs/development/backend/services/ingest/api-guides/amqp/ingest-amqp-publish-product",children:"the guide to publish OAIS product to the OAIS service"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"publish-message-to-regards",children:"Publish message to REGARDS"}),"\n",(0,t.jsxs)(s.p,{children:["Published messages on ",(0,t.jsx)(s.code,{children:"regards.multitenant.manager"})," Virtual Host must contain headers properties :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"regards.tenant"})," : Define the tenant sender of the message."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"regards.type"})," : Define the type of the message body (Java class of the Data Transfer Object or DTO)"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Regards messages are all published with ",(0,t.jsx)(s.strong,{children:"Json"})," formatted content."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["If you publish on ",(0,t.jsx)(s.code,{children:"regards.instance.manager"})," Virtual Host, you do not need to define the ",(0,t.jsx)(s.code,{children:"regards.tenant"})," parameter."]})}),"\n",(0,t.jsx)(s.h3,{id:"subscribe-to-regards-published-events",children:"Subscribe to Regards published events"}),"\n",(0,t.jsx)(s.p,{children:"REGARDS microservices use AMQP api to send events to subscriber(s). For exemple, after a request is sent to a\nmicroservice,\nREGARDS will send back a AMQP event with request status."}),"\n",(0,t.jsxs)(s.p,{children:["To subscribe to those events, you need to refer to the service associated ",(0,t.jsx)(s.strong,{children:"AMQP Guide"})," to known on which ",(0,t.jsx)(s.strong,{children:"Exchange"}),"\nthe service will send those events then subscribe to this exchange by :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Creating a ",(0,t.jsx)(s.strong,{children:"custom queue"})," for your purpose"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Bind"})," your custom queue to the related exchange"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To do so, you can manually create your queue and bind it to the exchange through RabbitMQ administrator UI or you can\nuse your Regards instance deployment inventory. To learn more about RabbitMQ additional queues and exchanges\nconfiguration see ",(0,t.jsx)(s.a,{href:"/docs/setup/swarm/advanced/rabbitmq/",children:"RabbitQ advanced setup"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:["With the ",(0,t.jsx)(s.strong,{children:"regards.multitenant.manager"})," virtual host, events will be sent by REGARDS for all tenants (or projects)\nof your REGARDS instance. So the receiver may have to filter them according to the tenant he wishes to manage by\nchecking\nthe ",(0,t.jsx)(s.strong,{children:"regards.tenant"})," parameter in the message headers."]})}),"\n",(0,t.jsx)(s.h3,{id:"regards-published-event-exemple",children:"REGARDS published event exemple"}),"\n",(0,t.jsx)(s.p,{children:"Here under you can find an exemple of message sent by Regards in Json format."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Properties section"})," contains main RabbitMQ mandatory messages properties as describe\non ",(0,t.jsx)(s.a,{href:"https://www.rabbitmq.com/docs/publishers#message-properties",children:"RabbitMQ documentation"}),".",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.code,{children:"Headers section"})," contains Regards additional properties.",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.code,{children:"Payload section"})," is the message Body."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n "properties": {\n   "app_id": "REGARDS",\n   "timestamp": 1722267016,\n   "priority": 1,\n   "devivery_mode": 2,\n   "content_encoding": "UTF-8",\n   "content_type": "application/json",\n   "headers": {\n     "regards.tenant": "project1",\n     "regards.type": "fr.cnes.regards.modules.workermanager.amqp.events.out.ResponseEvent"\n   }\n },\n "payload": {\n   "someAttribute": "someValue"\n }\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"more",children:"More"}),"\n",(0,t.jsxs)(s.p,{children:["To learn more on how REGARDS microservice manages their ",(0,t.jsx)(s.strong,{children:"exchanges"})," and ",(0,t.jsx)(s.strong,{children:"queues"}),",\nsee ",(0,t.jsx)(s.a,{href:"/docs/development/backend/framework/starters/amqp/",children:"Regards AMQP Starter"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["To learn how to interface your application with RabbitMQ server\nsee ",(0,t.jsx)(s.a,{href:"https://www.rabbitmq.com/tutorials",children:"RabbitMQ tutorials"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(96540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);