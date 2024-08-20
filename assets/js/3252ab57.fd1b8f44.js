"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[97243],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(a),d=i,v=g["".concat(o,".").concat(d)]||g[d]||u[d]||r;return a?n.createElement(v,s(s({ref:t},p),{},{components:a})):n.createElement(v,s({ref:t},p))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[g]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12602:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={id:"backend-catalog-service-plugins",title:"Catalog service plugins",sidebar_label:"Catalog service",slug:"/development/backend/services/catalog/service-plugins/"},s=void 0,l={unversionedId:"development/backend/regards/catalog/plugins/backend-catalog-service-plugins",id:"version-1.15/development/backend/regards/catalog/plugins/backend-catalog-service-plugins",title:"Catalog service plugins",description:"Overview",source:"@site/versioned_docs/version-1.15/development/backend/regards/catalog/plugins/catalog-service-plugins.md",sourceDirName:"development/backend/regards/catalog/plugins",slug:"/development/backend/services/catalog/service-plugins/",permalink:"/docs/development/backend/services/catalog/service-plugins/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/catalog/plugins/catalog-service-plugins.md",tags:[],version:"1.15",frontMatter:{id:"backend-catalog-service-plugins",title:"Catalog service plugins",sidebar_label:"Catalog service",slug:"/development/backend/services/catalog/service-plugins/"},sidebar:"dev",previous:{title:"Product file restoration API",permalink:"/docs/development/backend/services/catalog/file-restoration-api/"},next:{title:"Search engine",permalink:"/docs/development/backend/services/catalog/search-engine-plugins/"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Usages",id:"usages",level:2},{value:"Apply service on one entity",id:"apply-service-on-one-entity",level:3},{value:"Apply service on one multiple entities",id:"apply-service-on-one-multiple-entities",level:3},{value:"Apply service on entities from a search query",id:"apply-service-on-entities-from-a-search-query",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"Implementation",id:"implementation",level:2}],p={toc:c},g="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(g,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This extension point allows to provide a business processing on catalog meda data. ")),(0,i.kt)("p",null,"Each business service plugin is accessible through a unique microservice endpoint :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"@POST http://<host>:<port>/api/v1/rs-catalog/services/{servideId}/apply\n")),(0,i.kt)("p",null,"To define on which entities of the catalog the service must be applied you have to provide a json body like :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "entityId": "", // [Optional] Entity identifier to apply plugin service on one uniq entity\n    "entitiesId":[], // [Optional] Entities ids to apply plugin service on multiple entities\n    "entityType":"", // [Optional] One of [COLLECTION, DATA, DATASET, DOCUMENT] Combined with the search query \'q\' parameter. Entities type to apply plugin service on. \n    "q":"", // [Optional] Search query to apply on catalog to define\n    "dynamicParameters": { // [Optional]\n        // Specific plugin parameters applied at runtime\n    }\n}\n')),(0,i.kt)("p",null,"Each business service plugin return a stream of typed data in the response header. The implemention section of this page explains how to return typed results like ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"XML"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Octet-stream"),"."),(0,i.kt)("h2",{id:"usages"},"Usages"),(0,i.kt)("h3",{id:"apply-service-on-one-entity"},"Apply service on one entity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "entityId": "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1"\n}\n')),(0,i.kt)("h3",{id:"apply-service-on-one-multiple-entities"},"Apply service on one multiple entities"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "entitiesId": [\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V2",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V3"\n    ]\n}\n')),(0,i.kt)("h3",{id:"apply-service-on-entities-from-a-search-query"},"Apply service on entities from a search query"),(0,i.kt)("p",null,"You can see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/backend/services/catalog/search-api/"},"How to build a query")," page. The query is provided in the body like :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "entityType": "DATA",\n    "q": "title:\'test*\' AND date:[2019-01-01T00:00:00 TO 2019-02-01T00:00:00]",\n}\n')),(0,i.kt)("p",null,"For a search query application you can also execlude some entites from the search results by setting the entitiesId parameter :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "entityType": "DATA",\n    "entitiesId": [\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V2",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V3"\n    ],\n    "q": "title:\'test*\' AND date:[2019-01-01T00:00:00 TO 2019-02-01T00:00:00]",\n}\n')),(0,i.kt)("p",null," REGARDS provides many implementation of this extension :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/MultiDownloadPlugin.java"},"MultiDownloadPlugin")," : Allow to download multiple selected entities in one zip archive."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/SampleServicePlugin.java"},"SampleServicePlugin")," : Example implementation")),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/IService.java"},"IService")," : Base interface extended by the specific interfaces defined here under."),(0,i.kt)("p",{parentName:"li"},"To help developpers to make different service application you can also use the specific interfaces :")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/IEntitiesServicePlugin.java"},"IEntitiesServicePlugin")," : To create a service applicable to multiple entities selection.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/ISingleEntityServicePlugin.java"},"ISingleEntityServicePlugin")," : To create a service application only to a single entity selection"))),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"To learn more about how to create your own plugin see ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/backend/framework/modules/plugins/"},"Plugins"),"."),(0,i.kt)("p",null,"You can implements two type of catalog services following the here under exemples :  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(description = "Single entity service plugin", id = SingleEntityServicePlugin.PLUGIN_ID, version = "1.0.0",\n        author = "CS-SI", contact = "regards@c-s.fr", licence = "GPLv3.0", owner = "CNES",\n        url = "https://github.com/RegardsOss")\n@CatalogServicePlugin(applicationModes = { ServiceScope.ONE }, entityTypes = { EntityType.DATA })\npublic class SingleEntityServicePlugin implements ISingleEntityServicePlugin {\n\n    public static final String PLUGIN_ID = "singleEntityPluginId";\n\n    @Autowired\n    private IServiceHelper serviceHelper;\n\n    @Autowired\n    private IAuthenticationResolver authResolver;\n\n    @Override\n    public ResponseEntity<StreamingResponseBody> applyOnEntity(String entityId, HttpServletResponse response) {\n        // Retrieve entity to apply service on\n        Page<DataObject> dos = serviceHelper.getDataObjects(Lists.newArrayList(entityId), 0, 1);\n        // ....\n        // TODO ....\n        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);\n    }\n\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(description = "Multiple entities service plugin", id = MultiEntitiesServicePlugin.PLUGIN_ID, version = "1.0.0",\n        author = "CS-SI", contact = "regards@c-s.fr", licence = "GPLv3.0", owner = "CNES",\n        url = "https://github.com/RegardsOss")\n@CatalogServicePlugin(applicationModes = { ServiceScope.MANY }, entityTypes = { EntityType.DATA })\npublic class MultiEntitiesServicePlugin extends AbstractCatalogServicePlugin implements IEntitiesServicePlugin {\n\n    public static final String PLUGIN_ID = "multiEntitiesPluginId";\n\n    @Autowired\n    private IServiceHelper serviceHelper;\n\n    @Autowired\n    private IAuthenticationResolver authResolver;\n\n    @Override\n    public ResponseEntity<StreamingResponseBody> applyOnEntities(List<String> entitiesId,\n            HttpServletResponse response) {\n        // Retrieve entities to apply service on\n        Page<DataObject> dos = serviceHelper.getDataObjects(Lists.newArrayList(entitiesId), 0, 100);\n        while (dos.hasNext()) {\n            Pageable nextPage = dos.nextPageable();\n            dos = serviceHelper.getDataObjects(Lists.newArrayList(entitiesId), nextPage.getPageNumber(),\n                                               nextPage.getPageSize());\n        }\n        // TODO ....\n        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);\n    }\n\n    @Override\n    public ResponseEntity<StreamingResponseBody> applyOnQuery(String pOpenSearchQuery, EntityType pEntityType,\n            HttpServletResponse response) {\n        // Retrieve entities to apply service on\n        Page<DataObject> dos;\n        try {\n            dos = serviceHelper.getDataObjects(pOpenSearchQuery, 0, 100);\n            while (dos.hasNext()) {\n                Pageable nextPage = dos.nextPageable();\n                dos = serviceHelper.getDataObjects(pOpenSearchQuery, nextPage.getPageNumber(), nextPage.getPageSize());\n            }\n        } catch (OpenSearchParseException e) {\n            return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, "Error retrieving entities from catalog");\n        }\n        // TODO ....\n        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);\n    }\n\n}\n')),(0,i.kt)("p",null,"NOTE : "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@CatalogServicePlugin : Annotation to define scope of service plugin."),(0,i.kt)("li",{parentName:"ul"},"AbstractCatalogServicePlugin : Allow to add the common plugin parameter to associate a service to all datasets of the catalog"),(0,i.kt)("li",{parentName:"ul"},"A tutorial on how to create a plugin is available ",(0,i.kt)("a",{target:"_blank",href:a(3525).Z},"here"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/SampleServicePlugin.java"},"SampleServicePlugin")," is an exemple of how to implements this extension point to create your own business logic.  "),(0,i.kt)("p",null,"In order to help you retrieving datas from the queried parameters the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalogue-services-helper/src/main/java/fr/cnes/regards/modules/catalog/services/helper/ServiceHelper.java"},"ServiceHelper")," can be autowired on any of your plugin implementations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate IServiceHelper serviceHelper;\n")),(0,i.kt)("p",null,"The exemple service :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Extends ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/AbstractCatalogServicePlugin.java"},"AbstractCatalogServicePlugin")," to add a standard plugin parameter to allow access to the service on specified catalog datasets. The Administration HMI allows you to define access to catalog services for each dataset."),(0,i.kt)("li",{parentName:"ul"},"Implements the two interfaces ",(0,i.kt)("inlineCode",{parentName:"li"},"IEntitiesServicePlugin")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ISingleEntityServicePlugin")," to allow application with one or many entities."),(0,i.kt)("li",{parentName:"ul"},"Shows you how to specify the service return type (octet-stream, image, json or xml) through the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalogue-services-helper/src/main/java/fr/cnes/regards/modules/catalog/services/helper/CatalogPluginResponseFactory.java"},"CatalogPluginResponseFactory")," class.")))}u.isMDXComponent=!0},3525:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/regards-backend-tutorial-67ece5d5bea022c4ddc0721f69bd6016.odp"}}]);