(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[91991],{14420:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(67294),n=r(19992);const o=function(e){let{spec:t}=e;return s.createElement(n.Z,{spec:t})}},32358:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var s=r(87462),n=(r(67294),r(3905)),o=r(14420);const a=JSON.parse('{"components":{"schemas":{"BasketDatasetSelectionDto":{"properties":{"datasetIpid":{"type":"string"},"datasetLabel":{"type":"string"},"filesCount":{"format":"int64","type":"integer"},"filesSize":{"format":"int64","type":"integer"},"id":{"format":"int64","type":"integer"},"itemsSelections":{"items":{"$ref":"#/components/schemas/BasketDatedItemsSelectionDto"},"type":"array","uniqueItems":true},"objectsCount":{"format":"int32","type":"integer"},"processDatasetDescription":{"$ref":"#/components/schemas/ProcessDatasetDescription"},"quota":{"format":"int64","type":"integer"}},"type":"object"},"BasketDatedItemsSelectionDto":{"properties":{"date":{"format":"date-time","type":"string"},"filesCount":{"format":"int64","type":"integer"},"filesSize":{"format":"int64","type":"integer"},"objectsCount":{"format":"int32","type":"integer"},"quota":{"format":"int64","type":"integer"},"selectionRequest":{"$ref":"#/components/schemas/BasketSelectionRequest"}},"type":"object"},"BasketSelectionRequest":{"properties":{"datasetUrn":{"type":"string"},"engineType":{"type":"string"},"entityIdsToExclude":{"items":{"type":"string"},"type":"array","uniqueItems":true},"entityIdsToInclude":{"items":{"type":"string"},"type":"array","uniqueItems":true},"searchParameters":{"additionalProperties":{"items":{"type":"string"},"type":"array"},"properties":{"all":{"additionalProperties":{"type":"string"},"type":"object","writeOnly":true},"empty":{"type":"boolean"}},"type":"object"},"selectionDate":{"format":"date-time","type":"string"}},"required":["engineType"],"type":"object"},"DatasetTaskDto":{"properties":{"datasetLabel":{"type":"string"},"filesCount":{"format":"int64","type":"integer"},"filesSize":{"format":"int64","type":"integer"},"id":{"format":"int64","type":"integer"},"objectsCount":{"format":"int32","type":"integer"},"processingService":{"type":"string"}},"type":"object"},"DynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelBasketDto":{"properties":{"datasetSelections":{"items":{"$ref":"#/components/schemas/BasketDatasetSelectionDto"},"type":"array","uniqueItems":true},"id":{"format":"int64","type":"integer"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"owner":{"type":"string"},"quota":{"format":"int64","type":"integer"}},"type":"object"},"EntityModelDynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelOrderDataFile":{"properties":{"checksum":{"type":"string"},"crc32":{"type":"string"},"dataType":{"enum":["RAWDATA","QUICKLOOK_SD","QUICKLOOK_MD","QUICKLOOK_HD","DOCUMENT","THUMBNAIL","OTHER","AIP","DESCRIPTION"],"type":"string"},"digestAlgorithm":{"type":"string"},"downloadError":{"type":"string"},"filename":{"type":"string"},"filesize":{"format":"int64","type":"integer"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"imageHeight":{"format":"double","type":"number"},"imageWidth":{"format":"double","type":"number"},"ipId":{"$ref":"#/components/schemas/UniformResourceName"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"mimeType":{"$ref":"#/components/schemas/MimeType"},"online":{"type":"boolean"},"orderId":{"format":"int64","type":"integer"},"reference":{"type":"boolean"},"state":{"enum":["AVAILABLE","DOWNLOADED","DOWNLOAD_ERROR","PROCESSING_ERROR","ERROR","PENDING"],"type":"string"},"types":{"items":{"type":"string"},"type":"array","uniqueItems":true},"uri":{"type":"string"},"url":{"type":"string"}},"type":"object"},"EntityModelOrderDto":{"properties":{"availableFilesCount":{"format":"int32","type":"integer"},"creationDate":{"format":"date-time","type":"string"},"datasetTasks":{"items":{"$ref":"#/components/schemas/DatasetTaskDto"},"type":"array"},"expirationDate":{"format":"date-time","type":"string"},"filesInErrorCount":{"format":"int32","type":"integer"},"id":{"format":"int64","type":"integer"},"label":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"owner":{"type":"string"},"percentCompleted":{"format":"int32","type":"integer"},"status":{"enum":["PENDING","RUNNING","PAUSED","EXPIRED","FAILED","DONE_WITH_WARNING","DONE","DELETED","REMOVED"],"type":"string"},"statusDate":{"format":"date-time","type":"string"},"waitingForUser":{"type":"boolean"}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"InputStreamResource":{"properties":{"description":{"type":"string"},"file":{"format":"binary","type":"string"},"filename":{"type":"string"},"inputStream":{"type":"object"},"open":{"type":"boolean"},"readable":{"type":"boolean"},"uri":{"format":"uri","type":"string"},"url":{"format":"url","type":"string"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MimeType":{"properties":{"charset":{"properties":{"registered":{"type":"boolean"}},"type":"object"},"concrete":{"type":"boolean"},"parameters":{"additionalProperties":{"type":"string"},"type":"object"},"subtype":{"type":"string"},"type":{"type":"string"},"wildcardSubtype":{"type":"boolean"},"wildcardType":{"type":"boolean"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"OrderRequest":{"properties":{"label":{"type":"string"},"onSuccessUrl":{"type":"string"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"offset":{"format":"int64","type":"integer"},"pageNumber":{"format":"int32","type":"integer"},"pageSize":{"format":"int32","type":"integer"},"paged":{"type":"boolean"},"sort":{"$ref":"#/components/schemas/Sort"},"unpaged":{"type":"boolean"}},"type":"object"},"PagedModelEntityModelOrderDataFile":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelOrderDataFile"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelOrderDto":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelOrderDto"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedResourcesAssemblerOrderDataFile":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"ProcessDatasetDescription":{"properties":{"parameters":{"additionalProperties":{"type":"string"},"type":"object"},"processBusinessId":{"format":"uuid","type":"string"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"Sort":{"properties":{"empty":{"type":"boolean"},"sorted":{"type":"boolean"},"unsorted":{"type":"boolean"}},"type":"object"},"UniformResourceName":{"properties":{"entityId":{"format":"uuid","type":"string"},"entityType":{"enum":["COLLECTION","DATA","DATASET"],"type":"string"},"identifier":{"type":"string"},"last":{"type":"boolean"},"order":{"format":"int64","type":"integer"},"randomEntityId":{"type":"boolean"},"revision":{"type":"string"},"tenant":{"type":"string"},"version":{"format":"int32","maximum":999,"minimum":1,"type":"integer"}},"required":["entityId","entityType","identifier","tenant"],"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Order API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE ORDER","version":"1.8.1"},"openapi":"3.0.1","paths":{"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"default response"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"default response"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"default response"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"default response"}},"tags":["module-manager-controller"]}},"/order/basket":{"delete":{"operationId":"empty","responses":{"200":{"description":"default response"}},"tags":["basket-controller"]},"get":{"operationId":"get","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}},"description":"default response"}},"tags":["basket-controller"]}},"/order/basket/dataset/{datasetSelectionId}":{"delete":{"operationId":"removeDatasetSelection","parameters":[{"in":"path","name":"datasetSelectionId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}},"description":"default response"}},"tags":["basket-controller"]}},"/order/basket/dataset/{datasetSelectionId}/updateProcessing":{"put":{"operationId":"attachProcessDescriptionToDatasetSelection","parameters":[{"in":"path","name":"datasetSelectionId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProcessDatasetDescription"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}},"description":"default response"}},"tags":["basket-controller"]}},"/order/basket/dataset/{datasetSelectionId}/{itemsSelectionDate}":{"delete":{"operationId":"removeDatedItemsSelection","parameters":[{"in":"path","name":"datasetSelectionId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"path","name":"itemsSelectionDate","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}},"description":"default response"}},"tags":["basket-controller"]}},"/order/basket/selection":{"post":{"operationId":"addSelection","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/BasketSelectionRequest"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}},"description":"default response"}},"tags":["basket-controller"]}},"/orders":{"get":{"operationId":"findAllAdmin","parameters":[{"in":"query","name":"user","required":false,"schema":{"type":"string"}},{"in":"query","name":"pageRequest","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDto"}}},"description":"default response"}},"tags":["order-controller"]},"post":{"operationId":"createAppOrder","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OrderRequest"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}},"description":"default response"}},"tags":["order-controller"]}},"/orders/csv":{"get":{"operationId":"generateCsv","parameters":[{"in":"query","name":"status","required":false,"schema":{"enum":["PENDING","RUNNING","PAUSED","EXPIRED","FAILED","DONE_WITH_WARNING","DONE","DELETED","REMOVED"],"type":"string"}},{"in":"query","name":"from","required":false,"schema":{"type":"string"}},{"in":"query","name":"to","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}},"tags":["order-controller"]}},"/orders/files/{dataFileId}":{"get":{"operationId":"downloadFile","parameters":[{"in":"path","name":"dataFileId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/InputStreamResource"}}},"description":"default response"}},"tags":["order-data-file-controller"]}},"/orders/public/files/{dataFileId}":{"get":{"operationId":"publicDownloadFile","parameters":[{"in":"path","name":"dataFileId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"orderToken","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/InputStreamResource"}}},"description":"default response"}},"tags":["order-data-file-controller"]},"head":{"operationId":"testDownloadFile","parameters":[{"in":"path","name":"dataFileId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"orderToken","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/InputStreamResource"}}},"description":"default response"}},"tags":["order-data-file-controller"]}},"/orders/{orderId}/dataset/{datasetId}/files":{"get":{"operationId":"findFiles","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"path","name":"datasetId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"pageRequest","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerOrderDataFile"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDataFile"}}},"description":"default response"}},"tags":["order-data-file-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"default response"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"default response"}},"tags":["jpa-multitenant-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"default response"}},"tags":["security-resources-controller"]}},"/settings":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"names","required":false,"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"},"type":"array"}}},"description":"default response"}},"tags":["dynamic-tenant-setting-controller"]}},"/settings/{name}":{"delete":{"operationId":"reset","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}},"description":"default response"}},"tags":["dynamic-tenant-setting-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}},"description":"default response"}},"tags":["dynamic-tenant-setting-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"default response"}},"tags":["manager-controller"]}},"/user/orders":{"get":{"operationId":"findAll","parameters":[{"in":"query","name":"pageRequest","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDto"}}},"description":"default response"}},"tags":["order-controller"]},"post":{"operationId":"createOrder","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OrderRequest"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}},"description":"default response"}},"tags":["order-controller"]}},"/user/orders/metalink/download":{"get":{"operationId":"publicDownloadMetalinkFile","parameters":[{"in":"query","name":"orderToken","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}},"tags":["order-controller"]}},"/user/orders/pause/{orderId}":{"put":{"operationId":"pauseOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"default response"}},"tags":["order-controller"]}},"/user/orders/remove/{orderId}":{"delete":{"operationId":"removeOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"default response"}},"tags":["order-controller"]}},"/user/orders/resume/{orderId}":{"put":{"operationId":"resumeOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"default response"}},"tags":["order-controller"]}},"/user/orders/{orderId}":{"delete":{"operationId":"deleteOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"default response"}},"tags":["order-controller"]},"get":{"operationId":"retrieveOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}},"description":"default response"}},"tags":["order-controller"]}},"/user/orders/{orderId}/download":{"get":{"operationId":"downloadAllAvailableFiles","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"default response"}},"tags":["order-controller"]}},"/user/orders/{orderId}/metalink/download":{"get":{"operationId":"downloadMetalinkFile","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"default response"}},"tags":["order-controller"]}},"/user/orders/{orderId}/restart":{"post":{"operationId":"restartOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OrderRequest"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}},"description":"default response"}},"tags":["order-controller"]}},"/user/orders/{orderId}/retry":{"put":{"operationId":"retryOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"default response"}},"tags":["order-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-order"}]}'),i={id:"backend-order-api-swagger",title:"REGARDS order microservice API",sidebar_label:"API",slug:"/development/backend/services/order/api-swagger",hide_title:!0,hide_table_of_contents:!0},p=void 0,d={unversionedId:"development/backend/regards/order/backend-order-api-swagger",id:"development/backend/regards/order/backend-order-api-swagger",title:"REGARDS order microservice API",description:"",source:"@site/docs/development/backend/regards/order/order-api-swagger.mdx",sourceDirName:"development/backend/regards/order",slug:"/development/backend/services/order/api-swagger",permalink:"/docs/development/backend/services/order/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/order/order-api-swagger.mdx",tags:[],version:"current",frontMatter:{id:"backend-order-api-swagger",title:"REGARDS order microservice API",sidebar_label:"API",slug:"/development/backend/services/order/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/order/overview/"},next:{title:"Basket",permalink:"/docs/development/backend/services/order/api/basket/"}},c={},m=[],l={toc:m};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{spec:a,mdxType:"RegardsApiDoc"}))}y.isMDXComponent=!0},16212:()=>{},15101:()=>{},78836:()=>{},42116:()=>{},34904:()=>{},6918:()=>{},84819:()=>{},23197:()=>{},60996:()=>{}}]);