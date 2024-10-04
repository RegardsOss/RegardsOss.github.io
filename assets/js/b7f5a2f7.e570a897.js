/*! For license information please see b7f5a2f7.e570a897.js.LICENSE.txt */
(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[95365],{25174:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var r=s(74848),n=s(28453),o=s(4353);const i=JSON.parse('{"components":{"schemas":{"DatesRangeRestriction":{"description":"Filter on range of date for last update","properties":{"after":{"description":"Keep entities having date greater than","format":"date-time","type":"string"},"before":{"description":"Keep entities having date less than","format":"date-time","type":"string"}},"type":"object"},"DynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"DynamicTenantSettingDtoObject":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelDynamicTenantSettingDtoObject":{"properties":{"content":{"$ref":"#/components/schemas/DynamicTenantSettingDtoObject"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelFeatureEntityDto":{"properties":{"content":{"$ref":"#/components/schemas/FeatureEntityDto"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelFeatureRequestDTO":{"properties":{"content":{"$ref":"#/components/schemas/FeatureRequestDTO"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginConfiguration":{"properties":{"content":{"$ref":"#/components/schemas/PluginConfiguration"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginMetaData":{"properties":{"content":{"$ref":"#/components/schemas/PluginMetaData"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelRequestInfoObject":{"properties":{"content":{"$ref":"#/components/schemas/RequestInfoObject"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelString":{"properties":{"content":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"Feature":{"properties":{"bbox":{"items":{"format":"double","type":"number"},"type":"array"},"crs":{"type":"string"},"entityType":{"enum":["COLLECTION","DATA","DATASET"],"type":"string"},"files":{"items":{"$ref":"#/components/schemas/FeatureFile"},"type":"array"},"geometry":{"$ref":"#/components/schemas/IGeometry"},"history":{"$ref":"#/components/schemas/FeatureHistory"},"id":{"type":"string"},"last":{"type":"boolean"},"model":{"type":"string"},"normalizedGeometry":{"$ref":"#/components/schemas/IGeometry"},"type":{"type":"string"},"urn":{"type":"string"}},"required":["entityType","model","type"],"type":"object"},"FeatureCreationCollection":{"description":"Contain all Features to handle","properties":{"bbox":{"items":{"format":"double","type":"number"},"type":"array"},"crs":{"type":"string"},"features":{"items":{"$ref":"#/components/schemas/Feature"},"type":"array"},"metadata":{"$ref":"#/components/schemas/FeatureCreationSessionMetadata"},"requestOwner":{"type":"string"},"type":{"type":"string"}},"required":["requestOwner","type"],"type":"object"},"FeatureCreationSessionMetadata":{"properties":{"acknowledgedRecipient":{"type":"string"},"override":{"type":"boolean"},"priority":{"enum":["LOW","NORMAL","HIGH"],"type":"string"},"session":{"maxLength":128,"minLength":0,"type":"string"},"sessionOwner":{"maxLength":128,"minLength":0,"type":"string"},"storages":{"items":{"$ref":"#/components/schemas/StorageMetadata"},"type":"array"},"updateIfExists":{"type":"boolean"}},"required":["priority","session","sessionOwner"],"type":"object"},"FeatureDeletionCollection":{"description":"Contain all Features to handle","properties":{"featuresUrns":{"items":{"type":"string"},"type":"array","uniqueItems":true},"priority":{"enum":["LOW","NORMAL","HIGH"],"type":"string"}},"type":"object"},"FeatureDisseminationInfoDto":{"properties":{"ackDate":{"format":"date-time","type":"string"},"blocking":{"type":"boolean"},"label":{"type":"string"},"requestDate":{"format":"date-time","type":"string"}},"type":"object"},"FeatureEntityDto":{"properties":{"disseminationPending":{"type":"boolean"},"disseminationsInfo":{"items":{"$ref":"#/components/schemas/FeatureDisseminationInfoDto"},"type":"array","uniqueItems":true},"feature":{"$ref":"#/components/schemas/Feature"},"id":{"format":"int64","type":"integer"},"lastUpdate":{"format":"date-time","type":"string"},"providerId":{"type":"string"},"session":{"type":"string"},"source":{"type":"string"},"urn":{"type":"string"},"version":{"format":"int32","type":"integer"}},"required":["id","lastUpdate","providerId","session","source","urn","version"],"type":"object"},"FeatureFile":{"properties":{"attributes":{"$ref":"#/components/schemas/FeatureFileAttributes"},"locations":{"items":{"$ref":"#/components/schemas/FeatureFileLocation"},"type":"array","uniqueItems":true}},"required":["attributes","locations"],"type":"object"},"FeatureFileAttributes":{"properties":{"algorithm":{"type":"string"},"checksum":{"type":"string"},"crc32":{"type":"string"},"dataType":{"enum":["RAWDATA","QUICKLOOK_SD","QUICKLOOK_MD","QUICKLOOK_HD","DOCUMENT","THUMBNAIL","OTHER","AIP","DESCRIPTION"],"type":"string"},"filename":{"type":"string"},"filesize":{"format":"int64","type":"integer"},"mimeType":{"type":"string"}},"required":["algorithm","checksum","dataType","filename","filesize","mimeType"],"type":"object"},"FeatureFileLocation":{"properties":{"storage":{"type":"string"},"url":{"type":"string"}},"required":["url"],"type":"object"},"FeatureHistory":{"properties":{"createdBy":{"type":"string"},"deletedBy":{"type":"string"},"updatedBy":{"type":"string"}},"type":"object"},"FeatureMetadata":{"properties":{"acknowledgedRecipient":{"type":"string"},"priority":{"enum":["LOW","NORMAL","HIGH"],"type":"string"},"storages":{"items":{"$ref":"#/components/schemas/StorageMetadata"},"type":"array"}},"required":["priority"],"type":"object"},"FeatureRequestDTO":{"properties":{"errors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"id":{"format":"int64","type":"integer"},"processing":{"type":"boolean"},"providerId":{"type":"string"},"registrationDate":{"format":"date-time","type":"string"},"session":{"type":"string"},"source":{"type":"string"},"state":{"enum":["GRANTED","DENIED","SUCCESS","ERROR"],"type":"string"},"step":{"enum":["LOCAL_DENIED","LOCAL_DELAYED","LOCAL_SCHEDULED","LOCAL_ERROR","LOCAL_NOTIFICATION_ERROR","REMOTE_STORAGE_DELETION_REQUESTED","REMOTE_STORAGE_REQUESTED","LOCAL_TO_BE_NOTIFIED","REMOTE_NOTIFICATION_REQUESTED","REMOTE_NOTIFICATION_ERROR","REMOTE_STORAGE_ERROR","WAITING_BLOCKING_DISSEMINATION"],"type":"string"},"type":{"type":"string"},"urn":{"type":"string"}},"required":["id","registrationDate","state"],"type":"object"},"FeatureUpdateCollection":{"description":"Contain all Features to handle","properties":{"bbox":{"items":{"format":"double","type":"number"},"type":"array"},"crs":{"type":"string"},"features":{"items":{"$ref":"#/components/schemas/Feature"},"type":"array"},"metadata":{"$ref":"#/components/schemas/FeatureMetadata"},"requestOwner":{"type":"string"},"type":{"type":"string"}},"required":["requestOwner","type"],"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"IGeometry":{"properties":{"crs":{"type":"string","writeOnly":true},"type":{"type":"string"}},"type":"object"},"IPluginParam":{"properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN","REGARDS_ENTITY_MODEL"],"type":"string"},"value":{"type":"object"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"MultimapObjectString":{"properties":{"empty":{"type":"boolean"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelFeatureEntityDto":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelFeatureEntityDto"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PluginConfiguration":{"properties":{"active":{"type":"boolean"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"iconUrl":{"format":"url","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"isActive":{"type":"boolean","writeOnly":true},"label":{"type":"string"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"parameters":{"items":{"$ref":"#/components/schemas/IPluginParam"},"type":"array","uniqueItems":true},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"priorityOrder":{"format":"int32","type":"integer"},"version":{"type":"string"}},"required":["label","priorityOrder"],"type":"object"},"PluginMetaData":{"properties":{"author":{"type":"string"},"contact":{"type":"string"},"description":{"type":"string"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"licence":{"type":"string","writeOnly":true},"license":{"type":"string"},"markdown":{"type":"string"},"owner":{"type":"string"},"parameters":{"items":{"$ref":"#/components/schemas/PluginParamDescriptor"},"type":"array"},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"url":{"type":"string"},"userMarkdown":{"type":"string"},"version":{"type":"string"}},"type":"object"},"PluginParamDescriptor":{"properties":{"defaultValue":{"type":"string"},"description":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"markdown":{"type":"string"},"name":{"type":"string"},"optional":{"type":"boolean"},"parameterizedSubTypes":{"items":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN","REGARDS_ENTITY_MODEL"],"type":"string"},"type":"array"},"pluginType":{"type":"string"},"sensible":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN","REGARDS_ENTITY_MODEL"],"type":"string"},"unconfigurable":{"type":"boolean"},"userMarkdown":{"type":"string"}},"type":"object"},"RequestHandledResponse":{"properties":{"message":{"type":"string"},"totalHandled":{"format":"int64","type":"integer"},"totalRequested":{"format":"int64","type":"integer"}},"type":"object"},"RequestInfoObject":{"properties":{"denied":{"$ref":"#/components/schemas/MultimapObjectString"},"granted":{"additionalProperties":{"type":"string"},"type":"object"},"messages":{"items":{"type":"string"},"type":"array"}},"type":"object"},"RequestsInfo":{"properties":{"nbErrors":{"format":"int64","type":"integer"}},"type":"object"},"RequestsPagedModelEntityModelFeatureRequestDTO":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelFeatureRequestDTO"},"type":"array"},"info":{"$ref":"#/components/schemas/RequestsInfo"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"SearchFeatureRequestParameters":{"properties":{"lastUpdate":{"$ref":"#/components/schemas/DatesRangeRestriction"},"providerIds":{"$ref":"#/components/schemas/ValuesRestrictionString"},"requestIds":{"$ref":"#/components/schemas/ValuesRestrictionLong"},"session":{"description":"Filter on session that emitted the request","example":"Today_Mission1","type":"string"},"source":{"description":"Filter on source","type":"string"},"states":{"$ref":"#/components/schemas/ValuesRestrictionRequestState"},"steps":{"$ref":"#/components/schemas/ValuesRestrictionFeatureRequestStep"}},"type":"object"},"SearchFeatureSimpleEntityParameters":{"properties":{"disseminationStatus":{"description":"Filter on dissemination status","enum":["NONE","PENDING","DONE"],"example":"NONE|PENDING|DONE","type":"string"},"featureIds":{"$ref":"#/components/schemas/ValuesRestrictionLong"},"lastUpdate":{"$ref":"#/components/schemas/DatesRangeRestriction"},"model":{"description":"Filter on model","type":"string"},"providerIds":{"$ref":"#/components/schemas/ValuesRestrictionString"},"session":{"description":"Filter on session that emitted the request","example":"Today_Mission1","type":"string"},"source":{"description":"Filter on source","type":"string"}},"type":"object"},"StorageMetadata":{"properties":{"pluginBusinessId":{"type":"string"},"storePath":{"type":"string"},"targetTypes":{"items":{"enum":["RAWDATA","QUICKLOOK_SD","QUICKLOOK_MD","QUICKLOOK_HD","DOCUMENT","THUMBNAIL","OTHER","AIP","DESCRIPTION"],"type":"string"},"type":"array","uniqueItems":true}},"required":["pluginBusinessId"],"type":"object"},"ValuesRestrictionFeatureRequestStep":{"description":"Filter on request step","properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","enum":["LOCAL_DENIED","LOCAL_DELAYED","LOCAL_SCHEDULED","LOCAL_ERROR","LOCAL_NOTIFICATION_ERROR","REMOTE_STORAGE_DELETION_REQUESTED","REMOTE_STORAGE_REQUESTED","LOCAL_TO_BE_NOTIFIED","REMOTE_NOTIFICATION_REQUESTED","REMOTE_NOTIFICATION_ERROR","REMOTE_STORAGE_ERROR","WAITING_BLOCKING_DISSEMINATION"],"type":"string"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"},"ValuesRestrictionLong":{"description":"Filter on feature id","properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","format":"int64","type":"integer"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"},"ValuesRestrictionRequestState":{"description":"Filter on request states","example":"GRANTED|DENIED|SUCCESS|ERROR","properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","enum":["GRANTED","DENIED","SUCCESS","ERROR"],"type":"string"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"},"ValuesRestrictionString":{"description":"Filter on provider id","properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","type":"string"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Feature management API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE FEM","version":"1.16.1"},"openapi":"3.0.1","paths":{"/admin/features":{"post":{"description":"Return a page of features matching criteria.","operationId":"searchFeatures","parameters":[{"description":"Sorting and page configuration","in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchFeatureSimpleEntityParameters"}}},"description":"Set of search criteria.","required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelFeatureEntityDto"}}},"description":"All features were retrieved."}},"summary":"Get features","tags":["feature-entity-controller"]}},"/admin/features/delete":{"delete":{"description":"Delete features according to search parameters","operationId":"deleteFeatures_1","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchFeatureSimpleEntityParameters"}}},"description":"Set of search criteria.","required":true},"responses":{"200":{"description":"Delete features according to search parameters"}},"summary":"Delete features according to search parameters","tags":["feature-entity-controller"]}},"/admin/features/notify":{"post":{"description":"Notify features to given recipients according to search parameters","operationId":"notifyFeatures","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchFeatureSimpleEntityParameters"}}},"description":"Set of search criteria with the recipients of direct notification.","required":true},"responses":{"200":{"description":"Notify features to given recipients according to search parameters"}},"summary":"Notify features to given recipients according to search parameters","tags":["feature-entity-controller"]}},"/admin/features/{urn}":{"get":{"description":"Retrieve one feature by its urn","operationId":"getFeature","parameters":[{"description":"URN of the feature","in":"path","name":"urn","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FeatureEntityDto"}}},"description":"Retrieve one feature by its urn"}},"summary":"Retrieve one feature by its urn","tags":["feature-entity-controller"]}},"/dumps/reset":{"patch":{"operationId":"resetLastDumpDate","responses":{"200":{"description":"OK"}},"tags":["dump-controller"]}},"/features":{"delete":{"description":"Publish urns collection to delete and return urns of granted and denied requests","operationId":"deleteFeatures","requestBody":{"content":{"application/geo+json":{"schema":{"$ref":"#/components/schemas/FeatureDeletionCollection"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelRequestInfoObject"}}},"description":"A RequestInfo"}},"summary":"Publish urns collection to delete and return urns of granted and denied requests","tags":["feature-controller"]},"patch":{"description":"Publish a feature collection to update  and return urns of granted and denied requests","operationId":"updateFeatures","requestBody":{"content":{"application/geo+json":{"schema":{"$ref":"#/components/schemas/FeatureUpdateCollection"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelRequestInfoObject"}}},"description":"A RequestInfo"}},"summary":"Publish a feature collection to update and return urns of granted and denied requests","tags":["feature-controller"]},"post":{"description":"Publish a new feature and return the request id","operationId":"createFeatures","requestBody":{"content":{"application/geo+json":{"schema":{"$ref":"#/components/schemas/FeatureCreationCollection"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelRequestInfoObject"}}},"description":"A RequestInfo"}},"summary":"Publish a new feature and return the request id","tags":["feature-controller"]}},"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"multipart/form-data":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/plugins":{"get":{"operationId":"getPlugins","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/cache":{"delete":{"operationId":"emptyCache","responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/configs":{"get":{"description":"Return a list of plugin configurations for a specific type","operationId":"getPluginConfigurationsByType","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"All plugin configurations for a specific type were retrieved."}},"summary":"Get plugin configurations","tags":["plugin-controller"]}},"/plugins/configs/{configBusinessId}":{"get":{"operationId":"getPluginConfigurationDirectAccess","parameters":[{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}":{"get":{"operationId":"getPluginMetaDataById","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config":{"get":{"operationId":"getPluginConfigurations","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]},"post":{"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config/{configBusinessId}":{"delete":{"operationId":"deletePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]},"get":{"operationId":"getPluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]},"put":{"operationId":"updatePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugintypes":{"get":{"operationId":"getPluginTypes","parameters":[{"in":"query","name":"available","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelString"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/requests/delete/{type}":{"delete":{"description":"Delete feature requests by selection. Synchronous process, so the number of request handled is limited. Information about number of requests handled is returned in the response.","operationId":"deleteRequests","parameters":[{"description":"Type of requests to search for","in":"path","name":"type","required":true,"schema":{"enum":["COPY","UPDATE","NOTIFICATION","CREATION","DELETION","SAVE_METADATA"],"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchFeatureRequestParameters"}}},"description":"Set of search criterias.","required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestHandledResponse"}}},"description":"Delete feature requests by selection"}},"summary":"Delete feature requests by selection","tags":["feature-request-controller"]}},"/requests/retry/{type}":{"post":{"description":"Retry feature requests by selection. Synchronous process, so the number of request handled is limited. Information about number of requests handled is returned in the response.\\")","operationId":"retryRequests","parameters":[{"description":"Type of requests to search for","in":"path","name":"type","required":true,"schema":{"enum":["COPY","UPDATE","NOTIFICATION","CREATION","DELETION","SAVE_METADATA"],"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchFeatureRequestParameters"}}},"description":"Set of search criterias.","required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestHandledResponse"}}},"description":"Retry feature requests by selection"}},"summary":"Retry feature requests by selection","tags":["feature-request-controller"]}},"/requests/search/{type}":{"post":{"description":"Return a page of feature requests according criterias","operationId":"searchFeatureRequests","parameters":[{"description":"Type of feature requests to search for","in":"path","name":"type","required":true,"schema":{"enum":["COPY","UPDATE","NOTIFICATION","CREATION","DELETION","SAVE_METADATA"],"type":"string"}},{"description":"Sorting and page configuration","in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchFeatureRequestParameters"}}},"description":"Set of search criterias.","required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestsPagedModelEntityModelFeatureRequestDTO"}}},"description":"All feature requests were retrieved."}},"summary":"Get feature requests","tags":["feature-request-controller"]}},"/requests/{type}/abort":{"post":{"description":"Abort feature requests by selection. Synchronous process, so the number of request handled is limited. Information about number of requests handled is returned in the response.)","operationId":"abortRequests","parameters":[{"description":"Type of requests to abort.","in":"path","name":"type","required":true,"schema":{"enum":["COPY","UPDATE","NOTIFICATION","CREATION","DELETION","SAVE_METADATA"],"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchFeatureRequestParameters"}}},"description":"Set of search criteria.","required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestHandledResponse"}}},"description":"Abort feature requests by selection"},"403":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestHandledResponse"}}},"description":"The endpoint is not accessible for the user."},"422":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestHandledResponse"}}},"description":"The request selection syntax is incorrect."}},"summary":"Abort feature requests by selection","tags":["feature-request-abort-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/settings":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"names","required":false,"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"},"type":"array"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/settings/{name}":{"delete":{"operationId":"reset","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-fem"}]}'),a={title:"RS-FEM microservice API",sidebar_label:"All endpoints (OpenAPI)",sidebar_position:4,slug:"/development/backend/services/fem/guides/rest/api",hide_title:!0,hide_table_of_contents:!0},p=void 0,c={id:"development/services/fem/api-guides/rest/rs-fem-api-swagger",title:"RS-FEM microservice API",description:"",source:"@site/docs/development/services/fem/api-guides/rest/rs-fem-api-swagger.mdx",sourceDirName:"development/services/fem/api-guides/rest",slug:"/development/backend/services/fem/guides/rest/api",permalink:"/docs/development/backend/services/fem/guides/rest/api",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/fem/api-guides/rest/rs-fem-api-swagger.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"RS-FEM microservice API",sidebar_label:"All endpoints (OpenAPI)",sidebar_position:4,slug:"/development/backend/services/fem/guides/rest/api",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Delete products",permalink:"/docs/development/backend/services/fem/guides/rest/delete-product"},next:{title:"GeoJson format",permalink:"/docs/development/backend/services/fem/guides/geojson-feature-format"}},u={},m=[];function d(e){return(0,r.jsx)(o.A,{spec:i})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},4353:(e,t,s)=>{"use strict";s.d(t,{A:()=>h});var r=s(96540),n=s(20053);s(38193).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var o=s(28794),i=s(92303),a=s(66588),p=s(95293),c=s(55364),u=s.n(c);function m(e,t){void 0===e&&(e="theme-redoc");const s=(0,i.A)(),n="dark"===(0,p.G)().colorMode,o=(0,a.kh)("docusaurus-theme-redoc",{failfast:!0}),c=(0,a.P_)("docusaurus-theme-redoc",e)||Object.values(o)[0];return(0,r.useMemo)((()=>{const{lightTheme:e,darkTheme:r,options:o}=c,i={scrollYOffset:s||"string"!=typeof o.scrollYOffset?o.scrollYOffset:0},a=u()({...o,...i,theme:e},t),p=u()({...o,...i,theme:r},t);return{options:s&&n?p:a,darkThemeOptions:p,lightThemeOptions:a}}),[s,n,c,t])}var d=s(86025);let l=null;var y=s(74848);function g(e){return(0,y.jsx)("div",{className:"redocusaurus-styles"})}const f=function(e){const{className:t,optionsOverrides:s,...a}=e,{store:c,darkThemeOptions:u,lightThemeOptions:f,hasLogo:h}=function(e,t){let{spec:s,url:n,themeId:a}=e;const c=m(a,t),u=(0,d.Ay)(n,{absolute:!0}),y=(0,i.A)(),g="dark"===(0,p.G)().colorMode,f=(0,r.useMemo)((()=>(null!==l&&y&&l.dispose(),l=new o.AppStore(s,u,c.options),{...c,hasLogo:!!s.info?.["x-logo"],store:l})),[y,s,u,c]);return(0,r.useEffect)((()=>{f.store.onDidMount()}),[f,y,g]),f}(a,s);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{specProps:a,lightThemeOptions:f,darkThemeOptions:u}),(0,y.jsx)("div",{className:(0,n.A)(["redocusaurus",h&&"redocusaurus-has-logo",t]),children:(0,y.jsx)(o.Redoc,{store:c})})]})};const h=function(e){const{className:t,optionsOverrides:s,spec:r,url:i,themeId:a,isSpecFile:p}=e,{options:c}=m(a,s);return r?(0,y.jsx)(f,{...e,spec:r}):(0,y.jsx)("div",{className:(0,n.A)(["redocusaurus",t]),children:(0,y.jsx)(o.RedocStandalone,{specUrl:i,options:c})})}},26903:()=>{},14834:()=>{},20922:()=>{},32413:()=>{},81912:()=>{}}]);