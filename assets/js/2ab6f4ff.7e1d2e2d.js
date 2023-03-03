"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[20398],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=l(t),d=r,k=c["".concat(m,".").concat(d)]||c[d]||u[d]||o;return t?a.createElement(k,p(p({ref:n},s),{},{components:t})):a.createElement(k,p({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51775:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={id:"backend-fem-configuration-api",title:"Feature Manager configuration API",sidebar_label:"Feature Manager configuration",slug:"/development/backend/services/fem/api/configuration/"},p=void 0,i={unversionedId:"development/backend/regards/fem/api/backend-fem-configuration-api",id:"version-1.8.1/development/backend/regards/fem/api/backend-fem-configuration-api",title:"Feature Manager configuration API",description:"Feature Manager configuration",source:"@site/versioned_docs/version-1.8.1/development/backend/regards/fem/api/feature-management-configuration.md",sourceDirName:"development/backend/regards/fem/api",slug:"/development/backend/services/fem/api/configuration/",permalink:"/docs/1.8.1/development/backend/services/fem/api/configuration/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.1/development/backend/regards/fem/api/feature-management-configuration.md",tags:[],version:"1.8.1",frontMatter:{id:"backend-fem-configuration-api",title:"Feature Manager configuration API",sidebar_label:"Feature Manager configuration",slug:"/development/backend/services/fem/api/configuration/"},sidebar:"dev",previous:{title:"API",permalink:"/docs/1.8.1/development/backend/services/fem/api-swagger"},next:{title:"Feature Manager REST",permalink:"/docs/1.8.1/development/backend/services/fem/api/rest/"}},m={},l=[{value:"Feature Manager configuration",id:"feature-manager-configuration",level:2},{value:"Example of configuration file to import",id:"example-of-configuration-file-to-import",level:4}],s={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"feature-manager-configuration"},"Feature Manager configuration"),(0,r.kt)("p",null,"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Be careful, import will overwrite an existing plugin configuration with same ",(0,r.kt)("inlineCode",{parentName:"p"},"business id"),".")),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Import configuration"),(0,r.kt)("h3",{parentName:"p"},"Request"),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL template")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Method")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"POST")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Data params")),(0,r.kt)("p",{parentName:"p"},"Import your configuration file in multipart request using name ",(0,r.kt)("inlineCode",{parentName:"p"},"file"),"."),(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 201 CREATED"))),(0,r.kt)("h4",{id:"example-of-configuration-file-to-import"},"Example of configuration file to import"),(0,r.kt)("p",null,"Value between brackets must be adapted!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-fem",\n  "modules": [\n    {\n      "module": {\n        "id": "featureprovider",\n        "name": "Feature provider management module",\n        "description": "GeoJSON catalog provider",\n        "version": "1.4.0",\n        "author": "REGARDS",\n        "legalOwner": "CNES",\n        "documentation": "https://github.com/RegardsOss"\n      },\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DataTypeFeatureFactoryPlugin",\n            "label": "{My project feature factory}",\n            "businessId": "{MyProjectFeatureFactory}",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "model",\n                "type": "STRING",\n                "value": "{modelName}"\n              },\n              {\n                "name": "configDirectory",\n                "type": "STRING",\n                "value": "{/input}"\n              }\n            ]\n          }\n        }\n      ]\n    },\n    {\n      "module": {\n        "id": "feature",\n        "name": "Feature management module",\n        "description": "GeoJSON catalog manager",\n        "version": "1.4.0",\n        "author": "REGARDS",\n        "legalOwner": "CNES",\n        "documentation": "https://github.com/RegardsOss"\n      },\n      "resetBeforeImport": true,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.dump.domain.DumpSettings",\n          "value": {\n            "id": 0,\n            "activeModule": true,\n            "cronTrigger": "0 0 0 1-7 * SUN"\n          }\n        },\n        {\n          "key": "fr.cnes.regards.modules.feature.domain.settings.FeatureNotificationSettings",\n          "value": {\n            "id": 0,\n            "activeNotification": true\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Export configuration"),(0,r.kt)("h3",{parentName:"p"},"Request"),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL template")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Method")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Data params")),(0,r.kt)("p",{parentName:"p"},"None"),(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'Content-Disposition:attachment; filename="config-Test application.json"'),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("p",{parentName:"p"},"Template :"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "{microservice name}",\n  "modules": [\n    {\n      "module": {\n        "id": "{module id}",\n        "name": "{module name}",\n        "description": "{module description}",\n        "version": "{module version}",\n        "author": "{module author}",\n        "legalOwner": "{module owner}",\n        "documentation": "{module docu url}"\n      },\n      "configuration": [\n        {\n          "key": "{fully qualified class name}",\n          "value": "{json}"\n        }\n      ]\n    }\n  ]\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Download configuration"),(0,r.kt)("p",{parentName:"p"},"To get configuration as a link, simply pass token in URL as follow :"),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/microservice/configuration?token={bearer}")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Method")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"GET"))))}u.isMDXComponent=!0}}]);