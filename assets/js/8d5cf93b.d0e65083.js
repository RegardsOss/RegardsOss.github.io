/*! For license information please see 8d5cf93b.d0e65083.js.LICENSE.txt */
(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[5587],{22423:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(74848),s=r(28453),i=r(4353);const o=JSON.parse('{"components":{"schemas":{"Authentication":{"properties":{"accessToken":{"type":"string"},"expiresIn":{"format":"int64","type":"integer"},"jti":{"type":"string"},"project":{"type":"string"},"role":{"type":"string"},"scope":{"type":"string"},"serviceProviderName":{"type":"string"},"sub":{"type":"string"},"tokenType":{"type":"string"}},"type":"object"},"DefaultOAuth2AccessToken":{"properties":{"additionalInformation":{"additionalProperties":{"type":"object"},"type":"object"},"expiration":{"format":"date-time","type":"string"},"expired":{"type":"boolean"},"expiresIn":{"format":"int32","type":"integer"},"refreshToken":{"type":"string"},"scope":{"items":{"type":"string"},"type":"array","uniqueItems":true},"tokenType":{"type":"string"},"value":{"type":"string"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginConfiguration":{"properties":{"content":{"$ref":"#/components/schemas/PluginConfiguration"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginMetaData":{"properties":{"content":{"$ref":"#/components/schemas/PluginMetaData"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelServiceProviderDto":{"properties":{"content":{"$ref":"#/components/schemas/ServiceProviderDto"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelServiceProviderPublicDto":{"properties":{"content":{"$ref":"#/components/schemas/ServiceProviderPublicDto"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelString":{"properties":{"content":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"IPluginParam":{"properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN","REGARDS_ENTITY_MODEL"],"type":"string"},"value":{"type":"object"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelServiceProviderDto":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelServiceProviderDto"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelServiceProviderPublicDto":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelServiceProviderPublicDto"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PluginConfiguration":{"properties":{"active":{"type":"boolean"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"iconUrl":{"format":"url","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"isActive":{"type":"boolean","writeOnly":true},"label":{"type":"string"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"parameters":{"items":{"$ref":"#/components/schemas/IPluginParam"},"type":"array","uniqueItems":true},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"priorityOrder":{"format":"int32","type":"integer"},"version":{"type":"string"}},"required":["label","priorityOrder"],"type":"object"},"PluginMetaData":{"properties":{"author":{"type":"string"},"contact":{"type":"string"},"description":{"type":"string"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"licence":{"type":"string","writeOnly":true},"license":{"type":"string"},"markdown":{"type":"string"},"owner":{"type":"string"},"parameters":{"items":{"$ref":"#/components/schemas/PluginParamDescriptor"},"type":"array"},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"url":{"type":"string"},"userMarkdown":{"type":"string"},"version":{"type":"string"}},"type":"object"},"PluginParamDescriptor":{"properties":{"defaultValue":{"type":"string"},"description":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"markdown":{"type":"string"},"name":{"type":"string"},"optional":{"type":"boolean"},"parameterizedSubTypes":{"items":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN","REGARDS_ENTITY_MODEL"],"type":"string"},"type":"array"},"pluginType":{"type":"string"},"sensible":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN","REGARDS_ENTITY_MODEL"],"type":"string"},"unconfigurable":{"type":"boolean"},"userMarkdown":{"type":"string"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"ServiceProviderAuthenticationParams":{"type":"object"},"ServiceProviderDto":{"properties":{"authUrl":{"type":"string"},"descriptionEn":{"type":"string"},"descriptionFr":{"type":"string"},"name":{"type":"string"},"pluginConfiguration":{"$ref":"#/components/schemas/PluginConfiguration"}},"type":"object"},"ServiceProviderPublicDto":{"properties":{"authUrl":{"type":"string"},"descriptionEn":{"type":"string"},"descriptionFr":{"type":"string"},"name":{"type":"string"},"pluginId":{"type":"string"}},"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"System authentication management","license":{"name":"GPL-3.0"},"title":"MICROSERVICE AUTHENTICATION","version":"1.15.2"},"openapi":"3.0.1","paths":{"/borrowRole/{target_name}":{"get":{"operationId":"switchRole","parameters":[{"in":"path","name":"target_name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/DefaultOAuth2AccessToken"}}},"description":"OK"}},"tags":["borrow-role-controller"]}},"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"multipart/form-data":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/plugins":{"get":{"operationId":"getPlugins","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/cache":{"delete":{"operationId":"emptyCache","responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/configs":{"get":{"description":"Return a list of plugin configurations for a specific type","operationId":"getPluginConfigurationsByType","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"All plugin configurations for a specific type were retrieved."}},"summary":"Get plugin configurations","tags":["plugin-controller"]}},"/plugins/configs/{configBusinessId}":{"get":{"operationId":"getPluginConfigurationDirectAccess","parameters":[{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}":{"get":{"operationId":"getPluginMetaDataById","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config":{"get":{"operationId":"getPluginConfigurations","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]},"post":{"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config/{configBusinessId}":{"delete":{"operationId":"deletePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]},"get":{"operationId":"getPluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]},"put":{"operationId":"updatePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugintypes":{"get":{"operationId":"getPluginTypes","parameters":[{"in":"query","name":"available","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelString"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/serviceproviders":{"get":{"operationId":"getServiceProviders","parameters":[{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelServiceProviderDto"}}},"description":"OK"}},"tags":["service-provider-controller"]},"post":{"operationId":"saveServiceProvider","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ServiceProviderDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelServiceProviderDto"}}},"description":"OK"}},"tags":["service-provider-controller"]}},"/serviceproviders/public":{"get":{"operationId":"getServiceProvidersPublic","parameters":[{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelServiceProviderPublicDto"}}},"description":"OK"}},"tags":["service-provider-public-controller"]}},"/serviceproviders/public/{name}":{"get":{"operationId":"getServiceProvider_1","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelServiceProviderPublicDto"}}},"description":"OK"}},"tags":["service-provider-public-controller"]}},"/serviceproviders/verify":{"get":{"operationId":"verifyAndAuthenticate","parameters":[{"in":"query","name":"externalToken","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/Authentication"}}},"description":"OK"}},"tags":["service-provider-controller"]}},"/serviceproviders/{name}":{"delete":{"operationId":"deleteServiceProvider","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["service-provider-controller"]},"get":{"operationId":"getServiceProvider","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelServiceProviderDto"}}},"description":"OK"}},"tags":["service-provider-controller"]},"put":{"operationId":"updateServiceProvider","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ServiceProviderDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelServiceProviderDto"}}},"description":"OK"}},"tags":["service-provider-controller"]}},"/serviceproviders/{name}/authenticate":{"post":{"operationId":"authenticate","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ServiceProviderAuthenticationParams"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/Authentication"}}},"description":"OK"}},"tags":["service-provider-controller"]}},"/serviceproviders/{name}/deauthenticate":{"post":{"operationId":"deauthenticate","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["service-provider-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-authentication"}]}'),a={id:"backend-authentication-api-swagger",title:"REGARDS authentication microservice API",sidebar_label:"REST API",slug:"/development/backend/services/authentication/api-swagger",hide_title:!0,hide_table_of_contents:!0},p=void 0,c={id:"development/backend/regards/authentication/backend-authentication-api-swagger",title:"REGARDS authentication microservice API",description:"",source:"@site/versioned_docs/version-1.15/development/backend/regards/authentication/authentication-api-swagger.mdx",sourceDirName:"development/backend/regards/authentication",slug:"/development/backend/services/authentication/api-swagger",permalink:"/docs/1.15/development/backend/services/authentication/api-swagger",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/authentication/authentication-api-swagger.mdx",tags:[],version:"1.15",frontMatter:{id:"backend-authentication-api-swagger",title:"REGARDS authentication microservice API",sidebar_label:"REST API",slug:"/development/backend/services/authentication/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Authentication plugins",permalink:"/docs/1.15/development/backend/services/authentication/contributor-guides/plugins/"},next:{title:"Overview",permalink:"/docs/1.15/development/backend/services/catalog/overview/"}},m={},d=[];function l(e){return(0,n.jsx)(i.A,{spec:o})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l()}},4353:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var n=r(96540),s=r(20053);r(38193).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var i=r(28794),o=r(92303),a=r(66588),p=r(95293),c=r(55364),m=r.n(c);function d(e,t){void 0===e&&(e="theme-redoc");const r=(0,o.A)(),s="dark"===(0,p.G)().colorMode,i=(0,a.kh)("docusaurus-theme-redoc",{failfast:!0}),c=(0,a.P_)("docusaurus-theme-redoc",e)||Object.values(i)[0];return(0,n.useMemo)((()=>{const{lightTheme:e,darkTheme:n,options:i}=c,o={scrollYOffset:r||"string"!=typeof i.scrollYOffset?i.scrollYOffset:0},a=m()({...i,...o,theme:e},t),p=m()({...i,...o,theme:n},t);return{options:r&&s?p:a,darkThemeOptions:p,lightThemeOptions:a}}),[r,s,c,t])}var l=r(86025);let u=null;var g=r(74848);function y(e){return(0,g.jsx)("div",{className:"redocusaurus-styles"})}const h=function(e){const{className:t,optionsOverrides:r,...a}=e,{store:c,darkThemeOptions:m,lightThemeOptions:h,hasLogo:f}=function(e,t){let{spec:r,url:s,themeId:a}=e;const c=d(a,t),m=(0,l.Ay)(s,{absolute:!0}),g=(0,o.A)(),y="dark"===(0,p.G)().colorMode,h=(0,n.useMemo)((()=>(null!==u&&g&&u.dispose(),u=new i.AppStore(r,m,c.options),{...c,hasLogo:!!r.info?.["x-logo"],store:u})),[g,r,m,c]);return(0,n.useEffect)((()=>{h.store.onDidMount()}),[h,g,y]),h}(a,r);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y,{specProps:a,lightThemeOptions:h,darkThemeOptions:m}),(0,g.jsx)("div",{className:(0,s.A)(["redocusaurus",f&&"redocusaurus-has-logo",t]),children:(0,g.jsx)(i.Redoc,{store:c})})]})};const f=function(e){const{className:t,optionsOverrides:r,spec:n,url:o,themeId:a,isSpecFile:p}=e,{options:c}=d(a,r);return n?(0,g.jsx)(h,{...e,spec:n}):(0,g.jsx)("div",{className:(0,s.A)(["redocusaurus",t]),children:(0,g.jsx)(i.RedocStandalone,{specUrl:o,options:c})})}},26903:()=>{},14834:()=>{},20922:()=>{},32413:()=>{},81912:()=>{}}]);