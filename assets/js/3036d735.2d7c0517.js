(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[11561],{14420:function(e,t,s){"use strict";var r=s(67294),n=s(19992);t.Z=function(e){var t=e.spec;return r.createElement(n.Z,{spec:t})}},78335:function(e,t,s){"use strict";s.r(t),s.d(t,{contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var r=s(87462),n=s(63366),o=(s(67294),s(3905)),i=s(14420),a=JSON.parse('{"components":{"schemas":{"EntityModelExecutionMonitoringDTO":{"properties":{"batchCorrelationId":{"type":"string"},"batchId":{"format":"uuid","type":"string"},"created":{"description":"ISO formatted UTC date-time","example":"2020-12-31T00:00:00Z","format":"date-time","type":"string"},"executionCorrelationId":{"type":"string"},"expectedDuration":{"description":"Duration in nanoseconds","type":"number"},"id":{"format":"uuid","type":"string"},"inputFiles":{"items":{"type":"object"},"type":"array"},"lastUpdated":{"description":"ISO formatted UTC date-time","example":"2020-12-31T00:00:00Z","format":"date-time","type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"persisted":{"type":"boolean"},"processBusinessId":{"format":"uuid","type":"string"},"processName":{"type":"string"},"steps":{"items":{"type":"object"},"type":"array"},"tenant":{"type":"string"},"userName":{"type":"string"},"version":{"format":"int32","type":"integer"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginConfiguration":{"properties":{"active":{"type":"boolean"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"iconUrl":{"format":"url","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"isActive":{"type":"boolean","writeOnly":true},"label":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"parameters":{"items":{"$ref":"#/components/schemas/IPluginParam"},"type":"array","uniqueItems":true},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"priorityOrder":{"format":"int32","type":"integer"},"version":{"type":"string"}},"type":"object"},"EntityModelPluginMetaData":{"properties":{"author":{"type":"string"},"contact":{"type":"string"},"description":{"type":"string"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"licence":{"type":"string","writeOnly":true},"license":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"markdown":{"type":"string"},"owner":{"type":"string"},"parameters":{"items":{"$ref":"#/components/schemas/PluginParamDescriptor"},"type":"array"},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"url":{"type":"string"},"userMarkdown":{"type":"string"},"version":{"type":"string"}},"type":"object"},"EntityModelProcessPluginConfigurationRightsDTO":{"properties":{"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"pluginConfiguration":{"$ref":"#/components/schemas/PluginConfiguration"},"rights":{"$ref":"#/components/schemas/Rights"}},"type":"object"},"EntityModelString":{"properties":{"content":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"ErrorStructure":{"properties":{"errorId":{"format":"uuid","type":"string"},"message":{"type":"string"},"time":{"description":"ISO formatted UTC date-time","example":"2020-12-31T00:00:00Z","format":"date-time","type":"string"}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"IPluginParam":{"properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"value":{"type":"object"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"PBatchRequest":{"properties":{"correlationId":{"type":"string"},"filesetsByDataset":{"additionalProperties":{"type":"object"},"type":"object"},"parameters":{"additionalProperties":{"type":"object"},"type":"object"},"processBusinessId":{"format":"uuid","type":"string"},"tenant":{"type":"string"},"user":{"type":"string"},"userRole":{"type":"string"}},"type":"object"},"PBatchResponse":{"properties":{"batchId":{"format":"uuid","type":"string"},"correlationId":{"type":"string"}},"type":"object"},"PProcessDTO":{"properties":{"active":{"type":"boolean"},"params":{"items":{"type":"object"},"type":"array"},"processId":{"format":"uuid","type":"string"},"processInfo":{"additionalProperties":{"type":"object"},"type":"object"},"processName":{"type":"string"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"PagedModelEntityModelExecutionMonitoringDTO":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelExecutionMonitoringDTO"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedResourcesAssemblerExecutionMonitoringDTO":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"PluginConfiguration":{"properties":{"active":{"type":"boolean"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"iconUrl":{"format":"url","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"isActive":{"type":"boolean","writeOnly":true},"label":{"type":"string"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"parameters":{"items":{"$ref":"#/components/schemas/IPluginParam"},"type":"array","uniqueItems":true},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"priorityOrder":{"format":"int32","type":"integer"},"version":{"type":"string"}},"required":["label","priorityOrder"],"type":"object"},"PluginMetaData":{"properties":{"author":{"type":"string"},"contact":{"type":"string"},"description":{"type":"string"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"licence":{"type":"string","writeOnly":true},"license":{"type":"string"},"markdown":{"type":"string"},"owner":{"type":"string"},"parameters":{"items":{"$ref":"#/components/schemas/PluginParamDescriptor"},"type":"array"},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"url":{"type":"string"},"userMarkdown":{"type":"string"},"version":{"type":"string"}},"type":"object"},"PluginParamDescriptor":{"properties":{"defaultValue":{"type":"string"},"description":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"markdown":{"type":"string"},"name":{"type":"string"},"optional":{"type":"boolean"},"parameterizedSubTypes":{"items":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"type":"array"},"pluginType":{"type":"string"},"sensible":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"unconfigurable":{"type":"boolean"},"userMarkdown":{"type":"string"}},"type":"object"},"ProcessLabelDTO":{"properties":{"label":{"type":"string"},"processBusinessId":{"format":"uuid","type":"string"}},"type":"object"},"ProcessPluginConfigurationRightsDTO":{"properties":{"pluginConfiguration":{"$ref":"#/components/schemas/PluginConfiguration"},"rights":{"$ref":"#/components/schemas/Rights"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"Rights":{"properties":{"datasets":{"items":{"type":"object"},"type":"array"},"linkedToAllDatasets":{"type":"boolean"},"role":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"http://vm-perf.cloud-espace.si.c-s.fr:80/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Processing API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE PROCESSING","version":"1.8.0"},"openapi":"3.0.1","paths":{"/batch":{"post":{"operationId":"createBatch","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PBatchRequest"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PBatchResponse"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["p-batch-controller"]}},"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/monitoring/executions":{"get":{"operationId":"executions","parameters":[{"in":"query","name":"tenant","required":true,"schema":{"type":"string"}},{"in":"query","name":"status","required":true,"schema":{"items":{"enum":["SUCCESS","FAILURE","CANCELLED","TIMED_OUT","CLEANUP","PENDING","RUNNING","PREPARE","REGISTERED"],"type":"string"},"type":"array"}},{"in":"query","name":"userEmail","required":false,"schema":{"type":"string"}},{"in":"query","name":"processBusinessId","required":false,"schema":{"type":"string"}},{"in":"query","name":"from","required":false,"schema":{"default":"2000-01-01T00:00:00.000Z","type":"string"}},{"in":"query","name":"to","required":false,"schema":{"default":"2100-01-01T00:00:00.000Z","type":"string"}},{"in":"query","name":"page","required":false,"schema":{"default":0,"format":"int32","type":"integer"}},{"in":"query","name":"size","required":false,"schema":{"default":20,"format":"int32","type":"integer"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerExecutionMonitoringDTO"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelExecutionMonitoringDTO"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["p-monitoring-controller"]}},"/plugins":{"get":{"operationId":"getPlugins","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"},"type":"array"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/cache":{"delete":{"operationId":"emptyCache","responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/configs":{"get":{"operationId":"getPluginConfigurationsByType","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/configs/{configBusinessId}":{"get":{"operationId":"getPluginConfigurationDirectAccess","parameters":[{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}":{"get":{"operationId":"getPluginMetaDataById","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config":{"get":{"operationId":"getPluginConfigurations","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["plugin-controller"]},"post":{"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config/{configBusinessId}":{"delete":{"operationId":"deletePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["plugin-controller"]},"get":{"operationId":"getPluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["plugin-controller"]},"put":{"operationId":"updatePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugintypes":{"get":{"operationId":"getPluginTypes","parameters":[{"in":"query","name":"available","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelString"},"type":"array"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/process":{"get":{"operationId":"findAll_1","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/PProcessDTO"},"type":"array"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["p-process-controller"]}},"/process/{processBusinessId}":{"get":{"operationId":"findByUuid","parameters":[{"in":"path","name":"processBusinessId","required":true,"schema":{"format":"uuid","type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PProcessDTO"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["p-process-controller"]}},"/processplugins/config":{"get":{"operationId":"findAll","parameters":[{"in":"query","name":"processNameLike","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"},"type":"array"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["process-plugin-config-controller"]},"post":{"operationId":"create","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProcessPluginConfigurationRightsDTO"}},"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/ProcessPluginConfigurationRightsDTO"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["process-plugin-config-controller"]}},"/processplugins/config/{processBusinessId}":{"delete":{"operationId":"delete","parameters":[{"in":"path","name":"processBusinessId","required":true,"schema":{"format":"uuid","type":"string"}}],"responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["process-plugin-config-controller"]},"get":{"operationId":"findByBusinessId","parameters":[{"in":"path","name":"processBusinessId","required":true,"schema":{"format":"uuid","type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["process-plugin-config-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"processBusinessId","required":true,"schema":{"format":"uuid","type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProcessPluginConfigurationRightsDTO"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["process-plugin-config-controller"]}},"/processplugins/config/{processBusinessId}/userRole":{"put":{"operationId":"attachRoleToProcess","parameters":[{"in":"path","name":"processBusinessId","required":true,"schema":{"format":"uuid","type":"string"}},{"in":"query","name":"userRole","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["process-plugin-config-controller"]}},"/processplugins/fordatasets":{"post":{"operationId":"findProcessesByDatasets","requestBody":{"content":{"application/json":{"schema":{"items":{"type":"string"},"type":"array"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"additionalProperties":{"type":"object"},"type":"object"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["process-plugin-dataset-controller"]}},"/processplugins/linkprocessdataset/{datasetIpId}":{"get":{"operationId":"findProcessesByDataset","parameters":[{"in":"path","name":"datasetIpId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ProcessLabelDTO"},"type":"array"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["process-plugin-dataset-controller"]},"put":{"operationId":"attachDatasetToProcesses","parameters":[{"in":"path","name":"datasetIpId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"items":{"format":"uuid","type":"string"},"type":"array"}}},"required":true},"responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["process-plugin-dataset-controller"]}},"/processplugins/metadata":{"get":{"operationId":"listAllDetectedPlugins","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/PluginMetaData"},"type":"array"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["process-plugin-metadata-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["jpa-multitenant-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["security-resources-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"default response"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"default response"}},"tags":["manager-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-processing"}]}'),p=["components"],c={id:"backend-processing-api-swagger",title:"REGARDS processing microservice API",sidebar_label:"API",slug:"/development/backend/services/processing/api-swagger",hide_title:!0,hide_table_of_contents:!0},u=void 0,m={unversionedId:"development/backend/regards/processing/backend-processing-api-swagger",id:"development/backend/regards/processing/backend-processing-api-swagger",title:"REGARDS processing microservice API",description:"",source:"@site/docs/development/backend/regards/processing/processing-api-swagger.mdx",sourceDirName:"development/backend/regards/processing",slug:"/development/backend/services/processing/api-swagger",permalink:"/docs/development/backend/services/processing/api-swagger",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/processing/processing-api-swagger.mdx",tags:[],version:"current",frontMatter:{id:"backend-processing-api-swagger",title:"REGARDS processing microservice API",sidebar_label:"API",slug:"/development/backend/services/processing/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/processing/overview/"},next:{title:"Process",permalink:"/docs/development/backend/services/processing/api/process/"}},d=[],l={toc:d};function g(e){var t=e.components,s=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{spec:a,mdxType:"RegardsApiDoc"}))}g.isMDXComponent=!0},15101:function(){},42116:function(){},23197:function(){}}]);