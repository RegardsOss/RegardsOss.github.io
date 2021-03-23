(window.webpackJsonp=window.webpackJsonp||[]).push([[745],{2704:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),l=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=l(t),u=a,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||i;return t?r.a.createElement(d,p(p({ref:n},b),{},{components:t})):r.a.createElement(d,p({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var b=2;b<i;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},819:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),i=(t(0),t(2704)),o={id:"backend-notifier-configuration-api",title:"Notifier configuration",sidebar_label:"Notifier configuration",slug:"/development/backend/services/notifier/api/configuration/"},p={unversionedId:"development/backend/regards/notifier/api/backend-notifier-configuration-api",id:"development/backend/regards/notifier/api/backend-notifier-configuration-api",isDocsHomePage:!1,title:"Notifier configuration",description:"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice.",source:"@site/docs/development/backend/regards/notifier/api/notifier-configuration-api.md",slug:"/development/backend/services/notifier/api/configuration/",permalink:"/docs/development/backend/services/notifier/api/configuration/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/api/notifier-configuration-api.md",version:"current",sidebar_label:"Notifier configuration",sidebar:"dev",previous:{title:"Notifier API",permalink:"/docs/development/backend/services/notifier/api/"},next:{title:"Notifier plugins",permalink:"/docs/development/backend/services/notifier/plugins/"}},c=[],b={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice."),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Be careful, import will overwrite an existing plugin configuration with same ",Object(i.b)("inlineCode",{parentName:"p"},"business id"),"."))),Object(i.b)("p",null,Object(i.b)("h3",{parentName:"p"},"Import configuration"),Object(i.b)("h3",{parentName:"p"},"Request"),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"URL")),Object(i.b)("p",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"URL template")),Object(i.b)("p",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"Method")),Object(i.b)("p",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"p"},"POST")),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"Headers")),Object(i.b)("p",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Accept:application/json")),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"Data params")),Object(i.b)("p",{parentName:"p"},"Import your configuration file in multipart request using name ",Object(i.b)("inlineCode",{parentName:"p"},"file"),"."),Object(i.b)("h3",{parentName:"p"},"Response"),Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Code:")," 201 CREATED"))),Object(i.b)("p",null,"Configuration parameters :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resetBeforeImport"),": You can configure to delete all previous configuration before import new one."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RuleMatcher"),": Configuration of rules based on ",Object(i.b)("a",{parentName:"li",href:"../../plugins#rule-matcher-plugins"},"plugins"),". Rules are used to define if a notification should be sent to associated RecipientSenders"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RecipientSender"),": Configuration of notification senders based on ",Object(i.b)("a",{parentName:"li",href:"../../plugins#recipient-sender-plugins"},"plugins"),". Senders are used to define how to send notification to recipients."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Rule/RecipientSenders assocation")," : Configuration to associates one RuleMatcher to one or many RecipientSenders")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport":  true,\n      "configuration": [...]\n    }\n}\n')),Object(i.b)("p",null,"Configure global reset parameter :"),Object(i.b)("p",null,"Setting the ",Object(i.b)("inlineCode",{parentName:"p"},"resetBeforeImport")," parameter to true to reset all previous configuration of notifier before creating the imported one."),Object(i.b)("p",null,"Configure plugins (Rule or RecipientSender) :"),Object(i.b)("p",null,"Add the here under part in the configuration property of the import configuration file :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId":"{pluginId}",\n    "label":"{label}",\n    "businessId":"{MyOwnPluginConfiguration}",\n    "version":"1.0.0",\n    "priorityOrder":0,\n    "active":true,\n    "parameters":[\n      {"name":"{parameterName}", "type":"{parameterType}", "value":"{parameterValue}"}\n    ]\n  }\n},\n')),Object(i.b)("p",null,"Configure RuleMatcher/RecipientSenders assocation :"),Object(i.b)("p",null,"Add the here under part in the configuration property of the import configuration file :"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n  "value": {\n    "ruleId": "{MyRuleMatcher}",\n    "recipientIds": ["{MyRecipient}"]\n  }\n}\n')),Object(i.b)("h4",{id:"example-of-configuration-file-to-import"},"Example of configuration file to import"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport": true,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "RabbitMQSender",\n            "label": "RabbitMQ Sender",\n            "businessId": "RabbitMQSender",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "exchange",\n                "type": "STRING",\n                "value": "regards.geode-validation"\n              },\n              {\n                "name": "queueName",\n                "type": "STRING",\n                "value": "regards.geode-validation"\n              }\n            ]\n          }\n        },\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DefaultRuleMatcher",\n            "label": "Rule by type",\n            "businessId": "RuleByType",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "attributeValueToSeek",\n                "type": "STRING",\n                "value": "L0A_LR_Packet"\n              },\n              { "name": "attributeToSeek", "type": "STRING", "value": "type" }\n            ]\n          }\n        },\n        {\n          "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n          "value": {\n            "ruleId": "RuleByType",\n            "recipientIds": ["RabbitMQSender"]\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(i.b)("h4",{id:"disable-a-configured-rule"},"Disable a configured rule"),Object(i.b)("p",null,"In order to disable a configured rule you can import the same configuration file changing the ",Object(i.b)("inlineCode",{parentName:"p"},"active")," value from true to false."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-notifier",\n  "modules": [\n    {\n      "module": {\n        "id": "notifier"\n      },\n      "resetBeforeImport": false,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DefaultRuleMatcher",\n            "label": "Rule by type",\n            "businessId": "RuleByType",\n            "version": "1.0.0",\n            "priorityOrder": 0,\n            "active": false,\n            "parameters": [\n              {\n                "name": "attributeValueToSeek",\n                "type": "STRING",\n                "value": "L0A_LR_Packet"\n              },\n              { "name": "attributeToSeek", "type": "STRING", "value": "type" }\n            ]\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(i.b)("p",null,Object(i.b)("h3",{parentName:"p"},"Export configuration"),Object(i.b)("h3",{parentName:"p"},"Request"),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"URL")),Object(i.b)("p",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"URL template")),Object(i.b)("p",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"Method")),Object(i.b)("p",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"p"},"GET")),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"Headers")),Object(i.b)("p",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Accept:application/json")),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"Data params")),Object(i.b)("p",{parentName:"p"},"None"),Object(i.b)("h3",{parentName:"p"},"Response"),Object(i.b)("ul",{parentName:"p"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Code:")," 200 OK")),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"Headers:")),Object(i.b)("p",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type:application/json"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},'Content-Disposition:attachment; filename="config-Test application.json"'),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Expires:0"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY")),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"Content:")),Object(i.b)("p",{parentName:"p"},"Template :"),Object(i.b)("pre",{parentName:"p"},Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "{microservice name}",\n  "modules": [\n    {\n      "module": {\n        "id": "{module id}",\n        "name": "{module name}",\n        "description": "{module description}",\n        "version": "{module version}",\n        "author": "{module author}",\n        "legalOwner": "{module owner}",\n        "documentation": "{module docu url}"\n      },\n      "configuration": [\n        {\n          "key": "{fully qualified class name}",\n          "value": "{json}"\n        }\n      ]\n    }\n  ]\n}\n'))),Object(i.b)("p",null,Object(i.b)("h3",{parentName:"p"},"Download configuration"),Object(i.b)("p",{parentName:"p"},"To get configuration as a link, simply pass token in URL as follow :"),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"URL")),Object(i.b)("p",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"p"},"/microservice/configuration?token={bearer}")),Object(i.b)("p",{parentName:"p"},Object(i.b)("strong",{parentName:"p"},"Method")),Object(i.b)("p",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"p"},"GET"))))}l.isMDXComponent=!0}}]);