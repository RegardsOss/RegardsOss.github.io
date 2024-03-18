/*! For license information please see 6da7d719.be0e9fd6.js.LICENSE.txt */
(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[80784],{4353:(e,t,s)=>{"use strict";s.d(t,{A:()=>f});var r=s(58168),n=s(96540),o=s(20053);s(38193).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var i=s(28794),a=s(92303),c=s(66588),p=s(95293),d=s(55364),m=s.n(d);function l(e,t){void 0===e&&(e="theme-redoc");const s=(0,a.A)(),r="dark"===(0,p.G)().colorMode,o=(0,c.kh)("docusaurus-theme-redoc",{failfast:!0}),i=(0,c.P_)("docusaurus-theme-redoc",e)||Object.values(o)[0];return(0,n.useMemo)((()=>{const{lightTheme:e,darkTheme:n,options:o}=i,a={scrollYOffset:s||"string"!=typeof o.scrollYOffset?o.scrollYOffset:0},c=m()({...o,...a,theme:e},t),p=m()({...o,...a,theme:n},t);return{options:s&&r?p:c,darkThemeOptions:p,lightThemeOptions:c}}),[s,r,i,t])}var u=s(86025);let y=null;function g(e){return n.createElement("div",{className:"redocusaurus-styles"})}const h=function(e){const{className:t,optionsOverrides:s,...r}=e,{store:c,darkThemeOptions:d,lightThemeOptions:m,hasLogo:h}=function(e,t){let{spec:s,url:r,themeId:o}=e;const c=l(o,t),d=(0,u.A)(r,{absolute:!0}),m=(0,a.A)(),g="dark"===(0,p.G)().colorMode,h=(0,n.useMemo)((()=>(null!==y&&m&&y.dispose(),y=new i.AppStore(s,d,c.options),{...c,hasLogo:!!s.info?.["x-logo"],store:y})),[m,s,d,c]);return(0,n.useEffect)((()=>{h.store.onDidMount()}),[h,m,g]),h}(r,s);return n.createElement(n.Fragment,null,n.createElement(g,{specProps:r,lightThemeOptions:m,darkThemeOptions:d}),n.createElement("div",{className:(0,o.A)(["redocusaurus",h&&"redocusaurus-has-logo",t])},n.createElement(i.Redoc,{store:c})))};const f=function(e){const{className:t,optionsOverrides:s,spec:a,url:c,themeId:p,isSpecFile:d}=e,{options:m}=l(p,s);return a?n.createElement(h,(0,r.A)({},e,{spec:a})):n.createElement("div",{className:(0,o.A)(["redocusaurus",t])},n.createElement(i.RedocStandalone,{specUrl:c,options:m}))}},74502:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var r=s(58168),n=(s(96540),s(15680)),o=s(4353);const i=JSON.parse('{"components":{"schemas":{"DynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"DynamicTenantSettingDtoObject":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelDynamicTenantSettingDtoObject":{"properties":{"content":{"$ref":"#/components/schemas/DynamicTenantSettingDtoObject"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Delivery API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE DELIVERY","version":"1.14.1"},"openapi":"3.0.1","paths":{"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"multipart/form-data":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/settings":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"names","required":false,"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"},"type":"array"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/settings/{name}":{"delete":{"operationId":"reset","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-delivery"}]}'),a={id:"backend-delivery-rest-api",title:"RS-DELIVERY microservice API",sidebar_label:"REST API",slug:"/development/backend/services/delivery/guides/rest/api",hide_title:!0,hide_table_of_contents:!0},c=void 0,p={unversionedId:"development/backend/regards/delivery/api-guides/rest/backend-delivery-rest-api",id:"development/backend/regards/delivery/api-guides/rest/backend-delivery-rest-api",title:"RS-DELIVERY microservice API",description:"",source:"@site/docs/development/backend/regards/delivery/api-guides/rest/rs-delivery-api-swagger.mdx",sourceDirName:"development/backend/regards/delivery/api-guides/rest",slug:"/development/backend/services/delivery/guides/rest/api",permalink:"/docs/development/backend/services/delivery/guides/rest/api",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/delivery/api-guides/rest/rs-delivery-api-swagger.mdx",tags:[],version:"current",frontMatter:{id:"backend-delivery-rest-api",title:"RS-DELIVERY microservice API",sidebar_label:"REST API",slug:"/development/backend/services/delivery/guides/rest/api",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Configure settings",permalink:"/docs/development/backend/services/delivery/guides/rest/configure-settings"},next:{title:"Overview",permalink:"/docs/development/backend/services/fem/overview/"}},d={},m=[],l={toc:m},u="wrapper";function y(e){let{components:t,...s}=e;return(0,n.yg)(u,(0,r.A)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(o.A,{spec:i,mdxType:"RegardsApiDoc"}))}y.isMDXComponent=!0},26903:()=>{},15915:()=>{},67889:()=>{},33880:()=>{},14834:()=>{},20922:()=>{},81912:()=>{}}]);