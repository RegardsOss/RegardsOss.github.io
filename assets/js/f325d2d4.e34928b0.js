(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[88668],{14420:function(e,t,r){"use strict";var s=r(67294),n=r(19992);t.Z=function(e){var t=e.spec;return s.createElement(n.Z,{spec:t})}},24916:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var s=r(87462),n=r(63366),o=(r(67294),r(3905)),i=r(14420),a=JSON.parse('{"components":{"schemas":{"DatesRangeRestriction":{"description":"Request creation date restriction","properties":{"after":{"description":"Keep entities having date greater than","format":"date-time","type":"string"},"before":{"description":"Keep entities having date less than","format":"date-time","type":"string"}},"type":"object"},"DynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelDynamicTenantSettingDtoObject":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelLightRequest":{"properties":{"contentType":{"type":"string"},"creationDate":{"format":"date-time","type":"string"},"dispatchedWorkerType":{"type":"string"},"error":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"requestId":{"type":"string"},"session":{"type":"string"},"source":{"type":"string"},"status":{"enum":["DISPATCHED","NO_WORKER_AVAILABLE","RUNNING","INVALID_CONTENT","SUCCESS","ERROR","TO_DISPATCH","TO_DELETE"],"type":"string"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"description":"Sorting and page configuration","properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelLightRequest":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelLightRequest"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"SearchRequestParameters":{"description":"Filter requests using criteria","properties":{"contentTypes":{"$ref":"#/components/schemas/ValuesRestrictionString"},"creationDate":{"$ref":"#/components/schemas/DatesRangeRestriction"},"dispatchedWorkerType":{"description":"Name of the Worker type matching the Request Content Type","example":"WorkerAcceptingContentType1","type":"string"},"ids":{"$ref":"#/components/schemas/ValuesRestrictionLong"},"session":{"description":"Session that emitted the request","example":"Today_Mission1","type":"string"},"source":{"description":"Source that emitted the request","example":"CNES","type":"string"},"statuses":{"$ref":"#/components/schemas/ValuesRestrictionRequestStatus"}},"type":"object"},"ValuesRestrictionLong":{"description":"Filter on Request IDs","properties":{"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","format":"int64","type":"integer"},"type":"array"}},"required":["mode","values"],"type":"object"},"ValuesRestrictionRequestStatus":{"description":"Filter on Request statuses","properties":{"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","enum":["DISPATCHED","NO_WORKER_AVAILABLE","RUNNING","INVALID_CONTENT","SUCCESS","ERROR","TO_DISPATCH","TO_DELETE"],"type":"string"},"type":"array"}},"required":["mode","values"],"type":"object"},"ValuesRestrictionString":{"description":"Filter on Content types","properties":{"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","type":"string"},"type":"array"}},"required":["mode","values"],"type":"object"},"WorkerTypeAlive":{"properties":{"nbInstance":{"format":"int64","type":"integer"},"workerType":{"type":"string"}},"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"http://vm-perf.cloud-espace.si.c-s.fr:80/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Worker Manager API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE WORKER MANAGER","version":"1.8.0"},"openapi":"3.0.1","paths":{"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/requests":{"post":{"description":"Retrieve Requests matching given filters.","operationId":"retrieveLightRequestList","requestBody":{"content":{"application/json":{"schema":{"properties":{"filters":{"$ref":"#/components/schemas/SearchRequestParameters"},"pageable":{"$ref":"#/components/schemas/Pageable"}},"type":"object"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelLightRequest"}}},"description":"OK"}},"summary":"Retrieve Requests","tags":["Request controller"]}},"/requests/delete":{"delete":{"description":"Delete Requests matching provided filters.","operationId":"deleteRequests","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchRequestParameters"}}},"required":true},"responses":{"200":{"description":"OK"}},"summary":"Delete Requests","tags":["Request controller"]}},"/requests/retry":{"post":{"description":"Retry Requests matching provided filters.","operationId":"retryRequests","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchRequestParameters"}}},"required":true},"responses":{"200":{"description":"OK"}},"summary":"Retry Requests","tags":["Request controller"]}},"/requests/{requestId}":{"get":{"description":"Retrieve a Request by its id.","operationId":"retrieveLightRequest","parameters":[{"description":"Request ID","example":1,"in":"path","name":"requestId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelLightRequest"}}},"description":"OK"}},"summary":"Retrieve Request","tags":["Request controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/settings":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"names","required":false,"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"},"type":"array"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/settings/{name}":{"delete":{"operationId":"reset","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}},"/workers":{"get":{"description":"Retrieve worker types with its number of alive instances.","operationId":"retrieveWorkerList","parameters":[{"description":"Filter Workers on Request Content Types they handle","in":"query","name":"contentTypes","required":false,"schema":{"items":{"type":"string"},"type":"array"}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/WorkerTypeAlive"},"type":"array"}}},"description":"OK"}},"summary":"Retrieve worker types","tags":["Worker manager"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-worker-manager"}],"tags":[{"name":"Request controller"},{"name":"Worker manager"}]}'),p=["components"],c={id:"backend-worker-manager-api-swagger",title:"REGARDS worker-manager microservice API",sidebar_label:"API",slug:"/development/backend/services/worker-manager/api-swagger",hide_title:!0,hide_table_of_contents:!0},m=void 0,d={unversionedId:"development/backend/regards/worker-manager/backend-worker-manager-api-swagger",id:"development/backend/regards/worker-manager/backend-worker-manager-api-swagger",title:"REGARDS worker-manager microservice API",description:"",source:"@site/docs/development/backend/regards/worker-manager/worker-manager-api-swagger.mdx",sourceDirName:"development/backend/regards/worker-manager",slug:"/development/backend/services/worker-manager/api-swagger",permalink:"/docs/development/backend/services/worker-manager/api-swagger",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/worker-manager/worker-manager-api-swagger.mdx",tags:[],version:"current",frontMatter:{id:"backend-worker-manager-api-swagger",title:"REGARDS worker-manager microservice API",sidebar_label:"API",slug:"/development/backend/services/worker-manager/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/worker-manager/overview/"},next:{title:"Setup",permalink:"/docs/development/frontend/introduction/setup/"}},u=[],g={toc:u};function y(e){var t=e.components,r=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,s.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{spec:a,mdxType:"RegardsApiDoc"}))}y.isMDXComponent=!0},15101:function(){},42116:function(){},23197:function(){}}]);