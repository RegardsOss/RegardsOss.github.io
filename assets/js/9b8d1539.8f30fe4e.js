"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[52947],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,c=d["".concat(p,".").concat(m)]||d[m]||g[m]||s;return t?a.createElement(c,l(l({ref:n},u),{},{components:t})):a.createElement(c,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46918:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return g}});var a=t(83117),r=t(80102),s=(t(67294),t(3905)),l=["components"],i={id:"backend-processing-plugins",title:"REGARDS Processing Plugin API",sidebar_label:"Processing",slug:"/development/backend/services/processing/plugins/"},p=void 0,o={unversionedId:"development/backend/regards/processing/plugins/backend-processing-plugins",id:"version-1.5.0/development/backend/regards/processing/plugins/backend-processing-plugins",title:"REGARDS Processing Plugin API",description:"GET /processplugins/config",source:"@site/versioned_docs/version-1.5.0/development/backend/regards/processing/plugins/rights-plugin-configuration-api.md",sourceDirName:"development/backend/regards/processing/plugins",slug:"/development/backend/services/processing/plugins/",permalink:"/docs/1.5.0/development/backend/services/processing/plugins/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/regards/processing/plugins/rights-plugin-configuration-api.md",tags:[],version:"1.5.0",frontMatter:{id:"backend-processing-plugins",title:"REGARDS Processing Plugin API",sidebar_label:"Processing",slug:"/development/backend/services/processing/plugins/"},sidebar:"version-1.5.0/dev",previous:{title:"Open",permalink:"/docs/1.5.0/development/backend/services/processing/api/open/"},next:{title:"Overview",permalink:"/docs/1.5.0/development/backend/services/storage/overview/"}},u={},g=[{value:"GET /processplugins/config",id:"get-processpluginsconfig",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Responses",id:"responses",level:3},{value:"POST /processplugins/config",id:"post-processpluginsconfig",level:2},{value:"Request",id:"request",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Body",id:"body",level:4},{value:"Responses",id:"responses-1",level:3},{value:"GET /processplugins/config/{processBusinessId}",id:"get-processpluginsconfigprocessbusinessid",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Responses",id:"responses-2",level:3},{value:"PUT /processplugins/config/{processBusinessId}",id:"put-processpluginsconfigprocessbusinessid",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Responses",id:"responses-3",level:3},{value:"DELETE /processplugins/config/{processBusinessId}",id:"delete-processpluginsconfigprocessbusinessid",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Responses",id:"responses-4",level:3},{value:"PUT /processplugins/config/{processBusinessId}?userRole={role}",id:"put-processpluginsconfigprocessbusinessiduserrolerole",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Responses",id:"responses-5",level:3},{value:"POST /processplugins/fordatasets",id:"post-processpluginsfordatasets",level:2},{value:"Request",id:"request-1",level:3},{value:"Body",id:"body-1",level:4},{value:"Responses",id:"responses-6",level:3},{value:"GET /processplugins/linkprocessdataset/{datasetIpId}",id:"get-processpluginslinkprocessdatasetdatasetipid",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Responses",id:"responses-7",level:3},{value:"PUT /processplugins/linkprocessdataset/{datasetIpId}",id:"put-processpluginslinkprocessdatasetdatasetipid",level:2},{value:"Request",id:"request-2",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Body",id:"body-2",level:4},{value:"Responses",id:"responses-8",level:3},{value:"GET /processplugins/metadata",id:"get-processpluginsmetadata",level:2},{value:"Responses",id:"responses-9",level:3}],d={toc:g};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-processpluginsconfig"},"GET /processplugins/config"),(0,s.kt)("p",null,"Allows to list existing plugin configurations corresponding to defined processes."),(0,s.kt)("h3",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"processNameLike"),(0,s.kt)("td",{parentName:"tr",align:null},"query"),(0,s.kt)("td",{parentName:"tr",align:null},"A regexp matching the process names / plugin configuration labels to return"),(0,s.kt)("td",{parentName:"tr",align:null},"No"),(0,s.kt)("td",{parentName:"tr",align:null},"string")))),(0,s.kt)("h3",{id:"responses"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"post-processpluginsconfig"},"POST /processplugins/config"),(0,s.kt)("p",null,"Allows to create a new process / plugin configuration."),(0,s.kt)("h3",{id:"request"},"Request"),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("p",null,"Not applicable."),(0,s.kt)("h4",{id:"body"},"Body"),(0,s.kt)("p",null,"Sample body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pluginConfiguration": {\n    "id": 0,\n    "metaData": {\n      "pluginClassName": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "author": "string",\n      "pluginId": "string",\n      "version": "string",\n      "description": "string",\n      "markdown": "string",\n      "url": "string",\n      "contact": "string",\n      "owner": "string",\n      "license": "string",\n      "parameters": [\n        {\n          "name": "string",\n          "keyLabel": "string",\n          "label": "string",\n          "description": "string",\n          "markdown": "string",\n          "parameterizedSubTypes": [\n            "STRING"\n          ],\n          "type": "STRING",\n          "pluginType": "string",\n          "defaultValue": "string",\n          "optional": true,\n          "sensitive": true,\n          "unconfigurable": true,\n          "sensible": true\n        }\n      ],\n      "licence": "string"\n    },\n    "pluginId": "string",\n    "label": "string",\n    "businessId": "string",\n    "version": "string",\n    "priorityOrder": 0,\n    "active": true,\n    "parameters": [\n      {\n        "dynamic": true,\n        "name": "string",\n        "value": {},\n        "type": "STRING"\n      }\n    ],\n    "iconUrl": "string",\n    "interfaceNames": [\n      "string"\n    ],\n    "isActive": true,\n    "pluginClassName": "string",\n    "identifiable": true\n  },\n  "rights": {\n    "role": "string",\n    "datasets": [\n      {}\n    ],\n    "linkedToAllDatasets": true\n  }\n}\n')),(0,s.kt)("h3",{id:"responses-1"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"get-processpluginsconfigprocessbusinessid"},"GET /processplugins/config/{processBusinessId}"),(0,s.kt)("p",null,"Access to a process / plugin configuration from its business UUID."),(0,s.kt)("h3",{id:"parameters-2"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"processBusinessId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The plugin business ID"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string (uuid)")))),(0,s.kt)("h3",{id:"responses-2"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"put-processpluginsconfigprocessbusinessid"},"PUT /processplugins/config/{processBusinessId}"),(0,s.kt)("p",null,"Update a process / plugin configuration for the given business ID."),(0,s.kt)("h3",{id:"parameters-3"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"processBusinessId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string (uuid)")))),(0,s.kt)("h3",{id:"responses-3"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginConfiguration": {\n      "id": 0,\n      "metaData": {\n        "pluginClassName": "string",\n        "interfaceNames": [\n          "string"\n        ],\n        "author": "string",\n        "pluginId": "string",\n        "version": "string",\n        "description": "string",\n        "markdown": "string",\n        "url": "string",\n        "contact": "string",\n        "owner": "string",\n        "license": "string",\n        "parameters": [\n          {\n            "name": "string",\n            "keyLabel": "string",\n            "label": "string",\n            "description": "string",\n            "markdown": "string",\n            "parameterizedSubTypes": [\n              "STRING"\n            ],\n            "type": "STRING",\n            "pluginType": "string",\n            "defaultValue": "string",\n            "optional": true,\n            "unconfigurable": true,\n            "sensible": true\n          }\n        ]\n      },\n      "pluginId": "string",\n      "label": "string",\n      "businessId": "string",\n      "version": "string",\n      "priorityOrder": 0,\n      "active": true,\n      "parameters": [\n        {\n          "dynamic": true,\n          "name": "string",\n          "value": {},\n          "type": "STRING"\n        }\n      ],\n      "iconUrl": "string",\n      "interfaceNames": [\n        "string"\n      ],\n      "pluginClassName": "string",\n      "identifiable": true\n    },\n    "rights": {\n      "role": "string",\n      "datasets": [\n        {}\n      ],\n      "linkedToAllDatasets": true\n    },\n    "links": [\n      {\n        "rel": "string",\n        "href": "string",\n        "hreflang": "string",\n        "media": "string",\n        "title": "string",\n        "type": "string",\n        "deprecation": "string",\n        "profile": "string",\n        "name": "string"\n      }\n    ]\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"delete-processpluginsconfigprocessbusinessid"},"DELETE /processplugins/config/{processBusinessId}"),(0,s.kt)("p",null,"Delete a process / plugin configuration given from its business ID."),(0,s.kt)("h3",{id:"parameters-4"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"processBusinessId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string (uuid)")))),(0,s.kt)("h3",{id:"responses-4"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"put-processpluginsconfigprocessbusinessiduserrolerole"},"PUT /processplugins/config/{processBusinessId}?userRole={role}"),(0,s.kt)("h3",{id:"parameters-5"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"processBusinessId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The process / plugin configuration business ID"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string (uuid)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"userRole"),(0,s.kt)("td",{parentName:"tr",align:null},"query"),(0,s.kt)("td",{parentName:"tr",align:null},"The new minimal user role for this process / plugin configuration"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string")))),(0,s.kt)("h3",{id:"responses-5"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"post-processpluginsfordatasets"},"POST /processplugins/fordatasets"),(0,s.kt)("p",null,"List all the processes attached to the given datasets, grouped by dataset."),(0,s.kt)("h3",{id:"request-1"},"Request"),(0,s.kt)("h4",{id:"body-1"},"Body"),(0,s.kt)("p",null,"The body is a list of dataset URNs."),(0,s.kt)("p",null,"Sample body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "URN:DATASET:...",\n  "URN:DATASET:..."\n]\n')),(0,s.kt)("h3",{id:"responses-6"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "URN:DATASET:...": [\n    {\n      "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "label": "string"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"get-processpluginslinkprocessdatasetdatasetipid"},"GET /processplugins/linkprocessdataset/{datasetIpId}"),(0,s.kt)("p",null,"Find processes attached to the given dataset."),(0,s.kt)("h3",{id:"parameters-6"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"datasetIpId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The dataset identifier (URN)"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string")))),(0,s.kt)("h3",{id:"responses-7"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "processBusinessId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "label": "string"\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"put-processpluginslinkprocessdatasetdatasetipid"},"PUT /processplugins/linkprocessdataset/{datasetIpId}"),(0,s.kt)("p",null,"Attach the given dataset (as a URL path param) to all the given processes\n(as a list of process business IDs in the request body)."),(0,s.kt)("h3",{id:"request-2"},"Request"),(0,s.kt)("h4",{id:"parameters-7"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Located in"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"datasetIpId"),(0,s.kt)("td",{parentName:"tr",align:null},"path"),(0,s.kt)("td",{parentName:"tr",align:null},"The dataset ID (URN)"),(0,s.kt)("td",{parentName:"tr",align:null},"Yes"),(0,s.kt)("td",{parentName:"tr",align:null},"string")))),(0,s.kt)("h4",{id:"body-2"},"Body"),(0,s.kt)("p",null,"Sample body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  "87f0f7c2-5d89-4b37-bf02-6439f927ceca",\n  "b51e4aef-447f-43c5-ae35-2b9de55bfa89"\n]\n')),(0,s.kt)("h3",{id:"responses-8"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"")),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')),(0,s.kt)("h2",{id:"get-processpluginsmetadata"},"GET /processplugins/metadata"),(0,s.kt)("p",null,"Get the list of process plugins found on the classpath."),(0,s.kt)("h3",{id:"responses-9"},"Responses"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Code"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"200"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"500"),(0,s.kt)("td",{parentName:"tr",align:null},"default response")))),(0,s.kt)("p",null,"Sample 200 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "pluginClassName": "string",\n    "interfaceNames": [\n      "string"\n    ],\n    "author": "string",\n    "pluginId": "string",\n    "version": "string",\n    "description": "string",\n    "markdown": "string",\n    "url": "string",\n    "contact": "string",\n    "owner": "string",\n    "license": "string",\n    "parameters": [\n      {\n        "name": "string",\n        "keyLabel": "string",\n        "label": "string",\n        "description": "string",\n        "markdown": "string",\n        "parameterizedSubTypes": [\n          "STRING"\n        ],\n        "type": "STRING",\n        "pluginType": "string",\n        "defaultValue": "string",\n        "optional": true,\n        "unconfigurable": true,\n        "sensible": true\n      }\n    ]\n  }\n]\n')),(0,s.kt)("p",null,"Sample 500 response body:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "message": "string",\n  "time": "2020-12-31T00:00:00Z"\n}\n')))}m.isMDXComponent=!0}}]);