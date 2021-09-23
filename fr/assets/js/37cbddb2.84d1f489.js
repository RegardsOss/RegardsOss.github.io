"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[77565],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},s=Object.keys(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=a.createContext({}),o=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u=function(n){var e=o(n.components);return a.createElement(p.Provider,{value:e},n.children)},g={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,p=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),d=o(t),m=r,c=d["".concat(p,".").concat(m)]||d[m]||g[m]||s;return t?a.createElement(c,l(l({ref:e},u),{},{components:t})):a.createElement(c,l({ref:e},u))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,l=new Array(s);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:r,l[1]=i;for(var o=2;o<s;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87341:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),l=["components"],i={id:"backend-processing-plugins",title:"REGARDS Processing Plugin API",sidebar_label:"Processing",slug:"/development/backend/processing/plugins/"},p=void 0,o={unversionedId:"development/backend/regards/processing/plugins/backend-processing-plugins",id:"version-1.4.0/development/backend/regards/processing/plugins/backend-processing-plugins",isDocsHomePage:!1,title:"REGARDS Processing Plugin API",description:"GET /processplugins/config",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/processing/plugins/rights-plugin-configuration-api.md",sourceDirName:"development/backend/regards/processing/plugins",slug:"/development/backend/processing/plugins/",permalink:"/fr/docs/1.4.0/development/backend/processing/plugins/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/processing/plugins/rights-plugin-configuration-api.md",tags:[],version:"1.4.0",frontMatter:{id:"backend-processing-plugins",title:"REGARDS Processing Plugin API",sidebar_label:"Processing",slug:"/development/backend/processing/plugins/"},sidebar:"version-1.4.0/dev",previous:{title:"Open",permalink:"/fr/docs/1.4.0/development/backend/processing/api/open/"},next:{title:"Overview",permalink:"/fr/docs/1.4.0/development/backend/storage/overview/"}},u=[{value:"GET /processplugins/config",id:"get-processpluginsconfig",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Responses",id:"responses",children:[]}]},{value:"POST /processplugins/config",id:"post-processpluginsconfig",children:[{value:"Request",id:"request",children:[]},{value:"Responses",id:"responses-1",children:[]}]},{value:"GET /processplugins/config/{processBusinessId}",id:"get-processpluginsconfigprocessbusinessid",children:[{value:"Parameters",id:"parameters-2",children:[]},{value:"Responses",id:"responses-2",children:[]}]},{value:"PUT /processplugins/config/{processBusinessId}",id:"put-processpluginsconfigprocessbusinessid",children:[{value:"Parameters",id:"parameters-3",children:[]},{value:"Responses",id:"responses-3",children:[]}]},{value:"DELETE /processplugins/config/{processBusinessId}",id:"delete-processpluginsconfigprocessbusinessid",children:[{value:"Parameters",id:"parameters-4",children:[]},{value:"Responses",id:"responses-4",children:[]}]},{value:"PUT /processplugins/config/{processBusinessId}?userRole={role}",id:"put-processpluginsconfigprocessbusinessiduserrolerole",children:[{value:"Parameters",id:"parameters-5",children:[]},{value:"Responses",id:"responses-5",children:[]}]},{value:"POST /processplugins/fordatasets",id:"post-processpluginsfordatasets",children:[{value:"Request",id:"request-1",children:[]},{value:"Responses",id:"responses-6",children:[]}]},{value:"GET /processplugins/linkprocessdataset/{datasetIpId}",id:"get-processpluginslinkprocessdatasetdatasetipid",children:[{value:"Parameters",id:"parameters-6",children:[]},{value:"Responses",id:"responses-7",children:[]}]},{value:"PUT /processplugins/linkprocessdataset/{datasetIpId}",id:"put-processpluginslinkprocessdatasetdatasetipid",children:[{value:"Request",id:"request-2",children:[]},{value:"Responses",id:"responses-8",children:[]}]},{value:"GET /processplugins/metadata",id:"get-processpluginsmetadata",children:[{value:"Responses",id:"responses-9",children:[]}]}],g={toc:u};function d(n){var e=n.components,t=(0,r.Z)(n,l);return(0,s.kt)("wrapper",(0,a.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-processpluginsconfig"},"GET /processplugins/config"),(0,s.kt)("p",null,"Allows to list existing plugin configurations corresponding to defined processes."),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"processNameLike"),(0,s.kt)("td",{parentName:"tr",align:null},"query"),(0,s.kt)("td",{parentName:"tr",align:null},"A regexp matching the process names / plugin configuration labels to return"),(0,s.kt)("td",{parentName:"tr",align:null},"No"),(0,s.kt)("td",{parentName:"tr",align:null},"string")))),(0,s.kt)("h3",{id:"responses"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"post-processpluginsconfig"},"POST /processplugins/config"),(0,s.kt)("p",null,"Allows to create a new process / plugin configuration."),(0,s.kt)("h3",{id:"request"},"Request"),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("p",null,"Not applicable."),(0,s.kt)("h4",{id:"body"},"Body"),(0,s.kt)("p",null,"Sample body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pluginConfiguration": {\n    "id": 0,\n    "metaData": {\n      "pluginClassName": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "author": "string",\n      "pluginId": "string",\n      "version": "string",\n      "description": "string",\n      "markdown": "string",\n      "url": "string",\n      "contact": "string",\n      "owner": "string",\n      "license": "string",\n      "parameters": [\n        {\n          "name": "string",\n          "keyLabel": "string",\n          "label": "string",\n          "description": "string",\n          "markdown": "string",\n          "parameterizedSubTypes": [\n            "STRING"\n          ],\n          "type": "STRING",\n          "pluginType": "string",\n          "defaultValue": "string",\n          "optional": true,\n          "sensitive": true,\n          "unconfigurable": true,\n          "sensible": true\n        }\n      ],\n      "licence": "string"\n    },\n    "pluginId": "string",\n    "label": "string",\n    "businessId": "string",\n    "version": "string",\n    "priorityOrder": 0,\n    "active": true,\n    "parameters": [\n      {\n        "dynamic": true,\n        "name": "string",\n        "value": {},\n        "type": "STRING"\n      }\n    ],\n    "iconUrl": "string",\n    "interfaceNames": [\n      "string"\n    ],\n    "isActive": true,\n    "pluginClassName": "string",\n    "identifiable": true\n  },\n  "rights": {\n    "role": "string",\n    "datasets": [\n      {}\n    ],\n    "linkedToAllDatasets": true\n  }\n}\n')),(0,s.kt)("h3",{id:"responses-1"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"get-processpluginsconfigprocessbusinessid"},"GET /processplugins/config/{processBusinessId}"),(0,s.kt)("p",null,"Access to a process / plugin configuration from its business UUID."),(0,s.kt)("h3",{id:"parameters-2"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"processBusinessId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The plugin business ID"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string (uuid)")))),(0,s.kt)("h3",{id:"responses-2"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"put-processpluginsconfigprocessbusinessid"},"PUT /processplugins/config/{processBusinessId}"),(0,s.kt)("p",null,"Update a process / plugin configuration for the given business ID."),(0,s.kt)("h3",{id:"parameters-3"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"processBusinessId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string (uuid)")))),(0,s.kt)("h3",{id:"responses-3"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"delete-processpluginsconfigprocessbusinessid"},"DELETE /processplugins/config/{processBusinessId}"),(0,s.kt)("p",null,"Delete a process / plugin configuration given from its business ID."),(0,s.kt)("h3",{id:"parameters-4"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"processBusinessId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string (uuid)")))),(0,s.kt)("h3",{id:"responses-4"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"put-processpluginsconfigprocessbusinessiduserrolerole"},"PUT /processplugins/config/{processBusinessId}?userRole={role}"),(0,s.kt)("h3",{id:"parameters-5"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"processBusinessId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string (uuid)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"userRole"),(0,s.kt)("td",{parentName:"tr",align:null},"query"),(0,s.kt)("td",{parentName:"tr",align:null},"The new minimal user role for this process / plugin configuration"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string")))),(0,s.kt)("h3",{id:"responses-5"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"post-processpluginsfordatasets"},"POST /processplugins/fordatasets"),(0,s.kt)("p",null,"List all the processes attached to the given datasets, grouped by dataset."),(0,s.kt)("h3",{id:"request-1"},"Request"),(0,s.kt)("h4",{id:"body-1"},"Body"),(0,s.kt)("p",null,"The body is a list of dataset URNs."),(0,s.kt)("p",null,"Sample body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "URN:DATASET:...",\n  "URN:DATASET:..."\n]\n')),(0,s.kt)("h3",{id:"responses-6"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "URN:DATASET:...": [\n    {\n      "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "label": "string"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"get-processpluginslinkprocessdatasetdatasetipid"},"GET /processplugins/linkprocessdataset/{datasetIpId}"),(0,s.kt)("p",null,"Find processes attached to the given dataset."),(0,s.kt)("h3",{id:"parameters-6"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"datasetIpId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The dataset identifier (URN)"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string")))),(0,s.kt)("h3",{id:"responses-7"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "label": "string"\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"put-processpluginslinkprocessdatasetdatasetipid"},"PUT /processplugins/linkprocessdataset/{datasetIpId}"),(0,s.kt)("p",null,"Attach the given dataset (as a URL path param) to all the given processes\n(as a list of process business IDs in the request body)."),(0,s.kt)("h3",{id:"request-2"},"Request"),(0,s.kt)("h4",{id:"parameters-7"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"datasetIpId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The dataset ID (URN)"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string")))),(0,s.kt)("h4",{id:"body-2"},"Body"),(0,s.kt)("p",null,"Sample body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "87f0f7c2-5d89-4b37-bf02-6439f927ceca",\n  "b51e4aef-447f-43c5-ae35-2b9de55bfa89"\n]\n')),(0,s.kt)("h3",{id:"responses-8"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"get-processpluginsmetadata"},"GET /processplugins/metadata"),(0,s.kt)("p",null,"Get the list of process plugins found on the classpath."),(0,s.kt)("h3",{id:"responses-9"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginClassName": "string",\n    "interfaceNames": [\n      "string"\n    ],\n    "author": "string",\n    "pluginId": "string",\n    "version": "string",\n    "description": "string",\n    "markdown": "string",\n    "url": "string",\n    "contact": "string",\n    "owner": "string",\n    "license": "string",\n    "parameters": [\n      {\n        "name": "string",\n        "keyLabel": "string",\n        "label": "string",\n        "description": "string",\n        "markdown": "string",\n        "parameterizedSubTypes": [\n          "STRING"\n        ],\n        "type": "STRING",\n        "pluginType": "string",\n        "defaultValue": "string",\n        "optional": true,\n        "unconfigurable": true,\n        "sensible": true\n      }\n    ]\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')))}d.isMDXComponent=!0}}]);