(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[1219],{14420:function(e,t,n){"use strict";var r=n(67294),s=n(19992);t.Z=function(e){var t=e.spec;return r.createElement(s.Z,{spec:t})}},32116:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return g}});var r=n(83117),s=n(80102),o=(n(67294),n(3905)),a=n(14420),i=JSON.parse('{"openapi":"3.0.1","info":{"title":"MICROSERVICE STORAGE","description":"Files storage management","license":{"name":"GPL-3.0"},"version":"1.7.1"},"servers":[{"url":"https://regardsoss.github.io/api/v1/rs-storage","description":"Generated server url"}],"security":[{"REGARDS_OAUTH2":[]}],"paths":{"/cache":{"get":{"tags":["cache-controller"],"operationId":"getOccupation","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/CacheDTO"}}}}}}},"/storages":{"get":{"tags":["storage-location-controller"],"operationId":"retrieve","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelStorageLocationDTO"}}}}}}},"post":{"tags":["storage-location-controller"],"operationId":"configureLocation","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/StorageLocationDTO"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelStorageLocationDTO"}}}}}}},"/storages/{id}":{"get":{"tags":["storage-location-controller"],"operationId":"retrieve_1","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelStorageLocationDTO"}}}}}},"put":{"tags":["storage-location-controller"],"operationId":"updateLocationConfiguration","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/StorageLocationDTO"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelStorageLocationDTO"}}}}}},"delete":{"tags":["storage-location-controller"],"operationId":"delete","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/storages/{id}/requests/{type}":{"delete":{"tags":["storage-location-controller"],"operationId":"deleteRequests","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}},{"name":"type","in":"path","required":true,"schema":{"type":"string","enum":["AVAILABILITY","COPY","DELETION","REFERENCE","STORAGE"]}},{"name":"status","in":"query","required":false,"schema":{"type":"string","enum":["TO_DO","PENDING","DELAYED","ERROR"]}}],"responses":{"200":{"description":"default response"}}}},"/storages/{id}/up":{"put":{"tags":["storage-location-controller"],"operationId":"increaseStorageLocationPriority","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/storages/{id}/down":{"put":{"tags":["storage-location-controller"],"operationId":"decreaseStorageLocationPriority","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/storages/monitoring/run":{"get":{"tags":["storage-location-controller"],"operationId":"runMonitoring","parameters":[{"name":"reset","in":"query","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"default response"}}}},"/storages/{id}/files/retry/{type}":{"get":{"tags":["storage-location-controller"],"operationId":"retryErrors","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}},{"name":"type","in":"path","required":true,"schema":{"type":"string","enum":["AVAILABILITY","COPY","DELETION","REFERENCE","STORAGE"]}}],"responses":{"200":{"description":"default response"}}}},"/storages/retry/{source}/{session}":{"get":{"tags":["storage-location-controller"],"operationId":"retryErrorsBySourceAndSession","parameters":[{"name":"source","in":"path","required":true,"schema":{"type":"string"}},{"name":"session","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/storages/{id}/files":{"delete":{"tags":["storage-location-controller"],"operationId":"deleteFiles","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}},{"name":"force","in":"query","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"default response"}}}},"/storages/files/copy":{"post":{"tags":["storage-location-controller"],"operationId":"copyFiles","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/CopyFilesParametersDTO"}}},"required":true},"responses":{"200":{"description":"default response"}}}},"/quota/currents":{"post":{"tags":["download-quota-controller"],"operationId":"getCurrentQuotasList","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/UserCurrentQuotas"}}}}}}}},"/quota/{user_email}":{"get":{"tags":["download-quota-controller"],"operationId":"getQuotaLimits_1","parameters":[{"name":"user_email","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/DownloadQuotaLimitsDto"}}}}}},"put":{"tags":["download-quota-controller"],"operationId":"upsertQuotaLimits","parameters":[{"name":"user_email","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DownloadQuotaLimitsDto"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/DownloadQuotaLimitsDto"}}}}}}},"/quota/current/{user_email}":{"get":{"tags":["download-quota-controller"],"operationId":"getCurrentQuotas","parameters":[{"name":"user_email","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/UserCurrentQuotas"}}}}}}},"/quota/current":{"get":{"tags":["download-quota-controller"],"operationId":"getCurrentQuotas_1","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/UserCurrentQuotas"}}}}}}},"/quotas":{"get":{"tags":["download-quota-controller"],"operationId":"getQuotaLimits","parameters":[{"name":"user_email","in":"query","required":true,"schema":{"type":"array","items":{"type":"string"}}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/DownloadQuotaLimitsDto"}}}}}}}},"/quota":{"get":{"tags":["download-quota-controller"],"operationId":"getQuotaLimits_2","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/DownloadQuotaLimitsDto"}}}}}}},"/files/{checksum}/download":{"get":{"tags":["file-reference-controller"],"operationId":"downloadFile","parameters":[{"name":"checksum","in":"path","required":true,"schema":{"type":"string"}},{"name":"isContentInline","in":"query","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/StreamingResponseBody"}}}}}}},"/files/{checksum}/download/token":{"get":{"tags":["file-reference-controller"],"operationId":"downloadFileWithToken","parameters":[{"name":"checksum","in":"path","required":true,"schema":{"type":"string"}},{"name":"t","in":"query","required":true,"schema":{"type":"string"}},{"name":"isContentInline","in":"query","required":true,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/StreamingResponseBody"}}}}}}},"/files/csv":{"get":{"tags":["file-reference-controller"],"operationId":"export","responses":{"200":{"description":"default response"}}}},"/files/store":{"post":{"tags":["file-reference-controller"],"operationId":"store","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/StorageFlowItem"}}}},"required":true},"responses":{"200":{"description":"default response"}}}},"/requests/{storage}/{type}":{"get":{"tags":["file-requests-controller"],"operationId":"search","parameters":[{"name":"storage","in":"path","required":true,"schema":{"type":"string"}},{"name":"type","in":"path","required":true,"schema":{"type":"string","enum":["AVAILABILITY","COPY","DELETION","REFERENCE","STORAGE"]}},{"name":"status","in":"query","required":false,"schema":{"type":"string","enum":["TO_DO","PENDING","DELAYED","ERROR"]}},{"name":"page","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"name":"assembler","in":"query","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerFileRequestInfoDTO"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelFileRequestInfoDTO"}}}}}},"delete":{"tags":["file-requests-controller"],"operationId":"delete_1","parameters":[{"name":"storage","in":"path","required":true,"schema":{"type":"string"}},{"name":"type","in":"path","required":true,"schema":{"type":"string","enum":["AVAILABILITY","COPY","DELETION","REFERENCE","STORAGE"]}},{"name":"status","in":"query","required":false,"schema":{"type":"string","enum":["TO_DO","PENDING","DELAYED","ERROR"]}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Pageable"}}}},"responses":{"200":{"description":"default response"}}}},"/requests/stop":{"get":{"tags":["file-requests-controller"],"operationId":"stop","responses":{"200":{"description":"default response"}}}},"/regards/{tenant}/datasource/test":{"get":{"tags":["jpa-multitenant-controller"],"operationId":"testTenantConnection","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}}}}}},"/regards/{tenant}/datasource/status":{"get":{"tags":["jpa-multitenant-controller"],"operationId":"getDataSourceStatus","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}}}}}},"/maintenance":{"get":{"tags":["maintenance-controller"],"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}}}}}},"/maintenance/{tenant}/enable":{"put":{"tags":["maintenance-controller"],"operationId":"setMaintenance","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/maintenance/{tenant}/disable":{"put":{"tags":["maintenance-controller"],"operationId":"unSetMaintenance","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/shutdown/immediate":{"post":{"tags":["manager-controller"],"operationId":"immediateShutdown","responses":{"200":{"description":"default response"}}}},"/microservice/ready/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isReadyEnabled","responses":{"200":{"description":"default response"}}}},"/microservice/configuration":{"get":{"tags":["module-manager-controller"],"operationId":"exportConfiguration","responses":{"200":{"description":"default response"}}},"post":{"tags":["module-manager-controller"],"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"file":{"type":"string","format":"binary"}}}}}},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ModuleImportReport"}}}}}}}},"/microservice/ready":{"get":{"tags":["module-manager-controller"],"operationId":"isReady","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}}}}}},"/microservice/restart":{"get":{"tags":["module-manager-controller"],"operationId":"restart","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ModuleRestartReport"}}}}}}}},"/microservice/restart/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isRestartEnabled","responses":{"200":{"description":"default response"}}}},"/microservice/configuration/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isConfigurationEnabled","responses":{"200":{"description":"default response"}}}},"/plugins/configs/{configBusinessId}":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfigurationDirectAccess","parameters":[{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}}},"/plugins/cache":{"delete":{"tags":["plugin-controller"],"operationId":"emptyCache","responses":{"200":{"description":"default response"}}}},"/plugins/{pluginId}/config":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfigurations","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}}},"post":{"tags":["plugin-controller"],"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}}},"/plugintypes":{"get":{"tags":["plugin-controller"],"operationId":"getPluginTypes","parameters":[{"name":"available","in":"query","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelString"}}}}}}}},"/plugins/{pluginId}/config/{configBusinessId}":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfiguration","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}},{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}},"put":{"tags":["plugin-controller"],"operationId":"updatePluginConfiguration","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}},{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}},"delete":{"tags":["plugin-controller"],"operationId":"deletePluginConfiguration","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}},{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/plugins/configs":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfigurationsByType","parameters":[{"name":"pluginType","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}}}},"/plugins":{"get":{"tags":["plugin-controller"],"operationId":"getPlugins","parameters":[{"name":"pluginType","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}}}}}}},"/plugins/{pluginId}":{"get":{"tags":["plugin-controller"],"operationId":"getPluginMetaDataById","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}}}}}},"/settings":{"get":{"tags":["dynamic-tenant-setting-controller"],"operationId":"retrieveAll","parameters":[{"name":"names","in":"query","required":false,"schema":{"uniqueItems":true,"type":"array","items":{"type":"string"}}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}}}}}}},"/settings/{name}":{"put":{"tags":["dynamic-tenant-setting-controller"],"operationId":"update","parameters":[{"name":"name","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}}}}},"delete":{"tags":["dynamic-tenant-setting-controller"],"operationId":"reset","parameters":[{"name":"name","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}}}}}},"/security/resources":{"get":{"tags":["security-resources-controller"],"operationId":"getAllResources","responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ResourceMapping"}}}}}}}}},"components":{"schemas":{"CacheDTO":{"type":"object","properties":{"sizeLimitInBytes":{"type":"integer","format":"int64"},"occupedSizeInBytes":{"type":"integer","format":"int64"}}},"EntityModelStorageLocationDTO":{"type":"object","properties":{"name":{"type":"string"},"nbFilesStored":{"type":"integer","format":"int64"},"totalStoredFilesSizeKo":{"type":"integer","format":"int64"},"nbStorageError":{"type":"integer","format":"int64"},"nbDeletionError":{"type":"integer","format":"int64"},"storageRunning":{"type":"boolean"},"deletionRunning":{"type":"boolean"},"copyRunning":{"type":"boolean"},"allowsPhysicalDeletion":{"type":"boolean"},"configuration":{"$ref":"#/components/schemas/StorageLocationConfiguration"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"IPluginParam":{"type":"object","properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"value":{"type":"object"},"type":{"type":"string","enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"]}}},"Link":{"type":"object","properties":{"rel":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"},"deprecation":{"type":"string"},"profile":{"type":"string"},"name":{"type":"string"}}},"PluginConfiguration":{"required":["label","priorityOrder"],"type":"object","properties":{"id":{"type":"integer","format":"int64"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"pluginId":{"type":"string"},"label":{"type":"string"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"version":{"type":"string"},"priorityOrder":{"type":"integer","format":"int32"},"active":{"type":"boolean"},"parameters":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/IPluginParam"}},"iconUrl":{"type":"string","format":"url"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"isActive":{"type":"boolean","writeOnly":true},"pluginClassName":{"type":"string"},"identifiable":{"type":"boolean"}}},"PluginMetaData":{"type":"object","properties":{"pluginClassName":{"type":"string"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"author":{"type":"string"},"pluginId":{"type":"string"},"version":{"type":"string"},"description":{"type":"string"},"markdown":{"type":"string"},"url":{"type":"string"},"contact":{"type":"string"},"owner":{"type":"string"},"license":{"type":"string"},"parameters":{"type":"array","items":{"$ref":"#/components/schemas/PluginParamDescriptor"}},"licence":{"type":"string","writeOnly":true}}},"PluginParamDescriptor":{"type":"object","properties":{"name":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"description":{"type":"string"},"markdown":{"type":"string"},"parameterizedSubTypes":{"type":"array","items":{"type":"string","enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"]}},"type":{"type":"string","enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"]},"pluginType":{"type":"string"},"defaultValue":{"type":"string"},"optional":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"unconfigurable":{"type":"boolean"},"sensible":{"type":"boolean"}}},"StorageLocationConfiguration":{"required":["name"],"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"type":"string"},"pluginConfiguration":{"$ref":"#/components/schemas/PluginConfiguration"},"storageType":{"type":"string","enum":["NEARLINE","ONLINE","OFFLINE","CACHE"]},"priority":{"minimum":0,"type":"integer","format":"int64"},"allocatedSizeInKo":{"type":"integer","format":"int64"}}},"StorageLocationDTO":{"type":"object","properties":{"name":{"type":"string"},"nbFilesStored":{"type":"integer","format":"int64"},"totalStoredFilesSizeKo":{"type":"integer","format":"int64"},"nbStorageError":{"type":"integer","format":"int64"},"nbDeletionError":{"type":"integer","format":"int64"},"storageRunning":{"type":"boolean"},"deletionRunning":{"type":"boolean"},"copyRunning":{"type":"boolean"},"allowsPhysicalDeletion":{"type":"boolean"},"configuration":{"$ref":"#/components/schemas/StorageLocationConfiguration"}}},"CopyFilesParametersDTO":{"type":"object","properties":{"from":{"$ref":"#/components/schemas/FileLocationDTO"},"to":{"$ref":"#/components/schemas/FileLocationDTO"},"types":{"uniqueItems":true,"type":"array","items":{"type":"string"}}}},"FileLocationDTO":{"type":"object","properties":{"storage":{"type":"string"},"url":{"type":"string"}}},"UserCurrentQuotas":{"type":"object","properties":{"email":{"type":"string"},"maxQuota":{"type":"integer","format":"int64"},"rateLimit":{"type":"integer","format":"int64"},"currentQuota":{"type":"integer","format":"int64"},"currentRate":{"type":"integer","format":"int64"}}},"DownloadQuotaLimitsDto":{"type":"object","properties":{"email":{"type":"string"},"maxQuota":{"type":"integer","format":"int64"},"rateLimit":{"type":"integer","format":"int64"}}},"StreamingResponseBody":{"type":"object"},"FileStorageRequestDTO":{"required":["algorithm","checksum","fileName","mimeType","originUrl","owner","storage"],"type":"object","properties":{"fileName":{"type":"string"},"checksum":{"type":"string"},"algorithm":{"type":"string"},"mimeType":{"type":"string"},"owner":{"type":"string"},"type":{"type":"string"},"originUrl":{"type":"string"},"storage":{"type":"string"},"subDirectory":{"type":"string"},"sessionOwner":{"type":"string"},"session":{"type":"string"},"optionalSubDirectory":{"type":"string"}}},"StorageFlowItem":{"type":"object","properties":{"files":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/FileStorageRequestDTO"}},"groupId":{"type":"string"}}},"Pageable":{"type":"object","properties":{"sort":{"$ref":"#/components/schemas/Sort"},"pageNumber":{"type":"integer","format":"int32"},"pageSize":{"type":"integer","format":"int32"},"unpaged":{"type":"boolean"},"paged":{"type":"boolean"},"offset":{"type":"integer","format":"int64"}}},"Sort":{"type":"object","properties":{"unsorted":{"type":"boolean"},"sorted":{"type":"boolean"},"empty":{"type":"boolean"}}},"PagedResourcesAssemblerFileRequestInfoDTO":{"type":"object","properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}}},"EntityModelFileRequestInfoDTO":{"type":"object","properties":{"fileName":{"type":"string"},"type":{"type":"string","enum":["AVAILABILITY","COPY","DELETION","REFERENCE","STORAGE"]},"status":{"type":"string","enum":["TO_DO","PENDING","DELAYED","ERROR"]},"errorCause":{"type":"string"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"PageMetadata":{"type":"object","properties":{"size":{"type":"integer","format":"int64"},"totalElements":{"type":"integer","format":"int64"},"totalPages":{"type":"integer","format":"int64"},"number":{"type":"integer","format":"int64"}}},"PagedModelEntityModelFileRequestInfoDTO":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}},"content":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelFileRequestInfoDTO"}},"page":{"$ref":"#/components/schemas/PageMetadata"}}},"GenericResponseBody":{"type":"object","properties":{"message":{"type":"string"},"properties":{"type":"object","additionalProperties":{"type":"object"}}}},"EntityModelMapStringMaintenanceInfo":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"ModuleImportReport":{"type":"object","properties":{"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"importErrors":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"onlyErrors":{"type":"boolean"}}},"ModuleInformation":{"required":["author","id","name","version"],"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string"},"description":{"type":"string"},"version":{"type":"string"},"author":{"type":"string"},"legalOwner":{"type":"string"},"documentation":{"type":"string"}}},"ModuleReadinessReportObject":{"type":"object","properties":{"ready":{"type":"boolean"},"reasons":{"type":"array","items":{"type":"string"}},"specifications":{"type":"object"}}},"ModuleRestartReport":{"type":"object","properties":{"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"messages":{"type":"array","items":{"type":"string"}}}},"EntityModelPluginConfiguration":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"pluginId":{"type":"string"},"label":{"type":"string"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"version":{"type":"string"},"priorityOrder":{"type":"integer","format":"int32"},"active":{"type":"boolean"},"parameters":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/IPluginParam"}},"iconUrl":{"type":"string","format":"url"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"isActive":{"type":"boolean","writeOnly":true},"pluginClassName":{"type":"string"},"identifiable":{"type":"boolean"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"EntityModelString":{"type":"object","properties":{"content":{"type":"string"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"EntityModelPluginMetaData":{"type":"object","properties":{"pluginClassName":{"type":"string"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"author":{"type":"string"},"pluginId":{"type":"string"},"version":{"type":"string"},"description":{"type":"string"},"markdown":{"type":"string"},"url":{"type":"string"},"contact":{"type":"string"},"owner":{"type":"string"},"license":{"type":"string"},"parameters":{"type":"array","items":{"$ref":"#/components/schemas/PluginParamDescriptor"}},"licence":{"type":"string","writeOnly":true},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"DynamicTenantSettingDto":{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"value":{"type":"object"},"defaultValue":{"type":"object"}}},"EntityModelDynamicTenantSettingDto":{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"value":{"type":"object"},"defaultValue":{"type":"object"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"ResourceAccess":{"type":"object"},"ResourceMapping":{"type":"object","properties":{"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"fullPath":{"type":"string"},"controllerSimpleName":{"type":"string"},"method":{"type":"string","enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"]},"autorizedRoles":{"type":"array","items":{"$ref":"#/components/schemas/RoleAuthority"}},"resourceMappingId":{"type":"string"}}},"RoleAuthority":{"type":"object","properties":{"authorizedIpAdresses":{"type":"array","items":{"type":"string"}},"roleName":{"type":"string"},"authority":{"type":"string"}}}},"securitySchemes":{"REGARDS_OAUTH2":{"type":"oauth2","flows":{"password":{"tokenUrl":"http://vm-perf.cloud-espace.si.c-s.fr:80/api/v1/rs-authentication/oauth/token","scopes":{}}}}}}}'),p=["components"],c={id:"backend-storage-api-swagger",title:"REGARDS storage microservice API",sidebar_label:"API",slug:"/development/backend/services/storage/api-swagger",hide_title:!0,hide_table_of_contents:!0},m=void 0,l={unversionedId:"development/backend/regards/storage/backend-storage-api-swagger",id:"version-1.7.1/development/backend/regards/storage/backend-storage-api-swagger",title:"REGARDS storage microservice API",description:"",source:"@site/versioned_docs/version-1.7.1/development/backend/regards/storage/storage-api-swagger.mdx",sourceDirName:"development/backend/regards/storage",slug:"/development/backend/services/storage/api-swagger",permalink:"/docs/1.7.1/development/backend/services/storage/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/regards/storage/storage-api-swagger.mdx",tags:[],version:"1.7.1",frontMatter:{id:"backend-storage-api-swagger",title:"REGARDS storage microservice API",sidebar_label:"API",slug:"/development/backend/services/storage/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.7.1/development/backend/services/storage/overview/"},next:{title:"Storage",permalink:"/docs/1.7.1/development/backend/services/storage/api/"}},u={},g=[],d={toc:g};function y(e){var t=e.components,n=(0,s.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{spec:i,mdxType:"RegardsApiDoc"}))}y.isMDXComponent=!0},15101:function(){},42116:function(){},34904:function(){},6918:function(){},23197:function(){},60996:function(){}}]);