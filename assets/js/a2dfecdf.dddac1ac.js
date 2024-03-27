/*! For license information please see a2dfecdf.dddac1ac.js.LICENSE.txt */
(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[67626],{4353:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var r=n(58168),i=n(96540),s=n(20053);n(38193).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var o=n(28794),a=n(92303),p=n(66588),c=n(95293),l=n(55364),m=n.n(l);function u(e,t){void 0===e&&(e="theme-redoc");const n=(0,a.A)(),r="dark"===(0,c.G)().colorMode,s=(0,p.kh)("docusaurus-theme-redoc",{failfast:!0}),o=(0,p.P_)("docusaurus-theme-redoc",e)||Object.values(s)[0];return(0,i.useMemo)((()=>{const{lightTheme:e,darkTheme:i,options:s}=o,a={scrollYOffset:n||"string"!=typeof s.scrollYOffset?s.scrollYOffset:0},p=m()({...s,...a,theme:e},t),c=m()({...s,...a,theme:i},t);return{options:n&&r?c:p,darkThemeOptions:c,lightThemeOptions:p}}),[n,r,o,t])}var d=n(86025);let g=null;function y(e){return i.createElement("div",{className:"redocusaurus-styles"})}const f=function(e){const{className:t,optionsOverrides:n,...r}=e,{store:p,darkThemeOptions:l,lightThemeOptions:m,hasLogo:f}=function(e,t){let{spec:n,url:r,themeId:s}=e;const p=u(s,t),l=(0,d.A)(r,{absolute:!0}),m=(0,a.A)(),y="dark"===(0,c.G)().colorMode,f=(0,i.useMemo)((()=>(null!==g&&m&&g.dispose(),g=new o.AppStore(n,l,p.options),{...p,hasLogo:!!n.info?.["x-logo"],store:g})),[m,n,l,p]);return(0,i.useEffect)((()=>{f.store.onDidMount()}),[f,m,y]),f}(r,n);return i.createElement(i.Fragment,null,i.createElement(y,{specProps:r,lightThemeOptions:m,darkThemeOptions:l}),i.createElement("div",{className:(0,s.A)(["redocusaurus",f&&"redocusaurus-has-logo",t])},i.createElement(o.Redoc,{store:p})))};const h=function(e){const{className:t,optionsOverrides:n,spec:a,url:p,themeId:c,isSpecFile:l}=e,{options:m}=u(c,n);return a?i.createElement(f,(0,r.A)({},e,{spec:a})):i.createElement("div",{className:(0,s.A)(["redocusaurus",t])},i.createElement(o.RedocStandalone,{specUrl:p,options:m}))}},21160:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var r=n(58168),i=(n(96540),n(15680)),s=n(4353);const o=JSON.parse('{"components":{"schemas":{"EntityModelMapStringMaintenanceInfo":{"properties":{"content":{"additionalProperties":{"$ref":"#/components/schemas/MaintenanceInfo"},"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginConfiguration":{"properties":{"content":{"$ref":"#/components/schemas/PluginConfiguration"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelPluginMetaData":{"properties":{"content":{"$ref":"#/components/schemas/PluginMetaData"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelRuleDTO":{"properties":{"content":{"$ref":"#/components/schemas/RuleDTO"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelString":{"properties":{"content":{"type":"string"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"EntityModelVoid":{"properties":{"content":{"type":"object"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"}},"type":"object"},"GenericResponseBody":{"properties":{"message":{"type":"string"},"properties":{"additionalProperties":{"type":"object"},"type":"object"}},"type":"object"},"IPluginParam":{"properties":{"dynamic":{"type":"boolean"},"name":{"type":"string"},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"value":{"type":"object"}},"type":"object"},"Link":{"properties":{"deprecation":{"type":"string"},"href":{"type":"string"},"hreflang":{"type":"string"},"media":{"type":"string"},"name":{"type":"string"},"profile":{"type":"string"},"rel":{"type":"string"},"title":{"type":"string"},"type":{"type":"string"}},"type":"object"},"MaintenanceInfo":{"properties":{"active":{"type":"boolean"},"lastUpdate":{"format":"date-time","type":"string"}},"type":"object"},"ModuleImportReport":{"properties":{"importErrors":{"items":{"type":"string"},"type":"array","uniqueItems":true},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"},"onlyErrors":{"type":"boolean"}},"type":"object"},"ModuleInformation":{"properties":{"author":{"type":"string"},"description":{"type":"string"},"documentation":{"type":"string"},"id":{"type":"string"},"legalOwner":{"type":"string"},"name":{"type":"string"},"version":{"type":"string"}},"required":["author","id","name","version"],"type":"object"},"ModuleReadinessReportObject":{"properties":{"ready":{"type":"boolean"},"reasons":{"items":{"type":"string"},"type":"array"},"specifications":{"type":"object"}},"type":"object"},"ModuleRestartReport":{"properties":{"messages":{"items":{"type":"string"},"type":"array"},"moduleInformation":{"$ref":"#/components/schemas/ModuleInformation"}},"type":"object"},"PageMetadata":{"properties":{"number":{"format":"int64","type":"integer"},"size":{"format":"int64","type":"integer"},"totalElements":{"format":"int64","type":"integer"},"totalPages":{"format":"int64","type":"integer"}},"type":"object"},"Pageable":{"properties":{"page":{"format":"int32","minimum":0,"type":"integer"},"size":{"format":"int32","minimum":1,"type":"integer"},"sort":{"items":{"type":"string"},"type":"array"}},"type":"object"},"PagedModelEntityModelRuleDTO":{"properties":{"content":{"items":{"$ref":"#/components/schemas/EntityModelRuleDTO"},"type":"array"},"links":{"items":{"$ref":"#/components/schemas/Link"},"type":"array"},"page":{"$ref":"#/components/schemas/PageMetadata"}},"type":"object"},"PluginConfiguration":{"description":"Recipient to create","properties":{"active":{"type":"boolean"},"businessId":{"pattern":"[0-9a-zA-Z_-]*","type":"string"},"iconUrl":{"format":"url","type":"string"},"id":{"format":"int64","type":"integer"},"identifiable":{"type":"boolean"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"isActive":{"type":"boolean","writeOnly":true},"label":{"type":"string"},"metaData":{"$ref":"#/components/schemas/PluginMetaData"},"metaDataAndPluginId":{"$ref":"#/components/schemas/PluginMetaData"},"parameters":{"items":{"$ref":"#/components/schemas/IPluginParam"},"type":"array","uniqueItems":true},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"priorityOrder":{"format":"int32","type":"integer"},"version":{"type":"string"}},"required":["label","priorityOrder"],"type":"object"},"PluginMetaData":{"properties":{"author":{"type":"string"},"contact":{"type":"string"},"description":{"type":"string"},"interfaceNames":{"items":{"type":"string"},"type":"array","uniqueItems":true},"licence":{"type":"string","writeOnly":true},"license":{"type":"string"},"markdown":{"type":"string"},"owner":{"type":"string"},"parameters":{"items":{"$ref":"#/components/schemas/PluginParamDescriptor"},"type":"array"},"pluginClassName":{"type":"string"},"pluginId":{"type":"string"},"url":{"type":"string"},"userMarkdown":{"type":"string"},"version":{"type":"string"}},"type":"object"},"PluginParamDescriptor":{"properties":{"defaultValue":{"type":"string"},"description":{"type":"string"},"keyLabel":{"type":"string"},"label":{"type":"string"},"markdown":{"type":"string"},"name":{"type":"string"},"optional":{"type":"boolean"},"parameterizedSubTypes":{"items":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"type":"array"},"pluginType":{"type":"string"},"sensible":{"type":"boolean"},"sensitive":{"type":"boolean","writeOnly":true},"type":{"enum":["STRING","BYTE","SHORT","INTEGER","LONG","FLOAT","DOUBLE","BOOLEAN","MAP","COLLECTION","POJO","PLUGIN"],"type":"string"},"unconfigurable":{"type":"boolean"},"userMarkdown":{"type":"string"}},"type":"object"},"RecipientDto":{"properties":{"businessId":{"description":"Recipient business identifier","type":"string"},"description":{"description":"Recipient description","type":"string"},"recipientLabel":{"description":"Recipient label","type":"string"}},"type":"object"},"ResourceAccess":{"type":"object"},"ResourceMapping":{"properties":{"autorizedRoles":{"items":{"$ref":"#/components/schemas/RoleAuthority"},"type":"array"},"controllerSimpleName":{"type":"string"},"fullPath":{"type":"string"},"method":{"enum":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS","TRACE"],"type":"string"},"resourceAccess":{"$ref":"#/components/schemas/ResourceAccess"},"resourceMappingId":{"type":"string"}},"type":"object"},"RoleAuthority":{"properties":{"authority":{"type":"string"},"authorizedIpAdresses":{"items":{"type":"string"},"type":"array"},"roleName":{"type":"string"}},"type":"object"},"RuleDTO":{"description":"Rule to create","properties":{"id":{"type":"string"},"recipientsBusinessIds":{"items":{"type":"string"},"type":"array"},"rulePluginConfiguration":{"$ref":"#/components/schemas/PluginConfiguration"}},"type":"object"}},"securitySchemes":{"REGARDS_OAUTH2":{"flows":{"password":{"scopes":{},"tokenUrl":"https://regardsoss.github.io/api/v1/rs-authentication/oauth/token"}},"type":"oauth2"}}},"info":{"description":"Notification management API","license":{"name":"GPL-3.0"},"title":"MICROSERVICE NOTIFIER","version":"1.15.0"},"openapi":"3.0.1","paths":{"/maintenance":{"get":{"operationId":"retrieveTenantsInMaintenance","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelMapStringMaintenanceInfo"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/disable":{"put":{"operationId":"unSetMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/maintenance/{tenant}/enable":{"put":{"operationId":"setMaintenance","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelVoid"}}},"description":"OK"}},"tags":["maintenance-controller"]}},"/microservice/configuration":{"get":{"operationId":"exportConfiguration","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]},"post":{"operationId":"importConfiguration","requestBody":{"content":{"multipart/form-data":{"schema":{"properties":{"file":{"format":"binary","type":"string"}},"required":["file"],"type":"object"}}}},"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleImportReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/configuration/enabled":{"get":{"operationId":"isConfigurationEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready":{"get":{"operationId":"isReady","responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/ModuleReadinessReportObject"}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/ready/enabled":{"get":{"operationId":"isReadyEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart":{"get":{"operationId":"restart","responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/ModuleRestartReport"},"type":"array","uniqueItems":true}}},"description":"OK"}},"tags":["module-manager-controller"]}},"/microservice/restart/enabled":{"get":{"operationId":"isRestartEnabled","responses":{"200":{"description":"OK"}},"tags":["module-manager-controller"]}},"/plugins":{"get":{"operationId":"getPlugins","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginMetaData"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/cache":{"delete":{"operationId":"emptyCache","responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/configs":{"get":{"description":"Return a list of plugin configurations for a specific type","operationId":"getPluginConfigurationsByType","parameters":[{"in":"query","name":"pluginType","required":false,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"All plugin configurations for a specific type were retrieved."}},"summary":"Get plugin configurations","tags":["plugin-controller"]}},"/plugins/configs/{configBusinessId}":{"get":{"operationId":"getPluginConfigurationDirectAccess","parameters":[{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}":{"get":{"operationId":"getPluginMetaDataById","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginMetaData"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config":{"get":{"operationId":"getPluginConfigurations","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]},"post":{"operationId":"savePluginConfiguration","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugins/{pluginId}/config/{configBusinessId}":{"delete":{"operationId":"deletePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"tags":["plugin-controller"]},"get":{"operationId":"getPluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]},"put":{"operationId":"updatePluginConfiguration","parameters":[{"in":"path","name":"pluginId","required":true,"schema":{"type":"string"}},{"in":"path","name":"configBusinessId","required":true,"schema":{"type":"string"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/plugintypes":{"get":{"operationId":"getPluginTypes","parameters":[{"in":"query","name":"available","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelString"},"type":"array"}}},"description":"OK"}},"tags":["plugin-controller"]}},"/recipient":{"get":{"deprecated":true,"description":"List all recipient","operationId":"getRecipients","parameters":[{"description":"Request page","in":"query","name":"page","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"items":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"},"type":"array"}}},"description":"All recipients"}},"summary":"List all recipient","tags":["recipient-controller"]},"post":{"description":"Create a recipient","operationId":"createRecipient","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"Created Recipient"}},"summary":"Create a recipient","tags":["recipient-controller"]},"put":{"description":"Update a recipient","operationId":"updateRecipient","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/PluginConfiguration"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelPluginConfiguration"}}},"description":"Updated Recipient"}},"summary":"Update a recipient","tags":["recipient-controller"]}},"/recipient/{id}":{"delete":{"description":"Delete a recipient","operationId":"deleteRecipient","parameters":[{"description":"Recipient to delete id","in":"path","name":"businessId","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"summary":"Delete a recipient","tags":["recipient-controller"]}},"/recipients":{"get":{"description":"List all recipient if missing parameter, or only recipients enabling the direct notification or only them not enabling the direct notification","operationId":"findRecipients","parameters":[{"description":"Recipient enable or not the direct notification","in":"query","name":"directNotificationEnabled","required":false,"schema":{"type":"boolean"}}],"responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/RecipientDto"},"type":"array","uniqueItems":true}}},"description":"List of recipients"}},"summary":"List all recipient","tags":["recipient-dto-controller"]}},"/regards/{tenant}/datasource/status":{"get":{"operationId":"getDataSourceStatus","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/regards/{tenant}/datasource/test":{"get":{"operationId":"testTenantConnection","parameters":[{"in":"path","name":"tenant","required":true,"schema":{"type":"string"}}],"responses":{"200":{"content":{"application/json;charset=UTF-8":{"schema":{"$ref":"#/components/schemas/GenericResponseBody"}}},"description":"OK"}},"tags":["jpa-multitenant-controller"]}},"/rule":{"get":{"description":"List all Rules","operationId":"getRules","parameters":[{"description":"Wanted page","in":"query","name":"page","required":true,"schema":{"$ref":"#/components/schemas/Pageable"}}],"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/PagedModelEntityModelRuleDTO"}}},"description":"All Rules"}},"summary":"List all rules","tags":["rule-controller"]},"post":{"description":"Create a Rule","operationId":"createRule","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RuleDTO"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelRuleDTO"}}},"description":"Created Rule"}},"summary":"Create a rule","tags":["rule-controller"]},"put":{"description":"Update a Rule","operationId":"updateRule","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/RuleDTO"}}},"required":true},"responses":{"200":{"content":{"*/*":{"schema":{"$ref":"#/components/schemas/EntityModelRuleDTO"}}},"description":"Updated Rule"}},"summary":"Update a rule","tags":["rule-controller"]}},"/rule/{id}":{"delete":{"description":"Delete a rule","operationId":"deleteRule","parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}},"summary":"Delete a rule","tags":["rule-controller"]}},"/security/resources":{"get":{"operationId":"getAllResources","responses":{"200":{"content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/ResourceMapping"},"type":"array"}}},"description":"OK"}},"tags":["security-resources-controller"]}},"/shutdown/immediate":{"post":{"operationId":"immediateShutdown","responses":{"200":{"description":"OK"}},"tags":["manager-controller"]}}},"security":[{"REGARDS_OAUTH2":[]}],"servers":[{"description":"Generated server url","url":"https://regardsoss.github.io/api/v1/rs-notifier"}]}'),a={id:"backend-notifier-rest-api",title:"RS-NOTIFIER microservice API",sidebar_label:"REST API",slug:"/development/backend/services/notifier/guides/rest/api",hide_title:!0,hide_table_of_contents:!0},p=void 0,c={unversionedId:"development/backend/regards/notifier/api-guides/rest/backend-notifier-rest-api",id:"development/backend/regards/notifier/api-guides/rest/backend-notifier-rest-api",title:"RS-NOTIFIER microservice API",description:"",source:"@site/docs/development/backend/regards/notifier/api-guides/rest/rs-notifier-api-swagger.mdx",sourceDirName:"development/backend/regards/notifier/api-guides/rest",slug:"/development/backend/services/notifier/guides/rest/api",permalink:"/docs/next/development/backend/services/notifier/guides/rest/api",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/api-guides/rest/rs-notifier-api-swagger.mdx",tags:[],version:"current",frontMatter:{id:"backend-notifier-rest-api",title:"RS-NOTIFIER microservice API",sidebar_label:"REST API",slug:"/development/backend/services/notifier/guides/rest/api",hide_title:!0,hide_table_of_contents:!0},sidebar:"dev",previous:{title:"Import plugin conf",permalink:"/docs/next/development/backend/notifier/guides/rest/import-plugin-configuration"},next:{title:"Overview",permalink:"/docs/next/development/backend/services/notifier/plugins/intro"}},l={},m=[],u={toc:m},d="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(s.A,{spec:o,mdxType:"RegardsApiDoc"}))}g.isMDXComponent=!0},26903:()=>{},15915:()=>{},67889:()=>{},33880:()=>{},14834:()=>{},20922:()=>{},81912:()=>{}}]);