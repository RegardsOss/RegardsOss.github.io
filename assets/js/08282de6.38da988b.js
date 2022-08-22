(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[57421],{14420:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294),s=n(19992);const i=function(e){let{spec:t}=e;return r.createElement(s.Z,{spec:t})}},68302:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),s=(n(67294),n(3905)),i=n(14420);const o=JSON.parse('{"openapi":"3.0.1","info":{"title":"MICROSERVICE NOTIFIER","description":"Notification management API","license":{"name":"GPL-3.0"},"version":"1.7.1"},"servers":[{"url":"https://regardsoss.github.io/api/v1/rs-notifier","description":"Generated server url"}],"security":[{"REGARDS_OAUTH2":[]}],"paths":{"/recipient":{"get":{"tags":["recipient-controller"],"summary":"List all recipient","description":"List all recipient","operationId":"getRecipients","parameters":[{"name":"page","in":"query","description":"Request page","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"name":"assembler","in":"query","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerPluginConfiguration"}}],"responses":{"200":{"description":"Recipients","content":{"*/*":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}}},"put":{"tags":["recipient-controller"],"summary":"Update a recipient","description":"Update a recipient","operationId":"updateRecipient","requestBody":{"description":"Recipient to update","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"description":"Updated Recipient","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}},"post":{"tags":["recipient-controller"],"summary":"Create a recipient","description":"Create a recipient","operationId":"createRecipient","requestBody":{"description":"Recipient to create","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"description":"Created Recipient","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}}},"/recipient/{id}":{"delete":{"tags":["recipient-controller"],"summary":"Delete a recipient","description":"Delete a recipient","operationId":"deleteRecipient","parameters":[{"name":"businessId","in":"path","description":"Recipient to delete id","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/rule":{"get":{"tags":["rule-controller"],"summary":"List all rules","description":"List all Rules","operationId":"getRules","parameters":[{"name":"page","in":"query","description":"Wanted page","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}},{"name":"assembler","in":"query","required":true,"schema":{"$ref":"#/components/schemas/PagedResourcesAssemblerRuleDTO"}}],"responses":{"200":{"description":"All Rules","content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelRuleDTO"}}}}}},"put":{"tags":["rule-controller"],"summary":"Update a rule","description":"Update a Rule","operationId":"updateRule","requestBody":{"description":"Rule to update","content":{"application/json":{"schema":{"$ref":"#/components/schemas/RuleDTO"}}},"required":true},"responses":{"200":{"description":"Updated Rule","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelRuleDTO"}}}}}},"post":{"tags":["rule-controller"],"summary":"Create a rule","description":"Create a Rule","operationId":"createRule","requestBody":{"description":"Rule to create","content":{"application/json":{"schema":{"$ref":"#/components/schemas/RuleDTO"}}},"required":true},"responses":{"200":{"description":"Created Rule","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelRuleDTO"}}}}}}},"/rule/{id}":{"delete":{"tags":["rule-controller"],"summary":"Delete a rule","description":"Delete a rule","operationId":"deleteRule","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/regards/{tenant}/datasource/test":{"get":{"tags":["jpa-multitenant-controller"],"operationId":"testTenantConnection","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}}}}}},"/regards/{tenant}/datasource/status":{"get":{"tags":["jpa-multitenant-controller"],"operationId":"getDataSourceStatus","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}}}}}},"/maintenance/{tenant}/enable":{"put":{"tags":["maintenance-controller"],"operationId":"setMaintenance","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/maintenance/{tenant}/disable":{"put":{"tags":["maintenance-controller"],"operationId":"unSetMaintenance","parameters":[{"name":"tenant","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/maintenance":{"get":{"tags":["maintenance-controller"],"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}}}}}},"/shutdown/immediate":{"post":{"tags":["manager-controller"],"operationId":"immediateShutdown","responses":{"200":{"description":"default response"}}}},"/microservice/ready/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isReadyEnabled","responses":{"200":{"description":"default response"}}}},"/microservice/restart/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isRestartEnabled","responses":{"200":{"description":"default response"}}}},"/microservice/restart":{"get":{"tags":["module-manager-controller"],"operationId":"restart","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ModuleRestartReport"}}}}}}}},"/microservice/configuration":{"get":{"tags":["module-manager-controller"],"operationId":"exportConfiguration","responses":{"200":{"description":"default response"}}},"post":{"tags":["module-manager-controller"],"operationId":"importConfiguration","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"file":{"type":"string","format":"binary"}}}}}},"responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/ModuleImportReport"}}}}}}}},"/microservice/ready":{"get":{"tags":["module-manager-controller"],"operationId":"isReady","responses":{"200":{"description":"default response","content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}}}}}},"/microservice/configuration/enabled":{"get":{"tags":["module-manager-controller"],"operationId":"isConfigurationEnabled","responses":{"200":{"description":"default response"}}}},"/plugins/cache":{"delete":{"tags":["plugin-controller"],"operationId":"emptyCache","responses":{"200":{"description":"default response"}}}},"/plugins/{pluginId}/config/{configBusinessId}":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfiguration","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}},{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}},"put":{"tags":["plugin-controller"],"operationId":"updatePluginConfiguration","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}},{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}},"delete":{"tags":["plugin-controller"],"operationId":"deletePluginConfiguration","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}},{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response"}}}},"/plugintypes":{"get":{"tags":["plugin-controller"],"operationId":"getPluginTypes","parameters":[{"name":"available","in":"query","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelString"}}}}}}}},"/plugins/{pluginId}":{"get":{"tags":["plugin-controller"],"operationId":"getPluginMetaDataById","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}}}}}},"/plugins/configs":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfigurationsByType","parameters":[{"name":"pluginType","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}}}},"/plugins/{pluginId}/config":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfigurations","parameters":[{"name":"pluginId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}}},"post":{"tags":["plugin-controller"],"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}}},"/plugins/configs/{configBusinessId}":{"get":{"tags":["plugin-controller"],"operationId":"getPluginConfigurationDirectAccess","parameters":[{"name":"configBusinessId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}}}}}},"/plugins":{"get":{"tags":["plugin-controller"],"operationId":"getPlugins","parameters":[{"name":"pluginType","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}}}}}}},"/security/resources":{"get":{"tags":["security-resources-controller"],"operationId":"getAllResources","responses":{"200":{"description":"default response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/ResourceMapping"}}}}}}}}},"components":{"schemas":{"Pageable":{"type":"object","properties":{"sort":{"$ref":"#/components/schemas/Sort"},"unpaged":{"type":"boolean"},"pageNumber":{"type":"integer","format":"int32"},"paged":{"type":"boolean"},"pageSize":{"type":"integer","format":"int32"},"offset":{"type":"integer","format":"int64"}}},"Sort":{"type":"object","properties":{"unsorted":{"type":"boolean"},"sorted":{"type":"boolean"},"empty":{"type":"boolean"}}},"PagedResourcesAssemblerPluginConfiguration":{"type":"object","properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}}},"EntityModelPluginConfiguration":{"type":"object","properties":{"id":{"type":"integer","format":"int64"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"pluginId":{"type":"string"},"label":{"type":"string"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"version":{"type":"string"},"priorityOrder":{"type":"integer","format":"int32"},"active":{"type":"boolean"},"parameters":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/IPluginParam"}},"iconUrl":{"type":"string","format":"url"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"pluginClassName":{"type":"string"},"isActive":{"type":"boolean","writeOnly":true},"identifiable":{"type":"boolean"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"IPluginParam":{"type":"object","properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"value":{"type":"object"},"type":{"type":"string","enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"]}}},"Link":{"type":"object","properties":{"rel":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"},"deprecation":{"type":"string"},"profile":{"type":"string"},"name":{"type":"string"}}},"PluginConfiguration":{"required":["label","priorityOrder"],"type":"object","properties":{"id":{"type":"integer","format":"int64"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"pluginId":{"type":"string"},"label":{"type":"string"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"version":{"type":"string"},"priorityOrder":{"type":"integer","format":"int32"},"active":{"type":"boolean"},"parameters":{"uniqueItems":true,"type":"array","items":{"$ref":"#/components/schemas/IPluginParam"}},"iconUrl":{"type":"string","format":"url"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"pluginClassName":{"type":"string"},"isActive":{"type":"boolean","writeOnly":true},"identifiable":{"type":"boolean"}}},"PluginMetaData":{"type":"object","properties":{"pluginClassName":{"type":"string"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"author":{"type":"string"},"pluginId":{"type":"string"},"version":{"type":"string"},"description":{"type":"string"},"markdown":{"type":"string"},"url":{"type":"string"},"contact":{"type":"string"},"owner":{"type":"string"},"license":{"type":"string"},"parameters":{"type":"array","items":{"$ref":"#/components/schemas/PluginParamDescriptor"}},"licence":{"type":"string","writeOnly":true}}},"PluginParamDescriptor":{"type":"object","properties":{"name":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"description":{"type":"string"},"markdown":{"type":"string"},"parameterizedSubTypes":{"type":"array","items":{"type":"string","enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"]}},"type":{"type":"string","enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"]},"pluginType":{"type":"string"},"defaultValue":{"type":"string"},"optional":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"unconfigurable":{"type":"boolean"},"sensible":{"type":"boolean"}}},"PagedResourcesAssemblerRuleDTO":{"type":"object","properties":{"forceFirstAndLastRels":{"type":"boolean","writeOnly":true}}},"EntityModelRuleDTO":{"type":"object","properties":{"recipientsBusinessIds":{"type":"array","items":{"type":"string"}},"rulePluginConfiguration":{"$ref":"#/components/schemas/PluginConfiguration"},"id":{"type":"string"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"PageMetadata":{"type":"object","properties":{"size":{"type":"integer","format":"int64"},"totalElements":{"type":"integer","format":"int64"},"totalPages":{"type":"integer","format":"int64"},"number":{"type":"integer","format":"int64"}}},"PagedModelEntityModelRuleDTO":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}},"content":{"type":"array","items":{"$ref":"#/components/schemas/EntityModelRuleDTO"}},"page":{"$ref":"#/components/schemas/PageMetadata"}}},"RuleDTO":{"type":"object","properties":{"recipientsBusinessIds":{"type":"array","items":{"type":"string"}},"rulePluginConfiguration":{"$ref":"#/components/schemas/PluginConfiguration"},"id":{"type":"string"}}},"GenericResponseBody":{"type":"object","properties":{"message":{"type":"string"},"properties":{"type":"object","additionalProperties":{"type":"object"}}}},"EntityModelMapStringMaintenanceInfo":{"type":"object","properties":{"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"ModuleInformation":{"required":["author","id","name","version"],"type":"object","properties":{"id":{"type":"string"},"name":{"type":"string"},"description":{"type":"string"},"version":{"type":"string"},"author":{"type":"string"},"legalOwner":{"type":"string"},"documentation":{"type":"string"}}},"ModuleRestartReport":{"type":"object","properties":{"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"messages":{"type":"array","items":{"type":"string"}}}},"ModuleImportReport":{"type":"object","properties":{"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"importErrors":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"onlyErrors":{"type":"boolean"}}},"ModuleReadinessReportObject":{"type":"object","properties":{"ready":{"type":"boolean"},"reasons":{"type":"array","items":{"type":"string"}},"specifications":{"type":"object"}}},"EntityModelString":{"type":"object","properties":{"content":{"type":"string"},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"EntityModelPluginMetaData":{"type":"object","properties":{"pluginClassName":{"type":"string"},"interfaceNames":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"author":{"type":"string"},"pluginId":{"type":"string"},"version":{"type":"string"},"description":{"type":"string"},"markdown":{"type":"string"},"url":{"type":"string"},"contact":{"type":"string"},"owner":{"type":"string"},"license":{"type":"string"},"parameters":{"type":"array","items":{"$ref":"#/components/schemas/PluginParamDescriptor"}},"licence":{"type":"string","writeOnly":true},"links":{"type":"array","items":{"$ref":"#/components/schemas/Link"}}}},"ResourceAccess":{"type":"object"},"ResourceMapping":{"type":"object","properties":{"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"fullPath":{"type":"string"},"controllerSimpleName":{"type":"string"},"method":{"type":"string","enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"]},"autorizedRoles":{"type":"array","items":{"$ref":"#/components/schemas/RoleAuthority"}},"resourceMappingId":{"type":"string"}}},"RoleAuthority":{"type":"object","properties":{"authorizedIpAdresses":{"type":"array","items":{"type":"string"}},"roleName":{"type":"string"},"authority":{"type":"string"}}}},"securitySchemes":{"REGARDS_OAUTH2":{"type":"oauth2","flows":{"password":{"tokenUrl":"http://vm-perf.cloud-espace.si.c-s.fr:80/api/v1/rs-authentication/oauth/token","scopes":{}}}}}}}'),a={id:"backend-notifier-api-swagger",title:"REGARDS notifier microservice API",sidebar_label:"API",slug:"/development/backend/services/notifier/api-swagger",hide_title:!0,hide_table_of_contents:!0},p=void 0,c={unversionedId:"development/backend/regards/notifier/backend-notifier-api-swagger",id:"version-1.7.1/development/backend/regards/notifier/backend-notifier-api-swagger",title:"REGARDS notifier microservice API",description:"",source:"@site/versioned_docs/version-1.7.1/development/backend/regards/notifier/notifier-api-swagger.mdx",sourceDirName:"development/backend/regards/notifier",slug:"/development/backend/services/notifier/api-swagger",permalink:"/docs/1.7.1/development/backend/services/notifier/api-swagger",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/regards/notifier/notifier-api-swagger.mdx",tags:[],version:"1.7.1",frontMatter:{id:"backend-notifier-api-swagger",title:"REGARDS notifier microservice API",sidebar_label:"API",slug:"/development/backend/services/notifier/api-swagger",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.7.1/development/backend/services/notifier/overview/"},next:{title:"Notifier",permalink:"/docs/1.7.1/development/backend/services/notifier/api/"}},l={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,{spec:o,mdxType:"RegardsApiDoc"}))}d.isMDXComponent=!0},16212:()=>{},15101:()=>{},78836:()=>{},42116:()=>{},34904:()=>{},6918:()=>{},84819:()=>{},23197:()=>{},60996:()=>{}}]);