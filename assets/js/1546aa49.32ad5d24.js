"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[43940],{95788:(e,n,a)=>{a.d(n,{Iu:()=>l,yg:()=>d});var r=a(11504);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var m=r.createContext({}),g=function(e){var n=r.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},l=function(e){var n=g(e.components);return r.createElement(m.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=g(a),u=t,d=s["".concat(m,".").concat(u)]||s[u]||c[u]||o;return a?r.createElement(d,p(p({ref:n},l),{},{components:a})):r.createElement(d,p({ref:n},l))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,p=new Array(o);p[0]=u;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[s]="string"==typeof e?e:t,p[1]=i;for(var g=2;g<o;g++)p[g]=a[g];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62592:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var r=a(45072),t=(a(11504),a(95788));const o={id:"backend-fem-configuration-api",title:"Feature Manager configuration API",sidebar_label:"Feature Manager configuration",slug:"/development/backend/services/fem/api/configuration/"},p=void 0,i={unversionedId:"development/backend/regards/fem/api/backend-fem-configuration-api",id:"version-1.11.0/development/backend/regards/fem/api/backend-fem-configuration-api",title:"Feature Manager configuration API",description:"Feature Manager configuration",source:"@site/versioned_docs/version-1.11.0/development/backend/regards/fem/api/feature-management-configuration.md",sourceDirName:"development/backend/regards/fem/api",slug:"/development/backend/services/fem/api/configuration/",permalink:"/docs/1.11.0/development/backend/services/fem/api/configuration/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/regards/fem/api/feature-management-configuration.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-fem-configuration-api",title:"Feature Manager configuration API",sidebar_label:"Feature Manager configuration",slug:"/development/backend/services/fem/api/configuration/"},sidebar:"dev",previous:{title:"API",permalink:"/docs/1.11.0/development/backend/services/fem/api-swagger"},next:{title:"Feature Manager REST",permalink:"/docs/1.11.0/development/backend/services/fem/api/rest/"}},m={},g=[{value:"Feature Manager configuration",id:"feature-manager-configuration",level:2},{value:"Example of configuration file to import",id:"example-of-configuration-file-to-import",level:4}],l={toc:g},s="wrapper";function c(e){let{components:n,...a}=e;return(0,t.yg)(s,(0,r.c)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"feature-manager-configuration"},"Feature Manager configuration"),(0,t.yg)("p",null,"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice."),(0,t.yg)("admonition",{type:"danger"},(0,t.yg)("p",{parentName:"admonition"},"Be careful, import will overwrite an existing plugin configuration with same ",(0,t.yg)("inlineCode",{parentName:"p"},"business id"),".")),(0,t.yg)("p",null,(0,t.yg)("h3",{parentName:"p"},"Import configuration"),(0,t.yg)("h3",{parentName:"p"},"Request"),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"URL")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"URL template")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Method")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"POST")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Headers")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Data params")),(0,t.yg)("p",{parentName:"p"},"Import your configuration file in multipart request using name ",(0,t.yg)("inlineCode",{parentName:"p"},"file"),"."),(0,t.yg)("h3",{parentName:"p"},"Response"),(0,t.yg)("ul",{parentName:"p"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Code:")," 201 CREATED"))),(0,t.yg)("h4",{id:"example-of-configuration-file-to-import"},"Example of configuration file to import"),(0,t.yg)("p",null,"Value between brackets must be adapted!"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-fem",\n  "modules": [\n    {\n      "module": {\n        "id": "featureprovider",\n        "name": "Feature provider management module",\n        "description": "GeoJSON catalog provider",\n        "version": "1.4.0",\n        "author": "REGARDS",\n        "legalOwner": "CNES",\n        "documentation": "https://github.com/RegardsOss"\n      },\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DataTypeFeatureFactoryPlugin",\n            "label": "{My project feature factory}",\n            "businessId": "{MyProjectFeatureFactory}",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "model",\n                "type": "STRING",\n                "value": "{modelName}"\n              },\n              {\n                "name": "configDirectory",\n                "type": "STRING",\n                "value": "{/input}"\n              }\n            ]\n          }\n        }\n      ]\n    },\n    {\n      "module": {\n        "id": "feature",\n        "name": "Feature management module",\n        "description": "GeoJSON catalog manager",\n        "version": "1.4.0",\n        "author": "REGARDS",\n        "legalOwner": "CNES",\n        "documentation": "https://github.com/RegardsOss"\n      },\n      "resetBeforeImport": true,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.dump.domain.DumpSettings",\n          "value": {\n            "id": 0,\n            "activeModule": true,\n            "cronTrigger": "0 0 0 1-7 * SUN"\n          }\n        },\n        {\n          "key": "fr.cnes.regards.modules.feature.domain.settings.FeatureNotificationSettings",\n          "value": {\n            "id": 0,\n            "activeNotification": true\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,t.yg)("p",null,(0,t.yg)("h3",{parentName:"p"},"Export configuration"),(0,t.yg)("h3",{parentName:"p"},"Request"),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"URL")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"URL template")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Method")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"GET")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Headers")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Data params")),(0,t.yg)("p",{parentName:"p"},"None"),(0,t.yg)("h3",{parentName:"p"},"Response"),(0,t.yg)("ul",{parentName:"p"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Headers:")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Content-Type:application/json"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},'Content-Disposition:attachment; filename="config-Test application.json"'),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"Expires:0"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Content:")),(0,t.yg)("p",{parentName:"p"},"Template :"),(0,t.yg)("pre",{parentName:"p"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "{microservice name}",\n  "modules": [\n    {\n      "module": {\n        "id": "{module id}",\n        "name": "{module name}",\n        "description": "{module description}",\n        "version": "{module version}",\n        "author": "{module author}",\n        "legalOwner": "{module owner}",\n        "documentation": "{module docu url}"\n      },\n      "configuration": [\n        {\n          "key": "{fully qualified class name}",\n          "value": "{json}"\n        }\n      ]\n    }\n  ]\n}\n'))),(0,t.yg)("p",null,(0,t.yg)("h3",{parentName:"p"},"Download configuration"),(0,t.yg)("p",{parentName:"p"},"To get configuration as a link, simply pass token in URL as follow :"),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"URL")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"/microservice/configuration?token={bearer}")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("strong",{parentName:"p"},"Method")),(0,t.yg)("p",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"p"},"GET"))))}c.isMDXComponent=!0}}]);