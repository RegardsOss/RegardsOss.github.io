/*! For license information please see 38f30025.9707c673.js.LICENSE.txt */
(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[66868],{3259:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=s(74848),n=s(28453),r=s(4353),i=s(80274);const a={title:"RS-LTA-MANAGER microservice API",sidebar_label:"All endpoints (OpenAPI)",slug:"/development/backend/services/lta-manager/api-swagger",hide_title:!0,hide_table_of_contents:!0,sidebar_position:3},p=void 0,c={id:"development/services/lta-manager/api-guides/rest/lta-manager-api-swagger",title:"RS-LTA-MANAGER microservice API",description:"",source:"@site/docs/development/services/lta-manager/api-guides/rest/lta-manager-api-swagger.mdx",sourceDirName:"development/services/lta-manager/api-guides/rest",slug:"/development/backend/services/lta-manager/api-swagger",permalink:"/docs/development/backend/services/lta-manager/api-swagger",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/lta-manager/api-guides/rest/lta-manager-api-swagger.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"RS-LTA-MANAGER microservice API",sidebar_label:"All endpoints (OpenAPI)",slug:"/development/backend/services/lta-manager/api-swagger",hide_title:!0,hide_table_of_contents:!0,sidebar_position:3},sidebar:"dev",previous:{title:"Get request status",permalink:"/docs/development/backend/services/lta-manager/guides/get-request-status-rest"},next:{title:"Import/Export",permalink:"/docs/development/backend/services/lta-manager/configuration/import-export"}},m={},d=[];function l(e){return(0,o.jsx)(r.A,{spec:i})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l()}},4353:(e,t,s)=>{"use strict";s.d(t,{A:()=>f});var o=s(96540),n=s(20053);s(38193).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var r=s(28794),i=s(92303),a=s(66588),p=s(95293),c=s(55364),m=s.n(c);function d(e,t){void 0===e&&(e="theme-redoc");const s=(0,i.A)(),n="dark"===(0,p.G)().colorMode,r=(0,a.kh)("docusaurus-theme-redoc",{failfast:!0}),c=(0,a.P_)("docusaurus-theme-redoc",e)||Object.values(r)[0];return(0,o.useMemo)((()=>{const{lightTheme:e,darkTheme:o,options:r}=c,i={scrollYOffset:s||"string"!=typeof r.scrollYOffset?r.scrollYOffset:0},a=m()({...r,...i,theme:e},t),p=m()({...r,...i,theme:o},t);return{options:s&&n?p:a,darkThemeOptions:p,lightThemeOptions:a}}),[s,n,c,t])}var l=s(86025);let u=null;var y=s(74848);function g(e){return(0,y.jsx)("div",{className:"redocusaurus-styles"})}const h=function(e){const{className:t,optionsOverrides:s,...a}=e,{store:c,darkThemeOptions:m,lightThemeOptions:h,hasLogo:f}=function(e,t){let{spec:s,url:n,themeId:a}=e;const c=d(a,t),m=(0,l.Ay)(n,{absolute:!0}),y=(0,i.A)(),g="dark"===(0,p.G)().colorMode,h=(0,o.useMemo)((()=>(null!==u&&y&&u.dispose(),u=new r.AppStore(s,m,c.options),{...c,hasLogo:!!s.info?.["x-logo"],store:u})),[y,s,m,c]);return(0,o.useEffect)((()=>{h.store.onDidMount()}),[h,y,g]),h}(a,s);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{specProps:a,lightThemeOptions:h,darkThemeOptions:m}),(0,y.jsx)("div",{className:(0,n.A)(["redocusaurus",f&&"redocusaurus-has-logo",t]),children:(0,y.jsx)(r.Redoc,{store:c})})]})};const f=function(e){const{className:t,optionsOverrides:s,spec:o,url:i,themeId:a,isSpecFile:p}=e,{options:c}=d(a,s);return o?(0,y.jsx)(h,{...e,spec:o}):(0,y.jsx)("div",{className:(0,n.A)(["redocusaurus",t]),children:(0,y.jsx)(r.RedocStandalone,{specUrl:i,options:c})})}},26903:()=>{},14834:()=>{},20922:()=>{},32413:()=>{},81912:()=>{},80274:e=>{"use strict";e.exports=JSON.parse('{"components":{"schemas":{"DatesRangeRestriction":{"description":"Submission request last update date.","nullable":true,"properties":{"after":{"description":"Keep entities having date greater than","format":"date-time","type":"string"},"before":{"description":"Keep entities having date less than","format":"date-time","type":"string"}},"type":"object"},"DynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"DynamicTenantSettingDtoObject":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelDynamicTenantSettingDtoObject":{"properties":{"content":{"$ref":"#/components/schemas/DynamicTenantSettingDtoObject"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelSubmissionResponseDto":{"properties":{"content":{"$ref":"#/components/schemas/SubmissionResponseDto"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelSubmittedSearchResponseDto":{"properties":{"content":{"$ref":"#/components/schemas/SubmittedSearchResponseDto"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"IGeometry":{"description":"Product geometry in GeoJSON RFC 7946 Format.","example":{"coordinates":[[[51.57951867046327,24.245497137951105],[51.757440626844186,24.29407298430547],[51.79438927593287,24.019826158132506],[52.57708051942561,24.177439276622707],[53.404006788960146,24.15131684009917]]],"type":"Polygon"},"nullable":true,"properties":{"crs":{"type":"string","writeOnly":true},"type":{"type":"string"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelSubmittedSearchResponseDto":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelSubmittedSearchResponseDto"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"ProductFileDto":{"description":"Files linked to the product. At least one is required.","minimum":1,"properties":{"checksumMd5":{"description":"Checksum of the file in md5 format.","example":"d326ed75d1e9c1109a9dbabf114f6b61","pattern":"^[a-fA-F0-9]{32}$","type":"string"},"filename":{"description":"Name of the file.","example":"thumbnail.png","type":"string"},"mimeType":{"description":"Mimetype of the file.","example":"image/png","properties":{"charset":{"type":"string"},"concrete":{"type":"boolean"},"parameters":{"additionalProperties":{"type":"string"},"type":"object"},"subtype":{"type":"string"},"subtypeSuffix":{"type":"string"},"type":{"type":"string"},"wildcardSubtype":{"type":"boolean"},"wildcardType":{"type":"boolean"}},"type":"string"},"type":{"description":"Type of the file among RAWDATA, QUICKLOOK(_SD|_MD_|_HD), THUMBNAIL.","enum":["ZIP","RAWDATA","QUICKLOOK_SD","QUICKLOOK_MD","QUICKLOOK_HD","DOCUMENT","THUMBNAIL","OTHER","AIP","DESCRIPTION"],"example":"THUMBNAIL","type":"string"},"url":{"description":"Location of the file. Only http(s) or file protocols are accepted.","example":"file:/input/file-lta-100.png","type":"string"}},"required":["checksumMd5","filename","mimeType","type","url"],"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"SearchSubmissionRequestParameters":{"properties":{"creationDate":{"$ref":"#/components/schemas/DatesRangeRestriction"},"datatype":{"description":"Product datatype.","nullable":true,"type":"string"},"idsRestriction":{"$ref":"#/components/schemas/ValuesRestrictionLong"},"owner":{"description":"Request sender.","nullable":true,"type":"string"},"session":{"description":"Submission request session","nullable":true,"type":"string"},"statusDate":{"$ref":"#/components/schemas/DatesRangeRestriction"},"statusesRestriction":{"$ref":"#/components/schemas/ValuesRestrictionSubmissionRequestState"}},"type":"object"},"SessionInfoGlobalDTO":{"properties":{"status":{"enum":["RUNNING","ERROR","DONE"],"type":"string"}},"type":"object"},"SessionInfoPageDtoObject":{"properties":{"content":{"items":{"type":"object"},"type":"array"},"globalStatus":{"enum":["RUNNING","ERROR","DONE"],"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"SubmissionRequestDto":{"properties":{"correlationId":{"description":"Identifier to track this request during the entire workflow. It must be unique.","example":"lta-product-100-000001","maxLength":255,"minLength":0,"type":"string"},"datatype":{"description":"Product datatype. Must be present in the lta-manager configuration.","example":"configured-datatype","maxLength":255,"minLength":0,"type":"string"},"files":{"description":"Files linked to the product. At least one is required.","items":{"$ref":"#/components/schemas/ProductFileDto"},"minimum":1,"type":"array"},"geometry":{"$ref":"#/components/schemas/IGeometry"},"originUrn":{"description":"Id of the product in the original catalog.","example":"origin-lta-product-id","maxLength":255,"minLength":0,"nullable":true,"type":"string"},"productId":{"description":"Provider id of the OAIS product to generate.","example":"lta-product-100","maxLength":255,"minLength":0,"type":"string"},"properties":{"additionalProperties":{"description":"Map of key/value properties.","example":{"creation_date":"2023-05-01T00:00:00Z","geolocalized":"invalidValueType","name":"lta-product-100"},"nullable":true,"type":"object"},"description":"Map of key/value properties.","example":{"creation_date":"2023-05-01T00:00:00Z","geolocalized":"invalidValueType","name":"lta-product-100"},"nullable":true,"type":"object"},"session":{"description":"Session to monitor the generation of the product. If not provided, a default session will be used.","example":"lta-session-name","maxLength":128,"minLength":0,"nullable":true,"type":"string"},"storePath":{"description":"Path to manually define the destination location for files on archival system. If null, the storePath will be built from the lta-manager configuration.","example":"/2024/1/15/lta-product-100","maxLength":255,"minLength":0,"nullable":true,"pattern":"^[\\\\w\\\\/\\\\-_:]*$","type":"string"},"tags":{"description":"List of string tags.","example":["lta","amqp"],"items":{"description":"List of string tags.","example":"[\\"lta\\",\\"amqp\\"]","nullable":true,"type":"string"},"nullable":true,"type":"array"}},"required":["correlationId","datatype","files","productId"],"type":"object"},"SubmissionResponseDto":{"properties":{"correlationId":{"description":"Identifier to track the request through the workflow.","example":"lta-product-100-000001","type":"string"},"expires":{"description":"Expiration date of the created request.","example":"2025-05-01T00:00:00Z","format":"date-time","nullable":true,"type":"string"},"message":{"description":"Possible error message.","example":"An error occurred while ...","nullable":true,"type":"string"},"productId":{"description":"Identifier of the submitted product.","example":"lta-product-100","type":"string"},"responseStatus":{"description":"Acceptance status of the submitted product.","enum":["GRANTED","DENIED","SUCCESS","ERROR"],"example":"GRANTED","type":"string"},"session":{"description":"Session to monitor the created submission request.","example":"LTA-session","nullable":true,"type":"string"}},"required":["correlationId","responseStatus"],"type":"object"},"SubmittedSearchResponseDto":{"properties":{"correlationId":{"description":"Identifier of the submission request.","type":"string"},"creationDate":{"description":"Submission request creation date.","format":"date-time","type":"string"},"id":{"description":"Request identifier.","format":"int64","type":"integer"},"message":{"type":"string"},"model":{"description":"Model used by the submitted product.","type":"string"},"owner":{"description":"Request sender.","type":"string"},"product":{"$ref":"#/components/schemas/SubmissionRequestDto"},"session":{"description":"Session to monitor the submission request.","type":"string"},"status":{"description":"Progress status of the submission request.","enum":["VALIDATED","GENERATION_PENDING","GENERATED","GENERATION_ERROR","INGESTION_PENDING","DONE","INGESTION_ERROR"],"type":"string"},"statusDate":{"description":"Submission request last update date.","format":"date-time","type":"string"},"storePath":{"description":"Product store path.","properties":{"absolute":{"type":"boolean"},"fileName":{"properties":{"absolute":{"type":"boolean"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"}},"type":"string"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"},"parent":{"properties":{"absolute":{"type":"boolean"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"}},"type":"string"},"root":{"properties":{"absolute":{"type":"boolean"},"fileSystem":{"properties":{"fileStores":{"type":"object"},"open":{"type":"boolean"},"readOnly":{"type":"boolean"},"rootDirectories":{"type":"string"},"separator":{"type":"string"},"userPrincipalLookupService":{"type":"object"}},"type":"object"},"nameCount":{"format":"int32","type":"integer"}},"type":"string"}},"type":"string"}},"required":["correlationId","creationDate","id","model","owner","session","status","statusDate","storePath"],"type":"object"},"ValuesRestrictionLong":{"description":"Restricted ids (INCLUDED or EXCLUDED).","nullable":true,"properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","format":"int64","type":"integer"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"},"ValuesRestrictionSubmissionRequestState":{"description":"Included submission request states (only INCLUDED MODE is accepted).","nullable":true,"properties":{"ignoreCase":{"description":"Only available for String resitrctions. Allow if true, to search values ignoring case. Default false","type":"boolean"},"matchMode":{"description":"Match mode to use, can be STRICT|STARTS_WITH|CONTAINS|ENDS_WITH (default STRICT)","enum":["STRICT","STARTS_WITH","CONTAINS","ENDS_WITH"],"type":"string"},"mode":{"description":"Restriction mode to use","enum":["INCLUDE","EXCLUDE"],"type":"string"},"values":{"description":"List of accepted or refused values (according to the mode)","items":{"description":"List of accepted or refused values (according to the mode)","enum":["VALIDATED","GENERATION_PENDING","GENERATED","GENERATION_ERROR","INGESTION_PENDING","DONE","INGESTION_ERROR"],"type":"string"},"maxItems":1000,"minItems":0,"type":"array"}},"required":["mode","values"],"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Lta Manager API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE LTA MANAGER","version":"1.16.1"},"openapi":"3.0.1","paths":{"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"multipart/form-data":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/products":{"delete":{"description":"Find and delete submission requests from criterias defined in request body.","operationId":"deleteSubmissionRequests","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchSubmissionRequestParameters"}}},"description":"Set of search criterion.","required":true},"responses":{"201":{"content":{"*/*":{"schema":{"type":"string"}}},"description":"The SubmissionRequest deletion will be take in account. This not means deletion is already done, but will be scheduled in the near future."},"403":{"content":{"application/html":{}},"description":"The endpoint is not accessible for the user."},"422":{"content":{"application/json":{}},"description":"The submission request criteria dto syntax is incorrect."}},"summary":"Asynchronously delete a selection of submission request.","tags":["Deletion controller"]},"post":{"description":"Create and save a submission request from a submission request dto.","operationId":"createSubmissionRequest","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SubmissionRequestDto"}}},"description":"Submission request dto to be processed.","required":true},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelSubmissionResponseDto"}}},"description":"The SubmissionRequest was successfully saved. Returns SubmissionResponseDto with the id of the request."},"403":{"content":{"application/html":{}},"description":"The endpoint is not accessible for the user."},"422":{"content":{"application/json":{}},"description":"The submission request dto syntax is incorrect."}},"summary":"Register a submission request.","tags":["Create controller"]}},"/products/replace":{"post":{"description":"Create and save a submission request from a submission request dto. If the product already exists, it will be overridden","operationId":"createSubmissionRequestWithReplace","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SubmissionRequestDto"}}},"description":"Submission request dto to be processed.","required":true},"responses":{"201":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelSubmissionResponseDto"}}},"description":"The SubmissionRequest was successfully saved. Returns SubmissionResponseDto with the id of the request."},"403":{"content":{"application/html":{}},"description":"The endpoint is not accessible for the user."},"422":{"content":{"application/json":{}},"description":"The submission request dto syntax is incorrect."}},"summary":"Register a submission request with replacement if exists.","tags":["Create controller"]}},"/products/search":{"post":{"operationId":"findSubmittedRequests","parameters":[{"description":"Sorting and page configuration","in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchSubmissionRequestParameters"}}},"description":"Set of search criterion.","required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelSubmittedSearchResponseDto"}}},"description":"Returns submitted requests found."},"403":{"content":{"application/html":{}},"description":"The endpoint is not accessible for the user."}},"summary":"Search for submission requests with criteria","tags":["Search controller"]}},"/products/{correlationId}/info":{"get":{"operationId":"getSubmissionRequestStatus","parameters":[{"description":"Identifier of the submission request.","in":"path","name":"correlationId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelSubmissionResponseDto"}}},"description":"Returns submission response status."},"403":{"content":{"application/html":{}},"description":"The endpoint is not accessible for the user."},"404":{"content":{"application/json":{}},"description":"Associated submission request was not found."}},"summary":"Retrieve submission request status.","tags":["Search controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/sessions/{session}/info":{"get":{"operationId":"getSessionGlobalDetails","parameters":[{"in":"path","name":"session","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SessionInfoGlobalDTO"}}},"description":"Returns session successfully"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SessionInfoGlobalDTO"}}},"description":"Cannot find session for the user."}},"summary":"Calculate global state of a session","tags":["Session controller"]}},"/sessions/{session}/info/details":{"get":{"operationId":"getSessionDetails","parameters":[{"in":"path","name":"session","required":true,"schema":{"type":"string"}},{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SessionInfoPageDtoObject"}}},"description":"Returns session successfully"},"404":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/SessionInfoPageDtoObject"}}},"description":"Cannot find session for the user."}},"summary":"Calculate itemized state of a session","tags":["Session controller"]}},"/settings":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"names","required":false,"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"},"type":"array"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/settings/{name}":{"delete":{"operationId":"reset","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-lta-manager"}]}')}}]);