"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[16555],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={id:"backend-notifier-configuration-api",title:"Notifier configuration",sidebar_label:"Notifier configuration",slug:"/development/backend/services/notifier/api/configuration/"},o=void 0,p={unversionedId:"development/backend/regards/notifier/api/backend-notifier-configuration-api",id:"version-1.7.1/development/backend/regards/notifier/api/backend-notifier-configuration-api",title:"Notifier configuration",description:"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice.",source:"@site/versioned_docs/version-1.7.1/development/backend/regards/notifier/api/notifier-configuration-api.md",sourceDirName:"development/backend/regards/notifier/api",slug:"/development/backend/services/notifier/api/configuration/",permalink:"/docs/1.7.1/development/backend/services/notifier/api/configuration/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/regards/notifier/api/notifier-configuration-api.md",tags:[],version:"1.7.1",frontMatter:{id:"backend-notifier-configuration-api",title:"Notifier configuration",sidebar_label:"Notifier configuration",slug:"/development/backend/services/notifier/api/configuration/"},sidebar:"dev",previous:{title:"Notifier",permalink:"/docs/1.7.1/development/backend/services/notifier/api/"},next:{title:"Notifier",permalink:"/docs/1.7.1/development/backend/services/notifier/plugins/"}},l={},s=[{value:"Example of configuration file to import",id:"example-of-configuration-file-to-import",level:4},{value:"Disable a configured rule",id:"disable-a-configured-rule",level:4}],u={toc:s};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Be careful, import will overwrite an existing plugin configuration with same ",(0,a.kt)("inlineCode",{parentName:"p"},"business id"),".")),(0,a.kt)("p",null,(0,a.kt)("h3",{parentName:"p"},"Import configuration"),(0,a.kt)("h3",{parentName:"p"},"Request"),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"URL")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"URL template")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"Method")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"p"},"POST")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"Headers")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"Data params")),(0,a.kt)("p",{parentName:"p"},"Import your configuration file in multipart request using name ",(0,a.kt)("inlineCode",{parentName:"p"},"file"),"."),(0,a.kt)("h3",{parentName:"p"},"Response"),(0,a.kt)("ul",{parentName:"p"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Code:")," 201 CREATED"))),(0,a.kt)("p",null,"Configuration parameters :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resetBeforeImport"),": You can configure to delete all previous configuration before import new one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RuleMatcher"),": Configuration of rules based on ",(0,a.kt)("a",{parentName:"li",href:"../../plugins#rule-matcher-plugins"},"plugins"),". Rules are used to define if a notification should be sent to associated RecipientSenders"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RecipientSender"),": Configuration of notification senders based on ",(0,a.kt)("a",{parentName:"li",href:"../../plugins#recipient-sender-plugins"},"plugins"),". Senders are used to define how to send notification to recipients."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Rule/RecipientSenders assocation")," : Configuration to associates one RuleMatcher to one or many RecipientSenders")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport":  true,\n      "configuration": [...]\n    }\n}\n')),(0,a.kt)("p",null,"Configure global reset parameter :"),(0,a.kt)("p",null,"Setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"resetBeforeImport")," parameter to true to reset all previous configuration of notifier before creating the imported one."),(0,a.kt)("p",null,"Configure plugins (Rule or RecipientSender) :"),(0,a.kt)("p",null,"Add the here under part in the configuration property of the import configuration file :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId":"{pluginId}",\n    "label":"{label}",\n    "businessId":"{MyOwnPluginConfiguration}",\n    "version":"1.0.0",\n    "priorityOrder":0,\n    "active":true,\n    "parameters":[\n      {"name":"{parameterName}", "type":"{parameterType}", "value":"{parameterValue}"}\n    ]\n  }\n},\n')),(0,a.kt)("p",null,"Configure RuleMatcher/RecipientSenders assocation :"),(0,a.kt)("p",null,"Add the here under part in the configuration property of the import configuration file :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n  "value": {\n    "ruleId": "{MyRuleMatcher}",\n    "recipientIds": ["{MyRecipient}"]\n  }\n}\n')),(0,a.kt)("h4",{id:"example-of-configuration-file-to-import"},"Example of configuration file to import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport": true,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "RabbitMQSender",\n            "label": "RabbitMQ Sender",\n            "businessId": "RabbitMQSender",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "exchange",\n                "type": "STRING",\n                "value": "regards.geode-validation"\n              },\n              {\n                "name": "queueName",\n                "type": "STRING",\n                "value": "regards.geode-validation"\n              }\n            ]\n          }\n        },\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DefaultRuleMatcher",\n            "label": "Rule by type",\n            "businessId": "RuleByType",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "attributeValueToSeek",\n                "type": "STRING",\n                "value": "L0A_LR_Packet"\n              },\n              { "name": "attributeToSeek", "type": "STRING", "value": "type" }\n            ]\n          }\n        },\n        {\n          "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n          "value": {\n            "ruleId": "RuleByType",\n            "recipientIds": ["RabbitMQSender"]\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("h4",{id:"disable-a-configured-rule"},"Disable a configured rule"),(0,a.kt)("p",null,"In order to disable a configured rule you can import the same configuration file changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," value from true to false."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport": false,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DefaultRuleMatcher",\n            "label": "Rule by type",\n            "businessId": "RuleByType",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": false,\n            "parameters": [\n              {\n                "name": "attributeValueToSeek",\n                "type": "STRING",\n                "value": "L0A_LR_Packet"\n              },\n              { "name": "attributeToSeek", "type": "STRING", "value": "type" }\n            ]\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("h3",{parentName:"p"},"Export configuration"),(0,a.kt)("h3",{parentName:"p"},"Request"),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"URL")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"URL template")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"Method")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"Headers")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"Data params")),(0,a.kt)("p",{parentName:"p"},"None"),(0,a.kt)("h3",{parentName:"p"},"Response"),(0,a.kt)("ul",{parentName:"p"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"Headers:")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'Content-Disposition:attachment; filename="config-Test application.json"'),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"Content:")),(0,a.kt)("p",{parentName:"p"},"Template :"),(0,a.kt)("pre",{parentName:"p"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "{microservice name}",\n  "modules": [\n    {\n      "module": {\n        "id": "{module id}",\n        "name": "{module name}",\n        "description": "{module description}",\n        "version": "{module version}",\n        "author": "{module author}",\n        "legalOwner": "{module owner}",\n        "documentation": "{module docu url}"\n      },\n      "configuration": [\n        {\n          "key": "{fully qualified class name}",\n          "value": "{json}"\n        }\n      ]\n    }\n  ]\n}\n'))),(0,a.kt)("p",null,(0,a.kt)("h3",{parentName:"p"},"Download configuration"),(0,a.kt)("p",{parentName:"p"},"To get configuration as a link, simply pass token in URL as follow :"),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"URL")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration?token={bearer}")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("strong",{parentName:"p"},"Method")),(0,a.kt)("p",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"p"},"GET"))))}m.isMDXComponent=!0}}]);