/*! For license information please see 1f71b6ae.567e4dc2.js.LICENSE.txt */
(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[95664],{4353:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var n=r(58168),s=r(96540),i=r(20053);r(38193).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var a=r(28794),o=r(92303),p=r(66588),c=r(95293),m=r(55364),d=r.n(m);function u(e,t){void 0===e&&(e="theme-redoc");const r=(0,o.A)(),n="dark"===(0,c.G)().colorMode,i=(0,p.kh)("docusaurus-theme-redoc",{failfast:!0}),a=(0,p.P_)("docusaurus-theme-redoc",e)||Object.values(i)[0];return(0,s.useMemo)((()=>{const{lightTheme:e,darkTheme:s,options:i}=a,o={scrollYOffset:r||"string"!=typeof i.scrollYOffset?i.scrollYOffset:0},p=d()({...i,...o,theme:e},t),c=d()({...i,...o,theme:s},t);return{options:r&&n?c:p,darkThemeOptions:c,lightThemeOptions:p}}),[r,n,a,t])}var l=r(86025);let g=null;function y(e){return s.createElement("div",{className:"redocusaurus-styles"})}const h=function(e){const{className:t,optionsOverrides:r,...n}=e,{store:p,darkThemeOptions:m,lightThemeOptions:d,hasLogo:h}=function(e,t){let{spec:r,url:n,themeId:i}=e;const p=u(i,t),m=(0,l.A)(n,{absolute:!0}),d=(0,o.A)(),y="dark"===(0,c.G)().colorMode,h=(0,s.useMemo)((()=>(null!==g&&d&&g.dispose(),g=new a.AppStore(r,m,p.options),{...p,hasLogo:!!r.info?.["x-logo"],store:g})),[d,r,m,p]);return(0,s.useEffect)((()=>{h.store.onDidMount()}),[h,d,y]),h}(n,r);return s.createElement(s.Fragment,null,s.createElement(y,{specProps:n,lightThemeOptions:d,darkThemeOptions:m}),s.createElement("div",{className:(0,i.A)(["redocusaurus",h&&"redocusaurus-has-logo",t])},s.createElement(a.Redoc,{store:p})))};const f=function(e){const{className:t,optionsOverrides:r,spec:o,url:p,themeId:c,isSpecFile:m}=e,{options:d}=u(c,r);return o?s.createElement(h,(0,n.A)({},e,{spec:o})):s.createElement("div",{className:(0,i.A)(["redocusaurus",t])},s.createElement(a.RedocStandalone,{specUrl:p,options:d}))}},70082:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(58168),s=(r(96540),r(15680)),i=r(4353);const a=JSON.parse('{"components":{"schemas":{"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginConfiguration":{"properties":{"content":{"$ref":"#/components/schemas/PluginConfiguration"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginMetaData":{"properties":{"content":{"$ref":"#/components/schemas/PluginMetaData"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelString":{"properties":{"content":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"IPluginParam":{"properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"value":{"type":"object"}},"type":"object"},"ISipState":{"properties":{"name":{"type":"string"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"Pageable":{"properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedResourcesAssemblerAcquisitionFile":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"PagedResourcesAssemblerAcquisitionProcessingChain":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"PagedResourcesAssemblerAcquisitionProcessingChainMonitor":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"PagedResourcesAssemblerProduct":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"PluginConfiguration":{"properties":{"active":{"type":"boolean"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"iconUrl":{"format":"url","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"isActive":{"type":"boolean","writeOnly":true},"label":{"type":"string"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"parameters":{"items":{"$ref":"#/components/schemas/IPluginParam"},"type":"array","uniqueItems":true},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"priorityOrder":{"format":"int32","type":"integer"},"version":{"type":"string"}},"required":["label","priorityOrder"],"type":"object"},"PluginMetaData":{"properties":{"author":{"type":"string"},"contact":{"type":"string"},"description":{"type":"string"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"licence":{"type":"string","writeOnly":true},"license":{"type":"string"},"markdown":{"type":"string"},"owner":{"type":"string"},"parameters":{"items":{"$ref":"#/components/schemas/PluginParamDescriptor"},"type":"array"},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"url":{"type":"string"},"userMarkdown":{"type":"string"},"version":{"type":"string"}},"type":"object"},"PluginParamDescriptor":{"properties":{"defaultValue":{"type":"string"},"description":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"markdown":{"type":"string"},"name":{"type":"string"},"optional":{"type":"boolean"},"parameterizedSubTypes":{"items":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"type":"array"},"pluginType":{"type":"string"},"sensible":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"unconfigurable":{"type":"boolean"},"userMarkdown":{"type":"string"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"UpdateAcquisitionProcessingChain":{"properties":{"active":{"type":"boolean"},"mode":{"enum":["MANUAL","AUTO"],"type":"string"},"updateType":{"enum":["ONLY_ACTIVITY","ONLY_MODE","ALL"],"type":"string"}},"type":"object"},"UpdateAcquisitionProcessingChains":{"properties":{"active":{"type":"boolean"},"chainIds":{"items":{"format":"int64","type":"integer"},"type":"array"},"mode":{"enum":["MANUAL","AUTO"],"type":"string"},"updateType":{"enum":["ONLY_ACTIVITY","ONLY_MODE","ALL"],"type":"string"}},"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Data Provider API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE DATAPROVIDER","version":"1.11.0"},"openapi":"3.0.1","paths":{"/acquisition-files":{"get":{"operationId":"search_2","parameters":[{"in":"query","name":"filePath","required":false,"schema":{"type":"string"}},{"in":"query","name":"state","required":false,"schema":{"items":{"enum":["IN_PROGRESS","VALID","INVALID","ACQUIRED","SUPERSEDED","SUPERSEDED_AFTER_ERROR","ERROR"],"type":"string"},"type":"array"}},{"in":"query","name":"productId","required":false,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"chainId","required":false,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"from","required":false,"schema":{"format":"date-time","type":"string"}},{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerAcquisitionFile"}}],"responses":{"200":{"content":{},"description":"OK"}},"tags":["acquisition-file-controller"]}},"/chain-monitoring":{"get":{"operationId":"search_1","parameters":[{"in":"query","name":"mode","required":false,"schema":{"enum":["MANUAL","AUTO"],"type":"string"}},{"in":"query","name":"running","required":false,"schema":{"type":"boolean"}},{"in":"query","name":"label","required":false,"schema":{"type":"string"}},{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerAcquisitionProcessingChainMonitor"}}],"responses":{"200":{"content":{},"description":"OK"}},"tags":["monitoring-controller"]}},"/chains":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerAcquisitionProcessingChain"}}],"responses":{"200":{"content":{},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]},"patch":{"operationId":"updateChainsStateAndMode","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/UpdateAcquisitionProcessingChains"}}},"required":true},"responses":{"200":{"content":{},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]},"post":{"operationId":"create","requestBody":{"content":{"application/json":{}},"required":true},"responses":{"200":{"content":{},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/chains/products":{"delete":{"operationId":"deleteProducts","parameters":[{"in":"query","name":"chainName","required":true,"schema":{"type":"string"}},{"in":"query","name":"session","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/chains/relaunch":{"get":{"operationId":"relaunchErrors","parameters":[{"in":"query","name":"chainName","required":true,"schema":{"type":"string"}},{"in":"query","name":"session","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/chains/{chainId}":{"delete":{"operationId":"delete","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["acquisition-processing-chain-controller"]},"get":{"operationId":"get_1","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]},"patch":{"operationId":"updateStateAndMode","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/UpdateAcquisitionProcessingChain"}}},"required":true},"responses":{"200":{"content":{},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{}},"required":true},"responses":{"200":{"content":{},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/chains/{chainId}/start":{"get":{"operationId":"startManualChain","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"session","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/chains/{chainId}/stop":{"get":{"operationId":"stopChain","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/plugins":{"get":{"operationId":"getPlugins","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/cache":{"delete":{"operationId":"emptyCache","responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/configs":{"get":{"operationId":"getPluginConfigurationsByType","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/configs/{configBusinessId}":{"get":{"operationId":"getPluginConfigurationDirectAccess","parameters":[{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}":{"get":{"operationId":"getPluginMetaDataById","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config":{"get":{"operationId":"getPluginConfigurations","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]},"post":{"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config/{configBusinessId}":{"delete":{"operationId":"deletePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]},"get":{"operationId":"getPluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]},"put":{"operationId":"updatePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugintypes":{"get":{"operationId":"getPluginTypes","parameters":[{"in":"query","name":"available","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelString"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/products":{"get":{"operationId":"search","parameters":[{"in":"query","name":"state","required":false,"schema":{"items":{"enum":["ACQUIRING","COMPLETED","FINISHED","INVALID","UPDATED","CANCELED"],"type":"string"},"type":"array"}},{"in":"query","name":"sipState","required":false,"schema":{"items":{"$ref":"#/components/schemas/ISipState"},"type":"array"}},{"in":"query","name":"productName","required":false,"schema":{"type":"string"}},{"in":"query","name":"session","required":false,"schema":{"type":"string"}},{"in":"query","name":"chainId","required":false,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"nosession","required":false,"schema":{"type":"boolean"}},{"in":"query","name":"from","required":false,"schema":{"format":"date-time","type":"string"}},{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerProduct"}}],"responses":{"200":{"content":{},"description":"OK"}},"tags":["product-controller"]}},"/products/{productId}":{"get":{"operationId":"get","parameters":[{"in":"path","name":"productId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{},"description":"OK"}},"tags":["product-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-dataprovider"}]}'),o={id:"backend-dataprovider-api-swagger",title:"REGARDS dataprovider microservice API",sidebar_label:"API",slug:"/development/backend/services/dataprovider/api-swagger",hide_title:!0,hide_table_of_contents:!0},p=void 0,c={unversionedId:"development/backend/regards/dataprovider/backend-dataprovider-api-swagger",id:"version-1.11.0/development/backend/regards/dataprovider/backend-dataprovider-api-swagger",title:"REGARDS dataprovider microservice API",description:"",source:"@site/versioned_docs/version-1.11.0/development/backend/regards/dataprovider/dataprovider-api-swagger.mdx",sourceDirName:"development/backend/regards/dataprovider",slug:"/development/backend/services/dataprovider/api-swagger",permalink:"/docs/1.11.0/development/backend/services/dataprovider/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/regards/dataprovider/dataprovider-api-swagger.mdx",tags:[],version:"1.11.0",frontMatter:{id:"backend-dataprovider-api-swagger",title:"REGARDS dataprovider microservice API",sidebar_label:"API",slug:"/development/backend/services/dataprovider/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.11.0/development/backend/services/dataprovider/overview/"},next:{title:"Dataprovider",permalink:"/docs/1.11.0/development/backend/services/dataprovider/api/"}},m={},d=[],u={toc:d},l="wrapper";function g(e){let{components:t,...r}=e;return(0,s.yg)(l,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)(i.A,{spec:a,mdxType:"RegardsApiDoc"}))}g.isMDXComponent=!0},26903:()=>{},15915:()=>{},67889:()=>{},33880:()=>{},14834:()=>{},20922:()=>{},81912:()=>{}}]);