"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[74870],{30308:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=s(74848),t=s(28453);const a={id:"backend-catalog-service-plugins",title:"Catalog service plugins",sidebar_label:"Catalog service",slug:"/development/backend/services/catalog/service-plugins/"},r=void 0,l={id:"development/backend/regards/catalog/plugins/backend-catalog-service-plugins",title:"Catalog service plugins",description:"Overview",source:"@site/versioned_docs/version-1.14/development/backend/regards/catalog/plugins/catalog-service-plugins.md",sourceDirName:"development/backend/regards/catalog/plugins",slug:"/development/backend/services/catalog/service-plugins/",permalink:"/docs/1.14/development/backend/services/catalog/service-plugins/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/catalog/plugins/catalog-service-plugins.md",tags:[],version:"1.14",frontMatter:{id:"backend-catalog-service-plugins",title:"Catalog service plugins",sidebar_label:"Catalog service",slug:"/development/backend/services/catalog/service-plugins/"},sidebar:"dev",previous:{title:"Search",permalink:"/docs/1.14/development/backend/services/catalog/search-api/"},next:{title:"Search engine",permalink:"/docs/1.14/development/backend/services/catalog/search-engine-plugins/"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"Usages",id:"usages",level:2},{value:"Apply service on one entity",id:"apply-service-on-one-entity",level:3},{value:"Apply service on one multiple entities",id:"apply-service-on-one-multiple-entities",level:3},{value:"Apply service on entities from a search query",id:"apply-service-on-entities-from-a-search-query",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"Implementation",id:"implementation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This extension point allows to provide a business processing on catalog meda data."})}),"\n",(0,i.jsx)(n.p,{children:"Each business service plugin is accessible through a unique microservice endpoint :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"@POST http://<host>:<port>/api/v1/rs-catalog/services/{servideId}/apply\n"})}),"\n",(0,i.jsx)(n.p,{children:"To define on which entities of the catalog the service must be applied you have to provide a json body like :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "entityId": "", // [Optional] Entity identifier to apply plugin service on one uniq entity\n    "entitiesId":[], // [Optional] Entities ids to apply plugin service on multiple entities\n    "entityType":"", // [Optional] One of [COLLECTION, DATA, DATASET, DOCUMENT] Combined with the search query \'q\' parameter. Entities type to apply plugin service on. \n    "q":"", // [Optional] Search query to apply on catalog to define\n    "dynamicParameters": { // [Optional]\n        // Specific plugin parameters applied at runtime\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Each business service plugin return a stream of typed data in the response header. The implemention section of this page explains how to return typed results like ",(0,i.jsx)(n.code,{children:"JSON"}),", ",(0,i.jsx)(n.code,{children:"XML"}),", ",(0,i.jsx)(n.code,{children:"Image"})," or ",(0,i.jsx)(n.code,{children:"Octet-stream"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"usages",children:"Usages"}),"\n",(0,i.jsx)(n.h3,{id:"apply-service-on-one-entity",children:"Apply service on one entity"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "entityId": "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"apply-service-on-one-multiple-entities",children:"Apply service on one multiple entities"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "entitiesId": [\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V2",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V3"\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"apply-service-on-entities-from-a-search-query",children:"Apply service on entities from a search query"}),"\n",(0,i.jsxs)(n.p,{children:["You can see the ",(0,i.jsx)(n.a,{href:"/docs/1.14/development/backend/services/catalog/search-api/",children:"How to build a query"})," page. The query is provided in the body like :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "entityType": "DATA",\n    "q": "title:\'test*\' AND date:[2019-01-01T00:00:00 TO 2019-02-01T00:00:00]",\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"For a search query application you can also execlude some entites from the search results by setting the entitiesId parameter :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "entityType": "DATA",\n    "entitiesId": [\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V2",\n        "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V3"\n    ],\n    "q": "title:\'test*\' AND date:[2019-01-01T00:00:00 TO 2019-02-01T00:00:00]",\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"REGARDS provides many implementation of this extension :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/MultiDownloadPlugin.java",children:"MultiDownloadPlugin"})," : Allow to download multiple selected entities in one zip archive."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/SampleServicePlugin.java",children:"SampleServicePlugin"})," : Example implementation"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/IService.java",children:"IService"})," : Base interface extended by the specific interfaces defined here under."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To help developpers to make different service application you can also use the specific interfaces :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/IEntitiesServicePlugin.java",children:"IEntitiesServicePlugin"})," : To create a service applicable to multiple entities selection."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/ISingleEntityServicePlugin.java",children:"ISingleEntityServicePlugin"})," : To create a service application only to a single entity selection"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about how to create your own plugin see ",(0,i.jsx)(n.a,{href:"/docs/1.14/development/backend/framework/modules/plugins/",children:"Plugins"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You can implements two type of catalog services following the here under exemples :"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Plugin(description = "Single entity service plugin", id = SingleEntityServicePlugin.PLUGIN_ID, version = "1.0.0",\n        author = "CS-SI", contact = "regards@c-s.fr", licence = "GPLv3.0", owner = "CNES",\n        url = "https://github.com/RegardsOss")\n@CatalogServicePlugin(applicationModes = { ServiceScope.ONE }, entityTypes = { EntityType.DATA })\npublic class SingleEntityServicePlugin implements ISingleEntityServicePlugin {\n\n    public static final String PLUGIN_ID = "singleEntityPluginId";\n\n    @Autowired\n    private IServiceHelper serviceHelper;\n\n    @Autowired\n    private IAuthenticationResolver authResolver;\n\n    @Override\n    public ResponseEntity<StreamingResponseBody> applyOnEntity(String entityId, HttpServletResponse response) {\n        // Retrieve entity to apply service on\n        Page<DataObject> dos = serviceHelper.getDataObjects(Lists.newArrayList(entityId), 0, 1);\n        // ....\n        // TODO ....\n        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);\n    }\n\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Plugin(description = "Multiple entities service plugin", id = MultiEntitiesServicePlugin.PLUGIN_ID, version = "1.0.0",\n        author = "CS-SI", contact = "regards@c-s.fr", licence = "GPLv3.0", owner = "CNES",\n        url = "https://github.com/RegardsOss")\n@CatalogServicePlugin(applicationModes = { ServiceScope.MANY }, entityTypes = { EntityType.DATA })\npublic class MultiEntitiesServicePlugin extends AbstractCatalogServicePlugin implements IEntitiesServicePlugin {\n\n    public static final String PLUGIN_ID = "multiEntitiesPluginId";\n\n    @Autowired\n    private IServiceHelper serviceHelper;\n\n    @Autowired\n    private IAuthenticationResolver authResolver;\n\n    @Override\n    public ResponseEntity<StreamingResponseBody> applyOnEntities(List<String> entitiesId,\n            HttpServletResponse response) {\n        // Retrieve entities to apply service on\n        Page<DataObject> dos = serviceHelper.getDataObjects(Lists.newArrayList(entitiesId), 0, 100);\n        while (dos.hasNext()) {\n            Pageable nextPage = dos.nextPageable();\n            dos = serviceHelper.getDataObjects(Lists.newArrayList(entitiesId), nextPage.getPageNumber(),\n                                               nextPage.getPageSize());\n        }\n        // TODO ....\n        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);\n    }\n\n    @Override\n    public ResponseEntity<StreamingResponseBody> applyOnQuery(String pOpenSearchQuery, EntityType pEntityType,\n            HttpServletResponse response) {\n        // Retrieve entities to apply service on\n        Page<DataObject> dos;\n        try {\n            dos = serviceHelper.getDataObjects(pOpenSearchQuery, 0, 100);\n            while (dos.hasNext()) {\n                Pageable nextPage = dos.nextPageable();\n                dos = serviceHelper.getDataObjects(pOpenSearchQuery, nextPage.getPageNumber(), nextPage.getPageSize());\n            }\n        } catch (OpenSearchParseException e) {\n            return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, "Error retrieving entities from catalog");\n        }\n        // TODO ....\n        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);\n    }\n\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"NOTE :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"@CatalogServicePlugin : Annotation to define scope of service plugin."}),"\n",(0,i.jsx)(n.li,{children:"AbstractCatalogServicePlugin : Allow to add the common plugin parameter to associate a service to all datasets of the catalog"}),"\n",(0,i.jsxs)(n.li,{children:["A tutorial on how to create a plugin is available ",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(34753).A+"",children:"here"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/SampleServicePlugin.java",children:"SampleServicePlugin"})," is an exemple of how to implements this extension point to create your own business logic."]}),"\n",(0,i.jsxs)(n.p,{children:["In order to help you retrieving datas from the queried parameters the ",(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalogue-services-helper/src/main/java/fr/cnes/regards/modules/catalog/services/helper/ServiceHelper.java",children:"ServiceHelper"})," can be autowired on any of your plugin implementations."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Autowired\nprivate IServiceHelper serviceHelper;\n"})}),"\n",(0,i.jsx)(n.p,{children:"The exemple service :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Extends ",(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/AbstractCatalogServicePlugin.java",children:"AbstractCatalogServicePlugin"})," to add a standard plugin parameter to allow access to the service on specified catalog datasets. The Administration HMI allows you to define access to catalog services for each dataset."]}),"\n",(0,i.jsxs)(n.li,{children:["Implements the two interfaces ",(0,i.jsx)(n.code,{children:"IEntitiesServicePlugin"})," and ",(0,i.jsx)(n.code,{children:"ISingleEntityServicePlugin"})," to allow application with one or many entities."]}),"\n",(0,i.jsxs)(n.li,{children:["Shows you how to specify the service return type (octet-stream, image, json or xml) through the ",(0,i.jsx)(n.a,{href:"https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalogue-services-helper/src/main/java/fr/cnes/regards/modules/catalog/services/helper/CatalogPluginResponseFactory.java",children:"CatalogPluginResponseFactory"})," class."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},34753:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/files/regards-backend-tutorial-67ece5d5bea022c4ddc0721f69bd6016.odp"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(96540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);