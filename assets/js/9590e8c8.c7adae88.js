(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[38338],{14420:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(67294),n=r(19992);const o=function(e){let{spec:t}=e;return s.createElement(n.Z,{spec:t})}},4005:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=r(87462),n=(r(67294),r(3905)),o=r(14420);const a=JSON.parse('{"components":{"schemas":{"DynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelDynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelFeatureEntityDto":{"properties":{"disseminationPending":{"type":"boolean"},"disseminationsInfo":{"items":{"$ref":"#/components/schemas/FeatureDisseminationInfoDto"},"type":"array","uniqueItems":true},"feature":{"$ref":"#/components/schemas/Feature"},"id":{"format":"int64","type":"integer"},"lastUpdate":{"format":"date-time","type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"providerId":{"type":"string"},"session":{"type":"string"},"source":{"type":"string"},"urn":{"$ref":"#/components/schemas/FeatureUniformResourceName"},"version":{"format":"int32","type":"integer"}},"type":"object"},"EntityModelFeatureRequestDTO":{"properties":{"errors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"id":{"format":"int64","type":"integer"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"processing":{"type":"boolean"},"providerId":{"type":"string"},"registrationDate":{"format":"date-time","type":"string"},"session":{"type":"string"},"source":{"type":"string"},"state":{"enum":["GRANTED","DENIED","SUCCESS","ERROR"],"type":"string"},"step":{"enum":["LOCAL_DENIED","LOCAL_DELAYED","LOCAL_SCHEDULED","LOCAL_ERROR","LOCAL_NOTIFICATION_ERROR","REMOTE_STORAGE_DELETION_REQUESTED","REMOTE_STORAGE_REQUESTED","LOCAL_TO_BE_NOTIFIED","REMOTE_NOTIFICATION_REQUESTED","REMOTE_NOTIFICATION_SUCCESS","REMOTE_NOTIFICATION_ERROR","REMOTE_CREATION_REQUESTED","REMOTE_CREATION_ERROR","REMOTE_STORAGE_ERROR"],"type":"string"},"type":{"type":"string"},"urn":{"$ref":"#/components/schemas/FeatureUniformResourceName"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginConfiguration":{"properties":{"active":{"type":"boolean"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"iconUrl":{"format":"url","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"isActive":{"type":"boolean","writeOnly":true},"label":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"parameters":{"items":{"$ref":"#/components/schemas/IPluginParam"},"type":"array","uniqueItems":true},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"priorityOrder":{"format":"int32","type":"integer"},"version":{"type":"string"}},"type":"object"},"EntityModelPluginMetaData":{"properties":{"author":{"type":"string"},"contact":{"type":"string"},"description":{"type":"string"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"licence":{"type":"string","writeOnly":true},"license":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"markdown":{"type":"string"},"owner":{"type":"string"},"parameters":{"items":{"$ref":"#/components/schemas/PluginParamDescriptor"},"type":"array"},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"url":{"type":"string"},"userMarkdown":{"type":"string"},"version":{"type":"string"}},"type":"object"},"EntityModelRequestInfoObject":{"properties":{"denied":{"$ref":"#/components/schemas/MultimapObjectString"},"granted":{"additionalProperties":{"type":"string"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"messages":{"items":{"type":"string"},"type":"array"}},"type":"object"},"EntityModelString":{"properties":{"content":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"Feature":{"properties":{"bbox":{"items":{"format":"double","type":"number"},"type":"array"},"crs":{"type":"string"},"entityType":{"enum":["COLLECTION","DATA","DATASET"],"type":"string"},"files":{"items":{"$ref":"#/components/schemas/FeatureFile"},"type":"array"},"geometry":{"$ref":"#/components/schemas/IGeometry"},"history":{"$ref":"#/components/schemas/FeatureHistory"},"id":{"type":"string"},"last":{"type":"boolean"},"model":{"type":"string"},"normalizedGeometry":{"$ref":"#/components/schemas/IGeometry"},"properties":{"items":{"$ref":"#/components/schemas/IPropertyObject"},"type":"array","uniqueItems":true},"type":{"enum":["FEATURE","FEATURE_COLLECTION","POINT","MULTIPOINT","LINESTRING","MULTILINESTRING","POLYGON","MULTIPOLYGON","GEOMETRY_COLLECTION","UNLOCATED"],"type":"string"},"urn":{"$ref":"#/components/schemas/FeatureUniformResourceName"}},"required":["entityType","model","type"],"type":"object"},"FeatureCreationCollection":{"properties":{"bbox":{"items":{"format":"double","type":"number"},"type":"array"},"crs":{"type":"string"},"features":{"items":{"$ref":"#/components/schemas/Feature"},"type":"array"},"metadata":{"$ref":"#/components/schemas/FeatureCreationSessionMetadata"},"requestOwner":{"type":"string"},"type":{"enum":["FEATURE","FEATURE_COLLECTION","POINT","MULTIPOINT","LINESTRING","MULTILINESTRING","POLYGON","MULTIPOLYGON","GEOMETRY_COLLECTION","UNLOCATED"],"type":"string"}},"required":["requestOwner","type"],"type":"object"},"FeatureCreationSessionMetadata":{"properties":{"override":{"type":"boolean"},"priority":{"enum":["HIGH","NORMAL","LOW"],"type":"string"},"session":{"maxLength":128,"minLength":0,"type":"string"},"sessionOwner":{"maxLength":128,"minLength":0,"type":"string"},"storages":{"items":{"$ref":"#/components/schemas/StorageMetadata"},"type":"array"},"updateIfExists":{"type":"boolean"}},"required":["priority","session","sessionOwner"],"type":"object"},"FeatureDeletionCollection":{"properties":{"featuresUrns":{"items":{"$ref":"#/components/schemas/FeatureUniformResourceName"},"type":"array","uniqueItems":true},"priority":{"enum":["HIGH","NORMAL","LOW"],"type":"string"}},"type":"object"},"FeatureDisseminationInfoDto":{"type":"object"},"FeatureEntityDto":{"properties":{"disseminationPending":{"type":"boolean"},"disseminationsInfo":{"items":{"$ref":"#/components/schemas/FeatureDisseminationInfoDto"},"type":"array","uniqueItems":true},"feature":{"$ref":"#/components/schemas/Feature"},"id":{"format":"int64","type":"integer"},"lastUpdate":{"format":"date-time","type":"string"},"providerId":{"type":"string"},"session":{"type":"string"},"source":{"type":"string"},"urn":{"$ref":"#/components/schemas/FeatureUniformResourceName"},"version":{"format":"int32","type":"integer"}},"required":["id","lastUpdate","providerId","session","source","urn","version"],"type":"object"},"FeatureFile":{"properties":{"attributes":{"$ref":"#/components/schemas/FeatureFileAttributes"},"locations":{"items":{"$ref":"#/components/schemas/FeatureFileLocation"},"type":"array","uniqueItems":true}},"required":["attributes","locations"],"type":"object"},"FeatureFileAttributes":{"properties":{"algorithm":{"type":"string"},"checksum":{"type":"string"},"crc32":{"type":"string"},"dataType":{"enum":["RAWDATA","QUICKLOOK_SD","QUICKLOOK_MD","QUICKLOOK_HD","DOCUMENT","THUMBNAIL","OTHER","AIP","DESCRIPTION"],"type":"string"},"filename":{"type":"string"},"filesize":{"format":"int64","type":"integer"},"mimeType":{"$ref":"#/components/schemas/MimeType"}},"required":["algorithm","checksum","dataType","filename","filesize","mimeType"],"type":"object"},"FeatureFileLocation":{"properties":{"storage":{"type":"string"},"url":{"type":"string"}},"required":["url"],"type":"object"},"FeatureHistory":{"properties":{"createdBy":{"type":"string"},"deletedBy":{"type":"string"},"updatedBy":{"type":"string"}},"type":"object"},"FeatureMetadata":{"properties":{"priority":{"enum":["HIGH","NORMAL","LOW"],"type":"string"},"storages":{"items":{"$ref":"#/components/schemas/StorageMetadata"},"type":"array"}},"required":["priority"],"type":"object"},"FeatureRequestSearchParameters":{"properties":{"from":{"format":"date-time","type":"string"},"providerId":{"type":"string"},"session":{"type":"string"},"source":{"type":"string"},"state":{"enum":["GRANTED","DENIED","SUCCESS","ERROR"],"type":"string"},"steps":{"items":{"enum":["LOCAL_DENIED","LOCAL_DELAYED","LOCAL_SCHEDULED","LOCAL_ERROR","LOCAL_NOTIFICATION_ERROR","REMOTE_STORAGE_DELETION_REQUESTED","REMOTE_STORAGE_REQUESTED","LOCAL_TO_BE_NOTIFIED","REMOTE_NOTIFICATION_REQUESTED","REMOTE_NOTIFICATION_SUCCESS","REMOTE_NOTIFICATION_ERROR","REMOTE_CREATION_REQUESTED","REMOTE_CREATION_ERROR","REMOTE_STORAGE_ERROR"],"type":"string"},"type":"array"},"to":{"format":"date-time","type":"string"}},"type":"object"},"FeatureRequestsSelectionDTO":{"properties":{"filters":{"$ref":"#/components/schemas/FeatureRequestSearchParameters"},"requestIdSelectionMode":{"enum":["INCLUDE","EXCLUDE"],"type":"string"},"requestIds":{"items":{"format":"int64","type":"integer"},"type":"array"}},"type":"object"},"FeatureUniformResourceName":{"properties":{"entityId":{"format":"uuid","type":"string"},"entityType":{"enum":["COLLECTION","DATA","DATASET"],"type":"string"},"identifier":{"type":"string"},"last":{"type":"boolean"},"order":{"format":"int64","type":"integer"},"randomEntityId":{"type":"boolean"},"revision":{"type":"string"},"tenant":{"type":"string"},"version":{"format":"int32","maximum":999,"minimum":1,"type":"integer"}},"required":["entityId","entityType","identifier","tenant"],"type":"object"},"FeatureUpdateCollection":{"properties":{"bbox":{"items":{"format":"double","type":"number"},"type":"array"},"crs":{"type":"string"},"features":{"items":{"$ref":"#/components/schemas/Feature"},"type":"array"},"metadata":{"$ref":"#/components/schemas/FeatureMetadata"},"requestOwner":{"type":"string"},"type":{"enum":["FEATURE","FEATURE_COLLECTION","POINT","MULTIPOINT","LINESTRING","MULTILINESTRING","POLYGON","MULTIPOLYGON","GEOMETRY_COLLECTION","UNLOCATED"],"type":"string"}},"required":["requestOwner","type"],"type":"object"},"FeaturesSearchParameters":{"properties":{"disseminationPending":{"type":"boolean"},"from":{"format":"date-time","type":"string"},"full":{"type":"boolean"},"model":{"type":"string"},"providerId":{"type":"string"},"session":{"type":"string"},"source":{"type":"string"},"to":{"format":"date-time","type":"string"}},"type":"object"},"FeaturesSelectionDTO":{"properties":{"featureIds":{"items":{"format":"int64","type":"integer"},"type":"array"},"featureIdsSelectionMode":{"enum":["INCLUDE","EXCLUDE"],"type":"string"},"filters":{"$ref":"#/components/schemas/FeaturesSearchParameters"}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"IGeometry":{"properties":{"crs":{"type":"string","writeOnly":true},"type":{"enum":["FEATURE","FEATURE_COLLECTION","POINT","MULTIPOINT","LINESTRING","MULTILINESTRING","POLYGON","MULTIPOLYGON","GEOMETRY_COLLECTION","UNLOCATED"],"type":"string"}},"type":"object"},"IPluginParam":{"properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"value":{"type":"object"}},"type":"object"},"IPropertyObject":{"properties":{"name":{"type":"string"},"type":{"enum":["STRING","JSON","INTEGER","DOUBLE","DATE_ISO8601","URL","BOOLEAN","STRING_ARRAY","INTEGER_ARRAY","DOUBLE_ARRAY","DATE_ARRAY","INTEGER_INTERVAL","DOUBLE_INTERVAL","DATE_INTERVAL","LONG","LONG_INTERVAL","LONG_ARRAY","OBJECT"],"type":"string"},"value":{"type":"object"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MimeType":{"properties":{"charset":{"properties":{"registered":{"type":"boolean"}},"type":"object"},"concrete":{"type":"boolean"},"parameters":{"additionalProperties":{"type":"string"},"type":"object"},"subtype":{"type":"string"},"type":{"type":"string"},"wildcardSubtype":{"type":"boolean"},"wildcardType":{"type":"boolean"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"MultimapObjectString":{"properties":{"empty":{"type":"boolean"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"offset":{"format":"int64","type":"integer"},"pageNumber":{"format":"int32","type":"integer"},"pageSize":{"format":"int32","type":"integer"},"paged":{"type":"boolean"},"sort":{"$ref":"#/components/schemas/Sort"},"unpaged":{"type":"boolean"}},"type":"object"},"PagedModelEntityModelFeatureEntityDto":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelFeatureEntityDto"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedResourcesAssemblerFeatureEntityDto":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"PluginConfiguration":{"properties":{"active":{"type":"boolean"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"iconUrl":{"format":"url","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"isActive":{"type":"boolean","writeOnly":true},"label":{"type":"string"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"parameters":{"items":{"$ref":"#/components/schemas/IPluginParam"},"type":"array","uniqueItems":true},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"priorityOrder":{"format":"int32","type":"integer"},"version":{"type":"string"}},"required":["label","priorityOrder"],"type":"object"},"PluginMetaData":{"properties":{"author":{"type":"string"},"contact":{"type":"string"},"description":{"type":"string"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"licence":{"type":"string","writeOnly":true},"license":{"type":"string"},"markdown":{"type":"string"},"owner":{"type":"string"},"parameters":{"items":{"$ref":"#/components/schemas/PluginParamDescriptor"},"type":"array"},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"url":{"type":"string"},"userMarkdown":{"type":"string"},"version":{"type":"string"}},"type":"object"},"PluginParamDescriptor":{"properties":{"defaultValue":{"type":"string"},"description":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"markdown":{"type":"string"},"name":{"type":"string"},"optional":{"type":"boolean"},"parameterizedSubTypes":{"items":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"type":"array"},"pluginType":{"type":"string"},"sensible":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"unconfigurable":{"type":"boolean"},"userMarkdown":{"type":"string"}},"type":"object"},"RequestHandledResponse":{"properties":{"message":{"type":"string"},"totalHandled":{"format":"int64","type":"integer"},"totalRequested":{"format":"int64","type":"integer"}},"type":"object"},"RequestsInfo":{"properties":{"nbErrors":{"format":"int64","type":"integer"}},"type":"object"},"RequestsPagedModelEntityModelFeatureRequestDTO":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelFeatureRequestDTO"},"type":"array"},"info":{"$ref":"#/components/schemas/RequestsInfo"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"Sort":{"properties":{"empty":{"type":"boolean"},"sorted":{"type":"boolean"},"unsorted":{"type":"boolean"}},"type":"object"},"StorageMetadata":{"properties":{"pluginBusinessId":{"type":"string"},"storePath":{"type":"string"},"targetTypes":{"items":{"enum":["RAWDATA","QUICKLOOK_SD","QUICKLOOK_MD","QUICKLOOK_HD","DOCUMENT","THUMBNAIL","OTHER","AIP","DESCRIPTION"],"type":"string"},"type":"array","uniqueItems":true}},"required":["pluginBusinessId"],"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"http://vm-perf.cloud-espace.si.c-s.fr:80/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Feature management API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE FEM","version":"1.8.0"},"openapi":"3.0.1","paths":{"/admin/features":{"get":{"description":"Get features according to search parameters","operationId":"getFeatures","parameters":[{"description":"Features selection filters","in":"query","name":"selection","required":true,"schema":{"$ref":"#/components/schemas/FeaturesSearchParameters"}},{"in":"query","name":"page","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerFeatureEntityDto"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelFeatureEntityDto"}}},"description":"Get features according to search parameters"}},"summary":"Get features according to search parameters","tags":["feature-entity-controler"]}},"/admin/features/delete":{"delete":{"description":"Delete features according to search parameters","operationId":"deleteFeatures_1","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FeaturesSelectionDTO"}}},"description":"Features selection filters","required":true},"responses":{"200":{"description":"Delete features according to search parameters"}},"summary":"Delete features according to search parameters","tags":["feature-entity-controler"]}},"/admin/features/notify":{"post":{"description":"Notify features according to search parameters","operationId":"notifyFeatures","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FeaturesSelectionDTO"}}},"description":"Features selection filters","required":true},"responses":{"200":{"description":"Notify features according to search parameters"}},"summary":"Notify features according to search parameters","tags":["feature-entity-controler"]}},"/admin/features/{urn}":{"get":{"description":"Retrieve one feature by its urn","operationId":"getFeature","parameters":[{"description":"URN of the feature","in":"path","name":"urn","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FeatureEntityDto"}}},"description":"Retrieve one feature by its urn"}},"summary":"Retrieve one feature by its urn","tags":["feature-entity-controler"]}},"/dumps/reset":{"patch":{"operationId":"resetLastDumpDate","responses":{"200":{"description":"default response"}},"tags":["dump-controller"]}},"/features":{"delete":{"description":"Publish urns collection to delete and return urns of granted and denied requests","operationId":"deleteFeatures","requestBody":{"content":{"application/geo+json":{"schema":{"$ref":"#/components/schemas/FeatureDeletionCollection"}}},"description":"Contain all Features to handle","required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelRequestInfoObject"}}},"description":"A RequestInfo"}},"summary":"Publish urns collection to delete and return urns of granted and denied requests","tags":["feature-controller"]},"patch":{"description":"Publish a feature collection to update  and return urns of granted and denied requests","operationId":"updateFeatures","requestBody":{"content":{"application/geo+json":{"schema":{"$ref":"#/components/schemas/FeatureUpdateCollection"}}},"description":"Contain all Features to handle","required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelRequestInfoObject"}}},"description":"A RequestInfo"}},"summary":"Publish a feature collection to update and return urns of granted and denied requests","tags":["feature-controller"]},"post":{"description":"Publish a new feature and return the request id","operationId":"createFeatures","requestBody":{"content":{"application/geo+json":{"schema":{"$ref":"#/components/schemas/FeatureCreationCollection"}}},"description":"Contain all Features to handle","required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelRequestInfoObject"}}},"description":"A RequestInfo"}},"summary":"Publish a new feature and return the request id","tags":["feature-controller"]}},"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"default response"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"default response"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"default response"}},"tags":["module-manager-controller"]}},"/plugins":{"get":{"operationId":"getPlugins","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"},"type":"array"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/cache":{"delete":{"operationId":"emptyCache","responses":{"200":{"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/configs":{"get":{"operationId":"getPluginConfigurationsByType","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/configs/{configBusinessId}":{"get":{"operationId":"getPluginConfigurationDirectAccess","parameters":[{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}":{"get":{"operationId":"getPluginMetaDataById","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config":{"get":{"operationId":"getPluginConfigurations","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"default response"}},"tags":["plugin-controller"]},"post":{"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config/{configBusinessId}":{"delete":{"operationId":"deletePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}},"tags":["plugin-controller"]},"get":{"operationId":"getPluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"default response"}},"tags":["plugin-controller"]},"put":{"operationId":"updatePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/plugintypes":{"get":{"operationId":"getPluginTypes","parameters":[{"in":"query","name":"available","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelString"},"type":"array"}}},"description":"default response"}},"tags":["plugin-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"default response"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"default response"}},"tags":["jpa-multitenant-controller"]}},"/requests/delete/{type}":{"delete":{"description":"Delete feature requests by selection. Synchronous process, so the number of request handled is limited. Information about number of requests handled is returned in the response.","operationId":"deleteRequests","parameters":[{"description":"Type of requests to search for","in":"path","name":"type","required":true,"schema":{"enum":["COPY","UPDATE","NOTIFICATION","CREATION","DELETION","SAVE_METADATA"],"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FeatureRequestsSelectionDTO"}}},"description":"Requests selection","required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestHandledResponse"}}},"description":"Delete feature requests by selection"}},"summary":"Delete feature requests by selection","tags":["feature-request-controller"]}},"/requests/retry/{type}":{"post":{"description":"Retry feature requests by selection. Synchronous process, so the number of request handled is limited. Information about number of requests handled is returned in the response.\\")","operationId":"retryRequests","parameters":[{"description":"Type of requests to search for","in":"path","name":"type","required":true,"schema":{"enum":["COPY","UPDATE","NOTIFICATION","CREATION","DELETION","SAVE_METADATA"],"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FeatureRequestsSelectionDTO"}}},"description":"Requests selection","required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestHandledResponse"}}},"description":"Retry feature requests by selection"}},"summary":"Retry feature requests by selection","tags":["feature-request-controller"]}},"/requests/search/{type}":{"get":{"description":"Get feature requests","operationId":"getRequests","parameters":[{"description":"Type of requests to search for","in":"path","name":"type","required":true,"schema":{"enum":["COPY","UPDATE","NOTIFICATION","CREATION","DELETION","SAVE_METADATA"],"type":"string"}},{"in":"query","name":"parameters","required":true,"schema":{"$ref":"#/components/schemas/FeatureRequestSearchParameters"}},{"in":"query","name":"page","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestsPagedModelEntityModelFeatureRequestDTO"}}},"description":"Get feature requests"}},"summary":"Get feature requests","tags":["feature-request-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"default response"}},"tags":["security-resources-controller"]}},"/settings":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"names","required":false,"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"},"type":"array"}}},"description":"default response"}},"tags":["dynamic-tenant-setting-controller"]}},"/settings/{name}":{"delete":{"operationId":"reset","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}},"description":"default response"}},"tags":["dynamic-tenant-setting-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}},"description":"default response"}},"tags":["dynamic-tenant-setting-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"default response"}},"tags":["manager-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-fem"}]}'),i={id:"backend-fem-api-swagger",title:"REGARDS fem microservice API",sidebar_label:"API",slug:"/development/backend/services/fem/api-swagger",hide_title:!0,hide_table_of_contents:!0},p=void 0,c={unversionedId:"development/backend/regards/fem/backend-fem-api-swagger",id:"version-1.8.1/development/backend/regards/fem/backend-fem-api-swagger",title:"REGARDS fem microservice API",description:"",source:"@site/versioned_docs/version-1.8.1/development/backend/regards/fem/fem-api-swagger.mdx",sourceDirName:"development/backend/regards/fem",slug:"/development/backend/services/fem/api-swagger",permalink:"/docs/1.8.1/development/backend/services/fem/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.1/development/backend/regards/fem/fem-api-swagger.mdx",tags:[],version:"1.8.1",frontMatter:{id:"backend-fem-api-swagger",title:"REGARDS fem microservice API",sidebar_label:"API",slug:"/development/backend/services/fem/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.8.1/development/backend/services/fem/overview/"},next:{title:"Feature Manager configuration",permalink:"/docs/1.8.1/development/backend/services/fem/api/configuration/"}},m={},u=[],y={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{spec:a,mdxType:"RegardsApiDoc"}))}d.isMDXComponent=!0},16212:()=>{},15101:()=>{},78836:()=>{},42116:()=>{},34904:()=>{},6918:()=>{},84819:()=>{},23197:()=>{},60996:()=>{}}]);