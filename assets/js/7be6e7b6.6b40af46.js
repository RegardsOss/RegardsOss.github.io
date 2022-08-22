(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[84209],{14420:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(67294),n=r(19992);const o=function(e){let{spec:t}=e;return s.createElement(n.Z,{spec:t})}},63287:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var s=r(87462),n=(r(67294),r(3905)),o=r(14420);const a=JSON.parse('{"openapi":"3.0.1","info":{"title":"MICROSERVICE ORDER","description":"Order API","license":{"name":"GPL-3.0"},"version":"1.7.1"},"servers":[{"url":"https://regardsoss.github.io/api/v1/rs-order","description":"Generated server url"}],"security":[{"REGARDS_OAUTH2":[]}],"paths":{"/orders/public/files/{dataFileId}":{"get":{"tags":["order-data-file-controller"],"operationId":"publicDownloadFile","parameters":[{"name":"dataFileId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"orderToken","in":"query","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/InputStreamResource"}}}}}},"head":{"tags":["order-data-file-controller"],"operationId":"testDownloadFile","parameters":[{"name":"dataFileId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"orderToken","in":"query","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/InputStreamResource"}}}}}}},"/orders/{orderId}/dataset/{datasetId}/files":{"get":{"tags":["order-data-file-controller"],"operationId":"findFiles","parameters":[{"name":"orderId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"datasetId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"pageRequest","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"name":"assembler","in":"query","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerOrderDataFile"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDataFile"}}}}}}},"/orders/files/{dataFileId}":{"get":{"tags":["order-data-file-controller"],"operationId":"downloadFile","parameters":[{"name":"dataFileId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/InputStreamResource"}}}}}}},"/user/orders/{orderId}/restart":{"post":{"tags":["order-controller"],"operationId":"restartOrder","parameters":[{"name":"orderId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OrderRequest"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}}}}}},"/user/orders/{orderId}/retry":{"put":{"tags":["order-controller"],"operationId":"retryOrder","parameters":[{"name":"orderId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response"}}}},"/user/orders/{orderId}":{"get":{"tags":["order-controller"],"operationId":"retrieveOrder","parameters":[{"name":"orderId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}}}}},"delete":{"tags":["order-controller"],"operationId":"deleteOrder","parameters":[{"name":"orderId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response"}}}},"/user/orders/remove/{orderId}":{"delete":{"tags":["order-controller"],"operationId":"removeOrder","parameters":[{"name":"orderId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response"}}}},"/orders":{"get":{"tags":["order-controller"],"operationId":"findAllAdmin","parameters":[{"name":"user","in":"query","required":false,"schema":{"type":"string"}},{"name":"pageRequest","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDto"}}}}}},"post":{"tags":["order-controller"],"operationId":"createAppOrder","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OrderRequest"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}}}}}},"/orders/csv":{"get":{"tags":["order-controller"],"operationId":"generateCsv","parameters":[{"name":"status","in":"query","required":false,"schema":{"type":"string","enum":["PENDING","RUNNING","PAUSED","EXPIRED","FAILED","DONE_WITH_WARNING","DONE","DELETED","REMOVED"]}},{"name":"from","in":"query","required":false,"schema":{"type":"string"}},{"name":"to","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/user/orders/{orderId}/download":{"get":{"tags":["order-controller"],"operationId":"downloadAllAvailableFiles","parameters":[{"name":"orderId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response"}}}},"/user/orders/{orderId}/metalink/download":{"get":{"tags":["order-controller"],"operationId":"downloadMetalinkFile","parameters":[{"name":"orderId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response"}}}},"/user/orders/metalink/download":{"get":{"tags":["order-controller"],"operationId":"publicDownloadMetalinkFile","parameters":[{"name":"orderToken","in":"query","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/user/orders":{"get":{"tags":["order-controller"],"operationId":"findAll","parameters":[{"name":"pageRequest","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDto"}}}}}},"post":{"tags":["order-controller"],"operationId":"createOrder","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OrderRequest"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}}}}}},"/user/orders/resume/{orderId}":{"put":{"tags":["order-controller"],"operationId":"resumeOrder","parameters":[{"name":"orderId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response"}}}},"/user/orders/pause/{orderId}":{"put":{"tags":["order-controller"],"operationId":"pauseOrder","parameters":[{"name":"orderId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response"}}}},"/order/basket/selection":{"post":{"tags":["basket-controller"],"operationId":"addSelection","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/BasketSelectionRequest"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}}}}}},"/order/basket/dataset/{datasetSelectionId}/updateProcessing":{"put":{"tags":["basket-controller"],"operationId":"attachProcessDescriptionToDatasetSelection","parameters":[{"name":"datasetSelectionId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProcessDatasetDescription"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}}}}}},"/order/basket/dataset/{datasetSelectionId}":{"delete":{"tags":["basket-controller"],"operationId":"removeDatasetSelection","parameters":[{"name":"datasetSelectionId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}}}}}},"/order/basket/dataset/{datasetSelectionId}/{itemsSelectionDate}":{"delete":{"tags":["basket-controller"],"operationId":"removeDatedItemsSelection","parameters":[{"name":"datasetSelectionId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}},{"name":"itemsSelectionDate","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}}}}}},"/order/basket":{"get":{"tags":["basket-controller"],"operationId":"get","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}}}}},"delete":{"tags":["basket-controller"],"operationId":"empty","responses":{"200":{"description":"default response"}}}},"/regards/{tenant}/datasource/test":{"get":{"tags":["jpa-multitenant-controller"],"operationId":"testTenantConnection","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}}}}}},"/regards/{tenant}/datasource/status":{"get":{"tags":["jpa-multitenant-controller"],"operationId":"getDataSourceStatus","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}}}}}},"/maintenance/{tenant}/enable":{"put":{"tags":["maintenance-controller"],"operationId":"setMaintenance","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/maintenance/{tenant}/disable":{"put":{"tags":["maintenance-controller"],"operationId":"unSetMaintenance","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/maintenance":{"get":{"tags":["maintenance-controller"],"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}}}}}},"/shutdown/immediate":{"post":{"tags":["manager-controller"],"operationId":"immediateShutdown","responses":{"200":{"description":"default response"}}}},"/microservice/ready/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isReadyEnabled","responses":{"200":{"description":"default response"}}}},"/microservice/restart/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isRestartEnabled","responses":{"200":{"description":"default response"}}}},"/microservice/configuration/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isConfigurationEnabled","responses":{"200":{"description":"default response"}}}},"/microservice/configuration":{"get":{"tags":["module-manager-controller"],"operationId":"exportConfiguration","responses":{"200":{"description":"default response"}}},"post":{"tags":["module-manager-controller"],"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"file":{"type":"string","format":"binary"}}}}}},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ModuleImportReport"}}}}}}}},"/microservice/restart":{"get":{"tags":["module-manager-controller"],"operationId":"restart","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ModuleRestartReport"}}}}}}}},"/microservice/ready":{"get":{"tags":["module-manager-controller"],"operationId":"isReady","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}}}}}},"/settings":{"get":{"tags":["dynamic-tenant-setting-controller"],"operationId":"retrieveAll","parameters":[{"name":"names","in":"query","required":false,"schema":{"uniqueItems":true,"type":"array","items":{"type":"string"}}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}}}}}}},"/settings/{name}":{"put":{"tags":["dynamic-tenant-setting-controller"],"operationId":"update","parameters":[{"name":"name","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}}}}},"delete":{"tags":["dynamic-tenant-setting-controller"],"operationId":"reset","parameters":[{"name":"name","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}}}}}},"/security/resources":{"get":{"tags":["security-resources-controller"],"operationId":"getAllResources","responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ResourceMapping"}}}}}}}}},"components":{"schemas":{"InputStreamResource":{"type":"object","properties":{"inputStream":{"type":"object"},"description":{"type":"string"},"open":{"type":"boolean"},"uri":{"type":"string","format":"uri"},"readable":{"type":"boolean"},"filename":{"type":"string"},"url":{"type":"string","format":"url"},"file":{"type":"string","format":"binary"}}},"Pageable":{"type":"object","properties":{"pageNumber":{"type":"integer","format":"int32"},"sort":{"$ref":"#/components/schemas/Sort"},"paged":{"type":"boolean"},"pageSize":{"type":"integer","format":"int32"},"unpaged":{"type":"boolean"},"offset":{"type":"integer","format":"int64"}}},"Sort":{"type":"object","properties":{"unsorted":{"type":"boolean"},"sorted":{"type":"boolean"},"empty":{"type":"boolean"}}},"PagedResourcesAssemblerOrderDataFile":{"type":"object","properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}}},"EntityModelOrderDataFile":{"type":"object","properties":{"dataType":{"type":"string","enum":["RAWDATA","QUICKLOOK_SD","QUICKLOOK_MD","QUICKLOOK_HD","DOCUMENT","THUMBNAIL","OTHER","AIP","DESCRIPTION"]},"reference":{"type":"boolean"},"uri":{"type":"string"},"mimeType":{"$ref":"#/components/schemas/MimeType"},"imageWidth":{"type":"number","format":"double"},"imageHeight":{"type":"number","format":"double"},"online":{"type":"boolean"},"checksum":{"type":"string"},"digestAlgorithm":{"type":"string"},"filesize":{"type":"integer","format":"int64"},"filename":{"type":"string"},"types":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"id":{"type":"integer","format":"int64"},"state":{"type":"string","enum":["AVAILABLE","DOWNLOADED","DOWNLOAD_ERROR","PROCESSING_ERROR","ERROR","PENDING"]},"orderId":{"type":"integer","format":"int64"},"ipId":{"$ref":"#/components/schemas/UniformResourceName"},"downloadError":{"type":"string"},"url":{"type":"string"},"identifiable":{"type":"boolean"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"Link":{"type":"object","properties":{"rel":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"},"deprecation":{"type":"string"},"profile":{"type":"string"},"name":{"type":"string"}}},"MimeType":{"type":"object","properties":{"type":{"type":"string"},"subtype":{"type":"string"},"parameters":{"type":"object","additionalProperties":{"type":"string"}},"charset":{"type":"object","properties":{"registered":{"type":"boolean"}}},"wildcardType":{"type":"boolean"},"wildcardSubtype":{"type":"boolean"},"concrete":{"type":"boolean"}}},"PageMetadata":{"type":"object","properties":{"size":{"type":"integer","format":"int64"},"totalElements":{"type":"integer","format":"int64"},"totalPages":{"type":"integer","format":"int64"},"number":{"type":"integer","format":"int64"}}},"PagedModelEntityModelOrderDataFile":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}},"content":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelOrderDataFile"}},"page":{"$ref":"#/components/schemas/PageMetadata"}}},"UniformResourceName":{"required":["entityId","entityType","identifier","tenant"],"type":"object","properties":{"identifier":{"type":"string"},"entityType":{"type":"string","enum":["COLLECTION","DATA","DATASET"]},"tenant":{"type":"string"},"entityId":{"type":"string","format":"uuid"},"version":{"maximum":999,"minimum":1,"type":"integer","format":"int32"},"order":{"type":"integer","format":"int64"},"revision":{"type":"string"},"last":{"type":"boolean"},"randomEntityId":{"type":"boolean"}}},"OrderRequest":{"type":"object","properties":{"label":{"type":"string"},"onSuccessUrl":{"type":"string"}}},"DatasetTaskDto":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"datasetLabel":{"type":"string"},"objectsCount":{"type":"integer","format":"int32"},"filesCount":{"type":"integer","format":"int64"},"filesSize":{"type":"integer","format":"int64"},"processingService":{"type":"string"}}},"EntityModelOrderDto":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"owner":{"type":"string"},"label":{"type":"string"},"creationDate":{"type":"string","format":"date-time"},"expirationDate":{"type":"string","format":"date-time"},"percentCompleted":{"type":"integer","format":"int32"},"filesInErrorCount":{"type":"integer","format":"int32"},"availableFilesCount":{"type":"integer","format":"int32"},"status":{"type":"string","enum":["PENDING","RUNNING","PAUSED","EXPIRED","FAILED","DONE_WITH_WARNING","DONE","DELETED","REMOVED"]},"statusDate":{"type":"string","format":"date-time"},"waitingForUser":{"type":"boolean"},"datasetTasks":{"type":"array","items":{"$ref":"#/components/schemas/DatasetTaskDto"}},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"PagedModelEntityModelOrderDto":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}},"content":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelOrderDto"}},"page":{"$ref":"#/components/schemas/PageMetadata"}}},"BasketSelectionRequest":{"required":["engineType"],"type":"object","properties":{"engineType":{"type":"string"},"datasetUrn":{"type":"string"},"searchParameters":{"type":"object","properties":{"all":{"type":"object","additionalProperties":{"type":"string"},"writeOnly":true},"empty":{"type":"boolean"}},"additionalProperties":{"type":"array","items":{"type":"string"}}},"entityIdsToExclude":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"entityIdsToInclude":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"selectionDate":{"type":"string","format":"date-time"}}},"BasketDatasetSelectionDto":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"datasetIpid":{"type":"string"},"datasetLabel":{"type":"string"},"objectsCount":{"type":"integer","format":"int32"},"filesCount":{"type":"integer","format":"int64"},"filesSize":{"type":"integer","format":"int64"},"quota":{"type":"integer","format":"int64"},"itemsSelections":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/BasketDatedItemsSelectionDto"}},"processDatasetDescription":{"$ref":"#/components/schemas/ProcessDatasetDescription"}}},"BasketDatedItemsSelectionDto":{"type":"object","properties":{"date":{"type":"string","format":"date-time"},"selectionRequest":{"$ref":"#/components/schemas/BasketSelectionRequest"},"objectsCount":{"type":"integer","format":"int32"},"filesCount":{"type":"integer","format":"int64"},"filesSize":{"type":"integer","format":"int64"},"quota":{"type":"integer","format":"int64"}}},"EntityModelBasketDto":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"owner":{"type":"string"},"datasetSelections":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/BasketDatasetSelectionDto"}},"quota":{"type":"integer","format":"int64"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"ProcessDatasetDescription":{"type":"object","properties":{"processBusinessId":{"type":"string","format":"uuid"},"parameters":{"type":"object","additionalProperties":{"type":"string"}}}},"GenericResponseBody":{"type":"object","properties":{"message":{"type":"string"},"properties":{"type":"object","additionalProperties":{"type":"object"}}}},"EntityModelMapStringMaintenanceInfo":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"ModuleImportReport":{"type":"object","properties":{"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"importErrors":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"onlyErrors":{"type":"boolean"}}},"ModuleInformation":{"required":["author","id","name","version"],"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string"},"description":{"type":"string"},"version":{"type":"string"},"author":{"type":"string"},"legalOwner":{"type":"string"},"documentation":{"type":"string"}}},"ModuleRestartReport":{"type":"object","properties":{"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"messages":{"type":"array","items":{"type":"string"}}}},"ModuleReadinessReportObject":{"type":"object","properties":{"ready":{"type":"boolean"},"reasons":{"type":"array","items":{"type":"string"}},"specifications":{"type":"object"}}},"DynamicTenantSettingDto":{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"value":{"type":"object"},"defaultValue":{"type":"object"}}},"EntityModelDynamicTenantSettingDto":{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"value":{"type":"object"},"defaultValue":{"type":"object"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"ResourceAccess":{"type":"object"},"ResourceMapping":{"type":"object","properties":{"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"fullPath":{"type":"string"},"controllerSimpleName":{"type":"string"},"method":{"type":"string","enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"]},"autorizedRoles":{"type":"array","items":{"$ref":"#/components/schemas/RoleAuthority"}},"resourceMappingId":{"type":"string"}}},"RoleAuthority":{"type":"object","properties":{"authorizedIpAdresses":{"type":"array","items":{"type":"string"}},"roleName":{"type":"string"},"authority":{"type":"string"}}}},"securitySchemes":{"REGARDS_OAUTH2":{"type":"oauth2","flows":{"password":{"tokenUrl":"http://vm-perf.cloud-espace.si.c-s.fr:80/api/v1/rs-authentication/oauth/token","scopes":{}}}}}}}'),i={id:"backend-order-api-swagger",title:"REGARDS order microservice API",sidebar_label:"API",slug:"/development/backend/services/order/api-swagger",hide_title:!0,hide_table_of_contents:!0},p=void 0,d={unversionedId:"development/backend/regards/order/backend-order-api-swagger",id:"version-1.7.1/development/backend/regards/order/backend-order-api-swagger",title:"REGARDS order microservice API",description:"",source:"@site/versioned_docs/version-1.7.1/development/backend/regards/order/order-api-swagger.mdx",sourceDirName:"development/backend/regards/order",slug:"/development/backend/services/order/api-swagger",permalink:"/docs/1.7.1/development/backend/services/order/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/regards/order/order-api-swagger.mdx",tags:[],version:"1.7.1",frontMatter:{id:"backend-order-api-swagger",title:"REGARDS order microservice API",sidebar_label:"API",slug:"/development/backend/services/order/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.7.1/development/backend/services/order/overview/"},next:{title:"Basket",permalink:"/docs/1.7.1/development/backend/services/order/api/basket/"}},c={},m=[],l={toc:m};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{spec:a,mdxType:"RegardsApiDoc"}))}y.isMDXComponent=!0},16212:()=>{},15101:()=>{},78836:()=>{},42116:()=>{},34904:()=>{},6918:()=>{},84819:()=>{},23197:()=>{},60996:()=>{}}]);