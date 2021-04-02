(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{2708:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),c=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=c(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},g=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),o=c(t),g=a,d=o["".concat(l,".").concat(g)]||o[g]||u[g]||s;return t?r.a.createElement(d,i(i({ref:n},p),{},{components:t})):r.a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=g;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=t[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},642:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return c}));var a=t(3),r=t(7),s=(t(0),t(2708)),l={id:"backend-processing-plugins",title:"REGARDS Processing Plugin API",sidebar_label:"Processing",slug:"/development/backend/processing/plugins/"},i={unversionedId:"development/backend/regards/processing/plugins/backend-processing-plugins",id:"version-1.4.0/development/backend/regards/processing/plugins/backend-processing-plugins",isDocsHomePage:!1,title:"REGARDS Processing Plugin API",description:"GET /processplugins/config",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/processing/plugins/rights-plugin-configuration-api.md",slug:"/development/backend/processing/plugins/",permalink:"/fr/docs/1.4.0/development/backend/processing/plugins/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/processing/plugins/rights-plugin-configuration-api.md",version:"1.4.0",sidebar_label:"Processing",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS Processing Open API",permalink:"/fr/docs/1.4.0/development/backend/processing/api/open/"},next:{title:"REGARDS storage microservice",permalink:"/fr/docs/1.4.0/development/backend/storage/overview/"}},b=[{value:"GET /processplugins/config",id:"get-processpluginsconfig",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Responses",id:"responses",children:[]}]},{value:"POST /processplugins/config",id:"post-processpluginsconfig",children:[{value:"Request",id:"request",children:[]},{value:"Responses",id:"responses-1",children:[]}]},{value:"GET /processplugins/config/{processBusinessId}",id:"get-processpluginsconfigprocessbusinessid",children:[{value:"Parameters",id:"parameters-2",children:[]},{value:"Responses",id:"responses-2",children:[]}]},{value:"PUT /processplugins/config/{processBusinessId}",id:"put-processpluginsconfigprocessbusinessid",children:[{value:"Parameters",id:"parameters-3",children:[]},{value:"Responses",id:"responses-3",children:[]}]},{value:"DELETE /processplugins/config/{processBusinessId}",id:"delete-processpluginsconfigprocessbusinessid",children:[{value:"Parameters",id:"parameters-4",children:[]},{value:"Responses",id:"responses-4",children:[]}]},{value:"PUT /processplugins/config/{processBusinessId}?userRole={role}",id:"put-processpluginsconfigprocessbusinessiduserrolerole",children:[{value:"Parameters",id:"parameters-5",children:[]},{value:"Responses",id:"responses-5",children:[]}]},{value:"POST /processplugins/fordatasets",id:"post-processpluginsfordatasets",children:[{value:"Request",id:"request-1",children:[]},{value:"Responses",id:"responses-6",children:[]}]},{value:"GET /processplugins/linkprocessdataset/{datasetIpId}",id:"get-processpluginslinkprocessdatasetdatasetipid",children:[{value:"Parameters",id:"parameters-6",children:[]},{value:"Responses",id:"responses-7",children:[]}]},{value:"PUT /processplugins/linkprocessdataset/{datasetIpId}",id:"put-processpluginslinkprocessdatasetdatasetipid",children:[{value:"Request",id:"request-2",children:[]},{value:"Responses",id:"responses-8",children:[]}]},{value:"GET /processplugins/metadata",id:"get-processpluginsmetadata",children:[{value:"Responses",id:"responses-9",children:[]}]}],p={toc:b};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"get-processpluginsconfig"},"GET /processplugins/config"),Object(s.b)("p",null,"Allows to list existing plugin configurations corresponding to defined processes."),Object(s.b)("h3",{id:"parameters"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Name"),Object(s.b)("th",{parentName:"tr",align:null},"Located in"),Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"Required"),Object(s.b)("th",{parentName:"tr",align:null},"Schema"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"processNameLike"),Object(s.b)("td",{parentName:"tr",align:null},"query"),Object(s.b)("td",{parentName:"tr",align:null},"A regexp matching the process names / plugin configuration labels to return"),Object(s.b)("td",{parentName:"tr",align:null},"No"),Object(s.b)("td",{parentName:"tr",align:null},"string")))),Object(s.b)("h3",{id:"responses"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),Object(s.b)("p",null,"Sample 500 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),Object(s.b)("h2",{id:"post-processpluginsconfig"},"POST /processplugins/config"),Object(s.b)("p",null,"Allows to create a new process / plugin configuration."),Object(s.b)("h3",{id:"request"},"Request"),Object(s.b)("h4",{id:"parameters-1"},"Parameters"),Object(s.b)("p",null,"Not applicable."),Object(s.b)("h4",{id:"body"},"Body"),Object(s.b)("p",null,"Sample body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "pluginConfiguration": {\n    "id": 0,\n    "metaData": {\n      "pluginClassName": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "author": "string",\n      "pluginId": "string",\n      "version": "string",\n      "description": "string",\n      "markdown": "string",\n      "url": "string",\n      "contact": "string",\n      "owner": "string",\n      "license": "string",\n      "parameters": [\n        {\n          "name": "string",\n          "keyLabel": "string",\n          "label": "string",\n          "description": "string",\n          "markdown": "string",\n          "parameterizedSubTypes": [\n            "STRING"\n          ],\n          "type": "STRING",\n          "pluginType": "string",\n          "defaultValue": "string",\n          "optional": true,\n          "sensitive": true,\n          "unconfigurable": true,\n          "sensible": true\n        }\n      ],\n      "licence": "string"\n    },\n    "pluginId": "string",\n    "label": "string",\n    "businessId": "string",\n    "version": "string",\n    "priorityOrder": 0,\n    "active": true,\n    "parameters": [\n      {\n        "dynamic": true,\n        "name": "string",\n        "value": {},\n        "type": "STRING"\n      }\n    ],\n    "iconUrl": "string",\n    "interfaceNames": [\n      "string"\n    ],\n    "isActive": true,\n    "pluginClassName": "string",\n    "identifiable": true\n  },\n  "rights": {\n    "role": "string",\n    "datasets": [\n      {}\n    ],\n    "linkedToAllDatasets": true\n  }\n}\n')),Object(s.b)("h3",{id:"responses-1"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),Object(s.b)("p",null,"Sample 500 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),Object(s.b)("h2",{id:"get-processpluginsconfigprocessbusinessid"},"GET /processplugins/config/{processBusinessId}"),Object(s.b)("p",null,"Access to a process / plugin configuration from its business UUID."),Object(s.b)("h3",{id:"parameters-2"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Name"),Object(s.b)("th",{parentName:"tr",align:null},"Located in"),Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"Required"),Object(s.b)("th",{parentName:"tr",align:null},"Schema"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"processBusinessId"),Object(s.b)("td",{parentName:"tr",align:null},"path"),Object(s.b)("td",{parentName:"tr",align:null},"The plugin business ID"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"string (uuid)")))),Object(s.b)("h3",{id:"responses-2"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),Object(s.b)("p",null,"Sample 500 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),Object(s.b)("h2",{id:"put-processpluginsconfigprocessbusinessid"},"PUT /processplugins/config/{processBusinessId}"),Object(s.b)("p",null,"Update a process / plugin configuration for the given business ID."),Object(s.b)("h3",{id:"parameters-3"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Name"),Object(s.b)("th",{parentName:"tr",align:null},"Located in"),Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"Required"),Object(s.b)("th",{parentName:"tr",align:null},"Schema"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"processBusinessId"),Object(s.b)("td",{parentName:"tr",align:null},"path"),Object(s.b)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"string (uuid)")))),Object(s.b)("h3",{id:"responses-3"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),Object(s.b)("p",null,"Sample 500 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),Object(s.b)("h2",{id:"delete-processpluginsconfigprocessbusinessid"},"DELETE /processplugins/config/{processBusinessId}"),Object(s.b)("p",null,"Delete a process / plugin configuration given from its business ID."),Object(s.b)("h3",{id:"parameters-4"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Name"),Object(s.b)("th",{parentName:"tr",align:null},"Located in"),Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"Required"),Object(s.b)("th",{parentName:"tr",align:null},"Schema"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"processBusinessId"),Object(s.b)("td",{parentName:"tr",align:null},"path"),Object(s.b)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"string (uuid)")))),Object(s.b)("h3",{id:"responses-4"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},"")),Object(s.b)("p",null,"Sample 500 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),Object(s.b)("h2",{id:"put-processpluginsconfigprocessbusinessiduserrolerole"},"PUT /processplugins/config/{processBusinessId}?userRole={role}"),Object(s.b)("h3",{id:"parameters-5"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Name"),Object(s.b)("th",{parentName:"tr",align:null},"Located in"),Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"Required"),Object(s.b)("th",{parentName:"tr",align:null},"Schema"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"processBusinessId"),Object(s.b)("td",{parentName:"tr",align:null},"path"),Object(s.b)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"string (uuid)")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"userRole"),Object(s.b)("td",{parentName:"tr",align:null},"query"),Object(s.b)("td",{parentName:"tr",align:null},"The new minimal user role for this process / plugin configuration"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"string")))),Object(s.b)("h3",{id:"responses-5"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},"")),Object(s.b)("p",null,"Sample 500 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),Object(s.b)("h2",{id:"post-processpluginsfordatasets"},"POST /processplugins/fordatasets"),Object(s.b)("p",null,"List all the processes attached to the given datasets, grouped by dataset."),Object(s.b)("h3",{id:"request-1"},"Request"),Object(s.b)("h4",{id:"body-1"},"Body"),Object(s.b)("p",null,"The body is a list of dataset URNs."),Object(s.b)("p",null,"Sample body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'[\n  "URN:DATASET:...",\n  "URN:DATASET:..."\n]\n')),Object(s.b)("h3",{id:"responses-6"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body: "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "URN:DATASET:...": [\n    {\n      "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "label": "string"\n    }\n  ]\n}\n')),Object(s.b)("p",null,"Sample 500 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),Object(s.b)("h2",{id:"get-processpluginslinkprocessdatasetdatasetipid"},"GET /processplugins/linkprocessdataset/{datasetIpId}"),Object(s.b)("p",null,"Find processes attached to the given dataset."),Object(s.b)("h3",{id:"parameters-6"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Name"),Object(s.b)("th",{parentName:"tr",align:null},"Located in"),Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"Required"),Object(s.b)("th",{parentName:"tr",align:null},"Schema"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"datasetIpId"),Object(s.b)("td",{parentName:"tr",align:null},"path"),Object(s.b)("td",{parentName:"tr",align:null},"The dataset identifier (URN)"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"string")))),Object(s.b)("h3",{id:"responses-7"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body: "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "label": "string"\n  }\n]\n')),Object(s.b)("p",null,"Sample 500 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),Object(s.b)("h2",{id:"put-processpluginslinkprocessdatasetdatasetipid"},"PUT /processplugins/linkprocessdataset/{datasetIpId}"),Object(s.b)("p",null,"Attach the given dataset (as a URL path param) to all the given processes\n(as a list of process business IDs in the request body)."),Object(s.b)("h3",{id:"request-2"},"Request"),Object(s.b)("h4",{id:"parameters-7"},"Parameters"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Name"),Object(s.b)("th",{parentName:"tr",align:null},"Located in"),Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"Required"),Object(s.b)("th",{parentName:"tr",align:null},"Schema"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"datasetIpId"),Object(s.b)("td",{parentName:"tr",align:null},"path"),Object(s.b)("td",{parentName:"tr",align:null},"The dataset ID (URN)"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"string")))),Object(s.b)("h4",{id:"body-2"},"Body"),Object(s.b)("p",null,"Sample body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'[\n  "87f0f7c2-5d89-4b37-bf02-6439f927ceca",\n  "b51e4aef-447f-43c5-ae35-2b9de55bfa89"\n]\n')),Object(s.b)("h3",{id:"responses-8"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body: "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},"")),Object(s.b)("p",null,"Sample 500 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),Object(s.b)("h2",{id:"get-processpluginsmetadata"},"GET /processplugins/metadata"),Object(s.b)("p",null,"Get the list of process plugins found on the classpath."),Object(s.b)("h3",{id:"responses-9"},"Responses"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"default response")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"default response")))),Object(s.b)("p",null,"Sample 200 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginClassName": "string",\n    "interfaceNames": [\n      "string"\n    ],\n    "author": "string",\n    "pluginId": "string",\n    "version": "string",\n    "description": "string",\n    "markdown": "string",\n    "url": "string",\n    "contact": "string",\n    "owner": "string",\n    "license": "string",\n    "parameters": [\n      {\n        "name": "string",\n        "keyLabel": "string",\n        "label": "string",\n        "description": "string",\n        "markdown": "string",\n        "parameterizedSubTypes": [\n          "STRING"\n        ],\n        "type": "STRING",\n        "pluginType": "string",\n        "defaultValue": "string",\n        "optional": true,\n        "unconfigurable": true,\n        "sensible": true\n      }\n    ]\n  }\n]\n')),Object(s.b)("p",null,"Sample 500 response body:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')))}c.isMDXComponent=!0}}]);