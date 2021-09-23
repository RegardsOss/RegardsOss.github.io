"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24423],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48106:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],u={id:"backend-notifier-plugins",title:"Notifier plugins",sidebar_label:"Notifier",slug:"/development/backend/services/notifier/plugins/"},l=void 0,s={unversionedId:"development/backend/regards/notifier/plugins/backend-notifier-plugins",id:"development/backend/regards/notifier/plugins/backend-notifier-plugins",isDocsHomePage:!1,title:"Notifier plugins",description:"Rule matcher plugins",source:"@site/docs/development/backend/regards/notifier/plugins/notifier-plugins.md",sourceDirName:"development/backend/regards/notifier/plugins",slug:"/development/backend/services/notifier/plugins/",permalink:"/fr/docs/development/backend/services/notifier/plugins/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/plugins/notifier-plugins.md",version:"current",frontMatter:{id:"backend-notifier-plugins",title:"Notifier plugins",sidebar_label:"Notifier",slug:"/development/backend/services/notifier/plugins/"},sidebar:"dev",previous:{title:"Notifier configuration",permalink:"/fr/docs/development/backend/services/notifier/api/configuration/"},next:{title:"Overview",permalink:"/fr/docs/development/backend/services/dataprovider/overview/"}},c=[{value:"Rule matcher plugins",id:"rule-matcher-plugins",children:[{value:"DefaultRuleMatcher",id:"defaultrulematcher",children:[]},{value:"LuceneRuleMatcher :",id:"lucenerulematcher-",children:[]}]},{value:"Recipient sender plugins",id:"recipient-sender-plugins",children:[{value:"RabbitMQSender",id:"rabbitmqsender",children:[]}]},{value:"Recipients / Rules association",id:"recipients--rules-association",children:[]}],p={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rule-matcher-plugins"},"Rule matcher plugins"),(0,a.kt)("p",null,"Rules are used to define if a notification should be sent to associated RecipientSenders."),(0,a.kt)("h3",{id:"defaultrulematcher"},"DefaultRuleMatcher"),(0,a.kt)("p",null,"This rule matcher allows to check into notification content if a json property matches a specific value. If so, the notification is sent to associated senders.",(0,a.kt)("br",{parentName:"p"}),"\n","Configuration parameters are :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"attributeToSeek : attribut name to search for the notification json content. "),(0,a.kt)("li",{parentName:"ul"},"attributeValueToSeek : attribut value to match.")),(0,a.kt)("p",null,"To configure this plugin, use the here-under configuration block in ",(0,a.kt)("a",{parentName:"p",href:"../api/configuration/"},"import service configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},' {\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId":"DefaultRuleMatcher",\n    "label":"{label}",\n    "businessId":"{uniqueIdentifier}",\n    "version":"1.0.0",\n    "priorityOrder":0,\n    "active":true,\n    "parameters":[\n      {"name":"attributeValueToSeek", "type":"STRING", "value":"{attribute to searh for}"},\n      {"name":"attributeToSeek", "type":"STRING", "value":"{value to match}"}\n    ]\n  }\n}      \n')),(0,a.kt)("h3",{id:"lucenerulematcher-"},"LuceneRuleMatcher :"),(0,a.kt)("p",null,"This rule matcher allows to check if the given lucene expression match the notification json object content. If so, the notification is sent to associated senders.\nConfiguration parameters are :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"luceneRule : Lucene expression to seek ",(0,a.kt)("a",{parentName:"li",href:"../../../../appendices/lucene-query"},"example"))),(0,a.kt)("p",null,"To configure this plugin, use the here-under configuration block in ",(0,a.kt)("a",{parentName:"p",href:"../api/configuration/"},"import service configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},' {\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId":"LuceneRuleMatcher",\n    "label":"{label}",\n    "businessId":"{uniqueIdentifier}",\n    "version":"1.0.0",\n    "priorityOrder":0,\n    "active":true,\n    "parameters":[\n      {"name":"luceneRule", "type":"STRING", "value":"{lucene rule}"},\n    ]\n  }\n}      \n')),(0,a.kt)("h2",{id:"recipient-sender-plugins"},"Recipient sender plugins"),(0,a.kt)("p",null,"Senders are used to define how to send notification to recipients."),(0,a.kt)("h3",{id:"rabbitmqsender"},"RabbitMQSender"),(0,a.kt)("p",null,"This sender is used to send notifications on a specific RabbitMQ couple exchange/queue with no transformation applied to the input.",(0,a.kt)("br",{parentName:"p"}),"\n","Configuration parameters are :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"exchange : Name  of the  exchange to use"),(0,a.kt)("li",{parentName:"ul"},"queueName : Name of the queue to use")),(0,a.kt)("p",null,"To configure this plugin, use the here-under configuration block in ",(0,a.kt)("a",{parentName:"p",href:"../api/configuration/"},"import service configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},' {\n     "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n     "value": {\n     "pluginId":"RabbitMQSender",\n     "label":"{label}",\n     "businessId":"{uniqueIdentifier}",\n     "version":"1.0.0",\n     "priorityOrder":0,\n     "active":true,\n     "parameters":[\n       {"name":"exchange", "type":"STRING", "value":"{exchange name to use}"},\n       {"name":"queueName", "type":"STRING", "value":"{queue name to use}"}\n     ]\n   }\n},\n')),(0,a.kt)("h2",{id:"recipients--rules-association"},"Recipients / Rules association"),(0,a.kt)("p",null,"In order to have a functional notification system, the last configuration to make is to associate your recipients to your rules. You can associate one rule too many recipients.\nTo do so, please use the here under configuration block in ",(0,a.kt)("a",{parentName:"p",href:"../api/configuration/"},"import module configuration")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n  "value": {\n     "ruleId": "{businessId of rule configuration}",\n     "recipientIds" : ["{businessId of recipient configuration}"]\n  }\n}\n')))}d.isMDXComponent=!0}}]);