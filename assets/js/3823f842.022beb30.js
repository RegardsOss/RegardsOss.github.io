(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[63310],{53504:(e,t,n)=>{"use strict";n.d(t,{c:()=>s});const s=n(24856).c},1992:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(45072),o=(n(11504),n(95788)),r=n(53504);const a=JSON.parse('{"components":{"schemas":{"ConfigurationDTO":{"properties":{"configuration":{"type":"string"}},"type":"object"},"EntityModelConfigurationDTO":{"properties":{"content":{"$ref":"#/components/schemas/ConfigurationDTO"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelModule":{"properties":{"content":{"$ref":"#/components/schemas/Module"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelTheme":{"properties":{"content":{"$ref":"#/components/schemas/Theme"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelToponymDTO":{"properties":{"content":{"$ref":"#/components/schemas/ToponymDTO"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelUILayout":{"properties":{"content":{"$ref":"#/components/schemas/UILayout"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"IGeometry":{"properties":{"crs":{"type":"string","writeOnly":true},"type":{"type":"string"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"Module":{"properties":{"active":{"type":"boolean"},"applicationId":{"type":"string"},"conf":{"type":"string"},"container":{"type":"string"},"description":{"type":"string"},"id":{"format":"int64","type":"integer"},"page":{"$ref":"#/components/schemas/UIPage"},"type":{"type":"string"}},"required":["active","applicationId","container","description","type"],"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelModule":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelModule"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelTheme":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelTheme"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelToponymDTO":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelToponymDTO"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedResourcesAssemblerModule":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"PagedResourcesAssemblerTheme":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"PagedResourcesAssemblerToponymDTO":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"Theme":{"properties":{"active":{"type":"boolean"},"configuration":{"type":"string"},"id":{"format":"int64","type":"integer"},"name":{"type":"string"},"visible":{"type":"boolean"}},"required":["configuration","name"],"type":"object"},"ToponymDTO":{"properties":{"businessId":{"type":"string"},"copyright":{"type":"string"},"description":{"type":"string"},"geometry":{"$ref":"#/components/schemas/IGeometry"},"labelEn":{"type":"string"},"labelFr":{"type":"string"},"toponymMetadata":{"$ref":"#/components/schemas/ToponymMetadata"},"visible":{"type":"boolean"}},"type":"object"},"ToponymGeoJson":{"properties":{"feature":{"type":"string"},"project":{"type":"string"},"user":{"type":"string"}},"type":"object"},"ToponymMetadata":{"properties":{"author":{"type":"string"},"creationDate":{"format":"date-time","type":"string"},"expirationDate":{"format":"date-time","type":"string"},"project":{"type":"string"}},"type":"object"},"UILayout":{"properties":{"applicationId":{"type":"string"},"id":{"format":"int64","type":"integer"},"layout":{"type":"string"}},"required":["applicationId","layout"],"type":"object"},"UIPage":{"properties":{"customIconURL":{"type":"string"},"home":{"type":"boolean"},"iconType":{"type":"string"},"title":{"type":"string"}},"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Configuration for portal and instance admin GUI","license":{"name":"GPL-3.0"},"title":"MICROSERVICE ACCESS INSTANCE","version":"1.12.0"},"openapi":"3.0.1","paths":{"/applications/{applicationId}/modules":{"get":{"operationId":"retrieveModules","parameters":[{"in":"path","name":"applicationId","required":true,"schema":{"type":"string"}},{"in":"query","name":"active","required":false,"schema":{"type":"string"}},{"in":"query","name":"type","required":false,"schema":{"type":"string"}},{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerModule"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelModule"}}},"description":"OK"}},"tags":["module-controller"]},"post":{"operationId":"saveModule","parameters":[{"in":"path","name":"applicationId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Module"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelModule"}}},"description":"OK"}},"tags":["module-controller"]}},"/applications/{applicationId}/modules/{moduleId}":{"delete":{"operationId":"deleteModule","parameters":[{"in":"path","name":"applicationId","required":true,"schema":{"type":"string"}},{"in":"path","name":"moduleId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["module-controller"]},"get":{"operationId":"retrieveModule","parameters":[{"in":"path","name":"applicationId","required":true,"schema":{"type":"string"}},{"in":"path","name":"moduleId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelModule"}}},"description":"OK"}},"tags":["module-controller"]},"put":{"operationId":"updateModule","parameters":[{"in":"path","name":"applicationId","required":true,"schema":{"type":"string"}},{"in":"path","name":"moduleId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Module"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelModule"}}},"description":"OK"}},"tags":["module-controller"]}},"/configuration/{applicationId}":{"get":{"operationId":"retrieveConfiguration","parameters":[{"in":"path","name":"applicationId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelConfigurationDTO"}}},"description":"OK"}},"tags":["ui-configuration-controller"]},"post":{"operationId":"addConfiguration","parameters":[{"in":"path","name":"applicationId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ConfigurationDTO"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelConfigurationDTO"}}},"description":"OK"}},"tags":["ui-configuration-controller"]},"put":{"operationId":"updateConfiguration","parameters":[{"in":"path","name":"applicationId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ConfigurationDTO"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelConfigurationDTO"}}},"description":"OK"}},"tags":["ui-configuration-controller"]}},"/layouts/{applicationId}":{"get":{"operationId":"retrieveUILayout","parameters":[{"in":"path","name":"applicationId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelUILayout"}}},"description":"OK"}},"tags":["ui-layout-controller"]},"put":{"operationId":"updateUILayout","parameters":[{"in":"path","name":"applicationId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/UILayout"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelUILayout"}}},"description":"OK"}},"tags":["ui-layout-controller"]}},"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}},"/themes":{"get":{"description":"Return a page of HMI themes","operationId":"retrieveThemes","parameters":[{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerTheme"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelTheme"}}},"description":"All HMI themes were retrieved."}},"summary":"Get HMI themes","tags":["theme-controller"]},"post":{"operationId":"saveTheme","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Theme"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelTheme"}}},"description":"OK"}},"tags":["theme-controller"]}},"/themes/{themeId}":{"delete":{"operationId":"deleteTheme","parameters":[{"in":"path","name":"themeId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["theme-controller"]},"get":{"operationId":"retrieveTheme","parameters":[{"in":"path","name":"themeId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelTheme"}}},"description":"OK"}},"tags":["theme-controller"]},"put":{"operationId":"updateTheme","parameters":[{"in":"path","name":"themeId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Theme"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelTheme"}}},"description":"OK"}},"tags":["theme-controller"]}},"/toponyms":{"get":{"operationId":"find","parameters":[{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerToponymDTO"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelToponymDTO"}}},"description":"OK"}},"tags":["toponyms-controller"]},"post":{"operationId":"createNotVisibleToponym","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ToponymGeoJson"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelToponymDTO"}}},"description":"OK"}},"tags":["toponyms-controller"]}},"/toponyms/search":{"get":{"operationId":"search","parameters":[{"in":"query","name":"partialLabel","required":false,"schema":{"type":"string"}},{"in":"query","name":"locale","required":false,"schema":{"default":"en","type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelToponymDTO"},"type":"array"}}},"description":"OK"}},"tags":["toponyms-controller"]}},"/toponyms/{businessId}":{"get":{"operationId":"get","parameters":[{"in":"path","name":"businessId","required":true,"schema":{"type":"string"}},{"in":"query","name":"simplified","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelToponymDTO"}}},"description":"OK"}},"tags":["toponyms-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-access-instance"}]}'),i={id:"backend-access-instance-api-swagger",title:"REGARDS access-instance microservice API",sidebar_label:"Access instance API",slug:"/development/backend/services/access-instance/api-swagger",hide_title:!0,hide_table_of_contents:!0},p=void 0,c={unversionedId:"development/backend/regards/access/backend-access-instance-api-swagger",id:"version-1.12.0/development/backend/regards/access/backend-access-instance-api-swagger",title:"REGARDS access-instance microservice API",description:"",source:"@site/versioned_docs/version-1.12.0/development/backend/regards/access/access-instance-api-swagger.mdx",sourceDirName:"development/backend/regards/access",slug:"/development/backend/services/access-instance/api-swagger",permalink:"/docs/1.12.0/development/backend/services/access-instance/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/regards/access/access-instance-api-swagger.mdx",tags:[],version:"1.12.0",frontMatter:{id:"backend-access-instance-api-swagger",title:"REGARDS access-instance microservice API",sidebar_label:"Access instance API",slug:"/development/backend/services/access-instance/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Access project API",permalink:"/docs/1.12.0/development/backend/services/access-project/api-swagger"},next:{title:"Overview",permalink:"/docs/1.12.0/development/backend/services/admin/overview/"}},m={},d=[],l={toc:d},y="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(y,(0,s.c)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.c,{spec:a,mdxType:"RegardsApiDoc"}))}u.isMDXComponent=!0},51448:()=>{},21576:()=>{},67364:()=>{},48564:()=>{},96460:()=>{},36952:()=>{},15272:()=>{}}]);