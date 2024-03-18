/*! For license information please see aecb530c.53098942.js.LICENSE.txt */
(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[98665],{4353:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var s=r(58168),n=r(96540),o=r(20053);r(38193).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var i=r(28794),a=r(92303),c=r(66588),p=r(95293),m=r(55364),d=r.n(m);function l(e,t){void 0===e&&(e="theme-redoc");const r=(0,a.A)(),s="dark"===(0,p.G)().colorMode,o=(0,c.kh)("docusaurus-theme-redoc",{failfast:!0}),i=(0,c.P_)("docusaurus-theme-redoc",e)||Object.values(o)[0];return(0,n.useMemo)((()=>{const{lightTheme:e,darkTheme:n,options:o}=i,a={scrollYOffset:r||"string"!=typeof o.scrollYOffset?o.scrollYOffset:0},c=d()({...o,...a,theme:e},t),p=d()({...o,...a,theme:n},t);return{options:r&&s?p:c,darkThemeOptions:p,lightThemeOptions:c}}),[r,s,i,t])}var u=r(86025);let g=null;function y(e){return n.createElement("div",{className:"redocusaurus-styles"})}const h=function(e){const{className:t,optionsOverrides:r,...s}=e,{store:c,darkThemeOptions:m,lightThemeOptions:d,hasLogo:h}=function(e,t){let{spec:r,url:s,themeId:o}=e;const c=l(o,t),m=(0,u.A)(s,{absolute:!0}),d=(0,a.A)(),y="dark"===(0,p.G)().colorMode,h=(0,n.useMemo)((()=>(null!==g&&d&&g.dispose(),g=new i.AppStore(r,m,c.options),{...c,hasLogo:!!r.info?.["x-logo"],store:g})),[d,r,m,c]);return(0,n.useEffect)((()=>{h.store.onDidMount()}),[h,d,y]),h}(s,r);return n.createElement(n.Fragment,null,n.createElement(y,{specProps:s,lightThemeOptions:d,darkThemeOptions:m}),n.createElement("div",{className:(0,o.A)(["redocusaurus",h&&"redocusaurus-has-logo",t])},n.createElement(i.Redoc,{store:c})))};const f=function(e){const{className:t,optionsOverrides:r,spec:a,url:c,themeId:p,isSpecFile:m}=e,{options:d}=l(p,r);return a?n.createElement(h,(0,s.A)({},e,{spec:a})):n.createElement("div",{className:(0,o.A)(["redocusaurus",t])},n.createElement(i.RedocStandalone,{specUrl:c,options:d}))}},31415:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var s=r(58168),n=(r(96540),r(15680)),o=r(4353);const i=JSON.parse('{"components":{"schemas":{"DatesRangeRestriction":{"description":"Request creation date restriction","properties":{"after":{"description":"Keep entities having date greater than","format":"date-time","type":"string"},"before":{"description":"Keep entities having date less than","format":"date-time","type":"string"}},"type":"object"},"DynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"DynamicTenantSettingDtoObject":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelDynamicTenantSettingDtoObject":{"properties":{"content":{"$ref":"#/components/schemas/DynamicTenantSettingDtoObject"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelLightRequest":{"properties":{"content":{"$ref":"#/components/schemas/LightRequest"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"LightRequest":{"properties":{"contentType":{"type":"string"},"creationDate":{"format":"date-time","type":"string"},"dispatchedWorkerType":{"type":"string"},"error":{"type":"string"},"requestId":{"type":"string"},"session":{"type":"string"},"source":{"type":"string"},"status":{"enum":["DISPATCHED","NO_WORKER_AVAILABLE","RUNNING","INVALID_CONTENT","SUCCESS","ERROR","TO_DISPATCH","TO_DELETE"],"type":"string"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"description":"Sorting and page configuration","properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelLightRequest":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelLightRequest"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"SearchRequestParameters":{"description":"Filter requests using criteria","properties":{"contentTypes":{"$ref":"#/components/schemas/ValuesRestrictionString"},"creationDate":{"$ref":"#/components/schemas/DatesRangeRestriction"},"dispatchedWorkerType":{"description":"Name of the Worker type matching the Request Content Type","example":"WorkerAcceptingContentType1","type":"string"},"ids":{"$ref":"#/components/schemas/ValuesRestrictionLong"},"session":{"description":"Session that emitted the request","example":"Today_Mission1","type":"string"},"source":{"description":"Source that emitted the request","example":"CNES","type":"string"},"statuses":{"$ref":"#/components/schemas/ValuesRestrictionRequestStatus"}},"type":"object"},"ValuesRestrictionLong":{"description":"Filter on Request IDs","properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","format":"int64","type":"integer"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"},"ValuesRestrictionRequestStatus":{"description":"Filter on Request statuses","properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","enum":["DISPATCHED","NO_WORKER_AVAILABLE","RUNNING","INVALID_CONTENT","SUCCESS","ERROR","TO_DISPATCH","TO_DELETE"],"type":"string"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"},"ValuesRestrictionString":{"description":"Filter on Content types","properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","type":"string"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"},"WorkerTypeAlive":{"properties":{"nbInstance":{"format":"int64","type":"integer"},"workerType":{"type":"string"}},"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Worker Manager API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE WORKER MANAGER","version":"1.12.0"},"openapi":"3.0.1","paths":{"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/requests":{"post":{"description":"Retrieve Requests matching given filters.","operationId":"retrieveLightRequestList","requestBody":{"content":{"application/json":{"schema":{"properties":{"filters":{"$ref":"#/components/schemas/SearchRequestParameters"},"pageable":{"$ref":"#/components/schemas/Pageable"}},"type":"object"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelLightRequest"}}},"description":"OK"}},"summary":"Retrieve Requests","tags":["Request controller"]}},"/requests/delete":{"delete":{"description":"Delete Requests matching provided filters.","operationId":"deleteRequests","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchRequestParameters"}}},"required":true},"responses":{"200":{"description":"OK"}},"summary":"Delete Requests","tags":["Request controller"]}},"/requests/retry":{"post":{"description":"Retry Requests matching provided filters.","operationId":"retryRequests","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchRequestParameters"}}},"required":true},"responses":{"200":{"description":"OK"}},"summary":"Retry Requests","tags":["Request controller"]}},"/requests/{requestId}":{"get":{"description":"Retrieve a Request by its id.","operationId":"retrieveLightRequest","parameters":[{"description":"Request ID","example":1,"in":"path","name":"requestId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelLightRequest"}}},"description":"OK"}},"summary":"Retrieve Request","tags":["Request controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/settings":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"names","required":false,"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"},"type":"array"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/settings/{name}":{"delete":{"operationId":"reset","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}},"/workers":{"get":{"description":"Retrieve worker types with its number of alive instances.","operationId":"retrieveWorkerList","parameters":[{"description":"Filter Workers on Request Content Types they handle","in":"query","name":"contentTypes","required":false,"schema":{"items":{"type":"string"},"type":"array"}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/WorkerTypeAlive"},"type":"array"}}},"description":"OK"}},"summary":"Retrieve worker types","tags":["Worker manager"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-worker-manager"}],"tags":[{"name":"Request controller"},{"name":"Worker manager"}]}'),a={id:"backend-worker-manager-api-swagger",title:"REGARDS worker-manager microservice API",sidebar_label:"API",slug:"/development/backend/services/worker-manager/api-swagger",hide_title:!0,hide_table_of_contents:!0},c=void 0,p={unversionedId:"development/backend/regards/worker-manager/backend-worker-manager-api-swagger",id:"version-1.12.0/development/backend/regards/worker-manager/backend-worker-manager-api-swagger",title:"REGARDS worker-manager microservice API",description:"",source:"@site/versioned_docs/version-1.12.0/development/backend/regards/worker-manager/worker-manager-api-swagger.mdx",sourceDirName:"development/backend/regards/worker-manager",slug:"/development/backend/services/worker-manager/api-swagger",permalink:"/docs/1.12.0/development/backend/services/worker-manager/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/regards/worker-manager/worker-manager-api-swagger.mdx",tags:[],version:"1.12.0",frontMatter:{id:"backend-worker-manager-api-swagger",title:"REGARDS worker-manager microservice API",sidebar_label:"API",slug:"/development/backend/services/worker-manager/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.12.0/development/backend/services/worker-manager/overview/"},next:{title:"Overview",permalink:"/docs/1.12.0/development/backend/services/lta-manager/overview/"}},m={},d=[],l={toc:d},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,s.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(o.A,{spec:i,mdxType:"RegardsApiDoc"}))}g.isMDXComponent=!0},26903:()=>{},15915:()=>{},67889:()=>{},33880:()=>{},14834:()=>{},20922:()=>{},81912:()=>{}}]);