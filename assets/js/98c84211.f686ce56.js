"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[70443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,c=d["".concat(s,".").concat(g)]||d[g]||m[g]||i;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={id:"recipient-sender-notifier-plugins",title:"Recipient sender plugins",sidebar_label:"Recipient sender plugins",slug:"/development/backend/services/notifier/plugins/recipient-sender"},l=void 0,o={unversionedId:"development/backend/regards/notifier/plugins/recipient-sender-notifier-plugins",id:"development/backend/regards/notifier/plugins/recipient-sender-notifier-plugins",title:"Recipient sender plugins",description:"This guide introduces you how to configure Recipient sender plugins.",source:"@site/docs/development/backend/regards/notifier/plugins/recipient-sender-plugins.md",sourceDirName:"development/backend/regards/notifier/plugins",slug:"/development/backend/services/notifier/plugins/recipient-sender",permalink:"/docs/development/backend/services/notifier/plugins/recipient-sender",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/plugins/recipient-sender-plugins.md",tags:[],version:"current",frontMatter:{id:"recipient-sender-notifier-plugins",title:"Recipient sender plugins",sidebar_label:"Recipient sender plugins",slug:"/development/backend/services/notifier/plugins/recipient-sender"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/notifier/plugins/intro"},next:{title:"Rule matcher plugins",permalink:"/docs/development/backend/services/notifier/plugins/rule-matcher"}},s={},u=[{value:"Common Sender configuration",id:"common-sender-configuration",level:2},{value:"Plugin implementation",id:"plugin-implementation",level:2},{value:"RabbitMQSender",id:"rabbitmqsender",level:3},{value:"LTA Request Sender",id:"lta-request-sender",level:3},{value:"Worker Manager Sender",id:"worker-manager-sender",level:3},{value:"Dissemination ACK Sender",id:"dissemination-ack-sender",level:3},{value:"GeoJSON FEM catalog usage",id:"geojson-fem-catalog-usage",level:4},{value:"OAIS catalog usage",id:"oais-catalog-usage",level:4}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide introduces you how to configure Recipient sender plugins.",(0,r.kt)("br",{parentName:"p"}),"\n","These plugins allow to generate a payload, using product content and metadata, and send it to another system named\n",(0,r.kt)("strong",{parentName:"p"},"recipient"),"."),(0,r.kt)("p",null,"Here is the list of documented plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rabbitmqsender"},"RabbitMQSender plugin")," allows to send payload to an RabbitMQ exchange, with no transformation\napplied to the input"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#lta-request-sender"},"LTA Request Sender")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#worker-manager-sender"},"Worker Manager Sender")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dissemination-ack-sender"},"Dissemination ACK Sender"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"To import your plugin configurations to Notifier, you\nneed ",(0,r.kt)("a",{parentName:"em",href:"/docs/development/backend/notifier/guides/rest/import-plugin-configuration"},"update microservice configuration using REST API"))),(0,r.kt)("h2",{id:"common-sender-configuration"},"Common Sender configuration"),(0,r.kt)("admonition",{title:"Abstract class extension",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Most of REGARDS OSS Plugins sender are extending\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-plugins/blob/master/notifier-plugins/common-plugins/src/main/java/fr/cnes/regards/common/notifier/plugins/AbstractRabbitMQSender.java"},"AbstractRabbitMQSender"),"\nabstract class.",(0,r.kt)("br",{parentName:"p"}),"\n","This abstraction above plugins implementation provides a common configuration to manage a plugin that sends event to\nRabbitMQ exchange.")),(0,r.kt)("p",null,"Configuration parameters are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recipientLabel"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"External service identifier we want to notify the products to - this information is sent back to the emitter that contacted Notifier",(0,r.kt)("br",null)," When not specified, the emitter wont know what's the recipient label that received its events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Recipient plugin description displayed in the REGARDS HMI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null},"RabbitMQ exchange name to publish message to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queueName"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"RabbitMQ queue name to initialize")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queueDeadLetterRoutingKey"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"RabbitMQ dead letter routing key on the queue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"directNotificationEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", indicates this plugin can be used to send to the recipient directly without checking product content against Rule matcher plugins")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blockingRequired"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the sender will be informed that the notified resource must be blocked until the sender receives acknowledge from the recipient. Only then, the notified resource can be unlocked.")))),(0,r.kt)("admonition",{title:"Why providing RabbitMQ Queue and DLX?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This plugin creates a queue linked to the exchange, to ensure no message will be lost before the subscriber creates\nits queue.")),(0,r.kt)("p",null,"This abstract class defines following default behavior:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ackRequired"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"The emitter that contacted Notifier won't receive any acknowledgement from this notification")))),(0,r.kt)("h2",{id:"plugin-implementation"},"Plugin implementation"),(0,r.kt)("h3",{id:"rabbitmqsender"},"RabbitMQSender"),(0,r.kt)("p",null,"This plugin is used to send notifications to a specific RabbitMQ exchange with no transformation applied to the\ninput (what Notifier received).",(0,r.kt)("br",{parentName:"p"}),"\n","This plugin let you override following configuration:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ackRequired"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the emitter that contacted Notifier will be awaiting for an acknowledgement message")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='RabbitMqSender plugin configuration example'",title:"'RabbitMqSender",plugin:!0,configuration:!0,"example'":!0},'{\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId": "RabbitMQSender",\n    "label": "{label}",\n    "businessId": "{uniqueIdentifier}",\n    "version": "1.0.0",\n    "priorityOrder": 0,\n    "active": true,\n    "parameters": [\n      {\n        "name": "exchange",\n        "type": "STRING",\n        "value": "{exchange name to use}"\n      },\n      {\n        "name": "queueName",\n        "type": "STRING",\n        "value": "{queue name to use}"\n      },\n      {\n        "name": "recipientLabel",\n        "type": "STRING",\n        "value": "{identifier of the recipient}"\n      },\n      {\n        "name": "ackRequired",\n        "type": "BOOLEAN",\n        "value": "{true or false}"\n      },\n      {\n        "name": "description",\n        "type": "STRING",\n        "value": "{plugin description}"\n      },\n      {\n        "name": "directNotificationEnabled",\n        "type": "BOOLEAN",\n        "value": "{true or false}"\n      },\n      {\n        "name": "blockingRequired",\n        "type": "BOOLEAN",\n        "value": "{true or false}"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"lta-request-sender"},"LTA Request Sender"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"There is no public documentation yet")),(0,r.kt)("h3",{id:"worker-manager-sender"},"Worker Manager Sender"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"There is no public documentation yet")),(0,r.kt)("h3",{id:"dissemination-ack-sender"},"Dissemination ACK Sender"),(0,r.kt)("p",null,"This plugin is designed to send acknowledge messages to OAIS catalog and FEM catalog."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"You need to define either properties to send to FEM catalog either properties to send to OAIS catalog")),(0,r.kt)("h4",{id:"geojson-fem-catalog-usage"},"GeoJSON FEM catalog usage"),(0,r.kt)("p",null,"This plugin let you override following configuration:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"featureDisseminationExchange"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the AMQP exchange to store messages before shovel. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Only use when handling GeoJSON products."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"featureDisseminationQueueName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the AMQP queue to store messages before shovel. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Only use when handling GeoJSON products."))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="FEM catalog DisseminationAckSender example"',title:'"FEM',catalog:!0,DisseminationAckSender:!0,'example"':!0},'{\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId": "DisseminationAckSender",\n    "label": "{label}",\n    "businessId": "{uniqueIdentifier}",\n    "version": "1.0.0",\n    "priorityOrder": 0,\n    "active": true,\n    "parameters": [\n      {\n        "name": "exchange",\n        "type": "STRING",\n        "value": "{exchange name to use}"\n      },\n      {\n        "name": "queueName",\n        "type": "STRING",\n        "value": "{queue name to use}"\n      },\n      {\n        "name": "recipientLabel",\n        "type": "STRING",\n        "value": "{identifier of the recipient}"\n      },\n      {\n        "name": "description",\n        "type": "STRING",\n        "value": "{plugin description}"\n      },\n      {\n        "name": "directNotificationEnabled",\n        "type": "BOOLEAN",\n        "value": "{true or false}"\n      },\n      {\n        "name": "featureDisseminationExchange",\n        "type": "STRING",\n        "value": "{exchange name to store ACK messages before shovel}"\n      },\n      {\n        "name": "featureDisseminationQueueName",\n        "type": "STRING",\n        "value": "{queue name to store ACK messages before shovel}"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h4",{id:"oais-catalog-usage"},"OAIS catalog usage"),(0,r.kt)("p",null,"This plugin let you override following configuration:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aipDisseminationExchange"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the exchange to store messages before shovel. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Only use when handling OAIS products."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aipDisseminationQueueName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the AMQP queue to store messages before shovel. ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Only use when handling OAIS products."))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example de configuration de plugin pour acquitter une diffusion de produits OAIS"',title:'"Example',de:!0,configuration:!0,plugin:!0,pour:!0,acquitter:!0,une:!0,diffusion:!0,produits:!0,'OAIS"':!0},'{\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId": "DisseminationAckSender",\n    "label": "{label}",\n    "businessId": "{uniqueIdentifier}",\n    "version": "1.0.0",\n    "priorityOrder": 0,\n    "active": true,\n    "parameters": [\n      {\n        "name": "exchange",\n        "type": "STRING",\n        "value": "{exchange name to use}"\n      },\n      {\n        "name": "queueName",\n        "type": "STRING",\n        "value": "{queue name to use}"\n      },\n      {\n        "name": "recipientLabel",\n        "type": "STRING",\n        "value": "{identifier of the recipient}"\n      },\n      {\n        "name": "description",\n        "type": "STRING",\n        "value": "{plugin description}"\n      },\n      {\n        "name": "directNotificationEnabled",\n        "type": "BOOLEAN",\n        "value": "{true or false}"\n      },\n      {\n        "name": "aipDisseminationExchange",\n        "type": "STRING",\n        "value": "{exchange name to store ACK messages before shovel}"\n      },\n      {\n        "name": "aipDisseminationQueueName",\n        "type": "STRING",\n        "value": "{queue name to store ACK messages before shovel}"\n      }\n    ]\n  }\n}\n')))}m.isMDXComponent=!0}}]);