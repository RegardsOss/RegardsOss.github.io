(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[66002],{14420:function(e,t,n){"use strict";var r=n(67294),s=n(19992);t.Z=function(e){var t=e.spec;return r.createElement(s.Z,{spec:t})}},62718:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var r=n(87462),s=n(63366),o=(n(67294),n(3905)),a=n(14420),i=JSON.parse('{"openapi":"3.0.1","info":{"title":"MICROSERVICE ADMIN INSTANCE","description":"System management and configuration","license":{"name":"GPL-3.0"},"version":"1.8.0"},"servers":[{"url":"https://regardsoss.github.io/api/v1/rs-admin-instance","description":"Generated server url"}],"security":[{"REGARDS_OAUTH2":[]}],"paths":{"/accounts/{account_email}/unlink/{project}":{"put":{"tags":["accounts-controller"],"operationId":"unlink","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}},{"name":"project","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/accounts/{account_email}/resetPassword":{"put":{"tags":["accounts-controller"],"operationId":"performResetPassword","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PerformResetPasswordDto"}}},"required":true},"responses":{"200":{"description":"default response"}}},"post":{"tags":["accounts-controller"],"operationId":"requestResetPassword","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestResetPasswordDto"}}},"required":true},"responses":{"200":{"description":"default response"}}}},"/accounts/{account_email}/changePassword":{"put":{"tags":["accounts-controller"],"operationId":"performChangePassword","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PerformChangePasswordDto"}}},"required":true},"responses":{"200":{"description":"default response"}}}},"/accounts/{account_email}/validate":{"get":{"tags":["accounts-controller"],"operationId":"validatePassword","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}},{"name":"password","in":"query","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"boolean"}}}}}}},"/accounts/password":{"get":{"tags":["accounts-controller"],"operationId":"getPasswordRules","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PasswordRules"}}}}}},"post":{"tags":["accounts-controller"],"operationId":"checkPassword","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Password"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/Validity"}}}}}}},"/accounts/{account_email}/link/{project}":{"put":{"tags":["accounts-controller"],"operationId":"link","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}},{"name":"project","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/accounts":{"get":{"tags":["accounts-controller"],"operationId":"retrieveAccountList","parameters":[{"name":"pageable","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"name":"assembler","in":"query","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerAccount"}},{"name":"parameters","in":"query","required":true,"schema":{"$ref":"#/components/schemas/AccountSearchParameters"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelAccount"}}}}}},"post":{"tags":["accounts-controller"],"operationId":"createAccount","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/AccountNPassword"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAccount"}}}}}}},"/accounts/{account_id}":{"get":{"tags":["accounts-controller"],"operationId":"retrieveAccount","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAccount"}}}}}},"put":{"tags":["accounts-controller"],"operationId":"updateAccount","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Account"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAccount"}}}}}},"delete":{"tags":["accounts-controller"],"operationId":"removeAccount","parameters":[{"name":"account_id","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response"}}}},"/accounts/account/{account_email}":{"get":{"tags":["accounts-controller"],"operationId":"retrieveAccounByEmail","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelAccount"}}}}}}},"/accounts/{account_email}/unlockAccount":{"put":{"tags":["accounts-controller"],"operationId":"performUnlockAccount","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PerformUnlockAccountDto"}}},"required":true},"responses":{"200":{"description":"default response"}}},"post":{"tags":["accounts-controller"],"operationId":"requestUnlockAccount","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RequestAccountUnlockDto"}}},"required":true},"responses":{"200":{"description":"default response"}}}},"/accounts/{account_email}/inactive":{"put":{"tags":["accounts-controller"],"operationId":"inactiveAccount","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/accounts/{account_email}/active":{"put":{"tags":["accounts-controller"],"operationId":"activeAccount","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/accounts/{account_email}/accept":{"put":{"tags":["accounts-controller"],"operationId":"acceptAccount","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/accounts/{account_email}/refuse":{"put":{"tags":["accounts-controller"],"operationId":"refuseAccount","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/accounts/origins":{"get":{"tags":["accounts-controller"],"operationId":"getOrigins","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"array","items":{"type":"string"}}}}}}}},"/accounts/{account_email}/origin/{origin}":{"put":{"tags":["accounts-controller"],"operationId":"updateOrigin","parameters":[{"name":"account_email","in":"path","required":true,"schema":{"type":"string"}},{"name":"origin","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/projects/public":{"get":{"tags":["project-controller"],"operationId":"retrievePublicProjectList","parameters":[{"name":"pageable","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"name":"assembler","in":"query","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerProject"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelProject"}}}}}}},"/projects":{"get":{"tags":["project-controller"],"operationId":"retrieveProjectList","parameters":[{"name":"pageable","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"name":"assembler","in":"query","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerProject"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelProject"}}}}}},"post":{"tags":["project-controller"],"operationId":"createProject","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Project"}}},"required":true},"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelProject"}}}}}}},"/projects/{project_name}":{"get":{"tags":["project-controller"],"operationId":"retrieveProject","parameters":[{"name":"project_name","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelProject"}}}}}},"put":{"tags":["project-controller"],"operationId":"updateProject","parameters":[{"name":"project_name","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Project"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProject"}}}}}},"delete":{"tags":["project-controller"],"operationId":"deleteProject","parameters":[{"name":"project_name","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/projects/{project_name}/license/reset":{"put":{"tags":["project-controller"],"operationId":"resetLicense","parameters":[{"name":"project_name","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/projects/{projectName}/connections":{"get":{"tags":["project-connection-controller"],"operationId":"getAllProjectConnections","parameters":[{"name":"projectName","in":"path","required":true,"schema":{"type":"string"}},{"name":"pageable","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"name":"assembler","in":"query","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerProjectConnection"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelProjectConnection"}}}}}},"post":{"tags":["project-connection-controller"],"operationId":"createProjectConnection","parameters":[{"name":"projectName","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProjectConnection"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProjectConnection"}}}}}}},"/projects/{projectName}/connections/{connectionId}":{"get":{"tags":["project-connection-controller"],"operationId":"getProjectConnection","parameters":[{"name":"projectName","in":"path","required":true,"schema":{"type":"string"}},{"name":"connectionId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProjectConnection"}}}}}},"put":{"tags":["project-connection-controller"],"operationId":"updateProjectConnection","parameters":[{"name":"projectName","in":"path","required":true,"schema":{"type":"string"}},{"name":"connectionId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/ProjectConnection"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelProjectConnection"}}}}}},"delete":{"tags":["project-connection-controller"],"operationId":"deleteProjectConnection","parameters":[{"name":"projectName","in":"path","required":true,"schema":{"type":"string"}},{"name":"connectionId","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response"}}}},"/connections/{microservice}":{"get":{"tags":["tenant-connection-controller"],"operationId":"getTenantConnections","parameters":[{"name":"microservice","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/TenantConnection"}}}}}}},"put":{"tags":["tenant-connection-controller"],"operationId":"updateState","parameters":[{"name":"microservice","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TenantConnection"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/TenantConnection"}}}}}},"post":{"tags":["tenant-connection-controller"],"operationId":"addTenantConnection","parameters":[{"name":"microservice","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TenantConnection"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/TenantConnection"}}}}}}},"/tenants/{microserviceName}":{"get":{"tags":["tenant-controller"],"operationId":"getAllActiveTenants","parameters":[{"name":"microserviceName","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"type":"string"}}}}}}}},"/tenants":{"get":{"tags":["tenant-controller"],"operationId":"getAllTenants","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"type":"string"}}}}}}}},"/notifications/{notification_id}":{"get":{"tags":["notification-controller"],"operationId":"retrieveNotification","parameters":[{"name":"notification_id","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/Notification"}}}}}},"delete":{"tags":["notification-controller"],"operationId":"deleteNotification","parameters":[{"name":"notification_id","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response"}}}},"/notifications/{notification_id}/read":{"put":{"tags":["notification-controller"],"operationId":"setNotificationRead","parameters":[{"name":"notification_id","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/Notification"}}}}}}},"/notifications/all/read":{"put":{"tags":["notification-controller"],"operationId":"markAllNotificationAsRead","responses":{"200":{"description":"default response"}}}},"/notifications/{notification_id}/unread":{"put":{"tags":["notification-controller"],"operationId":"setNotificationUnRead","parameters":[{"name":"notification_id","in":"path","required":true,"schema":{"type":"integer","format":"int64"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/Notification"}}}}}}},"/notifications/all/unread":{"put":{"tags":["notification-controller"],"operationId":"markAllNotificationAsUnread","responses":{"200":{"description":"default response"}}}},"/notifications":{"get":{"tags":["notification-controller"],"operationId":"retrieveNotifications","parameters":[{"name":"state","in":"query","required":false,"schema":{"type":"string","enum":["READ","UNREAD"]}},{"name":"page","in":"query","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"name":"assembler","in":"query","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerINotificationWithoutMessage"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelINotificationWithoutMessage"}}}}}},"post":{"tags":["notification-controller"],"operationId":"createNotification","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotificationDTO"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/Notification"}}}}}}},"/notifications/read/delete":{"delete":{"tags":["notification-controller"],"operationId":"deleteNotification_1","responses":{"200":{"description":"default response"}}}},"/maintenance/{tenant}/enable":{"put":{"tags":["maintenance-controller"],"operationId":"setMaintenance","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/maintenance/{tenant}/disable":{"put":{"tags":["maintenance-controller"],"operationId":"unSetMaintenance","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/maintenance":{"get":{"tags":["maintenance-controller"],"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}}}}}},"/shutdown/immediate":{"post":{"tags":["manager-controller"],"operationId":"immediateShutdown","responses":{"200":{"description":"default response"}}}},"/microservice/ready":{"get":{"tags":["module-manager-controller"],"operationId":"isReady","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}}}}}},"/microservice/ready/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isReadyEnabled","responses":{"200":{"description":"default response"}}}},"/microservice/restart/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isRestartEnabled","responses":{"200":{"description":"default response"}}}},"/microservice/configuration/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isConfigurationEnabled","responses":{"200":{"description":"default response"}}}},"/microservice/configuration":{"get":{"tags":["module-manager-controller"],"operationId":"exportConfiguration","responses":{"200":{"description":"default response"}}},"post":{"tags":["module-manager-controller"],"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"file":{"type":"string","format":"binary"}}}}}},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ModuleImportReport"}}}}}}}},"/microservice/restart":{"get":{"tags":["module-manager-controller"],"operationId":"restart","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ModuleRestartReport"}}}}}}}},"/settings":{"get":{"tags":["dynamic-tenant-setting-controller"],"operationId":"retrieveAll","parameters":[{"name":"names","in":"query","required":false,"schema":{"uniqueItems":true,"type":"array","items":{"type":"string"}}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}}}}}}},"/settings/{name}":{"put":{"tags":["dynamic-tenant-setting-controller"],"operationId":"update","parameters":[{"name":"name","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/DynamicTenantSettingDto"}}},"required":true},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}}}}},"delete":{"tags":["dynamic-tenant-setting-controller"],"operationId":"reset","parameters":[{"name":"name","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelDynamicTenantSettingDto"}}}}}}},"/security/resources":{"get":{"tags":["security-resources-controller"],"operationId":"getAllResources","responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ResourceMapping"}}}}}}}}},"components":{"schemas":{"RequestResetPasswordDto":{"type":"object","properties":{"originUrl":{"type":"string"},"requestLink":{"type":"string"}}},"PerformChangePasswordDto":{"type":"object","properties":{"oldPassword":{"type":"string"},"newPassword":{"type":"string"}}},"PerformResetPasswordDto":{"type":"object","properties":{"token":{"type":"string"},"newPassword":{"type":"string"}}},"Password":{"type":"object","properties":{"password":{"type":"string"}}},"Validity":{"type":"object","properties":{"validity":{"type":"boolean"}}},"Pageable":{"type":"object","properties":{"sort":{"$ref":"#/components/schemas/Sort"},"paged":{"type":"boolean"},"unpaged":{"type":"boolean"},"pageNumber":{"type":"integer","format":"int32"},"pageSize":{"type":"integer","format":"int32"},"offset":{"type":"integer","format":"int64"}}},"Sort":{"type":"object","properties":{"sorted":{"type":"boolean"},"unsorted":{"type":"boolean"},"empty":{"type":"boolean"}}},"PagedResourcesAssemblerAccount":{"type":"object","properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}}},"AccountSearchParameters":{"type":"object","properties":{"email":{"type":"string"},"lastName":{"type":"string"},"firstName":{"type":"string"},"status":{"type":"string"},"project":{"type":"string"},"origin":{"type":"string"}}},"Account":{"required":["firstName","lastName","status"],"type":"object","properties":{"id":{"type":"integer","format":"int64"},"email":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"invalidityDate":{"type":"string","format":"date-time"},"origin":{"type":"string"},"authenticationFailedCounter":{"type":"integer","format":"int64"},"password":{"type":"string"},"passwordUpdateDate":{"type":"string","format":"date-time"},"status":{"type":"string","enum":["INACTIVE","INACTIVE_PASSWORD","ACTIVE","LOCKED","PENDING"]},"projects":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/Project"}},"external":{"type":"boolean"},"identifiable":{"type":"boolean"}}},"EntityModelAccount":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"email":{"type":"string"},"firstName":{"type":"string"},"lastName":{"type":"string"},"invalidityDate":{"type":"string","format":"date-time"},"origin":{"type":"string"},"authenticationFailedCounter":{"type":"integer","format":"int64"},"password":{"type":"string"},"passwordUpdateDate":{"type":"string","format":"date-time"},"status":{"type":"string","enum":["INACTIVE","INACTIVE_PASSWORD","ACTIVE","LOCKED","PENDING"]},"projects":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/Project"}},"external":{"type":"boolean"},"identifiable":{"type":"boolean"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"Link":{"type":"object","properties":{"rel":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"},"deprecation":{"type":"string"},"profile":{"type":"string"},"name":{"type":"string"}}},"PageMetadata":{"type":"object","properties":{"size":{"type":"integer","format":"int64"},"totalElements":{"type":"integer","format":"int64"},"totalPages":{"type":"integer","format":"int64"},"number":{"type":"integer","format":"int64"}}},"PagedModelEntityModelAccount":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}},"content":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelAccount"}},"page":{"$ref":"#/components/schemas/PageMetadata"}}},"Project":{"required":["crs","description","label","name"],"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"pattern":"[a-zA-Z0-9-_]*","type":"string"},"label":{"type":"string"},"description":{"type":"string"},"icon":{"type":"string"},"licenceLink":{"type":"string"},"host":{"type":"string"},"crs":{"type":"string"},"public":{"type":"boolean"},"licenseLink":{"type":"string","writeOnly":true},"poleToBeManaged":{"type":"boolean"},"accessible":{"type":"boolean"},"deleted":{"type":"boolean"},"identifiable":{"type":"boolean"}}},"AccountNPassword":{"type":"object","properties":{"account":{"$ref":"#/components/schemas/Account"},"password":{"type":"string"},"project":{"type":"string"}}},"RequestAccountUnlockDto":{"required":["originUrl","requestLink"],"type":"object","properties":{"originUrl":{"type":"string"},"requestLink":{"type":"string"}}},"PerformUnlockAccountDto":{"type":"object","properties":{"token":{"type":"string"}}},"PasswordRules":{"type":"object","properties":{"rules":{"type":"string"}}},"PagedResourcesAssemblerProject":{"type":"object","properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}}},"EntityModelProject":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"name":{"pattern":"[a-zA-Z0-9-_]*","type":"string"},"label":{"type":"string"},"description":{"type":"string"},"icon":{"type":"string"},"licenceLink":{"type":"string"},"host":{"type":"string"},"crs":{"type":"string"},"public":{"type":"boolean"},"licenseLink":{"type":"string","writeOnly":true},"poleToBeManaged":{"type":"boolean"},"accessible":{"type":"boolean"},"deleted":{"type":"boolean"},"identifiable":{"type":"boolean"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"PagedModelEntityModelProject":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}},"content":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelProject"}},"page":{"$ref":"#/components/schemas/PageMetadata"}}},"PagedResourcesAssemblerProjectConnection":{"type":"object","properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}}},"EntityModelProjectConnection":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"project":{"$ref":"#/components/schemas/Project"},"microservice":{"type":"string"},"userName":{"type":"string"},"password":{"type":"string"},"driverClassName":{"type":"string"},"url":{"type":"string"},"state":{"type":"string","enum":["ENABLED","DISABLED","CONNECTING","ERROR"]},"errorCause":{"type":"string"},"identifiable":{"type":"boolean"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"PagedModelEntityModelProjectConnection":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}},"content":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelProjectConnection"}},"page":{"$ref":"#/components/schemas/PageMetadata"}}},"ProjectConnection":{"required":["driverClassName","microservice","password","project","url","userName"],"type":"object","properties":{"id":{"type":"integer","format":"int64"},"project":{"$ref":"#/components/schemas/Project"},"microservice":{"type":"string"},"userName":{"type":"string"},"password":{"type":"string"},"driverClassName":{"type":"string"},"url":{"type":"string"},"state":{"type":"string","enum":["ENABLED","DISABLED","CONNECTING","ERROR"]},"errorCause":{"type":"string"},"identifiable":{"type":"boolean"}}},"TenantConnection":{"required":["tenant"],"type":"object","properties":{"tenant":{"type":"string"},"url":{"type":"string"},"userName":{"type":"string"},"password":{"type":"string"},"driverClassName":{"type":"string"},"state":{"type":"string","enum":["ENABLED","DISABLED","CONNECTING","ERROR"]},"errorCause":{"type":"string"}}},"MimeType":{"type":"object","properties":{"type":{"type":"string"},"subtype":{"type":"string"},"parameters":{"type":"object","additionalProperties":{"type":"string"}},"concrete":{"type":"boolean"},"charset":{"type":"object","properties":{"registered":{"type":"boolean"}}},"wildcardType":{"type":"boolean"},"wildcardSubtype":{"type":"boolean"}}},"Notification":{"required":["level","message","projectUserRecipients","roleRecipients","sender","status"],"type":"object","properties":{"date":{"type":"string","format":"date-time"},"id":{"type":"integer","format":"int64"},"message":{"type":"string"},"roleRecipients":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"projectUserRecipients":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"sender":{"type":"string"},"status":{"type":"string","enum":["READ","UNREAD"]},"level":{"type":"string","enum":["INFO","WARNING","ERROR","FATAL"]},"title":{"type":"string"},"mimeType":{"$ref":"#/components/schemas/MimeType"},"identifiable":{"type":"boolean"}}},"NotificationDTO":{"type":"object","properties":{"message":{"type":"string"},"projectUserRecipients":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"roleRecipients":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"sender":{"type":"string"},"title":{"type":"string"},"level":{"type":"string","enum":["INFO","WARNING","ERROR","FATAL"]},"mimeType":{"$ref":"#/components/schemas/MimeType"}}},"PagedResourcesAssemblerINotificationWithoutMessage":{"type":"object","properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}}},"EntityModelINotificationWithoutMessage":{"type":"object","properties":{"date":{"type":"string","format":"date-time"},"level":{"type":"string","enum":["INFO","WARNING","ERROR","FATAL"]},"title":{"type":"string"},"mimeType":{"$ref":"#/components/schemas/MimeType"},"sender":{"type":"string"},"status":{"type":"string","enum":["READ","UNREAD"]},"id":{"type":"integer","format":"int64"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"PagedModelEntityModelINotificationWithoutMessage":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}},"content":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelINotificationWithoutMessage"}},"page":{"$ref":"#/components/schemas/PageMetadata"}}},"EntityModelMapStringMaintenanceInfo":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"ModuleReadinessReportObject":{"type":"object","properties":{"ready":{"type":"boolean"},"reasons":{"type":"array","items":{"type":"string"}},"specifications":{"type":"object"}}},"ModuleImportReport":{"type":"object","properties":{"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"importErrors":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"onlyErrors":{"type":"boolean"}}},"ModuleInformation":{"required":["author","id","name","version"],"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string"},"description":{"type":"string"},"version":{"type":"string"},"author":{"type":"string"},"legalOwner":{"type":"string"},"documentation":{"type":"string"}}},"ModuleRestartReport":{"type":"object","properties":{"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"messages":{"type":"array","items":{"type":"string"}}}},"DynamicTenantSettingDto":{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"value":{"type":"object"},"defaultValue":{"type":"object"}}},"EntityModelDynamicTenantSettingDto":{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"value":{"type":"object"},"defaultValue":{"type":"object"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"ResourceAccess":{"type":"object"},"ResourceMapping":{"type":"object","properties":{"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"fullPath":{"type":"string"},"controllerSimpleName":{"type":"string"},"method":{"type":"string","enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"]},"resourceMappingId":{"type":"string"},"autorizedRoles":{"type":"array","items":{"$ref":"#/components/schemas/RoleAuthority"}}}},"RoleAuthority":{"type":"object","properties":{"authorizedIpAdresses":{"type":"array","items":{"type":"string"}},"roleName":{"type":"string"},"authority":{"type":"string"}}}},"securitySchemes":{"REGARDS_OAUTH2":{"type":"oauth2","flows":{"password":{"tokenUrl":"http://vm-perf.cloud-espace.si.c-s.fr:80/api/v1/rs-authentication/oauth/token","scopes":{}}}}}}}'),c=["components"],p={id:"backend-admin-instance-api-swagger",title:"REGARDS admin-instance microservice API",sidebar_label:"Admin instance API",slug:"/development/backend/services/admin-instance/api-swagger",hide_title:!0,hide_table_of_contents:!0},m=void 0,d={unversionedId:"development/backend/regards/admin/backend-admin-instance-api-swagger",id:"development/backend/regards/admin/backend-admin-instance-api-swagger",title:"REGARDS admin-instance microservice API",description:"",source:"@site/docs/development/backend/regards/admin/admin-instance-api-swagger.mdx",sourceDirName:"development/backend/regards/admin",slug:"/development/backend/services/admin-instance/api-swagger",permalink:"/docs/development/backend/services/admin-instance/api-swagger",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/admin/admin-instance-api-swagger.mdx",tags:[],version:"current",frontMatter:{id:"backend-admin-instance-api-swagger",title:"REGARDS admin-instance microservice API",sidebar_label:"Admin instance API",slug:"/development/backend/services/admin-instance/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Admin project API",permalink:"/docs/development/backend/services/admin/api-swagger"},next:{title:"Overview",permalink:"/docs/development/backend/services/access/overview/"}},u=[],l={toc:u};function y(e){var t=e.components,n=(0,s.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{spec:i,mdxType:"RegardsApiDoc"}))}y.isMDXComponent=!0},15101:function(){},42116:function(){},23197:function(){}}]);