(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[40483],{14420:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(20771).Z},94824:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>y});var r=n(87462),i=(n(67294),n(3905)),o=n(14420);const s=JSON.parse('{"components":{"schemas":{"AccessRightInformation":{"properties":{"dataRights":{"type":"string"},"licence":{"type":"string"},"publicReleaseDate":{"format":"date-time","type":"string"}},"required":["dataRights"],"type":"object"},"AcquisitionFile":{"properties":{"acqDate":{"format":"date-time","type":"string"},"error":{"type":"string"},"fileInfo":{"$ref":"#/components/schemas/AcquisitionFileInfo"},"filePath":{"properties":{"absolute":{"type":"boolean"},"fileName":{"properties":{"absolute":{"type":"boolean"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"}},"type":"string"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"},"parent":{"properties":{"absolute":{"type":"boolean"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"}},"type":"string"},"root":{"properties":{"absolute":{"type":"boolean"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"}},"type":"string"}},"type":"string"},"id":{"format":"int64","type":"integer"},"product":{"$ref":"#/components/schemas/Product"},"state":{"enum":["IN_PROGRESS","VALID","INVALID","ACQUIRED","SUPERSEDED","SUPERSEDED_AFTER_ERROR","ERROR"],"type":"string"}},"required":["acqDate","fileInfo","filePath"],"type":"object"},"AcquisitionFileInfo":{"properties":{"comment":{"type":"string"},"dataType":{"enum":["RAWDATA","QUICKLOOK_SD","QUICKLOOK_MD","QUICKLOOK_HD","DOCUMENT","THUMBNAIL","OTHER","AIP","DESCRIPTION"],"type":"string"},"id":{"format":"int64","type":"integer"},"mandatory":{"type":"boolean"},"mimeType":{"type":"string"},"scanDirInfo":{"items":{"$ref":"#/components/schemas/ScanDirectoryInfo"},"maxItems":2147483647,"minItems":1,"type":"array","uniqueItems":true},"scanPlugin":{"$ref":"#/components/schemas/PluginConfiguration"}},"required":["dataType","mandatory","mimeType","scanDirInfo","scanPlugin"],"type":"object"},"AcquisitionProcessingChain":{"properties":{"active":{"type":"boolean"},"categories":{"items":{"type":"string"},"type":"array","uniqueItems":true},"fileInfos":{"items":{"$ref":"#/components/schemas/AcquisitionFileInfo"},"maxItems":2147483647,"minItems":1,"type":"array","uniqueItems":true},"generateSipPluginConf":{"$ref":"#/components/schemas/PluginConfiguration"},"id":{"format":"int64","type":"integer"},"ingestChain":{"type":"string"},"label":{"type":"string"},"lastActivationDate":{"format":"date-time","type":"string"},"locked":{"type":"boolean"},"mode":{"enum":["MANUAL","AUTO"],"type":"string"},"periodicity":{"pattern":"0 .*","type":"string"},"postProcessSipPluginConf":{"$ref":"#/components/schemas/PluginConfiguration"},"productPluginConf":{"$ref":"#/components/schemas/PluginConfiguration"},"productsStored":{"type":"boolean"},"referenceLocation":{"type":"string"},"storages":{"items":{"$ref":"#/components/schemas/StorageMetadataProvider"},"type":"array"},"validationPluginConf":{"$ref":"#/components/schemas/PluginConfiguration"},"versioningMode":{"enum":["IGNORE","INC_VERSION","MANUAL","REPLACE"],"type":"string"}},"required":["active","categories","fileInfos","generateSipPluginConf","ingestChain","label","mode","productPluginConf","productsStored","storages","validationPluginConf"],"type":"object"},"AcquisitionProcessingChainMonitor":{"properties":{"active":{"type":"boolean"},"chain":{"$ref":"#/components/schemas/AcquisitionProcessingChain"},"deletionPending":{"type":"boolean"},"executionBlockers":{"items":{"type":"string"},"type":"array"}},"type":"object"},"ContentInformation":{"properties":{"dataObject":{"$ref":"#/components/schemas/OAISDataObject"},"representationInformation":{"$ref":"#/components/schemas/RepresentationInformation"}},"required":["dataObject","representationInformation"],"type":"object"},"EntityModelAcquisitionFile":{"properties":{"content":{"$ref":"#/components/schemas/AcquisitionFile"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelAcquisitionProcessingChain":{"properties":{"content":{"$ref":"#/components/schemas/AcquisitionProcessingChain"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelAcquisitionProcessingChainMonitor":{"properties":{"content":{"$ref":"#/components/schemas/AcquisitionProcessingChainMonitor"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginConfiguration":{"properties":{"content":{"$ref":"#/components/schemas/PluginConfiguration"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginMetaData":{"properties":{"content":{"$ref":"#/components/schemas/PluginMetaData"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelProduct":{"properties":{"content":{"$ref":"#/components/schemas/Product"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelString":{"properties":{"content":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EnvironmentDescription":{"properties":{"hardwareEnvironment":{"additionalProperties":{"type":"object"},"type":"object"},"softwareEnvironment":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"Event":{"properties":{"comment":{"type":"string"},"date":{"format":"date-time","type":"string"},"type":{"type":"string"}},"required":["comment","date"],"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"IGeometry":{"properties":{"crs":{"type":"string","writeOnly":true},"type":{"type":"string"}},"type":"object"},"IPluginParam":{"properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"value":{"type":"object"}},"type":"object"},"InformationPackageProperties":{"properties":{"contentInformations":{"items":{"$ref":"#/components/schemas/ContentInformation"},"type":"array"},"descriptiveInformation":{"additionalProperties":{"type":"object"},"type":"object"},"pdi":{"$ref":"#/components/schemas/PreservationDescriptionInformation"}},"required":["pdi"],"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"OAISDataObject":{"properties":{"algorithm":{"type":"string"},"checksum":{"type":"string"},"fileSize":{"format":"int64","type":"integer"},"filename":{"type":"string"},"locations":{"items":{"$ref":"#/components/schemas/OAISDataObjectLocation"},"type":"array","uniqueItems":true},"regardsDataType":{"enum":["RAWDATA","QUICKLOOK_SD","QUICKLOOK_MD","QUICKLOOK_HD","DOCUMENT","THUMBNAIL","OTHER","AIP","DESCRIPTION"],"type":"string"}},"required":["checksum","filename","locations","regardsDataType"],"type":"object"},"OAISDataObjectLocation":{"properties":{"storage":{"type":"string"},"storePath":{"type":"string"},"url":{"pattern":"\\\\b[a-zA-Z1-9]+://?[-a-zA-Z0-9+&@#/%\'?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%\'=~_|]","type":"string"}},"required":["url"],"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelAcquisitionFile":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelAcquisitionFile"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelAcquisitionProcessingChain":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelAcquisitionProcessingChain"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelAcquisitionProcessingChainMonitor":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelAcquisitionProcessingChainMonitor"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelProduct":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelProduct"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PluginConfiguration":{"properties":{"active":{"type":"boolean"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"iconUrl":{"format":"url","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"isActive":{"type":"boolean","writeOnly":true},"label":{"type":"string"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"parameters":{"items":{"$ref":"#/components/schemas/IPluginParam"},"type":"array","uniqueItems":true},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"priorityOrder":{"format":"int32","type":"integer"},"version":{"type":"string"}},"required":["label","priorityOrder"],"type":"object"},"PluginMetaData":{"properties":{"author":{"type":"string"},"contact":{"type":"string"},"description":{"type":"string"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"licence":{"type":"string","writeOnly":true},"license":{"type":"string"},"markdown":{"type":"string"},"owner":{"type":"string"},"parameters":{"items":{"$ref":"#/components/schemas/PluginParamDescriptor"},"type":"array"},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"url":{"type":"string"},"userMarkdown":{"type":"string"},"version":{"type":"string"}},"type":"object"},"PluginParamDescriptor":{"properties":{"defaultValue":{"type":"string"},"description":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"markdown":{"type":"string"},"name":{"type":"string"},"optional":{"type":"boolean"},"parameterizedSubTypes":{"items":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"type":"array"},"pluginType":{"type":"string"},"sensible":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"unconfigurable":{"type":"boolean"},"userMarkdown":{"type":"string"}},"type":"object"},"PreservationDescriptionInformation":{"properties":{"accessRightInformation":{"$ref":"#/components/schemas/AccessRightInformation"},"contextInformation":{"additionalProperties":{"type":"object"},"type":"object"},"fixityInformation":{"additionalProperties":{"type":"object"},"type":"object"},"provenanceInformation":{"$ref":"#/components/schemas/ProvenanceInformation"},"referenceInformation":{"additionalProperties":{"type":"string"},"type":"object"},"tags":{"items":{"type":"string"},"type":"array"}},"required":["accessRightInformation","contextInformation","fixityInformation","provenanceInformation","referenceInformation"],"type":"object"},"Product":{"properties":{"acquisitionFiles":{"items":{"$ref":"#/components/schemas/AcquisitionFile"},"type":"array","uniqueItems":true},"activeAcquisitionFiles":{"items":{"$ref":"#/components/schemas/AcquisitionFile"},"type":"array","uniqueItems":true},"error":{"type":"string"},"id":{"format":"int64","type":"integer"},"ipId":{"type":"string"},"lastUpdate":{"format":"date-time","type":"string"},"processingChain":{"$ref":"#/components/schemas/AcquisitionProcessingChain"},"productName":{"type":"string"},"session":{"type":"string"},"sip":{"$ref":"#/components/schemas/SIP"},"sipState":{"type":"string"},"state":{"enum":["ACQUIRING","COMPLETED","FINISHED","INVALID","UPDATED","CANCELED"],"type":"string"}},"required":["processingChain","productName","session"],"type":"object"},"ProvenanceInformation":{"properties":{"additional":{"additionalProperties":{"type":"object"},"type":"object"},"detector":{"type":"string"},"facility":{"type":"string"},"filter":{"type":"string"},"history":{"items":{"$ref":"#/components/schemas/Event"},"type":"array"},"instrument":{"type":"string"},"originUrn":{"type":"string"},"proposal":{"type":"string"}},"required":["history"],"type":"object"},"RepresentationInformation":{"properties":{"environmentDescription":{"$ref":"#/components/schemas/EnvironmentDescription"},"semantic":{"$ref":"#/components/schemas/Semantic"},"syntax":{"$ref":"#/components/schemas/Syntax"}},"required":["syntax"],"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"SIP":{"properties":{"bbox":{"items":{"format":"double","type":"number"},"type":"array"},"crs":{"type":"string"},"geometry":{"$ref":"#/components/schemas/IGeometry"},"history":{"items":{"$ref":"#/components/schemas/Event"},"type":"array"},"id":{"type":"string"},"ipType":{"enum":["COLLECTION","DATA","DATASET"],"type":"string"},"lastEvent":{"$ref":"#/components/schemas/Event"},"normalizedGeometry":{"$ref":"#/components/schemas/IGeometry"},"properties":{"$ref":"#/components/schemas/InformationPackageProperties"},"ref":{"$ref":"#/components/schemas/SIPReference"},"submissionEvent":{"$ref":"#/components/schemas/Event"},"tags":{"items":{"type":"string"},"type":"array"},"type":{"type":"string"}},"required":["ipType","type"],"type":"object"},"SIPReference":{"properties":{"algorithm":{"type":"string"},"checksum":{"type":"string"},"url":{"format":"url","type":"string"}},"required":["algorithm","checksum","url"],"type":"object"},"ScanDirectoryInfo":{"properties":{"id":{"format":"int64","type":"integer"},"lastModificationDate":{"format":"date-time","type":"string"},"scannedDirectory":{"properties":{"absolute":{"type":"boolean"},"fileName":{"properties":{"absolute":{"type":"boolean"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"}},"type":"string"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"},"parent":{"properties":{"absolute":{"type":"boolean"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"}},"type":"string"},"root":{"properties":{"absolute":{"type":"boolean"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"}},"type":"string"}},"type":"string"}},"type":"object"},"Semantic":{"properties":{"description":{"type":"string"}},"required":["description"],"type":"object"},"StorageMetadataProvider":{"properties":{"pluginBusinessId":{"maxLength":128,"minLength":1,"type":"string"},"storePath":{"maxLength":2048,"minLength":0,"type":"string"},"targetTypes":{"items":{"enum":["RAWDATA","QUICKLOOK_SD","QUICKLOOK_MD","QUICKLOOK_HD","DOCUMENT","THUMBNAIL","OTHER","AIP","DESCRIPTION"],"type":"string"},"type":"array","uniqueItems":true}},"required":["pluginBusinessId","targetTypes"],"type":"object"},"Syntax":{"properties":{"description":{"type":"string"},"height":{"format":"double","type":"number"},"mimeType":{"type":"string"},"name":{"type":"string"},"width":{"format":"double","type":"number"}},"required":["mimeType"],"type":"object"},"UpdateAcquisitionProcessingChain":{"properties":{"active":{"type":"boolean"},"mode":{"enum":["MANUAL","AUTO"],"type":"string"},"updateType":{"enum":["ONLY_ACTIVITY","ONLY_MODE","ALL"],"type":"string"}},"type":"object"},"UpdateAcquisitionProcessingChains":{"properties":{"active":{"type":"boolean"},"chainIds":{"items":{"format":"int64","type":"integer"},"type":"array"},"mode":{"enum":["MANUAL","AUTO"],"type":"string"},"updateType":{"enum":["ONLY_ACTIVITY","ONLY_MODE","ALL"],"type":"string"}},"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Data Provider API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE DATAPROVIDER","version":"1.14.0"},"openapi":"3.0.1","paths":{"/acquisition-files":{"get":{"operationId":"search_2","parameters":[{"in":"query","name":"filePath","required":false,"schema":{"type":"string"}},{"in":"query","name":"state","required":false,"schema":{"items":{"enum":["IN_PROGRESS","VALID","INVALID","ACQUIRED","SUPERSEDED","SUPERSEDED_AFTER_ERROR","ERROR"],"type":"string"},"type":"array"}},{"in":"query","name":"productId","required":false,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"chainId","required":false,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"from","required":false,"schema":{"format":"date-time","type":"string"}},{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelAcquisitionFile"}}},"description":"OK"}},"tags":["acquisition-file-controller"]}},"/chain-monitoring":{"get":{"description":"Return a page of acquisition processing chain monitors","operationId":"search_1","parameters":[{"in":"query","name":"mode","required":false,"schema":{"enum":["MANUAL","AUTO"],"type":"string"}},{"in":"query","name":"running","required":false,"schema":{"type":"boolean"}},{"in":"query","name":"label","required":false,"schema":{"type":"string"}},{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelAcquisitionProcessingChainMonitor"}}},"description":"All acquisition processing chain monitors were retrieved."}},"summary":"Get acquisition processing chain monitors","tags":["monitoring-controller"]}},"/chains":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelAcquisitionProcessingChain"}}},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]},"patch":{"operationId":"updateChainsStateAndMode","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/UpdateAcquisitionProcessingChains"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelAcquisitionProcessingChain"},"type":"array"}}},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]},"post":{"operationId":"create","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AcquisitionProcessingChain"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAcquisitionProcessingChain"}}},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/chains/products":{"delete":{"operationId":"deleteProducts","parameters":[{"in":"query","name":"chainName","required":true,"schema":{"type":"string"}},{"in":"query","name":"session","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/chains/relaunch":{"get":{"operationId":"relaunchErrors","parameters":[{"in":"query","name":"chainName","required":true,"schema":{"type":"string"}},{"in":"query","name":"session","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/chains/{chainId}":{"delete":{"operationId":"delete","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["acquisition-processing-chain-controller"]},"get":{"operationId":"get_1","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAcquisitionProcessingChain"}}},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]},"patch":{"operationId":"updateStateAndMode","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/UpdateAcquisitionProcessingChain"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAcquisitionProcessingChain"}}},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AcquisitionProcessingChain"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAcquisitionProcessingChain"}}},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/chains/{chainId}/start":{"get":{"operationId":"startManualChain","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"session","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAcquisitionProcessingChain"}}},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/chains/{chainId}/stop":{"get":{"operationId":"stopChain","parameters":[{"in":"path","name":"chainId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAcquisitionProcessingChain"}}},"description":"OK"}},"tags":["acquisition-processing-chain-controller"]}},"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"multipart/form-data":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/plugins":{"get":{"operationId":"getPlugins","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/cache":{"delete":{"operationId":"emptyCache","responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/configs":{"get":{"description":"Return a list of plugin configurations for a specific type","operationId":"getPluginConfigurationsByType","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"All plugin configurations for a specific type were retrieved."}},"summary":"Get plugin configurations","tags":["plugin-controller"]}},"/plugins/configs/{configBusinessId}":{"get":{"operationId":"getPluginConfigurationDirectAccess","parameters":[{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}":{"get":{"operationId":"getPluginMetaDataById","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config":{"get":{"operationId":"getPluginConfigurations","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]},"post":{"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config/{configBusinessId}":{"delete":{"operationId":"deletePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]},"get":{"operationId":"getPluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]},"put":{"operationId":"updatePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugintypes":{"get":{"operationId":"getPluginTypes","parameters":[{"in":"query","name":"available","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelString"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/products":{"get":{"operationId":"search","parameters":[{"in":"query","name":"state","required":false,"schema":{"items":{"enum":["ACQUIRING","COMPLETED","FINISHED","INVALID","UPDATED","CANCELED"],"type":"string"},"type":"array"}},{"in":"query","name":"sipState","required":false,"schema":{"items":{"type":"string"},"type":"array"}},{"in":"query","name":"productName","required":false,"schema":{"type":"string"}},{"in":"query","name":"session","required":false,"schema":{"type":"string"}},{"in":"query","name":"chainId","required":false,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"nosession","required":false,"schema":{"type":"boolean"}},{"in":"query","name":"from","required":false,"schema":{"format":"date-time","type":"string"}},{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelProduct"}}},"description":"OK"}},"tags":["product-controller"]}},"/products/{productId}":{"get":{"operationId":"get","parameters":[{"in":"path","name":"productId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProduct"}}},"description":"OK"}},"tags":["product-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-dataprovider"}]}'),a={id:"backend-dataprovider-api-swagger",title:"REGARDS dataprovider microservice API",sidebar_label:"API",slug:"/development/backend/services/dataprovider/api-swagger",hide_title:!0,hide_table_of_contents:!0},p=void 0,c={unversionedId:"development/backend/regards/dataprovider/backend-dataprovider-api-swagger",id:"development/backend/regards/dataprovider/backend-dataprovider-api-swagger",title:"REGARDS dataprovider microservice API",description:"",source:"@site/docs/development/backend/regards/dataprovider/dataprovider-api-swagger.mdx",sourceDirName:"development/backend/regards/dataprovider",slug:"/development/backend/services/dataprovider/api-swagger",permalink:"/docs/next/development/backend/services/dataprovider/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dataprovider/dataprovider-api-swagger.mdx",tags:[],version:"current",frontMatter:{id:"backend-dataprovider-api-swagger",title:"REGARDS dataprovider microservice API",sidebar_label:"API",slug:"/development/backend/services/dataprovider/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/next/development/backend/services/dataprovider/overview/"},next:{title:"Post processing",permalink:"/docs/next/development/backend/services/dataprovider/plugins/post-processing/"}},m={},y=[],g={toc:y},d="wrapper";function l(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{spec:s,mdxType:"RegardsApiDoc"}))}l.isMDXComponent=!0},26242:()=>{},11314:()=>{},67251:()=>{},99018:()=>{},43044:()=>{},3408:()=>{},35126:()=>{}}]);