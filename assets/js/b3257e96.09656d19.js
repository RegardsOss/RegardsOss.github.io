(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[65595],{14420:function(e,t,s){"use strict";var r=s(67294),n=s(19992);t.Z=function(e){var t=e.spec;return r.createElement(n.Z,{spec:t})}},74317:function(e,t,s){"use strict";s.r(t),s.d(t,{contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var r=s(87462),n=s(63366),o=(s(67294),s(3905)),i=s(14420),a=JSON.parse('{"openapi":"3.0.1","info":{"title":"MICROSERVICE PROCESSING","description":"Processing API","license":{"name":"GPL-3.0"},"version":"1.7.1"},"servers":[{"url":"https://regardsoss.github.io/api/v1/rs-processing","description":"Generated server url"}],"security":[{"REGARDS_OAUTH2":[]}],"paths":{"/processplugins/fordatasets":{"post":{"tags":["process-plugin-dataset-controller"],"operationId":"findProcessesByDatasets","requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"type":"string"}}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"object","additionalProperties":{"type":"object"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/processplugins/linkprocessdataset/{datasetIpId}":{"get":{"tags":["process-plugin-dataset-controller"],"operationId":"findProcessesByDataset","parameters":[{"name":"datasetIpId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ProcessLabelDTO"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}},"put":{"tags":["process-plugin-dataset-controller"],"operationId":"attachDatasetToProcesses","parameters":[{"name":"datasetIpId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"type":"array","items":{"type":"string","format":"uuid"}}}},"required":true},"responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/processplugins/config":{"get":{"tags":["process-plugin-config-controller"],"operationId":"findAll","parameters":[{"name":"processNameLike","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}},"post":{"tags":["process-plugin-config-controller"],"operationId":"create","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProcessPluginConfigurationRightsDTO"}},"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/ProcessPluginConfigurationRightsDTO"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/processplugins/config/{processBusinessId}":{"get":{"tags":["process-plugin-config-controller"],"operationId":"findByBusinessId","parameters":[{"name":"processBusinessId","in":"path","required":true,"schema":{"type":"string","format":"uuid"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}},"put":{"tags":["process-plugin-config-controller"],"operationId":"update","parameters":[{"name":"processBusinessId","in":"path","required":true,"schema":{"type":"string","format":"uuid"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProcessPluginConfigurationRightsDTO"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}},"delete":{"tags":["process-plugin-config-controller"],"operationId":"delete","parameters":[{"name":"processBusinessId","in":"path","required":true,"schema":{"type":"string","format":"uuid"}}],"responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/processplugins/config/{processBusinessId}/userRole":{"put":{"tags":["process-plugin-config-controller"],"operationId":"attachRoleToProcess","parameters":[{"name":"processBusinessId","in":"path","required":true,"schema":{"type":"string","format":"uuid"}},{"name":"userRole","in":"query","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/processplugins/metadata":{"get":{"tags":["process-plugin-metadata-controller"],"operationId":"listAllDetectedPlugins","responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/PluginMetaData"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/batch":{"post":{"tags":["p-batch-controller"],"operationId":"createBatch","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PBatchRequest"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PBatchResponse"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/process":{"get":{"tags":["p-process-controller"],"operationId":"findAll_1","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/PProcessDTO"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/process/{processBusinessId}":{"get":{"tags":["p-process-controller"],"operationId":"findByUuid","parameters":[{"name":"processBusinessId","in":"path","required":true,"schema":{"type":"string","format":"uuid"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PProcessDTO"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/monitoring/executions":{"get":{"tags":["p-monitoring-controller"],"operationId":"executions","parameters":[{"name":"tenant","in":"query","required":true,"schema":{"type":"string"}},{"name":"status","in":"query","required":true,"schema":{"type":"array","items":{"type":"string","enum":["SUCCESS","FAILURE","CANCELLED","TIMED_OUT","CLEANUP","RUNNING","PREPARE","REGISTERED"]}}},{"name":"userEmail","in":"query","required":false,"schema":{"type":"string"}},{"name":"processBusinessId","in":"query","required":false,"schema":{"type":"string"}},{"name":"from","in":"query","required":false,"schema":{"type":"string","default":"2000-01-01T00:00:00.000Z"}},{"name":"to","in":"query","required":false,"schema":{"type":"string","default":"2100-01-01T00:00:00.000Z"}},{"name":"page","in":"query","required":false,"schema":{"type":"integer","format":"int32","default":0}},{"name":"size","in":"query","required":false,"schema":{"type":"integer","format":"int32","default":20}},{"name":"assembler","in":"query","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerExecutionMonitoringDTO"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelExecutionMonitoringDTO"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/regards/{tenant}/datasource/test":{"get":{"tags":["jpa-multitenant-controller"],"operationId":"testTenantConnection","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/regards/{tenant}/datasource/status":{"get":{"tags":["jpa-multitenant-controller"],"operationId":"getDataSourceStatus","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/maintenance/{tenant}/enable":{"put":{"tags":["maintenance-controller"],"operationId":"setMaintenance","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/maintenance/{tenant}/disable":{"put":{"tags":["maintenance-controller"],"operationId":"unSetMaintenance","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/maintenance":{"get":{"tags":["maintenance-controller"],"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/shutdown/immediate":{"post":{"tags":["manager-controller"],"operationId":"immediateShutdown","responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/microservice/restart":{"get":{"tags":["module-manager-controller"],"operationId":"restart","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ModuleRestartReport"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/microservice/configuration":{"get":{"tags":["module-manager-controller"],"operationId":"exportConfiguration","responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}},"post":{"tags":["module-manager-controller"],"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"file":{"type":"string","format":"binary"}}}}}},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ModuleImportReport"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/microservice/ready/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isReadyEnabled","responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/microservice/restart/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isRestartEnabled","responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/microservice/ready":{"get":{"tags":["module-manager-controller"],"operationId":"isReady","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/microservice/configuration/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isConfigurationEnabled","responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/plugins/{pluginId}/config":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfigurations","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}},"post":{"tags":["plugin-controller"],"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/plugins/configs":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfigurationsByType","parameters":[{"name":"pluginType","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/plugins/{pluginId}/config/{configBusinessId}":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfiguration","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}},{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}},"put":{"tags":["plugin-controller"],"operationId":"updatePluginConfiguration","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}},{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}},"delete":{"tags":["plugin-controller"],"operationId":"deletePluginConfiguration","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}},{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/plugins/configs/{configBusinessId}":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfigurationDirectAccess","parameters":[{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/plugins/cache":{"delete":{"tags":["plugin-controller"],"operationId":"emptyCache","responses":{"200":{"description":"default response"},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/plugintypes":{"get":{"tags":["plugin-controller"],"operationId":"getPluginTypes","parameters":[{"name":"available","in":"query","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelString"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/plugins/{pluginId}":{"get":{"tags":["plugin-controller"],"operationId":"getPluginMetaDataById","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/plugins":{"get":{"tags":["plugin-controller"],"operationId":"getPlugins","parameters":[{"name":"pluginType","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}},"/security/resources":{"get":{"tags":["security-resources-controller"],"operationId":"getAllResources","responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ResourceMapping"}}}}},"500":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}}}}}}},"components":{"schemas":{"ErrorStructure":{"type":"object","properties":{"errorId":{"type":"string","format":"uuid"},"message":{"type":"string"},"time":{"type":"string","description":"ISO formatted UTC date-time","format":"date-time","example":"2020-12-31T00:00:00Z"}}},"ProcessLabelDTO":{"type":"object","properties":{"processBusinessId":{"type":"string","format":"uuid"},"label":{"type":"string"}}},"EntityModelProcessPluginConfigurationRightsDTO":{"type":"object","properties":{"pluginConfiguration":{"$ref":"#/components/schemas/PluginConfiguration"},"rights":{"$ref":"#/components/schemas/Rights"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"IPluginParam":{"type":"object","properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"value":{"type":"object"},"type":{"type":"string","enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"]}}},"Link":{"type":"object","properties":{"rel":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"},"deprecation":{"type":"string"},"profile":{"type":"string"},"name":{"type":"string"}}},"PluginConfiguration":{"required":["label","priorityOrder"],"type":"object","properties":{"id":{"type":"integer","format":"int64"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"pluginId":{"type":"string"},"label":{"type":"string"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"version":{"type":"string"},"priorityOrder":{"type":"integer","format":"int32"},"active":{"type":"boolean"},"parameters":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/IPluginParam"}},"iconUrl":{"type":"string","format":"url"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"isActive":{"type":"boolean","writeOnly":true},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"pluginClassName":{"type":"string"},"identifiable":{"type":"boolean"}}},"PluginMetaData":{"type":"object","properties":{"pluginClassName":{"type":"string"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"author":{"type":"string"},"pluginId":{"type":"string"},"version":{"type":"string"},"description":{"type":"string"},"markdown":{"type":"string"},"url":{"type":"string"},"contact":{"type":"string"},"owner":{"type":"string"},"license":{"type":"string"},"parameters":{"type":"array","items":{"$ref":"#/components/schemas/PluginParamDescriptor"}},"licence":{"type":"string","writeOnly":true}}},"PluginParamDescriptor":{"type":"object","properties":{"name":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"description":{"type":"string"},"markdown":{"type":"string"},"parameterizedSubTypes":{"type":"array","items":{"type":"string","enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"]}},"type":{"type":"string","enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"]},"pluginType":{"type":"string"},"defaultValue":{"type":"string"},"optional":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"unconfigurable":{"type":"boolean"},"sensible":{"type":"boolean"}}},"ProcessPluginConfigurationRightsDTO":{"type":"object","properties":{"pluginConfiguration":{"$ref":"#/components/schemas/PluginConfiguration"},"rights":{"$ref":"#/components/schemas/Rights"}}},"Rights":{"type":"object","properties":{"role":{"type":"string"},"datasets":{"type":"array","items":{"type":"object"}},"linkedToAllDatasets":{"type":"boolean"}}},"PBatchRequest":{"type":"object","properties":{"correlationId":{"type":"string"},"processBusinessId":{"type":"string","format":"uuid"},"tenant":{"type":"string"},"user":{"type":"string"},"userRole":{"type":"string"},"parameters":{"type":"object","additionalProperties":{"type":"object"}},"filesetsByDataset":{"type":"object","additionalProperties":{"type":"object"}}}},"PBatchResponse":{"type":"object","properties":{"batchId":{"type":"string","format":"uuid"},"correlationId":{"type":"string"}}},"PProcessDTO":{"type":"object","properties":{"processId":{"type":"string","format":"uuid"},"processName":{"type":"string"},"active":{"type":"boolean"},"processInfo":{"type":"object","additionalProperties":{"type":"object"}},"params":{"type":"array","items":{"type":"object"}}}},"PagedResourcesAssemblerExecutionMonitoringDTO":{"type":"object","properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}}},"EntityModelExecutionMonitoringDTO":{"type":"object","properties":{"id":{"type":"string","format":"uuid"},"executionCorrelationId":{"type":"string"},"batchId":{"type":"string","format":"uuid"},"batchCorrelationId":{"type":"string"},"expectedDuration":{"type":"number","description":"Duration in nanoseconds"},"inputFiles":{"type":"array","items":{"type":"object"}},"steps":{"type":"array","items":{"type":"object"}},"tenant":{"type":"string"},"userName":{"type":"string"},"processBusinessId":{"type":"string","format":"uuid"},"created":{"type":"string","description":"ISO formatted UTC date-time","format":"date-time","example":"2020-12-31T00:00:00Z"},"lastUpdated":{"type":"string","description":"ISO formatted UTC date-time","format":"date-time","example":"2020-12-31T00:00:00Z"},"version":{"type":"integer","format":"int32"},"persisted":{"type":"boolean"},"processName":{"type":"string"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"PageMetadata":{"type":"object","properties":{"size":{"type":"integer","format":"int64"},"totalElements":{"type":"integer","format":"int64"},"totalPages":{"type":"integer","format":"int64"},"number":{"type":"integer","format":"int64"}}},"PagedModelEntityModelExecutionMonitoringDTO":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}},"content":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelExecutionMonitoringDTO"}},"page":{"$ref":"#/components/schemas/PageMetadata"}}},"GenericResponseBody":{"type":"object","properties":{"message":{"type":"string"},"properties":{"type":"object","additionalProperties":{"type":"object"}}}},"EntityModelMapStringMaintenanceInfo":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"ModuleInformation":{"required":["author","id","name","version"],"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string"},"description":{"type":"string"},"version":{"type":"string"},"author":{"type":"string"},"legalOwner":{"type":"string"},"documentation":{"type":"string"}}},"ModuleRestartReport":{"type":"object","properties":{"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"messages":{"type":"array","items":{"type":"string"}}}},"ModuleImportReport":{"type":"object","properties":{"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"importErrors":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"onlyErrors":{"type":"boolean"}}},"ModuleReadinessReportObject":{"type":"object","properties":{"ready":{"type":"boolean"},"reasons":{"type":"array","items":{"type":"string"}},"specifications":{"type":"object"}}},"EntityModelPluginConfiguration":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"pluginId":{"type":"string"},"label":{"type":"string"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"version":{"type":"string"},"priorityOrder":{"type":"integer","format":"int32"},"active":{"type":"boolean"},"parameters":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/IPluginParam"}},"iconUrl":{"type":"string","format":"url"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"isActive":{"type":"boolean","writeOnly":true},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"pluginClassName":{"type":"string"},"identifiable":{"type":"boolean"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"EntityModelString":{"type":"object","properties":{"content":{"type":"string"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"EntityModelPluginMetaData":{"type":"object","properties":{"pluginClassName":{"type":"string"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"author":{"type":"string"},"pluginId":{"type":"string"},"version":{"type":"string"},"description":{"type":"string"},"markdown":{"type":"string"},"url":{"type":"string"},"contact":{"type":"string"},"owner":{"type":"string"},"license":{"type":"string"},"parameters":{"type":"array","items":{"$ref":"#/components/schemas/PluginParamDescriptor"}},"licence":{"type":"string","writeOnly":true},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"ResourceAccess":{"type":"object"},"ResourceMapping":{"type":"object","properties":{"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"fullPath":{"type":"string"},"controllerSimpleName":{"type":"string"},"method":{"type":"string","enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"]},"autorizedRoles":{"type":"array","items":{"$ref":"#/components/schemas/RoleAuthority"}},"resourceMappingId":{"type":"string"}}},"RoleAuthority":{"type":"object","properties":{"authorizedIpAdresses":{"type":"array","items":{"type":"string"}},"roleName":{"type":"string"},"authority":{"type":"string"}}}},"securitySchemes":{"REGARDS_OAUTH2":{"type":"oauth2","flows":{"password":{"tokenUrl":"http://vm-perf.cloud-espace.si.c-s.fr:80/api/v1/rs-authentication/oauth/token","scopes":{}}}}}}}'),p=["components"],c={id:"backend-processing-api-swagger",title:"REGARDS processing microservice API",sidebar_label:"API",slug:"/development/backend/services/processing/api-swagger",hide_title:!0,hide_table_of_contents:!0},u=void 0,m={unversionedId:"development/backend/regards/processing/backend-processing-api-swagger",id:"version-1.7.1/development/backend/regards/processing/backend-processing-api-swagger",title:"REGARDS processing microservice API",description:"",source:"@site/versioned_docs/version-1.7.1/development/backend/regards/processing/processing-api-swagger.mdx",sourceDirName:"development/backend/regards/processing",slug:"/development/backend/services/processing/api-swagger",permalink:"/docs/1.7.1/development/backend/services/processing/api-swagger",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/regards/processing/processing-api-swagger.mdx",tags:[],version:"1.7.1",frontMatter:{id:"backend-processing-api-swagger",title:"REGARDS processing microservice API",sidebar_label:"API",slug:"/development/backend/services/processing/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.7.1/development/backend/services/processing/overview/"},next:{title:"Process",permalink:"/docs/1.7.1/development/backend/services/processing/api/process/"}},d=[],l={toc:d};function g(e){var t=e.components,s=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{spec:a,mdxType:"RegardsApiDoc"}))}g.isMDXComponent=!0},15101:function(){},42116:function(){},23197:function(){}}]);