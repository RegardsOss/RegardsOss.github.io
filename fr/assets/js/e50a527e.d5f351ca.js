(window.webpackJsonp=window.webpackJsonp||[]).push([[2331],{2403:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return m}));var a=t(3),r=t(7),o=(t(0),t(2704)),p={id:"backend-fem-configuration-api",title:"Feature Manager configuration API",sidebar_label:"Feature Manager configuration",slug:"/development/backend/services/fem/api/configuration/"},i={unversionedId:"development/backend/regards/fem/api/backend-fem-configuration-api",id:"development/backend/regards/fem/api/backend-fem-configuration-api",isDocsHomePage:!1,title:"Feature Manager configuration API",description:"Feature Manager configuration",source:"@site/docs/development/backend/regards/fem/api/feature-management-configuration.md",slug:"/development/backend/services/fem/api/configuration/",permalink:"/fr/docs/development/backend/services/fem/api/configuration/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/api/feature-management-configuration.md",version:"current",sidebar_label:"Feature Manager configuration",sidebar:"dev",previous:{title:"REGARDS feature management microservice",permalink:"/fr/docs/development/backend/services/fem/overview/"},next:{title:"Feature Manager REST API",permalink:"/fr/docs/development/backend/services/fem/api/rest/"}},c=[{value:"Feature Manager configuration",id:"feature-manager-configuration",children:[]}],b={toc:c};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"feature-manager-configuration"},"Feature Manager configuration"),Object(o.b)("p",null,"In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice."),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Be careful, import will overwrite an existing plugin configuration with same ",Object(o.b)("inlineCode",{parentName:"p"},"business id"),"."))),Object(o.b)("p",null,Object(o.b)("h3",{parentName:"p"},"Import configuration"),Object(o.b)("h3",{parentName:"p"},"Request"),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"URL")),Object(o.b)("p",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"URL template")),Object(o.b)("p",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"p"},"POST")),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"Headers")),Object(o.b)("p",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Accept:application/json")),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"Data params")),Object(o.b)("p",{parentName:"p"},"Import your configuration file in multipart request using name ",Object(o.b)("inlineCode",{parentName:"p"},"file"),"."),Object(o.b)("h3",{parentName:"p"},"Response"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Code:")," 201 CREATED"))),Object(o.b)("h4",{id:"example-of-configuration-file-to-import"},"Example of configuration file to import"),Object(o.b)("p",null,"Value between brackets must be adapted!"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-fem",\n  "modules": [\n    {\n      "module": {\n        "id": "featureprovider",\n        "name": "Feature provider management module",\n        "description": "GeoJSON catalog provider",\n        "version": "1.4.0",\n        "author": "REGARDS",\n        "legalOwner": "CNES",\n        "documentation": "https://github.com/RegardsOss"\n      },\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n          "value": {\n            "pluginId": "DataTypeFeatureFactoryPlugin",\n            "label": "{My project feature factory}",\n            "businessId": "{MyProjectFeatureFactory}",\n            "priorityOrder": 0,\n            "active": true,\n            "parameters": [\n              {\n                "name": "model",\n                "type": "STRING",\n                "value": "{modelName}"\n              },\n              {\n                "name": "configDirectory",\n                "type": "STRING",\n                "value": "{/input}"\n              }\n            ]\n          }\n        }\n      ]\n    },\n    {\n      "module": {\n        "id": "feature",\n        "name": "Feature management module",\n        "description": "GeoJSON catalog manager",\n        "version": "1.4.0",\n        "author": "REGARDS",\n        "legalOwner": "CNES",\n        "documentation": "https://github.com/RegardsOss"\n      },\n      "resetBeforeImport": true,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.dump.domain.DumpSettings",\n          "value": {\n            "id": 0,\n            "activeModule": true,\n            "cronTrigger": "0 0 0 1-7 * SUN"\n          }\n        },\n        {\n          "key": "fr.cnes.regards.modules.feature.domain.settings.FeatureNotificationSettings",\n          "value": {\n            "id": 0,\n            "activeNotification": true\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,Object(o.b)("h3",{parentName:"p"},"Export configuration"),Object(o.b)("h3",{parentName:"p"},"Request"),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"URL")),Object(o.b)("p",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"URL template")),Object(o.b)("p",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"p"},"GET")),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"Headers")),Object(o.b)("p",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Accept:application/json")),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"Data params")),Object(o.b)("p",{parentName:"p"},"None"),Object(o.b)("h3",{parentName:"p"},"Response"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Code:")," 200 OK")),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"Headers:")),Object(o.b)("p",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type:application/json"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},'Content-Disposition:attachment; filename="config-Test application.json"'),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Expires:0"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY")),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"Content:")),Object(o.b)("p",{parentName:"p"},"Template :"),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "{microservice name}",\n  "modules": [\n    {\n      "module": {\n        "id": "{module id}",\n        "name": "{module name}",\n        "description": "{module description}",\n        "version": "{module version}",\n        "author": "{module author}",\n        "legalOwner": "{module owner}",\n        "documentation": "{module docu url}"\n      },\n      "configuration": [\n        {\n          "key": "{fully qualified class name}",\n          "value": "{json}"\n        }\n      ]\n    }\n  ]\n}\n'))),Object(o.b)("p",null,Object(o.b)("h3",{parentName:"p"},"Download configuration"),Object(o.b)("p",{parentName:"p"},"To get configuration as a link, simply pass token in URL as follow :"),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"URL")),Object(o.b)("p",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"p"},"/microservice/configuration?token={bearer}")),Object(o.b)("p",{parentName:"p"},Object(o.b)("strong",{parentName:"p"},"Method")),Object(o.b)("p",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"p"},"GET"))))}m.isMDXComponent=!0},2704:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),m=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=m(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=m(t),u=a,d=l["".concat(p,".").concat(u)]||l[u]||s[u]||o;return t?r.a.createElement(d,i(i({ref:n},b),{},{components:t})):r.a.createElement(d,i({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var b=2;b<o;b++)p[b]=t[b];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);