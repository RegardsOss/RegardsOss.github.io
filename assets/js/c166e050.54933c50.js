/*! For license information please see c166e050.54933c50.js.LICENSE.txt */
(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[7739],{4353:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var r=n(58168),s=n(96540),o=n(20053);n(38193).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var i=n(28794),a=n(92303),p=n(66588),c=n(95293),m=n(55364),l=n.n(m);function g(e,t){void 0===e&&(e="theme-redoc");const n=(0,a.A)(),r="dark"===(0,c.G)().colorMode,o=(0,p.kh)("docusaurus-theme-redoc",{failfast:!0}),i=(0,p.P_)("docusaurus-theme-redoc",e)||Object.values(o)[0];return(0,s.useMemo)((()=>{const{lightTheme:e,darkTheme:s,options:o}=i,a={scrollYOffset:n||"string"!=typeof o.scrollYOffset?o.scrollYOffset:0},p=l()({...o,...a,theme:e},t),c=l()({...o,...a,theme:s},t);return{options:n&&r?c:p,darkThemeOptions:c,lightThemeOptions:p}}),[n,r,i,t])}var u=n(86025);let d=null;function y(e){return s.createElement("div",{className:"redocusaurus-styles"})}const h=function(e){const{className:t,optionsOverrides:n,...r}=e,{store:p,darkThemeOptions:m,lightThemeOptions:l,hasLogo:h}=function(e,t){let{spec:n,url:r,themeId:o}=e;const p=g(o,t),m=(0,u.A)(r,{absolute:!0}),l=(0,a.A)(),y="dark"===(0,c.G)().colorMode,h=(0,s.useMemo)((()=>(null!==d&&l&&d.dispose(),d=new i.AppStore(n,m,p.options),{...p,hasLogo:!!n.info?.["x-logo"],store:d})),[l,n,m,p]);return(0,s.useEffect)((()=>{h.store.onDidMount()}),[h,l,y]),h}(r,n);return s.createElement(s.Fragment,null,s.createElement(y,{specProps:r,lightThemeOptions:l,darkThemeOptions:m}),s.createElement("div",{className:(0,o.A)(["redocusaurus",h&&"redocusaurus-has-logo",t])},s.createElement(i.Redoc,{store:p})))};const f=function(e){const{className:t,optionsOverrides:n,spec:a,url:p,themeId:c,isSpecFile:m}=e,{options:l}=g(c,n);return a?s.createElement(h,(0,r.A)({},e,{spec:a})):s.createElement("div",{className:(0,o.A)(["redocusaurus",t])},s.createElement(i.RedocStandalone,{specUrl:p,options:l}))}},92312:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(58168),s=(n(96540),n(15680)),o=n(4353);const i=JSON.parse('{"components":{"schemas":{"CacheDTO":{"properties":{"occupedSizeInBytes":{"format":"int64","type":"integer"},"sizeLimitInBytes":{"format":"int64","type":"integer"}},"type":"object"},"CopyFilesParametersDTO":{"properties":{"from":{"$ref":"#/components/schemas/FileLocationDTO"},"to":{"$ref":"#/components/schemas/FileLocationDTO"},"types":{"items":{"type":"string"},"type":"array","uniqueItems":true}},"type":"object"},"DownloadQuotaLimitsDto":{"properties":{"email":{"type":"string"},"maxQuota":{"format":"int64","type":"integer"},"rateLimit":{"format":"int64","type":"integer"}},"type":"object"},"DynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"DynamicTenantSettingDtoObject":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelDynamicTenantSettingDtoObject":{"properties":{"content":{"$ref":"#/components/schemas/DynamicTenantSettingDtoObject"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelFileRequestInfoDTO":{"properties":{"content":{"$ref":"#/components/schemas/FileRequestInfoDTO"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginConfiguration":{"properties":{"content":{"$ref":"#/components/schemas/PluginConfiguration"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginMetaData":{"properties":{"content":{"$ref":"#/components/schemas/PluginMetaData"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelStorageLocationDTO":{"properties":{"content":{"$ref":"#/components/schemas/StorageLocationDTO"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelString":{"properties":{"content":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"FileLocationDTO":{"properties":{"storage":{"type":"string"},"url":{"type":"string"}},"type":"object"},"FileReferenceDTO":{"properties":{"location":{"$ref":"#/components/schemas/FileLocationDTO"},"metaInfo":{"$ref":"#/components/schemas/FileReferenceMetaInfoDTO"},"owners":{"items":{"type":"string"},"type":"array"},"storageDate":{"format":"date-time","type":"string"}},"type":"object"},"FileReferenceMetaInfoDTO":{"properties":{"algorithm":{"type":"string"},"checksum":{"type":"string"},"fileName":{"type":"string"},"fileSize":{"format":"int64","type":"integer"},"height":{"format":"int32","type":"integer"},"mimeType":{"type":"string"},"type":{"type":"string"},"width":{"format":"int32","type":"integer"}},"type":"object"},"FileRequestInfoDTO":{"properties":{"errorCause":{"type":"string"},"fileName":{"type":"string"},"status":{"enum":["TO_DO","PENDING","DELAYED","ERROR"],"type":"string"},"type":{"enum":["AVAILABILITY","COPY","DELETION","REFERENCE","STORAGE"],"type":"string"}},"type":"object"},"FileStorageRequestDTO":{"properties":{"algorithm":{"type":"string"},"checksum":{"type":"string"},"fileName":{"type":"string"},"mimeType":{"type":"string"},"optionalSubDirectory":{"type":"string"},"originUrl":{"type":"string"},"owner":{"type":"string"},"session":{"type":"string"},"sessionOwner":{"type":"string"},"storage":{"type":"string"},"subDirectory":{"type":"string"},"type":{"type":"string"}},"required":["algorithm","checksum","fileName","mimeType","originUrl","owner","storage"],"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"IPluginParam":{"properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"value":{"type":"object"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelFileRequestInfoDTO":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelFileRequestInfoDTO"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PluginConfiguration":{"properties":{"active":{"type":"boolean"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"iconUrl":{"format":"url","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"isActive":{"type":"boolean","writeOnly":true},"label":{"type":"string"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"parameters":{"items":{"$ref":"#/components/schemas/IPluginParam"},"type":"array","uniqueItems":true},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"priorityOrder":{"format":"int32","type":"integer"},"version":{"type":"string"}},"required":["label","priorityOrder"],"type":"object"},"PluginMetaData":{"properties":{"author":{"type":"string"},"contact":{"type":"string"},"description":{"type":"string"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"licence":{"type":"string","writeOnly":true},"license":{"type":"string"},"markdown":{"type":"string"},"owner":{"type":"string"},"parameters":{"items":{"$ref":"#/components/schemas/PluginParamDescriptor"},"type":"array"},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"url":{"type":"string"},"userMarkdown":{"type":"string"},"version":{"type":"string"}},"type":"object"},"PluginParamDescriptor":{"properties":{"defaultValue":{"type":"string"},"description":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"markdown":{"type":"string"},"name":{"type":"string"},"optional":{"type":"boolean"},"parameterizedSubTypes":{"items":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"type":"array"},"pluginType":{"type":"string"},"sensible":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"unconfigurable":{"type":"boolean"},"userMarkdown":{"type":"string"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"StorageFlowItem":{"properties":{"files":{"items":{"$ref":"#/components/schemas/FileStorageRequestDTO"},"type":"array","uniqueItems":true},"groupId":{"type":"string"}},"type":"object"},"StorageLocationConfiguration":{"properties":{"allocatedSizeInKo":{"format":"int64","type":"integer"},"id":{"format":"int64","type":"integer"},"name":{"type":"string"},"pluginConfiguration":{"$ref":"#/components/schemas/PluginConfiguration"},"priority":{"format":"int64","minimum":0,"type":"integer"},"storageType":{"enum":["NEARLINE","ONLINE","OFFLINE","CACHE"],"type":"string"}},"required":["name"],"type":"object"},"StorageLocationDTO":{"properties":{"allowsPhysicalDeletion":{"type":"boolean"},"configuration":{"$ref":"#/components/schemas/StorageLocationConfiguration"},"copyRunning":{"type":"boolean"},"deletionRunning":{"type":"boolean"},"name":{"type":"string"},"nbDeletionError":{"format":"int64","type":"integer"},"nbFilesStored":{"format":"int64","type":"integer"},"nbFilesStoredWithPendingActionRemaining":{"format":"int64","type":"integer"},"nbStorageError":{"format":"int64","type":"integer"},"pendingActionRemaining":{"type":"boolean"},"pendingActionRunning":{"type":"boolean"},"storageRunning":{"type":"boolean"},"totalStoredFilesSizeKo":{"format":"int64","type":"integer"}},"type":"object"},"StreamingResponseBody":{"type":"object"},"UserCurrentQuotas":{"properties":{"currentQuota":{"format":"int64","type":"integer"},"currentRate":{"format":"int64","type":"integer"},"email":{"type":"string"},"maxQuota":{"format":"int64","type":"integer"},"rateLimit":{"format":"int64","type":"integer"}},"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Files storage management","license":{"name":"GPL-3.0"},"title":"MICROSERVICE STORAGE","version":"1.14.1"},"openapi":"3.0.1","paths":{"/cache":{"get":{"operationId":"getOccupation","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/CacheDTO"}}},"description":"OK"}},"tags":["cache-controller"]}},"/files/csv":{"get":{"operationId":"export","responses":{"200":{"description":"OK"}},"tags":["file-reference-controller"]}},"/files/store":{"post":{"operationId":"store","requestBody":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/StorageFlowItem"},"type":"array"}}},"required":true},"responses":{"200":{"description":"OK"}},"tags":["file-reference-controller"]}},"/files/{checksum}/download":{"get":{"operationId":"downloadFile_1","parameters":[{"in":"path","name":"checksum","required":true,"schema":{"type":"string"}},{"in":"query","name":"isContentInline","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/StreamingResponseBody"}}},"description":"OK"}},"tags":["file-reference-controller"]}},"/files/{checksum}/download/token":{"get":{"operationId":"downloadFileWithToken_1","parameters":[{"in":"path","name":"checksum","required":true,"schema":{"type":"string"}},{"in":"query","name":"t","required":true,"schema":{"type":"string"}},{"in":"query","name":"isContentInline","required":true,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/StreamingResponseBody"}}},"description":"OK"}},"tags":["file-reference-controller"]}},"/files/{storage}/locations":{"post":{"operationId":"getFileReferencesWithoutOwners","parameters":[{"in":"path","name":"storage","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/FileReferenceDTO"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["file-reference-controller"]}},"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"multipart/form-data":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/plugins":{"get":{"operationId":"getPlugins","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/cache":{"delete":{"operationId":"emptyCache","responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/configs":{"get":{"description":"Return a list of plugin configurations for a specific type","operationId":"getPluginConfigurationsByType","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"All plugin configurations for a specific type were retrieved."}},"summary":"Get plugin configurations","tags":["plugin-controller"]}},"/plugins/configs/{configBusinessId}":{"get":{"operationId":"getPluginConfigurationDirectAccess","parameters":[{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}":{"get":{"operationId":"getPluginMetaDataById","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config":{"get":{"operationId":"getPluginConfigurations","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]},"post":{"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config/{configBusinessId}":{"delete":{"operationId":"deletePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]},"get":{"operationId":"getPluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]},"put":{"operationId":"updatePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugintypes":{"get":{"operationId":"getPluginTypes","parameters":[{"in":"query","name":"available","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelString"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/quota":{"get":{"operationId":"getQuotaLimits_1","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/DownloadQuotaLimitsDto"}}},"description":"OK"}},"tags":["download-quota-controller"]}},"/quota/current":{"get":{"operationId":"getCurrentQuotas","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/UserCurrentQuotas"}}},"description":"OK"}},"tags":["download-quota-controller"]}},"/quota/current/{user_email}":{"get":{"operationId":"getCurrentQuotas_1","parameters":[{"in":"path","name":"user_email","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/UserCurrentQuotas"}}},"description":"OK"}},"tags":["download-quota-controller"]}},"/quota/currents":{"post":{"operationId":"getCurrentQuotasList","requestBody":{"content":{"application/json":{"schema":{"items":{"type":"string"},"type":"array"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/UserCurrentQuotas"},"type":"array"}}},"description":"OK"}},"tags":["download-quota-controller"]}},"/quota/{user_email}":{"get":{"operationId":"getQuotaLimits_2","parameters":[{"in":"path","name":"user_email","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/DownloadQuotaLimitsDto"}}},"description":"OK"}},"tags":["download-quota-controller"]},"put":{"operationId":"upsertQuotaLimits","parameters":[{"in":"path","name":"user_email","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DownloadQuotaLimitsDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/DownloadQuotaLimitsDto"}}},"description":"OK"}},"tags":["download-quota-controller"]}},"/quotas":{"get":{"operationId":"getQuotaLimits","parameters":[{"in":"query","name":"user_email","required":true,"schema":{"items":{"type":"string"},"type":"array"}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/DownloadQuotaLimitsDto"},"type":"array"}}},"description":"OK"}},"tags":["download-quota-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/requests/stop":{"get":{"operationId":"stop","responses":{"200":{"description":"OK"}},"tags":["file-requests-controller"]}},"/requests/{storage}/{type}":{"delete":{"operationId":"delete_1","parameters":[{"in":"path","name":"storage","required":true,"schema":{"type":"string"}},{"in":"path","name":"type","required":true,"schema":{"enum":["AVAILABILITY","COPY","DELETION","REFERENCE","STORAGE"],"type":"string"}},{"in":"query","name":"status","required":false,"schema":{"enum":["TO_DO","PENDING","DELAYED","ERROR"],"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["file-requests-controller"]},"get":{"operationId":"search","parameters":[{"in":"path","name":"storage","required":true,"schema":{"type":"string"}},{"in":"path","name":"type","required":true,"schema":{"enum":["AVAILABILITY","COPY","DELETION","REFERENCE","STORAGE"],"type":"string"}},{"in":"query","name":"status","required":false,"schema":{"enum":["TO_DO","PENDING","DELAYED","ERROR"],"type":"string"}},{"in":"query","name":"page","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelFileRequestInfoDTO"}}},"description":"OK"}},"tags":["file-requests-controller"]}},"/resources/{checksum}/download":{"get":{"operationId":"downloadFile","parameters":[{"in":"path","name":"checksum","required":true,"schema":{"type":"string"}},{"in":"query","name":"isContentInline","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"*/*":{"schema":{"format":"binary","type":"string"}}},"description":"OK"}},"tags":["file-download-controller"]}},"/resources/{checksum}/download/token":{"get":{"operationId":"downloadFileWithToken","parameters":[{"in":"path","name":"checksum","required":true,"schema":{"type":"string"}},{"in":"query","name":"t","required":true,"schema":{"type":"string"}},{"in":"query","name":"isContentInline","required":true,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"*/*":{"schema":{"format":"binary","type":"string"}}},"description":"OK"}},"tags":["file-download-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/settings":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"names","required":false,"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"},"type":"array"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/settings/{name}":{"delete":{"operationId":"reset","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}},"/storages":{"get":{"description":"Return a list of known storage locations","operationId":"retrieve","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelStorageLocationDTO"},"type":"array"}}},"description":"All known storage locations were retrieved."}},"summary":"Get known storage locations","tags":["storage-location-controller"]},"post":{"operationId":"configureLocation","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/StorageLocationDTO"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelStorageLocationDTO"}}},"description":"OK"}},"tags":["storage-location-controller"]}},"/storages/files/copy":{"post":{"operationId":"copyFiles","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CopyFilesParametersDTO"}}},"required":true},"responses":{"200":{"description":"OK"}},"tags":["storage-location-controller"]}},"/storages/monitoring/run":{"get":{"operationId":"runMonitoring","parameters":[{"in":"query","name":"reset","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"OK"}},"tags":["storage-location-controller"]}},"/storages/periodic-actions/run":{"post":{"operationId":"runPeriodicTasks","responses":{"200":{"description":"OK"}},"tags":["storage-location-controller"]}},"/storages/retry/{source}/{session}":{"get":{"operationId":"retryErrorsBySourceAndSession","parameters":[{"in":"path","name":"source","required":true,"schema":{"type":"string"}},{"in":"path","name":"session","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["storage-location-controller"]}},"/storages/{id}":{"delete":{"operationId":"delete","parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["storage-location-controller"]},"get":{"operationId":"retrieve_1","parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelStorageLocationDTO"}}},"description":"OK"}},"tags":["storage-location-controller"]},"put":{"operationId":"updateLocationConfiguration","parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/StorageLocationDTO"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelStorageLocationDTO"}}},"description":"OK"}},"tags":["storage-location-controller"]}},"/storages/{id}/down":{"put":{"operationId":"decreaseStorageLocationPriority","parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["storage-location-controller"]}},"/storages/{id}/files":{"delete":{"operationId":"deleteFiles","parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}},{"in":"query","name":"force","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"OK"}},"tags":["storage-location-controller"]}},"/storages/{id}/files/retry/{type}":{"get":{"operationId":"retryErrors","parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}},{"in":"path","name":"type","required":true,"schema":{"enum":["AVAILABILITY","COPY","DELETION","REFERENCE","STORAGE"],"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["storage-location-controller"]}},"/storages/{id}/requests/{type}":{"delete":{"operationId":"deleteRequests","parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}},{"in":"path","name":"type","required":true,"schema":{"enum":["AVAILABILITY","COPY","DELETION","REFERENCE","STORAGE"],"type":"string"}},{"in":"query","name":"status","required":false,"schema":{"enum":["TO_DO","PENDING","DELAYED","ERROR"],"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["storage-location-controller"]}},"/storages/{id}/up":{"put":{"operationId":"increaseStorageLocationPriority","parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["storage-location-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-storage"}]}'),a={id:"backend-storage-api-swagger",title:"REGARDS storage microservice API",sidebar_label:"API",slug:"/development/backend/services/storage/api-swagger",hide_title:!0,hide_table_of_contents:!0},p=void 0,c={unversionedId:"development/backend/regards/storage/backend-storage-api-swagger",id:"development/backend/regards/storage/backend-storage-api-swagger",title:"REGARDS storage microservice API",description:"",source:"@site/docs/development/backend/regards/storage/storage-api-swagger.mdx",sourceDirName:"development/backend/regards/storage",slug:"/development/backend/services/storage/api-swagger",permalink:"/docs/development/backend/services/storage/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/storage/storage-api-swagger.mdx",tags:[],version:"current",frontMatter:{id:"backend-storage-api-swagger",title:"REGARDS storage microservice API",sidebar_label:"API",slug:"/development/backend/services/storage/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/storage/overview/"},next:{title:"Allocation strategy",permalink:"/docs/development/backend/services/storage/plugins/allocation-strategy/"}},m={},l=[],g={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.yg)(u,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)(o.A,{spec:i,mdxType:"RegardsApiDoc"}))}d.isMDXComponent=!0},26903:()=>{},15915:()=>{},67889:()=>{},33880:()=>{},14834:()=>{},20922:()=>{},81912:()=>{}}]);