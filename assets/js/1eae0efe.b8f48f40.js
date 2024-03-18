"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[45153],{15680:(e,n,r)=>{r.d(n,{xA:()=>g,yg:()=>d});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),s=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},g=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),u=s(r),c=t,d=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return r?a.createElement(d,o(o({ref:n},g),{},{components:r})):a.createElement(d,o({ref:n},g))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:t,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},79441:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(58168),t=(r(96540),r(15680));const i={id:"backend-notifier-configuration-api",title:"Notifier configuration",sidebar_label:"Notifier configuration",slug:"/development/backend/services/notifier/api/configuration/"},o=void 0,p={unversionedId:"development/backend/regards/notifier/api/backend-notifier-configuration-api",id:"version-1.11.0/development/backend/regards/notifier/api/backend-notifier-configuration-api",title:"Notifier configuration",description:"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice.",source:"@site/versioned_docs/version-1.11.0/development/backend/regards/notifier/api/notifier-configuration-api.md",sourceDirName:"development/backend/regards/notifier/api",slug:"/development/backend/services/notifier/api/configuration/",permalink:"/docs/1.11.0/development/backend/services/notifier/api/configuration/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/regards/notifier/api/notifier-configuration-api.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-notifier-configuration-api",title:"Notifier configuration",sidebar_label:"Notifier configuration",slug:"/development/backend/services/notifier/api/configuration/"},sidebar:"dev",previous:{title:"Notifier",permalink:"/docs/1.11.0/development/backend/services/notifier/api/"},next:{title:"Notifier",permalink:"/docs/1.11.0/development/backend/services/notifier/plugins/"}},l={},s=[{value:"Example of configuration file to import",id:"example-of-configuration-file-to-import",level:4},{value:"Disable a configured rule",id:"disable-a-configured-rule",level:4}],g={toc:s},u="wrapper";function m(e){let{components:n,...r}=e;return(0,t.yg)(u,(0,a.A)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice."),(0,t.yg)("admonition",{type:"danger"},(0,t.yg)("p",{parentName:"admonition"},"Be careful, import will overwrite an existing plugin configuration with same ",(0,t.yg)("inlineCode",{parentName:"p"},"business id"),".")),(0,t.yg)("p",null,(0,t.yg)("h3",{parentName:"p"},"Import configuration"),(0,t.yg)("h3",{parentName:"p"},"Request"),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"URL")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"URL template")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Method")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"POST")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Headers")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Data params")),(0,t.yg)("p",{parentName:"p"},"Import your configuration file in multipart request using name ",(0,t.yg)("inlineCode",{parentName:"p"},"file"),"."),(0,t.yg)("h3",{parentName:"p"},"Response"),(0,t.yg)("ul",{parentName:"p"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Code:")," 201 CREATED"))),(0,t.yg)("p",null,"Configuration parameters :"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"resetBeforeImport"),": You can configure to delete all previous configuration before import new one."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"RuleMatcher"),": Configuration of rules based on ",(0,t.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/services/notifier/plugins/#rule-matcher-plugins"},"plugins"),". Rules are used to define if a notification should be sent to associated RecipientSenders"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"RecipientSender"),": Configuration of notification senders based on ",(0,t.yg)("a",{parentName:"li",href:"/docs/1.11.0/development/backend/services/notifier/plugins/#recipient-sender-plugins"},"plugins"),". Senders are used to define how to send notification to recipients."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"Rule/RecipientSenders assocation")," : Configuration to associates one RuleMatcher to one or many RecipientSenders")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport":  true,\n      "configuration": [...]\n    }\n}\n')),(0,t.yg)("p",null,"Configure global reset parameter :"),(0,t.yg)("p",null,"Setting the ",(0,t.yg)("inlineCode",{parentName:"p"},"resetBeforeImport")," parameter to true to reset all previous configuration of notifier before creating the imported one."),(0,t.yg)("p",null,"Configure plugins (Rule or RecipientSender) :"),(0,t.yg)("p",null,"Add the here under part in the configuration property of the import configuration file :"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId":"{pluginId}",\n    "label":"{label}",\n    "businessId":"{MyOwnPluginConfiguration}",\n    "version":"1.0.0",\n    "priorityOrder":0,\n    "active":true,\n    "parameters":[\n      {"name":"{parameterName}", "type":"{parameterType}", "value":"{parameterValue}"}\n    ]\n  }\n},\n')),(0,t.yg)("p",null,"Configure RuleMatcher/RecipientSenders assocation :"),(0,t.yg)("p",null,"Add the here under part in the configuration property of the import configuration file :"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n  "value": {\n    "ruleId": "{MyRuleMatcher}",\n    "recipientIds": ["{MyRecipient}"]\n  }\n}\n')),(0,t.yg)("h4",{id:"example-of-configuration-file-to-import"},"Example of configuration file to import"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport": true,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "RabbitMQSender",\n            "label": "RabbitMQ Sender",\n            "businessId": "RabbitMQSender",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "exchange",\n                "type": "STRING",\n                "value": "regards.geode-validation"\n              },\n              {\n                "name": "queueName",\n                "type": "STRING",\n                "value": "regards.geode-validation"\n              }\n            ]\n          }\n        },\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DefaultRuleMatcher",\n            "label": "Rule by type",\n            "businessId": "RuleByType",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "attributeValueToSeek",\n                "type": "STRING",\n                "value": "L0A_LR_Packet"\n              },\n              { "name": "attributeToSeek", "type": "STRING", "value": "type" }\n            ]\n          }\n        },\n        {\n          "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n          "value": {\n            "ruleId": "RuleByType",\n            "recipientIds": ["RabbitMQSender"]\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,t.yg)("h4",{id:"disable-a-configured-rule"},"Disable a configured rule"),(0,t.yg)("p",null,"In order to disable a configured rule you can import the same configuration file changing the ",(0,t.yg)("inlineCode",{parentName:"p"},"active")," value from true to false."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport": false,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DefaultRuleMatcher",\n            "label": "Rule by type",\n            "businessId": "RuleByType",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": false,\n            "parameters": [\n              {\n                "name": "attributeValueToSeek",\n                "type": "STRING",\n                "value": "L0A_LR_Packet"\n              },\n              { "name": "attributeToSeek", "type": "STRING", "value": "type" }\n            ]\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,t.yg)("p",null,(0,t.yg)("h3",{parentName:"p"},"Export configuration"),(0,t.yg)("h3",{parentName:"p"},"Request"),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"URL")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"URL template")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Method")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"GET")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Headers")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Data params")),(0,t.yg)("p",{parentName:"p"},"None"),(0,t.yg)("h3",{parentName:"p"},"Response"),(0,t.yg)("ul",{parentName:"p"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Headers:")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Content-Type:application/json"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},'Content-Disposition:attachment; filename="config-Test application.json"'),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Expires:0"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Content:")),(0,t.yg)("p",{parentName:"p"},"Template :"),(0,t.yg)("pre",{parentName:"p"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "{microservice name}",\n  "modules": [\n    {\n      "module": {\n        "id": "{module id}",\n        "name": "{module name}",\n        "description": "{module description}",\n        "version": "{module version}",\n        "author": "{module author}",\n        "legalOwner": "{module owner}",\n        "documentation": "{module docu url}"\n      },\n      "configuration": [\n        {\n          "key": "{fully qualified class name}",\n          "value": "{json}"\n        }\n      ]\n    }\n  ]\n}\n'))),(0,t.yg)("p",null,(0,t.yg)("h3",{parentName:"p"},"Download configuration"),(0,t.yg)("p",{parentName:"p"},"To get configuration as a link, simply pass token in URL as follow :"),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"URL")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"/microservice/configuration?token={bearer}")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Method")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"GET"))))}m.isMDXComponent=!0}}]);