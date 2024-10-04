/*! For license information please see 53483a5c.431bcf5e.js.LICENSE.txt */
(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[49687],{84334:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var s=r(74848),n=r(28453),o=r(4353);const i=JSON.parse('{"components":{"schemas":{"DatesRangeRestriction":{"description":"Filter on creation date","properties":{"after":{"description":"ISO formatted UTC date-time","example":"2020-12-31T00:00:00Z","format":"date-time","type":"string"},"before":{"description":"ISO formatted UTC date-time","example":"2020-12-31T00:00:00Z","format":"date-time","type":"string"}},"type":"object"},"EntityModelExecutionMonitoringDTO":{"properties":{"content":{"$ref":"#/components/schemas/ExecutionMonitoringDTO"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginConfiguration":{"properties":{"content":{"$ref":"#/components/schemas/PluginConfiguration"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginMetaData":{"properties":{"content":{"$ref":"#/components/schemas/PluginMetaData"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelProcessPluginConfigurationRightsDTO":{"properties":{"content":{"$ref":"#/components/schemas/ProcessPluginConfigurationRightsDTO"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelString":{"properties":{"content":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"ErrorStructure":{"properties":{"errorId":{"format":"uuid","type":"string"},"message":{"type":"string"},"time":{"description":"ISO formatted UTC date-time","example":"2020-12-31T00:00:00Z","format":"date-time","type":"string"}},"type":"object"},"ExecutionMonitoringDTO":{"properties":{"batchCorrelationId":{"type":"string"},"batchId":{"format":"uuid","type":"string"},"created":{"description":"ISO formatted UTC date-time","example":"2020-12-31T00:00:00Z","format":"date-time","type":"string"},"executionCorrelationId":{"type":"string"},"expectedDuration":{"description":"Duration in nanoseconds","type":"number"},"id":{"format":"uuid","type":"string"},"inputFiles":{"items":{"type":"object"},"type":"array"},"lastUpdated":{"description":"ISO formatted UTC date-time","example":"2020-12-31T00:00:00Z","format":"date-time","type":"string"},"persisted":{"type":"boolean"},"processBusinessId":{"format":"uuid","type":"string"},"processName":{"type":"string"},"steps":{"items":{"type":"object"},"type":"array"},"tenant":{"type":"string"},"userName":{"type":"string"},"version":{"format":"int32","type":"integer"}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"IPluginParam":{"properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN","REGARDS_ENTITY_MODEL"],"type":"string"},"value":{"type":"object"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"description":"ISO formatted UTC date-time","example":"2020-12-31T00:00:00Z","format":"date-time","type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"PBatchRequest":{"properties":{"correlationId":{"type":"string"},"filesetsByDataset":{"additionalProperties":{"type":"object"},"type":"object"},"parameters":{"additionalProperties":{"type":"object"},"type":"object"},"processBusinessId":{"format":"uuid","type":"string"},"tenant":{"type":"string"},"user":{"type":"string"},"userRole":{"type":"string"}},"type":"object"},"PBatchResponse":{"properties":{"batchId":{"format":"uuid","type":"string"},"correlationId":{"type":"string"}},"type":"object"},"PProcessDTO":{"properties":{"active":{"type":"boolean"},"params":{"items":{"type":"object"},"type":"array"},"processId":{"format":"uuid","type":"string"},"processInfo":{"additionalProperties":{"type":"object"},"type":"object"},"processName":{"type":"string"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelExecutionMonitoringDTO":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelExecutionMonitoringDTO"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PluginConfiguration":{"properties":{"active":{"type":"boolean"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"iconUrl":{"format":"url","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"isActive":{"type":"boolean","writeOnly":true},"label":{"type":"string"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"parameters":{"items":{"$ref":"#/components/schemas/IPluginParam"},"type":"array","uniqueItems":true},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"priorityOrder":{"format":"int32","type":"integer"},"version":{"type":"string"}},"required":["label","priorityOrder"],"type":"object"},"PluginMetaData":{"properties":{"author":{"type":"string"},"contact":{"type":"string"},"description":{"type":"string"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"licence":{"type":"string","writeOnly":true},"license":{"type":"string"},"markdown":{"type":"string"},"owner":{"type":"string"},"parameters":{"items":{"$ref":"#/components/schemas/PluginParamDescriptor"},"type":"array"},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"url":{"type":"string"},"userMarkdown":{"type":"string"},"version":{"type":"string"}},"type":"object"},"PluginParamDescriptor":{"properties":{"defaultValue":{"type":"string"},"description":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"markdown":{"type":"string"},"name":{"type":"string"},"optional":{"type":"boolean"},"parameterizedSubTypes":{"items":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN","REGARDS_ENTITY_MODEL"],"type":"string"},"type":"array"},"pluginType":{"type":"string"},"sensible":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN","REGARDS_ENTITY_MODEL"],"type":"string"},"unconfigurable":{"type":"boolean"},"userMarkdown":{"type":"string"}},"type":"object"},"ProcessLabelDTO":{"properties":{"label":{"type":"string"},"processBusinessId":{"format":"uuid","type":"string"}},"type":"object"},"ProcessPluginConfigurationRightsDTO":{"properties":{"pluginConfiguration":{"$ref":"#/components/schemas/PluginConfiguration"},"rights":{"$ref":"#/components/schemas/Rights"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"Rights":{"properties":{"datasets":{"items":{"type":"object"},"type":"array"},"linkedToAllDatasets":{"type":"boolean"},"role":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"SearchExecutionEntityParameters":{"properties":{"creationDate":{"$ref":"#/components/schemas/DatesRangeRestriction"},"processBusinessId":{"description":"Filter on id of business process","type":"string"},"status":{"$ref":"#/components/schemas/ValuesRestrictionExecutionStatus"},"userEmail":{"$ref":"#/components/schemas/ValuesRestrictionString"}},"type":"object"},"ValuesRestrictionExecutionStatus":{"description":"Filter on status of execution","properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","enum":["SUCCESS","FAILURE","CANCELLED","TIMED_OUT","CLEANUP","PENDING","RUNNING","PREPARE","REGISTERED"],"type":"string"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"},"ValuesRestrictionString":{"description":"Filter on email of user","properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","type":"string"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Processing API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE PROCESSING","version":"1.15.2"},"openapi":"3.0.1","paths":{"/batch":{"post":{"operationId":"createBatch","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PBatchRequest"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PBatchResponse"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["p-batch-controller"]}},"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"multipart/form-data":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["module-manager-controller"]}},"/monitoring/executions":{"post":{"operationId":"executions","parameters":[{"in":"query","name":"tenant","required":true,"schema":{"type":"string"}},{"description":"Sorting and page configuration","in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchExecutionEntityParameters"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelExecutionMonitoringDTO"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["p-monitoring-controller"]}},"/plugins":{"get":{"operationId":"getPlugins","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"},"type":"array"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["plugin-controller"]}},"/plugins/cache":{"delete":{"operationId":"emptyCache","responses":{"200":{"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["plugin-controller"]}},"/plugins/configs":{"get":{"description":"Return a list of plugin configurations for a specific type","operationId":"getPluginConfigurationsByType","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"All plugin configurations for a specific type were retrieved."},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"summary":"Get plugin configurations","tags":["plugin-controller"]}},"/plugins/configs/{configBusinessId}":{"get":{"operationId":"getPluginConfigurationDirectAccess","parameters":[{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}":{"get":{"operationId":"getPluginMetaDataById","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config":{"get":{"operationId":"getPluginConfigurations","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["plugin-controller"]},"post":{"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config/{configBusinessId}":{"delete":{"operationId":"deletePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["plugin-controller"]},"get":{"operationId":"getPluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["plugin-controller"]},"put":{"operationId":"updatePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["plugin-controller"]}},"/plugintypes":{"get":{"operationId":"getPluginTypes","parameters":[{"in":"query","name":"available","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelString"},"type":"array"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["plugin-controller"]}},"/process":{"get":{"operationId":"findAll_1","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/PProcessDTO"},"type":"array"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["p-process-controller"]}},"/process/`{processBusinessId}`":{"get":{"operationId":"findByUuid","parameters":[{"in":"path","name":"processBusinessId","required":true,"schema":{"format":"uuid","type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PProcessDTO"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["p-process-controller"]}},"/processplugins/config":{"get":{"operationId":"findAll","parameters":[{"in":"query","name":"processNameLike","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"},"type":"array"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["process-plugin-config-controller"]},"post":{"operationId":"create","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProcessPluginConfigurationRightsDTO"}},"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/ProcessPluginConfigurationRightsDTO"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["process-plugin-config-controller"]}},"/processplugins/config/`{processBusinessId}`":{"delete":{"operationId":"delete","parameters":[{"in":"path","name":"processBusinessId","required":true,"schema":{"format":"uuid","type":"string"}}],"responses":{"200":{"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["process-plugin-config-controller"]},"get":{"operationId":"findByBusinessId","parameters":[{"in":"path","name":"processBusinessId","required":true,"schema":{"format":"uuid","type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["process-plugin-config-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"processBusinessId","required":true,"schema":{"format":"uuid","type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProcessPluginConfigurationRightsDTO"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProcessPluginConfigurationRightsDTO"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["process-plugin-config-controller"]}},"/processplugins/config/`{processBusinessId}`/userRole":{"put":{"operationId":"attachRoleToProcess","parameters":[{"in":"path","name":"processBusinessId","required":true,"schema":{"format":"uuid","type":"string"}},{"in":"query","name":"userRole","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["process-plugin-config-controller"]}},"/processplugins/fordatasets":{"post":{"operationId":"findProcessesByDatasets","requestBody":{"content":{"application/json":{"schema":{"items":{"type":"string"},"type":"array"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"additionalProperties":{"type":"object"},"type":"object"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["process-plugin-dataset-controller"]}},"/processplugins/linkprocessdataset/`{datasetIpId}`":{"get":{"operationId":"findProcessesByDataset","parameters":[{"in":"path","name":"datasetIpId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ProcessLabelDTO"},"type":"array"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["process-plugin-dataset-controller"]},"put":{"operationId":"attachDatasetToProcesses","parameters":[{"in":"path","name":"datasetIpId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"items":{"format":"uuid","type":"string"},"type":"array"}}}},"responses":{"200":{"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["process-plugin-dataset-controller"]}},"/processplugins/metadata":{"get":{"operationId":"listAllDetectedPlugins","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/PluginMetaData"},"type":"array"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["process-plugin-metadata-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["jpa-multitenant-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["security-resources-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"},"500":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ErrorStructure"}}},"description":"Internal Server Error"}},"tags":["manager-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-processing"}]}'),a={id:"backend-processing-api-swagger",title:"REGARDS processing microservice API",sidebar_label:"API",slug:"/development/backend/services/processing/api-swagger",hide_title:!0,hide_table_of_contents:!0},c=void 0,p={id:"development/backend/regards/processing/backend-processing-api-swagger",title:"REGARDS processing microservice API",description:"",source:"@site/versioned_docs/version-1.15/development/backend/regards/processing/processing-api-swagger.mdx",sourceDirName:"development/backend/regards/processing",slug:"/development/backend/services/processing/api-swagger",permalink:"/docs/1.15/development/backend/services/processing/api-swagger",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/processing/processing-api-swagger.mdx",tags:[],version:"1.15",frontMatter:{id:"backend-processing-api-swagger",title:"REGARDS processing microservice API",sidebar_label:"API",slug:"/development/backend/services/processing/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.15/development/backend/services/processing/overview/"},next:{title:"Process",permalink:"/docs/1.15/development/backend/services/processing/api/process/"}},m={},u=[];function d(e){return(0,s.jsx)(o.A,{spec:i})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d()}},4353:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var s=r(96540),n=r(20053);r(38193).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var o=r(28794),i=r(92303),a=r(66588),c=r(95293),p=r(55364),m=r.n(p);function u(e,t){void 0===e&&(e="theme-redoc");const r=(0,i.A)(),n="dark"===(0,c.G)().colorMode,o=(0,a.kh)("docusaurus-theme-redoc",{failfast:!0}),p=(0,a.P_)("docusaurus-theme-redoc",e)||Object.values(o)[0];return(0,s.useMemo)((()=>{const{lightTheme:e,darkTheme:s,options:o}=p,i={scrollYOffset:r||"string"!=typeof o.scrollYOffset?o.scrollYOffset:0},a=m()({...o,...i,theme:e},t),c=m()({...o,...i,theme:s},t);return{options:r&&n?c:a,darkThemeOptions:c,lightThemeOptions:a}}),[r,n,p,t])}var d=r(86025);let l=null;var g=r(74848);function y(e){return(0,g.jsx)("div",{className:"redocusaurus-styles"})}const h=function(e){const{className:t,optionsOverrides:r,...a}=e,{store:p,darkThemeOptions:m,lightThemeOptions:h,hasLogo:f}=function(e,t){let{spec:r,url:n,themeId:a}=e;const p=u(a,t),m=(0,d.Ay)(n,{absolute:!0}),g=(0,i.A)(),y="dark"===(0,c.G)().colorMode,h=(0,s.useMemo)((()=>(null!==l&&g&&l.dispose(),l=new o.AppStore(r,m,p.options),{...p,hasLogo:!!r.info?.["x-logo"],store:l})),[g,r,m,p]);return(0,s.useEffect)((()=>{h.store.onDidMount()}),[h,g,y]),h}(a,r);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y,{specProps:a,lightThemeOptions:h,darkThemeOptions:m}),(0,g.jsx)("div",{className:(0,n.A)(["redocusaurus",f&&"redocusaurus-has-logo",t]),children:(0,g.jsx)(o.Redoc,{store:p})})]})};const f=function(e){const{className:t,optionsOverrides:r,spec:s,url:i,themeId:a,isSpecFile:c}=e,{options:p}=u(a,r);return s?(0,g.jsx)(h,{...e,spec:s}):(0,g.jsx)("div",{className:(0,n.A)(["redocusaurus",t]),children:(0,g.jsx)(o.RedocStandalone,{specUrl:i,options:p})})}},26903:()=>{},14834:()=>{},20922:()=>{},32413:()=>{},81912:()=>{}}]);