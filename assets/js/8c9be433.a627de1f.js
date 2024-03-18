/*! For license information please see 8c9be433.a627de1f.js.LICENSE.txt */
(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[41612],{4353:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var r=n(58168),o=n(96540),s=n(20053);n(38193).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var a=n(28794),i=n(92303),c=n(66588),p=n(95293),m=n(55364),d=n.n(m);function u(e,t){void 0===e&&(e="theme-redoc");const n=(0,i.A)(),r="dark"===(0,p.G)().colorMode,s=(0,c.kh)("docusaurus-theme-redoc",{failfast:!0}),a=(0,c.P_)("docusaurus-theme-redoc",e)||Object.values(s)[0];return(0,o.useMemo)((()=>{const{lightTheme:e,darkTheme:o,options:s}=a,i={scrollYOffset:n||"string"!=typeof s.scrollYOffset?s.scrollYOffset:0},c=d()({...s,...i,theme:e},t),p=d()({...s,...i,theme:o},t);return{options:n&&r?p:c,darkThemeOptions:p,lightThemeOptions:c}}),[n,r,a,t])}var l=n(86025);let y=null;function g(e){return o.createElement("div",{className:"redocusaurus-styles"})}const h=function(e){const{className:t,optionsOverrides:n,...r}=e,{store:c,darkThemeOptions:m,lightThemeOptions:d,hasLogo:h}=function(e,t){let{spec:n,url:r,themeId:s}=e;const c=u(s,t),m=(0,l.A)(r,{absolute:!0}),d=(0,i.A)(),g="dark"===(0,p.G)().colorMode,h=(0,o.useMemo)((()=>(null!==y&&d&&y.dispose(),y=new a.AppStore(n,m,c.options),{...c,hasLogo:!!n.info?.["x-logo"],store:y})),[d,n,m,c]);return(0,o.useEffect)((()=>{h.store.onDidMount()}),[h,d,g]),h}(r,n);return o.createElement(o.Fragment,null,o.createElement(g,{specProps:r,lightThemeOptions:d,darkThemeOptions:m}),o.createElement("div",{className:(0,s.A)(["redocusaurus",h&&"redocusaurus-has-logo",t])},o.createElement(a.Redoc,{store:c})))};const f=function(e){const{className:t,optionsOverrides:n,spec:i,url:c,themeId:p,isSpecFile:m}=e,{options:d}=u(p,n);return i?o.createElement(h,(0,r.A)({},e,{spec:i})):o.createElement("div",{className:(0,s.A)(["redocusaurus",t])},o.createElement(a.RedocStandalone,{specUrl:c,options:d}))}},36618:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(58168),o=(n(96540),n(15680)),s=n(4353);const a=JSON.parse('{"components":{"schemas":{"Account":{"properties":{"authenticationFailedCounter":{"format":"int64","type":"integer"},"email":{"type":"string"},"external":{"type":"boolean"},"firstName":{"type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"invalidityDate":{"format":"date-time","type":"string"},"lastName":{"type":"string"},"origin":{"type":"string"},"password":{"type":"string"},"passwordUpdateDate":{"format":"date-time","type":"string"},"projects":{"items":{"$ref":"#/components/schemas/Project"},"type":"array","uniqueItems":true},"status":{"enum":["INACTIVE","INACTIVE_PASSWORD","ACTIVE","LOCKED","PENDING"],"type":"string"}},"required":["firstName","lastName","status"],"type":"object"},"AccountNPassword":{"properties":{"account":{"$ref":"#/components/schemas/Account"},"password":{"type":"string"},"project":{"type":"string"}},"type":"object"},"AccountSearchParameters":{"properties":{"email":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"origin":{"type":"string"},"project":{"type":"string"},"status":{"type":"string"}},"type":"object"},"DynamicTenantSettingDto":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"DynamicTenantSettingDtoObject":{"properties":{"defaultValue":{"type":"object"},"description":{"type":"string"},"name":{"type":"string"},"value":{"type":"object"}},"type":"object"},"EntityModelAccount":{"properties":{"content":{"$ref":"#/components/schemas/Account"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelDynamicTenantSettingDtoObject":{"properties":{"content":{"$ref":"#/components/schemas/DynamicTenantSettingDtoObject"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelINotificationWithoutMessage":{"properties":{"content":{"$ref":"#/components/schemas/INotificationWithoutMessage"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelProject":{"properties":{"content":{"$ref":"#/components/schemas/Project"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelProjectConnection":{"properties":{"content":{"$ref":"#/components/schemas/ProjectConnection"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"INotificationWithoutMessage":{"properties":{"date":{"format":"date-time","type":"string"},"id":{"format":"int64","type":"integer"},"level":{"enum":["INFO","WARNING","ERROR","FATAL"],"type":"string"},"mimeType":{"$ref":"#/components/schemas/MimeType"},"sender":{"type":"string"},"status":{"enum":["READ","UNREAD"],"type":"string"},"title":{"type":"string"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"MimeType":{"properties":{"charset":{"type":"string"},"concrete":{"type":"boolean"},"parameters":{"additionalProperties":{"type":"string"},"type":"object"},"subtype":{"type":"string"},"subtypeSuffix":{"type":"string"},"type":{"type":"string"},"wildcardSubtype":{"type":"boolean"},"wildcardType":{"type":"boolean"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"Notification":{"properties":{"date":{"format":"date-time","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"level":{"enum":["INFO","WARNING","ERROR","FATAL"],"type":"string"},"message":{"type":"string"},"mimeType":{"$ref":"#/components/schemas/MimeType"},"projectUserRecipients":{"items":{"type":"string"},"type":"array","uniqueItems":true},"roleRecipients":{"items":{"type":"string"},"type":"array","uniqueItems":true},"sender":{"type":"string"},"status":{"enum":["READ","UNREAD"],"type":"string"},"title":{"type":"string"}},"required":["level","message","projectUserRecipients","roleRecipients","sender","status"],"type":"object"},"NotificationDTO":{"properties":{"level":{"enum":["INFO","WARNING","ERROR","FATAL"],"type":"string"},"message":{"type":"string"},"mimeType":{"$ref":"#/components/schemas/MimeType"},"projectUserRecipients":{"items":{"type":"string"},"type":"array","uniqueItems":true},"roleRecipients":{"items":{"type":"string"},"type":"array","uniqueItems":true},"sender":{"type":"string"},"title":{"type":"string"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelAccount":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelAccount"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelINotificationWithoutMessage":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelINotificationWithoutMessage"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelProject":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelProject"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedModelEntityModelProjectConnection":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelProjectConnection"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PagedResourcesAssemblerAccount":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"PagedResourcesAssemblerINotificationWithoutMessage":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"PagedResourcesAssemblerProject":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"PagedResourcesAssemblerProjectConnection":{"properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}},"type":"object"},"Password":{"properties":{"password":{"type":"string"}},"type":"object"},"PasswordRules":{"properties":{"rules":{"type":"string"}},"type":"object"},"PerformChangePasswordDto":{"properties":{"newPassword":{"type":"string"},"oldPassword":{"type":"string"}},"type":"object"},"PerformResetPasswordDto":{"properties":{"newPassword":{"type":"string"},"token":{"type":"string"}},"type":"object"},"PerformUnlockAccountDto":{"properties":{"token":{"type":"string"}},"type":"object"},"Project":{"properties":{"accessible":{"type":"boolean"},"crs":{"type":"string"},"deleted":{"type":"boolean"},"description":{"type":"string"},"host":{"type":"string"},"icon":{"type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"label":{"type":"string"},"licenceLink":{"type":"string"},"licenseLink":{"type":"string","writeOnly":true},"name":{"pattern":"[a-zA-Z0-9-_]*","type":"string"},"poleToBeManaged":{"type":"boolean"},"public":{"type":"boolean"}},"required":["crs","description","label","name"],"type":"object"},"ProjectConnection":{"properties":{"driverClassName":{"type":"string"},"errorCause":{"type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"microservice":{"type":"string"},"password":{"type":"string"},"project":{"$ref":"#/components/schemas/Project"},"state":{"enum":["ENABLED","DISABLED","CONNECTING","ERROR"],"type":"string"},"url":{"type":"string"},"userName":{"type":"string"}},"required":["driverClassName","microservice","password","project","url","userName"],"type":"object"},"RequestAccountUnlockDto":{"properties":{"originUrl":{"type":"string"},"requestLink":{"type":"string"}},"required":["originUrl","requestLink"],"type":"object"},"RequestResetPasswordDto":{"properties":{"originUrl":{"type":"string"},"requestLink":{"type":"string"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"TenantConnection":{"properties":{"driverClassName":{"type":"string"},"errorCause":{"type":"string"},"password":{"type":"string"},"state":{"enum":["ENABLED","DISABLED","CONNECTING","ERROR"],"type":"string"},"tenant":{"type":"string"},"url":{"type":"string"},"userName":{"type":"string"}},"required":["tenant"],"type":"object"},"Validity":{"properties":{"validity":{"type":"boolean"}},"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"System management and configuration","license":{"name":"GPL-3.0"},"title":"MICROSERVICE ADMIN INSTANCE","version":"1.12.0"},"openapi":"3.0.1","paths":{"/accounts":{"get":{"operationId":"retrieveAccountList","parameters":[{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerAccount"}},{"in":"query","name":"parameters","required":true,"schema":{"$ref":"#/components/schemas/AccountSearchParameters"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelAccount"}}},"description":"OK"}},"tags":["accounts-controller"]},"post":{"operationId":"createAccount","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AccountNPassword"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAccount"}}},"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/account/{account_email}":{"get":{"operationId":"retrieveAccounByEmail","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAccount"}}},"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/origins":{"get":{"operationId":"getOrigins","responses":{"200":{"content":{"*/*":{"schema":{"items":{"type":"string"},"type":"array"}}},"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/password":{"get":{"operationId":"getPasswordRules","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PasswordRules"}}},"description":"OK"}},"tags":["accounts-controller"]},"post":{"operationId":"checkPassword","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Password"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/Validity"}}},"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_email}/accept":{"put":{"operationId":"acceptAccount","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_email}/active":{"put":{"operationId":"activeAccount","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_email}/changePassword":{"put":{"operationId":"performChangePassword","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PerformChangePasswordDto"}}},"required":true},"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_email}/inactive":{"put":{"operationId":"inactiveAccount","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_email}/link/{project}":{"put":{"operationId":"link","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}},{"in":"path","name":"project","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_email}/origin/{origin}":{"put":{"operationId":"updateOrigin","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}},{"in":"path","name":"origin","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_email}/refuse":{"put":{"operationId":"refuseAccount","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_email}/resetPassword":{"post":{"operationId":"requestResetPassword","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestResetPasswordDto"}}},"required":true},"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]},"put":{"operationId":"performResetPassword","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PerformResetPasswordDto"}}},"required":true},"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_email}/unlink/{project}":{"put":{"operationId":"unlink","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}},{"in":"path","name":"project","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_email}/unlockAccount":{"post":{"operationId":"requestUnlockAccount","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestAccountUnlockDto"}}},"required":true},"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]},"put":{"operationId":"performUnlockAccount","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PerformUnlockAccountDto"}}},"required":true},"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_email}/validate":{"get":{"operationId":"validatePassword","parameters":[{"in":"path","name":"account_email","required":true,"schema":{"type":"string"}},{"in":"query","name":"password","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"type":"boolean"}}},"description":"OK"}},"tags":["accounts-controller"]}},"/accounts/{account_id}":{"delete":{"operationId":"removeAccount","parameters":[{"in":"path","name":"account_id","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["accounts-controller"]},"get":{"operationId":"retrieveAccount","parameters":[{"in":"path","name":"account_id","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAccount"}}},"description":"OK"}},"tags":["accounts-controller"]},"put":{"operationId":"updateAccount","parameters":[{"in":"path","name":"account_id","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Account"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAccount"}}},"description":"OK"}},"tags":["accounts-controller"]}},"/connections/{microservice}":{"get":{"operationId":"getTenantConnections","parameters":[{"in":"path","name":"microservice","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/TenantConnection"},"type":"array"}}},"description":"OK"}},"tags":["tenant-connection-controller"]},"post":{"operationId":"addTenantConnection","parameters":[{"in":"path","name":"microservice","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TenantConnection"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/TenantConnection"}}},"description":"OK"}},"tags":["tenant-connection-controller"]},"put":{"operationId":"updateState","parameters":[{"in":"path","name":"microservice","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TenantConnection"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/TenantConnection"}}},"description":"OK"}},"tags":["tenant-connection-controller"]}},"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/notifications":{"get":{"operationId":"retrieveNotifications","parameters":[{"in":"query","name":"state","required":false,"schema":{"enum":["READ","UNREAD"],"type":"string"}},{"in":"query","name":"page","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerINotificationWithoutMessage"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelINotificationWithoutMessage"}}},"description":"OK"}},"tags":["notification-controller"]},"post":{"operationId":"createNotification","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotificationDTO"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/Notification"}}},"description":"OK"}},"tags":["notification-controller"]}},"/notifications/all/read":{"put":{"operationId":"markAllNotificationAsRead","responses":{"200":{"description":"OK"}},"tags":["notification-controller"]}},"/notifications/all/unread":{"put":{"operationId":"markAllNotificationAsUnread","responses":{"200":{"description":"OK"}},"tags":["notification-controller"]}},"/notifications/read/delete":{"delete":{"operationId":"deleteNotification_1","responses":{"200":{"description":"OK"}},"tags":["notification-controller"]}},"/notifications/{notification_id}":{"delete":{"operationId":"deleteNotification","parameters":[{"in":"path","name":"notification_id","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["notification-controller"]},"get":{"operationId":"retrieveNotification","parameters":[{"in":"path","name":"notification_id","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/Notification"}}},"description":"OK"}},"tags":["notification-controller"]}},"/notifications/{notification_id}/read":{"put":{"operationId":"setNotificationRead","parameters":[{"in":"path","name":"notification_id","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/Notification"}}},"description":"OK"}},"tags":["notification-controller"]}},"/notifications/{notification_id}/unread":{"put":{"operationId":"setNotificationUnRead","parameters":[{"in":"path","name":"notification_id","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/Notification"}}},"description":"OK"}},"tags":["notification-controller"]}},"/projects":{"get":{"operationId":"retrieveProjectList","parameters":[{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerProject"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelProject"}}},"description":"OK"}},"tags":["project-controller"]},"post":{"operationId":"createProject","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Project"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelProject"}}},"description":"OK"}},"tags":["project-controller"]}},"/projects/public":{"get":{"operationId":"retrievePublicProjectList","parameters":[{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerProject"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelProject"}}},"description":"OK"}},"tags":["project-controller"]}},"/projects/{projectName}/connections":{"get":{"operationId":"getAllProjectConnections","parameters":[{"in":"path","name":"projectName","required":true,"schema":{"type":"string"}},{"in":"query","name":"pageable","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"in":"query","name":"assembler","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerProjectConnection"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelProjectConnection"}}},"description":"OK"}},"tags":["project-connection-controller"]},"post":{"operationId":"createProjectConnection","parameters":[{"in":"path","name":"projectName","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProjectConnection"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProjectConnection"}}},"description":"OK"}},"tags":["project-connection-controller"]}},"/projects/{projectName}/connections/{connectionId}":{"delete":{"operationId":"deleteProjectConnection","parameters":[{"in":"path","name":"projectName","required":true,"schema":{"type":"string"}},{"in":"path","name":"connectionId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"}},"tags":["project-connection-controller"]},"get":{"operationId":"getProjectConnection","parameters":[{"in":"path","name":"projectName","required":true,"schema":{"type":"string"}},{"in":"path","name":"connectionId","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProjectConnection"}}},"description":"OK"}},"tags":["project-connection-controller"]},"put":{"operationId":"updateProjectConnection","parameters":[{"in":"path","name":"projectName","required":true,"schema":{"type":"string"}},{"in":"path","name":"connectionId","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProjectConnection"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProjectConnection"}}},"description":"OK"}},"tags":["project-connection-controller"]}},"/projects/{project_name}":{"delete":{"operationId":"deleteProject","parameters":[{"in":"path","name":"project_name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["project-controller"]},"get":{"operationId":"retrieveProject","parameters":[{"in":"path","name":"project_name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelProject"}}},"description":"OK"}},"tags":["project-controller"]},"put":{"operationId":"updateProject","parameters":[{"in":"path","name":"project_name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Project"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProject"}}},"description":"OK"}},"tags":["project-controller"]}},"/projects/{project_name}/license/reset":{"put":{"operationId":"resetLicense","parameters":[{"in":"path","name":"project_name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["project-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/settings":{"get":{"operationId":"retrieveAll","parameters":[{"in":"query","name":"names","required":false,"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"},"type":"array"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/settings/{name}":{"delete":{"operationId":"reset","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]},"put":{"operationId":"update","parameters":[{"in":"path","name":"name","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDtoObject"}}},"description":"OK"}},"tags":["dynamic-tenant-setting-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}},"/tenants":{"get":{"operationId":"getAllTenants","responses":{"200":{"content":{"*/*":{"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["tenant-controller"]}},"/tenants/{microserviceName}":{"get":{"operationId":"getAllActiveTenants","parameters":[{"in":"path","name":"microserviceName","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"type":"string"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["tenant-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-admin-instance"}]}'),i={id:"backend-admin-instance-api-swagger",title:"REGARDS admin-instance microservice API",sidebar_label:"Admin instance API",slug:"/development/backend/services/admin-instance/api-swagger",hide_title:!0,hide_table_of_contents:!0},c=void 0,p={unversionedId:"development/backend/regards/admin/backend-admin-instance-api-swagger",id:"version-1.12.0/development/backend/regards/admin/backend-admin-instance-api-swagger",title:"REGARDS admin-instance microservice API",description:"",source:"@site/versioned_docs/version-1.12.0/development/backend/regards/admin/admin-instance-api-swagger.mdx",sourceDirName:"development/backend/regards/admin",slug:"/development/backend/services/admin-instance/api-swagger",permalink:"/docs/1.12.0/development/backend/services/admin-instance/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/backend/regards/admin/admin-instance-api-swagger.mdx",tags:[],version:"1.12.0",frontMatter:{id:"backend-admin-instance-api-swagger",title:"REGARDS admin-instance microservice API",sidebar_label:"Admin instance API",slug:"/development/backend/services/admin-instance/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Admin project API",permalink:"/docs/1.12.0/development/backend/services/admin/api-swagger"},next:{title:"Overview",permalink:"/docs/1.12.0/development/backend/services/authentication/overview/"}},m={},d=[],u={toc:d},l="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(l,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(s.A,{spec:a,mdxType:"RegardsApiDoc"}))}y.isMDXComponent=!0},26903:()=>{},15915:()=>{},67889:()=>{},33880:()=>{},14834:()=>{},20922:()=>{},81912:()=>{}}]);