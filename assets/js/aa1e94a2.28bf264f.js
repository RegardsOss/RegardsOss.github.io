/*! For license information please see aa1e94a2.28bf264f.js.LICENSE.txt */
(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[73097],{4353:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var s=r(58168),o=r(96540),n=r(20053);r(38193).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var i=r(28794),a=r(92303),p=r(66588),c=r(95293),d=r(55364),m=r.n(d);function l(e,t){void 0===e&&(e="theme-redoc");const r=(0,a.A)(),s="dark"===(0,c.G)().colorMode,n=(0,p.kh)("docusaurus-theme-redoc",{failfast:!0}),i=(0,p.P_)("docusaurus-theme-redoc",e)||Object.values(n)[0];return(0,o.useMemo)((()=>{const{lightTheme:e,darkTheme:o,options:n}=i,a={scrollYOffset:r||"string"!=typeof n.scrollYOffset?n.scrollYOffset:0},p=m()({...n,...a,theme:e},t),c=m()({...n,...a,theme:o},t);return{options:r&&s?c:p,darkThemeOptions:c,lightThemeOptions:p}}),[r,s,i,t])}var u=r(86025);let y=null;function g(e){return o.createElement("div",{className:"redocusaurus-styles"})}const h=function(e){const{className:t,optionsOverrides:r,...s}=e,{store:p,darkThemeOptions:d,lightThemeOptions:m,hasLogo:h}=function(e,t){let{spec:r,url:s,themeId:n}=e;const p=l(n,t),d=(0,u.A)(s,{absolute:!0}),m=(0,a.A)(),g="dark"===(0,c.G)().colorMode,h=(0,o.useMemo)((()=>(null!==y&&m&&y.dispose(),y=new i.AppStore(r,d,p.options),{...p,hasLogo:!!r.info?.["x-logo"],store:y})),[m,r,d,p]);return(0,o.useEffect)((()=>{h.store.onDidMount()}),[h,m,g]),h}(s,r);return o.createElement(o.Fragment,null,o.createElement(g,{specProps:s,lightThemeOptions:m,darkThemeOptions:d}),o.createElement("div",{className:(0,n.A)(["redocusaurus",h&&"redocusaurus-has-logo",t])},o.createElement(i.Redoc,{store:p})))};const f=function(e){const{className:t,optionsOverrides:r,spec:a,url:p,themeId:c,isSpecFile:d}=e,{options:m}=l(c,r);return a?o.createElement(h,(0,s.A)({},e,{spec:a})):o.createElement("div",{className:(0,n.A)(["redocusaurus",t])},o.createElement(i.RedocStandalone,{specUrl:p,options:m}))}},13922:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var s=r(58168),o=(r(96540),r(15680)),n=r(4353);const i=JSON.parse('{"components":{"schemas":{"BasketDatasetSelectionDto":{"properties":{"datasetIpid":{"type":"string"},"datasetLabel":{"type":"string"},"fileSelectionDescription":{"$ref":"#/components/schemas/FileSelectionDescriptionDTO"},"filesCount":{"format":"int64","type":"integer"},"filesSize":{"format":"int64","type":"integer"},"id":{"format":"int64","type":"integer"},"itemsSelections":{"items":{"$ref":"#/components/schemas/BasketDatedItemsSelectionDto"},"type":"array","uniqueItems":true},"objectsCount":{"format":"int32","type":"integer"},"processDatasetDescription":{"$ref":"#/components/schemas/ProcessDatasetDescription"},"quota":{"format":"int64","type":"integer"}},"type":"object"},"BasketDatedItemsSelectionDto":{"properties":{"date":{"format":"date-time","type":"string"},"filesCount":{"format":"int64","type":"integer"},"filesSize":{"format":"int64","type":"integer"},"objectsCount":{"format":"int32","type":"integer"},"quota":{"format":"int64","type":"integer"},"selectionRequest":{"$ref":"#/components/schemas/BasketSelectionRequest"}},"type":"object"},"BasketDto":{"properties":{"datasetSelections":{"items":{"$ref":"#/components/schemas/BasketDatasetSelectionDto"},"type":"array","uniqueItems":true},"id":{"format":"int64","type":"integer"},"owner":{"type":"string"},"quota":{"format":"int64","type":"integer"}},"type":"object"},"BasketSelectionRequest":{"properties":{"datasetUrn":{"type":"string"},"engineType":{"type":"string"},"entityIdsToExclude":{"items":{"type":"string"},"type":"array","uniqueItems":true},"entityIdsToInclude":{"items":{"type":"string"},"type":"array","uniqueItems":true},"searchParameters":{"additionalProperties":{"items":{"type":"string"},"type":"array"},"properties":{"all":{"additionalProperties":{"type":"string"},"type":"object","writeOnly":true},"empty":{"type":"boolean"}},"type":"object"},"selectionDate":{"format":"date-time","type":"string"}},"required":["engineType"],"type":"object"},"DatasetTaskDto":{"properties":{"datasetLabel":{"type":"string"},"fileSelectionDescription":{"$ref":"#/components/schemas/FileSelectionDescription"},"filesCount":{"format":"int64","type":"integer"},"filesSize":{"format":"int64","type":"integer"},"id":{"format":"int64","type":"integer"},"objectsCount":{"format":"int32","type":"integer"},"processDatasetDescription":{"$ref":"#/components/schemas/ProcessDatasetDescription"},"processingService":{"type":"string"}},"type":"object"},"DatesRangeRestriction":{"description":"Filter on creation date","properties":{"after":{"description":"Keep entities having date greater than","format":"date-time","type":"string"},"before":{"description":"Keep entities having date less than","format":"date-time","type":"string"}},"type":"object"},"DynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"DynamicTenantSettingDtoObject":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelBasketDto":{"properties":{"content":{"$ref":"#/components/schemas/BasketDto"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelDynamicTenantSettingDtoObject":{"properties":{"content":{"$ref":"#/components/schemas/DynamicTenantSettingDtoObject"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelOrderDataFile":{"properties":{"content":{"$ref":"#/components/schemas/OrderDataFile"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelOrderDataFileDTO":{"properties":{"content":{"$ref":"#/components/schemas/OrderDataFileDTO"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelOrderDto":{"properties":{"content":{"$ref":"#/components/schemas/OrderDto"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelOrderResponseDto":{"properties":{"content":{"$ref":"#/components/schemas/OrderResponseDto"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"FileSelectionDescription":{"properties":{"fileNamePattern":{"type":"string"},"fileTypes":{"items":{"enum":["RAWDATA","QUICKLOOK"],"type":"string"},"type":"array","uniqueItems":true}},"type":"object"},"FileSelectionDescriptionDTO":{"properties":{"fileNamePattern":{"type":"string"},"fileTypes":{"items":{"enum":["RAWDATA","QUICKLOOK"],"type":"string"},"type":"array","uniqueItems":true}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"OrderDataFile":{"properties":{"checksum":{"type":"string"},"crc32":{"type":"string"},"dataType":{"enum":["RAWDATA","QUICKLOOK_SD","QUICKLOOK_MD","QUICKLOOK_HD","DOCUMENT","THUMBNAIL","OTHER","AIP","DESCRIPTION"],"type":"string"},"digestAlgorithm":{"type":"string"},"downloadError":{"type":"string"},"filename":{"type":"string"},"filesTaskId":{"format":"int64","type":"integer"},"filesize":{"format":"int64","type":"integer"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"imageHeight":{"format":"double","type":"number"},"imageWidth":{"format":"double","type":"number"},"ipId":{"type":"string"},"mimeType":{"type":"string"},"online":{"type":"boolean"},"orderId":{"format":"int64","type":"integer"},"productId":{"maxLength":255,"minLength":0,"type":"string"},"reference":{"type":"boolean"},"state":{"enum":["AVAILABLE","DOWNLOADED","DOWNLOAD_ERROR","PROCESSING_ERROR","ERROR","PENDING"],"type":"string"},"types":{"items":{"type":"string"},"type":"array","uniqueItems":true},"uri":{"type":"string"},"url":{"type":"string"},"version":{"format":"int32","type":"integer"}},"required":["dataType","filename","mimeType","online","reference","uri"],"type":"object"},"OrderDataFileDTO":{"properties":{"checksum":{"description":"Checksum of the file represented by this dto.","maxLength":255,"type":"string"},"downloadUrl":{"description":"downloadUrl of the file represented by this dto.","maxLength":255,"type":"string"},"filename":{"description":"Name of the file represented by this dto.","maxLength":255,"type":"string"},"filesize":{"description":"Size of the file represented by this dto.","format":"int64","type":"integer"},"id":{"description":"Identifier of the file represented by this dto.","format":"int64","type":"integer"},"mimeType":{"type":"string"},"productId":{"description":"providerId of the product containing this file.","maxLength":255,"type":"string"},"version":{"description":"version of the product.","format":"int32","type":"integer"}},"required":["downloadUrl","filename","mimeType"],"type":"object"},"OrderDto":{"properties":{"availableFilesCount":{"format":"int32","type":"integer"},"creationDate":{"format":"date-time","type":"string"},"datasetTasks":{"items":{"$ref":"#/components/schemas/DatasetTaskDto"},"type":"array"},"expirationDate":{"format":"date-time","type":"string"},"filesInErrorCount":{"format":"int32","type":"integer"},"id":{"format":"int64","type":"integer"},"label":{"type":"string"},"owner":{"type":"string"},"percentCompleted":{"format":"int32","type":"integer"},"status":{"enum":["PENDING","RUNNING","PAUSED","EXPIRED","FAILED","DONE_WITH_WARNING","DONE","DELETED","ERROR"],"type":"string"},"statusDate":{"format":"date-time","type":"string"},"waitingForUser":{"type":"boolean"}},"type":"object"},"OrderRequest":{"properties":{"label":{"type":"string"},"onSuccessUrl":{"type":"string"}},"type":"object"},"OrderRequestDto":{"properties":{"correlationId":{"maxLength":255,"minLength":0,"type":"string"},"filters":{"$ref":"#/components/schemas/OrderRequestFilters"},"queries":{"items":{"type":"string"},"type":"array"},"sizeLimitInBytes":{"format":"int64","type":"integer"},"user":{"maxLength":128,"minLength":0,"type":"string"}},"required":["queries"],"type":"object"},"OrderRequestFilters":{"properties":{"dataTypes":{"items":{"enum":["RAWDATA","QUICKLOOK"],"type":"string"},"type":"array","uniqueItems":true},"filenameRegExp":{"type":"string"}},"required":["dataTypes"],"type":"object"},"OrderResponseDto":{"properties":{"correlationId":{"type":"string"},"downloadLink":{"type":"string"},"errorType":{"enum":["INVALID_CONTENT","FORBIDDEN","ORDER_LIMIT_REACHED","EMPTY_ORDER","INTERNAL_ERROR"],"type":"string"},"errors":{"format":"int32","type":"integer"},"message":{"type":"string"},"orderId":{"format":"int64","type":"integer"},"status":{"enum":["GRANTED","DENIED","SUBORDER_DONE","DONE","FAILED"],"type":"string"},"subOrderId":{"format":"int64","type":"integer"},"totalSubOrders":{"format":"int32","type":"integer"}},"required":["correlationId","status"],"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelOrderDataFile":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelOrderDataFile"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelOrderDataFileDTO":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelOrderDataFileDTO"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelOrderDto":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelOrderDto"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"ProcessDatasetDescription":{"properties":{"parameters":{"additionalProperties":{"type":"string"},"type":"object"},"processBusinessId":{"format":"uuid","type":"string"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"SearchRequestParameters":{"properties":{"creationDate":{"$ref":"#/components/schemas/DatesRangeRestriction"},"owner":{"description":"Filter on owner","type":"string"},"statuses":{"$ref":"#/components/schemas/ValuesRestrictionOrderStatus"},"waitingForUser":{"description":"Filter on waiting for user","type":"boolean"}},"type":"object"},"ValuesRestrictionOrderStatus":{"description":"Filter on status of request","properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","enum":["PENDING","RUNNING","PAUSED","EXPIRED","FAILED","DONE_WITH_WARNING","DONE","DELETED","ERROR"],"type":"string"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Order API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE ORDER","version":"1.14.1"},"openapi":"3.0.1","paths":{"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"multipart/form-data":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/order/basket":{"delete":{"operationId":"empty","responses":{"200":{"description":"OK"}},"tags":["basket-controller"]},"get":{"operationId":"get","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}},"description":"OK"}},"tags":["basket-controller"]}},"/order/basket/dataset/{datasetSelectionId}":{"delete":{"operationId":"removeDatasetSelection","parameters":[{"in":"path","name":"datasetSelectionId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}},"description":"OK"}},"tags":["basket-controller"]}},"/order/basket/dataset/{datasetSelectionId}/updateFileFilters":{"put":{"operationId":"updateFileFilters","parameters":[{"in":"path","name":"datasetSelectionId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/FileSelectionDescriptionDTO"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}},"description":"OK"}},"tags":["basket-controller"]}},"/order/basket/dataset/{datasetSelectionId}/updateProcessing":{"put":{"operationId":"attachProcessDescriptionToDatasetSelection","parameters":[{"in":"path","name":"datasetSelectionId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProcessDatasetDescription"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}},"description":"OK"}},"tags":["basket-controller"]}},"/order/basket/dataset/{datasetSelectionId}/{itemsSelectionDate}":{"delete":{"operationId":"removeDatedItemsSelection","parameters":[{"in":"path","name":"datasetSelectionId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"path","name":"itemsSelectionDate","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}},"description":"OK"}},"tags":["basket-controller"]}},"/order/basket/selection":{"post":{"operationId":"addSelection","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/BasketSelectionRequest"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelBasketDto"}}},"description":"OK"}},"tags":["basket-controller"]}},"/orders":{"post":{"operationId":"createAppOrder","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OrderRequest"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}},"description":"OK"}},"tags":["order-controller"]}},"/orders/csv":{"post":{"operationId":"generateCsv","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchRequestParameters"}}},"required":true},"responses":{"200":{"description":"OK"}},"tags":["order-controller"]}},"/orders/files/{dataFileId}":{"get":{"operationId":"downloadFile","parameters":[{"in":"path","name":"dataFileId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"format":"binary","type":"string"}}},"description":"OK"}},"tags":["order-data-file-controller"]}},"/orders/public/files/{dataFileId}":{"get":{"operationId":"publicDownloadFile","parameters":[{"in":"path","name":"dataFileId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"orderToken","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"format":"binary","type":"string"}}},"description":"OK"}},"tags":["order-data-file-controller"]},"head":{"operationId":"testDownloadFile","parameters":[{"in":"path","name":"dataFileId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"orderToken","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"format":"binary","type":"string"}}},"description":"OK"}},"tags":["order-data-file-controller"]}},"/orders/search":{"post":{"operationId":"findAllAdmin","requestBody":{"content":{"application/json":{"schema":{"properties":{"filters":{"$ref":"#/components/schemas/SearchRequestParameters"},"pageRequest":{"$ref":"#/components/schemas/Pageable"}},"type":"object"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDto"}}},"description":"OK"}},"tags":["order-controller"]}},"/orders/{orderId}/dataset/{datasetId}/files":{"get":{"operationId":"findFiles","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"path","name":"datasetId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"pageRequest","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDataFile"}}},"description":"OK"}},"tags":["order-data-file-controller"]}},"/orders/{orderId}/files/available":{"get":{"description":"Return files corresponding to the orderId input, if exists and user has access to it","operationId":"getAvailableFilesOf","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"page","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDataFileDTO"}}},"description":"The order has been successfully retrieved."},"204":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDataFileDTO"}}},"description":"The order has been successfully retrieved, but no file is available."},"206":{"content":{"application/json":{}},"description":"The order has been successfully retrieved, but is not finished"},"403":{"content":{"application/html":{}},"description":"Order is not accessible for the current user."},"404":{"content":{"application/json":{}},"description":"Order not found"}},"summary":"Get files available in specific order","tags":["order-data-file-available-controller"]}},"/orders/{orderId}/filesTask/{filesTaskId}/files/available":{"get":{"description":"Return files corresponding to the orderId and filesTaskId input, if exists and user has access to it","operationId":"getAvailableFilesInSuborder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"path","name":"filesTaskId","required":true,"schema":{"format":"int64","type":"integer"}},{"in":"query","name":"page","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDataFileDTO"}}},"description":"The suborder has been successfully retrieved."},"204":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDataFileDTO"}}},"description":"The suborder has been successfully retrieved, but no file is available."},"206":{"content":{"application/json":{}},"description":"The suborder has been successfully retrieved, but is not finished"},"403":{"content":{"application/html":{}},"description":"Suborder is not accessible for the current user."},"404":{"content":{"application/json":{}},"description":"Suborder not found"}},"summary":"Get files available in specific suborder","tags":["order-data-file-available-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/settings":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"names","required":false,"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"},"type":"array"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/settings/{name}":{"delete":{"operationId":"reset","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}},"/user/orders":{"get":{"operationId":"findAll","parameters":[{"in":"query","name":"pageRequest","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelOrderDto"}}},"description":"OK"}},"tags":["order-controller"]},"post":{"operationId":"createOrder","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OrderRequest"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}},"description":"OK"}},"tags":["order-controller"]}},"/user/orders/apply":{"post":{"operationId":"createOrder_1","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OrderRequestDto"}}},"description":"OrderRequestDto to create an order.","required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderResponseDto"}}},"description":"The order was successfully initiated. Returns OrderRequestResponseDtoEvent with the createdOrderId."},"400":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderResponseDto"}}},"description":"The order could not be created. Refer to the response returned for more information."},"403":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderResponseDto"}}},"description":"The endpoint is not accessible for the user."},"422":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderResponseDto"}}},"description":"The submission request dto syntax is incorrect."}},"summary":"Create an order automatically from a OrderRequestDto.","tags":["order-controller"]}},"/user/orders/metalink/download":{"get":{"operationId":"publicDownloadMetalinkFile","parameters":[{"in":"query","name":"orderToken","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["order-controller"]}},"/user/orders/pause/{orderId}":{"put":{"operationId":"pauseOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["order-controller"]}},"/user/orders/remove/{orderId}":{"delete":{"operationId":"removeOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["order-controller"]}},"/user/orders/resume/{orderId}":{"put":{"operationId":"resumeOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["order-controller"]}},"/user/orders/{orderId}":{"delete":{"operationId":"deleteOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["order-controller"]},"get":{"description":"Return order corresponding to the orderId input, if exists and user has access to it","operationId":"retrieveOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}},"description":"The order has been successfully retrieved."},"403":{"content":{"application/html":{}},"description":"Order is not accessible for the current user."},"404":{"content":{"application/json":{}},"description":"Order not found"}},"summary":"Retrieve specified order","tags":["order-controller"]}},"/user/orders/{orderId}/download":{"get":{"operationId":"downloadAllAvailableFiles","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["order-controller"]}},"/user/orders/{orderId}/metalink/download":{"get":{"operationId":"downloadMetalinkFile","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["order-controller"]}},"/user/orders/{orderId}/restart":{"post":{"operationId":"restartOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/OrderRequest"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelOrderDto"}}},"description":"OK"}},"tags":["order-controller"]}},"/user/orders/{orderId}/retry":{"put":{"operationId":"retryOrder","parameters":[{"in":"path","name":"orderId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["order-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-order"}]}'),a={id:"backend-order-api-swagger",title:"REGARDS order microservice API",sidebar_label:"REST API",slug:"/development/backend/services/order/api-swagger",hide_title:!0,hide_table_of_contents:!0},p=void 0,c={unversionedId:"development/backend/regards/order/backend-order-api-swagger",id:"development/backend/regards/order/backend-order-api-swagger",title:"REGARDS order microservice API",description:"",source:"@site/docs/development/backend/regards/order/order-api-swagger.mdx",sourceDirName:"development/backend/regards/order",slug:"/development/backend/services/order/api-swagger",permalink:"/docs/development/backend/services/order/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/order/order-api-swagger.mdx",tags:[],version:"current",frontMatter:{id:"backend-order-api-swagger",title:"REGARDS order microservice API",sidebar_label:"REST API",slug:"/development/backend/services/order/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Download ordered files inside archive",permalink:"/docs/development/backend/services/order/guides/download-ordered-files"},next:{title:"Overview",permalink:"/docs/development/backend/services/processing/overview/"}},d={},m=[],l={toc:m},u="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,s.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(n.A,{spec:i,mdxType:"RegardsApiDoc"}))}y.isMDXComponent=!0},26903:()=>{},15915:()=>{},67889:()=>{},33880:()=>{},14834:()=>{},20922:()=>{},81912:()=>{}}]);