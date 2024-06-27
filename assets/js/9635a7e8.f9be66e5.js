"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[83242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={id:"backend-framework-starters-amqp",title:"AMQP starter",slug:"/development/backend/framework/starters/amqp/"},i=void 0,o={unversionedId:"development/backend/framework/starters/backend-framework-starters-amqp",id:"version-1.13.0/development/backend/framework/starters/backend-framework-starters-amqp",title:"AMQP starter",description:"Purpose",source:"@site/versioned_docs/version-1.13.0/development/backend/framework/starters/amqp-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/amqp/",permalink:"/docs/1.13.0/development/backend/framework/starters/amqp/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/framework/starters/amqp-starter.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-framework-starters-amqp",title:"AMQP starter",slug:"/development/backend/framework/starters/amqp/"},sidebar:"dev",previous:{title:"AMQP monitoring starter",permalink:"/docs/1.13.0/development/backend/framework/starters/amqp-monitoring/"},next:{title:"Authentication starter",permalink:"/docs/1.13.0/development/backend/framework/starters/authentication/"}},l={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"How to publish a message",id:"how-to-publish-a-message",level:3},{value:"Broadcast a subscribable message",id:"broadcast-a-subscribable-message",level:4},{value:"Unicast a subscribable message",id:"unicast-a-subscribable-message",level:4},{value:"Working message (unicast)",id:"working-message-unicast",level:4},{value:"How to subscribe to a subscribable message",id:"how-to-subscribe-to-a-subscribable-message",level:3},{value:"How to poll a pollable message",id:"how-to-poll-a-pollable-message",level:3},{value:"Transaction",id:"transaction",level:3},{value:"External transaction",id:"external-transaction",level:4},{value:"Internal transaction",id:"internal-transaction",level:4},{value:"Constraints on the use of RabbitMQ",id:"constraints-on-the-use-of-rabbitmq",level:2},{value:"Namespace",id:"namespace",level:3},{value:"Purpose of AMQP client",id:"purpose-of-amqp-client",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"This starter is used to enable multitenant messaging."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>amqp-regards-starter</artifactId>\n</dependency>\n")),(0,r.kt)("p",null,"Business dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>amqp-regards</artifactId>\n</dependency>\n")),(0,r.kt)("p",null,"Dependency :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/framework/starters/multitenant/"},"Multitenant starter"))),(0,r.kt)("p",null,"Prerequisites :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AMQP starter needs admin access on the server to manage virtual host"),". At the moment, it relies on ",(0,r.kt)("a",{parentName:"li",href:"https://www.rabbitmq.com/"},"RabbitMQ"))),(0,r.kt)("p",null,"Properties :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# From multitenant starter, optional set of tenants to initialize at bootstrap during bean construction.\nregards.bootstrap-tenants=\n\n# RabbitMQ host\nspring.rabbitmq.host=localhost\n# RabbitMQ port.\nspring.rabbitmq.port=5672\n# Property indicating the username used to connect and manage the broker, for the\n# AMQP starter, this user must have permissions to add virtual hosts and permissions\nspring.rabbitmq.username=\n# Password of the user\nspring.rabbitmq.password=\n\n# Virtual host management host\nregards.amqp.management.host=localhost\n# Virtual host management port\nregards.amqp.management.port=15672\n# Multitenancy messaging strategy\n# SINGLE means that a single virtual host will share all messages from all tenants.\n# MULTI means a virtual host is created for each tenant guaranteeing a total partitioning but increasing significantly memory and cpu consumption.\nregards.amqp.management.mode=SINGLE\n\n# Identification\n# Microservice type identifier (used to restrict event cast)\n# We advise you to use ${spring.application.name}.\nregards.amqp.microservice.type-identifier=\n# Microservice instance identifier (used for event broadcasting).\n# Must be unique by microservice type to ensure all instances will receive an event\nregards.amqp.microservice.instance-identifier=\n\n# Enable AMQP transaction manager if no external transaction manager is available\n# This property is only useful if no {@link PlatformTransactionManager} is provided by a database or else.\nregards.amqp.internal.transaction=false\n")),(0,r.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,r.kt)("p",null,"Starter autoconfigures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IRabbitVirtualHostAdmin")," to manage virtual hosts. Only RabbitMQ implementation exists at the moment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IAmqpAdmin")," to administrate the message broker(create queues, exchanges, bindings with proper names)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RabbitAdmin")," to send and receive message from the right tenant using ",(0,r.kt)("inlineCode",{parentName:"li"},"MultitenantSimpleRoutingConnectionFactory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MultitenantSimpleRoutingConnectionFactory")," to manage virtual host connections"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AmqpEventHandler")," to listen to tenant creation or deletion events")),(0,r.kt)("p",null,"For working with tenant messages or events :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IPoller")," responsible for any polling request from the message broker to the application. It is the bean to ",(0,r.kt)("inlineCode",{parentName:"li"},"Autowired")," when you want to poll messages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISubscriber")," responsible for any subscribing to the message broker. This is the bean to ",(0,r.kt)("inlineCode",{parentName:"li"},"Autowired")," when you want to subscribe to an object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IPublisher")," responsible for any publishing from the application to the message broker. This is the bean to ",(0,r.kt)("inlineCode",{parentName:"li"},"Autowired")," when you want to send messages to other microservices.")),(0,r.kt)("p",null,"For working with instance messages or events, you have to use ",(0,r.kt)("inlineCode",{parentName:"p"},"IInstancePoller"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"IInstanceSubscriber")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IInstancePublisher"),"."),(0,r.kt)("h2",{id:"how-to"},"How to"),(0,r.kt)("p",null,"AMQP starter runs in a multitenant context so it relies on multitenant tenant resolution :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A subscriber automatically subscribes to each tenant for an event using ",(0,r.kt)("inlineCode",{parentName:"li"},"ITenantResolver"),"."),(0,r.kt)("li",{parentName:"ul"},"A publisher automatically publishes an event on current tenant using ",(0,r.kt)("inlineCode",{parentName:"li"},"IRuntimeTenantResolver"),"."),(0,r.kt)("li",{parentName:"ul"},"A poller automatically polls an event on current tenant using ",(0,r.kt)("inlineCode",{parentName:"li"},"IRuntimeTenantResolver"),".")),(0,r.kt)("p",null,"Elements below are used to describe AMQP functionalities in following schemas."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AMQP legend",src:n(53329).Z,width:"397",height:"142"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Queue names are generated using microservice identification properties when required where"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\xb5s")," is equivalent to microservice identifier property."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\xb5si")," is equivalent to microservice instance identifier property."))),(0,r.kt)("h3",{id:"how-to-publish-a-message"},"How to publish a message"),(0,r.kt)("p",null,"To publish a message on the broker, you have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"IPublisher")," interface and its ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," methods."),(0,r.kt)("h4",{id:"broadcast-a-subscribable-message"},"Broadcast a subscribable message"),(0,r.kt)("p",null,"First, create the message (i.e. a simple POJO) implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"ISubscribable"),".\nAnnotate this message with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Event")," and define the event ",(0,r.kt)("strong",{parentName:"p"},"target")," (see below)."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Queue whose name is built with a microservice instance identifier is not totally safe. Indeed, if the corresponding microservice instance is stopped and never restarted, queue may not be consumed anymore and its messages lost. Be sure to be resilient with these types of messages!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Broadcast message",src:n(71189).Z,width:"1049",height:"500"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Event(target = Target.ALL)\npublic class HelloMessage implements ISubscribable {\n}\n")),(0,r.kt)("p",null,"Then publish the message :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate IPublisher publisher;\n\npublic void publishHello() {\n   HelloMessage message = new HelloMessage();\n   publisher.publish(message);\n}\n")),(0,r.kt)("h4",{id:"unicast-a-subscribable-message"},"Unicast a subscribable message"),(0,r.kt)("p",null,"Create the message implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"ISubscribable"),".\nAnnotate this message with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Event"),", set mode to ",(0,r.kt)("strong",{parentName:"p"},"UNICAST")," and define the event ",(0,r.kt)("strong",{parentName:"p"},"target")," (see below)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unicast message",src:n(91617).Z,width:"998",height:"328"})),(0,r.kt)("h4",{id:"working-message-unicast"},"Working message (unicast)"),(0,r.kt)("p",null,"Working message is stored in a working queue and is consumed synchronously on-demand."),(0,r.kt)("p",null,"First, create the message implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"IPollable"),".\nAnnotate this message with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Event")," and define the event ",(0,r.kt)("strong",{parentName:"p"},"target")," (see below)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Worker queue",src:n(47219).Z,width:"994",height:"322"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A message is only handled by a single poller (i.e. worker).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Event(target = Target.ALL)\npublic class PollMessage implements IPollable {\n\n}\n")),(0,r.kt)("p",null,"Then publish the message :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate IPublisher publisher;\n\npublic void publishHello() {\n   PollMessage message = new PollMessage();\n   publisher.publish(message);\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"IPublish")," manages ",(0,r.kt)("strong",{parentName:"p"},"message priority"),". Just define the priority in the publish method.")),(0,r.kt)("h3",{id:"how-to-subscribe-to-a-subscribable-message"},"How to subscribe to a subscribable message"),(0,r.kt)("p",null,"To subscribe to a message, you have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ISubscriber")," interface and its ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribeTo")," method."),(0,r.kt)("p",null,"First, create a message handler implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"IHandler")," to listen to the message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class HelloHandler implements IHandler<HelloMessage> {\n\n  @Override\n  public void handle(TenantWrapper<HelloMessage> wrapper) {\n      // Retrieve your message from tenant wrapper\n      HelloMessage message = wrapper.getContent();\n      // Do something\n  }\n}\n")),(0,r.kt)("p",null,"Then subscribe to the message :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate ISubscriber subscriber;\n\npublic void subscribeToHello() {\n   subscriber.subscribeTo(HelloMessage.class, new HelloHandler());\n}\n")),(0,r.kt)("p",null,"You can stop listener using ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribeFrom")," method."),(0,r.kt)("h3",{id:"how-to-poll-a-pollable-message"},"How to poll a pollable message"),(0,r.kt)("p",null,"To poll a message, you have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"IPoller")," interface and its ",(0,r.kt)("inlineCode",{parentName:"p"},"poll")," method."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Polling process requires a tenant! So before polling, you must guarantee a tenant is properly set.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate IPoller poller;\n\npublic void simplePollMessage() {\n  TenantWrapper<PollMessage> wrapper = poller.poll(PollMessage.class);\n  // Do something with the message\n}\n")),(0,r.kt)("h3",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"Transaction is supported through classic Spring ",(0,r.kt)("inlineCode",{parentName:"p"},"Transactional")," annotation."),(0,r.kt)("p",null,"If en error occurs in a transaction, a message to publish won't be published, a pollable or subscribable message will be unacked and turn back to its queue."),(0,r.kt)("h4",{id:"external-transaction"},"External transaction"),(0,r.kt)("p",null,"If a ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatformTransactionManager")," is on the classpath, AMQP will automatically synchronize its behaviour with an existing transaction."),(0,r.kt)("h4",{id:"internal-transaction"},"Internal transaction"),(0,r.kt)("p",null,"If no external ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatformTransactionManager")," exists, you can enable internal one with related property."),(0,r.kt)("h2",{id:"constraints-on-the-use-of-rabbitmq"},"Constraints on the use of RabbitMQ"),(0,r.kt)("h3",{id:"namespace"},"Namespace"),(0,r.kt)("p",null,'All virtual hosts defined and used by REGARDS are prefixed by "regards".'),(0,r.kt)("h3",{id:"purpose-of-amqp-client"},"Purpose of AMQP client"),(0,r.kt)("p",null,"The only purpose of the AMQP client is to handle the multi tenancy communication with the message broker. That means creating virtual hosts on the broker dynamically to ensure that each tenant's communications are isolated from the others. Therefore, the user used by the application to interact with RabbitMQ has to have privileges to create and modify virtual hosts."))}c.isMDXComponent=!0},53329:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},71189:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/amqp_tuto_subscription_broadcast-8777640d9606e963d4a58de869fa2627.png"},91617:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/amqp_tuto_subscription_unicast-d46945f1c71fce61ce5de7fc79912501.png"},47219:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/amqp_tuto_worker_queues-f42a848868b6347ffeec72719c14ff20.png"}}]);