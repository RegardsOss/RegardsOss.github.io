"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[98876],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={id:"backend-rest-import-notifier-plugin-configuration",title:"Import Notifier plugin configurations",sidebar_label:"Import plugin conf",slug:"/development/backend/notifier/guides/rest/import-plugin-configuration"},a=void 0,l={unversionedId:"development/backend/regards/notifier/api-guides/rest/backend-rest-import-notifier-plugin-configuration",id:"development/backend/regards/notifier/api-guides/rest/backend-rest-import-notifier-plugin-configuration",title:"Import Notifier plugin configurations",description:"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice.",source:"@site/docs/development/backend/regards/notifier/api-guides/rest/rest-import-plugins-conf.md",sourceDirName:"development/backend/regards/notifier/api-guides/rest",slug:"/development/backend/notifier/guides/rest/import-plugin-configuration",permalink:"/docs/development/backend/notifier/guides/rest/import-plugin-configuration",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/api-guides/rest/rest-import-plugins-conf.md",tags:[],version:"current",frontMatter:{id:"backend-rest-import-notifier-plugin-configuration",title:"Import Notifier plugin configurations",sidebar_label:"Import plugin conf",slug:"/development/backend/notifier/guides/rest/import-plugin-configuration"},sidebar:"dev",previous:{title:"Publish a request",permalink:"/docs/development/backend/services/notifier/guides/amqp/publish-notifier"},next:{title:"REST API",permalink:"/docs/development/backend/services/notifier/guides/rest/api"}},p={},u=[{value:"Import configuration",id:"import-configuration",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Example of configuration file to import",id:"example-of-configuration-file-to-import",level:4},{value:"Disable a configured rule",id:"disable-a-configured-rule",level:4},{value:"Export configuration",id:"export-configuration",level:3},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Download configuration",id:"download-configuration",level:3}],s={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Be careful, import will overwrite an existing plugin configuration with same ",(0,i.kt)("inlineCode",{parentName:"p"},"business id"),".")),(0,i.kt)("h3",{id:"import-configuration"},"Import configuration"),(0,i.kt)("h3",{id:"request"},"Request"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL template")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Headers")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Data params")),(0,i.kt)("p",null,"Import your configuration file in multipart request using name ",(0,i.kt)("inlineCode",{parentName:"p"},"file"),"."),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Code:")," 201 CREATED")),(0,i.kt)("p",null,"Configuration parameters :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resetBeforeImport"),": You can configure to delete all previous configuration before import new one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RuleMatcher"),": Configuration of rules based on ",(0,i.kt)("a",{parentName:"li",href:"/docs/development/backend/services/notifier/plugins/rule-matcher"},"plugins"),".\nRules are used to define if a notification should be sent to associated RecipientSenders"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RecipientSender"),": Configuration of notification senders based on ",(0,i.kt)("a",{parentName:"li",href:"/docs/development/backend/services/notifier/plugins/recipient-sender"},"plugins"),".\nSenders are used to define how to send notification to recipients."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Rule/RecipientSenders assocation")," : Configuration to associates one RuleMatcher with one or many RecipientSenders")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport":  true,\n      "configuration": [...]\n    }\n}\n')),(0,i.kt)("p",null,"Configure global reset parameter :"),(0,i.kt)("p",null,"Setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"resetBeforeImport")," parameter to true to reset all previous configuration of notifier before creating the imported one."),(0,i.kt)("p",null,"Configure plugins (Rule or RecipientSender) :"),(0,i.kt)("p",null,"Add the here under part in the configuration property of the import configuration file :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId":"{pluginId}",\n    "label":"{label}",\n    "businessId":"{MyOwnPluginConfiguration}",\n    "version":"1.0.0",\n    "priorityOrder":0,\n    "active":true,\n    "parameters":[\n      {"name":"{parameterName}", "type":"{parameterType}", "value":"{parameterValue}"}\n    ]\n  }\n},\n')),(0,i.kt)("p",null,"Configure RuleMatcher/RecipientSenders assocation :"),(0,i.kt)("p",null,"Add the here under part in the configuration property of the import configuration file :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n  "value": {\n    "ruleId": "{MyRuleMatcher}",\n    "recipientIds": ["{MyRecipient}"]\n  }\n}\n')),(0,i.kt)("h4",{id:"example-of-configuration-file-to-import"},"Example of configuration file to import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport": true,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "RabbitMQSender",\n            "label": "RabbitMQ Sender",\n            "businessId": "RabbitMQSender",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "exchange",\n                "type": "STRING",\n                "value": "regards.geode-validation"\n              },\n              {\n                "name": "queueName",\n                "type": "STRING",\n                "value": "regards.geode-validation"\n              }\n            ]\n          }\n        },\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DefaultRuleMatcher",\n            "label": "Rule by type",\n            "businessId": "RuleByType",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "attributeValueToSeek",\n                "type": "STRING",\n                "value": "L0A_LR_Packet"\n              },\n              {\n                "name": "attributeToSeek", \n                "type": "STRING",\n                "value": "type"\n              }\n            ]\n          }\n        },\n        {\n          "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n          "value": {\n            "ruleId": "RuleByType",\n            "recipientIds": ["RabbitMQSender"]\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h4",{id:"disable-a-configured-rule"},"Disable a configured rule"),(0,i.kt)("p",null,"In order to disable a configured rule you can import the same configuration file changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," value from true to false."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport": false,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DefaultRuleMatcher",\n            "label": "Rule by type",\n            "businessId": "RuleByType",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": false,\n            "parameters": [\n              {\n                "name": "attributeValueToSeek",\n                "type": "STRING",\n                "value": "L0A_LR_Packet"\n              },\n              { "name": "attributeToSeek", "type": "STRING", "value": "type" }\n            ]\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"export-configuration"},"Export configuration"),(0,i.kt)("h3",{id:"request-1"},"Request"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL template")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Headers")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Data params")),(0,i.kt)("p",null,"None"),(0,i.kt)("h3",{id:"response-1"},"Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Headers:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},'Content-Disposition:attachment; filename="config-Test application.json"'),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Content:")),(0,i.kt)("p",null,"Template :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "{microservice name}",\n  "modules": [\n    {\n      "module": {\n        "id": "{module id}",\n        "name": "{module name}",\n        "description": "{module description}",\n        "version": "{module version}",\n        "author": "{module author}",\n        "legalOwner": "{module owner}",\n        "documentation": "{module docu url}"\n      },\n      "configuration": [\n        {\n          "key": "{fully qualified class name}",\n          "value": "{json}"\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"download-configuration"},"Download configuration"),(0,i.kt)("p",null,"To get configuration as a link, simply pass token in URL as follow :"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/microservice/configuration?token={bearer}")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET")))}c.isMDXComponent=!0}}]);