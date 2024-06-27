"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[10851],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={id:"backend-fem-configuration-api",title:"Feature Manager configuration API",sidebar_label:"Feature Manager configuration",slug:"/development/backend/services/fem/api/configuration/"},i=void 0,p={unversionedId:"development/backend/regards/fem/api/backend-fem-configuration-api",id:"version-1.14/development/backend/regards/fem/api/backend-fem-configuration-api",title:"Feature Manager configuration API",description:"Feature Manager configuration",source:"@site/versioned_docs/version-1.14/development/backend/regards/fem/api/feature-management-configuration.md",sourceDirName:"development/backend/regards/fem/api",slug:"/development/backend/services/fem/api/configuration/",permalink:"/docs/1.14/development/backend/services/fem/api/configuration/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/fem/api/feature-management-configuration.md",tags:[],version:"1.14",frontMatter:{id:"backend-fem-configuration-api",title:"Feature Manager configuration API",sidebar_label:"Feature Manager configuration",slug:"/development/backend/services/fem/api/configuration/"},sidebar:"dev",previous:{title:"API",permalink:"/docs/1.14/development/backend/services/fem/api-swagger"},next:{title:"Feature Manager REST",permalink:"/docs/1.14/development/backend/services/fem/api/rest/"}},l={},u=[{value:"Feature Manager configuration",id:"feature-manager-configuration",level:2},{value:"Import configuration",id:"import-configuration",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Example of configuration file to import",id:"example-of-configuration-file-to-import",level:4},{value:"Export configuration",id:"export-configuration",level:3},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Download configuration",id:"download-configuration",level:3}],s={toc:u},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"feature-manager-configuration"},"Feature Manager configuration"),(0,a.kt)("p",null,"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Be careful, import will overwrite an existing plugin configuration with same ",(0,a.kt)("inlineCode",{parentName:"p"},"business id"),".")),(0,a.kt)("h3",{id:"import-configuration"},"Import configuration"),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL template")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Headers")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Data params")),(0,a.kt)("p",null,"Import your configuration file in multipart request using name ",(0,a.kt)("inlineCode",{parentName:"p"},"file"),"."),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Code:")," 201 CREATED")),(0,a.kt)("h4",{id:"example-of-configuration-file-to-import"},"Example of configuration file to import"),(0,a.kt)("p",null,"Value between brackets must be adapted!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-fem",\n  "modules": [\n    {\n      "module": {\n        "id": "featureprovider",\n        "name": "Feature provider management module",\n        "description": "GeoJSON catalog provider",\n        "version": "1.4.0",\n        "author": "REGARDS",\n        "legalOwner": "CNES",\n        "documentation": "https://github.com/RegardsOss"\n      },\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DataTypeFeatureFactoryPlugin",\n            "label": "{My project feature factory}",\n            "businessId": "{MyProjectFeatureFactory}",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "model",\n                "type": "STRING",\n                "value": "{modelName}"\n              },\n              {\n                "name": "configDirectory",\n                "type": "STRING",\n                "value": "{/input}"\n              }\n            ]\n          }\n        }\n      ]\n    },\n    {\n      "module": {\n        "id": "feature",\n        "name": "Feature management module",\n        "description": "GeoJSON catalog manager",\n        "version": "1.4.0",\n        "author": "REGARDS",\n        "legalOwner": "CNES",\n        "documentation": "https://github.com/RegardsOss"\n      },\n      "resetBeforeImport": true,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.dump.domain.DumpSettings",\n          "value": {\n            "id": 0,\n            "activeModule": true,\n            "cronTrigger": "0 0 0 1-7 * SUN"\n          }\n        },\n        {\n          "key": "fr.cnes.regards.modules.feature.domain.settings.FeatureNotificationSettings",\n          "value": {\n            "id": 0,\n            "activeNotification": true\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("h3",{id:"export-configuration"},"Export configuration"),(0,a.kt)("h3",{id:"request-1"},"Request"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL template")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Headers")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Data params")),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"response-1"},"Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Headers:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'Content-Disposition:attachment; filename="config-Test application.json"'),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content:")),(0,a.kt)("p",null,"Template :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "{microservice name}",\n  "modules": [\n    {\n      "module": {\n        "id": "{module id}",\n        "name": "{module name}",\n        "description": "{module description}",\n        "version": "{module version}",\n        "author": "{module author}",\n        "legalOwner": "{module owner}",\n        "documentation": "{module docu url}"\n      },\n      "configuration": [\n        {\n          "key": "{fully qualified class name}",\n          "value": "{json}"\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("h3",{id:"download-configuration"},"Download configuration"),(0,a.kt)("p",null,"To get configuration as a link, simply pass token in URL as follow :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration?token={bearer}")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET")))}c.isMDXComponent=!0}}]);