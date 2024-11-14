"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[56214],{64604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(74848),i=t(28453);const o={id:"backend-dataprovider-import-export",title:"Dataprovider Import/Export",sidebar_label:"Import/Export",slug:"/development/backend/services/dataprovider/configuration/import-export"},a=void 0,s={id:"development/services/dataprovider/configuration/backend-dataprovider-import-export",title:"Dataprovider Import/Export",description:"Microservices settings regroup a set of settings that are specific by tenant",source:"@site/docs/development/services/dataprovider/configuration/dataprovider-import-export.md",sourceDirName:"development/services/dataprovider/configuration",slug:"/development/backend/services/dataprovider/configuration/import-export",permalink:"/docs/development/backend/services/dataprovider/configuration/import-export",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/dataprovider/configuration/dataprovider-import-export.md",tags:[],version:"current",frontMatter:{id:"backend-dataprovider-import-export",title:"Dataprovider Import/Export",sidebar_label:"Import/Export",slug:"/development/backend/services/dataprovider/configuration/import-export"},sidebar:"dev",previous:{title:"Available plugins",permalink:"/docs/development/backend/services/dataprovider/plugins/listing"},next:{title:"Static configuration",permalink:"/docs/development/backend/services/dataprovider/configuration/static-configuration"}},d={},c=[{value:"Import/Export API",id:"importexport-api",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Microservices settings regroup a set of settings that are specific by ",(0,r.jsx)(n.a,{href:"/docs/development/concepts/multitenant/",children:"tenant"}),"\nand stored in the microservice database."]}),"\n",(0,r.jsx)(n.h2,{id:"importexport-api",children:"Import/Export API"}),"\n",(0,r.jsxs)(n.p,{children:["To configure some microservice settings for a specific tenant, you need to follow the ",(0,r.jsx)(n.a,{href:"/docs/development/services/common/common-import-export-configuration",children:"generic Import/Export service\nconfiguration guide"}),", it will help you understand the expected JSON\nfile payload that you can send to the\n",(0,r.jsx)(n.a,{href:"/docs/development/backend/services/dataprovider/api-swagger#tag/module-manager-controller/operation/importConfiguration",children:"import configuration endpoint"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This configuration can also be imported or exported\nthrough the ",(0,r.jsx)(n.a,{href:"/docs/user-guide/project-configuration/microservices/",children:"administrator UI"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"title='rs-dataprovider configuration example'",children:'{\n  "microservice": "rs-dataprovider",\n  "modules": [\n    {\n      "module": {\n        "id": "acquisition",\n        "name": "Acquisition module",\n        "description": "Data driven SIP creation",\n        "version": "1.6.0",\n        "author": "REGARDS",\n        "legalOwner": "CNES",\n        "documentation": "https://github.com/RegardsOss"\n      },\n      "resetBeforeImport": false,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.modules.acquisition.domain.chain.AcquisitionProcessingChain",\n          "value": {\n            "label": "Departements francais",\n            "active": true, // This parameter is not taken in account when importing configuration.\n            "mode": "MANUAL",\n            "periodicity": "0 * * * * *",\n            "ingestChain": "Departements", // name of the ingest chain in INGEST service\n            "storages": [ // configure storages per dataType.\n              {\n                "pluginBusinessId": "Local",\n                "storePath": "",\n                "targetTypes": [\n                  "THUMBNAIL",\n                  "RAWDATA",\n                  "DOCUMENT",\n                  "QUICKLOOK_SD",\n                  "DESCRIPTION",\n                  "AIP",\n                  "QUICKLOOK_HD",\n                  "QUICKLOOK_MD",\n                  "OTHER"\n                ]\n              }\n            ],\n            "categories": [\n              "France"\n            ],\n            "versioningMode": "INC_VERSION",\n            "fileInfos": [\n              {\n                "mandatory": true,\n                "scanPlugin": {\n                  "pluginId": "GeoJsonFeatureCollectionParserPlugin",\n                  "label": "scanPlugin-1575378375954",\n                  "businessId": "9ea15f34-9947-4a12-ae72-ecc299193a81",\n                  "version": "1.0.0-SNAPSHOT",\n                  "priorityOrder": 0,\n                  "active": true,\n                  "parameters": [\n                    {\n                      "name": "featureId",\n                      "type": "STRING",\n                      "value": "nom",\n                      "dynamic": false\n                    },\n                    {\n                      "name": "allowEmptyFeatures",\n                      "type": "BOOLEAN",\n                      "value": false,\n                      "dynamic": false\n                    }\n                  ]\n                },\n                "mimeType": "application/json",\n                "dataType": "RAWDATA",\n                "comment": "Geojson",\n                "scanDirInfo": [\n                  {\n                    "scannedDirectory": "/input/geojson/departements",\n                    "lastModificationDate": "2024-06-17T16:04:56.615919Z"\n                  }\n                ]\n              }\n            ],\n            "validationPluginConf": {\n              "pluginId": "DefaultFileValidation",\n              "label": "validationPluginConf-1575378301041",\n              "businessId": "3dbff482-346f-47e8-8845-d5e91cca7b21",\n              "version": "1.0.0-SNAPSHOT",\n              "priorityOrder": 0,\n              "active": true,\n              "parameters": []\n            },\n            "productPluginConf": {\n              "pluginId": "DefaultProductPlugin",\n              "label": "productPluginConf-1575378301041",\n              "businessId": "5fed19f6-b2e9-4f0d-b2f4-9137d60a4725",\n              "version": "1.0.0-SNAPSHOT",\n              "priorityOrder": 0,\n              "active": true,\n              "parameters": [\n                {\n                  "name": "removeExtension",\n                  "type": "BOOLEAN",\n                  "value": true,\n                  "dynamic": false\n                },\n                {\n                  "name": "extensions",\n                  "type": "COLLECTION",\n                  "value": [\n                    "json"\n                  ],\n                  "dynamic": false\n                },\n                {\n                  "name": "maxLengthRequired",\n                  "type": "BOOLEAN",\n                  "value": false,\n                  "dynamic": false\n                }\n              ]\n            },\n            "generateSipPluginConf": {\n              "pluginId": "ReadSIPFromFile",\n              "label": "generateSipPluginConf-1575378301041",\n              "businessId": "c27d965e-975a-439a-a4aa-e97b7dec6971",\n              "version": "1.0.0-SNAPSHOT",\n              "priorityOrder": 0,\n              "active": true,\n              "parameters": []\n            },\n            "productsStored": true\n          }\n        }\n      ]\n    }\n  ]\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);